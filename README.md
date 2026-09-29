# BrainWorks / BrainWorx Games — root GitHub Pages build

This build is ready to be copied into the root of the `brainworxgames.github.io` repository.

## AdSense

The Google AdSense Auto Ads code for publisher `ca-pub-4294926180211945` is included on the main site pages and game wrapper pages. `ads.txt` is also included at the repository root.

For the **real Google ad → AI access** flow, use AdSense **Privacy & messaging → Offerwall → Rewarded ad**, and target the URL `/ai.html`. Google renders and completes the rewarded ad itself; the old fake/demo countdown has been removed from the site. If a rewarded ad is unavailable, Google may not render the Offerwall.

## AI

The AI page has a useful offline fallback. For open-ended online answers, add a Pollinations API key in Settings. Do not commit a secret API key into this repository.

## Included updates

- Homepage tagline randomly shows: `hi teach`, `hey its me`, or `working your brain`.
- Added the supplied games, including Minecraft/Eaglercraft, Geometry Dash, Terraria, DELTARUNE, La Madriguera, Kickabout, Plague Inc., and the FNAF set.
- `kickabout4...` is displayed and stored as **Kickabout**.
- FNAF entries are grouped in order with **Ultimate Custom Night** last.
- Removed the injected `Downloaded from` Noah watermark wrappers from supplied game HTML where present.
- Slope Plus remains excluded.

## Deploy

Copy everything in this folder into the repository root, then:

```bash
git add -A
git commit -m "Update BrainWorx games and AdSense"
git push origin main
```

GitHub Pages should use `main` → `/ (root)`.
