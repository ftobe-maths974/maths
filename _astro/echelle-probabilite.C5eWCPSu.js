const v=["impossible","peu-probable","demi","probable","certain"],y={impossible:{label:"Impossible",point:!0},"peu-probable":{label:`peu
probable`,point:!1},demi:{label:`une chance
sur deux`,point:!0},probable:{label:"probable",point:!1},certain:{label:"Certain",point:!0}},C={impossible:["Obtenir un 7 avec un dé à 6 faces","Voir un poisson voler dans le ciel","Piocher une bille verte dans un sac rempli uniquement de billes rouges","Tirer la lettre Z du prénom MARIE","Trouver un élève de 6e âgé de 30 ans","Obtenir un résultat négatif en lançant un dé"],"peu-probable":["Gagner au loto","Piocher la seule bille rouge dans un sac de 20 billes","Obtenir un 6 en lançant un dé à 6 faces","Être frappé par la foudre cette année","Tirer un as dans un jeu de 52 cartes","Trouver une pièce de 2 € par terre en allant au collège","Tomber sur le seul secteur vert d'une roue à 10 secteurs"],demi:["Obtenir Pile en lançant une pièce de monnaie","Obtenir un nombre pair avec un dé à 6 faces","Piocher une bille rouge dans un sac avec autant de rouges que de bleues","Obtenir un nombre supérieur à 3 avec un dé à 6 faces","Le prochain élève interrogé est une fille","Tomber sur rouge avec une roue à 2 secteurs (rouge et bleu)"],probable:["Il fera chaud en janvier à La Réunion","Piocher une bille rouge dans un sac de 8 rouges et 2 bleues","Obtenir un nombre inférieur à 6 avec un dé à 6 faces","Il y aura de la pluie à La Réunion en mars","Tomber sur rouge avec une roue dont 3 secteurs sur 4 sont rouges","Le prochain cyclone à La Réunion aura lieu en été austral"],certain:["Le soleil se lève à l'est","Obtenir un nombre entre 1 et 6 avec un dé à 6 faces","Piocher une bille dans un sac contenant uniquement des billes rouges","Un triangle a 3 côtés","2 + 2 = 4","Il y aura un lever de soleil demain matin","Noël tombe le 25 décembre"]},S=["A","B","C","D","E"],w=`
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
`;function A(){if(document.getElementById("ep-styles"))return;const a=document.createElement("style");a.id="ep-styles",a.textContent=w,document.head.appendChild(a)}function O(a){return a[Math.floor(Math.random()*a.length)]}function $(a){const e=[...a];for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}class q extends HTMLElement{static get observedAttributes(){return["events"]}connectedCallback(){A(),this.dataset.placeMode="1",this._locked=!1,this._solVisible=!1,this._render()}attributeChangedCallback(){this.isConnected&&(this._locked=!1,this._solVisible=!1,this._render())}_eventsData(){try{return JSON.parse(this.getAttribute("events")||"[]")}catch{return[]}}_render(){const e=this._eventsData();if(!e.length){this.innerHTML="";return}const t=e.map(s=>`<div class="ep-ev" data-label="${s.label}"><span class="ep-ev-badge">${s.label}</span><span class="ep-ev-txt">${s.text}</span></div>`).join(""),n=v.map(s=>{const u=y[s];return`<div class="ep-dz" data-zone="${s}"${u.point?" data-point":""}></div>`}).join(""),o=v.map(s=>y[s].point?'<div class="ep-ax-pt"><div class="ep-ax-dot"></div></div>':'<div class="ep-ax-seg"></div>').join(""),c=v.map(s=>{const u=y[s];return`<div class="${u.point?"ep-lbl-pt":"ep-lbl-seg"}">${u.label}</div>`}).join("");this.innerHTML=`
      <div class="ep-events">${t}</div>
      <div class="ep-scale">
        <div class="ep-drop-row">${n}</div>
        <div class="ep-axis-row">${o}</div>
        <div class="ep-label-row">${c}</div>
      </div>
    `,this._setupDrag()}_setupDrag(){this._dragAC&&this._dragAC.abort(),this._dragAC=new AbortController;const e={signal:this._dragAC.signal};let t=null,n=null,o=null,c=null;const s=i=>this.querySelector(`.ep-dz .ep-chip[data-label="${i}"]`),u=i=>this.querySelector(`.ep-ev[data-label="${i}"]`),E=(i,p)=>{let l=null;return this.querySelectorAll(".ep-dz").forEach(d=>{const r=d.getBoundingClientRect();i>=r.left&&i<=r.right&&p>=r.top&&p<=r.bottom&&(l=d)}),l},L=(i,p)=>{const l=document.elementFromPoint(i,p);if(!l)return null;const d=l.closest(".ep-dz");return d&&this.contains(d)?d:null},k=i=>{c!==i&&(c&&c.classList.remove("ep-over"),c=i,i&&i.classList.add("ep-over"))},_="position:fixed;pointer-events:none;z-index:2147483647;display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;background:#dbeafe;border:2px solid #3b82f6;border-radius:4px;font-weight:800;font-size:0.75em;color:#1d4ed8;font-family:inherit;box-shadow:0 4px 16px rgba(59,130,246,.35);opacity:0.92;";this.addEventListener("pointerdown",i=>{if(this._locked)return;const p=i.target.closest(".ep-ev"),l=i.target.closest(".ep-chip"),d=l&&l.closest(".ep-dz")&&this.contains(l),r=p&&this.contains(p);if(!r&&!(d&&!r))return;i.preventDefault(),n=r?p.dataset.label:l.dataset.label,o=r?"list":"zone",t=document.createElement("div"),t.textContent=n,t.style.cssText=_+`left:${i.clientX-10}px;top:${i.clientY-10}px;`,(this.closest("dialog")||document.body).appendChild(t),r?p.classList.add("ep-dragging"):l.style.opacity="0.2";const z=b=>{t.style.left=b.clientX-10+"px",t.style.top=b.clientY-10+"px",k(E(b.clientX,b.clientY))},m=b=>{document.removeEventListener("pointermove",z),document.removeEventListener("pointerup",m),document.removeEventListener("pointercancel",m);const x=L(b.clientX,b.clientY);k(null),t.remove(),t=null;const h=u(n),f=s(n);if(h&&h.classList.remove("ep-dragging"),f&&(f.style.opacity=""),x){f&&f.remove();const g=document.createElement("div");g.className="ep-chip",g.dataset.label=n,g.dataset.zone=x.dataset.zone,g.textContent=n,x.appendChild(g),h&&h.classList.remove("ep-ok","ep-ko")}else o==="zone"&&(f&&f.remove(),h&&h.classList.remove("ep-ok","ep-ko"));n=null,o=null};document.addEventListener("pointermove",z),document.addEventListener("pointerup",m),document.addEventListener("pointercancel",m)},e)}validate(){const e=Object.fromEntries(this._eventsData().map(o=>[o.label,o.zone])),t=new Set;let n=!0;return this.querySelectorAll(".ep-dz .ep-chip").forEach(o=>{const c=o.dataset.zone===e[o.dataset.label];o.classList.remove("ep-ok","ep-ko","ep-sol"),o.classList.add(c?"ep-ok":"ep-ko"),t.add(o.dataset.label),c||(n=!1)}),this.querySelectorAll(".ep-ev").forEach(o=>{o.classList.remove("ep-ok","ep-ko"),t.has(o.dataset.label)||o.classList.add("ep-ko")}),n&&t.size===this._eventsData().length}toggleSolution(){return this._solVisible=!this._solVisible,this._solVisible?(this._savedState=this._eventsData().map(e=>{const t=j(this,e.label);return{label:e.label,zone:t?.dataset.zone??null}}),this.querySelectorAll(".ep-dz .ep-chip").forEach(e=>e.remove()),this.querySelectorAll(".ep-ev").forEach(e=>e.classList.remove("ep-ok","ep-ko")),this._eventsData().forEach(e=>{const t=this.querySelector(`.ep-dz[data-zone="${e.zone}"]`);if(!t)return;const n=document.createElement("div");n.className="ep-chip ep-sol",n.dataset.label=e.label,n.dataset.zone=e.zone,n.textContent=e.label,t.appendChild(n)}),this._locked=!0):(this.querySelectorAll(".ep-dz .ep-chip").forEach(e=>e.remove()),this.querySelectorAll(".ep-ev").forEach(e=>e.classList.remove("ep-ok","ep-ko")),(this._savedState||[]).forEach(({label:e,zone:t})=>{if(!t)return;const n=this.querySelector(`.ep-dz[data-zone="${t}"]`);if(!n)return;const o=document.createElement("div");o.className="ep-chip",o.dataset.label=e,o.dataset.zone=t,o.textContent=e,n.appendChild(o)}),this._savedState=null,this._locked=!1),this._solVisible}}function j(a,e){return a.querySelector(`.ep-dz .ep-chip[data-label="${e}"]`)}customElements.get("math974-echelle-probabilite")||customElements.define("math974-echelle-probabilite",q);const M="south",D=!0;function P(a){const e=$(v.map(t=>({zone:t,text:O(C[t])}))).map((t,n)=>({label:S[n],text:t.text,zone:t.zone}));return a.events=JSON.stringify(e),a}export{D as autoScale,q as default,M as defaultPosition,P as randomize};
