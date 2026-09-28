# BrainWorks

A GitHub Pages-friendly browser game hub.

## Pages
- `index.html` — animated Brainworks home/search page
- `games.html` — searchable game library in rows of 3 on desktop
- `settings.html` — customize the tab title/icon and optionally add a Pollinations AI key
- `ai.html` — BrainWorks AI with a working demo-ad gate

## Games
Subway Surfers, Table Tennis World Tour, Rooftop Snipers, Deathrun 3D, Escape Road, Crossy Road, Bad Piggies, Basket Random, Cuphead, PEAK, Slope, Drift Hunters, Clustertruck, and How to Fish.

## AI
The demo gate is fully client-side and automatically unlocks after the countdown. The offline assistant works without a key. For open-ended online answers, put your own Pollinations API key into Settings. The key is stored in this browser only; never commit a private API key to GitHub.

## Run locally in Codespaces
```bash
cd /workspaces/BrainWorks
python3 -m http.server 8000 --bind 0.0.0.0
```
Then open the forwarded port 8000 in Codespaces.

## Publish with GitHub Pages
1. Put the contents of this folder in the root of your GitHub repository.
2. Commit and push:
```bash
git add .
git commit -m "Update BrainWorks"
git push
```
3. On GitHub open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select your main branch and `/ (root)`, then save.
6. GitHub will show the live site URL under Pages.

## Ads
Do not put a real publisher ID or secret into this repository until your ad account is approved. For AdSense, add the site in AdSense, complete verification/review, then paste the ad code Google gives you into the page locations where you want ads. If AdSense asks for `ads.txt`, create a root-level `ads.txt` containing the exact line supplied by your AdSense account.

## Watermarks
The visible "Downloaded from Noah's Tutoring Hub" wrapper watermarks were removed from the game HTML files where they were present. This does not alter graphics or text that are permanently baked into a game's downloaded asset files.
