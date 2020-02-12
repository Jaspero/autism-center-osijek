import admin from 'firebase-admin';
import {formatDate} from '../../shared/utility/format-date';

export async function get(req, res) {
  const {cursor, pageSize = 8} = req.query;
  const collection = admin.firestore().collection('news');

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
        news: snaps.docs.reduce((acc, cur, ind) => {
          if (ind < pageSize) {

            const data = cur.data();
            data.date = formatDate(data.date);

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
