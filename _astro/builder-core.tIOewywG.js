import{T as u}from"./rapido-engine.CuqWfHjN.js";import"./editor.CJZspgfY.js";const b=`
.schb { display:block; font-family:inherit; user-select:none; -webkit-user-select:none; }
.schb-panel {
  background:#ffffff; border:1.5px solid #e2e8f0; border-radius:12px;
  padding:8px 10px; max-width:100%; box-sizing:border-box;
}
.schb-panel svg { display:block; max-width:100%; height:auto; margin:0 auto; }
.schb-bank {
  display:flex; flex-wrap:wrap; gap:5px;
  justify-content:center; margin-top:8px; min-height:18px;
}
.schb-chip {
  /* main.css impose min-height:44px à tout <button> → ré-annoncer */
  min-height:0 !important; min-width:0 !important;
  display:inline-flex; align-items:center;
  padding:1px 9px; line-height:1.25;
  background:#e0f2fe; border:1.5px solid #7dd3fc; border-radius:999px;
  font-size:.72rem; font-weight:700; color:#075985;
  cursor:grab; touch-action:none; transition:opacity .12s;
}
.schb-chip:active   { cursor:grabbing; }
.schb-chip-q        { background:#ede9fe; border-color:#c4b5fd; color:#6d28d9; }
.schb-chip.schb-dragging { opacity:.22; }
.schb-bank:empty::before {
  content:'Schéma complété ✓'; color:#16a34a; font-size:.8rem; font-weight:800;
}
`;function f(){if(document.getElementById("schb-styles"))return;const h=document.createElement("style");h.id="schb-styles",h.textContent=b,document.head.appendChild(h)}const g="position:fixed;pointer-events:none;z-index:2147483647;display:inline-flex;align-items:center;padding:1px 9px;line-height:1.25;background:#e0f2fe;border:1.5px solid #7dd3fc;border-radius:999px;font-size:.72rem;font-weight:700;color:#075985;font-family:inherit;box-shadow:0 6px 18px rgba(2,132,199,.35);opacity:.95;";class k extends HTMLElement{connectedCallback(){f(),this.classList.add("schb"),this.dataset.placeMode="1",this._sol=!1,this._locked=!1,this.render()}disconnectedCallback(){this._clearProjected(),this._dragAC&&this._dragAC.abort()}attributeChangedCallback(){this.isConnected&&(this._sol=!1,this._locked=!1,this.render())}makeModel(){throw new Error("SchemaBuilder.makeModel() doit être implémenté")}_clearProjected(){this._textSlot&&(this._textSlot.remove(),this._textSlot=null);const t=this.closest?.(".q-card");t&&t.querySelectorAll(".schb-projected-text").forEach(e=>e.remove())}_projectText(t){const n=this.closest?.(".q-card")?.querySelector(".q-card-content");if(!n)return;const l=document.createElement("div");l.className="schb-projected-text sa-projected-text",l.innerHTML=t,n.prepend(l),this._textSlot=l,window.MathJax&&this.isConnected&&window.MathJax.typesetPromise([l]).catch(()=>{})}render(){this._clearProjected();const t=this.getAttribute("content")||"";let e=null;if(t){e=new u,e.reset();const n=e.parse(t,"web").replace(/\n/g,"<br>");this._projectText(n)}if(this._model=this.makeModel(e),!this._model){this.innerHTML="";return}this.innerHTML='<div class="schb-panel"></div><div class="schb-bank"></div>',this._renderPanel(),this._renderBank(),this._setupDrag()}_renderPanel(t,e){const n=this.querySelector(".schb-panel");n&&(n.innerHTML=this._model.renderSVG({over:t,ko:e}))}_renderBank(){const t=this.querySelector(".schb-bank");t&&(t.innerHTML=this._model.chips().map(e=>`<button type="button" class="schb-chip${e.q?" schb-chip-q":""}" data-cid="${e.id}">${e.html}</button>`).join(""))}_setupDrag(){this._dragAC&&this._dragAC.abort(),this._dragAC=new AbortController;const t={signal:this._dragAC.signal},e=(c,i)=>{const p=this.querySelector(".schb-panel svg");if(!p)return null;const s=p.getBoundingClientRect();if(!s.width)return null;const a=s.width/this._model.width,d=(c-s.left)/a,o=(i-s.top)/a;return this._model.slots().find(r=>d>=r.x&&d<=r.x+r.w&&o>=r.y&&o<=r.y+r.h)||null};let n=null;const l=c=>{const i=c?c.id:null;i!==n&&(n=i,this._renderPanel(n))};this.addEventListener("pointerdown",c=>{if(this._locked)return;const i=c.target.closest(".schb-chip");if(!i||!this.contains(i))return;c.preventDefault();const p=i.dataset.cid,s=document.createElement("div");s.innerHTML=i.innerHTML,s.style.cssText=g+`left:${c.clientX-24}px;top:${c.clientY-14}px;`,(this.closest("dialog")||document.body).appendChild(s),i.classList.add("schb-dragging");const a=o=>{s.style.left=o.clientX-24+"px",s.style.top=o.clientY-14+"px",l(e(o.clientX,o.clientY))},d=o=>{document.removeEventListener("pointermove",a),document.removeEventListener("pointerup",d),document.removeEventListener("pointercancel",d),s.remove(),i.classList.remove("schb-dragging"),n=null;const r=e(o.clientX,o.clientY);if(!r){this._renderPanel();return}if(this._model.tryDrop(r.id,p))this._renderPanel(),this._renderBank();else{this._renderPanel(null,r.id);const m=this._koTok=(this._koTok||0)+1;setTimeout(()=>{m===this._koTok&&this._renderPanel()},850)}};document.addEventListener("pointermove",a),document.addEventListener("pointerup",d),document.addEventListener("pointercancel",d)},t)}toggleSolution(t){const e=typeof t=="boolean"?t:!this._sol;return e===this._sol?this._sol:(this._sol=e,e?(this._snap=this._model.snapshot(),this._model.fillSolution(),this._locked=!0):(this._model.restore(this._snap),this._locked=!1),this._renderPanel(),this._renderBank(),this._sol)}}export{k as SchemaBuilder};
