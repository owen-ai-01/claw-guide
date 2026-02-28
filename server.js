import http from 'http';

const port = process.env.PORT || 3000;

const data = {
  en: {
    htmlLang: 'en',
    title: 'Claw Guide - OpenClaw Guides & Tutorials',
    nav: {
      home: 'Home',
      what: 'What',
      why: 'Why',
      steps: '5 Steps',
      docs: 'Docs',
      resources: 'Resources',
      cases: 'Use Cases',
      faq: 'FAQ',
      lang: '中文',
      langHref: '/zh',
    },
    hero: {
      badge: 'Global OpenClaw Learning Hub',
      h1: 'Learn OpenClaw. Build Practical AI Workflows.',
      p: 'Bilingual (EN/中文) guides for installing, configuring, and shipping with OpenClaw. From first setup to production-style workflows.',
      ctas: [
        { text: 'Start Installation', href: '#how' },
        { text: 'Official Docs', href: 'https://docs.openclaw.ai', external: true },
        { text: 'GitHub', href: 'https://github.com/owen-ai-01/claw-guide', external: true },
      ],
      stats: [
        ['Runtime', 'Node.js ≥ 22'],
        ['Languages', 'English + Chinese'],
        ['Audience', 'Developers first'],
      ],
    },
    what: {
      h: 'What is OpenClaw?',
      cards: [
        ['Personal AI assistant framework', 'Run your own assistant, connect channels and tools, and keep control of your workflows.'],
        ['Any-platform messaging + automation', 'Work across Telegram/Discord/Slack and more, with cron, memory, and tool execution.'],
        ['Built for practical shipping', 'Not a demo toy: structured around real tasks, repeatable processes, and long-term operations.'],
      ],
    },
    why: {
      h: 'Why Claw Guide?',
      cards: [
        ['Actionable over theoretical', 'We focus on copy-paste commands, checklists, and troubleshooting paths.'],
        ['Bilingual navigation', 'Default English with /zh route to reduce friction for Chinese-speaking builders.'],
        ['Bridge to advanced learning', 'Free technical foundation now, premium deep tutorials and videos later for non-technical users.'],
      ],
    },
    how: {
      h: '5-Step Setup Path (Technical)',
      steps: [
        ['Prepare environment', 'Install Node.js 22+, verify npm/pnpm, and ensure terminal access.'],
        ['Install OpenClaw', 'Use npm/pnpm/bun global install and run onboarding wizard.'],
        ['Configure core settings', 'Set model/provider, workspace basics, and required environment variables.'],
        ['Connect channels & tools', 'Configure Telegram/Discord/etc. and enable the tools/skills you need.'],
        ['Run and validate first workflow', 'Create a simple reminder/content/dev task and verify end-to-end execution.'],
      ],
    },
    docs: {
      h: 'Documentation & Core Links',
      links: [
        ['Getting Started', 'https://docs.openclaw.ai/start/getting-started'],
        ['Installation / Updating', 'https://docs.openclaw.ai/install/updating'],
        ['Models & Failover', 'https://docs.openclaw.ai/concepts/models'],
        ['FAQ', 'https://docs.openclaw.ai/help/faq'],
      ],
    },
    resources: {
      h: 'Learning Resources',
      links: [
        ['Official OpenClaw Docs', 'https://docs.openclaw.ai'],
        ['OpenClaw GitHub Repo', 'https://github.com/openclaw/openclaw'],
        ['Showcase', 'https://docs.openclaw.ai/start/showcase'],
        ['OpenClaw Discord Community', 'https://discord.gg/clawd'],
      ],
    },
    cases: {
      h: 'Starter Use Cases',
      items: [
        'Telegram personal assistant with reminders and summaries',
        'GitHub workflow helper for issues/PR/checks',
        'Content operation assistant for multilingual publishing',
        'SEO monitoring workflow with recurring checks',
      ],
    },
    faq: {
      h: 'FAQ',
      items: [
        ['Can beginners use this?', 'Yes. Technical users can follow the step-by-step path. Non-technical users can use upcoming guided content.'],
        ['Is this official OpenClaw docs?', 'No. This is a practical companion guide that links to official docs and adds implementation playbooks.'],
        ['Will there be paid courses?', 'Yes. Planned for deeper non-technical onboarding, case libraries, and video walkthroughs.'],
      ],
    },
  },
  zh: {
    htmlLang: 'zh-CN',
    title: 'Claw Guide - OpenClaw 中文指南',
    nav: {
      home: '首页',
      what: '是什么',
      why: '为什么',
      steps: '5 步上手',
      docs: '文档',
      resources: '资源',
      cases: '案例',
      faq: '常见问题',
      lang: 'English',
      langHref: '/',
    },
    hero: {
      badge: '全球化 OpenClaw 学习站',
      h1: '系统学习 OpenClaw，落地 AI 工作流',
      p: '提供中英双语（默认英文 + /zh 中文）教程，覆盖安装、配置、实战与排错，帮助你从 0 到可用。',
      ctas: [
        { text: '开始安装', href: '#how' },
        { text: '官方文档', href: 'https://docs.openclaw.ai', external: true },
        { text: 'GitHub', href: 'https://github.com/owen-ai-01/claw-guide', external: true },
      ],
      stats: [
        ['运行环境', 'Node.js ≥ 22'],
        ['语言', '英文 + 中文'],
        ['目标人群', '技术用户优先'],
      ],
    },
    what: {
      h: 'OpenClaw 是什么？',
      cards: [
        ['可定制的个人 AI 助手框架', '你可以运行自己的助手，连接消息渠道和工具，打造专属工作流。'],
        ['跨平台消息与自动化能力', '支持 Telegram/Discord/Slack 等场景，结合 cron、memory 和工具调用。'],
        ['面向真实业务落地', '不是演示型项目，而是围绕可复用流程与长期运营构建。'],
      ],
    },
    why: {
      h: '为什么是 Claw Guide？',
      cards: [
        ['重实操，不空谈', '提供可复制命令、检查清单、排错路径。'],
        ['中英双语结构', '默认英文，/zh 中文路由，降低全球化学习门槛。'],
        ['免费 + 付费进阶体系', '先让技术用户跑通；后续补充非技术用户可用的付费教程与视频。'],
      ],
    },
    how: {
      h: '5 步完成安装与上手（技术路径）',
      steps: [
        ['准备环境', '安装 Node.js 22+，确认 npm/pnpm 可用，并具备终端环境。'],
        ['安装 OpenClaw', '全局安装后运行 onboarding wizard 完成基础初始化。'],
        ['配置核心参数', '完成模型/Provider、工作目录、环境变量等基础配置。'],
        ['连接渠道与工具', '按需配置 Telegram/Discord 等渠道，并启用需要的 tools/skills。'],
        ['跑通第一个流程', '先做一个提醒/内容/开发小任务，验证完整链路。'],
      ],
    },
    docs: {
      h: '文档与核心链接',
      links: [
        ['快速开始', 'https://docs.openclaw.ai/start/getting-started'],
        ['安装与更新', 'https://docs.openclaw.ai/install/updating'],
        ['模型与故障切换', 'https://docs.openclaw.ai/concepts/models'],
        ['FAQ', 'https://docs.openclaw.ai/help/faq'],
      ],
    },
    resources: {
      h: '学习资源',
      links: [
        ['OpenClaw 官方文档', 'https://docs.openclaw.ai'],
        ['OpenClaw GitHub 仓库', 'https://github.com/openclaw/openclaw'],
        ['案例展示 Showcase', 'https://docs.openclaw.ai/start/showcase'],
        ['OpenClaw Discord 社区', 'https://discord.gg/clawd'],
      ],
    },
    cases: {
      h: '首批实战场景',
      items: [
        'Telegram 私人助手：提醒、总结、日常协同',
        'GitHub 工作流助手：Issue / PR / CI 跟进',
        '多语言内容运营助手：草稿、改写、发布支持',
        'SEO 监控自动化：定时检查与汇总',
      ],
    },
    faq: {
      h: '常见问题',
      items: [
        ['新手能用吗？', '可以。技术用户按步骤即可跑通；非技术用户后续可通过引导课程快速上手。'],
        ['这是官方文档官网吗？', '不是。这里是实战导航站，会结合官方文档并补充落地方案。'],
        ['会有付费内容吗？', '会。后续会提供更系统的非技术教程、视频和案例包。'],
      ],
    },
  },
};

