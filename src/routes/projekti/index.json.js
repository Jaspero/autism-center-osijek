import admin from 'firebase-admin';

export async function get(req, res) {
  admin.firestore().collection('projects')
    .get()
    .then(snaps => {
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });

      res.end(JSON.stringify({
          projects:
              snaps.docs.map(item => ({
                  id: item.id,
                  ...item.data()
              }))
          }
      ));
    })
    .catch(error => {
      res.writeHead(500, {
        'Content-Type': 'application/json'
      });
      res.end(JSON.stringify({error: error.toString()}))
    })
}
