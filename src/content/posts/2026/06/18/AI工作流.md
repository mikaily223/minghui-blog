---
title: AI工作流（Hermes / SpecKit / Superpowers / Paperclip）
published: 2026-06-18
updated: 2026-06-18
draft: false
description: Claude Code,Hermes,SpecKit,Superpowers,Paperclip
tags: [AI Flow, AI, LLM]
category: AI
lang: zh
pinned: false
---


# AI 工具说明（Hermes / SpecKit / Superpowers / Paperclip）

> 安装日期：2026-06-18
> 机器：Windows 10，Node v22.20.0，Python 3.13.9
> 本文档说明这 4 个工具分别是什么、能干什么、以及你该怎么用。

---

## 0. 一句话总览

| 工具 | 它是什么 | 解决什么问题 | 安装方式 | 当前状态 |
|------|---------|------------|---------|---------|
| **SpecKit** | Claude Code 里的"规格驱动开发"命令集（Python CLI 安装） | 让 AI 先写清楚需求/计划/任务，再动手写代码，避免一上来就乱写 | `uv` 安装的 `specify` CLI | ✅ 已装好 |
| **Superpowers** | Claude Code 插件（一套开发方法论 + 技能库） | 给 Claude 装上"自动按最佳实践干活"的大脑：头脑风暴→计划→测试驱动→代码审查 | `/plugin` 市场插件 | ✅ 已装好并启用（v6.0.2，需重启 Claude Code 生效） |
| **Hermes** | Claude Code 插件（常驻后台助手 daemon） | 让 Claude 7×24 在后台跑：定时任务、Telegram/Discord 收发消息、语音转写 | `/plugin` 市场插件 | ✅ 已装好并启用（v1.0.2，需重启后跑 `/claude-hermes:start`） |
| **Paperclip** | 独立 Web 应用（多 Agent 编排平台） | 把多个 AI agent 组成一个"公司/团队"协作完成业务目标 | 全局 npm 应用 | ✅ 已装好并运行中 |

**关键区别**：SpecKit 和 Paperclip 跟 Claude Code 的插件系统**没关系**（一个是 CLI，一个是独立网站）；Superpowers 和 Hermes 才是真正的 Claude Code 插件，需要你用 `/plugin` 命令装。

---

## 1. SpecKit —— 规格驱动开发（Spec-Driven Development）

### 它是什么
GitHub 官方出的工具，核心理念是：**先把"要做什么"写成规格文档，再让 AI 写代码**。它给 Claude Code 增加了一组 `/speckit.*` 斜杠命令，把开发拆成"宪法→规格→计划→任务→实现"几个阶段。

### 能干什么
让你和 AI 之间有一份明确的"合同"：需求、技术方案、任务清单都先白纸黑字写下来，AI 严格照着做，减少跑偏和返工。

### 怎么用

**第一步：在你的项目里初始化**（已装好 `specify` 命令，直接用）：

```powershell
# 在某个新项目目录里
specify init my-project --integration claude

# 或在当前已有目录里初始化
specify init . --integration claude
```

初始化后，你的项目里会多出 Spec Kit 的模板和命令配置。

**第二步：在 Claude Code 里按顺序使用这些命令**：

| 命令 | 作用 | 什么时候用 |
|------|------|-----------|
| `/speckit.constitution` | 制定项目的"宪法"（开发原则、规范） | 项目最开始，定规矩 |
| `/speckit.specify` | 描述**要做什么**（需求、用户故事，不谈技术） | 想清楚功能 |
| `/speckit.clarify` | 澄清需求里没说清的地方 | specify 之后，plan 之前 |
| `/speckit.plan` | 制定技术实现方案（选技术栈、架构） | 需求定了之后 |
| `/speckit.tasks` | 把方案拆成一条条可执行的任务 | 方案定了之后 |
| `/speckit.implement` | 按计划执行所有任务，真正写代码 | 最后一步 |

**典型流程**：`constitution → specify → clarify → plan → tasks → implement`

**适合场景**：你要做一个**结构化、需求明确**的功能/项目，想让 AI 有条不紊地推进，而不是想到哪写到哪。

---

## 2. Superpowers —— 给 Claude 的"开发超能力"

