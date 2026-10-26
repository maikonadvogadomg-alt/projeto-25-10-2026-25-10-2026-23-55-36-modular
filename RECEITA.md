# 🧬 Receita para recriar: Mini SK

_Gerada sem IA, lendo 62 arquivo(s). Serve para remontar este app como HTML modular — com qualquer IA, um arquivo por vez._

## 1. O que é

- **Nome:** Mini SK
- **Partes de código:** 59 (1 tela, 47 logica, 0 servidor, 0 dados, 11 estilo)
- **Tem servidor (rotas /api):** não — dá para ser só HTML
- **Peças de fora (bibliotecas):**  + JSON.stringify(principal) + ,  + q + u + q + , crypto, electron, fs, http, os, path, react, react-dom, url

## 2. Estrutura modular proposta

```
index.html            ← a página; chama os módulos NA ORDEM
css/app.css           ← o visual
js/00-core.js         ← a "locomotiva": cria window.APP (registrar, guardar, avisar)
js/10-codigo.js       ← js/00-core.js (era js/01-codigo.js)
js/15-codigo.js       ← js/04-conta.js (era js/02-codigo.js)
js/20-codigo.js       ← js/10-fs.js (era js/03-codigo.js)
js/25-codigo.js       ← js/20-zip.js (era js/04-codigo.js)
js/30-codigo.js       ← js/30-highlight.js (era js/05-codigo.js)
js/35-codigo.js       ← js/40-editor.js (era js/06-codigo.js)
js/40-codigo.js       ← js/50-tree.js (era js/07-codigo.js)
js/45-codigo.js       ← js/60-preview.js (era js/08-codigo.js)
js/50-codigo.js       ← js/61-tsx.js (era js/09-codigo.js)
js/55-codigo.js       ← js/70-search.js (era js/10-codigo.js)
js/60-codigo.js       ← js/80-ai.js (era js/11-codigo.js)
js/65-codigo.js       ← js/81-gasto.js (era js/12-codigo.js)
js/70-codigo.js       ← js/83-voz.js (era js/13-codigo.js)
js/75-codigo.js       ← js/84-ponte.js (era js/14-codigo.js)
js/80-codigo.js       ← js/85-checkpoints.js (era js/15-codigo.js)
js/85-codigo.js       ← js/86-terminal.js (era js/16-codigo.js)
js/90-codigo.js       ← js/86b-node.js (era js/17-codigo.js)
js/91-codigo.js       ← js/86c-termux.js (era js/18-codigo.js)
js/92-codigo.js       ← js/86f-pasta-viva.js (era js/19-codigo.js)
js/93-codigo.js       ← js/86g-largura.js (era js/20-codigo.js)
js/94-codigo.js       ← js/lib/jszip.min.js (era js/21-codigo.js)
js/95-codigo.js       ← js/lib/picotador/00-base.js (era js/22-codigo.js)
js/96-codigo.js       ← js/lib/picotador/10-ler.js (era js/23-codigo.js)
js/97-codigo.js       ← js/lib/picotador/20-projetos.js (era js/24-codigo.js)
js/98-codigo.js       ← js/lib/picotador/30-mensagens.js (era js/25-codigo.js)
js/98-codigo.js       ← js/92c-importar.js (era js/26-codigo.js)
js/98-codigo.js       ← js/86e-atalhos.js (era js/27-codigo.js)
js/98-codigo.js       ← js/87-links.js (era js/28-codigo.js)
js/98-codigo.js       ← js/88-inventario.js (era js/29-codigo.js)
js/98-codigo.js       ← js/89-config.js (era js/30-codigo.js)
js/98-codigo.js       ← js/90-github.js (era js/31-codigo.js)
js/98-codigo.js       ← js/91-acoes.js (era js/32-codigo.js)
js/98-codigo.js       ← js/92-playground.js (era js/33-codigo.js)
js/98-codigo.js       ← js/93-conversa.js (era js/34-codigo.js)
js/98-codigo.js       ← js/94-fatiador.js (era js/35-codigo.js)
js/98-codigo.js       ← js/95-pwa.js (era js/36-codigo.js)
js/98-codigo.js       ← js/96-apk.js (era js/37-codigo.js)
js/98-codigo.js       ← js/lib/nacl-fast.min.js (era js/38-codigo.js)
js/98-codigo.js       ← js/lib/selar.js (era js/39-codigo.js)
js/98-codigo.js       ← js/lib/expo-core.js (era js/40-codigo.js)
js/98-codigo.js       ← js/96b-eas.js (era js/41-codigo.js)
js/98-codigo.js       ← js/lib/plano-core.js (era js/42-codigo.js)
js/98-codigo.js       ← js/lib/receita-core.js (era js/43-codigo.js)
js/98-codigo.js       ← js/96c-preparar.js (era js/44-codigo.js)
js/98-codigo.js       ← js/97-analise.js (era js/45-codigo.js)
js/98-codigo.js       ← js/98-api.js (era js/46-codigo.js)
js/98-codigo.js       ← js/99-app.js (era js/47-codigo.js)
js/98-inicio.js       ← Mini SK (era index.html)
js/99-app.js          ← o último: monta a tela com o que embarcou
```

