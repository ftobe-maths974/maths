import v from"./js-yaml.CwjAzRNl.js";import{T as f}from"./rapido-engine.CN7B9C5e.js";import"./preload-helper.CLcXU_4U.js";import"./rapidos-visuals-integration.qcazsRqN.js";import"./editor.Di92v2Ao.js";const g=`# ─────────────────────────────────────────────────────────────────────────────
# Patterns d'erreur — Zefor 01-retour-unite (variante satisf-schema-entiers)
#
# Couche 4 du modèle Zefor : matrice de diagnostic déterministe des erreurs
# probables d'un élève qui répond directement dans le champ libre.
#
# Sources :
#   • Simard (2012), Petit x n°90 — 7 patterns documentés
#     docs-pedago/articles-scientifiques/simard-2012-petit-x-proportionnalite.pdf
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
`,h=`# ─────────────────────────────────────────────────────────────────────────────
# Patterns d'erreur — Zefor 02-glisse-nombre (×/÷ 10 ; 100 ; 1000)
#
# Couche 4 du modèle Zefor : diagnostic déterministe (zéro IA) des erreurs
# canoniques du glisse-nombre, documentées par éduscol (Annexe 4) et le
# Guide de survie C3 (GS 3.11/3.12).
#
# PAS de champ \`variante:\` → ces patterns s'appliquent à TOUTES les variantes
# de la fiche (entiers comme décimaux).
#
# Les \`match\` sont des valeurs fausses PRÉ-CALCULÉES par randomize() et
# exposées comme variables numériques dans visualData.config :
#   err_virgule  — « 3,15 × 10 = 30,15 » : partie entière glissée, décimales
#                  gardées telles quelles (= answer pour un entier → inerte).
#   err_sens     — sens d'opération inversé (× au lieu de ÷ ou inverse).
#   err_rangs    — glissé d'UN seul rang (= answer si k=10 → inerte).
#   err_inchange — valeur inchangée (= n) : « rien glissé » ou « +0 au bout »
#                  d'un décimal (3,15 → 3,150, même valeur).
#
# Autres vars dispo : n, k, p, answer.
#
# Ordre = priorité (1er match gagne). Pas de match_close ici : sur des
# décimaux petits (0,012…) une tolérance fixe ferait trop de faux positifs ;
# les erreurs non couvertes retombent sur la phase \`erreur_reponse_directe\`.
#
# Tonalité (memory/feedback_zefor974-ton-indices) : socratique + diagnostic
# explicite d'abord (« Je vois ce que tu as fait… »), jamais le résultat en clair.
# ─────────────────────────────────────────────────────────────────────────────

patterns:

  # ── « La virgule se déplace » (erreur nommée par éduscol : 3,15×10 = 30,15) ──
  - id: virgule_deplacee
    severite: forte
    diagnostic: "Virgule déplacée au lieu des chiffres"
    match: "err_virgule"
    indice: |
      Je vois ce que tu as fait : tu as gardé les chiffres après la virgule et
      décalé seulement le début du nombre. Mais **la virgule ne bouge pas** !
      Ce sont **tous les chiffres** qui glissent de [p] rang(s).
    relance: "Dans le glisse-nombre (💡), où va CHAQUE chiffre quand tu fais glisser ?"

  # ── Sens d'opération inversé (× ↔ ÷) ────────────────────────────────────────
  - id: sens_inverse
    severite: forte
    diagnostic: "Sens d'opération inversé"
    match: "err_sens"
    indice: |
      Attention au sens : **multiplier (×) rend plus grand**, **diviser (÷)
      rend plus petit**. Ton résultat va dans le mauvais sens.
    relance: "× par [k] → les chiffres glissent vers la **gauche** ; ÷ par [k] → vers la **droite**. Et toi, dans quel sens ?"

  # ── Mauvais nombre de rangs (glissé d'un seul rang pour ×100 / ×1000) ───────
  - id: mauvais_nombre_rangs
    severite: moyenne
    diagnostic: "Glissé d'un seul rang au lieu de p"
    match: "err_rangs"
    indice: |
      Tu as bien fait glisser les chiffres… mais d'**un seul rang**. Pour [k],
      on glisse de **[p] rangs** (×10 → 1 rang, ×100 → 2 rangs, ×1000 → 3 rangs).
    relance: "Combien de rangs pour [k] ? Recompte, puis fais glisser d'autant."

  # ── Valeur inchangée / « zéro ajouté au bout » d'un décimal ─────────────────
  - id: valeur_inchangee
    severite: moyenne
    diagnostic: "Valeur inchangée (rien glissé / +0 au bout)"
    match: "err_inchange"
    indice: |
      Ton résultat est égal au nombre de départ : aucun chiffre n'a changé de
      rang. Ajouter « un zéro au bout » d'un décimal ne change pas sa valeur —
      ce n'est PAS ça, multiplier ou diviser par [k].
    relance: "Dans le glisse-nombre (💡), fais glisser les chiffres de [p] rang(s)."
`,x=`# ─────────────────────────────────────────────────────────────────────────────
# Patterns d'erreur — Zefor 02 graduer-axe-fraction
#                     (variante \`fragile-placer-0-1\`)
#
# Couche 4 du modèle Zefor : matrice de diagnostic déterministe des erreurs
# probables d'un élève qui place une fraction sur axe gradué.
#
# Source canonique : Cauté, Potier Watkins, He, Dehaene (2026), Journal of
#   Experimental Child Psychology 263, 106373.
#   docs-pedago/articles-scientifiques/caracterisation-erreurs-fractions.pdf
#   Étude DEPP ~26 000 élèves français 6e→2nde sur exactement cet exercice.
#   78 % d'erreur en 6e, 7 patterns d'erreur dominants couvrant ~68 % des
#   réponses fausses. Modèle théorique en 2 stratégies (conversion / partition)
#   avec bugs identifiés à chaque sous-but (cf. Fig. 7 du papier).
#
# Tonalité (cf. memory/feedback_zefor974-ton-indices.md) :
#   1. Socratique — questionner, ne pas asséner
#   2. Diagnostic explicite d'abord — nommer ce que l'élève a fait avant de relancer
#   3. Pas de résultat numérique en clair — uniquement les étapes intermédiaires
#
# Format de chaque pattern :
#   id          slug interne
#   severite    "forte" | "moyenne" | "legere"
#   diagnostic  catégorie courte (interne, pour analyse du corpus)
#   match       expression arithmétique évaluée avec num/den/max ; déclenche
#               si la valeur saisie par l'élève == évaluation (à 0.01 près).
#   indice      texte DSL servi au 1er clic ampoule sur cette erreur
#   relance     texte DSL servi au 2e clic (question socratique)
#
# Variables disponibles dans les expressions match :
#   num     numérateur de la fraction cible
#   den     dénominateur de la fraction cible
#   max   borne max de l'axe (1 pour groupe 1-2, 2 pour groupe 3, 3 pour groupe 4)
#
# L'ordre compte : patterns les plus spécifiques en premier (sinon \`count_units\`
# avalerait \`inverted\` quand num = den, etc.).
# ─────────────────────────────────────────────────────────────────────────────

variante: fragile-placer-0-1

patterns:

  # ── 1. INVERTED : confusion rôle numérateur/dénominateur ────────────────────
  # L'élève répond b/a au lieu de a/b. Très fréquent quand la fraction est
  # « tête en bas » plus simple à traiter (ex. cible 3/6 → réponse 2 = 6/3).
  # Cauté Table 2 : 12.7 % observé pour 3/6.
  - id: inverted
    severite: forte
    diagnostic: "Inversion num/déno (b/a au lieu de a/b)"
    match: "den / num"
    indice: |
      Je vois ce que tu as fait : tu as placé **[den]/[num]** au lieu de
      **[num]/[den]**. Tu as échangé le numérateur et le dénominateur.
      Le **dénominateur**, c'est celui du **bas** : il dit en combien de
      parts on partage l'unité.
    relance: "Dans [num]/[den], lequel est le numérateur, lequel est le dénominateur ?"

  # ── 2. CORRECT RELATIVE TO LINE : confond le segment 0→1 avec tout l'axe ──
  # L'élève prend toute la ligne 0→max comme unité. Sur axe 0→5, pour 1/2 il
  # placerait à 2.5 (= 5 × 1/2). Cauté : 5.9 % pour 3/6 sur axe 0→5.
  # Sur nos axes 0→1, ce pattern n'est pas distinguable (donne la bonne réponse).
  # Sur axes 0→2/3 (groupes 3-4) il devient visible.
  - id: correct_relative_to_line
    severite: forte
    diagnostic: "Unité = axe entier au lieu du segment 0→1"
    match: "max * num / den"
    indice: |
      Je vois ce que tu as fait : tu as pris **tout l'axe** (de 0 à [max])
      comme **1 unité**. Mais l'unité, c'est seulement le segment **de 0 à 1**.
      Les autres segments (1→2, 2→3…) sont d'autres unités.
    relance: "Sur ton axe, où va-t-on de 0 à 1 ? C'est ce segment-là, l'unité."

  # ── 3. COUNT UNITS NUMERATOR : lit juste le numérateur comme entier ────────
  # L'élève répond a au lieu de a/b. Sur axe 0→5, pour 3/6 il place à 3.
  # Cauté Table 2 : 21.1 % pour 3/6. Pattern le plus fréquent.
  # Sur axe 0→1, pas distinguable si num > max (l'élève cliquerait à 1).
  # Sur axe 0→2+, repérable.
  - id: count_units_numerator
    severite: forte
    diagnostic: "Lecture du numérateur seul comme entier"
    match: "num"
    indice: |
      Je vois ce que tu as fait : tu as placé l'**entier [num]** au lieu de
      la **fraction [num]/[den]**. Le numérateur tout seul, ça ne marche pas —
      il faut aussi tenir compte du dénominateur **[den]** qui dit la taille
      de chaque pas.
    relance: "Si tu fais [num] pas d'**une seule unité**, tu vas trop loin. Chaque pas vaut combien ?"

  # ── 4. COUNT UNITS DENOMINATOR : lit juste le dénominateur ─────────────────
  # L'élève répond b. Cauté Table 2 : 12.7 % pour 3/6.
  - id: count_units_denominator
    severite: forte
    diagnostic: "Lecture du dénominateur seul comme entier"
    match: "den"
    indice: |
      Je vois ce que tu as fait : tu as placé l'**entier [den]** (le
      dénominateur). Mais le dénominateur, ce n'est pas une position, c'est
      le **nombre de parts** dans une unité.
    relance: "Quel est le rôle du numérateur [num] dans [num]/[den] ?"

  # ── 5. DECIMAL READING : lit la fraction comme un décimal (a + b/10) ───────
  # L'élève remplace la barre de fraction par une virgule. Pour 3/6, répond
  # 3.6. Cauté Table 2 : 16.2 % pour 3/6.
  - id: decimal_reading
    severite: forte
    diagnostic: "Fraction lue comme décimal (a,b)"
    match: "num + den / 10"
    indice: |
      Je vois ce que tu as fait : tu as lu **[num]/[den]** comme « **[num],[den]** »
      en remplaçant la barre par une virgule. Mais la barre de fraction n'est
      pas une virgule — c'est un **partage en parts égales**.
    relance: "Que signifie le trait dans [num]/[den] ? (indice : partage)"

  # ── 6. DECIMAL READING INVERTED : décimal mais composantes inversées ──────
  # L'élève répond b + a/10. Cauté Table 2 : 15.3 % observé.
  - id: decimal_reading_inverted
    severite: forte
    diagnostic: "Décimal avec composantes inversées (b,a)"
    match: "den + num / 10"
    indice: |
      Tu as lu [num]/[den] comme un **décimal** « [den],[num] » en plus d'inverser
      l'ordre. Deux erreurs : 1) ce n'est pas un décimal, c'est un partage ;
      2) le numérateur est le nombre **du haut**.
    relance: "Qu'est-ce que ça veut dire concrètement, [num]/[den] ?"

  # ── 7. COUNT TENTHS NUMERATOR : a/10 (utilise les dixièmes existants) ──────
  # L'élève voit des graduations en dixièmes sur l'axe et compte a dixièmes.
  # Pour 3/6, place à 0.3. Cauté Table 2 : 6.9 % observé.
  - id: count_tenths_numerator
    severite: moyenne
    diagnostic: "Compte le numérateur en dixièmes"
    match: "num / 10"
    indice: |
      Tu as compté [num] **dixièmes** d'unité. Mais ici, on ne te demande pas
      des dixièmes — on te demande des **[=den]èmes** (parts en [den]).
    relance: "Combien de parts y a-t-il dans ton unité, selon le dénominateur ?"

  # ── 8. MIXED FRACTION : lit a/b comme « 1 + a/b » (entier + fraction) ──────
  # L'élève répond 1 + num/den. Pour 1/2, place à 1.5. Cauté Table 2 : 2.3 %
  # mais plus fréquent quand la fraction est familière (1/2, 1/4).
  - id: mixed_fraction
    severite: legere
    diagnostic: "Lue comme entier + fraction (1 + a/b)"
    match: "1 + num / den"
    indice: |
      Tu as placé **1 + [num]/[den]** au lieu de juste **[num]/[den]**. Tu as
      ajouté 1 unité en plus. La fraction [num]/[den] commence à **0**, pas à 1.
    relance: "Depuis quelle valeur tu pars pour avancer ?"
`,_=`# ─────────────────────────────────────────────────────────────────────────────
# Patterns d'erreur — Zefor 03-volume-cubes (calcul de volume)
#
# Couche 4 Zefor : diagnostic déterministe des erreurs canoniques du
# dénombrement de cubes 3D (Battista 1999, JRME 30(4) + GS 12.4).
#
# PAS de champ \`variante:\` → s'applique aux 4 variantes.
#
# \`match\` = valeurs fausses PRÉ-CALCULÉES par randomize(), exposées comme
# variables numériques dans visualData.config :
#   err_sum   — L + l + h (additionne les dimensions au lieu de multiplier)
#   err_base  — L × l (oublie la hauteur → aire de base)
#   err_full  — L × l × h (pour un solide creusé : oublie de retrancher les
#               cubes enlevés ; = answer pour un pavé plein → inerte)
# Autres vars : lx, ly, lz, answer.
#
# Ordre = priorité (1er match gagne). Pas de match_close (les volumes entiers
# sont petits → trop de faux positifs).
#
# Tonalité (memory/feedback_zefor974-ton-indices) : socratique + diagnostic
# explicite d'abord, jamais le résultat en clair.
# ─────────────────────────────────────────────────────────────────────────────

patterns:

  # ── Modèle additif : L + l + h (Battista : pas de structuration spatiale) ───
  - id: somme_dimensions
    severite: forte
    diagnostic: "Additionne les dimensions au lieu de les multiplier"
    match: "err_sum"
    indice: |
      Je vois ce que tu as fait : tu as **additionné** les dimensions
      ([lx] + [ly] + [lz]). Mais un volume, ce n'est pas L + l + h — c'est
      **combien de petits cubes remplissent** le solide.
    relance: "Combien de cubes dans **une seule couche** (le sol) ? (longueur × largeur)"

  # ── Oubli de la hauteur : L × l = aire de la base (Battista : 1 couche) ─────
  - id: oubli_hauteur
    severite: moyenne
    diagnostic: "Compte une seule couche (oublie les étages)"
    match: "err_base"
    indice: |
      Tu as compté les cubes d'**une couche** (le sol) : [lx] × [ly]. Bravo,
      c'est un bon début ! Mais le solide a **plusieurs étages**.
    relance: "Combien d'étages ([lz]) ? Multiplie ta couche par ce nombre."

  # ── Solide creusé : oublie de retrancher les cubes enlevés ──────────────────
  - id: oubli_retrait
    severite: moyenne
    diagnostic: "Calcule le pavé plein sans retrancher les cubes enlevés"
    match: "err_full"
    indice: |
      Tu as calculé le **pavé plein** ([lx] × [ly] × [lz]). Mais regarde :
      il **manque des cubes** dans ce solide !
    relance: "Combien de cubes ont été enlevés ? Soustrais-les de ton total."
`,m=Object.assign({"../../data/error-patterns/01-retour-unite.yaml":g,"../../data/error-patterns/02-glisse-nombre.yaml":h,"../../data/error-patterns/02-graduer-axe-fraction.yaml":x,"../../data/error-patterns/03-volume-cubes.yaml":_}),q=(()=>{const r={};for(const a of Object.keys(m)){const i=a.match(/\/([^/]+)\.yaml$/)?.[1];if(i)try{r[i]=v.load(m[a])}catch(s){console.error(`[error-patterns] parsing ${a}:`,s)}}return r})();function T(r){if(r==null)return null;const a=String(r).replace(/\s/g,"").replace(",","."),i=parseFloat(a);return isNaN(i)?null:i}function p(r,a,i=.01){return Math.abs(r-a)<i}function E({ref:r,variantId:a,studentValue:i,vars:s}){const u=q[r];if(!u?.patterns||u.variante&&a&&u.variante!==a)return null;const l=T(i);if(l===null)return null;const t=new f;t.reset();for(const[n,e]of Object.entries(s||{}))(typeof e=="number"||e&&typeof e=="object"&&!Array.isArray(e))&&t.variables.set(n,e);const o=s?.a,c=s?.b,d=s?.e;typeof o=="number"&&typeof c=="number"&&typeof d=="number"&&o!==0&&(t.variables.has("answer")||t.variables.set("answer",c/o*d));for(const n of u.patterns)if(n.match)try{const e=t.evaluate(n.match);if(typeof e=="number"&&p(l,e))return n}catch{}for(const n of u.patterns)if(n.match_close)try{const e=t.evaluate(n.match_close);if(typeof e!="number")continue;const b=typeof n.tolerance=="number"?n.tolerance:5;if(!p(l,e)&&Math.abs(l-e)<=b)return n}catch{}return null}export{E as detectErrorPattern};
