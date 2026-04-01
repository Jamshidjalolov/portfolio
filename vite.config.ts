import type { IncomingMessage, ServerResponse } from 'node:http';
import { defineConfig, loadEnv, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { handleContactSubmission } from './lib/contact-handler.js';

function readJsonBody(req: IncomingMessage) {
  return new Promise<unknown>((resolve) => {
    let rawBody = '';

    req.on('data', (chunk) => {
      rawBody += chunk;
    });

    req.on('end', () => {
      if (!rawBody) {
        resolve(null);
        return;
      }

      try {
        resolve(JSON.parse(rawBody));
      } catch {
        resolve(null);
      }
    });

    req.on('error', () => {
      resolve(null);
    });
  });
}

function sendJson(res: ServerResponse, statusCode: number, body: unknown) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(body));
}

function contactApiPlugin(env: Record<string, string>): Plugin {
  return {
    name: 'contact-api-dev',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const pathname = req.url?.split('?')[0];

        if (pathname !== '/api/contact') {
          next();
          return;
        }

        if (req.method === 'OPTIONS') {
          res.statusCode = 204;
          res.end();
          return;
        }

        if (req.method !== 'POST') {
          sendJson(res, 405, { message: 'Method not allowed.' });
          return;
        }

        const payload = await readJsonBody(req);
        const result = await handleContactSubmission(payload, {
          ...process.env,
          ...env,
        });

        sendJson(res, result.statusCode, result.body);
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), contactApiPlugin(env)],
  };
});
