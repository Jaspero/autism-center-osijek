import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import admin from 'firebase-admin';
import * as sapper from '@sapper/server';
import {json} from 'body-parser';
import {ENV_CONFIG} from '../env-config';

admin.initializeApp(ENV_CONFIG.firebase);

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

if (dev) {
	polka() // You can also use Express
		.use(
			json(),
			compression({ threshold: 0 }),
			sirv('static', { dev }),
			sapper.middleware()
		)
		.listen(PORT, err => {
			if (err) {
				console.log('error', err);
			}
		});
}

export { sapper };