function ext(link) {
  return link.external ? ' target="_blank" rel="noreferrer"' : '';
}

function render(lang = 'en') {
  const t = data[lang] || data.en;

  return `<!doctype html>
<html lang="${t.htmlLang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${t.title}</title>
  <meta name="description" content="${t.hero.p}" />
  <style>
    :root { --bg:#0b1020; --card:#131a2f; --text:#e7ecff; --muted:#9bb0ff; --accent:#5b8cff; --line: rgba(155,176,255,.2); }
    * { box-sizing: border-box; scroll-behavior: smooth; }
    body { margin:0; font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; background: linear-gradient(160deg,#0b1020,#121933 55%,#1a2246); color:var(--text); }
    a { color: inherit; }
    .container { width:min(1080px, 92%); margin:0 auto; }

    .nav-wrap { position: sticky; top: 0; z-index: 10; backdrop-filter: blur(10px); background: rgba(8,12,26,.72); border-bottom:1px solid var(--line); }
    nav { display:flex; align-items:center; justify-content:space-between; padding:12px 0; }
    .brand { font-weight: 700; letter-spacing: .2px; }
    .menu { display:flex; gap:16px; flex-wrap:wrap; font-size:14px; color:#c8d4ff; }
    .lang-btn { border:1px solid rgba(155,176,255,.45); border-radius:9px; padding:6px 10px; text-decoration:none; font-size:14px; }

    .hero { padding: 56px 0 28px; }
    .badge { display:inline-block; font-size:12px; color:#c9d6ff; border:1px solid var(--line); border-radius:999px; padding:6px 10px; }
    h1 { font-size: clamp(30px, 5.8vw, 52px); margin: 12px 0 14px; line-height: 1.08; }
    .lead { color: var(--muted); font-size: 18px; line-height: 1.65; max-width: 900px; }
    .ctas { margin-top: 22px; display:flex; gap:10px; flex-wrap:wrap; }
    .btn { text-decoration:none; padding:10px 14px; border-radius:10px; font-weight:600; border:1px solid transparent; }
    .btn.primary { background: var(--accent); color:#fff; }
    .btn.ghost { border-color: var(--line); color:#d9e3ff; }
    .stats { margin-top:22px; display:grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap:10px; }
    .stat { border:1px solid var(--line); background:#0f1736; border-radius:10px; padding:10px; }
    .stat b { display:block; font-size:13px; color:#9fb4ff; margin-bottom:4px; font-weight:600; }

    section { padding: 30px 0; }
    h2 { margin:0 0 14px; font-size: clamp(22px, 3.6vw, 30px); }
    .grid3 { display:grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap:12px; }
    .card { border:1px solid var(--line); background: rgba(19,26,47,.86); border-radius:12px; padding:14px; }
    .card h3 { margin:0 0 8px; font-size:16px; }
    .card p { margin:0; color:#b8c6ff; font-size:14px; line-height:1.6; }

    .steps { display:grid; gap:10px; }
    .step { border:1px solid var(--line); border-radius:12px; padding:12px; background:#0e1530; }
    .step b { display:block; margin-bottom:6px; }

    .link-list, .case-list { display:grid; gap:10px; }
    .link-item, .case-item, .faq-item { border:1px solid var(--line); border-radius:10px; padding:10px 12px; background:#0f1736; }
    .muted { color:#b7c5ff; }
    footer { padding: 30px 0 36px; color:#9fb2f4; font-size:13px; }

    @media (max-width: 860px) {
      .menu { display:none; }
      .stats, .grid3 { grid-template-columns:1fr; }
    }
  </style>
</head>
<body>
  <div class="nav-wrap">
    <div class="container">
      <nav>
        <div class="brand">Claw Guide</div>
        <div class="menu">
          <a href="#top">${t.nav.home}</a>
          <a href="#what">${t.nav.what}</a>
          <a href="#why">${t.nav.why}</a>
          <a href="#how">${t.nav.steps}</a>
          <a href="#docs">${t.nav.docs}</a>
          <a href="#resources">${t.nav.resources}</a>
          <a href="#cases">${t.nav.cases}</a>
          <a href="#faq">${t.nav.faq}</a>
        </div>
        <a class="lang-btn" href="${t.nav.langHref}">${t.nav.lang}</a>
      </nav>
    </div>
  </div>

  <main class="container" id="top">
    <section class="hero">
      <span class="badge">${t.hero.badge}</span>
      <h1>${t.hero.h1}</h1>
      <p class="lead">${t.hero.p}</p>
      <div class="ctas">
        ${t.hero.ctas.map(c => `<a class="btn ${c.href.startsWith('#') ? 'primary' : 'ghost'}" href="${c.href}"${ext(c)}>${c.text}</a>`).join('')}
      </div>
      <div class="stats">
        ${t.hero.stats.map(s => `<div class="stat"><b>${s[0]}</b>${s[1]}</div>`).join('')}
      </div>
    </section>

    <section id="what">
      <h2>${t.what.h}</h2>
      <div class="grid3">
        ${t.what.cards.map(c => `<article class="card"><h3>${c[0]}</h3><p>${c[1]}</p></article>`).join('')}
      </div>
    </section>

    <section id="why">
      <h2>${t.why.h}</h2>
      <div class="grid3">
        ${t.why.cards.map(c => `<article class="card"><h3>${c[0]}</h3><p>${c[1]}</p></article>`).join('')}
      </div>
    </section>

    <section id="how">
      <h2>${t.how.h}</h2>
      <div class="steps">
        ${t.how.steps.map((s,i) => `<article class="step"><b>${i + 1}. ${s[0]}</b><div class="muted">${s[1]}</div></article>`).join('')}
      </div>
    </section>

    <section id="docs">
      <h2>${t.docs.h}</h2>
      <div class="link-list">
        ${t.docs.links.map(l => `<a class="link-item" href="${l[1]}" target="_blank" rel="noreferrer">${l[0]} ↗</a>`).join('')}
      </div>
    </section>

    <section id="resources">
      <h2>${t.resources.h}</h2>
      <div class="link-list">
        ${t.resources.links.map(l => `<a class="link-item" href="${l[1]}" target="_blank" rel="noreferrer">${l[0]} ↗</a>`).join('')}
      </div>
    </section>

    <section id="cases">
      <h2>${t.cases.h}</h2>
      <div class="case-list">
        ${t.cases.items.map(i => `<div class="case-item">${i}</div>`).join('')}
      </div>
    </section>

    <section id="faq">
      <h2>${t.faq.h}</h2>
      <div class="case-list">
        ${t.faq.items.map(f => `<article class="faq-item"><b>${f[0]}</b><div class="muted" style="margin-top:6px;">${f[1]}</div></article>`).join('')}
      </div>
    </section>
  </main>

  <footer class="container">
    Claw Guide · Bilingual structure ready (${lang === 'zh' ? '/zh' : '/'})
  </footer>
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
    return res.end(render('zh'));
  }

  if (url === '/' || url === '/index.html') {
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    return res.end(render('en'));
  }

  res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
  res.end('Not Found');
});

server.listen(port, () => {
  console.log(`claw-guide running on http://0.0.0.0:${port}`);
});
