const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/rapido-engine.BVjETP1P.js","_astro/rapidos-visuals-integration.kalekPk2.js","_astro/editor.CJZspgfY.js","_astro/js-yaml.CwjAzRNl.js","_astro/vis-input.DyYEdFBn.js"])))=>i.map(i=>d[i]);
import{_ as P}from"./editor.CJZspgfY.js";import{ensureSharedStyles as Y}from"./vis-input.DyYEdFBn.js";import{idxToCol as A,colToIdx as q,formatValue as R,parseFormula as L,stringify as U,shiftRefs as j,parseRef as M,evaluate as H,astEqual as V}from"./formula-parser.CuBpGvtX.js";import"./rapido-engine.BVjETP1P.js";import"./rapidos-visuals-integration.kalekPk2.js";import"./js-yaml.CwjAzRNl.js";const ce="east",ue=!0,Z="math974-spreadsheet-css",X=`
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
`;function K(){if(document.getElementById(Z))return;const x=document.createElement("style");x.id=Z,x.textContent=X,document.head.appendChild(x)}function $(x,e){if(!x)return e;try{return JSON.parse(x)}catch{return e}}function k(x,e){return A(x)+(e+1)}function Q(x){let e=String(x);const t=[],s=/\[([^\]]*)\]$/;let r;for(;r=s.exec(e);)t.unshift(r[1]),e=e.slice(0,e.length-r[0].length);let o=null;const l={l:0,r:0,u:0,d:0};let n=!1;for(const a of t){if(a==="r"||a==="c"||a==="l"){o=a;continue}for(const i of a)i===">"?(l.r++,n=!0):i==="<"?(l.l++,n=!0):i==="^"?(l.u++,n=!0):i==="v"&&(l.d++,n=!0)}return{base:e,align:o,merge:n?l:null}}function ee(x){return(x||"").trim()}class te extends HTMLElement{static get observedAttributes(){return["rows","cols","cells","locked","solutions","headers","mode","preset","chart"]}constructor(){super(),this._cells=new Map,this._values=new Map,this._selected=null,this._undo=[],this._activeInput=null,this._currentPhase="cellule_vide",this._mode="formula",this._zonePairs=new Map,this._zoneSolved=new Set,this._activeBadge=null,this._currentTarget=""}connectedCallback(){K(),Y(),this.closest(".variant-content")?.classList.add("ss-variant"),this.closest(".q-card")?.classList.add("has-ss"),this.getAttribute("mode")==="identify-zones"&&(this._autoScaleRO={disconnect:()=>{}}),this._render(),this._wireDocLevelListeners()}attributeChangedCallback(){this.isConnected&&this._render()}validate(){if(this._mode==="identify-zones")return this._zoneSolved.size===this._zonePairs.size&&this._zonePairs.size>0;if(this._mode==="cell-click"||this._mode==="range-drag")return this._userSelectionText().toUpperCase()===(this._currentTarget||"").trim().toUpperCase();if(this._mode==="cell-name"||this._mode==="range-name"){const s=(this.querySelector(".ss-name-input")?.value||"").trim().toUpperCase(),r=(this._currentTarget||"").trim().toUpperCase();return s===r&&r!==""}const e=this._targetCells();return e.length===0?!1:e.every(t=>this._isCorrect(t))}toggleSolution(){if(this._mode==="identify-zones"){this._zonePairs.forEach((e,t)=>{const s=this.querySelector(`.ss-zone-badge[data-zone-id="${t}"]`),r=Array.from(this.querySelectorAll(".ss-vocab-pill")).find(o=>o.dataset.label===e);s?.classList.remove("ss-zone-active-sel"),s?.classList.add("ss-zone-ok"),r?.classList.add("ss-pill-used"),r&&(r.disabled=!0),this._zoneSolved.add(t)}),this._updateZoneStatus(),this._updatePhase();return}this._showSolutions=!this._showSolutions,this._renderGrid()}getCurrentPhase(){return this._currentPhase}getCurrentStudentValue(){if(this._mode==="cell-click"||this._mode==="range-drag")return this._userSelectionText();if(this._mode==="cell-name"||this._mode==="range-name")return this.querySelector(".ss-name-input")?.value||"";if(this._activeInput){const e=this._activeInput.dataset.ssRef,t=this._cells.get(e);return t?.raw?t.raw:this._activeInput.value||""}for(const e of this._targetCells()){const t=this._cells.get(e);if(t?.raw&&!this._isCorrect(e))return t.raw}return""}_displayValueForFill(e,t){if(e?.target&&e.raw&&e.raw.startsWith("=")){const s=this._values.get(t);if(s!=null&&!(typeof s=="object"&&s.error))return R(s)}return e?.raw||""}_validateCell(e){if(this._mode==="cell-name"||this._mode==="range-name"){const s=(e.value||"").trim().toUpperCase(),r=(this._currentTarget||"").trim().toUpperCase();return s===r&&r!==""}const t=e.dataset.ssRef;return t?this._isCorrect(t):!1}_readFormula(e){const t=e.dataset.ssRef;return t&&this._cells.get(t)?.raw||""}_readAttrs(){this._rows=Math.max(1,parseInt(this.getAttribute("rows")||"6",10)),this._cols=Math.max(1,parseInt(this.getAttribute("cols")||"5",10));const e=$(this.getAttribute("cells"),{}),t=new Set($(this.getAttribute("locked"),[])),s=$(this.getAttribute("solutions"),{}),r=$(this.getAttribute("headers"),null);this._declaredMode=this.getAttribute("mode")||"formula",this._mode=this._declaredMode,this._preset=$(this.getAttribute("preset"),null),this._chart=$(this.getAttribute("chart"),null);const o=/^([A-Z]+\d+)$/,l=/^([A-Z]+)(\d+):([A-Z]+)(\d+)$/;this._cells.clear();for(const[i,u]of Object.entries(e)){const{base:d,align:b,merge:f}=Q(i),v=u==null?"":String(u),g=l.exec(d);if(g){const p=q(g[1]),C=q(g[3]),E=parseInt(g[2],10)-1,S=parseInt(g[4],10)-1;for(let z=E;z<=S;z++)for(let c=p;c<=C;c++){const w=k(c,z),y={raw:v,locked:t.has(w),align:b};this._parseIntoCell(y),this._cells.set(w,y)}continue}const m=o.exec(d),h=m?m[1]:d,_={raw:v,locked:t.has(h),align:b,merge:f};this._parseIntoCell(_),this._cells.set(h,_)}for(const i of t)this._cells.has(i)||this._cells.set(i,{raw:"",locked:!0});const n=/^([A-Z]+)(\d+):([A-Z]+)(\d+)$/,a=(i,u,d)=>({formula:i,mode:d.mode||"formula",alt:Array.isArray(d.alt)?d.alt:[],fillOnly:u,maxDollars:typeof d.maxDollars=="number"?d.maxDollars:null});for(const[i,u]of Object.entries(s)){const d=n.exec(i);if(d){const f=u.formula||u,v=L(f);if(!v||v.error){console.warn("[spreadsheet] solutions range : formule invalide",f);continue}const g=q(d[1]),m=q(d[3]),h=parseInt(d[2],10)-1,_=parseInt(d[4],10)-1;for(let p=h;p<=_;p++)for(let C=g;C<=m;C++){const E=k(C,p),S=C===g&&p===h,z=S?f:U(j(v,C-g,p-h));let c=this._cells.get(E);c||(c={raw:"",locked:!1},this._cells.set(E,c)),c.target=!0,c.sol=a(z,!S,u)}continue}let b=this._cells.get(i);b||(b={raw:"",locked:!1},this._cells.set(i,b)),b.target=!0,b.sol=a(u.formula||u,!!u.fillOnly,u)}this._headers=r,this._computeMerges()}_computeMerges(){this._mergeSpans=new Map,this._mergeCovered=new Set;const e=[];for(const[t,s]of this._cells)s.merge&&e.push([t,s]);for(const[t,s]of e){const r=M(t);if(!r)continue;const o=s.merge,l=Math.max(0,r.col-(o.l||0)),n=Math.min(this._cols-1,r.col+(o.r||0)),a=Math.max(0,r.row-(o.u||0)),i=Math.min(this._rows-1,r.row+(o.d||0)),u=n-l+1,d=i-a+1;if(u<=1&&d<=1)continue;const b=k(l,a);b!==t&&this._cells.set(b,s),this._mergeSpans.set(b,{colspan:u,rowspan:d});for(let f=a;f<=i;f++)for(let v=l;v<=n;v++){const g=k(v,f);g!==b&&this._mergeCovered.add(g)}}}_parseIntoCell(e){delete e.ast,delete e.parseError;const t=e.raw;if(typeof t=="string"&&t.trim().startsWith("=")){const s=L(t);s.error?e.parseError=s.error:e.ast=s}}_getCellValue(e,t){const s=k(e,t);this._values.has(s)||this._evaluateCell(s,new Set);const r=this._values.get(s);return r&&typeof r=="object"&&r.error?NaN:r}_evaluateCell(e,t){const s=this._cells.get(e);if(!s){this._values.set(e,"");return}if(s.ast){if(t.has(e)){this._values.set(e,{error:"#CYCLE!"});return}t.add(e);const r={getCell:(o,l)=>{const n=k(o,l);if(t.has(n))throw new G;this._values.has(n)||this._evaluateCell(n,t);const a=this._values.get(n);if(a&&typeof a=="object"&&a.error)throw new G(a.error);return a===void 0?"":a}};try{const o=H(s.ast,r);this._values.set(e,o)}catch(o){this._values.set(e,{error:o.code||"#CYCLE!"})}t.delete(e)}else{const r=s.raw;if(r===""||r==null){this._values.set(e,"");return}const o=parseFloat(String(r).replace(",","."));!isNaN(o)&&String(o)===String(r).replace(",",".").replace(/^\+/,"")?this._values.set(e,o):!isNaN(o)&&/^-?\d+([.,]\d+)?$/.test(String(r).trim())?this._values.set(e,o):this._values.set(e,String(r))}}_recompute(){this._values.clear();for(const e of this._cells.keys())this._values.has(e)||this._evaluateCell(e,new Set)}_render(){this._readAttrs(),this._pickTarget(),this.innerHTML="",this.setAttribute("data-mode",this._mode),this._recompute(),this._buildDom(),this._mode==="identify-zones"?(this._applyPresetSelections(),this._buildIdentifyZones()):this._mode==="cell-name"||this._mode==="range-name"?(this._applyTargetPreset(),this._buildNamingPanel()):(this._mode==="cell-click"||this._mode==="range-drag")&&this._buildClickInstruction(),this._updatePhase(),P(()=>import("./rapido-engine.BVjETP1P.js").then(e=>e.h),__vite__mapDeps([0,1,2,3])).then(e=>e.wireCardInputs?.(this.closest(".q-card")))}_pickTarget(){const e=Array.isArray(this._preset?.targets)?this._preset.targets:null;e&&e.length>0?this._currentTarget=e[Math.floor(Math.random()*e.length)]:this._currentTarget=(this._preset?.target||"").trim(),this._declaredMode==="cell"?this._mode=Math.random()<.5?"cell-click":"cell-name":this._declaredMode==="range"&&(this._mode=Math.random()<.5?"range-drag":"range-name")}randomize(){this._render()}_applyTargetPreset(){if(!this._tbody||this._preset?.noHighlight)return;const e=this._currentTarget;if(e)if(e.includes(":")){const[t,s]=e.split(":"),r=M(t),o=M(s);if(!r||!o)return;const l=Math.min(r.col,o.col),n=Math.max(r.col,o.col),a=Math.min(r.row,o.row),i=Math.max(r.row,o.row);for(let u=a;u<=i;u++)for(let d=l;d<=n;d++)this._cellElement(d,u)?.classList.add("ss-user-sel")}else{const t=M(e);if(!t)return;this._cellElement(t.col,t.row)?.classList.add("ss-user-sel","ss-user-sel-anchor")}}_buildNamingPanel(){const e=this._currentTarget,t=this._mode==="range-name",s=!!this._preset?.noHighlight,r=document.createElement("div");r.className="ss-vocab-panel";const o=t?"ex. B2:D4":"ex. C5",l=s?`<div class="ss-vocab-panel-title">${this._buildTargetDescription(e,t)}</div>`:"";r.innerHTML=`
      ${l}
      <input class="rapido-input ss-name-input" type="text"
             data-solution-type="spreadsheet-formula"
             data-solution="${e}"
             data-ss-ref="__name__"
             placeholder="${o}"
             autocomplete="off" spellcheck="false" />
    `,this.appendChild(r)}_buildTargetDescription(e,t){if(!e)return"";if(t){const[r,o]=e.split(":"),l=M(r),n=M(o);if(!l||!n)return`→ Plage : ${e}`;const a=Math.min(l.col,n.col),i=Math.max(l.col,n.col),u=Math.min(l.row,n.row),d=Math.max(l.row,n.row);return`→ Plage du coin <strong>colonne ${A(a)}, ligne ${u+1}</strong> jusqu'au coin <strong>colonne ${A(i)}, ligne ${d+1}</strong>.`}const s=M(e);return s?`→ Colonne <strong>${A(s.col)}</strong>, ligne <strong>${s.row+1}</strong>.`:`→ Cellule : ${e}`}_buildClickInstruction(){const e=this._currentTarget,t=document.createElement("div");t.className="ss-vocab-panel",t.innerHTML=`
      <div class="ss-vocab-panel-title">→ Cible : <strong>${e}</strong></div>
      <div class="ss-vocab-status">${this._userSelectionText()||"(aucune sélection)"}</div>
    `,this.appendChild(t),this._userSelTarget=e,this._wireUserDragSelect()}_userSelectionText(){const e=this._userSelection;if(!e)return"";const t=k(e.c1,e.r1),s=k(e.c2,e.r2);return t===s?t:t+":"+s}_refreshClickStatus(){const e=this.querySelector(".ss-vocab-panel .ss-vocab-status");if(!e)return;const t=this._userSelectionText()||"(aucune sélection)",s=(this._currentTarget||"").trim().toUpperCase(),r=t.toUpperCase();s&&r===s?(e.textContent="✓ "+t,e.classList.add("ss-status-done")):(e.textContent=t,e.classList.remove("ss-status-done"))}_setUserSelection(e,t,s,r){this._clearUserSelection();const o=Math.min(e,s),l=Math.max(e,s),n=Math.min(t,r),a=Math.max(t,r);this._userSelection={c1:o,r1:n,c2:l,r2:a};for(let i=n;i<=a;i++)for(let u=o;u<=l;u++)this._cellElement(u,i)?.classList.add("ss-user-sel");this._cellElement(e,t)?.classList.add("ss-user-sel-anchor"),this._refreshClickStatus(),this._updatePhase()}_clearUserSelection(){this._tbody&&(this._tbody.querySelectorAll(".ss-user-sel, .ss-user-sel-anchor").forEach(e=>e.classList.remove("ss-user-sel","ss-user-sel-anchor")),this._userSelection=null)}_wireUserDragSelect(){!this._tbody||this._userDragWired||(this._userDragWired=!0,this._tbody.addEventListener("pointerdown",e=>{if(this._mode!=="cell-click"&&this._mode!=="range-drag")return;const t=e.target.closest(".ss-cell");if(!t)return;e.preventDefault();const s=parseInt(t.dataset.col,10),r=parseInt(t.dataset.row,10);this._setUserSelection(s,r,s,r);const o=(a,i)=>{const d=document.elementFromPoint(a,i)?.closest?.(".ss-cell");return d&&this._tbody.contains(d)?d:null},l=a=>{const i=o(a.clientX,a.clientY);if(!i)return;const u=parseInt(i.dataset.col,10),d=parseInt(i.dataset.row,10);this._mode!=="cell-click"&&this._setUserSelection(s,r,u,d)},n=a=>{document.removeEventListener("pointermove",l),this._fireSelectionFeedback()};document.addEventListener("pointermove",l),document.addEventListener("pointerup",n,{once:!0})}))}_fireSelectionFeedback(){const e=this.validate(),t=this._userSelection;if(!t)return;const s=this._cellElement(t.c1,t.r1);s&&(P(()=>import("./rapido-engine.BVjETP1P.js").then(r=>r.f),__vite__mapDeps([0,1,2,3])).then(r=>r.popSlogan?.(s,e)),e&&P(()=>import("./vis-input.DyYEdFBn.js"),__vite__mapDeps([4,2,0,1,3])).then(r=>r.fireConfettiOnce?.(this)))}_applyPresetSelections(){if(!this._tbody)return;const e=this._preset||{active:"C3",range:["D2","E2","D3","E3","D4","E4"],multi:["A6","C6"]};if(e.active){const t=this._tbody.querySelector(`.ss-cell[data-ref="${e.active}"]`);if(t&&(t.classList.add("ss-zone-active"),!t.querySelector(".ss-drag-handle"))){const s=document.createElement("span");s.className="ss-drag-handle",t.appendChild(s)}}(e.range||[]).forEach(t=>{this._tbody.querySelector(`.ss-cell[data-ref="${t}"]`)?.classList.add("ss-zone-range")}),(e.multi||[]).forEach(t=>{this._tbody.querySelector(`.ss-cell[data-ref="${t}"]`)?.classList.add("ss-zone-multi")})}_buildIdentifyZones(){const e=this.querySelector(".ss-wrap");if(!e)return;const t=this._preset?.active;if(t){const h=e.querySelector(".ss-cell-label");h&&(h.textContent=t);const _=e.querySelector(".ss-formula-bar"),p=this._cells.get(t);_&&p&&p.raw!=null&&p.raw!==""&&(_.textContent=String(p.raw))}const s=e.querySelector(".ss-grid"),r=s?.querySelector("thead tr > th:nth-child(4)"),o=s?.querySelector("tbody tr:nth-child(3) > th"),l=s?.querySelector('.ss-cell[data-ref="B5"]');s?.querySelector(".ss-cell.ss-zone-range");const n=s?.querySelector(".ss-cell.ss-zone-multi"),a=s?.querySelector(".ss-cell.ss-zone-active"),i=s?.querySelector(".ss-drag-handle"),u=[{id:"toolbar",label:"Barre d'outils",anchor:e.querySelector(".ss-toolbar-fmt")},{id:"cell-address",label:"Adresse de la cellule",anchor:e.querySelector(".ss-cell-label")},{id:"formula-bar",label:"Barre de formule",anchor:e.querySelector(".ss-formula-bar")},{id:"col-header",label:"En-tête de colonne",anchor:r},{id:"row-header",label:"En-tête de ligne",anchor:o},{id:"cell",label:"Cellule",anchor:l},{id:"multi",label:"Cellules sélectionnées",anchor:n},{id:"active-cell",label:"Cellule active",anchor:a},{id:"drag-handle",label:"Poignée de recopie",anchor:i},{id:"sheet",label:"Feuille de calcul",anchor:s}].filter(h=>h.anchor);W(u),u.length=Math.min(4,u.length),this._zonePairs=new Map(u.map(h=>[h.id,h.label])),this._zoneSolved=new Set,this._activeBadge=null;const d=document.createElement("div");d.className="ss-zone-overlay-layer",d.style.cssText="position:absolute; top:0; left:0; right:0; bottom:0; pointer-events:none;",e.appendChild(d),u.forEach((h,_)=>{const p=document.createElement("button");p.type="button",p.className="ss-zone-badge",p.dataset.zoneId=h.id,p.textContent=String(_+1),p.title="Clique pour identifier cette zone",p.addEventListener("click",()=>this._onBadgeClick(p)),d.appendChild(p),this._positionBadge(p,h.anchor,e)});const b=document.createElement("div");b.className="ss-vocab-panel",b.innerHTML=`
      <div class="ss-vocab-pills"></div>
      <div class="ss-vocab-status">${this._zoneSolved.size} / ${this._zonePairs.size}</div>
    `;const f=b.querySelector(".ss-vocab-pills"),v=u.map(h=>h.label);W(v),v.forEach(h=>{const _=document.createElement("button");_.type="button",_.className="ss-vocab-pill",_.textContent=h,_.dataset.label=h,_.addEventListener("click",()=>this._onPillClick(_)),f.appendChild(_)});const g=document.createElement("div");g.className="ss-host-flex",g.appendChild(e),g.appendChild(b),this.appendChild(g),this._autoScaleRO?.unobserve&&this._autoScaleRO.disconnect(),this._autoScaleRO={disconnect:()=>{}},this.style.transform="none",this.style.width="100%",this.style.height="100%",this.style.display="block";const m=this.parentElement;if(m&&(m.style.height="100%",m.style.width="100%",m.style.alignItems=""),!this._zoneResizeWired){this._zoneResizeWired=!0;const h=new ResizeObserver(()=>this._repositionZoneBadges());h.observe(e),this._zoneRO=h}}_positionBadge(e,t,s){if(!t||!s)return;const r=t.getBoundingClientRect(),o=s.getBoundingClientRect(),l=e.dataset.zoneId,n=l==="active-cell"||l==="cell-address",a=r.top-o.top+s.scrollTop+(n?r.height:r.height/2),i=r.left-o.left+s.scrollLeft+r.width/2;e.style.top=a+"px",e.style.left=i+"px",e.style.transform=l==="drag-handle"?"translate(-100%, -100%)":n?"translate(-50%, 0)":"translate(-50%, -50%)"}_repositionZoneBadges(){const e=this.querySelector(".ss-wrap");e&&e.querySelectorAll(".ss-zone-badge").forEach(t=>{const s=t.dataset.zoneId,r=this._findZoneAnchor(s);r&&this._positionBadge(t,r,e)})}_findZoneAnchor(e){const t=this.querySelector(".ss-wrap");if(!t)return null;const s=t.querySelector(".ss-grid");switch(e){case"toolbar":return t.querySelector(".ss-toolbar-fmt");case"cell-address":return t.querySelector(".ss-cell-label");case"formula-bar":return t.querySelector(".ss-formula-bar");case"col-header":return s?.querySelector("thead tr > th:nth-child(4)");case"row-header":return s?.querySelector("tbody tr:nth-child(3) > th");case"cell":return s?.querySelector('.ss-cell[data-ref="B5"]');case"range":return s?.querySelector(".ss-cell.ss-zone-range");case"multi":return s?.querySelector(".ss-cell.ss-zone-multi");case"active-cell":return s?.querySelector(".ss-cell.ss-zone-active");case"drag-handle":return s?.querySelector(".ss-drag-handle");case"sheet":return s;default:return null}}_onBadgeClick(e){e.classList.contains("ss-zone-ok")||(this.querySelectorAll(".ss-zone-badge.ss-zone-active-sel").forEach(t=>t.classList.remove("ss-zone-active-sel")),e.classList.add("ss-zone-active-sel"),this._activeBadge=e)}_onPillClick(e){if(e.classList.contains("ss-pill-used"))return;if(!this._activeBadge){const o=this.querySelector(".ss-vocab-panel-title");o&&(o.style.color="#dc2626",setTimeout(()=>{o.style.color=""},600));return}const t=this._activeBadge.dataset.zoneId,s=this._zonePairs.get(t),r=e.dataset.label===s;if(P(()=>import("./rapido-engine.BVjETP1P.js").then(o=>o.f),__vite__mapDeps([0,1,2,3])).then(o=>o.popSlogan?.(e,r)),r)this._activeBadge.classList.remove("ss-zone-active-sel"),this._activeBadge.classList.add("ss-zone-ok"),e.classList.add("ss-pill-used"),e.disabled=!0,this._zoneSolved.add(t),this._activeBadge=null,this._updateZoneStatus(),this._updatePhase(),this._zoneSolved.size===this._zonePairs.size&&P(()=>import("./vis-input.DyYEdFBn.js"),__vite__mapDeps([4,2,0,1,3])).then(o=>o.fireConfettiOnce?.(this));else{this._activeBadge.classList.add("ss-zone-ko");const o=this._activeBadge;setTimeout(()=>o.classList.remove("ss-zone-ko","ss-zone-active-sel"),400),this._activeBadge=null}}_updateZoneStatus(){const e=this.querySelector(".ss-vocab-status");if(!e)return;const t=this._zoneSolved.size,s=this._zonePairs.size;e.textContent=t+" / "+s,e.classList.toggle("ss-status-done",t===s),t===s&&(e.textContent="✓ "+t+" / "+s+"  —  Bravo !")}_buildDom(){const e=document.createElement("div");e.className="ss-wrap";const t=document.createElement("div");t.className="ss-toolbar";const s=document.createElement("div");s.className="ss-toolbar-row ss-toolbar-fmt",[{fmt:"bold",label:"B",title:"Gras"},{fmt:"italic",label:"I",title:"Italique"},{fmt:"underline",label:"U",title:"Souligné"},{fmt:"color",label:"A",title:"Couleur du texte"},{fmt:"sep",label:"",title:""},{fmt:"align-left",label:"⬅",title:"Aligner à gauche"},{fmt:"align-center",label:"⬛",title:"Centrer"},{fmt:"align-right",label:"➡",title:"Aligner à droite"}].forEach(({fmt:f,label:v,title:g})=>{if(f==="sep"){const h=document.createElement("span");h.className="ss-tb-fmt ss-tb-sep",s.appendChild(h);return}const m=document.createElement("button");m.type="button",m.className="ss-tb-fmt",m.dataset.fmt=f,m.textContent=v,m.title=g,m.setAttribute("aria-label",g),s.appendChild(m)}),t.appendChild(s);const o=document.createElement("div");o.className="ss-toolbar-row";const l=document.createElement("span");l.className="ss-cell-label",l.textContent="—",l.title="Adresse de la cellule",o.appendChild(l);const n=document.createElement("div");n.className="ss-formula-bar",n.textContent="",n.title="Barre de formule",o.appendChild(n);const a=document.createElement("button");a.type="button",a.textContent="↺",a.title="Annuler",a.addEventListener("click",()=>this._undoLast()),o.appendChild(a),t.appendChild(o),e.appendChild(t);const i=document.createElement("table");i.className="ss-grid";const u=document.createElement("thead"),d=document.createElement("tr");d.appendChild(document.createElement("th"));for(let f=0;f<this._cols;f++){const v=document.createElement("th");v.textContent=this._headers?.col?.[f]??A(f),d.appendChild(v)}u.appendChild(d),i.appendChild(u);const b=document.createElement("tbody");for(let f=0;f<this._rows;f++){const v=document.createElement("tr"),g=document.createElement("th");g.textContent=this._headers?.row?.[f]??String(f+1),v.appendChild(g);for(let m=0;m<this._cols;m++){const h=k(m,f);if(this._mergeCovered?.has(h))continue;const _=document.createElement("td");_.className="ss-cell",_.dataset.col=String(m),_.dataset.row=String(f),_.dataset.ref=h;const p=this._mergeSpans?.get(h);p&&(p.colspan>1&&(_.colSpan=p.colspan),p.rowspan>1&&(_.rowSpan=p.rowspan),_.classList.add("ss-merged")),this._paintCell(_),v.appendChild(_)}b.appendChild(v)}i.appendChild(b),e.appendChild(i),this.appendChild(e),this._tbody=b,this._fxBar=n,this._cellLabel=l,this._wireGridEvents(b)}_renderGrid(){this._tbody&&(this._recompute(),this._tbody.querySelectorAll(".ss-cell").forEach(e=>this._paintCell(e)),this._updatePhase(),this._renderChart())}_renderChart(){if(!this._chart)return;const e=this.querySelector(".ss-wrap");if(!e)return;let t=e.querySelector(".ss-chart");t||(t=document.createElement("div"),t.className="ss-chart",e.querySelector(".ss-grid")?.after(t)||e.appendChild(t));const s=this._refsInRangeStr(this._chart.xs),r=this._refsInRangeStr(this._chart.ys);if(!s.length||!r.length){t.innerHTML="";return}const o=s.map(c=>this._values.get(c)).filter(c=>typeof c=="number");if(!o.length){t.innerHTML="";return}const l=Math.min(...o),n=Math.max(...o),a=[];for(let c=0;c<Math.min(s.length,r.length);c++){const w=this._values.get(s[c]),y=this._values.get(r[c]);typeof w=="number"&&typeof y=="number"&&a.push([w,y])}let i=-1,u=1;if(a.length){i=Math.min(...a.map(w=>w[1])),u=Math.max(...a.map(w=>w[1])),i===u&&(i-=1,u+=1);const c=(u-i)*.15;i-=c,u+=c}const d=400,b=180,f={top:12,right:14,bottom:28,left:36},v=d-f.left-f.right,g=b-f.top-f.bottom,m=c=>f.left+(c-l)/(n-l||1)*v,h=c=>f.top+(1-(c-i)/(u-i||1))*g,_=4,p=Math.min(5,n-l),C=Array.from({length:_+1},(c,w)=>i+(u-i)*w/_),E=Array.from({length:p+1},(c,w)=>l+(n-l)*w/p),S=i<=0&&u>=0,z=[`<svg viewBox="0 0 ${d} ${b}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">`,C.map(c=>`<line x1="${f.left}" y1="${h(c)}" x2="${d-f.right}" y2="${h(c)}" stroke="#e2e8f0" stroke-width="0.5"/>`).join(""),`<line x1="${f.left}" y1="${f.top}" x2="${f.left}" y2="${b-f.bottom}" stroke="#475569" stroke-width="1"/>`,`<line x1="${f.left}" y1="${S?h(0):b-f.bottom}" x2="${d-f.right}" y2="${S?h(0):b-f.bottom}" stroke="#475569" stroke-width="1"/>`,C.map(c=>`<g><line x1="${f.left-3}" y1="${h(c)}" x2="${f.left}" y2="${h(c)}" stroke="#475569" stroke-width="1"/><text x="${f.left-5}" y="${h(c)+3}" text-anchor="end" font-size="10" fill="#475569">${R(Math.round(c*10)/10)}</text></g>`).join(""),E.map(c=>`<g><line x1="${m(c)}" y1="${b-f.bottom}" x2="${m(c)}" y2="${b-f.bottom+3}" stroke="#475569" stroke-width="1"/><text x="${m(c)}" y="${b-f.bottom+14}" text-anchor="middle" font-size="10" fill="#475569">${R(Math.round(c))}</text></g>`).join(""),a.length>=2?`<polyline points="${a.map(c=>`${m(c[0])},${h(c[1])}`).join(" ")}" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-opacity="0.6"/>`:"",a.map(([c,w])=>`<circle cx="${m(c)}" cy="${h(w)}" r="3.5" fill="#2563eb" stroke="#fff" stroke-width="1.2"/>`).join(""),"</svg>"].join("");t.innerHTML=z}_refsInRangeStr(e){if(typeof e!="string")return[];const t=/^([A-Z]+)(\d+):([A-Z]+)(\d+)$/.exec(e.trim());if(!t)return[];const s=q(t[1]),r=q(t[3]),o=parseInt(t[2],10)-1,l=parseInt(t[4],10)-1,n=[];for(let a=o;a<=l;a++)for(let i=s;i<=r;i++)n.push(k(i,a));return n}_paintCell(e){const t=e.dataset.ref,s=this._cells.get(t);if(e.classList.remove("ss-align-l","ss-align-c","ss-align-r"),s?.align&&e.classList.add("ss-align-"+s.align),s&&s.target&&!this._showSolutions){let l=e.querySelector(".ss-target-input");if(!l)e.classList.add("ss-target"),s.sol.fillOnly&&e.classList.add("ss-fill-only"),l=document.createElement("input"),l.type="text",l.className="rapido-input ss-target-input",l.dataset.solutionType="spreadsheet-formula",l.dataset.ssRef=t,l.dataset.solution=s.sol.formula,l.placeholder=s.sol.fillOnly?"":"…",l.value=this._displayValueForFill(s,t),s.sol.fillOnly&&(l.readOnly=!0,l.title="Recopie depuis la cellule du dessus (drag-fill)"),e.textContent="",e.appendChild(l),l.addEventListener("focus",()=>{this._selectCell(e),this._activeInput=l,s.raw&&l.value!==s.raw&&(l.value=s.raw),this._highlightFormulaRefs(l.value)}),l.addEventListener("input",()=>{this._highlightFormulaRefs(l.value),this._updateFormulaBar(t,l.value)}),l.addEventListener("blur",()=>{this._clearRefHighlights(),this._activeInput===l&&(this._activeInput=null),e.classList.remove("ss-sel");const n=ee(l.value);if(n!==s.raw&&(this._pushUndo(),s.raw=n,this._parseIntoCell(s),this._recompute(),this._repaintNonTargets(),this._updatePhase()),s.raw&&s.raw.startsWith("=")){const a=this._values.get(t);a!=null&&!(typeof a=="object"&&a.error)&&(l.value=R(a))}}),l.addEventListener("keydown",n=>{n.key==="Enter"?(n.preventDefault(),l.blur()):n.key==="Escape"&&(l.value=s.raw||"",l.blur())}),this._observeTargetInput(l,t);else{const n=this._displayValueForFill(s,t);document.activeElement!==l&&l.value!==n&&(l.value=n),e.classList.add("ss-target"),s.sol.fillOnly&&e.classList.add("ss-fill-only")}return}if(e.classList.remove("ss-locked","ss-target","ss-text","ss-num","ss-error"),e.querySelector(".ss-cell-input"))return;let o="";if(s){s.locked&&e.classList.add("ss-locked");const l=this._values.get(t);l&&typeof l=="object"&&l.error?(o=l.error,e.classList.add("ss-error")):typeof l=="number"?(o=R(l),e.classList.add("ss-num")):l!=null&&(o=String(l),e.classList.add("ss-text"))}e.textContent=o}_updateFormulaBar(e,t){const s=this._cells.get(e);this._cellLabel&&(this._cellLabel.textContent=e||"—"),this._fxBar&&(this._fxBar.textContent=t??s?.raw??"")}_wireGridEvents(e){e.addEventListener("click",t=>{if(this._refPickupActive)return;const s=t.target.closest(".ss-cell");s&&(t.target.classList?.contains("ss-cell-input")||this._selectCell(s))}),e.addEventListener("dblclick",t=>{const s=t.target.closest(".ss-cell");s&&this._beginEdit(s)}),e.addEventListener("keydown",t=>{if(t.key==="Enter"&&this._selected){const s=this._cellElement(this._selected.col,this._selected.row);s&&!s.querySelector(".ss-cell-input")&&(t.preventDefault(),this._beginEdit(s))}}),e.addEventListener("pointerdown",t=>{if(t.target.closest(".ss-fill-handle")&&this._selected){t.preventDefault(),this._startFill();return}const r=t.target.closest(".ss-cell");if(!r)return;const o=this._activeInput;!o||o.readOnly||this._isInRefPickupMode(o)&&(r.contains(o)||(t.preventDefault(),this._startRefPickup(r)))})}_isInRefPickupMode(e){const t=e.value||"";if(!t.startsWith("=")&&!t.startsWith("+"))return!1;const s=e.selectionStart??t.length,r=(t[s-1]||"").trim();return/[=+\-*/^(,;:<>]/.test(r)}_insertAtCursor(e,t){const s=e.value||"",r=e.selectionStart??s.length,o=e.selectionEnd??s.length,l=s.slice(0,r),n=s.slice(o);e.value=l+t+n;const a=r+t.length;e.setSelectionRange(a,a),e.dispatchEvent(new Event("input",{bubbles:!0}))}_startRefPickup(e){const t=this._activeInput;if(!t)return;const s=parseInt(e.dataset.col,10),r=parseInt(e.dataset.row,10),o=k(s,r),l=t.selectionStart??(t.value||"").length;this._insertAtCursor(t,o),this._refPickupActive=!0;const n=(d,b)=>{const v=document.elementFromPoint(d,b)?.closest?.(".ss-cell");return v&&this._tbody.contains(v)?v:null},a=(d,b)=>{const v=d===s&&b===r?o:o+":"+k(d,b),g=t.value.slice(0,l),m=t.value.slice(l+this._lastInsertedLen);t.value=g+v+m,this._lastInsertedLen=v.length;const h=l+v.length;t.setSelectionRange(h,h),t.focus(),t.dispatchEvent(new Event("input",{bubbles:!0}))};this._lastInsertedLen=o.length;const i=d=>{const b=n(d.clientX,d.clientY);if(!b)return;const f=parseInt(b.dataset.col,10),v=parseInt(b.dataset.row,10);a(f,v)},u=()=>{document.removeEventListener("pointermove",i),setTimeout(()=>{this._refPickupActive=!1},0),t.focus()};document.addEventListener("pointermove",i),document.addEventListener("pointerup",u,{once:!0})}_wireDocLevelListeners(){}_selectCell(e){if(this._selected){const r=this._cellElement(this._selected.col,this._selected.row);r?.classList.remove("ss-sel"),r?.querySelector(".ss-fill-handle")?.remove()}const t=parseInt(e.dataset.col,10),s=parseInt(e.dataset.row,10);this._selected={col:t,row:s},e.classList.add("ss-sel"),this._updateFormulaBar(e.dataset.ref),this._ensureHandleForRef(e.dataset.ref)}_ensureHandleForRef(e){const t=this._tbody?.querySelector(`.ss-cell[data-ref="${e}"]`);if(!t||t.querySelector(".ss-fill-handle")||t.querySelector(".ss-cell-input"))return;const s=this._cells.get(e);if(!s)return;let r=!!s.ast;if(!r&&typeof this._values.get(e)=="number"){const n=M(e);if(n){const a=this._values.get(k(n.col,n.row-1)),i=this._values.get(k(n.col-1,n.row));(typeof a=="number"||typeof i=="number")&&(r=!0)}}if(!r)return;const o=document.createElement("button");o.type="button",o.className="ss-fill-handle",o.title="Recopier (cliquer puis cliquer la cellule cible)",o.setAttribute("aria-label","Poignée de recopie"),t.appendChild(o)}_highlightFormulaRefs(e){if(this._clearRefHighlights(),!e)return;const t=String(e).trim();if(!t.startsWith("="))return;const s=L(t);if(s?.error)return;const r=[];N(s,r,new Map),r.forEach((l,n)=>{const a="ss-ref-hl-"+n%4;l.forEach(({col:i,row:u})=>{this._cellElement(i,u)?.classList.add(a)})})}_clearRefHighlights(){this._tbody&&this._tbody.querySelectorAll(".ss-ref-hl-0, .ss-ref-hl-1, .ss-ref-hl-2, .ss-ref-hl-3").forEach(e=>e.classList.remove("ss-ref-hl-0","ss-ref-hl-1","ss-ref-hl-2","ss-ref-hl-3"))}_repaintNonTargets(){if(this._tbody&&(this._tbody.querySelectorAll(".ss-cell").forEach(e=>{this._cells.get(e.dataset.ref)?.target&&!this._showSolutions||this._paintCell(e)}),this._selected)){const e=k(this._selected.col,this._selected.row);this._ensureHandleForRef(e)}}_cellElement(e,t){return this._tbody?.querySelector(`.ss-cell[data-col="${e}"][data-row="${t}"]`)}_beginEdit(e){const t=e.dataset.ref,s=this._cells.get(t)||{};if(s.locked)return;if(s.target){e.querySelector(".ss-cell-input, .rapido-input")?.focus();return}if(e.querySelector(".ss-cell-input"))return;const r=s.raw??"",o=document.createElement("input");o.type="text",o.className="ss-cell-input",o.value=r,e.textContent="",e.appendChild(o),o.focus(),o.select();const l=n=>{const a=n?o.value:r;if(n&&a!==r){this._pushUndo();let i=this._cells.get(t);i||(i={raw:"",locked:!1},this._cells.set(t,i)),i.raw=a,this._parseIntoCell(i),this._recompute()}this._renderGrid()};o.addEventListener("blur",()=>l(!0)),o.addEventListener("keydown",n=>{n.key==="Enter"?(n.preventDefault(),o.blur()):n.key==="Escape"&&(n.preventDefault(),l(!1))})}_startFill(){this._fillSource={...this._selected};const e=this._cellElement(this._fillSource.col,this._fillSource.row);e?.classList.add("ss-fill-source");const t=()=>{this._tbody.querySelectorAll(".ss-fill-preview").forEach(n=>n.classList.remove("ss-fill-preview"))},s=(n,a)=>{const u=document.elementFromPoint(n,a)?.closest?.(".ss-cell");return u&&this._tbody.contains(u)?u:null},r=(n,a)=>{t();const i=Math.min(this._fillSource.col,n),u=Math.max(this._fillSource.col,n),d=Math.min(this._fillSource.row,a),b=Math.max(this._fillSource.row,a);for(let f=d;f<=b;f++)for(let v=i;v<=u;v++){if(v===this._fillSource.col&&f===this._fillSource.row)continue;this._cellElement(v,f)?.classList.add("ss-fill-preview")}},o=n=>{const a=s(n.clientX,n.clientY);if(!a)return;const i=parseInt(a.dataset.col,10),u=parseInt(a.dataset.row,10);r(i,u)},l=n=>{document.removeEventListener("pointermove",o),t(),e?.classList.remove("ss-fill-source");const a=s(n.clientX,n.clientY);if(!a){this._fillSource=null;return}this._applyFill(a),this._fillSource=null};document.addEventListener("pointermove",o),document.addEventListener("pointerup",l,{once:!0})}_applyFill(e){const t=this._fillSource;if(!t)return;const s=k(t.col,t.row),r=this._cells.get(s);if(!r)return;const o=parseInt(e.dataset.col,10),l=parseInt(e.dataset.row,10);if(r.ast){const m=Math.min(t.col,o),h=Math.max(t.col,o),_=Math.min(t.row,l),p=Math.max(t.row,l);this._pushUndo();for(let C=_;C<=p;C++)for(let E=m;E<=h;E++){if(E===t.col&&C===t.row)continue;const S=k(E,C);if(this._cells.get(S)?.locked)continue;const c=j(r.ast,E-t.col,C-t.row),w=U(c);let y=this._cells.get(S);y||(y={raw:"",locked:!1},this._cells.set(S,y)),y.raw=w,this._parseIntoCell(y)}this._postFillFeedback();return}const n=this._values.get(s);if(typeof n!="number")return;const a=l-t.row,i=o-t.col,u=Math.abs(a)>=Math.abs(i);if(u&&a===0||!u&&i===0)return;const d=Math.sign(u?a:i),b=u?k(t.col,t.row-d):k(t.col-d,t.row),f=this._values.get(b);if(typeof f!="number")return;const v=n-f;this._pushUndo();let g=n;if(u)for(let m=t.row+d;d>0?m<=l:m>=l;m+=d){g+=v;const h=k(t.col,m),_=this._cells.get(h);if(_?.locked)continue;let p=_;p||(p={raw:"",locked:!1},this._cells.set(h,p)),p.raw=R(g),this._parseIntoCell(p)}else for(let m=t.col+d;d>0?m<=o:m>=o;m+=d){g+=v;const h=k(m,t.row),_=this._cells.get(h);if(_?.locked)continue;let p=_;p||(p={raw:"",locked:!1},this._cells.set(h,p)),p.raw=R(g),this._parseIntoCell(p)}this._postFillFeedback()}_postFillFeedback(){this._recompute(),this._renderGrid(),P(()=>import("./rapido-engine.BVjETP1P.js").then(e=>e.f),__vite__mapDeps([0,1,2,3])).then(e=>{this._targetCells().forEach(t=>{if(!this._cells.get(t)?.raw)return;const r=this._tbody?.querySelector(`.ss-target-input[data-ss-ref="${t}"]`);if(!r)return;const o=this._isCorrect(t);e.renderFeedback?.(r,o?"correct":"incorrect")}),this.validate()&&P(()=>import("./vis-input.DyYEdFBn.js"),__vite__mapDeps([4,2,0,1,3])).then(t=>t.fireConfettiOnce?.(this))})}_pushUndo(){this._undo.length>=20&&this._undo.shift();const e={};for(const[t,s]of this._cells)e[t]={raw:s.raw,locked:s.locked,target:s.target,sol:s.sol};this._undo.push(e)}_undoLast(){const e=this._undo.pop();if(e){this._cells.clear();for(const[t,s]of Object.entries(e)){const r={raw:s.raw,locked:s.locked};s.target&&(r.target=!0,r.sol=s.sol),this._parseIntoCell(r),this._cells.set(t,r)}this._recompute(),this._renderGrid()}}_targetCells(){const e=[];for(const[t,s]of this._cells)s.target&&e.push(t);return e}_isCorrect(e){const t=this._cells.get(e);if(!t?.sol)return!1;const s=(t.raw||"").trim();if(s===""||t.sol.maxDollars!=null&&(s.match(/\$/g)||[]).length>t.sol.maxDollars)return!1;const r=L(t.sol.formula);if(t.sol.mode==="value"){const l=L(s.startsWith("=")?s:"="+s);if(l.error)return!1;const n=this._evaluateInContext(l),a=this._evaluateInContext(r);return typeof n=="number"&&typeof a=="number"&&Math.abs(n-a)<1e-9}const o=L(s);if(o.error)return!1;if(V(o,r))return!0;for(const l of t.sol.alt||[]){const n=L(l);if(!n.error&&V(o,n))return!0}return!1}_evaluateInContext(e){if(!e||e.error)return null;const s=H(e,{getCell:(r,o)=>{const l=k(r,o);this._values.has(l)||this._evaluateCell(l,new Set);const n=this._values.get(l);return n&&typeof n=="object"&&n.error?NaN:n===void 0?"":n}});return s&&typeof s=="object"&&s.error?null:s}_updatePhase(){if(this._mode==="identify-zones"){const l=this._zonePairs.size;if(l===0){this._currentPhase="cellule_vide";return}if(this._zoneSolved.size===l){this._currentPhase="done";return}if(this._zoneSolved.size===0){this._currentPhase="cellule_vide";return}this._currentPhase="erreur_calcul";return}if(this._mode==="cell-click"||this._mode==="range-drag"){if(!this._userSelection){this._currentPhase="cellule_vide";return}const l=this._userSelectionText().toUpperCase()===(this._currentTarget||"").trim().toUpperCase();this._currentPhase=l?"done":"erreur_calcul";return}if(this._mode==="cell-name"||this._mode==="range-name"){const n=(this.querySelector(".ss-name-input")?.value||"").trim();if(!n){this._currentPhase="cellule_vide";return}const a=(this._currentTarget||"").trim().toUpperCase();this._currentPhase=n.toUpperCase()===a?"done":"erreur_calcul";return}const e=this._targetCells();if(e.length===0){this._currentPhase="cellule_vide";return}let t=!0,s=!1,r=!1,o=!1;for(const l of e){const a=(this._cells.get(l)?.raw||"").trim();if(a===""){t=!1;continue}if(s=!0,L(a).error){o=!0,t=!1;continue}const u=this._values.get(l);u&&typeof u=="object"&&u.error&&(r=!0),this._isCorrect(l)||(t=!1)}t?this._currentPhase="done":o?this._currentPhase="formule_invalide":s?r?this._currentPhase="formule_invalide":this._currentPhase="erreur_calcul":this._currentPhase="cellule_vide"}_observeTargetInput(e,t){if(e._ssObserved)return;e._ssObserved=!0;const s=this.closest(".q-card");if(!s)return;const r=se(()=>{s.querySelector(".am-indice-panel.open")&&s.dispatchEvent(new CustomEvent("zefor-indice-auto-refresh",{detail:{studentValue:e.value,formula:e.value,phase:this.getCurrentPhase(),targetCell:t,source:this},bubbles:!0}))},300);e.addEventListener("input",r),new MutationObserver(()=>{e.classList.contains("incorrect")&&s.dispatchEvent(new CustomEvent("zefor-indice-auto-pop",{detail:{studentValue:e.value,formula:e.value,phase:this.getCurrentPhase(),targetCell:t,source:this},bubbles:!0}))}).observe(e,{attributes:!0,attributeFilter:["class"]})}}function N(x,e,t){if(!(!x||typeof x!="object"||x.error)){if(x.type==="ref"){const s="r:"+x.col+":"+x.row;t.has(s)||(t.set(s,e.length),e.push([{col:x.col,row:x.row}]));return}if(x.type==="range"){const s=x.a,r=x.b,o=Math.min(s.col,r.col),l=Math.max(s.col,r.col),n=Math.min(s.row,r.row),a=Math.max(s.row,r.row),i="g:"+o+":"+n+":"+l+":"+a;if(!t.has(i)){t.set(i,e.length);const u=[];for(let d=n;d<=a;d++)for(let b=o;b<=l;b++)u.push({col:b,row:d});e.push(u)}return}switch(x.type){case"unary":N(x.arg,e,t);break;case"binop":N(x.left,e,t),N(x.right,e,t);break;case"fn":x.args.forEach(s=>N(s,e,t));break}}}class G extends Error{constructor(e="#CYCLE!"){super(e),this.code=e}}function W(x){for(let e=x.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[x[e],x[t]]=[x[t],x[e]]}return x}function se(x,e){let t=null;return(...s)=>{t&&clearTimeout(t),t=setTimeout(()=>x(...s),e)}}customElements.get("math974-spreadsheet")||customElements.define("math974-spreadsheet",te);function de(x,e,t){const s=t||x||{};if(!e)return JSON.parse(JSON.stringify(s));const r=(g,m)=>{if(typeof g=="number")return g;if(Array.isArray(g))return g[Math.floor(Math.random()*g.length)];if(typeof g=="string"&&g.includes("..")){const[h,_]=g.split("..").map(Number);return Math.floor(Math.random()*(_-h+1))+h}return m},o=(g,m)=>Array.isArray(g)&&g.length?g[Math.floor(Math.random()*g.length)]:m;if(e.affine){let g=r(e.a,3);g===0&&(g=1);const m=r(e.b,-2),h=Array.isArray(e.xs)?e.xs:Array.from({length:10},(C,E)=>E+1),_=JSON.parse(JSON.stringify(s));_.cells={A1:"x",A2:"f(x)"},_.solutions={};const p=["A1","A2"];return h.forEach((C,E)=>{const S=A(E+1),z=g*C+m;_.cells[S+"1"]=C,p.push(S+"1"),E<2?(_.cells[S+"2"]=z,p.push(S+"2")):_.solutions[S+"2"]={formula:"="+z,mode:"value"}}),_.locked=p,_}if(e.proportion){const g=r(e.k,3),m=Array.isArray(e.xs)?[...e.xs]:[2,3,4,5,6];for(let c=m.length-1;c>0;c--){const w=Math.floor(Math.random()*(c+1));[m[c],m[w]]=[m[w],m[c]]}const h=Math.floor(Math.random()*m.length),_=!!e.shuffleRows,p=JSON.parse(JSON.stringify(s));p.cells={A1:s.cells?.A1??"x",A2:s.cells?.A2??"y"},p.solutions={};const C=["A1","A2"],E=c=>Math.round(c*100)/100,S=(c,w,y)=>{p.cells[c+w]=y,C.push(c+w)},z=(c,w,y)=>{p.solutions[c+w]={formula:"="+y,mode:"value"}};return m.forEach((c,w)=>{const y=A(w+1),I=E(g*c);w===h?(S(y,"1",c),S(y,"2",I)):_?c===1||Math.random()<.5?(S(y,"1",c),z(y,"2",I)):(S(y,"2",I),z(y,"1",c)):(S(y,"1",c),z(y,"2",I))}),p.locked=C,p}if(e.stat){const g=w=>{const y=/^([A-Z]+)(\d+):([A-Z]+)(\d+)$/.exec(String(w||"").trim());if(!y)return[];const I=q(y[1]),T=q(y[3]),O=+y[2]-1,J=+y[4]-1,D=[];for(let F=O;F<=J;F++)for(let B=I;B<=T;B++)D.push(A(B)+(F+1));return D},m=w=>Math.round(w*100)/100,h=JSON.parse(JSON.stringify(s));h.cells={...s.cells||{}};const _=e.data||"",p=g(_),[C,E]=String(e.range||"5..20").split("..").map(Number),S=p.map(()=>Math.floor(Math.random()*(E-C+1))+C);p.forEach((w,y)=>{h.cells[w]=S[y]});const z=e.target||"F2";let c;if(e.stat==="somme")c={formula:`=SOMME(${_})`,alt:[`=${p.join("+")}`]};else if(e.stat==="moyenne")c={formula:`=MOYENNE(${_})`,alt:[`=(${p.join("+")})/${p.length}`]};else if(e.stat==="etendue")c={formula:`=${Math.max(...S)-Math.min(...S)}`,mode:"value",alt:[`=MAX(${_})-MIN(${_})`]};else if(e.stat==="mediane"){const w=[...S].sort((T,O)=>T-O),y=w.length;c={formula:`=${y%2?w[(y-1)/2]:m((w[y/2-1]+w[y/2])/2)}`,mode:"value"}}else c={formula:`=SOMME(${_})`};return h.solutions={[z]:c},h}let l=r(e.a,5),n=r(e.b,3);const a=o(e.op,"+");if(a==="-"&&l<n&&([l,n]=[n,l]),a==="/"){n=Math.max(1,n);const g=Math.max(1,Math.round(l/n));l=n*g}const i={"+":"la somme de a et b","-":"la différence entre a et b","*":"le produit de a par b","/":"le quotient de a par b"},u=s.targetCell||"C2",d={...s.cells||{}};d.A2=l,d.B2=n;const b=`=A2${a}B2`,f=a==="+"||a==="*"?[`=B2${a}A2`]:[],v=JSON.parse(JSON.stringify(s));return v.cells=d,v.op={symbol:a,label:i[a]||a},v.solutions={[u]:{formula:b,alt:f}},v}export{ue as autoScale,ce as defaultPosition,de as randomize};
