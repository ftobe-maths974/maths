const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/addition-posee.DPJLdQ1c.js","_astro/vis-input.0hz6aJN5.js","_astro/angle-triangle.DjHJouEB.js","_astro/utils.MftNdmoG.js","_astro/angles-proprietes.B_gg_H92.js","_astro/arbre-construire.BXK41SO0.js","_astro/builder-core.BRBcHg4b.js","_astro/fullscreen-viewer.CxgtdgG5.js","_astro/editor.CJZspgfY.js","_astro/arbre.C7zSmtf2.js","_astro/bar-geom.qOvxJNxq.js","_astro/arbre-possibles.DiWPaLzm.js","_astro/axe-gradue-zefor.BPtS0E2W.js","_astro/axe-gradue.B8_-DhN6.js","_astro/division-posee.DUqZ8JmO.js","_astro/echelle-probabilite.DqH2MwoG.js","_astro/linearite-mult.Ch2tjzw1.js","_astro/linearite-tableau.BLpuFArp.js","_astro/multiplication-posee.bzAMstyG.js","_astro/polygone-perimetre.KLWfkOSM.js","_astro/pythagore-figure.CBoIIw8u.js","_astro/figure-validation.CKZvXkuQ.js","_astro/retour-unite-zefor.DdoqB45t.js","_astro/retour-unite.CHWMhXTF.js","_astro/schema-additif.DFvQdfb9.js","_astro/schema-comparaison-mult.DA2sPKSc.js","_astro/bar-comparaison-mult.DP02BSw_.js","_astro/ink.DbHLEoN5.js","_astro/schema-comparaison.SULxuSyq.js","_astro/bar-comparaison.CyAI7uHR.js","_astro/schema-construire-comp-mult.BDeplI2i.js","_astro/schema-construire-comp.5KN96o42.js","_astro/schema-construire-mult.DkOWVARE.js","_astro/bar-mult.BDRYgsTx.js","_astro/schema-construire.DWeyQRAQ.js","_astro/bar-additif.Cv2D3s3G.js","_astro/schema-multiplicatif.C2BvTk7k.js","_astro/soustraction-posee.CIWRpGOn.js","_astro/texte-trous.DqFdEJMp.js","_astro/thales-figure.BJmOqg9_.js","_astro/trigo-figure.DYJ3dHH3.js"])))=>i.map(i=>d[i]);
import{_ as o}from"./editor.CJZspgfY.js";import{_ as P,h as O}from"./fullscreen-viewer.CxgtdgG5.js";const R=["fragile","satisfaisant","tres-satisfaisant","expert"],h={F:"Fragile",S:"Satisfaisant",TS:"Très Satisfaisant",E:"Expert",R:"Rapido",RQ:"Random Quest"},I={F:"fragile",S:"satisfaisant",TS:"tres-satisfaisant",E:"expert"},k={F:"Une série de 6 questions de niveau Fragile — pour t'échauffer.",S:"6 questions de niveau Satisfaisant — le standard du cycle.",TS:"6 questions de niveau Très Satisfaisant — un cran au-dessus.",E:"6 questions de niveau Expert — entraînement musclé.",R:"6 questions tous niveaux mélangés, chronométrées.",RQ:"8 questions (chaque niveau × 2), randomisées — la quête complète."},j={F:"🟡",S:"🟢",TS:"🟢",E:"🌟",R:"⚡",RQ:"🎯"},V=`
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
`;let S=!1;function v(){if(S)return;S=!0;const t=document.createElement("style");t.textContent=V,document.head.appendChild(t)}function C(t){v();const e=document.createElement("button");return e.type="button",e.className="visual-toggle-btn mini-eye btn-1up",e.title="Démarrer une partie arcade 1UP",e.setAttribute("aria-label","Démarrer une partie arcade"),e.textContent="1UP",e.addEventListener("click",a=>{a.stopPropagation(),x(t)}),e}function te(t,e){if(!t||!e||e.querySelector(".btn-1up"))return null;const a=C(e);return t.appendChild(a),a}function x(t){v();const e=document.createElement("div");e.className="arc-modal-backdrop",e.innerHTML=`
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
  `,document.body.appendChild(e);const a=()=>e.remove();e.querySelector(".arc-modal-cancel").addEventListener("click",a),e.addEventListener("click",r=>{r.target===e&&a()}),e.querySelectorAll(".arc-mode-btn").forEach(r=>{r.addEventListener("click",()=>{const n=r.dataset.mode;a(),n==="R"?$(t):E(t,n)})})}function $(t){v();const e=document.createElement("div");e.className="arc-modal-backdrop",e.innerHTML=`
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
  `,document.body.appendChild(e);const a=()=>e.remove(),r=e.querySelector(".arc-slider"),n=e.querySelector(".arc-slider-value");r.addEventListener("input",()=>{n.textContent=`${r.value} min`}),e.querySelector(".arc-slider-ok").addEventListener("click",()=>{const i=parseInt(r.value,10)||6;a(),E(t,"R",{timeSec:i*60})}),e.querySelector(".arc-modal-cancel").addEventListener("click",a),e.addEventListener("click",i=>{i.target===e&&a()})}function E(t,e,a={}){v();const r=e==="RQ"?8:6,n=a.timeSec?Math.round(a.timeSec/60):null,i=j[e]||"🎮",l=h[e]||e,c=k[e]||"",s=document.createElement("div");s.className="arc-modal-backdrop",s.innerHTML=`
    <div class="arc-modal" role="dialog" aria-modal="true" style="position: relative;">
      <h2 class="arc-modal-title">${i} 1UP — ${l}</h2>
      <p class="arc-modal-sub">${c}</p>
      <ul class="arc-recap-list">
        <li><strong>${r}</strong> question${r>1?"s":""} à enchaîner</li>
        ${n?`<li>⏱ Chrono global : <strong>${n} min</strong></li>`:"<li>Pas de chrono — prends ton temps</li>"}
        <li>Navigation manuelle : ← précédent · ⏭ passer · → suivant</li>
        <li>💡 Aide pas-à-pas + indices disponibles</li>
      </ul>
      <button class="arc-recap-start arc-mode-${e}" type="button">▶ Démarrer</button>
      <div class="arc-recap-actions">
        <button class="arc-recap-share" type="button">🔗 Partager ce mode</button>
        <button class="arc-modal-cancel" type="button">Annuler</button>
      </div>
    </div>
  `,document.body.appendChild(s);const d=()=>s.remove();s.querySelector(".arc-modal-cancel").addEventListener("click",d),s.addEventListener("click",u=>{u.target===s&&d()}),s.querySelector(".arc-recap-start").addEventListener("click",()=>{d(),A(t,e,a)}),s.querySelector(".arc-recap-share").addEventListener("click",async()=>{const u=M(e,a);try{await navigator.clipboard.writeText(u),N(s.querySelector(".arc-modal"),"🔗 Lien copié !")}catch{prompt("Lien à partager :",u)}})}function M(t,e){const a=new URLSearchParams(location.search);return a.set("arcade",t),e.timeSec?a.set("t",String(e.timeSec)):a.delete("t"),`${location.origin}${location.pathname}?${a}`}function N(t,e){if(!t)return;const a=document.createElement("div");a.className="arc-toast",a.textContent=e,t.appendChild(a),setTimeout(()=>a.remove(),1800)}function ae(t){if(!t)return!1;const e=new URLSearchParams(location.search),a=e.get("arcade");if(!a)return!1;if(a==="pick")return x(t),!0;if(!h[a])return!1;const r=parseInt(e.get("t")||"",10),n=a==="R"&&Number.isFinite(r)&&r>0?{timeSec:r}:{};return E(t,a,n),!0}function z(t,e){const a=window.__AM_QUESTION__;if(!a?.variantes?.length)return[];const r={};R.forEach(c=>r[c]=[]),a.variantes.forEach((c,s)=>{r[c.niveau]&&r[c.niveau].push(s)});const n=c=>c[Math.floor(Math.random()*c.length)];if(e==="RQ"){const c=[];R.forEach(s=>{const d=r[s];d.length&&c.push(n(d),n(d))});for(let s=c.length-1;s>0;s--){const d=Math.floor(Math.random()*(s+1));[c[s],c[d]]=[c[d],c[s]]}return c}if(e==="R"){const c=a.variantes.map((u,p)=>p);if(!c.length)return[];const s=[],d=[...c];for(;s.length<6;){d.length||d.push(...c);const u=Math.floor(Math.random()*d.length);s.push(d[u]),d.splice(u,1)}return s}const i=I[e],l=r[i]||[];return l.length?Array.from({length:6},()=>n(l)):[]}async function A(t,e,a={}){const r=z(t,e);if(!r.length){alert("Pas de variantes pour ce mode.");return}const i={mode:e,queue:r,idx:0,score:0,hasTimer:e==="R",hasNav:!0,pinnedConfigs:null,qStates:r.map(()=>({status:"none",studentAnswer:null})),timeSec:a.timeSec||0,timeLeft:a.timeSec||0};t._arcade=i,await X(i),U(t,i),F(t,i),i.onConfetti=()=>H(t),t.addEventListener("confetti",i.onConfetti),i.hasTimer&&B(t,i),await y(t,r[0]),f(t)}function U(t,e){const a=document.createElement("div");a.className="arc-hud",a.innerHTML=Q(e),t.appendChild(a),e.hud=a,a.querySelector(".arc-hud-quit").addEventListener("click",()=>L(t,!1)),J(a,t),e.hasNav&&(e.nav=a,a.querySelector(".arc-nav-prev").addEventListener("click",()=>Y(t)),a.querySelector(".arc-nav-pass").addEventListener("click",()=>G(t)),a.querySelector(".arc-nav-next").addEventListener("click",()=>W(t)),m(t))}function Q(t){const e=t.queue.length,a=t.hasTimer?`<span class="arc-hud-timer">⏱ ${T(t.timeLeft)}</span>`:"",r=t.hasNav?`
    <span class="arc-hud-sep"></span>
    <button class="arc-nav-btn arc-nav-prev" type="button">←</button>
    <button class="arc-nav-btn arc-nav-pass" type="button">⏭ Passer</button>
    <button class="arc-nav-btn arc-nav-next" type="button">Suivant →</button>
  `:"";return`
    <span class="arc-hud-grip" title="Glisser pour déplacer" aria-label="Déplacer le dock">⋮⋮</span>
    <span class="arc-hud-counter"><span class="arc-hud-dot"></span><span class="arc-hud-counter-text">1/${e}</span></span>
    <span class="arc-hud-score">Score 0/${e}</span>
    ${a}
    ${r}
    <span class="arc-hud-sep"></span>
    <button class="arc-hud-quit" type="button">Quitter</button>
  `}function F(t,e){const a=(r,n)=>{const i=t.querySelector(r);i&&(e[n]=i,i.style.visibility="hidden")};a(".bullets-nav","_hiddenBullets"),a(".btn-1up","_hiddenOneUp")}function B(t,e){e.timerId=setInterval(()=>{e.timeLeft--;const a=e.hud?.querySelector(".arc-hud-timer");a&&(a.textContent=`⏱ ${T(e.timeLeft)}`),e.timeLeft<=0&&L(t,!0)},1e3)}function H(t){const e=t._arcade;if(!e)return;const a=e.qStates[e.idx];a.status!=="answered"&&(a.status="answered",e.score++);const r=t.querySelector("math974-axe-gradue");r&&r._studentAnswer!=null&&(a.studentAnswer=r._studentAnswer),f(t),e.hasNav&&m(t)}function T(t){if(t<=0)return"0:00";const e=Math.floor(t/60),a=t%60;return`${e}:${String(a).padStart(2,"0")}`}function J(t,e){const a=t.querySelector(".arc-hud-grip");if(!a)return;let r=!1,n=0,i=0,l=0,c=0;const s=u=>{if(!r)return;u.preventDefault();const p=u.clientX-n,_=u.clientY-i,w=e.getBoundingClientRect(),q=t.offsetWidth,D=t.offsetHeight;let g=l+p,b=c+_;g=Math.max(0,Math.min(g,w.width-q)),b=Math.max(0,Math.min(b,w.height-D)),t.style.left=`${g}px`,t.style.top=`${b}px`},d=u=>{r&&(r=!1,t.classList.remove("arc-hud-dragging"),a.releasePointerCapture?.(u.pointerId),window.removeEventListener("pointermove",s),window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",d))};a.addEventListener("pointerdown",u=>{u.preventDefault(),r=!0,t.classList.add("arc-hud-dragging");const p=e.getBoundingClientRect(),_=t.getBoundingClientRect();l=_.left-p.left,c=_.top-p.top,t.style.left=`${l}px`,t.style.top=`${c}px`,t.style.bottom="auto",t.style.transform="none",n=u.clientX,i=u.clientY,a.setPointerCapture?.(u.pointerId),window.addEventListener("pointermove",s),window.addEventListener("pointerup",d),window.addEventListener("pointercancel",d)})}async function X(t){const e=window.__AM_QUESTION__;t.pinnedConfigs=[];for(const a of t.queue){const r=e.variantes[a];if(!r?.type||!r.rand){t.pinnedConfigs.push(null);continue}try{const n=await P(Object.assign({"../visuals/addition-posee/addition-posee.js":()=>o(()=>import("./addition-posee.DPJLdQ1c.js"),__vite__mapDeps([0,1])),"../visuals/angle-triangle/angle-triangle.js":()=>o(()=>import("./angle-triangle.DjHJouEB.js"),__vite__mapDeps([2,3])),"../visuals/angles-proprietes/angles-proprietes.js":()=>o(()=>import("./angles-proprietes.B_gg_H92.js"),__vite__mapDeps([4,3])),"../visuals/arbre-construire/arbre-construire.js":()=>o(()=>import("./arbre-construire.BXK41SO0.js"),__vite__mapDeps([5,6,7,8,9,10])),"../visuals/arbre-possibles/arbre-possibles.js":()=>o(()=>import("./arbre-possibles.DiWPaLzm.js"),__vite__mapDeps([11,7,8,9,10])),"../visuals/axe-gradue-zefor/axe-gradue-zefor.js":()=>o(()=>import("./axe-gradue-zefor.BPtS0E2W.js"),__vite__mapDeps([12,8,7,13])),"../visuals/axe-gradue/axe-gradue.js":()=>o(()=>import("./axe-gradue.B8_-DhN6.js"),__vite__mapDeps([13,7,8])),"../visuals/axe-gradue/config.js":()=>o(()=>import("./fullscreen-viewer.CxgtdgG5.js").then(i=>i.e),__vite__mapDeps([7,8])),"../visuals/axe-gradue/editor.js":()=>o(()=>import("./fullscreen-viewer.CxgtdgG5.js").then(i=>i.f),__vite__mapDeps([7,8])),"../visuals/axes-symetrie/axes-symetrie.js":()=>o(()=>import("./axes-symetrie.C7mo3gVG.js"),[]),"../visuals/balance-equilibre/balance-equilibre.js":()=>o(()=>import("./balance-equilibre.C1-C61IB.js"),[]),"../visuals/conversion-unite/conversion-unite.js":()=>o(()=>import("./conversion-unite.BjxQKg47.js"),[]),"../visuals/cubes-numeration/cubes-numeration.js":()=>o(()=>import("./cubes-numeration.B-o8GW0A.js"),[]),"../visuals/cubes-numeration/editor.js":()=>o(()=>import("./fullscreen-viewer.CxgtdgG5.js").then(i=>i.k),__vite__mapDeps([7,8])),"../visuals/division-posee/division-posee.js":()=>o(()=>import("./division-posee.DUqZ8JmO.js"),__vite__mapDeps([14,1])),"../visuals/droites-position/droites-position.js":()=>o(()=>import("./droites-position.DpbuDKD0.js"),[]),"../visuals/echelle-probabilite/echelle-probabilite.js":()=>o(()=>import("./echelle-probabilite.DqH2MwoG.js"),__vite__mapDeps([15,7,8])),"../visuals/figure-geo/figure-geo.js":()=>o(()=>import("./figure-geo.DqoP6Aap.js"),[]),"../visuals/fraction-figure/fraction-figure.js":()=>o(()=>import("./fraction-figure.DaoBhiz3.js"),[]),"../visuals/linearite-mult/linearite-mult.js":()=>o(()=>import("./linearite-mult.Ch2tjzw1.js"),__vite__mapDeps([16,3,7,8])),"../visuals/linearite-tableau/linearite-tableau.js":()=>o(()=>import("./linearite-tableau.BLpuFArp.js"),__vite__mapDeps([17,3,7,8])),"../visuals/multiplication-posee/multiplication-posee.js":()=>o(()=>import("./multiplication-posee.bzAMstyG.js"),__vite__mapDeps([18,1])),"../visuals/ordre-nombres/ordre-nombres.js":()=>o(()=>import("./ordre-nombres.hxXp-yoB.js"),[]),"../visuals/polygone-perimetre/editor.js":()=>o(()=>import("./fullscreen-viewer.CxgtdgG5.js").then(i=>i.l),__vite__mapDeps([7,8])),"../visuals/polygone-perimetre/polygone-perimetre.js":()=>o(()=>import("./polygone-perimetre.KLWfkOSM.js"),__vite__mapDeps([19,8])),"../visuals/programme-scratch/programme-scratch.js":()=>o(()=>import("./programme-scratch.CU4ExXqt.js"),[]),"../visuals/proportionnalite/utils.js":()=>o(()=>import("./utils.MftNdmoG.js"),[]),"../visuals/pythagore-figure/pythagore-figure.js":()=>o(()=>import("./pythagore-figure.CBoIIw8u.js"),__vite__mapDeps([20,21,7,8])),"../visuals/quadrilatere-codage/quadrilatere-codage.js":()=>o(()=>import("./quadrilatere-codage.DnhQLpsp.js"),[]),"../visuals/retour-unite-zefor/retour-unite-zefor.js":()=>o(()=>import("./retour-unite-zefor.DdoqB45t.js"),__vite__mapDeps([22,8,1,23,3,7])),"../visuals/retour-unite/retour-unite.js":()=>o(()=>import("./retour-unite.CHWMhXTF.js"),__vite__mapDeps([23,1,3,7,8])),"../visuals/schema-additif/editor.js":()=>o(()=>import("./fullscreen-viewer.CxgtdgG5.js").then(i=>i.m),__vite__mapDeps([7,8])),"../visuals/schema-additif/schema-additif.js":()=>o(()=>import("./schema-additif.DFvQdfb9.js"),__vite__mapDeps([24,8,7])),"../visuals/schema-comparaison-mult/schema-comparaison-mult.js":()=>o(()=>import("./schema-comparaison-mult.DA2sPKSc.js"),__vite__mapDeps([25,7,8,26,27,10])),"../visuals/schema-comparaison/schema-comparaison.js":()=>o(()=>import("./schema-comparaison.SULxuSyq.js"),__vite__mapDeps([28,7,8,29,27,10])),"../visuals/schema-construire-comp-mult/schema-construire-comp-mult.js":()=>o(()=>import("./schema-construire-comp-mult.BDeplI2i.js"),__vite__mapDeps([30,6,7,8,26,27,10])),"../visuals/schema-construire-comp/schema-construire-comp.js":()=>o(()=>import("./schema-construire-comp.5KN96o42.js"),__vite__mapDeps([31,6,7,8,29,27,10])),"../visuals/schema-construire-mult/schema-construire-mult.js":()=>o(()=>import("./schema-construire-mult.DkOWVARE.js"),__vite__mapDeps([32,6,7,8,33,27,10])),"../visuals/schema-construire/schema-construire.js":()=>o(()=>import("./schema-construire.DWeyQRAQ.js"),__vite__mapDeps([34,6,7,8,35,27,10])),"../visuals/schema-multiplicatif/schema-multiplicatif.js":()=>o(()=>import("./schema-multiplicatif.C2BvTk7k.js"),__vite__mapDeps([36,7,8])),"../visuals/schema/arbre.js":()=>o(()=>import("./arbre.C7zSmtf2.js"),__vite__mapDeps([9,10])),"../visuals/schema/bar-additif.js":()=>o(()=>import("./bar-additif.Cv2D3s3G.js"),__vite__mapDeps([35,27,10])),"../visuals/schema/bar-comparaison-mult.js":()=>o(()=>import("./bar-comparaison-mult.DP02BSw_.js"),__vite__mapDeps([26,27,10])),"../visuals/schema/bar-comparaison.js":()=>o(()=>import("./bar-comparaison.CyAI7uHR.js"),__vite__mapDeps([29,27,10])),"../visuals/schema/bar-geom.js":()=>o(()=>import("./bar-geom.qOvxJNxq.js"),[]),"../visuals/schema/bar-mult.js":()=>o(()=>import("./bar-mult.BDRYgsTx.js"),__vite__mapDeps([33,27,10])),"../visuals/schema/builder-core.js":()=>o(()=>import("./builder-core.BRBcHg4b.js"),__vite__mapDeps([6,7,8])),"../visuals/schema/ink.js":()=>o(()=>import("./ink.DbHLEoN5.js"),[]),"../visuals/shared/autoscale.js":()=>o(()=>import("./autoscale.BaubB0y5.js"),[]),"../visuals/shared/vis-input.js":()=>o(()=>import("./vis-input.0hz6aJN5.js"),[]),"../visuals/solide-nom/solide-nom.js":()=>o(()=>import("./solide-nom.Bfmf5iRT.js"),[]),"../visuals/soustraction-posee/soustraction-posee.js":()=>o(()=>import("./soustraction-posee.CIWRpGOn.js"),__vite__mapDeps([37,1])),"../visuals/suite-figures/suite-figures.js":()=>o(()=>import("./suite-figures.BSb9W0Gx.js"),[]),"../visuals/symetrie-diag/symetrie-diag.js":()=>o(()=>import("./symetrie-diag.CGBDIby7.js"),[]),"../visuals/symetrie-quadrillage/symetrie-quadrillage.js":()=>o(()=>import("./symetrie-quadrillage.Dvl6qQkA.js"),[]),"../visuals/texte-trous/config.js":()=>o(()=>import("./editor.CJZspgfY.js").then(i=>i.c),[]),"../visuals/texte-trous/editor.js":()=>o(()=>import("./editor.CJZspgfY.js").then(i=>i.e),[]),"../visuals/texte-trous/texte-trous.js":()=>o(()=>import("./texte-trous.DqFdEJMp.js"),__vite__mapDeps([38,7,8])),"../visuals/thales-figure/thales-figure.js":()=>o(()=>import("./thales-figure.BJmOqg9_.js"),__vite__mapDeps([39,21,7,8])),"../visuals/trajet-scratch/trajet-scratch.js":()=>o(()=>import("./trajet-scratch.U_b3haCn.js"),[]),"../visuals/triangle-nature/triangle-nature.js":()=>o(()=>import("./triangle-nature.DwsjpwSo.js"),[]),"../visuals/trigo-figure/trigo-figure.js":()=>o(()=>import("./trigo-figure.DYJ3dHH3.js"),__vite__mapDeps([40,21,7,8]))}),`../visuals/${r.type}/${r.type}.js`,4);if(n.randomize){const i=await n.randomize(JSON.parse(JSON.stringify(r.config||{})),r.rand,r.config||{});t.pinnedConfigs.push(i)}else t.pinnedConfigs.push(null)}catch{t.pinnedConfigs.push(null)}}}function m(t){const e=t._arcade;if(!e?.nav)return;const a=e.qStates[e.idx];e.nav.querySelector(".arc-nav-prev").disabled=e.idx===0;const r=a.status!=="none",n=e.nav.querySelector(".arc-nav-next");n.disabled=!r,n.classList.toggle("arc-nav-next-ok",r),e.nav.querySelector(".arc-nav-pass").disabled=a.status==="answered"}async function Y(t){const e=t._arcade;e.idx!==0&&(e.idx--,await y(t,e.queue[e.idx]),f(t),m(t))}function G(t){const e=t._arcade;e.qStates[e.idx].status==="none"&&(e.qStates[e.idx].status="passed"),m(t)}async function W(t){const e=t._arcade;if(e.qStates[e.idx].status!=="none"){if(e.idx++,e.idx>=e.queue.length){L(t,!0);return}await y(t,e.queue[e.idx]),f(t),m(t)}}function f(t){const e=t._arcade;if(!e?.hud)return;e.hud.querySelector(".arc-hud-counter-text").textContent=`${e.idx+1}/${e.queue.length}`,e.hud.querySelector(".arc-hud-score").textContent=`Score ${e.score}/${e.queue.length}`;const a=e.hud.querySelector(".arc-hud-dot"),r=e.queue[e.idx],n=window.__AM_QUESTION__?.variantes?.[r]?.niveau;a&&(n?a.setAttribute("data-niveau",n):a.removeAttribute("data-niveau"))}async function y(t,e){const a=t._arcade,r=t.querySelector(`.bullet[data-variant="${e}"]`);if(r&&(t.querySelectorAll(".bullet").forEach(n=>n.classList.remove("active")),r.classList.add("active")),t.querySelectorAll(".variant-content").forEach((n,i)=>n.classList.toggle("active",i===e)),t.querySelectorAll(".gs-ref-badge").forEach((n,i)=>n.classList.toggle("active",i===e)),a?.pinnedConfigs){const n=a.pinnedConfigs[a.idx],i=t.querySelector(`.variant-content[data-index="${e}"]`);i?.visualData&&n&&(i.visualData.config=JSON.parse(JSON.stringify(n)),i.visualData.rand=null)}if(await O(t,e,!a?.pinnedConfigs),window.MathJax&&window.MathJax.typesetPromise([t]).catch(()=>{}),a){const n=a.qStates[a.idx];n.studentAnswer!=null&&requestAnimationFrame(()=>K(t,n))}}function K(t,e){const a=t.querySelector("math974-axe-gradue");a&&e.studentAnswer!=null&&typeof a.draw=="function"&&(a._studentAnswer=e.studentAnswer,a.draw())}function L(t,e){const a=t._arcade;if(!a||(t.removeEventListener("confetti",a.onConfetti),a.timerId&&clearInterval(a.timerId),a.hud?.remove(),a._hiddenBullets&&(a._hiddenBullets.style.visibility=""),a._hiddenOneUp&&(a._hiddenOneUp.style.visibility=""),delete t._arcade,!e))return;const r=document.createElement("div");r.className="arc-modal-backdrop";const n=Math.round(a.score/a.queue.length*100),i=a.score===a.queue.length?"🏆🏆🏆":n>=70?"🏆🏆":n>=40?"🏆":"💪";r.innerHTML=`
    <div class="arc-modal" role="dialog" aria-modal="true">
      <h2 class="arc-modal-title">${i} 1UP terminé !</h2>
      <p class="arc-modal-sub">
        Mode : <strong>${h[a.mode]}</strong><br>
        Score : <strong>${a.score} / ${a.queue.length}</strong> (${n} %)
      </p>
      <div class="arc-modal-modes" style="grid-template-columns: 1fr 1fr 1fr;">
        <button class="arc-mode-btn arc-mode-F" data-action="replay">🔁 Rejouer</button>
        <button class="arc-mode-btn arc-mode-S" data-action="newmode">🎮 Nouveau mode</button>
        <button class="arc-mode-btn arc-mode-RQ" data-action="quit" style="grid-column: auto;">Quitter</button>
      </div>
    </div>
  `,document.body.appendChild(r),r.querySelector('[data-action="replay"]').addEventListener("click",()=>{r.remove(),A(t,a.mode)}),r.querySelector('[data-action="newmode"]').addEventListener("click",()=>{r.remove(),x(t)}),r.querySelector('[data-action="quit"]').addEventListener("click",()=>{r.remove()})}export{C as createArcadeButton,te as mountArcadeButton,E as showArcadeRecap,A as startArcade,ae as tryAutoOpenFromUrl};
