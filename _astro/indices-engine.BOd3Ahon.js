const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/rapido-engine.C9q4Hfwp.js","_astro/rapidos-visuals-integration.DWCmnuP8.js","_astro/editor.CJZspgfY.js","_astro/error-detector.UCHcg4cc.js"])))=>i.map(i=>d[i]);
import{_ as x}from"./editor.CJZspgfY.js";import{T as E,j as A}from"./rapido-engine.C9q4Hfwp.js";import"./rapidos-visuals-integration.DWCmnuP8.js";const C=`# Matrice d'indices — fiche 24.04 retour à l'unité (cycle 3)
#
# BROUILLON v0 — à relire/corriger par Florian (style, formulation, pédago).
#
# Format :
#   variantes:
#     <id-variante>:
#       phases: { <nom-phase>: { description, n1, n2, n3 } }
#       erreurs_types: [...]
#
# Phases du visuel retour-unite (ordre de révélation des inputs) :
#   initial         — A, B, E recopiés depuis l'énoncé
#   unite           — chiffre 1 dans la case ligne 2 gauche
#   div_gauche      — facteur ÷a entre la quantité [a] et 1 (ligne 1 → ligne 2)
#   div_droite      — même facteur ÷a côté euros (symétrie)
#   prix_unitaire   — résultat [b]÷[a] = prix d'un [ctx.sing]
#   mult_gauche     — facteur ×e entre 1 et [e] (ligne 2 → ligne 3)
#   mult_droite     — même facteur ×e côté euros
#   reponse_finale  — prix de [e] [ctx.plur] = [p] × [e]
#
# Variables dispo dans les templates (mêmes que dans le content YAML automaths) :
#   [a]   quantité initiale
#   [b]   prix total initial (= a × p)
#   [e]   quantité cible
#   [p]   prix unitaire (= b/a)
#   [ctx.sing] [ctx.plur] [ctx.lieu] [ctx.art_sing]
#
# Niveaux d'indice (progressifs, l'élève peut en demander plusieurs) :
#   n1 — reformulation, renvoie à l'énoncé, pas de pointage spatial
#   n2 — pointe la zone exacte sans révéler le calcul
#   n3 — décompose le calcul, mais ne donne JAMAIS le résultat numérique

variantes:

  satisf-schema-entiers:

    phases:

      # ── Phase Zefor : champ libre vide (aucune réponse tentée) ───────────
      reponse_directe:
        description: L'élève voit le champ libre vide, n'a pas encore répondu
        n1: "Relis bien l'énoncé : **[a] [ctx.plur] coûtent [b] €**. On te demande le prix de **[e] [ctx.plur]**. Quelle stratégie pourrais-tu essayer ?"
        n2: "Le plus simple, c'est de chercher d'abord le **prix d'un seul** [ctx.sing]. Ensuite, tu sauras combien coûtent [e] [ctx.plur]."
        n3: "Calcule [b] ÷ [a] pour trouver le prix d'**un** [ctx.sing], puis multiplie ce résultat par [e]."

      # ── Phase Zefor : erreur dans le champ libre, pattern non détecté ────
      # (Si un pattern est détecté, error-detector prend le pas et sert
      # ses propres indices/relances. Cette phase n'est servie qu'en
      # fallback quand l'erreur ne matche aucun pattern connu.)
      erreur_reponse_directe:
        description: Réponse incorrecte sans pattern d'erreur reconnu
        n1: "Ta réponse n'est pas la bonne, mais je n'arrive pas à voir comment tu as raisonné. Refais le calcul à voix haute : que cherches-tu exactement ?"
        n2: "Reprends depuis le début : [a] [ctx.plur] coûtent [b] €. Combien coûte **une seule** [ctx.sing] ?"
        n3: "Calcule [b] ÷ [a] = prix d'un [ctx.sing]. Puis × [e]."

      # ── Phases legasy (si l'élève déplie le schéma) ──────────────────────
      initial:
        description: L'élève recopie a, b, e depuis l'énoncé dans le tableau
        n1: "Relis l'énoncé. Tu as 3 nombres à recopier : combien de [ctx.plur] au début, combien d'euros au total, et combien de [ctx.plur] à la fin."
        n2: "Le tableau a 3 lignes. Ligne 1 = ce que tu sais (à gauche la quantité, à droite le prix total). Ligne 3 = ce que tu cherches (à gauche la nouvelle quantité). Recopie les nombres de l'énoncé aux bonnes places."
        n3: "Ligne 1 gauche : **[a]**. Ligne 1 droite : **[b]**. Ligne 3 gauche : **[e]**."

      unite:
        description: L'élève écrit 1 dans la case unité (ligne 2 gauche)
        n1: "La méthode du retour à l'unité : avant de calculer pour beaucoup, on calcule d'abord pour **un seul**."
        n2: "Dans la 2ᵉ ligne à gauche, tu veux dire « pour 1 [ctx.sing] ». Quel chiffre représente « un » ?"
        n3: "Écris **1** dans la case du milieu à gauche."

      div_gauche:
        description: Facteur ÷a entre la quantité [a] et 1
        n1: "Tu passes de **[a]** à **1**. Du plus grand au plus petit : tu fais quelle opération ?"
        n2: "[a] divisé par quel nombre donne 1 ?"
        n3: "[a] ÷ [a] = 1. Écris **÷[a]** comme facteur (entre la ligne 1 et la ligne 2, côté gauche)."

      div_droite:
        description: Facteur ÷a côté euros (symétrie)
        n1: "Règle du tableau de proportionnalité : ce que tu fais à gauche, tu le fais aussi à droite."
        n2: "À gauche tu viens d'écrire ÷[a]. À droite (côté euros), tu fais quoi ?"
        n3: "Aussi **÷[a]** — même facteur des deux côtés."

      prix_unitaire:
        description: Calcul de [b] ÷ [a] = [p] (prix d'un [ctx.sing])
        n1: "Maintenant tu cherches le prix d'**un seul** [ctx.sing]."
        n2: "Combien de fois [a] entre dans [b] ?"
        n3: "Pose la division [b] ÷ [a] (ou cherche dans tes tables de [a]). Le résultat = prix d'un [ctx.sing]."

      mult_gauche:
        description: Facteur ×e entre 1 et [e]
        n1: "Maintenant tu passes de **1** [ctx.sing] à **[e]** [ctx.plur]. Du petit vers le grand : quelle opération ?"
        n2: "1 multiplié par quel nombre donne [e] ?"
        n3: "1 × [e] = [e]. Écris **×[e]** comme facteur (entre la ligne 2 et la ligne 3, côté gauche)."

      mult_droite:
        description: Facteur ×e côté euros (symétrie)
        n1: "Pareil qu'avant : même opération des deux côtés du tableau."
        n2: "À gauche tu viens d'écrire ×[e]. À droite ?"
        n3: "Aussi **×[e]**."

      reponse_finale:
        description: Prix de [e] [ctx.plur] = [p] × [e]
        n1: "Tu connais maintenant le prix d'un [ctx.sing]. Combien coûtent [e] [ctx.plur] alors ?"
        n2: "Multiplie le prix unitaire (la case que tu viens de trouver) par [e]."
        n3: "Calcule : prix d'un [ctx.sing] × [e]. C'est ta réponse finale."

    # Erreurs détectables sans LLM (matching simple sur la valeur saisie).
    # Quand l'élève saisit une réponse qui matche, on sert directement cet indice
    # plutôt que de monter en n1/n2/n3 séquentiellement.
    erreurs_types:

      - id: case_unite_pas_1
        description: "Élève met autre chose que 1 dans la case unité (souvent [a] ou [b])"
        cible_phase: unite
        indice: "Dans la case du milieu à gauche, on veut « UN » en chiffre. Juste **1**, ni plus ni moins."

      - id: facteur_inverse_div
        description: "Élève écrit × au lieu de ÷ entre les lignes 1 et 2"
        cible_phase: div_gauche
        indice: "Tu passes de [a] à 1 (plus petit). Plus petit = **division**, pas multiplication."

      - id: facteur_inverse_mult
        description: "Élève écrit ÷ au lieu de × entre les lignes 2 et 3"
        cible_phase: mult_gauche
        indice: "Tu passes de 1 à [e] (plus grand). Plus grand = **multiplication**, pas division."

      - id: prix_unitaire_recopie_b
        description: "Élève recopie [b] dans la case prix unitaire (oublie la division)"
        cible_phase: prix_unitaire
        indice: "Attention : [b] €, c'est le prix de **[a]** [ctx.plur], pas d'un seul. Il faut diviser par [a]."

      - id: reponse_finale_recopie_b
        description: "Élève recopie [b] comme réponse finale"
        cible_phase: reponse_finale
        indice: "[b] €, c'est le prix de **[a]** [ctx.plur], pas de [e]. Repars du prix unitaire et multiplie par [e]."

      - id: dissymetrie_facteurs
        description: "Facteurs différents à gauche et à droite (rupture du tableau)"
        cible_phase: div_droite|mult_droite
        indice: "Dans un tableau de proportionnalité, **le même facteur** apparaît à gauche et à droite. Vérifie."
`,L=`# Matrice d'indices — fiche Zefor 2 graduer-axe-fraction (cycle 3, GS 2.5)
#
# Phases calquées sur la méthode A/B/C/D du guide-c3 p.6 + phases Zefor pour
# les états « pas de réponse » et « réponse fausse sans pattern reconnu ».
#
# Phases (toutes variantes partagent les mêmes data-phase grâce au wrapper) :
#   reponse_directe         — l'élève n'a pas encore agi (axe vide ou input vide)
#   erreur_reponse_directe  — réponse fausse SANS pattern d'erreur reconnu
#                              (les patterns reconnus sont servis par error-detector)
#   identifier_denominateur — A : « combien de parts dans 1 unité (= dénominateur) »
#   identifier_unite        — B : « 1 pas = 1/d »
#   compter_pas             — C : « combien de pas (= numérateur) »
#   placer_le_curseur       — D : action finale (clic axe en PLACER, taper {answer} en LIRE)
#
# Architecture : 2 jeux de phases factorisés par YAML anchors —
# \`placer-base\` (PLACER) et \`lire-base\` (LIRE) — réutilisés sur les 5
# variantes de chaque mode (fragile / satisf / satisf-pls / ts / expert).
# Le ton peut être affiné par variante en surchargeant l'anchor.
#
# Variables disponibles dans les templates :
#   [num]  numérateur de la fraction cible
#   [den]  dénominateur
#   [val]  valeur décimale (rarement utilisé — on parle en fraction)
#   [max]  borne max de l'axe (1, 2 ou 3 selon variante)
#
# Niveaux d'indice (l'élève peut en demander plusieurs, escalade n1→n2→n3) :
#   n1 — reformulation, renvoie à l'énoncé, pas de pointage spatial
#   n2 — pointe la zone exacte, sans révéler le calcul
#   n3 — décompose la procédure, mais ne donne JAMAIS la réponse en clair
# ─────────────────────────────────────────────────────────────────────────────

variantes:

  # ═════════ JEU PLACER (V1, V3, V5, V7, V9) ═══════════════════════════════
  # Tous les variantes PLACER réutilisent ce jeu (anchor &placer-base).

  fragile-placer-0-1: &placer-base
    phases:

      reponse_directe:
        description: L'élève voit l'axe vide, n'a pas encore placé son point
        n1: "Tu cherches à placer la fraction **[num]/[den]**. La méthode du guide a quatre étapes : **A** (dénominateur), **B** (1 pas), **C** (compter), **D** (placer). On commence par quoi ?"
        n2: "Ouvre le panneau **🔧 Aide pas-à-pas** sous l'axe. Il te guide étape par étape."
        n3: "1) Dénominateur = [den] → partage l'unité (0→1) en [den] parts. 2) 1 pas = 1/[den]. 3) Numérateur = [num] → avance de [num] pas depuis 0. 4) Clique."

      erreur_reponse_directe:
        description: Réponse fausse, aucun pattern d'erreur reconnu
        n1: "Ta réponse n'est pas la bonne. Refais le raisonnement à voix haute : que représente le **dénominateur** [den] ? Et le **numérateur** [num] ?"
        n2: "Le dénominateur [den] te dit en combien de parts partager **1 unité** (segment 0→1). Le numérateur [num] te dit combien de parts tu prends depuis 0."
        n3: "Recompte : depuis 0, avance de **[num]** pas où chaque pas vaut **1/[den]** d'unité."

      identifier_denominateur:
        description: Step A — l'élève cherche le nombre de parts dans l'unité
        n1: "Le **dénominateur** d'une fraction te dit en combien de parts partager 1 unité. Regarde [num]/[den] : c'est le nombre du **bas**."
        n2: "Dans **[num]/[den]**, le dénominateur c'est **[den]** (en bas)."
        n3: "Réponse : **[den]**. Il y a donc [den] pas dans 1 unité."

      identifier_unite:
        description: Step B — l'élève cherche la valeur d'un pas
        n1: "Une unité (segment 0→1) contient [den] pas égaux. Combien vaut 1 pas ?"
        n2: "1 pas = 1 unité divisé par [den] pas = **1 / [den]**."
        n3: "Saisis **1** au numérateur et **[den]** au dénominateur."

      compter_pas:
        description: Step C — l'élève cherche combien de pas avancer
        n1: "Le **numérateur** de [num]/[den] te dit combien de pas tu prends depuis 0. C'est le nombre du **haut**."
        n2: "Dans **[num]/[den]**, le numérateur c'est **[num]**."
        n3: "Réponse : **[num]**. Pars de 0 et avance de [num] pas (chacun de 1/[den])."

      placer_le_curseur:
        description: Step D — l'élève doit cliquer sur l'axe
        n1: "Compte [num] graduations depuis 0, puis **clique précisément** sur cette position."
        n2: "Le curseur se cale automatiquement sur la graduation la plus proche."
        n3: "Clique sur la **[num]ᵉ graduation à partir de 0**. C'est la position de [num]/[den]."

  # Les autres PLACER réutilisent placer-base via l'anchor.
  satisf-placer:        *placer-base
  satisf-placer-pls:    *placer-base
  ts-placer:            *placer-base
  expert-placer-entier: *placer-base


  # ═════════ JEU LIRE (V2, V4, V6, V8, V10) ════════════════════════════════
  # Tous les variantes LIRE réutilisent ce jeu (anchor &lire-base).

  fragile-lire-0-1: &lire-base
    phases:

      reponse_directe:
        description: L'élève voit l'axe et un point, n'a pas encore tapé la réponse
        n1: "Tu cherches l'abscisse du point sur l'axe. La méthode du guide : **A** (combien de parts dans 1 unité ?), **B** (1 pas = ?), **C** (combien de pas depuis 0 jusqu'au point ?), **D** (réponse = fraction)."
        n2: "Ouvre le panneau **🔧 Aide pas-à-pas** sous l'axe. Il te guide étape par étape."
        n3: "1) Compte les pas entre 0 et 1 (= dénominateur). 2) 1 pas = 1/d. 3) Compte les pas entre 0 et le point (= numérateur). 4) Tape numérateur/dénominateur."

      erreur_reponse_directe:
        description: Réponse fausse, aucun pattern d'erreur reconnu
        n1: "Ta réponse n'est pas la bonne. Vérifie : combien de parts entre 0 et 1 ? Et combien de pas entre 0 et le point ?"
        n2: "L'abscisse du point = (nombre de pas depuis 0) / (nombre de parts dans 1 unité). C'est num/den."
        n3: "Recompte depuis 0 jusqu'au point. Chaque pas vaut 1/[den]. Le point est à [num] pas → abscisse = [num]/[den]."

      identifier_denominateur:
        description: Step A — l'élève cherche en combien de parts l'unité est divisée
        n1: "Regarde l'axe : combien y a-t-il de **petits pas** entre **0** et **1** ? C'est le dénominateur."
        n2: "Compte les graduations entre 0 et 1 (sans compter 0). Tu en trouveras **[den]**."
        n3: "Réponse : **[den]** parts dans 1 unité."

      identifier_unite:
        description: Step B — l'élève cherche la valeur d'un pas
        n1: "Une unité contient [den] pas égaux. Donc 1 pas = ?"
        n2: "1 pas = 1 unité divisé par [den] pas = **1 / [den]**."
        n3: "Saisis **1** au numérateur et **[den]** au dénominateur."

      compter_pas:
        description: Step C — l'élève cherche combien de pas entre 0 et le point
        n1: "Compte le nombre de **pas** (petites graduations) entre **0** et le **point**."
        n2: "Mets ton doigt sur 0 puis avance d'un pas à la fois jusqu'au point. Compte les pas."
        n3: "Réponse : **[num]** pas."

      placer_le_curseur:
        description: Step D — l'élève doit taper l'abscisse dans le champ {answer}
        n1: "Tu as tout : il y a [num] pas, chacun vaut 1/[den]. L'abscisse est donc **[num] / [den]**. Tape-la dans le champ au-dessus."
        n2: "Numérateur = [num], dénominateur = [den]. Saisis-les dans les deux cases."
        n3: "Réponse finale : **[num]/[den]**. Saisis [num] en haut et [den] en bas."

  # Les autres LIRE réutilisent lire-base via l'anchor.
  satisf-lire:        *lire-base
  satisf-lire-pls:    *lire-base
  ts-lire:            *lire-base
  expert-lire-entier: *lire-base
`,R=`# Indices Zefor 04-tableur (fiche unique tableur)
#
# 11 variantes en 3 groupes :
#   1. Vocabulaire (identifier-zones, cell-click, range-drag, cell-name, range-name)
#   2. Formules ($B$1 + drag-fill) — tableur-c2-seul, tableur-drag-fill, tableur-decimaux
#   3. DNB — fragile-somme, satisf-moyenne, ts-fonction-affine

variantes:

  # ═══════════════════════════════════════════════════════════════════════
  # GROUPE 1 — VOCABULAIRE
  # ═══════════════════════════════════════════════════════════════════════

  identifier-zones:
    phases:
      cellule_vide:
        n1: "Commence par n'importe quel badge — clique sur un ① ②… puis cherche son nom dans la liste."
        n2: "Astuce : la **barre d'outils** sert à mettre en forme (gras, italique, alignement). L'**adresse de la cellule** affiche son nom (A1, B2…)."
        n3: "Associe progressivement : les boutons B/I/U → barre d'outils ; le rond avec C3 → adresse ; le grand rectangle blanc → barre de formule."
      erreur_calcul:
        n1: "Tu as bien commencé. Réfléchis aux zones que tu n'as pas encore identifiées."
        n2: "Une cellule = UNE case rectangulaire. Une plage = un rectangle CONTINU de cellules. Plusieurs cellules sélectionnées = des cases non collées entre elles."
        n3: "Une en-tête de colonne = la lettre (A, B, C). Une en-tête de ligne = le chiffre (1, 2, 3)."

  # Mode mixte « cell » (cell-click + cell-name fusionnés). Le composant
  # alterne le sub-mode à chaque ↺. Les patterns_formule ne s'appliquent
  # qu'au sub-mode cell-name (saisie textuelle).
  cell:
    patterns_formule:
      - id: confusion_ligne_colonne
        formula_regex: "^\\\\d+[A-Za-z]+$"
        indice: "Tu as inversé ligne et colonne : on écrit **d'abord la lettre** (colonne), **puis le chiffre** (ligne). Exemple : \`C5\`, pas \`5C\`."
        relance: "Réessaie avec le bon ordre."
      - id: lettre_minuscule
        formula_regex: "^[a-z]+\\\\d+$"
        indice: "On écrit l'adresse d'une cellule **en majuscules** : \`D4\`, pas \`d4\`."
        relance: "Re-tape en majuscule."
    phases:
      cellule_vide:
        n1: "Repère la **colonne** (lettre) et la **ligne** (chiffre). Selon la question : clique la cellule, ou tape son adresse."
        n2: "Une adresse = LETTRE + CHIFFRE, sans espace. Exemple : A1, C5, F12."
        n3: "Trouve l'intersection de la colonne et de la ligne. Clique-la ou tape \`LETTRE+CHIFFRE\`."
      erreur_calcul:
        n1: "Pas la bonne cellule. Vérifie la colonne (lettre) et la ligne (chiffre)."
        n2: "Rappelle-toi : la lettre = colonne, le chiffre = ligne."
        n3: "Recompte les colonnes (A, B, C…) et les lignes (1, 2, 3…)."

  # Mode mixte « range » (range-drag + range-name fusionnés).
  range:
    patterns_formule:
      - id: oubli_deux_points
        formula_regex: "^[A-Za-z]+\\\\d+\\\\s*[;,]\\\\s*[A-Za-z]+\\\\d+$"
        indice: "Pour une **plage**, on sépare les deux extrémités par **deux-points** \`:\`, pas \`;\` ou \`,\`. Exemple : \`C2:E5\`."
        relance: "Remplace par \`:\`."
      - id: confusion_ligne_colonne
        formula_regex: "^\\\\d+[A-Za-z]+:"
        indice: "Tu as inversé ligne et colonne. On écrit \`C2:E5\`, pas \`2C:5E\`."
        relance: "Reformule avec colonne en premier."
      - id: lettre_minuscule
        formula_regex: "^[a-z]+\\\\d+:"
        indice: "Les adresses s'écrivent **en majuscules** : \`C2:E5\`, pas \`c2:e5\`."
        relance: "Re-tape en majuscule."
    phases:
      cellule_vide:
        n1: "Une plage = un rectangle de cellules. Selon la question : sélectionne-la avec un drag, ou tape ses 2 coins séparés par \`:\`."
        n2: "Format de saisie : \`coin_haut_gauche:coin_bas_droit\` (ex. \`B2:D4\`)."
        n3: "Pour le drag, pose le doigt sur le 1er coin et glisse jusqu'au 2ᵉ. Pour la saisie, tape \`[haut-gauche]:[bas-droit]\`."
      erreur_calcul:
        n1: "Pas la bonne plage. Vérifie les 2 coins."
        n2: "Coin haut-gauche = la première ref ; coin bas-droit = la deuxième."

  # Énoncé textuel — sans présélection visuelle (description dans le panneau)
  cell-name-text:
    patterns_formule:
      - id: confusion_ligne_colonne
        formula_regex: "^\\\\d+[A-Za-z]+$"
        indice: "Tu as inversé ligne et colonne : on écrit **d'abord la lettre** (colonne), **puis le chiffre** (ligne)."
        relance: "Reformule : lettre + chiffre."
      - id: lettre_minuscule
        formula_regex: "^[a-z]+\\\\d+$"
        indice: "On écrit l'adresse d'une cellule **en majuscules**."
        relance: "Re-tape en majuscule."
    phases:
      cellule_vide:
        n1: "Lis la description : « Colonne X, ligne Y ». L'adresse s'écrit \`XY\` (lettre puis chiffre)."
        n2: "Format : LETTRE + CHIFFRE, sans espace. Exemple : A1, C5, F12."
        n3: "Recopie simplement : lettre de la colonne + chiffre de la ligne."

  range-name-text:
    patterns_formule:
      - id: oubli_deux_points
        formula_regex: "^[A-Za-z]+\\\\d+\\\\s*[;,]\\\\s*[A-Za-z]+\\\\d+$"
        indice: "Pour une **plage**, on sépare les deux coins par **deux-points** \`:\`."
        relance: "Remplace par \`:\`."
      - id: confusion_ligne_colonne
        formula_regex: "^\\\\d+[A-Za-z]+:"
        indice: "Tu as inversé ligne et colonne. On écrit \`C2:E5\`, pas \`2C:5E\`."
        relance: "Reformule avec colonne en premier."
    phases:
      cellule_vide:
        n1: "Une plage s'écrit \`coin_haut_gauche:coin_bas_droit\`."
        n2: "Repère les 2 coins dans la description, puis sépare-les par \`:\`."
        n3: "Format : \`[lettre+chiffre]:[lettre+chiffre]\`."

  # ═══════════════════════════════════════════════════════════════════════
  # GROUPE 2 — FORMULES (coefficient $B$1, drag-fill)
  # ═══════════════════════════════════════════════════════════════════════

  tableur-c2-seul:
    patterns_formule:
      - id: valeur_au_lieu_de_reference
        formula_regex: "^=\\\\s*[\\\\d,.]+\\\\s*$"
        indice: "Je vois ce que tu as fait : tu as tapé directement la **valeur calculée**. Mais l'intérêt du tableur, c'est de faire référence aux **cellules** (A3, B1…). Si la valeur de B1 change, ton calcul doit se mettre à jour tout seul."
        relance: "Utilise les noms des cellules dans ta formule : \`=A3*$B$1\`."
      - id: additif_au_lieu_de_multiplicatif
        formula_regex: "^=[A-Za-z]+\\\\d+\\\\s*\\\\+\\\\s*\\\\$?[A-Za-z]+\\\\$?\\\\d+"
        indice: "Je vois ce que tu as fait : tu as **additionné** la quantité et le prix unitaire. Mais pour un prix total, on **multiplie** (prix par mangue × nombre de mangues)."
        relance: "Remplace \`+\` par \`*\` : \`=A3*$B$1\`."
      - id: oubli_dollar_recopie
        formula_regex: "^=\\\\s*[A-Za-z]+\\\\d+\\\\s*\\\\*\\\\s*[A-Za-z]+\\\\d+\\\\s*$"
        indice: "Bonne approche : tu multiplies bien quantité × prix unitaire. Mais pour pouvoir **recopier** ta formule plus tard, il faut **bloquer** la référence à B1 avec des \`$\`."
        relance: "Tape \`=A3*$B$1\` (dollar devant la lettre ET devant le chiffre)."
    phases:
      cellule_vide:
        n1: "Relis l'énoncé : le prix d'une mangue est en B1 (3,50 €). Pour 2 mangues, tu fais quelle opération ?"
        n2: "Dans la cellule B3, tu veux calculer 2 × 3,50. Mais en tableur, tu n'écris pas le nombre 3,50 — tu fais référence à la cellule B1."
        n3: "Tape : \`=A3*$B$1\` (les \`$\` préparent la recopie)."
      formule_invalide:
        n1: "Une formule de tableur commence toujours par le signe **\`=\`**. Tu l'as bien mis ?"
        n2: "Vérifie aussi les parenthèses et les opérateurs. Une formule simple ici, c'est \`=cellule * cellule\`."
        n3: "Tape exactement : \`=A3*$B$1\`."
      erreur_calcul:
        n1: "Ta formule calcule quelque chose, mais pas le bon résultat. Réfléchis : que multiplie-t-on, et par quoi ?"
        n2: "Le prix unitaire est en B1. La quantité est en A3. Tu multiplies une **quantité** par un **prix unitaire**."
        n3: "La formule attendue est \`=A3*$B$1\`."

  tableur-drag-fill:
    patterns_formule:
      - id: oubli_dollar_recopie
        formula_regex: "^=\\\\s*[A-Za-z]+\\\\d+\\\\s*\\\\*\\\\s*[A-Za-z]+\\\\d+\\\\s*$"
        indice: "Tu multiplies bien quantité × prix unitaire. Mais sans \`$\` autour de B1, la référence va **se décaler** quand tu recopies vers le bas (\`B1\` → \`B2\` → \`B3\`…). Or tu veux que B1 reste fixe."
        relance: "Ajoute les \`$\` : \`=A3*$B$1\`."
      - id: additif_au_lieu_de_multiplicatif
        formula_regex: "^=[A-Za-z]+\\\\d+\\\\s*\\\\+\\\\s*\\\\$?[A-Za-z]+\\\\$?\\\\d+"
        indice: "Tu as **additionné** au lieu de **multiplier**."
        relance: "Tape \`=A3*$B$1\`."
      - id: valeur_au_lieu_de_reference
        formula_regex: "^=\\\\s*[\\\\d,.]+\\\\s*$"
        indice: "Tu as tapé une **valeur**, pas une **formule**."
        relance: "Utilise les références : \`=A3*$B$1\`."
    phases:
      cellule_vide:
        n1: "Commence par compléter **B3** : la formule du prix total pour A3 articles."
        n2: "Pour le calcul en B3, utilise la cellule A3 (la quantité) et la cellule B1 (le prix unitaire)."
        n3: "Tape \`=A3*$B$1\` en B3. Puis sélectionne B3 et **tire la poignée bleue** vers le bas jusqu'en B5."
      formule_invalide:
        n1: "Vérifie que ta formule commence par \`=\` et que les noms de cellules sont bien écrits."
        n2: "Pour bloquer une référence : \`$\` **avant la lettre ET avant le chiffre** : \`$B$1\`."
        n3: "La formule pour B3 est \`=A3*$B$1\`."
      erreur_calcul:
        n1: "Une des cellules est juste, mais pas les autres. La référence à B1 **se décale** peut-être quand tu recopies."
        n2: "Quand tu recopies \`=A3*B1\` vers le bas, \`B1\` devient \`B2\`, puis \`B3\`. Or tu veux que \`B1\` reste toujours \`B1\`."
        n3: "Repasse en B3 et écris \`=A3*$B$1\` (avec les \`$\`). Puis recopie."

  tableur-decimaux:
    phases:
      cellule_vide:
        n1: "Coût par heure en B1, durée en A3 : pour le total en B3, tu multiplies."
        n2: "N'oublie pas les \`$\` autour de B1 pour pouvoir recopier la formule."
        n3: "Tape \`=A3*$B$1\` en B3 et recopie vers B4, B5, B6."
      formule_invalide:
        n1: "Commence par \`=\` et utilise \`*\` pour la multiplication."
        n2: "Pour bloquer B1 : \`$B$1\`."
        n3: "Formule en B3 : \`=A3*$B$1\`."
      erreur_calcul:
        n1: "Vérifie : si tu recopies, est-ce que la référence à B1 reste bien à B1 ?"
        n2: "Sinon, ajoute les \`$\` : \`=A3*$B$1\` au lieu de \`=A3*B1\`."
        n3: "Solution : \`=A3*$B$1\` en B3, puis recopie."

  # ═══════════════════════════════════════════════════════════════════════
  # GROUPE 3 — DNB (somme, moyenne, fonction affine)
  # ═══════════════════════════════════════════════════════════════════════

  fragile-somme:
    patterns_formule:
      - id: somme_sans_plage
        formula_regex: "^=\\\\s*SOMME\\\\s*\\\\(\\\\s*[A-Z]\\\\d+\\\\s*[;,]\\\\s*[A-Z]\\\\d+\\\\s*[;,]\\\\s*[A-Z]\\\\d+"
        indice: "Tu listes les cellules une à une avec des \`;\`. Ça marche, mais on peut faire plus court avec **une plage** : \`B2:E2\` désigne d'un coup les cellules B2, C2, D2 et E2."
        relance: "Réécris : \`=SOMME(B2:E2)\`."
      - id: plage_mal_bornee
        formula_regex: "^=\\\\s*SOMME\\\\s*\\\\(\\\\s*B2\\\\s*:\\\\s*[CD]2\\\\s*\\\\)\\\\s*$"
        indice: "Ta plage est **trop courte** : tu n'as pris que 2 ou 3 cellules, pas les 4 jours de la semaine."
        relance: "Étends la plage : \`=SOMME(B2:E2)\`."
    phases:
      cellule_vide:
        n1: "On veut additionner les passagers de Lundi à Jeudi (cellules B2 à E2). Quelle fonction du tableur fait une somme ?"
        n2: "Utilise la fonction \`SOMME(...)\`. Pour désigner les 4 cellules d'un coup, on écrit la plage \`B2:E2\`."
        n3: "Tape : \`=SOMME(B2:E2)\`."
      formule_invalide:
        n1: "Vérifie : ta formule commence-t-elle par \`=\` ? Les parenthèses sont-elles bien fermées ?"
        n2: "Syntaxe : \`=SOMME(plage)\`. Une plage s'écrit \`B2:E2\` (deux cellules séparées par \`:\`)."
        n3: "Solution : \`=SOMME(B2:E2)\`."
      erreur_calcul:
        n1: "Ton total n'est pas le bon. As-tu pris toutes les cellules ?"
        n2: "Vérifie les bornes de ta plage : on veut Lundi à Jeudi, donc B2 à E2."
        n3: "Formule attendue : \`=SOMME(B2:E2)\`."

  satisf-moyenne:
    patterns_formule:
      - id: somme_au_lieu_de_moyenne
        formula_regex: "^=\\\\s*SOMME\\\\s*\\\\("
        indice: "Tu as utilisé \`SOMME\`. Mais on te demande la **moyenne**, pas le total."
        relance: "Remplace \`SOMME\` par \`MOYENNE\` : \`=MOYENNE(B2:F2)\`."
      - id: division_au_lieu_de_moyenne
        formula_regex: "^=\\\\s*\\\\(?\\\\s*B2\\\\s*\\\\+"
        indice: "Tu as ajouté les notes une par une. C'est valide, mais n'oublie pas de **diviser par le nombre de notes** (5 ici)."
        relance: "Plus simple : \`=MOYENNE(B2:F2)\`."
    phases:
      cellule_vide:
        n1: "On cherche la **moyenne** des 5 notes en B2, C2, D2, E2, F2. Quelle fonction utilise-t-on ?"
        n2: "La fonction est \`MOYENNE\`. Comme pour \`SOMME\`, on lui donne la plage : \`B2:F2\`."
        n3: "Tape : \`=MOYENNE(B2:F2)\`."
      formule_invalide:
        n1: "Commence par \`=\`, puis le nom de la fonction, puis la plage entre parenthèses."
        n2: "Syntaxe : \`=MOYENNE(B2:F2)\`."
        n3: "Solution : \`=MOYENNE(B2:F2)\`."
      erreur_calcul:
        n1: "Le résultat n'est pas la moyenne attendue. As-tu bien pris les 5 notes ?"
        n2: "Plage attendue : B2 à F2 (les 5 devoirs)."
        n3: "Formule : \`=MOYENNE(B2:F2)\`."

  ts-fonction-affine:
    patterns_formule:
      - id: signe_mauvais
        formula_regex: "^=\\\\s*5\\\\s*\\\\*"
        indice: "Tu as écrit \`5*C1\`, mais la fonction est **f(x) = -5x + 7**. Le coefficient est **négatif**."
        relance: "Remplace \`5\` par \`-5\` : \`=-5*C1+7\`."
      - id: oubli_constante
        formula_regex: "^=\\\\s*-?\\\\s*5\\\\s*\\\\*\\\\s*C1\\\\s*$"
        indice: "Tu as la partie \`-5x\` mais il manque le **+7**."
        relance: "Ajoute la constante : \`=-5*C1+7\`."
      - id: valeur_au_lieu_de_reference
        formula_regex: "^=\\\\s*-?\\\\s*\\\\d+(\\\\s*[+\\\\-*/]\\\\s*\\\\d+)*\\\\s*$"
        indice: "Tu as fait un calcul numérique direct. Or on cherche **la formule générale** : utilise la cellule \`C1\` au lieu de la valeur."
        relance: "Tape \`=-5*C1+7\` (C1 reste, le résultat s'adapte à la valeur de C1)."
    phases:
      cellule_vide:
        n1: "La fonction est **f(x) = -5x + 7**. Dans la formule, à la place de \`x\`, tu mets la **référence à la cellule** qui contient x — c'est-à-dire \`C1\`."
        n2: "On remplace \`x\` par \`C1\` dans l'expression \`-5x + 7\`. Ça donne quoi ?"
        n3: "Tape : \`=-5*C1+7\`."
      formule_invalide:
        n1: "Vérifie : \`=\`, puis \`-5\`, puis \`*\`, puis la cellule, puis \`+7\`."
        n2: "Pas d'espaces obligatoires : \`=-5*C1+7\` fonctionne."
        n3: "Solution : \`=-5*C1+7\`."
      erreur_calcul:
        n1: "La formule donne une valeur incorrecte. Vérifie le signe du coefficient et la constante."
        n2: "f(-1) doit donner 12 (\`-5×(-1)+7 = 5+7 = 12\`). Si tu n'obtiens pas 12, ta formule est fausse."
        n3: "Formule attendue : \`=-5*C1+7\`."
`,$=`# Matrice d'indices — fiche 24.04 retour à l'unité (cycle 3)
#
# BROUILLON v0 — à relire/corriger par Florian (style, formulation, pédago).
#
# Format :
#   variantes:
#     <id-variante>:
#       phases: { <nom-phase>: { description, n1, n2, n3 } }
#       erreurs_types: [...]
#
# Phases du visuel retour-unite (ordre de révélation des inputs) :
#   initial         — A, B, E recopiés depuis l'énoncé
#   unite           — chiffre 1 dans la case ligne 2 gauche
#   div_gauche      — facteur ÷a entre la quantité [a] et 1 (ligne 1 → ligne 2)
#   div_droite      — même facteur ÷a côté euros (symétrie)
#   prix_unitaire   — résultat [b]÷[a] = prix d'un [ctx.sing]
#   mult_gauche     — facteur ×e entre 1 et [e] (ligne 2 → ligne 3)
#   mult_droite     — même facteur ×e côté euros
#   reponse_finale  — prix de [e] [ctx.plur] = [p] × [e]
#
# Variables dispo dans les templates (mêmes que dans le content YAML automaths) :
#   [a]   quantité initiale
#   [b]   prix total initial (= a × p)
#   [e]   quantité cible
#   [p]   prix unitaire (= b/a)
#   [ctx.sing] [ctx.plur] [ctx.lieu] [ctx.art_sing]
#
# Niveaux d'indice (progressifs, l'élève peut en demander plusieurs) :
#   n1 — reformulation, renvoie à l'énoncé, pas de pointage spatial
#   n2 — pointe la zone exacte sans révéler le calcul
#   n3 — décompose le calcul, mais ne donne JAMAIS le résultat numérique

variantes:

  satisf-schema-entiers:

    phases:

      initial:
        description: L'élève recopie a, b, e depuis l'énoncé dans le tableau
        n1: "Relis l'énoncé. Tu as 3 nombres à recopier : combien de [ctx.plur] au début, combien d'euros au total, et combien de [ctx.plur] à la fin."
        n2: "Le tableau a 3 lignes. Ligne 1 = ce que tu sais (à gauche la quantité, à droite le prix total). Ligne 3 = ce que tu cherches (à gauche la nouvelle quantité). Recopie les nombres de l'énoncé aux bonnes places."
        n3: "Ligne 1 gauche : **[a]**. Ligne 1 droite : **[b]**. Ligne 3 gauche : **[e]**."

      unite:
        description: L'élève écrit 1 dans la case unité (ligne 2 gauche)
        n1: "La méthode du retour à l'unité : avant de calculer pour beaucoup, on calcule d'abord pour **un seul**."
        n2: "Dans la 2ᵉ ligne à gauche, tu veux dire « pour 1 [ctx.sing] ». Quel chiffre représente « un » ?"
        n3: "Écris **1** dans la case du milieu à gauche."

      div_gauche:
        description: Facteur ÷a entre la quantité [a] et 1
        n1: "Tu passes de **[a]** à **1**. Du plus grand au plus petit : tu fais quelle opération ?"
        n2: "[a] divisé par quel nombre donne 1 ?"
        n3: "[a] ÷ [a] = 1. Écris **÷[a]** comme facteur (entre la ligne 1 et la ligne 2, côté gauche)."

      div_droite:
        description: Facteur ÷a côté euros (symétrie)
        n1: "Règle du tableau de proportionnalité : ce que tu fais à gauche, tu le fais aussi à droite."
        n2: "À gauche tu viens d'écrire ÷[a]. À droite (côté euros), tu fais quoi ?"
        n3: "Aussi **÷[a]** — même facteur des deux côtés."

      prix_unitaire:
        description: Calcul de [b] ÷ [a] = [p] (prix d'un [ctx.sing])
        n1: "Maintenant tu cherches le prix d'**un seul** [ctx.sing]."
        n2: "Combien de fois [a] entre dans [b] ?"
        n3: "Pose la division [b] ÷ [a] (ou cherche dans tes tables de [a]). Le résultat = prix d'un [ctx.sing]."

      mult_gauche:
        description: Facteur ×e entre 1 et [e]
        n1: "Maintenant tu passes de **1** [ctx.sing] à **[e]** [ctx.plur]. Du petit vers le grand : quelle opération ?"
        n2: "1 multiplié par quel nombre donne [e] ?"
        n3: "1 × [e] = [e]. Écris **×[e]** comme facteur (entre la ligne 2 et la ligne 3, côté gauche)."

      mult_droite:
        description: Facteur ×e côté euros (symétrie)
        n1: "Pareil qu'avant : même opération des deux côtés du tableau."
        n2: "À gauche tu viens d'écrire ×[e]. À droite ?"
        n3: "Aussi **×[e]**."

      reponse_finale:
        description: Prix de [e] [ctx.plur] = [p] × [e]
        n1: "Tu connais maintenant le prix d'un [ctx.sing]. Combien coûtent [e] [ctx.plur] alors ?"
        n2: "Multiplie le prix unitaire (la case que tu viens de trouver) par [e]."
        n3: "Calcule : prix d'un [ctx.sing] × [e]. C'est ta réponse finale."

    # Erreurs détectables sans LLM (matching simple sur la valeur saisie).
    # Quand l'élève saisit une réponse qui matche, on sert directement cet indice
    # plutôt que de monter en n1/n2/n3 séquentiellement.
    erreurs_types:

      - id: case_unite_pas_1
        description: "Élève met autre chose que 1 dans la case unité (souvent [a] ou [b])"
        cible_phase: unite
        indice: "Dans la case du milieu à gauche, on veut « UN » en chiffre. Juste **1**, ni plus ni moins."

      - id: facteur_inverse_div
        description: "Élève écrit × au lieu de ÷ entre les lignes 1 et 2"
        cible_phase: div_gauche
        indice: "Tu passes de [a] à 1 (plus petit). Plus petit = **division**, pas multiplication."

      - id: facteur_inverse_mult
        description: "Élève écrit ÷ au lieu de × entre les lignes 2 et 3"
        cible_phase: mult_gauche
        indice: "Tu passes de 1 à [e] (plus grand). Plus grand = **multiplication**, pas division."

      - id: prix_unitaire_recopie_b
        description: "Élève recopie [b] dans la case prix unitaire (oublie la division)"
        cible_phase: prix_unitaire
        indice: "Attention : [b] €, c'est le prix de **[a]** [ctx.plur], pas d'un seul. Il faut diviser par [a]."

      - id: reponse_finale_recopie_b
        description: "Élève recopie [b] comme réponse finale"
        cible_phase: reponse_finale
        indice: "[b] €, c'est le prix de **[a]** [ctx.plur], pas de [e]. Repars du prix unitaire et multiplie par [e]."

      - id: dissymetrie_facteurs
        description: "Facteurs différents à gauche et à droite (rupture du tableau)"
        cible_phase: div_droite|mult_droite
        indice: "Dans un tableau de proportionnalité, **le même facteur** apparaît à gauche et à droite. Vérifie."
`,h=Object.assign({"../data/indices/01-retour-unite.yaml":C,"../data/indices/02-graduer-axe-fraction.yaml":L,"../data/indices/03-tableur.yaml":R,"../data/indices/24.04-retour-unite.yaml":$}),M=(()=>{const e={};for(const n of Object.keys(h)){const a=n.match(/\/([^/]+)\.yaml$/)?.[1];if(a)try{e[a]=A.load(h[n])}catch(t){console.error(`[indices] erreur de parsing ${n}:`,t)}}return e})();function q(e){return e?e.split("/").pop():""}function B(e,n){const a=M[q(e)];return a?.variantes?a.variantes[n]??null:null}function D(e){const n=e?.dataset?.ref;if(!n)return!1;const t=e.querySelector(".variant-content.active")?.dataset?.id;return t?!!B(n,t):!1}function T(e){for(const n of e.querySelectorAll("*"))if(typeof n.getCurrentPhase=="function")return n;return null}async function g(e,n){if(!e)return"";const a=new E;a.reset(),Object.entries(n).forEach(([r,i])=>{(typeof i=="number"||i&&typeof i=="object"&&!Array.isArray(i))&&a.variables.set(r,i)});const t=a.parse(e,"web"),{miniMd:d}=await x(async()=>{const{miniMd:r}=await import("./rapido-engine.C9q4Hfwp.js").then(i=>i.h);return{miniMd:r}},__vite__mapDeps([0,1,2]));return d(t)}async function N(e,n={level:1}){const a=e?.dataset?.ref;if(!a)return null;const t=e.querySelector(".variant-content.active"),d=t?.dataset?.id;if(!d)return null;const r=B(a,d),i=T(e),l=i?.getCurrentPhase?.()??"initial";if(l==="done")return{html:"Tu as déjà tout bon ici. Bravo !",phase:l,level:1,isDone:!0};const p=t?.visualData?.config??{},c=Math.min(Math.max(n.level|0,1),3);if(l==="erreur_reponse_directe")try{const{detectErrorPattern:u}=await x(async()=>{const{detectErrorPattern:f}=await import("./error-detector.UCHcg4cc.js");return{detectErrorPattern:f}},__vite__mapDeps([3,0,1,2])),m=i?.querySelector?.(".rapido-input")?.value??"",o=u({ref:q(a),variantId:d,studentValue:m,vars:p});if(o){const b=c===2&&o.relance||o.indice;return{html:await g(b,p),phase:l,level:c,isDone:!1,patternId:o.id}}}catch(u){console.error("[indices] error-detector:",u)}if(r?.patterns_formule&&typeof i?.getCurrentStudentValue=="function")try{const u=i.getCurrentStudentValue()||"";for(const s of r.patterns_formule){if(!s.formula_regex)continue;let m;try{m=new RegExp(s.formula_regex,s.flags??"i")}catch{continue}if(m.test(u)){const f=c===2&&s.relance||s.indice;return{html:await g(f,p),phase:l,level:c,isDone:!1,patternId:s.id}}}}catch(u){console.error("[indices] patterns_formule:",u)}if(!r)return null;const _=r.phases?.[l];if(!_)return null;const v=_[`n${c}`];return v?{html:await g(v,p),phase:l,level:c,isDone:!1}:null}export{D as cardHasIndices,N as getNextIndice};
