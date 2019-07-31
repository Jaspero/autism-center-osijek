const functions = require('firebase-functions');
const express = require('express');
const { sapper } = require('./__sapper__/build/server/server');

const app = express().use(sapper.middleware());

exports.ssr = functions.https.onRequest(app);
