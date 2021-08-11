//this is called webhook.js although you can have different endpoints for different events firing off
import { buffer } from 'micro'
import * as admin from 'firebase-admin'
//admin has access to everything
//we need 



export default async (req, res) => {
   if(req.method === 'GET'){
    const webhook = await Webhook.findOne({});
    res.json(webhook);
  }
  else if(req.method === 'POST'){
    const webhook = await Webhook.findOne({});
    res.json(webhook);
  }
  else if(req.method === 'PUT'){
    const webhook = await Webhook.findOne({});
    res.json(webhook);
  }
  else if(req.method === 'DELETE'){
    const webhook = await Webhook.findOne({});
    res.json(webhook);
  }
};