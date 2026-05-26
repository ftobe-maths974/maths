const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/fullscreen-viewer.DUE8ySON.js","_astro/editor.CJZspgfY.js","_astro/error-detector.DT9AYuTp.js"])))=>i.map(i=>d[i]);
import{_ as f}from"./editor.CJZspgfY.js";import{T as q,j as L}from"./fullscreen-viewer.DUE8ySON.js";const y=`# Matrice d'indices — fiche 24.04 retour à l'unité (cycle 3)
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
`,P=`# Matrice d'indices — fiche Zefor 2 graduer-axe-fraction (cycle 3, GS 2.5)
#
# BROUILLON v0 — à relire/corriger par Florian (style, formulation, pédago).
#
# Phases calquées sur la méthode A/B/C du guide-c3 p.6 + phases Zefor pour
# l'état « pas de réponse » et « réponse fausse sans pattern reconnu ».
#
# Phases du visuel axe-gradue :
#   reponse_directe       — l'élève n'a pas encore cliqué/placé son point
#   erreur_reponse_directe — réponse fausse sans pattern d'erreur reconnu
#                            (les patterns reconnus sont servis par error-detector)
#   identifier_unite      — A : « l'unité, c'est le segment 0→1, pas tout l'axe »
#   identifier_denominateur — B : « partage l'unité en N parts (N = dénominateur) »
#   compter_pas           — C : « avance de p pas depuis 0 (p = numérateur) »
#   placer_le_curseur     — D : « clique précisément sur la graduation atteinte »
#
# Variables disponibles dans les templates :
#   [num]    numérateur de la fraction cible
#   [den]    dénominateur de la fraction cible
#   [val]    valeur décimale équivalente (rarement utilisée — on parle en fraction)
#   [max]  borne max de l'axe (1, 2 ou 3 selon variante)
#
# Niveaux d'indice (progressifs, l'élève peut en demander plusieurs) :
#   n1 — reformulation, renvoie à l'énoncé, pas de pointage spatial
#   n2 — pointe la zone exacte sans révéler le calcul
#   n3 — décompose la procédure, mais ne donne JAMAIS la réponse en clair
# ─────────────────────────────────────────────────────────────────────────────

variantes:

  # ═════════ GROUPE 1 — FRAGILE : fractions ≤ 1, dénos 2/4/5, axe 0→1 ═════════

  fragile-placer-0-1:

    phases:

      reponse_directe:
        description: L'élève voit l'axe vide, n'a pas encore placé son point
        n1: "Tu cherches à placer la fraction **[num]/[den]**. La méthode du guide a trois étapes : **A** (l'unité), **B** (partage), **C** (avance). On commence par quoi ?"
        n2: "Regarde l'axe : tu vois le segment qui va de **0 à 1**. C'est l'**unité**. Toutes les autres unités après 1 ne servent pas pour cette fraction (elle est inférieure à 1)."
        n3: "1) L'unité = segment 0→1. 2) Partage-la en **[den]** parts égales. 3) Avance de **[num]** pas depuis 0. Clique à cette graduation."

      erreur_reponse_directe:
        description: Réponse incorrecte, aucun pattern d'erreur connu détecté
        n1: "Ta réponse n'est pas la bonne. Refais le raisonnement à voix haute : qu'est-ce que représente le **dénominateur** [den] ? Et le **numérateur** [num] ?"
        n2: "Le dénominateur [den] te dit en combien de parts partager **1 unité** (le segment 0→1). Le numérateur [num] te dit combien de parts tu prends depuis 0."
        n3: "Recompte : depuis 0, avance de **[num]** pas où chaque pas vaut **1/[den]** d'unité."

      identifier_unite:
        description: L'élève cherche où est l'unité de l'axe
        n1: "L'**unité**, c'est le segment qui va de **0 à 1** sur l'axe. C'est cette longueur qu'on va découper en plusieurs parts."
        n2: "Pointe avec ton doigt le **0** et le **1** sur l'axe. Le segment entre ces deux points est l'unité."
        n3: "L'unité = segment 0→1. Pas tout l'axe, juste de 0 jusqu'à 1."

      identifier_denominateur:
        description: L'élève cherche en combien de parts partager
        n1: "Le **dénominateur** te dit en combien de parts égales partager **1 unité**. Quel est le dénominateur de [num]/[den] ?"
        n2: "Le dénominateur de **[num]/[den]**, c'est **[den]**. Donc tu partages l'unité (segment 0→1) en **[den]** parts égales."
        n3: "Compte les graduations entre 0 et 1 sur l'axe — il devrait y en avoir [den] (avec 0 et 1 inclus, ça fait [=den+1] traits)."

      compter_pas:
        description: L'élève cherche combien de pas avancer
        n1: "Le **numérateur** te dit combien de pas avancer depuis 0. Quel est le numérateur de [num]/[den] ?"
        n2: "Numérateur de **[num]/[den]** = **[num]**. Pars de 0 et avance de [num] graduations."
        n3: "Mets ton doigt sur 0, puis compte « 1, 2, … [num] » en sautant d'une graduation à l'autre."

      placer_le_curseur:
        description: L'élève sait quelle graduation viser mais clique imprécisément
        n1: "Clique **précisément sur la graduation**, pas entre deux. Le curseur va se caler dessus."
        n2: "Tu cherches la graduation **n°[num]** en partant de 0 (0 = graduation n°0)."

  # 1.1 et les autres variantes héritent par défaut du même schéma de phases
  # (méthode A/B/C est universelle pour ce GS). Pour l'instant on n'instancie
  # que \`fragile-placer-0-1\` ; on copiera/adaptera les variantes suivantes
  # quand on aura des retours élèves sur la 1ʳᵉ.
  #
  # TODO Florian : à valider en classe avant d'instancier les 7 autres
  # variantes (satisf-lire-0-1, satisf-placer-0-1, satisf-lire-0-2, etc.).
  # Les phases sont identiques, seul le ton peut s'élever (« tu peux faire
  # mieux que ça » en TS, plus accompagnant en fragile).
`,A=`# Matrice d'indices — fiche 24.04 retour à l'unité (cycle 3)
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
`,v=Object.assign({"../data/indices/01-retour-unite.yaml":y,"../data/indices/02-graduer-axe-fraction.yaml":P,"../data/indices/24.04-retour-unite.yaml":A}),C=(()=>{const n={};for(const t of Object.keys(v)){const e=t.match(/\/([^/]+)\.yaml$/)?.[1];if(e)try{n[e]=L.load(v[t])}catch(i){console.error(`[indices] erreur de parsing ${t}:`,i)}}return n})();function x(n,t){const e=C[n];return e?.variantes?e.variantes[t]??null:null}function O(n){const t=n?.dataset?.ref;if(!t)return!1;const i=n.querySelector(".variant-content.active")?.dataset?.id;return i?!!x(t,i):!1}function R(n){const t=n.querySelectorAll(".q-card-north,.q-card-south,.q-card-east,.q-card-west,.q-content-visual,[data-place-mode]");for(const e of t){const i=e.tagName?.toLowerCase().startsWith("math974-")?[e]:[...e.children];for(const r of i)if(typeof r.getCurrentPhase=="function")return r}return null}async function h(n,t){if(!n)return"";const e=new q;e.reset(),Object.entries(t).forEach(([s,a])=>{(typeof a=="number"||a&&typeof a=="object"&&!Array.isArray(a))&&e.variables.set(s,a)});const i=e.parse(n,"web"),{miniMd:r}=await f(async()=>{const{miniMd:s}=await import("./fullscreen-viewer.DUE8ySON.js").then(a=>a.f);return{miniMd:s}},__vite__mapDeps([0,1]));return r(i)}async function E(n,t={level:1}){const e=n?.dataset?.ref;if(!e)return null;const i=n.querySelector(".variant-content.active"),r=i?.dataset?.id;if(!r)return null;const s=x(e,r),a=R(n),u=a?.getCurrentPhase?.()??"initial";if(u==="done")return{html:"Tu as déjà tout bon ici. Bravo !",phase:u,level:1,isDone:!0};const o=i?.visualData?.config??{},c=Math.min(Math.max(t.level|0,1),3);if(u==="erreur_reponse_directe")try{const{detectErrorPattern:d}=await f(async()=>{const{detectErrorPattern:g}=await import("./error-detector.DT9AYuTp.js");return{detectErrorPattern:g}},__vite__mapDeps([2,0,1])),_=a?.querySelector?.(".rapido-input")?.value??"",l=d({ref:e,variantId:r,studentValue:_,vars:o});if(l){const b=c===2&&l.relance||l.indice;return{html:await h(b,o),phase:u,level:c,isDone:!1,patternId:l.id}}}catch(d){console.error("[indices] error-detector:",d)}if(!s)return null;const p=s.phases?.[u];if(!p)return null;const m=p[`n${c}`];return m?{html:await h(m,o),phase:u,level:c,isDone:!1}:null}export{O as cardHasIndices,E as getNextIndice};