### 它是什么
一套**开发方法论 + 可组合技能库**的 Claude Code 插件。和 SpecKit 不同，它**大部分不靠你手动敲命令**——Claude 在做任务前会自动检查"有没有相关技能"并自动套用最佳实践。

### 能干什么
给 Claude 装上一套久经考验的工作流，核心是 7 个阶段：

1. **头脑风暴（Brainstorming）** —— 写代码前先用提问把需求问清楚
2. **Git Worktree 隔离** —— 在独立分支上干活，保证基线干净
3. **写计划（Writing Plans）** —— 把活拆成 2–5 分钟一个的小任务
4. **子 Agent 驱动开发** —— 每个任务派一个全新 agent，两阶段代码审查
5. **测试驱动开发（TDD）** —— 强制 红→绿→重构 循环
6. **请求代码审查** —— 对照计划审查，发现严重问题就拦下
7. **收尾分支** —— 处理合并/PR 和清理

### 怎么用

**已通过 `claude plugin` CLI 装好并启用（v6.0.2）**，等价命令为：

```
# 已替你执行（用的是非交互 CLI）：
claude plugin marketplace add obra/superpowers-marketplace
claude plugin install superpowers@superpowers-marketplace
# 在 Claude Code 输入框里的等价交互命令为：
# /plugin marketplace add obra/superpowers-marketplace
# /plugin install superpowers@superpowers-marketplace
```

> ⚠️ **需重启 Claude Code** 后插件才会加载生效。

**安装后**：大部分能力会自动触发。也有几个可以主动调用的命令，例如：
- `/brainstorm` —— 主动开始需求头脑风暴
- `/write-plan` —— 让它给当前任务写一份详细计划
- `/execute-plan` —— 执行已经写好的计划

**适合场景**：你希望 Claude **写代码时自动遵守"先想清楚、测试先行、写完审查"的规范**，提升代码质量、减少 bug。日常写代码都建议开着。

---

## 3. Hermes —— 7×24 常驻后台 AI 助手

### 它是什么
一个**后台守护进程（daemon）**插件，把 Claude Code 变成"永不下线"的私人助手。它独立于你当前的对话窗口持续运行。

### 能干什么
- **自动化**：定时心跳检查、带时区的 cron 定时任务（支持热重载）、任务调度
- **通讯**：接入 **Telegram**（文字/图片/语音）和 **Discord**（私信、@提及、斜杠命令、语音）
- **多会话线程**：每个 Discord 线程一个独立 Claude 会话，可并行
- **自我进化**：人工触发的代码自我改进，通过验证后自动提交
- **技能学习**：候选技能跑满 ≥20 次且成功率 ≥85% 后自动"转正"，表现掉到 70% 以下则降级
- **模型路由**：自动判断"规划类"任务用 Opus、"实现类"任务用 Sonnet
- **安全分级**：从只读到完全开放共四档权限

### 怎么用

**已通过 `claude plugin` CLI 装好并启用（v1.0.2）**，等价命令为：

```
# 已替你执行：
claude plugin marketplace add sypsyp97/claude-hermes
claude plugin install claude-hermes@claude-hermes
# 交互等价命令：
# /plugin marketplace add sypsyp97/claude-hermes
# /plugin install claude-hermes@claude-hermes
```

> ⚠️ **需重启 Claude Code** 后再执行下面的初始化。

**初始化**：
```
/claude-hermes:start
```
会启动一个设置向导，引导你配置守护进程、Telegram/Discord 接入等。

**其他命令**：
- `/claude-hermes:new` —— 新建定时任务（job）、技能（skill）或提示词
- `/stop`、`/stop-all`、`/reset` —— 在 Discord/Telegram 里控制守护进程

**适合场景**：你想让 AI **在你不在电脑前时也能干活**——比如定时跑报告、手机上用 Telegram 给它发指令、语音转文字下命令。⚠️ 注意它是常驻后台服务，比普通插件"重"，会一直运行。

---

## 4. Paperclip —— 多 Agent 编排平台（独立 Web 应用）

### 它是什么
一个**自托管的开源 Web 应用**，把多个 AI agent 组织成一个"团队/公司"来协同完成业务目标。它**和 Claude Code 插件系统无关**，是一个独立跑在本机的网站。

