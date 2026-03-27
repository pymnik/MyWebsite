module.exports = async function handler(req, res) {
  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  const { name, email, message } = body;

  console.log('Key exists:', !!process.env.WEB3FORMS_KEY);

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_KEY,
        name,
        email,
        message,
      }),
    });

    const text = await response.text(); 
    console.log('Web3Forms raw response:', text);

    const data = JSON.parse(text);

    if (data.success) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(500).json({ error: 'Submission failed', detail: data });
    }
  } catch (err) {
    console.log('Error:', err.message);
    return res.status(500).json({ error: err.message });
  }
};