## 3. As partes, uma por uma

| # | Era | Vira | Tipo | O que faz | Usa |
|---|---|---|---|---|---|
| 1 | `js/01-codigo.js` | `js/10-codigo.js` | logica | js/00-core.js | — |
| 2 | `js/02-codigo.js` | `js/15-codigo.js` | logica | js/04-conta.js | — |
| 3 | `js/03-codigo.js` | `js/20-codigo.js` | logica | js/10-fs.js | — |
| 4 | `js/04-codigo.js` | `js/25-codigo.js` | logica | js/20-zip.js | — |
| 5 | `js/05-codigo.js` | `js/30-codigo.js` | logica | js/30-highlight.js | — |
| 6 | `js/06-codigo.js` | `js/35-codigo.js` | logica | js/40-editor.js | — |
| 7 | `js/07-codigo.js` | `js/40-codigo.js` | logica | js/50-tree.js | — |
| 8 | `js/08-codigo.js` | `js/45-codigo.js` | logica | js/60-preview.js | 02-estilo.css |
| 9 | `js/09-codigo.js` | `js/50-codigo.js` | logica | js/61-tsx.js | 03-estilo.css, 04-estilo.css |
| 10 | `js/10-codigo.js` | `js/55-codigo.js` | logica | js/70-search.js | — |
| 11 | `js/11-codigo.js` | `js/60-codigo.js` | logica | js/80-ai.js | — |
| 12 | `js/12-codigo.js` | `js/65-codigo.js` | logica | js/81-gasto.js | — |
| 13 | `js/13-codigo.js` | `js/70-codigo.js` | logica | js/83-voz.js | — |
| 14 | `js/14-codigo.js` | `js/75-codigo.js` | logica | js/84-ponte.js | — |
| 15 | `js/15-codigo.js` | `js/80-codigo.js` | logica | js/85-checkpoints.js | — |
| 16 | `js/16-codigo.js` | `js/85-codigo.js` | logica | js/86-terminal.js | — |
| 17 | `js/17-codigo.js` | `js/90-codigo.js` | logica | js/86b-node.js | — |
| 18 | `js/18-codigo.js` | `js/91-codigo.js` | logica | js/86c-termux.js | — |
| 19 | `js/19-codigo.js` | `js/92-codigo.js` | logica | js/86f-pasta-viva.js | — |
| 20 | `js/20-codigo.js` | `js/93-codigo.js` | logica | js/86g-largura.js | — |
| 21 | `js/21-codigo.js` | `js/94-codigo.js` | logica | js/lib/jszip.min.js | — |
| 22 | `js/22-codigo.js` | `js/95-codigo.js` | logica | js/lib/picotador/00-base.js | — |
| 23 | `js/23-codigo.js` | `js/96-codigo.js` | logica | js/lib/picotador/10-ler.js | — |
| 24 | `js/24-codigo.js` | `js/97-codigo.js` | logica | js/lib/picotador/20-projetos.js | — |
| 25 | `js/25-codigo.js` | `js/98-codigo.js` | logica | js/lib/picotador/30-mensagens.js | — |
| 26 | `js/26-codigo.js` | `js/98-codigo.js` | logica | js/92c-importar.js | — |
| 27 | `js/27-codigo.js` | `js/98-codigo.js` | logica | js/86e-atalhos.js | — |
| 28 | `js/28-codigo.js` | `js/98-codigo.js` | logica | js/87-links.js | 05-estilo.css |
| 29 | `js/29-codigo.js` | `js/98-codigo.js` | logica | js/88-inventario.js | — |
| 30 | `js/30-codigo.js` | `js/98-codigo.js` | logica | js/89-config.js | — |
| 31 | `js/31-codigo.js` | `js/98-codigo.js` | logica | js/90-github.js | — |
| 32 | `js/32-codigo.js` | `js/98-codigo.js` | logica | js/91-acoes.js | — |
| 33 | `js/33-codigo.js` | `js/98-codigo.js` | logica | js/92-playground.js | 06-estilo.css, 07-estilo.css, 08-estilo.css, 09-estilo.css |
| 34 | `js/34-codigo.js` | `js/98-codigo.js` | logica | js/93-conversa.js | — |
| 35 | `js/35-codigo.js` | `js/98-codigo.js` | logica | js/94-fatiador.js | 10-estilo.css |
| 36 | `js/36-codigo.js` | `js/98-codigo.js` | logica | js/95-pwa.js | favicon.ico, icon.svg, apple-touch-icon.png, 11-estilo.css |
| 37 | `js/37-codigo.js` | `js/98-codigo.js` | logica | js/96-apk.js | package.json |
| 38 | `js/38-codigo.js` | `js/98-codigo.js` | logica | js/lib/nacl-fast.min.js | — |
| 39 | `js/39-codigo.js` | `js/98-codigo.js` | logica | js/lib/selar.js | — |
| 40 | `js/40-codigo.js` | `js/98-codigo.js` | logica | js/lib/expo-core.js | app.json |
| 41 | `js/41-codigo.js` | `js/98-codigo.js` | logica | js/96b-eas.js | app.json |
| 42 | `js/42-codigo.js` | `js/98-codigo.js` | logica | js/lib/plano-core.js | — |
| 43 | `js/43-codigo.js` | `js/98-codigo.js` | logica | js/lib/receita-core.js | a.js, …, app.css |
| 44 | `js/44-codigo.js` | `js/98-codigo.js` | logica | js/96c-preparar.js | — |
| 45 | `js/45-codigo.js` | `js/98-codigo.js` | logica | js/97-analise.js | — |
| 46 | `js/46-codigo.js` | `js/98-codigo.js` | logica | js/98-api.js | — |
| 47 | `js/47-codigo.js` | `js/98-codigo.js` | logica | js/99-app.js | estilo.css, app.js |
| 48 | `css/01-estilo.css` | css/app.css | estilo | css/app.css | — |
| 49 | `index.html` | `js/98-inicio.js` | tela | Mini SK | manifest.json, 01-estilo.css, 01-codigo.js, 02-codigo.js |
| 50 | `css/02-estilo.css` | css/app.css | estilo | — | — |
| 51 | `css/03-estilo.css` | css/app.css | estilo | ' + f + ' | — |
| 52 | `css/04-estilo.css` | css/app.css | estilo | — | — |
| 53 | `css/05-estilo.css` | css/app.css | estilo | — | — |
| 54 | `css/06-estilo.css` | css/app.css | estilo | — | — |
| 55 | `css/07-estilo.css` | css/app.css | estilo | — | — |
| 56 | `css/08-estilo.css` | css/app.css | estilo | — | — |
| 57 | `css/09-estilo.css` | css/app.css | estilo | — | — |
| 58 | `css/10-estilo.css` | css/app.css | estilo | langOf, slice, rejoin, fence | — |
| 59 | `css/11-estilo.css` | css/app.css | estilo | — | — |