### 能干什么
- 用一个网页界面（像管理一家公司）来创建、管理多个 agent
- 给 agent 分配任务、设定预算、协调它们之间的协作和任务路由
- 自带嵌入式 PostgreSQL 数据库、本地文件存储、加密密钥管理，开箱即用
- 数据全在本机（`C:\Users\zmh\.paperclip`），无需注册 Paperclip 账号

### 怎么用

**已经装好并正在运行**，直接打开浏览器访问：

👉 **http://127.0.0.1:3100**

**常用命令行操作**：

```powershell
paperclipai run          # 启动服务器（前台运行，关掉终端即停）
paperclipai configure    # 修改配置（比如接入大模型）
paperclipai doctor       # 体检：检查配置是否正常
```

**⚠️ 重要：还需要配置一个大模型**
目前体检显示 `LLM: not configured`（没配大模型），agent 还不能真正干活。打开 UI 或运行 `paperclipai configure`，填入一个大模型的 API Key（推荐 Anthropic Claude，模型如 `claude-opus-4-8` / `claude-sonnet-4-6`）后才能让 agent 工作。

**适合场景**：你想搭一个"多 AI 协作"的实验场，让若干 agent 分工合作完成较复杂的业务流程，而不是单个对话窗口。

### 安装时遇到的坑（已解决，仅供参考）
Paperclip 捆绑的 `embedded-postgres@18.1.0-beta.16` 是个**上游打包 bug**：它依赖的 Windows 版数据库二进制 `@embedded-postgres/windows-x64@18.1.0-beta.16` 从未发布（最高只到 `beta.15`），还引用了一个 npm 上根本不存在的 `@embedded-postgres/symlink-reader`。所以默认安装时 `npx` 会静默跳过数据库二进制，导致服务器启动崩溃。
**解决办法**：全局安装 `paperclipai` 后，把内置的 `embedded-postgres` 降到能正常工作的 `18.1.0-beta.15`，npm 就能正确拉到 Windows 数据库二进制，服务器随后正常启动。
（另有一个无害告警：密钥文件 `master.key` 权限为 666，单用户 Windows 机器上可忽略。）

---

## 5. 快速上手建议（按使用频率）

1. **日常写代码** → 装上 **Superpowers**，让 Claude 自动按最佳实践干活（最推荐，先装）。
2. **做有明确需求的新功能/项目** → 用 **SpecKit**：`specify init . --integration claude`，再走 `constitution → specify → plan → tasks → implement`。
3. **想要后台/手机随时使唤 AI** → 装 **Hermes**，跑 `/claude-hermes:start` 配好 Telegram/Discord。
4. **想玩多 agent 协作** → 打开 **Paperclip**（http://127.0.0.1:3100），先在里面配好大模型 API Key。

---

## 6. 你现在还需要做的事

- [x] ~~安装 Superpowers 和 Hermes 插件~~ → 已用 `claude plugin` CLI 装好并启用
- [ ] **重启 Claude Code**，让两个插件加载生效
- [ ] 重启后跑 `/claude-hermes:start` 完成 Hermes 的初始化向导（配 Telegram/Discord 等）
- [ ] 给 **Paperclip** 配置大模型 API Key（`paperclipai configure` 或在 UI 里设置）

---

## 附：安装信息备查

| 工具 | 安装位置 / 命令 |
|------|----------------|
| SpecKit | `uv tool install` 的 `specify`（v0.11.2）；`uv` 装在当前 Python venv |
| Paperclip | 全局 npm：`C:\Program Files\nodejs\node_modules\paperclipai`；数据：`C:\Users\zmh\.paperclip` |
| Superpowers | 市场 `obra/superpowers-marketplace`，插件 v6.0.2，user 作用域，已启用 |
| Hermes | 市场 `sypsyp97/claude-hermes`，插件 v1.0.2，user 作用域，已启用 |

**参考链接**
- Superpowers: https://github.com/obra/superpowers
- Hermes: https://github.com/sypsyp97/claude-hermes
- SpecKit: https://github.com/github/spec-kit
- Paperclip: https://github.com/paperclipai/paperclip
