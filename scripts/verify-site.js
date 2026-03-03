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
    ['twitter card', /name="twitter:card" content="summary_large_image"/i],
  ]));

  results.push(await check('/zh', [
    ['canonical /zh', /<link rel="canonical" href="[^"]*\/zh"\s*\/>/i],
    ['roadmap step 1', /id="roadmap-step-1"/i],
    ['step1 pass condition zh', /通过标准：能看到 node 与 npm 版本号输出。/i],
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
