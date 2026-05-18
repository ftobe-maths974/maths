const P="north";function q(r){let e=0;for(const i of String(r))e=Math.imul(e,31)+i.charCodeAt(0)|0;return e=e>>>0||1,()=>(e=Math.imul(1664525,e)+1013904223>>>0,e/4294967296)}function b(r,e,i){const t=Math.cos(i),n=Math.sin(i),s=[];Math.abs(t)>1e-9&&(s.push(-r/t),s.push((220-r)/t)),Math.abs(n)>1e-9&&(s.push(-e/n),s.push((180-e)/n));const c=s.filter(l=>{const h=r+l*t,x=e+l*n;return h>=-1&&h<=221&&x>=-1&&x<=181}).sort((l,h)=>l-h),o=c[0],a=c[c.length-1];return[r+o*t,e+o*n,r+a*t,e+a*n]}function A(r,e){const i=e()*1.2+.35,t=220/2,n=180/2;if(r==="parallele"){const a=(e()*.3+.2)*180,l=n-a/2,h=n+a/2;return{l1:b(t,l,i),l2:b(t,h,i),ix:null,iy:null}}const s=r==="perpendiculaire"?i+Math.PI/2:i+(e()>.5?1:-1)*(e()*.7+.3),c=t+(e()-.5)*40,o=n+(e()-.5)*30;return{l1:b(c,o,i),l2:b(c,o,s),ix:c,iy:o}}class H extends HTMLElement{static get observedAttributes(){return["type","seed","names"]}connectedCallback(){this.dataset.placeMode="1",this._render()}attributeChangedCallback(){this.isConnected&&this._render()}_render(){const e=this.getAttribute("type")||"secante",i=this.getAttribute("seed")||"droites",t=(this.getAttribute("names")||"d₁,d₂").split(","),[n,s]=t,c=q(i),{l1:o,l2:a,ix:l,iy:h}=A(e,c),x=([d,p,f,y],u="#1e293b")=>`<line x1="${d.toFixed(1)}" y1="${p.toFixed(1)}" x2="${f.toFixed(1)}" y2="${y.toFixed(1)}"
        stroke="${u}" stroke-width="2" stroke-linecap="round"/>`,g=([,,d,p],f,y=8,u=-6)=>`<text x="${(d+y).toFixed(1)}" y="${(p+u).toFixed(1)}"
        font-size="13" font-style="italic" fill="#1e293b">(${f})</text>`;let k="";if(e==="perpendiculaire"&&l!=null){const d=Math.atan2(o[3]-o[1],o[2]-o[0]),p=10,f=l+Math.cos(d)*p,y=h+Math.sin(d)*p,u=d+Math.PI/2,M=l+Math.cos(u)*p,v=h+Math.sin(u)*p,F=f+Math.cos(u)*p,S=y+Math.sin(u)*p;k=`<polyline points="${f.toFixed(1)},${y.toFixed(1)} ${F.toFixed(1)},${S.toFixed(1)} ${M.toFixed(1)},${v.toFixed(1)}"
        fill="none" stroke="#475569" stroke-width="1.5"/>`}const m=`<svg viewBox="0 0 220 180" width="220" height="180"
      style="display:block;margin:0 auto;">
      ${x(o)} ${x(a)}
      ${k}
      ${g(o,n,6,-5)} ${g(a,s,6,-5)}
    </svg>`,$=e==="perpendiculaire"?["secante","perpendiculaire"]:e==="parallele"?["parallele"]:["secante"],C=[{key:"secante",label:"Sécantes"},{key:"perpendiculaire",label:`Perpendiculaires &nbsp; (${n})⊥(${s})`},{key:"parallele",label:`Parallèles &nbsp; (${n})//(${s})`}].map(d=>`
      <label class="drp-row" data-key="${d.key}"
        style="display:flex;align-items:center;gap:6px;padding:1px 7px;
          border:1px solid #cbd5e1;border-radius:5px;background:#fff;
          font-size:0.78rem;cursor:pointer;line-height:1.25;">
        <input type="checkbox" class="drp-cb" data-key="${d.key}"
          style="width:15px;height:15px;min-width:15px;min-height:15px;margin:0;cursor:pointer;accent-color:#6366f1;flex-shrink:0;">
        <span class="drp-lbl">${d.label}</span>
        <span class="drp-mark" style="font-weight:700;margin-left:auto;"></span>
      </label>`).join("");this.innerHTML=`
      <div style="padding:8px;display:flex;align-items:center;gap:12px;">
        ${m}
        <div style="flex:1;">
          <div class="drp-btns" style="display:flex;flex-direction:column;gap:3px;">${C}</div>
          <div class="drp-fb" style="min-height:1em;font-size:0.8rem;margin-top:3px;"></div>
        </div>
      </div>`,this._type=e,this._correct=$}_getChecked(){return[...this.querySelectorAll(".drp-cb:checked")].map(e=>e.dataset.key)}validate(){const e=this.querySelector(".drp-fb"),i=this._correct,t=this._getChecked();let n=!0;this.querySelectorAll(".drp-row").forEach(s=>{const c=s.dataset.key,o=i.includes(c),a=t.includes(c),l=s.querySelector(".drp-mark");o&&a?(s.style.borderColor="#22c55e",s.style.background="#dcfce7",l.textContent="😀"):!o&&a?(s.style.borderColor="#ef4444",s.style.background="#fee2e2",l.textContent="😞",n=!1):o&&!a?(s.style.borderColor="#f59e0b",s.style.background="#fef9c3",l.textContent="",n=!1):(s.style.borderColor="#cbd5e1",s.style.background="#fff",l.textContent="")}),e&&(e.textContent=n&&t.length===i.length?"😀 Correct !":"😞 Essaie encore.")}toggleSolution(){const e=this._correct;this.querySelectorAll(".drp-row").forEach(t=>{const n=e.includes(t.dataset.key);t.style.borderColor=n?"#22c55e":"#cbd5e1",t.style.background=n?"#dcfce7":"#fff",t.querySelector(".drp-mark").textContent=""});const i=this.querySelector(".drp-fb");i&&(i.textContent="")}}customElements.define("math974-droites-position",H);function W(r){const e=["secante","perpendiculaire","parallele"],i=e[Math.floor(Math.random()*e.length)],t="drp-"+Math.random().toString(36).slice(2,8);return{...r,type:i,seed:t}}export{H as default,P as defaultPosition,W as randomize};
