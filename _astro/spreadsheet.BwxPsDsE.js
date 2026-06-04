const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/rapido-engine.fuR8zAv5.js","_astro/preload-helper.CLcXU_4U.js","_astro/rapidos-visuals-integration.BNc-BNrO.js","_astro/js-yaml.CwjAzRNl.js","_astro/editor.Di92v2Ao.js","_astro/vis-input.BqjRCJt3.js"])))=>i.map(i=>d[i]);
import{_ as N}from"./preload-helper.CLcXU_4U.js";import{ensureSharedStyles as Y}from"./vis-input.BqjRCJt3.js";import{idxToCol as A,colToIdx as P,formatValue as T,parseFormula as I,stringify as U,shiftRefs as H,parseRef as $,evaluate as V,astEqual as Z}from"./formula-parser.BquFI94_.js";import"./rapido-engine.fuR8zAv5.js";import"./rapidos-visuals-integration.BNc-BNrO.js";import"./js-yaml.CwjAzRNl.js";import"./editor.Di92v2Ao.js";const ue="east",de=!0,G="math974-spreadsheet-css",X=`
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
  /* height auto (et NON 100%) : sinon la grille remplit la zone east étirée
     (.q-card.has-ss east align-self:stretch + minmax 0 1fr) et les LIGNES
     s'étirent en hauteur. En auto, chaque ligne reste à sa hauteur naturelle
     (plancher = min-height var(--ss-cell-h)) ; l'autoScale agrandit ensuite
     UNIFORMÉMENT (transform scale) si la zone est plus grande. */
  height: auto;
}
.ss-grid th, .ss-grid td {
  border: 1px solid var(--ss-bord);
  width: var(--ss-cell-w);
  min-height: var(--ss-cell-h);
  height: var(--ss-cell-h);              /* hauteur fixe = pas d'étirement */
  max-height: var(--ss-cell-h);          /* plafond serré = pas de débordement vertical */
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
/* Cellules fusionnées (DSL flèches [>] [<] [^] [v] dans la clé). Le coin
   haut-gauche porte colspan/rowspan ; les cellules couvertes ne sont pas
   rendues. white-space:normal → un titre large peut wrap dans le bloc. */
.ss-cell.ss-merged { white-space: normal; }
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
  /* flex 0 0 auto (et NON 1 1 auto) : la grille NE grandit PAS pour remplir la
     colonne flex → les LIGNES gardent leur hauteur naturelle (var(--ss-cell-h))
     au lieu de se distribuer sur toute la hauteur du panneau de pills. */
  flex: 0 0 auto;
  align-self: flex-start;
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
  /* flex 0 1 auto (et NON 1 1 0) : les chips NE grandissent PAS pour remplir
     le panneau (elles devenaient énormes en hauteur) ; elles gardent leur
     hauteur naturelle, plafonnée par max-height, et peuvent shrink si l'espace
     manque. Empilées en haut du panneau. */
  flex: 0 1 auto;
  min-height: 0;
  max-height: 52px;
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
`;function K(){if(document.getElementById(G))return;const w=document.createElement("style");w.id=G,w.textContent=X,document.head.appendChild(w)}function F(w,e){if(!w)return e;try{return JSON.parse(w)}catch{return e}}function z(w,e){return A(w)+(e+1)}function Q(w){let e=String(w);const t=[],s=/\[([^\]]*)\]$/;let r;for(;r=s.exec(e);)t.unshift(r[1]),e=e.slice(0,e.length-r[0].length);let o=null;const l={l:0,r:0,u:0,d:0};let n=!1;for(const a of t){if(a==="r"||a==="c"||a==="l"){o=a;continue}for(const c of a)c===">"?(l.r++,n=!0):c==="<"?(l.l++,n=!0):c==="^"?(l.u++,n=!0):c==="v"&&(l.d++,n=!0)}return{base:e,align:o,merge:n?l:null}}function ee(w){return(w||"").trim()}class te extends HTMLElement{static get observedAttributes(){return["rows","cols","cells","locked","solutions","headers","mode","preset","chart"]}constructor(){super(),this._cells=new Map,this._values=new Map,this._selected=null,this._undo=[],this._activeInput=null,this._currentPhase="cellule_vide",this._mode="formula",this._zonePairs=new Map,this._zoneSolved=new Set,this._activeBadge=null,this._currentTarget=""}connectedCallback(){K(),Y(),this.closest(".variant-content")?.classList.add("ss-variant"),this.closest(".q-card")?.classList.add("has-ss"),this.getAttribute("mode")==="identify-zones"&&(this._autoScaleRO={disconnect:()=>{}}),this._render(),this._wireDocLevelListeners()}attributeChangedCallback(){this.isConnected&&this._render()}validate(){if(this._mode==="identify-zones")return this._zoneSolved.size===this._zonePairs.size&&this._zonePairs.size>0;if(this._mode==="cell-click"||this._mode==="range-drag")return this._userSelectionText().toUpperCase()===(this._currentTarget||"").trim().toUpperCase();if(this._mode==="cell-name"||this._mode==="range-name"){const s=(this.querySelector(".ss-name-input")?.value||"").trim().toUpperCase(),r=(this._currentTarget||"").trim().toUpperCase();return s===r&&r!==""}const e=this._targetCells();return e.length===0?!1:e.every(t=>this._isCorrect(t))}toggleSolution(){if(this._mode==="identify-zones"){this._zonePairs.forEach((e,t)=>{const s=this.querySelector(`.ss-zone-badge[data-zone-id="${t}"]`),r=Array.from(this.querySelectorAll(".ss-vocab-pill")).find(o=>o.dataset.label===e);s?.classList.remove("ss-zone-active-sel"),s?.classList.add("ss-zone-ok"),r?.classList.add("ss-pill-used"),r&&(r.disabled=!0),this._zoneSolved.add(t)}),this._updateZoneStatus(),this._updatePhase();return}this._showSolutions=!this._showSolutions,this._renderGrid()}getCurrentPhase(){return this._currentPhase}getCurrentStudentValue(){if(this._mode==="cell-click"||this._mode==="range-drag")return this._userSelectionText();if(this._mode==="cell-name"||this._mode==="range-name")return this.querySelector(".ss-name-input")?.value||"";if(this._activeInput){const e=this._activeInput.dataset.ssRef,t=this._cells.get(e);return t?.raw?t.raw:this._activeInput.value||""}for(const e of this._targetCells()){const t=this._cells.get(e);if(t?.raw&&!this._isCorrect(e))return t.raw}return""}_displayValueForFill(e,t){if(e?.target&&e.raw&&e.raw.startsWith("=")){const s=this._values.get(t);if(s!=null&&!(typeof s=="object"&&s.error))return T(s)}return e?.raw||""}_validateCell(e){if(this._mode==="cell-name"||this._mode==="range-name"){const s=(e.value||"").trim().toUpperCase(),r=(this._currentTarget||"").trim().toUpperCase();return s===r&&r!==""}const t=e.dataset.ssRef;return t?this._isCorrect(t):!1}_readFormula(e){const t=e.dataset.ssRef;return t&&this._cells.get(t)?.raw||""}_readAttrs(){this._rows=Math.max(1,parseInt(this.getAttribute("rows")||"6",10)),this._cols=Math.max(1,parseInt(this.getAttribute("cols")||"5",10));const e=F(this.getAttribute("cells"),{}),t=new Set(F(this.getAttribute("locked"),[])),s=F(this.getAttribute("solutions"),{}),r=F(this.getAttribute("headers"),null);this._declaredMode=this.getAttribute("mode")||"formula",this._mode=this._declaredMode,this._preset=F(this.getAttribute("preset"),null),this._chart=F(this.getAttribute("chart"),null);const o=/^([A-Z]+\d+)$/,l=/^([A-Z]+)(\d+):([A-Z]+)(\d+)$/;this._cells.clear();for(const[c,d]of Object.entries(e)){const{base:u,align:g,merge:b}=Q(c),_=d==null?"":String(d),h=l.exec(u);if(h){const m=P(h[1]),C=P(h[3]),E=parseInt(h[2],10)-1,S=parseInt(h[4],10)-1;for(let M=E;M<=S;M++)for(let x=m;x<=C;x++){const k=z(x,M),y={raw:_,locked:t.has(k),align:g};this._parseIntoCell(y),this._cells.set(k,y)}continue}const i=o.exec(u),f=i?i[1]:u,p={raw:_,locked:t.has(f),align:g,merge:b};this._parseIntoCell(p),this._cells.set(f,p)}for(const c of t)this._cells.has(c)||this._cells.set(c,{raw:"",locked:!0});const n=/^([A-Z]+)(\d+):([A-Z]+)(\d+)$/,a=(c,d,u)=>({formula:c,mode:u.mode||"formula",alt:Array.isArray(u.alt)?u.alt:[],fillOnly:d,maxDollars:typeof u.maxDollars=="number"?u.maxDollars:null});for(const[c,d]of Object.entries(s)){const u=n.exec(c);if(u){const b=d.formula||d,_=I(b);if(!_||_.error){console.warn("[spreadsheet] solutions range : formule invalide",b);continue}const h=P(u[1]),i=P(u[3]),f=parseInt(u[2],10)-1,p=parseInt(u[4],10)-1;for(let m=f;m<=p;m++)for(let C=h;C<=i;C++){const E=z(C,m),S=C===h&&m===f,M=S?b:U(H(_,C-h,m-f));let x=this._cells.get(E);x||(x={raw:"",locked:!1},this._cells.set(E,x)),x.target=!0,x.sol=a(M,!S,d)}continue}let g=this._cells.get(c);g||(g={raw:"",locked:!1},this._cells.set(c,g)),g.target=!0,g.sol=a(d.formula||d,!!d.fillOnly,d)}this._headers=r,this._computeMerges()}_computeMerges(){this._mergeSpans=new Map,this._mergeCovered=new Set;const e=[];for(const[t,s]of this._cells)s.merge&&e.push([t,s]);for(const[t,s]of e){const r=$(t);if(!r)continue;const o=s.merge,l=Math.max(0,r.col-(o.l||0)),n=Math.min(this._cols-1,r.col+(o.r||0)),a=Math.max(0,r.row-(o.u||0)),c=Math.min(this._rows-1,r.row+(o.d||0)),d=n-l+1,u=c-a+1;if(d<=1&&u<=1)continue;const g=z(l,a);g!==t&&this._cells.set(g,s),this._mergeSpans.set(g,{colspan:d,rowspan:u});for(let b=a;b<=c;b++)for(let _=l;_<=n;_++){const h=z(_,b);h!==g&&this._mergeCovered.add(h)}}}_parseIntoCell(e){delete e.ast,delete e.parseError;const t=e.raw;if(typeof t=="string"&&t.trim().startsWith("=")){const s=I(t);s.error?e.parseError=s.error:e.ast=s}}_getCellValue(e,t){const s=z(e,t);this._values.has(s)||this._evaluateCell(s,new Set);const r=this._values.get(s);return r&&typeof r=="object"&&r.error?NaN:r}_evaluateCell(e,t){const s=this._cells.get(e);if(!s){this._values.set(e,"");return}if(s.ast){if(t.has(e)){this._values.set(e,{error:"#CYCLE!"});return}t.add(e);const r={getCell:(o,l)=>{const n=z(o,l);if(t.has(n))throw new W;this._values.has(n)||this._evaluateCell(n,t);const a=this._values.get(n);if(a&&typeof a=="object"&&a.error)throw new W(a.error);return a===void 0?"":a}};try{const o=V(s.ast,r);this._values.set(e,o)}catch(o){this._values.set(e,{error:o.code||"#CYCLE!"})}t.delete(e)}else{const r=s.raw;if(r===""||r==null){this._values.set(e,"");return}const o=parseFloat(String(r).replace(",","."));!isNaN(o)&&String(o)===String(r).replace(",",".").replace(/^\+/,"")?this._values.set(e,o):!isNaN(o)&&/^-?\d+([.,]\d+)?$/.test(String(r).trim())?this._values.set(e,o):this._values.set(e,String(r))}}_recompute(){this._values.clear();for(const e of this._cells.keys())this._values.has(e)||this._evaluateCell(e,new Set)}_render(){this._readAttrs(),this._pickTarget(),this.innerHTML="",this.setAttribute("data-mode",this._mode),this._recompute(),this._buildDom(),this._renderChart(),this._mode==="identify-zones"?(this._applyPresetSelections(),this._buildIdentifyZones()):this._mode==="cell-name"||this._mode==="range-name"?(this._applyTargetPreset(),this._buildNamingPanel()):(this._mode==="cell-click"||this._mode==="range-drag")&&this._buildClickInstruction(),this._updatePhase(),N(()=>import("./rapido-engine.fuR8zAv5.js").then(e=>e.k),__vite__mapDeps([0,1,2,3,4])).then(e=>e.wireCardInputs?.(this.closest(".q-card")))}_pickTarget(){const e=Array.isArray(this._preset?.targets)?this._preset.targets:null;e&&e.length>0?this._currentTarget=e[Math.floor(Math.random()*e.length)]:this._currentTarget=(this._preset?.target||"").trim(),this._declaredMode==="cell"?this._mode=Math.random()<.5?"cell-click":"cell-name":this._declaredMode==="range"&&(this._mode=Math.random()<.5?"range-drag":"range-name")}randomize(){this._render()}_applyTargetPreset(){if(!this._tbody||this._preset?.noHighlight)return;const e=this._currentTarget;if(e)if(e.includes(":")){const[t,s]=e.split(":"),r=$(t),o=$(s);if(!r||!o)return;const l=Math.min(r.col,o.col),n=Math.max(r.col,o.col),a=Math.min(r.row,o.row),c=Math.max(r.row,o.row);for(let d=a;d<=c;d++)for(let u=l;u<=n;u++)this._cellElement(u,d)?.classList.add("ss-user-sel")}else{const t=$(e);if(!t)return;this._cellElement(t.col,t.row)?.classList.add("ss-user-sel","ss-user-sel-anchor")}}_buildNamingPanel(){const e=this._currentTarget,t=this._mode==="range-name",s=!!this._preset?.noHighlight,r=document.createElement("div");r.className="ss-vocab-panel";const o=t?"ex. B2:D4":"ex. C5",l=s?`<div class="ss-vocab-panel-title">${this._buildTargetDescription(e,t)}</div>`:"";r.innerHTML=`
      ${l}
      <input class="rapido-input ss-name-input" type="text"
             data-solution-type="spreadsheet-formula"
             data-solution="${e}"
             data-ss-ref="__name__"
             placeholder="${o}"
             autocomplete="off" spellcheck="false" />
    `,this.appendChild(r)}_buildTargetDescription(e,t){if(!e)return"";if(t){const[r,o]=e.split(":"),l=$(r),n=$(o);if(!l||!n)return`→ Plage : ${e}`;const a=Math.min(l.col,n.col),c=Math.max(l.col,n.col),d=Math.min(l.row,n.row),u=Math.max(l.row,n.row);return`→ Plage du coin <strong>colonne ${A(a)}, ligne ${d+1}</strong> jusqu'au coin <strong>colonne ${A(c)}, ligne ${u+1}</strong>.`}const s=$(e);return s?`→ Colonne <strong>${A(s.col)}</strong>, ligne <strong>${s.row+1}</strong>.`:`→ Cellule : ${e}`}_buildClickInstruction(){const e=this._currentTarget,t=document.createElement("div");t.className="ss-vocab-panel",t.innerHTML=`
      <div class="ss-vocab-panel-title">→ Cible : <strong>${e}</strong></div>
      <div class="ss-vocab-status">${this._userSelectionText()||"(aucune sélection)"}</div>
    `,this.appendChild(t),this._userSelTarget=e,this._wireUserDragSelect()}_userSelectionText(){const e=this._userSelection;if(!e)return"";const t=z(e.c1,e.r1),s=z(e.c2,e.r2);return t===s?t:t+":"+s}_refreshClickStatus(){const e=this.querySelector(".ss-vocab-panel .ss-vocab-status");if(!e)return;const t=this._userSelectionText()||"(aucune sélection)",s=(this._currentTarget||"").trim().toUpperCase(),r=t.toUpperCase();s&&r===s?(e.textContent="✓ "+t,e.classList.add("ss-status-done")):(e.textContent=t,e.classList.remove("ss-status-done"))}_setUserSelection(e,t,s,r){this._clearUserSelection();const o=Math.min(e,s),l=Math.max(e,s),n=Math.min(t,r),a=Math.max(t,r);this._userSelection={c1:o,r1:n,c2:l,r2:a};for(let c=n;c<=a;c++)for(let d=o;d<=l;d++)this._cellElement(d,c)?.classList.add("ss-user-sel");this._cellElement(e,t)?.classList.add("ss-user-sel-anchor"),this._refreshClickStatus(),this._updatePhase()}_clearUserSelection(){this._tbody&&(this._tbody.querySelectorAll(".ss-user-sel, .ss-user-sel-anchor").forEach(e=>e.classList.remove("ss-user-sel","ss-user-sel-anchor")),this._userSelection=null)}_wireUserDragSelect(){!this._tbody||this._userDragWired||(this._userDragWired=!0,this._tbody.addEventListener("pointerdown",e=>{if(this._mode!=="cell-click"&&this._mode!=="range-drag")return;const t=e.target.closest(".ss-cell");if(!t)return;e.preventDefault();const s=parseInt(t.dataset.col,10),r=parseInt(t.dataset.row,10);this._setUserSelection(s,r,s,r);const o=(a,c)=>{const u=document.elementFromPoint(a,c)?.closest?.(".ss-cell");return u&&this._tbody.contains(u)?u:null},l=a=>{const c=o(a.clientX,a.clientY);if(!c)return;const d=parseInt(c.dataset.col,10),u=parseInt(c.dataset.row,10);this._mode!=="cell-click"&&this._setUserSelection(s,r,d,u)},n=a=>{document.removeEventListener("pointermove",l),this._fireSelectionFeedback()};document.addEventListener("pointermove",l),document.addEventListener("pointerup",n,{once:!0})}))}_fireSelectionFeedback(){const e=this.validate(),t=this._userSelection;if(!t)return;const s=this._cellElement(t.c1,t.r1);s&&(N(()=>import("./rapido-engine.fuR8zAv5.js").then(r=>r.j),__vite__mapDeps([0,1,2,3,4])).then(r=>r.popSlogan?.(s,e)),e&&N(()=>import("./vis-input.BqjRCJt3.js"),__vite__mapDeps([5,1,0,2,3,4])).then(r=>r.fireConfettiOnce?.(this)))}_applyPresetSelections(){if(!this._tbody)return;const e=this._preset||{active:"C3",range:["D2","E2","D3","E3","D4","E4"],multi:["A6","C6"]};if(e.active){const t=this._tbody.querySelector(`.ss-cell[data-ref="${e.active}"]`);if(t&&(t.classList.add("ss-zone-active"),!t.querySelector(".ss-drag-handle"))){const s=document.createElement("span");s.className="ss-drag-handle",t.appendChild(s)}}(e.range||[]).forEach(t=>{this._tbody.querySelector(`.ss-cell[data-ref="${t}"]`)?.classList.add("ss-zone-range")}),(e.multi||[]).forEach(t=>{this._tbody.querySelector(`.ss-cell[data-ref="${t}"]`)?.classList.add("ss-zone-multi")})}_buildIdentifyZones(){const e=this.querySelector(".ss-wrap");if(!e)return;const t=this._preset?.active;if(t){const f=e.querySelector(".ss-cell-label");f&&(f.textContent=t);const p=e.querySelector(".ss-formula-bar"),m=this._cells.get(t);p&&m&&m.raw!=null&&m.raw!==""&&(p.textContent=String(m.raw))}const s=e.querySelector(".ss-grid"),r=s?.querySelector("thead tr > th:nth-child(4)"),o=s?.querySelector("tbody tr:nth-child(3) > th"),l=s?.querySelector('.ss-cell[data-ref="B5"]');s?.querySelector(".ss-cell.ss-zone-range");const n=s?.querySelector(".ss-cell.ss-zone-multi"),a=s?.querySelector(".ss-cell.ss-zone-active"),c=s?.querySelector(".ss-drag-handle"),d=[{id:"toolbar",label:"Barre d'outils",anchor:e.querySelector(".ss-toolbar-fmt")},{id:"cell-address",label:"Adresse de la cellule",anchor:e.querySelector(".ss-cell-label")},{id:"formula-bar",label:"Barre de formule",anchor:e.querySelector(".ss-formula-bar")},{id:"col-header",label:"En-tête de colonne",anchor:r},{id:"row-header",label:"En-tête de ligne",anchor:o},{id:"cell",label:"Cellule",anchor:l},{id:"multi",label:"Cellules sélectionnées",anchor:n},{id:"active-cell",label:"Cellule active",anchor:a},{id:"drag-handle",label:"Poignée de recopie",anchor:c},{id:"sheet",label:"Feuille de calcul",anchor:s}].filter(f=>f.anchor);J(d),d.length=Math.min(4,d.length),this._zonePairs=new Map(d.map(f=>[f.id,f.label])),this._zoneSolved=new Set,this._activeBadge=null;const u=document.createElement("div");u.className="ss-zone-overlay-layer",u.style.cssText="position:absolute; top:0; left:0; right:0; bottom:0; pointer-events:none;",e.appendChild(u),d.forEach((f,p)=>{const m=document.createElement("button");m.type="button",m.className="ss-zone-badge",m.dataset.zoneId=f.id,m.textContent=String(p+1),m.title="Clique pour identifier cette zone",m.addEventListener("click",()=>this._onBadgeClick(m)),u.appendChild(m),this._positionBadge(m,f.anchor,e)});const g=document.createElement("div");g.className="ss-vocab-panel",g.innerHTML=`
      <div class="ss-vocab-pills"></div>
      <div class="ss-vocab-status">${this._zoneSolved.size} / ${this._zonePairs.size}</div>
    `;const b=g.querySelector(".ss-vocab-pills"),_=d.map(f=>f.label);J(_),_.forEach(f=>{const p=document.createElement("button");p.type="button",p.className="ss-vocab-pill",p.textContent=f,p.dataset.label=f,p.addEventListener("click",()=>this._onPillClick(p)),b.appendChild(p)});const h=document.createElement("div");h.className="ss-host-flex",h.appendChild(e),h.appendChild(g),this.appendChild(h),this._autoScaleRO?.unobserve&&this._autoScaleRO.disconnect(),this._autoScaleRO={disconnect:()=>{}},this.style.transform="none",this.style.width="100%",this.style.height="100%",this.style.display="block";const i=this.parentElement;if(i&&(i.style.height="100%",i.style.width="100%",i.style.alignItems=""),!this._zoneResizeWired){this._zoneResizeWired=!0;const f=new ResizeObserver(()=>this._repositionZoneBadges());f.observe(e),this._zoneRO=f}}_positionBadge(e,t,s){if(!t||!s)return;const r=t.getBoundingClientRect(),o=s.getBoundingClientRect(),l=e.dataset.zoneId,n=l==="active-cell"||l==="cell-address",a=r.top-o.top+s.scrollTop+(n?r.height:r.height/2),c=r.left-o.left+s.scrollLeft+r.width/2;e.style.top=a+"px",e.style.left=c+"px",e.style.transform=l==="drag-handle"?"translate(-100%, -100%)":n?"translate(-50%, 0)":"translate(-50%, -50%)"}_repositionZoneBadges(){const e=this.querySelector(".ss-wrap");e&&e.querySelectorAll(".ss-zone-badge").forEach(t=>{const s=t.dataset.zoneId,r=this._findZoneAnchor(s);r&&this._positionBadge(t,r,e)})}_findZoneAnchor(e){const t=this.querySelector(".ss-wrap");if(!t)return null;const s=t.querySelector(".ss-grid");switch(e){case"toolbar":return t.querySelector(".ss-toolbar-fmt");case"cell-address":return t.querySelector(".ss-cell-label");case"formula-bar":return t.querySelector(".ss-formula-bar");case"col-header":return s?.querySelector("thead tr > th:nth-child(4)");case"row-header":return s?.querySelector("tbody tr:nth-child(3) > th");case"cell":return s?.querySelector('.ss-cell[data-ref="B5"]');case"range":return s?.querySelector(".ss-cell.ss-zone-range");case"multi":return s?.querySelector(".ss-cell.ss-zone-multi");case"active-cell":return s?.querySelector(".ss-cell.ss-zone-active");case"drag-handle":return s?.querySelector(".ss-drag-handle");case"sheet":return s;default:return null}}_onBadgeClick(e){e.classList.contains("ss-zone-ok")||(this.querySelectorAll(".ss-zone-badge.ss-zone-active-sel").forEach(t=>t.classList.remove("ss-zone-active-sel")),e.classList.add("ss-zone-active-sel"),this._activeBadge=e)}_onPillClick(e){if(e.classList.contains("ss-pill-used"))return;if(!this._activeBadge){const o=this.querySelector(".ss-vocab-panel-title");o&&(o.style.color="#dc2626",setTimeout(()=>{o.style.color=""},600));return}const t=this._activeBadge.dataset.zoneId,s=this._zonePairs.get(t),r=e.dataset.label===s;if(N(()=>import("./rapido-engine.fuR8zAv5.js").then(o=>o.j),__vite__mapDeps([0,1,2,3,4])).then(o=>o.popSlogan?.(e,r)),r)this._activeBadge.classList.remove("ss-zone-active-sel"),this._activeBadge.classList.add("ss-zone-ok"),e.classList.add("ss-pill-used"),e.disabled=!0,this._zoneSolved.add(t),this._activeBadge=null,this._updateZoneStatus(),this._updatePhase(),this._zoneSolved.size===this._zonePairs.size&&N(()=>import("./vis-input.BqjRCJt3.js"),__vite__mapDeps([5,1,0,2,3,4])).then(o=>o.fireConfettiOnce?.(this));else{this._activeBadge.classList.add("ss-zone-ko");const o=this._activeBadge;setTimeout(()=>o.classList.remove("ss-zone-ko","ss-zone-active-sel"),400),this._activeBadge=null}}_updateZoneStatus(){const e=this.querySelector(".ss-vocab-status");if(!e)return;const t=this._zoneSolved.size,s=this._zonePairs.size;e.textContent=t+" / "+s,e.classList.toggle("ss-status-done",t===s),t===s&&(e.textContent="✓ "+t+" / "+s+"  —  Bravo !")}_buildDom(){const e=document.createElement("div");e.className="ss-wrap";const t=document.createElement("div");t.className="ss-toolbar";const s=document.createElement("div");s.className="ss-toolbar-row ss-toolbar-fmt",[{fmt:"bold",label:"B",title:"Gras"},{fmt:"italic",label:"I",title:"Italique"},{fmt:"underline",label:"U",title:"Souligné"},{fmt:"color",label:"A",title:"Couleur du texte"},{fmt:"sep",label:"",title:""},{fmt:"align-left",label:"⬅",title:"Aligner à gauche"},{fmt:"align-center",label:"⬛",title:"Centrer"},{fmt:"align-right",label:"➡",title:"Aligner à droite"}].forEach(({fmt:b,label:_,title:h})=>{if(b==="sep"){const f=document.createElement("span");f.className="ss-tb-fmt ss-tb-sep",s.appendChild(f);return}const i=document.createElement("button");i.type="button",i.className="ss-tb-fmt",i.dataset.fmt=b,i.textContent=_,i.title=h,i.setAttribute("aria-label",h),s.appendChild(i)}),t.appendChild(s);const o=document.createElement("div");o.className="ss-toolbar-row";const l=document.createElement("span");l.className="ss-cell-label",l.textContent="—",l.title="Adresse de la cellule",o.appendChild(l);const n=document.createElement("div");n.className="ss-formula-bar",n.textContent="",n.title="Barre de formule",o.appendChild(n);const a=document.createElement("button");a.type="button",a.textContent="↺",a.title="Annuler",a.addEventListener("click",()=>this._undoLast()),o.appendChild(a),t.appendChild(o),e.appendChild(t);const c=document.createElement("table");c.className="ss-grid";const d=document.createElement("thead"),u=document.createElement("tr");u.appendChild(document.createElement("th"));for(let b=0;b<this._cols;b++){const _=document.createElement("th");_.textContent=this._headers?.col?.[b]??A(b),u.appendChild(_)}d.appendChild(u),c.appendChild(d);const g=document.createElement("tbody");for(let b=0;b<this._rows;b++){const _=document.createElement("tr"),h=document.createElement("th");h.textContent=this._headers?.row?.[b]??String(b+1),_.appendChild(h);for(let i=0;i<this._cols;i++){const f=z(i,b);if(this._mergeCovered?.has(f))continue;const p=document.createElement("td");p.className="ss-cell",p.dataset.col=String(i),p.dataset.row=String(b),p.dataset.ref=f;const m=this._mergeSpans?.get(f);m&&(m.colspan>1&&(p.colSpan=m.colspan),m.rowspan>1&&(p.rowSpan=m.rowspan),p.classList.add("ss-merged")),this._paintCell(p),_.appendChild(p)}g.appendChild(_)}c.appendChild(g),e.appendChild(c),this.appendChild(e),this._tbody=g,this._fxBar=n,this._cellLabel=l,this._wireGridEvents(g)}_renderGrid(){this._tbody&&(this._recompute(),this._tbody.querySelectorAll(".ss-cell").forEach(e=>this._paintCell(e)),this._updatePhase(),this._renderChart())}_renderChart(){if(!this._chart)return;const e=this.querySelector(".ss-wrap");if(!e)return;let t=e.querySelector(".ss-chart");t||(t=document.createElement("div"),t.className="ss-chart",e.querySelector(".ss-grid")?.after(t)||e.appendChild(t));const s=this._refsInRangeStr(this._chart.xs),r=Array.isArray(this._chart.ys)?this._chart.ys:[this._chart.ys];if(!s.length||!r.length){t.innerHTML="";return}const o=s.map(v=>this._values.get(v)).filter(v=>typeof v=="number");if(!o.length){t.innerHTML="";return}const l=Math.min(...o),n=Math.max(...o),a=["#2563eb","#ea580c","#16a34a"],c=Array.isArray(this._chart.labels)?this._chart.labels:[],d=r.map((v,L)=>{const q=this._refsInRangeStr(v),j=[];for(let R=0;R<Math.min(s.length,q.length);R++){const O=this._values.get(s[R]),B=this._values.get(q[R]);typeof O=="number"&&typeof B=="number"&&j.push([O,B])}return{pts:j,color:a[L%a.length],label:c[L]}}),u=d.flatMap(v=>v.pts);let g=-1,b=1;if(u.length){g=Math.min(...u.map(L=>L[1])),b=Math.max(...u.map(L=>L[1])),g===b&&(g-=1,b+=1);const v=(b-g)*.15;g-=v,b+=v}const _=400,h=180,i={top:12,right:14,bottom:28,left:36},f=_-i.left-i.right,p=h-i.top-i.bottom,m=v=>i.left+(v-l)/(n-l||1)*f,C=v=>i.top+(1-(v-g)/(b-g||1))*p,E=4,S=Math.min(5,n-l),M=Array.from({length:E+1},(v,L)=>g+(b-g)*L/E),x=Array.from({length:S+1},(v,L)=>l+(n-l)*L/S),k=g<=0&&b>=0,y=[`<svg viewBox="0 0 ${_} ${h}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">`,M.map(v=>`<line x1="${i.left}" y1="${C(v)}" x2="${_-i.right}" y2="${C(v)}" stroke="#e2e8f0" stroke-width="0.5"/>`).join(""),`<line x1="${i.left}" y1="${i.top}" x2="${i.left}" y2="${h-i.bottom}" stroke="#475569" stroke-width="1"/>`,`<line x1="${i.left}" y1="${k?C(0):h-i.bottom}" x2="${_-i.right}" y2="${k?C(0):h-i.bottom}" stroke="#475569" stroke-width="1"/>`,M.map(v=>`<g><line x1="${i.left-3}" y1="${C(v)}" x2="${i.left}" y2="${C(v)}" stroke="#475569" stroke-width="1"/><text x="${i.left-5}" y="${C(v)+3}" text-anchor="end" font-size="10" fill="#475569">${T(Math.round(v*10)/10)}</text></g>`).join(""),x.map(v=>`<g><line x1="${m(v)}" y1="${h-i.bottom}" x2="${m(v)}" y2="${h-i.bottom+3}" stroke="#475569" stroke-width="1"/><text x="${m(v)}" y="${h-i.bottom+14}" text-anchor="middle" font-size="10" fill="#475569">${T(Math.round(v))}</text></g>`).join(""),d.map(v=>(v.pts.length>=2?`<polyline points="${v.pts.map(L=>`${m(L[0])},${C(L[1])}`).join(" ")}" fill="none" stroke="${v.color}" stroke-width="1.6" stroke-opacity="0.75"/>`:"")+v.pts.map(([L,q])=>`<circle cx="${m(L)}" cy="${C(q)}" r="3.5" fill="${v.color}" stroke="#fff" stroke-width="1.2"/>`).join("")).join(""),d.filter(v=>v.label).map((v,L)=>`<g transform="translate(${i.left+6+L*78}, ${i.top-2})"><rect width="9" height="9" rx="2" fill="${v.color}"/><text x="13" y="8.5" font-size="10" font-weight="600" fill="#475569">${v.label}</text></g>`).join(""),"</svg>"].join("");t.innerHTML=y}_refsInRangeStr(e){if(typeof e!="string")return[];const t=/^([A-Z]+)(\d+):([A-Z]+)(\d+)$/.exec(e.trim());if(!t)return[];const s=P(t[1]),r=P(t[3]),o=parseInt(t[2],10)-1,l=parseInt(t[4],10)-1,n=[];for(let a=o;a<=l;a++)for(let c=s;c<=r;c++)n.push(z(c,a));return n}_paintCell(e){const t=e.dataset.ref,s=this._cells.get(t);if(e.classList.remove("ss-align-l","ss-align-c","ss-align-r"),s?.align&&e.classList.add("ss-align-"+s.align),s&&s.target&&!this._showSolutions){let l=e.querySelector(".ss-target-input");if(!l)e.classList.add("ss-target"),s.sol.fillOnly&&e.classList.add("ss-fill-only"),l=document.createElement("input"),l.type="text",l.className="rapido-input ss-target-input",l.dataset.solutionType="spreadsheet-formula",l.dataset.ssRef=t,l.dataset.solution=s.sol.formula,l.placeholder=s.sol.fillOnly?"":"…",l.value=this._displayValueForFill(s,t),s.sol.fillOnly&&(l.readOnly=!0,l.title="Recopie depuis la cellule du dessus (drag-fill)"),e.textContent="",e.appendChild(l),l.addEventListener("focus",()=>{this._selectCell(e),this._activeInput=l,s.raw&&l.value!==s.raw&&(l.value=s.raw),this._highlightFormulaRefs(l.value)}),l.addEventListener("input",()=>{this._highlightFormulaRefs(l.value),this._updateFormulaBar(t,l.value)}),l.addEventListener("blur",()=>{this._clearRefHighlights(),this._activeInput===l&&(this._activeInput=null),e.classList.remove("ss-sel");const n=ee(l.value);if(n!==s.raw&&(this._pushUndo(),s.raw=n,this._parseIntoCell(s),this._recompute(),this._repaintNonTargets(),this._updatePhase(),this._renderChart()),s.raw&&s.raw.startsWith("=")){const a=this._values.get(t);a!=null&&!(typeof a=="object"&&a.error)&&(l.value=T(a))}}),l.addEventListener("keydown",n=>{n.key==="Enter"?(n.preventDefault(),l.blur()):n.key==="Escape"&&(l.value=s.raw||"",l.blur())}),this._observeTargetInput(l,t);else{const n=this._displayValueForFill(s,t);document.activeElement!==l&&l.value!==n&&(l.value=n),e.classList.add("ss-target"),s.sol.fillOnly&&e.classList.add("ss-fill-only")}return}if(e.classList.remove("ss-locked","ss-target","ss-text","ss-num","ss-error"),e.querySelector(".ss-cell-input"))return;let o="";if(s){s.locked&&e.classList.add("ss-locked");const l=this._values.get(t);l&&typeof l=="object"&&l.error?(o=l.error,e.classList.add("ss-error")):typeof l=="number"?(o=T(l),e.classList.add("ss-num")):l!=null&&(o=String(l),e.classList.add("ss-text"))}e.textContent=o}_updateFormulaBar(e,t){const s=this._cells.get(e);this._cellLabel&&(this._cellLabel.textContent=e||"—"),this._fxBar&&(this._fxBar.textContent=t??s?.raw??"")}_wireGridEvents(e){e.addEventListener("click",t=>{if(this._refPickupActive)return;const s=t.target.closest(".ss-cell");s&&(t.target.classList?.contains("ss-cell-input")||this._selectCell(s))}),e.addEventListener("dblclick",t=>{const s=t.target.closest(".ss-cell");s&&this._beginEdit(s)}),e.addEventListener("keydown",t=>{if(t.key==="Enter"&&this._selected){const s=this._cellElement(this._selected.col,this._selected.row);s&&!s.querySelector(".ss-cell-input")&&(t.preventDefault(),this._beginEdit(s))}}),e.addEventListener("pointerdown",t=>{if(t.target.closest(".ss-fill-handle")&&this._selected){t.preventDefault(),this._startFill();return}const r=t.target.closest(".ss-cell");if(!r)return;const o=this._activeInput;!o||o.readOnly||this._isInRefPickupMode(o)&&(r.contains(o)||(t.preventDefault(),this._startRefPickup(r)))})}_isInRefPickupMode(e){const t=e.value||"";if(!t.startsWith("=")&&!t.startsWith("+"))return!1;const s=e.selectionStart??t.length,r=(t[s-1]||"").trim();return/[=+\-*/^(,;:<>]/.test(r)}_insertAtCursor(e,t){const s=e.value||"",r=e.selectionStart??s.length,o=e.selectionEnd??s.length,l=s.slice(0,r),n=s.slice(o);e.value=l+t+n;const a=r+t.length;e.setSelectionRange(a,a),e.dispatchEvent(new Event("input",{bubbles:!0}))}_startRefPickup(e){const t=this._activeInput;if(!t)return;const s=parseInt(e.dataset.col,10),r=parseInt(e.dataset.row,10),o=z(s,r),l=t.selectionStart??(t.value||"").length;this._insertAtCursor(t,o),this._refPickupActive=!0;const n=(u,g)=>{const _=document.elementFromPoint(u,g)?.closest?.(".ss-cell");return _&&this._tbody.contains(_)?_:null},a=(u,g)=>{const _=u===s&&g===r?o:o+":"+z(u,g),h=t.value.slice(0,l),i=t.value.slice(l+this._lastInsertedLen);t.value=h+_+i,this._lastInsertedLen=_.length;const f=l+_.length;t.setSelectionRange(f,f),t.focus(),t.dispatchEvent(new Event("input",{bubbles:!0}))};this._lastInsertedLen=o.length;const c=u=>{const g=n(u.clientX,u.clientY);if(!g)return;const b=parseInt(g.dataset.col,10),_=parseInt(g.dataset.row,10);a(b,_)},d=()=>{document.removeEventListener("pointermove",c),setTimeout(()=>{this._refPickupActive=!1},0),t.focus()};document.addEventListener("pointermove",c),document.addEventListener("pointerup",d,{once:!0})}_wireDocLevelListeners(){}_selectCell(e){if(this._selected){const r=this._cellElement(this._selected.col,this._selected.row);r?.classList.remove("ss-sel"),r?.querySelector(".ss-fill-handle")?.remove()}const t=parseInt(e.dataset.col,10),s=parseInt(e.dataset.row,10);this._selected={col:t,row:s},e.classList.add("ss-sel"),this._updateFormulaBar(e.dataset.ref),this._ensureHandleForRef(e.dataset.ref)}_ensureHandleForRef(e){const t=this._tbody?.querySelector(`.ss-cell[data-ref="${e}"]`);if(!t||t.querySelector(".ss-fill-handle")||t.querySelector(".ss-cell-input"))return;const s=this._cells.get(e);if(!s)return;let r=!!s.ast;if(!r&&typeof this._values.get(e)=="number"){const n=$(e);if(n){const a=this._values.get(z(n.col,n.row-1)),c=this._values.get(z(n.col-1,n.row));(typeof a=="number"||typeof c=="number")&&(r=!0)}}if(!r)return;const o=document.createElement("button");o.type="button",o.className="ss-fill-handle",o.title="Recopier (cliquer puis cliquer la cellule cible)",o.setAttribute("aria-label","Poignée de recopie"),t.appendChild(o)}_highlightFormulaRefs(e){if(this._clearRefHighlights(),!e)return;const t=String(e).trim();if(!t.startsWith("="))return;const s=I(t);if(s?.error)return;const r=[];D(s,r,new Map),r.forEach((l,n)=>{const a="ss-ref-hl-"+n%4;l.forEach(({col:c,row:d})=>{this._cellElement(c,d)?.classList.add(a)})})}_clearRefHighlights(){this._tbody&&this._tbody.querySelectorAll(".ss-ref-hl-0, .ss-ref-hl-1, .ss-ref-hl-2, .ss-ref-hl-3").forEach(e=>e.classList.remove("ss-ref-hl-0","ss-ref-hl-1","ss-ref-hl-2","ss-ref-hl-3"))}_repaintNonTargets(){if(this._tbody&&(this._tbody.querySelectorAll(".ss-cell").forEach(e=>{this._cells.get(e.dataset.ref)?.target&&!this._showSolutions||this._paintCell(e)}),this._selected)){const e=z(this._selected.col,this._selected.row);this._ensureHandleForRef(e)}}_cellElement(e,t){return this._tbody?.querySelector(`.ss-cell[data-col="${e}"][data-row="${t}"]`)}_beginEdit(e){const t=e.dataset.ref,s=this._cells.get(t)||{};if(s.locked)return;if(s.target){e.querySelector(".ss-cell-input, .rapido-input")?.focus();return}if(e.querySelector(".ss-cell-input"))return;const r=s.raw??"",o=document.createElement("input");o.type="text",o.className="ss-cell-input",o.value=r,e.textContent="",e.appendChild(o),o.focus(),o.select();const l=n=>{const a=n?o.value:r;if(n&&a!==r){this._pushUndo();let c=this._cells.get(t);c||(c={raw:"",locked:!1},this._cells.set(t,c)),c.raw=a,this._parseIntoCell(c),this._recompute()}this._renderGrid()};o.addEventListener("blur",()=>l(!0)),o.addEventListener("keydown",n=>{n.key==="Enter"?(n.preventDefault(),o.blur()):n.key==="Escape"&&(n.preventDefault(),l(!1))})}_startFill(){this._fillSource={...this._selected};const e=this._cellElement(this._fillSource.col,this._fillSource.row);e?.classList.add("ss-fill-source");const t=()=>{this._tbody.querySelectorAll(".ss-fill-preview").forEach(n=>n.classList.remove("ss-fill-preview"))},s=(n,a)=>{const d=document.elementFromPoint(n,a)?.closest?.(".ss-cell");return d&&this._tbody.contains(d)?d:null},r=(n,a)=>{t();const c=Math.min(this._fillSource.col,n),d=Math.max(this._fillSource.col,n),u=Math.min(this._fillSource.row,a),g=Math.max(this._fillSource.row,a);for(let b=u;b<=g;b++)for(let _=c;_<=d;_++){if(_===this._fillSource.col&&b===this._fillSource.row)continue;this._cellElement(_,b)?.classList.add("ss-fill-preview")}},o=n=>{const a=s(n.clientX,n.clientY);if(!a)return;const c=parseInt(a.dataset.col,10),d=parseInt(a.dataset.row,10);r(c,d)},l=n=>{document.removeEventListener("pointermove",o),t(),e?.classList.remove("ss-fill-source");const a=s(n.clientX,n.clientY);if(!a){this._fillSource=null;return}this._applyFill(a),this._fillSource=null};document.addEventListener("pointermove",o),document.addEventListener("pointerup",l,{once:!0})}_applyFill(e){const t=this._fillSource;if(!t)return;const s=z(t.col,t.row),r=this._cells.get(s);if(!r)return;const o=parseInt(e.dataset.col,10),l=parseInt(e.dataset.row,10);if(r.ast){const i=Math.min(t.col,o),f=Math.max(t.col,o),p=Math.min(t.row,l),m=Math.max(t.row,l);this._pushUndo();for(let C=p;C<=m;C++)for(let E=i;E<=f;E++){if(E===t.col&&C===t.row)continue;const S=z(E,C);if(this._cells.get(S)?.locked)continue;const x=H(r.ast,E-t.col,C-t.row),k=U(x);let y=this._cells.get(S);y||(y={raw:"",locked:!1},this._cells.set(S,y)),y.raw=k,this._parseIntoCell(y)}this._postFillFeedback();return}const n=this._values.get(s);if(typeof n!="number")return;const a=l-t.row,c=o-t.col,d=Math.abs(a)>=Math.abs(c);if(d&&a===0||!d&&c===0)return;const u=Math.sign(d?a:c),g=d?z(t.col,t.row-u):z(t.col-u,t.row),b=this._values.get(g);if(typeof b!="number")return;const _=n-b;this._pushUndo();let h=n;if(d)for(let i=t.row+u;u>0?i<=l:i>=l;i+=u){h+=_;const f=z(t.col,i),p=this._cells.get(f);if(p?.locked)continue;let m=p;m||(m={raw:"",locked:!1},this._cells.set(f,m)),m.raw=T(h),this._parseIntoCell(m)}else for(let i=t.col+u;u>0?i<=o:i>=o;i+=u){h+=_;const f=z(i,t.row),p=this._cells.get(f);if(p?.locked)continue;let m=p;m||(m={raw:"",locked:!1},this._cells.set(f,m)),m.raw=T(h),this._parseIntoCell(m)}this._postFillFeedback()}_postFillFeedback(){this._recompute(),this._renderGrid(),N(()=>import("./rapido-engine.fuR8zAv5.js").then(e=>e.j),__vite__mapDeps([0,1,2,3,4])).then(e=>{this._targetCells().forEach(t=>{if(!this._cells.get(t)?.raw)return;const r=this._tbody?.querySelector(`.ss-target-input[data-ss-ref="${t}"]`);if(!r)return;const o=this._isCorrect(t);e.renderFeedback?.(r,o?"correct":"incorrect")}),this.validate()&&N(()=>import("./vis-input.BqjRCJt3.js"),__vite__mapDeps([5,1,0,2,3,4])).then(t=>t.fireConfettiOnce?.(this))})}_pushUndo(){this._undo.length>=20&&this._undo.shift();const e={};for(const[t,s]of this._cells)e[t]={raw:s.raw,locked:s.locked,target:s.target,sol:s.sol};this._undo.push(e)}_undoLast(){const e=this._undo.pop();if(e){this._cells.clear();for(const[t,s]of Object.entries(e)){const r={raw:s.raw,locked:s.locked};s.target&&(r.target=!0,r.sol=s.sol),this._parseIntoCell(r),this._cells.set(t,r)}this._recompute(),this._renderGrid()}}_targetCells(){const e=[];for(const[t,s]of this._cells)s.target&&e.push(t);return e}_isCorrect(e){const t=this._cells.get(e);if(!t?.sol)return!1;const s=(t.raw||"").trim();if(s===""||t.sol.maxDollars!=null&&(s.match(/\$/g)||[]).length>t.sol.maxDollars)return!1;const r=I(t.sol.formula);if(t.sol.mode==="value"){const l=I(s.startsWith("=")?s:"="+s);if(l.error)return!1;const n=this._evaluateInContext(l),a=this._evaluateInContext(r);return typeof n=="number"&&typeof a=="number"&&Math.abs(n-a)<1e-9}const o=I(s);if(o.error)return!1;if(Z(o,r))return!0;for(const l of t.sol.alt||[]){const n=I(l);if(!n.error&&Z(o,n))return!0}return!1}_evaluateInContext(e){if(!e||e.error)return null;const s=V(e,{getCell:(r,o)=>{const l=z(r,o);this._values.has(l)||this._evaluateCell(l,new Set);const n=this._values.get(l);return n&&typeof n=="object"&&n.error?NaN:n===void 0?"":n}});return s&&typeof s=="object"&&s.error?null:s}_updatePhase(){if(this._mode==="identify-zones"){const l=this._zonePairs.size;if(l===0){this._currentPhase="cellule_vide";return}if(this._zoneSolved.size===l){this._currentPhase="done";return}if(this._zoneSolved.size===0){this._currentPhase="cellule_vide";return}this._currentPhase="erreur_calcul";return}if(this._mode==="cell-click"||this._mode==="range-drag"){if(!this._userSelection){this._currentPhase="cellule_vide";return}const l=this._userSelectionText().toUpperCase()===(this._currentTarget||"").trim().toUpperCase();this._currentPhase=l?"done":"erreur_calcul";return}if(this._mode==="cell-name"||this._mode==="range-name"){const n=(this.querySelector(".ss-name-input")?.value||"").trim();if(!n){this._currentPhase="cellule_vide";return}const a=(this._currentTarget||"").trim().toUpperCase();this._currentPhase=n.toUpperCase()===a?"done":"erreur_calcul";return}const e=this._targetCells();if(e.length===0){this._currentPhase="cellule_vide";return}let t=!0,s=!1,r=!1,o=!1;for(const l of e){const a=(this._cells.get(l)?.raw||"").trim();if(a===""){t=!1;continue}if(s=!0,I(a).error){o=!0,t=!1;continue}const d=this._values.get(l);d&&typeof d=="object"&&d.error&&(r=!0),this._isCorrect(l)||(t=!1)}t?this._currentPhase="done":o?this._currentPhase="formule_invalide":s?r?this._currentPhase="formule_invalide":this._currentPhase="erreur_calcul":this._currentPhase="cellule_vide"}_observeTargetInput(e,t){if(e._ssObserved)return;e._ssObserved=!0;const s=this.closest(".q-card");if(!s)return;const r=se(()=>{s.querySelector(".am-indice-panel.open")&&s.dispatchEvent(new CustomEvent("zefor-indice-auto-refresh",{detail:{studentValue:e.value,formula:e.value,phase:this.getCurrentPhase(),targetCell:t,source:this},bubbles:!0}))},300);e.addEventListener("input",r),new MutationObserver(()=>{e.classList.contains("incorrect")&&s.dispatchEvent(new CustomEvent("zefor-indice-auto-pop",{detail:{studentValue:e.value,formula:e.value,phase:this.getCurrentPhase(),targetCell:t,source:this},bubbles:!0}))}).observe(e,{attributes:!0,attributeFilter:["class"]})}}function D(w,e,t){if(!(!w||typeof w!="object"||w.error)){if(w.type==="ref"){const s="r:"+w.col+":"+w.row;t.has(s)||(t.set(s,e.length),e.push([{col:w.col,row:w.row}]));return}if(w.type==="range"){const s=w.a,r=w.b,o=Math.min(s.col,r.col),l=Math.max(s.col,r.col),n=Math.min(s.row,r.row),a=Math.max(s.row,r.row),c="g:"+o+":"+n+":"+l+":"+a;if(!t.has(c)){t.set(c,e.length);const d=[];for(let u=n;u<=a;u++)for(let g=o;g<=l;g++)d.push({col:g,row:u});e.push(d)}return}switch(w.type){case"unary":D(w.arg,e,t);break;case"binop":D(w.left,e,t),D(w.right,e,t);break;case"fn":w.args.forEach(s=>D(s,e,t));break}}}class W extends Error{constructor(e="#CYCLE!"){super(e),this.code=e}}function J(w){for(let e=w.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[w[e],w[t]]=[w[t],w[e]]}return w}function se(w,e){let t=null;return(...s)=>{t&&clearTimeout(t),t=setTimeout(()=>w(...s),e)}}customElements.get("math974-spreadsheet")||customElements.define("math974-spreadsheet",te);function he(w,e,t){const s=t||w||{};if(!e)return JSON.parse(JSON.stringify(s));const r=(h,i)=>{if(typeof h=="number")return h;if(Array.isArray(h))return h[Math.floor(Math.random()*h.length)];if(typeof h=="string"&&h.includes("..")){const[f,p]=h.split("..").map(Number);return Math.floor(Math.random()*(p-f+1))+f}return i},o=(h,i)=>Array.isArray(h)&&h.length?h[Math.floor(Math.random()*h.length)]:i;if(e.linaff){const h=Array.isArray(e.xs)?e.xs:[0,1,2,3,4],i=Math.max(...h);let f=r(e.a,3),p=r(e.c,2);if(f===p&&(f=p+1),f<p){const x=f;f=p,p=x}const m=1+Math.floor(Math.random()*Math.max(1,i-1)),C=(f-p)*m,E=A(h.length),S=JSON.parse(JSON.stringify(s));S.cells={A1:"x",A2:"g(x)",A3:"f(x)"},S.solutions={};const M=["A1","A2","A3"];return h.forEach((x,k)=>{const y=A(k+1);S.cells[y+"1"]=x,S.cells[y+"2"]=f*x,M.push(y+"1",y+"2"),S.solutions[y+"3"]={formula:"="+(p*x+C),mode:"value"}}),S.locked=M,S.chart={xs:`B1:${E}1`,ys:[`B2:${E}2`,`B3:${E}3`],labels:["g(x)","f(x)"]},S.content=`**g(x) = ${f}x** (fonction linéaire) est tracée en bleu. Calcule la fonction **affine f(x) = ${p}x + ${C}** : complète la ligne **f(x)** — sa droite orange apparaîtra et croisera celle de g.`,S}if(e.affine){let h=r(e.a,3);h===0&&(h=1);const i=r(e.b,-2),f=Array.isArray(e.xs)?e.xs:Array.from({length:10},(C,E)=>E+1),p=JSON.parse(JSON.stringify(s));p.cells={A1:"x",A2:"f(x)"},p.solutions={};const m=["A1","A2"];return f.forEach((C,E)=>{const S=A(E+1),M=h*C+i;p.cells[S+"1"]=C,m.push(S+"1"),E<2?(p.cells[S+"2"]=M,m.push(S+"2")):p.solutions[S+"2"]={formula:"="+M,mode:"value"}}),p.locked=m,p}if(e.proportion){const h=r(e.k,3),i=Array.isArray(e.xs)?[...e.xs]:[2,3,4,5,6];for(let x=i.length-1;x>0;x--){const k=Math.floor(Math.random()*(x+1));[i[x],i[k]]=[i[k],i[x]]}const f=Math.floor(Math.random()*i.length),p=!!e.shuffleRows,m=JSON.parse(JSON.stringify(s));m.cells={A1:s.cells?.A1??"x",A2:s.cells?.A2??"y"},m.solutions={};const C=["A1","A2"],E=x=>Math.round(x*100)/100,S=(x,k,y)=>{m.cells[x+k]=y,C.push(x+k)},M=(x,k,y)=>{m.solutions[x+k]={formula:"="+y,mode:"value"}};return i.forEach((x,k)=>{const y=A(k+1),v=E(h*x);k===f?(S(y,"1",x),S(y,"2",v)):p?x===1||Math.random()<.5?(S(y,"1",x),M(y,"2",v)):(S(y,"2",v),M(y,"1",x)):(S(y,"1",x),M(y,"2",v))}),m.locked=C,m}if(e.stat){const h=k=>{const y=/^([A-Z]+)(\d+):([A-Z]+)(\d+)$/.exec(String(k||"").trim());if(!y)return[];const v=P(y[1]),L=P(y[3]),q=+y[2]-1,j=+y[4]-1,R=[];for(let O=q;O<=j;O++)for(let B=v;B<=L;B++)R.push(A(B)+(O+1));return R},i=k=>Math.round(k*100)/100,f=JSON.parse(JSON.stringify(s));f.cells={...s.cells||{}};const p=e.data||"",m=h(p),[C,E]=String(e.range||"5..20").split("..").map(Number),S=m.map(()=>Math.floor(Math.random()*(E-C+1))+C);m.forEach((k,y)=>{f.cells[k]=S[y]});const M=e.target||"F2";let x;if(e.stat==="somme")x={formula:`=SOMME(${p})`,mode:"value"};else if(e.stat==="moyenne")x={formula:`=MOYENNE(${p})`,mode:"value"};else if(e.stat==="etendue")x={formula:`=${Math.max(...S)-Math.min(...S)}`,mode:"value",alt:[`=MAX(${p})-MIN(${p})`]};else if(e.stat==="mediane"){const k=[...S].sort((L,q)=>L-q),y=k.length;x={formula:`=${y%2?k[(y-1)/2]:i((k[y/2-1]+k[y/2])/2)}`,mode:"value"}}else x={formula:`=SOMME(${p})`};return f.solutions={[M]:x},f}let l=r(e.a,5),n=r(e.b,3);const a=o(e.op,"+");if(a==="-"&&l<n&&([l,n]=[n,l]),a==="/"){n=Math.max(1,n);const h=Math.max(1,Math.round(l/n));l=n*h}const c={"+":"la somme de a et b","-":"la différence entre a et b","*":"le produit de a par b","/":"le quotient de a par b"},d=s.targetCell||"C2",u={...s.cells||{}};u.A2=l,u.B2=n;const g=`=A2${a}B2`,b=a==="+"||a==="*"?[`=B2${a}A2`]:[],_=JSON.parse(JSON.stringify(s));return _.cells=u,_.op={symbol:a,label:c[a]||a},_.solutions={[d]:{formula:g,alt:b}},_}export{de as autoScale,ue as defaultPosition,he as randomize};
