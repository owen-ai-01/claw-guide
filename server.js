import http from 'http';

const port = process.env.PORT || 3000;

const data = {
  en: {
    htmlLang: 'en',
    title: 'Claw Guide - Faster OpenClaw Launch Playbook',
    description:
      'Bilingual OpenClaw launch guide with streamlined navigation, clearer hero messaging, and a practical setup roadmap.',
    nav: {
      logoTag: 'Build & Ship',
      learn: 'Learn',
      roadmap: 'Roadmap',
      docs: 'Docs',
      resources: 'Resources',
      highlights: 'Highlights',
      faq: 'FAQ',
      start: 'Start Now',
      lang: '中文',
      langHref: '/zh',
    },
    hero: {
      badge: 'Bilingual OpenClaw Implementation Hub',
      h1: 'Launch OpenClaw With a Clear Structure, Not Guesswork',
      p: 'A practical guide for indie builders and small teams: understand the architecture, follow the setup sequence, and move from first run to repeatable automation.',
      ctas: [
        { text: 'See Launch Roadmap', href: '#roadmap' },
        { text: 'Read Official Docs', href: 'https://docs.openclaw.ai', external: true },
      ],
      sideTitle: 'Quick Value Snapshot',
      trust: [
        ['Focus', 'Navigation + Hero + Visual clarity'],
        ['Audience', 'Developers + non-technical operators'],
        ['Output', 'Actionable setup sequence'],
      ],
    },
    learn: {
      h: 'What You Will Learn',
      cards: [
        ['OpenClaw in one mental model', 'Understand channels, tools, memory, and automation as one system instead of scattered features.'],
        ['Where to start this week', 'Follow the onboarding path that balances quick wins with long-term maintainability.'],
        ['How to scale gradually', 'Evolve from personal assistant usage to team workflows without overengineering early.'],
      ],
    },
    roadmap: {
      h: 'Launch Roadmap (5 Practical Steps)',
      steps: [
        ['Environment baseline', 'Prepare Node.js 22+, package manager, and a stable host/runtime environment.'],
        ['Core installation', 'Install OpenClaw and complete onboarding with minimum working configuration.'],
        ['Model + channel wiring', 'Set provider/model defaults, then connect at least one messaging channel end-to-end.'],
        ['Operational setup', 'Add memory routines, heartbeat/cron basics, and 2-3 high-value skills for daily work.'],
        ['Quality checkpoint', 'Run a real task loop, verify reliability, and document your own playbook for repeat use.'],
      ],
    },
    docs: {
      h: 'Official Docs Entry Points',
      links: [
        ['Getting Started', 'https://docs.openclaw.ai/start/getting-started'],
        ['Installation & Updating', 'https://docs.openclaw.ai/install/updating'],
        ['Core Concepts: Models', 'https://docs.openclaw.ai/concepts/models'],
        ['FAQ', 'https://docs.openclaw.ai/help/faq'],
      ],
    },
    resources: {
      h: 'Useful Resources',
      links: [
        ['OpenClaw Docs', 'https://docs.openclaw.ai'],
        ['OpenClaw GitHub', 'https://github.com/openclaw/openclaw'],
        ['Showcase', 'https://docs.openclaw.ai/start/showcase'],
        ['Discord Community', 'https://discord.gg/clawd'],
      ],
    },
    highlights: {
      h: 'What Makes This Guide Useful',
      cards: [
        ['Structured-first', 'Prioritizes information architecture so new visitors immediately know where to click and why.'],
        ['Action-first', 'Every section maps to the next operational action, not just passive reading.'],
        ['Bilingual parity', 'English and Chinese keep the same layout and intent to reduce cognitive switching cost.'],
      ],
    },
    faq: {
      h: 'FAQ',
      items: [
        ['Is this an official documentation mirror?', 'No. It is a companion guide focused on practical implementation flow and curation.'],
        ['Can non-technical founders use this?', 'Yes. Follow the structure and prioritize one channel + one workflow first.'],
        ['What should I do after first setup?', 'Lock a weekly operating rhythm: memory maintenance, workflow checks, and incremental skill expansion.'],
      ],
    },
  },
  zh: {
    htmlLang: 'zh-CN',
    title: 'Claw Guide - OpenClaw 快速落地路线图',
    description: '中英双语 OpenClaw 落地指南：更清晰的导航、更聚焦的 Hero 表达、更实用的实施路径。',
    nav: {
      logoTag: 'Build & Ship',
      learn: '你将学到',
      roadmap: '路线图',
      docs: '官方文档',
      resources: '资源',
      highlights: '重点亮点',
      faq: 'FAQ',
      start: '立即开始',
      lang: 'English',
      langHref: '/',
    },
    hero: {
      badge: 'OpenClaw 双语落地中枢',
      h1: '用清晰结构落地 OpenClaw，而不是靠摸索',
      p: '面向独立开发者和小团队的实战指南：先建立整体认知，再按步骤配置，最后把一次成功变成可复用流程。',
      ctas: [
        { text: '查看落地路线图', href: '#roadmap' },
        { text: '阅读官方文档', href: 'https://docs.openclaw.ai', external: true },
      ],
      sideTitle: '价值速览',
      trust: [
        ['优化重点', '导航结构 + Hero表达 + 视觉样式'],
        ['适用人群', '技术开发者 + 非技术操盘者'],
        ['目标产出', '可执行的上手与迭代路径'],
      ],
    },
    learn: {
      h: '你将学到什么',
      cards: [
        ['OpenClaw 的一体化认知', '把渠道、工具、记忆、自动化放进同一个系统视角，不再碎片化理解。'],
        ['本周该从哪里开始', '按照路径先做最小闭环，再逐步扩展，避免一开始配置过重。'],
        ['如何稳定扩展', '从个人助手升级到小团队协作，兼顾速度与可维护性。'],
      ],
    },
    roadmap: {
      h: '落地路线图（5 个实操步骤）',
      steps: [
        ['环境基线', '准备 Node.js 22+、包管理器，以及稳定的运行环境。'],
        ['核心安装', '完成 OpenClaw 安装与 onboarding，先跑通最小可用配置。'],
        ['模型与渠道打通', '配置 provider/model，然后至少打通一个消息渠道。'],
        ['运营能力补齐', '接入 memory 机制、heartbeat/cron 基础，并启用 2-3 个高价值 skills。'],
        ['质量验收', '跑一轮真实任务，验证稳定性，并沉淀你自己的执行 SOP。'],
      ],
    },
    docs: {
      h: '官方文档入口',
      links: [
        ['快速开始', 'https://docs.openclaw.ai/start/getting-started'],
        ['安装与更新', 'https://docs.openclaw.ai/install/updating'],
        ['核心概念：模型', 'https://docs.openclaw.ai/concepts/models'],
        ['FAQ', 'https://docs.openclaw.ai/help/faq'],
      ],
    },
    resources: {
      h: '推荐资源',
      links: [
        ['OpenClaw 官方文档', 'https://docs.openclaw.ai'],
        ['OpenClaw GitHub 仓库', 'https://github.com/openclaw/openclaw'],
        ['Showcase 案例', 'https://docs.openclaw.ai/start/showcase'],
        ['Discord 社区', 'https://discord.gg/clawd'],
      ],
    },
    highlights: {
      h: '为什么这个指南更易用',
      cards: [
        ['先结构后细节', '先把信息架构理顺，让访客一眼知道“去哪里、做什么”。'],
        ['先行动后阅读', '每个区块都对应下一步动作，不只是信息堆砌。'],
        ['双语结构一致', '中英文保持同一逻辑，减少跨语言切换时的认知成本。'],
      ],
    },
    faq: {
      h: '常见问题',
      items: [
        ['这是官方文档镜像吗？', '不是。这里是偏实战的配套导航，重点在落地流程与资源编排。'],
        ['非技术创业者能用吗？', '可以。建议先只做“一个渠道 + 一个流程”的最小闭环。'],
        ['跑通后下一步做什么？', '建立每周固定节奏：记忆维护、流程回顾、技能逐步扩展。'],
      ],
    },
  },
};

