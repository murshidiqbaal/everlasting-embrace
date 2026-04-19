// Vercel Serverless Function (Node.js runtime)
// Wraps the TanStack Start SSR server's Web-standard fetch handler.
// Converts Node.js IncomingMessage/ServerResponse ↔ Web Request/Response.

import { createServer } from "node:http";
import server from "../dist/server/server.js";

// Vercel calls this as a Node.js serverless function
export default async function handler(req, res) {
  const origin = `https://${req.headers.host || "localhost"}`;
  const url = new URL(req.url, origin);

  // Collect request body
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  const body =
    req.method !== "GET" && req.method !== "HEAD" && chunks.length > 0
      ? Buffer.concat(chunks)
      : undefined;

  // Build a Web API Request
  const webRequest = new Request(url.toString(), {
    method: req.method,
    headers: new Headers(
      Object.entries(req.headers).flatMap(([k, v]) =>
        Array.isArray(v) ? v.map((val) => [k, val]) : [[k, v]],
      ),
    ),
    body,
  });

  // Run through the TanStack Start fetch handler
  const webResponse = await server.fetch(webRequest);

  // Forward status & headers
  res.statusCode = webResponse.status;
  webResponse.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  // Stream the body
  if (webResponse.body) {
    const reader = webResponse.body.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(value);
    }
  }

  res.end();
}
