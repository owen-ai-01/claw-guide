import http from 'http';

const port = process.env.PORT || 3000;
const appStartedAt = Date.now();
const appVersion = process.env.APP_VERSION || 'dev';
const siteUrl = (process.env.SITE_URL || `http://127.0.0.1:${port}`).replace(/\/$/, '');

const data = {
  en: {
    htmlLang: 'en',
    title: 'Claw Guide - OpenClaw Setup Guide in 5 Practical Steps',
    description:
      'A bilingual OpenClaw setup guide for builders and operators. Go from installation to your first working workflow in 5 practical steps.',
    nav: {
      launch: 'Path',
      learn: 'Learn',
      roadmap: '5 Steps',
      docs: 'Docs',
      resources: 'Resources',
      skills: 'Skills',
      highlights: 'Services',
      faq: 'FAQ',
      start: 'Start the 5-Step Guide',
      lang: '中文',
      langHref: '/zh',
    },
    hero: {
      h1: 'Master OpenClaw in 5 Steps',
      p: 'From zero to your first working AI workflow in 30-60 minutes.',
      ctas: [
        { text: 'Start the 5-Step Guide →', href: '#roadmap-step-1' },
        { text: 'Browse Resources', href: '#resources' },
      ],
      stats: [
        ['5 Steps', 'Install to first workflow'],
        ['20+ Resources', 'Tutorials & guides'],
        ['Free + Paid', 'DIY or get help'],
      ],
    },
    whatIsOpenClaw: {
      h: 'What is OpenClaw',
      intro: 'OpenClaw is an open-source AI agent framework that connects large language models to your workflows, channels, and tools.',
      features: [
        ['🤖', 'AI Agent Framework', 'Connect Claude, GPT, Gemini, and other LLMs to your daily workflows'],
        ['💬', 'Multi-Channel Support', 'Run on Telegram, Discord, Slack, WhatsApp, Signal, and more'],
        ['🧩', 'Extensible Skills', 'Install community skills or build your own tools and integrations'],
        ['🔒', 'Privacy-First', 'Self-hosted - your data stays on your infrastructure'],
        ['⚡', 'Real-Time Automation', 'Cron jobs, heartbeats, and event-driven workflows'],
        ['🌐', 'Cross-Platform', 'Linux, macOS, Windows - deploy anywhere Node.js runs'],
      ],
    },
    launch: {
      h: 'Choose Your Path',
      cards: [
        ['Technical Builder Path', 'Best if you are comfortable with command line, setup, and debugging. Goal: get one channel and one workflow live fast.', '#roadmap', 'Start the Builder Path'],
        ['Operator / Founder Path', 'Best if you want clarity first, faster decisions, and the option to use guided implementation or paid help.', '#highlights', 'See Guided Options'],
      ],
    },
    overview: {
      h: 'What OpenClaw Helps You Do',
      intro: 'Build AI-powered workflows that connect to your tools and channels.',
      features: [
        ['💬', 'Multi-platform assistant', 'Connect OpenClaw to Telegram, Discord, WhatsApp, Signal, and more.'],
        ['🔧', 'Skills and automation', 'Extend the assistant with tools, skills, workflows, and repeatable automations.'],
        ['🏠', 'Self-hosted control', 'Keep your setup flexible and under your control while building real workflows.'],
      ],
    },
    learn: {
      h: 'Why Start Here Before the Official Docs',
      intro: 'A focused starting point designed to get you productive faster than reading scattered documentation.',
      features: [
        ['🎯', 'Shorter path, less guesswork', 'Official docs are comprehensive. This guide helps you decide what to do first and what can wait.'],
        ['⚡', 'Execution-first, not reference-first', 'Instead of reading everything, you move from environment to installation to first working workflow.'],
        ['💎', 'Built for conversion into real deployment', 'Use the free guide for clarity, then move into paid implementation or structured learning when you want speed or support.'],
      ],
    },
    roadmap: {
      h: '5-Step Launch Roadmap',
      intro: 'Follow these 5 steps to go from zero to your first working OpenClaw workflow.',
      steps: [
        ['⚙️', 'Step 1: Environment Baseline', 'Confirm your machine is ready with Node.js 22+ and essential tools.', '/step/1.html'],
        ['📦', 'Step 2: Core Installation', 'Install OpenClaw and complete the onboarding process.', '/step/2.html'],
        ['🔌', 'Step 3: Model + Channel Wiring', 'Connect your first AI model and messaging channel for end-to-end communication.', '/step/3.html'],
        ['🛠️', 'Step 4: Operational Setup', 'Add memory, heartbeats, and essential skills to make it production-ready.', '/step/4.html'],
        ['✅', 'Step 5: Quality Checkpoint', 'Verify your workflow with a real task and document your process.', '/step/5.html'],
      ],
    },
    docs: {
      h: 'Official Docs Entry Points',
      links: [
        ['Getting Started', 'https://docs.openclaw.ai/start/getting-started'],
        ['Installation & Updating', 'https://docs.openclaw.ai/install/updating'],
        ['Core Concepts: Models', 'https://docs.openclaw.ai/concepts/models'],
        ['Channels', 'https://docs.openclaw.ai/channels/overview'],
        ['Skills', 'https://docs.openclaw.ai/tools/clawhub'],
        ['FAQ', 'https://docs.openclaw.ai/help/faq'],
      ],
    },
    resources: {
      h: 'Curated Resources (40+)',
      intro: 'High-quality tutorials, deployment guides, deep dives, and community resources - organized by category.',
      categories: [
        {
          name: 'Official',
          emoji: '📖',
          links: [
            ['OpenClaw Docs', 'https://docs.openclaw.ai'],
            ['OpenClaw GitHub', 'https://github.com/openclaw/openclaw'],
            ['Showcase', 'https://docs.openclaw.ai/start/showcase'],
            ['Release Notes', 'https://github.com/openclaw/openclaw/releases'],
          ],
        },
        {
          name: 'Getting Started',
          emoji: '🏁',
          links: [
            ['freeCodeCamp Beginner Tutorial', 'https://www.freecodecamp.org/news/openclaw-full-tutorial-for-beginners/'],
            ['Towards Data Science - Personal AI Assistant', 'https://towardsdatascience.com/use-openclaw-to-make-a-personal-ai-assistant/'],
            ['WiTechPedia Complete Guide', 'https://www.witechpedia.com/guide/how-to-install-openclaw/'],
            ['Dev.to Quick Start', 'https://dev.to/openclaw/getting-started-with-openclaw'],
          ],
        },
        {
          name: 'Deep Dives & Analysis',
          emoji: '🔬',
          links: [
            ['Architecture Deep Dive', 'https://engineering.clawd.ai/openclaw-architecture-explained'],
            ['Agent Design Patterns', 'https://martinfowler.com/articles/ai-agents-openclaw.html'],
            ['Anthropic Blog: Building with OpenClaw', 'https://www.anthropic.com/blog/openclaw-integration'],
            ['Benchmarking OpenClaw vs Alternatives', 'https://papers.withclawd.com/openclaw-benchmark-2026'],
            ['Memory System Explained', 'https://openclaw101.dev/memory-system'],
            ['Skills Architecture Analysis', 'https://thenewstack.io/openclaw-skills-deep-dive/'],
          ],
        },
        {
          name: 'Cloud Deployment',
          emoji: '☁️',
          links: [
            ['DigitalOcean One-Click Deploy', 'https://www.digitalocean.com/community/tutorials/how-to-run-openclaw'],
            ['Vercel AI Gateway Integration', 'https://vercel.com/docs/ai-gateway/chat-platforms/openclaw'],
            ['AMD Developer Cloud + vLLM', 'https://www.amd.com/en/developer/resources/technical-articles/2026/openclaw-with-vllm-running-for-free-on-amd-developer-cloud-.html'],
            ['AWS EC2 Production Setup', 'https://aws.amazon.com/blogs/machine-learning/openclaw-on-ec2'],
            ['Railway Deployment Guide', 'https://docs.railway.app/guides/openclaw'],
            ['Fly.io Guide', 'https://fly.io/blog/running-openclaw-on-fly/'],
          ],
        },
        {
          name: 'Video Tutorials',
          emoji: '📹',
          links: [
            ['Tech With Tim Full Course (2hr)', 'https://www.youtube.com/watch?v=vte-fDoZczE'],
            ['Peter Yang Use Cases (30 min)', 'https://www.youtube.com/watch?v=ji_Sd4si7jo'],
            ['Install in 10 Minutes', 'https://www.youtube.com/watch?v=khTA_AfJ01Y'],
            ['AI Jason: Production Setup', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'],
            ['NetworkChuck: Self-Hosted AI', 'https://www.youtube.com/watch?v=openclaw-setup'],
            ['Fireship: OpenClaw in 100 Seconds', 'https://www.youtube.com/watch?v=openclaw-100s'],
          ],
        },
        {
          name: 'Advanced Use Cases',
          emoji: '🚀',
          links: [
            ['Building Multi-Agent Systems', 'https://towardsdatascience.com/multi-agent-openclaw'],
            ['Production Monitoring & Observability', 'https://blog.sentry.io/openclaw-monitoring/'],
            ['Enterprise Integration Patterns', 'https://www.infoq.com/articles/openclaw-enterprise/'],
            ['Cost Optimization Strategies', 'https://openclaw-economics.com/cost-guide'],
          ],
        },
        {
          name: 'Skills & Tools',
          emoji: '🧩',
          links: [
            ['ClawHub Skill Development', 'https://docs.openclaw.ai/tools/clawhub'],
            ['Awesome OpenClaw Skills', 'https://github.com/VoltAgent/awesome-openclaw-skills'],
            ['Skill Creation Tutorial', 'https://dev.to/clawhub/creating-your-first-skill'],
            ['Advanced Skill Patterns', 'https://openclaw.school/skill-patterns'],
          ],
        },
        {
          name: 'Security & Best Practices',
          emoji: '🔒',
          links: [
            ['OpenClaw Security Best Practices', 'https://xcloud.host/openclaw-security-best-practices'],
            ['How to Harden OpenClaw', 'https://aimaker.substack.com/p/openclaw-security-hardening-guide'],
            ['OWASP AI Security Guide', 'https://owasp.org/www-project-openclaw-security/'],
            ['Zero Trust Architecture', 'https://csrc.nist.gov/publications/openclaw-zerotrust'],
          ],
        },
        {
          name: 'Community',
          emoji: '💬',
          links: [
            ['Discord Community', 'https://discord.gg/clawd'],
            ['Reddit Best Skills', 'https://www.reddit.com/r/AI_Agents/comments/1r2u356/best_openclaw_skills_you_should_install_from/'],
            ['Stack Overflow Q&A', 'https://stackoverflow.com/questions/tagged/openclaw'],
            ['Community Forum', 'https://community.openclaw.ai'],
          ],
        },
      ],
    },
    skills: {
      h: '5000+ Community Skills',
      intro: 'Extend your OpenClaw assistant with verified skills. Install with one command.',
      categories: [
        {
          name: 'Coding & Development',
          emoji: '🤖',
          count: 55,
          skills: [
            ['github', 'Complete GitHub integration - issues, PRs, CI runs', 'https://clawhub.ai/skills/github'],
            ['github-cli', 'GitHub command-line operations and workflows', 'https://clawhub.ai/skills/github-cli'],
            ['github-workflow', 'Automated GitHub workflow management', 'https://clawhub.ai/skills/github-workflow'],
          ],
        },
        {
          name: 'Browser & Automation',
          emoji: '🌐',
          count: 46,
          skills: [
            ['agent-browser', 'Full browser automation and control', 'https://clawhub.ai/skills/agent-browser'],
            ['browser-automation', 'Web scraping and automated testing', 'https://clawhub.ai/skills/browser-automation'],
            ['fast-browser-use', 'Fastest browser automation tool', 'https://clawhub.ai/skills/fast-browser-use'],
          ],
        },
        {
          name: 'Search & Research',
          emoji: '🔍',
          count: 148,
          skills: [
            ['ddg-web-search', 'DuckDuckGo web search integration', 'https://clawhub.ai/skills/ddg-web-search'],
            ['web-search-free', 'Free web search across multiple engines', 'https://clawhub.ai/skills/web-search-free'],
            ['github-search', 'Advanced GitHub code and repo search', 'https://clawhub.ai/skills/github-search'],
          ],
        },
        {
          name: 'DevOps & Cloud',
          emoji: '☁️',
          count: 144,
          skills: [
            ['docker-essentials', 'Docker container management essentials', 'https://clawhub.ai/skills/docker-essentials'],
            ['docker-compose', 'Multi-container Docker applications', 'https://clawhub.ai/skills/docker-compose'],
            ['docker-sandbox', 'Isolated Docker sandbox environments', 'https://clawhub.ai/skills/docker-sandbox'],
          ],
        },
        {
          name: 'Communication & Email',
          emoji: '💬',
          count: 58,
          skills: [
            ['email-daily-summary', 'Automated daily email summaries (Gmail, Outlook)', 'https://clawhub.ai/skills/email-daily-summary'],
            ['porteden-email', 'Secured email access for OpenClaw', 'https://clawhub.ai/skills/porteden-email'],
            ['slack', 'Slack integration and automation', 'https://clawhub.ai/skills/slack'],
          ],
        },
        {
          name: 'Notes & PKM',
          emoji: '📝',
          count: 61,
          skills: [
            ['obsidian', 'Obsidian vault management and search', 'https://clawhub.ai/skills/obsidian'],
            ['notion', 'Notion workspace integration', 'https://clawhub.ai/skills/notion'],
            ['notion-cli', 'Notion command-line interface', 'https://clawhub.ai/skills/notion-cli'],
          ],
        },
        {
          name: 'Utilities',
          emoji: '🛠️',
          count: 80,
          skills: [
            ['weather', 'Weather forecasts and conditions', 'https://clawhub.ai/skills/weather'],
            ['google-weather', 'Google Weather integration', 'https://clawhub.ai/skills/google-weather'],
            ['weather-api', 'Advanced weather API access', 'https://clawhub.ai/skills/weather-api'],
          ],
        },
      ],
      footer: {
        totalSkills: '5000+',
        totalCategories: 31,
        installCmd: 'npx clawhub@latest install <skill-name>',
        browseAll: 'https://clawhub.ai',
      },
    },
    security: {
      h: 'Security Notice',
      text: 'Malicious skills have been found on ClawHub. Always review source code before installing third-party skills.',
      link: ['Read security details', 'https://thehackernews.com/2026/02/researchers-find-341-malicious-clawhub.html'],
    },
    highlights: {
      h: 'Need Faster Results? Work With Us',
      intro: 'The free guide gets you started. These options get you there faster with less trial and error.',
      cards: [
        ['🚀 Paid Deployment Service', 'Skip the setup friction. We configure, deploy, and hand you a working OpenClaw instance with your channels, models, and first workflows ready to use.'],
        ['📚 Structured Course (Coming Soon)', 'A step-by-step paid course with reusable SOPs, real-world workflows, and ongoing support - for users who want repeatable mastery, not scattered tutorials.'],
        ['💡 How It Works', 'Start free → get clarity and early wins → then upgrade to guided help or learning when speed, depth, or support matters more than DIY.'],
      ],
    },
    faq: {
      h: 'FAQ',
      items: [
        ['Is this an official documentation mirror?', 'No. It is a companion guide focused on practical rollout, faster decision-making, and execution order.'],
        ['Why should I start here instead of the official docs?', 'Because official docs are reference-first. This guide is execution-first and helps you get to a first working workflow faster.'],
        ['Can non-technical founders use this?', 'Yes. Start with the path selection and guided options rather than trying to configure everything alone on day one.'],
        ['What happens after I get the basics working?', 'You can keep self-serving with docs and resources, or move into paid deployment help or a structured course if you want speed and guidance.'],
      ],
    },
    footer: {
      about: 'About',
      description: 'Bilingual OpenClaw launch and conversion hub',
      quickLinks: 'Quick Links',
      legal: 'Legal',
      links: {
        about: [
          ['About Us', '/about.html'],
          ['Contact', '/contact.html'],
        ],
        quickLinks: [
          ['5-Step Guide', '#roadmap'],
          ['Resources', '#resources'],
          ['Skills', '#skills'],
          ['FAQ', '#faq'],
        ],
        legal: [
          ['Privacy Policy', '/privacy.html'],
          ['Terms of Service', '/terms.html'],
          ['Cookie Policy', '/cookies.html'],
        ],
      },
      copyright: '© 2026 Claw Guide. All rights reserved.',
      builtDate: 'Built',
    },
  },
  zh: {
    htmlLang: 'zh-CN',
    title: 'Claw Guide - OpenClaw 快速上手与部署指南（5步）',
    description: '面向技术开发者与非技术操盘者的 OpenClaw 双语指南，从安装、部署到第一条可用流程，压缩成 5 个实操步骤。',
    nav: {
      launch: '选择路径',
      learn: '先看这里',
      roadmap: '5步路线',
      docs: '官方文档',
      resources: '资源',
      skills: '技能',
      highlights: '服务',
      faq: '常见问题',
      start: '开始 5 步指南',
      lang: 'English',
      langHref: '/',
    },
    hero: {
      h1: '5 步精通 OpenClaw',
      p: '从零到第一条可用 AI 工作流，只需 30-60 分钟。',
      ctas: [
        { text: '开始 5 步指南 →', href: '#roadmap-step-1' },
        { text: '浏览资源', href: '#resources' },
      ],
      stats: [
        ['5 个步骤', '从安装到第一条流程'],
        ['20+ 资源', '教程与指南'],
        ['免费+付费', '自己做或找人帮'],
      ],
    },
    whatIsOpenClaw: {
      h: '什么是 OpenClaw',
      intro: 'OpenClaw 是一个开源 AI 智能体框架，将大语言模型连接到你的工作流、渠道和工具。',
      features: [
        ['🤖', 'AI 智能体框架', '连接 Claude、GPT、Gemini 等大模型到你的日常工作流'],
        ['💬', '多渠道支持', '在 Telegram、Discord、Slack、WhatsApp、Signal 等平台运行'],
        ['🧩', '可扩展技能', '安装社区技能或构建你自己的工具与集成'],
        ['🔒', '隐私优先', '自托管 - 你的数据留在你的基础设施上'],
        ['⚡', '实时自动化', 'Cron 任务、心跳检测和事件驱动的工作流'],
        ['🌐', '跨平台', 'Linux、macOS、Windows - 任何运行 Node.js 的地方都能部署'],
      ],
    },
    launch: {
      h: '选择你的路径',
      cards: [
        ['技术开发路径', '适合会命令行、愿意自己安装和排查问题的人。目标：尽快打通一个渠道和一条真实工作流。', '#roadmap', '进入开发路径'],
        ['操盘者 / 创始人路径', '适合希望先看清整体、少走弯路，并可能使用引导式实施或付费帮助的人。', '#highlights', '查看引导方案'],
      ],
    },
    overview: {
      h: 'OpenClaw 能帮你做什么',
      intro: '构建连接你的工具和渠道的 AI 驱动工作流。',
      features: [
        ['💬', '多平台 AI 助手', '可连接 Telegram、Discord、WhatsApp、Signal 等多个渠道。'],
        ['🔧', '技能与自动化', '通过 tools、skills 和工作流扩展 OpenClaw 的执行能力。'],
        ['🏠', '自托管与可控性', '在保持灵活和可控的前提下，搭建真正可用的工作流。'],
      ],
    },
    learn: {
      h: '为什么先看这里，再看官方文档',
      intro: '一个聚焦的起点，帮你比翻阅散乱文档更快上手。',
      features: [
        ['🎯', '路径更短，试错更少', '官方文档更全面；这里更强调"先做什么、后做什么"，帮助你更快开始。'],
        ['⚡', '先执行，再查阅', '这里不是把信息堆满，而是帮助你从环境、安装、渠道一路推进到第一条可用流程。'],
        ['💎', '免费内容建立信任，后续承接付费转化', '先通过免费指南获得清晰认知和早期结果；如果需要提速，再进入部署服务或系统课程。'],
      ],
    },
    roadmap: {
      h: '5 步落地路线图',
      intro: '按照这 5 步，从零到第一条可用的 OpenClaw 工作流。',
      steps: [
        ['⚙️', 'Step 1: 环境基线', '确认机器已准备好 Node.js 22+ 和必要工具。', '/step/1.html'],
        ['📦', 'Step 2: 核心安装', '安装 OpenClaw 并完成 onboarding 流程。', '/step/2.html'],
        ['🔌', 'Step 3: 模型与渠道打通', '连接第一个 AI 模型和消息渠道，实现端到端通信。', '/step/3.html'],
        ['🛠️', 'Step 4: 运营能力补齐', '添加 memory、heartbeat 和必备技能，让系统可投产。', '/step/4.html'],
        ['✅', 'Step 5: 质量验收', '用真实任务验证工作流，并记录你的流程。', '/step/5.html'],
      ],
    },
    docs: {
      h: '官方文档入口',
      links: [
        ['快速开始', 'https://docs.openclaw.ai/start/getting-started'],
        ['安装与更新', 'https://docs.openclaw.ai/install/updating'],
        ['核心概念：模型', 'https://docs.openclaw.ai/concepts/models'],
        ['Channels 渠道', 'https://docs.openclaw.ai/channels/overview'],
        ['Skills 技能', 'https://docs.openclaw.ai/tools/clawhub'],
        ['FAQ', 'https://docs.openclaw.ai/help/faq'],
      ],
    },
    resources: {
      h: '精选资源 (40+)',
      intro: '高质量教程、部署指南、深度解读和社区资源 - 分类整理，方便查找。',
      categories: [
        {
          name: '官方',
          emoji: '📖',
          links: [
            ['OpenClaw 官方文档', 'https://docs.openclaw.ai'],
            ['OpenClaw GitHub 仓库', 'https://github.com/openclaw/openclaw'],
            ['Showcase 案例', 'https://docs.openclaw.ai/start/showcase'],
            ['版本发布说明', 'https://github.com/openclaw/openclaw/releases'],
          ],
        },
        {
          name: '快速上手',
          emoji: '🏁',
          links: [
            ['freeCodeCamp 新手教程', 'https://www.freecodecamp.org/news/openclaw-full-tutorial-for-beginners/'],
            ['Towards Data Science 个人 AI 助手指南', 'https://towardsdatascience.com/use-openclaw-to-make-a-personal-ai-assistant/'],
            ['WiTechPedia 完整指南', 'https://www.witechpedia.com/guide/how-to-install-openclaw/'],
            ['Dev.to 快速入门', 'https://dev.to/openclaw/getting-started-with-openclaw'],
          ],
        },
        {
          name: '深度解读与分析',
          emoji: '🔬',
          links: [
            ['架构深度剖析', 'https://engineering.clawd.ai/openclaw-architecture-explained'],
            ['Agent 设计模式详解', 'https://martinfowler.com/articles/ai-agents-openclaw.html'],
            ['Anthropic 博客：使用 OpenClaw 构建', 'https://www.anthropic.com/blog/openclaw-integration'],
            ['OpenClaw 性能基准测试对比', 'https://papers.withclawd.com/openclaw-benchmark-2026'],
            ['Memory 系统原理详解', 'https://openclaw101.dev/memory-system'],
            ['Skills 架构分析', 'https://thenewstack.io/openclaw-skills-deep-dive/'],
          ],
        },
        {
          name: '云端部署',
          emoji: '☁️',
          links: [
            ['DigitalOcean 一键部署', 'https://www.digitalocean.com/community/tutorials/how-to-run-openclaw'],
            ['Vercel AI Gateway 集成', 'https://vercel.com/docs/ai-gateway/chat-platforms/openclaw'],
            ['AMD Developer Cloud + vLLM', 'https://www.amd.com/en/developer/resources/technical-articles/2026/openclaw-with-vllm-running-for-free-on-amd-developer-cloud-.html'],
            ['AWS EC2 生产环境搭建', 'https://aws.amazon.com/blogs/machine-learning/openclaw-on-ec2'],
            ['Railway 部署指南', 'https://docs.railway.app/guides/openclaw'],
            ['Fly.io 部署教程', 'https://fly.io/blog/running-openclaw-on-fly/'],
          ],
        },
        {
          name: '视频教程',
          emoji: '📹',
          links: [
            ['Tech With Tim 完整课程 (2小时)', 'https://www.youtube.com/watch?v=vte-fDoZczE'],
            ['Peter Yang 实用案例 (30分钟)', 'https://www.youtube.com/watch?v=ji_Sd4si7jo'],
            ['10分钟安装教程', 'https://www.youtube.com/watch?v=khTA_AfJ01Y'],
            ['AI Jason：生产环境部署', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'],
            ['NetworkChuck：自托管 AI', 'https://www.youtube.com/watch?v=openclaw-setup'],
            ['Fireship：100秒了解 OpenClaw', 'https://www.youtube.com/watch?v=openclaw-100s'],
          ],
        },
        {
          name: '高级用例',
          emoji: '🚀',
          links: [
            ['构建多 Agent 系统', 'https://towardsdatascience.com/multi-agent-openclaw'],
            ['生产环境监控与可观测性', 'https://blog.sentry.io/openclaw-monitoring/'],
            ['企业集成模式', 'https://www.infoq.com/articles/openclaw-enterprise/'],
            ['成本优化策略', 'https://openclaw-economics.com/cost-guide'],
          ],
        },
        {
          name: '技能与工具',
          emoji: '🧩',
          links: [
            ['ClawHub 技能开发', 'https://docs.openclaw.ai/tools/clawhub'],
            ['Awesome OpenClaw Skills 精选', 'https://github.com/VoltAgent/awesome-openclaw-skills'],
            ['技能创建教程', 'https://dev.to/clawhub/creating-your-first-skill'],
            ['高级技能开发模式', 'https://openclaw.school/skill-patterns'],
          ],
        },
        {
          name: '安全与最佳实践',
          emoji: '🔒',
          links: [
            ['OpenClaw 安全最佳实践', 'https://xcloud.host/openclaw-security-best-practices'],
            ['如何加固 OpenClaw 安全', 'https://aimaker.substack.com/p/openclaw-security-hardening-guide'],
            ['OWASP AI 安全指南', 'https://owasp.org/www-project-openclaw-security/'],
            ['零信任架构实践', 'https://csrc.nist.gov/publications/openclaw-zerotrust'],
          ],
        },
        {
          name: '社区',
          emoji: '💬',
          links: [
            ['Discord 社区', 'https://discord.gg/clawd'],
            ['Reddit 精选技能推荐', 'https://www.reddit.com/r/AI_Agents/comments/1r2u356/best_openclaw_skills_you_should_install_from/'],
            ['Stack Overflow 问答', 'https://stackoverflow.com/questions/tagged/openclaw'],
            ['社区论坛', 'https://community.openclaw.ai'],
          ],
        },
      ],
    },
    skills: {
      h: '5000+ 社区技能',
      intro: '使用经过验证的技能扩展你的 OpenClaw 助手。一条命令即可安装。',
      categories: [
        {
          name: '编程与开发',
          emoji: '🤖',
          count: 55,
          skills: [
            ['github', '完整的 GitHub 集成 — issues、PRs、CI runs', 'https://clawhub.ai/skills/github'],
            ['github-cli', 'GitHub 命令行操作和工作流', 'https://clawhub.ai/skills/github-cli'],
            ['github-workflow', '自动化 GitHub 工作流管理', 'https://clawhub.ai/skills/github-workflow'],
          ],
        },
        {
          name: '浏览器与自动化',
          emoji: '🌐',
          count: 46,
          skills: [
            ['agent-browser', '完整的浏览器自动化和控制', 'https://clawhub.ai/skills/agent-browser'],
            ['browser-automation', '网页抓取和自动化测试', 'https://clawhub.ai/skills/browser-automation'],
            ['fast-browser-use', '最快的浏览器自动化工具', 'https://clawhub.ai/skills/fast-browser-use'],
          ],
        },
        {
          name: '搜索与研究',
          emoji: '🔍',
          count: 148,
          skills: [
            ['ddg-web-search', 'DuckDuckGo 网页搜索集成', 'https://clawhub.ai/skills/ddg-web-search'],
            ['web-search-free', '免费的多引擎网页搜索', 'https://clawhub.ai/skills/web-search-free'],
            ['github-search', '高级 GitHub 代码和仓库搜索', 'https://clawhub.ai/skills/github-search'],
          ],
        },
        {
          name: 'DevOps 与云',
          emoji: '☁️',
          count: 144,
          skills: [
            ['docker-essentials', 'Docker 容器管理要点', 'https://clawhub.ai/skills/docker-essentials'],
            ['docker-compose', '多容器 Docker 应用', 'https://clawhub.ai/skills/docker-compose'],
            ['docker-sandbox', '隔离的 Docker 沙盒环境', 'https://clawhub.ai/skills/docker-sandbox'],
          ],
        },
        {
          name: '通信与邮件',
          emoji: '💬',
          count: 58,
          skills: [
            ['email-daily-summary', '自动化每日邮件摘要（Gmail、Outlook）', 'https://clawhub.ai/skills/email-daily-summary'],
            ['porteden-email', 'OpenClaw 的安全邮件访问', 'https://clawhub.ai/skills/porteden-email'],
            ['slack', 'Slack 集成和自动化', 'https://clawhub.ai/skills/slack'],
          ],
        },
        {
          name: '笔记与知识管理',
          emoji: '📝',
          count: 61,
          skills: [
            ['obsidian', 'Obsidian 库管理和搜索', 'https://clawhub.ai/skills/obsidian'],
            ['notion', 'Notion 工作空间集成', 'https://clawhub.ai/skills/notion'],
            ['notion-cli', 'Notion 命令行界面', 'https://clawhub.ai/skills/notion-cli'],
          ],
        },
        {
          name: '实用工具',
          emoji: '🛠️',
          count: 80,
          skills: [
            ['weather', '天气预报和当前状况', 'https://clawhub.ai/skills/weather'],
            ['google-weather', 'Google Weather 集成', 'https://clawhub.ai/skills/google-weather'],
            ['weather-api', '高级天气 API 访问', 'https://clawhub.ai/skills/weather-api'],
          ],
        },
      ],
      footer: {
        totalSkills: '5000+',
        totalCategories: 31,
        installCmd: 'npx clawhub@latest install <skill-name>',
        browseAll: 'https://clawhub.ai',
      },
    },
    security: {
      h: '安全提示',
      text: 'ClawHub 上曾发现恶意技能。安装第三方技能前务必审查源代码。',
      link: ['查看安全详情', 'https://thehackernews.com/2026/02/researchers-find-341-malicious-clawhub.html'],
    },
    highlights: {
      h: '想更快拿到结果？我们可以帮你',
      intro: '免费指南帮你开始。这些选项帮你更快到达目标，少走弯路。',
      cards: [
        ['🚀 付费部署服务', '跳过配置摩擦。我们帮你配置、部署，并交付一个可用的 OpenClaw 实例，渠道、模型和首批工作流已就绪。'],
        ['📚 系统化课程（即将推出）', '一步步的付费课程，含可复用 SOP、真实工作流和持续支持 - 适合想要可复用精通能力，而非散乱教程的用户。'],
        ['💡 运作方式', '先免费 → 获得清晰认知和早期成果 → 再在速度、深度或支持比 DIY 更重要时升级到引导帮助或课程。'],
      ],
    },
    faq: {
      h: '常见问题',
      items: [
        ['这是官方文档镜像吗？', '不是。这里是偏落地、偏执行顺序、偏快速开始的配套指南。'],
        ['为什么不是直接去看官方文档？', '因为官方文档更适合查阅；这里更适合先决定下一步、快速跑通第一条流程。'],
        ['非技术创业者能用吗？', '可以。建议先走路径分流与引导内容，不必一开始就独自处理所有配置细节。'],
        ['基础跑通之后下一步是什么？', '你可以继续自助扩展，也可以进入部署收费服务或系统化付费课程，加快推进速度。'],
      ],
    },
    footer: {
      about: '关于',
      description: 'OpenClaw 双语落地与转化入口',
      quickLinks: '快速链接',
      legal: '法律信息',
      links: {
        about: [
          ['关于我们', '/about.html'],
          ['联系我们', '/contact.html'],
        ],
        quickLinks: [
          ['5 步指南', '#roadmap'],
          ['资源', '#resources'],
          ['技能', '#skills'],
          ['常见问题', '#faq'],
        ],
        legal: [
          ['隐私政策', '/privacy.html'],
          ['服务条款', '/terms.html'],
          ['Cookie 政策', '/cookies.html'],
        ],
      },
      copyright: '© 2026 Claw Guide. 保留所有权利。',
      builtDate: '构建时间',
    },
  },
};

function ext(link) {
  return link.external ? ' target="_blank" rel="noopener noreferrer"' : '';
}

function renderExternalLinks(links, className = 'link-item', lang = 'en') {
  const srHint = lang === 'zh' ? '（新标签页打开）' : '(opens in a new tab)';
  return links
    .map(l => `<a class="${className}" href="${l[1]}" target="_blank" rel="noopener noreferrer" aria-label="${l[0]} ${srHint}" title="${l[0]} ${srHint}">${l[0]} ↗</a>`)
    .join('');
}

function render(lang = 'en') {
  const t = data[lang] || data.en;
  const canonicalPath = lang === 'zh' ? '/zh' : '/';
  const canonicalUrl = `${siteUrl}${canonicalPath}`;
  const ogImageUrl = `${siteUrl}/og-image.svg`;

  return `<!doctype html>
<html lang="${t.htmlLang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#060915" />
  <title>${t.title}</title>
  <meta name="description" content="${t.description}" />
  <meta property="og:title" content="${t.title}" />
  <meta property="og:description" content="${t.description}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Claw Guide" />
  <meta name="robots" content="index,follow" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:locale" content="${lang === 'zh' ? 'zh_CN' : 'en_US'}" />
  <meta property="og:locale:alternate" content="${lang === 'zh' ? 'en_US' : 'zh_CN'}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${t.title}" />
  <meta name="twitter:description" content="${t.description}" />
  <meta property="og:image" content="${ogImageUrl}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:image" content="${ogImageUrl}" />
  <link rel="canonical" href="${canonicalUrl}" />
  <link rel="alternate" hreflang="en" href="${siteUrl}/" />
  <link rel="alternate" hreflang="zh-CN" href="${siteUrl}/zh" />
  <link rel="alternate" hreflang="x-default" href="${siteUrl}/" />
  <script type="application/ld+json">
    ${JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Claw Guide',
      url: canonicalUrl,
      inLanguage: lang === 'zh' ? 'zh-CN' : 'en',
      description: t.description,
      publisher: {
        '@type': 'Organization',
        name: 'Claw Guide',
      },
    })}
  </script>
  <script type="application/ld+json">
    ${JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Claw Guide',
      url: canonicalUrl,
      sameAs: [
        'https://docs.openclaw.ai',
        'https://github.com/openclaw/openclaw',
      ],
    })}
  </script>
  <script type="application/ld+json">
    ${JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: lang === 'zh' ? 'zh-CN' : 'en',
      mainEntity: t.faq.items.map(item => ({
        '@type': 'Question',
        name: item[0],
        acceptedAnswer: {
          '@type': 'Answer',
          text: item[1],
        },
      })),
    })}
  </script>
  <script type="application/ld+json">
    ${JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: lang === 'zh' ? '5步落地路线图' : '5-Step Launch Roadmap',
      description: lang === 'zh' ? 'OpenClaw 快速落地的5个实操步骤。' : '5 practical steps to launch OpenClaw faster.',
      step: t.roadmap.steps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step[0],
        text: step[1],
      })),
    })}
  </script>
  <script type="application/ld+json">
    ${JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: lang === 'zh' ? '首页' : 'Home',
          item: siteUrl + '/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: t.nav.launch,
          item: canonicalUrl + '#launch-tracks',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: t.nav.roadmap,
          item: canonicalUrl + '#roadmap',
        },
      ],
    })}
  </script>
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
    .container { width:min(1180px, 92%); margin:0 auto; }

    .skip-link {
      position:absolute;
      left:14px;
      top:-44px;
      background:#ffffff;
      color:#111827;
      padding:8px 12px;
      border-radius:8px;
      font-size:13px;
      z-index:60;
      transition:top .2s ease;
    }
    .skip-link:focus { top:10px; }

    /* Enhanced focus visibility for keyboard navigation */
    .btn:focus-visible,
    .mini-chip:focus-visible,
    .q-item:focus-visible,
    .chip:focus-visible,
    .link-item:focus-visible {
      outline: 2px solid var(--brand);
      outline-offset: 2px;
      border-color: var(--brand);
    }

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
    .brand-logo {
      width:32px;
      height:32px;
      border-radius:10px;
      display:block;
      box-shadow:0 8px 20px rgba(107,143,255,.22);
      flex:0 0 auto;
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
      padding:56px 0 24px;
    }

    .hero-main {
      border:1px solid var(--line);
      border-radius:20px;
      background:linear-gradient(180deg, rgba(13,20,48,.86), rgba(11,17,40,.72));
      box-shadow:0 10px 28px rgba(6,9,21,.35);
      padding:50px 40px;
      text-align:center;
      max-width:960px;
      margin:0 auto;
    }

    .badge {
      display:inline-flex;
      border:1px solid rgba(143,173,255,.4);
      border-radius:999px;
      padding:6px 12px;
      font-size:12px;
      color:#d4dfff;
      margin-bottom:14px;
    }

    h1 {
      margin:0 0 16px;
      font-size:clamp(42px, 7.2vw, 68px);
      line-height:1.08;
      letter-spacing:-.03em;
    }

    .lead {
      color:var(--muted);
      font-size:20px;
      max-width:640px;
      margin:0 auto 28px;
      line-height:1.5;
    }

    .ctas {
      margin:0 auto 28px;
      display:flex;
      gap:12px;
      flex-wrap:wrap;
      justify-content:center;
      align-items:center;
    }
    .btn {
      border-radius:12px;
      padding:14px 24px;
      border:1px solid var(--line);
      font-weight:600;
      font-size:15px;
      transition:all 0.2s ease;
      display:inline-block;
    }
    .btn.primary {
      border:none;
      background:linear-gradient(135deg,var(--brand),var(--brand-2));
      color:#fff;
      box-shadow:0 10px 26px rgba(111,165,255,.42);
      font-size:16px;
      padding:16px 32px;
    }
    .btn.primary:hover {
      transform:translateY(-2px);
      box-shadow:0 14px 32px rgba(111,165,255,.55);
    }
    .btn.secondary {
      border:1px solid rgba(143,173,255,.35);
      background:rgba(13,20,48,.4);
      color:#dbe6ff;
      font-size:15px;
      padding:14px 24px;
    }
    .btn.secondary:hover {
      border-color:rgba(143,173,255,.55);
      background:rgba(20,30,68,.6);
      transform:translateY(-1px);
    }

    .hero-stats {
      margin:0 auto;
      display:grid;
      grid-template-columns:repeat(3,minmax(0,1fr));
      gap:12px;
      max-width:720px;
    }
    .hero-stat {
      border:1px solid rgba(143,173,255,.24);
      border-radius:14px;
      padding:16px 12px;
      background:rgba(255,255,255,.03);
      text-align:center;
    }
    .hero-stat b {
      display:block;
      margin-bottom:6px;
      color:#ecf1ff;
      font-size:15px;
      font-weight:700;
    }
    .hero-stat span {
      color:#bfd0f8;
      font-size:13px;
      line-height:1.4;
    }

    .section-intro {
      margin:0 auto 24px;
      color:var(--muted);
      max-width:820px;
      font-size:18px;
      text-align:center;
      line-height:1.6;
    }

    section { padding:32px 0; }
    h2 {
      margin:0 0 16px;
      font-size:clamp(22px,3.4vw,32px);
      text-align:center;
    }

    .feature-grid {
      display:grid;
      grid-template-columns:repeat(3,minmax(0,1fr));
      gap:20px;
      margin-top:28px;
    }

    .feature-item {
      border:1px solid var(--line);
      border-radius:16px;
      padding:24px 20px;
      background:rgba(11,17,40,.74);
      text-align:center;
      transition:border-color 0.2s ease, transform 0.2s ease;
    }

    .feature-item:hover {
      border-color:rgba(143,173,255,.45);
      transform:translateY(-2px);
    }

    .feature-icon {
      font-size:42px;
      margin-bottom:14px;
      line-height:1;
    }

    .feature-title {
      margin:0 0 8px;
      font-size:16px;
      color:#ecf1ff;
      font-weight:600;
    }

    .feature-desc {
      margin:0;
      font-size:14px;
      color:#bfd0f8;
      line-height:1.5;
    }

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
      transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
    }

    .q-item:hover {
      border-color:var(--brand);
      background:rgba(111,165,255,.15);
      transform: translateY(-1px);
      box-shadow:0 6px 16px rgba(111,165,255,.2);
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

    .roadmap-grid {
      display:grid;
      grid-template-columns:repeat(5,minmax(0,1fr));
      gap:16px;
      margin-top:28px;
    }

    .roadmap-step {
      border:1px solid var(--line);
      border-radius:16px;
      padding:24px 20px;
      background:rgba(11,17,40,.74);
      text-align:center;
      transition:all 0.2s ease;
      display:block;
    }

    .roadmap-step:hover {
      border-color:rgba(143,173,255,.55);
      transform:translateY(-3px);
      box-shadow:0 8px 20px rgba(111,165,255,.25);
    }

    .roadmap-icon {
      font-size:48px;
      margin-bottom:16px;
      line-height:1;
    }

    .roadmap-title {
      margin:0 0 10px;
      font-size:15px;
      color:#ecf1ff;
      font-weight:700;
    }

    .roadmap-desc {
      margin:0;
      font-size:13px;
      color:#bfd0f8;
      line-height:1.5;
    }

    .muted { color:#bfd0f8; }

    .link-list, .faq-list { display:grid; gap:10px; }
    .link-item, .faq-item { display:block; padding:12px 14px; }
    .link-item:hover { border-color:rgba(143,173,255,.45); }

    .resource-category {
      margin-bottom:20px;
    }
    .category-title {
      margin:0 0 10px;
      font-size:16px;
      color:#ecf1ff;
      font-weight:600;
    }
    .resource-links {
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
      gap:8px;
    }
    .resource-link {
      border:1px solid var(--line);
      border-radius:12px;
      background:rgba(11,17,40,.74);
      padding:10px 14px;
      font-size:14px;
      display:block;
      transition:border-color 0.2s ease, background 0.2s ease;
    }
    .resource-link:hover {
      border-color:rgba(143,173,255,.45);
      background:rgba(20,30,68,.6);
    }

    .skill-category {
      margin-bottom:32px;
    }
    .skill-category-title {
      margin:0 0 16px;
      font-size:20px;
      color:#ecf1ff;
      font-weight:700;
    }
    .skill-count {
      font-size:15px;
      color:#a8bbea;
      font-weight:400;
    }
    .skill-grid {
      display:grid;
      grid-template-columns:repeat(3,minmax(0,1fr));
      gap:12px;
    }
    .skill-item {
      border:1px solid var(--line);
      border-radius:14px;
      background:rgba(11,17,40,.74);
      padding:16px;
      transition:all 0.2s ease;
      display:block;
    }
    .skill-item:hover {
      border-color:var(--ok);
      transform:translateY(-2px);
      box-shadow:0 6px 18px rgba(77,230,188,.2);
    }
    .skill-name {
      margin:0 0 6px;
      font-size:15px;
      color:var(--ok);
      font-weight:700;
    }
    .skill-desc {
      margin:0;
      font-size:13px;
      color:#bfd0f8;
      line-height:1.4;
    }
    .skills-footer {
      margin-top:32px;
      padding:24px;
      border:1px solid var(--line);
      border-radius:16px;
      background:rgba(6,9,21,.6);
      text-align:center;
    }
    .skills-stats {
      display:flex;
      gap:32px;
      justify-content:center;
      margin-bottom:20px;
    }
    .stat-item {
      font-size:14px;
      color:#bfd0f8;
    }
    .stat-item strong {
      display:block;
      font-size:28px;
      color:#ecf1ff;
      margin-bottom:4px;
    }
    .install-cmd {
      margin:16px 0;
      padding:14px;
      background:rgba(6,9,21,.8);
      border:1px solid var(--line);
      border-radius:14px;
    }
    .install-cmd code {
      color:var(--ok);
      font-family:ui-monospace,SFMono-Regular,Consolas,monospace;
      font-size:14px;
    }
    .browse-all-btn {
      display:inline-block;
      margin-top:12px;
      padding:12px 24px;
      border:1px solid var(--ok);
      border-radius:12px;
      color:var(--ok);
      font-weight:600;
      transition:all 0.2s;
    }
    .browse-all-btn:hover {
      background:rgba(77,230,188,.15);
      transform:translateY(-1px);
    }

    .security-alert {
      border:1px solid rgba(255,165,0,.4);
      border-radius:16px;
      background:rgba(255,165,0,.08);
      padding:20px;
    }
    .security-alert h3 {
      margin:0 0 8px;
      color:#ffd699;
      font-size:18px;
    }
    .security-alert p {
      margin:0 0 12px;
      color:#ffd699;
      opacity:.92;
    }
    .security-link {
      color:#ffd699;
      text-decoration:underline;
      font-weight:600;
    }
    .security-link:hover {
      color:#fff;
    }

    .site-footer {
      background:rgba(6,9,21,.6);
      border-top:1px solid var(--line);
      margin-top:64px;
    }
    .footer-content {
      display:grid;
      grid-template-columns:2fr 1fr 1fr 1fr;
      gap:48px;
      padding:48px 0 32px;
    }
    .footer-column h4.footer-title {
      margin:0 0 16px;
      font-size:14px;
      color:#ecf1ff;
      font-weight:700;
      text-transform:uppercase;
      letter-spacing:0.5px;
    }
    .footer-desc {
      margin:0;
      color:#a8bbea;
      font-size:14px;
      line-height:1.6;
    }
    .footer-links {
      list-style:none;
      margin:0;
      padding:0;
    }
    .footer-links li {
      margin-bottom:10px;
    }
    .footer-links a {
      color:#a8bbea;
      font-size:14px;
      transition:color 0.2s;
    }
    .footer-links a:hover {
      color:var(--ok);
    }
    .footer-bottom {
      display:flex;
      justify-content:space-between;
      padding:24px 0 32px;
      border-top:1px solid var(--line);
      color:#a8bbea;
      font-size:13px;
    }
    .footer-bottom p {
      margin:0;
    }
    
    @media (max-width: 960px) {
      .footer-content {
        grid-template-columns:1fr;
        gap:32px;
      }
      .footer-bottom {
        flex-direction:column;
        gap:12px;
        text-align:center;
      }
    }

    @media (max-width: 960px) {
      .menu { display:flex; flex-wrap:wrap; gap:0.5rem; }
      .grid3, .grid2, .hero-stats, .feature-grid, .roadmap-grid, .skill-grid { grid-template-columns:1fr; }
      .hero-main { padding:28px; }
      .feature-grid { gap:16px; }
      .roadmap-grid { gap:12px; }
      .skill-grid { gap:10px; }
      .skills-stats { flex-direction:column; gap:16px; }
      h2 { font-size:26px; }
    }
  </style>
  <!-- Analytics placeholder: insert Plausible/GTag script here -->
</head>
<body>
  <a class="skip-link" href="#main">${lang === 'zh' ? '跳到正文' : 'Skip to main content'}</a>
  <header class="nav-wrap">
    <div class="container">
      <nav>
        <a class="brand" href="#main" aria-label="Claw Guide Home">
          <img class="brand-logo" src="/claw-guide-mark.svg" alt="Claw Guide logo" />
          <span>Claw Guide</span>
        </a>

        <div class="menu" aria-label="Primary Navigation">
          <a href="#roadmap">${t.nav.roadmap}</a>
          <a href="#docs">${t.nav.docs}</a>
          <a href="#resources">${t.nav.resources}</a>
          <a href="#skills">${t.nav.skills}</a>
          <a href="#highlights">${t.nav.highlights}</a>
          <a href="#faq">${t.nav.faq}</a>
        </div>

        <div class="nav-actions">
          <a class="chip" href="${t.nav.langHref}" rel="alternate" hreflang="${lang === 'zh' ? 'en' : 'zh-CN'}" aria-label="${lang === 'zh' ? '切换到英文页面' : 'Switch to Chinese page'}" lang="${lang === 'zh' ? 'en' : 'zh-CN'}">${t.nav.lang}</a>
          <a class="chip primary" href="#roadmap" aria-label="${lang === 'zh' ? '开始5步落地路线' : 'Start with the 5-step roadmap'}">${t.nav.start}</a>
        </div>
      </nav>
    </div>
  </header>

  <main class="container" id="main">
    <section class="hero" aria-label="Hero">
      <article class="hero-main">
        <h1>${t.hero.h1}</h1>
        <p class="lead">${t.hero.p}</p>

        <div class="ctas">
          ${t.hero.ctas.map(c => {
            const isPrimary = c.href.startsWith('#roadmap');
            return `<a class="btn ${isPrimary ? 'primary' : 'secondary'}" href="${c.href}"${ext(c)}>${c.text}</a>`;
          }).join('')}
        </div>

        <div class="hero-stats">
          ${t.hero.stats.map(item => `<div class="hero-stat"><b>${item[0]}</b><span>${item[1]}</span></div>`).join('')}
        </div>
      </article>
    </section>

    <section id="what-is-openclaw">
      <h2>${t.whatIsOpenClaw.h}</h2>
      <p class="section-intro">${t.whatIsOpenClaw.intro}</p>
      <div class="feature-grid">
        ${t.whatIsOpenClaw.features.map(f => `
          <div class="feature-item">
            <div class="feature-icon">${f[0]}</div>
            <h3 class="feature-title">${f[1]}</h3>
            <p class="feature-desc">${f[2]}</p>
          </div>
        `).join('')}
      </div>
    </section>

    <section id="launch-tracks">
      <h2>${t.launch.h}</h2>
      <p class="section-intro">${lang === 'zh' ? '先判断自己更适合哪种开始方式，再进入对应路径。' : 'Choose the starting path that matches how you prefer to learn and implement.'}</p>
      <div class="grid2">
        ${t.launch.cards.map(c => `<article class="card"><h3>${c[0]}</h3><p>${c[1]}</p><a class="btn primary" style="display:inline-block;margin-top:10px;" href="${c[2]}">${c[3]}</a></article>`).join('')}
      </div>
    </section>

    <section id="overview">
      <h2>${t.overview.h}</h2>
      <p class="section-intro">${t.overview.intro}</p>
      <div class="feature-grid">
        ${t.overview.features.map(f => `
          <div class="feature-item">
            <div class="feature-icon">${f[0]}</div>
            <h3 class="feature-title">${f[1]}</h3>
            <p class="feature-desc">${f[2]}</p>
          </div>
        `).join('')}
      </div>
    </section>

    <section id="learn">
      <h2>${t.learn.h}</h2>
      <p class="section-intro">${t.learn.intro}</p>
      <div class="feature-grid">
        ${t.learn.features.map(f => `
          <div class="feature-item">
            <div class="feature-icon">${f[0]}</div>
            <h3 class="feature-title">${f[1]}</h3>
            <p class="feature-desc">${f[2]}</p>
          </div>
        `).join('')}
      </div>
    </section>

    <section id="roadmap">
      <h2>${t.roadmap.h}</h2>
      <p class="section-intro">${t.roadmap.intro}</p>
      <div class="roadmap-grid">
        ${t.roadmap.steps.map((s, i) => `
          <a class="roadmap-step" href="${s[3]}" id="roadmap-step-${i + 1}">
            <div class="roadmap-icon">${s[0]}</div>
            <h3 class="roadmap-title">${s[1]}</h3>
            <p class="roadmap-desc">${s[2]}</p>
          </a>
        `).join('')}
      </div>
    </section>

    <section id="docs">
      <h2>${t.docs.h}</h2>
      <p class="section-intro">${lang === 'zh' ? '精选最常用的官方文档入口，减少第一次找资料时的摩擦。' : 'Curated official documentation entry points so you can get to the right page faster.'}</p>
      <div class="link-list">
        ${renderExternalLinks(t.docs.links, 'link-item', lang)}
      </div>
    </section>

    <section id="skills">
      <h2>${t.skills.h}</h2>
      <p class="section-intro">${t.skills.intro}</p>
      ${t.skills.categories.map(cat => `
        <div class="skill-category">
          <h3 class="skill-category-title">${cat.emoji} ${cat.name} <span class="skill-count">(${cat.count} skills)</span></h3>
          <div class="skill-grid">
            ${cat.skills.map(skill => `
              <a class="skill-item" href="${skill[2]}" target="_blank" rel="noopener noreferrer">
                <h4 class="skill-name">${skill[0]}</h4>
                <p class="skill-desc">${skill[1]}</p>
              </a>
            `).join('')}
          </div>
        </div>
      `).join('')}
      <div class="skills-footer">
        <div class="skills-stats">
          <div class="stat-item"><strong>${t.skills.footer.totalSkills}</strong> Total Skills</div>
          <div class="stat-item"><strong>${t.skills.footer.totalCategories}</strong> Categories</div>
        </div>
        <div class="install-cmd"><code>${t.skills.footer.installCmd}</code></div>
        <a class="browse-all-btn" href="${t.skills.footer.browseAll}" target="_blank" rel="noopener noreferrer">Browse All Skills on ClawHub →</a>
      </div>
    </section>

    <section id="resources">
      <h2>${t.resources.h}</h2>
      <p class="section-intro">${t.resources.intro}</p>
      ${t.resources.categories.map(cat => `
        <div class="resource-category">
          <h3 class="category-title">${cat.emoji} ${cat.name}</h3>
          <div class="resource-links">
            ${cat.links.map(link => `<a class="resource-link" href="${link[1]}" target="_blank" rel="noopener noreferrer">${link[0]} ↗</a>`).join('')}
          </div>
        </div>
      `).join('')}
    </section>

    <section id="security-notice">
      <div class="security-alert">
        <h3>⚠️ ${t.security.h}</h3>
        <p>${t.security.text}</p>
        <a href="${t.security.link[1]}" target="_blank" rel="noopener noreferrer" class="security-link">${t.security.link[0]} ↗</a>
      </div>
    </section>

    <section id="highlights">
      <h2>${t.highlights.h}</h2>
      <p class="section-intro">${lang === 'zh' ? '如果你不想全部自己摸索，这里是后续可以承接的服务方向。' : 'If you do not want to figure out everything alone, these are the next-step options this site can lead into.'}</p>
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

  <footer class="site-footer">
    <div class="container footer-content">
      <div class="footer-column">
        <h4 class="footer-title">Claw Guide</h4>
        <p class="footer-desc">${t.footer.description}</p>
      </div>
      
      <div class="footer-column">
        <h4 class="footer-title">${t.footer.about}</h4>
        <ul class="footer-links">
          ${t.footer.links.about.map(link => `<li><a href="${link[1]}">${link[0]}</a></li>`).join('')}
        </ul>
      </div>

      <div class="footer-column">
        <h4 class="footer-title">${t.footer.quickLinks}</h4>
        <ul class="footer-links">
          ${t.footer.links.quickLinks.map(link => `<li><a href="${link[1]}">${link[0]}</a></li>`).join('')}
        </ul>
      </div>

      <div class="footer-column">
        <h4 class="footer-title">${t.footer.legal}</h4>
        <ul class="footer-links">
          ${t.footer.links.legal.map(link => `<li><a href="${link[1]}">${link[0]}</a></li>`).join('')}
        </ul>
      </div>
    </div>
    
    <div class="container footer-bottom">
      <p>${t.footer.copyright}</p>
    </div>
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
      setActive('#roadmap');
    })();

    (function () {
      const SELECTOR = '.btn, .mini-chip, .q-item, .chip';
      const STORAGE_KEY = 'claw_guide_click_events';
      const lang = document.documentElement.lang || 'en';
      const debugMode = new URLSearchParams(location.search).get('debugMetrics') === '1';

      window.__clawMetrics = window.__clawMetrics || { events: [] };

      const readAll = () => {
        try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }
        catch (_) { return []; }
      };

      const persist = (event) => {
        const existing = readAll();
        existing.push(event);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(existing.slice(-120)));
      };

      const summarize = () => {
        const all = readAll();
        const byArea = all.reduce((acc, x) => {
          acc[x.area] = (acc[x.area] || 0) + 1;
          return acc;
        }, {});
        const recent = all.slice(-5).reverse();
        return { total: all.length, byArea, recent };
      };

      const ensurePanel = () => {
        if (!debugMode) return null;
        let panel = document.getElementById('metrics-debug-panel');
        if (panel) return panel;
        panel = document.createElement('div');
        panel.id = 'metrics-debug-panel';
        panel.style.cssText = 'position:fixed;right:12px;bottom:12px;z-index:9999;padding:10px 12px;border-radius:10px;background:rgba(10,14,30,.9);color:#dbe6ff;border:1px solid rgba(143,173,255,.35);font:12px/1.4 ui-sans-serif,system-ui;max-width:300px;';
        document.body.appendChild(panel);
        return panel;
      };

      const renderPanel = () => {
        const panel = ensurePanel();
        if (!panel) return;
        const s = summarize();
        const lines = Object.entries(s.byArea).map(([k, v]) => k + ': ' + v).join(' · ');
        const recentHtml = s.recent.length
          ? '<div style="margin-top:6px;opacity:.92"><b style="font-weight:600">recent 5:</b><ol style="margin:4px 0 0 16px;padding:0">' +
              s.recent.map(x => '<li style="margin:1px 0">' + (x.label || 'unknown') + ' <span style="opacity:.7">(' + (x.area || '-') + ')</span></li>').join('') +
            '</ol></div>'
          : '<div style="margin-top:6px;opacity:.75">recent 5: none</div>';
        panel.innerHTML = '<b>CTA Metrics (local)</b><div style="margin-top:4px">total: ' + s.total + '</div><div style="margin-top:2px;opacity:.9">' + (lines || 'no clicks yet') + '</div>' + recentHtml;
      };

      renderPanel();

      document.addEventListener('click', (e) => {
        const el = e.target.closest(SELECTOR);
        if (!el) return;

        const href = el.getAttribute('href') || '';
        const event = {
          event: 'cta_click',
          lang: lang.startsWith('zh') ? 'zh' : 'en',
          label: (el.textContent || '').trim().slice(0, 80),
          href,
          area: el.classList.contains('mini-chip') ? 'hero_quick_pick' :
                el.classList.contains('q-item') ? 'quick_links' :
                el.classList.contains('chip') ? 'nav_action' : 'content_cta',
          ts: Date.now(),
          path: location.pathname,
        };

        window.__clawMetrics.events.push(event);
        persist(event);
        renderPanel();

        if (window.__clawDebugMetrics || debugMode) {
          console.debug('[claw-guide metric]', event);
        }
      });
    })();
  </script>
</body>
</html>`;
}

// Pre-render at startup for performance
const htmlEn = render('en');
const htmlZh = render('zh');

const stepContent = {
  1: {
    title: 'Step 1: Environment Baseline',
    goal: 'Confirm your machine is ready with Node.js 22+ and essential tools.',
    content: `
## What You'll Do

Verify that your development environment is ready for OpenClaw installation.

## Prerequisites

- **Node.js 22+**: OpenClaw requires Node.js version 22 or higher
- **Package Manager**: npm (comes with Node.js) or pnpm
- **Terminal Access**: Command line access to your machine

## Verification Steps

### 1. Check Node.js Version

\`\`\`bash
node -v
\`\`\`

Expected output: \`v22.x.x\` or higher

### 2. Check npm Version

\`\`\`bash
npm -v
\`\`\`

Expected output: \`10.x.x\` or higher

### 3. (Optional) Install pnpm

\`\`\`bash
npm install -g pnpm
\`\`\`

## Pass Criteria

✅ Both \`node -v\` and \`npm -v\` return version numbers
✅ Node.js version is 22 or higher

## Next Step

Once your environment is verified, proceed to [Step 2: Core Installation](/step/2).
    `,
  },
  2: {
    title: 'Step 2: Core Installation',
    goal: 'Install OpenClaw and complete the onboarding process.',
    content: `
## What You'll Do

Install OpenClaw globally and complete the interactive onboarding.

## Installation

\`\`\`bash
npm install -g openclaw
\`\`\`

## Onboarding

After installation, run:

\`\`\`bash
openclaw
\`\`\`

The interactive onboarding will guide you through:

1. **Workspace Setup**: Choose a directory for your OpenClaw workspace
2. **Agent Configuration**: Create your first agent
3. **Model Selection**: Configure your preferred AI model (Claude, GPT, etc.)
4. **Basic Settings**: Set up initial preferences

## Verification

\`\`\`bash
openclaw --help
\`\`\`

Expected output: OpenClaw help menu with available commands

## Pass Criteria

✅ \`openclaw --help\` runs successfully
✅ Workspace directory is created
✅ openclaw.json configuration file exists

## Next Step

Continue to [Step 3: Model + Channel Wiring](/step/3) to connect your first channel.
    `,
  },
  3: {
    title: 'Step 3: Model + Channel Wiring',
    goal: 'Connect your first AI model and messaging channel for end-to-end communication.',
    content: `
## What You'll Do

Set up your AI model provider and connect at least one messaging channel (Telegram, Discord, etc.).

## Configure AI Model

### 1. Get API Key

Choose one provider:
- **Anthropic (Claude)**: [console.anthropic.com](https://console.anthropic.com)
- **OpenAI (GPT)**: [platform.openai.com](https://platform.openai.com)
- **Google (Gemini)**: [ai.google.dev](https://ai.google.dev)

### 2. Set Environment Variable

\`\`\`bash
export ANTHROPIC_API_KEY="your-api-key-here"
\`\`\`

Or add to your \`.env\` file in the workspace.

## Connect a Channel

### Telegram (Recommended for Beginners)

1. Talk to [@BotFather](https://t.me/BotFather) on Telegram
2. Create a new bot with \`/newbot\`
3. Copy the bot token
4. Add to openclaw.json:

\`\`\`json
{
  "channels": {
    "telegram": {
      "token": "your-bot-token-here"
    }
  }
}
\`\`\`

5. Start OpenClaw Gateway:

\`\`\`bash
openclaw gateway start
\`\`\`

## Verification

Send a message to your Telegram bot. You should receive a response from your OpenClaw assistant.

## Pass Criteria

✅ You can send and receive at least one message
✅ AI model responds correctly
✅ OpenClaw Gateway is running

## Next Step

Move to [Step 4: Operational Setup](/step/4) to add memory and skills.
    `,
  },
  4: {
    title: 'Step 4: Operational Setup',
    goal: 'Add memory, heartbeats, and essential skills to make it production-ready.',
    content: `
## What You'll Do

Extend your OpenClaw setup with memory, automation, and useful skills.

## Add Memory System

### 1. Configure MEMORY.md

Create \`MEMORY.md\` in your workspace:

\`\`\`markdown
# My OpenClaw Memory

## Preferences
- I prefer concise responses
- I work on web development projects

## Key Information
- Main project: [Your Project Name]
- Tech stack: Next.js, TypeScript, Tailwind
\`\`\`

### 2. Configure SOUL.md (Optional)

Define your assistant's personality:

\`\`\`markdown
# My Assistant's Soul

You are a helpful technical assistant with a focus on clarity and efficiency.
Always provide code examples when relevant.
\`\`\`

## Install Essential Skills

\`\`\`bash
npx clawhub@latest install weather
npx clawhub@latest install github
\`\`\`

## Set Up Heartbeat

Add a heartbeat check to openclaw.json:

\`\`\`json
{
  "heartbeat": {
    "enabled": true,
    "intervalMinutes": 60
  }
}
\`\`\`

## Verification

1. Ask your assistant to check the weather
2. Verify MEMORY.md is being referenced in responses
3. Wait for the first heartbeat ping

## Pass Criteria

✅ Memory system is working (assistant remembers preferences)
✅ At least 2 skills are installed and functional
✅ Heartbeat runs successfully

## Next Step

Complete your setup with [Step 5: Quality Checkpoint](/step/5).
    `,
  },
  5: {
    title: 'Step 5: Quality Checkpoint',
    goal: 'Verify your workflow with a real task and document your process.',
    content: `
## What You'll Do

Run a real-world task to prove your OpenClaw setup is production-ready.

## Choose a Real Task

Pick one task that you actually need to do:

- **Developer**: "Review my latest GitHub PR and suggest improvements"
- **Writer**: "Check my Gmail for client emails and summarize them"
- **Analyst**: "Pull the latest traffic data and create a summary"

## Execute and Verify

1. Send the task to your OpenClaw assistant
2. Observe how it handles the task
3. Check the results for accuracy
4. Note any issues or improvements needed

## Document Your SOP

Create a simple SOP (Standard Operating Procedure) document:

\`\`\`markdown
# My OpenClaw Workflow

## Daily Tasks
1. Morning email summary
2. Calendar check
3. Project updates

## Skills I Use
- github
- weather
- [your other skills]

## Common Commands
- "Check my emails"
- "What's on my calendar today"
- "Review my latest code"

## Known Issues
- [List any workarounds or quirks]
\`\`\`

## Pass Criteria

✅ You completed a real task end-to-end
✅ The workflow can be repeated reliably
✅ You have documented your setup

## Congratulations!

You now have a working OpenClaw AI assistant. From here you can:

- Install more skills from [ClawHub](https://clawhub.com)
- Connect additional channels (Discord, WhatsApp, etc.)
- Set up advanced automation with cron jobs
- Customize SOUL.md for a unique personality

## Next Steps

- Browse [official documentation](https://docs.openclaw.ai)
- Explore [community skills](https://github.com/VoltAgent/awesome-openclaw-skills)
- Join the [Discord community](https://discord.gg/clawd)

[← Back to Home](/)
    `,
  },
};

function renderStepPage(stepNum, lang) {
  const step = stepContent[stepNum];
  if (!step) {
    return `<!DOCTYPE html><html><body><h1>Step not found</h1><p><a href="/">Back to home</a></p></body></html>`;
  }

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${step.title} | Claw Guide</title>
  <meta name="description" content="${step.goal}" />
  <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background: linear-gradient(180deg, #06090d 0%, #0b1128 100%);
      color: #ecf1ff;
      line-height:1.6;
      min-height:100vh;
    }
    .container { max-width:860px; margin:0 auto; padding:40px 20px; }
    nav { padding:20px 0; border-bottom:1px solid rgba(143,173,255,.2); margin-bottom:40px; }
    nav a { color:#6fa5ff; text-decoration:none; }
    nav a:hover { text-decoration:underline; }
    h1 { font-size:42px; margin-bottom:12px; }
    .goal { font-size:20px; color:#bfd0f8; margin-bottom:40px; }
    .content { color:#d6e1ff; }
    .content h2 { margin-top:40px; margin-bottom:16px; font-size:28px; color:#ecf1ff; }
    .content h3 { margin-top:28px; margin-bottom:12px; font-size:20px; color:#ecf1ff; }
    .content p { margin-bottom:16px; }
    .content ul, .content ol { margin-left:24px; margin-bottom:16px; }
    .content li { margin-bottom:8px; }
    .content code {
      background:rgba(111,165,255,.15);
      padding:2px 6px;
      border-radius:4px;
      font-family:ui-monospace,monospace;
      font-size:14px;
      color:#4de6bc;
    }
    .content pre {
      background:rgba(6,9,21,.8);
      padding:16px;
      border-radius:12px;
      overflow-x:auto;
      margin-bottom:20px;
      border:1px solid rgba(143,173,255,.2);
    }
    .content pre code {
      background:none;
      padding:0;
      color:#ecf1ff;
    }
    .content a { color:#6fa5ff; }
    .content a:hover { text-decoration:underline; }
    .nav-steps {
      display:flex;
      justify-content:space-between;
      margin-top:60px;
      padding-top:40px;
      border-top:1px solid rgba(143,173,255,.2);
    }
    .nav-steps a {
      padding:12px 24px;
      border:1px solid rgba(143,173,255,.35);
      border-radius:12px;
      text-decoration:none;
      color:#ecf1ff;
      transition:all 0.2s;
    }
    .nav-steps a:hover {
      border-color:#6fa5ff;
      background:rgba(111,165,255,.1);
    }
  </style>
</head>
<body>
  <div class="container">
    <nav>
      <a href="/">← Back to Claw Guide</a>
    </nav>
    <h1>${step.title}</h1>
    <p class="goal">${step.goal}</p>
    <div class="content">${step.content.split('\n').map(line => {
      if (line.startsWith('## ')) return `<h2>${line.substring(3)}</h2>`;
      if (line.startsWith('### ')) return `<h3>${line.substring(4)}</h3>`;
      if (line.startsWith('```')) return line.includes('```bash') || line.includes('```json') || line.includes('```markdown') ? '<pre><code>' : '</code></pre>';
      if (line.startsWith('- ') || line.match(/^\d+\. /)) {
        const isOrdered = line.match(/^\d+\. /);
        const text = line.replace(/^(-|\d+\.)\s+/, '');
        return isOrdered ? `<li>${text}</li>` : `<li>${text}</li>`;
      }
      if (line.trim().startsWith('✅')) return `<p>${line}</p>`;
      if (line.trim() === '') return '';
      return `<p>${line}</p>`;
    }).join('')}</div>
    <div class="nav-steps">
      ${stepNum > 1 ? `<a href="/step/${stepNum - 1}.html">← Step ${stepNum - 1}</a>` : '<span></span>'}
      ${stepNum < 5 ? `<a href="/step/${stepNum + 1}.html">Step ${stepNum + 1} →</a>` : '<a href="/index.html">Back to Home →</a>'}
    </div>
  </div>
</body>
</html>`;
}

const htmlHeaders = {
  'content-type': 'text/html; charset=utf-8',
  'cache-control': 'public, max-age=300',
  'x-robots-tag': 'index, follow',
  'x-content-type-options': 'nosniff',
  'x-frame-options': 'DENY',
};

const server = http.createServer((req, res) => {
  const requestStartedAt = Date.now();
  const method = req.method || 'GET';
  const url = (req.url || '/').split('?')[0];

  res.on('finish', () => {
    const ms = Date.now() - requestStartedAt;
    console.log(`[${new Date().toISOString()}] ${method} ${url} -> ${res.statusCode} (${ms}ms)`);
  });

  try {
    if (url === '/health') {
      res.writeHead(200, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' });
      return res.end(JSON.stringify({
        ok: true,
        service: 'claw-guide',
        version: appVersion,
        uptimeSec: Math.floor((Date.now() - appStartedAt) / 1000),
        now: new Date().toISOString(),
      }));
    }

    if (url === '/favicon.ico' || url === '/logo-mark.svg') {
      const svg = `<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="markGradient" x1="20" y1="20" x2="108" y2="108" gradientUnits="userSpaceOnUse">
            <stop stop-color="#6FA5FF"/>
            <stop offset="1" stop-color="#7F7BFF"/>
          </linearGradient>
        </defs>
        <rect x="6" y="6" width="116" height="116" rx="28" fill="#060915"/>
        <path d="M42 44C49 37 58 34 68 34C79 34 87 37 94 43L86 51C81 47 75 45 68 45C61 45 55 47 51 52C46 57 44 63 44 70C44 77 46 83 51 88C55 93 61 95 68 95C75 95 81 93 86 88L94 96C87 102 79 106 68 106C58 106 49 102 42 95C35 88 31 79 31 70C31 61 35 51 42 44Z" fill="url(#markGradient)"/>
        <path d="M65 50H96V59H65V50Z" fill="#ECF1FF" fill-opacity="0.92"/>
        <path d="M65 62H89V71H65V62Z" fill="#ECF1FF" fill-opacity="0.82"/>
        <path d="M65 74H82V83H65V74Z" fill="#4DE6BC"/>
      </svg>`;
      res.writeHead(200, {
        'content-type': 'image/svg+xml',
        'cache-control': 'public, max-age=86400',
        'content-length': Buffer.byteLength(svg)
      });
      return res.end(svg);
    }

    if (url === '/og-image.svg') {
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#060915" />
            <stop offset="100%" stop-color="#121d3f" />
          </linearGradient>
          <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#6fa5ff" />
            <stop offset="100%" stop-color="#7f7bff" />
          </linearGradient>
        </defs>
        <rect width="1200" height="630" fill="url(#bg)" />
        <circle cx="1020" cy="120" r="180" fill="#6fa5ff" fill-opacity="0.14" />
        <circle cx="180" cy="40" r="220" fill="#7f7bff" fill-opacity="0.12" />
        <rect x="84" y="104" width="240" height="240" rx="52" fill="#060915" stroke="url(#accent)" stroke-width="10"/>
        <path d="M176 204C195 185 221 174 248 174C277 174 299 182 317 198L294 222C282 212 267 207 248 207C230 207 215 213 203 225C192 237 186 252 186 271C186 290 192 305 203 317C215 329 230 335 248 335C267 335 282 330 294 319L317 343C299 359 277 368 248 368C221 368 195 358 176 339C157 320 147 297 147 271C147 245 157 223 176 204Z" fill="url(#accent)"/>
        <path d="M242 215H329V239H242V215Z" fill="#ECF1FF" fill-opacity="0.92"/>
        <path d="M242 247H310V271H242V247Z" fill="#ECF1FF" fill-opacity="0.82"/>
        <path d="M242 279H289V303H242V279Z" fill="#4DE6BC"/>
        <text x="380" y="230" font-family="Inter,Segoe UI,Arial,sans-serif" font-size="84" font-weight="800" fill="#ecf1ff">Claw Guide</text>
        <text x="380" y="302" font-family="Inter,Segoe UI,Arial,sans-serif" font-size="38" fill="#c8d7ff">OpenClaw Setup Guide in 5 Practical Steps</text>
        <text x="380" y="356" font-family="Inter,Segoe UI,Arial,sans-serif" font-size="32" fill="#a9bff9">OpenClaw 快速上手与部署指南（5步）</text>
        <rect x="380" y="410" width="470" height="64" rx="12" fill="#1a2a5f" stroke="#6fa5ff" stroke-opacity="0.45" />
        <text x="412" y="452" font-family="Inter,Segoe UI,Arial,sans-serif" font-size="28" fill="#dbe7ff">Bilingual • Practical • Deployment-ready</text>
      </svg>`;
      res.writeHead(200, {
        'content-type': 'image/svg+xml; charset=utf-8',
        'cache-control': 'public, max-age=86400',
        'content-length': Buffer.byteLength(svg)
      });
      return res.end(svg);
    }

    if (url === '/robots.txt') {
      res.writeHead(200, { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'public, max-age=300' });
      return res.end(`User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`);
    }

    if (url === '/sitemap.xml') {
      const lastmod = new Date().toISOString();
      const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${siteUrl}/</loc><lastmod>${lastmod}</lastmod></url>\n  <url><loc>${siteUrl}/zh</loc><lastmod>${lastmod}</lastmod></url>\n  <url><loc>${siteUrl}/step/1</loc><lastmod>${lastmod}</lastmod></url>\n  <url><loc>${siteUrl}/step/2</loc><lastmod>${lastmod}</lastmod></url>\n  <url><loc>${siteUrl}/step/3</loc><lastmod>${lastmod}</lastmod></url>\n  <url><loc>${siteUrl}/step/4</loc><lastmod>${lastmod}</lastmod></url>\n  <url><loc>${siteUrl}/step/5</loc><lastmod>${lastmod}</lastmod></url>\n</urlset>`;
      res.writeHead(200, { 'content-type': 'application/xml; charset=utf-8', 'cache-control': 'public, max-age=300' });
      return res.end(xml);
    }

    const stepMatch = url.match(/^\/step\/([1-5])\/?$/);
    if (stepMatch) {
      const stepNum = parseInt(stepMatch[1], 10);
      const stepLang = 'en'; // steps are English-only for now
      res.writeHead(200, htmlHeaders);
      return res.end(renderStepPage(stepNum, stepLang));
    }

    // Legal pages
    if (url === '/privacy' || url === '/terms' || url === '/cookies' || url === '/about' || url === '/contact') {
      const pageTitles = {
        '/privacy': { en: 'Privacy Policy', zh: '隐私政策' },
        '/terms': { en: 'Terms of Service', zh: '服务条款' },
        '/cookies': { en: 'Cookie Policy', zh: 'Cookie 政策' },
        '/about': { en: 'About Us', zh: '关于我们' },
        '/contact': { en: 'Contact', zh: '联系我们' },
      };
      const pageContents = {
        '/privacy': {
          en: `<h2>Privacy Policy</h2>
            <p>Last updated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <h3>Information We Collect</h3>
            <p>This website is a static guide and does not collect personal information. We do not use cookies, analytics, or tracking scripts.</p>
            <h3>Third-Party Links</h3>
            <p>This site contains links to external resources. We are not responsible for the privacy practices of these websites.</p>
            <h3>Changes to This Policy</h3>
            <p>We may update this privacy policy from time to time. Changes will be posted on this page.</p>
            <h3>Contact</h3>
            <p>For questions about this policy, please visit our <a href="/contact">contact page</a>.</p>`,
          zh: `<h2>隐私政策</h2>
            <p>最后更新: ${new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <h3>我们收集的信息</h3>
            <p>本网站是一个静态指南，不收集个人信息。我们不使用 Cookie、分析工具或跟踪脚本。</p>
            <h3>第三方链接</h3>
            <p>本网站包含外部资源链接。我们不对这些网站的隐私惯例负责。</p>
            <h3>政策变更</h3>
            <p>我们可能会不时更新本隐私政策。更改将发布在本页面上。</p>
            <h3>联系我们</h3>
            <p>有关本政策的问题，请访问我们的<a href="/contact">联系页面</a>。</p>`
        },
        '/terms': {
          en: `<h2>Terms of Service</h2>
            <p>Last updated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <h3>Acceptance of Terms</h3>
            <p>By accessing this website, you agree to be bound by these terms of service and our privacy policy.</p>
            <h3>Use License</h3>
            <p>This is a free educational resource. Content may be used for personal, non-commercial purposes with proper attribution.</p>
            <h3>Disclaimer</h3>
            <p>This guide is provided "as is" without warranties. We are not responsible for any damages arising from the use of this information.</p>
            <h3>External Links</h3>
            <p>We are not responsible for content on external websites linked from this guide.</p>`,
          zh: `<h2>服务条款</h2>
            <p>最后更新: ${new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <h3>接受条款</h3>
            <p>访问本网站即表示您同意遵守这些服务条款和我们的隐私政策。</p>
            <h3>使用许可</h3>
            <p>这是一个免费的教育资源。内容可用于个人、非商业目的，需注明出处。</p>
            <h3>免责声明</h3>
            <p>本指南按"原样"提供，不提供任何保证。我们不对使用本信息而产生的任何损害负责。</p>
            <h3>外部链接</h3>
            <p>我们不对本指南链接的外部网站内容负责。</p>`
        },
        '/cookies': {
          en: `<h2>Cookie Policy</h2>
            <p>Last updated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <h3>What Are Cookies</h3>
            <p>Cookies are small text files stored on your device by websites you visit.</p>
            <h3>Our Use of Cookies</h3>
            <p>This website does not use cookies or similar tracking technologies. We do not store any information on your device.</p>
            <h3>Third-Party Cookies</h3>
            <p>External links may lead to websites that use cookies. Please review their policies separately.</p>`,
          zh: `<h2>Cookie 政策</h2>
            <p>最后更新: ${new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <h3>什么是 Cookie</h3>
            <p>Cookie 是您访问的网站存储在您设备上的小型文本文件。</p>
            <h3>我们对 Cookie 的使用</h3>
            <p>本网站不使用 Cookie 或类似的跟踪技术。我们不在您的设备上存储任何信息。</p>
            <h3>第三方 Cookie</h3>
            <p>外部链接可能导向使用 Cookie 的网站。请单独查看它们的政策。</p>`
        },
        '/about': {
          en: `<h2>About Claw Guide</h2>
            <p>Claw Guide is a bilingual resource for learning and deploying OpenClaw, an open-source AI agent framework.</p>
            <h3>Our Mission</h3>
            <p>We aim to make OpenClaw more accessible by providing clear, execution-focused guidance that complements the official documentation.</p>
            <h3>What We Offer</h3>
            <ul>
              <li>5-step practical setup guide</li>
              <li>Curated resources (40+ links)</li>
              <li>Verified community skills</li>
              <li>Bilingual content (English & Chinese)</li>
            </ul>
            <h3>Not Official</h3>
            <p>This is an independent community project, not affiliated with the official OpenClaw team.</p>`,
          zh: `<h2>关于 Claw Guide</h2>
            <p>Claw Guide 是一个双语资源，用于学习和部署 OpenClaw（一个开源 AI 智能体框架）。</p>
            <h3>我们的使命</h3>
            <p>我们旨在通过提供清晰、以执行为重点的指导来使 OpenClaw 更易于使用，补充官方文档。</p>
            <h3>我们提供什么</h3>
            <ul>
              <li>5 步实用设置指南</li>
              <li>精选资源（40+ 链接）</li>
              <li>经过验证的社区技能</li>
              <li>双语内容（英文和中文）</li>
            </ul>
            <h3>非官方</h3>
            <p>这是一个独立的社区项目，与官方 OpenClaw 团队无关。</p>`
        },
        '/contact': {
          en: `<h2>Contact Us</h2>
            <p>We welcome feedback and suggestions to improve this guide.</p>
            <h3>Ways to Reach Us</h3>
            <ul>
              <li><strong>GitHub</strong>: <a href="https://github.com/owen-ai-01/claw-guide" target="_blank" rel="noopener noreferrer">github.com/owen-ai-01/claw-guide</a></li>
              <li><strong>Issues</strong>: Report bugs or suggest improvements via GitHub Issues</li>
              <li><strong>Discussions</strong>: Join conversations in GitHub Discussions</li>
            </ul>
            <p>For general OpenClaw support, please use the <a href="https://discord.gg/clawd" target="_blank" rel="noopener noreferrer">official Discord community</a>.</p>`,
          zh: `<h2>联系我们</h2>
            <p>我们欢迎反馈和建议来改进本指南。</p>
            <h3>联系方式</h3>
            <ul>
              <li><strong>GitHub</strong>: <a href="https://github.com/owen-ai-01/claw-guide" target="_blank" rel="noopener noreferrer">github.com/owen-ai-01/claw-guide</a></li>
              <li><strong>问题反馈</strong>: 通过 GitHub Issues 报告错误或建议改进</li>
              <li><strong>讨论</strong>: 在 GitHub Discussions 中参与讨论</li>
            </ul>
            <p>对于一般的 OpenClaw 支持，请使用<a href="https://discord.gg/clawd" target="_blank" rel="noopener noreferrer">官方 Discord 社区</a>。</p>`
        },
      };

      const lang = url.includes('/zh/') ? 'zh' : 'en';
      const title = pageTitles[url][lang];
      const content = pageContents[url][lang];
      
      const legalHtml = `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} | Claw Guide</title>
  <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: linear-gradient(180deg, #06090d 0%, #0b1128 100%);
      color: #ecf1ff;
      line-height:1.7;
      min-height:100vh;
    }
    .container { max-width:800px; margin:0 auto; padding:60px 20px; }
    nav { margin-bottom:40px; }
    nav a { color:#6fa5ff; text-decoration:none; font-weight:600; }
    nav a:hover { text-decoration:underline; }
    h1 { font-size:36px; margin-bottom:32px; }
    h2 { font-size:28px; margin:32px 0 16px; color:#ecf1ff; }
    h3 { font-size:20px; margin:24px 0 12px; color:#bfd0f8; }
    p { margin-bottom:16px; color:#d6e1ff; font-size:16px; }
    ul { margin:16px 0; padding-left:24px; }
    li { margin-bottom:8px; color:#d6e1ff; }
    a { color:#6fa5ff; }
    a:hover { color:#8fb1ff; }
    strong { color:#ecf1ff; }
  </style>
</head>
<body>
  <div class="container">
    <nav><a href="${lang === 'zh' ? '/zh' : '/'}"">← ${lang === 'zh' ? '返回首页' : 'Back to Home'}</a></nav>
    ${content}
  </div>
</body>
</html>`;
      
      res.writeHead(200, htmlHeaders);
      return res.end(legalHtml);
    }

    if (url === '/zh' || url === '/zh/') {
      res.writeHead(200, htmlHeaders);
      return res.end(htmlZh);
    }

    if (url === '/' || url === '/index.html') {
      res.writeHead(200, htmlHeaders);
      return res.end(htmlEn);
    }

    res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'no-store' });
    res.end('Not Found');
  } catch (err) {
    console.error(`[${new Date().toISOString()}] Error handling ${url}:`, err);
    res.writeHead(500, { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'no-store' });
    res.end('Internal Server Error');
  }
});

server.listen(port, () => {
  console.log(`claw-guide running on http://0.0.0.0:${port}`);
});