## 4. Montar passo a passo (cada bloco é um pedido pronto: 📋 Copiar → colar na IA)

### Passo 0 — combinar as regras com a IA

```text
Vamos recriar o app "Mini SK" como HTML MODULAR, que abre pelo index.html, sem servidor e sem nada da Replit.
Regras: (1) index.html chama os arquivos js/ na ordem, antes do </body>; (2) js/00-core.js cria window.APP com APP.registrar(modulo), APP.guardar(chave, valor) em IndexedDB/localStorage e APP.avisar(texto); (3) cada arquivo js/NN-nome.js cuida de UM assunto, começa com (function (APP) { e termina com })(window.APP); (4) js/99-app.js vem por último e monta a tela com os módulos registrados; (5) textos em português do Brasil.
Vou pedir UM arquivo por vez. Responda só com o arquivo completo, sem cortar nada. Primeiro: crie index.html, css/app.css e js/00-core.js.
```

### Passo 1 — `js/10-codigo.js` (era `js/01-codigo.js`, 146 linhas)

```text
Crie js/10-codigo.js. Ele faz: js/00-core.js.
No app original ele tinha estas funções/partes: modal, done, openDB, reqP.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 2 — `js/15-codigo.js` (era `js/02-codigo.js`, 27 linhas)

```text
Crie js/15-codigo.js. Ele faz: js/04-conta.js.
No app original ele tinha estas funções/partes: nada.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 3 — `js/20-codigo.js` (era `js/03-codigo.js`, 286 linhas)

