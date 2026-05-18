import{T}from"./rapido-engine.DIfntEUb.js";import"./editor.CJZspgfY.js";const M=`
math974-schema-construire-mult {
  display: block; font-family: inherit;
  user-select: none; -webkit-user-select: none;
}
.scm-panel {
  background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px;
  padding: 8px 10px; max-width: 100%; box-sizing: border-box;
}
.scm-panel svg { display: block; max-width: 100%; height: auto; margin: 0 auto; }

.scm-bank {
  display: flex; flex-wrap: wrap; gap: 5px;
  justify-content: center; margin-top: 8px; min-height: 18px;
}
.scm-chip {
  min-height: 0 !important; min-width: 0 !important;
  display: inline-flex; align-items: center;
  padding: 1px 9px; line-height: 1.25;
  background: #e0f2fe; border: 1.5px solid #7dd3fc; border-radius: 999px;
  font-size: .72rem; font-weight: 700; color: #075985;
  cursor: grab; touch-action: none;
  transition: opacity .12s, box-shadow .12s;
}
.scm-chip:active   { cursor: grabbing; }
.scm-chip-q        { background: #ede9fe; border-color: #c4b5fd; color: #6d28d9; }
.scm-chip.scm-dragging { opacity: .22; }
.scm-bank:empty::before {
  content: 'Schéma complété ✓'; color: #16a34a;
  font-size: .8rem; font-weight: 800;
}
`;function q(){if(document.getElementById("scm-styles"))return;const f=document.createElement("style");f.id="scm-styles",f.textContent=M,document.head.appendChild(f)}function j(f){const t=[...f];for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}class Y extends HTMLElement{static get observedAttributes(){return["content","nombreexpr","valeurexpr","nombre","valeur","unknown","unit","position"]}connectedCallback(){q(),this.dataset.placeMode="1",this._sol=!1,this._locked=!1,this.render()}disconnectedCallback(){this._clearProjected(),this._dragAC&&this._dragAC.abort()}attributeChangedCallback(){this.isConnected&&(this._sol=!1,this._locked=!1,this.render())}_clearProjected(){this._textSlot&&(this._textSlot.remove(),this._textSlot=null);const t=this.closest?.(".q-card");t&&t.querySelectorAll(".scm-projected-text").forEach(e=>e.remove())}_projectText(t){const n=this.closest?.(".q-card")?.querySelector(".q-card-content");if(!n)return;const s=document.createElement("div");s.className="scm-projected-text sa-projected-text",s.innerHTML=t,n.prepend(s),this._textSlot=s,window.MathJax&&this.isConnected&&window.MathJax.typesetPromise([s]).catch(()=>{})}render(){const t=this.getAttribute("content")||"",e=this.getAttribute("unknown")||"tout";this._unit=this.getAttribute("unit")||"",this._clearProjected();let n=4,s=5;if(t){const i=new T;i.reset();const a=i.parse(t,"web").replace(/\n/g,"<br>");this._projectText(a);const o=this.getAttribute("nombreexpr"),h=this.getAttribute("valeurexpr");n=o?i.evaluate(o):parseFloat(this.getAttribute("nombre")||"4"),s=h?i.evaluate(h):parseFloat(this.getAttribute("valeur")||"5")}else n=parseFloat(this.getAttribute("nombre")||"4"),s=parseFloat(this.getAttribute("valeur")||"5");const p=Math.round(n*s*1e3)/1e3;this._v={valeur:e==="valeur"?"?":String(s),nombre:e==="nombre"?"?":String(n),tout:e==="tout"?"?":String(p)},this._placed={valeur:null,nombre:null,tout:null};const r=["valeur","nombre","tout"].map(i=>({kind:i,val:this._v[i],q:this._v[i]==="?"}));this._bank=j(r),this.innerHTML='<div class="scm-panel"></div><div class="scm-bank"></div>',this._renderSchema(),this._renderBank(),this._setupDrag()}_geom(){return{W:300,H:130,PADX:16,barY:42,barH:42,cw:40,x0:16,x1:284,cy:63,bb:93}}_slots(){const t=this._geom();return[{id:"valeur",kind:"valeur",x:t.x0,y:t.barY,w:t.cw,h:t.barH},{id:"nombre",kind:"nombre",x:t.W/2-34,y:t.barY-31,w:68,h:28},{id:"tout",kind:"tout",x:t.W/2-46,y:t.bb+5,w:92,h:38}]}_slotEmpty(t){return!this._placed[t.kind]}_renderSchema(t,e){const n=this._geom(),{W:s,H:p,barY:r,barH:i,cw:a,x0:o,x1:h,cy:m,bb:l}=n,c="#bfdbfe",b="#1d4ed8",_=!!this._placed.valeur,$=(u,g,y)=>{const x=u==="?";return`<text x="${g}" y="${y}" font-family="sans-serif" font-weight="800"
        font-size="${x?22:16}" fill="${x?"#6d28d9":"#1e293b"}"
        text-anchor="middle" dominant-baseline="middle">${u}</text>`},H=u=>u===e?{f:"#fef2f2",s:"#dc2626"}:u===t?{f:"#eff6ff",s:"#3b82f6"}:{f:"#f8fafc",s:"#cbd5e1"},w=(u,g,y,x,L)=>{const C=H(u);return`<rect x="${g}" y="${y}" width="${x}" height="${L}" rx="5"
        fill="${C.f}" stroke="${C.s}" stroke-width="2" stroke-dasharray="5 4"/>`},v=(u,g)=>`<text x="${u}" y="${g}" font-size="20" font-weight="900"
      fill="#dc2626" text-anchor="middle" dominant-baseline="middle">✗</text>`;let d="";this._placed.nombre?d+=`<text x="${s/2}" y="${r-15}" font-family="sans-serif"
        font-weight="800" font-size="15" fill="#475569" text-anchor="middle"
        dominant-baseline="middle">× ${this._placed.nombre.num}</text>`:(d+=`<text x="${s/2-30}" y="${r-15}" font-family="sans-serif"
        font-weight="800" font-size="15" fill="#475569" text-anchor="middle"
        dominant-baseline="middle">×</text>`,d+=w("nombre",s/2-20,r-28,44,26),e==="nombre"&&(d+=v(s/2+2,r-15)));const S=_?c:"#f8fafc",k=_?b:"#cbd5e1",A=_?"":' stroke-dasharray="5 4"';d+=`<rect x="${o}" y="${r}" width="${a}" height="${i}" rx="4"
      fill="${e==="valeur"?"#fef2f2":t==="valeur"?"#eff6ff":S}"
      stroke="${e==="valeur"?"#dc2626":t==="valeur"?"#3b82f6":k}"
      stroke-width="2"${A}/>`,d+=`<rect x="${h-a}" y="${r}" width="${a}" height="${i}" rx="4"
      fill="${S}" stroke="${k}" stroke-width="2"${A}/>`;const E=u=>`<line x1="${o+a}" y1="${u}" x2="${h-a}" y2="${u}"
      stroke="${k}" stroke-width="2" stroke-dasharray="3 4"/>`;d+=E(r)+E(r+i),this._placed.valeur?d+=$(this._placed.valeur.num,o+a/2,m):e==="valeur"&&(d+=v(o+a/2,m)),d+=`<path d="M ${o} ${l-6} V ${l} H ${h} V ${l-6}"
      fill="none" stroke="#94a3b8" stroke-width="2"/>`,this._placed.tout?d+=$(this._placed.tout.num,s/2,l+24):(d+=w("tout",s/2-40,l+8,80,32),e==="tout"&&(d+=v(s/2,l+24))),this.querySelector(".scm-panel").innerHTML=`<svg viewBox="0 0 ${s} ${p}" xmlns="http://www.w3.org/2000/svg"
        width="${s}" height="${p}">${d}</svg>`}_chipHTML(t,e){let n;return t.q?n="?":t.kind==="nombre"?n=t.val:n=`${t.val}${this._unit?"&nbsp;"+this._unit:""}`,`<button type="button" class="scm-chip${t.q?" scm-chip-q":""}" data-cidx="${e}">${n}</button>`}_renderBank(){this.querySelector(".scm-bank").innerHTML=this._bank.map((t,e)=>this._chipHTML(t,e)).join("")}_setupDrag(){this._dragAC&&this._dragAC.abort(),this._dragAC=new AbortController;const t={signal:this._dragAC.signal},e=(r,i)=>{const a=this.querySelector(".scm-panel svg");if(!a)return null;const o=a.getBoundingClientRect();if(!o.width)return null;const h=o.width/this._geom().W,m=(r-o.left)/h,l=(i-o.top)/h;return this._slots().find(c=>m>=c.x&&m<=c.x+c.w&&l>=c.y&&l<=c.y+c.h)||null};let n=null;const s=r=>{const i=r&&this._slotEmpty(r)?r.id:null;i!==n&&(n=i,this._renderSchema(n))},p="position:fixed;pointer-events:none;z-index:2147483647;display:inline-flex;align-items:center;padding:1px 9px;line-height:1.25;background:#e0f2fe;border:1.5px solid #7dd3fc;border-radius:999px;font-size:.72rem;font-weight:700;color:#075985;font-family:inherit;box-shadow:0 6px 18px rgba(2,132,199,.35);opacity:.95;";this.addEventListener("pointerdown",r=>{if(this._locked)return;const i=r.target.closest(".scm-chip");if(!i||!this.contains(i))return;r.preventDefault();const a=this._bank[parseInt(i.dataset.cidx)];if(!a)return;const o=document.createElement("div");o.innerHTML=i.innerHTML,o.style.cssText=p+`left:${r.clientX-24}px;top:${r.clientY-14}px;`,(this.closest("dialog")||document.body).appendChild(o),i.classList.add("scm-dragging");const h=l=>{o.style.left=l.clientX-24+"px",o.style.top=l.clientY-14+"px",s(e(l.clientX,l.clientY))},m=l=>{document.removeEventListener("pointermove",h),document.removeEventListener("pointerup",m),document.removeEventListener("pointercancel",m),o.remove(),i.classList.remove("scm-dragging"),n=null;const c=e(l.clientX,l.clientY);if(!c){this._renderSchema();return}if(this._slotEmpty(c)&&c.kind===a.kind)this._placed[c.kind]={num:a.val,q:a.q},this._bank=this._bank.filter(b=>b!==a),this._renderBank(),this._renderSchema();else{this._renderSchema(null,c.id);const b=this._koTok=(this._koTok||0)+1;setTimeout(()=>{b===this._koTok&&this._renderSchema()},850)}};document.addEventListener("pointermove",h),document.addEventListener("pointerup",m),document.addEventListener("pointercancel",m)},t)}toggleSolution(t){const e=typeof t=="boolean"?t:!this._sol;return e===this._sol?this._sol:(this._sol=e,e?(this._savedBank=this._bank,this._savedPlaced={...this._placed},["valeur","nombre","tout"].forEach(n=>{this._placed[n]={num:this._v[n],q:this._v[n]==="?"}}),this._bank=[],this._locked=!0):(this._bank=this._savedBank||[],this._placed=this._savedPlaced||{valeur:null,nombre:null,tout:null},this._locked=!1),this._renderSchema(),this._renderBank(),this._sol)}}customElements.get("math974-schema-construire-mult")||customElements.define("math974-schema-construire-mult",Y);const B="south";function X(f){return{...f}}export{Y as default,B as defaultPosition,X as randomize};
