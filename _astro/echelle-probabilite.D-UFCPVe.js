import{r as g,b as w}from"./rapido-engine.CKWZ0qnF.js";import"./rapidos-visuals-integration.60Q_44ci.js";import"./editor.CJZspgfY.js";const m=["impossible","peu-probable","demi","probable","certain"],k={impossible:{label:"Impossible",point:!0},"peu-probable":{label:`peu
probable`,point:!1},demi:{label:`une chance
sur deux`,point:!0},probable:{label:"probable",point:!1},certain:{label:"Certain",point:!0}},A=["A","B","C","D","E"],L=`
math974-echelle-probabilite {
  display: block;
  user-select: none;
  -webkit-user-select: none;
  font-family: inherit;
}

/* ── Cards draggables A–E ── */
.ep-events {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 5px;
}

.ep-ev {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 2px 6px 2px 2px;
  background: #f0f9ff;
  border: 1.5px solid #bae6fd;
  border-radius: 6px;
  cursor: grab;
  touch-action: none;
  font-size: 0.73em;
  line-height: 1.25;
  transition: border-color 0.12s, opacity 0.12s;
}
.ep-ev:active { cursor: grabbing; }
.ep-ev.ep-dragging { opacity: 0.35; cursor: grabbing; }

.ep-ev-badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px; height: 20px;
  background: #dbeafe;
  border: 2px solid #3b82f6;
  border-radius: 4px;
  font-weight: 800;
  font-size: 0.85em;
  color: #1d4ed8;
  flex-shrink: 0;
}
.ep-ev-txt { color: #374151; }

/* Marqueurs ✓/✗ sur le badge — pour les labels non placés (validation) */
.ep-ev-badge::after {
  position: absolute;
  bottom: -2px; right: -2px;
  font-size: 0.55em; font-weight: 900; line-height: 1;
  pointer-events: none;
}
/* Couleurs : vars --fb-* partagées (cf. :root de rapidos-visuals.css) →
   alignement automatique avec .rapido-input.correct/.incorrect et le reste
   de l'app. Sélecteurs `.correct`/`.incorrect` posés par renderFeedback(). */
.ep-ev.incorrect .ep-ev-badge { border-color: var(--fb-ko); background: var(--fb-ko-bg); color: var(--fb-ko-text); }
.ep-ev.incorrect .ep-ev-badge::after { content: '😞'; color: var(--fb-ko); }
.ep-ev.correct   .ep-ev-badge { border-color: var(--fb-ok); background: var(--fb-ok-bg); color: var(--fb-ok-text); }
.ep-ev.correct   .ep-ev-badge::after { content: '😀'; color: var(--fb-ok); }

/* ── Échelle ── */
.ep-scale { display: flex; flex-direction: column; }

.ep-drop-row {
  display: flex;
  align-items: flex-end;
}

.ep-dz {
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  justify-content: center;
  align-items: flex-end;
  min-height: 26px;
  padding: 2px 1px 2px;
  border-radius: 5px;
  transition: background 0.12s, outline 0.12s;
}
.ep-dz[data-point] { flex: 0 0 56px; }
.ep-dz:not([data-point]) { flex: 1; }
.ep-dz.ep-over {
  background: rgba(59,130,246,0.08);
  outline: 2px dashed #3b82f6;
}

/* Rangée axe */
.ep-axis-row {
  display: flex;
  align-items: center;
  height: 14px;
}
.ep-ax-pt {
  flex: 0 0 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.ep-ax-pt::before {
  content: '';
  position: absolute;
  left: 0; right: 0; top: 50%;
  height: 2px;
  background: #374151;
  transform: translateY(-50%);
}
.ep-ax-dot {
  width: 10px; height: 10px;
  background: #1e40af;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  flex-shrink: 0;
}
.ep-ax-seg {
  flex: 1;
  height: 2px;
  background: #374151;
}

/* Rangée labels */
.ep-label-row {
  display: flex;
  align-items: flex-start;
  margin-top: 2px;
}
.ep-lbl-pt {
  flex: 0 0 56px;
  font-size: 0.60em;
  text-align: center;
  font-weight: 600;
  color: #1e40af;
  line-height: 1.2;
  white-space: pre-line;
}
.ep-lbl-seg {
  flex: 1;
  font-size: 0.58em;
  text-align: center;
  color: #475569;
  line-height: 1.2;
  white-space: pre-line;
}

/* ── Chips (dans les zones de l'échelle) ── */
.ep-chip {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px; height: 20px;
  background: #dbeafe;
  border: 2px solid #3b82f6;
  border-radius: 4px;
  font-weight: 800;
  font-size: 0.75em;
  color: #1d4ed8;
  cursor: grab;
  touch-action: none;
  flex-shrink: 0;
  transition: background 0.15s, border-color 0.15s, color 0.15s;
}
.ep-chip:active { cursor: grabbing; }

/* Marqueurs ✓ / ✗ — texte + couleur (accessibilité daltoniens) */
.ep-chip::after {
  position: absolute;
  bottom: -1px; right: -1px;
  font-size: 0.55em; font-weight: 900; line-height: 1;
  pointer-events: none;
}
/* États `.correct`/`.incorrect` posés par renderFeedback() ; `.ep-sol` est
   l'état dédié de la révélation par 👁 (sémantique « solution révélée par
   le système », pas une réponse élève) — partage le même look que correct. */
.ep-chip.correct,
.ep-chip.ep-sol     { background: var(--fb-ok-bg); border-color: var(--fb-ok); color: var(--fb-ok-text); }
.ep-chip.correct::after,
.ep-chip.ep-sol::after { content: '😀'; color: var(--fb-ok); }
.ep-chip.incorrect  { background: var(--fb-ko-bg); border-color: var(--fb-ko); color: var(--fb-ko-text); }
.ep-chip.incorrect::after { content: '😞'; color: var(--fb-ko); }

/* Ghost */
.ep-ghost {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px; height: 20px;
  background: #dbeafe;
  border: 2px solid #3b82f6;
  border-radius: 4px;
  font-weight: 800;
  font-size: 0.75em;
  color: #1d4ed8;
  font-family: inherit;
  box-shadow: 0 4px 16px rgba(59,130,246,0.35);
  opacity: 0.92;
}
`;function $(){if(document.getElementById("ep-styles"))return;const r=document.createElement("style");r.id="ep-styles",r.textContent=L,document.head.appendChild(r)}function q(r){return r[Math.floor(Math.random()*r.length)]}function j(r){const e=[...r];for(let t=e.length-1;t>0;t--){const o=Math.floor(Math.random()*(t+1));[e[t],e[o]]=[e[o],e[t]]}return e}class M extends HTMLElement{static get observedAttributes(){return["events"]}connectedCallback(){$(),this.dataset.placeMode="1",this._locked=!1,this._solVisible=!1,this._render()}attributeChangedCallback(){this.isConnected&&(this._locked=!1,this._solVisible=!1,this._render())}_eventsData(){try{return JSON.parse(this.getAttribute("events")||"[]")}catch{return[]}}_render(){const e=this._eventsData();if(!e.length){this.innerHTML="";return}const t=e.map(a=>`<div class="ep-ev" data-label="${a.label}"><span class="ep-ev-badge">${a.label}</span><span class="ep-ev-txt">${a.text}</span></div>`).join(""),o=m.map(a=>{const b=k[a];return`<div class="ep-dz" data-zone="${a}"${b.point?" data-point":""}></div>`}).join(""),n=m.map(a=>k[a].point?'<div class="ep-ax-pt"><div class="ep-ax-dot"></div></div>':'<div class="ep-ax-seg"></div>').join(""),c=m.map(a=>{const b=k[a];return`<div class="${b.point?"ep-lbl-pt":"ep-lbl-seg"}">${b.label}</div>`}).join("");this.innerHTML=`
      <div class="ep-events">${t}</div>
      <div class="ep-scale">
        <div class="ep-drop-row">${o}</div>
        <div class="ep-axis-row">${n}</div>
        <div class="ep-label-row">${c}</div>
      </div>
    `,this._setupDrag()}_setupDrag(){this._dragAC&&this._dragAC.abort(),this._dragAC=new AbortController;const e={signal:this._dragAC.signal};let t=null,o=null,n=null,c=null;const a=i=>this.querySelector(`.ep-dz .ep-chip[data-label="${i}"]`),b=i=>this.querySelector(`.ep-ev[data-label="${i}"]`),C=(i,p)=>{let s=null;return this.querySelectorAll(".ep-dz").forEach(d=>{const l=d.getBoundingClientRect();i>=l.left&&i<=l.right&&p>=l.top&&p<=l.bottom&&(s=d)}),s},_=(i,p)=>{const s=document.elementFromPoint(i,p);if(!s)return null;const d=s.closest(".ep-dz");return d&&this.contains(d)?d:null},z=i=>{c!==i&&(c&&c.classList.remove("ep-over"),c=i,i&&i.classList.add("ep-over"))},S="position:fixed;pointer-events:none;z-index:2147483647;display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;background:#dbeafe;border:2px solid #3b82f6;border-radius:4px;font-weight:800;font-size:0.75em;color:#1d4ed8;font-family:inherit;box-shadow:0 4px 16px rgba(59,130,246,.35);opacity:0.92;";this.addEventListener("pointerdown",i=>{if(this._locked)return;const p=i.target.closest(".ep-ev"),s=i.target.closest(".ep-chip"),d=s&&s.closest(".ep-dz")&&this.contains(s),l=p&&this.contains(p);if(!l&&!(d&&!l))return;i.preventDefault(),o=l?p.dataset.label:s.dataset.label,n=l?"list":"zone",t=document.createElement("div"),t.textContent=o,t.style.cssText=S+`left:${i.clientX-10}px;top:${i.clientY-10}px;`,(this.closest("dialog")||document.body).appendChild(t),l?p.classList.add("ep-dragging"):s.style.opacity="0.2";const E=h=>{t.style.left=h.clientX-10+"px",t.style.top=h.clientY-10+"px",z(C(h.clientX,h.clientY))},x=h=>{document.removeEventListener("pointermove",E),document.removeEventListener("pointerup",x),document.removeEventListener("pointercancel",x);const y=_(h.clientX,h.clientY);z(null),t.remove(),t=null;const u=b(o),f=a(o);if(u&&u.classList.remove("ep-dragging"),f&&(f.style.opacity=""),y){f&&f.remove();const v=document.createElement("div");v.className="ep-chip",v.dataset.label=o,v.dataset.zone=y.dataset.zone,v.textContent=o,y.appendChild(v),u&&g(u,"neutral")}else n==="zone"&&(f&&f.remove(),u&&g(u,"neutral"));o=null,n=null};document.addEventListener("pointermove",E),document.addEventListener("pointerup",x),document.addEventListener("pointercancel",x)},e)}validate(){const e=Object.fromEntries(this._eventsData().map(n=>[n.label,n.zone])),t=new Set;let o=!0;return this.querySelectorAll(".ep-dz .ep-chip").forEach(n=>{const c=n.dataset.zone===e[n.dataset.label];n.classList.remove("ep-sol"),g(n,c?"correct":"incorrect"),t.add(n.dataset.label),c||(o=!1)}),this.querySelectorAll(".ep-ev").forEach(n=>{g(n,t.has(n.dataset.label)?"neutral":"incorrect")}),o&&t.size===this._eventsData().length}toggleSolution(){return this._solVisible=!this._solVisible,this._solVisible?(this._savedState=this._eventsData().map(e=>{const t=D(this,e.label);return{label:e.label,zone:t?.dataset.zone??null}}),this.querySelectorAll(".ep-dz .ep-chip").forEach(e=>e.remove()),this.querySelectorAll(".ep-ev").forEach(e=>g(e,"neutral")),this._eventsData().forEach(e=>{const t=this.querySelector(`.ep-dz[data-zone="${e.zone}"]`);if(!t)return;const o=document.createElement("div");o.className="ep-chip ep-sol",o.dataset.label=e.label,o.dataset.zone=e.zone,o.textContent=e.label,t.appendChild(o)}),this._locked=!0):(this.querySelectorAll(".ep-dz .ep-chip").forEach(e=>e.remove()),this.querySelectorAll(".ep-ev").forEach(e=>g(e,"neutral")),(this._savedState||[]).forEach(({label:e,zone:t})=>{if(!t)return;const o=this.querySelector(`.ep-dz[data-zone="${t}"]`);if(!o)return;const n=document.createElement("div");n.className="ep-chip",n.dataset.label=e,n.dataset.zone=t,n.textContent=e,o.appendChild(n)}),this._savedState=null,this._locked=!1),this._solVisible}}function D(r,e){return r.querySelector(`.ep-dz .ep-chip[data-label="${e}"]`)}customElements.get("math974-echelle-probabilite")||customElements.define("math974-echelle-probabilite",M);const T="south",V=!0;function B(r){const e=w(),t=j(m.map(o=>({zone:o,text:q(e[o]??[])}))).map((o,n)=>({label:A[n],text:o.text,zone:o.zone}));return r.events=JSON.stringify(t),r}export{V as autoScale,M as default,T as defaultPosition,B as randomize};