```text
Crie js/20-codigo.js. Ele faz: js/10-fs.js.
No app original ele tinha estas funções/partes: extOf, baseName, dirName, norm, typeOf, decodeBytes, looksBinary, toBase64, fromBase64, recordFromBytes, saveNow, touch, getDir, sort, ensureParents, commonRoot.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 4 — `js/25-codigo.js` (era `js/04-codigo.js`, 160 linhas)

```text
Crie js/25-codigo.js. Ele faz: js/20-zip.js.
No app original ele tinha estas funções/partes: CRC_TABLE, crc32, streamThrough, read, write, ehCompactado, nomeSemExt, lerTar, str, readAny.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 5 — `js/30-codigo.js` (era `js/05-codigo.js`, 129 linhas)

```text
Crie js/30-codigo.js. Ele faz: js/30-highlight.js.
No app original ele tinha estas funções/partes: esc, span, lex, html.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 6 — `js/35-codigo.js` (era `js/06-codigo.js`, 263 linhas)

```text
Crie js/35-codigo.js. Ele faz: js/40-editor.js.
No app original ele tinha estas funções/partes: build, applyPrefs, paint, paintSoon, syncScroll, renderTabs, updateStatus, open, close, showEmpty, onInput, insertText, onKey, goToLinePrompt, reveal.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 7 — `js/40-codigo.js` (era `js/07-codigo.js`, 242 linhas)

```text
Crie js/40-codigo.js. Ele faz: js/50-tree.js.
No app original ele tinha estas funções/partes: build, render, walk, targetDir, onClick, toolbar, newFile, newDir, starter, expandTo, rename, moveAsk, move, remove, downloadNode, openMenu, popup, outside.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 8 — `js/45-codigo.js` (era `js/08-codigo.js`, 378 linhas)

```text
Crie js/45-codigo.js. Ele faz: js/60-preview.js.
No app original ele tinha estas funções/partes: build, onClick, applySize, setupGrip, end, htmlFiles, pickTarget, fillSelect, isExternal, resolve, revokeAll, mkPage, fileURL, rewriteCss, rewriteModule, fix, consoleShim, buildHtml.
O original usava as bibliotecas  + q + u + q + : em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: dados.json. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 9 — `js/50-codigo.js` (era `js/09-codigo.js`, 135 linhas)

