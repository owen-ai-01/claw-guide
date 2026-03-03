const base = process.env.BASE_URL || 'http://127.0.0.1:3000';

async function check(path, checks) {
  const res = await fetch(`${base}${path}`);
  if (res.status !== 200) throw new Error(`${path} status ${res.status}`);
  const html = await res.text();
  for (const [name, matcher] of checks) {
    if (!matcher.test(html)) throw new Error(`${path} missing: ${name}`);
  }
  return `${path} ok`;
}

async function main() {
  const results = [];
  results.push(await check('/', [
    ['canonical /', /<link rel="canonical" href="[^"]*\/"\s*\/>/i],
    ['roadmap step 1', /id="roadmap-step-1"/i],
    ['step1 pass condition', /Pass condition: you can see both version outputs\./i],
    ['step2 pass condition', /Pass condition: OpenClaw CLI is available and `openclaw --help` returns successfully\./i],
    ['step3 pass condition', /Pass condition: you can send and receive one real message in your connected channel\./i],
    ['step4 pass condition', /Pass condition: at least one heartbeat check or cron reminder has executed successfully\./i],
    ['hero technical CTA', /href="#roadmap-step-1"/i],
    ['hero guided CTA', /href="#launch-tracks"/i],
    ['twitter card', /name="twitter:card" content="summary_large_image"/i],
  ]));

  results.push(await check('/zh', [
    ['canonical /zh', /<link rel="canonical" href="[^"]*\/zh"\s*\/>/i],
    ['roadmap step 1', /id="roadmap-step-1"/i],
    ['step1 pass condition zh', /通过标准：能看到 node 与 npm 版本号输出。/i],
    ['step2 pass condition zh', /通过标准：`openclaw --help` 可正常返回。/i],
    ['step3 pass condition zh', /通过标准：在已连接渠道中完成一次真实消息的收发。/i],
    ['step4 pass condition zh', /通过标准：至少成功执行一次 heartbeat 检查或 cron 提醒。/i],
    ['hero technical CTA zh', /href="#roadmap-step-1"/i],
    ['hero guided CTA zh', /href="#launch-tracks"/i],
    ['hreflang zh-CN', /hreflang="zh-CN"/i],
  ]));

  const health = await fetch(`${base}/health`);
  if (health.status !== 200) throw new Error(`/health status ${health.status}`);
  const healthJson = await health.json();
  if (!healthJson.ok) throw new Error(`/health ok=false`);

  console.log(results.join('\n'));
  console.log('/health ok');
}

main().catch((err) => {
  console.error(`VERIFY_FAILED: ${err.message}`);
  process.exit(1);
});
