# The Leclezio Clinic

**Dr Veronica Leclezio · TLC Neurodevelopmental Paediatrics**  
**Nurture, Grow, Elevate.**

Complete website with the heritage TLC logo, highlighted hero motto, FAQs, service dialogs and instant section navigation. All images and fonts are included. No API key, database or external package dependencies are needed.

## 1. Open in Cursor

Extract the ZIP and open the **TLC-Clinic** folder (the one containing package.json) in Cursor. Install Node.js 22 or later if needed.

Run in Cursor's terminal:

```bash
npm ci
npm run dev
```

Open **http://localhost:3000**. Stop with Ctrl+C. Before committing, run:

```bash
npm run build
```

This checks the static site. Vercel serves the existing public/ directory directly.

## 2. Commit to GitHub

Create an empty repository called **tlc-clinic** on GitHub without adding starter files. From this project folder:

```bash
git init
git add .
git commit -m "Launch The Leclezio Clinic website"
git branch -M main
```

Replace YOUR-GITHUB-USERNAME with your actual username before running:

```bash
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/tlc-clinic.git
git push -u origin main
```

Sign in when prompted. Alternatively use Cursor's Source Control panel to initialise, commit and publish the repository.

## 3. Deploy to Vercel

In Vercel, select **Add New → Project**, then import the GitHub repository.

| Setting | Value |
| --- | --- |
| Root directory | Repository root |
| Framework preset | Other |
| Build command | npm run build |
| Output directory | public |
| Install command | npm ci --ignore-scripts |
| Environment variables | None |

The included vercel.json sets these values. Select **Deploy**. Future pushes to your connected production branch deploy updates.

Only public/ is served; the instructions and local scripts are not published. Vercel does not inherit the ChatGPT Site's viewer restrictions. Review the new project's access settings before sharing it.

Official configuration reference: https://vercel.com/docs/project-configuration/vercel-json

## Where to edit

- public/index.html: page content, founder biography, navigation and FAQs.
- public/styles.css: layout, colours, typography and logo display.
- public/app.js: dialogs and mobile navigation.
- public/assets/: all images, logo and fonts.
- CURSOR-PROMPT.md: handoff prompt for Cursor Agent.

The original full logo artwork is retained in assets/tlc-heritage-logo.png. CSS displays the monogram portion beside readable clinic text in the header and footer.

## Launch status

The informational website works. **Online appointment enquiries and booking are not connected.** Contact details, fees, locations, age ranges, referral requirements and availability need confirmation. The site transparently says these details are being finalised. Connect and test a real booking service before claiming appointments can be submitted.

No patient data is collected. If forms or analytics are later added, update the website privacy copy to reflect the actual implementation.

## Asset sources

- TLC monogram: generated from the supplied carved LC reference, with an extended T.
- Hero child image: generated illustration, not a clinic patient or testimonial.
- Portrait and professional background: https://www.starjumpz.com/our-team/
- General information: the NHS links in the site.
- Fonts: DM Sans and DM Serif Display from Google Fonts; OFL licence texts in licenses/.

Exported 25 September 2026 from source commit eaa8b23ed28c8d4937c6ae2d01cc15588fa7a309. No Git history, Sites configuration or hosting credentials are included. This export is independent of the existing hosted Site; GitHub/Vercel changes will not update that original Site automatically.
