import F from"./js-yaml.CwjAzRNl.js";function R(c,u){for(c=Math.abs(c),u=Math.abs(u);u;)[c,u]=[u,c%u];return c}function X(c,{allowedDenominators:u=[2,3,4,5,6,8,10,12,100],tolerance:i=.001}={}){const h=Math.sign(c),s=Math.abs(c);if(Math.abs(s-Math.round(s))<=i)return{n:Math.round(s)*h,d:1,integer:Math.round(s)*h,remainder:0,isExact:!0};let m=null,$=1/0;for(const g of u){const v=Math.round(s*g),S=Math.abs(s-v/g);S<=i&&S<$&&($=S,m={n:v*h,d:g})}if(m){const g=R(m.n,m.d),v=m.n/g,S=m.d/g;return{n:v,d:S,integer:Math.trunc(v/S),remainder:Math.abs(v%S),isExact:$<Number.EPSILON}}return null}const C=`# ─────────────────────────────────────────────────────────────────────────────
# Contextes La Réunion — source de vérité unique pour tous les visuels et
# les énoncés DSL des automaths qui ont besoin d'une mise en situation locale.
#
# Pools thématiques (cohérence pédagogique : un exercice sur les fruits reste
# sur les fruits). DSL d'accès depuis les YAML d'automaths :
#
#   [#ctx:@fruits]                  — pioche un contexte aléatoire dans le pool
#   [ctx.sing] / [ctx.plur]         — nom au singulier/pluriel
#   [ctx.art_sing] / [ctx.art_plur] — article indéfini (un, une, des)
#   [ctx.lieu]                      — localisation (peut être vide)
#   [ctx.abbrev]                    — abréviation pour tableau / calcul littéral
#   [ctx.prep]                      — « de » ou « d' » (élision devant voyelle)
#   [ctx.genre]                     — m / f
#
# Champs de chaque entrée :
#   id        identifiant technique (kebab-case)
#   sing      nom au singulier                                « mangue »
#   plur      nom au pluriel (= sing si invariable)           « mangues »
#   art_sing  article indéfini singulier                      « une »
#   art_plur  article indéfini pluriel (toujours « des »)     « des »
#   lieu      localisation (commence par « au/à/chez »)       « au marché de Saint-Pierre »
#             — peut être vide ('') si pas de localisation typique
#   abbrev    abréviation pour les schémas et calcul littéral « m » / « kg »
#             — pour les unités SI, garder l'unité (« kg »)
#   genre     « m » ou « f »                                   « f »
#   prep      « de » devant consonne, « d' » devant voyelle    « d' »
# ─────────────────────────────────────────────────────────────────────────────

fruits:
  - id: mangue
    sing: mangue
    plur: mangues
    art_sing: une
    art_plur: des
    lieu: au marché de Saint-Pierre
    abbrev: m
    genre: f
    prep: de
  - id: kg-mangues
    sing: kg de mangues
    plur: kg de mangues
    art_sing: un
    art_plur: des
    lieu: au marché de Saint-Pierre
    abbrev: kg
    genre: m
    prep: de
  - id: ananas-victoria
    sing: ananas Victoria
    plur: ananas Victoria
    art_sing: un
    art_plur: des
    lieu: au Tampon
    abbrev: a
    genre: m
    prep: d'
  - id: kg-letchis
    sing: kg de letchis
    plur: kg de letchis
    art_sing: un
    art_plur: des
    lieu: au marché du Port
    abbrev: kg
    genre: m
    prep: de
  - id: kg-goyaves
    sing: kg de goyaves
    plur: kg de goyaves
    art_sing: un
    art_plur: des
    lieu: au marché de Saint-Paul
    abbrev: kg
    genre: m
    prep: de
  - id: avocat
    sing: avocat
    plur: avocats
    art_sing: un
    art_plur: des
    lieu: au marché de Roche-Plate
    abbrev: a
    genre: m
    prep: d'

poissons:
  - id: kg-thon
    sing: kg de thon
    plur: kg de thon
    art_sing: un
    art_plur: des
    lieu: chez le pêcheur de Saint-Gilles
    abbrev: kg
    genre: m
    prep: de
  - id: kg-bichiques
    sing: kg de bichiques
    plur: kg de bichiques
    art_sing: un
    art_plur: des
    lieu: chez le pêcheur
    abbrev: kg
    genre: m
    prep: de
  - id: boite-sardines
    sing: boîte de sardines
    plur: boîtes de sardines
    art_sing: une
    art_plur: des
    lieu: ''
    abbrev: b
    genre: f
    prep: de

epicerie:
  - id: sachet-epices
    sing: sachet d'épices
    plur: sachets d'épices
    art_sing: un
    art_plur: des
    lieu: à Salazie
    abbrev: s
    genre: m
    prep: de
  - id: pot-miel
    sing: pot de miel
    plur: pots de miel
    art_sing: un
    art_plur: des
    lieu: ''
    abbrev: p
    genre: m
    prep: de
  - id: barquette-carry
    sing: barquette de carry
    plur: barquettes de carry
    art_sing: une
    art_plur: des
    lieu: ''
    abbrev: b
    genre: f
    prep: de
  - id: jus-canne
    sing: jus de canne
    plur: jus de canne
    art_sing: un
    art_plur: des
    lieu: ''
    abbrev: j
    genre: m
    prep: de
  - id: pain-maison
    sing: pain maison
    plur: pains maison
    art_sing: un
    art_plur: des
    lieu: ''
    abbrev: p
    genre: m
    prep: de

transport:
  - id: billet-bus
    sing: billet de bus
    plur: billets de bus
    art_sing: un
    art_plur: des
    lieu: ''
    abbrev: b
    genre: m
    prep: de
  - id: ticket-bus
    sing: ticket de bus
    plur: tickets de bus
    art_sing: un
    art_plur: des
    lieu: ''
    abbrev: t
    genre: m
    prep: de
  - id: ticket-car
    sing: ticket de car
    plur: tickets de car
    art_sing: un
    art_plur: des
    lieu: à la gare routière
    abbrev: t
    genre: m
    prep: de

# ─────────────────────────────────────────────────────────────────────────────
# Pool d'événements pour echelle-probabilite (GS 23.2).
# Structure : evenements.<zone> = liste de phrases. randomize() tire 1 par
# zone (5 zones × ~6-7 entrées = ~31 phrases).
# ─────────────────────────────────────────────────────────────────────────────

evenements:
  impossible:
    - Obtenir un 7 avec un dé à 6 faces
    - Voir un poisson voler dans le ciel
    - Piocher une bille verte dans un sac rempli uniquement de billes rouges
    - Tirer la lettre Z du prénom MARIE
    - Trouver un élève de 6e âgé de 30 ans
    - Obtenir un résultat négatif en lançant un dé
  peu-probable:
    - Gagner au loto
    - Piocher la seule bille rouge dans un sac de 20 billes
    - Obtenir un 6 en lançant un dé à 6 faces
    - Être frappé par la foudre cette année
    - Tirer un as dans un jeu de 52 cartes
    - Trouver une pièce de 2 € par terre en allant au collège
    - Tomber sur le seul secteur vert d'une roue à 10 secteurs
  demi:
    - Obtenir Pile en lançant une pièce de monnaie
    - Obtenir un nombre pair avec un dé à 6 faces
    - Piocher une bille rouge dans un sac avec autant de rouges que de bleues
    - Obtenir un nombre supérieur à 3 avec un dé à 6 faces
    - Le prochain élève interrogé est une fille
    - Tomber sur rouge avec une roue à 2 secteurs (rouge et bleu)
  probable:
    - Il fera chaud en janvier à La Réunion
    - Piocher une bille rouge dans un sac de 8 rouges et 2 bleues
    - Obtenir un nombre inférieur à 6 avec un dé à 6 faces
    - Il y aura de la pluie à La Réunion en mars
    - Tomber sur rouge avec une roue dont 3 secteurs sur 4 sont rouges
    - Le prochain cyclone à La Réunion aura lieu en été austral
  certain:
    - Le soleil se lève à l'est
    - Obtenir un nombre entre 1 et 6 avec un dé à 6 faces
    - Piocher une bille dans un sac contenant uniquement des billes rouges
    - Un triangle a 3 côtés
    - 2 + 2 = 4
    - Il y aura un lever de soleil demain matin
    - Noël tombe le 25 décembre
`,E=F.load(C),j={produits:["fruits","poissons","epicerie","transport"]};function O(c){if(j[c])return j[c].flatMap(i=>O(i));const u=E?.[c];return Array.isArray(u)?u:[]}function D(c){const u=O(c);return u.length?u[Math.floor(Math.random()*u.length)]:null}function Z(){return E?.evenements??{}}const _=["","un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix","onze","douze","treize","quatorze","quinze","seize","dix-sept","dix-huit","dix-neuf"];function I(c){if(c<20)return _[c];const u=Math.floor(c/10),i=c%10;if(u===7)return i===1?"soixante et onze":"soixante-"+_[10+i];if(u===8)return i===0?"quatre-vingts":"quatre-vingt-"+_[i];if(u===9)return"quatre-vingt-"+_[10+i];const h=["","","vingt","trente","quarante","cinquante","soixante"][u];return i===0?h:i===1?h+" et un":h+"-"+_[i]}function q(c){if(c<100)return I(c);const u=Math.floor(c/100),i=c%100,h=u===1?"cent":_[u]+" cent";return i===0?u===1?"cent":_[u]+" cents":h+" "+I(i)}function W(c){if(c=Math.round(c),c===0)return"zéro";if(c<0)return"moins "+W(-c);if(c<1e3)return q(c);const u=Math.floor(c/1e3),i=c%1e3,h=u===1?"mille":q(u)+" mille";return i===0?h:h+" "+q(i)}const V=["millièmes","centièmes","dixièmes","unités","dizaines","centaines","milliers","dizaines de mille","centaines de mille","millions"];function T(c){return V[Math.round(c)+3]??"?"}function y(c){return Math.round(c).toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}function U(c){const u=[];let i=0,h=0;for(let s=0;s<c.length;s++){const m=c[s];m==="("||m==="["||m==="{"?i++:m===")"||m==="]"||m==="}"?i--:m===","&&i===0&&(u.push(c.slice(h,s)),h=s+1)}return u.push(c.slice(h)),u}class K{constructor(){this.variables=new Map,this._seed=null}reset(){this.variables.clear()}setSeed(u){this._seed=u&&typeof u=="object"?u:null}captureVars(){const u={};for(const[i,h]of this.variables.entries())u[i]=h;return u}_rngLog(u,i,h){try{if(typeof localStorage>"u"||localStorage.getItem("seedDbg")!=="1")return;const s=u==="SEED"?"#0a0":"#e11";console.log(`%c[rng ${u}]`,`color:${s};font-weight:bold`,`${i} = ${typeof h=="object"?"{ctx}":h}`)}catch{}}generateRandom(u,i,h,s=[]){let m,$=0;const g=Math.floor((i-u)/h);do m=u+Math.floor(Math.random()*(g+1))*h,m=parseFloat(m.toFixed(10)),$++;while(s.includes(m)&&$<100);return m}evaluate(u){try{const i=g=>g?String(g).charAt(0).toUpperCase()+String(g).slice(1):"",h=["rangName","formatInt","gcd","cap",...Array.from(this.variables.keys())],s=[T,y,R,i,...Array.from(this.variables.values())],$=new Function(...h,`return ${u};`)(...s);return typeof $=="string"||typeof $=="boolean"||Number.isInteger($)?$:parseFloat($.toFixed(6))}catch(i){return console.error(`Erreur d'évaluation pour [?${u}]`,i),"?"}}parse(u,i="web"){return u.replace(/\[(.*?)\]/g,(h,s)=>{s=s.trim();let m="";const $=s.match(/\|comp:([a-z]+)/);$&&(m=$[1],s=s.replace(/\|comp:[a-z]+/,"").trim());const g=m?` data-comp="${m}"`:"";if(s.startsWith("frac{")){const a=s.match(/^frac\{([^}]*)\}\{([^}]*)\}/);if(a){if(i==="print")return`\\frac{${a[1]}}{${a[2]}}`;const e=String(this.evaluate(a[1])),t=String(this.evaluate(a[2]));return`<span class="rapido-frac-display"><span>${e}</span><span class="rapido-frac-bar"></span><span>${t}</span></span>`}}if(s.startsWith("fracK{")){const a=s.match(/^fracK\{([^}]*)\}\{([^}]*)\}\{([^}]*)\}/);if(a){if(i==="print")return"\\frac{\\Box \\times \\Box}{\\Box \\times \\Box}";const e=String(this.evaluate(a[1])),t=String(this.evaluate(a[2])),n=String(this.evaluate(a[3])),r=Math.max(2,n.length+1),o=()=>`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-solution="${n}"${g} size="${r}" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`;return`<span class="rapido-frac-exact"><span class="rapido-frac-row">${e}×${o()}</span><span class="rapido-frac-bar"></span><span class="rapido-frac-row">${t}×${o()}</span></span>`}}if(s.startsWith("fracKall{")){const a=s.match(/^fracKall\{([^}]*)\}\{([^}]*)\}\{([^}]*)\}/);if(a){if(i==="print")return"\\frac{\\Box \\times \\Box}{\\Box \\times \\Box}";const e=String(this.evaluate(a[1])),t=String(this.evaluate(a[2])),n=String(this.evaluate(a[3])),r=Math.max(2,e.length+1),o=Math.max(2,t.length+1),p=Math.max(2,n.length+1),l=(d,f,x)=>`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-solution="${d}" data-solution-alt="${f}" size="${x}" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`;return`<span class="rapido-frac-exact"><span class="rapido-frac-row">${l(e,n,r)}×${l(n,e,p)}</span><span class="rapido-frac-bar"></span><span class="rapido-frac-row">${l(t,n,o)}×${l(n,t,p)}</span></span>`}}if(s.startsWith("fracProd2?{")){const a=s.match(/^fracProd2\?\{([^}]*)\}\{([^}]*)\}\{([^}]*)\}\{([^}]*)\}/);if(a){if(i==="print")return"\\frac{\\Box \\times \\Box}{\\Box \\times \\Box}";const e=String(this.evaluate(a[1])),t=String(this.evaluate(a[2])),n=String(this.evaluate(a[3])),r=String(this.evaluate(a[4])),o=l=>Math.max(2,l.length+1),p=l=>`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-solution="${l}"${g} size="${o(l)}" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`;return`<span class="rapido-frac-exact"><span class="rapido-frac-row">${p(e)} × ${p(t)}</span><span class="rapido-frac-bar"></span><span class="rapido-frac-row">${p(n)} × ${p(r)}</span></span>`}}if(s.startsWith("fracProd1?{")){const a=s.match(/^fracProd1\?\{([^}]*)\}\{([^}]*)\}\{([^}]*)\}/);if(a){if(i==="print")return"\\frac{\\Box \\times \\Box}{\\Box}";const e=String(this.evaluate(a[1])),t=String(this.evaluate(a[2])),n=String(this.evaluate(a[3])),r=p=>Math.max(2,p.length+1),o=p=>`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-solution="${p}"${g} size="${r(p)}" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`;return`<span class="rapido-frac-exact"><span class="rapido-frac-row">${o(e)} × ${o(t)}</span><span class="rapido-frac-bar"></span><span class="rapido-frac-row">${o(n)}</span></span>`}}if(s.startsWith("fracPlus?{")||s.startsWith("fracMinus?{")){const a=s.startsWith("fracPlus?{")?"+":"−",e=s.startsWith("fracPlus?{")?"fracPlus":"fracMinus",t=s.match(new RegExp(`^${e}\\?\\{([^}]*)\\}\\{([^}]*)\\}\\{([^}]*)\\}`));if(t){if(i==="print")return`\\frac{\\Box ${a==="−"?"-":"+"} \\Box}{\\Box}`;const n=String(this.evaluate(t[1])),r=String(this.evaluate(t[2])),o=String(this.evaluate(t[3])),p=Math.max(2,n.length+1),l=Math.max(2,r.length+1),d=Math.max(2,o.length+1),f=(x,k)=>`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-solution="${x}"${g} size="${k}" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`;return`<span class="rapido-frac-exact"><span class="rapido-frac-row">${f(n,p)} ${a} ${f(r,l)}</span><span class="rapido-frac-bar"></span><span class="rapido-frac-row">${f(o,d)}</span></span>`}}if(s.startsWith("frac?")){const a=s.match(/^frac\?\{([^}]*)\}\{([^}]*)\}/);if(a){if(i==="print")return"\\frac{\\Box}{\\Box}";const e=String(this.evaluate(a[1])),t=String(this.evaluate(a[2])),n=Math.max(2,e.length+1),r=Math.max(2,t.length+1);return`<span class="rapido-frac-wrap"><span class="rapido-input-wrap"><input class="rapido-input" type="text" data-solution="${e}"${g} size="${n}" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span><span class="rapido-frac-bar"></span><span class="rapido-input-wrap"><input class="rapido-input" type="text" data-solution="${t}"${g} size="${r}" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span></span>`}}if(s.startsWith("fracQ?")){const a=s.match(/^fracQ\?\{([^}]*)\}\{([^}]*)\}\{([^}]*)\}/);if(a){if(i==="print")return"\\frac{\\Box}{\\Box}";const e=String(this.evaluate(a[1])),t=String(this.evaluate(a[2]));let n=a[3].trim();n==="alea"&&(n=Math.random()<.5?"num":"den");const r=Math.max(2,e.length+1),o=Math.max(2,t.length+1),p=(f,x)=>`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-solution="${f}"${g} size="${x}" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`,l=n==="den"?`<span class="rapido-frac-cell">${e}</span>`:p(e,r),d=n==="num"?`<span class="rapido-frac-cell">${t}</span>`:p(t,o);return n==="both"?`<span class="rapido-frac-wrap">${p(e,r)}<span class="rapido-frac-bar"></span>${p(t,o)}</span>`:`<span class="rapido-frac-wrap">${l}<span class="rapido-frac-bar"></span>${d}</span>`}}if(s.startsWith("vf:")){const a=s.substring(3).trim(),e=this.evaluate(a),t=e===!0||e===1?"VRAI":"FAUX";return i==="print"?"\\framebox{V/F}":`<span class="rapido-vf-wrap" data-solution="${t}" data-place-mode="1"><button class="rapido-vf-btn" data-choice="VRAI">VRAI</button><button class="rapido-vf-btn" data-choice="FAUX">FAUX</button></span>`}if(s.startsWith("qcm:")){const a=s.slice(4).split("|").map(t=>t.trim()).filter(Boolean);return i==="print"?a.map(t=>`\\framebox{}~${t.replace(/\*\s*$/,"")}`).join(" \\quad "):`<span class="rapido-qcm" role="group">${a.map(t=>{const n=/\*\s*$/.test(t),r=t.replace(/\*\s*$/,"").trim();return`<label class="rapido-qcm-row" data-correct="${n?1:0}"><input type="checkbox" class="rapido-qcm-cb"><span class="rapido-qcm-lbl">${r}</span><span class="rapido-qcm-mark" aria-hidden="true"></span></label>`}).join("")}<span class="rapido-qcm-fb" aria-hidden="true"></span></span>`}if(s.startsWith("?distrib2:")){if(i==="print")return"\\Box";const a=s.substring(10).split(",").map(f=>f.trim()),e=this.evaluate(a[0]),t=this.evaluate(a[1]??"0"),n=this.evaluate(a[2]??"0"),r="d2_"+Math.random().toString(36).slice(2,6),o=(f="")=>`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-distrib2-group="${r}"${f} size="3" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`,p=()=>`<select class="rapido-input rapido-somme-op" data-distrib2-group="${r}"><option value="" disabled selected>…</option><option value="+">+</option><option value="-">−</option></select>`,l=(f,x)=>`<span class="rapido-product">${f}<span class="rapido-product-x">$\\times$</span>${x}</span>`,d=` data-distrib2-a="${e}" data-distrib2-b="${t}" data-distrib2-c="${n}"`;return`${l(o(d),o())} ${p()} ${l(o(),o())} ${p()} ${l(o(),o())} ${p()} ${l(o(),o())}`}if(s.startsWith("?square:")){if(i==="print")return"\\Box";const a=s.substring(8).split(",").map(l=>l.trim()),e=this.evaluate(a[0]),t=this.evaluate(a[1]??"0"),n="sq_"+Math.random().toString(36).slice(2,6),r=(l="")=>`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-square-group="${n}"${l} size="3" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`,o=()=>`<select class="rapido-input rapido-somme-op" data-square-group="${n}"><option value="" disabled selected>…</option><option value="+">+</option><option value="-">−</option></select>`,p=` data-square-a="${e}" data-square-b="${t}"`;return`$($${r(p)}$x$ ${o()} ${r()}$)$ $\\times$ $($${r()}$x$ ${o()} ${r()}$)$`}if(s.startsWith("?litx2:")){if(i==="print")return"\\Box";const a=s.substring(7).split(",").map(r=>r.trim()),e=this.evaluate(a[0]),t=this.evaluate(a[1]??"0"),n=this.evaluate(a[2]??"0");return`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-solution-type="litx2" data-litx2-a="${e}" data-litx2-b="${t}" data-litx2-c="${n}" size="10" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`}if(s.startsWith("?distribKx:")){if(i==="print")return"\\Box";const a=s.substring(11).split(",").map(f=>f.trim()),e=this.evaluate(a[0]),t=this.evaluate(a[1]??"0"),n="dkx_"+Math.random().toString(36).slice(2,6),r=(f="")=>`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-distribkx-group="${n}"${f} size="4" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`,o=`<select class="rapido-input rapido-somme-op" data-distribkx-group="${n}"><option value="" disabled selected>…</option><option value="+">+</option><option value="-">−</option></select>`,p=` data-distribkx-a="${e}" data-distribkx-b="${t}"`,l=(f,x)=>x?`<span class="rapido-factor">${f}$x$</span>`:`<span class="rapido-factor">${f}</span>`,d=(f,x)=>`<span class="rapido-product">${f}<span class="rapido-product-x">$\\times$</span>${x}</span>`;return`${d(l(r(p),!0),l(r(),!0))} ${o} ${d(l(r(),!0),l(r(),!1))}`}if(s.startsWith("?distrib1x:")){if(i==="print")return"\\Box";const a=s.substring(11).split(",").map(d=>d.trim()),e=this.evaluate(a[0]),t=this.evaluate(a[1]??"0"),n="d1x_"+Math.random().toString(36).slice(2,6),r=(d="")=>`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-distrib1x-group="${n}"${d} size="4" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`,o=`<select class="rapido-input rapido-somme-op" data-distrib1x-group="${n}"><option value="" disabled selected>…</option><option value="+">+</option><option value="-">−</option></select>`,p=` data-distrib1x-a="${e}" data-distrib1x-b="${t}"`,l=(d,f)=>`<span class="rapido-product">${d}<span class="rapido-product-x">$\\times$</span>${f}</span>`;return`${l(r(p),r())}$x^2$ ${o} ${l(r(),r())}$x$`}if(s.startsWith("?lineax:")){if(i==="print")return"\\Box";const a=s.substring(8).split(",").map(l=>l.trim()),e=this.evaluate(a[0]),t=this.evaluate(a[1]??"0"),n="lx_"+Math.random().toString(36).slice(2,6),r=(l="")=>`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-lineax-group="${n}"${l} size="4" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`,o=`<select class="rapido-input rapido-somme-op" data-lineax-group="${n}"><option value="" disabled selected>…</option><option value="+">+</option><option value="-">−</option></select>`,p=` data-lineax-a="${e}" data-lineax-b="${t}"`;return`${r(p)}$x$ ${o} ${r()}`}if(s.startsWith("?distrib1:")){if(i==="print")return"\\Box";const a=s.substring(10).split(",").map(d=>d.trim()),e=this.evaluate(a[0]),t=this.evaluate(a[1]??"0"),n="d1_"+Math.random().toString(36).slice(2,6),r=(d="")=>`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-distrib1-group="${n}"${d} size="4" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`,o=`<select class="rapido-input rapido-somme-op" data-distrib1-group="${n}"><option value="" disabled selected>…</option><option value="+">+</option><option value="-">−</option></select>`,p=` data-distrib1-a="${e}" data-distrib1-b="${t}"`,l=(d,f)=>`<span class="rapido-product">${d}<span class="rapido-product-x">$\\times$</span>${f}</span>`;return`${l(r(p),r())}$x$ ${o} ${l(r(),r())}`}if(s.startsWith("?factx2:")){if(i==="print")return"\\Box";const a=s.substring(8).split(",").map(f=>f.trim()),e=this.evaluate(a[0]),t=this.evaluate(a[1]??"0"),n="fx2_"+Math.random().toString(36).slice(2,6),r=(f="")=>`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-factx2-group="${n}"${f} size="4" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`,o=()=>`<select class="rapido-input rapido-somme-op" data-factx2-group="${n}"><option value="" disabled selected>…</option><option value="+">+</option><option value="-">−</option></select>`,p=` data-factx2-a="${e}" data-factx2-b="${t}"`,l="$($",d="$)$";return`${l}${r(p)} ${o()} ${r()}${d}$x$ ${o()} ${l}${r()} ${o()} ${r()}${d}`}if(s.startsWith("?somme:")){if(i==="print")return"\\Box";const a=s.substring(7).split(",").map(p=>p.trim()),e=parseInt(a[0],10),t=this.evaluate(a[1]??"0"),n=this.evaluate(a[2]??"0"),r="s"+Math.random().toString(36).slice(2,8);let o="";for(let p=0;p<e;p++)p>0&&(o+=`<select class="rapido-input rapido-somme-op" data-litx-group="${r}"><option value="" disabled selected>…</option><option value="+">+</option><option value="-">−</option></select>`),o+=`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-solution-type="litx" data-litx-a="${t}" data-litx-b="${n}" data-litx-group="${r}" size="6" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`;return o}if(s.startsWith("?somme2:")){if(i==="print")return"\\Box";const a=s.substring(8).split(",").map(l=>l.trim()),e=parseInt(a[0],10),t=this.evaluate(a[1]??"0"),n=this.evaluate(a[2]??"0"),r=this.evaluate(a[3]??"0"),o="s2"+Math.random().toString(36).slice(2,8);let p="";for(let l=0;l<e;l++)l>0&&(p+=`<select class="rapido-input rapido-somme-op" data-litx2-group="${o}"><option value="" disabled selected>…</option><option value="+">+</option><option value="-">−</option></select>`),p+=`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-solution-type="litx2" data-litx2-a="${t}" data-litx2-b="${n}" data-litx2-c="${r}" data-litx2-group="${o}" size="7" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`;return p}if(s==="?litx"||s.startsWith("?litx:")){if(i==="print")return"\\Box";let a,e,t="";if(s.startsWith("?litx:")){let n=s.substring(6);const r=n.match(/\|group=([\w-]+)\s*$/);r&&(t=` data-litx-group="${r[1]}"`,n=n.slice(0,r.index));const o=n.split(",").map(p=>p.trim());a=this.evaluate(o[0]),e=this.evaluate(o[1]??"0")}else a=this.variables.get("a")??0,e=this.variables.get("b")??0;return`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-solution-type="litx" data-litx-a="${a}" data-litx-b="${e}"${t} size="8" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`}if(s.startsWith("?prod:")){if(i==="print")return"\\Box";let a=s.substring(6),e="pr"+Math.random().toString(36).slice(2,8);const t=a.match(/\|g=([\w-]+)\s*$/);t&&(e=t[1],a=a.slice(0,t.index));const n=a.split(",").map(d=>String(this.evaluate(d.trim()))),r=n.join(","),o=(d="")=>`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-prod-group="${e}"${d} size="3" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`,p='<span class="rapido-product-x">×</span>';let l=o(` data-prod-sol="${r}"`);for(let d=1;d<n.length;d++)l+=` ${p} ${o()}`;return`<span class="rapido-product">${l}</span>`}if(s.startsWith("?^")){const a=s.substring(2).trim(),e=this.evaluate(a);if(i==="print")return"^{\\Box}";const t=String(e),n=Math.max(2,t.length+1);return`<span class="rapido-input-wrap rapido-input-wrap--sup"><input class="rapido-input rapido-input--sup" type="text" data-solution="${t}"${g} size="${n}" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`}if(s.startsWith("?")){let a=s.substring(1).trim(),e="";const t=a.match(/\|lock=([\w-]+)\s*$/);t&&(e=` data-locked-by="${t[1]}" disabled`,a=a.slice(0,t.index).trim());let n="",r="",o="";/\|box\b/.test(a)&&(n+=" rz-box",a=a.replace(/\|box\b/,"").trim());const p=a.match(/\|w:\s*([0-9.]+(?:cm|mm|px|em)?)/);p&&(r+=`width:${/\D$/.test(p[1])?p[1]:p[1]+"px"};`,a=a.replace(p[0],"").trim());const l=a.match(/\|lines:\s*(\d+)/);l&&(n+=" rz-lines",r+=`--rz-lines:${+l[1]};`,a=a.replace(l[0],"").trim());const d=a.match(/\|tag:\s*([^\]|]+)/);d&&(o=d[1].trim(),a=a.replace(d[0],"").trim());const f=String(this.evaluate(a)),x=o?` <span class="rz-tag">${o}</span>`:"";if(i==="corrige")return`<span class="rapido-input-wrap"><span class="rz-corrige${n}" style="${r}">${f}</span>${x}</span>`;if(i==="print"&&!n&&!o)return"\\Box";const k=r?"":` size="${Math.max(3,f.length+1)}"`;return`<span class="rapido-input-wrap"><input class="rapido-input${n}" type="text" data-solution="${f}"${g}${e}${k} style="${r}" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span>${x}</span>`}if(s.startsWith("unit?")){const a=s.substring(5).trim();if(i==="print")return"\\Box";const e=a.replace(/[²³]/g,""),t=[e,e+"²",e+"³"].map(n=>`<option value="${n}">${n}</option>`).join("");return`<span class="rapido-input-wrap"><select class="rapido-input rapido-unit" data-solution="${a}"><option value="" disabled selected>...</option>${t}</select><span class="rapido-fb" aria-hidden="true"></span></span>`}if(s.startsWith("sel?")){const a=s.substring(4).match(/^(.+?)\{([^}]*)\}\s*$/);if(a){const e=String(this.evaluate(a[1].trim()));if(i==="print")return"\\Box";const t=a[2].split(",").map(n=>n.trim()).map(n=>`<option value="${n}">${n}</option>`).join("");return`<span class="rapido-input-wrap"><select class="rapido-input rapido-unit" data-solution="${e}"${g}><option value="" disabled selected>...</option>${t}</select><span class="rapido-fb" aria-hidden="true"></span></span>`}}if(s.startsWith(">")){const a=s.substring(1).trim(),e=this.evaluate(a);return typeof e=="string"?e:W(e)}if(s.startsWith("=")){const a=s.substring(1).trim(),e=this.evaluate(a);return typeof e=="number"&&!Number.isInteger(e)?e.toLocaleString("fr-FR",{minimumFractionDigits:0,maximumFractionDigits:4}):String(e)}if(s.startsWith("±")){const a=s.substring(1).trim(),e=this.evaluate(a);return typeof e!="number"?String(e):e<0?"- "+-e:"+ "+e}const v=s.startsWith("#"),S=v?s.substring(1):s,A=S.match(/^([a-zA-Z_$][\w$]*)\s*=(?!=)([\s\S]+)$/);if(A){const[,a,e]=A,t=this.evaluate(e.trim());return this.variables.set(a,t),this._rngLog("CALC",a,t),t!==null&&typeof t=="object"||v?"":typeof t=="number"?y(t):String(t)}if(S.includes(":")){const[a,e]=S.split("sauf"),[t,n]=a.split(":").map(b=>b.trim());if(this._seed&&Object.prototype.hasOwnProperty.call(this._seed,t)){const b=this._seed[t];return this.variables.set(t,b),this._rngLog("SEED",t,b),b!==null&&typeof b=="object"||v?"":y(b)}if(n.startsWith("@")){const b=n.substring(1),w=D(b)??{};return this.variables.set(t,w),this._rngLog("RAND",t,w),""}if(!n.includes("..")&&n.includes(",")){let b=n.split(",").map(M=>Number(M.trim()));if(e){const M=e.match(/\{([^}]+)\}/);if(M){const z=M[1].split(",").map(B=>{const N=B.trim(),L=Number(N);return isNaN(L)?Number(this.evaluate(N)):L}),P=b.filter(B=>!z.includes(B));P.length&&(b=P)}}const w=b[Math.floor(Math.random()*b.length)];return this.variables.set(t,w),this._rngLog("RAND",t,w),v?"":y(w)}const[r,o]=U(n).map(b=>b.trim()),p=b=>{const w=Number(b.trim());return isNaN(w)?Number(this.evaluate(b.trim())):w},[l,d]=r.split("..").map(p),f=o?Number(o):1;let x=[];if(e){const b=e.match(/\{([^}]+)\}/);b&&(x=b[1].split(",").map(w=>{const M=w.trim(),z=Number(M);return isNaN(z)?Number(this.evaluate(M)):z}))}const k=this.generateRandom(l,d,f,x);return this.variables.set(t,k),this._rngLog("RAND",t,k),v?"":y(k)}if(s.includes(".")&&!s.startsWith(".")){const[a,...e]=s.split(".");if(this.variables.has(a)){let t=this.variables.get(a);for(const n of e)t=t==null?t:t[n];return t==null?"":typeof t=="number"?y(t):String(t)}}if(this.variables.has(s)){const a=this.variables.get(s);return typeof a=="number"?y(a):String(a)}return h})}}const H=Object.freeze(Object.defineProperty({__proto__:null,TemplateEngine:K,formatInt:y,nombresEnLettres:W,rangName:T},Symbol.toStringTag,{value:"Module"}));export{K as T,Z as a,O as b,H as c,R as g,X as t};
