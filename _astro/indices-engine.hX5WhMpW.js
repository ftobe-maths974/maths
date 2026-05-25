const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/fullscreen-viewer.gUroEaeM.js","_astro/editor.CJZspgfY.js","_astro/error-detector.CWw1uBgX.js"])))=>i.map(i=>d[i]);
import{_ as v}from"./editor.CJZspgfY.js";import{T as q,j as y}from"./fullscreen-viewer.gUroEaeM.js";const L=`# Matrice d'indices — fiche 24.04 retour à l'unité (cycle 3)
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
`,P=`# Matrice d'indices — fiche 24.04 retour à l'unité (cycle 3)
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
`,h=Object.assign({"../data/indices/01-retour-unite.yaml":L,"../data/indices/24.04-retour-unite.yaml":P}),A=(()=>{const n={};for(const i of Object.keys(h)){const e=i.match(/\/([^/]+)\.yaml$/)?.[1];if(e)try{n[e]=y.load(h[i])}catch(t){console.error(`[indices] erreur de parsing ${i}:`,t)}}return n})();function b(n,i){const e=A[n];return e?.variantes?e.variantes[i]??null:null}function I(n){const i=n?.dataset?.ref;if(!i)return!1;const t=n.querySelector(".variant-content.active")?.dataset?.id;return t?!!b(i,t):!1}function C(n){const i=n.querySelectorAll(".q-card-north,.q-card-south,.q-card-east,.q-card-west,.q-content-visual,[data-place-mode]");for(const e of i){const t=e.tagName?.toLowerCase().startsWith("math974-")?[e]:[...e.children];for(const r of t)if(typeof r.getCurrentPhase=="function")return r}return null}async function f(n,i){if(!n)return"";const e=new q;e.reset(),Object.entries(i).forEach(([s,a])=>{(typeof a=="number"||a&&typeof a=="object"&&!Array.isArray(a))&&e.variables.set(s,a)});const t=e.parse(n,"web"),{miniMd:r}=await v(async()=>{const{miniMd:s}=await import("./fullscreen-viewer.gUroEaeM.js").then(a=>a.f);return{miniMd:s}},__vite__mapDeps([0,1]));return r(t)}async function E(n,i={level:1}){const e=n?.dataset?.ref;if(!e)return null;const t=n.querySelector(".variant-content.active"),r=t?.dataset?.id;if(!r)return null;const s=b(e,r),a=C(n),u=a?.getCurrentPhase?.()??"initial";if(u==="done")return{html:"Tu as déjà tout bon ici. Bravo !",phase:u,level:1,isDone:!0};const o=t?.visualData?.config??{},l=Math.min(Math.max(i.level|0,1),3);if(u==="erreur_reponse_directe")try{const{detectErrorPattern:d}=await v(async()=>{const{detectErrorPattern:g}=await import("./error-detector.CWw1uBgX.js");return{detectErrorPattern:g}},__vite__mapDeps([2,0,1])),x=a?.querySelector?.(".rapido-input")?.value??"",c=d({ref:e,variantId:r,studentValue:x,vars:o});if(c){const _=l===2&&c.relance||c.indice;return{html:await f(_,o),phase:u,level:l,isDone:!1,patternId:c.id}}}catch(d){console.error("[indices] error-detector:",d)}if(!s)return null;const p=s.phases?.[u];if(!p)return null;const m=p[`n${l}`];return m?{html:await f(m,o),phase:u,level:l,isDone:!1}:null}export{I as cardHasIndices,E as getNextIndice};
