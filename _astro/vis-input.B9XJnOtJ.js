const s="math974-vis-shared-css",e="math974-vis-clear-listener";function a(){if(document.getElementById(s))return;const t=document.createElement("style");t.id=s,t.textContent=`
/* États de validation */
.vis-inp-ok { border-color: #16a34a !important; background: #f0fdf4 !important; color: #15803d !important; }
.vis-inp-ko { border-color: #dc2626 !important; background: #fef2f2 !important; color: #dc2626 !important; }
/* Feedback ✓/✗ */
.vis-fb     { font-size: 0.85em; font-weight: 700; }
.vis-fb.ok  { color: #16a34a; }
.vis-fb.ko  { color: #dc2626; }
/* Consigne intégrée au visuel */
.vis-q { margin-top: 12px; font: inherit; display: flex; align-items: center; flex-wrap: wrap; gap: 6px; }
/* .vis-mathvar est dans rapidos-visuals.css (global) */
  `.trim(),document.head.appendChild(t),document[e]||(document[e]=!0,document.addEventListener("input",i=>{const n=i.target;n.tagName==="INPUT"&&(n.classList.contains("vis-inp-ok")||n.classList.contains("vis-inp-ko"))&&o(n)}))}function c(t,i){t.classList.toggle("vis-inp-ok",i),t.classList.toggle("vis-inp-ko",!i);const n=t.nextElementSibling;n?.classList.contains("vis-fb")&&(n.textContent=i?"✓":"✗",n.className=`vis-fb ${i?"ok":"ko"}`)}function o(t){t.classList.remove("vis-inp-ok","vis-inp-ko");const i=t.nextElementSibling;i?.classList.contains("vis-fb")&&(i.textContent="",i.className="vis-fb")}export{o as clearInput,a as ensureSharedStyles,c as markInput};
