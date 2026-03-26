# 客戶啟動儀表板

高端互動式客戶項目提案儀表板。基於 Next.js、Tailwind CSS v4、Framer Motion 構建。

暗色沉浸式設計，內建網格紋理、轉角邊框、3D 傾斜卡片、視差圖片、動態計數器、滾動觸發動畫。

## 快速開始

### 1. 克隆項目

```bash
git clone https://github.com/mimo4o/evo-client-dashboard.git my-client-dashboard
cd my-client-dashboard
```

### 2. 打開 Claude Code，貼上這段 prompt：

```
Clone the client onboarding dashboard template and customize it for my business.

git clone https://github.com/mimo4o/evo-client-dashboard.git my-client-dashboard

Now walk me through setting it up. Ask me questions one section at a time about:
1. My studio/brand (name, title, email, accent color, logo)
2. My client (name, contact person, industry)
3. The project (name, type, tagline, summary, objectives, duration)
4. Timeline phases (phase names, dates, tasks)
5. Deliverables (categories and items with quantities)
6. Scope (what's included and excluded)
7. Pricing (line items, discounts, payment schedule, payment link)
8. Images (suggest Unsplash images based on the client's industry)
9. Next steps and CTA

After I answer everything, generate a customized src/lib/project-data.ts file with all my answers, and update the accent color in src/app/globals.css. Then tell me how to run it.
```

Claude 會自動引導你完成 9 個步驟的問答，生成你的專屬儀表板。

### 3. 預覽

```bash
npm install
npm run dev
```

打開 http://localhost:3000

## 自定義

所有內容集中在 **兩個文件**：

| 文件 | 修改內容 |
|------|---------|
| `src/lib/project-data.ts` | 所有文字、定價、時間線、交付物、圖片 |
| `src/app/globals.css` | 品牌色（第 8-9 行：`--color-accent`） |

不要修改組件文件，除非你想改變設計本身。

## 部署

推送到 GitHub 並連接 Vercel，或：

```bash
npx vercel
```

在 Vercel 設置中添加自定義域名，例如 `proposal.yourstudio.com`。

## 技術棧

- Next.js (App Router)
- Tailwind CSS v4
- Framer Motion
- TypeScript

## Credit

Original template by [@bywaviboy](https://instagram.com/bywaviboy).
