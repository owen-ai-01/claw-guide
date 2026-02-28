import http from 'http';

const port = process.env.PORT || 3000;

const content = {
  en: {
    title: 'Claw Guide - OpenClaw Guides & Tutorials',
    brand: 'Claw Guide',
    headline: 'OpenClaw Guide for Builders',
    desc: 'A practical guide hub for OpenClaw: introduction, docs links, setup tutorials, and real-world use cases.',
    ctaStart: 'Get Started',
    ctaDocs: 'OpenClaw Docs',
    ctaGithub: 'GitHub Repo',
    langLabel: 'Language',
    switchText: '中文',
    switchHref: '/zh',
    sections: [
      { h: 'What is OpenClaw?', p: 'OpenClaw is an AI assistant framework you can run and customize. It can connect tools, channels, automation, and workflows.' },
      { h: 'What you can find here', p: 'Step-by-step setup guides, curated documentation links, practical examples, and best practices for production usage.' },
      { h: 'Who this is for', p: 'Developers who want to self-host and customize fast. Non-technical users can start with guided tutorials (premium content later).' }
    ],
    status: 'v0.2 bilingual homepage ready',
  },
  zh: {
    title: 'Claw Guide - OpenClaw 中文指南',
    brand: 'Claw Guide',
    headline: '面向开发者的 OpenClaw 指南',
    desc: '一个实战导向的 OpenClaw 导航站：包含介绍、文档入口、安装教程和使用案例。',
    ctaStart: '快速开始',
    ctaDocs: 'OpenClaw 官方文档',
    ctaGithub: 'GitHub 仓库',
    langLabel: '语言',
    switchText: 'English',
    switchHref: '/',
    sections: [
      { h: 'OpenClaw 是什么？', p: 'OpenClaw 是可运行、可定制的 AI 助手框架，可连接工具、渠道、自动化流程。' },
      { h: '你能在这里找到什么', p: '从 0 到 1 的安装步骤、精选文档链接、实战案例，以及线上部署最佳实践。' },
      { h: '适合谁', p: '适合希望快速落地的技术用户；非技术用户后续可通过付费教程快速上手。' }
    ],
    status: 'v0.2 双语首页已就绪',
  }
};

function page(lang = 'en') {
  const t = content[lang] || content.en;
  return `<!doctype html>
<html lang="${lang === 'zh' ? 'zh-CN' : 'en'}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${t.title}</title>
  <meta name="description" content="${t.desc}" />
  <style>
    :root { --bg:#0b1020; --card:#131a2f; --text:#e7ecff; --muted:#9bb0ff; --accent:#5b8cff; }
    * { box-sizing: border-box; }
    body { margin:0; font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; background: linear-gradient(160deg,#0b1020,#121933 55%,#1a2246); color:var(--text); }
    .wrap { min-height:100vh; display:grid; place-items:center; padding:24px; }
    .card { width:min(980px,100%); background:rgba(19,26,47,.88); border:1px solid rgba(155,176,255,.2); backdrop-filter: blur(6px); border-radius:18px; padding:28px 30px; box-shadow:0 12px 40px rgba(0,0,0,.35); }
    .topbar { display:flex; justify-content:space-between; align-items:center; gap:12px; margin-bottom:18px; }
    .brand { font-weight:700; letter-spacing:.2px; }
    .lang { font-size:14px; color:var(--muted); display:flex; align-items:center; gap:8px; }
    .lang a { text-decoration:none; color:#fff; border:1px solid rgba(155,176,255,.45); padding:6px 10px; border-radius:8px; }
    h1 { margin:6px 0 10px; font-size: clamp(28px, 5vw, 46px); }
    p.lead { color:var(--muted); font-size:18px; margin:0; line-height:1.65; }
    .btns { display:flex; gap:12px; margin-top:22px; flex-wrap:wrap; }
    a.btn { text-decoration:none; color:white; background:var(--accent); padding:10px 16px; border-radius:10px; font-weight:600; }
    a.btn.ghost { background:transparent; border:1px solid rgba(155,176,255,.4); color:var(--text); }
    .grid { margin-top:24px; display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:12px; }
    .item { background:#0e1530; border:1px solid rgba(155,176,255,.15); border-radius:12px; padding:12px; }
    .item h3 { margin:0 0 8px; font-size:16px; }
    .item p { margin:0; color:#b8c6ff; line-height:1.5; font-size:14px; }
    .meta { margin-top:16px; font-size:13px; color:#a8b8f8; }
    @media (max-width: 820px) { .grid { grid-template-columns:1fr; } }
  </style>
</head>
<body>
  <main class="wrap">
    <section class="card">
      <div class="topbar">
        <div class="brand">${t.brand}</div>
        <div class="lang">${t.langLabel}: <a href="${t.switchHref}">${t.switchText}</a></div>
      </div>

      <h1>${t.headline}</h1>
      <p class="lead">${t.desc}</p>

      <div class="btns">
        <a class="btn" href="#">${t.ctaStart}</a>
        <a class="btn ghost" href="https://docs.openclaw.ai" target="_blank" rel="noreferrer">${t.ctaDocs}</a>
        <a class="btn ghost" href="https://github.com/owen-ai-01/claw-guide" target="_blank" rel="noreferrer">${t.ctaGithub}</a>
      </div>

      <div class="grid">
        ${t.sections.map(s => `<article class="item"><h3>${s.h}</h3><p>${s.p}</p></article>`).join('')}
      </div>

      <div class="meta">Status: <code>${t.status}</code> · Route: <code>${lang === 'zh' ? '/zh' : '/'}</code></div>
    </section>
  </main>
</body>
</html>`;
}

const server = http.createServer((req, res) => {
  const url = (req.url || '/').split('?')[0];

  if (url === '/health') {
    res.writeHead(200, { 'content-type': 'application/json; charset=utf-8' });
    return res.end(JSON.stringify({ ok: true, service: 'claw-guide' }));
  }

  if (url === '/zh' || url === '/zh/') {
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    return res.end(page('zh'));
  }

  if (url === '/' || url === '/index.html') {
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    return res.end(page('en'));
  }

  res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
  res.end('Not Found');
});

server.listen(port, () => {
  console.log(`claw-guide running on http://0.0.0.0:${port}`);
});
