function getPayload(req) {
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch {
      return null;
    }
  }

  if (req.body && typeof req.body === 'object') {
    return req.body;
  }

  return null;
}

import { handleContactSubmission } from '../lib/contact-handler.js';

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(405).json({ message: 'Method not allowed.' });
  }

  const { statusCode, body } = await handleContactSubmission(getPayload(req), process.env);
  return res.status(statusCode).json(body);
}
