//this is called webhook.js although you can have different endpoints for different events firing off
export default async (req, res) => {
   if(req.method === 'GET'){
    const webhook = await Webhook.findOne({});
    res.json(webhook);
  }
  else if(req.method === 'POST'){
    const webhook = await Webhook.findOne({});
    res.json(webhook);
  }
  
}