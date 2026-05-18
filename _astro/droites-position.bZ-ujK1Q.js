const P="north";function q(a){let e=0;for(const n of String(a))e=Math.imul(e,31)+n.charCodeAt(0)|0;return e=e>>>0||1,()=>(e=Math.imul(1664525,e)+1013904223>>>0,e/4294967296)}function b(a,e,n){const t=Math.cos(n),s=Math.sin(n),l=[];Math.abs(t)>1e-9&&(l.push(-a/t),l.push((220-a)/t)),Math.abs(s)>1e-9&&(l.push(-e/s),l.push((180-e)/s));const i=l.filter(r=>{const c=a+r*t,x=e+r*s;return c>=-1&&c<=221&&x>=-1&&x<=181}).sort((r,c)=>r-c),o=i[0],d=i[i.length-1];return[a+o*t,e+o*s,a+d*t,e+d*s]}function A(a,e){const n=e()*1.2+.35,t=220/2,s=180/2;if(a==="parallele"){const d=(e()*.3+.2)*180,r=s-d/2,c=s+d/2;return{l1:b(t,r,n),l2:b(t,c,n),ix:null,iy:null}}const l=a==="perpendiculaire"?n+Math.PI/2:n+(e()>.5?1:-1)*(e()*.7+.3),i=t+(e()-.5)*40,o=s+(e()-.5)*30;return{l1:b(i,o,n),l2:b(i,o,l),ix:i,iy:o}}class H extends HTMLElement{static get observedAttributes(){return["type","seed","names"]}connectedCallback(){this.dataset.placeMode="1",this._render()}attributeChangedCallback(){this.isConnected&&this._render()}_render(){const e=this.getAttribute("type")||"secante",n=this.getAttribute("seed")||"droites",t=(this.getAttribute("names")||"d₁,d₂").split(","),[s,l]=t,i=q(n),{l1:o,l2:d,ix:r,iy:c}=A(e,i),x=([p,h,f,y],u="#1e293b")=>`<line x1="${p.toFixed(1)}" y1="${h.toFixed(1)}" x2="${f.toFixed(1)}" y2="${y.toFixed(1)}"
        stroke="${u}" stroke-width="2" stroke-linecap="round"/>`,g=([,,p,h],f,y=8,u=-6)=>`<text x="${(p+y).toFixed(1)}" y="${(h+u).toFixed(1)}"
        font-size="13" font-style="italic" fill="#1e293b">(${f})</text>`;let k="";if(e==="perpendiculaire"&&r!=null){const p=Math.atan2(o[3]-o[1],o[2]-o[0]),h=10,f=r+Math.cos(p)*h,y=c+Math.sin(p)*h,u=p+Math.PI/2,M=r+Math.cos(u)*h,v=c+Math.sin(u)*h,F=f+Math.cos(u)*h,S=y+Math.sin(u)*h;k=`<polyline points="${f.toFixed(1)},${y.toFixed(1)} ${F.toFixed(1)},${S.toFixed(1)} ${M.toFixed(1)},${v.toFixed(1)}"
        fill="none" stroke="#475569" stroke-width="1.5"/>`}const m=`<svg viewBox="0 0 220 180" width="220" height="180"
      style="display:block;margin:0 auto;">
      ${x(o)} ${x(d)}
      ${k}
      ${g(o,s,6,-5)} ${g(d,l,6,-5)}
    </svg>`,$=e==="perpendiculaire"?["secante","perpendiculaire"]:e==="parallele"?["parallele"]:["secante"],C=[{key:"secante",label:"Sécantes"},{key:"perpendiculaire",label:`Perpendiculaires &nbsp; (${s})⊥(${l})`},{key:"parallele",label:`Parallèles &nbsp; (${s})//(${l})`}].map(p=>`
      <label class="drp-row" data-key="${p.key}"
        style="display:flex;align-items:center;gap:6px;padding:1px 7px;
          border:1px solid #cbd5e1;border-radius:5px;background:#fff;
          font-size:0.78rem;cursor:pointer;line-height:1.25;">
        <input type="checkbox" class="drp-cb" data-key="${p.key}"
          style="width:15px;height:15px;min-width:15px;min-height:15px;margin:0;cursor:pointer;accent-color:#6366f1;flex-shrink:0;">
        <span class="drp-lbl">${p.label}</span>
        <span class="drp-mark" style="font-weight:700;margin-left:auto;"></span>
      </label>`).join("");this.innerHTML=`
      <div style="padding:8px;display:flex;align-items:center;gap:12px;">
        ${m}
        <div style="flex:1;">
          <div class="drp-btns" style="display:flex;flex-direction:column;gap:3px;">${C}</div>
          <div class="drp-fb" style="min-height:1em;font-size:0.8rem;margin-top:3px;"></div>
        </div>
      </div>`,this._type=e,this._correct=$}_getChecked(){return[...this.querySelectorAll(".drp-cb:checked")].map(e=>e.dataset.key)}validate(){const e=this.querySelector(".drp-fb"),n=this._correct,t=this._getChecked();let s=!0;this.querySelectorAll(".drp-row").forEach(i=>{const o=i.dataset.key,d=n.includes(o),r=t.includes(o),c=i.querySelector(".drp-mark");d&&r?(i.style.borderColor="#22c55e",i.style.background="#dcfce7",c.textContent="😀"):!d&&r?(i.style.borderColor="#ef4444",i.style.background="#fee2e2",c.textContent="😞",s=!1):d&&!r?(i.style.borderColor="#f59e0b",i.style.background="#fef9c3",c.textContent="",s=!1):(i.style.borderColor="#cbd5e1",i.style.background="#fff",c.textContent="")});const l=s&&t.length===n.length;return e&&(e.textContent=l?"😀 Correct !":"😞 Essaie encore."),l}toggleSolution(){const e=this._correct;this.querySelectorAll(".drp-row").forEach(t=>{const s=e.includes(t.dataset.key);t.style.borderColor=s?"#22c55e":"#cbd5e1",t.style.background=s?"#dcfce7":"#fff",t.querySelector(".drp-mark").textContent=""});const n=this.querySelector(".drp-fb");n&&(n.textContent="")}}customElements.define("math974-droites-position",H);function W(a){const e=["secante","perpendiculaire","parallele"],n=e[Math.floor(Math.random()*e.length)],t="drp-"+Math.random().toString(36).slice(2,8);return{...a,type:n,seed:t}}export{H as default,P as defaultPosition,W as randomize};
