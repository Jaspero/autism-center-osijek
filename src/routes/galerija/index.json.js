import admin from 'firebase-admin';

export async function get(req, res) {
  const {cursor, pageSize = 10} = req.query;
  const collection = admin.firestore().collection('gallery');

  let lookUpSize = pageSize + 1;
  let db = collection
    .orderBy('date', 'desc')
    .limit(lookUpSize);

  if (cursor) {
    const cur = await collection.doc(cursor).get();
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
        gallery: snaps.docs.reduce((acc, cur, ind) => {
          if (ind < pageSize) {

            const data = cur.data();
            data.date = new Date(data.date).toLocaleDateString('hr-HR');
            data.viewAll = data.images.length > 6;
            data.images = data.images.slice(0, 6);

            acc.push(data);
          }
          return acc;
        }, [])
      }));
    })
    .catch(error => {
      res.writeHead(500, {
        'Content-Type': 'application/json'
      });
      res.end({error: error.toString()})
    })
}
