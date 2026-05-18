const v=["impossible","peu-probable","demi","probable","certain"],y={impossible:{label:"Impossible",point:!0},"peu-probable":{label:`peu
probable`,point:!1},demi:{label:`une chance
sur deux`,point:!0},probable:{label:"probable",point:!1},certain:{label:"Certain",point:!0}},_={impossible:["Obtenir un 7 avec un dé à 6 faces","Voir un poisson voler dans le ciel","Piocher une bille verte dans un sac rempli uniquement de billes rouges","Tirer la lettre Z du prénom MARIE","Trouver un élève de 6e âgé de 30 ans","Obtenir un résultat négatif en lançant un dé"],"peu-probable":["Gagner au loto","Piocher la seule bille rouge dans un sac de 20 billes","Obtenir un 6 en lançant un dé à 6 faces","Être frappé par la foudre cette année","Tirer un as dans un jeu de 52 cartes","Trouver une pièce de 2 € par terre en allant au collège","Tomber sur le seul secteur vert d'une roue à 10 secteurs"],demi:["Obtenir Pile en lançant une pièce de monnaie","Obtenir un nombre pair avec un dé à 6 faces","Piocher une bille rouge dans un sac avec autant de rouges que de bleues","Obtenir un nombre supérieur à 3 avec un dé à 6 faces","Le prochain élève interrogé est une fille","Tomber sur rouge avec une roue à 2 secteurs (rouge et bleu)"],probable:["Il fera chaud en janvier à La Réunion","Piocher une bille rouge dans un sac de 8 rouges et 2 bleues","Obtenir un nombre inférieur à 6 avec un dé à 6 faces","Il y aura de la pluie à La Réunion en mars","Tomber sur rouge avec une roue dont 3 secteurs sur 4 sont rouges","Le prochain cyclone à La Réunion aura lieu en été austral"],certain:["Le soleil se lève à l'est","Obtenir un nombre entre 1 et 6 avec un dé à 6 faces","Piocher une bille dans un sac contenant uniquement des billes rouges","Un triangle a 3 côtés","2 + 2 = 4","Il y aura un lever de soleil demain matin","Noël tombe le 25 décembre"]},w=["A","B","C","D","E"],S=`
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
`;function A(){if(document.getElementById("ep-styles"))return;const i=document.createElement("style");i.id="ep-styles",i.textContent=S,document.head.appendChild(i)}function O(i){return i[Math.floor(Math.random()*i.length)]}function $(i){const e=[...i];for(let n=e.length-1;n>0;n--){const t=Math.floor(Math.random()*(n+1));[e[n],e[t]]=[e[t],e[n]]}return e}class q extends HTMLElement{static get observedAttributes(){return["events"]}connectedCallback(){A(),this.dataset.placeMode="1",this._locked=!1,this._solVisible=!1,this._render()}attributeChangedCallback(){this.isConnected&&(this._locked=!1,this._solVisible=!1,this._render())}_eventsData(){try{return JSON.parse(this.getAttribute("events")||"[]")}catch{return[]}}_render(){const e=this._eventsData();if(!e.length){this.innerHTML="";return}const n=e.map(s=>`<div class="ep-ev" data-label="${s.label}"><span class="ep-ev-badge">${s.label}</span><span class="ep-ev-txt">${s.text}</span></div>`).join(""),t=v.map(s=>{const d=y[s];return`<div class="ep-dz" data-zone="${s}"${d.point?" data-point":""}></div>`}).join(""),a=v.map(s=>y[s].point?'<div class="ep-ax-pt"><div class="ep-ax-dot"></div></div>':'<div class="ep-ax-seg"></div>').join(""),b=v.map(s=>{const d=y[s];return`<div class="${d.point?"ep-lbl-pt":"ep-lbl-seg"}">${d.label}</div>`}).join("");this.innerHTML=`
      <div class="ep-events">${n}</div>
      <div class="ep-scale">
        <div class="ep-drop-row">${t}</div>
        <div class="ep-axis-row">${a}</div>
        <div class="ep-label-row">${b}</div>
      </div>
    `,this._setupDrag()}_setupDrag(){this._dragAC&&this._dragAC.abort(),this._dragAC=new AbortController;const e={signal:this._dragAC.signal};let n=null,t=null,a=null,b=null;const s=o=>this.querySelector(`.ep-dz .ep-chip[data-label="${o}"]`),d=o=>this.querySelector(`.ep-ev[data-label="${o}"]`),E=(o,c)=>{let r=null;return this.querySelectorAll(".ep-dz").forEach(p=>{const l=p.getBoundingClientRect();o>=l.left&&o<=l.right&&c>=l.top&&c<=l.bottom&&(r=p)}),r},L=(o,c)=>{const r=document.elementFromPoint(o,c);if(!r)return null;const p=r.closest(".ep-dz");return p&&this.contains(p)?p:null},k=o=>{b!==o&&(b&&b.classList.remove("ep-over"),b=o,o&&o.classList.add("ep-over"))},C="position:fixed;pointer-events:none;z-index:2147483647;display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;background:#dbeafe;border:2px solid #3b82f6;border-radius:4px;font-weight:800;font-size:0.75em;color:#1d4ed8;font-family:inherit;box-shadow:0 4px 16px rgba(59,130,246,.35);opacity:0.92;";this.addEventListener("pointerdown",o=>{if(this._locked)return;const c=o.target.closest(".ep-ev"),r=o.target.closest(".ep-chip"),p=r&&r.closest(".ep-dz")&&this.contains(r),l=c&&this.contains(c);if(!l&&!(p&&!l))return;o.preventDefault(),t=l?c.dataset.label:r.dataset.label,a=l?"list":"zone",n=document.createElement("div"),n.textContent=t,n.style.cssText=C+`left:${o.clientX-10}px;top:${o.clientY-10}px;`,(this.closest("dialog")||document.body).appendChild(n),l?c.classList.add("ep-dragging"):r.style.opacity="0.2";const z=u=>{n.style.left=u.clientX-10+"px",n.style.top=u.clientY-10+"px",k(E(u.clientX,u.clientY))},m=u=>{document.removeEventListener("pointermove",z),document.removeEventListener("pointerup",m),document.removeEventListener("pointercancel",m);const x=L(u.clientX,u.clientY);k(null),n.remove(),n=null;const h=d(t),f=s(t);if(h&&h.classList.remove("ep-dragging"),f&&(f.style.opacity=""),x){f&&f.remove();const g=document.createElement("div");g.className="ep-chip",g.dataset.label=t,g.dataset.zone=x.dataset.zone,g.textContent=t,x.appendChild(g),h&&h.classList.remove("ep-ok","ep-ko")}else a==="zone"&&(f&&f.remove(),h&&h.classList.remove("ep-ok","ep-ko"));t=null,a=null};document.addEventListener("pointermove",z),document.addEventListener("pointerup",m),document.addEventListener("pointercancel",m)},e)}validate(){const e=Object.fromEntries(this._eventsData().map(t=>[t.label,t.zone])),n=new Set;this.querySelectorAll(".ep-dz .ep-chip").forEach(t=>{const a=t.dataset.zone===e[t.dataset.label];t.classList.remove("ep-ok","ep-ko","ep-sol"),t.classList.add(a?"ep-ok":"ep-ko"),n.add(t.dataset.label)}),this.querySelectorAll(".ep-ev").forEach(t=>{t.classList.remove("ep-ok","ep-ko"),n.has(t.dataset.label)||t.classList.add("ep-ko")})}toggleSolution(){return this._solVisible=!this._solVisible,this._solVisible?(this._savedState=this._eventsData().map(e=>{const n=j(this,e.label);return{label:e.label,zone:n?.dataset.zone??null}}),this.querySelectorAll(".ep-dz .ep-chip").forEach(e=>e.remove()),this.querySelectorAll(".ep-ev").forEach(e=>e.classList.remove("ep-ok","ep-ko")),this._eventsData().forEach(e=>{const n=this.querySelector(`.ep-dz[data-zone="${e.zone}"]`);if(!n)return;const t=document.createElement("div");t.className="ep-chip ep-sol",t.dataset.label=e.label,t.dataset.zone=e.zone,t.textContent=e.label,n.appendChild(t)}),this._locked=!0):(this.querySelectorAll(".ep-dz .ep-chip").forEach(e=>e.remove()),this.querySelectorAll(".ep-ev").forEach(e=>e.classList.remove("ep-ok","ep-ko")),(this._savedState||[]).forEach(({label:e,zone:n})=>{if(!n)return;const t=this.querySelector(`.ep-dz[data-zone="${n}"]`);if(!t)return;const a=document.createElement("div");a.className="ep-chip",a.dataset.label=e,a.dataset.zone=n,a.textContent=e,t.appendChild(a)}),this._savedState=null,this._locked=!1),this._solVisible}}function j(i,e){return i.querySelector(`.ep-dz .ep-chip[data-label="${e}"]`)}customElements.get("math974-echelle-probabilite")||customElements.define("math974-echelle-probabilite",q);const M="south";function P(i){const e=$(v.map(n=>({zone:n,text:O(_[n])}))).map((n,t)=>({label:w[t],text:n.text,zone:n.zone}));return i.events=JSON.stringify(e),i}export{q as default,M as defaultPosition,P as randomize};
