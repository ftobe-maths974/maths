import mt from"./js-yaml.CwjAzRNl.js";function pt(s,r){for(s=Math.abs(s),r=Math.abs(r);r;)[s,r]=[r,s%r];return s}function Pt(s,{allowedDenominators:r=[2,3,4,5,6,8,10,12,100],tolerance:l=.001}={}){const u=Math.sign(s),a=Math.abs(s);if(Math.abs(a-Math.round(a))<=l)return{n:Math.round(a)*u,d:1,integer:Math.round(a)*u,remainder:0,isExact:!0};let p=null,f=1/0;for(const g of r){const x=Math.round(a*g),y=Math.abs(a-x/g);y<=l&&y<f&&(f=y,p={n:x*u,d:g})}if(p){const g=pt(p.n,p.d),x=p.n/g,y=p.d/g;return{n:x,d:y,integer:Math.trunc(x/y),remainder:Math.abs(x%y),isExact:f<Number.EPSILON}}return null}const gt=`# ─────────────────────────────────────────────────────────────────────────────
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
`,ct=mt.load(gt),rt={produits:["fruits","poissons","epicerie","transport"]};function ut(s){if(rt[s])return rt[s].flatMap(l=>ut(l));const r=ct?.[s];return Array.isArray(r)?r:[]}function bt(s){const r=ut(s);return r.length?r[Math.floor(Math.random()*r.length)]:null}function Dt(){return ct?.evenements??{}}const Q={blue:"#2563eb",blueDeep:"#1d4ed8",blueLight:"#3b82f6",orange:"#ea580c",purple:"#9333ea",ink:"#1e293b",muted:"#64748b"},C=Q.ink,H=Q.blue,at=Q.orange,ot=Q.purple,O=(s,r)=>({x:s.x-r.x,y:s.y-r.y}),z=(s,r)=>({x:s.x+r.x,y:s.y+r.y}),A=(s,r)=>({x:s.x*r,y:s.y*r}),j=s=>{const r=Math.hypot(s.x,s.y);return r>0?{x:s.x/r,y:s.y/r}:{x:1,y:0}},st=s=>({x:-s.y,y:s.x}),nt=(s,r)=>({x:(s.x+r.x)/2,y:(s.y+r.y)/2}),I=s=>`${s.x.toFixed(1)},${s.y.toFixed(1)}`,V=(s,r,l=C,u=2)=>`<line x1="${s.x.toFixed(1)}" y1="${s.y.toFixed(1)}" x2="${r.x.toFixed(1)}" y2="${r.y.toFixed(1)}" stroke="${l}" stroke-width="${u}" stroke-linecap="round"/>`;function xt(s,r,l,u=13){const a=j(O(r,s)),p=j(O(l,s)),f=z(s,A(a,u)),g=z(s,A(p,u)),x=z(f,A(p,u));return`<polyline points="${I(f)} ${I(x)} ${I(g)}" fill="none" stroke="${C}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>`}function $t(s,r,l,u=C){const a=nt(s,r),p=j(O(r,s)),f=st(p),g=6,x=4.5;let y="";for(let M=0;M<l;M++){const t=z(a,A(p,(M-(l-1)/2)*x));y+=V(z(t,A(f,g)),z(t,A(f,-g)),u,1.8)}return y}function tt(s,r,l,u=at){const a=nt(s,r),p=j(O(r,s)),f=st(p),g=5,x=5;let y="";for(let M=0;M<l;M++){const t=z(a,A(p,(M-(l-1)/2)*x)),i=z(t,A(p,g)),n=z(z(t,A(p,-g)),A(f,g)),o=z(z(t,A(p,-g)),A(f,-g));y+=`<polyline points="${I(n)} ${I(i)} ${I(o)}" fill="none" stroke="${u}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`}return y}function vt(s,r,l,u,a=20){const p=j(O(r,s)),f=j(O(l,s)),g=z(s,A(p,a)),x=z(s,A(f,a)),y=p.x*f.y-p.y*f.x,M=y<0?1:0,t=j(z(p,f)),i=z(s,A(t,a+13)),n=typeof u=="number"?u+"°":String(u);return`<path d="M ${I(g)} A ${a} ${a} 0 0 ${M} ${I(x)}" fill="none" stroke="${ot}" stroke-width="1.8"/><text x="${i.x.toFixed(1)}" y="${i.y.toFixed(1)}" font-size="12" font-weight="700" font-family="inherit" fill="${ot}" text-anchor="middle" dominant-baseline="middle">${n}</text>`}const yt=13,kt=14;function dt(s,r,l,u,a=H){const p=nt(s,r),f=j(O(r,s));let g=st(f);if(u){const y=O(u,p);g.x*y.x+g.y*y.y>0&&(g=A(g,-1))}const x=z(p,A(g,13));return`<text x="${x.x.toFixed(1)}" y="${x.y.toFixed(1)}" font-size="${yt}" font-weight="700" font-family="inherit" fill="${a}" text-anchor="middle" dominant-baseline="middle">${l}</text>`}function ft(s,r,l,u=16){const a=j(O(s,l)),p=z(s,A(a,u));return`<text x="${p.x.toFixed(1)}" y="${p.y.toFixed(1)}" font-size="${kt}" font-weight="700" font-style="italic" font-family="inherit" fill="${C}" text-anchor="middle" dominant-baseline="middle">${r}</text>`}function Mt(s){const r=s.trim().split(/\s+/),l=r.shift(),u={};for(const a of r){const p=a.indexOf("=");p>0&&(u[a.slice(0,p)]=a.slice(p+1))}return{kind:l,attrs:u}}const wt=s=>/^[A-Z]{2}$/.test(s);function St(s,r,l){const u={};for(const b of Object.keys(s))wt(b)&&(u[b]=Number(r(s[b])));const a=s.ask?_t(s.ask):null,p=s.right||null,f=[...new Set([...Object.keys(u),a].filter(Boolean).join("").split(""))].sort();if(f.length!==3)throw new Error("figure triangle : 3 sommets attendus, reçu "+f.join(""));const[g,x,y]=f,M=(b,k)=>u[b+k]??u[k+b],t=s.angle?String(s.angle).split(":"):null,i=t?t[0]:null,n=!!(t&&t[1]==="?"),o=t&&!n?Math.round(Number(r(t[1]))):null;let e={};if(p&&i&&o!=null&&f.includes(i)&&i!==p){const b=i,k=f.find(F=>F!==p&&F!==i),_=o*Math.PI/180;let $=M(p,b),B=M(p,k),W=M(b,k);$==null&&B!=null&&($=B/Math.tan(_)),$==null&&W!=null&&($=W*Math.cos(_)),$==null&&($=70),B==null&&(B=$*Math.tan(_)),e[p]={x:0,y:0},e[b]={x:$,y:0},e[k]={x:0,y:B}}else if(p){const b=f.filter(F=>F!==p),[k,_]=b;let $=M(p,k),B=M(p,_),W=M(k,_);$==null&&($=Math.sqrt(Math.max(0,W*W-B*B))),B==null&&(B=Math.sqrt(Math.max(0,W*W-$*$))),W==null&&(W=Math.hypot($,B)),e[p]={x:0,y:0},e[k]={x:$,y:0},e[_]={x:0,y:B}}else{const b=M(g,x),k=M(g,y),_=M(x,y);e[g]={x:0,y:0},e[x]={x:b,y:0};const $=(b*b+k*k-_*_)/(2*b),B=Math.sqrt(Math.max(1,k*k-$*$));e[y]={x:$,y:B}}const c=30,h=240,m=f.map(b=>e[b].x),v=f.map(b=>e[b].y),d=Math.min(...m),S=Math.max(...m),P=Math.min(...v),w=Math.max(...v),q=Math.max(1,S-d),E=Math.max(1,w-P),L=Math.min((h-2*c)/q,150/E),Y=Math.round(q*L+2*c),D=Math.round(E*L+2*c),X=b=>({x:c+(b.x-d)*L,y:D-c-(b.y-P)*L});for(const b of f)e[b]=X(e[b]);const R={x:(e[g].x+e[x].x+e[y].x)/3,y:(e[g].y+e[x].y+e[y].y)/3},G=[[g,x],[x,y],[g,y]],Z=(b,k)=>p?b===p||k===p?H:at:C;let N=`<polygon points="${[e[g],e[x],e[y]].map(I).join(" ")}" fill="#f8fafc" stroke="none"/>`;for(const[b,k]of G)N+=V(e[b],e[k],Z(b,k),2.6);if(p&&(N+=xt(e[p],e[f.filter(b=>b!==p)[0]],e[f.filter(b=>b!==p)[1]])),i&&e[i]&&(o!=null||n)){const b=f.filter(k=>k!==p&&k!==i)[0]||f.filter(k=>k!==i)[0];N+=vt(e[i],e[p]||e[f.filter(k=>k!==i)[0]],e[b],n?"?":o)}for(const[b,k]of G){const _=b+k,$=k+b,B=a===_||a===$,W=u[_]??u[$],F=B?"?":W!=null?l(W):null;F!=null&&(N+=dt(e[b],e[k],F,R,Z(b,k)))}if(s.mark){const[b,k]=s.mark.split(":");N+=$t(e[b[0]],e[b[1]],+(k||1))}if(s.par)for(const b of s.par.split("|"))N+=tt(e[b[0]],e[b[1]],1);for(const b of f)N+=ft(e[b],b,R);return{svg:N,W:Y,H:D}}function _t(s){return s.length===2,s}function Bt(s,r,l){const u=s.style||"triangle",a=["AB","AD","BD","AC","AE","CE","BC","DE"],p={AB:"AB",AD:"AD",BD:"BD",AC:"AC",AE:"AE",CE:"CE",BC:"BC",DE:"DE"},f={};for(const $ of a)s[$]!=null&&(f[$]=Number(r(s[$])));const g=s.ask||null;let x=f.AB,y=f.AD;x==null&&y!=null&&f.BD!=null&&(x=y-f.BD),y==null&&x!=null&&f.BD!=null&&(y=x+f.BD),x==null&&(x=4),y==null&&(y=x*1.7),y<=x&&(y=x*1.6);const M=x/y,t=25*Math.PI/180,i={x:Math.cos(t),y:Math.sin(t)},n={x:Math.cos(t),y:-Math.sin(t)},o=u==="papillon"?-1:1,e={x:0,y:0},c={x:i.x*M,y:i.y*M},h={x:n.x*M,y:n.y*M},m={x:i.x*o,y:i.y*o},v={x:n.x*o,y:n.y*o},d={A:e,B:c,C:h,D:m,E:v},S=["A","B","C","D","E"],P=S.map($=>d[$].x),w=S.map($=>d[$].y),q=Math.min(...P),E=Math.max(...P),L=Math.min(...w),Y=Math.max(...w),D=26,X=Math.max(.001,E-q),R=Math.max(.001,Y-L),G=Math.min((280-2*D)/X,(170-2*D)/R),Z=Math.round(X*G+2*D),N=Math.round(R*G+2*D),b=$=>({x:D+($.x-q)*G,y:N-D-($.y-L)*G});for(const $ of S)d[$]=b(d[$]);const k={x:S.reduce(($,B)=>$+d[B].x,0)/5,y:S.reduce(($,B)=>$+d[B].y,0)/5};let _="";u==="papillon"?(_+=V(d.B,d.D,C,2),_+=V(d.C,d.E,C,2)):(_+=V(d.A,d.D,C,2),_+=V(d.A,d.E,C,2)),_+=V(d.B,d.C,H,2.4),_+=V(d.D,d.E,H,2.4),_+=tt(d.B,d.C,1),_+=tt(d.D,d.E,1);for(const $ of a){const B=g===$,W=f[$],F=B?"?":W!=null?l(W):null;if(F!=null){const it=p[$];_+=dt(d[it[0]],d[it[1]],F,k,B?at:H)}}for(const $ of S)_+=ft(d[$],$,k,14);return{svg:_,W:Z,H:N}}function zt(s,r,l={}){const{kind:u,attrs:a}=Mt(s),p=a.unit||"",f=x=>p?`${x} ${p}`:String(x);let g;try{if(u==="triangle")g=St(a,r,f);else if(u==="thales")g=Bt(a,r,f);else throw new Error("figure inconnue : "+u)}catch(x){return`<span class="zefor-fig-err" style="color:#b5483f;font:600 12px system-ui">⚠ [fig:${u}] ${x.message}</span>`}return`<svg class="zefor-fig" viewBox="0 0 ${g.W} ${g.H}" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:auto;max-height:var(--vis-max-h,180px);overflow:visible">${g.svg}</svg>`}const U=["","un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix","onze","douze","treize","quatorze","quinze","seize","dix-sept","dix-huit","dix-neuf"];function lt(s){if(s<20)return U[s];const r=Math.floor(s/10),l=s%10;if(r===7)return l===1?"soixante et onze":"soixante-"+U[10+l];if(r===8)return l===0?"quatre-vingts":"quatre-vingt-"+U[l];if(r===9)return"quatre-vingt-"+U[10+l];const u=["","","vingt","trente","quarante","cinquante","soixante"][r];return l===0?u:l===1?u+" et un":u+"-"+U[l]}function J(s){if(s<100)return lt(s);const r=Math.floor(s/100),l=s%100,u=r===1?"cent":U[r]+" cent";return l===0?r===1?"cent":U[r]+" cents":u+" "+lt(l)}function et(s){if(s=Math.round(s),s===0)return"zéro";if(s<0)return"moins "+et(-s);if(s<1e3)return J(s);const r=Math.floor(s/1e3),l=s%1e3,u=r===1?"mille":J(r)+" mille";return l===0?u:u+" "+J(l)}const At=["millièmes","centièmes","dixièmes","unités","dizaines","centaines","milliers","dizaines de mille","centaines de mille","millions"];function ht(s){return At[Math.round(s)+3]??"?"}function T(s){return Math.round(s).toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}function qt(s){const r=[];let l=0,u=0;for(let a=0;a<s.length;a++){const p=s[a];p==="("||p==="["||p==="{"?l++:p===")"||p==="]"||p==="}"?l--:p===","&&l===0&&(r.push(s.slice(u,a)),u=a+1)}return r.push(s.slice(u)),r}class K{constructor(){this.variables=new Map,this._seed=null}reset(){this.variables.clear()}setSeed(r){this._seed=r&&typeof r=="object"?r:null}captureVars(){const r={};for(const[l,u]of this.variables.entries())r[l]=u;return r}_rngLog(r,l,u){try{if(typeof localStorage>"u"||localStorage.getItem("seedDbg")!=="1")return;const a=r==="SEED"?"#0a0":"#e11";console.log(`%c[rng ${r}]`,`color:${a};font-weight:bold`,`${l} = ${typeof u=="object"?"{ctx}":u}`)}catch{}}generateRandom(r,l,u,a=[]){let p,f=0;const g=Math.floor((l-r)/u);do p=r+Math.floor(Math.random()*(g+1))*u,p=parseFloat(p.toFixed(10)),f++;while(a.includes(p)&&f<100);return p}evaluate(r){try{const l=g=>g?String(g).charAt(0).toUpperCase()+String(g).slice(1):"",u=["rangName","formatInt","gcd","cap",...Array.from(this.variables.keys())],a=[ht,T,pt,l,...Array.from(this.variables.values())],f=new Function(...u,`return ${r};`)(...a);return typeof f=="string"||typeof f=="boolean"||Number.isInteger(f)?f:parseFloat(f.toFixed(6))}catch(l){return K._evalWarned||(K._evalWarned=new Set),K._evalWarned.has(r)||(K._evalWarned.add(r),console.warn(`[zefor] [?${r}] non évaluable (variable/figure manquante ?) — ${l.message}`)),"?"}}parse(r,l="web"){return r.replace(/\[(.*?)\]/g,(u,a)=>{a=a.trim();let p="";const f=a.match(/\|comp:([a-z]+)/);f&&(p=f[1],a=a.replace(/\|comp:[a-z]+/,"").trim());const g=p?` data-comp="${p}"`:"";if(a.startsWith("fig:"))return zt(a.slice(4),t=>this.evaluate(t),{});if(a.startsWith("frac{")){const t=a.match(/^frac\{([^}]*)\}\{([^}]*)\}/);if(t){if(l==="print")return`\\frac{${t[1]}}{${t[2]}}`;const i=String(this.evaluate(t[1])),n=String(this.evaluate(t[2]));return`<span class="rapido-frac-display"><span>${i}</span><span class="rapido-frac-bar"></span><span>${n}</span></span>`}}if(a.startsWith("fracK{")){const t=a.match(/^fracK\{([^}]*)\}\{([^}]*)\}\{([^}]*)\}/);if(t){if(l==="print")return"\\frac{\\Box \\times \\Box}{\\Box \\times \\Box}";const i=String(this.evaluate(t[1])),n=String(this.evaluate(t[2])),o=String(this.evaluate(t[3])),e=Math.max(2,o.length+1),c=()=>`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-solution="${o}"${g} size="${e}" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`;return`<span class="rapido-frac-exact"><span class="rapido-frac-row">${i}×${c()}</span><span class="rapido-frac-bar"></span><span class="rapido-frac-row">${n}×${c()}</span></span>`}}if(a.startsWith("fracKall{")){const t=a.match(/^fracKall\{([^}]*)\}\{([^}]*)\}\{([^}]*)\}/);if(t){if(l==="print")return"\\frac{\\Box \\times \\Box}{\\Box \\times \\Box}";const i=String(this.evaluate(t[1])),n=String(this.evaluate(t[2])),o=String(this.evaluate(t[3])),e=Math.max(2,i.length+1),c=Math.max(2,n.length+1),h=Math.max(2,o.length+1),m=(v,d,S)=>`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-solution="${v}" data-solution-alt="${d}" size="${S}" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`;return`<span class="rapido-frac-exact"><span class="rapido-frac-row">${m(i,o,e)}×${m(o,i,h)}</span><span class="rapido-frac-bar"></span><span class="rapido-frac-row">${m(n,o,c)}×${m(o,n,h)}</span></span>`}}if(a.startsWith("fracProd2?{")){const t=a.match(/^fracProd2\?\{([^}]*)\}\{([^}]*)\}\{([^}]*)\}\{([^}]*)\}/);if(t){if(l==="print")return"\\frac{\\Box \\times \\Box}{\\Box \\times \\Box}";const i=String(this.evaluate(t[1])),n=String(this.evaluate(t[2])),o=String(this.evaluate(t[3])),e=String(this.evaluate(t[4])),c=m=>Math.max(2,m.length+1),h=m=>`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-solution="${m}"${g} size="${c(m)}" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`;return`<span class="rapido-frac-exact"><span class="rapido-frac-row">${h(i)} × ${h(n)}</span><span class="rapido-frac-bar"></span><span class="rapido-frac-row">${h(o)} × ${h(e)}</span></span>`}}if(a.startsWith("fracProd1?{")){const t=a.match(/^fracProd1\?\{([^}]*)\}\{([^}]*)\}\{([^}]*)\}/);if(t){if(l==="print")return"\\frac{\\Box \\times \\Box}{\\Box}";const i=String(this.evaluate(t[1])),n=String(this.evaluate(t[2])),o=String(this.evaluate(t[3])),e=h=>Math.max(2,h.length+1),c=h=>`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-solution="${h}"${g} size="${e(h)}" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`;return`<span class="rapido-frac-exact"><span class="rapido-frac-row">${c(i)} × ${c(n)}</span><span class="rapido-frac-bar"></span><span class="rapido-frac-row">${c(o)}</span></span>`}}if(a.startsWith("fracPlus?{")||a.startsWith("fracMinus?{")){const t=a.startsWith("fracPlus?{")?"+":"−",i=a.startsWith("fracPlus?{")?"fracPlus":"fracMinus",n=a.match(new RegExp(`^${i}\\?\\{([^}]*)\\}\\{([^}]*)\\}\\{([^}]*)\\}`));if(n){if(l==="print")return`\\frac{\\Box ${t==="−"?"-":"+"} \\Box}{\\Box}`;const o=String(this.evaluate(n[1])),e=String(this.evaluate(n[2])),c=String(this.evaluate(n[3])),h=Math.max(2,o.length+1),m=Math.max(2,e.length+1),v=Math.max(2,c.length+1),d=(S,P)=>`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-solution="${S}"${g} size="${P}" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`;return`<span class="rapido-frac-exact"><span class="rapido-frac-row">${d(o,h)} ${t} ${d(e,m)}</span><span class="rapido-frac-bar"></span><span class="rapido-frac-row">${d(c,v)}</span></span>`}}if(a.startsWith("frac?")){const t=a.match(/^frac\?\{([^}]*)\}\{([^}]*)\}/);if(t){if(l==="print")return"\\frac{\\Box}{\\Box}";const i=String(this.evaluate(t[1])),n=String(this.evaluate(t[2])),o=Math.max(2,i.length+1),e=Math.max(2,n.length+1);return`<span class="rapido-frac-wrap"><span class="rapido-input-wrap"><input class="rapido-input" type="text" data-solution="${i}"${g} size="${o}" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span><span class="rapido-frac-bar"></span><span class="rapido-input-wrap"><input class="rapido-input" type="text" data-solution="${n}"${g} size="${e}" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span></span>`}}if(a.startsWith("fracQ?")){const t=a.match(/^fracQ\?\{([^}]*)\}\{([^}]*)\}\{([^}]*)\}/);if(t){if(l==="print")return"\\frac{\\Box}{\\Box}";const i=String(this.evaluate(t[1])),n=String(this.evaluate(t[2]));let o=t[3].trim();o==="alea"&&(o=Math.random()<.5?"num":"den");const e=Math.max(2,i.length+1),c=Math.max(2,n.length+1),h=(d,S)=>`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-solution="${d}"${g} size="${S}" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`,m=o==="den"?`<span class="rapido-frac-cell">${i}</span>`:h(i,e),v=o==="num"?`<span class="rapido-frac-cell">${n}</span>`:h(n,c);return o==="both"?`<span class="rapido-frac-wrap">${h(i,e)}<span class="rapido-frac-bar"></span>${h(n,c)}</span>`:`<span class="rapido-frac-wrap">${m}<span class="rapido-frac-bar"></span>${v}</span>`}}if(a.startsWith("vf:")){const t=a.substring(3).trim(),i=this.evaluate(t),n=i===!0||i===1?"VRAI":"FAUX";return l==="print"?"\\framebox{V/F}":`<span class="rapido-vf-wrap" data-solution="${n}" data-place-mode="1"><button class="rapido-vf-btn" data-choice="VRAI">VRAI</button><button class="rapido-vf-btn" data-choice="FAUX">FAUX</button></span>`}if(a.startsWith("qcm:")){const t=a.slice(4).split("|").map(n=>n.trim()).filter(Boolean);return l==="print"?t.map(n=>`\\framebox{}~${n.replace(/\*\s*$/,"")}`).join(" \\quad "):`<span class="rapido-qcm" role="group">${t.map(n=>{const o=/\*\s*$/.test(n),e=n.replace(/\*\s*$/,"").trim();return`<label class="rapido-qcm-row" data-correct="${o?1:0}"><input type="checkbox" class="rapido-qcm-cb"><span class="rapido-qcm-lbl">${e}</span><span class="rapido-qcm-mark" aria-hidden="true"></span></label>`}).join("")}<span class="rapido-qcm-fb" aria-hidden="true"></span></span>`}if(a.startsWith("?distrib2:")){if(l==="print")return"\\Box";const t=a.substring(10).split(",").map(d=>d.trim()),i=this.evaluate(t[0]),n=this.evaluate(t[1]??"0"),o=this.evaluate(t[2]??"0"),e="d2_"+Math.random().toString(36).slice(2,6),c=(d="")=>`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-distrib2-group="${e}"${d} size="3" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`,h=()=>`<select class="rapido-input rapido-somme-op" data-distrib2-group="${e}"><option value="" disabled selected>…</option><option value="+">+</option><option value="-">−</option></select>`,m=(d,S)=>`<span class="rapido-product">${d}<span class="rapido-product-x">$\\times$</span>${S}</span>`,v=` data-distrib2-a="${i}" data-distrib2-b="${n}" data-distrib2-c="${o}"`;return`${m(c(v),c())} ${h()} ${m(c(),c())} ${h()} ${m(c(),c())} ${h()} ${m(c(),c())}`}if(a.startsWith("?square:")){if(l==="print")return"\\Box";const t=a.substring(8).split(",").map(m=>m.trim()),i=this.evaluate(t[0]),n=this.evaluate(t[1]??"0"),o="sq_"+Math.random().toString(36).slice(2,6),e=(m="")=>`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-square-group="${o}"${m} size="3" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`,c=()=>`<select class="rapido-input rapido-somme-op" data-square-group="${o}"><option value="" disabled selected>…</option><option value="+">+</option><option value="-">−</option></select>`,h=` data-square-a="${i}" data-square-b="${n}"`;return`$($${e(h)}$x$ ${c()} ${e()}$)$ $\\times$ $($${e()}$x$ ${c()} ${e()}$)$`}if(a.startsWith("?litx2:")){if(l==="print")return"\\Box";const t=a.substring(7).split(",").map(e=>e.trim()),i=this.evaluate(t[0]),n=this.evaluate(t[1]??"0"),o=this.evaluate(t[2]??"0");return`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-solution-type="litx2" data-litx2-a="${i}" data-litx2-b="${n}" data-litx2-c="${o}" size="10" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`}if(a.startsWith("?distribKx:")){if(l==="print")return"\\Box";const t=a.substring(11).split(",").map(d=>d.trim()),i=this.evaluate(t[0]),n=this.evaluate(t[1]??"0"),o="dkx_"+Math.random().toString(36).slice(2,6),e=(d="")=>`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-distribkx-group="${o}"${d} size="4" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`,c=`<select class="rapido-input rapido-somme-op" data-distribkx-group="${o}"><option value="" disabled selected>…</option><option value="+">+</option><option value="-">−</option></select>`,h=` data-distribkx-a="${i}" data-distribkx-b="${n}"`,m=(d,S)=>S?`<span class="rapido-factor">${d}$x$</span>`:`<span class="rapido-factor">${d}</span>`,v=(d,S)=>`<span class="rapido-product">${d}<span class="rapido-product-x">$\\times$</span>${S}</span>`;return`${v(m(e(h),!0),m(e(),!0))} ${c} ${v(m(e(),!0),m(e(),!1))}`}if(a.startsWith("?distrib1x:")){if(l==="print")return"\\Box";const t=a.substring(11).split(",").map(v=>v.trim()),i=this.evaluate(t[0]),n=this.evaluate(t[1]??"0"),o="d1x_"+Math.random().toString(36).slice(2,6),e=(v="")=>`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-distrib1x-group="${o}"${v} size="4" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`,c=`<select class="rapido-input rapido-somme-op" data-distrib1x-group="${o}"><option value="" disabled selected>…</option><option value="+">+</option><option value="-">−</option></select>`,h=` data-distrib1x-a="${i}" data-distrib1x-b="${n}"`,m=(v,d)=>`<span class="rapido-product">${v}<span class="rapido-product-x">$\\times$</span>${d}</span>`;return`${m(e(h),e())}$x^2$ ${c} ${m(e(),e())}$x$`}if(a.startsWith("?lineax:")){if(l==="print")return"\\Box";const t=a.substring(8).split(",").map(m=>m.trim()),i=this.evaluate(t[0]),n=this.evaluate(t[1]??"0"),o="lx_"+Math.random().toString(36).slice(2,6),e=(m="")=>`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-lineax-group="${o}"${m} size="4" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`,c=`<select class="rapido-input rapido-somme-op" data-lineax-group="${o}"><option value="" disabled selected>…</option><option value="+">+</option><option value="-">−</option></select>`,h=` data-lineax-a="${i}" data-lineax-b="${n}"`;return`${e(h)}$x$ ${c} ${e()}`}if(a.startsWith("?distrib1:")){if(l==="print")return"\\Box";const t=a.substring(10).split(",").map(v=>v.trim()),i=this.evaluate(t[0]),n=this.evaluate(t[1]??"0"),o="d1_"+Math.random().toString(36).slice(2,6),e=(v="")=>`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-distrib1-group="${o}"${v} size="4" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`,c=`<select class="rapido-input rapido-somme-op" data-distrib1-group="${o}"><option value="" disabled selected>…</option><option value="+">+</option><option value="-">−</option></select>`,h=` data-distrib1-a="${i}" data-distrib1-b="${n}"`,m=(v,d)=>`<span class="rapido-product">${v}<span class="rapido-product-x">$\\times$</span>${d}</span>`;return`${m(e(h),e())}$x$ ${c} ${m(e(),e())}`}if(a.startsWith("?factx2:")){if(l==="print")return"\\Box";const t=a.substring(8).split(",").map(d=>d.trim()),i=this.evaluate(t[0]),n=this.evaluate(t[1]??"0"),o="fx2_"+Math.random().toString(36).slice(2,6),e=(d="")=>`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-factx2-group="${o}"${d} size="4" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`,c=()=>`<select class="rapido-input rapido-somme-op" data-factx2-group="${o}"><option value="" disabled selected>…</option><option value="+">+</option><option value="-">−</option></select>`,h=` data-factx2-a="${i}" data-factx2-b="${n}"`,m="$($",v="$)$";return`${m}${e(h)} ${c()} ${e()}${v}$x$ ${c()} ${m}${e()} ${c()} ${e()}${v}`}if(a.startsWith("?somme:")){if(l==="print")return"\\Box";const t=a.substring(7).split(",").map(h=>h.trim()),i=parseInt(t[0],10),n=this.evaluate(t[1]??"0"),o=this.evaluate(t[2]??"0"),e="s"+Math.random().toString(36).slice(2,8);let c="";for(let h=0;h<i;h++)h>0&&(c+=`<select class="rapido-input rapido-somme-op" data-litx-group="${e}"><option value="" disabled selected>…</option><option value="+">+</option><option value="-">−</option></select>`),c+=`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-solution-type="litx" data-litx-a="${n}" data-litx-b="${o}" data-litx-group="${e}" size="6" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`;return c}if(a.startsWith("?somme2:")){if(l==="print")return"\\Box";const t=a.substring(8).split(",").map(m=>m.trim()),i=parseInt(t[0],10),n=this.evaluate(t[1]??"0"),o=this.evaluate(t[2]??"0"),e=this.evaluate(t[3]??"0"),c="s2"+Math.random().toString(36).slice(2,8);let h="";for(let m=0;m<i;m++)m>0&&(h+=`<select class="rapido-input rapido-somme-op" data-litx2-group="${c}"><option value="" disabled selected>…</option><option value="+">+</option><option value="-">−</option></select>`),h+=`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-solution-type="litx2" data-litx2-a="${n}" data-litx2-b="${o}" data-litx2-c="${e}" data-litx2-group="${c}" size="7" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`;return h}if(a==="?litx"||a.startsWith("?litx:")){if(l==="print")return"\\Box";let t,i,n="";if(a.startsWith("?litx:")){let o=a.substring(6);const e=o.match(/\|group=([\w-]+)\s*$/);e&&(n=` data-litx-group="${e[1]}"`,o=o.slice(0,e.index));const c=o.split(",").map(h=>h.trim());t=this.evaluate(c[0]),i=this.evaluate(c[1]??"0")}else t=this.variables.get("a")??0,i=this.variables.get("b")??0;return`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-solution-type="litx" data-litx-a="${t}" data-litx-b="${i}"${n} size="8" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`}if(a.startsWith("?prod:")){if(l==="print")return"\\Box";let t=a.substring(6),i="pr"+Math.random().toString(36).slice(2,8);const n=t.match(/\|g=([\w-]+)\s*$/);n&&(i=n[1],t=t.slice(0,n.index));const o=t.split(",").map(v=>String(this.evaluate(v.trim()))),e=o.join(","),c=(v="")=>`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-prod-group="${i}"${v} size="3" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`,h='<span class="rapido-product-x">×</span>';let m=c(` data-prod-sol="${e}"`);for(let v=1;v<o.length;v++)m+=` ${h} ${c()}`;return`<span class="rapido-product">${m}</span>`}if(a.startsWith("?^")){const t=a.substring(2).trim(),i=this.evaluate(t);if(l==="print")return"^{\\Box}";const n=String(i),o=Math.max(2,n.length+1);return`<span class="rapido-input-wrap rapido-input-wrap--sup"><input class="rapido-input rapido-input--sup" type="text" data-solution="${n}"${g} size="${o}" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span></span>`}if(a.startsWith("?")){let t=a.substring(1).trim(),i="";const n=t.match(/\|lock=([\w-]+)\s*$/);n&&(i=` data-locked-by="${n[1]}" disabled`,t=t.slice(0,n.index).trim());let o="",e="",c="";/\|box\b/.test(t)&&(o+=" rz-box",t=t.replace(/\|box\b/,"").trim());const h=t.match(/\|w:\s*([0-9.]+(?:cm|mm|px|em)?)/);h&&(e+=`width:${/\D$/.test(h[1])?h[1]:h[1]+"px"};`,t=t.replace(h[0],"").trim());const m=t.match(/\|lines:\s*(\d+)/);m&&(o+=" rz-lines",e+=`--rz-lines:${+m[1]};`,t=t.replace(m[0],"").trim());const v=t.match(/\|tag:\s*([^\]|]+)/);v&&(c=v[1].trim(),t=t.replace(v[0],"").trim());const d=String(this.evaluate(t)),S=c?` <span class="rz-tag">${c}</span>`:"";if(l==="corrige")return`<span class="rapido-input-wrap"><span class="rz-corrige${o}" style="${e}">${d}</span>${S}</span>`;if(l==="print"&&!o&&!c)return"\\Box";const P=e?"":` size="${Math.max(3,d.length+1)}"`;return`<span class="rapido-input-wrap"><input class="rapido-input${o}" type="text" data-solution="${d}"${g}${i}${P} style="${e}" placeholder="…" autocomplete="off" spellcheck="false"><span class="rapido-fb" aria-hidden="true"></span>${S}</span>`}if(a.startsWith("unit?")){const t=a.substring(5).trim();if(l==="print")return"\\Box";const i=t.replace(/[²³]/g,""),n=[i,i+"²",i+"³"].map(o=>`<option value="${o}">${o}</option>`).join("");return`<span class="rapido-input-wrap"><select class="rapido-input rapido-unit" data-solution="${t}"><option value="" disabled selected>...</option>${n}</select><span class="rapido-fb" aria-hidden="true"></span></span>`}if(a.startsWith("sel?")){const t=a.substring(4).match(/^(.+?)\{([^}]*)\}\s*$/);if(t){const i=String(this.evaluate(t[1].trim()));if(l==="print")return"\\Box";const n=t[2].split(",").map(o=>o.trim()).map(o=>`<option value="${o}">${o}</option>`).join("");return`<span class="rapido-input-wrap"><select class="rapido-input rapido-unit" data-solution="${i}"${g}><option value="" disabled selected>...</option>${n}</select><span class="rapido-fb" aria-hidden="true"></span></span>`}}if(a.startsWith(">")){const t=a.substring(1).trim(),i=this.evaluate(t);return typeof i=="string"?i:et(i)}if(a.startsWith("=")){const t=a.substring(1).trim(),i=this.evaluate(t);return typeof i=="number"&&!Number.isInteger(i)?i.toLocaleString("fr-FR",{minimumFractionDigits:0,maximumFractionDigits:4}):String(i)}if(a.startsWith("±")){const t=a.substring(1).trim(),i=this.evaluate(t);return typeof i!="number"?String(i):i<0?"- "+-i:"+ "+i}const x=a.startsWith("#"),y=x?a.substring(1):a,M=y.match(/^([a-zA-Z_$][\w$]*)\s*=(?!=)([\s\S]+)$/);if(M){const[,t,i]=M,n=this.evaluate(i.trim());return this.variables.set(t,n),this._rngLog("CALC",t,n),n!==null&&typeof n=="object"||x?"":typeof n=="number"?T(n):String(n)}if(y.includes(":")){const[t,i]=y.split("sauf"),[n,o]=t.split(":").map(w=>w.trim());if(this._seed&&Object.prototype.hasOwnProperty.call(this._seed,n)){const w=this._seed[n];return this.variables.set(n,w),this._rngLog("SEED",n,w),w!==null&&typeof w=="object"||x?"":T(w)}if(o.startsWith("@")){const w=o.substring(1),q=bt(w)??{};return this.variables.set(n,q),this._rngLog("RAND",n,q),""}if(!o.includes("..")&&o.includes(",")){let w=o.split(",").map(E=>Number(E.trim()));if(i){const E=i.match(/\{([^}]+)\}/);if(E){const L=E[1].split(",").map(D=>{const X=D.trim(),R=Number(X);return isNaN(R)?Number(this.evaluate(X)):R}),Y=w.filter(D=>!L.includes(D));Y.length&&(w=Y)}}const q=w[Math.floor(Math.random()*w.length)];return this.variables.set(n,q),this._rngLog("RAND",n,q),x?"":T(q)}const[e,c]=qt(o).map(w=>w.trim()),h=w=>{const q=Number(w.trim());return isNaN(q)?Number(this.evaluate(w.trim())):q},[m,v]=e.split("..").map(h),d=c?Number(c):1;let S=[];if(i){const w=i.match(/\{([^}]+)\}/);w&&(S=w[1].split(",").map(q=>{const E=q.trim(),L=Number(E);return isNaN(L)?Number(this.evaluate(E)):L}))}const P=this.generateRandom(m,v,d,S);return this.variables.set(n,P),this._rngLog("RAND",n,P),x?"":T(P)}if(a.includes(".")&&!a.startsWith(".")){const[t,...i]=a.split(".");if(this.variables.has(t)){let n=this.variables.get(t);for(const o of i)n=n==null?n:n[o];return n==null?"":typeof n=="number"?T(n):String(n)}}if(this.variables.has(a)){const t=this.variables.get(a);return typeof t=="number"?T(t):String(t)}return u})}}const Et=Object.freeze(Object.defineProperty({__proto__:null,TemplateEngine:K,formatInt:T,nombresEnLettres:et,rangName:ht},Symbol.toStringTag,{value:"Module"}));export{Q as F,K as T,Dt as a,ut as b,Et as c,pt as g,Pt as t};