```text
Crie js/50-codigo.js. Ele faz: js/61-tsx.js.
No app original ele tinha estas funções/partes: carregarBabel, acharArquivo, tentar, deFora, montar, urlDe, mostrarErro, Guarda.
O original usava as bibliotecas react, react-dom,  + JSON.stringify(principal) + : em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 10 — `js/55-codigo.js` (era `js/10-codigo.js`, 121 linhas)

```text
Crie js/55-codigo.js. Ele faz: js/70-search.js.
No app original ele tinha estas funções/partes: build, makeRegex, includeFilter, search, replaceAll.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 11 — `js/60-codigo.js` (era `js/11-codigo.js`, 735 linhas)

```text
Crie js/60-codigo.js. Ele faz: js/80-ai.js.
No app original ele tinha estas funções/partes: detect, saveKeys, current, curInfo, tok, adjust, aiFetch, errorText, gFetch, geminiBody, listModels, chat, finish, readSSE, fichaAmbiente, resumoProjeto, tem, systemPrompt.
Ele chamava estes endereços: https://api.anthropic.com/v1/models?limit=100, http://127.0.0.1:11434/api/version. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 12 — `js/65-codigo.js` (era `js/12-codigo.js`, 144 linhas)

```text
Crie js/65-codigo.js. Ele faz: js/81-gasto.js.
No app original ele tinha estas funções/partes: dolar, limiteMes, avisoPedido, preco, brl, fmt, custo, registra, totais, antes, previa, resumoHTML, painel.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 13 — `js/70-codigo.js` (era `js/13-codigo.js`, 168 linhas)

```text
Crie js/70-codigo.js. Ele faz: js/83-voz.js.
No app original ele tinha estas funções/partes: salvar, carregarVozes, melhorVoz, limpar, pedacos, falar, parar, estado, ouvir, norm, ehEco, enviarFala, ligar, desligar, ajustesHTML, ligarAjustes.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 14 — `js/75-codigo.js` (era `js/14-codigo.js`, 70 linhas)

```text
Crie js/75-codigo.js. Ele faz: js/84-ponte.js.
No app original ele tinha estas funções/partes: endereco, arquivosDoProjeto, mandarCirurgiao.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 15 — `js/80-codigo.js` (era `js/15-codigo.js`, 123 linhas)

```text
Crie js/80-codigo.js. Ele faz: js/85-checkpoints.js.
No app original ele tinha estas funções/partes: sizeOf, create, prune, list, restore, remove, diff, build, render, onClick, sec.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 16 — `js/85-codigo.js` (era `js/16-codigo.js`, 413 linhas)

```text
Crie js/85-codigo.js. Ele faz: js/86-terminal.js.
No app original ele tinha estas funções/partes: resolve, isDir, isFile, children, allUnder, base, join, print, err, printHTML, promptText, words, flags, checkpoint, show, walk, encName, npmJSON.
Ele chamava estes endereços: https://registry.npmjs.org, https://api.npms.io/v2/search?size=15&q=. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 17 — `js/90-codigo.js` (era `js/17-codigo.js`, 223 linhas)

```text
Crie js/90-codigo.js. Ele faz: js/86b-node.js.
No app original ele tinha estas funções/partes: ehSite, lacreLigado, registrarSW, ligarLacre, registrarSWteste, carregarScript, carregarCss, arvore, ligar, mostrarServidor, trazer, andar, status, teclas, build, rodar, mandar.
Ele chamava estes endereços: sw.js. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 18 — `js/91-codigo.js` (era `js/18-codigo.js`, 432 linhas)

```text
Crie js/91-codigo.js. Ele faz: js/86c-termux.js.
No app original ele tinha estas funções/partes: status, carregarScript, carregarCss, prepararTela, escreverTela, enviar, tamanho, conectar, desconectar, copiar, buildPC, letra, irParaPasta, build, enderecoVer, pst, rodarP, nomeProj.
O original usava as bibliotecas http, fs, path, os: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 19 — `js/92-codigo.js` (era `js/19-codigo.js`, 139 linhas)

