import admin from 'firebase-admin';

export async function get(req, res) {
    const doc = admin.firestore().collection('analytics').doc('visitors');
    const data = (await doc.get()).data();

    await doc.update({count: data.count + 1});

    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(
        {count: data.count}
    ))
}
