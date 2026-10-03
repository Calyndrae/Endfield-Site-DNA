# Originals archive

Archived 2026-10-03 from the live site and its CDN.

| What | Count | Size |
| --- | --- | --- |
| Files under files/<host>/<path> (chunks, stylesheets, fonts, images, videos, audio, Lottie, SDK scripts, article images) | 360 | 480.6 MB |
| API responses under api/ (news lists for every tab and page, every article, video list, SDK config) | 138 | 662 KB |
| RSC payloads under rsc/ (client navigation for every route) | 6 | 146 KB |
| Operator clips (transparent-video character animations) | 7 of 66 | 73.9 MB archived of 784.7 MB |

Every entry is in index.json with its original URL, bytes and SHA-256. The full clip set is 784.7 MB; GitHub Pages serves at most 1 GB per site, so by default only the first three operators' clips and the clips the measurements requested are archived; `node tools/archive-originals.mjs --clips=all` fetches the rest for a local copy. Responses the pages make to the SDK's own services (regular/check, cookie_store/account_token, event logging) are not archivable: they are per-session answers from Gryphline's servers.