```text
Crie js/92-codigo.js. Ele faz: js/86f-pasta-viva.js.
No app original ele tinha estas funções/partes: nomeProj, pasta, assin, assinRec, estado, chamar, item, mandar, iniciar, olhar, esvaziar.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 20 — `js/93-codigo.js` (era `js/20-codigo.js`, 39 linhas)

```text
Crie js/93-codigo.js. Ele faz: js/86g-largura.js.
No app original ele tinha estas funções/partes: aplicar, ligar, mover, soltar.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 21 — `js/94-codigo.js` (era `js/21-codigo.js`, 15 linhas)

```text
Crie js/94-codigo.js. Ele faz: js/lib/jszip.min.js.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 22 — `js/95-codigo.js` (era `js/22-codigo.js`, 37 linhas)

```text
Crie js/95-codigo.js. Ele faz: js/lib/picotador/00-base.js.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 23 — `js/96-codigo.js` (era `js/23-codigo.js`, 95 linhas)

```text
Crie js/96-codigo.js. Ele faz: js/lib/picotador/10-ler.js.
No app original ele tinha estas funções/partes: ehMsg, doChatGPT, doClaude, doMarkdown, deJSON, deZip.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 24 — `js/97-codigo.js` (era `js/24-codigo.js`, 84 linhas)

```text
Crie js/97-codigo.js. Ele faz: js/lib/picotador/20-projetos.js.
No app original ele tinha estas funções/partes: nMem, resumo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 25 — `js/98-codigo.js` (era `js/25-codigo.js`, 131 linhas)

```text
Crie js/98-codigo.js. Ele faz: js/lib/picotador/30-mensagens.js.
No app original ele tinha estas funções/partes: tokens, pintar, paraMD, paraMemoria, escolhidas, diario.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 26 — `js/98-codigo.js` (era `js/26-codigo.js`, 87 linhas)

```text
Crie js/98-codigo.js. Ele faz: js/92c-importar.js.
No app original ele tinha estas funções/partes: trazerProjetos, porMemoria, build.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 27 — `js/98-codigo.js` (era `js/27-codigo.js`, 77 linhas)

```text
Crie js/98-codigo.js. Ele faz: js/86e-atalhos.js.
No app original ele tinha estas funções/partes: pacotes, montar, pintar, pre.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 28 — `js/98-codigo.js` (era `js/28-codigo.js`, 212 linhas)

```text
Crie js/98-codigo.js. Ele faz: js/87-links.js.
No app original ele tinha estas funções/partes: salvarLocal, salvar, carregar, sincNuvem, icone, nomeDe, extrair, build, juntar, adicionar, render, onListClick, paginaHTML, criarPagina, conversa.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 29 — `js/98-codigo.js` (era `js/29-codigo.js`, 185 linhas)

```text
Crie js/98-codigo.js. Ele faz: js/88-inventario.js.
No app original ele tinha estas funções/partes: texto, limpaTag, familia, analisar, lerArquivos, doProjeto, completude, grupos, oQueFaz, render, manualMD, pedirIA, build.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 30 — `js/98-codigo.js` (era `js/30-codigo.js`, 259 linhas)

```text
Crie js/98-codigo.js. Ele faz: js/89-config.js.
No app original ele tinha estas funções/partes: extras, cofreLocal, aplicaCofre, auto, enviaProjeto, sincPlayground, setStatus, build, renderAll, renderConta, renderCofre, mask, renderBackup, renderNuvem, onChange, onClick, atobSafe.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 31 — `js/98-codigo.js` (era `js/31-codigo.js`, 323 linhas)

```text
Crie js/98-codigo.js. Ele faz: js/90-github.js.
No app original ele tinha estas funções/partes: explain, pool, worker, gitSha, parseRepo, linkKey, getLink, setLink, status, importRepo, push, createRepo, enablePages, ensureUser, repoSlug, resolveRepo, ensureRepo, sendTo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 32 — `js/98-codigo.js` (era `js/32-codigo.js`, 234 linhas)

```text
Crie js/98-codigo.js. Ele faz: js/91-acoes.js.
No app original ele tinha estas funções/partes: stop, status, base, mount, pickRepo, load, renderWorkflows, renderRuns, onClick, follow, tick, detail, logExcerpt, downloads, afterPush.
Ele chamava estes endereços: https://api.github.com. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 33 — `js/98-codigo.js` (era `js/33-codigo.js`, 380 linhas)

