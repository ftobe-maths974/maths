const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/addition-posee.DXZQvsFt.js","_astro/vis-input.s_F1gz3S.js","_astro/editor.CJZspgfY.js","_astro/rapido-engine.lNkDjjL2.js","_astro/rapidos-visuals-integration.Dk7gU-8V.js","_astro/js-yaml.CwjAzRNl.js","_astro/pose-helpers.Dpx-Hvq3.js","_astro/angle-triangle.DjHJouEB.js","_astro/utils.MftNdmoG.js","_astro/angles-proprietes.Dp34-aqX.js","_astro/figure-colors.CJg3xQS9.js","_astro/arbre-construire.RJlDgiM_.js","_astro/builder-core.yuAOKKFC.js","_astro/arbre.C7zSmtf2.js","_astro/bar-geom.qOvxJNxq.js","_astro/arbre-possibles.CO3MDskj.js","_astro/axe-gradue-zefor.DfJTlx97.js","_astro/axe-gradue.C10TOBpI.js","_astro/division-posee.Dgkz7reE.js","_astro/echelle-probabilite.DMfNSAxA.js","_astro/equation-etayage.CB2dMIBS.js","_astro/linearite-mult.BFvQoaQZ.js","_astro/linearite-tableau.pkaKBuMt.js","_astro/multiplication-posee.P9tNSaca.js","_astro/polygone-perimetre.egEnsX7U.js","_astro/pythagore-figure.Cbhn8nOA.js","_astro/figure-validation.Btc7omRI.js","_astro/retour-unite-zefor.D01d1guU.js","_astro/retour-unite.CQLoGa7Z.js","_astro/schema-additif.BZUF1r38.js","_astro/schema-comparaison-mult.LVc2p0rq.js","_astro/bar-comparaison-mult.DP02BSw_.js","_astro/ink.DbHLEoN5.js","_astro/schema-comparaison.BppM-cY9.js","_astro/bar-comparaison.CyAI7uHR.js","_astro/schema-construire-comp-mult.mKg_0dnQ.js","_astro/schema-construire-comp.Coyzxe3Y.js","_astro/schema-construire-mult.DCWjfPq6.js","_astro/bar-mult.BDRYgsTx.js","_astro/schema-construire.CqJrN_Gz.js","_astro/bar-additif.Cv2D3s3G.js","_astro/schema-multiplicatif.CMY286xE.js","_astro/soustraction-posee.D5D7rfnC.js","_astro/spreadsheet.CT1vpudY.js","_astro/formula-parser.CuBpGvtX.js","_astro/texte-trous.tsmBtA8u.js","_astro/thales-figure.Cf7GfbGC.js","_astro/trigo-figure.D5gWqfbq.js"])))=>i.map(i=>d[i]);
import{_ as d}from"./editor.CJZspgfY.js";import{_ as B,h as N}from"./rapidos-visuals-integration.Dk7gU-8V.js";const U={"Nombres et calculs":{bg:"#fff1f2",cardBorder:"#fecdd3",border:"#e11d48",text:"#be123c"},"Grandeurs et mesures":{bg:"#faf5ff",cardBorder:"#e9d5ff",border:"#7e22ce",text:"#6b21a8"},"Espace et géométrie":{bg:"#eff6ff",cardBorder:"#bfdbfe",border:"#1d4ed8",text:"#1e40af"},"Organisation et gestion de données, Probabilités":{bg:"#f0fdf4",cardBorder:"#bbf7d0",border:"#16a34a",text:"#15803d"},"Données et probabilités":{bg:"#f0fdf4",cardBorder:"#bbf7d0",border:"#16a34a",text:"#15803d"},"La proportionnalité":{bg:"#f0fdfa",cardBorder:"#99f6e4",border:"#0d9488",text:"#0f766e"},Proportionnalité:{bg:"#f0fdfa",cardBorder:"#99f6e4",border:"#0d9488",text:"#0f766e"},"Initiation à la pensée informatique":{bg:"#fff7ed",cardBorder:"#fed7aa",border:"#ea580c",text:"#c2410c"},"Algorithmique et programmation":{bg:"#fff7ed",cardBorder:"#fed7aa",border:"#ea580c",text:"#c2410c"},"Résolution de problèmes":{bg:"#1e293b",cardBorder:"#334155",border:"#64748b",text:"#e2e8f0"}},F={bg:"#f8fafc",cardBorder:"#e2e8f0",border:"#94a3b8",text:"#475569"},D=["fragile","satisfaisant","tres-satisfaisant","expert"],w={F:"Fragile",S:"Satisfaisant",TS:"Très Satisfaisant",E:"Expert",R:"Rapido",RQ:"Random Quest"},H={F:"fragile",S:"satisfaisant",TS:"tres-satisfaisant",E:"expert"},Q={F:"Une série de 6 questions de niveau Fragile — pour t'échauffer.",S:"6 questions de niveau Satisfaisant — le standard du cycle.",TS:"6 questions de niveau Très Satisfaisant — un cran au-dessus.",E:"6 questions de niveau Expert — entraînement musclé.",R:"6 questions tous niveaux mélangés, chronométrées.",RQ:"8 questions (chaque niveau × 2), randomisées — la quête complète."},G={F:"🟡",S:"🟢",TS:"🟢",E:"🌟",R:"⚡",RQ:"🎯"},J=`
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

/* ── Dock arcade INLINE (cluster dans .card-header-controls, plus de barre
   flottante). Score + timer + Terminer (contextuel) + ✕, épinglés à droite,
   toujours visibles. updateHud/_startTimer ciblent .arc-hud-score-val /
   .arc-hud-timer → on garde ces classes. */
.arc-dock {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1 1 auto;          /* occupe la ligne → permet de pousser ✕ à droite */
  min-width: 0;
  margin-left: 8px;
}
/* ✕ Quitter : toujours à l'extrême droite de la ligne du dock. */
.arc-dock .arc-hud-quit { margin-left: auto; }
.arc-dock .arc-hud-score {
  padding: 2px 10px; border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.12);
}
.arc-dock .arc-hud-score-val { font-size: 1.05em; }
.arc-dock .arc-hud-timer { white-space: nowrap; font-weight: 800; color: #334155; }
.arc-dock .arc-nav-finish {
  background: #16a34a; color: #fff; border: none; border-radius: 999px;
  padding: 6px 12px; font-weight: 800; cursor: pointer; white-space: nowrap;
  min-height: 38px; box-shadow: 0 2px 8px rgba(22,163,74,0.35);
}
.arc-dock .arc-nav-finish:hover { background: #15803d; }
.arc-dock .arc-nav-finish[hidden] { display: none; }
.arc-dock .arc-hud-quit {
  background: #fee2e2; color: #b91c1c; border: none; border-radius: 50%;
  width: 38px; height: 38px; min-width: 38px; min-height: 38px;
  font-size: 1.1rem; font-weight: 900; cursor: pointer; flex-shrink: 0;
  display: inline-flex; align-items: center; justify-content: center;
}
.arc-dock .arc-hud-quit:hover { background: #fecaca; }

/* La bullets-nav arcade redevient le SLIDER élève : padding compact, et place
   AU-DESSUS des opales pour la case statut (qui déborde en haut). */
.bullets-nav.arc-bullets-nav { padding: 4px 10px !important; }
.arc-bullets-nav .bn-bullets { padding-top: 27px; align-items: flex-end; }
/* On garde le look propre des opales-questions (44px perle + n° + statut) :
   bat la règle opale élève (0,5,0) qui les réduirait à 22px. */
.q-card .bullets-nav.bn-carousel.arc-bullets-nav .bullet.arc-bullet {
  width: 44px !important; height: 44px !important;
  min-width: 44px !important; min-height: 44px !important;
  opacity: 1 !important;
}
/* Solution (œil) toujours masquée en arcade. */
body.arcade-active .btn-eye-solution { display: none !important; }

/* Le slider des questions occupe sa PROPRE ligne au-dessus du dock (score/
   timer/✕). Override haute spécificité (0,5,1) car eleve.css force la
   .card-header-controls en flex-wrap:nowrap (0,4,0) sur la vue élève. */
body.arcade-active .q-card:not(.page-hidden) > .card-header-controls {
  flex-wrap: wrap !important;
  row-gap: 6px !important;
}
body.arcade-active .q-card:not(.page-hidden) > .card-header-controls > .bullets-nav {
  flex: 1 1 100% !important;
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
/* (Thème sombre des problèmes retiré : plus de texte clair forcé en arcade — la
   carte est claire comme les autres.) */
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
/* L'énoncé/zones « max-width:100% » = factorisé dans card-shared.css (commun
   élève/prof/1UP) → l'énoncé ne s'écrase plus en colonne étroite. */

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
`;let j=!1;function E(){if(j)return;j=!0;const t=document.createElement("style");t.textContent=J,document.head.appendChild(t)}function W(t){E();const e=document.createElement("button");return e.type="button",e.className="visual-toggle-btn mini-eye btn-1up",e.title="Démarrer une partie arcade 1UP",e.setAttribute("aria-label","Démarrer une partie arcade"),e.textContent="1UP",R(e,t),e}function R(t,e){!t||t._arcadeWired||(t._arcadeWired=!0,t.addEventListener("click",r=>{r.stopPropagation(),T(e)}))}function he(t,e){if(!t||!e)return null;const r=e.querySelector(".btn-1up");if(r)return R(r,e),r;const o=W(e);return t.appendChild(o),o}function T(t){E(),document.body.classList.add("arcade-modal-open");const e=document.createElement("div");e.className="arc-modal-backdrop",e.innerHTML=`
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
  `,document.body.appendChild(e);const r=()=>{e.remove(),document.body.classList.remove("arcade-modal-open"),S()},o=e.querySelector(".arc-slider"),i=e.querySelector(".arc-slider-value");o&&(o.addEventListener("input",()=>{i.textContent=o.value}),o.addEventListener("click",s=>s.stopPropagation()),o.addEventListener("pointerdown",s=>s.stopPropagation())),e.querySelector(".arc-modal-cancel").addEventListener("click",r),e.addEventListener("click",s=>{s.target===e&&r()}),e.querySelectorAll(".arc-mode-btn").forEach(s=>{s.addEventListener("click",()=>{const n=s.dataset.mode;if(e.remove(),n==="R"){const c=parseInt(o?.value,10)||6;k(t,n,{timeSec:c*60})}else k(t,n)})})}function k(t,e,r={}){E();const o=e==="RQ"?8:6,i=r.timeSec?Math.round(r.timeSec/60):null,s=G[e]||"🎮",n=w[e]||e,c=Q[e]||"",l=document.createElement("div");l.className="arc-modal-backdrop",l.innerHTML=`
    <div class="arc-modal" role="dialog" aria-modal="true" style="position: relative;">
      <h2 class="arc-modal-title">${s} 1UP — ${n}</h2>
      <p class="arc-modal-sub">${c}</p>
      <ul class="arc-recap-list">
        <li><strong>${o}</strong> question${o>1?"s":""} à enchaîner</li>
        ${i?`<li>⏱ Chrono global : <strong>${i} min</strong></li>`:"<li>Pas de chrono — prends ton temps</li>"}
        <li>Navigation manuelle : ← précédent · ⏭ passer · → suivant</li>
        <li>💡 Aide pas-à-pas + indices disponibles</li>
      </ul>
      <button class="arc-recap-start arc-mode-${e}" type="button">▶ Démarrer</button>
      <div class="arc-recap-actions">
        <button class="arc-recap-share" type="button">🔗 Partager ce mode</button>
        <button class="arc-modal-cancel" type="button">Annuler</button>
      </div>
    </div>
  `,document.body.appendChild(l);const u=()=>{l.remove(),document.body.classList.remove("arcade-modal-open"),S()};l.querySelector(".arc-modal-cancel").addEventListener("click",u),l.addEventListener("click",a=>{a.target===l&&u()}),l.querySelector(".arc-recap-start").addEventListener("click",()=>{l.remove(),document.body.classList.remove("arcade-modal-open"),I(t,e,r)}),l.querySelector(".arc-recap-share").addEventListener("click",async()=>{const a=X(e,r);try{await navigator.clipboard.writeText(a),Y(l.querySelector(".arc-modal"),"🔗 Lien copié !")}catch{prompt("Lien à partager :",a)}})}function X(t,e){const r=new URLSearchParams(location.search);return r.set("arcade",t),e.timeSec?r.set("t",String(e.timeSec)):r.delete("t"),`${location.origin}${location.pathname}?${r}`}function Y(t,e){if(!t)return;const r=document.createElement("div");r.className="arc-toast",r.textContent=e,t.appendChild(r),setTimeout(()=>r.remove(),1800)}function ve(t){if(!t)return!1;const e=new URLSearchParams(location.search),r=e.get("arcade");if(!r)return!1;if(r==="pick")return T(t),!0;if(!w[r])return!1;const o=parseInt(e.get("t")||"",10),i=r==="R"&&Number.isFinite(o)&&o>0?{timeSec:o}:{};return k(t,r,i),!0}function v(t){return t?._question||window.__AM_QUESTION__}function K(t,e,r){const o=V(t,e);if(!o.length||!r?.qStates?.length||!r?.queue?.length)return o;const i=[...r.queue];for(let s=0;s<i.length;s++){if(r.qStates[s]?.status!=="answered")continue;let n=o[s]??i[s];if(n===i[s]){const c=o.find(l=>l!==i[s]);c!==void 0&&(n=c)}i[s]=n}return i}function Z(t){t.querySelectorAll(".rapido-input").forEach(e=>{e.value="",e.classList.remove("correct","incorrect","frozen"),e.disabled=!1,e.readOnly=!1,e.removeAttribute("tabindex"),delete e.dataset.autoLockWired}),t.querySelectorAll(".rapido-vf-wrap").forEach(e=>{delete e.dataset.answered,e.querySelectorAll(".rapido-vf-btn").forEach(r=>{r.disabled=!1,r.classList.remove("vf-correct","vf-incorrect","frozen")})}),t.querySelectorAll(".rapido-fb, .vis-fb").forEach(e=>{e.textContent="",e.classList.remove("correct","incorrect")}),t.querySelectorAll(".fig-inp").forEach(e=>{"value"in e&&(e.value=""),e.classList.remove("correct","incorrect","frozen"),"disabled"in e&&(e.disabled=!1),"readOnly"in e&&(e.readOnly=!1),e.removeAttribute("tabindex")}),t.querySelectorAll(".am-on-correct").forEach(e=>e.classList.remove("show")),t.querySelectorAll(".q-variant-frozen").forEach(e=>e.classList.remove("q-variant-frozen")),delete t.dataset.celebrated}function V(t,e){const r=v(t);if(!r?.variantes?.length)return[];const o=!!r.isMix,i=r.variantes,s={};D.forEach(a=>s[a]=[]),i.forEach((a,p)=>{s[a.niveau]&&s[a.niveau].push(p)});const n=a=>a[Math.floor(Math.random()*a.length)],c=(a,p)=>{if(!a.length)return[];if(!o)return Array.from({length:p},()=>n(a));const b=[],g=new Set,f=[...a];for(let m=f.length-1;m>0;m--){const h=Math.floor(Math.random()*(m+1));[f[m],f[h]]=[f[h],f[m]]}for(const m of f){if(b.length>=p)break;const h=i[m]._sourceRef;(!h||!g.has(h))&&(b.push(m),h&&g.add(h))}for(;b.length<p;)b.push(n(a));return b};if(e==="RQ"){const a=[];if(D.forEach(p=>{const b=s[p];b.length&&a.push(...c(b,2))}),a.length===0){const p=i.map((b,g)=>g);p.length&&a.push(...c(p,8))}for(let p=a.length-1;p>0;p--){const b=Math.floor(Math.random()*(p+1));[a[p],a[b]]=[a[b],a[p]]}return a}if(e==="R"){const a=i.map((g,f)=>f);if(!a.length)return[];if(o)return c(a,6);const p=[],b=[...a];for(;p.length<6;){b.length||b.push(...a);const g=Math.floor(Math.random()*b.length);p.push(b[g]),b.splice(g,1)}return p}const l=H[e];let u=s[l]||[];return u.length||(u=i.map((a,p)=>p)),u.length?c(u,6):[]}async function I(t,e,r={}){const o=r.remixFrom?K(t,e,r.remixFrom):V(t,e);if(!o.length){alert("Pas de variantes pour ce mode.");return}Z(t);const s={mode:e,queue:o,idx:0,score:0,hasTimer:e==="R",hasNav:!0,pinnedConfigs:null,qStates:o.map(()=>({status:"none",studentAnswer:null})),timeSec:r.timeSec||0,timeLeft:r.timeSec||0};t._arcade=s,delete t.dataset.celebrated,t.querySelectorAll(".am-on-correct").forEach(n=>n.classList.remove("show")),await ce(s,t),t.querySelectorAll("[data-auto-lock-wired]").forEach(n=>delete n.dataset.autoLockWired),document.body.classList.add("arcade-active");{const n=v(t),c=U[n?.theme]||F;document.body.style.setProperty("--arc-tc-bg",c.bg),document.body.style.setProperty("--arc-tc-card-border",c.cardBorder),document.body.style.setProperty("--arc-tc-border",c.border),document.body.style.setProperty("--arc-tc-text",c.text)}ee(t,s),ae(t,s),s.onConfetti=()=>se(t),t.addEventListener("confetti",s.onConfetti),s.onValidation=n=>{const c=t._arcade;if(!c)return;const l=c.qStates[c.idx];l.status!=="answered"&&n.detail.fieldsPresent&&!n.detail.everythingOk&&(l.status="incorrect",q(t),A(t,l),x(t),y(t))},t.addEventListener("validation-result",s.onValidation),s.hasTimer&&s.timeLeft>0&&ie(t,s),await L(t,o[0]),oe(t),x(t)}function ee(t,e){const r=t.querySelector(".card-header-controls"),o=document.createElement("div");o.className="arc-dock",o.innerHTML=re(e),(r||document.body).appendChild(o),e.hud=o,document.body.style.setProperty("--arc-hud-h","0px"),o.querySelector(".arc-hud-quit").addEventListener("click",()=>_(t,!1)),e.hasNav&&(e.nav=o,o.querySelector(".arc-nav-finish")?.addEventListener("click",()=>_(t,!0)),te(t,e))}function te(t,e){let r=0,o=0,i=!1;const s=60,n=60,c=u=>{if(!t._arcade)return;const a=u.target;a&&/^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName)||u.touches.length===1&&(r=u.touches[0].clientX,o=u.touches[0].clientY,i=!0)},l=u=>{if(!i||!t._arcade)return;i=!1;const a=(u.changedTouches[0]?.clientX??r)-r,p=(u.changedTouches[0]?.clientY??o)-o;Math.abs(a)<s||Math.abs(p)>n||(a>0?z(t):$(t))};document.addEventListener("touchstart",c,{passive:!0}),document.addEventListener("touchend",l,{passive:!0}),e.onSwipeStart=c,e.onSwipeEnd=l}function re(t){const e=t.queue.length,r=t.hasTimer?`<span class="arc-hud-timer">⏱ ${C(t.timeLeft)}</span>`:"",o=t.hasNav?'<button class="arc-nav-btn arc-nav-finish" type="button" hidden aria-label="Terminer le 1UP et voir le bilan" title="Voir le bilan">Terminer ✓</button>':"";return`
    <span class="arc-hud-score" aria-label="Score">
      <span class="arc-hud-score-lbl">Score</span>
      <span class="arc-hud-score-val">0/${e}</span>
    </span>
    ${r}
    ${o}
    <button class="arc-hud-quit" type="button" title="Quitter le 1UP" aria-label="Quitter le 1UP">✕</button>
  `}function ae(t,e){e._hidden=[],(o=>{t.querySelectorAll(o).forEach(i=>{e._hidden.push(i),i.style.visibility="hidden"})})(".btn-eye-solution"),e._hiddenBullets=e._hidden.find(o=>o.classList.contains("bullets-nav")),e._hiddenOneUp=e._hidden.find(o=>o.classList.contains("btn-1up"))}function oe(t){const e=t._arcade;if(!e)return;const r=t.querySelector(".bullets-nav");if(!r)return;e._arcBulletsNav=r,e._arcBulletsOriginalHTML=r.innerHTML,r.classList.add("arc-bullets-nav");const i=v(t)?.variantes||[],s=e.queue.map((n,c)=>{const l=i[n]||{},u=l.niveau?` data-niveau="${l.niveau}"`:"",a=ne[l.niveau]||"";return`<button type="button" class="bullet arc-bullet"${u}
        data-pos="${c}"
        aria-label="Question ${c+1}${a?" — "+a:""}"
        title="Question ${c+1}${a?" ("+a+")":""}">
      <span class="arc-bullet-status" aria-hidden="true"></span>
      <span class="arc-bullet-num">${c+1}</span>
    </button>`}).join("");r.innerHTML=`<div class="bn-bullets">${s}</div><div class="bn-pager"><button type="button" class="bn-nav-arrow bn-nav-prev" aria-label="Question précédente">‹</button><button type="button" class="bn-nav-arrow bn-nav-next" aria-label="Question suivante">›</button></div>`,r.querySelectorAll(".arc-bullet").forEach(n=>{n.addEventListener("click",()=>de(t,+n.dataset.pos))}),r.querySelector(".bn-nav-prev")?.addEventListener("click",()=>z(t)),r.querySelector(".bn-nav-next")?.addEventListener("click",()=>$(t)),P(t)}function P(t){const e=t._arcade;if(!e?._arcBulletsNav)return;const r=e._arcBulletsNav;r.querySelectorAll(".arc-bullet").forEach(c=>{const l=+c.dataset.pos,u=e.qStates[l]?.status||"none";c.classList.toggle("arc-bullet-current",l===e.idx),c.dataset.status=u;const a=c.querySelector(".arc-bullet-status");a&&(u==="answered"?a.textContent="✓":u==="incorrect"?a.textContent="✗":a.textContent="")});const o=r.querySelector(".bn-nav-prev"),i=r.querySelector(".bn-nav-next");o&&(o.disabled=e.idx<=0),i&&(i.disabled=e.idx>=e.queue.length-1);const s=r.querySelector(".bn-bullets"),n=r.querySelector(".arc-bullet.arc-bullet-current");if(s&&n){const c=s.getBoundingClientRect(),l=n.getBoundingClientRect(),u=l.left+l.width/2-(c.left+c.width/2);Math.abs(u)>1&&s.scrollBy({left:u,behavior:"smooth"})}}const ne={fragile:"Fragile",satisfaisant:"Satisf.","tres-satisfaisant":"TS",expert:"Expert"};function ie(t,e){e.timerId=setInterval(()=>{e.timeLeft--;const r=e.hud?.querySelector(".arc-hud-timer");r&&(r.textContent=`⏱ ${C(e.timeLeft)}`),e.timeLeft<=0&&_(t,!0)},1e3)}function q(t){const e=t.querySelector(".variant-content.active");e&&(e.classList.add("q-variant-frozen"),e.querySelectorAll(".rapido-input").forEach(r=>{r.classList.add("frozen"),r.disabled=!0,r.readOnly=!0,r.setAttribute("tabindex","-1"),document.activeElement===r&&r.blur()}),e.querySelectorAll(".rapido-vf-btn").forEach(r=>{r.classList.add("frozen"),r.disabled=!0}),e.querySelectorAll(".fig-inp").forEach(r=>{r.classList.add("frozen"),"disabled"in r&&(r.disabled=!0),"readOnly"in r&&(r.readOnly=!0),r.setAttribute("tabindex","-1"),document.activeElement===r&&r.blur()}))}function se(t){const e=t._arcade;if(!e)return;const r=e.qStates[e.idx];r.status!=="answered"&&(r.status="answered",e.score++),q(t),A(t,r);const o=t.querySelector("math974-axe-gradue");o&&o._studentAnswer!=null&&(r.studentAnswer=o._studentAnswer),x(t),e.hasNav&&y(t)}function C(t){if(t<=0)return"0:00";const e=Math.floor(t/60),r=t%60;return`${e}:${String(r).padStart(2,"0")}`}async function ce(t,e){const r=v(e);if(!r?.variantes){t.pinnedConfigs=[];return}t.pinnedConfigs=[];for(const o of t.queue){const i=r.variantes[o];if(!i?.type||!i.rand){t.pinnedConfigs.push(null);continue}try{const s=await B(Object.assign({"../visuals/addition-posee/addition-posee.js":()=>d(()=>import("./addition-posee.DXZQvsFt.js"),__vite__mapDeps([0,1,2,3,4,5,6])),"../visuals/angle-triangle/angle-triangle.js":()=>d(()=>import("./angle-triangle.DjHJouEB.js"),__vite__mapDeps([7,8])),"../visuals/angles-proprietes/angles-proprietes.js":()=>d(()=>import("./angles-proprietes.Dp34-aqX.js"),__vite__mapDeps([9,10,8])),"../visuals/arbre-construire/arbre-construire.js":()=>d(()=>import("./arbre-construire.RJlDgiM_.js"),__vite__mapDeps([11,12,3,2,4,5,13,14])),"../visuals/arbre-possibles/arbre-possibles.js":()=>d(()=>import("./arbre-possibles.CO3MDskj.js"),__vite__mapDeps([15,3,2,4,5,13,14])),"../visuals/axe-gradue-zefor/axe-gradue-zefor.js":()=>d(()=>import("./axe-gradue-zefor.DfJTlx97.js"),__vite__mapDeps([16,2,3,4,5,17])),"../visuals/axe-gradue/axe-gradue.js":()=>d(()=>import("./axe-gradue.C10TOBpI.js"),__vite__mapDeps([17,3,2,4,5])),"../visuals/axe-gradue/config.js":()=>d(()=>import("./rapidos-visuals-integration.Dk7gU-8V.js").then(n=>n.i),__vite__mapDeps([4,2])),"../visuals/axe-gradue/editor.js":()=>d(()=>import("./rapidos-visuals-integration.Dk7gU-8V.js").then(n=>n.j),__vite__mapDeps([4,2])),"../visuals/axes-symetrie/axes-symetrie.js":()=>d(()=>import("./axes-symetrie.C7mo3gVG.js"),[]),"../visuals/balance-equilibre/balance-equilibre.js":()=>d(()=>import("./balance-equilibre.D5dh6fnI.js"),[]),"../visuals/conversion-unite/conversion-unite.js":()=>d(()=>import("./conversion-unite.BjxQKg47.js"),[]),"../visuals/cubes-numeration/cubes-numeration.js":()=>d(()=>import("./cubes-numeration.B-o8GW0A.js"),[]),"../visuals/cubes-numeration/editor.js":()=>d(()=>import("./rapidos-visuals-integration.Dk7gU-8V.js").then(n=>n.k),__vite__mapDeps([4,2])),"../visuals/division-posee/division-posee.js":()=>d(()=>import("./division-posee.Dgkz7reE.js"),__vite__mapDeps([18,1,2,3,4,5,6])),"../visuals/droites-position/droites-position.js":()=>d(()=>import("./droites-position.DOTgFMCm.js"),[]),"../visuals/echelle-probabilite/echelle-probabilite.js":()=>d(()=>import("./echelle-probabilite.DMfNSAxA.js"),__vite__mapDeps([19,3,2,4,5])),"../visuals/equation-etayage/equation-etayage.js":()=>d(()=>import("./equation-etayage.CB2dMIBS.js"),__vite__mapDeps([20,4,2])),"../visuals/figure-geo/figure-geo.js":()=>d(()=>import("./figure-geo.DqoP6Aap.js"),[]),"../visuals/fraction-figure/fraction-figure.js":()=>d(()=>import("./fraction-figure.DaoBhiz3.js"),[]),"../visuals/linearite-mult/linearite-mult.js":()=>d(()=>import("./linearite-mult.BFvQoaQZ.js"),__vite__mapDeps([21,8,3,2,4,5])),"../visuals/linearite-tableau/linearite-tableau.js":()=>d(()=>import("./linearite-tableau.pkaKBuMt.js"),__vite__mapDeps([22,8,3,2,4,5])),"../visuals/multiplication-posee/multiplication-posee.js":()=>d(()=>import("./multiplication-posee.P9tNSaca.js"),__vite__mapDeps([23,1,2,3,4,5,6])),"../visuals/ordre-nombres/ordre-nombres.js":()=>d(()=>import("./ordre-nombres.hxXp-yoB.js"),[]),"../visuals/polygone-perimetre/editor.js":()=>d(()=>import("./rapidos-visuals-integration.Dk7gU-8V.js").then(n=>n.n),__vite__mapDeps([4,2])),"../visuals/polygone-perimetre/polygone-perimetre.js":()=>d(()=>import("./polygone-perimetre.egEnsX7U.js"),__vite__mapDeps([24,2])),"../visuals/programme-scratch/programme-scratch.js":()=>d(()=>import("./programme-scratch.CU4ExXqt.js"),[]),"../visuals/proportionnalite/utils.js":()=>d(()=>import("./utils.MftNdmoG.js"),[]),"../visuals/pythagore-figure/pythagore-figure.js":()=>d(()=>import("./pythagore-figure.Cbhn8nOA.js"),__vite__mapDeps([25,26,3,2,4,5,10])),"../visuals/quadrilatere-codage/quadrilatere-codage.js":()=>d(()=>import("./quadrilatere-codage.DLeg0Tdn.js"),[]),"../visuals/retour-unite-zefor/retour-unite-zefor.js":()=>d(()=>import("./retour-unite-zefor.D01d1guU.js"),__vite__mapDeps([27,2,1,3,4,5,28,8])),"../visuals/retour-unite/retour-unite.js":()=>d(()=>import("./retour-unite.CQLoGa7Z.js"),__vite__mapDeps([28,1,2,3,4,5,8])),"../visuals/schema-additif/editor.js":()=>d(()=>import("./rapidos-visuals-integration.Dk7gU-8V.js").then(n=>n.o),__vite__mapDeps([4,2])),"../visuals/schema-additif/schema-additif.js":()=>d(()=>import("./schema-additif.BZUF1r38.js"),__vite__mapDeps([29,2,3,4,5])),"../visuals/schema-comparaison-mult/schema-comparaison-mult.js":()=>d(()=>import("./schema-comparaison-mult.LVc2p0rq.js"),__vite__mapDeps([30,3,2,4,5,31,32,14])),"../visuals/schema-comparaison/schema-comparaison.js":()=>d(()=>import("./schema-comparaison.BppM-cY9.js"),__vite__mapDeps([33,3,2,4,5,34,32,14])),"../visuals/schema-construire-comp-mult/schema-construire-comp-mult.js":()=>d(()=>import("./schema-construire-comp-mult.mKg_0dnQ.js"),__vite__mapDeps([35,12,3,2,4,5,31,32,14])),"../visuals/schema-construire-comp/schema-construire-comp.js":()=>d(()=>import("./schema-construire-comp.Coyzxe3Y.js"),__vite__mapDeps([36,12,3,2,4,5,34,32,14])),"../visuals/schema-construire-mult/schema-construire-mult.js":()=>d(()=>import("./schema-construire-mult.DCWjfPq6.js"),__vite__mapDeps([37,12,3,2,4,5,38,32,14])),"../visuals/schema-construire/schema-construire.js":()=>d(()=>import("./schema-construire.CqJrN_Gz.js"),__vite__mapDeps([39,12,3,2,4,5,40,32,14])),"../visuals/schema-multiplicatif/schema-multiplicatif.js":()=>d(()=>import("./schema-multiplicatif.CMY286xE.js"),__vite__mapDeps([41,3,2,4,5])),"../visuals/schema/arbre.js":()=>d(()=>import("./arbre.C7zSmtf2.js"),__vite__mapDeps([13,14])),"../visuals/schema/bar-additif.js":()=>d(()=>import("./bar-additif.Cv2D3s3G.js"),__vite__mapDeps([40,32,14])),"../visuals/schema/bar-comparaison-mult.js":()=>d(()=>import("./bar-comparaison-mult.DP02BSw_.js"),__vite__mapDeps([31,32,14])),"../visuals/schema/bar-comparaison.js":()=>d(()=>import("./bar-comparaison.CyAI7uHR.js"),__vite__mapDeps([34,32,14])),"../visuals/schema/bar-geom.js":()=>d(()=>import("./bar-geom.qOvxJNxq.js"),[]),"../visuals/schema/bar-mult.js":()=>d(()=>import("./bar-mult.BDRYgsTx.js"),__vite__mapDeps([38,32,14])),"../visuals/schema/builder-core.js":()=>d(()=>import("./builder-core.yuAOKKFC.js"),__vite__mapDeps([12,3,2,4,5])),"../visuals/schema/ink.js":()=>d(()=>import("./ink.DbHLEoN5.js"),[]),"../visuals/shared/autoscale.js":()=>d(()=>import("./autoscale.C_JQggSk.js"),[]),"../visuals/shared/pose-helpers.js":()=>d(()=>import("./pose-helpers.Dpx-Hvq3.js"),__vite__mapDeps([6,1,2,3,4,5])),"../visuals/shared/vis-input.js":()=>d(()=>import("./vis-input.s_F1gz3S.js"),__vite__mapDeps([1,2,3,4,5])),"../visuals/solide-nom/solide-nom.js":()=>d(()=>import("./solide-nom.Bfmf5iRT.js"),[]),"../visuals/soustraction-posee/soustraction-posee.js":()=>d(()=>import("./soustraction-posee.D5D7rfnC.js"),__vite__mapDeps([42,1,2,3,4,5,6])),"../visuals/spreadsheet/formula-parser.js":()=>d(()=>import("./formula-parser.CuBpGvtX.js"),[]),"../visuals/spreadsheet/spreadsheet.js":()=>d(()=>import("./spreadsheet.CT1vpudY.js"),__vite__mapDeps([43,2,1,3,4,5,44])),"../visuals/suite-figures/suite-figures.js":()=>d(()=>import("./suite-figures.BSb9W0Gx.js"),[]),"../visuals/symetrie-diag/symetrie-diag.js":()=>d(()=>import("./symetrie-diag.CGBDIby7.js"),[]),"../visuals/symetrie-quadrillage/symetrie-quadrillage.js":()=>d(()=>import("./symetrie-quadrillage.Dvl6qQkA.js"),[]),"../visuals/texte-trous/config.js":()=>d(()=>import("./editor.CJZspgfY.js").then(n=>n.c),[]),"../visuals/texte-trous/editor.js":()=>d(()=>import("./editor.CJZspgfY.js").then(n=>n.e),[]),"../visuals/texte-trous/texte-trous.js":()=>d(()=>import("./texte-trous.tsmBtA8u.js"),__vite__mapDeps([45,3,2,4,5])),"../visuals/thales-figure/thales-figure.js":()=>d(()=>import("./thales-figure.Cf7GfbGC.js"),__vite__mapDeps([46,26,3,2,4,5,10])),"../visuals/trajet-scratch/trajet-scratch.js":()=>d(()=>import("./trajet-scratch.U_b3haCn.js"),[]),"../visuals/triangle-nature/triangle-nature.js":()=>d(()=>import("./triangle-nature.DwsjpwSo.js"),[]),"../visuals/trigo-figure/trigo-figure.js":()=>d(()=>import("./trigo-figure.D5gWqfbq.js"),__vite__mapDeps([47,26,3,2,4,5,10]))}),`../visuals/${i.type}/${i.type}.js`,4);if(s.randomize){const n=await s.randomize(JSON.parse(JSON.stringify(i.config||{})),i.rand,i.config||{});t.pinnedConfigs.push(n)}else t.pinnedConfigs.push(null)}catch{t.pinnedConfigs.push(null)}}}function y(t){const e=t._arcade;if(!e?.nav)return;const r=e.qStates[e.idx],o=e.qStates.every(u=>u.status!=="none"),i=e.idx===e.queue.length-1,s=r.status==="answered"||r.status==="incorrect",n=e.nav.querySelector(".arc-nav-next-big");n&&(n.hidden=!s||i);const c=e.nav.querySelector(".arc-nav-finish");c&&(c.hidden=!o);const l=e.nav.querySelector(".arc-nav-validate");if(l){l.disabled=r.status==="answered"||r.status==="incorrect";const u=e.qStates.slice(0,e.idx).filter(p=>p.status==="none").length;let a=l.querySelector(".arc-nav-validate-alert");u>0?(a||(a=document.createElement("span"),a.className="arc-nav-validate-alert",l.appendChild(a)),a.textContent=String(u),a.title=`${u} question${u>1?"s":""} précédente${u>1?"s":""} non traitée${u>1?"s":""}`):a&&a.remove()}P(t)}function O(t,e){t&&(t.qStates[t.idx]?.status==="none"&&(t.qStates[t.idx].status="passed"),e&&A(e,t.qStates[t.idx]))}async function z(t){const e=t._arcade;e.idx!==0&&(O(e,t),e.idx--,await L(t,e.queue[e.idx]),x(t),y(t))}async function de(t,e){const r=t._arcade;!r||e<0||e>=r.queue.length||e===r.idx||(O(r,t),r.idx=e,await L(t,r.queue[e]),x(t),y(t))}async function $(t){const e=t._arcade;if(!e)return;const r=e.idx===e.queue.length-1,o=e.qStates.every(i=>i.status!=="none");if(r&&o){_(t,!0);return}r||(O(e,t),e.idx++,await L(t,e.queue[e.idx]),x(t),y(t))}function x(t){const e=t._arcade;if(!e?.hud)return;e.hud.querySelector(".arc-hud-score-val").textContent=`${e.score}/${e.queue.length}`,P(t);const r=t.querySelector(".q-num");r&&(t._arcadeQNumOriginal==null&&(t._arcadeQNumOriginal=r.textContent),r.textContent=String(e.idx+1))}async function L(t,e){const r=t._arcade;t.querySelectorAll(".variant-content").forEach((n,c)=>n.classList.toggle("active",c===e));const o=v(t),i=o?.variantes?.[e]?.gs||o?.gs||"";t.querySelectorAll(".gs-ref-badge").forEach(n=>n.classList.toggle("active",n.dataset.gsKey===i));let s=null;if(r?.pinnedConfigs){s=r.pinnedConfigs[r.idx];const n=t.querySelector(`.variant-content[data-index="${e}"]`);n?.visualData&&s&&(n.visualData.config=JSON.parse(JSON.stringify(s)),n.visualData.rand=null)}if(await N(t,e,!r?.pinnedConfigs),s?.content){const n=t.querySelector(`.variant-content[data-index="${e}"]`),c=n?.visualData?.type;if(n&&!new Set(["texte-trous"]).has(c)){const u=await d(()=>import("./rapidos-visuals-integration.Dk7gU-8V.js").then(a=>a.r),__vite__mapDeps([4,2]));u._applyConfigContent&&await u._applyConfigContent(t,n,s)}}if(window.MathJax&&window.MathJax.typesetPromise([t]).catch(()=>{}),r){const n=r.qStates[r.idx],c=t.querySelector(".variant-content.active .content");if(n.renderedContent&&c){c.innerHTML=n.renderedContent;const{wireCardInputs:l}=await d(async()=>{const{wireCardInputs:u}=await import("./rapido-engine.lNkDjjL2.js").then(a=>a.h);return{wireCardInputs:u}},__vite__mapDeps([3,2,4,5]));l(t)}else A(t,n);n.studentAnswer!=null&&requestAnimationFrame(()=>ue(t,n)),n.status==="answered"||n.status==="incorrect"?q(t):le(t)}}function le(t){const e=t.querySelector(".variant-content.active");if(!e)return;const r=()=>{const c=[...e.querySelectorAll(".rapido-input")],l=[...e.querySelectorAll(".rapido-vf-wrap")],u=c.some(b=>b.classList.contains("incorrect"))||l.some(b=>b.querySelector(".rapido-vf-btn.vf-incorrect")),a=c.every(b=>b.classList.contains("correct")||b.classList.contains("incorrect")),p=l.every(b=>!!b.dataset.answered);return u||a&&p};let o=!1;const i=()=>{o||(o=!0,n.disconnect(),q(t),t.querySelector(".btn-validate")?.click())},s=()=>requestAnimationFrame(()=>{r()&&i()}),n=new MutationObserver(()=>{r()&&i()});e.querySelectorAll(".rapido-input").forEach(c=>{c.dataset.autoLockWired!=="1"&&(c.dataset.autoLockWired="1",n.observe(c,{attributes:!0,attributeFilter:["class"]}),c.addEventListener("blur",s),c.addEventListener("keydown",l=>{(l.key==="Enter"||l.key==="Tab")&&s()}))}),e.querySelectorAll(".rapido-vf-wrap").forEach(c=>{c.dataset.autoLockWired!=="1"&&(c.dataset.autoLockWired="1",n.observe(c,{attributes:!0,attributeFilter:["data-answered"],subtree:!0}))}),e.querySelectorAll(".rapido-vf-btn").forEach(c=>{c.dataset.autoLockWired!=="1"&&(c.dataset.autoLockWired="1",c.addEventListener("click",s))})}function A(t,e){const r=t.querySelector(".variant-content.active");if(!r)return;const o=r.querySelector(".content");if(o&&o.innerHTML.trim())o.querySelectorAll("input").forEach(i=>{i.type==="checkbox"||i.type==="radio"?i.checked?i.setAttribute("checked",""):i.removeAttribute("checked"):i.setAttribute("value",i.value||"")}),o.querySelectorAll("select").forEach(i=>{i.querySelectorAll("option").forEach(n=>n.removeAttribute("selected"));const s=i.options[i.selectedIndex];s&&s.setAttribute("selected","")}),e.renderedContent=o.innerHTML;else{const i=r.querySelector('h2, h3, .ru-title, .ap-title, [class$="-title"]');i?.textContent?.trim()&&(e.renderedContent=i.textContent.trim())}}function ue(t,e){const r=t.querySelector("math974-axe-gradue");r&&e.studentAnswer!=null&&typeof r.draw=="function"&&(r._studentAnswer=e.studentAnswer,r.draw())}function S(){if(!location.pathname.includes("/automaths/arcade-mix"))return!1;const e=new URLSearchParams(location.search).get("source")||"3e-DNB",r=(typeof window<"u"?window.__AM_BASE__||window.__BASE_URL__:"")||"",o=e==="cycle3"?`${r}/automaths/6e/`:`${r}/automaths/3e-dnb/`;return window.location.href=o,!0}async function _(t,e){const r=t._arcade;if(!r)return;if(t.removeEventListener("confetti",r.onConfetti),r.onValidation&&t.removeEventListener("validation-result",r.onValidation),r.timerId&&clearInterval(r.timerId),r.hudRO?.disconnect(),document.body.style.removeProperty("--arc-hud-h"),document.body.style.removeProperty("--arc-tc-bg"),document.body.style.removeProperty("--arc-tc-card-border"),document.body.style.removeProperty("--arc-tc-border"),document.body.style.removeProperty("--arc-tc-text"),r.hud?.remove(),r.onSwipeStart&&document.removeEventListener("touchstart",r.onSwipeStart),r.onSwipeEnd&&document.removeEventListener("touchend",r.onSwipeEnd),Array.isArray(r._hidden)?r._hidden.forEach(f=>{f.style.visibility=""}):(r._hiddenBullets&&(r._hiddenBullets.style.visibility=""),r._hiddenOneUp&&(r._hiddenOneUp.style.visibility="")),r._arcBulletsNav&&r._arcBulletsOriginalHTML!=null){r._arcBulletsNav.innerHTML=r._arcBulletsOriginalHTML,r._arcBulletsNav.classList.remove("arc-bullets-nav"),d(()=>import("./rapido-engine.lNkDjjL2.js").then(m=>m.h),__vite__mapDeps([3,2,4,5])).then(m=>m.wireBullets?.(t)).catch(()=>{});const f=t.querySelector(".btn-1up");f&&(f.style.visibility="",R(f,t))}document.body.classList.remove("arcade-active");const o=t.querySelector(".q-num");o&&t._arcadeQNumOriginal!=null&&(o.textContent=t._arcadeQNumOriginal,delete t._arcadeQNumOriginal);const i=r;if(delete t._arcade,!e){S();return}const s=v(t),n=s?.id||s?.slug||s?._mixRef||s?.ref||null;let c=null;if(n){try{c=await d(()=>import("./arcade-storage.ZQJxh7Gb.js"),[])}catch{}if(c)try{c.saveResult("arcade",n,{mode:i.mode,score:i.score,total:i.queue.length,qStates:i.qStates})}catch{}}const l=c&&n?c.getStats("arcade",n):null,u=l&&l.bestScore===i.score&&l.bestTotal===i.queue.length&&l.totalAttempts>1&&i.score/i.queue.length>l.bestScore/l.bestTotal-.001,a=document.createElement("div");a.className="arc-modal-backdrop";const p=Math.round(r.score/r.queue.length*100),b=r.score===r.queue.length?"🏆🏆🏆":p>=70?"🏆🏆":p>=40?"🏆":"💪";let g="";if(l&&l.totalAttempts>1&&l.bestTotal>0){const f=Math.round(l.bestScore/l.bestTotal*100),m=l.bestScoreMode?w[l.bestScoreMode]||l.bestScoreMode:"?";g=u?'<p class="arc-modal-record">🎉 Nouveau record battu !</p>':`<p class="arc-modal-history">Meilleur score : <strong>${l.bestScore}/${l.bestTotal}</strong> (${f} %, ${m}) · ${l.totalAttempts} essais</p>`}a.innerHTML=`
    <div class="arc-modal" role="dialog" aria-modal="true">
      <h2 class="arc-modal-title">${b} 1UP terminé !</h2>
      <p class="arc-modal-sub">
        Mode : <strong>${w[r.mode]}</strong><br>
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
  `,document.body.appendChild(a),a.querySelector('[data-action="corriges"]').addEventListener("click",()=>{a.remove(),pe(t,i)}),a.querySelector('[data-action="replay"]').addEventListener("click",()=>{a.remove();const f={...i.timeSec?{timeSec:i.timeSec}:{},remixFrom:i};I(t,i.mode,f)}),a.querySelector('[data-action="newmode"]').addEventListener("click",()=>{a.remove(),T(t)}),a.querySelector('[data-action="quit"]').addEventListener("click",()=>{a.remove(),S()})}function pe(t,e){if(!e?.queue?.length)return;const r=v(t),o=e.queue.length,i=e.queue.map((u,a)=>{const p=r?.variantes?.[u]||{},b=e.qStates?.[a]||{status:"none",studentAnswer:null},g=e.pinnedConfigs?.[a]||null,f=b.renderedContent||null,m=f||g?.content||p.content||p.texte||p.title||(p.type?`Exercice : ${String(p.type).replace(/-/g," ")}`:"(énoncé non disponible)"),h=!!f,M=p._sourceTitle||"";return{i:a,vIdx:u,status:b.status,studentAnswer:b.studentAnswer,content:m,isRendered:h,gs:p.gs,sourceTitle:M,niveau:p.niveau}}),s={answered:{label:"✓ Correct",cls:"arc-corr-status--ok"},incorrect:{label:"✗ Faux",cls:"arc-corr-status--ko"},passed:{label:"⏭ Passée",cls:"arc-corr-status--pass"},none:{label:"✗ Non répondue",cls:"arc-corr-status--ko"}},n=document.createElement("div");n.className="arc-modal-backdrop arc-corriges-backdrop",n.innerHTML=`
    <div class="arc-modal arc-corriges-modal" role="dialog" aria-modal="true">
      <h2 class="arc-modal-title">📝 Corrigés</h2>
      <p class="arc-modal-sub">
        Score : <strong>${e.score} / ${o}</strong> — revois chaque question pour comprendre tes erreurs.
      </p>
      <div class="arc-corr-selector" role="tablist">
        ${i.map(u=>{const a=s[u.status]||s.none;return`<button class="arc-corr-dot ${a.cls}" data-i="${u.i}"
            role="tab" aria-label="Question ${u.i+1} ${a.label}">
            ${u.i+1}
          </button>`}).join("")}
      </div>
      <div class="arc-corr-detail" id="arc-corr-detail" role="tabpanel"></div>
      <div class="arc-recap-actions">
        <button class="arc-modal-cancel" data-action="back">← Retour au bilan</button>
      </div>
    </div>
  `,document.body.appendChild(n);const c=n.querySelector("#arc-corr-detail"),l=u=>{const a=i[u];if(!a)return;n.querySelectorAll(".arc-corr-dot").forEach(h=>h.classList.toggle("arc-corr-dot--active",Number(h.dataset.i)===u));const p=s[a.status]||s.none,b=a.studentAnswer!=null?`<div class="arc-corr-line"><span class="arc-corr-label">Ta réponse :</span> <strong>${a.studentAnswer}</strong></div>`:"",g=a.sourceTitle?`<div class="arc-corr-source">📄 ${a.sourceTitle}${a.gs?` — ${a.gs}`:""}</div>`:a.gs?`<div class="arc-corr-source">${a.gs}</div>`:"",m=a.isRendered&&(a.status==="incorrect"||a.status==="none"||a.status==="passed")?`<div class="arc-corr-correction-label">Correction :</div>
         <div class="arc-corr-content arc-corr-content--correction">${be(a.content)}</div>`:"";c.innerHTML=`
      <div class="arc-corr-head">
        <span class="arc-corr-status ${p.cls}">${p.label}</span>
        ${g}
      </div>
      <div class="arc-corr-body">
        <div class="arc-corr-content">${a.isRendered?a.content:fe(a.content)}</div>
        ${b}
        ${m}
      </div>
    `,window.MathJax?.typesetPromise&&window.MathJax.typesetPromise([c]).catch(()=>{})};n.querySelectorAll(".arc-corr-dot").forEach(u=>{u.addEventListener("click",()=>l(Number(u.dataset.i)))}),n.querySelector('[data-action="back"]').addEventListener("click",()=>{n.remove(),t._arcade=e,_(t,!0)}),l(0)}function be(t){if(!t)return"";const e=document.createElement("div");return e.innerHTML=t,e.querySelectorAll("input.rapido-input").forEach(r=>{const o=r.getAttribute("data-solution");o!=null&&r.setAttribute("value",o),r.classList.add("correct"),r.classList.remove("incorrect")}),e.querySelectorAll("select.rapido-input").forEach(r=>{const o=r.getAttribute("data-solution");if(r.querySelectorAll("option").forEach(i=>i.removeAttribute("selected")),o!=null){const i=[...r.options].find(s=>s.value===o);i&&i.setAttribute("selected","")}r.classList.add("correct"),r.classList.remove("incorrect")}),e.querySelectorAll(".rapido-vf-wrap").forEach(r=>{const o=r.getAttribute("data-solution");r.querySelectorAll(".rapido-vf-btn").forEach(i=>{i.classList.remove("vf-correct","vf-incorrect"),i.getAttribute("data-choice")===o&&i.classList.add("vf-correct")})}),e.querySelectorAll("input.fig-inp").forEach(r=>{const o=r.getAttribute("data-solution");o!=null&&r.setAttribute("value",o),r.classList.add("correct"),r.classList.remove("incorrect")}),e.innerHTML}function fe(t){return t?String(t).replace(/\[\?[^\]]*\]/g,'<span class="arc-corr-blank">…</span>').replace(/\[=([^\]]*)\]/g,'<span class="arc-corr-blank">…</span>').replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\n/g,"<br>"):""}export{W as createArcadeButton,he as mountArcadeButton,k as showArcadeRecap,I as startArcade,ve as tryAutoOpenFromUrl,R as wireArcadeButton};
