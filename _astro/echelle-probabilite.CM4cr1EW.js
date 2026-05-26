import{g as S}from"./fullscreen-viewer.CQ6gM0vR.js";import"./editor.CJZspgfY.js";const m=["impossible","peu-probable","demi","probable","certain"],k={impossible:{label:"Impossible",point:!0},"peu-probable":{label:`peu
probable`,point:!1},demi:{label:`une chance
sur deux`,point:!0},probable:{label:"probable",point:!1},certain:{label:"Certain",point:!0}},w=["A","B","C","D","E"],L=`
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
.ep-ev.ep-ko .ep-ev-badge { border-color: #dc2626; background: #fef2f2; color: #991b1b; }
.ep-ev.ep-ko .ep-ev-badge::after { content: '😞'; color: #dc2626; }
.ep-ev.ep-ok .ep-ev-badge { border-color: #16a34a; background: #dcfce7; color: #166534; }
.ep-ev.ep-ok .ep-ev-badge::after { content: '😀'; color: #16a34a; }

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
.ep-chip.ep-ok  { background: #dcfce7; border-color: #16a34a; color: #166534; }
.ep-chip.ep-ok::after  { content: '😀'; color: #16a34a; }
.ep-chip.ep-ko  { background: #fef2f2; border-color: #dc2626; color: #991b1b; }
.ep-chip.ep-ko::after  { content: '😞'; color: #dc2626; }
.ep-chip.ep-sol { background: #dcfce7; border-color: #16a34a; color: #166534; }
.ep-chip.ep-sol::after { content: '😀'; color: #16a34a; }

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
`;function A(){if(document.getElementById("ep-styles"))return;const s=document.createElement("style");s.id="ep-styles",s.textContent=L,document.head.appendChild(s)}function $(s){return s[Math.floor(Math.random()*s.length)]}function q(s){const e=[...s];for(let t=e.length-1;t>0;t--){const o=Math.floor(Math.random()*(t+1));[e[t],e[o]]=[e[o],e[t]]}return e}class j extends HTMLElement{static get observedAttributes(){return["events"]}connectedCallback(){A(),this.dataset.placeMode="1",this._locked=!1,this._solVisible=!1,this._render()}attributeChangedCallback(){this.isConnected&&(this._locked=!1,this._solVisible=!1,this._render())}_eventsData(){try{return JSON.parse(this.getAttribute("events")||"[]")}catch{return[]}}_render(){const e=this._eventsData();if(!e.length){this.innerHTML="";return}const t=e.map(a=>`<div class="ep-ev" data-label="${a.label}"><span class="ep-ev-badge">${a.label}</span><span class="ep-ev-txt">${a.text}</span></div>`).join(""),o=m.map(a=>{const h=k[a];return`<div class="ep-dz" data-zone="${a}"${h.point?" data-point":""}></div>`}).join(""),n=m.map(a=>k[a].point?'<div class="ep-ax-pt"><div class="ep-ax-dot"></div></div>':'<div class="ep-ax-seg"></div>').join(""),p=m.map(a=>{const h=k[a];return`<div class="${h.point?"ep-lbl-pt":"ep-lbl-seg"}">${h.label}</div>`}).join("");this.innerHTML=`
      <div class="ep-events">${t}</div>
      <div class="ep-scale">
        <div class="ep-drop-row">${o}</div>
        <div class="ep-axis-row">${n}</div>
        <div class="ep-label-row">${p}</div>
      </div>
    `,this._setupDrag()}_setupDrag(){this._dragAC&&this._dragAC.abort(),this._dragAC=new AbortController;const e={signal:this._dragAC.signal};let t=null,o=null,n=null,p=null;const a=i=>this.querySelector(`.ep-dz .ep-chip[data-label="${i}"]`),h=i=>this.querySelector(`.ep-ev[data-label="${i}"]`),E=(i,c)=>{let l=null;return this.querySelectorAll(".ep-dz").forEach(d=>{const r=d.getBoundingClientRect();i>=r.left&&i<=r.right&&c>=r.top&&c<=r.bottom&&(l=d)}),l},_=(i,c)=>{const l=document.elementFromPoint(i,c);if(!l)return null;const d=l.closest(".ep-dz");return d&&this.contains(d)?d:null},y=i=>{p!==i&&(p&&p.classList.remove("ep-over"),p=i,i&&i.classList.add("ep-over"))},C="position:fixed;pointer-events:none;z-index:2147483647;display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;background:#dbeafe;border:2px solid #3b82f6;border-radius:4px;font-weight:800;font-size:0.75em;color:#1d4ed8;font-family:inherit;box-shadow:0 4px 16px rgba(59,130,246,.35);opacity:0.92;";this.addEventListener("pointerdown",i=>{if(this._locked)return;const c=i.target.closest(".ep-ev"),l=i.target.closest(".ep-chip"),d=l&&l.closest(".ep-dz")&&this.contains(l),r=c&&this.contains(c);if(!r&&!(d&&!r))return;i.preventDefault(),o=r?c.dataset.label:l.dataset.label,n=r?"list":"zone",t=document.createElement("div"),t.textContent=o,t.style.cssText=C+`left:${i.clientX-10}px;top:${i.clientY-10}px;`,(this.closest("dialog")||document.body).appendChild(t),r?c.classList.add("ep-dragging"):l.style.opacity="0.2";const z=f=>{t.style.left=f.clientX-10+"px",t.style.top=f.clientY-10+"px",y(E(f.clientX,f.clientY))},x=f=>{document.removeEventListener("pointermove",z),document.removeEventListener("pointerup",x),document.removeEventListener("pointercancel",x);const v=_(f.clientX,f.clientY);y(null),t.remove(),t=null;const b=h(o),u=a(o);if(b&&b.classList.remove("ep-dragging"),u&&(u.style.opacity=""),v){u&&u.remove();const g=document.createElement("div");g.className="ep-chip",g.dataset.label=o,g.dataset.zone=v.dataset.zone,g.textContent=o,v.appendChild(g),b&&b.classList.remove("ep-ok","ep-ko")}else n==="zone"&&(u&&u.remove(),b&&b.classList.remove("ep-ok","ep-ko"));o=null,n=null};document.addEventListener("pointermove",z),document.addEventListener("pointerup",x),document.addEventListener("pointercancel",x)},e)}validate(){const e=Object.fromEntries(this._eventsData().map(n=>[n.label,n.zone])),t=new Set;let o=!0;return this.querySelectorAll(".ep-dz .ep-chip").forEach(n=>{const p=n.dataset.zone===e[n.dataset.label];n.classList.remove("ep-ok","ep-ko","ep-sol"),n.classList.add(p?"ep-ok":"ep-ko"),t.add(n.dataset.label),p||(o=!1)}),this.querySelectorAll(".ep-ev").forEach(n=>{n.classList.remove("ep-ok","ep-ko"),t.has(n.dataset.label)||n.classList.add("ep-ko")}),o&&t.size===this._eventsData().length}toggleSolution(){return this._solVisible=!this._solVisible,this._solVisible?(this._savedState=this._eventsData().map(e=>{const t=M(this,e.label);return{label:e.label,zone:t?.dataset.zone??null}}),this.querySelectorAll(".ep-dz .ep-chip").forEach(e=>e.remove()),this.querySelectorAll(".ep-ev").forEach(e=>e.classList.remove("ep-ok","ep-ko")),this._eventsData().forEach(e=>{const t=this.querySelector(`.ep-dz[data-zone="${e.zone}"]`);if(!t)return;const o=document.createElement("div");o.className="ep-chip ep-sol",o.dataset.label=e.label,o.dataset.zone=e.zone,o.textContent=e.label,t.appendChild(o)}),this._locked=!0):(this.querySelectorAll(".ep-dz .ep-chip").forEach(e=>e.remove()),this.querySelectorAll(".ep-ev").forEach(e=>e.classList.remove("ep-ok","ep-ko")),(this._savedState||[]).forEach(({label:e,zone:t})=>{if(!t)return;const o=this.querySelector(`.ep-dz[data-zone="${t}"]`);if(!o)return;const n=document.createElement("div");n.className="ep-chip",n.dataset.label=e,n.dataset.zone=t,n.textContent=e,o.appendChild(n)}),this._savedState=null,this._locked=!1),this._solVisible}}function M(s,e){return s.querySelector(`.ep-dz .ep-chip[data-label="${e}"]`)}customElements.get("math974-echelle-probabilite")||customElements.define("math974-echelle-probabilite",j);const N="south",T=!0;function V(s){const e=S(),t=q(m.map(o=>({zone:o,text:$(e[o]??[])}))).map((o,n)=>({label:w[n],text:o.text,zone:o.zone}));return s.events=JSON.stringify(t),s}export{T as autoScale,j as default,N as defaultPosition,V as randomize};
