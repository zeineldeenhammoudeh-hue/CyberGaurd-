# CyberGuard official website

A static download/marketing website featuring **six real CyberGuard app screenshots**.

## Deploy to Render
1. Extract the ZIP and upload `index.html`, `style.css`, `script.js`, and the entire `assets/` folder to the **root** of your GitHub website repository.
2. In Render, keep your service type as **Static Site** and your branch as `main`.
3. Set **Publish Directory** to `.` if the files are at the repository root. Leave the **Build Command** empty.
4. Commit changes, wait for Render's successful deployment, and hard-refresh the website (`Cmd + Shift + R` on Mac).

## Notes
- The screenshot viewer is interactive, but this website does **not** perform PC scans or host a working AI assistant.
- The download button is deliberately disabled until a tested Windows installer is available.
- The screenshots were captured in macOS Demo Mode, so Windows-only checks should not be represented as live or verified in the website.
- If you later publish an installer, update the download section and link it to your verified release URL.
