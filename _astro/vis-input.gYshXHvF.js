const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/rapidos-visuals-integration.DH_XUb4s.js","_astro/editor.CJZspgfY.js"])))=>i.map(i=>d[i]);
import{_ as r}from"./editor.CJZspgfY.js";import{p as e}from"./rapido-engine.Bslvdp6L.js";import"./rapidos-visuals-integration.DH_XUb4s.js";const i="math974-vis-shared-css",n="math974-vis-clear-listener";function v(){if(document.getElementById(i))return;const t=document.createElement("style");t.id=i,t.textContent=`
/* États de validation — couleurs depuis la palette globale (rapidos-visuals.css :root) */
.vis-inp-ok { border-color: var(--fb-ok) !important; background: var(--fb-ok-bg) !important; color: var(--fb-ok-text) !important; }
.vis-inp-ko { border-color: var(--fb-ko) !important; background: var(--fb-ko-bg) !important; color: var(--fb-ko) !important; }
/* Feedback 😀/😞 */
.vis-fb     { font-size: 0.85em; font-weight: 700; }
.vis-fb.ok  { color: var(--fb-ok); }
.vis-fb.ko  { color: var(--fb-ko); }
/* Consigne intégrée au visuel */
.vis-q { margin-top: 12px; font: inherit; display: flex; align-items: center; flex-wrap: wrap; gap: 6px; }
/* .vis-mathvar est dans rapidos-visuals.css (global) */
  `.trim(),document.head.appendChild(t),document[n]||(document[n]=!0,document.addEventListener("input",o=>{const s=o.target;s.tagName==="INPUT"&&(s.classList.contains("vis-inp-ok")||s.classList.contains("vis-inp-ko"))&&c(s)}))}function d(t,o){const s=t.classList.contains("vis-inp-ok"),a=t.classList.contains("vis-inp-ko");t.classList.toggle("vis-inp-ok",o),t.classList.toggle("vis-inp-ko",!o),o&&!s?e(t,!0):!o&&!a&&e(t,!1)}function c(t){t.classList.remove("vis-inp-ok","vis-inp-ko");const o=t.nextElementSibling;o?.classList.contains("vis-fb")&&(o.textContent="",o.className="vis-fb")}function u(t){const o=t?.closest?.(".q-card");!o||o.dataset.celebrated||(o.dataset.celebrated="1",r(()=>import("./rapidos-visuals-integration.DH_XUb4s.js").then(s=>s.r),__vite__mapDeps([0,1])).then(s=>{typeof s.launchConfetti=="function"&&s.launchConfetti(o)}).catch(()=>{}))}export{c as clearInput,v as ensureSharedStyles,u as fireConfettiOnce,d as markInput};
