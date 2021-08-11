//this is called webhook.js although you can have different endpoints for different events firing off
import { buffer } from 'micro'
import * as admin from 'firebase-admin'
//admin has access to everything
//we need 

//secure a connection to firebase from the server
const serviceAccount = require('../../../permissions.json')

const app = !admin.apps.length ? admin.initializeApp({ credential: admin.credential.cert(serviceAccount)}) : admin.app()

//establish a connection to stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const endpointSecret = process.env.STRIPE_SIGNING_SECRET

export default async (req, res) => {
   if(req.method === 'POST'){
    const requestBuffer = await buffer(req)
    const payload = await requestBuffer.toString()
    const sig = req.headers['x-stripe-signature']

    let event;

    //verify the signature
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret)
    } catch(
  }
};