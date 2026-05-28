const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/rapido-engine.DtUXv9Et.js","_astro/rapidos-visuals-integration.DjvrlxOo.js","_astro/editor.CJZspgfY.js","_astro/vis-input.CjKH7sZr.js"])))=>i.map(i=>d[i]);
import{_ as q}from"./editor.CJZspgfY.js";import{ensureSharedStyles as H}from"./vis-input.CjKH7sZr.js";import{idxToCol as R,formatValue as M,colToIdx as I,parseFormula as L,stringify as N,shiftRefs as F,evaluate as B,parseRef as A,astEqual as O}from"./formula-parser.CuBpGvtX.js";import"./rapido-engine.DtUXv9Et.js";import"./rapidos-visuals-integration.DjvrlxOo.js";const te="east",se=!0,D="math974-spreadsheet-css",V=`
math974-spreadsheet {
  display: block;
  font-family: inherit;
  /* Taille naturelle. Le helper setupAutoScale (autoScale=true) mesure cette
     taille puis applique transform:scale(k) pour fit la zone parent. */
  --ss-cell-w: 60px;
  --ss-cell-h: 36px;
  --ss-bord: #cbd5e1;
  --ss-head-bg: #f1f5f9;
  --ss-head-fg: #475569;
  --ss-sel: #6366f1;
  --ss-locked-bg: #f8fafc;
  --ss-target-bg: #eef2ff;
}
/* La consigne (.content) : font-size encore reduite pour les exos tableur
   (clamp(0.85rem, 2.2cqi, 1.2rem) au lieu du global 1.1rem-2.2rem). */
.variant-content.ss-variant > .content {
  font-size: clamp(0.85rem, 2.2cqi, 1.2rem);
  line-height: 1.35;
  text-align: left;
  overflow-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
  min-width: 0;
}
/* Permet au .content de wrap correctement sans pousser la grille. */
.q-card .q-card-content { min-width: 0; }
/* Diagnostic DOM : avec grid-template-columns "auto 1fr auto" et un
   composant de taille naturelle ~400-500px, le track east "auto" prend
   toute la place et le content "1fr" s'effondre a 0. Le max-width sur
   .q-card-east ne touche PAS le sizing du track (CSS Grid).
   Solution : override grid-template-columns avec un ratio fixe 2fr 3fr
   (40% content / 60% east). setupAutoScale recalcule k = 60% / nW. */
.q-card.has-ss {
  /* Plafond de scale autoScale (--vis-max-h: 44vh par defaut) cappait le
     tableur a ~418px de haut alors que la zone east en faisait 740px →
     scale up bloque a 1.4x au lieu de 2.2x. On remonte a 80vh pour les
     fiches tableur. */
  --vis-max-h: 80vh;
}
.q-card.has-visual-east.has-ss,
.q-card.q-card--fs.has-visual-east.has-ss {
  /* minmax(0, Nfr) au lieu de Nfr : sans ca CSS Grid traduit fr en
     minmax(min-content, Nfr) et la colonne content (textes longs comme
     "Identifie") gagne sur le ratio (ex. observe : 0px 706px 440px au lieu
     du 40/60 attendu). minmax(0, Xfr) force le respect strict du ratio.
     Second selecteur necessaire pour battre la regle de fullscreen.css
     '.q-card.q-card--fs.has-visual-east:not(.has-visual-west) { 0fr 1.8fr
     1fr }' qui a plus de specificite en FS. */
  grid-template-columns: 0px minmax(0, 2fr) minmax(0, 3fr);
  /* Rows : la grille de base est "auto 1fr auto auto auto 1fr" — les 1fr
     etant des ressorts pour centrer verticalement quand contenu court.
     Ici on inverse : row content/east en minmax(0, 1fr) pour qu'elle prenne
     l'espace dispo, ressorts a 0 pour eviter du blanc en haut/bas, sinon
     le contenu de east (tableur+pills) imposait sa taille naturelle et
     debordait la card (observe : card 261px, scrollH 603px). */
  grid-template-rows: auto 0 auto minmax(0, 1fr) auto 0;
}
/* Si la consigne YAML est vide (content: "") : masquer la zone .content
   et donner toute la largeur au tableur (east). */
.q-card.has-visual-east.has-ss:has(.variant-content.active > .content:empty),
.q-card.q-card--fs.has-visual-east.has-ss:has(.variant-content.active > .content:empty) {
  grid-template-columns: 0px 0px minmax(0, 1fr);
}
.q-card .variant-content > .content:empty {
  display: none;
}
/* align-items:center sur .q-card (rapidos-visuals.css) centre east dans
   sa row au lieu de l'etirer → east a sa taille naturelle (~400px) tandis
   que content stretch (~600px). align-self:stretch sur east force l'etirement. */
.q-card.has-visual-east.has-ss > .q-card-east,
.q-card.q-card--fs.has-visual-east.has-ss > .q-card-east {
  align-self: stretch;
}
.ss-wrap {
  overflow: auto;
  max-width: 100%;
  border: 1px solid var(--ss-bord);
  border-radius: 6px;
  background: #fff;
  -webkit-overflow-scrolling: touch;
  position: relative;
}
.ss-grid {
  border-collapse: collapse;
  font: inherit;
  table-layout: fixed;
  width: max-content;
  height: 100%;       /* permet aux rows de se repartir verticalement */
}
.ss-grid th, .ss-grid td {
  border: 1px solid var(--ss-bord);
  width: var(--ss-cell-w);
  min-height: var(--ss-cell-h);
  height: auto;       /* stretch vertical auto si parent .ss-grid grandit */
  padding: 0;
  text-align: center;
  vertical-align: middle;
  font: inherit;
  position: relative;
}
.ss-grid th {
  background: var(--ss-head-bg);
  color: var(--ss-head-fg);
  font-weight: 600;
  font-size: 0.85em;
  width: 32px;
  min-width: 32px;
  user-select: none;
}
.ss-grid thead th { min-height: 28px; height: auto; }
.ss-cell {
  cursor: cell;
  font-variant-numeric: tabular-nums;
  padding: 0 6px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.ss-cell.ss-locked { background: var(--ss-locked-bg); color: #334155; cursor: default; }
.ss-cell.ss-target { background: var(--ss-target-bg); }
.ss-cell.ss-text { text-align: center; }
.ss-cell.ss-num  { text-align: center; }
/* Overrides per-cell via suffixe [r]/[c]/[l] dans la clé YAML (ex. B1[r]). */
.ss-cell.ss-align-l { text-align: left; }
.ss-cell.ss-align-c { text-align: center; }
.ss-cell.ss-align-r { text-align: right; }
.ss-cell.ss-align-l .ss-cell-input,
.ss-cell.ss-align-l .ss-target-input { text-align: left; }
.ss-cell.ss-align-c .ss-cell-input,
.ss-cell.ss-align-c .ss-target-input { text-align: center; }
.ss-cell.ss-align-r .ss-cell-input,
.ss-cell.ss-align-r .ss-target-input { text-align: right; }
.ss-cell.ss-error { color: #b91c1c; font-weight: 600; }
.ss-cell.ss-sel { outline: 2px solid var(--ss-sel); outline-offset: -2px; z-index: 1; }
.ss-cell-input {
  width: 100%; height: 100%;
  border: 0; outline: 2px solid var(--ss-sel);
  outline-offset: -2px;
  padding: 0 4px;
  font: inherit;
  background: #fff;
  box-sizing: border-box;
  text-align: center;
}
.ss-fill-handle {
  position: absolute;
  right: -4px; bottom: -4px;
  width: 14px; height: 14px;       /* zone tap reduite — moins d'overlap dans la cellule */
  display: flex; align-items: flex-end; justify-content: flex-end;
  cursor: crosshair;
  z-index: 5;
  touch-action: none;
  background: transparent;
  border: 0;
  padding: 0;
}
.ss-fill-handle::after {
  content: '';
  width: 8px; height: 8px;
  background: var(--ss-sel);
  border: 1.5px solid #fff;
  border-radius: 2px;
  box-shadow: 0 0 2px rgba(0,0,0,0.3);
}
.ss-cell { overflow: visible; }
.ss-cell.ss-fill-preview {
  outline: 2px dashed var(--ss-sel);
  outline-offset: -2px;
  background: rgba(99, 102, 241, 0.08);
}
.ss-cell.ss-fill-source {
  outline: 2px solid var(--ss-sel);
  outline-offset: -2px;
}
/* Sélection rectangulaire utilisateur (range-drag / cell-click) */
.ss-cell.ss-user-sel {
  background: rgba(99, 102, 241, 0.15);
  outline: 1px solid rgba(99, 102, 241, 0.6);
  outline-offset: -1px;
}
.ss-cell.ss-user-sel-anchor {
  outline: 2px solid var(--ss-sel);
  outline-offset: -2px;
}
.ss-cell.ss-fill-only { background: rgba(148, 163, 184, 0.08); }
.ss-cell.ss-fill-only .ss-target-input {
  cursor: not-allowed;
  color: #475569;
}
/* Mode identify-zones : présélections statiques + overlays nommés */
.ss-cell.ss-zone-range {
  background: rgba(99, 102, 241, 0.12) !important;
}
.ss-cell.ss-zone-active {
  outline: 3px solid var(--ss-sel) !important;
  outline-offset: -3px;
  background: rgba(99, 102, 241, 0.05) !important;
  font-weight: 600;
  position: relative;
}
/* Poignee de recopie (statique, decorative) au coin bas-droite de la
   cellule active — element DOM (pas pseudo) pour pouvoir l'anchor depuis
   identify-zones et y positionner un badge a identifier. */
.ss-drag-handle {
  position: absolute;
  right: -5px; bottom: -5px;
  width: 10px; height: 10px;
  background: var(--ss-sel);
  border: 2px solid #fff;
  border-radius: 2px;
  z-index: 5;
  pointer-events: none;
}
/* Cellules selectionnees (multi-selection non-contiguës) : meme style que
   la cellule active mais bordure plus fine (1.5px) pour les distinguer. */
.ss-cell.ss-zone-multi {
  outline: 1.5px solid var(--ss-sel) !important;
  outline-offset: -1.5px;
  background: rgba(99, 102, 241, 0.08) !important;
}
.ss-zone-badge {
  position: absolute;
  z-index: 10;
  min-width: 26px;
  min-height: 26px;
  padding: 0 8px;
  background: #fff;
  color: #312e81;
  border: 2px solid #312e81;
  border-radius: 14px;
  font-weight: 700;
  font-size: 0.85em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.15);
  user-select: none;
  pointer-events: auto;
  white-space: nowrap;
}
.ss-zone-badge:hover { transform: translate(-50%, -50%) scale(1.08); }
.ss-zone-badge[data-zone-id="drag-handle"]:hover { transform: translate(-100%, -100%) scale(1.08); }
.ss-zone-badge[data-zone-id="active-cell"]:hover,
.ss-zone-badge[data-zone-id="cell-address"]:hover { transform: translate(-50%, 0) scale(1.08); }
.ss-zone-badge.ss-zone-active-sel {
  background: #fef3c7;
  border-color: #d97706;
  color: #92400e;
}
.ss-zone-badge.ss-zone-ok {
  background: #dcfce7;
  border-color: #16a34a;
  color: #15803d;
  cursor: default;
}
.ss-zone-badge.ss-zone-ok::after { content: " ✓"; }
.ss-zone-badge.ss-zone-ko {
  background: #fee2e2;
  border-color: #dc2626;
  color: #991b1b;
  animation: ss-shake 0.3s;
}
@keyframes ss-shake {
  0%, 100% { transform: translate(-50%, -50%) translateX(0); }
  25% { transform: translate(-50%, -50%) translateX(-3px); }
  75% { transform: translate(-50%, -50%) translateX(3px); }
}
/* Chart live (config.chart : {xs, ys}) — SVG sous la grille, refreshé à
   chaque recompute. Plot les paires (x, y) en direct comme l'élève
   remplit les cellules. */
.ss-chart {
  margin-top: 10px;
  padding: 6px 4px;
  background: #fafbfc;
  border: 1px solid var(--ss-bord);
  border-radius: 6px;
}
.ss-vocab-panel {
  margin-top: 10px;
  padding: 10px;
  background: #fafbfc;
  border: 1px solid var(--ss-bord);
  border-radius: 6px;
}
/* Mode identify-zones : wrapper interne .ss-host-flex en flex-row
   (tableur a gauche, pills a droite en colonne verticale). Wrapper
   necessaire car autoScale pose display:inline-block en inline style
   sur le host, ce qui ecrase un display:flex CSS sur le host directement.
   align-items: stretch → le tableur (.ss-wrap) prend la hauteur du
   panneau pills. */
.ss-host-flex {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 10px;
  width: 100%;
  height: 100%;
}
.ss-host-flex > .ss-wrap {
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
}
.ss-host-flex > .ss-wrap > .ss-grid {
  flex: 1 1 auto;
  width: 100%;
}
.ss-host-flex > .ss-vocab-panel {
  margin-top: 0;
  flex: 0 0 220px;
}
.ss-host-flex > .ss-vocab-panel {
  display: flex;
  flex-direction: column;
}
.ss-host-flex .ss-vocab-pills {
  flex: 1 1 auto;       /* prend la hauteur dispo du panel */
  flex-direction: column;
  align-items: stretch;
}
.ss-host-flex .ss-vocab-pill {
  /* flex-basis: 0 → l'espace dispo est distribué par flex-grow, sans
     tenir compte de min-height (cible tactile relâchée pour permettre
     le shrink auto). 4 pills se répartissent uniformément la hauteur
     du panel, peu importe leur contenu. */
  flex: 1 1 0;
  min-height: 0;
}
.ss-vocab-panel-title {
  font-size: 0.85em;
  color: #475569;
  margin-bottom: 8px;
  font-weight: 600;
}
.ss-vocab-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.ss-vocab-pill {
  font: inherit;
  padding: 6px 12px;
  min-height: 44px;
  background: #fff;
  border: 1.5px solid var(--ss-bord);
  border-radius: 22px;
  cursor: pointer;
  font-size: 0.9em;
  color: #1e293b;
}
.ss-vocab-pill:hover { background: #f1f5f9; }
.ss-vocab-pill.ss-pill-used {
  background: #f0fdf4;
  border-color: #86efac;
  color: #166534;
  text-decoration: line-through;
  cursor: default;
  opacity: 0.7;
}
.ss-vocab-status {
  margin-top: 8px;
  font-size: 0.9em;
  color: #475569;
}
.ss-vocab-status.ss-status-done {
  color: #15803d;
  font-weight: 700;
}
/* Live-highlight : refs/plages contenues dans la formule en cours de saisie.
   Couleurs cyclées par ref unique (4 teintes daltonien-friendly). */
.ss-cell.ss-ref-hl-0 { outline: 2px dashed #1d4ed8; outline-offset: -2px; background: rgba(29, 78, 216, 0.10); }
.ss-cell.ss-ref-hl-1 { outline: 2px dashed #b45309; outline-offset: -2px; background: rgba(180, 83, 9, 0.10); }
.ss-cell.ss-ref-hl-2 { outline: 2px dashed #047857; outline-offset: -2px; background: rgba(4, 120, 87, 0.10); }
.ss-cell.ss-ref-hl-3 { outline: 2px dashed #9333ea; outline-offset: -2px; background: rgba(147, 51, 234, 0.10); }
.ss-toolbar {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 6px 8px;
  background: #fafbfc;
  border-bottom: 1px solid var(--ss-bord);
  font-size: 0.85em;
}
.ss-toolbar-row {
  display: flex;
  gap: 4px;
  align-items: center;
  flex-wrap: wrap;
}
.ss-toolbar button {
  font: inherit;
  padding: 4px 10px;
  border: 1px solid var(--ss-bord);
  background: #fff;
  border-radius: 4px;
  cursor: pointer;
  min-height: 32px;
  min-width: 32px;
}
.ss-toolbar button:active { background: #e2e8f0; }
.ss-toolbar .ss-tb-fmt {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  padding: 4px;
  font-size: 0.95em;
}
.ss-toolbar .ss-tb-fmt[data-fmt="bold"]      { font-weight: 700; }
.ss-toolbar .ss-tb-fmt[data-fmt="italic"]    { font-style: italic; }
.ss-toolbar .ss-tb-fmt[data-fmt="underline"] { text-decoration: underline; }
.ss-toolbar .ss-tb-fmt[data-fmt="color"]     { color: #dc2626; }
.ss-toolbar .ss-tb-fmt.ss-tb-sep {
  width: 1px; min-width: 1px; padding: 0; border: 0;
  background: var(--ss-bord); align-self: stretch; margin: 0 4px;
  pointer-events: none;
}
.ss-toolbar .ss-cell-label {
  font-weight: 600;
  color: var(--ss-head-fg);
  min-width: 28px;
  text-align: center;
  font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
  padding: 4px 6px;
  background: #fff;
  border: 1px solid var(--ss-bord);
  border-radius: 4px;
}
.ss-toolbar .ss-formula-bar {
  flex: 1;
  min-width: 120px;
  font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
  font-size: 0.85em;
  color: #1e293b;
  padding: 4px 6px;
  background: #fff;
  border: 1px solid var(--ss-bord);
  border-radius: 4px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  min-height: 24px;
  text-align: left;
}
@media (max-width: 480px) {
  math974-spreadsheet { --ss-cell-w: 64px; --ss-cell-h: 36px; font-size: 0.95em; }
  .ss-toolbar { font-size: 0.8em; }
}
`;function G(){if(document.getElementById(D))return;const v=document.createElement("style");v.id=D,v.textContent=V,document.head.appendChild(v)}function P(v,e){if(!v)return e;try{return JSON.parse(v)}catch{return e}}function C(v,e){return R(v)+(e+1)}function Z(v){return(v||"").trim()}class W extends HTMLElement{static get observedAttributes(){return["rows","cols","cells","locked","solutions","headers","mode","preset","chart"]}constructor(){super(),this._cells=new Map,this._values=new Map,this._selected=null,this._undo=[],this._activeInput=null,this._currentPhase="cellule_vide",this._mode="formula",this._zonePairs=new Map,this._zoneSolved=new Set,this._activeBadge=null,this._currentTarget=""}connectedCallback(){G(),H(),this.closest(".variant-content")?.classList.add("ss-variant"),this.closest(".q-card")?.classList.add("has-ss"),this.getAttribute("mode")==="identify-zones"&&(this._autoScaleRO={disconnect:()=>{}}),this._render(),this._wireDocLevelListeners()}attributeChangedCallback(){this.isConnected&&this._render()}validate(){if(this._mode==="identify-zones")return this._zoneSolved.size===this._zonePairs.size&&this._zonePairs.size>0;if(this._mode==="cell-click"||this._mode==="range-drag")return this._userSelectionText().toUpperCase()===(this._currentTarget||"").trim().toUpperCase();if(this._mode==="cell-name"||this._mode==="range-name"){const s=(this.querySelector(".ss-name-input")?.value||"").trim().toUpperCase(),r=(this._currentTarget||"").trim().toUpperCase();return s===r&&r!==""}const e=this._targetCells();return e.length===0?!1:e.every(t=>this._isCorrect(t))}toggleSolution(){if(this._mode==="identify-zones"){this._zonePairs.forEach((e,t)=>{const s=this.querySelector(`.ss-zone-badge[data-zone-id="${t}"]`),r=Array.from(this.querySelectorAll(".ss-vocab-pill")).find(o=>o.dataset.label===e);s?.classList.remove("ss-zone-active-sel"),s?.classList.add("ss-zone-ok"),r?.classList.add("ss-pill-used"),r&&(r.disabled=!0),this._zoneSolved.add(t)}),this._updateZoneStatus(),this._updatePhase();return}this._showSolutions=!this._showSolutions,this._renderGrid()}getCurrentPhase(){return this._currentPhase}getCurrentStudentValue(){if(this._mode==="cell-click"||this._mode==="range-drag")return this._userSelectionText();if(this._mode==="cell-name"||this._mode==="range-name")return this.querySelector(".ss-name-input")?.value||"";if(this._activeInput){const e=this._activeInput.dataset.ssRef,t=this._cells.get(e);return t?.raw?t.raw:this._activeInput.value||""}for(const e of this._targetCells()){const t=this._cells.get(e);if(t?.raw&&!this._isCorrect(e))return t.raw}return""}_displayValueForFill(e,t){if(e?.target&&e.raw&&e.raw.startsWith("=")){const s=this._values.get(t);if(s!=null&&!(typeof s=="object"&&s.error))return M(s)}return e?.raw||""}_validateCell(e){if(this._mode==="cell-name"||this._mode==="range-name"){const s=(e.value||"").trim().toUpperCase(),r=(this._currentTarget||"").trim().toUpperCase();return s===r&&r!==""}const t=e.dataset.ssRef;return t?this._isCorrect(t):!1}_readFormula(e){const t=e.dataset.ssRef;return t&&this._cells.get(t)?.raw||""}_readAttrs(){this._rows=Math.max(1,parseInt(this.getAttribute("rows")||"6",10)),this._cols=Math.max(1,parseInt(this.getAttribute("cols")||"5",10));const e=P(this.getAttribute("cells"),{}),t=new Set(P(this.getAttribute("locked"),[])),s=P(this.getAttribute("solutions"),{}),r=P(this.getAttribute("headers"),null);this._declaredMode=this.getAttribute("mode")||"formula",this._mode=this._declaredMode,this._preset=P(this.getAttribute("preset"),null),this._chart=P(this.getAttribute("chart"),null);const o=/^(.+?)(?:\[([rcl])\])?$/,l=/^([A-Z]+\d+)$/,n=/^([A-Z]+)(\d+):([A-Z]+)(\d+)$/;this._cells.clear();for(const[a,d]of Object.entries(e)){const f=o.exec(a),u=f?f[1]:a,b=f?f[2]:null,m=d==null?"":String(d),p=n.exec(u);if(p){const S=I(p[1]),y=I(p[3]),k=parseInt(p[2],10)-1,z=parseInt(p[4],10)-1;for(let _=k;_<=z;_++)for(let w=S;w<=y;w++){const E=C(w,_),T={raw:m,locked:t.has(E),align:b};this._parseIntoCell(T),this._cells.set(E,T)}continue}const h=l.exec(u),x=h?h[1]:u,g={raw:m,locked:t.has(x),align:b};this._parseIntoCell(g),this._cells.set(x,g)}for(const a of t)this._cells.has(a)||this._cells.set(a,{raw:"",locked:!0});const i=/^([A-Z]+)(\d+):([A-Z]+)(\d+)$/,c=(a,d,f)=>({formula:a,mode:f.mode||"formula",alt:Array.isArray(f.alt)?f.alt:[],fillOnly:d,maxDollars:typeof f.maxDollars=="number"?f.maxDollars:null});for(const[a,d]of Object.entries(s)){const f=i.exec(a);if(f){const b=d.formula||d,m=L(b);if(!m||m.error){console.warn("[spreadsheet] solutions range : formule invalide",b);continue}const p=I(f[1]),h=I(f[3]),x=parseInt(f[2],10)-1,g=parseInt(f[4],10)-1;for(let S=x;S<=g;S++)for(let y=p;y<=h;y++){const k=C(y,S),z=y===p&&S===x,_=z?b:N(F(m,y-p,S-x));let w=this._cells.get(k);w||(w={raw:"",locked:!1},this._cells.set(k,w)),w.target=!0,w.sol=c(_,!z,d)}continue}let u=this._cells.get(a);u||(u={raw:"",locked:!1},this._cells.set(a,u)),u.target=!0,u.sol=c(d.formula||d,!!d.fillOnly,d)}this._headers=r}_parseIntoCell(e){delete e.ast,delete e.parseError;const t=e.raw;if(typeof t=="string"&&t.trim().startsWith("=")){const s=L(t);s.error?e.parseError=s.error:e.ast=s}}_getCellValue(e,t){const s=C(e,t);this._values.has(s)||this._evaluateCell(s,new Set);const r=this._values.get(s);return r&&typeof r=="object"&&r.error?NaN:r}_evaluateCell(e,t){const s=this._cells.get(e);if(!s){this._values.set(e,"");return}if(s.ast){if(t.has(e)){this._values.set(e,{error:"#CYCLE!"});return}t.add(e);const r={getCell:(o,l)=>{const n=C(o,l);if(t.has(n))throw new U;this._values.has(n)||this._evaluateCell(n,t);const i=this._values.get(n);if(i&&typeof i=="object"&&i.error)throw new U(i.error);return i===void 0?"":i}};try{const o=B(s.ast,r);this._values.set(e,o)}catch(o){this._values.set(e,{error:o.code||"#CYCLE!"})}t.delete(e)}else{const r=s.raw;if(r===""||r==null){this._values.set(e,"");return}const o=parseFloat(String(r).replace(",","."));!isNaN(o)&&String(o)===String(r).replace(",",".").replace(/^\+/,"")?this._values.set(e,o):!isNaN(o)&&/^-?\d+([.,]\d+)?$/.test(String(r).trim())?this._values.set(e,o):this._values.set(e,String(r))}}_recompute(){this._values.clear();for(const e of this._cells.keys())this._values.has(e)||this._evaluateCell(e,new Set)}_render(){this._readAttrs(),this._pickTarget(),this.innerHTML="",this.setAttribute("data-mode",this._mode),this._recompute(),this._buildDom(),this._mode==="identify-zones"?(this._applyPresetSelections(),this._buildIdentifyZones()):this._mode==="cell-name"||this._mode==="range-name"?(this._applyTargetPreset(),this._buildNamingPanel()):(this._mode==="cell-click"||this._mode==="range-drag")&&this._buildClickInstruction(),this._updatePhase(),q(()=>import("./rapido-engine.DtUXv9Et.js").then(e=>e.h),__vite__mapDeps([0,1,2])).then(e=>e.wireCardInputs?.(this.closest(".q-card")))}_pickTarget(){const e=Array.isArray(this._preset?.targets)?this._preset.targets:null;e&&e.length>0?this._currentTarget=e[Math.floor(Math.random()*e.length)]:this._currentTarget=(this._preset?.target||"").trim(),this._declaredMode==="cell"?this._mode=Math.random()<.5?"cell-click":"cell-name":this._declaredMode==="range"&&(this._mode=Math.random()<.5?"range-drag":"range-name")}randomize(){this._render()}_applyTargetPreset(){if(!this._tbody||this._preset?.noHighlight)return;const e=this._currentTarget;if(e)if(e.includes(":")){const[t,s]=e.split(":"),r=A(t),o=A(s);if(!r||!o)return;const l=Math.min(r.col,o.col),n=Math.max(r.col,o.col),i=Math.min(r.row,o.row),c=Math.max(r.row,o.row);for(let a=i;a<=c;a++)for(let d=l;d<=n;d++)this._cellElement(d,a)?.classList.add("ss-user-sel")}else{const t=A(e);if(!t)return;this._cellElement(t.col,t.row)?.classList.add("ss-user-sel","ss-user-sel-anchor")}}_buildNamingPanel(){const e=this._currentTarget,t=this._mode==="range-name",s=!!this._preset?.noHighlight,r=document.createElement("div");r.className="ss-vocab-panel";const o=t?"ex. B2:D4":"ex. C5",l=s?`<div class="ss-vocab-panel-title">${this._buildTargetDescription(e,t)}</div>`:"";r.innerHTML=`
      ${l}
      <input class="rapido-input ss-name-input" type="text"
             data-solution-type="spreadsheet-formula"
             data-solution="${e}"
             data-ss-ref="__name__"
             placeholder="${o}"
             autocomplete="off" spellcheck="false" />
    `,this.appendChild(r)}_buildTargetDescription(e,t){if(!e)return"";if(t){const[r,o]=e.split(":"),l=A(r),n=A(o);if(!l||!n)return`→ Plage : ${e}`;const i=Math.min(l.col,n.col),c=Math.max(l.col,n.col),a=Math.min(l.row,n.row),d=Math.max(l.row,n.row);return`→ Plage du coin <strong>colonne ${R(i)}, ligne ${a+1}</strong> jusqu'au coin <strong>colonne ${R(c)}, ligne ${d+1}</strong>.`}const s=A(e);return s?`→ Colonne <strong>${R(s.col)}</strong>, ligne <strong>${s.row+1}</strong>.`:`→ Cellule : ${e}`}_buildClickInstruction(){const e=this._currentTarget,t=document.createElement("div");t.className="ss-vocab-panel",t.innerHTML=`
      <div class="ss-vocab-panel-title">→ Cible : <strong>${e}</strong></div>
      <div class="ss-vocab-status">${this._userSelectionText()||"(aucune sélection)"}</div>
    `,this.appendChild(t),this._userSelTarget=e,this._wireUserDragSelect()}_userSelectionText(){const e=this._userSelection;if(!e)return"";const t=C(e.c1,e.r1),s=C(e.c2,e.r2);return t===s?t:t+":"+s}_refreshClickStatus(){const e=this.querySelector(".ss-vocab-panel .ss-vocab-status");if(!e)return;const t=this._userSelectionText()||"(aucune sélection)",s=(this._currentTarget||"").trim().toUpperCase(),r=t.toUpperCase();s&&r===s?(e.textContent="✓ "+t,e.classList.add("ss-status-done")):(e.textContent=t,e.classList.remove("ss-status-done"))}_setUserSelection(e,t,s,r){this._clearUserSelection();const o=Math.min(e,s),l=Math.max(e,s),n=Math.min(t,r),i=Math.max(t,r);this._userSelection={c1:o,r1:n,c2:l,r2:i};for(let c=n;c<=i;c++)for(let a=o;a<=l;a++)this._cellElement(a,c)?.classList.add("ss-user-sel");this._cellElement(e,t)?.classList.add("ss-user-sel-anchor"),this._refreshClickStatus(),this._updatePhase()}_clearUserSelection(){this._tbody&&(this._tbody.querySelectorAll(".ss-user-sel, .ss-user-sel-anchor").forEach(e=>e.classList.remove("ss-user-sel","ss-user-sel-anchor")),this._userSelection=null)}_wireUserDragSelect(){!this._tbody||this._userDragWired||(this._userDragWired=!0,this._tbody.addEventListener("pointerdown",e=>{if(this._mode!=="cell-click"&&this._mode!=="range-drag")return;const t=e.target.closest(".ss-cell");if(!t)return;e.preventDefault();const s=parseInt(t.dataset.col,10),r=parseInt(t.dataset.row,10);this._setUserSelection(s,r,s,r);const o=(i,c)=>{const d=document.elementFromPoint(i,c)?.closest?.(".ss-cell");return d&&this._tbody.contains(d)?d:null},l=i=>{const c=o(i.clientX,i.clientY);if(!c)return;const a=parseInt(c.dataset.col,10),d=parseInt(c.dataset.row,10);this._mode!=="cell-click"&&this._setUserSelection(s,r,a,d)},n=i=>{document.removeEventListener("pointermove",l),this._fireSelectionFeedback()};document.addEventListener("pointermove",l),document.addEventListener("pointerup",n,{once:!0})}))}_fireSelectionFeedback(){const e=this.validate(),t=this._userSelection;if(!t)return;const s=this._cellElement(t.c1,t.r1);s&&(q(()=>import("./rapido-engine.DtUXv9Et.js").then(r=>r.f),__vite__mapDeps([0,1,2])).then(r=>r.popSlogan?.(s,e)),e&&q(()=>import("./vis-input.CjKH7sZr.js"),__vite__mapDeps([3,2,0,1])).then(r=>r.fireConfettiOnce?.(this)))}_applyPresetSelections(){if(!this._tbody)return;const e=this._preset||{active:"C3",range:["D2","E2","D3","E3","D4","E4"],multi:["A6","C6"]};if(e.active){const t=this._tbody.querySelector(`.ss-cell[data-ref="${e.active}"]`);if(t&&(t.classList.add("ss-zone-active"),!t.querySelector(".ss-drag-handle"))){const s=document.createElement("span");s.className="ss-drag-handle",t.appendChild(s)}}(e.range||[]).forEach(t=>{this._tbody.querySelector(`.ss-cell[data-ref="${t}"]`)?.classList.add("ss-zone-range")}),(e.multi||[]).forEach(t=>{this._tbody.querySelector(`.ss-cell[data-ref="${t}"]`)?.classList.add("ss-zone-multi")})}_buildIdentifyZones(){const e=this.querySelector(".ss-wrap");if(!e)return;const t=this._preset?.active;if(t){const h=e.querySelector(".ss-cell-label");h&&(h.textContent=t);const x=e.querySelector(".ss-formula-bar"),g=this._cells.get(t);x&&g&&g.raw!=null&&g.raw!==""&&(x.textContent=String(g.raw))}const s=e.querySelector(".ss-grid"),r=s?.querySelector("thead tr > th:nth-child(4)"),o=s?.querySelector("tbody tr:nth-child(3) > th"),l=s?.querySelector('.ss-cell[data-ref="B5"]');s?.querySelector(".ss-cell.ss-zone-range");const n=s?.querySelector(".ss-cell.ss-zone-multi"),i=s?.querySelector(".ss-cell.ss-zone-active"),c=s?.querySelector(".ss-drag-handle"),a=[{id:"toolbar",label:"Barre d'outils",anchor:e.querySelector(".ss-toolbar-fmt")},{id:"cell-address",label:"Adresse de la cellule",anchor:e.querySelector(".ss-cell-label")},{id:"formula-bar",label:"Barre de formule",anchor:e.querySelector(".ss-formula-bar")},{id:"col-header",label:"En-tête de colonne",anchor:r},{id:"row-header",label:"En-tête de ligne",anchor:o},{id:"cell",label:"Cellule",anchor:l},{id:"multi",label:"Cellules sélectionnées",anchor:n},{id:"active-cell",label:"Cellule active",anchor:i},{id:"drag-handle",label:"Poignée de recopie",anchor:c},{id:"sheet",label:"Feuille de calcul",anchor:s}].filter(h=>h.anchor);j(a),a.length=Math.min(4,a.length),this._zonePairs=new Map(a.map(h=>[h.id,h.label])),this._zoneSolved=new Set,this._activeBadge=null;const d=document.createElement("div");d.className="ss-zone-overlay-layer",d.style.cssText="position:absolute; top:0; left:0; right:0; bottom:0; pointer-events:none;",e.appendChild(d),a.forEach((h,x)=>{const g=document.createElement("button");g.type="button",g.className="ss-zone-badge",g.dataset.zoneId=h.id,g.textContent=String(x+1),g.title="Clique pour identifier cette zone",g.addEventListener("click",()=>this._onBadgeClick(g)),d.appendChild(g),this._positionBadge(g,h.anchor,e)});const f=document.createElement("div");f.className="ss-vocab-panel",f.innerHTML=`
      <div class="ss-vocab-pills"></div>
      <div class="ss-vocab-status">${this._zoneSolved.size} / ${this._zonePairs.size}</div>
    `;const u=f.querySelector(".ss-vocab-pills"),b=a.map(h=>h.label);j(b),b.forEach(h=>{const x=document.createElement("button");x.type="button",x.className="ss-vocab-pill",x.textContent=h,x.dataset.label=h,x.addEventListener("click",()=>this._onPillClick(x)),u.appendChild(x)});const m=document.createElement("div");m.className="ss-host-flex",m.appendChild(e),m.appendChild(f),this.appendChild(m),this._autoScaleRO?.unobserve&&this._autoScaleRO.disconnect(),this._autoScaleRO={disconnect:()=>{}},this.style.transform="none",this.style.width="100%",this.style.height="100%",this.style.display="block";const p=this.parentElement;if(p&&(p.style.height="100%",p.style.width="100%",p.style.alignItems=""),!this._zoneResizeWired){this._zoneResizeWired=!0;const h=new ResizeObserver(()=>this._repositionZoneBadges());h.observe(e),this._zoneRO=h}}_positionBadge(e,t,s){if(!t||!s)return;const r=t.getBoundingClientRect(),o=s.getBoundingClientRect(),l=e.dataset.zoneId,n=l==="active-cell"||l==="cell-address",i=r.top-o.top+s.scrollTop+(n?r.height:r.height/2),c=r.left-o.left+s.scrollLeft+r.width/2;e.style.top=i+"px",e.style.left=c+"px",e.style.transform=l==="drag-handle"?"translate(-100%, -100%)":n?"translate(-50%, 0)":"translate(-50%, -50%)"}_repositionZoneBadges(){const e=this.querySelector(".ss-wrap");e&&e.querySelectorAll(".ss-zone-badge").forEach(t=>{const s=t.dataset.zoneId,r=this._findZoneAnchor(s);r&&this._positionBadge(t,r,e)})}_findZoneAnchor(e){const t=this.querySelector(".ss-wrap");if(!t)return null;const s=t.querySelector(".ss-grid");switch(e){case"toolbar":return t.querySelector(".ss-toolbar-fmt");case"cell-address":return t.querySelector(".ss-cell-label");case"formula-bar":return t.querySelector(".ss-formula-bar");case"col-header":return s?.querySelector("thead tr > th:nth-child(4)");case"row-header":return s?.querySelector("tbody tr:nth-child(3) > th");case"cell":return s?.querySelector('.ss-cell[data-ref="B5"]');case"range":return s?.querySelector(".ss-cell.ss-zone-range");case"multi":return s?.querySelector(".ss-cell.ss-zone-multi");case"active-cell":return s?.querySelector(".ss-cell.ss-zone-active");case"drag-handle":return s?.querySelector(".ss-drag-handle");case"sheet":return s;default:return null}}_onBadgeClick(e){e.classList.contains("ss-zone-ok")||(this.querySelectorAll(".ss-zone-badge.ss-zone-active-sel").forEach(t=>t.classList.remove("ss-zone-active-sel")),e.classList.add("ss-zone-active-sel"),this._activeBadge=e)}_onPillClick(e){if(e.classList.contains("ss-pill-used"))return;if(!this._activeBadge){const o=this.querySelector(".ss-vocab-panel-title");o&&(o.style.color="#dc2626",setTimeout(()=>{o.style.color=""},600));return}const t=this._activeBadge.dataset.zoneId,s=this._zonePairs.get(t),r=e.dataset.label===s;if(q(()=>import("./rapido-engine.DtUXv9Et.js").then(o=>o.f),__vite__mapDeps([0,1,2])).then(o=>o.popSlogan?.(e,r)),r)this._activeBadge.classList.remove("ss-zone-active-sel"),this._activeBadge.classList.add("ss-zone-ok"),e.classList.add("ss-pill-used"),e.disabled=!0,this._zoneSolved.add(t),this._activeBadge=null,this._updateZoneStatus(),this._updatePhase(),this._zoneSolved.size===this._zonePairs.size&&q(()=>import("./vis-input.CjKH7sZr.js"),__vite__mapDeps([3,2,0,1])).then(o=>o.fireConfettiOnce?.(this));else{this._activeBadge.classList.add("ss-zone-ko");const o=this._activeBadge;setTimeout(()=>o.classList.remove("ss-zone-ko","ss-zone-active-sel"),400),this._activeBadge=null}}_updateZoneStatus(){const e=this.querySelector(".ss-vocab-status");if(!e)return;const t=this._zoneSolved.size,s=this._zonePairs.size;e.textContent=t+" / "+s,e.classList.toggle("ss-status-done",t===s),t===s&&(e.textContent="✓ "+t+" / "+s+"  —  Bravo !")}_buildDom(){const e=document.createElement("div");e.className="ss-wrap";const t=document.createElement("div");t.className="ss-toolbar";const s=document.createElement("div");s.className="ss-toolbar-row ss-toolbar-fmt",[{fmt:"bold",label:"B",title:"Gras"},{fmt:"italic",label:"I",title:"Italique"},{fmt:"underline",label:"U",title:"Souligné"},{fmt:"color",label:"A",title:"Couleur du texte"},{fmt:"sep",label:"",title:""},{fmt:"align-left",label:"⬅",title:"Aligner à gauche"},{fmt:"align-center",label:"⬛",title:"Centrer"},{fmt:"align-right",label:"➡",title:"Aligner à droite"}].forEach(({fmt:u,label:b,title:m})=>{if(u==="sep"){const h=document.createElement("span");h.className="ss-tb-fmt ss-tb-sep",s.appendChild(h);return}const p=document.createElement("button");p.type="button",p.className="ss-tb-fmt",p.dataset.fmt=u,p.textContent=b,p.title=m,p.setAttribute("aria-label",m),s.appendChild(p)}),t.appendChild(s);const o=document.createElement("div");o.className="ss-toolbar-row";const l=document.createElement("span");l.className="ss-cell-label",l.textContent="—",l.title="Adresse de la cellule",o.appendChild(l);const n=document.createElement("div");n.className="ss-formula-bar",n.textContent="",n.title="Barre de formule",o.appendChild(n);const i=document.createElement("button");i.type="button",i.textContent="↺",i.title="Annuler",i.addEventListener("click",()=>this._undoLast()),o.appendChild(i),t.appendChild(o),e.appendChild(t);const c=document.createElement("table");c.className="ss-grid";const a=document.createElement("thead"),d=document.createElement("tr");d.appendChild(document.createElement("th"));for(let u=0;u<this._cols;u++){const b=document.createElement("th");b.textContent=this._headers?.col?.[u]??R(u),d.appendChild(b)}a.appendChild(d),c.appendChild(a);const f=document.createElement("tbody");for(let u=0;u<this._rows;u++){const b=document.createElement("tr"),m=document.createElement("th");m.textContent=this._headers?.row?.[u]??String(u+1),b.appendChild(m);for(let p=0;p<this._cols;p++){const h=document.createElement("td");h.className="ss-cell",h.dataset.col=String(p),h.dataset.row=String(u),h.dataset.ref=C(p,u),this._paintCell(h),b.appendChild(h)}f.appendChild(b)}c.appendChild(f),e.appendChild(c),this.appendChild(e),this._tbody=f,this._fxBar=n,this._cellLabel=l,this._wireGridEvents(f)}_renderGrid(){this._tbody&&(this._recompute(),this._tbody.querySelectorAll(".ss-cell").forEach(e=>this._paintCell(e)),this._updatePhase(),this._renderChart())}_renderChart(){if(!this._chart)return;const e=this.querySelector(".ss-wrap");if(!e)return;let t=e.querySelector(".ss-chart");t||(t=document.createElement("div"),t.className="ss-chart",e.querySelector(".ss-grid")?.after(t)||e.appendChild(t));const s=this._refsInRangeStr(this._chart.xs),r=this._refsInRangeStr(this._chart.ys);if(!s.length||!r.length){t.innerHTML="";return}const o=s.map(_=>this._values.get(_)).filter(_=>typeof _=="number");if(!o.length){t.innerHTML="";return}const l=Math.min(...o),n=Math.max(...o),i=[];for(let _=0;_<Math.min(s.length,r.length);_++){const w=this._values.get(s[_]),E=this._values.get(r[_]);typeof w=="number"&&typeof E=="number"&&i.push([w,E])}let c=-1,a=1;if(i.length){c=Math.min(...i.map(w=>w[1])),a=Math.max(...i.map(w=>w[1])),c===a&&(c-=1,a+=1);const _=(a-c)*.15;c-=_,a+=_}const d=400,f=180,u={top:12,right:14,bottom:28,left:36},b=d-u.left-u.right,m=f-u.top-u.bottom,p=_=>u.left+(_-l)/(n-l||1)*b,h=_=>u.top+(1-(_-c)/(a-c||1))*m,x=4,g=Math.min(5,n-l),S=Array.from({length:x+1},(_,w)=>c+(a-c)*w/x),y=Array.from({length:g+1},(_,w)=>l+(n-l)*w/g),k=c<=0&&a>=0,z=[`<svg viewBox="0 0 ${d} ${f}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">`,S.map(_=>`<line x1="${u.left}" y1="${h(_)}" x2="${d-u.right}" y2="${h(_)}" stroke="#e2e8f0" stroke-width="0.5"/>`).join(""),`<line x1="${u.left}" y1="${u.top}" x2="${u.left}" y2="${f-u.bottom}" stroke="#475569" stroke-width="1"/>`,`<line x1="${u.left}" y1="${k?h(0):f-u.bottom}" x2="${d-u.right}" y2="${k?h(0):f-u.bottom}" stroke="#475569" stroke-width="1"/>`,S.map(_=>`<g><line x1="${u.left-3}" y1="${h(_)}" x2="${u.left}" y2="${h(_)}" stroke="#475569" stroke-width="1"/><text x="${u.left-5}" y="${h(_)+3}" text-anchor="end" font-size="10" fill="#475569">${M(Math.round(_*10)/10)}</text></g>`).join(""),y.map(_=>`<g><line x1="${p(_)}" y1="${f-u.bottom}" x2="${p(_)}" y2="${f-u.bottom+3}" stroke="#475569" stroke-width="1"/><text x="${p(_)}" y="${f-u.bottom+14}" text-anchor="middle" font-size="10" fill="#475569">${M(Math.round(_))}</text></g>`).join(""),i.length>=2?`<polyline points="${i.map(_=>`${p(_[0])},${h(_[1])}`).join(" ")}" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-opacity="0.6"/>`:"",i.map(([_,w])=>`<circle cx="${p(_)}" cy="${h(w)}" r="3.5" fill="#2563eb" stroke="#fff" stroke-width="1.2"/>`).join(""),"</svg>"].join("");t.innerHTML=z}_refsInRangeStr(e){if(typeof e!="string")return[];const t=/^([A-Z]+)(\d+):([A-Z]+)(\d+)$/.exec(e.trim());if(!t)return[];const s=I(t[1]),r=I(t[3]),o=parseInt(t[2],10)-1,l=parseInt(t[4],10)-1,n=[];for(let i=o;i<=l;i++)for(let c=s;c<=r;c++)n.push(C(c,i));return n}_paintCell(e){const t=e.dataset.ref,s=this._cells.get(t);if(e.classList.remove("ss-align-l","ss-align-c","ss-align-r"),s?.align&&e.classList.add("ss-align-"+s.align),s&&s.target&&!this._showSolutions){let l=e.querySelector(".ss-target-input");if(!l)e.classList.add("ss-target"),s.sol.fillOnly&&e.classList.add("ss-fill-only"),l=document.createElement("input"),l.type="text",l.className="rapido-input ss-target-input",l.dataset.solutionType="spreadsheet-formula",l.dataset.ssRef=t,l.dataset.solution=s.sol.formula,l.placeholder=s.sol.fillOnly?"":"…",l.value=this._displayValueForFill(s,t),s.sol.fillOnly&&(l.readOnly=!0,l.title="Recopie depuis la cellule du dessus (drag-fill)"),e.textContent="",e.appendChild(l),l.addEventListener("focus",()=>{e.classList.add("ss-sel"),this._activeInput=l,s.raw&&l.value!==s.raw&&(l.value=s.raw),this._updateFormulaBar(t),this._ensureHandleForRef(t),this._highlightFormulaRefs(l.value)}),l.addEventListener("input",()=>{this._highlightFormulaRefs(l.value),this._updateFormulaBar(t,l.value)}),l.addEventListener("blur",()=>{this._clearRefHighlights(),this._activeInput===l&&(this._activeInput=null),e.classList.remove("ss-sel");const n=Z(l.value);if(n!==s.raw&&(this._pushUndo(),s.raw=n,this._parseIntoCell(s),this._recompute(),this._repaintNonTargets(),this._updatePhase()),s.raw&&s.raw.startsWith("=")){const i=this._values.get(t);i!=null&&!(typeof i=="object"&&i.error)&&(l.value=M(i))}}),l.addEventListener("keydown",n=>{n.key==="Enter"?(n.preventDefault(),l.blur()):n.key==="Escape"&&(l.value=s.raw||"",l.blur())}),this._observeTargetInput(l,t);else{const n=this._displayValueForFill(s,t);document.activeElement!==l&&l.value!==n&&(l.value=n),e.classList.add("ss-target"),s.sol.fillOnly&&e.classList.add("ss-fill-only")}return}if(e.classList.remove("ss-locked","ss-target","ss-text","ss-num","ss-error"),e.querySelector(".ss-cell-input"))return;let o="";if(s){s.locked&&e.classList.add("ss-locked");const l=this._values.get(t);l&&typeof l=="object"&&l.error?(o=l.error,e.classList.add("ss-error")):typeof l=="number"?(o=M(l),e.classList.add("ss-num")):l!=null&&(o=String(l),e.classList.add("ss-text"))}e.textContent=o}_updateFormulaBar(e,t){const s=this._cells.get(e);this._cellLabel&&(this._cellLabel.textContent=e||"—"),this._fxBar&&(this._fxBar.textContent=t??s?.raw??"")}_wireGridEvents(e){e.addEventListener("click",t=>{if(this._refPickupActive)return;const s=t.target.closest(".ss-cell");s&&(t.target.classList?.contains("ss-cell-input")||this._selectCell(s))}),e.addEventListener("dblclick",t=>{const s=t.target.closest(".ss-cell");s&&this._beginEdit(s)}),e.addEventListener("keydown",t=>{if(t.key==="Enter"&&this._selected){const s=this._cellElement(this._selected.col,this._selected.row);s&&!s.querySelector(".ss-cell-input")&&(t.preventDefault(),this._beginEdit(s))}}),e.addEventListener("pointerdown",t=>{if(t.target.closest(".ss-fill-handle")&&this._selected){t.preventDefault(),this._startFill();return}const r=t.target.closest(".ss-cell");if(!r)return;const o=this._activeInput;!o||o.readOnly||this._isInRefPickupMode(o)&&(r.contains(o)||(t.preventDefault(),this._startRefPickup(r)))})}_isInRefPickupMode(e){const t=e.value||"";if(!t.startsWith("=")&&!t.startsWith("+"))return!1;const s=e.selectionStart??t.length,r=(t[s-1]||"").trim();return/[=+\-*/^(,;:<>]/.test(r)}_insertAtCursor(e,t){const s=e.value||"",r=e.selectionStart??s.length,o=e.selectionEnd??s.length,l=s.slice(0,r),n=s.slice(o);e.value=l+t+n;const i=r+t.length;e.setSelectionRange(i,i),e.dispatchEvent(new Event("input",{bubbles:!0}))}_startRefPickup(e){const t=this._activeInput;if(!t)return;const s=parseInt(e.dataset.col,10),r=parseInt(e.dataset.row,10),o=C(s,r),l=t.selectionStart??(t.value||"").length;this._insertAtCursor(t,o),this._refPickupActive=!0;const n=(d,f)=>{const b=document.elementFromPoint(d,f)?.closest?.(".ss-cell");return b&&this._tbody.contains(b)?b:null},i=(d,f)=>{const b=d===s&&f===r?o:o+":"+C(d,f),m=t.value.slice(0,l),p=t.value.slice(l+this._lastInsertedLen);t.value=m+b+p,this._lastInsertedLen=b.length;const h=l+b.length;t.setSelectionRange(h,h),t.focus(),t.dispatchEvent(new Event("input",{bubbles:!0}))};this._lastInsertedLen=o.length;const c=d=>{const f=n(d.clientX,d.clientY);if(!f)return;const u=parseInt(f.dataset.col,10),b=parseInt(f.dataset.row,10);i(u,b)},a=()=>{document.removeEventListener("pointermove",c),setTimeout(()=>{this._refPickupActive=!1},0),t.focus()};document.addEventListener("pointermove",c),document.addEventListener("pointerup",a,{once:!0})}_wireDocLevelListeners(){}_selectCell(e){if(this._selected){const r=this._cellElement(this._selected.col,this._selected.row);r?.classList.remove("ss-sel"),r?.querySelector(".ss-fill-handle")?.remove()}const t=parseInt(e.dataset.col,10),s=parseInt(e.dataset.row,10);this._selected={col:t,row:s},e.classList.add("ss-sel"),this._updateFormulaBar(e.dataset.ref),this._ensureHandleForRef(e.dataset.ref)}_ensureHandleForRef(e){const t=this._tbody?.querySelector(`.ss-cell[data-ref="${e}"]`);if(!t||t.querySelector(".ss-fill-handle")||t.querySelector(".ss-cell-input"))return;const s=this._cells.get(e);if(!s)return;let r=!!s.ast;if(!r&&typeof this._values.get(e)=="number"){const n=A(e);if(n){const i=this._values.get(C(n.col,n.row-1)),c=this._values.get(C(n.col-1,n.row));(typeof i=="number"||typeof c=="number")&&(r=!0)}}if(!r)return;const o=document.createElement("button");o.type="button",o.className="ss-fill-handle",o.title="Recopier (cliquer puis cliquer la cellule cible)",o.setAttribute("aria-label","Poignée de recopie"),t.appendChild(o)}_highlightFormulaRefs(e){if(this._clearRefHighlights(),!e)return;const t=String(e).trim();if(!t.startsWith("="))return;const s=L(t);if(s?.error)return;const r=[];$(s,r,new Map),r.forEach((l,n)=>{const i="ss-ref-hl-"+n%4;l.forEach(({col:c,row:a})=>{this._cellElement(c,a)?.classList.add(i)})})}_clearRefHighlights(){this._tbody&&this._tbody.querySelectorAll(".ss-ref-hl-0, .ss-ref-hl-1, .ss-ref-hl-2, .ss-ref-hl-3").forEach(e=>e.classList.remove("ss-ref-hl-0","ss-ref-hl-1","ss-ref-hl-2","ss-ref-hl-3"))}_repaintNonTargets(){if(this._tbody&&(this._tbody.querySelectorAll(".ss-cell").forEach(e=>{this._cells.get(e.dataset.ref)?.target&&!this._showSolutions||this._paintCell(e)}),this._selected)){const e=C(this._selected.col,this._selected.row);this._ensureHandleForRef(e)}}_cellElement(e,t){return this._tbody?.querySelector(`.ss-cell[data-col="${e}"][data-row="${t}"]`)}_beginEdit(e){const t=e.dataset.ref,s=this._cells.get(t)||{};if(s.locked)return;if(s.target){e.querySelector(".ss-cell-input, .rapido-input")?.focus();return}if(e.querySelector(".ss-cell-input"))return;const r=s.raw??"",o=document.createElement("input");o.type="text",o.className="ss-cell-input",o.value=r,e.textContent="",e.appendChild(o),o.focus(),o.select();const l=n=>{const i=n?o.value:r;if(n&&i!==r){this._pushUndo();let c=this._cells.get(t);c||(c={raw:"",locked:!1},this._cells.set(t,c)),c.raw=i,this._parseIntoCell(c),this._recompute()}this._renderGrid()};o.addEventListener("blur",()=>l(!0)),o.addEventListener("keydown",n=>{n.key==="Enter"?(n.preventDefault(),o.blur()):n.key==="Escape"&&(n.preventDefault(),l(!1))})}_startFill(){this._fillSource={...this._selected};const e=this._cellElement(this._fillSource.col,this._fillSource.row);e?.classList.add("ss-fill-source");const t=()=>{this._tbody.querySelectorAll(".ss-fill-preview").forEach(n=>n.classList.remove("ss-fill-preview"))},s=(n,i)=>{const a=document.elementFromPoint(n,i)?.closest?.(".ss-cell");return a&&this._tbody.contains(a)?a:null},r=(n,i)=>{t();const c=Math.min(this._fillSource.col,n),a=Math.max(this._fillSource.col,n),d=Math.min(this._fillSource.row,i),f=Math.max(this._fillSource.row,i);for(let u=d;u<=f;u++)for(let b=c;b<=a;b++){if(b===this._fillSource.col&&u===this._fillSource.row)continue;this._cellElement(b,u)?.classList.add("ss-fill-preview")}},o=n=>{const i=s(n.clientX,n.clientY);if(!i)return;const c=parseInt(i.dataset.col,10),a=parseInt(i.dataset.row,10);r(c,a)},l=n=>{document.removeEventListener("pointermove",o),t(),e?.classList.remove("ss-fill-source");const i=s(n.clientX,n.clientY);if(!i){this._fillSource=null;return}this._applyFill(i),this._fillSource=null};document.addEventListener("pointermove",o),document.addEventListener("pointerup",l,{once:!0})}_applyFill(e){const t=this._fillSource;if(!t)return;const s=C(t.col,t.row),r=this._cells.get(s);if(!r)return;const o=parseInt(e.dataset.col,10),l=parseInt(e.dataset.row,10);if(r.ast){const p=Math.min(t.col,o),h=Math.max(t.col,o),x=Math.min(t.row,l),g=Math.max(t.row,l);this._pushUndo();for(let S=x;S<=g;S++)for(let y=p;y<=h;y++){if(y===t.col&&S===t.row)continue;const k=C(y,S);if(this._cells.get(k)?.locked)continue;const _=F(r.ast,y-t.col,S-t.row),w=N(_);let E=this._cells.get(k);E||(E={raw:"",locked:!1},this._cells.set(k,E)),E.raw=w,this._parseIntoCell(E)}this._postFillFeedback();return}const n=this._values.get(s);if(typeof n!="number")return;const i=l-t.row,c=o-t.col,a=Math.abs(i)>=Math.abs(c);if(a&&i===0||!a&&c===0)return;const d=Math.sign(a?i:c),f=a?C(t.col,t.row-d):C(t.col-d,t.row),u=this._values.get(f);if(typeof u!="number")return;const b=n-u;this._pushUndo();let m=n;if(a)for(let p=t.row+d;d>0?p<=l:p>=l;p+=d){m+=b;const h=C(t.col,p),x=this._cells.get(h);if(x?.locked)continue;let g=x;g||(g={raw:"",locked:!1},this._cells.set(h,g)),g.raw=M(m),this._parseIntoCell(g)}else for(let p=t.col+d;d>0?p<=o:p>=o;p+=d){m+=b;const h=C(p,t.row),x=this._cells.get(h);if(x?.locked)continue;let g=x;g||(g={raw:"",locked:!1},this._cells.set(h,g)),g.raw=M(m),this._parseIntoCell(g)}this._postFillFeedback()}_postFillFeedback(){this._recompute(),this._renderGrid(),q(()=>import("./rapido-engine.DtUXv9Et.js").then(e=>e.f),__vite__mapDeps([0,1,2])).then(e=>{this._targetCells().forEach(t=>{if(!this._cells.get(t)?.raw)return;const r=this._tbody?.querySelector(`.ss-target-input[data-ss-ref="${t}"]`);if(!r)return;const o=this._isCorrect(t);e.renderFeedback?.(r,o?"correct":"incorrect")}),this.validate()&&q(()=>import("./vis-input.CjKH7sZr.js"),__vite__mapDeps([3,2,0,1])).then(t=>t.fireConfettiOnce?.(this))})}_pushUndo(){this._undo.length>=20&&this._undo.shift();const e={};for(const[t,s]of this._cells)e[t]={raw:s.raw,locked:s.locked,target:s.target,sol:s.sol};this._undo.push(e)}_undoLast(){const e=this._undo.pop();if(e){this._cells.clear();for(const[t,s]of Object.entries(e)){const r={raw:s.raw,locked:s.locked};s.target&&(r.target=!0,r.sol=s.sol),this._parseIntoCell(r),this._cells.set(t,r)}this._recompute(),this._renderGrid()}}_targetCells(){const e=[];for(const[t,s]of this._cells)s.target&&e.push(t);return e}_isCorrect(e){const t=this._cells.get(e);if(!t?.sol)return!1;const s=(t.raw||"").trim();if(s===""||t.sol.maxDollars!=null&&(s.match(/\$/g)||[]).length>t.sol.maxDollars)return!1;const r=L(t.sol.formula);if(t.sol.mode==="value"){const l=L(s.startsWith("=")?s:"="+s);if(l.error)return!1;const n=this._evaluateInContext(l),i=this._evaluateInContext(r);return typeof n=="number"&&typeof i=="number"&&Math.abs(n-i)<1e-9}const o=L(s);if(o.error)return!1;if(O(o,r))return!0;for(const l of t.sol.alt||[]){const n=L(l);if(!n.error&&O(o,n))return!0}return!1}_evaluateInContext(e){if(!e||e.error)return null;const s=B(e,{getCell:(r,o)=>{const l=C(r,o);this._values.has(l)||this._evaluateCell(l,new Set);const n=this._values.get(l);return n&&typeof n=="object"&&n.error?NaN:n===void 0?"":n}});return s&&typeof s=="object"&&s.error?null:s}_updatePhase(){if(this._mode==="identify-zones"){const l=this._zonePairs.size;if(l===0){this._currentPhase="cellule_vide";return}if(this._zoneSolved.size===l){this._currentPhase="done";return}if(this._zoneSolved.size===0){this._currentPhase="cellule_vide";return}this._currentPhase="erreur_calcul";return}if(this._mode==="cell-click"||this._mode==="range-drag"){if(!this._userSelection){this._currentPhase="cellule_vide";return}const l=this._userSelectionText().toUpperCase()===(this._currentTarget||"").trim().toUpperCase();this._currentPhase=l?"done":"erreur_calcul";return}if(this._mode==="cell-name"||this._mode==="range-name"){const n=(this.querySelector(".ss-name-input")?.value||"").trim();if(!n){this._currentPhase="cellule_vide";return}const i=(this._currentTarget||"").trim().toUpperCase();this._currentPhase=n.toUpperCase()===i?"done":"erreur_calcul";return}const e=this._targetCells();if(e.length===0){this._currentPhase="cellule_vide";return}let t=!0,s=!1,r=!1,o=!1;for(const l of e){const i=(this._cells.get(l)?.raw||"").trim();if(i===""){t=!1;continue}if(s=!0,L(i).error){o=!0,t=!1;continue}const a=this._values.get(l);a&&typeof a=="object"&&a.error&&(r=!0),this._isCorrect(l)||(t=!1)}t?this._currentPhase="done":o?this._currentPhase="formule_invalide":s?r?this._currentPhase="formule_invalide":this._currentPhase="erreur_calcul":this._currentPhase="cellule_vide"}_observeTargetInput(e,t){if(e._ssObserved)return;e._ssObserved=!0;const s=this.closest(".q-card");if(!s)return;const r=Y(()=>{s.querySelector(".am-indice-panel.open")&&s.dispatchEvent(new CustomEvent("zefor-indice-auto-refresh",{detail:{studentValue:e.value,formula:e.value,phase:this.getCurrentPhase(),targetCell:t,source:this},bubbles:!0}))},300);e.addEventListener("input",r),new MutationObserver(()=>{e.classList.contains("incorrect")&&s.dispatchEvent(new CustomEvent("zefor-indice-auto-pop",{detail:{studentValue:e.value,formula:e.value,phase:this.getCurrentPhase(),targetCell:t,source:this},bubbles:!0}))}).observe(e,{attributes:!0,attributeFilter:["class"]})}}function $(v,e,t){if(!(!v||typeof v!="object"||v.error)){if(v.type==="ref"){const s="r:"+v.col+":"+v.row;t.has(s)||(t.set(s,e.length),e.push([{col:v.col,row:v.row}]));return}if(v.type==="range"){const s=v.a,r=v.b,o=Math.min(s.col,r.col),l=Math.max(s.col,r.col),n=Math.min(s.row,r.row),i=Math.max(s.row,r.row),c="g:"+o+":"+n+":"+l+":"+i;if(!t.has(c)){t.set(c,e.length);const a=[];for(let d=n;d<=i;d++)for(let f=o;f<=l;f++)a.push({col:f,row:d});e.push(a)}return}switch(v.type){case"unary":$(v.arg,e,t);break;case"binop":$(v.left,e,t),$(v.right,e,t);break;case"fn":v.args.forEach(s=>$(s,e,t));break}}}class U extends Error{constructor(e="#CYCLE!"){super(e),this.code=e}}function j(v){for(let e=v.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[v[e],v[t]]=[v[t],v[e]]}return v}function Y(v,e){let t=null;return(...s)=>{t&&clearTimeout(t),t=setTimeout(()=>v(...s),e)}}customElements.get("math974-spreadsheet")||customElements.define("math974-spreadsheet",W);function re(v,e,t){const s=t||v||{};if(!e)return JSON.parse(JSON.stringify(s));const r=(m,p)=>{if(typeof m=="number")return m;if(Array.isArray(m))return m[Math.floor(Math.random()*m.length)];if(typeof m=="string"&&m.includes("..")){const[h,x]=m.split("..").map(Number);return Math.floor(Math.random()*(x-h+1))+h}return p},o=(m,p)=>Array.isArray(m)&&m.length?m[Math.floor(Math.random()*m.length)]:p;if(e.affine){let m=r(e.a,3);m===0&&(m=1);const p=r(e.b,-2),h=1,x=10,g=JSON.parse(JSON.stringify(s));g.cells={A1:"x",A2:"f(x)"},g.solutions={};const S=["A1","A2"];for(let y=h;y<=x;y++){const k=R(y),z=m*y+p;g.cells[k+"1"]=y,S.push(k+"1"),y<=2?(g.cells[k+"2"]=z,S.push(k+"2")):g.solutions[k+"2"]={formula:"="+z,mode:"value"}}return g.locked=S,g}let l=r(e.a,5),n=r(e.b,3);const i=o(e.op,"+");if(i==="-"&&l<n&&([l,n]=[n,l]),i==="/"){n=Math.max(1,n);const m=Math.max(1,Math.round(l/n));l=n*m}const c={"+":"la somme de a et b","-":"la différence entre a et b","*":"le produit de a par b","/":"le quotient de a par b"},a=s.targetCell||"C2",d={...s.cells||{}};d.A2=l,d.B2=n;const f=`=A2${i}B2`,u=i==="+"||i==="*"?[`=B2${i}A2`]:[],b=JSON.parse(JSON.stringify(s));return b.cells=d,b.op={symbol:i,label:c[i]||i},b.solutions={[a]:{formula:f,alt:u}},b}export{se as autoScale,te as defaultPosition,re as randomize};
