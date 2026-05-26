import{T as f,j as x}from"./fullscreen-viewer.Bm1Cdz7m.js";import"./editor.CJZspgfY.js";const h=`# ─────────────────────────────────────────────────────────────────────────────
# Patterns d'erreur — Zefor 01-retour-unite (variante satisf-schema-entiers)
#
# Couche 4 du modèle Zefor : matrice de diagnostic déterministe des erreurs
# probables d'un élève qui répond directement dans le champ libre.
#
# Sources :
#   • Simard (2012), Petit x n°90, public/pdf/IGR12006.pdf — 7 patterns documentés
#     en classe CM2/6e (procédures additives, calculs directs, confusions ÷/×,
#     amalgame tableau, etc.)
#   • Analyse arithmétique des résultats fréquents sur les valeurs (a, b, e)
#
# Tonalité (cf. memory/feedback_zefor974-ton-indices.md) :
#   1. Socratique — questionner l'élève, ne pas asséner
#   2. Diagnostic explicite d'abord — nommer le modèle/erreur AVANT de relancer
#      (« Je vois ce que tu as fait : … » puis question)
#   3. Pas le bon résultat numérique en clair — uniquement les étapes intermédiaires
#
# Format de chaque pattern :
#   id          slug interne (utilisé pour le log de captation)
#   severite    "forte" | "moyenne" | "legere" — couleur ou priorité d'affichage
#   diagnostic  catégorie courte (interne, pour l'analyse/le corpus)
#   match       expression arithmétique évaluée avec a/b/e ; le pattern se déclenche
#               si la valeur saisie par l'élève == évaluation (à 0.01 près).
#   match_close (optionnel) — match flou : la valeur saisie est proche de
#               l'expression à ± tolerance (utile pour les erreurs de calcul
#               sur la bonne procédure).
#   tolerance   (optionnel, défaut 5) — pour match_close
#   indice      texte DSL (peut contenir [ctx.plur], [a], [=b/a], etc.)
#               affiché au 1er clic ampoule sur cette erreur. Diagnostic + question.
#   relance     texte DSL — affiché au 2e clic. Question socratique pour avancer.
#
# Le détecteur (couche 5 — src/utils/zefor974/error-detector.js) évalue les
# \`match\` en cascade et retourne le PREMIER qui correspond. L'ordre dans ce
# fichier compte donc : on met les patterns les plus spécifiques en premier
# (ex. erreur_calcul_proche en dernier, sinon il avalerait tout).
# ─────────────────────────────────────────────────────────────────────────────

variante: satisf-schema-entiers

patterns:

  # ── Modèle additif persistant (Simard problème 1, ~10-15 % des erreurs) ─────
  - id: additif_persistant
    severite: forte
    diagnostic: "Modèle additif appliqué à de la proportionnalité"
    match: "b + (e - a)"
    indice: |
      Je vois ce que tu as fait : tu as compté **+1 [ctx.sing] = +1 €**.
      C'est un raisonnement **additif**. Mais regarde l'énoncé :
      **[a] [ctx.plur] coûtent [b] €** — est-ce qu'**une seule** [ctx.sing]
      coûte vraiment 1 € ?
    relance: "Quel est le prix d'**un seul** [ctx.sing] ?"

  - id: soustractif_persistant
    severite: forte
    diagnostic: "Modèle additif inversé"
    match: "b - (e - a)"
    indice: |
      Tu as soustrait. Mais on cherche le prix de **plus** de [ctx.plur]
      que dans l'énoncé — donc le total devrait **augmenter**, pas diminuer.
    relance: "Combien coûte 1 [ctx.sing] ?"

  # ── Calculs directs sans modélisation (Simard §2.2, ~5-10 %) ────────────────
  - id: multiplie_tout
    severite: moyenne
    diagnostic: "Multiplication des deux nombres de l'énoncé (b × e)"
    match: "b * e"
    indice: |
      Tu as multiplié **[b] × [e]**. Réfléchis : si [a] [ctx.plur] coûtent
      [b] €, alors [e] [ctx.plur] coûtent **plus** que [b] €, mais sûrement
      **moins** que [=b*e] €. Est-ce que [=b*e] € pour [e] [ctx.plur] te
      semble réaliste ?
    relance: "Quel est le prix d'**une seule** [ctx.sing] ?"

  - id: ae_au_lieu_de_ep
    severite: moyenne
    diagnostic: "Multiplication des deux quantités (a × e)"
    match: "a * e"
    indice: |
      Tu as multiplié les deux quantités : **[a] × [e]**. Mais on cherche
      un **prix en euros**, pas un nombre de [ctx.plur].
    relance: "Quel est le prix d'**un** [ctx.sing] ?"

  - id: ab_au_lieu_de_ep
    severite: moyenne
    diagnostic: "Multiplication des deux nombres de la 1ʳᵉ ligne (a × b)"
    match: "a * b"
    indice: |
      Tu as multiplié [a] × [b]. Mais regarde : [a] [ctx.plur] coûtent
      **déjà** [b] € — il ne faut pas re-multiplier par [a].
    relance: "Combien coûte **une seule** [ctx.sing] ?"

  # ── Procédure correcte mais incomplète (Simard, élève bloque à mi-chemin) ───
  - id: prix_unitaire_seul
    severite: legere
    diagnostic: "Retour à l'unité bien fait mais pas multiplié par e"
    match: "b / a"
    indice: |
      Bravo, tu as trouvé le **prix d'une [ctx.sing]** : [=b/a] €. C'est la
      première étape du retour à l'unité. Mais on te demande le prix de
      **[e] [ctx.plur]**, pas d'une seule.
    relance: "Maintenant, combien coûtent [e] [ctx.plur] ?"

  # ── Confusion ÷ / × (Simard §1.4 + problème 3) ──────────────────────────────
  - id: division_inversee
    severite: moyenne
    diagnostic: "Inversion ÷/× dans le retour à l'unité"
    match: "(b * a) / e"
    indice: |
      Je vois que tu as divisé par [e] au lieu de [a]. Souviens-toi : on
      part de **[a] [ctx.plur]** et on veut aller à **1 seule** [ctx.sing]
      d'abord. C'est par [a] qu'on divise.
    relance: "Quel est le prix d'**un seul** [ctx.sing] ?"

  # ── Confusions de grandeur (élève recopie un nombre de l'énoncé) ────────────
  - id: confusion_grandeur_e
    severite: forte
    diagnostic: "Élève recopie la quantité cible au lieu d'un prix"
    match: "e"
    indice: |
      Tu as écrit **[e]**, mais c'est le **nombre** de [ctx.plur], pas leur
      prix. Le prix se mesure en **euros**.
    relance: "Combien d'euros coûtent [e] [ctx.plur] ?"

  - id: confusion_grandeur_a
    severite: forte
    diagnostic: "Élève recopie la quantité initiale au lieu d'un prix"
    match: "a"
    indice: |
      Tu as écrit **[a]**, mais c'est le **nombre** de [ctx.plur] du début,
      pas leur prix.
    relance: "Combien coûtent [e] [ctx.plur] en euros ?"

  - id: confusion_grandeur_b
    severite: moyenne
    diagnostic: "Élève recopie le prix de [a] au lieu de calculer celui de [e]"
    match: "b"
    indice: |
      Tu as écrit **[b] €**, mais c'est le prix de **[a] [ctx.plur]**, pas
      de **[e] [ctx.plur]**.
    relance: "Quel est le prix d'**une seule** [ctx.sing] ?"

  # ── Approximations douteuses ────────────────────────────────────────────────
  - id: double_b
    severite: legere
    diagnostic: "Approximation : doublement sans raison"
    match: "b * 2"
    indice: |
      Tu as doublé le prix. D'où vient le « 2 » ? Vérifie : pour passer de
      [a] [ctx.plur] à [e] [ctx.plur], par combien tu multiplies vraiment ?
    relance: "Quel est le prix d'**un** [ctx.sing] ?"

  # ── Erreur de calcul sur la bonne procédure (DOIT être en DERNIER) ──────────
  # Match flou : tolérance autour de la bonne réponse. Si le détecteur trouve un
  # pattern exact plus haut, il sert celui-là ; sinon ce match_close attrape les
  # erreurs « techniques » (élève qui a la méthode mais s'est trompé en calcul).
  - id: erreur_calcul_proche
    severite: legere
    diagnostic: "Bonne procédure, erreur arithmétique"
    match_close: "answer"
    tolerance: 5
    indice: |
      Ta démarche a l'air bonne, mais le calcul est un peu faux. Le prix
      d'une [ctx.sing] est **[=b/a] €**.
    relance: "Refais le calcul : [=b/a] × [e] = ?"
`,p=Object.assign({"../../data/error-patterns/01-retour-unite.yaml":h}),v=(()=>{const r={};for(const t of Object.keys(p)){const i=t.match(/\/([^/]+)\.yaml$/)?.[1];if(i)try{r[i]=x.load(p[t])}catch(s){console.error(`[error-patterns] parsing ${t}:`,s)}}return r})();function g(r){if(r==null)return null;const t=String(r).replace(/\s/g,"").replace(",","."),i=parseFloat(t);return isNaN(i)?null:i}function m(r,t,i=.01){return Math.abs(r-t)<i}function y({ref:r,variantId:t,studentValue:i,vars:s}){const u=v[r];if(!u?.patterns||u.variante&&t&&u.variante!==t)return null;const c=g(i);if(c===null)return null;const a=new f;a.reset();for(const[n,e]of Object.entries(s||{}))(typeof e=="number"||e&&typeof e=="object"&&!Array.isArray(e))&&a.variables.set(n,e);const l=s?.a,o=s?.b,d=s?.e;typeof l=="number"&&typeof o=="number"&&typeof d=="number"&&l!==0&&(a.variables.has("answer")||a.variables.set("answer",o/l*d));for(const n of u.patterns)if(n.match)try{const e=a.evaluate(n.match);if(typeof e=="number"&&m(c,e))return n}catch{}for(const n of u.patterns)if(n.match_close)try{const e=a.evaluate(n.match_close);if(typeof e!="number")continue;const b=typeof n.tolerance=="number"?n.tolerance:5;if(!m(c,e)&&Math.abs(c-e)<=b)return n}catch{}return null}export{y as detectErrorPattern};
