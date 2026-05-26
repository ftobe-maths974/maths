const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/addition-posee.DPJLdQ1c.js","_astro/vis-input.0hz6aJN5.js","_astro/angle-triangle.DjHJouEB.js","_astro/utils.MftNdmoG.js","_astro/angles-proprietes.B_gg_H92.js","_astro/arbre-construire.DXMAxjnM.js","_astro/builder-core.vk1sRU96.js","_astro/rapido-engine.PsyLdcaQ.js","_astro/rapidos-visuals-integration.BYCv6gbn.js","_astro/editor.CJZspgfY.js","_astro/arbre.C7zSmtf2.js","_astro/bar-geom.qOvxJNxq.js","_astro/arbre-possibles.DzCjmDWS.js","_astro/axe-gradue-zefor.MccmWQHn.js","_astro/axe-gradue.BmL1oSHW.js","_astro/division-posee.DUqZ8JmO.js","_astro/echelle-probabilite.B3_BSQ7f.js","_astro/equation-etayage.DGQzCi--.js","_astro/linearite-mult.CE-AnZB_.js","_astro/linearite-tableau.BzfmQgB0.js","_astro/multiplication-posee.bzAMstyG.js","_astro/polygone-perimetre.CxJZ28dg.js","_astro/pythagore-figure.2bsq4kjy.js","_astro/figure-validation.6ahcB8Rb.js","_astro/retour-unite-zefor.BRdxIV-D.js","_astro/retour-unite.BNFrRBWU.js","_astro/schema-additif.B0eHxs8_.js","_astro/schema-comparaison-mult.BGwNphN8.js","_astro/bar-comparaison-mult.DP02BSw_.js","_astro/ink.DbHLEoN5.js","_astro/schema-comparaison.DMqdsQAb.js","_astro/bar-comparaison.CyAI7uHR.js","_astro/schema-construire-comp-mult.pX_KUb7T.js","_astro/schema-construire-comp.C42l27e-.js","_astro/schema-construire-mult.DN7S8_xU.js","_astro/bar-mult.BDRYgsTx.js","_astro/schema-construire.D1S0pNrr.js","_astro/bar-additif.Cv2D3s3G.js","_astro/schema-multiplicatif.DbiHUXlQ.js","_astro/soustraction-posee.CIWRpGOn.js","_astro/texte-trous.xP0OGRoT.js","_astro/thales-figure.DQZz2RT-.js","_astro/trigo-figure.Cx9r5f4w.js"])))=>i.map(i=>d[i]);
import{_ as a}from"./editor.CJZspgfY.js";import{_ as O,h as k}from"./rapidos-visuals-integration.BYCv6gbn.js";const q=["fragile","satisfaisant","tres-satisfaisant","expert"],w={F:"Fragile",S:"Satisfaisant",TS:"Très Satisfaisant",E:"Expert",R:"Rapido",RQ:"Random Quest"},I={F:"fragile",S:"satisfaisant",TS:"tres-satisfaisant",E:"expert"},V={F:"Une série de 6 questions de niveau Fragile — pour t'échauffer.",S:"6 questions de niveau Satisfaisant — le standard du cycle.",TS:"6 questions de niveau Très Satisfaisant — un cran au-dessus.",E:"6 questions de niveau Expert — entraînement musclé.",R:"6 questions tous niveaux mélangés, chronométrées.",RQ:"8 questions (chaque niveau × 2), randomisées — la quête complète."},C={F:"🟡",S:"🟢",TS:"🟢",E:"🌟",R:"⚡",RQ:"🎯"},$=`
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
.arc-nav-pass { color: #f97316; }

.arc-modal-cancel {
  appearance: none;
  border: none;
  background: transparent;
  color: #64748b;
  cursor: pointer;
  margin-top: 8px;
  font-size: 0.92em;
}

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

/* HUD pendant la session arcade ── dock unique fixed dans le viewport.
   position:fixed (pas absolute) : le dock reste visible et déplaçable même
   sur les pages où la card est plus petite que la fenêtre (ex. 1UP Mix).
   Le drag est clampé aux bornes du viewport (cf. _wireHudDrag). Remonté
   de 48px du bord bas pour éviter la dev-bar Astro. */
.arc-hud {
  position: fixed;
  bottom: 48px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border: 2px solid #6366f1;
  border-radius: 18px;          /* radius modeste : tient en pill 1-ligne ET en pavé 2-lignes (wrap mobile) */
  padding: 6px 8px;
  max-width: calc(100vw - 16px); /* jamais déborde du viewport mobile */
  font-weight: 700;
  font-size: 0.88em;
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.25);
  z-index: 50;
  display: flex;
  flex-wrap: wrap;              /* wrap sur smartphones : nav passe sur 2e ligne */
  justify-content: center;
  row-gap: 6px;
  column-gap: 8px;
  align-items: center;
  color: #1e293b;
  touch-action: none;       /* permet le drag tactile sans scroller */
  user-select: none;
}
.arc-hud.arc-hud-dragging {
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.45);
  cursor: grabbing;
}
.arc-hud-grip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 28px;
  color: #94a3b8;
  cursor: grab;
  flex-shrink: 0;
  font-size: 1.1em;
  line-height: 1;
  letter-spacing: -2px;
  user-select: none;
}
.arc-hud-grip:hover { color: #475569; }
.arc-hud-grip:active { cursor: grabbing; }
.arc-hud-counter, .arc-hud-score, .arc-hud-timer {
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: 6px;
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
  height: 18px;
  background: #cbd5e1;
}
.arc-hud-quit {
  appearance: none;
  border: none;
  background: #f1f5f9;
  color: #64748b;
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 0.85em;
  font-weight: 700;
}
.arc-hud-quit:hover { background: #e2e8f0; color: #1e293b; }

/* Bouton 1UP dans le header ── doré, arcade-style */
.visual-toggle-btn.mini-eye.btn-1up {
  background: linear-gradient(135deg, #fde047, #f59e0b) !important;
  color: #1e293b !important;
  border: none !important;
  font-weight: 900 !important;
  font-size: 0.78em !important;
  box-shadow: 0 2px 6px rgba(217, 119, 6, 0.4);
  letter-spacing: 0.05em;
}
.visual-toggle-btn.mini-eye.btn-1up:hover {
  transform: scale(1.08);
  box-shadow: 0 3px 10px rgba(217, 119, 6, 0.55);
}
`;let D=!1;function b(){if(D)return;D=!0;const t=document.createElement("style");t.textContent=$,document.head.appendChild(t)}function M(t){b();const e=document.createElement("button");return e.type="button",e.className="visual-toggle-btn mini-eye btn-1up",e.title="Démarrer une partie arcade 1UP",e.setAttribute("aria-label","Démarrer une partie arcade"),e.textContent="1UP",e.addEventListener("click",r=>{r.stopPropagation(),L(t)}),e}function ae(t,e){if(!t||!e||e.querySelector(".btn-1up"))return null;const r=M(e);return t.appendChild(r),r}function L(t){b();const e=document.createElement("div");e.className="arc-modal-backdrop",e.innerHTML=`
    <div class="arc-modal" role="dialog" aria-modal="true">
      <h2 class="arc-modal-title">🎮 1UP — Choisis ton mode</h2>
      <p class="arc-modal-sub">6 questions à la suite (8 pour Random Quest)</p>
      <div class="arc-modal-modes">
        <button class="arc-mode-btn arc-mode-F"  data-mode="F">F · Fragile</button>
        <button class="arc-mode-btn arc-mode-S"  data-mode="S">S · Satisfaisant</button>
        <button class="arc-mode-btn arc-mode-TS" data-mode="TS">TS · Très Satis.</button>
        <button class="arc-mode-btn arc-mode-E"  data-mode="E">E · Expert</button>
        <button class="arc-mode-btn arc-mode-R"  data-mode="R">⚡ Rapido · 6 questions mélangées</button>
        <button class="arc-mode-btn arc-mode-RQ" data-mode="RQ">🎯 Random Quest · 4 niveaux × 2</button>
      </div>
      <button class="arc-modal-cancel">Annuler</button>
    </div>
  `,document.body.appendChild(e);const r=()=>e.remove();e.querySelector(".arc-modal-cancel").addEventListener("click",r),e.addEventListener("click",o=>{o.target===e&&r()}),e.querySelectorAll(".arc-mode-btn").forEach(o=>{o.addEventListener("click",()=>{const i=o.dataset.mode;r(),i==="R"?N(t):R(t,i)})})}function N(t){b();const e=document.createElement("div");e.className="arc-modal-backdrop",e.innerHTML=`
    <div class="arc-modal" role="dialog" aria-modal="true">
      <h2 class="arc-modal-title">⚡ Rapido — Temps total</h2>
      <p class="arc-modal-sub">6 questions à enchaîner dans le temps imparti.</p>
      <div class="arc-slider-wrap">
        <label class="arc-slider-label">
          Temps : <span class="arc-slider-value">6 min</span>
        </label>
        <input class="arc-slider" type="range" min="1" max="15" step="1" value="6">
      </div>
      <button class="arc-slider-ok">▶ Démarrer</button>
      <button class="arc-modal-cancel">Annuler</button>
    </div>
  `,document.body.appendChild(e);const r=()=>e.remove(),o=e.querySelector(".arc-slider"),i=e.querySelector(".arc-slider-value");o.addEventListener("input",()=>{i.textContent=`${o.value} min`}),e.querySelector(".arc-slider-ok").addEventListener("click",()=>{const s=parseInt(o.value,10)||6;r(),R(t,"R",{timeSec:s*60})}),e.querySelector(".arc-modal-cancel").addEventListener("click",r),e.addEventListener("click",s=>{s.target===e&&r()})}function R(t,e,r={}){b();const o=e==="RQ"?8:6,i=r.timeSec?Math.round(r.timeSec/60):null,s=C[e]||"🎮",c=w[e]||e,v=V[e]||"",l=document.createElement("div");l.className="arc-modal-backdrop",l.innerHTML=`
    <div class="arc-modal" role="dialog" aria-modal="true" style="position: relative;">
      <h2 class="arc-modal-title">${s} 1UP — ${c}</h2>
      <p class="arc-modal-sub">${v}</p>
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
  `,document.body.appendChild(l);const p=()=>l.remove();l.querySelector(".arc-modal-cancel").addEventListener("click",p),l.addEventListener("click",n=>{n.target===l&&p()}),l.querySelector(".arc-recap-start").addEventListener("click",()=>{p(),P(t,e,r)}),l.querySelector(".arc-recap-share").addEventListener("click",async()=>{const n=z(e,r);try{await navigator.clipboard.writeText(n),U(l.querySelector(".arc-modal"),"🔗 Lien copié !")}catch{prompt("Lien à partager :",n)}})}function z(t,e){const r=new URLSearchParams(location.search);return r.set("arcade",t),e.timeSec?r.set("t",String(e.timeSec)):r.delete("t"),`${location.origin}${location.pathname}?${r}`}function U(t,e){if(!t)return;const r=document.createElement("div");r.className="arc-toast",r.textContent=e,t.appendChild(r),setTimeout(()=>r.remove(),1800)}function oe(t){if(!t)return!1;const e=new URLSearchParams(location.search),r=e.get("arcade");if(!r)return!1;if(r==="pick")return L(t),!0;if(!w[r])return!1;const o=parseInt(e.get("t")||"",10),i=r==="R"&&Number.isFinite(o)&&o>0?{timeSec:o}:{};return R(t,r,i),!0}function S(t){return t?._question||window.__AM_QUESTION__}function Q(t,e){const r=S(t);if(!r?.variantes?.length)return[];const o=!!r.isMix,i=r.variantes,s={};q.forEach(n=>s[n]=[]),i.forEach((n,u)=>{s[n.niveau]&&s[n.niveau].push(u)});const c=n=>n[Math.floor(Math.random()*n.length)],v=(n,u)=>{if(!n.length)return[];if(!o)return Array.from({length:u},()=>c(n));const d=[],g=new Set,m=[...n];for(let _=m.length-1;_>0;_--){const f=Math.floor(Math.random()*(_+1));[m[_],m[f]]=[m[f],m[_]]}for(const _ of m){if(d.length>=u)break;const f=i[_]._sourceRef;(!f||!g.has(f))&&(d.push(_),f&&g.add(f))}for(;d.length<u;)d.push(c(n));return d};if(e==="RQ"){const n=[];q.forEach(u=>{const d=s[u];d.length&&n.push(...v(d,2))});for(let u=n.length-1;u>0;u--){const d=Math.floor(Math.random()*(u+1));[n[u],n[d]]=[n[d],n[u]]}return n}if(e==="R"){const n=i.map((g,m)=>m);if(!n.length)return[];if(o)return v(n,6);const u=[],d=[...n];for(;u.length<6;){d.length||d.push(...n);const g=Math.floor(Math.random()*d.length);u.push(d[g]),d.splice(g,1)}return u}const l=I[e],p=s[l]||[];return p.length?v(p,6):[]}async function P(t,e,r={}){const o=Q(t,e);if(!o.length){alert("Pas de variantes pour ce mode.");return}const s={mode:e,queue:o,idx:0,score:0,hasTimer:e==="R",hasNav:!0,pinnedConfigs:null,qStates:o.map(()=>({status:"none",studentAnswer:null})),timeSec:r.timeSec||0,timeLeft:r.timeSec||0};t._arcade=s,await W(s,t),F(t,s),B(t,s),s.onConfetti=()=>X(t),t.addEventListener("confetti",s.onConfetti),s.hasTimer&&J(t,s),await A(t,o[0]),x(t)}function F(t,e){const r=document.createElement("div");r.className="arc-hud",r.innerHTML=H(e),document.body.appendChild(r),e.hud=r,r.querySelector(".arc-hud-quit").addEventListener("click",()=>T(t,!1)),Y(r),e.hasNav&&(e.nav=r,r.querySelector(".arc-nav-prev").addEventListener("click",()=>G(t)),r.querySelector(".arc-nav-pass").addEventListener("click",()=>K(t)),r.querySelector(".arc-nav-next").addEventListener("click",()=>Z(t)),h(t))}function H(t){const e=t.queue.length,r=t.hasTimer?`<span class="arc-hud-timer">⏱ ${j(t.timeLeft)}</span>`:"",o=t.hasNav?`
    <span class="arc-hud-sep"></span>
    <button class="arc-nav-btn arc-nav-prev" type="button">←</button>
    <button class="arc-nav-btn arc-nav-pass" type="button">⏭ Passer</button>
    <button class="arc-nav-btn arc-nav-next" type="button">Suivant →</button>
  `:"";return`
    <span class="arc-hud-grip" title="Glisser pour déplacer" aria-label="Déplacer le dock">⋮⋮</span>
    <span class="arc-hud-counter"><span class="arc-hud-dot"></span><span class="arc-hud-counter-text">1/${e}</span></span>
    <span class="arc-hud-score">Score 0/${e}</span>
    ${r}
    ${o}
    <span class="arc-hud-sep"></span>
    <button class="arc-hud-quit" type="button">Quitter</button>
  `}function B(t,e){const r=(o,i)=>{const s=t.querySelector(o);s&&(e[i]=s,s.style.visibility="hidden")};r(".bullets-nav","_hiddenBullets"),r(".btn-1up","_hiddenOneUp")}function J(t,e){e.timerId=setInterval(()=>{e.timeLeft--;const r=e.hud?.querySelector(".arc-hud-timer");r&&(r.textContent=`⏱ ${j(e.timeLeft)}`),e.timeLeft<=0&&T(t,!0)},1e3)}function X(t){const e=t._arcade;if(!e)return;const r=e.qStates[e.idx];r.status!=="answered"&&(r.status="answered",e.score++);const o=t.querySelector("math974-axe-gradue");o&&o._studentAnswer!=null&&(r.studentAnswer=o._studentAnswer),x(t),e.hasNav&&h(t)}function j(t){if(t<=0)return"0:00";const e=Math.floor(t/60),r=t%60;return`${e}:${String(r).padStart(2,"0")}`}function Y(t,e){const r=t.querySelector(".arc-hud-grip");if(!r)return;let o=!1,i=0,s=0,c=0,v=0;const l=n=>{if(!o)return;n.preventDefault();const u=n.clientX-i,d=n.clientY-s,g=t.offsetWidth,m=t.offsetHeight,_=window.innerWidth,f=window.innerHeight;let E=c+u,y=v+d;E=Math.max(0,Math.min(E,_-g)),y=Math.max(0,Math.min(y,f-m)),t.style.left=`${E}px`,t.style.top=`${y}px`},p=n=>{o&&(o=!1,t.classList.remove("arc-hud-dragging"),r.releasePointerCapture?.(n.pointerId),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",p))};r.addEventListener("pointerdown",n=>{n.preventDefault(),o=!0,t.classList.add("arc-hud-dragging");const u=t.getBoundingClientRect();c=u.left,v=u.top,t.style.left=`${c}px`,t.style.top=`${v}px`,t.style.bottom="auto",t.style.transform="none",i=n.clientX,s=n.clientY,r.setPointerCapture?.(n.pointerId),window.addEventListener("pointermove",l),window.addEventListener("pointerup",p),window.addEventListener("pointercancel",p)})}async function W(t,e){const r=S(e);if(!r?.variantes){t.pinnedConfigs=[];return}t.pinnedConfigs=[];for(const o of t.queue){const i=r.variantes[o];if(!i?.type||!i.rand){t.pinnedConfigs.push(null);continue}try{const s=await O(Object.assign({"../visuals/addition-posee/addition-posee.js":()=>a(()=>import("./addition-posee.DPJLdQ1c.js"),__vite__mapDeps([0,1])),"../visuals/angle-triangle/angle-triangle.js":()=>a(()=>import("./angle-triangle.DjHJouEB.js"),__vite__mapDeps([2,3])),"../visuals/angles-proprietes/angles-proprietes.js":()=>a(()=>import("./angles-proprietes.B_gg_H92.js"),__vite__mapDeps([4,3])),"../visuals/arbre-construire/arbre-construire.js":()=>a(()=>import("./arbre-construire.DXMAxjnM.js"),__vite__mapDeps([5,6,7,8,9,10,11])),"../visuals/arbre-possibles/arbre-possibles.js":()=>a(()=>import("./arbre-possibles.DzCjmDWS.js"),__vite__mapDeps([12,7,8,9,10,11])),"../visuals/axe-gradue-zefor/axe-gradue-zefor.js":()=>a(()=>import("./axe-gradue-zefor.MccmWQHn.js"),__vite__mapDeps([13,9,7,8,14])),"../visuals/axe-gradue/axe-gradue.js":()=>a(()=>import("./axe-gradue.BmL1oSHW.js"),__vite__mapDeps([14,7,8,9])),"../visuals/axe-gradue/config.js":()=>a(()=>import("./rapidos-visuals-integration.BYCv6gbn.js").then(c=>c.e),__vite__mapDeps([8,9])),"../visuals/axe-gradue/editor.js":()=>a(()=>import("./rapidos-visuals-integration.BYCv6gbn.js").then(c=>c.f),__vite__mapDeps([8,9])),"../visuals/axes-symetrie/axes-symetrie.js":()=>a(()=>import("./axes-symetrie.C7mo3gVG.js"),[]),"../visuals/balance-equilibre/balance-equilibre.js":()=>a(()=>import("./balance-equilibre.C1-C61IB.js"),[]),"../visuals/conversion-unite/conversion-unite.js":()=>a(()=>import("./conversion-unite.BjxQKg47.js"),[]),"../visuals/cubes-numeration/cubes-numeration.js":()=>a(()=>import("./cubes-numeration.B-o8GW0A.js"),[]),"../visuals/cubes-numeration/editor.js":()=>a(()=>import("./rapidos-visuals-integration.BYCv6gbn.js").then(c=>c.g),__vite__mapDeps([8,9])),"../visuals/division-posee/division-posee.js":()=>a(()=>import("./division-posee.DUqZ8JmO.js"),__vite__mapDeps([15,1])),"../visuals/droites-position/droites-position.js":()=>a(()=>import("./droites-position.DpbuDKD0.js"),[]),"../visuals/echelle-probabilite/echelle-probabilite.js":()=>a(()=>import("./echelle-probabilite.B3_BSQ7f.js"),__vite__mapDeps([16,7,8,9])),"../visuals/equation-etayage/equation-etayage.js":()=>a(()=>import("./equation-etayage.DGQzCi--.js"),__vite__mapDeps([17,8,9])),"../visuals/figure-geo/figure-geo.js":()=>a(()=>import("./figure-geo.DqoP6Aap.js"),[]),"../visuals/fraction-figure/fraction-figure.js":()=>a(()=>import("./fraction-figure.DaoBhiz3.js"),[]),"../visuals/linearite-mult/linearite-mult.js":()=>a(()=>import("./linearite-mult.CE-AnZB_.js"),__vite__mapDeps([18,3,7,8,9])),"../visuals/linearite-tableau/linearite-tableau.js":()=>a(()=>import("./linearite-tableau.BzfmQgB0.js"),__vite__mapDeps([19,3,7,8,9])),"../visuals/multiplication-posee/multiplication-posee.js":()=>a(()=>import("./multiplication-posee.bzAMstyG.js"),__vite__mapDeps([20,1])),"../visuals/ordre-nombres/ordre-nombres.js":()=>a(()=>import("./ordre-nombres.hxXp-yoB.js"),[]),"../visuals/polygone-perimetre/editor.js":()=>a(()=>import("./rapidos-visuals-integration.BYCv6gbn.js").then(c=>c.i),__vite__mapDeps([8,9])),"../visuals/polygone-perimetre/polygone-perimetre.js":()=>a(()=>import("./polygone-perimetre.CxJZ28dg.js"),__vite__mapDeps([21,9])),"../visuals/programme-scratch/programme-scratch.js":()=>a(()=>import("./programme-scratch.CU4ExXqt.js"),[]),"../visuals/proportionnalite/utils.js":()=>a(()=>import("./utils.MftNdmoG.js"),[]),"../visuals/pythagore-figure/pythagore-figure.js":()=>a(()=>import("./pythagore-figure.2bsq4kjy.js"),__vite__mapDeps([22,23,7,8,9])),"../visuals/quadrilatere-codage/quadrilatere-codage.js":()=>a(()=>import("./quadrilatere-codage.DnhQLpsp.js"),[]),"../visuals/retour-unite-zefor/retour-unite-zefor.js":()=>a(()=>import("./retour-unite-zefor.BRdxIV-D.js"),__vite__mapDeps([24,9,1,25,3,7,8])),"../visuals/retour-unite/retour-unite.js":()=>a(()=>import("./retour-unite.BNFrRBWU.js"),__vite__mapDeps([25,1,3,7,8,9])),"../visuals/schema-additif/editor.js":()=>a(()=>import("./rapidos-visuals-integration.BYCv6gbn.js").then(c=>c.j),__vite__mapDeps([8,9])),"../visuals/schema-additif/schema-additif.js":()=>a(()=>import("./schema-additif.B0eHxs8_.js"),__vite__mapDeps([26,9,7,8])),"../visuals/schema-comparaison-mult/schema-comparaison-mult.js":()=>a(()=>import("./schema-comparaison-mult.BGwNphN8.js"),__vite__mapDeps([27,7,8,9,28,29,11])),"../visuals/schema-comparaison/schema-comparaison.js":()=>a(()=>import("./schema-comparaison.DMqdsQAb.js"),__vite__mapDeps([30,7,8,9,31,29,11])),"../visuals/schema-construire-comp-mult/schema-construire-comp-mult.js":()=>a(()=>import("./schema-construire-comp-mult.pX_KUb7T.js"),__vite__mapDeps([32,6,7,8,9,28,29,11])),"../visuals/schema-construire-comp/schema-construire-comp.js":()=>a(()=>import("./schema-construire-comp.C42l27e-.js"),__vite__mapDeps([33,6,7,8,9,31,29,11])),"../visuals/schema-construire-mult/schema-construire-mult.js":()=>a(()=>import("./schema-construire-mult.DN7S8_xU.js"),__vite__mapDeps([34,6,7,8,9,35,29,11])),"../visuals/schema-construire/schema-construire.js":()=>a(()=>import("./schema-construire.D1S0pNrr.js"),__vite__mapDeps([36,6,7,8,9,37,29,11])),"../visuals/schema-multiplicatif/schema-multiplicatif.js":()=>a(()=>import("./schema-multiplicatif.DbiHUXlQ.js"),__vite__mapDeps([38,7,8,9])),"../visuals/schema/arbre.js":()=>a(()=>import("./arbre.C7zSmtf2.js"),__vite__mapDeps([10,11])),"../visuals/schema/bar-additif.js":()=>a(()=>import("./bar-additif.Cv2D3s3G.js"),__vite__mapDeps([37,29,11])),"../visuals/schema/bar-comparaison-mult.js":()=>a(()=>import("./bar-comparaison-mult.DP02BSw_.js"),__vite__mapDeps([28,29,11])),"../visuals/schema/bar-comparaison.js":()=>a(()=>import("./bar-comparaison.CyAI7uHR.js"),__vite__mapDeps([31,29,11])),"../visuals/schema/bar-geom.js":()=>a(()=>import("./bar-geom.qOvxJNxq.js"),[]),"../visuals/schema/bar-mult.js":()=>a(()=>import("./bar-mult.BDRYgsTx.js"),__vite__mapDeps([35,29,11])),"../visuals/schema/builder-core.js":()=>a(()=>import("./builder-core.vk1sRU96.js"),__vite__mapDeps([6,7,8,9])),"../visuals/schema/ink.js":()=>a(()=>import("./ink.DbHLEoN5.js"),[]),"../visuals/shared/autoscale.js":()=>a(()=>import("./autoscale.BaubB0y5.js"),[]),"../visuals/shared/vis-input.js":()=>a(()=>import("./vis-input.0hz6aJN5.js"),[]),"../visuals/solide-nom/solide-nom.js":()=>a(()=>import("./solide-nom.Bfmf5iRT.js"),[]),"../visuals/soustraction-posee/soustraction-posee.js":()=>a(()=>import("./soustraction-posee.CIWRpGOn.js"),__vite__mapDeps([39,1])),"../visuals/suite-figures/suite-figures.js":()=>a(()=>import("./suite-figures.BSb9W0Gx.js"),[]),"../visuals/symetrie-diag/symetrie-diag.js":()=>a(()=>import("./symetrie-diag.CGBDIby7.js"),[]),"../visuals/symetrie-quadrillage/symetrie-quadrillage.js":()=>a(()=>import("./symetrie-quadrillage.Dvl6qQkA.js"),[]),"../visuals/texte-trous/config.js":()=>a(()=>import("./editor.CJZspgfY.js").then(c=>c.c),[]),"../visuals/texte-trous/editor.js":()=>a(()=>import("./editor.CJZspgfY.js").then(c=>c.e),[]),"../visuals/texte-trous/texte-trous.js":()=>a(()=>import("./texte-trous.xP0OGRoT.js"),__vite__mapDeps([40,7,8,9])),"../visuals/thales-figure/thales-figure.js":()=>a(()=>import("./thales-figure.DQZz2RT-.js"),__vite__mapDeps([41,23,7,8,9])),"../visuals/trajet-scratch/trajet-scratch.js":()=>a(()=>import("./trajet-scratch.U_b3haCn.js"),[]),"../visuals/triangle-nature/triangle-nature.js":()=>a(()=>import("./triangle-nature.DwsjpwSo.js"),[]),"../visuals/trigo-figure/trigo-figure.js":()=>a(()=>import("./trigo-figure.Cx9r5f4w.js"),__vite__mapDeps([42,23,7,8,9]))}),`../visuals/${i.type}/${i.type}.js`,4);if(s.randomize){const c=await s.randomize(JSON.parse(JSON.stringify(i.config||{})),i.rand,i.config||{});t.pinnedConfigs.push(c)}else t.pinnedConfigs.push(null)}catch{t.pinnedConfigs.push(null)}}}function h(t){const e=t._arcade;if(!e?.nav)return;const r=e.qStates[e.idx];e.nav.querySelector(".arc-nav-prev").disabled=e.idx===0;const o=r.status!=="none",i=e.nav.querySelector(".arc-nav-next");i.disabled=!o,i.classList.toggle("arc-nav-next-ok",o),e.nav.querySelector(".arc-nav-pass").disabled=r.status==="answered"}async function G(t){const e=t._arcade;e.idx!==0&&(e.idx--,await A(t,e.queue[e.idx]),x(t),h(t))}function K(t){const e=t._arcade;e.qStates[e.idx].status==="none"&&(e.qStates[e.idx].status="passed"),h(t)}async function Z(t){const e=t._arcade;if(e.qStates[e.idx].status!=="none"){if(e.idx++,e.idx>=e.queue.length){T(t,!0);return}await A(t,e.queue[e.idx]),x(t),h(t)}}function x(t){const e=t._arcade;if(!e?.hud)return;e.hud.querySelector(".arc-hud-counter-text").textContent=`${e.idx+1}/${e.queue.length}`,e.hud.querySelector(".arc-hud-score").textContent=`Score ${e.score}/${e.queue.length}`;const r=e.hud.querySelector(".arc-hud-dot"),o=e.queue[e.idx],i=S(t)?.variantes?.[o]?.niveau;r&&(i?r.setAttribute("data-niveau",i):r.removeAttribute("data-niveau"))}async function A(t,e){const r=t._arcade,o=t.querySelector(`.bullet[data-variant="${e}"]`);if(o&&(t.querySelectorAll(".bullet").forEach(i=>i.classList.remove("active")),o.classList.add("active")),t.querySelectorAll(".variant-content").forEach((i,s)=>i.classList.toggle("active",s===e)),t.querySelectorAll(".gs-ref-badge").forEach((i,s)=>i.classList.toggle("active",s===e)),r?.pinnedConfigs){const i=r.pinnedConfigs[r.idx],s=t.querySelector(`.variant-content[data-index="${e}"]`);s?.visualData&&i&&(s.visualData.config=JSON.parse(JSON.stringify(i)),s.visualData.rand=null)}if(await k(t,e,!r?.pinnedConfigs),window.MathJax&&window.MathJax.typesetPromise([t]).catch(()=>{}),r){const i=r.qStates[r.idx];i.studentAnswer!=null&&requestAnimationFrame(()=>ee(t,i))}}function ee(t,e){const r=t.querySelector("math974-axe-gradue");r&&e.studentAnswer!=null&&typeof r.draw=="function"&&(r._studentAnswer=e.studentAnswer,r.draw())}function T(t,e){const r=t._arcade;if(!r||(t.removeEventListener("confetti",r.onConfetti),r.timerId&&clearInterval(r.timerId),r.hud?.remove(),r._hiddenBullets&&(r._hiddenBullets.style.visibility=""),r._hiddenOneUp&&(r._hiddenOneUp.style.visibility=""),delete t._arcade,!e))return;const o=document.createElement("div");o.className="arc-modal-backdrop";const i=Math.round(r.score/r.queue.length*100),s=r.score===r.queue.length?"🏆🏆🏆":i>=70?"🏆🏆":i>=40?"🏆":"💪";o.innerHTML=`
    <div class="arc-modal" role="dialog" aria-modal="true">
      <h2 class="arc-modal-title">${s} 1UP terminé !</h2>
      <p class="arc-modal-sub">
        Mode : <strong>${w[r.mode]}</strong><br>
        Score : <strong>${r.score} / ${r.queue.length}</strong> (${i} %)
      </p>
      <div class="arc-modal-modes" style="grid-template-columns: 1fr 1fr 1fr;">
        <button class="arc-mode-btn arc-mode-F" data-action="replay">🔁 Rejouer</button>
        <button class="arc-mode-btn arc-mode-S" data-action="newmode">🎮 Nouveau mode</button>
        <button class="arc-mode-btn arc-mode-RQ" data-action="quit" style="grid-column: auto;">Quitter</button>
      </div>
    </div>
  `,document.body.appendChild(o),o.querySelector('[data-action="replay"]').addEventListener("click",()=>{o.remove(),P(t,r.mode)}),o.querySelector('[data-action="newmode"]').addEventListener("click",()=>{o.remove(),L(t)}),o.querySelector('[data-action="quit"]').addEventListener("click",()=>{o.remove()})}export{M as createArcadeButton,ae as mountArcadeButton,R as showArcadeRecap,P as startArcade,oe as tryAutoOpenFromUrl};
