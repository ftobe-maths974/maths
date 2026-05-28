const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/rapido-engine.DDFM3BwT.js","_astro/rapidos-visuals-integration.BQrfBOus.js","_astro/editor.CJZspgfY.js","_astro/vis-input.CJzXqr-e.js"])))=>i.map(i=>d[i]);
import{_ as q}from"./editor.CJZspgfY.js";import{ensureSharedStyles as H}from"./vis-input.CJzXqr-e.js";import{formatValue as I,colToIdx as T,parseFormula as z,stringify as N,shiftRefs as F,evaluate as O,parseRef as A,idxToCol as P,astEqual as D}from"./formula-parser.CuBpGvtX.js";import"./rapido-engine.DDFM3BwT.js";import"./rapidos-visuals-integration.BQrfBOus.js";const te="east",se=!0,$="math974-spreadsheet-css",V=`
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
`;function G(){if(document.getElementById($))return;const _=document.createElement("style");_.id=$,_.textContent=V,document.head.appendChild(_)}function M(_,e){if(!_)return e;try{return JSON.parse(_)}catch{return e}}function w(_,e){return P(_)+(e+1)}function Z(_){return(_||"").trim()}class W extends HTMLElement{static get observedAttributes(){return["rows","cols","cells","locked","solutions","headers","mode","preset"]}constructor(){super(),this._cells=new Map,this._values=new Map,this._selected=null,this._undo=[],this._activeInput=null,this._currentPhase="cellule_vide",this._mode="formula",this._zonePairs=new Map,this._zoneSolved=new Set,this._activeBadge=null,this._currentTarget=""}connectedCallback(){G(),H(),this.closest(".variant-content")?.classList.add("ss-variant"),this.closest(".q-card")?.classList.add("has-ss"),this.getAttribute("mode")==="identify-zones"&&(this._autoScaleRO={disconnect:()=>{}}),this._render(),this._wireDocLevelListeners()}attributeChangedCallback(){this.isConnected&&this._render()}validate(){if(this._mode==="identify-zones")return this._zoneSolved.size===this._zonePairs.size&&this._zonePairs.size>0;if(this._mode==="cell-click"||this._mode==="range-drag")return this._userSelectionText().toUpperCase()===(this._currentTarget||"").trim().toUpperCase();if(this._mode==="cell-name"||this._mode==="range-name"){const s=(this.querySelector(".ss-name-input")?.value||"").trim().toUpperCase(),r=(this._currentTarget||"").trim().toUpperCase();return s===r&&r!==""}const e=this._targetCells();return e.length===0?!1:e.every(t=>this._isCorrect(t))}toggleSolution(){if(this._mode==="identify-zones"){this._zonePairs.forEach((e,t)=>{const s=this.querySelector(`.ss-zone-badge[data-zone-id="${t}"]`),r=Array.from(this.querySelectorAll(".ss-vocab-pill")).find(n=>n.dataset.label===e);s?.classList.remove("ss-zone-active-sel"),s?.classList.add("ss-zone-ok"),r?.classList.add("ss-pill-used"),r&&(r.disabled=!0),this._zoneSolved.add(t)}),this._updateZoneStatus(),this._updatePhase();return}this._showSolutions=!this._showSolutions,this._renderGrid()}getCurrentPhase(){return this._currentPhase}getCurrentStudentValue(){if(this._mode==="cell-click"||this._mode==="range-drag")return this._userSelectionText();if(this._mode==="cell-name"||this._mode==="range-name")return this.querySelector(".ss-name-input")?.value||"";if(this._activeInput){const e=this._activeInput.dataset.ssRef,t=this._cells.get(e);return t?.raw?t.raw:this._activeInput.value||""}for(const e of this._targetCells()){const t=this._cells.get(e);if(t?.raw&&!this._isCorrect(e))return t.raw}return""}_displayValueForFill(e,t){if(e?.target&&e.raw&&e.raw.startsWith("=")){const s=this._values.get(t);if(s!=null&&!(typeof s=="object"&&s.error))return I(s)}return e?.raw||""}_validateCell(e){if(this._mode==="cell-name"||this._mode==="range-name"){const s=(e.value||"").trim().toUpperCase(),r=(this._currentTarget||"").trim().toUpperCase();return s===r&&r!==""}const t=e.dataset.ssRef;return t?this._isCorrect(t):!1}_readFormula(e){const t=e.dataset.ssRef;return t&&this._cells.get(t)?.raw||""}_readAttrs(){this._rows=Math.max(1,parseInt(this.getAttribute("rows")||"6",10)),this._cols=Math.max(1,parseInt(this.getAttribute("cols")||"5",10));const e=M(this.getAttribute("cells"),{}),t=new Set(M(this.getAttribute("locked"),[])),s=M(this.getAttribute("solutions"),{}),r=M(this.getAttribute("headers"),null);this._declaredMode=this.getAttribute("mode")||"formula",this._mode=this._declaredMode,this._preset=M(this.getAttribute("preset"),null);const n=/^(.+?)(?:\[([rcl])\])?$/,l=/^([A-Z]+\d+)$/,o=/^([A-Z]+)(\d+):([A-Z]+)(\d+)$/;this._cells.clear();for(const[i,c]of Object.entries(e)){const f=n.exec(i),b=f?f[1]:i,m=f?f[2]:null,p=c==null?"":String(c),h=o.exec(b);if(h){const y=T(h[1]),x=T(h[3]),S=parseInt(h[2],10)-1,E=parseInt(h[4],10)-1;for(let L=S;L<=E;L++)for(let C=y;C<=x;C++){const k=w(C,L),B={raw:p,locked:t.has(k),align:m};this._parseIntoCell(B),this._cells.set(k,B)}continue}const d=l.exec(b),v=d?d[1]:b,g={raw:p,locked:t.has(v),align:m};this._parseIntoCell(g),this._cells.set(v,g)}for(const i of t)this._cells.has(i)||this._cells.set(i,{raw:"",locked:!0});const a=/^([A-Z]+)(\d+):([A-Z]+)(\d+)$/,u=(i,c,f)=>({formula:i,mode:f.mode||"formula",alt:Array.isArray(f.alt)?f.alt:[],fillOnly:c,maxDollars:typeof f.maxDollars=="number"?f.maxDollars:null});for(const[i,c]of Object.entries(s)){const f=a.exec(i);if(f){const m=c.formula||c,p=z(m);if(!p||p.error){console.warn("[spreadsheet] solutions range : formule invalide",m);continue}const h=T(f[1]),d=T(f[3]),v=parseInt(f[2],10)-1,g=parseInt(f[4],10)-1;for(let y=v;y<=g;y++)for(let x=h;x<=d;x++){const S=w(x,y),E=x===h&&y===v,L=E?m:N(F(p,x-h,y-v));let C=this._cells.get(S);C||(C={raw:"",locked:!1},this._cells.set(S,C)),C.target=!0,C.sol=u(L,!E,c)}continue}let b=this._cells.get(i);b||(b={raw:"",locked:!1},this._cells.set(i,b)),b.target=!0,b.sol=u(c.formula||c,!!c.fillOnly,c)}this._headers=r}_parseIntoCell(e){delete e.ast,delete e.parseError;const t=e.raw;if(typeof t=="string"&&t.trim().startsWith("=")){const s=z(t);s.error?e.parseError=s.error:e.ast=s}}_getCellValue(e,t){const s=w(e,t);this._values.has(s)||this._evaluateCell(s,new Set);const r=this._values.get(s);return r&&typeof r=="object"&&r.error?NaN:r}_evaluateCell(e,t){const s=this._cells.get(e);if(!s){this._values.set(e,"");return}if(s.ast){if(t.has(e)){this._values.set(e,{error:"#CYCLE!"});return}t.add(e);const r={getCell:(n,l)=>{const o=w(n,l);if(t.has(o))throw new U;this._values.has(o)||this._evaluateCell(o,t);const a=this._values.get(o);if(a&&typeof a=="object"&&a.error)throw new U(a.error);return a===void 0?"":a}};try{const n=O(s.ast,r);this._values.set(e,n)}catch(n){this._values.set(e,{error:n.code||"#CYCLE!"})}t.delete(e)}else{const r=s.raw;if(r===""||r==null){this._values.set(e,"");return}const n=parseFloat(String(r).replace(",","."));!isNaN(n)&&String(n)===String(r).replace(",",".").replace(/^\+/,"")?this._values.set(e,n):!isNaN(n)&&/^-?\d+([.,]\d+)?$/.test(String(r).trim())?this._values.set(e,n):this._values.set(e,String(r))}}_recompute(){this._values.clear();for(const e of this._cells.keys())this._values.has(e)||this._evaluateCell(e,new Set)}_render(){this._readAttrs(),this._pickTarget(),this.innerHTML="",this.setAttribute("data-mode",this._mode),this._recompute(),this._buildDom(),this._mode==="identify-zones"?(this._applyPresetSelections(),this._buildIdentifyZones()):this._mode==="cell-name"||this._mode==="range-name"?(this._applyTargetPreset(),this._buildNamingPanel()):(this._mode==="cell-click"||this._mode==="range-drag")&&this._buildClickInstruction(),this._updatePhase(),q(()=>import("./rapido-engine.DDFM3BwT.js").then(e=>e.h),__vite__mapDeps([0,1,2])).then(e=>e.wireCardInputs?.(this.closest(".q-card")))}_pickTarget(){const e=Array.isArray(this._preset?.targets)?this._preset.targets:null;e&&e.length>0?this._currentTarget=e[Math.floor(Math.random()*e.length)]:this._currentTarget=(this._preset?.target||"").trim(),this._declaredMode==="cell"?this._mode=Math.random()<.5?"cell-click":"cell-name":this._declaredMode==="range"&&(this._mode=Math.random()<.5?"range-drag":"range-name")}randomize(){this._render()}_applyTargetPreset(){if(!this._tbody||this._preset?.noHighlight)return;const e=this._currentTarget;if(e)if(e.includes(":")){const[t,s]=e.split(":"),r=A(t),n=A(s);if(!r||!n)return;const l=Math.min(r.col,n.col),o=Math.max(r.col,n.col),a=Math.min(r.row,n.row),u=Math.max(r.row,n.row);for(let i=a;i<=u;i++)for(let c=l;c<=o;c++)this._cellElement(c,i)?.classList.add("ss-user-sel")}else{const t=A(e);if(!t)return;this._cellElement(t.col,t.row)?.classList.add("ss-user-sel","ss-user-sel-anchor")}}_buildNamingPanel(){const e=this._currentTarget,t=this._mode==="range-name",s=!!this._preset?.noHighlight,r=document.createElement("div");r.className="ss-vocab-panel";const n=t?"ex. B2:D4":"ex. C5",l=s?`<div class="ss-vocab-panel-title">${this._buildTargetDescription(e,t)}</div>`:"";r.innerHTML=`
      ${l}
      <input class="rapido-input ss-name-input" type="text"
             data-solution-type="spreadsheet-formula"
             data-solution="${e}"
             data-ss-ref="__name__"
             placeholder="${n}"
             autocomplete="off" spellcheck="false" />
    `,this.appendChild(r)}_buildTargetDescription(e,t){if(!e)return"";if(t){const[r,n]=e.split(":"),l=A(r),o=A(n);if(!l||!o)return`→ Plage : ${e}`;const a=Math.min(l.col,o.col),u=Math.max(l.col,o.col),i=Math.min(l.row,o.row),c=Math.max(l.row,o.row);return`→ Plage du coin <strong>colonne ${P(a)}, ligne ${i+1}</strong> jusqu'au coin <strong>colonne ${P(u)}, ligne ${c+1}</strong>.`}const s=A(e);return s?`→ Colonne <strong>${P(s.col)}</strong>, ligne <strong>${s.row+1}</strong>.`:`→ Cellule : ${e}`}_buildClickInstruction(){const e=this._currentTarget,t=document.createElement("div");t.className="ss-vocab-panel",t.innerHTML=`
      <div class="ss-vocab-panel-title">→ Cible : <strong>${e}</strong></div>
      <div class="ss-vocab-status">${this._userSelectionText()||"(aucune sélection)"}</div>
    `,this.appendChild(t),this._userSelTarget=e,this._wireUserDragSelect()}_userSelectionText(){const e=this._userSelection;if(!e)return"";const t=w(e.c1,e.r1),s=w(e.c2,e.r2);return t===s?t:t+":"+s}_refreshClickStatus(){const e=this.querySelector(".ss-vocab-panel .ss-vocab-status");if(!e)return;const t=this._userSelectionText()||"(aucune sélection)",s=(this._currentTarget||"").trim().toUpperCase(),r=t.toUpperCase();s&&r===s?(e.textContent="✓ "+t,e.classList.add("ss-status-done")):(e.textContent=t,e.classList.remove("ss-status-done"))}_setUserSelection(e,t,s,r){this._clearUserSelection();const n=Math.min(e,s),l=Math.max(e,s),o=Math.min(t,r),a=Math.max(t,r);this._userSelection={c1:n,r1:o,c2:l,r2:a};for(let u=o;u<=a;u++)for(let i=n;i<=l;i++)this._cellElement(i,u)?.classList.add("ss-user-sel");this._cellElement(e,t)?.classList.add("ss-user-sel-anchor"),this._refreshClickStatus(),this._updatePhase()}_clearUserSelection(){this._tbody&&(this._tbody.querySelectorAll(".ss-user-sel, .ss-user-sel-anchor").forEach(e=>e.classList.remove("ss-user-sel","ss-user-sel-anchor")),this._userSelection=null)}_wireUserDragSelect(){!this._tbody||this._userDragWired||(this._userDragWired=!0,this._tbody.addEventListener("pointerdown",e=>{if(this._mode!=="cell-click"&&this._mode!=="range-drag")return;const t=e.target.closest(".ss-cell");if(!t)return;e.preventDefault();const s=parseInt(t.dataset.col,10),r=parseInt(t.dataset.row,10);this._setUserSelection(s,r,s,r);const n=(a,u)=>{const c=document.elementFromPoint(a,u)?.closest?.(".ss-cell");return c&&this._tbody.contains(c)?c:null},l=a=>{const u=n(a.clientX,a.clientY);if(!u)return;const i=parseInt(u.dataset.col,10),c=parseInt(u.dataset.row,10);this._mode!=="cell-click"&&this._setUserSelection(s,r,i,c)},o=a=>{document.removeEventListener("pointermove",l),this._fireSelectionFeedback()};document.addEventListener("pointermove",l),document.addEventListener("pointerup",o,{once:!0})}))}_fireSelectionFeedback(){const e=this.validate(),t=this._userSelection;if(!t)return;const s=this._cellElement(t.c1,t.r1);s&&(q(()=>import("./rapido-engine.DDFM3BwT.js").then(r=>r.f),__vite__mapDeps([0,1,2])).then(r=>r.popSlogan?.(s,e)),e&&q(()=>import("./vis-input.CJzXqr-e.js"),__vite__mapDeps([3,2,0,1])).then(r=>r.fireConfettiOnce?.(this)))}_applyPresetSelections(){if(!this._tbody)return;const e=this._preset||{active:"C3",range:["D2","E2","D3","E3","D4","E4"],multi:["A6","C6"]};if(e.active){const t=this._tbody.querySelector(`.ss-cell[data-ref="${e.active}"]`);if(t&&(t.classList.add("ss-zone-active"),!t.querySelector(".ss-drag-handle"))){const s=document.createElement("span");s.className="ss-drag-handle",t.appendChild(s)}}(e.range||[]).forEach(t=>{this._tbody.querySelector(`.ss-cell[data-ref="${t}"]`)?.classList.add("ss-zone-range")}),(e.multi||[]).forEach(t=>{this._tbody.querySelector(`.ss-cell[data-ref="${t}"]`)?.classList.add("ss-zone-multi")})}_buildIdentifyZones(){const e=this.querySelector(".ss-wrap");if(!e)return;const t=this._preset?.active;if(t){const d=e.querySelector(".ss-cell-label");d&&(d.textContent=t);const v=e.querySelector(".ss-formula-bar"),g=this._cells.get(t);v&&g&&g.raw!=null&&g.raw!==""&&(v.textContent=String(g.raw))}const s=e.querySelector(".ss-grid"),r=s?.querySelector("thead tr > th:nth-child(4)"),n=s?.querySelector("tbody tr:nth-child(3) > th"),l=s?.querySelector('.ss-cell[data-ref="B5"]');s?.querySelector(".ss-cell.ss-zone-range");const o=s?.querySelector(".ss-cell.ss-zone-multi"),a=s?.querySelector(".ss-cell.ss-zone-active"),u=s?.querySelector(".ss-drag-handle"),i=[{id:"toolbar",label:"Barre d'outils",anchor:e.querySelector(".ss-toolbar-fmt")},{id:"cell-address",label:"Adresse de la cellule",anchor:e.querySelector(".ss-cell-label")},{id:"formula-bar",label:"Barre de formule",anchor:e.querySelector(".ss-formula-bar")},{id:"col-header",label:"En-tête de colonne",anchor:r},{id:"row-header",label:"En-tête de ligne",anchor:n},{id:"cell",label:"Cellule",anchor:l},{id:"multi",label:"Cellules sélectionnées",anchor:o},{id:"active-cell",label:"Cellule active",anchor:a},{id:"drag-handle",label:"Poignée de recopie",anchor:u},{id:"sheet",label:"Feuille de calcul",anchor:s}].filter(d=>d.anchor);j(i),i.length=Math.min(4,i.length),this._zonePairs=new Map(i.map(d=>[d.id,d.label])),this._zoneSolved=new Set,this._activeBadge=null;const c=document.createElement("div");c.className="ss-zone-overlay-layer",c.style.cssText="position:absolute; top:0; left:0; right:0; bottom:0; pointer-events:none;",e.appendChild(c),i.forEach((d,v)=>{const g=document.createElement("button");g.type="button",g.className="ss-zone-badge",g.dataset.zoneId=d.id,g.textContent=String(v+1),g.title="Clique pour identifier cette zone",g.addEventListener("click",()=>this._onBadgeClick(g)),c.appendChild(g),this._positionBadge(g,d.anchor,e)});const f=document.createElement("div");f.className="ss-vocab-panel",f.innerHTML=`
      <div class="ss-vocab-pills"></div>
      <div class="ss-vocab-status">${this._zoneSolved.size} / ${this._zonePairs.size}</div>
    `;const b=f.querySelector(".ss-vocab-pills"),m=i.map(d=>d.label);j(m),m.forEach(d=>{const v=document.createElement("button");v.type="button",v.className="ss-vocab-pill",v.textContent=d,v.dataset.label=d,v.addEventListener("click",()=>this._onPillClick(v)),b.appendChild(v)});const p=document.createElement("div");p.className="ss-host-flex",p.appendChild(e),p.appendChild(f),this.appendChild(p),this._autoScaleRO?.unobserve&&this._autoScaleRO.disconnect(),this._autoScaleRO={disconnect:()=>{}},this.style.transform="none",this.style.width="100%",this.style.height="100%",this.style.display="block";const h=this.parentElement;if(h&&(h.style.height="100%",h.style.width="100%",h.style.alignItems=""),!this._zoneResizeWired){this._zoneResizeWired=!0;const d=new ResizeObserver(()=>this._repositionZoneBadges());d.observe(e),this._zoneRO=d}}_positionBadge(e,t,s){if(!t||!s)return;const r=t.getBoundingClientRect(),n=s.getBoundingClientRect(),l=e.dataset.zoneId,o=l==="active-cell"||l==="cell-address",a=r.top-n.top+s.scrollTop+(o?r.height:r.height/2),u=r.left-n.left+s.scrollLeft+r.width/2;e.style.top=a+"px",e.style.left=u+"px",e.style.transform=l==="drag-handle"?"translate(-100%, -100%)":o?"translate(-50%, 0)":"translate(-50%, -50%)"}_repositionZoneBadges(){const e=this.querySelector(".ss-wrap");e&&e.querySelectorAll(".ss-zone-badge").forEach(t=>{const s=t.dataset.zoneId,r=this._findZoneAnchor(s);r&&this._positionBadge(t,r,e)})}_findZoneAnchor(e){const t=this.querySelector(".ss-wrap");if(!t)return null;const s=t.querySelector(".ss-grid");switch(e){case"toolbar":return t.querySelector(".ss-toolbar-fmt");case"cell-address":return t.querySelector(".ss-cell-label");case"formula-bar":return t.querySelector(".ss-formula-bar");case"col-header":return s?.querySelector("thead tr > th:nth-child(4)");case"row-header":return s?.querySelector("tbody tr:nth-child(3) > th");case"cell":return s?.querySelector('.ss-cell[data-ref="B5"]');case"range":return s?.querySelector(".ss-cell.ss-zone-range");case"multi":return s?.querySelector(".ss-cell.ss-zone-multi");case"active-cell":return s?.querySelector(".ss-cell.ss-zone-active");case"drag-handle":return s?.querySelector(".ss-drag-handle");case"sheet":return s;default:return null}}_onBadgeClick(e){e.classList.contains("ss-zone-ok")||(this.querySelectorAll(".ss-zone-badge.ss-zone-active-sel").forEach(t=>t.classList.remove("ss-zone-active-sel")),e.classList.add("ss-zone-active-sel"),this._activeBadge=e)}_onPillClick(e){if(e.classList.contains("ss-pill-used"))return;if(!this._activeBadge){const n=this.querySelector(".ss-vocab-panel-title");n&&(n.style.color="#dc2626",setTimeout(()=>{n.style.color=""},600));return}const t=this._activeBadge.dataset.zoneId,s=this._zonePairs.get(t),r=e.dataset.label===s;if(q(()=>import("./rapido-engine.DDFM3BwT.js").then(n=>n.f),__vite__mapDeps([0,1,2])).then(n=>n.popSlogan?.(e,r)),r)this._activeBadge.classList.remove("ss-zone-active-sel"),this._activeBadge.classList.add("ss-zone-ok"),e.classList.add("ss-pill-used"),e.disabled=!0,this._zoneSolved.add(t),this._activeBadge=null,this._updateZoneStatus(),this._updatePhase(),this._zoneSolved.size===this._zonePairs.size&&q(()=>import("./vis-input.CJzXqr-e.js"),__vite__mapDeps([3,2,0,1])).then(n=>n.fireConfettiOnce?.(this));else{this._activeBadge.classList.add("ss-zone-ko");const n=this._activeBadge;setTimeout(()=>n.classList.remove("ss-zone-ko","ss-zone-active-sel"),400),this._activeBadge=null}}_updateZoneStatus(){const e=this.querySelector(".ss-vocab-status");if(!e)return;const t=this._zoneSolved.size,s=this._zonePairs.size;e.textContent=t+" / "+s,e.classList.toggle("ss-status-done",t===s),t===s&&(e.textContent="✓ "+t+" / "+s+"  —  Bravo !")}_buildDom(){const e=document.createElement("div");e.className="ss-wrap";const t=document.createElement("div");t.className="ss-toolbar";const s=document.createElement("div");s.className="ss-toolbar-row ss-toolbar-fmt",[{fmt:"bold",label:"B",title:"Gras"},{fmt:"italic",label:"I",title:"Italique"},{fmt:"underline",label:"U",title:"Souligné"},{fmt:"color",label:"A",title:"Couleur du texte"},{fmt:"sep",label:"",title:""},{fmt:"align-left",label:"⬅",title:"Aligner à gauche"},{fmt:"align-center",label:"⬛",title:"Centrer"},{fmt:"align-right",label:"➡",title:"Aligner à droite"}].forEach(({fmt:b,label:m,title:p})=>{if(b==="sep"){const d=document.createElement("span");d.className="ss-tb-fmt ss-tb-sep",s.appendChild(d);return}const h=document.createElement("button");h.type="button",h.className="ss-tb-fmt",h.dataset.fmt=b,h.textContent=m,h.title=p,h.setAttribute("aria-label",p),s.appendChild(h)}),t.appendChild(s);const n=document.createElement("div");n.className="ss-toolbar-row";const l=document.createElement("span");l.className="ss-cell-label",l.textContent="—",l.title="Adresse de la cellule",n.appendChild(l);const o=document.createElement("div");o.className="ss-formula-bar",o.textContent="",o.title="Barre de formule",n.appendChild(o);const a=document.createElement("button");a.type="button",a.textContent="↺",a.title="Annuler",a.addEventListener("click",()=>this._undoLast()),n.appendChild(a),t.appendChild(n),e.appendChild(t);const u=document.createElement("table");u.className="ss-grid";const i=document.createElement("thead"),c=document.createElement("tr");c.appendChild(document.createElement("th"));for(let b=0;b<this._cols;b++){const m=document.createElement("th");m.textContent=this._headers?.col?.[b]??P(b),c.appendChild(m)}i.appendChild(c),u.appendChild(i);const f=document.createElement("tbody");for(let b=0;b<this._rows;b++){const m=document.createElement("tr"),p=document.createElement("th");p.textContent=this._headers?.row?.[b]??String(b+1),m.appendChild(p);for(let h=0;h<this._cols;h++){const d=document.createElement("td");d.className="ss-cell",d.dataset.col=String(h),d.dataset.row=String(b),d.dataset.ref=w(h,b),this._paintCell(d),m.appendChild(d)}f.appendChild(m)}u.appendChild(f),e.appendChild(u),this.appendChild(e),this._tbody=f,this._fxBar=o,this._cellLabel=l,this._wireGridEvents(f)}_renderGrid(){this._tbody&&(this._recompute(),this._tbody.querySelectorAll(".ss-cell").forEach(e=>this._paintCell(e)),this._updatePhase())}_paintCell(e){const t=e.dataset.ref,s=this._cells.get(t);if(e.classList.remove("ss-align-l","ss-align-c","ss-align-r"),s?.align&&e.classList.add("ss-align-"+s.align),s&&s.target&&!this._showSolutions){let l=e.querySelector(".ss-target-input");if(!l)e.classList.add("ss-target"),s.sol.fillOnly&&e.classList.add("ss-fill-only"),l=document.createElement("input"),l.type="text",l.className="rapido-input ss-target-input",l.dataset.solutionType="spreadsheet-formula",l.dataset.ssRef=t,l.dataset.solution=s.sol.formula,l.placeholder=s.sol.fillOnly?"":"…",l.value=this._displayValueForFill(s,t),s.sol.fillOnly&&(l.readOnly=!0,l.title="Recopie depuis la cellule du dessus (drag-fill)"),e.textContent="",e.appendChild(l),l.addEventListener("focus",()=>{e.classList.add("ss-sel"),this._activeInput=l,s.raw&&l.value!==s.raw&&(l.value=s.raw),this._updateFormulaBar(t),this._ensureHandleForRef(t),this._highlightFormulaRefs(l.value)}),l.addEventListener("input",()=>{this._highlightFormulaRefs(l.value),this._updateFormulaBar(t,l.value)}),l.addEventListener("blur",()=>{this._clearRefHighlights(),this._activeInput===l&&(this._activeInput=null),e.classList.remove("ss-sel");const o=Z(l.value);if(o!==s.raw&&(this._pushUndo(),s.raw=o,this._parseIntoCell(s),this._recompute(),this._repaintNonTargets(),this._updatePhase()),s.raw&&s.raw.startsWith("=")){const a=this._values.get(t);a!=null&&!(typeof a=="object"&&a.error)&&(l.value=I(a))}}),l.addEventListener("keydown",o=>{o.key==="Enter"?(o.preventDefault(),l.blur()):o.key==="Escape"&&(l.value=s.raw||"",l.blur())}),this._observeTargetInput(l,t);else{const o=this._displayValueForFill(s,t);document.activeElement!==l&&l.value!==o&&(l.value=o),e.classList.add("ss-target"),s.sol.fillOnly&&e.classList.add("ss-fill-only")}return}if(e.classList.remove("ss-locked","ss-target","ss-text","ss-num","ss-error"),e.querySelector(".ss-cell-input"))return;let n="";if(s){s.locked&&e.classList.add("ss-locked");const l=this._values.get(t);l&&typeof l=="object"&&l.error?(n=l.error,e.classList.add("ss-error")):typeof l=="number"?(n=I(l),e.classList.add("ss-num")):l!=null&&(n=String(l),e.classList.add("ss-text"))}e.textContent=n}_updateFormulaBar(e,t){const s=this._cells.get(e);this._cellLabel&&(this._cellLabel.textContent=e||"—"),this._fxBar&&(this._fxBar.textContent=t??s?.raw??"")}_wireGridEvents(e){e.addEventListener("click",t=>{if(this._refPickupActive)return;const s=t.target.closest(".ss-cell");s&&(t.target.classList?.contains("ss-cell-input")||this._selectCell(s))}),e.addEventListener("dblclick",t=>{const s=t.target.closest(".ss-cell");s&&this._beginEdit(s)}),e.addEventListener("keydown",t=>{if(t.key==="Enter"&&this._selected){const s=this._cellElement(this._selected.col,this._selected.row);s&&!s.querySelector(".ss-cell-input")&&(t.preventDefault(),this._beginEdit(s))}}),e.addEventListener("pointerdown",t=>{if(t.target.closest(".ss-fill-handle")&&this._selected){t.preventDefault(),this._startFill();return}const r=t.target.closest(".ss-cell");if(!r)return;const n=this._activeInput;!n||n.readOnly||this._isInRefPickupMode(n)&&(r.contains(n)||(t.preventDefault(),this._startRefPickup(r)))})}_isInRefPickupMode(e){const t=e.value||"";if(!t.startsWith("=")&&!t.startsWith("+"))return!1;const s=e.selectionStart??t.length,r=(t[s-1]||"").trim();return/[=+\-*/^(,;:<>]/.test(r)}_insertAtCursor(e,t){const s=e.value||"",r=e.selectionStart??s.length,n=e.selectionEnd??s.length,l=s.slice(0,r),o=s.slice(n);e.value=l+t+o;const a=r+t.length;e.setSelectionRange(a,a),e.dispatchEvent(new Event("input",{bubbles:!0}))}_startRefPickup(e){const t=this._activeInput;if(!t)return;const s=parseInt(e.dataset.col,10),r=parseInt(e.dataset.row,10),n=w(s,r),l=t.selectionStart??(t.value||"").length;this._insertAtCursor(t,n),this._refPickupActive=!0;const o=(c,f)=>{const m=document.elementFromPoint(c,f)?.closest?.(".ss-cell");return m&&this._tbody.contains(m)?m:null},a=(c,f)=>{const m=c===s&&f===r?n:n+":"+w(c,f),p=t.value.slice(0,l),h=t.value.slice(l+this._lastInsertedLen);t.value=p+m+h,this._lastInsertedLen=m.length;const d=l+m.length;t.setSelectionRange(d,d),t.focus(),t.dispatchEvent(new Event("input",{bubbles:!0}))};this._lastInsertedLen=n.length;const u=c=>{const f=o(c.clientX,c.clientY);if(!f)return;const b=parseInt(f.dataset.col,10),m=parseInt(f.dataset.row,10);a(b,m)},i=()=>{document.removeEventListener("pointermove",u),setTimeout(()=>{this._refPickupActive=!1},0),t.focus()};document.addEventListener("pointermove",u),document.addEventListener("pointerup",i,{once:!0})}_wireDocLevelListeners(){}_selectCell(e){if(this._selected){const r=this._cellElement(this._selected.col,this._selected.row);r?.classList.remove("ss-sel"),r?.querySelector(".ss-fill-handle")?.remove()}const t=parseInt(e.dataset.col,10),s=parseInt(e.dataset.row,10);this._selected={col:t,row:s},e.classList.add("ss-sel"),this._updateFormulaBar(e.dataset.ref),this._ensureHandleForRef(e.dataset.ref)}_ensureHandleForRef(e){const t=this._tbody?.querySelector(`.ss-cell[data-ref="${e}"]`);if(!t||t.querySelector(".ss-fill-handle")||t.querySelector(".ss-cell-input"))return;const s=this._cells.get(e);if(!s)return;let r=!!s.ast;if(!r&&typeof this._values.get(e)=="number"){const o=A(e);if(o){const a=this._values.get(w(o.col,o.row-1)),u=this._values.get(w(o.col-1,o.row));(typeof a=="number"||typeof u=="number")&&(r=!0)}}if(!r)return;const n=document.createElement("button");n.type="button",n.className="ss-fill-handle",n.title="Recopier (cliquer puis cliquer la cellule cible)",n.setAttribute("aria-label","Poignée de recopie"),t.appendChild(n)}_highlightFormulaRefs(e){if(this._clearRefHighlights(),!e)return;const t=String(e).trim();if(!t.startsWith("="))return;const s=z(t);if(s?.error)return;const r=[];R(s,r,new Map),r.forEach((l,o)=>{const a="ss-ref-hl-"+o%4;l.forEach(({col:u,row:i})=>{this._cellElement(u,i)?.classList.add(a)})})}_clearRefHighlights(){this._tbody&&this._tbody.querySelectorAll(".ss-ref-hl-0, .ss-ref-hl-1, .ss-ref-hl-2, .ss-ref-hl-3").forEach(e=>e.classList.remove("ss-ref-hl-0","ss-ref-hl-1","ss-ref-hl-2","ss-ref-hl-3"))}_repaintNonTargets(){if(this._tbody&&(this._tbody.querySelectorAll(".ss-cell").forEach(e=>{this._cells.get(e.dataset.ref)?.target&&!this._showSolutions||this._paintCell(e)}),this._selected)){const e=w(this._selected.col,this._selected.row);this._ensureHandleForRef(e)}}_cellElement(e,t){return this._tbody?.querySelector(`.ss-cell[data-col="${e}"][data-row="${t}"]`)}_beginEdit(e){const t=e.dataset.ref,s=this._cells.get(t)||{};if(s.locked)return;if(s.target){e.querySelector(".ss-cell-input, .rapido-input")?.focus();return}if(e.querySelector(".ss-cell-input"))return;const r=s.raw??"",n=document.createElement("input");n.type="text",n.className="ss-cell-input",n.value=r,e.textContent="",e.appendChild(n),n.focus(),n.select();const l=o=>{const a=o?n.value:r;if(o&&a!==r){this._pushUndo();let u=this._cells.get(t);u||(u={raw:"",locked:!1},this._cells.set(t,u)),u.raw=a,this._parseIntoCell(u),this._recompute()}this._renderGrid()};n.addEventListener("blur",()=>l(!0)),n.addEventListener("keydown",o=>{o.key==="Enter"?(o.preventDefault(),n.blur()):o.key==="Escape"&&(o.preventDefault(),l(!1))})}_startFill(){this._fillSource={...this._selected};const e=this._cellElement(this._fillSource.col,this._fillSource.row);e?.classList.add("ss-fill-source");const t=()=>{this._tbody.querySelectorAll(".ss-fill-preview").forEach(o=>o.classList.remove("ss-fill-preview"))},s=(o,a)=>{const i=document.elementFromPoint(o,a)?.closest?.(".ss-cell");return i&&this._tbody.contains(i)?i:null},r=(o,a)=>{t();const u=Math.min(this._fillSource.col,o),i=Math.max(this._fillSource.col,o),c=Math.min(this._fillSource.row,a),f=Math.max(this._fillSource.row,a);for(let b=c;b<=f;b++)for(let m=u;m<=i;m++){if(m===this._fillSource.col&&b===this._fillSource.row)continue;this._cellElement(m,b)?.classList.add("ss-fill-preview")}},n=o=>{const a=s(o.clientX,o.clientY);if(!a)return;const u=parseInt(a.dataset.col,10),i=parseInt(a.dataset.row,10);r(u,i)},l=o=>{document.removeEventListener("pointermove",n),t(),e?.classList.remove("ss-fill-source");const a=s(o.clientX,o.clientY);if(!a){this._fillSource=null;return}this._applyFill(a),this._fillSource=null};document.addEventListener("pointermove",n),document.addEventListener("pointerup",l,{once:!0})}_applyFill(e){const t=this._fillSource;if(!t)return;const s=w(t.col,t.row),r=this._cells.get(s);if(!r)return;const n=parseInt(e.dataset.col,10),l=parseInt(e.dataset.row,10);if(r.ast){const h=Math.min(t.col,n),d=Math.max(t.col,n),v=Math.min(t.row,l),g=Math.max(t.row,l);this._pushUndo();for(let y=v;y<=g;y++)for(let x=h;x<=d;x++){if(x===t.col&&y===t.row)continue;const S=w(x,y);if(this._cells.get(S)?.locked)continue;const L=F(r.ast,x-t.col,y-t.row),C=N(L);let k=this._cells.get(S);k||(k={raw:"",locked:!1},this._cells.set(S,k)),k.raw=C,this._parseIntoCell(k)}this._postFillFeedback();return}const o=this._values.get(s);if(typeof o!="number")return;const a=l-t.row,u=n-t.col,i=Math.abs(a)>=Math.abs(u);if(i&&a===0||!i&&u===0)return;const c=Math.sign(i?a:u),f=i?w(t.col,t.row-c):w(t.col-c,t.row),b=this._values.get(f);if(typeof b!="number")return;const m=o-b;this._pushUndo();let p=o;if(i)for(let h=t.row+c;c>0?h<=l:h>=l;h+=c){p+=m;const d=w(t.col,h),v=this._cells.get(d);if(v?.locked)continue;let g=v;g||(g={raw:"",locked:!1},this._cells.set(d,g)),g.raw=I(p),this._parseIntoCell(g)}else for(let h=t.col+c;c>0?h<=n:h>=n;h+=c){p+=m;const d=w(h,t.row),v=this._cells.get(d);if(v?.locked)continue;let g=v;g||(g={raw:"",locked:!1},this._cells.set(d,g)),g.raw=I(p),this._parseIntoCell(g)}this._postFillFeedback()}_postFillFeedback(){this._recompute(),this._renderGrid(),q(()=>import("./rapido-engine.DDFM3BwT.js").then(e=>e.f),__vite__mapDeps([0,1,2])).then(e=>{this._targetCells().forEach(t=>{if(!this._cells.get(t)?.raw)return;const r=this._tbody?.querySelector(`.ss-target-input[data-ss-ref="${t}"]`);if(!r)return;const n=this._isCorrect(t);e.renderFeedback?.(r,n?"correct":"incorrect")}),this.validate()&&q(()=>import("./vis-input.CJzXqr-e.js"),__vite__mapDeps([3,2,0,1])).then(t=>t.fireConfettiOnce?.(this))})}_pushUndo(){this._undo.length>=20&&this._undo.shift();const e={};for(const[t,s]of this._cells)e[t]={raw:s.raw,locked:s.locked,target:s.target,sol:s.sol};this._undo.push(e)}_undoLast(){const e=this._undo.pop();if(e){this._cells.clear();for(const[t,s]of Object.entries(e)){const r={raw:s.raw,locked:s.locked};s.target&&(r.target=!0,r.sol=s.sol),this._parseIntoCell(r),this._cells.set(t,r)}this._recompute(),this._renderGrid()}}_targetCells(){const e=[];for(const[t,s]of this._cells)s.target&&e.push(t);return e}_isCorrect(e){const t=this._cells.get(e);if(!t?.sol)return!1;const s=(t.raw||"").trim();if(s===""||t.sol.maxDollars!=null&&(s.match(/\$/g)||[]).length>t.sol.maxDollars)return!1;const r=z(t.sol.formula);if(t.sol.mode==="value"){const l=z(s.startsWith("=")?s:"="+s);if(l.error)return!1;const o=this._evaluateInContext(l),a=this._evaluateInContext(r);return typeof o=="number"&&typeof a=="number"&&Math.abs(o-a)<1e-9}const n=z(s);if(n.error)return!1;if(D(n,r))return!0;for(const l of t.sol.alt||[]){const o=z(l);if(!o.error&&D(n,o))return!0}return!1}_evaluateInContext(e){if(!e||e.error)return null;const s=O(e,{getCell:(r,n)=>{const l=w(r,n);this._values.has(l)||this._evaluateCell(l,new Set);const o=this._values.get(l);return o&&typeof o=="object"&&o.error?NaN:o===void 0?"":o}});return s&&typeof s=="object"&&s.error?null:s}_updatePhase(){if(this._mode==="identify-zones"){const l=this._zonePairs.size;if(l===0){this._currentPhase="cellule_vide";return}if(this._zoneSolved.size===l){this._currentPhase="done";return}if(this._zoneSolved.size===0){this._currentPhase="cellule_vide";return}this._currentPhase="erreur_calcul";return}if(this._mode==="cell-click"||this._mode==="range-drag"){if(!this._userSelection){this._currentPhase="cellule_vide";return}const l=this._userSelectionText().toUpperCase()===(this._currentTarget||"").trim().toUpperCase();this._currentPhase=l?"done":"erreur_calcul";return}if(this._mode==="cell-name"||this._mode==="range-name"){const o=(this.querySelector(".ss-name-input")?.value||"").trim();if(!o){this._currentPhase="cellule_vide";return}const a=(this._currentTarget||"").trim().toUpperCase();this._currentPhase=o.toUpperCase()===a?"done":"erreur_calcul";return}const e=this._targetCells();if(e.length===0){this._currentPhase="cellule_vide";return}let t=!0,s=!1,r=!1,n=!1;for(const l of e){const a=(this._cells.get(l)?.raw||"").trim();if(a===""){t=!1;continue}if(s=!0,z(a).error){n=!0,t=!1;continue}const i=this._values.get(l);i&&typeof i=="object"&&i.error&&(r=!0),this._isCorrect(l)||(t=!1)}t?this._currentPhase="done":n?this._currentPhase="formule_invalide":s?r?this._currentPhase="formule_invalide":this._currentPhase="erreur_calcul":this._currentPhase="cellule_vide"}_observeTargetInput(e,t){if(e._ssObserved)return;e._ssObserved=!0;const s=this.closest(".q-card");if(!s)return;const r=Y(()=>{s.querySelector(".am-indice-panel.open")&&s.dispatchEvent(new CustomEvent("zefor-indice-auto-refresh",{detail:{studentValue:e.value,formula:e.value,phase:this.getCurrentPhase(),targetCell:t,source:this},bubbles:!0}))},300);e.addEventListener("input",r),new MutationObserver(()=>{e.classList.contains("incorrect")&&s.dispatchEvent(new CustomEvent("zefor-indice-auto-pop",{detail:{studentValue:e.value,formula:e.value,phase:this.getCurrentPhase(),targetCell:t,source:this},bubbles:!0}))}).observe(e,{attributes:!0,attributeFilter:["class"]})}}function R(_,e,t){if(!(!_||typeof _!="object"||_.error)){if(_.type==="ref"){const s="r:"+_.col+":"+_.row;t.has(s)||(t.set(s,e.length),e.push([{col:_.col,row:_.row}]));return}if(_.type==="range"){const s=_.a,r=_.b,n=Math.min(s.col,r.col),l=Math.max(s.col,r.col),o=Math.min(s.row,r.row),a=Math.max(s.row,r.row),u="g:"+n+":"+o+":"+l+":"+a;if(!t.has(u)){t.set(u,e.length);const i=[];for(let c=o;c<=a;c++)for(let f=n;f<=l;f++)i.push({col:f,row:c});e.push(i)}return}switch(_.type){case"unary":R(_.arg,e,t);break;case"binop":R(_.left,e,t),R(_.right,e,t);break;case"fn":_.args.forEach(s=>R(s,e,t));break}}}class U extends Error{constructor(e="#CYCLE!"){super(e),this.code=e}}function j(_){for(let e=_.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[_[e],_[t]]=[_[t],_[e]]}return _}function Y(_,e){let t=null;return(...s)=>{t&&clearTimeout(t),t=setTimeout(()=>_(...s),e)}}customElements.get("math974-spreadsheet")||customElements.define("math974-spreadsheet",W);function re(_,e,t){const s=t||_||{};if(!e)return JSON.parse(JSON.stringify(s));const r=(p,h)=>{if(typeof p=="number")return p;if(Array.isArray(p))return p[Math.floor(Math.random()*p.length)];if(typeof p=="string"&&p.includes("..")){const[d,v]=p.split("..").map(Number);return Math.floor(Math.random()*(v-d+1))+d}return h},n=(p,h)=>Array.isArray(p)&&p.length?p[Math.floor(Math.random()*p.length)]:h;if(e.affine){let p=r(e.a,3);p===0&&(p=1);const h=r(e.b,-2),d=1,v=10,g=JSON.parse(JSON.stringify(s));g.cells={A1:"x",B1:"f(x)"},g.solutions={};const y=["A1","B1"];for(let x=d;x<=v;x++){const S=x+1,E=p*x+h;g.cells["A"+S]=x,y.push("A"+S),x<=2?(g.cells["B"+S]=E,y.push("B"+S)):g.solutions["B"+S]={formula:"="+E,mode:"value"}}return g.locked=y,g}let l=r(e.a,5),o=r(e.b,3);const a=n(e.op,"+");if(a==="-"&&l<o&&([l,o]=[o,l]),a==="/"){o=Math.max(1,o);const p=Math.max(1,Math.round(l/o));l=o*p}const u={"+":"la somme de a et b","-":"la différence entre a et b","*":"le produit de a par b","/":"le quotient de a par b"},i=s.targetCell||"C2",c={...s.cells||{}};c.A2=l,c.B2=o;const f=`=A2${a}B2`,b=a==="+"||a==="*"?[`=B2${a}A2`]:[],m=JSON.parse(JSON.stringify(s));return m.cells=c,m.op={symbol:a,label:u[a]||a},m.solutions={[i]:{formula:f,alt:b}},m}export{se as autoScale,te as defaultPosition,re as randomize};