```text
Crie js/98-codigo.js. Ele faz: js/92-playground.js.
No app original ele tinha estas funções/partes: App, fresh, esc, prepJSX, page, add, cleanPage, detectMode, build, slug, setMode, paintTabs, paintAll, clearCon, log, run, full, close.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 34 — `js/98-codigo.js` (era `js/34-codigo.js`, 143 linhas)

```text
Crie js/98-codigo.js. Ele faz: js/93-conversa.js.
No app original ele tinha estas funções/partes: codeScore, sniff, slug, parse, startBlock, indexMD, toTXT.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 35 — `js/98-codigo.js` (era `js/35-codigo.js`, 306 linhas)

```text
Crie js/98-codigo.js. Ele faz: js/94-fatiador.js.
No app original ele tinha estas funções/partes: lineStates, nameOfJs, splitByStarts, pullComments, splitJs, tryBase, short, splitCss, splitPy, splitMd, splitPlain, splitHtml, push, build, fill, run, onClick.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 36 — `js/98-codigo.js` (era `js/36-codigo.js`, 599 linhas)

```text
Crie js/98-codigo.js. Ele faz: js/95-pwa.js.
No app original ele tinha estas funções/partes: gradFill, shapePath, hexA, content, draw, render, toBytes, svg, ico, iconFiles, saveFiles, rel, resolveFrom, titleOf, slug, initials, colorOf, manifestOf.
Ele chamava estes endereços: ./. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 37 — `js/98-codigo.js` (era `js/37-codigo.js`, 981 linhas)

```text
Crie js/98-codigo.js. Ele faz: js/96-apk.js.
No app original ele tinha estas funções/partes: wfNome, receitas, MainActivity, Ponte, mandar, salvar, nomeDe, local, slug, pkgPart, readCfg, validPkg, prepare, servir, EXE_RECEITA, temServidor, prepararExe, identidadeNova.
O original usava as bibliotecas electron, path, fs, http: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: https://api.github.com/repos/. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 38 — `js/98-codigo.js` (era `js/38-codigo.js`, 4 linhas)

```text
Crie js/98-codigo.js. Ele faz: js/lib/nacl-fast.min.js.
O original usava as bibliotecas crypto: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 39 — `js/98-codigo.js` (era `js/39-codigo.js`, 96 linhas)

```text
Crie js/98-codigo.js. Ele faz: js/lib/selar.js.
No app original ele tinha estas funções/partes: add64, add64c, compress, blake2b, b64para, paraB64, selar, abrir.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 40 — `js/98-codigo.js` (era `js/40-codigo.js`, 194 linhas)

```text
Crie js/98-codigo.js. Ele faz: js/lib/expo-core.js.
No app original ele tinha estas funções/partes: json, raizDe, slugDe, ler, permissoes, tem, consertar, existe, tirarImg, limpa, base.
O original usava as bibliotecas fs: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 41 — `js/98-codigo.js` (era `js/41-codigo.js`, 280 linhas)

```text
Crie js/98-codigo.js. Ele faz: js/96b-eas.js.
No app original ele tinha estas funções/partes: versaoBase, majorExpo, lerJson, conferir, add, corrigir, testarExpo, repoOf, guardarSegredo, enviarEGerar, ultimo, parar, acompanhar, tick, status, build, rodar, fill.
O original usava as bibliotecas fs: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: https://api.expo.dev/graphql. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 42 — `js/98-codigo.js` (era `js/42-codigo.js`, 173 linhas)

```text
Crie js/98-codigo.js. Ele faz: js/lib/plano-core.js.
No app original ele tinha estas funções/partes: ext, uniq, normRota, arvore, andar, gerar, chave, dedup, temRota, tem, markdown, tab.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 43 — `js/98-codigo.js` (era `js/43-codigo.js`, 141 linhas)

