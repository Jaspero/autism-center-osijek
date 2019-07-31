import admin from 'firebase-admin';

export async function get(req, res) {
  const {cursor, pageSize = 10} = req.query;

  let lookUpSize = pageSize + 1;
  let db = admin.firestore().collection('projects')
    .limit(lookUpSize);

  if (cursor) {
    const cur = await admin.firestore().collection('projects').doc(cursor).get();
    db = db.startAt(cur)
  }

  db
    .get()
    .then(snaps => {
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });

      res.end(JSON.stringify({
        hasMore: snaps.docs.length === lookUpSize ? snaps.docs[snaps.docs.length - 1].id : null,
        projects: snaps.docs.reduce((acc, cur, ind) => {
          if (ind < pageSize) {
            const data = cur.data();
            acc.push({id: cur.id, ...data});
          }
          return acc;
        }, [])
      }));
    })
    .catch(error => {
      res.writeHead(500, {
        'Content-Type': 'application/json'
      });
      res.end(JSON.stringify({error: error.toString()}))
    })
}
