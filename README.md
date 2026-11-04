# Vercel Static Deployment Bundle

This folder contains the self-contained static build for **RADAR**.

## How to Deploy on Vercel:

### Option 1: Drag & Drop (Easiest)
1. Go to [https://vercel.com/new](https://vercel.com/new)
2. Drag and drop this `vercel/` folder into the upload area.
3. Click **Deploy**.

### Option 2: Vercel CLI
From your terminal:
```bash
cd vercel
npx vercel
```

### Option 3: Git Repository
If linking a GitHub/GitLab repo:
- Set **Root Directory** or **Output Directory** to `out` (or `vercel`).
- Set **Framework Preset** to `Other` / `None` (Static).