```text
Crie js/98-codigo.js. Ele faz: js/lib/receita-core.js.
No app original ele tinha estas funções/partes: slug, base, semExt, uniq, papel, descricao, itens, usa, rotasDe, chamadasDe, ordenar, visita, gerar, titulo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 44 — `js/98-codigo.js` (era `js/44-codigo.js`, 551 linhas)

```text
Crie js/98-codigo.js. Ele faz: js/96c-preparar.js.
No app original ele tinha estas funções/partes: lerJSON, raizPkg, permissoes, analisar, add, pastaDoBuild, nomeApp, idApp, receitaCap, criarCapacitor, MAIN_CJS, criarJanela, criarDesktop, receita, gerarPlano, tirarReplitDoCodigo, fazerTudo, quer.
O original usava as bibliotecas electron, path, fs, url: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 45 — `js/98-codigo.js` (era `js/45-codigo.js`, 450 linhas)

```text
Crie js/98-codigo.js. Ele faz: js/97-analise.js.
No app original ele tinha estas funções/partes: explain, scriptHelp, parseCatalog, analyze, addUse, treeText, walk, planMD, unifiedPkg, sortObj, batText, aiPack, parseMarked, cleanViteConfig, rep, cleanReplit, convParse, desc.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 46 — `js/98-codigo.js` (era `js/46-codigo.js`, 152 linhas)

```text
Crie js/98-codigo.js. Ele faz: js/98-api.js.
No app original ele tinha estas funções/partes: lineOf, analyze, toRe, fullPath, req, save, show, send, hint, allGet, build, scan, loc.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 47 — `js/98-codigo.js` (era `js/47-codigo.js`, 297 linhas)

```text
Crie js/98-codigo.js. Ele faz: js/99-app.js.
No app original ele tinha estas funções/partes: mobile, setTree, openSide, closeSide, toggleSide, starterFiles, kvTudo, backupTudo, restaurarTudo, buildProjects, renderProjects, setSave, keys, init, pedir.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 48 — `js/98-inicio.js` (era `index.html`, 108 linhas)

```text
Crie js/98-inicio.js. Ele faz: Mini SK.
Ele usa o que já foi criado em: js/10-codigo.js, js/15-codigo.js, js/20-codigo.js, js/25-codigo.js, js/30-codigo.js, js/35-codigo.js, js/40-codigo.js, js/45-codigo.js, js/50-codigo.js, js/55-codigo.js, js/60-codigo.js, js/65-codigo.js, js/70-codigo.js, js/75-codigo.js, js/80-codigo.js, js/85-codigo.js, js/90-codigo.js, js/91-codigo.js, js/92-codigo.js, js/93-codigo.js, js/94-codigo.js, js/95-codigo.js, js/96-codigo.js, js/97-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js (pelo APP).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 49 — `js/99-app.js` e conferir

```text
Crie js/99-app.js: ele olha APP.modulos e monta o menu/abas com um botão para cada módulo. Depois, me mande o index.html atualizado com todos os <script src="js/…"> na ordem certa: js/00-core.js, js/10-codigo.js, js/15-codigo.js, js/20-codigo.js, js/25-codigo.js, js/30-codigo.js, js/35-codigo.js, js/40-codigo.js, js/45-codigo.js, js/50-codigo.js, js/55-codigo.js, js/60-codigo.js, js/65-codigo.js, js/70-codigo.js, js/75-codigo.js, js/80-codigo.js, js/85-codigo.js, js/90-codigo.js, js/91-codigo.js, js/92-codigo.js, js/93-codigo.js, js/94-codigo.js, js/95-codigo.js, js/96-codigo.js, js/97-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-codigo.js, js/98-inicio.js, js/99-app.js.
```

## 5. Conferir no final

- [ ] Abrir o index.html na prévia: aparece a tela sem erro (▤ console vazio)?
- [ ] Cada botão abre a sua parte?
- [ ] Fechar e abrir de novo: os dados continuam?
- [ ] Nada com "replit", "REPL_", "@workspace" no código (🏗️ Preparar confere).
- [ ] 📱 PWA → deixar instalável; 📦 APK ou 🖥️ .exe.
