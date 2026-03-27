export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

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

  if (data.success) {
    return res.status(200).json({ success: true });
  } else {
    return res.status(500).json({ error: 'Submission failed', detail: data });
  }
}