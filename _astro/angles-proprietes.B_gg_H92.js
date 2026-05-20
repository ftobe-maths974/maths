import{parseRange as g}from"./utils.MftNdmoG.js";const H="north",I=!0,A=210,M=165,h=A/2,b=M/2;function _(n){return n*Math.PI/180}function r(n,t){return[h+t*Math.cos(_(n)),b+t*Math.sin(_(n))]}function $(n,t){return`<line x1="${n[0].toFixed(1)}" y1="${n[1].toFixed(1)}"
    x2="${t[0].toFixed(1)}" y2="${t[1].toFixed(1)}"
    stroke="#1e293b" stroke-width="2" stroke-linecap="round"/>`}function x(n,t,o,e){const[a,s]=r(t,n),[c,l]=r(o,n),i=(o-t+360)%360>180?1:0;return`<path d="M${h},${b} L${a.toFixed(1)},${s.toFixed(1)}
    A${n},${n} 0 ${i} 1 ${c.toFixed(1)},${l.toFixed(1)} Z"
    fill="${e}" fill-opacity="0.25" stroke="${e}" stroke-width="1" stroke-opacity="0.5"/>`}function f(n,t,o,e=11,a="#1e293b"){const[s,c]=r(n,t);return`<text x="${s.toFixed(1)}" y="${c.toFixed(1)}"
    text-anchor="middle" dominant-baseline="middle"
    font-size="${e}" font-weight="700" fill="${a}">${o}</text>`}function v(n){let t=0;for(const o of String(n))t=Math.imul(t,31)+o.charCodeAt(0)|0;return t=t>>>0||1,()=>(t=Math.imul(1664525,t)+1013904223>>>0,t/4294967296)}function L(n,t){const e=10+v(t)()*25,a=65,s=20;return`
    ${$(r(e,a),r(e+180,a))}
    ${$(r(e+n,a),r(e+n+180,a))}
    ${x(s,e,e+n,k)}
    ${x(s,e+180,e+180+n,y)}
    ${f(e+n/2,s+15,`${n}°`,11,k)}
    ${f(e+180+n/2,s+15,"?",11,y)}`}const k="#1d4ed8",B="#3b82f6",y="#ea580c",q="#64748b";function w(n,t,o,e){const s=5+v(e)()*15,c=60,l=20,p=38,i=150+s,u=i-n,d=i-(n+t),E=`${n}°`,R=o==="b"?"?":`${t}°`,j=o==="total"?"?":`${n+t}°`,O=k,S=o==="b"?y:B,F=o==="total"?y:q;let m=$([h,b],r(i,c))+$([h,b],r(u,c))+$([h,b],r(d,c));return m+=f(i,c+14,"A",10)+f(u,c+14,"B",10)+f(d,c+14,"C",10),m+=`<text x="${(h+7).toFixed(1)}" y="${(b+9).toFixed(1)}"
    font-size="9" font-style="italic" fill="#64748b">O</text>`,m+=x(p,d,i,F)+f((i+d)/2,p+15,j,11,F),m+=x(l,u,i,O)+f((i+u)/2,l+15,E,11,O),m+=x(l+6,d,u,S)+f((u+d)/2,l+21,R,11,S),m}function z(n,t){const e=v(t)()>.5,a=65,s=22,c=e?n:180-n,l=180+c,p=180+c/2,i=270+c/2;return`
    ${$(r(180,a),r(0,a))}
    ${$([h,b],r(l,a))}
    ${x(s,180,l,k)}
    ${x(s,l,360,y)}
    ${f(p,s+15,`${c}°`,11,k)}
    ${f(i,s+15,"?",11,y)}`}class P extends HTMLElement{static get observedAttributes(){return["mode","a","b","unknown","seed"]}connectedCallback(){this._render()}attributeChangedCallback(){this.isConnected&&this._render()}_render(){const t=this.getAttribute("mode")||"oppose",o=parseInt(this.getAttribute("a")||"95",10),e=parseInt(this.getAttribute("b")||"40",10),a=this.getAttribute("unknown")||"total",s=this.getAttribute("seed")||"ap";let c="";t==="oppose"?c=L(o,s):t==="adjacent"?c=w(o,e,a,s):t==="supplementaire"&&(c=z(o,s));const l=`<svg viewBox="0 0 ${A} ${M}" width="${A}" height="${M}"
      style="display:block;flex-shrink:0;width:${A}px;height:${M}px;">${c}</svg>`,p=t==="supplementaire"?["supplementaire","adjacent"]:[t],u=[{key:"adjacent",label:"Adjacents"},{key:"oppose",label:"Opposés par le sommet"},{key:"supplementaire",label:"Supplémentaires"}].map(d=>`
      <label class="ap-row" data-key="${d.key}"
        style="display:flex;align-items:center;gap:8px;padding:6px 10px;
          border:2px solid #cbd5e1;border-radius:8px;background:#fff;
          font-size:0.82rem;cursor:pointer;">
        <input type="checkbox" class="ap-cb" data-key="${d.key}"
          style="width:15px;height:15px;min-width:15px;min-height:15px;cursor:pointer;accent-color:#6366f1;flex-shrink:0;">
        <span>${d.label}</span>
        <span class="ap-mark" style="font-weight:700;margin-left:auto;"></span>
      </label>`).join("");this.innerHTML=`
      <div style="padding:8px;display:flex;align-items:center;gap:12px;">
        ${l}
        <div style="flex:1;display:flex;flex-direction:column;gap:6px;">${u}</div>
      </div>`,this._correct=p,this.dataset.placeMode="1",this.querySelectorAll(".ap-cb").forEach(d=>{d.addEventListener("change",()=>this._validate())})}validate(){this._validate();const t=this._correct||[];let o=!0;return this.querySelectorAll(".ap-row").forEach(e=>{const a=e.querySelector(".ap-cb"),s=t.includes(e.dataset.key);s&&!a.checked?(e.style.borderColor="#f59e0b",o=!1):!s&&a.checked&&(o=!1)}),o}_validate(){this.querySelectorAll(".ap-row").forEach(t=>{const o=t.querySelector(".ap-cb"),e=t.querySelector(".ap-mark");if(!o.checked){t.style.borderColor="#cbd5e1",t.style.background="#fff",e.textContent="";return}const a=this._correct.includes(t.dataset.key);t.style.borderColor=a?"#22c55e":"#ef4444",t.style.background=a?"#dcfce7":"#fee2e2",e.textContent=a?"😀":"😞"})}toggleSolution(t){this.querySelectorAll(".ap-row").forEach(o=>{const e=this._correct.includes(o.dataset.key),a=o.querySelector(".ap-mark");t?(o.style.borderColor=e?"#22c55e":"#cbd5e1",o.style.background=e?"#dcfce7":"#fff",a.textContent=e?"😀":""):(o.style.borderColor="#cbd5e1",o.style.background="#fff",a.textContent="")})}}customElements.define("math974-angles-proprietes",P);const C={oppose:{a:"25..154"},adjacent:{a:"20..79",bMax:130},supplementaire:{a:"20..159"}};function N(n,t={}){const o=t.modes??["oppose","adjacent","supplementaire"],e=o[Math.floor(Math.random()*o.length)],a="ap-"+Math.random().toString(36).slice(2,8);if(e==="oppose"){const s=g(t.a??C.oppose.a);return{...n,mode:e,a:s,seed:a,content:`L'angle **?** vaut [?${s}]°`}}if(e==="adjacent"){const s=Math.random()<.5?"total":"b",c=g(t.a??C.adjacent.a),l=Number(t.bMax??C.adjacent.bMax),p=t.b!=null?g(t.b):10+Math.floor(Math.random()*Math.min(50,l-c)),i=c+p,u=s==="total"?`$\\widehat{AOC} =$ [?${i}]°`:`$\\widehat{BOC} =$ [?${p}]°`;return{...n,mode:e,a:c,b:p,unknown:s,seed:a,content:u}}if(e==="supplementaire"){const s=g(t.a??C.supplementaire.a);return{...n,mode:e,a:s,seed:a,content:`L'angle **?** vaut [?${180-s}]°`}}return n}export{I as autoScale,P as default,H as defaultPosition,N as randomize};
