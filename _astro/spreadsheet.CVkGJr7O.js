const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/rapido-engine.Da_DmB9I.js","_astro/rapidos-visuals-integration.6kAq61wk.js","_astro/editor.CJZspgfY.js","_astro/vis-input.C9mNmtZ4.js"])))=>i.map(i=>d[i]);
import{_ as E}from"./editor.CJZspgfY.js";import{ensureSharedStyles as H}from"./vis-input.C9mNmtZ4.js";import{formatValue as R,colToIdx as M,parseFormula as y,stringify as B,shiftRefs as O,evaluate as F,parseRef as k,idxToCol as q,astEqual as D}from"./formula-parser.CuBpGvtX.js";import"./rapido-engine.Da_DmB9I.js";import"./rapidos-visuals-integration.6kAq61wk.js";const te="east",se=!0,$="math974-spreadsheet-css",G=`
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
`;function V(){if(document.getElementById($))return;const m=document.createElement("style");m.id=$,m.textContent=G,document.head.appendChild(m)}function L(m,e){if(!m)return e;try{return JSON.parse(m)}catch{return e}}function x(m,e){return q(m)+(e+1)}function Z(m){return(m||"").trim()}class W extends HTMLElement{static get observedAttributes(){return["rows","cols","cells","locked","solutions","headers","mode","preset"]}constructor(){super(),this._cells=new Map,this._values=new Map,this._selected=null,this._undo=[],this._activeInput=null,this._currentPhase="cellule_vide",this._mode="formula",this._zonePairs=new Map,this._zoneSolved=new Set,this._activeBadge=null,this._currentTarget=""}connectedCallback(){V(),H(),this.closest(".variant-content")?.classList.add("ss-variant"),this.closest(".q-card")?.classList.add("has-ss"),this.getAttribute("mode")==="identify-zones"&&(this._autoScaleRO={disconnect:()=>{}}),this._render(),this._wireDocLevelListeners()}attributeChangedCallback(){this.isConnected&&this._render()}validate(){if(this._mode==="identify-zones")return this._zoneSolved.size===this._zonePairs.size&&this._zonePairs.size>0;if(this._mode==="cell-click"||this._mode==="range-drag")return this._userSelectionText().toUpperCase()===(this._currentTarget||"").trim().toUpperCase();if(this._mode==="cell-name"||this._mode==="range-name"){const s=(this.querySelector(".ss-name-input")?.value||"").trim().toUpperCase(),r=(this._currentTarget||"").trim().toUpperCase();return s===r&&r!==""}const e=this._targetCells();return e.length===0?!1:e.every(t=>this._isCorrect(t))}toggleSolution(){if(this._mode==="identify-zones"){this._zonePairs.forEach((e,t)=>{const s=this.querySelector(`.ss-zone-badge[data-zone-id="${t}"]`),r=Array.from(this.querySelectorAll(".ss-vocab-pill")).find(n=>n.dataset.label===e);s?.classList.remove("ss-zone-active-sel"),s?.classList.add("ss-zone-ok"),r?.classList.add("ss-pill-used"),r&&(r.disabled=!0),this._zoneSolved.add(t)}),this._updateZoneStatus(),this._updatePhase();return}this._showSolutions=!this._showSolutions,this._renderGrid()}getCurrentPhase(){return this._currentPhase}getCurrentStudentValue(){if(this._mode==="cell-click"||this._mode==="range-drag")return this._userSelectionText();if(this._mode==="cell-name"||this._mode==="range-name")return this.querySelector(".ss-name-input")?.value||"";if(this._activeInput){const e=this._activeInput.dataset.ssRef,t=this._cells.get(e);return t?.raw?t.raw:this._activeInput.value||""}for(const e of this._targetCells()){const t=this._cells.get(e);if(t?.raw&&!this._isCorrect(e))return t.raw}return""}_displayValueForFill(e,t){if(e?.target&&e.raw&&e.raw.startsWith("=")){const s=this._values.get(t);if(s!=null&&!(typeof s=="object"&&s.error))return R(s)}return e?.raw||""}_validateCell(e){if(this._mode==="cell-name"||this._mode==="range-name"){const s=(e.value||"").trim().toUpperCase(),r=(this._currentTarget||"").trim().toUpperCase();return s===r&&r!==""}const t=e.dataset.ssRef;return t?this._isCorrect(t):!1}_readFormula(e){const t=e.dataset.ssRef;return t&&this._cells.get(t)?.raw||""}_readAttrs(){this._rows=Math.max(1,parseInt(this.getAttribute("rows")||"6",10)),this._cols=Math.max(1,parseInt(this.getAttribute("cols")||"5",10));const e=L(this.getAttribute("cells"),{}),t=new Set(L(this.getAttribute("locked"),[])),s=L(this.getAttribute("solutions"),{}),r=L(this.getAttribute("headers"),null);this._declaredMode=this.getAttribute("mode")||"formula",this._mode=this._declaredMode,this._preset=L(this.getAttribute("preset"),null);const n=/^(.+?)(?:\[([rcl])\])?$/,l=/^([A-Z]+\d+)$/,o=/^([A-Z]+)(\d+):([A-Z]+)(\d+)$/;this._cells.clear();for(const[c,i]of Object.entries(e)){const d=n.exec(c),h=d?d[1]:c,f=d?d[2]:null,g=i==null?"":String(i),_=o.exec(h);if(_){const S=M(_[1]),C=M(_[3]),I=parseInt(_[2],10)-1,P=parseInt(_[4],10)-1;for(let z=I;z<=P;z++)for(let w=S;w<=C;w++){const T=x(w,z),N={raw:g,locked:t.has(T),align:f};this._parseIntoCell(N),this._cells.set(T,N)}continue}const p=l.exec(h),v=p?p[1]:h,b={raw:g,locked:t.has(v),align:f};this._parseIntoCell(b),this._cells.set(v,b)}for(const c of t)this._cells.has(c)||this._cells.set(c,{raw:"",locked:!0});const a=/^([A-Z]+)(\d+):([A-Z]+)(\d+)$/,u=(c,i,d)=>({formula:c,mode:d.mode||"formula",alt:Array.isArray(d.alt)?d.alt:[],fillOnly:i,maxDollars:typeof d.maxDollars=="number"?d.maxDollars:null});for(const[c,i]of Object.entries(s)){const d=a.exec(c);if(d){const f=i.formula||i,g=y(f);if(!g||g.error){console.warn("[spreadsheet] solutions range : formule invalide",f);continue}const _=M(d[1]),p=M(d[3]),v=parseInt(d[2],10)-1,b=parseInt(d[4],10)-1;for(let S=v;S<=b;S++)for(let C=_;C<=p;C++){const I=x(C,S),P=C===_&&S===v,z=P?f:B(O(g,C-_,S-v));let w=this._cells.get(I);w||(w={raw:"",locked:!1},this._cells.set(I,w)),w.target=!0,w.sol=u(z,!P,i)}continue}let h=this._cells.get(c);h||(h={raw:"",locked:!1},this._cells.set(c,h)),h.target=!0,h.sol=u(i.formula||i,!!i.fillOnly,i)}this._headers=r}_parseIntoCell(e){delete e.ast,delete e.parseError;const t=e.raw;if(typeof t=="string"&&t.trim().startsWith("=")){const s=y(t);s.error?e.parseError=s.error:e.ast=s}}_getCellValue(e,t){const s=x(e,t);this._values.has(s)||this._evaluateCell(s,new Set);const r=this._values.get(s);return r&&typeof r=="object"&&r.error?NaN:r}_evaluateCell(e,t){const s=this._cells.get(e);if(!s){this._values.set(e,"");return}if(s.ast){if(t.has(e)){this._values.set(e,{error:"#CYCLE!"});return}t.add(e);const r={getCell:(n,l)=>{const o=x(n,l);if(t.has(o))throw new U;this._values.has(o)||this._evaluateCell(o,t);const a=this._values.get(o);if(a&&typeof a=="object"&&a.error)throw new U(a.error);return a===void 0?"":a}};try{const n=F(s.ast,r);this._values.set(e,n)}catch(n){this._values.set(e,{error:n.code||"#CYCLE!"})}t.delete(e)}else{const r=s.raw;if(r===""||r==null){this._values.set(e,"");return}const n=parseFloat(String(r).replace(",","."));!isNaN(n)&&String(n)===String(r).replace(",",".").replace(/^\+/,"")?this._values.set(e,n):!isNaN(n)&&/^-?\d+([.,]\d+)?$/.test(String(r).trim())?this._values.set(e,n):this._values.set(e,String(r))}}_recompute(){this._values.clear();for(const e of this._cells.keys())this._values.has(e)||this._evaluateCell(e,new Set)}_render(){this._readAttrs(),this._pickTarget(),this.innerHTML="",this.setAttribute("data-mode",this._mode),this._recompute(),this._buildDom(),this._mode==="identify-zones"?(this._applyPresetSelections(),this._buildIdentifyZones()):this._mode==="cell-name"||this._mode==="range-name"?(this._applyTargetPreset(),this._buildNamingPanel()):(this._mode==="cell-click"||this._mode==="range-drag")&&this._buildClickInstruction(),this._updatePhase(),E(()=>import("./rapido-engine.Da_DmB9I.js").then(e=>e.h),__vite__mapDeps([0,1,2])).then(e=>e.wireCardInputs?.(this.closest(".q-card")))}_pickTarget(){const e=Array.isArray(this._preset?.targets)?this._preset.targets:null;e&&e.length>0?this._currentTarget=e[Math.floor(Math.random()*e.length)]:this._currentTarget=(this._preset?.target||"").trim(),this._declaredMode==="cell"?this._mode=Math.random()<.5?"cell-click":"cell-name":this._declaredMode==="range"&&(this._mode=Math.random()<.5?"range-drag":"range-name")}randomize(){this._render()}_applyTargetPreset(){if(!this._tbody||this._preset?.noHighlight)return;const e=this._currentTarget;if(e)if(e.includes(":")){const[t,s]=e.split(":"),r=k(t),n=k(s);if(!r||!n)return;const l=Math.min(r.col,n.col),o=Math.max(r.col,n.col),a=Math.min(r.row,n.row),u=Math.max(r.row,n.row);for(let c=a;c<=u;c++)for(let i=l;i<=o;i++)this._cellElement(i,c)?.classList.add("ss-user-sel")}else{const t=k(e);if(!t)return;this._cellElement(t.col,t.row)?.classList.add("ss-user-sel","ss-user-sel-anchor")}}_buildNamingPanel(){const e=this._currentTarget,t=this._mode==="range-name",s=!!this._preset?.noHighlight,r=document.createElement("div");r.className="ss-vocab-panel";const n=t?"ex. B2:D4":"ex. C5",l=s?`<div class="ss-vocab-panel-title">${this._buildTargetDescription(e,t)}</div>`:"";r.innerHTML=`
      ${l}
      <input class="rapido-input ss-name-input" type="text"
             data-solution-type="spreadsheet-formula"
             data-solution="${e}"
             data-ss-ref="__name__"
             placeholder="${n}"
             autocomplete="off" spellcheck="false" />
    `,this.appendChild(r)}_buildTargetDescription(e,t){if(!e)return"";if(t){const[r,n]=e.split(":"),l=k(r),o=k(n);if(!l||!o)return`→ Plage : ${e}`;const a=Math.min(l.col,o.col),u=Math.max(l.col,o.col),c=Math.min(l.row,o.row),i=Math.max(l.row,o.row);return`→ Plage du coin <strong>colonne ${q(a)}, ligne ${c+1}</strong> jusqu'au coin <strong>colonne ${q(u)}, ligne ${i+1}</strong>.`}const s=k(e);return s?`→ Colonne <strong>${q(s.col)}</strong>, ligne <strong>${s.row+1}</strong>.`:`→ Cellule : ${e}`}_buildClickInstruction(){const e=this._currentTarget,t=document.createElement("div");t.className="ss-vocab-panel",t.innerHTML=`
      <div class="ss-vocab-panel-title">→ Cible : <strong>${e}</strong></div>
      <div class="ss-vocab-status">${this._userSelectionText()||"(aucune sélection)"}</div>
    `,this.appendChild(t),this._userSelTarget=e,this._wireUserDragSelect()}_userSelectionText(){const e=this._userSelection;if(!e)return"";const t=x(e.c1,e.r1),s=x(e.c2,e.r2);return t===s?t:t+":"+s}_refreshClickStatus(){const e=this.querySelector(".ss-vocab-panel .ss-vocab-status");if(!e)return;const t=this._userSelectionText()||"(aucune sélection)",s=(this._currentTarget||"").trim().toUpperCase(),r=t.toUpperCase();s&&r===s?(e.textContent="✓ "+t,e.classList.add("ss-status-done")):(e.textContent=t,e.classList.remove("ss-status-done"))}_setUserSelection(e,t,s,r){this._clearUserSelection();const n=Math.min(e,s),l=Math.max(e,s),o=Math.min(t,r),a=Math.max(t,r);this._userSelection={c1:n,r1:o,c2:l,r2:a};for(let u=o;u<=a;u++)for(let c=n;c<=l;c++)this._cellElement(c,u)?.classList.add("ss-user-sel");this._cellElement(e,t)?.classList.add("ss-user-sel-anchor"),this._refreshClickStatus(),this._updatePhase()}_clearUserSelection(){this._tbody&&(this._tbody.querySelectorAll(".ss-user-sel, .ss-user-sel-anchor").forEach(e=>e.classList.remove("ss-user-sel","ss-user-sel-anchor")),this._userSelection=null)}_wireUserDragSelect(){!this._tbody||this._userDragWired||(this._userDragWired=!0,this._tbody.addEventListener("pointerdown",e=>{if(this._mode!=="cell-click"&&this._mode!=="range-drag")return;const t=e.target.closest(".ss-cell");if(!t)return;e.preventDefault();const s=parseInt(t.dataset.col,10),r=parseInt(t.dataset.row,10);this._setUserSelection(s,r,s,r);const n=(a,u)=>{const i=document.elementFromPoint(a,u)?.closest?.(".ss-cell");return i&&this._tbody.contains(i)?i:null},l=a=>{const u=n(a.clientX,a.clientY);if(!u)return;const c=parseInt(u.dataset.col,10),i=parseInt(u.dataset.row,10);this._mode!=="cell-click"&&this._setUserSelection(s,r,c,i)},o=a=>{document.removeEventListener("pointermove",l),this._fireSelectionFeedback()};document.addEventListener("pointermove",l),document.addEventListener("pointerup",o,{once:!0})}))}_fireSelectionFeedback(){const e=this.validate(),t=this._userSelection;if(!t)return;const s=this._cellElement(t.c1,t.r1);s&&(E(()=>import("./rapido-engine.Da_DmB9I.js").then(r=>r.f),__vite__mapDeps([0,1,2])).then(r=>r.popSlogan?.(s,e)),e&&E(()=>import("./vis-input.C9mNmtZ4.js"),__vite__mapDeps([3,2,0,1])).then(r=>r.fireConfettiOnce?.(this)))}_applyPresetSelections(){if(!this._tbody)return;const e=this._preset||{active:"C3",range:["D2","E2","D3","E3","D4","E4"],multi:["A6","C6"]};if(e.active){const t=this._tbody.querySelector(`.ss-cell[data-ref="${e.active}"]`);if(t&&(t.classList.add("ss-zone-active"),!t.querySelector(".ss-drag-handle"))){const s=document.createElement("span");s.className="ss-drag-handle",t.appendChild(s)}}(e.range||[]).forEach(t=>{this._tbody.querySelector(`.ss-cell[data-ref="${t}"]`)?.classList.add("ss-zone-range")}),(e.multi||[]).forEach(t=>{this._tbody.querySelector(`.ss-cell[data-ref="${t}"]`)?.classList.add("ss-zone-multi")})}_buildIdentifyZones(){const e=this.querySelector(".ss-wrap");if(!e)return;const t=this._preset?.active;if(t){const p=e.querySelector(".ss-cell-label");p&&(p.textContent=t);const v=e.querySelector(".ss-formula-bar"),b=this._cells.get(t);v&&b&&b.raw!=null&&b.raw!==""&&(v.textContent=String(b.raw))}const s=e.querySelector(".ss-grid"),r=s?.querySelector("thead tr > th:nth-child(4)"),n=s?.querySelector("tbody tr:nth-child(3) > th"),l=s?.querySelector('.ss-cell[data-ref="B5"]');s?.querySelector(".ss-cell.ss-zone-range");const o=s?.querySelector(".ss-cell.ss-zone-multi"),a=s?.querySelector(".ss-cell.ss-zone-active"),u=s?.querySelector(".ss-drag-handle"),c=[{id:"toolbar",label:"Barre d'outils",anchor:e.querySelector(".ss-toolbar-fmt")},{id:"cell-address",label:"Adresse de la cellule",anchor:e.querySelector(".ss-cell-label")},{id:"formula-bar",label:"Barre de formule",anchor:e.querySelector(".ss-formula-bar")},{id:"col-header",label:"En-tête de colonne",anchor:r},{id:"row-header",label:"En-tête de ligne",anchor:n},{id:"cell",label:"Cellule",anchor:l},{id:"multi",label:"Cellules sélectionnées",anchor:o},{id:"active-cell",label:"Cellule active",anchor:a},{id:"drag-handle",label:"Poignée de recopie",anchor:u},{id:"sheet",label:"Feuille de calcul",anchor:s}].filter(p=>p.anchor);j(c),c.length=Math.min(4,c.length),this._zonePairs=new Map(c.map(p=>[p.id,p.label])),this._zoneSolved=new Set,this._activeBadge=null;const i=document.createElement("div");i.className="ss-zone-overlay-layer",i.style.cssText="position:absolute; top:0; left:0; right:0; bottom:0; pointer-events:none;",e.appendChild(i),c.forEach((p,v)=>{const b=document.createElement("button");b.type="button",b.className="ss-zone-badge",b.dataset.zoneId=p.id,b.textContent=String(v+1),b.title="Clique pour identifier cette zone",b.addEventListener("click",()=>this._onBadgeClick(b)),i.appendChild(b),this._positionBadge(b,p.anchor,e)});const d=document.createElement("div");d.className="ss-vocab-panel",d.innerHTML=`
      <div class="ss-vocab-pills"></div>
      <div class="ss-vocab-status">${this._zoneSolved.size} / ${this._zonePairs.size}</div>
    `;const h=d.querySelector(".ss-vocab-pills"),f=c.map(p=>p.label);j(f),f.forEach(p=>{const v=document.createElement("button");v.type="button",v.className="ss-vocab-pill",v.textContent=p,v.dataset.label=p,v.addEventListener("click",()=>this._onPillClick(v)),h.appendChild(v)});const g=document.createElement("div");g.className="ss-host-flex",g.appendChild(e),g.appendChild(d),this.appendChild(g),this._autoScaleRO?.unobserve&&this._autoScaleRO.disconnect(),this._autoScaleRO={disconnect:()=>{}},this.style.transform="none",this.style.width="100%",this.style.height="100%",this.style.display="block";const _=this.parentElement;if(_&&(_.style.height="100%",_.style.width="100%",_.style.alignItems=""),!this._zoneResizeWired){this._zoneResizeWired=!0;const p=new ResizeObserver(()=>this._repositionZoneBadges());p.observe(e),this._zoneRO=p}}_positionBadge(e,t,s){if(!t||!s)return;const r=t.getBoundingClientRect(),n=s.getBoundingClientRect(),l=e.dataset.zoneId,o=l==="active-cell"||l==="cell-address",a=r.top-n.top+s.scrollTop+(o?r.height:r.height/2),u=r.left-n.left+s.scrollLeft+r.width/2;e.style.top=a+"px",e.style.left=u+"px",e.style.transform=l==="drag-handle"?"translate(-100%, -100%)":o?"translate(-50%, 0)":"translate(-50%, -50%)"}_repositionZoneBadges(){const e=this.querySelector(".ss-wrap");e&&e.querySelectorAll(".ss-zone-badge").forEach(t=>{const s=t.dataset.zoneId,r=this._findZoneAnchor(s);r&&this._positionBadge(t,r,e)})}_findZoneAnchor(e){const t=this.querySelector(".ss-wrap");if(!t)return null;const s=t.querySelector(".ss-grid");switch(e){case"toolbar":return t.querySelector(".ss-toolbar-fmt");case"cell-address":return t.querySelector(".ss-cell-label");case"formula-bar":return t.querySelector(".ss-formula-bar");case"col-header":return s?.querySelector("thead tr > th:nth-child(4)");case"row-header":return s?.querySelector("tbody tr:nth-child(3) > th");case"cell":return s?.querySelector('.ss-cell[data-ref="B5"]');case"range":return s?.querySelector(".ss-cell.ss-zone-range");case"multi":return s?.querySelector(".ss-cell.ss-zone-multi");case"active-cell":return s?.querySelector(".ss-cell.ss-zone-active");case"drag-handle":return s?.querySelector(".ss-drag-handle");case"sheet":return s;default:return null}}_onBadgeClick(e){e.classList.contains("ss-zone-ok")||(this.querySelectorAll(".ss-zone-badge.ss-zone-active-sel").forEach(t=>t.classList.remove("ss-zone-active-sel")),e.classList.add("ss-zone-active-sel"),this._activeBadge=e)}_onPillClick(e){if(e.classList.contains("ss-pill-used"))return;if(!this._activeBadge){const n=this.querySelector(".ss-vocab-panel-title");n&&(n.style.color="#dc2626",setTimeout(()=>{n.style.color=""},600));return}const t=this._activeBadge.dataset.zoneId,s=this._zonePairs.get(t),r=e.dataset.label===s;if(E(()=>import("./rapido-engine.Da_DmB9I.js").then(n=>n.f),__vite__mapDeps([0,1,2])).then(n=>n.popSlogan?.(e,r)),r)this._activeBadge.classList.remove("ss-zone-active-sel"),this._activeBadge.classList.add("ss-zone-ok"),e.classList.add("ss-pill-used"),e.disabled=!0,this._zoneSolved.add(t),this._activeBadge=null,this._updateZoneStatus(),this._updatePhase(),this._zoneSolved.size===this._zonePairs.size&&E(()=>import("./vis-input.C9mNmtZ4.js"),__vite__mapDeps([3,2,0,1])).then(n=>n.fireConfettiOnce?.(this));else{this._activeBadge.classList.add("ss-zone-ko");const n=this._activeBadge;setTimeout(()=>n.classList.remove("ss-zone-ko","ss-zone-active-sel"),400),this._activeBadge=null}}_updateZoneStatus(){const e=this.querySelector(".ss-vocab-status");if(!e)return;const t=this._zoneSolved.size,s=this._zonePairs.size;e.textContent=t+" / "+s,e.classList.toggle("ss-status-done",t===s),t===s&&(e.textContent="✓ "+t+" / "+s+"  —  Bravo !")}_buildDom(){const e=document.createElement("div");e.className="ss-wrap";const t=document.createElement("div");t.className="ss-toolbar";const s=document.createElement("div");s.className="ss-toolbar-row ss-toolbar-fmt",[{fmt:"bold",label:"B",title:"Gras"},{fmt:"italic",label:"I",title:"Italique"},{fmt:"underline",label:"U",title:"Souligné"},{fmt:"color",label:"A",title:"Couleur du texte"},{fmt:"sep",label:"",title:""},{fmt:"align-left",label:"⬅",title:"Aligner à gauche"},{fmt:"align-center",label:"⬛",title:"Centrer"},{fmt:"align-right",label:"➡",title:"Aligner à droite"}].forEach(({fmt:h,label:f,title:g})=>{if(h==="sep"){const p=document.createElement("span");p.className="ss-tb-fmt ss-tb-sep",s.appendChild(p);return}const _=document.createElement("button");_.type="button",_.className="ss-tb-fmt",_.dataset.fmt=h,_.textContent=f,_.title=g,_.setAttribute("aria-label",g),s.appendChild(_)}),t.appendChild(s);const n=document.createElement("div");n.className="ss-toolbar-row";const l=document.createElement("span");l.className="ss-cell-label",l.textContent="—",l.title="Adresse de la cellule",n.appendChild(l);const o=document.createElement("div");o.className="ss-formula-bar",o.textContent="",o.title="Barre de formule",n.appendChild(o);const a=document.createElement("button");a.type="button",a.textContent="↺",a.title="Annuler",a.addEventListener("click",()=>this._undoLast()),n.appendChild(a),t.appendChild(n),e.appendChild(t);const u=document.createElement("table");u.className="ss-grid";const c=document.createElement("thead"),i=document.createElement("tr");i.appendChild(document.createElement("th"));for(let h=0;h<this._cols;h++){const f=document.createElement("th");f.textContent=this._headers?.col?.[h]??q(h),i.appendChild(f)}c.appendChild(i),u.appendChild(c);const d=document.createElement("tbody");for(let h=0;h<this._rows;h++){const f=document.createElement("tr"),g=document.createElement("th");g.textContent=this._headers?.row?.[h]??String(h+1),f.appendChild(g);for(let _=0;_<this._cols;_++){const p=document.createElement("td");p.className="ss-cell",p.dataset.col=String(_),p.dataset.row=String(h),p.dataset.ref=x(_,h),this._paintCell(p),f.appendChild(p)}d.appendChild(f)}u.appendChild(d),e.appendChild(u),this.appendChild(e),this._tbody=d,this._fxBar=o,this._cellLabel=l,this._wireGridEvents(d)}_renderGrid(){this._tbody&&(this._recompute(),this._tbody.querySelectorAll(".ss-cell").forEach(e=>this._paintCell(e)),this._updatePhase())}_paintCell(e){const t=e.dataset.ref,s=this._cells.get(t);if(e.classList.remove("ss-align-l","ss-align-c","ss-align-r"),s?.align&&e.classList.add("ss-align-"+s.align),s&&s.target&&!this._showSolutions){let l=e.querySelector(".ss-target-input");if(!l)e.classList.add("ss-target"),s.sol.fillOnly&&e.classList.add("ss-fill-only"),l=document.createElement("input"),l.type="text",l.className="rapido-input ss-target-input",l.dataset.solutionType="spreadsheet-formula",l.dataset.ssRef=t,l.dataset.solution=s.sol.formula,l.placeholder=s.sol.fillOnly?"":"…",l.value=this._displayValueForFill(s,t),s.sol.fillOnly&&(l.readOnly=!0,l.title="Recopie depuis la cellule du dessus (drag-fill)"),e.textContent="",e.appendChild(l),l.addEventListener("focus",()=>{e.classList.add("ss-sel"),this._activeInput=l,s.raw&&l.value!==s.raw&&(l.value=s.raw),this._updateFormulaBar(t),this._ensureHandleForRef(t),this._highlightFormulaRefs(l.value)}),l.addEventListener("input",()=>{this._highlightFormulaRefs(l.value),this._updateFormulaBar(t,l.value)}),l.addEventListener("blur",()=>{this._clearRefHighlights(),this._activeInput===l&&(this._activeInput=null),e.classList.remove("ss-sel");const o=Z(l.value);if(o!==s.raw&&(this._pushUndo(),s.raw=o,this._parseIntoCell(s),this._recompute(),this._repaintNonTargets(),this._updatePhase()),s.raw&&s.raw.startsWith("=")){const a=this._values.get(t);a!=null&&!(typeof a=="object"&&a.error)&&(l.value=R(a))}}),l.addEventListener("keydown",o=>{o.key==="Enter"?(o.preventDefault(),l.blur()):o.key==="Escape"&&(l.value=s.raw||"",l.blur())}),this._observeTargetInput(l,t);else{const o=this._displayValueForFill(s,t);document.activeElement!==l&&l.value!==o&&(l.value=o),e.classList.add("ss-target"),s.sol.fillOnly&&e.classList.add("ss-fill-only")}return}if(e.classList.remove("ss-locked","ss-target","ss-text","ss-num","ss-error"),e.querySelector(".ss-cell-input"))return;let n="";if(s){s.locked&&e.classList.add("ss-locked");const l=this._values.get(t);l&&typeof l=="object"&&l.error?(n=l.error,e.classList.add("ss-error")):typeof l=="number"?(n=R(l),e.classList.add("ss-num")):l!=null&&(n=String(l),e.classList.add("ss-text"))}e.textContent=n}_updateFormulaBar(e,t){const s=this._cells.get(e);this._cellLabel&&(this._cellLabel.textContent=e||"—"),this._fxBar&&(this._fxBar.textContent=t??s?.raw??"")}_wireGridEvents(e){e.addEventListener("click",t=>{if(this._refPickupActive)return;const s=t.target.closest(".ss-cell");s&&(t.target.classList?.contains("ss-cell-input")||this._selectCell(s))}),e.addEventListener("dblclick",t=>{const s=t.target.closest(".ss-cell");s&&this._beginEdit(s)}),e.addEventListener("keydown",t=>{if(t.key==="Enter"&&this._selected){const s=this._cellElement(this._selected.col,this._selected.row);s&&!s.querySelector(".ss-cell-input")&&(t.preventDefault(),this._beginEdit(s))}}),e.addEventListener("pointerdown",t=>{if(t.target.closest(".ss-fill-handle")&&this._selected){t.preventDefault(),this._startFill();return}const r=t.target.closest(".ss-cell");if(!r)return;const n=this._activeInput;!n||n.readOnly||this._isInRefPickupMode(n)&&(r.contains(n)||(t.preventDefault(),this._startRefPickup(r)))})}_isInRefPickupMode(e){const t=e.value||"";if(!t.startsWith("=")&&!t.startsWith("+"))return!1;const s=e.selectionStart??t.length,r=(t[s-1]||"").trim();return/[=+\-*/^(,;:<>]/.test(r)}_insertAtCursor(e,t){const s=e.value||"",r=e.selectionStart??s.length,n=e.selectionEnd??s.length,l=s.slice(0,r),o=s.slice(n);e.value=l+t+o;const a=r+t.length;e.setSelectionRange(a,a),e.dispatchEvent(new Event("input",{bubbles:!0}))}_startRefPickup(e){const t=this._activeInput;if(!t)return;const s=parseInt(e.dataset.col,10),r=parseInt(e.dataset.row,10),n=x(s,r),l=t.selectionStart??(t.value||"").length;this._insertAtCursor(t,n),this._refPickupActive=!0;const o=(i,d)=>{const f=document.elementFromPoint(i,d)?.closest?.(".ss-cell");return f&&this._tbody.contains(f)?f:null},a=(i,d)=>{const f=i===s&&d===r?n:n+":"+x(i,d),g=t.value.slice(0,l),_=t.value.slice(l+this._lastInsertedLen);t.value=g+f+_,this._lastInsertedLen=f.length;const p=l+f.length;t.setSelectionRange(p,p),t.focus(),t.dispatchEvent(new Event("input",{bubbles:!0}))};this._lastInsertedLen=n.length;const u=i=>{const d=o(i.clientX,i.clientY);if(!d)return;const h=parseInt(d.dataset.col,10),f=parseInt(d.dataset.row,10);a(h,f)},c=()=>{document.removeEventListener("pointermove",u),setTimeout(()=>{this._refPickupActive=!1},0),t.focus()};document.addEventListener("pointermove",u),document.addEventListener("pointerup",c,{once:!0})}_wireDocLevelListeners(){}_selectCell(e){if(this._selected){const r=this._cellElement(this._selected.col,this._selected.row);r?.classList.remove("ss-sel"),r?.querySelector(".ss-fill-handle")?.remove()}const t=parseInt(e.dataset.col,10),s=parseInt(e.dataset.row,10);this._selected={col:t,row:s},e.classList.add("ss-sel"),this._updateFormulaBar(e.dataset.ref),this._ensureHandleForRef(e.dataset.ref)}_ensureHandleForRef(e){const t=this._tbody?.querySelector(`.ss-cell[data-ref="${e}"]`);if(!t||t.querySelector(".ss-fill-handle")||t.querySelector(".ss-cell-input")||!this._cells.get(e)?.ast)return;const r=document.createElement("button");r.type="button",r.className="ss-fill-handle",r.title="Recopier (cliquer puis cliquer la cellule cible)",r.setAttribute("aria-label","Poignée de recopie"),t.appendChild(r)}_highlightFormulaRefs(e){if(this._clearRefHighlights(),!e)return;const t=String(e).trim();if(!t.startsWith("="))return;const s=y(t);if(s?.error)return;const r=[];A(s,r,new Map),r.forEach((l,o)=>{const a="ss-ref-hl-"+o%4;l.forEach(({col:u,row:c})=>{this._cellElement(u,c)?.classList.add(a)})})}_clearRefHighlights(){this._tbody&&this._tbody.querySelectorAll(".ss-ref-hl-0, .ss-ref-hl-1, .ss-ref-hl-2, .ss-ref-hl-3").forEach(e=>e.classList.remove("ss-ref-hl-0","ss-ref-hl-1","ss-ref-hl-2","ss-ref-hl-3"))}_repaintNonTargets(){if(this._tbody&&(this._tbody.querySelectorAll(".ss-cell").forEach(e=>{this._cells.get(e.dataset.ref)?.target&&!this._showSolutions||this._paintCell(e)}),this._selected)){const e=x(this._selected.col,this._selected.row);this._ensureHandleForRef(e)}}_cellElement(e,t){return this._tbody?.querySelector(`.ss-cell[data-col="${e}"][data-row="${t}"]`)}_beginEdit(e){const t=e.dataset.ref,s=this._cells.get(t)||{};if(s.locked)return;if(s.target){e.querySelector(".ss-cell-input, .rapido-input")?.focus();return}if(e.querySelector(".ss-cell-input"))return;const r=s.raw??"",n=document.createElement("input");n.type="text",n.className="ss-cell-input",n.value=r,e.textContent="",e.appendChild(n),n.focus(),n.select();const l=o=>{const a=o?n.value:r;if(o&&a!==r){this._pushUndo();let u=this._cells.get(t);u||(u={raw:"",locked:!1},this._cells.set(t,u)),u.raw=a,this._parseIntoCell(u),this._recompute()}this._renderGrid()};n.addEventListener("blur",()=>l(!0)),n.addEventListener("keydown",o=>{o.key==="Enter"?(o.preventDefault(),n.blur()):o.key==="Escape"&&(o.preventDefault(),l(!1))})}_startFill(){this._fillSource={...this._selected};const e=this._cellElement(this._fillSource.col,this._fillSource.row);e?.classList.add("ss-fill-source");const t=()=>{this._tbody.querySelectorAll(".ss-fill-preview").forEach(o=>o.classList.remove("ss-fill-preview"))},s=(o,a)=>{const c=document.elementFromPoint(o,a)?.closest?.(".ss-cell");return c&&this._tbody.contains(c)?c:null},r=(o,a)=>{t();const u=Math.min(this._fillSource.col,o),c=Math.max(this._fillSource.col,o),i=Math.min(this._fillSource.row,a),d=Math.max(this._fillSource.row,a);for(let h=i;h<=d;h++)for(let f=u;f<=c;f++){if(f===this._fillSource.col&&h===this._fillSource.row)continue;this._cellElement(f,h)?.classList.add("ss-fill-preview")}},n=o=>{const a=s(o.clientX,o.clientY);if(!a)return;const u=parseInt(a.dataset.col,10),c=parseInt(a.dataset.row,10);r(u,c)},l=o=>{document.removeEventListener("pointermove",n),t(),e?.classList.remove("ss-fill-source");const a=s(o.clientX,o.clientY);if(!a){this._fillSource=null;return}this._applyFill(a),this._fillSource=null};document.addEventListener("pointermove",n),document.addEventListener("pointerup",l,{once:!0})}_applyFill(e){const t=this._fillSource;if(!t)return;const s=x(t.col,t.row),r=this._cells.get(s);if(!r||!r.ast)return;const n=parseInt(e.dataset.col,10),l=parseInt(e.dataset.row,10),o=Math.min(t.col,n),a=Math.max(t.col,n),u=Math.min(t.row,l),c=Math.max(t.row,l);this._pushUndo();for(let i=u;i<=c;i++)for(let d=o;d<=a;d++){if(d===t.col&&i===t.row)continue;const h=x(d,i);if(this._cells.get(h)?.locked)continue;const g=d-t.col,_=i-t.row,p=O(r.ast,g,_),v=B(p);let b=this._cells.get(h);b||(b={raw:"",locked:!1},this._cells.set(h,b)),b.raw=v,this._parseIntoCell(b)}this._recompute(),this._renderGrid(),E(()=>import("./rapido-engine.Da_DmB9I.js").then(i=>i.f),__vite__mapDeps([0,1,2])).then(i=>{this._targetCells().forEach(d=>{const h=this._cells.get(d);if(!h?.sol?.fillOnly||!h.raw)return;const f=this._tbody?.querySelector(`.ss-target-input[data-ss-ref="${d}"]`);if(!f)return;const g=this._isCorrect(d);i.renderFeedback?.(f,g?"correct":"incorrect")}),this.validate()&&E(()=>import("./vis-input.C9mNmtZ4.js"),__vite__mapDeps([3,2,0,1])).then(d=>d.fireConfettiOnce?.(this))})}_pushUndo(){this._undo.length>=20&&this._undo.shift();const e={};for(const[t,s]of this._cells)e[t]={raw:s.raw,locked:s.locked,target:s.target,sol:s.sol};this._undo.push(e)}_undoLast(){const e=this._undo.pop();if(e){this._cells.clear();for(const[t,s]of Object.entries(e)){const r={raw:s.raw,locked:s.locked};s.target&&(r.target=!0,r.sol=s.sol),this._parseIntoCell(r),this._cells.set(t,r)}this._recompute(),this._renderGrid()}}_targetCells(){const e=[];for(const[t,s]of this._cells)s.target&&e.push(t);return e}_isCorrect(e){const t=this._cells.get(e);if(!t?.sol)return!1;const s=(t.raw||"").trim();if(s===""||t.sol.maxDollars!=null&&(s.match(/\$/g)||[]).length>t.sol.maxDollars)return!1;const r=y(t.sol.formula);if(t.sol.mode==="value"){const l=y(s.startsWith("=")?s:"="+s);if(l.error)return!1;const o=this._evaluateInContext(l),a=this._evaluateInContext(r);return typeof o=="number"&&typeof a=="number"&&Math.abs(o-a)<1e-9}const n=y(s);if(n.error)return!1;if(D(n,r))return!0;for(const l of t.sol.alt||[]){const o=y(l);if(!o.error&&D(n,o))return!0}return!1}_evaluateInContext(e){if(!e||e.error)return null;const s=F(e,{getCell:(r,n)=>{const l=x(r,n);this._values.has(l)||this._evaluateCell(l,new Set);const o=this._values.get(l);return o&&typeof o=="object"&&o.error?NaN:o===void 0?"":o}});return s&&typeof s=="object"&&s.error?null:s}_updatePhase(){if(this._mode==="identify-zones"){const l=this._zonePairs.size;if(l===0){this._currentPhase="cellule_vide";return}if(this._zoneSolved.size===l){this._currentPhase="done";return}if(this._zoneSolved.size===0){this._currentPhase="cellule_vide";return}this._currentPhase="erreur_calcul";return}if(this._mode==="cell-click"||this._mode==="range-drag"){if(!this._userSelection){this._currentPhase="cellule_vide";return}const l=this._userSelectionText().toUpperCase()===(this._currentTarget||"").trim().toUpperCase();this._currentPhase=l?"done":"erreur_calcul";return}if(this._mode==="cell-name"||this._mode==="range-name"){const o=(this.querySelector(".ss-name-input")?.value||"").trim();if(!o){this._currentPhase="cellule_vide";return}const a=(this._currentTarget||"").trim().toUpperCase();this._currentPhase=o.toUpperCase()===a?"done":"erreur_calcul";return}const e=this._targetCells();if(e.length===0){this._currentPhase="cellule_vide";return}let t=!0,s=!1,r=!1,n=!1;for(const l of e){const a=(this._cells.get(l)?.raw||"").trim();if(a===""){t=!1;continue}if(s=!0,y(a).error){n=!0,t=!1;continue}const c=this._values.get(l);c&&typeof c=="object"&&c.error&&(r=!0),this._isCorrect(l)||(t=!1)}t?this._currentPhase="done":n?this._currentPhase="formule_invalide":s?r?this._currentPhase="formule_invalide":this._currentPhase="erreur_calcul":this._currentPhase="cellule_vide"}_observeTargetInput(e,t){if(e._ssObserved)return;e._ssObserved=!0;const s=this.closest(".q-card");if(!s)return;const r=Y(()=>{s.querySelector(".am-indice-panel.open")&&s.dispatchEvent(new CustomEvent("zefor-indice-auto-refresh",{detail:{studentValue:e.value,formula:e.value,phase:this.getCurrentPhase(),targetCell:t,source:this},bubbles:!0}))},300);e.addEventListener("input",r),new MutationObserver(()=>{e.classList.contains("incorrect")&&s.dispatchEvent(new CustomEvent("zefor-indice-auto-pop",{detail:{studentValue:e.value,formula:e.value,phase:this.getCurrentPhase(),targetCell:t,source:this},bubbles:!0}))}).observe(e,{attributes:!0,attributeFilter:["class"]})}}function A(m,e,t){if(!(!m||typeof m!="object"||m.error)){if(m.type==="ref"){const s="r:"+m.col+":"+m.row;t.has(s)||(t.set(s,e.length),e.push([{col:m.col,row:m.row}]));return}if(m.type==="range"){const s=m.a,r=m.b,n=Math.min(s.col,r.col),l=Math.max(s.col,r.col),o=Math.min(s.row,r.row),a=Math.max(s.row,r.row),u="g:"+n+":"+o+":"+l+":"+a;if(!t.has(u)){t.set(u,e.length);const c=[];for(let i=o;i<=a;i++)for(let d=n;d<=l;d++)c.push({col:d,row:i});e.push(c)}return}switch(m.type){case"unary":A(m.arg,e,t);break;case"binop":A(m.left,e,t),A(m.right,e,t);break;case"fn":m.args.forEach(s=>A(s,e,t));break}}}class U extends Error{constructor(e="#CYCLE!"){super(e),this.code=e}}function j(m){for(let e=m.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[m[e],m[t]]=[m[t],m[e]]}return m}function Y(m,e){let t=null;return(...s)=>{t&&clearTimeout(t),t=setTimeout(()=>m(...s),e)}}customElements.get("math974-spreadsheet")||customElements.define("math974-spreadsheet",W);function re(m,e,t){const s=t||m||{};if(!e)return JSON.parse(JSON.stringify(s));const r=(g,_)=>{if(typeof g=="number")return g;if(Array.isArray(g))return g[Math.floor(Math.random()*g.length)];if(typeof g=="string"&&g.includes("..")){const[p,v]=g.split("..").map(Number);return Math.floor(Math.random()*(v-p+1))+p}return _},n=(g,_)=>Array.isArray(g)&&g.length?g[Math.floor(Math.random()*g.length)]:_;let l=r(e.a,5),o=r(e.b,3);const a=n(e.op,"+");if(a==="-"&&l<o&&([l,o]=[o,l]),a==="/"){o=Math.max(1,o);const g=Math.max(1,Math.round(l/o));l=o*g}const u={"+":"la somme de a et b","-":"la différence entre a et b","*":"le produit de a par b","/":"le quotient de a par b"},c=s.targetCell||"C2",i={...s.cells||{}};i.A2=l,i.B2=o;const d=`=A2${a}B2`,h=a==="+"||a==="*"?[`=B2${a}A2`]:[],f=JSON.parse(JSON.stringify(s));return f.cells=i,f.op={symbol:a,label:u[a]||a},f.solutions={[c]:{formula:d,alt:h}},f}export{se as autoScale,te as defaultPosition,re as randomize};
