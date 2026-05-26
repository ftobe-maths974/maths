const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/addition-posee.DPJLdQ1c.js","_astro/vis-input.0hz6aJN5.js","_astro/angle-triangle.DjHJouEB.js","_astro/utils.MftNdmoG.js","_astro/angles-proprietes.B_gg_H92.js","_astro/arbre-construire.bDAMfg-R.js","_astro/builder-core.tMdsGllL.js","_astro/rapido-engine.CUsXOUUh.js","_astro/rapidos-visuals-integration.DFPqAcD_.js","_astro/editor.CJZspgfY.js","_astro/arbre.C7zSmtf2.js","_astro/bar-geom.qOvxJNxq.js","_astro/arbre-possibles.DNnbu_68.js","_astro/axe-gradue-zefor.BuAYjyuA.js","_astro/axe-gradue.C4tZTpee.js","_astro/division-posee.DUqZ8JmO.js","_astro/echelle-probabilite.D7owvWVG.js","_astro/equation-etayage.Bxtuar-5.js","_astro/linearite-mult.mIkHeqKC.js","_astro/linearite-tableau.QJtf5IbH.js","_astro/multiplication-posee.bzAMstyG.js","_astro/polygone-perimetre.DR367y7Z.js","_astro/pythagore-figure.D39noH8t.js","_astro/figure-validation.ane55z9C.js","_astro/retour-unite-zefor.GQCqEKME.js","_astro/retour-unite.GYzSCllh.js","_astro/schema-additif.DqvWcClK.js","_astro/schema-comparaison-mult.Cay0OSwc.js","_astro/bar-comparaison-mult.DP02BSw_.js","_astro/ink.DbHLEoN5.js","_astro/schema-comparaison.tMIwpiBQ.js","_astro/bar-comparaison.CyAI7uHR.js","_astro/schema-construire-comp-mult.C9EdgGRs.js","_astro/schema-construire-comp.CEJaFQsP.js","_astro/schema-construire-mult.Bg40NTTf.js","_astro/bar-mult.BDRYgsTx.js","_astro/schema-construire.CplaFRU2.js","_astro/bar-additif.Cv2D3s3G.js","_astro/schema-multiplicatif.YxYOgGKW.js","_astro/soustraction-posee.CIWRpGOn.js","_astro/texte-trous.KbwmSTga.js","_astro/thales-figure.BskM-g1S.js","_astro/trigo-figure.BOX7NxOk.js"])))=>i.map(i=>d[i]);
import{_ as r}from"./editor.CJZspgfY.js";import{_ as O,h as k}from"./rapidos-visuals-integration.DFPqAcD_.js";const q=["fragile","satisfaisant","tres-satisfaisant","expert"],w={F:"Fragile",S:"Satisfaisant",TS:"Très Satisfaisant",E:"Expert",R:"Rapido",RQ:"Random Quest"},I={F:"fragile",S:"satisfaisant",TS:"tres-satisfaisant",E:"expert"},V={F:"Une série de 6 questions de niveau Fragile — pour t'échauffer.",S:"6 questions de niveau Satisfaisant — le standard du cycle.",TS:"6 questions de niveau Très Satisfaisant — un cran au-dessus.",E:"6 questions de niveau Expert — entraînement musclé.",R:"6 questions tous niveaux mélangés, chronométrées.",RQ:"8 questions (chaque niveau × 2), randomisées — la quête complète."},C={F:"🟡",S:"🟢",TS:"🟢",E:"🌟",R:"⚡",RQ:"🎯"},$=`
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
`;let D=!1;function b(){if(D)return;D=!0;const t=document.createElement("style");t.textContent=$,document.head.appendChild(t)}function M(t){b();const e=document.createElement("button");return e.type="button",e.className="visual-toggle-btn mini-eye btn-1up",e.title="Démarrer une partie arcade 1UP",e.setAttribute("aria-label","Démarrer une partie arcade"),e.textContent="1UP",e.addEventListener("click",a=>{a.stopPropagation(),L(t)}),e}function re(t,e){if(!t||!e||e.querySelector(".btn-1up"))return null;const a=M(e);return t.appendChild(a),a}function L(t){b();const e=document.createElement("div");e.className="arc-modal-backdrop",e.innerHTML=`
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
  `,document.body.appendChild(e);const a=()=>e.remove();e.querySelector(".arc-modal-cancel").addEventListener("click",a),e.addEventListener("click",o=>{o.target===e&&a()}),e.querySelectorAll(".arc-mode-btn").forEach(o=>{o.addEventListener("click",()=>{const i=o.dataset.mode;a(),i==="R"?N(t):R(t,i)})})}function N(t){b();const e=document.createElement("div");e.className="arc-modal-backdrop",e.innerHTML=`
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
  `,document.body.appendChild(e);const a=()=>e.remove(),o=e.querySelector(".arc-slider"),i=e.querySelector(".arc-slider-value");o.addEventListener("input",()=>{i.textContent=`${o.value} min`}),e.querySelector(".arc-slider-ok").addEventListener("click",()=>{const s=parseInt(o.value,10)||6;a(),R(t,"R",{timeSec:s*60})}),e.querySelector(".arc-modal-cancel").addEventListener("click",a),e.addEventListener("click",s=>{s.target===e&&a()})}function R(t,e,a={}){b();const o=e==="RQ"?8:6,i=a.timeSec?Math.round(a.timeSec/60):null,s=C[e]||"🎮",u=w[e]||e,m=V[e]||"",l=document.createElement("div");l.className="arc-modal-backdrop",l.innerHTML=`
    <div class="arc-modal" role="dialog" aria-modal="true" style="position: relative;">
      <h2 class="arc-modal-title">${s} 1UP — ${u}</h2>
      <p class="arc-modal-sub">${m}</p>
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
  `,document.body.appendChild(l);const p=()=>l.remove();l.querySelector(".arc-modal-cancel").addEventListener("click",p),l.addEventListener("click",n=>{n.target===l&&p()}),l.querySelector(".arc-recap-start").addEventListener("click",()=>{p(),P(t,e,a)}),l.querySelector(".arc-recap-share").addEventListener("click",async()=>{const n=z(e,a);try{await navigator.clipboard.writeText(n),U(l.querySelector(".arc-modal"),"🔗 Lien copié !")}catch{prompt("Lien à partager :",n)}})}function z(t,e){const a=new URLSearchParams(location.search);return a.set("arcade",t),e.timeSec?a.set("t",String(e.timeSec)):a.delete("t"),`${location.origin}${location.pathname}?${a}`}function U(t,e){if(!t)return;const a=document.createElement("div");a.className="arc-toast",a.textContent=e,t.appendChild(a),setTimeout(()=>a.remove(),1800)}function oe(t){if(!t)return!1;const e=new URLSearchParams(location.search),a=e.get("arcade");if(!a)return!1;if(a==="pick")return L(t),!0;if(!w[a])return!1;const o=parseInt(e.get("t")||"",10),i=a==="R"&&Number.isFinite(o)&&o>0?{timeSec:o}:{};return R(t,a,i),!0}function S(t){return t?._question||window.__AM_QUESTION__}function Q(t,e){const a=S(t);if(!a?.variantes?.length)return[];const o=!!a.isMix,i=a.variantes,s={};q.forEach(n=>s[n]=[]),i.forEach((n,c)=>{s[n.niveau]&&s[n.niveau].push(c)});const u=n=>n[Math.floor(Math.random()*n.length)],m=(n,c)=>{if(!n.length)return[];if(!o)return Array.from({length:c},()=>u(n));const d=[],_=new Set,f=[...n];for(let v=f.length-1;v>0;v--){const g=Math.floor(Math.random()*(v+1));[f[v],f[g]]=[f[g],f[v]]}for(const v of f){if(d.length>=c)break;const g=i[v]._sourceRef;(!g||!_.has(g))&&(d.push(v),g&&_.add(g))}for(;d.length<c;)d.push(u(n));return d};if(e==="RQ"){const n=[];if(q.forEach(c=>{const d=s[c];d.length&&n.push(...m(d,2))}),n.length===0){const c=i.map((d,_)=>_);c.length&&n.push(...m(c,8))}for(let c=n.length-1;c>0;c--){const d=Math.floor(Math.random()*(c+1));[n[c],n[d]]=[n[d],n[c]]}return n}if(e==="R"){const n=i.map((_,f)=>f);if(!n.length)return[];if(o)return m(n,6);const c=[],d=[...n];for(;c.length<6;){d.length||d.push(...n);const _=Math.floor(Math.random()*d.length);c.push(d[_]),d.splice(_,1)}return c}const l=I[e];let p=s[l]||[];return p.length||(p=i.map((n,c)=>c)),p.length?m(p,6):[]}async function P(t,e,a={}){const o=Q(t,e);if(!o.length){alert("Pas de variantes pour ce mode.");return}const s={mode:e,queue:o,idx:0,score:0,hasTimer:e==="R",hasNav:!0,pinnedConfigs:null,qStates:o.map(()=>({status:"none",studentAnswer:null})),timeSec:a.timeSec||0,timeLeft:a.timeSec||0};t._arcade=s,await W(s,t),F(t,s),B(t,s),s.onConfetti=()=>X(t),t.addEventListener("confetti",s.onConfetti),s.hasTimer&&J(t,s),await A(t,o[0]),x(t)}function F(t,e){const a=document.createElement("div");a.className="arc-hud",a.innerHTML=H(e),document.body.appendChild(a),e.hud=a,a.querySelector(".arc-hud-quit").addEventListener("click",()=>T(t,!1)),Y(a),e.hasNav&&(e.nav=a,a.querySelector(".arc-nav-prev").addEventListener("click",()=>G(t)),a.querySelector(".arc-nav-pass").addEventListener("click",()=>K(t)),a.querySelector(".arc-nav-next").addEventListener("click",()=>Z(t)),h(t))}function H(t){const e=t.queue.length,a=t.hasTimer?`<span class="arc-hud-timer">⏱ ${j(t.timeLeft)}</span>`:"",o=t.hasNav?`
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
  `}function B(t,e){const a=(o,i)=>{const s=t.querySelector(o);s&&(e[i]=s,s.style.visibility="hidden")};a(".bullets-nav","_hiddenBullets"),a(".btn-1up","_hiddenOneUp")}function J(t,e){e.timerId=setInterval(()=>{e.timeLeft--;const a=e.hud?.querySelector(".arc-hud-timer");a&&(a.textContent=`⏱ ${j(e.timeLeft)}`),e.timeLeft<=0&&T(t,!0)},1e3)}function X(t){const e=t._arcade;if(!e)return;const a=e.qStates[e.idx];a.status!=="answered"&&(a.status="answered",e.score++);const o=t.querySelector("math974-axe-gradue");o&&o._studentAnswer!=null&&(a.studentAnswer=o._studentAnswer),x(t),e.hasNav&&h(t)}function j(t){if(t<=0)return"0:00";const e=Math.floor(t/60),a=t%60;return`${e}:${String(a).padStart(2,"0")}`}function Y(t,e){const a=t.querySelector(".arc-hud-grip");if(!a)return;let o=!1,i=0,s=0,u=0,m=0;const l=n=>{if(!o)return;n.preventDefault();const c=n.clientX-i,d=n.clientY-s,_=t.offsetWidth,f=t.offsetHeight,v=window.innerWidth,g=window.innerHeight;let E=u+c,y=m+d;E=Math.max(0,Math.min(E,v-_)),y=Math.max(0,Math.min(y,g-f)),t.style.left=`${E}px`,t.style.top=`${y}px`},p=n=>{o&&(o=!1,t.classList.remove("arc-hud-dragging"),a.releasePointerCapture?.(n.pointerId),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",p))};a.addEventListener("pointerdown",n=>{n.preventDefault(),o=!0,t.classList.add("arc-hud-dragging");const c=t.getBoundingClientRect();u=c.left,m=c.top,t.style.left=`${u}px`,t.style.top=`${m}px`,t.style.bottom="auto",t.style.transform="none",i=n.clientX,s=n.clientY,a.setPointerCapture?.(n.pointerId),window.addEventListener("pointermove",l),window.addEventListener("pointerup",p),window.addEventListener("pointercancel",p)})}async function W(t,e){const a=S(e);if(!a?.variantes){t.pinnedConfigs=[];return}t.pinnedConfigs=[];for(const o of t.queue){const i=a.variantes[o];if(!i?.type||!i.rand){t.pinnedConfigs.push(null);continue}try{const s=await O(Object.assign({"../visuals/addition-posee/addition-posee.js":()=>r(()=>import("./addition-posee.DPJLdQ1c.js"),__vite__mapDeps([0,1])),"../visuals/angle-triangle/angle-triangle.js":()=>r(()=>import("./angle-triangle.DjHJouEB.js"),__vite__mapDeps([2,3])),"../visuals/angles-proprietes/angles-proprietes.js":()=>r(()=>import("./angles-proprietes.B_gg_H92.js"),__vite__mapDeps([4,3])),"../visuals/arbre-construire/arbre-construire.js":()=>r(()=>import("./arbre-construire.bDAMfg-R.js"),__vite__mapDeps([5,6,7,8,9,10,11])),"../visuals/arbre-possibles/arbre-possibles.js":()=>r(()=>import("./arbre-possibles.DNnbu_68.js"),__vite__mapDeps([12,7,8,9,10,11])),"../visuals/axe-gradue-zefor/axe-gradue-zefor.js":()=>r(()=>import("./axe-gradue-zefor.BuAYjyuA.js"),__vite__mapDeps([13,9,7,8,14])),"../visuals/axe-gradue/axe-gradue.js":()=>r(()=>import("./axe-gradue.C4tZTpee.js"),__vite__mapDeps([14,7,8,9])),"../visuals/axe-gradue/config.js":()=>r(()=>import("./rapidos-visuals-integration.DFPqAcD_.js").then(u=>u.e),__vite__mapDeps([8,9])),"../visuals/axe-gradue/editor.js":()=>r(()=>import("./rapidos-visuals-integration.DFPqAcD_.js").then(u=>u.f),__vite__mapDeps([8,9])),"../visuals/axes-symetrie/axes-symetrie.js":()=>r(()=>import("./axes-symetrie.C7mo3gVG.js"),[]),"../visuals/balance-equilibre/balance-equilibre.js":()=>r(()=>import("./balance-equilibre.C1-C61IB.js"),[]),"../visuals/conversion-unite/conversion-unite.js":()=>r(()=>import("./conversion-unite.BjxQKg47.js"),[]),"../visuals/cubes-numeration/cubes-numeration.js":()=>r(()=>import("./cubes-numeration.B-o8GW0A.js"),[]),"../visuals/cubes-numeration/editor.js":()=>r(()=>import("./rapidos-visuals-integration.DFPqAcD_.js").then(u=>u.g),__vite__mapDeps([8,9])),"../visuals/division-posee/division-posee.js":()=>r(()=>import("./division-posee.DUqZ8JmO.js"),__vite__mapDeps([15,1])),"../visuals/droites-position/droites-position.js":()=>r(()=>import("./droites-position.DpbuDKD0.js"),[]),"../visuals/echelle-probabilite/echelle-probabilite.js":()=>r(()=>import("./echelle-probabilite.D7owvWVG.js"),__vite__mapDeps([16,7,8,9])),"../visuals/equation-etayage/equation-etayage.js":()=>r(()=>import("./equation-etayage.Bxtuar-5.js"),__vite__mapDeps([17,8,9])),"../visuals/figure-geo/figure-geo.js":()=>r(()=>import("./figure-geo.DqoP6Aap.js"),[]),"../visuals/fraction-figure/fraction-figure.js":()=>r(()=>import("./fraction-figure.DaoBhiz3.js"),[]),"../visuals/linearite-mult/linearite-mult.js":()=>r(()=>import("./linearite-mult.mIkHeqKC.js"),__vite__mapDeps([18,3,7,8,9])),"../visuals/linearite-tableau/linearite-tableau.js":()=>r(()=>import("./linearite-tableau.QJtf5IbH.js"),__vite__mapDeps([19,3,7,8,9])),"../visuals/multiplication-posee/multiplication-posee.js":()=>r(()=>import("./multiplication-posee.bzAMstyG.js"),__vite__mapDeps([20,1])),"../visuals/ordre-nombres/ordre-nombres.js":()=>r(()=>import("./ordre-nombres.hxXp-yoB.js"),[]),"../visuals/polygone-perimetre/editor.js":()=>r(()=>import("./rapidos-visuals-integration.DFPqAcD_.js").then(u=>u.i),__vite__mapDeps([8,9])),"../visuals/polygone-perimetre/polygone-perimetre.js":()=>r(()=>import("./polygone-perimetre.DR367y7Z.js"),__vite__mapDeps([21,9])),"../visuals/programme-scratch/programme-scratch.js":()=>r(()=>import("./programme-scratch.CU4ExXqt.js"),[]),"../visuals/proportionnalite/utils.js":()=>r(()=>import("./utils.MftNdmoG.js"),[]),"../visuals/pythagore-figure/pythagore-figure.js":()=>r(()=>import("./pythagore-figure.D39noH8t.js"),__vite__mapDeps([22,23,7,8,9])),"../visuals/quadrilatere-codage/quadrilatere-codage.js":()=>r(()=>import("./quadrilatere-codage.DnhQLpsp.js"),[]),"../visuals/retour-unite-zefor/retour-unite-zefor.js":()=>r(()=>import("./retour-unite-zefor.GQCqEKME.js"),__vite__mapDeps([24,9,1,25,3,7,8])),"../visuals/retour-unite/retour-unite.js":()=>r(()=>import("./retour-unite.GYzSCllh.js"),__vite__mapDeps([25,1,3,7,8,9])),"../visuals/schema-additif/editor.js":()=>r(()=>import("./rapidos-visuals-integration.DFPqAcD_.js").then(u=>u.j),__vite__mapDeps([8,9])),"../visuals/schema-additif/schema-additif.js":()=>r(()=>import("./schema-additif.DqvWcClK.js"),__vite__mapDeps([26,9,7,8])),"../visuals/schema-comparaison-mult/schema-comparaison-mult.js":()=>r(()=>import("./schema-comparaison-mult.Cay0OSwc.js"),__vite__mapDeps([27,7,8,9,28,29,11])),"../visuals/schema-comparaison/schema-comparaison.js":()=>r(()=>import("./schema-comparaison.tMIwpiBQ.js"),__vite__mapDeps([30,7,8,9,31,29,11])),"../visuals/schema-construire-comp-mult/schema-construire-comp-mult.js":()=>r(()=>import("./schema-construire-comp-mult.C9EdgGRs.js"),__vite__mapDeps([32,6,7,8,9,28,29,11])),"../visuals/schema-construire-comp/schema-construire-comp.js":()=>r(()=>import("./schema-construire-comp.CEJaFQsP.js"),__vite__mapDeps([33,6,7,8,9,31,29,11])),"../visuals/schema-construire-mult/schema-construire-mult.js":()=>r(()=>import("./schema-construire-mult.Bg40NTTf.js"),__vite__mapDeps([34,6,7,8,9,35,29,11])),"../visuals/schema-construire/schema-construire.js":()=>r(()=>import("./schema-construire.CplaFRU2.js"),__vite__mapDeps([36,6,7,8,9,37,29,11])),"../visuals/schema-multiplicatif/schema-multiplicatif.js":()=>r(()=>import("./schema-multiplicatif.YxYOgGKW.js"),__vite__mapDeps([38,7,8,9])),"../visuals/schema/arbre.js":()=>r(()=>import("./arbre.C7zSmtf2.js"),__vite__mapDeps([10,11])),"../visuals/schema/bar-additif.js":()=>r(()=>import("./bar-additif.Cv2D3s3G.js"),__vite__mapDeps([37,29,11])),"../visuals/schema/bar-comparaison-mult.js":()=>r(()=>import("./bar-comparaison-mult.DP02BSw_.js"),__vite__mapDeps([28,29,11])),"../visuals/schema/bar-comparaison.js":()=>r(()=>import("./bar-comparaison.CyAI7uHR.js"),__vite__mapDeps([31,29,11])),"../visuals/schema/bar-geom.js":()=>r(()=>import("./bar-geom.qOvxJNxq.js"),[]),"../visuals/schema/bar-mult.js":()=>r(()=>import("./bar-mult.BDRYgsTx.js"),__vite__mapDeps([35,29,11])),"../visuals/schema/builder-core.js":()=>r(()=>import("./builder-core.tMdsGllL.js"),__vite__mapDeps([6,7,8,9])),"../visuals/schema/ink.js":()=>r(()=>import("./ink.DbHLEoN5.js"),[]),"../visuals/shared/autoscale.js":()=>r(()=>import("./autoscale.BaubB0y5.js"),[]),"../visuals/shared/vis-input.js":()=>r(()=>import("./vis-input.0hz6aJN5.js"),[]),"../visuals/solide-nom/solide-nom.js":()=>r(()=>import("./solide-nom.Bfmf5iRT.js"),[]),"../visuals/soustraction-posee/soustraction-posee.js":()=>r(()=>import("./soustraction-posee.CIWRpGOn.js"),__vite__mapDeps([39,1])),"../visuals/suite-figures/suite-figures.js":()=>r(()=>import("./suite-figures.BSb9W0Gx.js"),[]),"../visuals/symetrie-diag/symetrie-diag.js":()=>r(()=>import("./symetrie-diag.CGBDIby7.js"),[]),"../visuals/symetrie-quadrillage/symetrie-quadrillage.js":()=>r(()=>import("./symetrie-quadrillage.Dvl6qQkA.js"),[]),"../visuals/texte-trous/config.js":()=>r(()=>import("./editor.CJZspgfY.js").then(u=>u.c),[]),"../visuals/texte-trous/editor.js":()=>r(()=>import("./editor.CJZspgfY.js").then(u=>u.e),[]),"../visuals/texte-trous/texte-trous.js":()=>r(()=>import("./texte-trous.KbwmSTga.js"),__vite__mapDeps([40,7,8,9])),"../visuals/thales-figure/thales-figure.js":()=>r(()=>import("./thales-figure.BskM-g1S.js"),__vite__mapDeps([41,23,7,8,9])),"../visuals/trajet-scratch/trajet-scratch.js":()=>r(()=>import("./trajet-scratch.U_b3haCn.js"),[]),"../visuals/triangle-nature/triangle-nature.js":()=>r(()=>import("./triangle-nature.DwsjpwSo.js"),[]),"../visuals/trigo-figure/trigo-figure.js":()=>r(()=>import("./trigo-figure.BOX7NxOk.js"),__vite__mapDeps([42,23,7,8,9]))}),`../visuals/${i.type}/${i.type}.js`,4);if(s.randomize){const u=await s.randomize(JSON.parse(JSON.stringify(i.config||{})),i.rand,i.config||{});t.pinnedConfigs.push(u)}else t.pinnedConfigs.push(null)}catch{t.pinnedConfigs.push(null)}}}function h(t){const e=t._arcade;if(!e?.nav)return;const a=e.qStates[e.idx];e.nav.querySelector(".arc-nav-prev").disabled=e.idx===0;const o=a.status!=="none",i=e.nav.querySelector(".arc-nav-next");i.disabled=!o,i.classList.toggle("arc-nav-next-ok",o),e.nav.querySelector(".arc-nav-pass").disabled=a.status==="answered"}async function G(t){const e=t._arcade;e.idx!==0&&(e.idx--,await A(t,e.queue[e.idx]),x(t),h(t))}function K(t){const e=t._arcade;e.qStates[e.idx].status==="none"&&(e.qStates[e.idx].status="passed"),h(t)}async function Z(t){const e=t._arcade;if(e.qStates[e.idx].status!=="none"){if(e.idx++,e.idx>=e.queue.length){T(t,!0);return}await A(t,e.queue[e.idx]),x(t),h(t)}}function x(t){const e=t._arcade;if(!e?.hud)return;e.hud.querySelector(".arc-hud-counter-text").textContent=`${e.idx+1}/${e.queue.length}`,e.hud.querySelector(".arc-hud-score").textContent=`Score ${e.score}/${e.queue.length}`;const a=e.hud.querySelector(".arc-hud-dot"),o=e.queue[e.idx],i=S(t)?.variantes?.[o]?.niveau;a&&(i?a.setAttribute("data-niveau",i):a.removeAttribute("data-niveau"))}async function A(t,e){const a=t._arcade,o=t.querySelector(`.bullet[data-variant="${e}"]`);if(o&&(t.querySelectorAll(".bullet").forEach(i=>i.classList.remove("active")),o.classList.add("active")),t.querySelectorAll(".variant-content").forEach((i,s)=>i.classList.toggle("active",s===e)),t.querySelectorAll(".gs-ref-badge").forEach((i,s)=>i.classList.toggle("active",s===e)),a?.pinnedConfigs){const i=a.pinnedConfigs[a.idx],s=t.querySelector(`.variant-content[data-index="${e}"]`);s?.visualData&&i&&(s.visualData.config=JSON.parse(JSON.stringify(i)),s.visualData.rand=null)}if(await k(t,e,!a?.pinnedConfigs),window.MathJax&&window.MathJax.typesetPromise([t]).catch(()=>{}),a){const i=a.qStates[a.idx];i.studentAnswer!=null&&requestAnimationFrame(()=>ee(t,i))}}function ee(t,e){const a=t.querySelector("math974-axe-gradue");a&&e.studentAnswer!=null&&typeof a.draw=="function"&&(a._studentAnswer=e.studentAnswer,a.draw())}function T(t,e){const a=t._arcade;if(!a||(t.removeEventListener("confetti",a.onConfetti),a.timerId&&clearInterval(a.timerId),a.hud?.remove(),a._hiddenBullets&&(a._hiddenBullets.style.visibility=""),a._hiddenOneUp&&(a._hiddenOneUp.style.visibility=""),delete t._arcade,!e))return;const o=document.createElement("div");o.className="arc-modal-backdrop";const i=Math.round(a.score/a.queue.length*100),s=a.score===a.queue.length?"🏆🏆🏆":i>=70?"🏆🏆":i>=40?"🏆":"💪";o.innerHTML=`
    <div class="arc-modal" role="dialog" aria-modal="true">
      <h2 class="arc-modal-title">${s} 1UP terminé !</h2>
      <p class="arc-modal-sub">
        Mode : <strong>${w[a.mode]}</strong><br>
        Score : <strong>${a.score} / ${a.queue.length}</strong> (${i} %)
      </p>
      <div class="arc-modal-modes" style="grid-template-columns: 1fr 1fr 1fr;">
        <button class="arc-mode-btn arc-mode-F" data-action="replay">🔁 Rejouer</button>
        <button class="arc-mode-btn arc-mode-S" data-action="newmode">🎮 Nouveau mode</button>
        <button class="arc-mode-btn arc-mode-RQ" data-action="quit" style="grid-column: auto;">Quitter</button>
      </div>
    </div>
  `,document.body.appendChild(o),o.querySelector('[data-action="replay"]').addEventListener("click",()=>{o.remove(),P(t,a.mode)}),o.querySelector('[data-action="newmode"]').addEventListener("click",()=>{o.remove(),L(t)}),o.querySelector('[data-action="quit"]').addEventListener("click",()=>{o.remove()})}export{M as createArcadeButton,re as mountArcadeButton,R as showArcadeRecap,P as startArcade,oe as tryAutoOpenFromUrl};
