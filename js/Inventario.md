# 📚 Inventário dos códigos
Gerado em 26/10/2026, 00:21:06 pelo Mini SK — 48 código(s), 48 grupo(s).

## Quem faz o quê
- **📲 Instalável (PWA)**: index.html, js/17-codigo.js, js/29-codigo.js, js/36-codigo.js, js/47-codigo.js
- **💾 Salva no aparelho**: js/01-codigo.js, js/02-codigo.js, js/03-codigo.js, js/08-codigo.js, js/11-codigo.js, js/15-codigo.js, js/29-codigo.js, js/30-codigo.js, js/33-codigo.js, js/36-codigo.js, js/43-codigo.js, js/45-codigo.js, js/46-codigo.js, js/47-codigo.js
- **📂 Abre arquivos**: js/01-codigo.js, js/07-codigo.js, js/11-codigo.js, js/21-codigo.js, js/26-codigo.js, js/28-codigo.js, js/29-codigo.js, js/33-codigo.js, js/36-codigo.js, js/37-codigo.js, js/45-codigo.js, js/47-codigo.js
- **☁️ Banco online**: js/02-codigo.js, js/29-codigo.js, js/30-codigo.js, js/42-codigo.js, js/44-codigo.js, js/45-codigo.js
- **📝 Word**: js/03-codigo.js, js/29-codigo.js, js/37-codigo.js, js/45-codigo.js
- **🗜 ZIP**: js/04-codigo.js, js/07-codigo.js, js/15-codigo.js, js/16-codigo.js, js/21-codigo.js, js/23-codigo.js, js/24-codigo.js, js/25-codigo.js, js/29-codigo.js, js/33-codigo.js, js/36-codigo.js, js/37-codigo.js, js/44-codigo.js, js/45-codigo.js, js/47-codigo.js
- **🤖 IA**: js/11-codigo.js, js/29-codigo.js
- **🔊 Fala (TTS)**: js/11-codigo.js, js/13-codigo.js, js/29-codigo.js
- **🎤 Ditado**: js/11-codigo.js, js/13-codigo.js, js/29-codigo.js, js/44-codigo.js
- **🗺 Gráficos**: js/16-codigo.js, js/29-codigo.js, js/45-codigo.js
- **📄 PDF**: js/29-codigo.js, js/45-codigo.js
- **🔎 OCR**: js/29-codigo.js, js/45-codigo.js
- **⚖️ DJEN/CNJ/tribunal**: js/29-codigo.js, js/30-codigo.js
- **🧮 Cálculo judicial**: js/29-codigo.js
- **🌐 Pesquisa na internet**: js/29-codigo.js
- **📷 Câmera**: js/29-codigo.js, js/40-codigo.js, js/44-codigo.js
- **🐙 GitHub**: js/31-codigo.js, js/32-codigo.js, js/37-codigo.js

## Cada código

### esc sozinho markdown

**js/08-codigo.js** — 25.9 KB, 378 linhas, 35 funções
- O que faz: "' + esc(sozinho || 'Markdown') + '"
- Usa: 💾 Salva no aparelho
- Algumas funções: fs, build, onClick, applySize, setupGrip, end, htmlFiles, pickTarget, fillSelect, isExternal, resolve, revokeAll, mk, mkPage, fileURL

### i exec html return m m replace s g trim const slug s s app normalize nfd replace g tolowercase replace a z0 g replace g slice app const initials s const all string s replace a z0 i split s filter boolean const w all filter x de da do das dos e a o the of i test x length all filter x de da do das dos e a o the of i test x all return w w w w slice touppercase function colorof s let h for const ch of string s h h ch charcodeat return hsl h tornar instalável index html usa manifest json outra página da mesma pasta ganha o próprio ex hub webmanifest const manifestof page index html i test fs basename page manifest json fs basename page replace html i webmanifest function swtext name files return service worker js gerado pelo mini sk em new date tolocalestring pt br n não precisa mexer ele guarda sozinho o que o app usa n const prefixo sk slug name n const cache prefixo date now tostring n lista feita automaticamente para funcionar sem internet logo após instalar n const guardar json stringify files null replace g n replace n replace n n n self addeventlistener install e n self skipwaiting n e waituntil caches open cache then c promise all guardar map u c add u catch null n n n self addeventlistener activate e n e waituntil caches keys n then ks promise all ks filter k k startswith prefixo k cache map k caches delete k n then self clients claim n n n primeiro a internet sempre a versão nova sem internet a cópia guardada n self addeventlistener fetch e n const req e request n if req method get new url req url origin location origin return n e respondwith n fetch req then res n if res ok const copia res clone caches open cache then c c put req copia n igual ao workbox da replit página que não existe rota do app abre o index n if res status req mode navigate return caches match then r r fetch n return res n catch caches match req ignoresearch true then r r req mode navigate caches match undefined n n n function patchhead html block html html replace t s g html html replace t s n gi html html replace t brel manifest apple touch icon icon shortcut icon mask icon s n gi html html replace t bname theme color mobile web app capable apple mobile web app w s n gi html html replace t s s s n gi m body serviceworker test body register test body body length i test html return html replace i block if i test html return html replace i m m n block return block html builds vite react da replit usam assets só funciona na raiz do domínio netlify em pasta do github pages ou aberto da pasta a tela fica branca troca por caminho relativo function fixabsolutepaths page const report const dir fs dirname page const relp fromdir target const r rel fromdir target return r startswith r r const fixref fromdir p const clean p split const t fs norm clean if t fs exists t fs isfolder t return null return relp fromdir t p slice clean length let n let html fs read page const html2 html replace s src href content data src gi m a p z const r fixref dir p if r n return a r z return m if n fs write page html2 silent true report push troquei n caminho s por em page era isso que deixava a tela branca fora do netlify let c for const f of fs list filter x css i test x const t fs read f if t null continue const fd fs dirname f const t2 t replace url s s g m q p const r fixref fd p if r c return url q r q return m if t2 t fs write f t2 silent true if c report push troquei c caminho s nos arquivos css const isspa id root app i test html2 type module i test html2 if isspa const pre dir dir const js fs list filter x x startswith pre js i test x some x assets test fs read x if js report push o javascript do build ainda tem assets dentro se alguma parte não carregar no github pages o certo é refazer o build com base no vite config base me traga o projeto que eu ajusto if browserrouter createbrowserrouter history pushstate test fs list filter x x startswith pre js i test x map x fs read x join n slice 4e6 report push ℹ o app usa rotas páginas tipo login criei o html igual ao index para o github pages abrir essas páginas if fs exists pre html fs read pre html includes pwa inicio fs write pre html fs read page silent true if report some r r includes html report push criei o html cópia do index no github pages evita página não encontrada ao recarregar return report async function makeinstallable page o const report fixabsolutepaths page const dir fs dirname page const pre dir dir let html fs read page ícones const hasicons fs exists pre icons icon png fs exists pre icons icon png fs exists pre icons maskable png if hasicons o newicons if imgel cfg texto def texto cfg texto initials o name savefiles await iconfiles dir sizes png report push hasicons ícones refeitos criei os ícones sizes length tamanhos maskable svg favicon em pre icons else report push ícones já existiam mantive manifest const icons sizes filter s s fs exists pre icons icon s png map s src icons icon s png sizes s x s type image png purpose any icons push src icons maskable png sizes 192x192 type image png purpose maskable src icons maskable png sizes 512x512 type image png purpose maskable src icons icon svg sizes any type image svg xml purpose any let old const manname manifestof page try old json parse fs read pre manname catch const start fs basename page tolowercase index html fs basename page const man object assign old name o name short name o short o name slice description o desc old description o name id app slug o name start slug fs basename page replace html i start url start scope display o display orientation o orientation background color o bg theme color o theme lang pt br dir ltr icons if o shortcuts o shortcuts length man shortcuts o shortcuts fs write pre manname json stringify man null n silent true report push old name atualizei criei o pre manname icons length ícones o display o orientation service worker com lista automática const list concat fs list filter f dir f startswith pre sk git zip apk aab exe map i test f slice pre length fs get f size f slice pre length const files o offline list slice fs basename page manname fs write pre service worker js swtext o name files silent true report push service worker o offline com files length arquivos listados sozinho funciona sem internet leve guarda o que for usado const viewport name viewport i test html n const charset charset i test html n const title titleof html sk esc o name

