const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/addition-posee.DPJLdQ1c.js","_astro/vis-input.0hz6aJN5.js","_astro/angle-triangle.DjHJouEB.js","_astro/utils.MftNdmoG.js","_astro/angles-proprietes.B_gg_H92.js","_astro/arbre-construire.CzmehX9U.js","_astro/builder-core.Ccai-TH6.js","_astro/fullscreen-viewer.Cyv3ESwm.js","_astro/editor.CJZspgfY.js","_astro/arbre.C7zSmtf2.js","_astro/bar-geom.qOvxJNxq.js","_astro/arbre-possibles.C-a_6hj7.js","_astro/axe-gradue-zefor.K6k_844E.js","_astro/axe-gradue.BK9849N0.js","_astro/division-posee.DUqZ8JmO.js","_astro/echelle-probabilite.DFvmu29E.js","_astro/linearite-mult.CGXjQb0b.js","_astro/linearite-tableau.DG3bda1J.js","_astro/multiplication-posee.bzAMstyG.js","_astro/polygone-perimetre.DsGG7WXh.js","_astro/pythagore-figure.Blqflojk.js","_astro/figure-validation.B-A887G4.js","_astro/retour-unite-zefor.D0ABIXMa.js","_astro/retour-unite.DWEQ68NB.js","_astro/schema-additif.DJ6PwJ_p.js","_astro/schema-comparaison-mult.BdONw9yw.js","_astro/bar-comparaison-mult.DP02BSw_.js","_astro/ink.DbHLEoN5.js","_astro/schema-comparaison.DOVchaqy.js","_astro/bar-comparaison.CyAI7uHR.js","_astro/schema-construire-comp-mult.CIa9BGU4.js","_astro/schema-construire-comp.DWYnu4FV.js","_astro/schema-construire-mult.DBwqEp2M.js","_astro/bar-mult.BDRYgsTx.js","_astro/schema-construire.BhxszHAW.js","_astro/bar-additif.Cv2D3s3G.js","_astro/schema-multiplicatif.DG3mGu-P.js","_astro/soustraction-posee.CIWRpGOn.js","_astro/texte-trous.BTNU64_L.js","_astro/thales-figure.C8jMO9Bn.js","_astro/trigo-figure.tl-i7ISf.js"])))=>i.map(i=>d[i]);
import{_ as r}from"./editor.CJZspgfY.js";import{_ as O,h as I}from"./fullscreen-viewer.Cyv3ESwm.js";const S=["fragile","satisfaisant","tres-satisfaisant","expert"],h={F:"Fragile",S:"Satisfaisant",TS:"Très Satisfaisant",E:"Expert",R:"Rapido",RQ:"Random Quest"},k={F:"fragile",S:"satisfaisant",TS:"tres-satisfaisant",E:"expert"},j={F:"Une série de 6 questions de niveau Fragile — pour t'échauffer.",S:"6 questions de niveau Satisfaisant — le standard du cycle.",TS:"6 questions de niveau Très Satisfaisant — un cran au-dessus.",E:"6 questions de niveau Expert — entraînement musclé.",R:"6 questions tous niveaux mélangés, chronométrées.",RQ:"8 questions (chaque niveau × 2), randomisées — la quête complète."},V={F:"🟡",S:"🟢",TS:"🟢",E:"🌟",R:"⚡",RQ:"🎯"},C=`
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

/* HUD pendant la session arcade ── dock unique centré en bas de la card.
   Remonté de 48px pour éviter la dev-bar Astro qui apparaît au survol du
   bord bas en dev. En mode R, les boutons de navigation s'intègrent ici. */
.arc-hud {
  position: absolute;
  bottom: 48px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border: 2px solid #6366f1;
  border-radius: 999px;
  padding: 4px 4px 4px 4px;
  font-weight: 700;
  font-size: 0.88em;
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.25);
  z-index: 50;
  display: flex;
  gap: 10px;
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
`;let A=!1;function v(){if(A)return;A=!0;const t=document.createElement("style");t.textContent=C,document.head.appendChild(t)}function $(t){v();const e=document.createElement("button");return e.type="button",e.className="visual-toggle-btn mini-eye btn-1up",e.title="Démarrer une partie arcade 1UP",e.setAttribute("aria-label","Démarrer une partie arcade"),e.textContent="1UP",e.addEventListener("click",a=>{a.stopPropagation(),x(t)}),e}function ae(t,e){if(!t||!e||e.querySelector(".btn-1up"))return null;const a=$(e);return t.appendChild(a),a}function x(t){v();const e=document.createElement("div");e.className="arc-modal-backdrop",e.innerHTML=`
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
  `,document.body.appendChild(e);const a=()=>e.remove();e.querySelector(".arc-modal-cancel").addEventListener("click",a),e.addEventListener("click",o=>{o.target===e&&a()}),e.querySelectorAll(".arc-mode-btn").forEach(o=>{o.addEventListener("click",()=>{const i=o.dataset.mode;a(),i==="R"?M(t):E(t,i)})})}function M(t){v();const e=document.createElement("div");e.className="arc-modal-backdrop",e.innerHTML=`
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
  `,document.body.appendChild(e);const a=()=>e.remove(),o=e.querySelector(".arc-slider"),i=e.querySelector(".arc-slider-value");o.addEventListener("input",()=>{i.textContent=`${o.value} min`}),e.querySelector(".arc-slider-ok").addEventListener("click",()=>{const n=parseInt(o.value,10)||6;a(),E(t,"R",{timeSec:n*60})}),e.querySelector(".arc-modal-cancel").addEventListener("click",a),e.addEventListener("click",n=>{n.target===e&&a()})}function E(t,e,a={}){v();const o=e==="RQ"?8:6,i=a.timeSec?Math.round(a.timeSec/60):null,n=V[e]||"🎮",u=h[e]||e,c=j[e]||"",s=document.createElement("div");s.className="arc-modal-backdrop",s.innerHTML=`
    <div class="arc-modal" role="dialog" aria-modal="true" style="position: relative;">
      <h2 class="arc-modal-title">${n} 1UP — ${u}</h2>
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
  `,document.body.appendChild(s);const d=()=>s.remove();s.querySelector(".arc-modal-cancel").addEventListener("click",d),s.addEventListener("click",l=>{l.target===s&&d()}),s.querySelector(".arc-recap-start").addEventListener("click",()=>{d(),T(t,e,a)}),s.querySelector(".arc-recap-share").addEventListener("click",async()=>{const l=N(e,a);try{await navigator.clipboard.writeText(l),z(s.querySelector(".arc-modal"),"🔗 Lien copié !")}catch{prompt("Lien à partager :",l)}})}function N(t,e){const a=new URLSearchParams(location.search);return a.set("arcade",t),e.timeSec?a.set("t",String(e.timeSec)):a.delete("t"),`${location.origin}${location.pathname}?${a}`}function z(t,e){if(!t)return;const a=document.createElement("div");a.className="arc-toast",a.textContent=e,t.appendChild(a),setTimeout(()=>a.remove(),1800)}function re(t){if(!t)return!1;const e=new URLSearchParams(location.search),a=e.get("arcade");if(!a)return!1;if(a==="pick")return x(t),!0;if(!h[a])return!1;const o=parseInt(e.get("t")||"",10),i=a==="R"&&Number.isFinite(o)&&o>0?{timeSec:o}:{};return E(t,a,i),!0}function y(t){return t?._question||window.__AM_QUESTION__}function U(t,e){const a=y(t);if(!a?.variantes?.length)return[];const o={};S.forEach(c=>o[c]=[]),a.variantes.forEach((c,s)=>{o[c.niveau]&&o[c.niveau].push(s)});const i=c=>c[Math.floor(Math.random()*c.length)];if(e==="RQ"){const c=[];S.forEach(s=>{const d=o[s];d.length&&c.push(i(d),i(d))});for(let s=c.length-1;s>0;s--){const d=Math.floor(Math.random()*(s+1));[c[s],c[d]]=[c[d],c[s]]}return c}if(e==="R"){const c=a.variantes.map((l,p)=>p);if(!c.length)return[];const s=[],d=[...c];for(;s.length<6;){d.length||d.push(...c);const l=Math.floor(Math.random()*d.length);s.push(d[l]),d.splice(l,1)}return s}const n=k[e],u=o[n]||[];return u.length?Array.from({length:6},()=>i(u)):[]}async function T(t,e,a={}){const o=U(t,e);if(!o.length){alert("Pas de variantes pour ce mode.");return}const n={mode:e,queue:o,idx:0,score:0,hasTimer:e==="R",hasNav:!0,pinnedConfigs:null,qStates:o.map(()=>({status:"none",studentAnswer:null})),timeSec:a.timeSec||0,timeLeft:a.timeSec||0};t._arcade=n,await Y(n,t),Q(t,n),B(t,n),n.onConfetti=()=>J(t),t.addEventListener("confetti",n.onConfetti),n.hasTimer&&H(t,n),await L(t,o[0]),f(t)}function Q(t,e){const a=document.createElement("div");a.className="arc-hud",a.innerHTML=F(e),t.appendChild(a),e.hud=a,a.querySelector(".arc-hud-quit").addEventListener("click",()=>R(t,!1)),X(a,t),e.hasNav&&(e.nav=a,a.querySelector(".arc-nav-prev").addEventListener("click",()=>G(t)),a.querySelector(".arc-nav-pass").addEventListener("click",()=>W(t)),a.querySelector(".arc-nav-next").addEventListener("click",()=>K(t)),m(t))}function F(t){const e=t.queue.length,a=t.hasTimer?`<span class="arc-hud-timer">⏱ ${q(t.timeLeft)}</span>`:"",o=t.hasNav?`
    <span class="arc-hud-sep"></span>
    <button class="arc-nav-btn arc-nav-prev" type="button">←</button>
    <button class="arc-nav-btn arc-nav-pass" type="button">⏭ Passer</button>
    <button class="arc-nav-btn arc-nav-next" type="button">Suivant →</button>
  `:"";return`
    <span class="arc-hud-grip" title="Glisser pour déplacer" aria-label="Déplacer le dock">⋮⋮</span>
    <span class="arc-hud-counter"><span class="arc-hud-dot"></span><span class="arc-hud-counter-text">1/${e}</span></span>
    <span class="arc-hud-score">Score 0/${e}</span>
    ${a}
    ${o}
    <span class="arc-hud-sep"></span>
    <button class="arc-hud-quit" type="button">Quitter</button>
  `}function B(t,e){const a=(o,i)=>{const n=t.querySelector(o);n&&(e[i]=n,n.style.visibility="hidden")};a(".bullets-nav","_hiddenBullets"),a(".btn-1up","_hiddenOneUp")}function H(t,e){e.timerId=setInterval(()=>{e.timeLeft--;const a=e.hud?.querySelector(".arc-hud-timer");a&&(a.textContent=`⏱ ${q(e.timeLeft)}`),e.timeLeft<=0&&R(t,!0)},1e3)}function J(t){const e=t._arcade;if(!e)return;const a=e.qStates[e.idx];a.status!=="answered"&&(a.status="answered",e.score++);const o=t.querySelector("math974-axe-gradue");o&&o._studentAnswer!=null&&(a.studentAnswer=o._studentAnswer),f(t),e.hasNav&&m(t)}function q(t){if(t<=0)return"0:00";const e=Math.floor(t/60),a=t%60;return`${e}:${String(a).padStart(2,"0")}`}function X(t,e){const a=t.querySelector(".arc-hud-grip");if(!a)return;let o=!1,i=0,n=0,u=0,c=0;const s=l=>{if(!o)return;l.preventDefault();const p=l.clientX-i,_=l.clientY-n,w=e.getBoundingClientRect(),D=t.offsetWidth,P=t.offsetHeight;let g=u+p,b=c+_;g=Math.max(0,Math.min(g,w.width-D)),b=Math.max(0,Math.min(b,w.height-P)),t.style.left=`${g}px`,t.style.top=`${b}px`},d=l=>{o&&(o=!1,t.classList.remove("arc-hud-dragging"),a.releasePointerCapture?.(l.pointerId),window.removeEventListener("pointermove",s),window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",d))};a.addEventListener("pointerdown",l=>{l.preventDefault(),o=!0,t.classList.add("arc-hud-dragging");const p=e.getBoundingClientRect(),_=t.getBoundingClientRect();u=_.left-p.left,c=_.top-p.top,t.style.left=`${u}px`,t.style.top=`${c}px`,t.style.bottom="auto",t.style.transform="none",i=l.clientX,n=l.clientY,a.setPointerCapture?.(l.pointerId),window.addEventListener("pointermove",s),window.addEventListener("pointerup",d),window.addEventListener("pointercancel",d)})}async function Y(t,e){const a=y(e);if(!a?.variantes){t.pinnedConfigs=[];return}t.pinnedConfigs=[];for(const o of t.queue){const i=a.variantes[o];if(!i?.type||!i.rand){t.pinnedConfigs.push(null);continue}try{const n=await O(Object.assign({"../visuals/addition-posee/addition-posee.js":()=>r(()=>import("./addition-posee.DPJLdQ1c.js"),__vite__mapDeps([0,1])),"../visuals/angle-triangle/angle-triangle.js":()=>r(()=>import("./angle-triangle.DjHJouEB.js"),__vite__mapDeps([2,3])),"../visuals/angles-proprietes/angles-proprietes.js":()=>r(()=>import("./angles-proprietes.B_gg_H92.js"),__vite__mapDeps([4,3])),"../visuals/arbre-construire/arbre-construire.js":()=>r(()=>import("./arbre-construire.CzmehX9U.js"),__vite__mapDeps([5,6,7,8,9,10])),"../visuals/arbre-possibles/arbre-possibles.js":()=>r(()=>import("./arbre-possibles.C-a_6hj7.js"),__vite__mapDeps([11,7,8,9,10])),"../visuals/axe-gradue-zefor/axe-gradue-zefor.js":()=>r(()=>import("./axe-gradue-zefor.K6k_844E.js"),__vite__mapDeps([12,8,7,13])),"../visuals/axe-gradue/axe-gradue.js":()=>r(()=>import("./axe-gradue.BK9849N0.js"),__vite__mapDeps([13,7,8])),"../visuals/axe-gradue/config.js":()=>r(()=>import("./fullscreen-viewer.Cyv3ESwm.js").then(u=>u.e),__vite__mapDeps([7,8])),"../visuals/axe-gradue/editor.js":()=>r(()=>import("./fullscreen-viewer.Cyv3ESwm.js").then(u=>u.f),__vite__mapDeps([7,8])),"../visuals/axes-symetrie/axes-symetrie.js":()=>r(()=>import("./axes-symetrie.C7mo3gVG.js"),[]),"../visuals/balance-equilibre/balance-equilibre.js":()=>r(()=>import("./balance-equilibre.C1-C61IB.js"),[]),"../visuals/conversion-unite/conversion-unite.js":()=>r(()=>import("./conversion-unite.BjxQKg47.js"),[]),"../visuals/cubes-numeration/cubes-numeration.js":()=>r(()=>import("./cubes-numeration.B-o8GW0A.js"),[]),"../visuals/cubes-numeration/editor.js":()=>r(()=>import("./fullscreen-viewer.Cyv3ESwm.js").then(u=>u.k),__vite__mapDeps([7,8])),"../visuals/division-posee/division-posee.js":()=>r(()=>import("./division-posee.DUqZ8JmO.js"),__vite__mapDeps([14,1])),"../visuals/droites-position/droites-position.js":()=>r(()=>import("./droites-position.DpbuDKD0.js"),[]),"../visuals/echelle-probabilite/echelle-probabilite.js":()=>r(()=>import("./echelle-probabilite.DFvmu29E.js"),__vite__mapDeps([15,7,8])),"../visuals/figure-geo/figure-geo.js":()=>r(()=>import("./figure-geo.DqoP6Aap.js"),[]),"../visuals/fraction-figure/fraction-figure.js":()=>r(()=>import("./fraction-figure.DaoBhiz3.js"),[]),"../visuals/linearite-mult/linearite-mult.js":()=>r(()=>import("./linearite-mult.CGXjQb0b.js"),__vite__mapDeps([16,3,7,8])),"../visuals/linearite-tableau/linearite-tableau.js":()=>r(()=>import("./linearite-tableau.DG3bda1J.js"),__vite__mapDeps([17,3,7,8])),"../visuals/multiplication-posee/multiplication-posee.js":()=>r(()=>import("./multiplication-posee.bzAMstyG.js"),__vite__mapDeps([18,1])),"../visuals/ordre-nombres/ordre-nombres.js":()=>r(()=>import("./ordre-nombres.hxXp-yoB.js"),[]),"../visuals/polygone-perimetre/editor.js":()=>r(()=>import("./fullscreen-viewer.Cyv3ESwm.js").then(u=>u.l),__vite__mapDeps([7,8])),"../visuals/polygone-perimetre/polygone-perimetre.js":()=>r(()=>import("./polygone-perimetre.DsGG7WXh.js"),__vite__mapDeps([19,8])),"../visuals/programme-scratch/programme-scratch.js":()=>r(()=>import("./programme-scratch.CU4ExXqt.js"),[]),"../visuals/proportionnalite/utils.js":()=>r(()=>import("./utils.MftNdmoG.js"),[]),"../visuals/pythagore-figure/pythagore-figure.js":()=>r(()=>import("./pythagore-figure.Blqflojk.js"),__vite__mapDeps([20,21,7,8])),"../visuals/quadrilatere-codage/quadrilatere-codage.js":()=>r(()=>import("./quadrilatere-codage.DnhQLpsp.js"),[]),"../visuals/retour-unite-zefor/retour-unite-zefor.js":()=>r(()=>import("./retour-unite-zefor.D0ABIXMa.js"),__vite__mapDeps([22,8,1,23,3,7])),"../visuals/retour-unite/retour-unite.js":()=>r(()=>import("./retour-unite.DWEQ68NB.js"),__vite__mapDeps([23,1,3,7,8])),"../visuals/schema-additif/editor.js":()=>r(()=>import("./fullscreen-viewer.Cyv3ESwm.js").then(u=>u.m),__vite__mapDeps([7,8])),"../visuals/schema-additif/schema-additif.js":()=>r(()=>import("./schema-additif.DJ6PwJ_p.js"),__vite__mapDeps([24,8,7])),"../visuals/schema-comparaison-mult/schema-comparaison-mult.js":()=>r(()=>import("./schema-comparaison-mult.BdONw9yw.js"),__vite__mapDeps([25,7,8,26,27,10])),"../visuals/schema-comparaison/schema-comparaison.js":()=>r(()=>import("./schema-comparaison.DOVchaqy.js"),__vite__mapDeps([28,7,8,29,27,10])),"../visuals/schema-construire-comp-mult/schema-construire-comp-mult.js":()=>r(()=>import("./schema-construire-comp-mult.CIa9BGU4.js"),__vite__mapDeps([30,6,7,8,26,27,10])),"../visuals/schema-construire-comp/schema-construire-comp.js":()=>r(()=>import("./schema-construire-comp.DWYnu4FV.js"),__vite__mapDeps([31,6,7,8,29,27,10])),"../visuals/schema-construire-mult/schema-construire-mult.js":()=>r(()=>import("./schema-construire-mult.DBwqEp2M.js"),__vite__mapDeps([32,6,7,8,33,27,10])),"../visuals/schema-construire/schema-construire.js":()=>r(()=>import("./schema-construire.BhxszHAW.js"),__vite__mapDeps([34,6,7,8,35,27,10])),"../visuals/schema-multiplicatif/schema-multiplicatif.js":()=>r(()=>import("./schema-multiplicatif.DG3mGu-P.js"),__vite__mapDeps([36,7,8])),"../visuals/schema/arbre.js":()=>r(()=>import("./arbre.C7zSmtf2.js"),__vite__mapDeps([9,10])),"../visuals/schema/bar-additif.js":()=>r(()=>import("./bar-additif.Cv2D3s3G.js"),__vite__mapDeps([35,27,10])),"../visuals/schema/bar-comparaison-mult.js":()=>r(()=>import("./bar-comparaison-mult.DP02BSw_.js"),__vite__mapDeps([26,27,10])),"../visuals/schema/bar-comparaison.js":()=>r(()=>import("./bar-comparaison.CyAI7uHR.js"),__vite__mapDeps([29,27,10])),"../visuals/schema/bar-geom.js":()=>r(()=>import("./bar-geom.qOvxJNxq.js"),[]),"../visuals/schema/bar-mult.js":()=>r(()=>import("./bar-mult.BDRYgsTx.js"),__vite__mapDeps([33,27,10])),"../visuals/schema/builder-core.js":()=>r(()=>import("./builder-core.Ccai-TH6.js"),__vite__mapDeps([6,7,8])),"../visuals/schema/ink.js":()=>r(()=>import("./ink.DbHLEoN5.js"),[]),"../visuals/shared/autoscale.js":()=>r(()=>import("./autoscale.BaubB0y5.js"),[]),"../visuals/shared/vis-input.js":()=>r(()=>import("./vis-input.0hz6aJN5.js"),[]),"../visuals/solide-nom/solide-nom.js":()=>r(()=>import("./solide-nom.Bfmf5iRT.js"),[]),"../visuals/soustraction-posee/soustraction-posee.js":()=>r(()=>import("./soustraction-posee.CIWRpGOn.js"),__vite__mapDeps([37,1])),"../visuals/suite-figures/suite-figures.js":()=>r(()=>import("./suite-figures.BSb9W0Gx.js"),[]),"../visuals/symetrie-diag/symetrie-diag.js":()=>r(()=>import("./symetrie-diag.CGBDIby7.js"),[]),"../visuals/symetrie-quadrillage/symetrie-quadrillage.js":()=>r(()=>import("./symetrie-quadrillage.Dvl6qQkA.js"),[]),"../visuals/texte-trous/config.js":()=>r(()=>import("./editor.CJZspgfY.js").then(u=>u.c),[]),"../visuals/texte-trous/editor.js":()=>r(()=>import("./editor.CJZspgfY.js").then(u=>u.e),[]),"../visuals/texte-trous/texte-trous.js":()=>r(()=>import("./texte-trous.BTNU64_L.js"),__vite__mapDeps([38,7,8])),"../visuals/thales-figure/thales-figure.js":()=>r(()=>import("./thales-figure.C8jMO9Bn.js"),__vite__mapDeps([39,21,7,8])),"../visuals/trajet-scratch/trajet-scratch.js":()=>r(()=>import("./trajet-scratch.U_b3haCn.js"),[]),"../visuals/triangle-nature/triangle-nature.js":()=>r(()=>import("./triangle-nature.DwsjpwSo.js"),[]),"../visuals/trigo-figure/trigo-figure.js":()=>r(()=>import("./trigo-figure.tl-i7ISf.js"),__vite__mapDeps([40,21,7,8]))}),`../visuals/${i.type}/${i.type}.js`,4);if(n.randomize){const u=await n.randomize(JSON.parse(JSON.stringify(i.config||{})),i.rand,i.config||{});t.pinnedConfigs.push(u)}else t.pinnedConfigs.push(null)}catch{t.pinnedConfigs.push(null)}}}function m(t){const e=t._arcade;if(!e?.nav)return;const a=e.qStates[e.idx];e.nav.querySelector(".arc-nav-prev").disabled=e.idx===0;const o=a.status!=="none",i=e.nav.querySelector(".arc-nav-next");i.disabled=!o,i.classList.toggle("arc-nav-next-ok",o),e.nav.querySelector(".arc-nav-pass").disabled=a.status==="answered"}async function G(t){const e=t._arcade;e.idx!==0&&(e.idx--,await L(t,e.queue[e.idx]),f(t),m(t))}function W(t){const e=t._arcade;e.qStates[e.idx].status==="none"&&(e.qStates[e.idx].status="passed"),m(t)}async function K(t){const e=t._arcade;if(e.qStates[e.idx].status!=="none"){if(e.idx++,e.idx>=e.queue.length){R(t,!0);return}await L(t,e.queue[e.idx]),f(t),m(t)}}function f(t){const e=t._arcade;if(!e?.hud)return;e.hud.querySelector(".arc-hud-counter-text").textContent=`${e.idx+1}/${e.queue.length}`,e.hud.querySelector(".arc-hud-score").textContent=`Score ${e.score}/${e.queue.length}`;const a=e.hud.querySelector(".arc-hud-dot"),o=e.queue[e.idx],i=y(t)?.variantes?.[o]?.niveau;a&&(i?a.setAttribute("data-niveau",i):a.removeAttribute("data-niveau"))}async function L(t,e){const a=t._arcade,o=t.querySelector(`.bullet[data-variant="${e}"]`);if(o&&(t.querySelectorAll(".bullet").forEach(i=>i.classList.remove("active")),o.classList.add("active")),t.querySelectorAll(".variant-content").forEach((i,n)=>i.classList.toggle("active",n===e)),t.querySelectorAll(".gs-ref-badge").forEach((i,n)=>i.classList.toggle("active",n===e)),a?.pinnedConfigs){const i=a.pinnedConfigs[a.idx],n=t.querySelector(`.variant-content[data-index="${e}"]`);n?.visualData&&i&&(n.visualData.config=JSON.parse(JSON.stringify(i)),n.visualData.rand=null)}if(await I(t,e,!a?.pinnedConfigs),window.MathJax&&window.MathJax.typesetPromise([t]).catch(()=>{}),a){const i=a.qStates[a.idx];i.studentAnswer!=null&&requestAnimationFrame(()=>Z(t,i))}}function Z(t,e){const a=t.querySelector("math974-axe-gradue");a&&e.studentAnswer!=null&&typeof a.draw=="function"&&(a._studentAnswer=e.studentAnswer,a.draw())}function R(t,e){const a=t._arcade;if(!a||(t.removeEventListener("confetti",a.onConfetti),a.timerId&&clearInterval(a.timerId),a.hud?.remove(),a._hiddenBullets&&(a._hiddenBullets.style.visibility=""),a._hiddenOneUp&&(a._hiddenOneUp.style.visibility=""),delete t._arcade,!e))return;const o=document.createElement("div");o.className="arc-modal-backdrop";const i=Math.round(a.score/a.queue.length*100),n=a.score===a.queue.length?"🏆🏆🏆":i>=70?"🏆🏆":i>=40?"🏆":"💪";o.innerHTML=`
    <div class="arc-modal" role="dialog" aria-modal="true">
      <h2 class="arc-modal-title">${n} 1UP terminé !</h2>
      <p class="arc-modal-sub">
        Mode : <strong>${h[a.mode]}</strong><br>
        Score : <strong>${a.score} / ${a.queue.length}</strong> (${i} %)
      </p>
      <div class="arc-modal-modes" style="grid-template-columns: 1fr 1fr 1fr;">
        <button class="arc-mode-btn arc-mode-F" data-action="replay">🔁 Rejouer</button>
        <button class="arc-mode-btn arc-mode-S" data-action="newmode">🎮 Nouveau mode</button>
        <button class="arc-mode-btn arc-mode-RQ" data-action="quit" style="grid-column: auto;">Quitter</button>
      </div>
    </div>
  `,document.body.appendChild(o),o.querySelector('[data-action="replay"]').addEventListener("click",()=>{o.remove(),T(t,a.mode)}),o.querySelector('[data-action="newmode"]').addEventListener("click",()=>{o.remove(),x(t)}),o.querySelector('[data-action="quit"]').addEventListener("click",()=>{o.remove()})}export{$ as createArcadeButton,ae as mountArcadeButton,E as showArcadeRecap,T as startArcade,re as tryAutoOpenFromUrl};
