module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log('Key exists:', !!process.env.WEB3FORMS_KEY);

  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  const { name, email, message } = body;

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

  const data = await response.json();
  console.log('Web3Forms response:', data);

  if (data.success) {
    return res.status(200).json({ success: true });
  } else {
    return res.status(500).json({ error: 'Submission failed', detail: data });
  }
};