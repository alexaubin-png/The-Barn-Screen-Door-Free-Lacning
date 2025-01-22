const paypal = require('@paypal/checkout-server-sdk')

const enviorment = new paypal.core.SandboxEnviorment('<Client_ID>', "<CLIENT_SECRET>")
const client = new paypal.core.PayPalHttpClient(enviorment);



app.post('/api/pay', async (req,res)=>{
const request = new paypal.core.OrderCreateRequest()
request.requestBody({
intent: 'CAPTURE',
purchase_units: [{
amount: {
    currency_code: 'USD',
    value: req.body.amount
    }   
  }]
 })

 try {
    const order = await client.execute(request);
    res.status(200).json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
})

