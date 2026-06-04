import{ensureSharedStyles as d}from"./vis-input.DoBI6_d0.js";import{derive as L,randomize as A}from"./retour-unite.Sv9Yvbcw.js";import"./preload-helper.CLcXU_4U.js";import"./rapido-engine.BE6LLFR1.js";import"./rapidos-visuals-integration.CPeJY-XX.js";import"./js-yaml.CwjAzRNl.js";import"./editor.Di92v2Ao.js";import"./utils.MftNdmoG.js";const w="south",C=!0,S=!0,h=`
math974-retour-unite-zefor {
  display: block;
  font-family: inherit;
  width: 100%;
}
/* Énoncé + champ réponse [?answer] sont déclarés en DSL dans le content de la
   fiche (brique). Le visuel = célébration Z6 + schéma d'aide dépliable. */
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
`;function b(){if(document.getElementById("ruz-styles"))return;const n=document.createElement("style");n.id="ruz-styles",n.textContent=h,document.head.appendChild(n)}function p(n){return String(n??"").replace(/\s/g,"").replace(",",".")}function u(n,t){const e=parseFloat(p(n));return!isNaN(e)&&Math.abs(e-t)<.01}class m extends HTMLElement{static get observedAttributes(){return["a","b","e","unit-label","value-label"]}connectedCallback(){d(),b(),this.dataset.placeMode="1",this._render(),this._wireInput()}attributeChangedCallback(){this.isConnected&&(this._render(),this._wireInput())}disconnectedCallback(){this._obs?.disconnect()}_input(){return this.closest(".q-card")?.querySelector(".variant-content.active .content .rapido-input")||this.closest(".variant-content")?.querySelector(".rapido-input")}_cfg(){const t=parseFloat(this.getAttribute("a")),e=parseFloat(this.getAttribute("b")),i=parseFloat(this.getAttribute("e")),o=this.getAttribute("unit-label")||"",l=this.getAttribute("value-label")||"€",r=t&&e?e/t:null,s=r!=null&&i?i*r:null;return{a:t,b:e,e:i,unitLabel:o,valueLabel:l,unitPrice:r,answer:s}}_render(){const{a:t,b:e,e:i,unitLabel:o,valueLabel:l}=this._cfg();this.innerHTML="";const r=document.createElement("div");r.className="ruz-celebration",r.style.display="none",r.innerHTML=`
      <span class="ruz-celebration-msg">🎉 Bravo ! Veux-tu vérifier ta démarche avec le schéma ?</span>
      <button type="button" class="ruz-celebration-btn">Voir le schéma</button>
      <button type="button" class="ruz-celebration-close" aria-label="Fermer le message">×</button>
    `;const s=document.createElement("details");s.className="ruz-schema";const c=document.createElement("summary");c.textContent="💡 Voir le schéma d'aide",s.appendChild(c);const a=document.createElement("math974-retour-unite");a.setAttribute("a",String(t)),a.setAttribute("b",String(e)),a.setAttribute("e",String(i)),o&&a.setAttribute("unit-label",o),l&&a.setAttribute("value-label",l),s.appendChild(a),this.appendChild(r),this.appendChild(s),this._legasy=a,this._schemaDetails=s,this._celebrationEl=r,r.querySelector(".ruz-celebration-btn").addEventListener("click",()=>{this._schemaDetails.open=!0,r.style.display="none",this._schemaDetails.scrollIntoView?.({behavior:"smooth",block:"nearest"})}),r.querySelector(".ruz-celebration-close").addEventListener("click",()=>{r.style.display="none"})}_wireInput(t=0){const e=this._input();if(!e){t<5&&requestAnimationFrame(()=>this._wireInput(t+1));return}e!==this._wiredInp&&(this._wiredInp=e,this._obs?.disconnect(),this._obs=new MutationObserver(()=>{e.classList.contains("correct")&&!this._schemaDetails?.open&&!this._celebrated&&(this._celebrated=!0,this._celebrationEl&&(this._celebrationEl.style.display="")),e.classList.contains("incorrect")&&this.closest(".q-card")?.dispatchEvent(new CustomEvent("zefor-indice-auto-pop",{detail:{studentValue:e.value,source:this},bubbles:!0}))}),this._obs.observe(e,{attributes:!0,attributeFilter:["class"]}),e.addEventListener("input",()=>{clearTimeout(this._refreshTimer),this._refreshTimer=setTimeout(()=>{const i=this.closest(".q-card");i?.querySelector(".am-indice-panel.open")&&i.dispatchEvent(new CustomEvent("zefor-indice-auto-refresh",{detail:{studentValue:e.value,source:this},bubbles:!0}))},300)}))}getCurrentPhase(){const{answer:t}=this._cfg(),e=this._input()?.value??"";return e.trim()===""?this._schemaDetails?.open?this._legasy?.getCurrentPhase?.()??"reponse_directe":"reponse_directe":u(e,t)?"done":this._schemaDetails?.open?this._legasy?.getCurrentPhase?.()??"erreur_reponse_directe":"erreur_reponse_directe"}getCurrentStudentValue(){return this._input()?.value??""}validate(){const{answer:t}=this._cfg(),e=u(this._input()?.value,t);return this._schemaDetails?.open&&this._legasy?.validate&&this._legasy.validate(),e}toggleSolution(t){this._legasy?.toggleSolution?.(t)}}customElements.get("math974-retour-unite-zefor")||customElements.define("math974-retour-unite-zefor",m);export{S as autoScale,C as contentBlock,w as defaultPosition,L as derive,A as randomize};
