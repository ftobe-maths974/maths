const o="math974-vis-shared-css",e="math974-vis-clear-listener";function a(){if(document.getElementById(o))return;const t=document.createElement("style");t.id=o,t.textContent=`
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
  `.trim(),document.head.appendChild(t),document[e]||(document[e]=!0,document.addEventListener("input",s=>{const i=s.target;i.tagName==="INPUT"&&(i.classList.contains("vis-inp-ok")||i.classList.contains("vis-inp-ko"))&&n(i)}))}function r(t,s){t.classList.toggle("vis-inp-ok",s),t.classList.toggle("vis-inp-ko",!s);const i=t.nextElementSibling;i?.classList.contains("vis-fb")&&(i.textContent=s?"😀":"😞",i.className=`vis-fb ${s?"ok":"ko"}`)}function n(t){t.classList.remove("vis-inp-ok","vis-inp-ko");const s=t.nextElementSibling;s?.classList.contains("vis-fb")&&(s.textContent="",s.className="vis-fb")}export{n as clearInput,a as ensureSharedStyles,r as markInput};
