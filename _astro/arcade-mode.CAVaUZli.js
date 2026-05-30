const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/addition-posee.DXpK87YZ.js","_astro/vis-input.CxwxqYqd.js","_astro/editor.CJZspgfY.js","_astro/rapido-engine.NP9QBxQu.js","_astro/rapidos-visuals-integration.7XMkS1mg.js","_astro/pose-helpers.0ZlZMBCE.js","_astro/angle-triangle.DjHJouEB.js","_astro/utils.MftNdmoG.js","_astro/angles-proprietes.Dp34-aqX.js","_astro/figure-colors.CJg3xQS9.js","_astro/arbre-construire.BjZu51CJ.js","_astro/builder-core.CWi3HrxH.js","_astro/arbre.C7zSmtf2.js","_astro/bar-geom.qOvxJNxq.js","_astro/arbre-possibles.BdYYMEVP.js","_astro/axe-gradue-zefor.FRmCqlyB.js","_astro/axe-gradue.BgzZCvh4.js","_astro/division-posee.BMUrCtTU.js","_astro/echelle-probabilite.m-E8ChzK.js","_astro/equation-etayage.CO8U032f.js","_astro/linearite-mult.Bw6KxhUs.js","_astro/linearite-tableau.B4nR9TEC.js","_astro/multiplication-posee.2M8VAxE1.js","_astro/polygone-perimetre.-xbpulq9.js","_astro/pythagore-figure.Dx-v3Cm3.js","_astro/figure-validation.C_GqCM6k.js","_astro/retour-unite-zefor.DwRT1eR1.js","_astro/retour-unite.Bv03PV2v.js","_astro/schema-additif.B0fxjfXS.js","_astro/schema-comparaison-mult.eQ6y84Wq.js","_astro/bar-comparaison-mult.DP02BSw_.js","_astro/ink.DbHLEoN5.js","_astro/schema-comparaison.r5cwsZHA.js","_astro/bar-comparaison.CyAI7uHR.js","_astro/schema-construire-comp-mult.ucVYZekv.js","_astro/schema-construire-comp.ClZFsrjb.js","_astro/schema-construire-mult.CkEAAw6V.js","_astro/bar-mult.BDRYgsTx.js","_astro/schema-construire.CCErrfy_.js","_astro/bar-additif.Cv2D3s3G.js","_astro/schema-multiplicatif.CYQ5LX4L.js","_astro/soustraction-posee.DN42BWAC.js","_astro/spreadsheet.bbTHVZ2q.js","_astro/formula-parser.CuBpGvtX.js","_astro/texte-trous.CA8uqss9.js","_astro/thales-figure.CUYzOBp_.js","_astro/trigo-figure.DBjdx3HB.js"])))=>i.map(i=>d[i]);
import{_ as c}from"./editor.CJZspgfY.js";import{_ as B,h as N}from"./rapidos-visuals-integration.7XMkS1mg.js";const U={"Nombres et calculs":{bg:"#fff1f2",cardBorder:"#fecdd3",border:"#e11d48",text:"#be123c"},"Grandeurs et mesures":{bg:"#faf5ff",cardBorder:"#e9d5ff",border:"#7e22ce",text:"#6b21a8"},"Espace et géométrie":{bg:"#eff6ff",cardBorder:"#bfdbfe",border:"#1d4ed8",text:"#1e40af"},"Organisation et gestion de données, Probabilités":{bg:"#f0fdf4",cardBorder:"#bbf7d0",border:"#16a34a",text:"#15803d"},"Données et probabilités":{bg:"#f0fdf4",cardBorder:"#bbf7d0",border:"#16a34a",text:"#15803d"},"La proportionnalité":{bg:"#f0fdfa",cardBorder:"#99f6e4",border:"#0d9488",text:"#0f766e"},Proportionnalité:{bg:"#f0fdfa",cardBorder:"#99f6e4",border:"#0d9488",text:"#0f766e"},"Initiation à la pensée informatique":{bg:"#fff7ed",cardBorder:"#fed7aa",border:"#ea580c",text:"#c2410c"},"Algorithmique et programmation":{bg:"#fff7ed",cardBorder:"#fed7aa",border:"#ea580c",text:"#c2410c"},"Résolution de problèmes":{bg:"#1e293b",cardBorder:"#334155",border:"#64748b",text:"#e2e8f0"}},F={bg:"#f8fafc",cardBorder:"#e2e8f0",border:"#94a3b8",text:"#475569"},D=["fragile","satisfaisant","tres-satisfaisant","expert"],_={F:"Fragile",S:"Satisfaisant",TS:"Très Satisfaisant",E:"Expert",R:"Rapido",RQ:"Random Quest"},Q={F:"fragile",S:"satisfaisant",TS:"tres-satisfaisant",E:"expert"},H={F:"F",S:"S",TS:"TS",E:"E",R:"R",RQ:"RQ"};function G(e){return H[e]||e||"?"}function V(e){return`Mode 1UP : ${_[e]||e}`}const J={F:"Une série de 6 questions de niveau Fragile — pour t'échauffer.",S:"6 questions de niveau Satisfaisant — le standard du cycle.",TS:"6 questions de niveau Très Satisfaisant — un cran au-dessus.",E:"6 questions de niveau Expert — entraînement musclé.",R:"6 questions tous niveaux mélangés, chronométrées.",RQ:"8 questions (chaque niveau × 2), randomisées — la quête complète."},W={F:"🟡",S:"🟢",TS:"🟢",E:"🌟",R:"⚡",RQ:"🎯"},X=`
.arc-modal-backdrop {
  position: fixed; inset: 0;
  background: rgba(15, 23, 42, 0.72);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: arc-fade-in 0.18s ease-out;
}
@keyframes arc-fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.arc-modal {
  background: white;
  border-radius: 14px;
  padding: 24px;
  max-width: 380px;
  width: 90vw;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
  text-align: center;
}
.arc-modal-title {
  font-size: 1.4em;
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 6px;
  letter-spacing: 0.02em;
}
.arc-modal-sub {
  color: #64748b;
  font-size: 0.92em;
  margin: 0 0 18px;
}
/* Bloc historique sous le score : best persistant + total d'essais. Style
   discret (gris, italique léger) pour ne pas concurrencer le score courant. */
.arc-modal-history {
  margin: -8px 0 16px;
  padding: 8px 12px;
  background: #f1f5f9;
  border-radius: 8px;
  color: #475569;
  font-size: 0.88em;
  line-height: 1.45;
}
.arc-modal-history strong { color: #1e293b; }
/* Indicateur de NOUVEAU RECORD : remplace le bloc historique standard quand
   la session vient de battre le best. Style coloré, célébration. */
.arc-modal-record {
  margin: -8px 0 16px;
  padding: 10px 14px;
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  border-radius: 10px;
  color: #78350f;
  font-size: 1em;
  font-weight: 800;
  letter-spacing: 0.02em;
  text-align: center;
  box-shadow: 0 2px 6px rgba(252, 211, 77, 0.4);
  animation: arc-record-pulse 0.6s ease-out;
}
@keyframes arc-record-pulse {
  0%   { transform: scale(0.92); opacity: 0; }
  60%  { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1);    opacity: 1; }
}
.arc-modal-modes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 12px;
}
.arc-mode-btn {
  border: 2px solid;
  border-radius: 10px;
  padding: 12px;
  font-size: 1em;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.1s, box-shadow 0.15s;
  background: white;
}
.arc-mode-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.12); }
.arc-mode-F  { border-color: #fbbf24; color: #b45309; }
.arc-mode-S  { border-color: #86efac; color: #15803d; }
.arc-mode-TS { border-color: #4ade80; color: #166534; }
.arc-mode-E  { border-color: #16a34a; color: #14532d; }
.arc-mode-R {
  grid-column: 1 / -1;
  border-color: #f97316;
  color: white;
  background: linear-gradient(135deg, #f97316, #ea580c);
}
.arc-mode-R:hover { background: linear-gradient(135deg, #ea580c, #c2410c); }
.arc-mode-RQ {
  grid-column: 1 / -1;
  border-color: #6366f1;
  color: white;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
}
.arc-mode-RQ:hover { background: linear-gradient(135deg, #4f46e5, #7c3aed); }

/* Slider temps (modal R) */
.arc-slider-wrap {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 16px 0 20px;
}
.arc-slider-label {
  font-size: 1.1em;
  font-weight: 700;
  color: #1e293b;
}
.arc-slider-value {
  color: #f97316;
  font-weight: 900;
}
.arc-slider {
  width: 100%;
  accent-color: #f97316;
}
.arc-slider-ok {
  background: linear-gradient(135deg, #f97316, #ea580c);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 1em;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
}
.arc-slider-ok:hover { background: linear-gradient(135deg, #ea580c, #c2410c); }

/* Boutons navigation R intégrés dans le HUD unique. */
.arc-nav-btn {
  appearance: none;
  border: none;
  background: transparent;
  color: #1e293b;
  font-weight: 700;
  font-size: 0.88em;
  padding: 6px 10px;
  border-radius: 999px;
  cursor: pointer;
  white-space: nowrap;
}
.arc-nav-btn:hover:not(:disabled) { background: #f1f5f9; }
.arc-nav-btn:disabled { color: #cbd5e1; cursor: not-allowed; }
.arc-nav-btn.arc-nav-next-ok {
  background: #16a34a;
  color: white;
}
.arc-nav-btn.arc-nav-next-ok:hover { background: #15803d; }
/* Bouton Terminer ✓ — substitution de « → » sur la dernière question quand
   tout est traité. Style positif distinct : vert plein large, label texte
   au lieu de glyphe (geste explicite et engageant). */
.arc-hud .arc-nav-btn.arc-nav-finish {
  background: #16a34a;
  color: white;
  border-color: #16a34a;
  min-width: 110px;
  padding: 6px 14px;
  font-size: 0.95em;
  letter-spacing: 0.01em;
  box-shadow: 0 2px 8px rgba(22, 163, 74, 0.4);
}
.arc-hud .arc-nav-btn.arc-nav-finish:hover {
  background: #15803d;
  border-color: #15803d;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(22, 163, 74, 0.5);
}

.arc-modal-cancel {
  appearance: none;
  border: none;
  background: transparent;
  color: #64748b;
  cursor: pointer;
  margin-top: 8px;
  font-size: 0.92em;
}

/* Rapido inline : slider intégré dans le bouton Rapido du modal de mode
   (fusion de l'ancien showTimeSliderModal → 1 clic au lieu de 2). Le slider
   est posé sur la moitié droite du bouton, le texte « ⚡ Rapido » sur la
   gauche. Cliquer le bouton (hors slider) démarre Rapido avec la valeur
   courante. */
.arc-mode-btn.arc-mode-R {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-right: 12px;
}
.arc-mode-btn.arc-mode-R .arc-mode-btn-text { font-weight: 800; }
.arc-rapido-inline {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 0 1 auto;
}
.arc-rapido-time {
  font-size: 0.82em;
  font-weight: 800;
  color: white;
  white-space: nowrap;
  padding: 2px 8px;
  background: rgba(255, 255, 255, 0.22);
  border-radius: 999px;
}
.arc-rapido-time .arc-slider-value { color: white; }
.arc-rapido-inline .arc-slider {
  width: 110px;
  accent-color: white;
  cursor: pointer;
}

/* Hook anti-flash : pendant l'affichage du modal de choix de mode, on cache
   les hosts qui sont en train de charger la card en arrière-plan (sinon
   l'élève voit l'énoncé DSL brut + visuels non initialisés). Le modal
   lui-même est en position fixed sur le backdrop → reste visible. */
body.arcade-modal-open .q-card,
body.arcade-modal-open .mix-host,
body.arcade-modal-open .am-host,
body.arcade-modal-open .caddy-host { visibility: hidden; }

/* Récap pré-démarrage : info mode + Démarrer (gros) + Partager / Annuler. */
.arc-recap-list {
  list-style: none;
  padding: 14px 0;
  margin: 14px 0;
  border-top: 1px dashed #e2e8f0;
  border-bottom: 1px dashed #e2e8f0;
  text-align: left;
  font-size: 0.95em;
  color: #334155;
}

/* ── 📝 Corrigés : récap post-session ────────────────────────────────────
   Sélecteur radio (cercles numérotés colorés selon status) + panneau
   détail dessous. Modal plus large que les autres pour aérer la lecture. */
.arc-corriges-modal { max-width: 620px; width: 92vw; }
.arc-corr-selector {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin: 14px 0;
  padding: 12px;
  background: #f8fafc;
  border-radius: 10px;
}
.arc-corr-dot {
  appearance: none;
  border: 2px solid;
  border-radius: 50%;
  width: 36px; height: 36px;
  min-width: 36px; min-height: 36px;
  font-weight: 900;
  font-size: 0.95em;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: white;
  transition: transform 0.12s, box-shadow 0.12s;
}
.arc-corr-dot:hover { transform: scale(1.1); }
.arc-corr-dot--ok    { border-color: #16a34a; color: #15803d; }
.arc-corr-dot--ko    { border-color: #dc2626; color: #dc2626; }
.arc-corr-dot--pass  { border-color: #94a3b8; color: #64748b; }
.arc-corr-dot--active {
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.35);
  transform: scale(1.08);
}
.arc-corr-detail {
  text-align: left;
  padding: 14px 16px;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  min-height: 140px;
}
.arc-corr-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}
.arc-corr-status {
  display: inline-flex;
  align-items: center;
  font-size: 0.85em;
  font-weight: 800;
  padding: 4px 10px;
  border-radius: 999px;
  white-space: nowrap;
}
.arc-corr-status.arc-corr-dot--ok   { background: #dcfce7; color: #15803d; border: 1px solid #16a34a; }
.arc-corr-status.arc-corr-dot--ko   { background: #fee2e2; color: #b91c1c; border: 1px solid #dc2626; }
.arc-corr-status.arc-corr-dot--pass { background: #f1f5f9; color: #475569; border: 1px solid #94a3b8; }
.arc-corr-source {
  font-size: 0.82em;
  color: #64748b;
  font-style: italic;
}
.arc-corr-body {
  font-size: 0.98em;
  color: #1e293b;
  line-height: 1.5;
}
.arc-corr-content {
  margin-bottom: 10px;
  line-height: 1.6;       /* place verticale pour que MathJax SVG ne percute pas la ligne du dessus */
}
/* Label « Correction : » + bloc corrigé sous l'énoncé fauté. Bloc encadré
   discret pour différencier visuellement du contenu de l'élève. */
.arc-corr-correction-label {
  margin-top: 12px;
  margin-bottom: 4px;
  font-size: 0.82em;
  font-weight: 800;
  color: #15803d;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}
.arc-corr-content.arc-corr-content--correction {
  margin-top: 0;
  padding: 10px 12px;
  background: #f0fdf4;
  border-left: 3px solid #16a34a;
  border-radius: 0 8px 8px 0;
}
/* MathJax SVG inline ($…$) — alignement avec le texte courant. Sans
   override, mjx-container porte un margin: 0.5em 0 + un baseline propre
   au SVG qui le décolle vers le haut de la ligne courante. On force un
   vertical-align middle (cohérent avec les inputs ci-dessous) et on
   neutralise les marges verticales pour rester sur la ligne. */
.arc-corr-content mjx-container,
.arc-corr-content mjx-container[jax="SVG"] {
  margin: 0 !important;
  vertical-align: middle !important;
}
/* Inputs présents dans le HTML rendu capturé (loadVariant snapshot) :
   neutralisés visuellement → ressemblent à du texte inline (valeur
   conservée), pas d'affordance d'édition. Couleur correct/incorrect
   gardée pour signaler le statut.
   Taille un cran au-dessus du texte courant (1.15em) + vertical-align
   middle : aligne l'input sur la ligne centrale des glyphes MathJax SVG
   (qui sont eux-mêmes en vertical-align:middle par défaut). Sans ça les
   valeurs vertes paraissent rétrécies et collées en bas de la ligne. */
.arc-corr-content .rapido-input,
.arc-corr-content .fig-inp {
  border: none !important;
  background: transparent !important;
  pointer-events: none;
  font-weight: 800;
  field-sizing: content;
  width: auto !important;
  min-width: 1ch;
  padding: 0 !important;
  margin: 0 !important;
  color: inherit;
  vertical-align: middle;
  line-height: inherit;
  font-size: 1.15em;
  height: auto;
  display: inline-block;
  box-sizing: content-box;
}
/* Wrap parent .rapido-input-wrap : inline-block + vertical-align middle
   (cohérent avec le mode entraînement). Sans ça, l'input chute sur la
   baseline du texte alors que MathJax SVG aligne en milieu de glyphe. */
.arc-corr-content .rapido-input-wrap {
  display: inline-block !important;
  vertical-align: middle !important;
  position: static !important;
  padding: 0 !important;
  margin: 0 !important;
}
/* Selects (DSL [unit?…] : <, >, = ou unités) : afficher la valeur choisie
   comme du texte inline, sans flèche dropdown ni border. Le <option
   selected> est posé par _captureContent → l'option choisie est celle
   qui s'affiche au repos. appearance:none retire le chevron natif. */
.arc-corr-content select.rapido-input {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: none !important;
  cursor: default;
}
.arc-corr-content .rapido-input.correct,
.arc-corr-content .fig-inp.correct  { color: #15803d; }
.arc-corr-content .rapido-input.incorrect,
.arc-corr-content .fig-inp.incorrect { color: #b91c1c; text-decoration: line-through; }
/* Boutons VF figés : on garde l'aspect chip mais désactivés. */
.arc-corr-content .rapido-vf-btn {
  pointer-events: none;
  opacity: 0.5;
}
.arc-corr-content .rapido-vf-btn.vf-correct,
.arc-corr-content .rapido-vf-btn.vf-incorrect { opacity: 1; }
/* Feedback markers (😀/😞) déjà présents → on garde, ils renforcent la
   lecture du statut au survol de la question. */
.arc-corr-blank {
  display: inline-block;
  min-width: 32px;
  padding: 0 6px;
  background: #fef3c7;
  border-bottom: 1.5px dashed #f59e0b;
  color: #92400e;
  font-weight: 700;
  border-radius: 3px;
}
.arc-corr-line {
  margin-top: 6px;
  font-size: 0.92em;
  color: #475569;
}
.arc-corr-label { font-weight: 700; color: #1e293b; }
.arc-recap-list li {
  padding: 4px 0 4px 24px;
  position: relative;
}
.arc-recap-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  top: 4px;
  color: #16a34a;
  font-weight: 900;
}
.arc-recap-start {
  display: block;
  width: 100%;
  padding: 12px;
  border: 2px solid;
  border-radius: 10px;
  font-size: 1.05em;
  font-weight: 800;
  cursor: pointer;
  background: white;
  transition: transform 0.1s, box-shadow 0.15s;
}
.arc-recap-start:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.15);
}
/* Bouton recap pour modes R/RQ : combo .arc-recap-start (background:white)
   + .arc-mode-R|RQ (color:white) = texte blanc sur fond blanc → invisible.
   On force le background gradient ici (spécificité .arc-recap-start.arc-mode-*
   > .arc-recap-start seul) pour rétablir le contraste blanc-sur-gradient. */
.arc-recap-start.arc-mode-R {
  background: linear-gradient(135deg, #f97316, #ea580c);
  color: white;
  border-color: #ea580c;
}
.arc-recap-start.arc-mode-R:hover { background: linear-gradient(135deg, #ea580c, #c2410c); }
.arc-recap-start.arc-mode-RQ {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  border-color: #6366f1;
}
.arc-recap-start.arc-mode-RQ:hover { background: linear-gradient(135deg, #4f46e5, #7c3aed); }
.arc-recap-actions {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 10px;
}
.arc-recap-share {
  appearance: none;
  border: 1px solid #cbd5e1;
  background: white;
  color: #475569;
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.88em;
  font-weight: 600;
}
.arc-recap-share:hover { background: #f1f5f9; color: #1e293b; }

/* Toast feedback (copie lien). Glissé dans la modal. */
.arc-toast {
  position: absolute;
  bottom: -36px;
  left: 50%;
  transform: translateX(-50%);
  background: #1e293b;
  color: white;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 0.85em;
  font-weight: 700;
  white-space: nowrap;
  animation: arc-toast-pop 1.8s ease-out forwards;
}
@keyframes arc-toast-pop {
  0%   { opacity: 0; transform: translate(-50%, 8px); }
  15%  { opacity: 1; transform: translate(-50%, 0); }
  85%  { opacity: 1; transform: translate(-50%, 0); }
  100% { opacity: 0; transform: translate(-50%, -8px); }
}

/* HUD pendant la session arcade ── barre fixed en HAUT du viewport.
   Remplace le header de la page (masqué via body.arcade-active). Layout
   plein-largeur (gradient indigo) au lieu du dock pill flottant
   précédent. Drag tactile désactivé : la barre reste collée au top. */
.arc-hud {
  position: fixed;
  top: 0; left: 0; right: 0;
  background: linear-gradient(135deg, #4338ca, #6366f1);
  color: white;
  border: none;
  border-radius: 0;
  padding: 10px 16px;
  font-weight: 700;
  font-size: 0.95em;
  box-shadow: 0 4px 14px rgba(79, 70, 229, 0.35);
  z-index: 600;
  /* Layout 3-zones : gauche (mode) · centre (score) · droite (validate +
     quit). Grid 1fr auto 1fr → la zone centre garde sa largeur naturelle
     pendant que les zones latérales prennent le reste équitablement →
     score parfaitement centré au milieu du header. */
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  column-gap: 14px;
  align-items: center;
  touch-action: auto;
  user-select: none;
  min-height: 48px; box-sizing: border-box;
}
.arc-hud-zone {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-width: 0;       /* permet aux enfants de wrapper sans cassure */
}
.arc-hud-left   { justify-content: flex-start; }
.arc-hud-center { justify-content: center; }
.arc-hud-right  { justify-content: flex-end; }
/* Smartphone : grid passe en 1-col stack → mode au-dessus, score au milieu,
   actions en dessous. Évite l'écrasement sur écran étroit. */
@media (max-width: 640px) {
  .arc-hud {
    grid-template-columns: 1fr;
    row-gap: 6px;
    padding: 8px 12px;
  }
  .arc-hud-left, .arc-hud-right { justify-content: center; }
}
.arc-hud.arc-hud-dragging {
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.45);
  cursor: grabbing;
}
/* Grip retiré visuellement : la barre est ancrée en haut, plus de drag. */
.arc-hud-grip { display: none; }
.arc-hud-counter, .arc-hud-timer {
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
/* Score : info principale du parcours 1UP, mise en avant au centre du
   header avec un chip thémé reprenant les couleurs du thème mathématique
   (--arc-tc-*). Cadre plus grand, label « SCORE » au-dessus, valeur en
   gros caractères dessous. */
.arc-hud-score {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.1;
  gap: 1px;
  padding: 4px 18px;
  border-radius: 12px;
  background: var(--arc-tc-bg, white);
  color: var(--arc-tc-text, #1e293b);
  border: 2px solid var(--arc-tc-border, currentColor);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
}
.arc-hud-score-lbl {
  font-size: 0.62em;
  font-weight: 700;
  opacity: 0.75;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.arc-hud-score-val {
  font-size: 1.35em;
  font-weight: 900;
  letter-spacing: 0.02em;
}
.arc-hud-dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #cbd5e1;
  box-shadow: 0 0 0 1px rgba(0,0,0,0.15) inset;
  position: relative;
}
.arc-hud-dot[data-niveau="fragile"]           { background: #fde047; }
.arc-hud-dot[data-niveau="satisfaisant"]      { background: #86efac; }
.arc-hud-dot[data-niveau="tres-satisfaisant"] { background: #15803d; }
.arc-hud-dot[data-niveau="expert"]            { background: #052e16; }
.arc-hud-dot[data-niveau="expert"]::before {
  content: "+";
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 10px;
  font-weight: 900;
  line-height: 1;
}
.arc-hud-sep {
  width: 1px;
  height: 22px;
  background: rgba(255, 255, 255, 0.35);
}
/* Chip « 🎮 1UP · F » : badge permanent en tête du hud, rappelle à l'élève
   qu'il est en mode arcade strict (vs entraînement où les solutions sont
   révélées). Glyphe + libellé court ; le mode complet est dans le title. */
.arc-hud-mode {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.35);
  font-size: 0.78em;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  white-space: nowrap;
  cursor: default;
}
@media (max-width: 480px) {
  .arc-hud-mode { font-size: 0.7em; padding: 3px 8px; }
}
/* ── Bullets arcade : nav 1UP dans la bullets-nav de la card ──────────────
   Chaque bullet = 1 position de queue. Plus GROSSES qu'en mode entraînement
   pour servir de menu de nav 1UP (cibles tactiles confortables). Garde la
   couleur de niveau (data-niveau, perle), ajoute :
   – numéro 1..N à l'intérieur (remplace l'icône ↻ refresh)
   – case statut au-DESSUS (✓ vert / ✗ rouge / orange passed / vide none)
   – highlight de la position courante (outline + scale) */
.arc-bullets-nav {
  gap: 18px !important;
  padding: 28px 8px 8px !important;
}
.arc-bullets-nav .arc-bullet {
  position: relative;
  width: 44px !important;
  height: 44px !important;
  font-size: 1.05em;
  margin-top: 0;
  /* Numéro PARFAITEMENT centré dans l'opale. */
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  /* GROS bevel : l'opale bombée en 3D (highlight haut, ombre creuse bas)
     + ombre portée → le numéro paraît gravé dans une pastille en relief. */
  box-shadow:
    inset 0 3px 4px rgba(255,255,255,0.55),
    inset 0 -5px 7px rgba(0,0,0,0.42),
    0 2px 5px rgba(0,0,0,0.28);
  border: 1px solid rgba(0,0,0,0.22);
}
.arc-bullets-nav .arc-bullet .arc-bullet-num {
  font-size: 1.1em;
  font-weight: 900;
  line-height: 1;
  pointer-events: none;
  /* Gravure : numéro enfoncé (ombre claire dessous, sombre dessus). */
  color: rgba(0,0,0,0.5);
  text-shadow: 0 1px 0 rgba(255,255,255,0.55), 0 -1px 1px rgba(0,0,0,0.3);
}
/* Case statut posée AU-DESSUS de la perle. Vide par défaut (checkbox
   pointillée), devient ✓ vert / ✗ rouge / dot orange selon qStates. */
.arc-bullets-nav .arc-bullet .arc-bullet-status {
  position: absolute;
  bottom: calc(100% + 4px);
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border: 2px dashed #94a3b8;
  border-radius: 4px;
  background: white;
  font-size: 16px;
  font-weight: 900;
  line-height: 1;
  pointer-events: none;
}
.arc-bullets-nav .arc-bullet[data-status="answered"] .arc-bullet-status {
  border-style: solid;
  border-color: #16a34a;
  color: #16a34a;
  background: #f0fdf4;
}
.arc-bullets-nav .arc-bullet[data-status="incorrect"] .arc-bullet-status {
  border-style: solid;
  border-color: #dc2626;
  color: #dc2626;
  background: #fef2f2;
}
.arc-bullets-nav .arc-bullet[data-status="passed"] .arc-bullet-status {
  border-style: solid;
  border-color: #f59e0b;
  background: #fef3c7;
}
.arc-bullets-nav .arc-bullet.arc-bullet-current {
  outline: 3px solid var(--arc-tc-border, #4338ca);
  outline-offset: 3px;
  transform: scale(1.12);
}
.arc-bullets-nav .arc-bullet:hover {
  transform: translateY(-1px) scale(1.06);
}
.arc-bullets-nav .arc-bullet.arc-bullet-current:hover {
  transform: scale(1.14);
}

/* Bouton Terminer ✓ : style vert plein, plus visible que le ✓ Valider
   neutre. Apparaît quand toutes les questions sont traitées (allDone). */
.arc-hud .arc-nav-finish {
  background: linear-gradient(135deg, #16a34a, #15803d);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 900;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(22, 163, 74, 0.4);
  font-size: 0.95em;
  letter-spacing: 0.02em;
  transition: all 0.15s;
}
.arc-hud .arc-nav-finish:hover {
  background: linear-gradient(135deg, #15803d, #14532d);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(22, 163, 74, 0.5);
}
.arc-hud .arc-nav-finish[hidden] { display: none; }

/* Bouton « Suivante → » gros : apparaît APRÈS un verdict (juste/faux)
   pour signaler clairement « passe à la suivante ». Style indigo plein,
   icône → grosse, animation pulse douce pour attirer l'œil. */
.arc-hud .arc-nav-next-big {
  background: linear-gradient(135deg, #4338ca, #6366f1);
  color: white;
  border: none;
  padding: 8px 18px;
  border-radius: 8px;
  font-weight: 900;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(67, 56, 202, 0.4);
  font-size: 1em;
  letter-spacing: 0.02em;
  transition: all 0.15s;
  animation: arcNextPulse 1.4s ease-in-out infinite;
}
.arc-hud .arc-nav-next-big:hover {
  background: linear-gradient(135deg, #3730a3, #4338ca);
  transform: translateY(-1px) scale(1.04);
  box-shadow: 0 4px 14px rgba(67, 56, 202, 0.55);
  animation: none;
}
.arc-hud .arc-nav-next-big[hidden] { display: none; animation: none; }
@keyframes arcNextPulse {
  0%, 100% { box-shadow: 0 2px 8px rgba(67, 56, 202, 0.4); }
  50%      { box-shadow: 0 4px 16px rgba(99, 102, 241, 0.7); }
}
/* Croix de fermeture, ancrée à DROITE du hud (margin-left:auto pousse tout
   le cluster de gauche → la croix vit dans son propre espace à droite).
   Style cohérent avec .classe-tool-btn / .rapido-fs-close : rond, blanc
   translucide → blanc plein au hover, glyph rouge sur hover. */
.arc-hud-quit {
  margin-left: auto;
  appearance: none;
  border: 2px solid rgba(255, 255, 255, 0.55);
  background: rgba(255, 255, 255, 0.15);
  color: white;
  cursor: pointer;
  width: 36px; height: 36px;
  min-width: 36px; min-height: 36px;
  border-radius: 50%;
  font-size: 1.15em;
  font-weight: 900;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: all 0.15s;
  flex-shrink: 0;
}
.arc-hud-quit:hover {
  background: white;
  color: #dc2626;
  border-color: white;
  transform: scale(1.08);
}
/* Boutons nav (← ⏭ →) — même style verre dépoli que Quitter. */
.arc-hud .arc-nav-btn {
  appearance: none;
  border: 1.5px solid rgba(255, 255, 255, 0.45);
  background: rgba(255, 255, 255, 0.10);
  color: white;
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.88em;
  font-weight: 700;
  transition: all 0.15s;
}
.arc-hud .arc-nav-btn:not(:disabled):hover {
  background: rgba(255, 255, 255, 0.85);
  color: #4338ca;
}
.arc-hud .arc-nav-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
/* Paire ← → groupée : flex inline avec gap minimal pour bien lire comme
   un couple de navigation (vs l'espace plus large avec ✓ Valider à droite). */
.arc-hud .arc-nav-arrows {
  display: inline-flex;
  gap: 4px;
}
.arc-hud .arc-nav-arrows .arc-nav-btn {
  min-width: 38px;
  padding: 6px 10px;
  font-size: 1em;
  font-weight: 800;
}
/* ✓ Valider : style verre dépoli + glyphe vert clair pour signaler
   l'action positive (vs flèches neutres). Au hover : fond vert plein. */
.arc-hud .arc-nav-validate {
  background: rgba(134, 239, 172, 0.18);
  border-color: rgba(134, 239, 172, 0.6);
  color: #d1fae5;
  font-weight: 800;
}
.arc-hud .arc-nav-validate:not(:disabled):hover {
  background: #16a34a;
  color: white;
  border-color: #16a34a;
}
/* Bouton positionné en relative pour ancrer le badge d'alerte en absolute
   (coin haut-droit). Le bouton lui-même a déjà des classes flex inline ;
   l'override en position:relative ne casse pas le layout. */
.arc-hud .arc-nav-validate { position: relative; }
/* Badge « X » : nombre de questions précédentes non traitées. Petit rond
   rouge collé en haut-droit du bouton ✓ — pattern app-standard
   (notifications, panier). Apparaît seulement quand >0. */
.arc-nav-validate-alert {
  position: absolute;
  top: -6px;
  right: -6px;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 999px;
  background: #dc2626;
  color: white;
  font-size: 0.68em;
  font-weight: 900;
  line-height: 18px;
  text-align: center;
  border: 2px solid #4338ca;       /* match du fond gradient indigo du hud */
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  pointer-events: none;            /* le badge ne capture pas le clic */
}

/* ── body.arcade-active : prend le contrôle complet de l'écran ───────────
   Masque la navbar / breadcrumb (le arc-hud remplit ce rôle), centre la
   card sur le viewport sous le hud, neutralise le padding/layout de la
   page hôte qui écrasait l'énoncé sur une colonne étroite. */
body.arcade-active .main-navbar,
body.arcade-active .navbar-breadcrumb,
body.arcade-active footer,
body.arcade-active .cart-fab,
/* En fiche/caddy, l'arcade peut démarrer alors que body.fs-open est actif
   (FS auto-ouvert). La barre FS (z-index 504) couvrirait l'arc-hud (z-index
   60) → l'élève voit la barre FS au lieu du HUD arcade et clic ✕ →
   onClose redirige vers le catalogue (impression de retomber sur la vue
   caddy). On masque FS bar + frise + stage pendant l'arcade. */
body.arcade-active .rapido-fs-bar,
body.arcade-active .rapido-fs-frise,
body.arcade-active .rapido-fs-stage {
  display: none !important;
}
/* 1UP masqué pendant l'arcade VIA CSS (pas en inline — cf. _hideHostUi) :
   le HTML de la bullets-nav est capturé/restauré, un hide inline survivrait.
   Ici, dès que body.arcade-active est retiré (endArcade), le 1UP réapparaît. */
body.arcade-active .btn-1up { visibility: hidden !important; }
body.arcade-active {
  margin: 0 !important;
  /* padding-top suit la hauteur RÉELLE du hud (CSS var posée par
     ResizeObserver dans _mountDock). Fallback 48px si JS pas encore prêt
     ou pas de ResizeObserver. Évite que le hud couvre le badge GS quand
     la frise de progression + boutons wrap sur smartphone. */
  padding-top: var(--arc-hud-h, 48px) !important;
  /* Override de la contrainte body[data-layout-mode="screen"] (03-layout.css)
     qui pose max-width:1400px → en arcade on veut le plein écran complet. */
  max-width: 100vw !important;
  width: 100vw !important;
}
/* .etiquettes-grid (parent main de mix-host) est une grille
   repeat(2, 1fr) par défaut (cf. 03-layout.css → mode screen) → mix-host
   se retrouve dans la 1ère colonne et n'occupe que 50% à gauche. On force
   en block en arcade pour que mix-host prenne toute la largeur. */
body.arcade-active .etiquettes-grid {
  display: block !important;
  grid-template-columns: none !important;
}
/* La card hôte de l'arcade s'étend pour occuper l'écran (avec un plafond
   ergonomique sur très grand écran pour ne pas avoir le visuel à gauche
   et un vide vertigineux à droite). */
body.arcade-active .q-card {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.5rem;
  box-sizing: border-box;
  min-height: calc(100vh - var(--arc-hud-h, 48px));
  /* Bordure thématique : signal couleur cohérent avec le badge GS
     (cf. .am-card-gs en catalogue). Le bord blanc s'estompe en bord
     coloré sur les coins → ancrage visuel du thème. */
  border-top: 3px solid var(--arc-tc-border, #818cf8);
  background: var(--arc-tc-bg, white);
}
/* Thème sombre (Résolution de problèmes) : texte clair sur fond ardoise. */
body.arcade-active .q-card[data-theme="resolution-de-problemes"] {
  color: #f1f5f9;
}
body.arcade-active .q-card[data-theme="resolution-de-problemes"] .content {
  color: #f1f5f9;
}
/* Arcade lancée depuis un caddy FS → la card a encore .q-card--fs (position:
   fixed, top calé sur --fs-bar-h). On override : top = hauteur du HUD arcade
   (le hud remplace la barre FS qui est masquée en arcade). Sans ça le badge
   GS et le contenu sont cachés derrière le hud. */
body.arcade-active .q-card.q-card--fs {
  top: var(--arc-hud-h, 48px) !important;
}
/* .mix-host : plein-largeur + flex column align-items stretch → la card
   s'étire dans toute la largeur disponible, puis son propre max-width
   (1400px) la borne au centre. Sans stretch (= avec align-items:center),
   le flex item se sizait à son contenu (étroit) → vide à droite. */
body.arcade-active .mix-host {
  max-width: none !important;
  width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: stretch !important;
}
/* L'énoncé ne s'écrase plus en colonne étroite : on force la zone content
   à respirer (la cause venait de containers parents trop étroits — width
   100% sur la card + padding raisonnable suffit). */
body.arcade-active .q-card .content,
body.arcade-active .q-card .q-card-content {
  max-width: 100%;
}

/* Fond curves.svg (même filigrane que les rapidos officiels) : ambiance
   « salle de jeu » derrière la card. Le fond est en body::before pour
   ne pas interférer avec le layout des enfants. Couleur dérivée du
   thème de la fiche (--arc-tc-bg, posée par startArcade depuis
   THEME_COLORS_MAP) → cohérence visuelle avec le catalogue. Fallback
   indigo si le thème est inconnu. */
body.arcade-active::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: -1;
  background-color: var(--arc-tc-bg, #eef2ff);
  /* SVG curves étiré en cover (full viewport, pas de repeat). Le gradient
     translucide en couche au-dessus garde le rendu doux sans masquer le
     motif. color-mix bake la teinte du thème à 78% d'opacité (supporté
     Chrome 111+, FF 113+, Safari 16.4+). Léger filter blur(2px) → l'image
     devient un fond ambiant non-distractif. */
  background-image:
    linear-gradient(135deg,
      color-mix(in srgb, var(--arc-tc-bg, #eef2ff) 92%, transparent),
      color-mix(in srgb, var(--arc-tc-card-border, #e0e7ff) 92%, transparent)),
    url('/images/curves.svg');
  background-size: cover, cover;
  background-position: center, center;
  background-repeat: no-repeat, no-repeat;
  filter: blur(2px);
  /* opacity globale : adoucit encore les curves pour qu'elles restent
     un filigrane discret et non un motif distrayant. */
  opacity: 0.7;
}

/* (Anciens overrides body.arcade-active / body.fs-open pour .gs-ref-badge
   retirés : la perle GS est désormais identique dans tous les contextes,
   pilotée par .gs-ref-badge / .gs-ref-badge-bonus dans rapidos-visuals.css.
   Cf. §968 de rapidos-visuals.css.) */

/* ── Variante figée après validation : les inputs perdent leurs affordances
   d'édition (border, fond, curseur) et ressemblent à du texte inline. La
   couleur correct/incorrect reste pour signaler le statut. L'élève voit
   ce qu'il a écrit, peut revisiter, mais ne peut plus modifier (score
   verrouillé). Mode arcade uniquement (la classe .frozen est posée
   exclusivement par _freezeVariant). */
.rapido-input.frozen {
  border: none !important;
  background: transparent !important;
  outline: none !important;
  box-shadow: none !important;
  pointer-events: none;
  cursor: default;
  font-weight: 800;
  /* field-sizing:content → l'input se redimensionne à son contenu (Chrome
     123+, Firefox 123+, Safari 18+). Sur navigateurs anciens, fallback à
     min-width:1ch — pas pixel-perfect mais lisible. */
  field-sizing: content;
  width: auto !important;
  min-width: 1ch;
  padding: 0 2px !important;
}
/* Boutons VRAI/FAUX figés : tous estompés SAUF celui choisi (qui porte
   vf-correct ou vf-incorrect). L'élève voit son choix clairement, le non-
   choisi recule visuellement. */
.rapido-vf-btn.frozen {
  opacity: 0.35;
  pointer-events: none;
  cursor: default;
  filter: grayscale(0.4);
}
.rapido-vf-btn.frozen.vf-correct,
.rapido-vf-btn.frozen.vf-incorrect {
  opacity: 1;
  filter: none;
}
.fig-inp.frozen {
  pointer-events: none;
  cursor: default;
  border-style: dashed !important;
  background: transparent !important;
}

/* Bouton 1UP ── perle ronde MÊME recette que .bullet en FS (cf.
   fullscreen.css §154-216) : gradient radial gloss + bordure semi-trans-
   parente + ombres inset 3D + drop shadow. PAS d'anneau gold (le seul
   « radio sélectionné » de la nav est la variante active). */
.visual-toggle-btn.mini-eye.btn-1up {
  width: 48px !important;
  min-width: 48px !important;
  height: 48px !important;
  max-height: 48px !important;
  padding: 0 !important;
  border-radius: 50% !important;
  background-color: #f59e0b !important;
  background-image: radial-gradient(
    circle at 30% 28%,
    rgba(255,255,255,0.85) 0%,
    rgba(255,255,255,0.25) 22%,
    rgba(0,0,0,0.0) 55%,
    rgba(0,0,0,0.20) 100%
  ) !important;
  background-blend-mode: overlay !important;
  color: #1e293b !important;
  border: 1.5px solid rgba(255,255,255,0.55) !important;
  font-weight: 900 !important;
  font-size: 0.78em !important;
  letter-spacing: 0.04em;
  text-shadow: 0 1px 2px rgba(255,255,255,0.35);
  box-shadow:
    inset 0 -3px 6px rgba(0,0,0,0.25),
    inset 0 3px 4px rgba(255,255,255,0.55),
    0 3px 8px rgba(0,0,0,0.22),
    0 1px 2px rgba(0,0,0,0.14) !important;
}
.visual-toggle-btn.mini-eye.btn-1up:hover {
  transform: scale(1.08);
  filter: brightness(1.08);
}
/* État « radio sélectionné » sur le 1UP — anneau gold (perle active du
   radio group de la nav, géré par la délégation .bullets-nav dans
   rapido-engine.js). */
.visual-toggle-btn.mini-eye.btn-1up.active {
  box-shadow:
    inset 0 -3px 6px rgba(0,0,0,0.3),
    inset 0 3px 4px rgba(255,255,255,0.6),
    0 0 0 2px #fff,
    0 0 0 4.5px #fbbf24,
    0 0 18px rgba(251,191,36,0.5),
    0 6px 16px rgba(0,0,0,0.3) !important;
}
`;let j=!1;function k(){if(j)return;j=!0;const e=document.createElement("style");e.textContent=X,document.head.appendChild(e)}function Y(e){k();const t=document.createElement("button");return t.type="button",t.className="visual-toggle-btn mini-eye btn-1up",t.title="Démarrer une partie arcade 1UP",t.setAttribute("aria-label","Démarrer une partie arcade"),t.textContent="1UP",R(t,e),t}function R(e,t){!e||e._arcadeWired||(e._arcadeWired=!0,e.addEventListener("click",r=>{r.stopPropagation(),T(t)}))}function ye(e,t){if(!e||!t)return null;const r=t.querySelector(".btn-1up");if(r)return R(r,t),r;const n=Y(t);return e.appendChild(n),n}function T(e){k(),document.body.classList.add("arcade-modal-open");const t=document.createElement("div");t.className="arc-modal-backdrop",t.innerHTML=`
    <div class="arc-modal" role="dialog" aria-modal="true">
      <h2 class="arc-modal-title">🎮 1UP — Choisis ton mode</h2>
      <p class="arc-modal-sub">6 questions à la suite (8 pour Random Quest)</p>
      <div class="arc-modal-modes">
        <button class="arc-mode-btn arc-mode-F"  data-mode="F">F · Fragile</button>
        <button class="arc-mode-btn arc-mode-S"  data-mode="S">S · Satisfaisant</button>
        <button class="arc-mode-btn arc-mode-TS" data-mode="TS">TS · Très Satis.</button>
        <button class="arc-mode-btn arc-mode-E"  data-mode="E">E · Expert</button>
        <button class="arc-mode-btn arc-mode-R"  data-mode="R">
          <span class="arc-mode-btn-text">⚡ Rapido</span>
          <span class="arc-rapido-inline">
            <span class="arc-rapido-time">⏱ <span class="arc-slider-value">6</span> min</span>
            <input class="arc-slider" type="range" min="1" max="15" step="1" value="6"
                   aria-label="Temps total du rapido en minutes">
          </span>
        </button>
        <button class="arc-mode-btn arc-mode-RQ" data-mode="RQ">🎯 Random Quest · 4 niveaux × 2</button>
      </div>
      <button class="arc-modal-cancel">Annuler</button>
    </div>
  `,document.body.appendChild(t);const r=()=>{t.remove(),document.body.classList.remove("arcade-modal-open"),S()},n=t.querySelector(".arc-slider"),a=t.querySelector(".arc-slider-value");n&&(n.addEventListener("input",()=>{a.textContent=n.value}),n.addEventListener("click",s=>s.stopPropagation()),n.addEventListener("pointerdown",s=>s.stopPropagation())),t.querySelector(".arc-modal-cancel").addEventListener("click",r),t.addEventListener("click",s=>{s.target===t&&r()}),t.querySelectorAll(".arc-mode-btn").forEach(s=>{s.addEventListener("click",()=>{const i=s.dataset.mode;if(t.remove(),i==="R"){const d=parseInt(n?.value,10)||6;E(e,i,{timeSec:d*60})}else E(e,i)})})}function E(e,t,r={}){k();const n=t==="RQ"?8:6,a=r.timeSec?Math.round(r.timeSec/60):null,s=W[t]||"🎮",i=_[t]||t,d=J[t]||"",l=document.createElement("div");l.className="arc-modal-backdrop",l.innerHTML=`
    <div class="arc-modal" role="dialog" aria-modal="true" style="position: relative;">
      <h2 class="arc-modal-title">${s} 1UP — ${i}</h2>
      <p class="arc-modal-sub">${d}</p>
      <ul class="arc-recap-list">
        <li><strong>${n}</strong> question${n>1?"s":""} à enchaîner</li>
        ${a?`<li>⏱ Chrono global : <strong>${a} min</strong></li>`:"<li>Pas de chrono — prends ton temps</li>"}
        <li>Navigation manuelle : ← précédent · ⏭ passer · → suivant</li>
        <li>💡 Aide pas-à-pas + indices disponibles</li>
      </ul>
      <button class="arc-recap-start arc-mode-${t}" type="button">▶ Démarrer</button>
      <div class="arc-recap-actions">
        <button class="arc-recap-share" type="button">🔗 Partager ce mode</button>
        <button class="arc-modal-cancel" type="button">Annuler</button>
      </div>
    </div>
  `,document.body.appendChild(l);const u=()=>{l.remove(),document.body.classList.remove("arcade-modal-open"),S()};l.querySelector(".arc-modal-cancel").addEventListener("click",u),l.addEventListener("click",o=>{o.target===l&&u()}),l.querySelector(".arc-recap-start").addEventListener("click",()=>{l.remove(),document.body.classList.remove("arcade-modal-open"),C(e,t,r)}),l.querySelector(".arc-recap-share").addEventListener("click",async()=>{const o=K(t,r);try{await navigator.clipboard.writeText(o),Z(l.querySelector(".arc-modal"),"🔗 Lien copié !")}catch{prompt("Lien à partager :",o)}})}function K(e,t){const r=new URLSearchParams(location.search);return r.set("arcade",e),t.timeSec?r.set("t",String(t.timeSec)):r.delete("t"),`${location.origin}${location.pathname}?${r}`}function Z(e,t){if(!e)return;const r=document.createElement("div");r.className="arc-toast",r.textContent=t,e.appendChild(r),setTimeout(()=>r.remove(),1800)}function we(e){if(!e)return!1;const t=new URLSearchParams(location.search),r=t.get("arcade");if(!r)return!1;if(r==="pick")return T(e),!0;if(!_[r])return!1;const n=parseInt(t.get("t")||"",10),a=r==="R"&&Number.isFinite(n)&&n>0?{timeSec:n}:{};return E(e,r,a),!0}function h(e){return e?._question||window.__AM_QUESTION__}function ee(e,t,r){const n=I(e,t);if(!n.length||!r?.qStates?.length||!r?.queue?.length)return n;const a=[...r.queue];for(let s=0;s<a.length;s++){if(r.qStates[s]?.status!=="answered")continue;let i=n[s]??a[s];if(i===a[s]){const d=n.find(l=>l!==a[s]);d!==void 0&&(i=d)}a[s]=i}return a}function te(e){e.querySelectorAll(".rapido-input").forEach(t=>{t.value="",t.classList.remove("correct","incorrect","frozen"),t.disabled=!1,t.readOnly=!1,t.removeAttribute("tabindex"),delete t.dataset.autoLockWired}),e.querySelectorAll(".rapido-vf-wrap").forEach(t=>{delete t.dataset.answered,t.querySelectorAll(".rapido-vf-btn").forEach(r=>{r.disabled=!1,r.classList.remove("vf-correct","vf-incorrect","frozen")})}),e.querySelectorAll(".rapido-fb, .vis-fb").forEach(t=>{t.textContent="",t.classList.remove("correct","incorrect")}),e.querySelectorAll(".fig-inp").forEach(t=>{"value"in t&&(t.value=""),t.classList.remove("correct","incorrect","frozen"),"disabled"in t&&(t.disabled=!1),"readOnly"in t&&(t.readOnly=!1),t.removeAttribute("tabindex")}),e.querySelectorAll(".am-on-correct").forEach(t=>t.classList.remove("show")),e.querySelectorAll(".q-variant-frozen").forEach(t=>t.classList.remove("q-variant-frozen")),delete e.dataset.celebrated}function I(e,t){const r=h(e);if(!r?.variantes?.length)return[];const n=!!r.isMix,a=r.variantes,s={};D.forEach(o=>s[o]=[]),a.forEach((o,p)=>{s[o.niveau]&&s[o.niveau].push(p)});const i=o=>o[Math.floor(Math.random()*o.length)],d=(o,p)=>{if(!o.length)return[];if(!n)return Array.from({length:p},()=>i(o));const f=[],g=new Set,b=[...o];for(let m=b.length-1;m>0;m--){const v=Math.floor(Math.random()*(m+1));[b[m],b[v]]=[b[v],b[m]]}for(const m of b){if(f.length>=p)break;const v=a[m]._sourceRef;(!v||!g.has(v))&&(f.push(m),v&&g.add(v))}for(;f.length<p;)f.push(i(o));return f};if(t==="RQ"){const o=[];if(D.forEach(p=>{const f=s[p];f.length&&o.push(...d(f,2))}),o.length===0){const p=a.map((f,g)=>g);p.length&&o.push(...d(p,8))}for(let p=o.length-1;p>0;p--){const f=Math.floor(Math.random()*(p+1));[o[p],o[f]]=[o[f],o[p]]}return o}if(t==="R"){const o=a.map((g,b)=>b);if(!o.length)return[];if(n)return d(o,6);const p=[],f=[...o];for(;p.length<6;){f.length||f.push(...o);const g=Math.floor(Math.random()*f.length);p.push(f[g]),f.splice(g,1)}return p}const l=Q[t];let u=s[l]||[];return u.length||(u=a.map((o,p)=>p)),u.length?d(u,6):[]}async function C(e,t,r={}){const n=r.remixFrom?ee(e,t,r.remixFrom):I(e,t);if(!n.length){alert("Pas de variantes pour ce mode.");return}te(e);const s={mode:t,queue:n,idx:0,score:0,hasTimer:t==="R",hasNav:!0,pinnedConfigs:null,qStates:n.map(()=>({status:"none",studentAnswer:null})),timeSec:r.timeSec||0,timeLeft:r.timeSec||0};e._arcade=s,delete e.dataset.celebrated,e.querySelectorAll(".am-on-correct").forEach(i=>i.classList.remove("show")),await le(s,e),e.querySelectorAll("[data-auto-lock-wired]").forEach(i=>delete i.dataset.autoLockWired),document.body.classList.add("arcade-active");{const i=h(e),d=U[i?.theme]||F;document.body.style.setProperty("--arc-tc-bg",d.bg),document.body.style.setProperty("--arc-tc-card-border",d.cardBorder),document.body.style.setProperty("--arc-tc-border",d.border),document.body.style.setProperty("--arc-tc-text",d.text)}re(e,s),ne(e,s),s.onConfetti=()=>de(e),e.addEventListener("confetti",s.onConfetti),s.onValidation=i=>{const d=e._arcade;if(!d)return;const l=d.qStates[d.idx];l.status!=="answered"&&i.detail.fieldsPresent&&!i.detail.everythingOk&&(l.status="incorrect",q(e),A(e,l),x(e),w(e))},e.addEventListener("validation-result",s.onValidation),s.hasTimer&&s.timeLeft>0&&ce(e,s),await L(e,n[0]),ie(e),x(e)}function re(e,t){const r=document.createElement("div");if(r.className="arc-hud",r.innerHTML=oe(t),document.body.appendChild(r),t.hud=r,typeof ResizeObserver<"u"){const n=new ResizeObserver(()=>{document.body.style.setProperty("--arc-hud-h",r.offsetHeight+"px")});n.observe(r),t.hudRO=n}else document.body.style.setProperty("--arc-hud-h","48px");r.querySelector(".arc-hud-quit").addEventListener("click",()=>y(e,!1)),t.hasNav&&(t.nav=r,r.querySelector(".arc-nav-validate").addEventListener("click",()=>fe(e)),r.querySelector(".arc-nav-next-big")?.addEventListener("click",()=>{const n=e._arcade;n&&$(e,n.idx+1)}),r.querySelector(".arc-nav-finish")?.addEventListener("click",()=>y(e,!0)),ae(e,t))}function ae(e,t){let r=0,n=0,a=!1;const s=60,i=60,d=u=>{if(!e._arcade)return;const o=u.target;o&&/^(INPUT|TEXTAREA|SELECT)$/.test(o.tagName)||u.touches.length===1&&(r=u.touches[0].clientX,n=u.touches[0].clientY,a=!0)},l=u=>{if(!a||!e._arcade)return;a=!1;const o=(u.changedTouches[0]?.clientX??r)-r,p=(u.changedTouches[0]?.clientY??n)-n;Math.abs(o)<s||Math.abs(p)>i||(o>0?ue(e):pe(e))};document.addEventListener("touchstart",d,{passive:!0}),document.addEventListener("touchend",l,{passive:!0}),t.onSwipeStart=d,t.onSwipeEnd=l}function oe(e){const t=e.queue.length,r=e.hasTimer?`<span class="arc-hud-timer">⏱ ${z(e.timeLeft)}</span>`:"",n=e.hasNav?'<button class="arc-nav-btn arc-nav-validate" type="button" aria-label="Valider ma réponse" title="Valider ma réponse">✓ Valider</button>':"",a=e.hasNav?'<button class="arc-nav-btn arc-nav-next-big" type="button" hidden aria-label="Question suivante" title="Question suivante">Suivante →</button>':"",s=e.hasNav?'<button class="arc-nav-btn arc-nav-finish" type="button" hidden aria-label="Terminer le 1UP et voir le bilan" title="Voir le bilan">Terminer ✓</button>':"";return`
    <div class="arc-hud-zone arc-hud-left">
      <span class="arc-hud-grip" title="Glisser pour déplacer" aria-label="Déplacer le dock">⋮⋮</span>
      ${`<span class="arc-hud-mode" title="${V(e.mode)}" aria-label="${V(e.mode)}">🎮 1UP · ${G(e.mode)}</span>`}
    </div>
    <div class="arc-hud-zone arc-hud-center">
      <span class="arc-hud-score" aria-label="Score">
        <span class="arc-hud-score-lbl">Score</span>
        <span class="arc-hud-score-val">0/${t}</span>
      </span>
    </div>
    <div class="arc-hud-zone arc-hud-right">
      ${r}
      ${n}
      ${a}
      ${s}
      <button class="arc-hud-quit" type="button" title="Quitter le 1UP" aria-label="Quitter le 1UP">✕</button>
    </div>
  `}function ne(e,t){t._hidden=[];const r=n=>{e.querySelectorAll(n).forEach(a=>{t._hidden.push(a),a.style.visibility="hidden"})};r(".btn-validate"),r(".btn-eye-solution"),t._hiddenBullets=t._hidden.find(n=>n.classList.contains("bullets-nav")),t._hiddenOneUp=t._hidden.find(n=>n.classList.contains("btn-1up"))}function ie(e){const t=e._arcade;if(!t)return;const r=e.querySelector(".bullets-nav");if(!r)return;t._arcBulletsNav=r,t._arcBulletsOriginalHTML=r.innerHTML,r.classList.add("arc-bullets-nav");const a=h(e)?.variantes||[];r.innerHTML=t.queue.map((s,i)=>{const d=a[s]||{},l=d.niveau?` data-niveau="${d.niveau}"`:"",u=se[d.niveau]||"";return`<button type="button" class="bullet arc-bullet"${l}
        data-pos="${i}"
        aria-label="Question ${i+1}${u?" — "+u:""}"
        title="Question ${i+1}${u?" ("+u+")":""}">
      <span class="arc-bullet-status" aria-hidden="true"></span>
      <span class="arc-bullet-num">${i+1}</span>
    </button>`}).join(""),r.querySelectorAll(".arc-bullet").forEach(s=>{s.addEventListener("click",()=>$(e,+s.dataset.pos))}),P(e)}function P(e){const t=e._arcade;t?._arcBulletsNav&&t._arcBulletsNav.querySelectorAll(".arc-bullet").forEach(r=>{const n=+r.dataset.pos,a=t.qStates[n]?.status||"none";r.classList.toggle("arc-bullet-current",n===t.idx),r.dataset.status=a;const s=r.querySelector(".arc-bullet-status");s&&(a==="answered"?s.textContent="✓":a==="incorrect"?s.textContent="✗":s.textContent="")})}const se={fragile:"Fragile",satisfaisant:"Satisf.","tres-satisfaisant":"TS",expert:"Expert"};function ce(e,t){t.timerId=setInterval(()=>{t.timeLeft--;const r=t.hud?.querySelector(".arc-hud-timer");r&&(r.textContent=`⏱ ${z(t.timeLeft)}`),t.timeLeft<=0&&y(e,!0)},1e3)}function q(e){const t=e.querySelector(".variant-content.active");t&&(t.classList.add("q-variant-frozen"),t.querySelectorAll(".rapido-input").forEach(r=>{r.classList.add("frozen"),r.disabled=!0,r.readOnly=!0,r.setAttribute("tabindex","-1"),document.activeElement===r&&r.blur()}),t.querySelectorAll(".rapido-vf-btn").forEach(r=>{r.classList.add("frozen"),r.disabled=!0}),t.querySelectorAll(".fig-inp").forEach(r=>{r.classList.add("frozen"),"disabled"in r&&(r.disabled=!0),"readOnly"in r&&(r.readOnly=!0),r.setAttribute("tabindex","-1"),document.activeElement===r&&r.blur()}))}function de(e){const t=e._arcade;if(!t)return;const r=t.qStates[t.idx];r.status!=="answered"&&(r.status="answered",t.score++),q(e),A(e,r);const n=e.querySelector("math974-axe-gradue");n&&n._studentAnswer!=null&&(r.studentAnswer=n._studentAnswer),x(e),t.hasNav&&w(e)}function z(e){if(e<=0)return"0:00";const t=Math.floor(e/60),r=e%60;return`${t}:${String(r).padStart(2,"0")}`}async function le(e,t){const r=h(t);if(!r?.variantes){e.pinnedConfigs=[];return}e.pinnedConfigs=[];for(const n of e.queue){const a=r.variantes[n];if(!a?.type||!a.rand){e.pinnedConfigs.push(null);continue}try{const s=await B(Object.assign({"../visuals/addition-posee/addition-posee.js":()=>c(()=>import("./addition-posee.DXpK87YZ.js"),__vite__mapDeps([0,1,2,3,4,5])),"../visuals/angle-triangle/angle-triangle.js":()=>c(()=>import("./angle-triangle.DjHJouEB.js"),__vite__mapDeps([6,7])),"../visuals/angles-proprietes/angles-proprietes.js":()=>c(()=>import("./angles-proprietes.Dp34-aqX.js"),__vite__mapDeps([8,9,7])),"../visuals/arbre-construire/arbre-construire.js":()=>c(()=>import("./arbre-construire.BjZu51CJ.js"),__vite__mapDeps([10,11,3,4,2,12,13])),"../visuals/arbre-possibles/arbre-possibles.js":()=>c(()=>import("./arbre-possibles.BdYYMEVP.js"),__vite__mapDeps([14,3,4,2,12,13])),"../visuals/axe-gradue-zefor/axe-gradue-zefor.js":()=>c(()=>import("./axe-gradue-zefor.FRmCqlyB.js"),__vite__mapDeps([15,2,3,4,16])),"../visuals/axe-gradue/axe-gradue.js":()=>c(()=>import("./axe-gradue.BgzZCvh4.js"),__vite__mapDeps([16,3,4,2])),"../visuals/axe-gradue/config.js":()=>c(()=>import("./rapidos-visuals-integration.7XMkS1mg.js").then(i=>i.e),__vite__mapDeps([4,2])),"../visuals/axe-gradue/editor.js":()=>c(()=>import("./rapidos-visuals-integration.7XMkS1mg.js").then(i=>i.f),__vite__mapDeps([4,2])),"../visuals/axes-symetrie/axes-symetrie.js":()=>c(()=>import("./axes-symetrie.C7mo3gVG.js"),[]),"../visuals/balance-equilibre/balance-equilibre.js":()=>c(()=>import("./balance-equilibre.D5dh6fnI.js"),[]),"../visuals/conversion-unite/conversion-unite.js":()=>c(()=>import("./conversion-unite.BjxQKg47.js"),[]),"../visuals/cubes-numeration/cubes-numeration.js":()=>c(()=>import("./cubes-numeration.B-o8GW0A.js"),[]),"../visuals/cubes-numeration/editor.js":()=>c(()=>import("./rapidos-visuals-integration.7XMkS1mg.js").then(i=>i.g),__vite__mapDeps([4,2])),"../visuals/division-posee/division-posee.js":()=>c(()=>import("./division-posee.BMUrCtTU.js"),__vite__mapDeps([17,1,2,3,4,5])),"../visuals/droites-position/droites-position.js":()=>c(()=>import("./droites-position.alD3fGG5.js"),[]),"../visuals/echelle-probabilite/echelle-probabilite.js":()=>c(()=>import("./echelle-probabilite.m-E8ChzK.js"),__vite__mapDeps([18,3,4,2])),"../visuals/equation-etayage/equation-etayage.js":()=>c(()=>import("./equation-etayage.CO8U032f.js"),__vite__mapDeps([19,4,2])),"../visuals/figure-geo/figure-geo.js":()=>c(()=>import("./figure-geo.DqoP6Aap.js"),[]),"../visuals/fraction-figure/fraction-figure.js":()=>c(()=>import("./fraction-figure.DaoBhiz3.js"),[]),"../visuals/linearite-mult/linearite-mult.js":()=>c(()=>import("./linearite-mult.Bw6KxhUs.js"),__vite__mapDeps([20,7,3,4,2])),"../visuals/linearite-tableau/linearite-tableau.js":()=>c(()=>import("./linearite-tableau.B4nR9TEC.js"),__vite__mapDeps([21,7,3,4,2])),"../visuals/multiplication-posee/multiplication-posee.js":()=>c(()=>import("./multiplication-posee.2M8VAxE1.js"),__vite__mapDeps([22,1,2,3,4,5])),"../visuals/ordre-nombres/ordre-nombres.js":()=>c(()=>import("./ordre-nombres.hxXp-yoB.js"),[]),"../visuals/polygone-perimetre/editor.js":()=>c(()=>import("./rapidos-visuals-integration.7XMkS1mg.js").then(i=>i.i),__vite__mapDeps([4,2])),"../visuals/polygone-perimetre/polygone-perimetre.js":()=>c(()=>import("./polygone-perimetre.-xbpulq9.js"),__vite__mapDeps([23,2])),"../visuals/programme-scratch/programme-scratch.js":()=>c(()=>import("./programme-scratch.CU4ExXqt.js"),[]),"../visuals/proportionnalite/utils.js":()=>c(()=>import("./utils.MftNdmoG.js"),[]),"../visuals/pythagore-figure/pythagore-figure.js":()=>c(()=>import("./pythagore-figure.Dx-v3Cm3.js"),__vite__mapDeps([24,25,3,4,2,9])),"../visuals/quadrilatere-codage/quadrilatere-codage.js":()=>c(()=>import("./quadrilatere-codage.CdKnvNDQ.js"),[]),"../visuals/retour-unite-zefor/retour-unite-zefor.js":()=>c(()=>import("./retour-unite-zefor.DwRT1eR1.js"),__vite__mapDeps([26,2,1,3,4,27,7])),"../visuals/retour-unite/retour-unite.js":()=>c(()=>import("./retour-unite.Bv03PV2v.js"),__vite__mapDeps([27,1,2,3,4,7])),"../visuals/schema-additif/editor.js":()=>c(()=>import("./rapidos-visuals-integration.7XMkS1mg.js").then(i=>i.j),__vite__mapDeps([4,2])),"../visuals/schema-additif/schema-additif.js":()=>c(()=>import("./schema-additif.B0fxjfXS.js"),__vite__mapDeps([28,2,3,4])),"../visuals/schema-comparaison-mult/schema-comparaison-mult.js":()=>c(()=>import("./schema-comparaison-mult.eQ6y84Wq.js"),__vite__mapDeps([29,3,4,2,30,31,13])),"../visuals/schema-comparaison/schema-comparaison.js":()=>c(()=>import("./schema-comparaison.r5cwsZHA.js"),__vite__mapDeps([32,3,4,2,33,31,13])),"../visuals/schema-construire-comp-mult/schema-construire-comp-mult.js":()=>c(()=>import("./schema-construire-comp-mult.ucVYZekv.js"),__vite__mapDeps([34,11,3,4,2,30,31,13])),"../visuals/schema-construire-comp/schema-construire-comp.js":()=>c(()=>import("./schema-construire-comp.ClZFsrjb.js"),__vite__mapDeps([35,11,3,4,2,33,31,13])),"../visuals/schema-construire-mult/schema-construire-mult.js":()=>c(()=>import("./schema-construire-mult.CkEAAw6V.js"),__vite__mapDeps([36,11,3,4,2,37,31,13])),"../visuals/schema-construire/schema-construire.js":()=>c(()=>import("./schema-construire.CCErrfy_.js"),__vite__mapDeps([38,11,3,4,2,39,31,13])),"../visuals/schema-multiplicatif/schema-multiplicatif.js":()=>c(()=>import("./schema-multiplicatif.CYQ5LX4L.js"),__vite__mapDeps([40,3,4,2])),"../visuals/schema/arbre.js":()=>c(()=>import("./arbre.C7zSmtf2.js"),__vite__mapDeps([12,13])),"../visuals/schema/bar-additif.js":()=>c(()=>import("./bar-additif.Cv2D3s3G.js"),__vite__mapDeps([39,31,13])),"../visuals/schema/bar-comparaison-mult.js":()=>c(()=>import("./bar-comparaison-mult.DP02BSw_.js"),__vite__mapDeps([30,31,13])),"../visuals/schema/bar-comparaison.js":()=>c(()=>import("./bar-comparaison.CyAI7uHR.js"),__vite__mapDeps([33,31,13])),"../visuals/schema/bar-geom.js":()=>c(()=>import("./bar-geom.qOvxJNxq.js"),[]),"../visuals/schema/bar-mult.js":()=>c(()=>import("./bar-mult.BDRYgsTx.js"),__vite__mapDeps([37,31,13])),"../visuals/schema/builder-core.js":()=>c(()=>import("./builder-core.CWi3HrxH.js"),__vite__mapDeps([11,3,4,2])),"../visuals/schema/ink.js":()=>c(()=>import("./ink.DbHLEoN5.js"),[]),"../visuals/shared/autoscale.js":()=>c(()=>import("./autoscale.C_JQggSk.js"),[]),"../visuals/shared/pose-helpers.js":()=>c(()=>import("./pose-helpers.0ZlZMBCE.js"),__vite__mapDeps([5,1,2,3,4])),"../visuals/shared/vis-input.js":()=>c(()=>import("./vis-input.CxwxqYqd.js"),__vite__mapDeps([1,2,3,4])),"../visuals/solide-nom/solide-nom.js":()=>c(()=>import("./solide-nom.Bfmf5iRT.js"),[]),"../visuals/soustraction-posee/soustraction-posee.js":()=>c(()=>import("./soustraction-posee.DN42BWAC.js"),__vite__mapDeps([41,1,2,3,4,5])),"../visuals/spreadsheet/formula-parser.js":()=>c(()=>import("./formula-parser.CuBpGvtX.js"),[]),"../visuals/spreadsheet/spreadsheet.js":()=>c(()=>import("./spreadsheet.bbTHVZ2q.js"),__vite__mapDeps([42,2,1,3,4,43])),"../visuals/suite-figures/suite-figures.js":()=>c(()=>import("./suite-figures.BSb9W0Gx.js"),[]),"../visuals/symetrie-diag/symetrie-diag.js":()=>c(()=>import("./symetrie-diag.CGBDIby7.js"),[]),"../visuals/symetrie-quadrillage/symetrie-quadrillage.js":()=>c(()=>import("./symetrie-quadrillage.Dvl6qQkA.js"),[]),"../visuals/texte-trous/config.js":()=>c(()=>import("./editor.CJZspgfY.js").then(i=>i.c),[]),"../visuals/texte-trous/editor.js":()=>c(()=>import("./editor.CJZspgfY.js").then(i=>i.e),[]),"../visuals/texte-trous/texte-trous.js":()=>c(()=>import("./texte-trous.CA8uqss9.js"),__vite__mapDeps([44,3,4,2])),"../visuals/thales-figure/thales-figure.js":()=>c(()=>import("./thales-figure.CUYzOBp_.js"),__vite__mapDeps([45,25,3,4,2,9])),"../visuals/trajet-scratch/trajet-scratch.js":()=>c(()=>import("./trajet-scratch.U_b3haCn.js"),[]),"../visuals/triangle-nature/triangle-nature.js":()=>c(()=>import("./triangle-nature.DwsjpwSo.js"),[]),"../visuals/trigo-figure/trigo-figure.js":()=>c(()=>import("./trigo-figure.DBjdx3HB.js"),__vite__mapDeps([46,25,3,4,2,9]))}),`../visuals/${a.type}/${a.type}.js`,4);if(s.randomize){const i=await s.randomize(JSON.parse(JSON.stringify(a.config||{})),a.rand,a.config||{});e.pinnedConfigs.push(i)}else e.pinnedConfigs.push(null)}catch{e.pinnedConfigs.push(null)}}}function w(e){const t=e._arcade;if(!t?.nav)return;const r=t.qStates[t.idx],n=t.qStates.every(u=>u.status!=="none"),a=t.idx===t.queue.length-1,s=r.status==="answered"||r.status==="incorrect",i=t.nav.querySelector(".arc-nav-next-big");i&&(i.hidden=!s||a);const d=t.nav.querySelector(".arc-nav-finish");d&&(d.hidden=!n);const l=t.nav.querySelector(".arc-nav-validate");if(l){l.disabled=r.status==="answered"||r.status==="incorrect";const u=t.qStates.slice(0,t.idx).filter(p=>p.status==="none").length;let o=l.querySelector(".arc-nav-validate-alert");u>0?(o||(o=document.createElement("span"),o.className="arc-nav-validate-alert",l.appendChild(o)),o.textContent=String(u),o.title=`${u} question${u>1?"s":""} précédente${u>1?"s":""} non traitée${u>1?"s":""}`):o&&o.remove()}P(e)}function O(e,t){e&&(e.qStates[e.idx]?.status==="none"&&(e.qStates[e.idx].status="passed"),t&&A(t,e.qStates[e.idx]))}async function ue(e){const t=e._arcade;t.idx!==0&&(O(t,e),t.idx--,await L(e,t.queue[t.idx]),x(e),w(e))}async function $(e,t){const r=e._arcade;!r||t<0||t>=r.queue.length||t===r.idx||(O(r,e),r.idx=t,await L(e,r.queue[t]),x(e),w(e))}async function pe(e){const t=e._arcade;if(!t)return;const r=t.idx===t.queue.length-1,n=t.qStates.every(a=>a.status!=="none");if(r&&n){y(e,!0);return}r||(O(t,e),t.idx++,await L(e,t.queue[t.idx]),x(e),w(e))}function fe(e){e.querySelector(".btn-validate")?.click()}function x(e){const t=e._arcade;if(!t?.hud)return;t.hud.querySelector(".arc-hud-score-val").textContent=`${t.score}/${t.queue.length}`,P(e);const r=e.querySelector(".q-num");r&&(e._arcadeQNumOriginal==null&&(e._arcadeQNumOriginal=r.textContent),r.textContent=String(t.idx+1))}async function L(e,t){const r=e._arcade;e.querySelectorAll(".variant-content").forEach((i,d)=>i.classList.toggle("active",d===t));const n=h(e),a=n?.variantes?.[t]?.gs||n?.gs||"";e.querySelectorAll(".gs-ref-badge").forEach(i=>i.classList.toggle("active",i.dataset.gsKey===a));let s=null;if(r?.pinnedConfigs){s=r.pinnedConfigs[r.idx];const i=e.querySelector(`.variant-content[data-index="${t}"]`);i?.visualData&&s&&(i.visualData.config=JSON.parse(JSON.stringify(s)),i.visualData.rand=null)}if(await N(e,t,!r?.pinnedConfigs),s?.content){const i=e.querySelector(`.variant-content[data-index="${t}"]`),d=i?.visualData?.type;if(i&&!new Set(["texte-trous"]).has(d)){const u=await c(()=>import("./rapidos-visuals-integration.7XMkS1mg.js").then(o=>o.r),__vite__mapDeps([4,2]));u._applyConfigContent&&await u._applyConfigContent(e,i,s)}}if(window.MathJax&&window.MathJax.typesetPromise([e]).catch(()=>{}),r){const i=r.qStates[r.idx],d=e.querySelector(".variant-content.active .content");if(i.renderedContent&&d){d.innerHTML=i.renderedContent;const{wireCardInputs:l}=await c(async()=>{const{wireCardInputs:u}=await import("./rapido-engine.NP9QBxQu.js").then(o=>o.h);return{wireCardInputs:u}},__vite__mapDeps([3,4,2]));l(e)}else A(e,i);i.studentAnswer!=null&&requestAnimationFrame(()=>me(e,i)),i.status==="answered"||i.status==="incorrect"?q(e):be(e)}}function be(e){const t=e.querySelector(".variant-content.active");if(!t)return;const r=()=>{const d=[...t.querySelectorAll(".rapido-input")],l=[...t.querySelectorAll(".rapido-vf-wrap")],u=d.some(f=>f.classList.contains("incorrect"))||l.some(f=>f.querySelector(".rapido-vf-btn.vf-incorrect")),o=d.every(f=>f.classList.contains("correct")||f.classList.contains("incorrect")),p=l.every(f=>!!f.dataset.answered);return u||o&&p};let n=!1;const a=()=>{n||(n=!0,i.disconnect(),q(e),e.querySelector(".btn-validate")?.click())},s=()=>requestAnimationFrame(()=>{r()&&a()}),i=new MutationObserver(()=>{r()&&a()});t.querySelectorAll(".rapido-input").forEach(d=>{d.dataset.autoLockWired!=="1"&&(d.dataset.autoLockWired="1",i.observe(d,{attributes:!0,attributeFilter:["class"]}),d.addEventListener("blur",s),d.addEventListener("keydown",l=>{(l.key==="Enter"||l.key==="Tab")&&s()}))}),t.querySelectorAll(".rapido-vf-wrap").forEach(d=>{d.dataset.autoLockWired!=="1"&&(d.dataset.autoLockWired="1",i.observe(d,{attributes:!0,attributeFilter:["data-answered"],subtree:!0}))}),t.querySelectorAll(".rapido-vf-btn").forEach(d=>{d.dataset.autoLockWired!=="1"&&(d.dataset.autoLockWired="1",d.addEventListener("click",s))})}function A(e,t){const r=e.querySelector(".variant-content.active");if(!r)return;const n=r.querySelector(".content");if(n&&n.innerHTML.trim())n.querySelectorAll("input").forEach(a=>{a.type==="checkbox"||a.type==="radio"?a.checked?a.setAttribute("checked",""):a.removeAttribute("checked"):a.setAttribute("value",a.value||"")}),n.querySelectorAll("select").forEach(a=>{a.querySelectorAll("option").forEach(i=>i.removeAttribute("selected"));const s=a.options[a.selectedIndex];s&&s.setAttribute("selected","")}),t.renderedContent=n.innerHTML;else{const a=r.querySelector('h2, h3, .ru-title, .ap-title, [class$="-title"]');a?.textContent?.trim()&&(t.renderedContent=a.textContent.trim())}}function me(e,t){const r=e.querySelector("math974-axe-gradue");r&&t.studentAnswer!=null&&typeof r.draw=="function"&&(r._studentAnswer=t.studentAnswer,r.draw())}function S(){if(!location.pathname.includes("/automaths/arcade-mix"))return!1;const t=new URLSearchParams(location.search).get("source")||"3e-DNB",r=(typeof window<"u"?window.__AM_BASE__||window.__BASE_URL__:"")||"",n=t==="cycle3"?`${r}/automaths/6e/`:`${r}/automaths/3e-dnb/`;return window.location.href=n,!0}async function y(e,t){const r=e._arcade;if(!r)return;if(e.removeEventListener("confetti",r.onConfetti),r.onValidation&&e.removeEventListener("validation-result",r.onValidation),r.timerId&&clearInterval(r.timerId),r.hudRO?.disconnect(),document.body.style.removeProperty("--arc-hud-h"),document.body.style.removeProperty("--arc-tc-bg"),document.body.style.removeProperty("--arc-tc-card-border"),document.body.style.removeProperty("--arc-tc-border"),document.body.style.removeProperty("--arc-tc-text"),r.hud?.remove(),r.onSwipeStart&&document.removeEventListener("touchstart",r.onSwipeStart),r.onSwipeEnd&&document.removeEventListener("touchend",r.onSwipeEnd),Array.isArray(r._hidden)?r._hidden.forEach(b=>{b.style.visibility=""}):(r._hiddenBullets&&(r._hiddenBullets.style.visibility=""),r._hiddenOneUp&&(r._hiddenOneUp.style.visibility="")),r._arcBulletsNav&&r._arcBulletsOriginalHTML!=null){r._arcBulletsNav.innerHTML=r._arcBulletsOriginalHTML,r._arcBulletsNav.classList.remove("arc-bullets-nav"),c(()=>import("./rapido-engine.NP9QBxQu.js").then(m=>m.h),__vite__mapDeps([3,4,2])).then(m=>m.wireBullets?.(e)).catch(()=>{});const b=e.querySelector(".btn-1up");b&&(b.style.visibility="",R(b,e))}document.body.classList.remove("arcade-active");const n=e.querySelector(".q-num");n&&e._arcadeQNumOriginal!=null&&(n.textContent=e._arcadeQNumOriginal,delete e._arcadeQNumOriginal);const a=r;if(delete e._arcade,!t){S();return}const s=h(e),i=s?.id||s?.slug||s?._mixRef||s?.ref||null;let d=null;if(i){try{d=await c(()=>import("./arcade-storage.ZQJxh7Gb.js"),[])}catch{}if(d)try{d.saveResult("arcade",i,{mode:a.mode,score:a.score,total:a.queue.length,qStates:a.qStates})}catch{}}const l=d&&i?d.getStats("arcade",i):null,u=l&&l.bestScore===a.score&&l.bestTotal===a.queue.length&&l.totalAttempts>1&&a.score/a.queue.length>l.bestScore/l.bestTotal-.001,o=document.createElement("div");o.className="arc-modal-backdrop";const p=Math.round(r.score/r.queue.length*100),f=r.score===r.queue.length?"🏆🏆🏆":p>=70?"🏆🏆":p>=40?"🏆":"💪";let g="";if(l&&l.totalAttempts>1&&l.bestTotal>0){const b=Math.round(l.bestScore/l.bestTotal*100),m=l.bestScoreMode?_[l.bestScoreMode]||l.bestScoreMode:"?";g=u?'<p class="arc-modal-record">🎉 Nouveau record battu !</p>':`<p class="arc-modal-history">Meilleur score : <strong>${l.bestScore}/${l.bestTotal}</strong> (${b} %, ${m}) · ${l.totalAttempts} essais</p>`}o.innerHTML=`
    <div class="arc-modal" role="dialog" aria-modal="true">
      <h2 class="arc-modal-title">${f} 1UP terminé !</h2>
      <p class="arc-modal-sub">
        Mode : <strong>${_[r.mode]}</strong><br>
        Score : <strong>${r.score} / ${r.queue.length}</strong> (${p} %)
      </p>
      ${g}
      <div class="arc-modal-modes" style="grid-template-columns: 1fr 1fr;">
        <button class="arc-mode-btn arc-mode-TS" data-action="corriges">📝 Corrigés</button>
        <button class="arc-mode-btn arc-mode-F"  data-action="replay">🔁 Rejouer</button>
        <button class="arc-mode-btn arc-mode-S"  data-action="newmode">🎮 Nouveau mode</button>
        <button class="arc-mode-btn arc-mode-RQ" data-action="quit">Quitter</button>
      </div>
    </div>
  `,document.body.appendChild(o),o.querySelector('[data-action="corriges"]').addEventListener("click",()=>{o.remove(),ge(e,a)}),o.querySelector('[data-action="replay"]').addEventListener("click",()=>{o.remove();const b={...a.timeSec?{timeSec:a.timeSec}:{},remixFrom:a};C(e,a.mode,b)}),o.querySelector('[data-action="newmode"]').addEventListener("click",()=>{o.remove(),T(e)}),o.querySelector('[data-action="quit"]').addEventListener("click",()=>{o.remove(),S()})}function ge(e,t){if(!t?.queue?.length)return;const r=h(e),n=t.queue.length,a=t.queue.map((u,o)=>{const p=r?.variantes?.[u]||{},f=t.qStates?.[o]||{status:"none",studentAnswer:null},g=t.pinnedConfigs?.[o]||null,b=f.renderedContent||null,m=b||g?.content||p.content||p.texte||p.title||(p.type?`Exercice : ${String(p.type).replace(/-/g," ")}`:"(énoncé non disponible)"),v=!!b,M=p._sourceTitle||"";return{i:o,vIdx:u,status:f.status,studentAnswer:f.studentAnswer,content:m,isRendered:v,gs:p.gs,sourceTitle:M,niveau:p.niveau}}),s={answered:{label:"✓ Correct",cls:"arc-corr-status--ok"},incorrect:{label:"✗ Faux",cls:"arc-corr-status--ko"},passed:{label:"⏭ Passée",cls:"arc-corr-status--pass"},none:{label:"✗ Non répondue",cls:"arc-corr-status--ko"}},i=document.createElement("div");i.className="arc-modal-backdrop arc-corriges-backdrop",i.innerHTML=`
    <div class="arc-modal arc-corriges-modal" role="dialog" aria-modal="true">
      <h2 class="arc-modal-title">📝 Corrigés</h2>
      <p class="arc-modal-sub">
        Score : <strong>${t.score} / ${n}</strong> — revois chaque question pour comprendre tes erreurs.
      </p>
      <div class="arc-corr-selector" role="tablist">
        ${a.map(u=>{const o=s[u.status]||s.none;return`<button class="arc-corr-dot ${o.cls}" data-i="${u.i}"
            role="tab" aria-label="Question ${u.i+1} ${o.label}">
            ${u.i+1}
          </button>`}).join("")}
      </div>
      <div class="arc-corr-detail" id="arc-corr-detail" role="tabpanel"></div>
      <div class="arc-recap-actions">
        <button class="arc-modal-cancel" data-action="back">← Retour au bilan</button>
      </div>
    </div>
  `,document.body.appendChild(i);const d=i.querySelector("#arc-corr-detail"),l=u=>{const o=a[u];if(!o)return;i.querySelectorAll(".arc-corr-dot").forEach(v=>v.classList.toggle("arc-corr-dot--active",Number(v.dataset.i)===u));const p=s[o.status]||s.none,f=o.studentAnswer!=null?`<div class="arc-corr-line"><span class="arc-corr-label">Ta réponse :</span> <strong>${o.studentAnswer}</strong></div>`:"",g=o.sourceTitle?`<div class="arc-corr-source">📄 ${o.sourceTitle}${o.gs?` — ${o.gs}`:""}</div>`:o.gs?`<div class="arc-corr-source">${o.gs}</div>`:"",m=o.isRendered&&(o.status==="incorrect"||o.status==="none"||o.status==="passed")?`<div class="arc-corr-correction-label">Correction :</div>
         <div class="arc-corr-content arc-corr-content--correction">${ve(o.content)}</div>`:"";d.innerHTML=`
      <div class="arc-corr-head">
        <span class="arc-corr-status ${p.cls}">${p.label}</span>
        ${g}
      </div>
      <div class="arc-corr-body">
        <div class="arc-corr-content">${o.isRendered?o.content:he(o.content)}</div>
        ${f}
        ${m}
      </div>
    `,window.MathJax?.typesetPromise&&window.MathJax.typesetPromise([d]).catch(()=>{})};i.querySelectorAll(".arc-corr-dot").forEach(u=>{u.addEventListener("click",()=>l(Number(u.dataset.i)))}),i.querySelector('[data-action="back"]').addEventListener("click",()=>{i.remove(),e._arcade=t,y(e,!0)}),l(0)}function ve(e){if(!e)return"";const t=document.createElement("div");return t.innerHTML=e,t.querySelectorAll("input.rapido-input").forEach(r=>{const n=r.getAttribute("data-solution");n!=null&&r.setAttribute("value",n),r.classList.add("correct"),r.classList.remove("incorrect")}),t.querySelectorAll("select.rapido-input").forEach(r=>{const n=r.getAttribute("data-solution");if(r.querySelectorAll("option").forEach(a=>a.removeAttribute("selected")),n!=null){const a=[...r.options].find(s=>s.value===n);a&&a.setAttribute("selected","")}r.classList.add("correct"),r.classList.remove("incorrect")}),t.querySelectorAll(".rapido-vf-wrap").forEach(r=>{const n=r.getAttribute("data-solution");r.querySelectorAll(".rapido-vf-btn").forEach(a=>{a.classList.remove("vf-correct","vf-incorrect"),a.getAttribute("data-choice")===n&&a.classList.add("vf-correct")})}),t.querySelectorAll("input.fig-inp").forEach(r=>{const n=r.getAttribute("data-solution");n!=null&&r.setAttribute("value",n),r.classList.add("correct"),r.classList.remove("incorrect")}),t.innerHTML}function he(e){return e?String(e).replace(/\[\?[^\]]*\]/g,'<span class="arc-corr-blank">…</span>').replace(/\[=([^\]]*)\]/g,'<span class="arc-corr-blank">…</span>').replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\n/g,"<br>"):""}export{Y as createArcadeButton,ye as mountArcadeButton,E as showArcadeRecap,C as startArcade,we as tryAutoOpenFromUrl,R as wireArcadeButton};
