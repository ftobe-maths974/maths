const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/rapido-engine.DKXOhSx4.js","_astro/rapidos-visuals-integration.DF9PrUGq.js","_astro/editor.CJZspgfY.js","_astro/error-detector.BYUZXhre.js"])))=>i.map(i=>d[i]);
import{_ as b}from"./editor.CJZspgfY.js";import{T as q,j as L}from"./rapido-engine.DKXOhSx4.js";import"./rapidos-visuals-integration.DF9PrUGq.js";const y=`# Matrice d'indices — fiche 24.04 retour à l'unité (cycle 3)
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
`,C=`# Matrice d'indices — fiche Zefor 2 graduer-axe-fraction (cycle 3, GS 2.5)
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
`,R=`# Matrice d'indices — fiche 24.04 retour à l'unité (cycle 3)
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
`,v=Object.assign({"../data/indices/01-retour-unite.yaml":y,"../data/indices/02-graduer-axe-fraction.yaml":C,"../data/indices/24.04-retour-unite.yaml":R}),A=(()=>{const e={};for(const n of Object.keys(v)){const a=n.match(/\/([^/]+)\.yaml$/)?.[1];if(a)try{e[a]=L.load(v[n])}catch(i){console.error(`[indices] erreur de parsing ${n}:`,i)}}return e})();function f(e,n){const a=A[e];return a?.variantes?a.variantes[n]??null:null}function V(e){const n=e?.dataset?.ref;if(!n)return!1;const i=e.querySelector(".variant-content.active")?.dataset?.id;return i?!!f(n,i):!1}function P(e){for(const n of e.querySelectorAll("*"))if(typeof n.getCurrentPhase=="function")return n;return null}async function g(e,n){if(!e)return"";const a=new q;a.reset(),Object.entries(n).forEach(([r,t])=>{(typeof t=="number"||t&&typeof t=="object"&&!Array.isArray(t))&&a.variables.set(r,t)});const i=a.parse(e,"web"),{miniMd:u}=await b(async()=>{const{miniMd:r}=await import("./rapido-engine.DKXOhSx4.js").then(t=>t.e);return{miniMd:r}},__vite__mapDeps([0,1,2]));return u(i)}async function j(e,n={level:1}){const a=e?.dataset?.ref;if(!a)return null;const i=e.querySelector(".variant-content.active"),u=i?.dataset?.id;if(!u)return null;const r=f(a,u),t=P(e),s=t?.getCurrentPhase?.()??"initial";if(s==="done")return{html:"Tu as déjà tout bon ici. Bravo !",phase:s,level:1,isDone:!0};const o=i?.visualData?.config??{},c=Math.min(Math.max(n.level|0,1),3);if(s==="erreur_reponse_directe")try{const{detectErrorPattern:p}=await b(async()=>{const{detectErrorPattern:h}=await import("./error-detector.BYUZXhre.js");return{detectErrorPattern:h}},__vite__mapDeps([3,0,1,2])),_=t?.querySelector?.(".rapido-input")?.value??"",l=p({ref:a,variantId:u,studentValue:_,vars:o});if(l){const x=c===2&&l.relance||l.indice;return{html:await g(x,o),phase:s,level:c,isDone:!1,patternId:l.id}}}catch(p){console.error("[indices] error-detector:",p)}if(!r)return null;const d=r.phases?.[s];if(!d)return null;const m=d[`n${c}`];return m?{html:await g(m,o),phase:s,level:c,isDone:!1}:null}export{V as cardHasIndices,j as getNextIndice};
