const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/rapido-engine.DtNgV13a.js","_astro/rapidos-visuals-integration.BZwFdww2.js","_astro/editor.CJZspgfY.js","_astro/vis-input.D23gReN4.js"])))=>i.map(i=>d[i]);
import{_ as x}from"./editor.CJZspgfY.js";import{ensureSharedStyles as A}from"./vis-input.D23gReN4.js";import{formatValue as z,parseFormula as w,evaluate as L,parseRef as y,idxToCol as E,shiftRefs as R,stringify as T,astEqual as q}from"./formula-parser.CuBpGvtX.js";import"./rapido-engine.DtNgV13a.js";import"./rapidos-visuals-integration.BZwFdww2.js";const W="east",G=!0,P="math974-spreadsheet-css",B=`
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
`;function N(){if(document.getElementById(P))return;const u=document.createElement("style");u.id=P,u.textContent=B,document.head.appendChild(u)}function C(u,e){if(!u)return e;try{return JSON.parse(u)}catch{return e}}function v(u,e){return E(u)+(e+1)}function O(u){return(u||"").trim()}class F extends HTMLElement{static get observedAttributes(){return["rows","cols","cells","locked","solutions","headers","mode","preset"]}constructor(){super(),this._cells=new Map,this._values=new Map,this._selected=null,this._undo=[],this._activeInput=null,this._currentPhase="cellule_vide",this._mode="formula",this._zonePairs=new Map,this._zoneSolved=new Set,this._activeBadge=null,this._currentTarget=""}connectedCallback(){N(),A(),this.closest(".variant-content")?.classList.add("ss-variant"),this.closest(".q-card")?.classList.add("has-ss"),this.getAttribute("mode")==="identify-zones"&&(this._autoScaleRO={disconnect:()=>{}}),this._render(),this._wireDocLevelListeners()}attributeChangedCallback(){this.isConnected&&this._render()}validate(){if(this._mode==="identify-zones")return this._zoneSolved.size===this._zonePairs.size&&this._zonePairs.size>0;if(this._mode==="cell-click"||this._mode==="range-drag")return this._userSelectionText().toUpperCase()===(this._currentTarget||"").trim().toUpperCase();if(this._mode==="cell-name"||this._mode==="range-name"){const s=(this.querySelector(".ss-name-input")?.value||"").trim().toUpperCase(),l=(this._currentTarget||"").trim().toUpperCase();return s===l&&l!==""}const e=this._targetCells();return e.length===0?!1:e.every(t=>this._isCorrect(t))}toggleSolution(){if(this._mode==="identify-zones"){this._zonePairs.forEach((e,t)=>{const s=this.querySelector(`.ss-zone-badge[data-zone-id="${t}"]`),l=Array.from(this.querySelectorAll(".ss-vocab-pill")).find(n=>n.dataset.label===e);s?.classList.remove("ss-zone-active-sel"),s?.classList.add("ss-zone-ok"),l?.classList.add("ss-pill-used"),l&&(l.disabled=!0),this._zoneSolved.add(t)}),this._updateZoneStatus(),this._updatePhase();return}this._showSolutions=!this._showSolutions,this._renderGrid()}getCurrentPhase(){return this._currentPhase}getCurrentStudentValue(){if(this._mode==="cell-click"||this._mode==="range-drag")return this._userSelectionText();if(this._mode==="cell-name"||this._mode==="range-name")return this.querySelector(".ss-name-input")?.value||"";if(this._activeInput){const e=this._activeInput.dataset.ssRef,t=this._cells.get(e);return t?.raw?t.raw:this._activeInput.value||""}for(const e of this._targetCells()){const t=this._cells.get(e);if(t?.raw&&!this._isCorrect(e))return t.raw}return""}_displayValueForFill(e,t){if(e?.target&&e.raw&&e.raw.startsWith("=")){const s=this._values.get(t);if(s!=null&&!(typeof s=="object"&&s.error))return z(s)}return e?.raw||""}_validateCell(e){if(this._mode==="cell-name"||this._mode==="range-name"){const s=(e.value||"").trim().toUpperCase(),l=(this._currentTarget||"").trim().toUpperCase();return s===l&&l!==""}const t=e.dataset.ssRef;return t?this._isCorrect(t):!1}_readFormula(e){const t=e.dataset.ssRef;return t&&this._cells.get(t)?.raw||""}_readAttrs(){this._rows=Math.max(1,parseInt(this.getAttribute("rows")||"6",10)),this._cols=Math.max(1,parseInt(this.getAttribute("cols")||"5",10));const e=C(this.getAttribute("cells"),{}),t=new Set(C(this.getAttribute("locked"),[])),s=C(this.getAttribute("solutions"),{}),l=C(this.getAttribute("headers"),null);this._declaredMode=this.getAttribute("mode")||"formula",this._mode=this._declaredMode,this._preset=C(this.getAttribute("preset"),null),this._cells.clear();for(const[n,r]of Object.entries(e)){const a={raw:r==null?"":String(r),locked:t.has(n)};this._parseIntoCell(a),this._cells.set(n,a)}for(const n of t)this._cells.has(n)||this._cells.set(n,{raw:"",locked:!0});for(const[n,r]of Object.entries(s)){let o=this._cells.get(n);o||(o={raw:"",locked:!1},this._cells.set(n,o)),o.target=!0,o.sol={formula:r.formula||r,mode:r.mode||"formula",alt:Array.isArray(r.alt)?r.alt:[],fillOnly:!!r.fillOnly,maxDollars:typeof r.maxDollars=="number"?r.maxDollars:null}}this._headers=l}_parseIntoCell(e){delete e.ast,delete e.parseError;const t=e.raw;if(typeof t=="string"&&t.trim().startsWith("=")){const s=w(t);s.error?e.parseError=s.error:e.ast=s}}_getCellValue(e,t){const s=v(e,t);this._values.has(s)||this._evaluateCell(s,new Set);const l=this._values.get(s);return l&&typeof l=="object"&&l.error?NaN:l}_evaluateCell(e,t){const s=this._cells.get(e);if(!s){this._values.set(e,"");return}if(s.ast){if(t.has(e)){this._values.set(e,{error:"#CYCLE!"});return}t.add(e);const l={getCell:(n,r)=>{const o=v(n,r);if(t.has(o))throw new M;this._values.has(o)||this._evaluateCell(o,t);const a=this._values.get(o);if(a&&typeof a=="object"&&a.error)throw new M(a.error);return a===void 0?"":a}};try{const n=L(s.ast,l);this._values.set(e,n)}catch(n){this._values.set(e,{error:n.code||"#CYCLE!"})}t.delete(e)}else{const l=s.raw;if(l===""||l==null){this._values.set(e,"");return}const n=parseFloat(String(l).replace(",","."));!isNaN(n)&&String(n)===String(l).replace(",",".").replace(/^\+/,"")?this._values.set(e,n):!isNaN(n)&&/^-?\d+([.,]\d+)?$/.test(String(l).trim())?this._values.set(e,n):this._values.set(e,String(l))}}_recompute(){this._values.clear();for(const e of this._cells.keys())this._values.has(e)||this._evaluateCell(e,new Set)}_render(){this._readAttrs(),this._pickTarget(),this.innerHTML="",this.setAttribute("data-mode",this._mode),this._recompute(),this._buildDom(),this._mode==="identify-zones"?(this._applyPresetSelections(),this._buildIdentifyZones()):this._mode==="cell-name"||this._mode==="range-name"?(this._applyTargetPreset(),this._buildNamingPanel()):(this._mode==="cell-click"||this._mode==="range-drag")&&this._buildClickInstruction(),this._updatePhase(),x(()=>import("./rapido-engine.DtNgV13a.js").then(e=>e.h),__vite__mapDeps([0,1,2])).then(e=>e.wireCardInputs?.(this.closest(".q-card")))}_pickTarget(){const e=Array.isArray(this._preset?.targets)?this._preset.targets:null;e&&e.length>0?this._currentTarget=e[Math.floor(Math.random()*e.length)]:this._currentTarget=(this._preset?.target||"").trim(),this._declaredMode==="cell"?this._mode=Math.random()<.5?"cell-click":"cell-name":this._declaredMode==="range"&&(this._mode=Math.random()<.5?"range-drag":"range-name")}randomize(){this._render()}_applyTargetPreset(){if(!this._tbody||this._preset?.noHighlight)return;const e=this._currentTarget;if(e)if(e.includes(":")){const[t,s]=e.split(":"),l=y(t),n=y(s);if(!l||!n)return;const r=Math.min(l.col,n.col),o=Math.max(l.col,n.col),a=Math.min(l.row,n.row),i=Math.max(l.row,n.row);for(let d=a;d<=i;d++)for(let c=r;c<=o;c++)this._cellElement(c,d)?.classList.add("ss-user-sel")}else{const t=y(e);if(!t)return;this._cellElement(t.col,t.row)?.classList.add("ss-user-sel","ss-user-sel-anchor")}}_buildNamingPanel(){const e=this._currentTarget,t=this._mode==="range-name",s=!!this._preset?.noHighlight,l=document.createElement("div");l.className="ss-vocab-panel";const n=t?"ex. B2:D4":"ex. C5",r=s?`<div class="ss-vocab-panel-title">${this._buildTargetDescription(e,t)}</div>`:"";l.innerHTML=`
      ${r}
      <input class="rapido-input ss-name-input" type="text"
             data-solution-type="spreadsheet-formula"
             data-solution="${e}"
             data-ss-ref="__name__"
             placeholder="${n}"
             autocomplete="off" spellcheck="false" />
    `,this.appendChild(l)}_buildTargetDescription(e,t){if(!e)return"";if(t){const[l,n]=e.split(":"),r=y(l),o=y(n);if(!r||!o)return`→ Plage : ${e}`;const a=Math.min(r.col,o.col),i=Math.max(r.col,o.col),d=Math.min(r.row,o.row),c=Math.max(r.row,o.row);return`→ Plage du coin <strong>colonne ${E(a)}, ligne ${d+1}</strong> jusqu'au coin <strong>colonne ${E(i)}, ligne ${c+1}</strong>.`}const s=y(e);return s?`→ Colonne <strong>${E(s.col)}</strong>, ligne <strong>${s.row+1}</strong>.`:`→ Cellule : ${e}`}_buildClickInstruction(){const e=this._currentTarget,t=document.createElement("div");t.className="ss-vocab-panel",t.innerHTML=`
      <div class="ss-vocab-panel-title">→ Cible : <strong>${e}</strong></div>
      <div class="ss-vocab-status">${this._userSelectionText()||"(aucune sélection)"}</div>
    `,this.appendChild(t),this._userSelTarget=e,this._wireUserDragSelect()}_userSelectionText(){const e=this._userSelection;if(!e)return"";const t=v(e.c1,e.r1),s=v(e.c2,e.r2);return t===s?t:t+":"+s}_refreshClickStatus(){const e=this.querySelector(".ss-vocab-panel .ss-vocab-status");if(!e)return;const t=this._userSelectionText()||"(aucune sélection)",s=(this._currentTarget||"").trim().toUpperCase(),l=t.toUpperCase();s&&l===s?(e.textContent="✓ "+t,e.classList.add("ss-status-done")):(e.textContent=t,e.classList.remove("ss-status-done"))}_setUserSelection(e,t,s,l){this._clearUserSelection();const n=Math.min(e,s),r=Math.max(e,s),o=Math.min(t,l),a=Math.max(t,l);this._userSelection={c1:n,r1:o,c2:r,r2:a};for(let i=o;i<=a;i++)for(let d=n;d<=r;d++)this._cellElement(d,i)?.classList.add("ss-user-sel");this._cellElement(e,t)?.classList.add("ss-user-sel-anchor"),this._refreshClickStatus(),this._updatePhase()}_clearUserSelection(){this._tbody&&(this._tbody.querySelectorAll(".ss-user-sel, .ss-user-sel-anchor").forEach(e=>e.classList.remove("ss-user-sel","ss-user-sel-anchor")),this._userSelection=null)}_wireUserDragSelect(){!this._tbody||this._userDragWired||(this._userDragWired=!0,this._tbody.addEventListener("pointerdown",e=>{if(this._mode!=="cell-click"&&this._mode!=="range-drag")return;const t=e.target.closest(".ss-cell");if(!t)return;e.preventDefault();const s=parseInt(t.dataset.col,10),l=parseInt(t.dataset.row,10);this._setUserSelection(s,l,s,l);const n=(a,i)=>{const c=document.elementFromPoint(a,i)?.closest?.(".ss-cell");return c&&this._tbody.contains(c)?c:null},r=a=>{const i=n(a.clientX,a.clientY);if(!i)return;const d=parseInt(i.dataset.col,10),c=parseInt(i.dataset.row,10);this._mode!=="cell-click"&&this._setUserSelection(s,l,d,c)},o=a=>{document.removeEventListener("pointermove",r),this._fireSelectionFeedback()};document.addEventListener("pointermove",r),document.addEventListener("pointerup",o,{once:!0})}))}_fireSelectionFeedback(){const e=this.validate(),t=this._userSelection;if(!t)return;const s=this._cellElement(t.c1,t.r1);s&&(x(()=>import("./rapido-engine.DtNgV13a.js").then(l=>l.f),__vite__mapDeps([0,1,2])).then(l=>l.popSlogan?.(s,e)),e&&x(()=>import("./vis-input.D23gReN4.js"),__vite__mapDeps([3,2,0,1])).then(l=>l.fireConfettiOnce?.(this)))}_applyPresetSelections(){if(!this._tbody)return;const e=this._preset||{active:"C3",range:["D2","E2","D3","E3","D4","E4"],multi:["A6","C6"]};if(e.active){const t=this._tbody.querySelector(`.ss-cell[data-ref="${e.active}"]`);if(t&&(t.classList.add("ss-zone-active"),!t.querySelector(".ss-drag-handle"))){const s=document.createElement("span");s.className="ss-drag-handle",t.appendChild(s)}}(e.range||[]).forEach(t=>{this._tbody.querySelector(`.ss-cell[data-ref="${t}"]`)?.classList.add("ss-zone-range")}),(e.multi||[]).forEach(t=>{this._tbody.querySelector(`.ss-cell[data-ref="${t}"]`)?.classList.add("ss-zone-multi")})}_buildIdentifyZones(){const e=this.querySelector(".ss-wrap");if(!e)return;const t=e.querySelector(".ss-grid"),s=t?.querySelector("thead tr > th:nth-child(4)"),l=t?.querySelector("tbody tr:nth-child(3) > th"),n=t?.querySelector('.ss-cell[data-ref="B5"]');t?.querySelector(".ss-cell.ss-zone-range");const r=t?.querySelector(".ss-cell.ss-zone-multi"),o=t?.querySelector(".ss-cell.ss-zone-active"),a=t?.querySelector(".ss-drag-handle"),i=[{id:"toolbar",label:"Barre d'outils",anchor:e.querySelector(".ss-toolbar-fmt")},{id:"cell-address",label:"Adresse de la cellule",anchor:e.querySelector(".ss-cell-label")},{id:"formula-bar",label:"Barre de formule",anchor:e.querySelector(".ss-formula-bar")},{id:"col-header",label:"En-tête de colonne",anchor:s},{id:"row-header",label:"En-tête de ligne",anchor:l},{id:"cell",label:"Cellule",anchor:n},{id:"multi",label:"Cellules sélectionnées",anchor:r},{id:"active-cell",label:"Cellule active",anchor:o},{id:"drag-handle",label:"Poignée de recopie",anchor:a},{id:"sheet",label:"Feuille de calcul",anchor:t}].filter(f=>f.anchor);I(i),i.length=Math.min(4,i.length),this._zonePairs=new Map(i.map(f=>[f.id,f.label])),this._zoneSolved=new Set,this._activeBadge=null;const d=document.createElement("div");d.className="ss-zone-overlay-layer",d.style.cssText="position:absolute; top:0; left:0; right:0; bottom:0; pointer-events:none;",e.appendChild(d),i.forEach((f,g)=>{const b=document.createElement("button");b.type="button",b.className="ss-zone-badge",b.dataset.zoneId=f.id,b.textContent=String(g+1),b.title="Clique pour identifier cette zone",b.addEventListener("click",()=>this._onBadgeClick(b)),d.appendChild(b),this._positionBadge(b,f.anchor,e)});const c=document.createElement("div");c.className="ss-vocab-panel",c.innerHTML=`
      <div class="ss-vocab-pills"></div>
      <div class="ss-vocab-status">${this._zoneSolved.size} / ${this._zonePairs.size}</div>
    `;const p=c.querySelector(".ss-vocab-pills"),m=i.map(f=>f.label);I(m),m.forEach(f=>{const g=document.createElement("button");g.type="button",g.className="ss-vocab-pill",g.textContent=f,g.dataset.label=f,g.addEventListener("click",()=>this._onPillClick(g)),p.appendChild(g)});const h=document.createElement("div");h.className="ss-host-flex",h.appendChild(e),h.appendChild(c),this.appendChild(h),this._autoScaleRO?.unobserve&&this._autoScaleRO.disconnect(),this._autoScaleRO={disconnect:()=>{}},this.style.transform="none",this.style.width="100%",this.style.height="100%",this.style.display="block";const _=this.parentElement;if(_&&(_.style.height="100%",_.style.width="100%",_.style.alignItems=""),!this._zoneResizeWired){this._zoneResizeWired=!0;const f=new ResizeObserver(()=>this._repositionZoneBadges());f.observe(e),this._zoneRO=f}}_positionBadge(e,t,s){if(!t||!s)return;const l=t.getBoundingClientRect(),n=s.getBoundingClientRect(),r=l.top-n.top+s.scrollTop+l.height/2,o=l.left-n.left+s.scrollLeft+l.width/2;e.style.top=r+"px",e.style.left=o+"px",e.style.transform=e.dataset.zoneId==="drag-handle"?"translate(-100%, -100%)":"translate(-50%, -50%)"}_repositionZoneBadges(){const e=this.querySelector(".ss-wrap");e&&e.querySelectorAll(".ss-zone-badge").forEach(t=>{const s=t.dataset.zoneId,l=this._findZoneAnchor(s);l&&this._positionBadge(t,l,e)})}_findZoneAnchor(e){const t=this.querySelector(".ss-wrap");if(!t)return null;const s=t.querySelector(".ss-grid");switch(e){case"toolbar":return t.querySelector(".ss-toolbar-fmt");case"cell-address":return t.querySelector(".ss-cell-label");case"formula-bar":return t.querySelector(".ss-formula-bar");case"col-header":return s?.querySelector("thead tr > th:nth-child(4)");case"row-header":return s?.querySelector("tbody tr:nth-child(3) > th");case"cell":return s?.querySelector('.ss-cell[data-ref="B5"]');case"range":return s?.querySelector(".ss-cell.ss-zone-range");case"multi":return s?.querySelector(".ss-cell.ss-zone-multi");case"active-cell":return s?.querySelector(".ss-cell.ss-zone-active");case"drag-handle":return s?.querySelector(".ss-drag-handle");case"sheet":return s;default:return null}}_onBadgeClick(e){e.classList.contains("ss-zone-ok")||(this.querySelectorAll(".ss-zone-badge.ss-zone-active-sel").forEach(t=>t.classList.remove("ss-zone-active-sel")),e.classList.add("ss-zone-active-sel"),this._activeBadge=e)}_onPillClick(e){if(e.classList.contains("ss-pill-used"))return;if(!this._activeBadge){const n=this.querySelector(".ss-vocab-panel-title");n&&(n.style.color="#dc2626",setTimeout(()=>{n.style.color=""},600));return}const t=this._activeBadge.dataset.zoneId,s=this._zonePairs.get(t),l=e.dataset.label===s;if(x(()=>import("./rapido-engine.DtNgV13a.js").then(n=>n.f),__vite__mapDeps([0,1,2])).then(n=>n.popSlogan?.(e,l)),l)this._activeBadge.classList.remove("ss-zone-active-sel"),this._activeBadge.classList.add("ss-zone-ok"),e.classList.add("ss-pill-used"),e.disabled=!0,this._zoneSolved.add(t),this._activeBadge=null,this._updateZoneStatus(),this._updatePhase(),this._zoneSolved.size===this._zonePairs.size&&x(()=>import("./vis-input.D23gReN4.js"),__vite__mapDeps([3,2,0,1])).then(n=>n.fireConfettiOnce?.(this));else{this._activeBadge.classList.add("ss-zone-ko");const n=this._activeBadge;setTimeout(()=>n.classList.remove("ss-zone-ko","ss-zone-active-sel"),400),this._activeBadge=null}}_updateZoneStatus(){const e=this.querySelector(".ss-vocab-status");if(!e)return;const t=this._zoneSolved.size,s=this._zonePairs.size;e.textContent=t+" / "+s,e.classList.toggle("ss-status-done",t===s),t===s&&(e.textContent="✓ "+t+" / "+s+"  —  Bravo !")}_buildDom(){const e=document.createElement("div");e.className="ss-wrap";const t=document.createElement("div");t.className="ss-toolbar";const s=document.createElement("div");s.className="ss-toolbar-row ss-toolbar-fmt",[{fmt:"bold",label:"B",title:"Gras"},{fmt:"italic",label:"I",title:"Italique"},{fmt:"underline",label:"U",title:"Souligné"},{fmt:"color",label:"A",title:"Couleur du texte"},{fmt:"sep",label:"",title:""},{fmt:"align-left",label:"⬅",title:"Aligner à gauche"},{fmt:"align-center",label:"⬛",title:"Centrer"},{fmt:"align-right",label:"➡",title:"Aligner à droite"}].forEach(({fmt:m,label:h,title:_})=>{if(m==="sep"){const g=document.createElement("span");g.className="ss-tb-fmt ss-tb-sep",s.appendChild(g);return}const f=document.createElement("button");f.type="button",f.className="ss-tb-fmt",f.dataset.fmt=m,f.textContent=h,f.title=_,f.setAttribute("aria-label",_),s.appendChild(f)}),t.appendChild(s);const n=document.createElement("div");n.className="ss-toolbar-row";const r=document.createElement("span");r.className="ss-cell-label",r.textContent="—",r.title="Adresse de la cellule",n.appendChild(r);const o=document.createElement("div");o.className="ss-formula-bar",o.textContent="",o.title="Barre de formule",n.appendChild(o);const a=document.createElement("button");a.type="button",a.textContent="↺",a.title="Annuler",a.addEventListener("click",()=>this._undoLast()),n.appendChild(a),t.appendChild(n),e.appendChild(t);const i=document.createElement("table");i.className="ss-grid";const d=document.createElement("thead"),c=document.createElement("tr");c.appendChild(document.createElement("th"));for(let m=0;m<this._cols;m++){const h=document.createElement("th");h.textContent=this._headers?.col?.[m]??E(m),c.appendChild(h)}d.appendChild(c),i.appendChild(d);const p=document.createElement("tbody");for(let m=0;m<this._rows;m++){const h=document.createElement("tr"),_=document.createElement("th");_.textContent=this._headers?.row?.[m]??String(m+1),h.appendChild(_);for(let f=0;f<this._cols;f++){const g=document.createElement("td");g.className="ss-cell",g.dataset.col=String(f),g.dataset.row=String(m),g.dataset.ref=v(f,m),this._paintCell(g),h.appendChild(g)}p.appendChild(h)}i.appendChild(p),e.appendChild(i),this.appendChild(e),this._tbody=p,this._fxBar=o,this._cellLabel=r,this._wireGridEvents(p)}_renderGrid(){this._tbody&&(this._recompute(),this._tbody.querySelectorAll(".ss-cell").forEach(e=>this._paintCell(e)),this._updatePhase())}_paintCell(e){const t=e.dataset.ref,s=this._cells.get(t);if(s&&s.target&&!this._showSolutions){let r=e.querySelector(".ss-target-input");if(!r)e.classList.add("ss-target"),s.sol.fillOnly&&e.classList.add("ss-fill-only"),r=document.createElement("input"),r.type="text",r.className="rapido-input ss-target-input",r.dataset.solutionType="spreadsheet-formula",r.dataset.ssRef=t,r.dataset.solution=s.sol.formula,r.placeholder=s.sol.fillOnly?"":"…",r.value=this._displayValueForFill(s,t),s.sol.fillOnly&&(r.readOnly=!0,r.title="Recopie depuis la cellule du dessus (drag-fill)"),e.textContent="",e.appendChild(r),r.addEventListener("focus",()=>{e.classList.add("ss-sel"),this._activeInput=r,s.raw&&r.value!==s.raw&&(r.value=s.raw),this._updateFormulaBar(t),this._ensureHandleForRef(t),this._highlightFormulaRefs(r.value)}),r.addEventListener("input",()=>{this._highlightFormulaRefs(r.value),this._updateFormulaBar(t,r.value)}),r.addEventListener("blur",()=>{this._clearRefHighlights(),this._activeInput===r&&(this._activeInput=null),e.classList.remove("ss-sel");const o=O(r.value);if(o!==s.raw&&(this._pushUndo(),s.raw=o,this._parseIntoCell(s),this._recompute(),this._repaintNonTargets(),this._updatePhase()),s.raw&&s.raw.startsWith("=")){const a=this._values.get(t);a!=null&&!(typeof a=="object"&&a.error)&&(r.value=z(a))}}),r.addEventListener("keydown",o=>{o.key==="Enter"?(o.preventDefault(),r.blur()):o.key==="Escape"&&(r.value=s.raw||"",r.blur())}),this._observeTargetInput(r,t);else{const o=this._displayValueForFill(s,t);document.activeElement!==r&&r.value!==o&&(r.value=o),e.classList.add("ss-target"),s.sol.fillOnly&&e.classList.add("ss-fill-only")}return}if(e.classList.remove("ss-locked","ss-target","ss-text","ss-num","ss-error"),e.querySelector(".ss-cell-input"))return;let n="";if(s){s.locked&&e.classList.add("ss-locked");const r=this._values.get(t);r&&typeof r=="object"&&r.error?(n=r.error,e.classList.add("ss-error")):typeof r=="number"?(n=z(r),e.classList.add("ss-num")):r!=null&&(n=String(r),e.classList.add("ss-text"))}e.textContent=n}_updateFormulaBar(e,t){const s=this._cells.get(e);this._cellLabel&&(this._cellLabel.textContent=e||"—"),this._fxBar&&(this._fxBar.textContent=t??s?.raw??"")}_wireGridEvents(e){e.addEventListener("click",t=>{if(this._refPickupActive)return;const s=t.target.closest(".ss-cell");s&&(t.target.classList?.contains("ss-cell-input")||this._selectCell(s))}),e.addEventListener("dblclick",t=>{const s=t.target.closest(".ss-cell");s&&this._beginEdit(s)}),e.addEventListener("keydown",t=>{if(t.key==="Enter"&&this._selected){const s=this._cellElement(this._selected.col,this._selected.row);s&&!s.querySelector(".ss-cell-input")&&(t.preventDefault(),this._beginEdit(s))}}),e.addEventListener("pointerdown",t=>{if(t.target.closest(".ss-fill-handle")&&this._selected){t.preventDefault(),this._startFill();return}const l=t.target.closest(".ss-cell");if(!l)return;const n=this._activeInput;!n||n.readOnly||this._isInRefPickupMode(n)&&(l.contains(n)||(t.preventDefault(),this._startRefPickup(l)))})}_isInRefPickupMode(e){const t=e.value||"";if(!t.startsWith("=")&&!t.startsWith("+"))return!1;const s=e.selectionStart??t.length,l=(t[s-1]||"").trim();return/[=+\-*/^(,;:<>]/.test(l)}_insertAtCursor(e,t){const s=e.value||"",l=e.selectionStart??s.length,n=e.selectionEnd??s.length,r=s.slice(0,l),o=s.slice(n);e.value=r+t+o;const a=l+t.length;e.setSelectionRange(a,a),e.dispatchEvent(new Event("input",{bubbles:!0}))}_startRefPickup(e){const t=this._activeInput;if(!t)return;const s=parseInt(e.dataset.col,10),l=parseInt(e.dataset.row,10),n=v(s,l),r=t.selectionStart??(t.value||"").length;this._insertAtCursor(t,n),this._refPickupActive=!0;const o=(c,p)=>{const h=document.elementFromPoint(c,p)?.closest?.(".ss-cell");return h&&this._tbody.contains(h)?h:null},a=(c,p)=>{const h=c===s&&p===l?n:n+":"+v(c,p),_=t.value.slice(0,r),f=t.value.slice(r+this._lastInsertedLen);t.value=_+h+f,this._lastInsertedLen=h.length;const g=r+h.length;t.setSelectionRange(g,g),t.focus(),t.dispatchEvent(new Event("input",{bubbles:!0}))};this._lastInsertedLen=n.length;const i=c=>{const p=o(c.clientX,c.clientY);if(!p)return;const m=parseInt(p.dataset.col,10),h=parseInt(p.dataset.row,10);a(m,h)},d=()=>{document.removeEventListener("pointermove",i),setTimeout(()=>{this._refPickupActive=!1},0),t.focus()};document.addEventListener("pointermove",i),document.addEventListener("pointerup",d,{once:!0})}_wireDocLevelListeners(){}_selectCell(e){if(this._selected){const l=this._cellElement(this._selected.col,this._selected.row);l?.classList.remove("ss-sel"),l?.querySelector(".ss-fill-handle")?.remove()}const t=parseInt(e.dataset.col,10),s=parseInt(e.dataset.row,10);this._selected={col:t,row:s},e.classList.add("ss-sel"),this._updateFormulaBar(e.dataset.ref),this._ensureHandleForRef(e.dataset.ref)}_ensureHandleForRef(e){const t=this._tbody?.querySelector(`.ss-cell[data-ref="${e}"]`);if(!t||t.querySelector(".ss-fill-handle")||t.querySelector(".ss-cell-input")||!this._cells.get(e)?.ast)return;const l=document.createElement("button");l.type="button",l.className="ss-fill-handle",l.title="Recopier (cliquer puis cliquer la cellule cible)",l.setAttribute("aria-label","Poignée de recopie"),t.appendChild(l)}_highlightFormulaRefs(e){if(this._clearRefHighlights(),!e)return;const t=String(e).trim();if(!t.startsWith("="))return;const s=w(t);if(s?.error)return;const l=[];k(s,l,new Map),l.forEach((r,o)=>{const a="ss-ref-hl-"+o%4;r.forEach(({col:i,row:d})=>{this._cellElement(i,d)?.classList.add(a)})})}_clearRefHighlights(){this._tbody&&this._tbody.querySelectorAll(".ss-ref-hl-0, .ss-ref-hl-1, .ss-ref-hl-2, .ss-ref-hl-3").forEach(e=>e.classList.remove("ss-ref-hl-0","ss-ref-hl-1","ss-ref-hl-2","ss-ref-hl-3"))}_repaintNonTargets(){if(this._tbody&&(this._tbody.querySelectorAll(".ss-cell").forEach(e=>{this._cells.get(e.dataset.ref)?.target&&!this._showSolutions||this._paintCell(e)}),this._selected)){const e=v(this._selected.col,this._selected.row);this._ensureHandleForRef(e)}}_cellElement(e,t){return this._tbody?.querySelector(`.ss-cell[data-col="${e}"][data-row="${t}"]`)}_beginEdit(e){const t=e.dataset.ref,s=this._cells.get(t)||{};if(s.locked)return;if(s.target){e.querySelector(".ss-cell-input, .rapido-input")?.focus();return}if(e.querySelector(".ss-cell-input"))return;const l=s.raw??"",n=document.createElement("input");n.type="text",n.className="ss-cell-input",n.value=l,e.textContent="",e.appendChild(n),n.focus(),n.select();const r=o=>{const a=o?n.value:l;if(o&&a!==l){this._pushUndo();let i=this._cells.get(t);i||(i={raw:"",locked:!1},this._cells.set(t,i)),i.raw=a,this._parseIntoCell(i),this._recompute()}this._renderGrid()};n.addEventListener("blur",()=>r(!0)),n.addEventListener("keydown",o=>{o.key==="Enter"?(o.preventDefault(),n.blur()):o.key==="Escape"&&(o.preventDefault(),r(!1))})}_startFill(){this._fillSource={...this._selected};const e=this._cellElement(this._fillSource.col,this._fillSource.row);e?.classList.add("ss-fill-source");const t=()=>{this._tbody.querySelectorAll(".ss-fill-preview").forEach(o=>o.classList.remove("ss-fill-preview"))},s=(o,a)=>{const d=document.elementFromPoint(o,a)?.closest?.(".ss-cell");return d&&this._tbody.contains(d)?d:null},l=(o,a)=>{t();const i=Math.min(this._fillSource.col,o),d=Math.max(this._fillSource.col,o),c=Math.min(this._fillSource.row,a),p=Math.max(this._fillSource.row,a);for(let m=c;m<=p;m++)for(let h=i;h<=d;h++){if(h===this._fillSource.col&&m===this._fillSource.row)continue;this._cellElement(h,m)?.classList.add("ss-fill-preview")}},n=o=>{const a=s(o.clientX,o.clientY);if(!a)return;const i=parseInt(a.dataset.col,10),d=parseInt(a.dataset.row,10);l(i,d)},r=o=>{document.removeEventListener("pointermove",n),t(),e?.classList.remove("ss-fill-source");const a=s(o.clientX,o.clientY);if(!a){this._fillSource=null;return}this._applyFill(a),this._fillSource=null};document.addEventListener("pointermove",n),document.addEventListener("pointerup",r,{once:!0})}_applyFill(e){const t=this._fillSource;if(!t)return;const s=v(t.col,t.row),l=this._cells.get(s);if(!l||!l.ast)return;const n=parseInt(e.dataset.col,10),r=parseInt(e.dataset.row,10),o=Math.min(t.col,n),a=Math.max(t.col,n),i=Math.min(t.row,r),d=Math.max(t.row,r);this._pushUndo();for(let c=i;c<=d;c++)for(let p=o;p<=a;p++){if(p===t.col&&c===t.row)continue;const m=v(p,c);if(this._cells.get(m)?.locked)continue;const _=p-t.col,f=c-t.row,g=R(l.ast,_,f),b=T(g);let S=this._cells.get(m);S||(S={raw:"",locked:!1},this._cells.set(m,S)),S.raw=b,this._parseIntoCell(S)}this._recompute(),this._renderGrid(),x(()=>import("./rapido-engine.DtNgV13a.js").then(c=>c.f),__vite__mapDeps([0,1,2])).then(c=>{this._targetCells().forEach(p=>{const m=this._cells.get(p);if(!m?.sol?.fillOnly||!m.raw)return;const h=this._tbody?.querySelector(`.ss-target-input[data-ss-ref="${p}"]`);if(!h)return;const _=this._isCorrect(p);c.renderFeedback?.(h,_?"correct":"incorrect")}),this.validate()&&x(()=>import("./vis-input.D23gReN4.js"),__vite__mapDeps([3,2,0,1])).then(p=>p.fireConfettiOnce?.(this))})}_pushUndo(){this._undo.length>=20&&this._undo.shift();const e={};for(const[t,s]of this._cells)e[t]={raw:s.raw,locked:s.locked,target:s.target,sol:s.sol};this._undo.push(e)}_undoLast(){const e=this._undo.pop();if(e){this._cells.clear();for(const[t,s]of Object.entries(e)){const l={raw:s.raw,locked:s.locked};s.target&&(l.target=!0,l.sol=s.sol),this._parseIntoCell(l),this._cells.set(t,l)}this._recompute(),this._renderGrid()}}_targetCells(){const e=[];for(const[t,s]of this._cells)s.target&&e.push(t);return e}_isCorrect(e){const t=this._cells.get(e);if(!t?.sol)return!1;const s=(t.raw||"").trim();if(s===""||t.sol.maxDollars!=null&&(s.match(/\$/g)||[]).length>t.sol.maxDollars)return!1;const l=w(t.sol.formula);if(t.sol.mode==="value"){const r=w(s.startsWith("=")?s:"="+s);if(r.error)return!1;const o=this._evaluateInContext(r),a=this._evaluateInContext(l);return typeof o=="number"&&typeof a=="number"&&Math.abs(o-a)<1e-9}const n=w(s);if(n.error)return!1;if(q(n,l))return!0;for(const r of t.sol.alt||[]){const o=w(r);if(!o.error&&q(n,o))return!0}return!1}_evaluateInContext(e){if(!e||e.error)return null;const s=L(e,{getCell:(l,n)=>{const r=v(l,n);this._values.has(r)||this._evaluateCell(r,new Set);const o=this._values.get(r);return o&&typeof o=="object"&&o.error?NaN:o===void 0?"":o}});return s&&typeof s=="object"&&s.error?null:s}_updatePhase(){if(this._mode==="identify-zones"){const r=this._zonePairs.size;if(r===0){this._currentPhase="cellule_vide";return}if(this._zoneSolved.size===r){this._currentPhase="done";return}if(this._zoneSolved.size===0){this._currentPhase="cellule_vide";return}this._currentPhase="erreur_calcul";return}if(this._mode==="cell-click"||this._mode==="range-drag"){if(!this._userSelection){this._currentPhase="cellule_vide";return}const r=this._userSelectionText().toUpperCase()===(this._currentTarget||"").trim().toUpperCase();this._currentPhase=r?"done":"erreur_calcul";return}if(this._mode==="cell-name"||this._mode==="range-name"){const o=(this.querySelector(".ss-name-input")?.value||"").trim();if(!o){this._currentPhase="cellule_vide";return}const a=(this._currentTarget||"").trim().toUpperCase();this._currentPhase=o.toUpperCase()===a?"done":"erreur_calcul";return}const e=this._targetCells();if(e.length===0){this._currentPhase="cellule_vide";return}let t=!0,s=!1,l=!1,n=!1;for(const r of e){const a=(this._cells.get(r)?.raw||"").trim();if(a===""){t=!1;continue}if(s=!0,w(a).error){n=!0,t=!1;continue}const d=this._values.get(r);d&&typeof d=="object"&&d.error&&(l=!0),this._isCorrect(r)||(t=!1)}t?this._currentPhase="done":n?this._currentPhase="formule_invalide":s?l?this._currentPhase="formule_invalide":this._currentPhase="erreur_calcul":this._currentPhase="cellule_vide"}_observeTargetInput(e,t){if(e._ssObserved)return;e._ssObserved=!0;const s=this.closest(".q-card");if(!s)return;const l=D(()=>{s.querySelector(".am-indice-panel.open")&&s.dispatchEvent(new CustomEvent("zefor-indice-auto-refresh",{detail:{studentValue:e.value,formula:e.value,phase:this.getCurrentPhase(),targetCell:t,source:this},bubbles:!0}))},300);e.addEventListener("input",l),new MutationObserver(()=>{e.classList.contains("incorrect")&&s.dispatchEvent(new CustomEvent("zefor-indice-auto-pop",{detail:{studentValue:e.value,formula:e.value,phase:this.getCurrentPhase(),targetCell:t,source:this},bubbles:!0}))}).observe(e,{attributes:!0,attributeFilter:["class"]})}}function k(u,e,t){if(!(!u||typeof u!="object"||u.error)){if(u.type==="ref"){const s="r:"+u.col+":"+u.row;t.has(s)||(t.set(s,e.length),e.push([{col:u.col,row:u.row}]));return}if(u.type==="range"){const s=u.a,l=u.b,n=Math.min(s.col,l.col),r=Math.max(s.col,l.col),o=Math.min(s.row,l.row),a=Math.max(s.row,l.row),i="g:"+n+":"+o+":"+r+":"+a;if(!t.has(i)){t.set(i,e.length);const d=[];for(let c=o;c<=a;c++)for(let p=n;p<=r;p++)d.push({col:p,row:c});e.push(d)}return}switch(u.type){case"unary":k(u.arg,e,t);break;case"binop":k(u.left,e,t),k(u.right,e,t);break;case"fn":u.args.forEach(s=>k(s,e,t));break}}}class M extends Error{constructor(e="#CYCLE!"){super(e),this.code=e}}function I(u){for(let e=u.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[u[e],u[t]]=[u[t],u[e]]}return u}function D(u,e){let t=null;return(...s)=>{t&&clearTimeout(t),t=setTimeout(()=>u(...s),e)}}customElements.get("math974-spreadsheet")||customElements.define("math974-spreadsheet",F);function Z(u,e,t){const s=t||u||{};if(!e)return JSON.parse(JSON.stringify(s));const l=(_,f)=>{if(typeof _=="number")return _;if(Array.isArray(_))return _[Math.floor(Math.random()*_.length)];if(typeof _=="string"&&_.includes("..")){const[g,b]=_.split("..").map(Number);return Math.floor(Math.random()*(b-g+1))+g}return f},n=(_,f)=>Array.isArray(_)&&_.length?_[Math.floor(Math.random()*_.length)]:f;let r=l(e.a,5),o=l(e.b,3);const a=n(e.op,"+");if(a==="-"&&r<o&&([r,o]=[o,r]),a==="/"){o=Math.max(1,o);const _=Math.max(1,Math.round(r/o));r=o*_}const i={"+":"la somme de a et b","-":"la différence entre a et b","*":"le produit de a par b","/":"le quotient de a par b"},d=s.targetCell||"C2",c={...s.cells||{}};c.A2=r,c.B2=o;const p=`=A2${a}B2`,m=a==="+"||a==="*"?[`=B2${a}A2`]:[],h=JSON.parse(JSON.stringify(s));return h.cells=c,h.op={symbol:a,label:i[a]||a},h.solutions={[d]:{formula:p,alt:m}},h}export{G as autoScale,W as defaultPosition,Z as randomize};