**js/36-codigo.js** — 48.1 KB, 599 linhas, 58 funções
- O que faz: "]*>([^ /i.exec(html || ''); return m ? m[1].replace(/\s+/g, ' ').trim() : ''; }; const slug = (s) => (s || 'app').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 30) || 'app'; const initials = (s) => { const all = String(s || '?').replace(/\.[a-z0-9]+$/i, '').split(/[\s_\-.]+/).filter(Boolean); const w = all.filter((x) => !/^(de|da|do|das|dos|e|a|o|the|of)$/i.test(x)).length ? all.filter((x) => !/^(de|da|do|das|dos|e|a|o|the|of)$/i.test(x)) : all; return ((w[0] || '?')[0] + (w[1] ? w[1][0] : (w[0] || '').slice(1, 2))).toUpperCase(); }; function colorOf(s) { let h = 0; for (const ch of String(s)) h = (h * 31 + ch.charCodeAt(0)) >>> 0; return 'hsl(' + (h % 360) + ' 62% 48%)'; } // ── Tornar instalável ─────────────────────────────────────────────────────── /** index.html usa manifest.json; outra página da mesma pasta ganha o próprio (ex.: hub.webmanifest). */ const manifestOf = (page) => /^index\.html?$/i.test(fs().baseName(page)) ? 'manifest.json' : fs().baseName(page).replace(/\.html?$/i, '') + '.webmanifest'; function swText(name, files) { return '// service-worker.js — gerado pelo Mini SK em ' + new Date().toLocaleString('pt-BR') + '\n' + '// Não precisa mexer: ele guarda sozinho o que o app usa.\n' + "const PREFIXO = 'sk-" + slug(name) + "-';\n" + "const CACHE = PREFIXO + '" + Date.now().toString(36) + "';\n" + '// Lista feita automaticamente (para funcionar sem internet logo após instalar)\n' + 'const GUARDAR = ' + JSON.stringify(files, null, 0).replace(/","/g, '",\n "').replace(/^\[/, '[\n ').replace(/\]$/, '\n]') + ';\n\n' + "self.addEventListener('install', (e) => {\n self.skipWaiting();\n e.waitUntil(caches.open(CACHE).then((c) => Promise.all(GUARDAR.map((u) => c.add(u).catch(() => null)))));\n});\n\n" + "self.addEventListener('activate', (e) => {\n e.waitUntil(caches.keys()\n .then((ks) => Promise.all(ks.filter((k) => k.startsWith(PREFIXO) && k !== CACHE).map((k) => caches.delete(k))))\n .then(() => self.clients.claim()));\n});\n\n" + '// Primeiro a internet (sempre a versão nova); sem internet, a cópia guardada.\n' + "self.addEventListener('fetch', (e) => {\n const req = e.request;\n if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;\n e.respondWith(\n fetch(req).then((res) => {\n if (res.ok) { const copia = res.clone(); caches.open(CACHE).then((c) => c.put(req, copia)); }\n // Igual ao Workbox da Replit: página que não existe (rota do app) abre o index\n if (res.status === 404 && req.mode === 'navigate') return caches.match('./').then((r) => r || fetch('./'));\n return res;\n }).catch(() => caches.match(req, { ignoreSearch: true }).then((r) => r || (req.mode === 'navigate' ? caches.match('./') : undefined)))\n );\n});\n"; } function patchHead(html, block) { html = html.replace(/[ \t]* \s*/g, ''); html = html.replace(/[ \t]* ]*-->\s*\n?/gi, ''); html = html.replace(/[ \t]* ]*\brel=["']?(?:manifest|apple-touch-icon|icon|shortcut icon|mask-icon)["']?[^>]*>\s*\n?/gi, ''); html = html.replace(/[ \t]* ]*\bname=["']?(?:theme-color|mobile-web-app-capable|apple-mobile-web-app-[\w-]+)["']?[^>]*>\s*\n?/gi, ''); html = html.replace(/[ \t]* ]*>([\s\S]*?) \s*\n?/gi, (m, body) => (/serviceWorker/.test(body) && /register/.test(body) && body.length /i.test(html)) return html.replace(/ /i, block + ' '); if (/ ]*>/i.test(html)) return html.replace(/ ]*>/i, (m) => m + '\n' + block); return block + html; } /** Builds (Vite/React da Replit) usam "/assets/..." — só funciona na raiz do domínio (Netlify). Em pasta do GitHub Pages ou aberto da pasta, a tela fica branca. Troca por caminho relativo. */ function fixAbsolutePaths(page) { const report = []; const dir = fs().dirName(page); const relp = (fromDir, target) => { const r = rel(fromDir, target); return r.startsWith('../') ? r : './' + r; }; const fixRef = (fromDir, p) => { const clean = p.split(/[?#]/)[0]; const t = fs().norm(clean); if (!t || !(fs().exists(t) || fs().isFolder(t))) return null; return relp(fromDir, t) + p.slice(clean.length); }; let n = 0; let html = fs().read(page) || ''; const html2 = html.replace(/(\s(?:src|href|content|data-src)=["'])\/(?!\/)([^"']+)(["'])/gi, (m, a, p, z) => { const r = fixRef(dir, p); if (r) { n++; return a + r + z; } return m; }); if (n) { fs().write(page, html2, { silent: true }); report.push('🔧 Troquei ' + n + ' caminho(s) "/..." por "./..." em ' + page + ' (era isso que deixava a tela branca fora do Netlify)'); } let c = 0; for (const f of fs().list().filter((x) => /\.css$/i.test(x))) { const t = fs().read(f); if (t == null) continue; const fd = fs().dirName(f); const t2 = t.replace(/url\(\s*(['"]?)\/(?!\/)([^'")]+)\1\s*\)/g, (m, q, p) => { const r = fixRef(fd, p); if (r) { c++; return 'url(' + q + r + q + ')'; } return m; }); if (t2 !== t) fs().write(f, t2, { silent: true }); } if (c) report.push('🔧 Troquei ' + c + ' caminho(s) "/..." nos arquivos CSS'); const isSpa = / ]+id=["'](?:root|app)["']/i.test(html2) && /type=["']module["']/i.test(html2); if (isSpa) { const pre = dir ? dir + '/' : ''; const js = fs().list().filter((x) => x.startsWith(pre) && /\.js$/i.test(x)).some((x) => /["'`]\/assets\//.test(fs().read(x) || '')); if (js) report.push('⚠️ O JavaScript do build ainda tem "/assets/" dentro. Se alguma parte não carregar no GitHub Pages, o certo é refazer o build com base "./" (no vite.config: base: \'./\'). Me traga o projeto que eu ajusto.'); if (/BrowserRouter|createBrowserRouter|history\.pushState/.test(fs().list().filter((x) => x.startsWith(pre) && /\.js$/i.test(x)).map((x) => fs().read(x) || '').join('\n').slice(0, 4e6))) report.push('ℹ️ O app usa rotas (páginas tipo /login). Criei o 404.html igual ao index para o GitHub Pages abrir essas páginas.'); if (!fs().exists(pre + '404.html') || (fs().read(pre + '404.html') || '').includes('PWA:inicio')) { fs().write(pre + '404.html', fs().read(page), { silent: true }); if (!report.some((r) => r.includes('404.html'))) report.push('✅ Criei o 404.html (cópia do index) — no GitHub Pages, evita "página não encontrada" ao recarregar'); } } return report; } async function makeInstallable(page, o) { const report = fixAbsolutePaths(page); const dir = fs().dirName(page); const pre = dir ? dir + '/' : ''; let html = fs().read(page) || ''; // 1. ícones const hasIcons = fs().exists(pre + 'icons/icon-192.png') && fs().exists(pre + 'icons/icon-512.png') && fs().exists(pre + 'icons/maskable-512.png'); if (!hasIcons || o.newIcons) { if (!imgEl && cfg.texto === DEF.texto) cfg.texto = initials(o.name); saveFiles(await iconFiles(dir, SIZES, 'png')); report.push((hasIcons ? '♻️ Ícones refeitos' : '✅ Criei os ícones') + ' (' + SIZES.length + ' tamanhos + maskable + SVG + favicon) em ' + (pre || '') + 'icons/'); } else report.push('👍 Ícones já existiam — mantive'); // 2. manifest const icons = SIZES.filter((s) => s >= 48 && fs().exists(pre + 'icons/icon-' + s + '.png')).map((s) => ({ src: 'icons/icon-' + s + '.png', sizes: s + 'x' + s, type: 'image/png', purpose: 'any' })); icons.push({ src: 'icons/maskable-192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' }, { src: 'icons/maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }, { src: 'icons/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' }); let old = {}; const manName = manifestOf(page); try { old = JSON.parse(fs().read(pre + manName) || '{}'); } catch {} const start = fs().baseName(page).toLowerCase() === 'index.html' ? './' : './' + fs().baseName(page); const man = Object.assign({}, old, { name: o.name, short_name: o.short || o.name.slice(0, 12), description: o.desc || old.description || o.name, id: './app-' + slug(o.name) + (start === './' ? '' : '-' + slug(fs().baseName(page).replace(/\.html?$/i, ''))), start_url: start, scope: './', display: o.display, orientation: o.orientation, background_color: o.bg, theme_color: o.theme, lang: 'pt-BR', dir: 'ltr', icons, }); if (o.shortcuts && o.shortcuts.length) man.shortcuts = o.shortcuts; fs().write(pre + manName, JSON.stringify(man, null, 2) + '\n', { silent: true }); report.push((old.name ? '♻️ Atualizei' : '✅ Criei') + ' o ' + pre + manName + ' (' + icons.length + ' ícones, ' + o.display + ', ' + o.orientation + ')'); // 3. service worker com lista automática const list = ['./'].concat(fs().list().filter((f) => (!dir || f.startsWith(pre)) && !/^\.sk\/|(^|\/)\.git|\.(zip|apk|aab|exe|map)$/i.test(f.slice(pre.length)) && (fs().get(f).size || 0) './' + f.slice(pre.length))); const files = o.offline ? list.slice(0, 3000) : ['./', './' + fs().baseName(page), './' + manName]; fs().write(pre + 'service-worker.js', swText(o.name, files), { silent: true }); report.push('✅ Service worker ' + (o.offline ? 'com ' + files.length + ' arquivos listados SOZINHO (funciona sem internet)' : 'leve (guarda o que for usado)')); // 4. const viewport = / ]+name=["']?viewport/i.test(html) ? '' : ' \n'; const charset = / ]+charset/i.test(html) ? '' : ' \n'; const title = titleOf(html) ? '' : ' ' + SK.esc(o.name) + '"
- Usa: 🗜 ZIP, 💾 Salva no aparelho, 📂 Abre arquivos, 📲 Instalável (PWA)
- Fala com: mail.google.com, www.google.com
- Algumas funções: fs, gradFill, shapePath, hexA, content, draw, render, toBytes, svg, ico, iconFiles, saveFiles, rel, resolveFrom, titleOf
- 🚨 Tem marca da Replit (pode parar fora de lá).

### js 86b node js

**js/17-codigo.js** — 14.5 KB, 223 linhas, 19 funções
- O que faz: "js/86b-node.js */"
- Usa: 📲 Instalável (PWA)
- Fala com: cdn.jsdelivr.net
- Algumas funções: fs, ehSite, lacreLigado, registrarSW, ligarLacre, registrarSWteste, carregarScript, carregarCss, arvore, ligar, mostrarServidor, trazer, andar, status, teclas

### js 86c termux js

**js/18-codigo.js** — 43.1 KB, 432 linhas, 44 funções
- O que faz: "js/86c-termux.js */"
- Fala com: cdn.jsdelivr.net
- Algumas funções: $, status, carregarScript, carregarCss, prepararTela, ir, escreverTela, enviar, tamanho, conectar, desconectar, copiar, buildPC, letra, irParaPasta
- 🚨 Tem marca da Replit (pode parar fora de lá).

### js 86e atalhos js

**js/27-codigo.js** — 5.0 KB, 77 linhas, 5 funções
- O que faz: "js/86e-atalhos.js */"
- Algumas funções: fs, pacotes, montar, pintar, pre

### js 86f pasta viva js

**js/19-codigo.js** — 8.7 KB, 139 linhas, 12 funções
- O que faz: "js/86f-pasta-viva.js */"
- Algumas funções: nomeProj, pasta, assin, assinRec, estado, chamar, item, mandar, ir, iniciar, olhar, esvaziar

### js 86g largura js

**js/20-codigo.js** — 2.5 KB, 39 linhas, 4 funções
- O que faz: "js/86g-largura.js */"
- Algumas funções: aplicar, ligar, mover, soltar

### js 92c importar js

**js/26-codigo.js** — 6.3 KB, 87 linhas, 4 funções
- O que faz: "js/92c-importar.js */"
- Usa: 📂 Abre arquivos
- Algumas funções: fs, trazerProjetos, porMemoria, build

### js 96b eas js

**js/41-codigo.js** — 19.8 KB, 280 linhas, 21 funções
- O que faz: "js/96b-eas.js */"
- Fala com: expo.dev, api.expo.dev
- Algumas funções: fs, versaoBase, majorExpo, lerJson, conferir, add, corrigir, testarExpo, gh, repoOf, guardarSegredo, enviarEGerar, ultimo, parar, acompanhar
- 🚨 Tem marca da Replit (pode parar fora de lá).

### js 96c preparar js

**js/44-codigo.js** — 36.0 KB, 551 linhas, 26 funções
- O que faz: "js/96c-preparar.js */"
- Usa: 🎤 Ditado, 🗜 ZIP, ☁️ Banco online, 📷 Câmera
- Algumas funções: fs, lerJSON, raizPkg, permissoes, analisar, add, pastaDoBuild, nomeApp, idApp, receitaCap, criarCapacitor, MAIN_CJS, criarJanela, criarDesktop, receita
- 🚨 Tem marca da Replit (pode parar fora de lá).

### js acoes js

**js/32-codigo.js** — 14.4 KB, 234 linhas, 18 funções
- O que faz: "js/91-acoes.js */"
- Usa: 🐙 GitHub
- Fala com: api.github.com, github.com
- Algumas funções: fs, gh, ic, stop, status, base, mount, pickRepo, load, renderWorkflows, renderRuns, onClick, follow, tick, detail

### js ai js

**js/11-codigo.js** — 57.7 KB, 735 linhas, 51 funções
- O que faz: "js/80-ai.js */"
- Usa: 🤖 IA, 🔊 Fala (TTS), 🎤 Ditado, 💾 Salva no aparelho, 📂 Abre arquivos
- Fala com: api.groq.com, console.groq.com, generativelanguage.googleapis.com, aistudio.google.com, openrouter.ai, api.anthropic.com, console.anthropic.com, api.x.ai, console.x.ai, api.perplexity.ai, www.perplexity.ai, api.openai.com, platform.openai.com, openapi.monica.im, platform.monica.im, ollama.com, api.exemplo.com
- Algumas funções: fs, detect, saveKeys, current, curInfo, tok, adjust, aiFetch, errorText, gFetch, geminiBody, listModels, chat, finish, readSSE
- 🚨 Tem marca da Replit (pode parar fora de lá).

### js analise js

**js/45-codigo.js** — 46.1 KB, 450 linhas, 29 funções
- O que faz: "js/97-analise.js */"
- Usa: 📄 PDF, 📝 Word, 🗜 ZIP, 🔎 OCR, ☁️ Banco online, 💾 Salva no aparelho, 📂 Abre arquivos, 🗺 Gráficos
- Bibliotecas: jsPDF, pdf.js, JSZip, Tesseract, mammoth, Tailwind, highlight.js, Monaco, CodeMirror, Supabase
- Fala com: www.npmjs.com
- Algumas funções: fs, explain, scriptHelp, parseCatalog, analyze, addUse, treeText, walk, planMD, unifiedPkg, sortObj, batText, aiPack, parseMarked, cleanViteConfig
- 🚨 Tem marca da Replit (pode parar fora de lá).

### js api js

**js/46-codigo.js** — 11.6 KB, 152 linhas, 16 funções
- O que faz: "js/98-api.js */"
- Usa: 💾 Salva no aparelho
- Algumas funções: fs, lineOf, analyze, toRe, fullPath, req, save, $, show, send, hint, allGet, build, $, scan

### js apk js

**js/37-codigo.js** — 54.8 KB, 981 linhas, 36 funções
- O que faz: "js/96-apk.js */"
- Usa: 📝 Word, 🗜 ZIP, 🐙 GitHub, 📂 Abre arquivos
- Fala com: schemas.android.com, appassets.androidplatform.net, api.github.com
- Algumas funções: fs, wfNome, receitas, mandar, salvar, nomeDe, local, slug, pkgPart, readCfg, validPkg, prepare, servir, EXE_RECEITA, temServidor

### js checkpoints js

**js/15-codigo.js** — 6.3 KB, 123 linhas, 12 funções
- O que faz: "js/85-checkpoints.js */"
- Usa: 🗜 ZIP, 💾 Salva no aparelho
- Algumas funções: fs, sizeOf, create, prune, list, restore, remove, diff, build, render, onClick, sec

### js config js

**js/30-codigo.js** — 18.7 KB, 259 linhas, 18 funções
- O que faz: "js/89-config.js */"
- Usa: ⚖️ DJEN/CNJ/tribunal, ☁️ Banco online, 💾 Salva no aparelho
- Fala com: xxxx.supabase.co, seu-usuario.github.io
- Algumas funções: fs, extras, cofreLocal, aplicaCofre, auto, enviaProjeto, sincPlayground, setStatus, build, renderAll, renderConta, renderCofre, mask, renderBackup, renderNuvem

### js conta js

**js/02-codigo.js** — 1.5 KB, 27 linhas, 1 funções
- O que faz: "js/04-conta.js */"
- Usa: ☁️ Banco online, 💾 Salva no aparelho
- Algumas funções: nada

### js conversa js

**js/34-codigo.js** — 10.1 KB, 143 linhas, 7 funções
- O que faz: "js/93-conversa.js */"
- Algumas funções: codeScore, sniff, slug, parse, startBlock, indexMD, toTXT

### js core js

**js/01-codigo.js** — 8.7 KB, 146 linhas, 5 funções
- O que faz: "js/00-core.js */"
- Usa: 💾 Salva no aparelho, 📂 Abre arquivos
- Algumas funções: modal, done, openDB, tx, reqP

### js editor js

**js/06-codigo.js** — 12.4 KB, 263 linhas, 16 funções
- O que faz: "js/40-editor.js */"
- Algumas funções: fs, build, applyPrefs, paint, paintSoon, syncScroll, renderTabs, updateStatus, open, close, showEmpty, onInput, insertText, onKey, goToLinePrompt

### js fatiador js

**js/35-codigo.js** — 23.3 KB, 306 linhas, 20 funções
- O que faz: "js/94-fatiador.js */"
- Algumas funções: fs, lineStates, nameOfJs, splitByStarts, pullComments, splitJs, tryBase, short, splitCss, splitPy, splitMd, splitPlain, splitHtml, push, cp

### js fs js

**js/03-codigo.js** — 15.4 KB, 286 linhas, 16 funções
- O que faz: "js/10-fs.js */"
- Usa: 📝 Word, 💾 Salva no aparelho
- Algumas funções: extOf, baseName, dirName, norm, typeOf, decodeBytes, looksBinary, toBase64, fromBase64, recordFromBytes, saveNow, touch, getDir, sort, ensureParents

### js gasto js

**js/12-codigo.js** — 9.6 KB, 144 linhas, 14 funções
- O que faz: "js/81-gasto.js */"
- Algumas funções: dolar, limiteMes, avisoPedido, preco, brl, fmt, k, custo, registra, totais, antes, previa, resumoHTML, painel

### js github js

**js/31-codigo.js** — 22.0 KB, 323 linhas, 28 funções
- O que faz: "js/90-github.js */"
- Usa: 🐙 GitHub
- Fala com: api.github.com, github.com
- Algumas funções: fs, gh, explain, pool, worker, gitSha, parseRepo, linkKey, getLink, setLink, status, importRepo, push, createRepo, enablePages
- 🚨 Tem marca da Replit (pode parar fora de lá).

### js highlight js

**js/05-codigo.js** — 6.6 KB, 129 linhas, 4 funções
- O que faz: "js/30-highlight.js */"
- Bibliotecas: highlight.js
- Algumas funções: esc, span, lex, html

### js inventario js

**js/29-codigo.js** — 15.2 KB, 185 linhas, 15 funções
- O que faz: "js/88-inventario.js */"
- Usa: 🤖 IA, 🔊 Fala (TTS), 🎤 Ditado, 📄 PDF, 📝 Word, 🗜 ZIP, 🔎 OCR, ⚖️ DJEN/CNJ/tribunal, 🧮 Cálculo judicial, 🌐 Pesquisa na internet, ☁️ Banco online, 💾 Salva no aparelho, 📂 Abre arquivos, 📷 Câmera, 📲 Instalável (PWA), 🗺 Gráficos
- Bibliotecas: jsPDF, pdf.js, JSZip, Tesseract, mammoth, Chart.js, Tailwind, Bootstrap, highlight.js, Monaco, CodeMirror, Supabase, Firebase
- Algumas funções: fs, texto, limpaTag, familia, analisar, lerArquivos, doProjeto, completude, grupos, oQueFaz, render, manualMD, pedirIA, build, $
- 🚨 Tem marca da Replit (pode parar fora de lá).

### js lib expo core js

**js/40-codigo.js** — 13.9 KB, 194 linhas, 11 funções
- O que faz: "js/lib/expo-core.js */"
- Usa: 📷 Câmera
- Fala com: expo.dev, u.expo.dev
- Algumas funções: json, raizDe, slugDe, ler, permissoes, tem, consertar, existe, tirarImg, limpa, base
- 🚨 Tem marca da Replit (pode parar fora de lá).

### js lib jszip min js

**js/21-codigo.js** — 95.4 KB, 15 linhas, 96 funções
- O que faz: "js/lib/jszip.min.js */"
- Usa: 🗜 ZIP, 📂 Abre arquivos
- Bibliotecas: JSZip
- Fala com: stuartk.com, raw.github.com, github.com, stuk.github.io
- Algumas funções: s, u, o, h, A, n, s, n, f, s, n, s, h, i, i

### js lib nacl fast min js

**js/38-codigo.js** — 31.9 KB, 4 linhas, 52 funções
- O que faz: "js/lib/nacl-fast.min.js */"
- Fala com: github.com
- Algumas funções: t, n, e, o, i, h, a, f, s, c, u, y, l, w, p

### js lib picotador base js

**js/22-codigo.js** — 2.6 KB, 37 linhas, 0 funções
- O que faz: "js/lib/picotador/00-base.js */"

### js lib picotador ler js

**js/23-codigo.js** — 7.5 KB, 95 linhas, 6 funções
- O que faz: "js/lib/picotador/10-ler.js */"
- Usa: 🗜 ZIP
- Bibliotecas: JSZip
- Algumas funções: ehMsg, doChatGPT, doClaude, doMarkdown, deJSON, deZip

### js lib picotador mensagens js

**js/25-codigo.js** — 12.9 KB, 131 linhas, 7 funções
- O que faz: "js/lib/picotador/30-mensagens.js */"
- Usa: 🗜 ZIP
- Bibliotecas: JSZip
- Algumas funções: tokens, pintar, paraMD, paraMemoria, pintar, escolhidas, diario

### js lib picotador projetos js

**js/24-codigo.js** — 7.4 KB, 84 linhas, 2 funções
- O que faz: "js/lib/picotador/20-projetos.js */"
- Usa: 🗜 ZIP
- Bibliotecas: JSZip
- Algumas funções: nMem, resumo

### js lib plano core js

**js/42-codigo.js** — 15.2 KB, 173 linhas, 12 funções
- O que faz: "js/lib/plano-core.js */"
- Usa: ☁️ Banco online
- Algumas funções: ext, uniq, normRota, arvore, andar, gerar, chave, dedup, temRota, tem, markdown, tab
- 🚨 Tem marca da Replit (pode parar fora de lá).

### js lib selar js

**js/39-codigo.js** — 5.6 KB, 96 linhas, 9 funções
- O que faz: "js/lib/selar.js */"
- Algumas funções: add64, add64c, g, compress, blake2b, b64para, paraB64, selar, abrir

### js playground js

**js/33-codigo.js** — 25.4 KB, 380 linhas, 37 funções
- O que faz: "js/92-playground.js */"
- Usa: 🗜 ZIP, 💾 Salva no aparelho, 📂 Abre arquivos
- Bibliotecas: React
- Fala com: unpkg.com, cdn.jsdelivr.net
- Algumas funções: fs, App, fresh, M, s, p, esc, prepJSX, page, add, cleanPage, detectMode, build, $, slug

### js ponte js

**js/14-codigo.js** — 3.6 KB, 70 linhas, 4 funções
- O que faz: "js/84-ponte.js */"
- Fala com: seu-usuario.github.io
- Algumas funções: fs, endereco, arquivosDoProjeto, mandarCirurgiao

### js search js

**js/10-codigo.js** — 5.9 KB, 121 linhas, 6 funções
- O que faz: "js/70-search.js */"
- Algumas funções: fs, build, makeRegex, includeFilter, search, replaceAll
- 🚨 Tem marca da Replit (pode parar fora de lá).

### js terminal js

**js/16-codigo.js** — 28.3 KB, 413 linhas, 34 funções
- O que faz: "js/86-terminal.js */"
- Usa: 🗜 ZIP, 🗺 Gráficos
- Bibliotecas: Chart.js
- Fala com: cdn.jsdelivr.net, registry.npmjs.org, api.npms.io
- Algumas funções: fs, resolve, isDir, isFile, children, allUnder, base, join, print, err, printHTML, promptText, words, flags, checkpoint
- 🚨 Tem marca da Replit (pode parar fora de lá).

### js tsx js

**js/09-codigo.js** — 8.4 KB, 135 linhas, 8 funções
- O que faz: "js/61-tsx.js */"
- Bibliotecas: Tailwind
- Fala com: cdn.jsdelivr.net, esm.sh, cdn.tailwindcss.com
- Algumas funções: fs, carregarBabel, acharArquivo, tentar, deFora, montar, urlDe, mostrarErro

### js voz js

**js/13-codigo.js** — 9.5 KB, 168 linhas, 17 funções
- O que faz: "js/83-voz.js */"
- Usa: 🔊 Fala (TTS), 🎤 Ditado
- Algumas funções: salvar, carregarVozes, melhorVoz, limpar, pedacos, falar, parar, estado, ouvir, norm, ehEco, enviarFala, ligar, desligar, ajustesHTML

### js zip js

**js/04-codigo.js** — 8.9 KB, 160 linhas, 10 funções
- O que faz: "js/20-zip.js */"
- Usa: 🗜 ZIP
- Algumas funções: CRC_TABLE, crc32, streamThrough, read, write, ehCompactado, nomeSemExt, lerTar, str, readAny
- 🚨 Tem marca da Replit (pode parar fora de lá).

### meu projeto

**js/47-codigo.js** — 20.2 KB, 297 linhas, 17 funções
- O que faz: "Meu projeto"
- Usa: 🗜 ZIP, 💾 Salva no aparelho, 📂 Abre arquivos, 📲 Instalável (PWA)
- Algumas funções: fs, mobile, setTree, openSide, closeSide, toggleSide, starterFiles, kvTudo, backupTudo, restaurarTudo, buildProjects, $, renderProjects, setSave, keys

### meus links

**js/28-codigo.js** — 14.3 KB, 212 linhas, 19 funções
- O que faz: "Meus Links"
- Usa: 📂 Abre arquivos
- Algumas funções: fs, salvarLocal, salvar, carregar, sincNuvem, icone, nomeDe, extrair, build, $, juntar, adicionar, render, onListClick, paginaHTML

### mini sk

**index.html** — 11.2 KB, 108 linhas, 0 funções
- O que faz: "Mini SK" — botões: ☰ · Mini SK · 🔍 Buscar · 🤖 IA · ⌨️ Terminal · ⚡ Node · 📱 Termux · 🔗 Links · ▶️ Play · 📸 Voltar
- Usa: 📲 Instalável (PWA)
- 🚨 Tem marca da Replit (pode parar fora de lá).
- 📎 Depende de arquivos .js separados (precisa deles junto).

### novo

**js/07-codigo.js** — 13.0 KB, 242 linhas, 22 funções
- O que faz: "Novo"
- Usa: 🗜 ZIP, 📂 Abre arquivos
- Algumas funções: fs, build, render, walk, targetDir, onClick, toolbar, newFile, newDir, starter, expandTo, rename, moveAsk, move, remove
- 🚨 Tem marca da Replit (pode parar fora de lá).

### s s i return ti h1 h1 replace g trim filter boolean join const bloco t match s s s if bloco return bloco split n map l l replace s s trim filter l l test l slice join const linhas for const l of t split n slice const m l match s s if m if m trim test m linhas push m trim else if l trim break return linhas slice join function itens t const out const re export s default s async s function s a za z w export s const s a za z w s s async s a za z w s class s a z w def s a z w s g let m while m re exec t out length n length slice function usa p t todos const dir p includes p slice p lastindexof const refs const re import from s import s s require s src href g let m while m re exec t refs push r m html é arquivo não biblioteca if test r test r out push r split slice r startswith join continue let alvo r replace src replace if alvo startswith const partes dir dir split for const s of alvo split if s partes pop else if s partes push s alvo partes join alvo alvo replace const achou todos find x x alvo x replace alvo x alvo index ts x alvo index tsx x alvo index js out push achou alvo return uniq out function rotasde t const out const re b app router get post put delete patch s g let m while m re exec t out push m touppercase m return uniq out slice function chamadasde t const out const re fetch s g let m while m re exec t out push m return uniq out slice ordem quem é usado vem antes de quem usa dependências primeiro function ordenar mods const porpath new map mods map m m path m const feito new set const out const peso dados logica servidor tela estilo const visita m pilha if feito has m path pilha has m path return pilha add m path m usa filter u porpath has u foreach u visita porpath get u pilha feito add m path out push m mods slice sort a b peso a papel peso b papel a path localecompare b path foreach m visita m new set return out function gerar arquivos nome nome nome projeto const todos arquivos filter a pular test a path const paths todos map a a path const cod todos filter a a text null codigo test a path a text length sw service worker workbox js i test a path map a path a path papel papel a path a text desc descricao a path a text replace s itens itens a text usa usa a path a text paths rotas rotasde a text chamadas chamadasde a text linhas a text split n length mods ordenar mods const pacotes uniq mods flatmap m m usa filter u u startswith map u u replace sort const temservidor mods some m m papel servidor m rotas length nome do módulo novo numerado na ordem de montagem let n o que já é locomotiva ou último vagão no original vira o core app do esqueleto mods foreach m if d core app main init inicializacao i test semext m path m papel tela m base true const novos mods filter m m papel estilo m base map m const limpo semext m path replace d const nm js string n padstart slug limpo index m path split slice inicio limpo js n math min n n index html i test a path a text text const tituloapp titulo titulo match mods filter m m papel p length p join tem servidor rotas api temservidor sim veja o passo do servidor não dá para ser só html peças de fora bibliotecas pacotes length pacotes slice join pacotes length nenhuma l push estrutura modular proposta index html a página chama os módulos na ordem css app css o visual js core js a locomotiva cria window app registrar guardar avisar novos foreach m l push m novo padend m desc m papel slice era m path l push js app js o último monta a tela com o que embarcou l push as partes uma por uma l push era vira tipo o que faz usa mods foreach m i l push i m path m novo m novo css app css m papel m desc m itens slice join replace g slice m usa filter u u startswith map base slice join l push l push montar passo a passo cada bloco é um pedido pronto copiar colar na ia l push passo combinar as regras com a ia text vamos recriar o app tituloapp como html modular que abre pelo index html sem servidor e sem nada da replit regras index html chama os arquivos js na ordem antes do js core js cria window app com app registrar modulo app guardar chave valor em indexeddb localstorage e app avisar texto cada arquivo js nn nome js cuida de um assunto começa com function app e termina com window app js app js vem por último e monta a tela com os módulos registrados textos em português do brasil vou pedir um arquivo por vez responda só com o arquivo completo sem cortar nada primeiro crie index html css app css e js core js let passo for const m of novos const deps m usa filter u u startswith map u novos find x x path u novo filter boolean const libs m usa filter u u startswith map u u replace l push passo passo m novo era m path m linhas linhas text l push crie m novo m desc ele faz m desc ele é uma parte de m papel do app m itens length no app original ele tinha estas funções partes m itens join deps length ele usa o que já foi criado em deps join pelo app libs length o original usava as bibliotecas libs join em html puro use a versão de cdn ou faça sem ela se for simples m rotas length no original isto era servidor com as rotas m rotas join em html troque por funções que guardam no aparelho app guardar ou que chamam a ia direto m chamadas length ele chamava estes endereços m chamadas join em html ligue cada um à função equivalente do módulo certo registre com app registrar nome icone abrir devolva só o arquivo completo filter boolean l push passo passo js app js e conferir text crie js app js ele olha app modulos e monta o menu abas com um botão para cada módulo depois me mande o index html atualizado com todos os na ordem certa js core js concat novos map m m novo js app js join l push conferir no final abrir o index html na prévia aparece a tela sem erro console vazio cada botão abre a sua parte fechar e abrir de novo os dados continuam nada com replit repl workspace no código preparar confere pwa deixar instalável apk ou exe esqueleto const esq const scripts js core js concat novos map m m novo js app js esq push path index html text n n n n n tituloapp

**js/43-codigo.js** — 14.8 KB, 141 linhas, 14 funções
- O que faz: "]*>([^ ]*>([\s\S]{2,120}?) /i) || [])[1]; return [ti, h1 && h1.replace(/ ]+>/g, '').trim()].filter(Boolean).join(' — '); } const bloco = t.match(/^\s*\/\*+([\s\S]{10,900}?)\*\//); if (bloco) return bloco[1].split('\n').map((l) => l.replace(/^\s*\*?\s?/, '').trim()).filter((l) => l && !/^=+$/.test(l)).slice(0, 4).join(' '); const linhas = []; for (const l of t.split('\n').slice(0, 12)) { const m = l.match(/^\s*(\/\/|#)\s?(.*)$/); if (m) { if (m[2].trim() && !/^[=\-]+$/.test(m[2])) linhas.push(m[2].trim()); } else if (l.trim()) break; } return linhas.slice(0, 3).join(' '); } function itens(t) { const out = []; const re = /(?:export\s+(?:default\s+)?)?(?:async\s+)?function\s+([A-Za-z_$][\w$]*)|(?:export\s+)?const\s+([A-Za-z_$][\w$]*)\s*=\s*(?:async\s*)?(?:\([^)]*\)|[A-Za-z_$][\w$]*)\s*=>|class\s+([A-Z][\w$]*)|def\s+([a-z_]\w*)\s*\(/g; let m; while ((m = re.exec(t)) && out.length n.length > 2).slice(0, 18); } function usa(p, t, todos) { const dir = p.includes('/') ? p.slice(0, p.lastIndexOf('/')) : ''; const refs = []; const re = /(?:import[^'"]*from\s*|import\s*\(\s*|require\(\s*| ]+src=| ]+href=)['"]([^'"]+)['"]/g; let m; while ((m = re.exec(t))) refs.push({ r: m[1], html: /^ é arquivo, não biblioteca if (!/^[.\/@~]/.test(r) || (/^@(?!\/)/.test(r))) { out.push('📦 ' + r.split('/').slice(0, r.startsWith('@') ? 2 : 1).join('/')); continue; } let alvo = r.replace(/^@\//, 'src/').replace(/^~\//, ''); if (alvo.startsWith('.')) { const partes = (dir ? dir.split('/') : []); for (const s of alvo.split('/')) { if (s === '..') partes.pop(); else if (s !== '.') partes.push(s); } alvo = partes.join('/'); } alvo = alvo.replace(/^\//, ''); const achou = todos.find((x) => x === alvo || x.replace(/\.[^./]+$/, '') === alvo || x === alvo + '/index.ts' || x === alvo + '/index.tsx' || x === alvo + '/index.js'); out.push(achou || alvo); } return uniq(out); } function rotasDe(t) { const out = []; const re = /\b(?:app|router)\.(get|post|put|delete|patch)\(\s*['"`]([^'"`]+)/g; let m; while ((m = re.exec(t))) out.push(m[1].toUpperCase() + ' ' + m[2]); return uniq(out).slice(0, 30); } function chamadasDe(t) { const out = []; const re = /fetch\(\s*[`'"]([^`'"]+)/g; let m; while ((m = re.exec(t))) out.push(m[1]); return uniq(out).slice(0, 20); } // ordem: quem é usado vem antes de quem usa (dependências primeiro) function ordenar(mods) { const porPath = new Map(mods.map((m) => [m.path, m])); const feito = new Set(); const out = []; const PESO = { dados: 0, logica: 1, servidor: 2, tela: 3, estilo: 4 }; const visita = (m, pilha) => { if (feito.has(m.path) || pilha.has(m.path)) return; pilha.add(m.path); m.usa.filter((u) => porPath.has(u)).forEach((u) => visita(porPath.get(u), pilha)); feito.add(m.path); out.push(m); }; mods.slice().sort((a, b) => PESO[a.papel] - PESO[b.papel] || a.path.localeCompare(b.path)).forEach((m) => visita(m, new Set())); return out; } function gerar(arquivos, nome) { nome = nome || 'Projeto'; const todos = arquivos.filter((a) => !PULAR.test(a.path)); const paths = todos.map((a) => a.path); const cod = todos.filter((a) => a.text != null && CODIGO.test(a.path) && a.text.length !/(^|\/)(sw|service-?worker|workbox[^/]*)\.js$/i.test(a.path)).map((a) => ({ path: a.path, papel: papel(a.path, a.text), desc: descricao(a.path, a.text).replace(/[.\s]+$/, ''), itens: itens(a.text), usa: usa(a.path, a.text, paths), rotas: rotasDe(a.text), chamadas: chamadasDe(a.text), linhas: a.text.split('\n').length })); mods = ordenar(mods); const pacotes = uniq(mods.flatMap((m) => m.usa.filter((u) => u.startsWith('📦 ')).map((u) => u.replace('📦 ', '')))).sort(); const temServidor = mods.some((m) => m.papel === 'servidor' && m.rotas.length); // nome do módulo novo (numerado, na ordem de montagem) let n = 10; // o que já é "locomotiva" ou "último vagão" no original vira o 00-core / 99-app do esqueleto mods.forEach((m) => { if (/^(\d+-)?(core|app|main|init|inicializacao)$/i.test(semExt(m.path)) && m.papel !== 'tela') m.base = true; }); const novos = mods.filter((m) => m.papel !== 'estilo' && !m.base).map((m) => { const limpo = semExt(m.path).replace(/^\d+[-_]/, ''); const nm = 'js/' + String(n).padStart(2, '0') + '-' + slug(limpo === 'index' ? m.path.split('/').slice(-2, -1)[0] || 'inicio' : limpo) + '.js'; n = Math.min(98, n + (n /(^|\/)index\.html?$/i.test(a.path) && a.text) || {}).text; const tituloApp = (titulo && (titulo.match(/ ]*>([^ mods.filter((m) => m.papel === p).length + ' ' + p).join(', ') + ')', '- **Tem servidor (rotas /api):** ' + (temServidor ? 'sim — veja o passo do servidor' : 'não — dá para ser só HTML'), '- **Peças de fora (bibliotecas):** ' + (pacotes.length ? pacotes.slice(0, 30).join(', ') + (pacotes.length > 30 ? '…' : '') : 'nenhuma'), ''); L.push('## 2. Estrutura modular proposta', '', '```', 'index.html ← a página; chama os módulos NA ORDEM', 'css/app.css ← o visual', 'js/00-core.js ← a "locomotiva": cria window.APP (registrar, guardar, avisar)'); novos.forEach((m) => L.push(m.novo.padEnd(22) + '← ' + (m.desc || m.papel).slice(0, 70) + ' (era ' + m.path + ')')); L.push('js/99-app.js ← o último: monta a tela com o que embarcou', '```', ''); L.push('## 3. As partes, uma por uma', ''); L.push('| # | Era | Vira | Tipo | O que faz | Usa |', '|---|---|---|---|---|---|'); mods.forEach((m, i) => L.push('| ' + (i + 1) + ' | `' + m.path + '` | ' + (m.novo ? '`' + m.novo + '`' : 'css/app.css') + ' | ' + m.papel + ' | ' + (m.desc || (m.itens.slice(0, 4).join(', ') || '—')).replace(/\|/g, '/').slice(0, 90) + ' | ' + (m.usa.filter((u) => !u.startsWith('📦')).map(base).slice(0, 4).join(', ') || '—') + ' |')); L.push(''); L.push('## 4. Montar passo a passo (cada bloco é um pedido pronto: 📋 Copiar → colar na IA)', ''); L.push('### Passo 0 — combinar as regras com a IA', '', '```text', 'Vamos recriar o app "' + tituloApp + '" como HTML MODULAR, que abre pelo index.html, sem servidor e sem nada da Replit.', 'Regras: (1) index.html chama os arquivos js/ na ordem, antes do ; (2) js/00-core.js cria window.APP com APP.registrar(modulo), APP.guardar(chave, valor) em IndexedDB/localStorage e APP.avisar(texto); (3) cada arquivo js/NN-nome.js cuida de UM assunto, começa com (function (APP) { e termina com })(window.APP); (4) js/99-app.js vem por último e monta a tela com os módulos registrados; (5) textos em português do Brasil.', 'Vou pedir UM arquivo por vez. Responda só com o arquivo completo, sem cortar nada. Primeiro: crie index.html, css/app.css e js/00-core.js.', '```', ''); let passo = 1; for (const m of novos) { const deps = m.usa.filter((u) => !u.startsWith('📦')).map((u) => (novos.find((x) => x.path === u) || {}).novo).filter(Boolean); const libs = m.usa.filter((u) => u.startsWith('📦')).map((u) => u.replace('📦 ', '')); L.push('### Passo ' + passo++ + ' — `' + m.novo + '` (era `' + m.path + '`, ' + m.linhas + ' linhas)', '', '```text'); L.push(...['Crie ' + m.novo + '. ' + (m.desc ? 'Ele faz: ' + m.desc + '.' : 'Ele é uma parte de ' + m.papel + ' do app.'), m.itens.length ? 'No app original ele tinha estas funções/partes: ' + m.itens.join(', ') + '.' : '', deps.length ? 'Ele usa o que já foi criado em: ' + deps.join(', ') + ' (pelo APP).' : '', libs.length ? 'O original usava as bibliotecas ' + libs.join(', ') + ': em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).' : '', m.rotas.length ? 'No original isto era SERVIDOR com as rotas ' + m.rotas.join(', ') + '. Em HTML, troque por funções que guardam no aparelho (APP.guardar) ou que chamam a IA direto.' : '', m.chamadas.length ? 'Ele chamava estes endereços: ' + m.chamadas.join(', ') + '. Em HTML, ligue cada um à função equivalente do módulo certo.' : '', 'Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.'].filter(Boolean), '```', ''); } L.push('### Passo ' + passo++ + ' — `js/99-app.js` e conferir', '', '```text', 'Crie js/99-app.js: ele olha APP.modulos e monta o menu/abas com um botão para cada módulo. Depois, me mande o index.html atualizado com todos os na ordem certa: ' + ['js/00-core.js'].concat(novos.map((m) => m.novo), ['js/99-app.js']).join(', ') + '.', '```', ''); L.push('## 5. Conferir no final', '', '- [ ] Abrir o index.html na prévia: aparece a tela sem erro (▤ console vazio)?', '- [ ] Cada botão abre a sua parte?', '- [ ] Fechar e abrir de novo: os dados continuam?', '- [ ] Nada com "replit", "REPL_", "@workspace" no código (🏗️ Preparar confere).', '- [ ] 📱 PWA → deixar instalável; 📦 APK ou 🖥️ .exe.', ''); // esqueleto const esq = []; const scripts = ['js/00-core.js'].concat(novos.map((m) => m.novo), ['js/99-app.js']); esq.push({ path: 'index.html', text: ' \n \n \n \n \n ' + tituloApp + '"
- Usa: 💾 Salva no aparelho
- Algumas funções: slug, base, semExt, uniq, papel, descricao, itens, usa, rotasDe, chamadasDe, ordenar, visita, gerar, titulo
- 🚨 Tem marca da Replit (pode parar fora de lá).