function ext(link) {
  return link.external ? ' target="_blank" rel="noreferrer"' : '';
}

function render(lang = 'en') {
  const t = data[lang] || data.en;
  const canonicalPath = lang === 'zh' ? '/zh' : '/';

  return `<!doctype html>
<html lang="${t.htmlLang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${t.title}</title>
  <meta name="description" content="${t.description}" />
  <meta property="og:title" content="${t.title}" />
  <meta property="og:description" content="${t.description}" />
  <meta property="og:type" content="website" />
  <link rel="canonical" href="${canonicalPath}" />
  <link rel="alternate" hreflang="en" href="/" />
  <link rel="alternate" hreflang="zh-CN" href="/zh" />
  <link rel="alternate" hreflang="x-default" href="/" />
  <style>
    :root {
      --bg:#060915;
      --bg2:#0d1430;
      --panel:rgba(13,20,48,.72);
      --panel-strong:rgba(20,30,68,.88);
      --text:#ecf1ff;
      --muted:#afc0ef;
      --line:rgba(143,173,255,.24);
      --brand:#6fa5ff;
      --brand-2:#7f7bff;
      --ok:#4de6bc;
    }

    * { box-sizing:border-box; }
    html { scroll-behavior:smooth; }
    body {
      margin:0;
      color:var(--text);
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      background:
        radial-gradient(900px 420px at 8% -5%, rgba(111,165,255,.25), transparent),
        radial-gradient(840px 420px at 100% 0%, rgba(127,123,255,.23), transparent),
        linear-gradient(165deg,var(--bg),var(--bg2) 62%,#121d3f);
      line-height:1.5;
    }

    a { color:inherit; text-decoration:none; }
    .container { width:min(1100px, 92%); margin:0 auto; }

    .nav-wrap {
      position:sticky;
      top:0;
      z-index:50;
      backdrop-filter: blur(10px);
      border-bottom:1px solid var(--line);
      background:rgba(6,9,21,.68);
    }

    nav {
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:14px;
      padding:12px 0;
    }

    .brand { display:flex; align-items:center; gap:10px; font-weight:700; }
    .brand-dot {
      width:28px;height:28px;border-radius:9px;
      background:linear-gradient(135deg,var(--brand),var(--brand-2));
      box-shadow:0 8px 20px rgba(107,143,255,.4);
    }
    .brand small { display:block; color:#b5c3eb; font-weight:500; font-size:12px; margin-top:1px; }

    .menu { display:flex; align-items:center; gap:16px; color:#d8e3ff; font-size:14px; }
    .menu a { opacity:.88; padding:6px 0; border-bottom:2px solid transparent; }
    .menu a:hover { opacity:1; }
    .menu a.active { opacity:1; color:#fff; border-bottom-color: var(--brand); }

    .nav-actions { display:flex; align-items:center; gap:8px; }
    .chip {
      border:1px solid var(--line);
      background:rgba(255,255,255,.02);
      border-radius:10px;
      padding:7px 11px;
      font-size:13px;
      color:#dce6ff;
    }
    .chip.primary {
      border-color:transparent;
      background:linear-gradient(135deg,var(--brand),var(--brand-2));
      font-weight:600;
    }

    .hero {
      display:grid;
      grid-template-columns: 1.3fr .9fr;
      gap:18px;
      padding:52px 0 26px;
      align-items:stretch;
    }

    .hero-main, .hero-side {
      border:1px solid var(--line);
      border-radius:18px;
      background:var(--panel);
      box-shadow:0 10px 28px rgba(6,9,21,.35);
    }

    .hero-main { padding:26px; }
    .hero-side { padding:18px; background:var(--panel-strong); }

    .badge {
      display:inline-flex;
      border:1px solid rgba(143,173,255,.4);
      border-radius:999px;
      padding:6px 10px;
      font-size:12px;
      color:#d4dfff;
      margin-bottom:10px;
    }

    h1 {
      margin:0 0 10px;
      font-size:clamp(30px, 5.4vw, 54px);
      line-height:1.08;
      letter-spacing:-.02em;
    }

    .lead { color:var(--muted); font-size:17px; max-width:770px; margin:0; }

    .ctas { margin-top:18px; display:flex; gap:9px; flex-wrap:wrap; }
    .btn {
      border-radius:10px;
      padding:10px 14px;
      border:1px solid var(--line);
      font-weight:600;
      font-size:14px;
    }
    .btn.primary {
      border:none;
      background:linear-gradient(135deg,var(--brand),var(--brand-2));
      color:#fff;
      box-shadow:0 8px 20px rgba(111,165,255,.36);
    }

    .side-title { margin:0 0 10px; font-size:14px; color:#c8d6fb; }
    .trust-grid { display:grid; gap:10px; }
    .trust-item {
      border:1px solid var(--line);
      border-radius:12px;
      background:rgba(8,12,30,.5);
      padding:11px;
    }
    .trust-item b { display:block; color:#8dd9bf; margin-bottom:4px; font-size:13px; }
    .trust-item span { color:#d4deff; font-size:14px; }

    section { padding:26px 0; }
    h2 { margin:0 0 14px; font-size:clamp(22px,3.4vw,32px); }

    .quick-links {
      display:flex;
      flex-wrap:wrap;
      gap:10px;
      padding-top:4px;
    }

    .q-item {
      border:1px solid var(--line);
      border-radius:999px;
      padding:8px 12px;
      font-size:13px;
      color:#d6e1ff;
      background:rgba(255,255,255,.02);
    }

    .q-item:hover {
      border-color:rgba(143,173,255,.45);
      background:rgba(111,165,255,.1);
    }

    .grid3, .grid2 { display:grid; gap:12px; }
    .grid3 { grid-template-columns:repeat(3,minmax(0,1fr)); }
    .grid2 { grid-template-columns:repeat(2,minmax(0,1fr)); }

    .card, .step, .link-item, .faq-item {
      border:1px solid var(--line);
      border-radius:14px;
      background:rgba(11,17,40,.74);
    }

    .card { padding:14px; }
    .card h3 { margin:0 0 8px; font-size:16px; }
    .card p { margin:0; color:#bfd0f8; font-size:14px; }

    .steps { display:grid; gap:10px; }
    .step { padding:14px; }
    .step b { display:block; margin-bottom:7px; }
    .muted { color:#bfd0f8; }

    .link-list, .faq-list { display:grid; gap:10px; }
    .link-item, .faq-item { display:block; padding:12px 14px; }
    .link-item:hover { border-color:rgba(143,173,255,.45); }

    footer {
      padding:24px 0 34px;
      color:#a8bbea;
      font-size:13px;
    }

    @media (max-width: 960px) {
      .hero { grid-template-columns:1fr; }
      .menu { display:none; }
      .grid3, .grid2 { grid-template-columns:1fr; }
    }
  </style>
</head>
<body>
  <header class="nav-wrap">
    <div class="container">
      <nav>
        <a class="brand" href="#top" aria-label="Claw Guide Home">
          <span class="brand-dot"></span>
          <span>Claw Guide<small>${t.nav.logoTag}</small></span>
        </a>

        <div class="menu" aria-label="Primary Navigation">
          <a href="#learn">${t.nav.learn}</a>
          <a href="#roadmap">${t.nav.roadmap}</a>
          <a href="#docs">${t.nav.docs}</a>
          <a href="#resources">${t.nav.resources}</a>
          <a href="#highlights">${t.nav.highlights}</a>
          <a href="#faq">${t.nav.faq}</a>
        </div>

        <div class="nav-actions">
          <a class="chip" href="${t.nav.langHref}">${t.nav.lang}</a>
          <a class="chip primary" href="#roadmap">${t.nav.start}</a>
        </div>
      </nav>
    </div>
  </header>

  <main class="container" id="top">
    <section class="hero" aria-label="Hero">
      <article class="hero-main">
        <span class="badge">${t.hero.badge}</span>
        <h1>${t.hero.h1}</h1>
        <p class="lead">${t.hero.p}</p>

        <div class="ctas">
          ${t.hero.ctas.map(c => `<a class="btn ${c.href.startsWith('#') ? 'primary' : ''}" href="${c.href}"${ext(c)}>${c.text}</a>`).join('')}
        </div>
      </article>

      <aside class="hero-side" aria-label="Key Value">
        <p class="side-title">${t.hero.sideTitle}</p>
        <div class="trust-grid">
          ${t.hero.trust.map(item => `<div class="trust-item"><b>${item[0]}</b><span>${item[1]}</span></div>`).join('')}
        </div>
      </aside>
    </section>

    <section class="quick-links" aria-label="Quick section links">
      <a class="q-item" href="#learn">${t.nav.learn}</a>
      <a class="q-item" href="#roadmap">${t.nav.roadmap}</a>
      <a class="q-item" href="#docs">${t.nav.docs}</a>
      <a class="q-item" href="#resources">${t.nav.resources}</a>
      <a class="q-item" href="#highlights">${t.nav.highlights}</a>
      <a class="q-item" href="#faq">${t.nav.faq}</a>
    </section>

    <section id="learn">
      <h2>${t.learn.h}</h2>
      <div class="grid3">
        ${t.learn.cards.map(c => `<article class="card"><h3>${c[0]}</h3><p>${c[1]}</p></article>`).join('')}
      </div>
    </section>

    <section id="roadmap">
      <h2>${t.roadmap.h}</h2>
      <div class="steps">
        ${t.roadmap.steps.map((s, i) => `<article class="step"><b>${i + 1}. ${s[0]}</b><div class="muted">${s[1]}</div></article>`).join('')}
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
      <div class="grid2">
        ${t.resources.links.map(l => `<a class="link-item" href="${l[1]}" target="_blank" rel="noreferrer">${l[0]} ↗</a>`).join('')}
      </div>
    </section>

    <section id="highlights">
      <h2>${t.highlights.h}</h2>
      <div class="grid3">
        ${t.highlights.cards.map(c => `<article class="card"><h3>${c[0]}</h3><p>${c[1]}</p></article>`).join('')}
      </div>
    </section>

    <section id="faq">
      <h2>${t.faq.h}</h2>
      <div class="faq-list">
        ${t.faq.items.map(f => `<article class="faq-item"><b>${f[0]}</b><div class="muted" style="margin-top:6px;">${f[1]}</div></article>`).join('')}
      </div>
    </section>
  </main>

  <footer class="container">
    Claw Guide · Updated information architecture (${lang === 'zh' ? '/zh' : '/'})
  </footer>

  <script>
    (function () {
      const menuLinks = Array.from(document.querySelectorAll('.menu a[href^="#"]'));
      const sections = menuLinks
        .map(a => document.querySelector(a.getAttribute('href')))
        .filter(Boolean);
      if (!sections.length) return;

      const setActive = (id) => {
        menuLinks.forEach(a => {
          const active = a.getAttribute('href') === id;
          a.classList.toggle('active', active);
          if (active) a.setAttribute('aria-current', 'true');
          else a.removeAttribute('aria-current');
        });
      };

      const observer = new IntersectionObserver((entries) => {
        const target = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]?.target;
        if (target?.id) setActive('#' + target.id);
      }, { rootMargin: '-35% 0px -55% 0px', threshold: [0.2, 0.45, 0.7] });

      sections.forEach(section => observer.observe(section));
      setActive('#top');
    })();
  </script>
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
