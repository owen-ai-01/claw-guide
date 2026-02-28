import http from 'http';

const port = process.env.PORT || 3000;

const html = `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Claw Guide - AI 出海导航</title>
  <style>
    :root { --bg:#0b1020; --card:#131a2f; --text:#e7ecff; --muted:#9bb0ff; --accent:#5b8cff; }
    * { box-sizing: border-box; }
    body { margin:0; font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; background: linear-gradient(160deg,#0b1020,#121933 55%,#1a2246); color:var(--text); }
    .wrap { min-height:100vh; display:grid; place-items:center; padding:24px; }
    .card { width:min(920px,100%); background:rgba(19,26,47,.85); border:1px solid rgba(155,176,255,.2); backdrop-filter: blur(6px); border-radius:18px; padding:36px; box-shadow:0 12px 40px rgba(0,0,0,.35); }
    h1 { margin:0 0 10px; font-size: clamp(28px, 5vw, 46px); }
    p { color:var(--muted); font-size:18px; margin:0; line-height:1.7; }
    .btns { display:flex; gap:12px; margin-top:24px; flex-wrap:wrap; }
    a.btn { text-decoration:none; color:white; background:var(--accent); padding:10px 16px; border-radius:10px; font-weight:600; }
    a.btn.ghost { background:transparent; border:1px solid rgba(155,176,255,.4); color:var(--text); }
    .meta { margin-top:26px; font-size:14px; color:#a8b8f8; }
    code { background:#0b1020; padding:2px 8px; border-radius:8px; }
  </style>
</head>
<body>
  <main class="wrap">
    <section class="card">
      <h1>Claw Guide</h1>
      <p>一个面向独立开发者的 <b>AI 出海工具与方法导航站</b>。<br/>当前是 Node.js 首版首页，后续会补齐工具目录、教程、案例与 SEO 页面。</p>
      <div class="btns">
        <a class="btn" href="#">开始探索</a>
        <a class="btn ghost" href="https://github.com/owen-ai-01/claw-guide" target="_blank" rel="noreferrer">GitHub Repo</a>
      </div>
      <div class="meta">Status: <code>v0.1 Landing Ready</code> · Powered by Node.js HTTP Server</div>
    </section>
  </main>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'content-type': 'application/json; charset=utf-8' });
    return res.end(JSON.stringify({ ok: true, service: 'claw-guide' }));
  }
  res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
  res.end(html);
});

server.listen(port, () => {
  console.log(`claw-guide running on http://0.0.0.0:${port}`);
});
