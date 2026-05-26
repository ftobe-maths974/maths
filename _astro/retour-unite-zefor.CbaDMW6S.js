const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/fullscreen-viewer.BXsBjaA_.js","_astro/editor.CJZspgfY.js"])))=>i.map(i=>d[i]);
import{_ as z}from"./editor.CJZspgfY.js";import{ensureSharedStyles as y}from"./vis-input.0hz6aJN5.js";import{randomize as M}from"./retour-unite.CseDehus.js";import"./utils.MftNdmoG.js";import"./fullscreen-viewer.BXsBjaA_.js";const A="south",D=!0,x=`
math974-retour-unite-zefor {
  display: block;
  font-family: inherit;
  width: 100%;
}
.ruz-direct {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: rgba(99, 102, 241, 0.04);
  border: 2px solid rgba(99, 102, 241, 0.15);
  border-radius: 10px;
  margin-bottom: 12px;
}
.ruz-question {
  font-size: 1.05em;
  font-weight: 500;
  color: #1e293b;
  text-align: center;
}
.ruz-answer-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.1em;
  font-weight: 600;
}
.ruz-input {
  border: none;
  border-bottom: 2px solid #6366f1;
  outline: none;
  font-size: 1.2em;
  font-weight: 700;
  font-family: inherit;
  text-align: center;
  width: 6ch;
  color: #1e293b;
  background: transparent;
  padding: 4px 0;
}
.ruz-input:focus {
  border-bottom-color: #4f46e5;
  background: rgba(99, 102, 241, 0.06);
}
.ruz-input.correct {
  border-bottom-color: #16a34a;
  color: #15803d;
}
.ruz-input.incorrect {
  border-bottom-color: #dc2626;
  color: #dc2626;
}
.ruz-fb {
  font-size: 1.1em;
  min-width: 1.5em;
}
.ruz-celebration {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  margin-bottom: 12px;
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.12), rgba(16, 185, 129, 0.16));
  border: 2px solid rgba(34, 197, 94, 0.35);
  border-radius: 10px;
  color: #14532d;
  font-size: 0.95em;
  animation: ruz-celebration-in 0.3s ease-out;
}
@keyframes ruz-celebration-in {
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
}
.ruz-celebration-msg {
  flex: 1;
  font-weight: 500;
}
.ruz-celebration-btn {
  appearance: none;
  border: none;
  background: #16a34a;
  color: white;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.9em;
}
.ruz-celebration-btn:hover {
  background: #15803d;
}
.ruz-celebration-close {
  appearance: none;
  border: none;
  background: transparent;
  color: #14532d;
  font-size: 1.4em;
  line-height: 1;
  cursor: pointer;
  padding: 0 4px;
  border-radius: 4px;
}
.ruz-celebration-close:hover {
  background: rgba(20, 83, 45, 0.12);
}
.ruz-schema {
  background: rgba(15, 23, 42, 0.03);
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 8px;
  padding: 4px 12px;
}
.ruz-schema > summary {
  cursor: pointer;
  padding: 8px 4px;
  font-weight: 500;
  font-size: 0.95em;
  color: #475569;
  user-select: none;
  -webkit-user-select: none;
}
.ruz-schema > summary:hover {
  color: #1e293b;
}
.ruz-schema[open] > summary {
  margin-bottom: 8px;
  border-bottom: 1px dashed rgba(15, 23, 42, 0.15);
}
.ruz-schema math974-retour-unite {
  margin-top: 4px;
}
`;function v(){if(document.getElementById("ruz-styles"))return;const i=document.createElement("style");i.id="ruz-styles",i.textContent=x,document.head.appendChild(i)}function _(i){return String(i??"").replace(/\s/g,"").replace(",",".")}function g(i,e){const t=parseFloat(_(i));return!isNaN(t)&&Math.abs(t-e)<.01}class w extends HTMLElement{static get observedAttributes(){return["a","b","e","unit-label","value-label"]}connectedCallback(){y(),v(),this.dataset.placeMode="1",this._render()}attributeChangedCallback(){this.isConnected&&this._render()}_cfg(){const e=parseFloat(this.getAttribute("a")),t=parseFloat(this.getAttribute("b")),l=parseFloat(this.getAttribute("e")),c=this.getAttribute("unit-label")||"",u=this.getAttribute("value-label")||"€",d=e&&t?t/e:null,o=d!=null&&l?l*d:null;return{a:e,b:t,e:l,unitLabel:c,valueLabel:u,unitPrice:d,answer:o}}_render(){const{a:e,b:t,e:l,unitLabel:c,valueLabel:u,answer:d}=this._cfg();this.innerHTML="";const o=document.createElement("div");o.className="ruz-direct",o.innerHTML=`
      <div class="ruz-question">Combien coûtent <strong>${l} ${c}</strong> ?</div>
      <div class="ruz-answer-row">
        <span>Réponse :</span>
        <input class="ruz-input rapido-input" type="text" autocomplete="off" inputmode="decimal" placeholder="?">
        <span>${u}</span>
        <span class="rapido-fb" aria-hidden="true"></span>
      </div>
    `;const n=o.querySelector(".ruz-input");o.querySelector(".rapido-fb"),n.dataset.solution=String(d);const a=document.createElement("div");a.className="ruz-celebration",a.style.display="none",a.innerHTML=`
      <span class="ruz-celebration-msg">🎉 Bravo ! Veux-tu vérifier ta démarche avec le schéma ?</span>
      <button type="button" class="ruz-celebration-btn">Voir le schéma</button>
      <button type="button" class="ruz-celebration-close" aria-label="Fermer le message">×</button>
    `;const p=document.createElement("details");p.className="ruz-schema";const b=document.createElement("summary");b.textContent="💡 Voir le schéma d'aide",p.appendChild(b);const s=document.createElement("math974-retour-unite");s.setAttribute("a",String(e)),s.setAttribute("b",String(t)),s.setAttribute("e",String(l)),c&&s.setAttribute("unit-label",c),u&&s.setAttribute("value-label",u),p.appendChild(s),this.appendChild(o),this.appendChild(a),this.appendChild(p),this._inpDirect=n,this._legasy=s,this._schemaDetails=p,this._celebrationEl=a,n.addEventListener("keydown",r=>{r.key==="Enter"&&(r.preventDefault(),n.blur())});const m=this.closest(".q-card");m&&z(()=>import("./fullscreen-viewer.BXsBjaA_.js").then(r=>r.h),__vite__mapDeps([0,1])).then(r=>r.wireCardInputs?.(m)).catch(()=>{}),new MutationObserver(()=>{if(n.classList.contains("correct")&&!this._schemaDetails.open&&!this._celebrated&&(this._celebrated=!0,a.style.display=""),n.classList.contains("incorrect")){const r=this.closest(".q-card");r&&r.dispatchEvent(new CustomEvent("zefor-indice-auto-pop",{detail:{studentValue:n.value,source:this},bubbles:!0}))}}).observe(n,{attributes:!0,attributeFilter:["class"]});let h=null;n.addEventListener("input",()=>{clearTimeout(h),h=setTimeout(()=>{const r=this.closest(".q-card"),f=r?.querySelector(".am-indice-panel.open");!r||!f||r.dispatchEvent(new CustomEvent("zefor-indice-auto-refresh",{detail:{studentValue:n.value,source:this},bubbles:!0}))},300)}),a.querySelector(".ruz-celebration-btn").addEventListener("click",()=>{this._schemaDetails.open=!0,a.style.display="none",this._schemaDetails.scrollIntoView?.({behavior:"smooth",block:"nearest"})}),a.querySelector(".ruz-celebration-close").addEventListener("click",()=>{a.style.display="none"})}getCurrentPhase(){const{answer:e}=this._cfg(),t=this._inpDirect?.value??"";return t.trim()===""?this._schemaDetails?.open?this._legasy?.getCurrentPhase?.()??"reponse_directe":"reponse_directe":g(t,e)?"done":this._schemaDetails?.open?this._legasy?.getCurrentPhase?.()??"erreur_reponse_directe":"erreur_reponse_directe"}validate(){const{answer:e}=this._cfg(),t=g(this._inpDirect?.value,e);return this._schemaDetails?.open&&this._legasy?.validate&&this._legasy.validate(),t}toggleSolution(e){this._legasy?.toggleSolution?.(e)}}customElements.get("math974-retour-unite-zefor")||customElements.define("math974-retour-unite-zefor",w);export{D as autoScale,A as defaultPosition,M as randomize};
