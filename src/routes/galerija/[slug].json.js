import admin from 'firebase-admin';

export function get(req, res) {
    const { slug } = req.params;

    admin.firestore().collection('gallery')
        .where('url', '==', slug)
        .get()
        .then(items => {
            if (!items.docs[0]) {
                throw new Error('Not found');
            }

            res.writeHead(200, {
                'Content-Type': 'application/json'
            });

            const data = items.docs[0].data();
            data.date = new Date(data.date).toLocaleDateString('en-GB');

            res.end(JSON.stringify(data));
        })
        .catch(error => {
            res.writeHead(404, {
                'Content-Type': 'application/json'
            });

            res.end(JSON.stringify({
                message: `Not found`
            }));
        })
}
