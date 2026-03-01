# Claw Guide Homepage PRD (5-Step Version)

## 1) 需求定义

### 目标用户
1. **Technical Builders**（独立开发者、工程师）
2. **Operator/Non-Technical Teams**（非技术创业者、小团队操盘手）

### 核心问题
- 新用户进入后不知道从哪里开始（信息分散）
- “教程站”常见问题：介绍很多，但缺少明确可执行路径
- 双语用户切换时信息结构不一致，认知成本高

### 业务目标（首版上线 2-4 周）
- 首页到“5-step 区块”点击率提升
- Docs 链接点击率提升
- 双语页面跳出率下降
- 为后续付费内容建立自然分流（非技术路径）

---

## 2) 方案设计

## 信息架构（参考 openclaw101.dev 的结构思路，内容原创）

### 导航（Top Nav）
- Learn
- Roadmap
- Docs
- Resources
- Highlights
- FAQ
- CTA: **Start Now**
- 语言切换：EN / 中文

### Hero（首屏）
- 左侧：核心价值主张 + 2 个 CTA
  - CTA1: `See Launch Roadmap`
  - CTA2: `Read Official Docs`
- 右侧：Quick Value Snapshot（3 条价值卡）
  - Focus（结构化落地）
  - Audience（技术 + 非技术）
  - Output（可执行步骤）

### 区块顺序（首页）
1. Hero
2. Quick Links（锚点胶囊导航）
3. Launch Tracks（技术路径 / 运营路径）
4. Learn（你将学到什么）
5. Roadmap（5-Step）
6. Docs（官方文档入口）
7. Resources（社区/仓库/案例）
8. Highlights（为什么这个站有用）
9. FAQ

### 5-Step 路径定义（替代 7-Day）
1. Environment baseline
   - 目标：准备运行环境（Node、包管理器、运行主机）
2. Core installation
   - 目标：完成 OpenClaw 安装与最小可用配置
3. Model + channel wiring
   - 目标：配置模型 + 打通至少一个消息渠道
4. Operational setup
   - 目标：接入 memory/cron/高价值 skills，形成日常流程
5. Quality checkpoint
   - 目标：跑通真实任务闭环并沉淀 SOP

### 双语路由规范
- 默认英文：`/`
- 中文：`/zh`
- 两个版本保持**相同结构**、**相同区块顺序**、**语义等价**

### 文案方向（EN/CN）

#### Hero
- EN：强调“Clear structure, not guesswork”
- CN：强调“清晰结构落地，而不是靠摸索”

#### Launch Tracks
- EN：Technical Track / Operator Track
- CN：技术开发路径 / 运营落地路径

#### Roadmap
- EN：5 practical steps（可执行）
- CN：5 个实操步骤（可验收）

#### Highlights
- EN：Structured-first / Action-first / Bilingual parity
- CN：先结构后细节 / 先行动后阅读 / 双语结构一致

---

## 3) 优先级与排期

### P0（首版必须）
- 导航结构 + Start CTA
- Hero 双栏 + 价值卡
- Launch Tracks 区块
- 5-step Roadmap（明确替代 7-day）
- `/` 与 `/zh` 双语一致
- 基础 SEO（title/description/canonical/hreflang）

### P1（上线后一周）
- 导航滚动高亮（active section）
- 5-step 每步详情页入口
- FAQ 分组（技术 / 非技术）

### P2（后续迭代）
- docs 子页体系（/docs, /zh/docs）
- 用例详情页（/use-cases）
- 付费内容入口与转化页

### 建议节奏
- Day 1-2：P0 完成并上线
- Day 3-5：P1 补强与转化优化
- Week 2+：P2 内容规模化

---

## 4) 验收与风险

### 验收标准（开发可执行）
1. 首页包含 9 个区块，顺序符合 PRD
2. 导航含 6 个核心项 + Start CTA + 语言切换
3. 页面内不存在“7天路径”表述，统一为“5-step”
4. `/` 与 `/zh` 均可访问，结构镜像
5. Meta 标签存在：title/description/canonical/hreflang
6. 所有锚点可正常跳转，主要 CTA 可点击
7. 页面在移动端不破版（导航与Hero可读）

### 风险点
- 风险1：文案过长导致首屏拥挤
  - 对策：首屏只保留“价值+路径+CTA”
- 风险2：非技术路径内容过早商业化引发反感
  - 对策：先提供免费可执行价值，再引导进阶
- 风险3：双语版本长期不同步
  - 对策：同一份结构源，双语并行更新

---

## 交付备注
此 PRD 用于直接交接开发与运营，不依赖 7-day 叙事，确保可快速上线并可持续迭代。