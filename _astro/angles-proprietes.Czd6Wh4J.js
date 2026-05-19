const L="north";function A(n){return n*Math.PI/180}function l(n,t){return[105+t*Math.cos(A(n)),82.5+t*Math.sin(A(n))]}function f(n,t){return`<line x1="${n[0].toFixed(1)}" y1="${n[1].toFixed(1)}"
    x2="${t[0].toFixed(1)}" y2="${t[1].toFixed(1)}"
    stroke="#1e293b" stroke-width="2" stroke-linecap="round"/>`}function b(n,t,o,e){const[a,s]=l(t,n),[c,r]=l(o,n),i=(o-t+360)%360>180?1:0;return`<path d="M105,${82.5} L${a.toFixed(1)},${s.toFixed(1)}
    A${n},${n} 0 ${i} 1 ${c.toFixed(1)},${r.toFixed(1)} Z"
    fill="${e}" fill-opacity="0.25" stroke="${e}" stroke-width="1" stroke-opacity="0.5"/>`}function p(n,t,o,e=11,a="#1e293b"){const[s,c]=l(n,t);return`<text x="${s.toFixed(1)}" y="${c.toFixed(1)}"
    text-anchor="middle" dominant-baseline="middle"
    font-size="${e}" font-weight="700" fill="${a}">${o}</text>`}function y(n){let t=0;for(const o of String(n))t=Math.imul(t,31)+o.charCodeAt(0)|0;return t=t>>>0||1,()=>(t=Math.imul(1664525,t)+1013904223>>>0,t/4294967296)}function _(n,t){const e=10+y(t)()*25,a=65,s=20;return`
    ${f(l(e,a),l(e+180,a))}
    ${f(l(e+n,a),l(e+n+180,a))}
    ${b(s,e,e+n,x)}
    ${b(s,e+180,e+180+n,m)}
    ${p(e+n/2,s+15,`${n}°`,11,x)}
    ${p(e+180+n/2,s+15,"?",11,m)}`}const x="#1d4ed8",F="#3b82f6",m="#ea580c",S="#64748b";function E(n,t,o,e){const s=5+y(e)()*15,c=60,r=20,u=38,i=150+s,h=i-n,d=i-(n+t),M=`${n}°`,v=o==="b"?"?":`${t}°`,O=o==="total"?"?":`${n+t}°`,C=x,k=o==="b"?m:F,g=o==="total"?m:S;let $=f([105,82.5],l(i,c))+f([105,82.5],l(h,c))+f([105,82.5],l(d,c));return $+=p(i,c+14,"A",10)+p(h,c+14,"B",10)+p(d,c+14,"C",10),$+=`<text x="${112 .toFixed(1)}" y="${(82.5+9).toFixed(1)}"
    font-size="9" font-style="italic" fill="#64748b">O</text>`,$+=b(u,d,i,g)+p((i+d)/2,u+15,O,11,g),$+=b(r,h,i,C)+p((i+h)/2,r+15,M,11,C),$+=b(r+6,d,h,k)+p((h+d)/2,r+21,v,11,k),$}function R(n,t){const e=y(t)()>.5,a=65,s=22,c=e?n:180-n,r=180+c,u=180+c/2,i=270+c/2;return`
    ${f(l(180,a),l(0,a))}
    ${f([105,82.5],l(r,a))}
    ${b(s,180,r,x)}
    ${b(s,r,360,m)}
    ${p(u,s+15,`${c}°`,11,x)}
    ${p(i,s+15,"?",11,m)}`}class B extends HTMLElement{static get observedAttributes(){return["mode","a","b","unknown","seed"]}connectedCallback(){this._render()}attributeChangedCallback(){this.isConnected&&this._render()}_render(){const t=this.getAttribute("mode")||"oppose",o=parseInt(this.getAttribute("a")||"95",10),e=parseInt(this.getAttribute("b")||"40",10),a=this.getAttribute("unknown")||"total",s=this.getAttribute("seed")||"ap";let c="";t==="oppose"?c=_(o,s):t==="adjacent"?c=E(o,e,a,s):t==="supplementaire"&&(c=R(o,s));const r=`<svg viewBox="0 0 210 165" width="210" height="165"
      style="display:block;flex-shrink:0;">${c}</svg>`,u=t==="supplementaire"?["supplementaire","adjacent"]:[t],h=[{key:"adjacent",label:"Adjacents"},{key:"oppose",label:"Opposés par le sommet"},{key:"supplementaire",label:"Supplémentaires"}].map(d=>`
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
        ${r}
        <div style="flex:1;display:flex;flex-direction:column;gap:6px;">${h}</div>
      </div>`,this._correct=u,this.dataset.placeMode="1",this.querySelectorAll(".ap-cb").forEach(d=>{d.addEventListener("change",()=>this._validate())})}validate(){this._validate();const t=this._correct||[];let o=!0;return this.querySelectorAll(".ap-row").forEach(e=>{const a=e.querySelector(".ap-cb"),s=t.includes(e.dataset.key);s&&!a.checked?(e.style.borderColor="#f59e0b",o=!1):!s&&a.checked&&(o=!1)}),o}_validate(){this.querySelectorAll(".ap-row").forEach(t=>{const o=t.querySelector(".ap-cb"),e=t.querySelector(".ap-mark");if(!o.checked){t.style.borderColor="#cbd5e1",t.style.background="#fff",e.textContent="";return}const a=this._correct.includes(t.dataset.key);t.style.borderColor=a?"#22c55e":"#ef4444",t.style.background=a?"#dcfce7":"#fee2e2",e.textContent=a?"😀":"😞"})}toggleSolution(t){this.querySelectorAll(".ap-row").forEach(o=>{const e=this._correct.includes(o.dataset.key),a=o.querySelector(".ap-mark");t?(o.style.borderColor=e?"#22c55e":"#cbd5e1",o.style.background=e?"#dcfce7":"#fff",a.textContent=e?"😀":""):(o.style.borderColor="#cbd5e1",o.style.background="#fff",a.textContent="")})}}customElements.define("math974-angles-proprietes",B);function Y(n,t={}){const o=t.modes??["oppose","adjacent","supplementaire"],e=o[Math.floor(Math.random()*o.length)],a="ap-"+Math.random().toString(36).slice(2,8);if(e==="oppose"){const s=25+Math.floor(Math.random()*130);return{...n,mode:e,a:s,seed:a,content:`L'angle **?** vaut [?${s}]°`}}if(e==="adjacent"){const s=Math.random()<.5?"total":"b",c=20+Math.floor(Math.random()*60),r=10+Math.floor(Math.random()*Math.min(50,130-c)),u=c+r,i=s==="total"?`$\\widehat{AOC} =$ [?${u}]°`:`$\\widehat{BOC} =$ [?${r}]°`;return{...n,mode:e,a:c,b:r,unknown:s,seed:a,content:i}}if(e==="supplementaire"){const s=20+Math.floor(Math.random()*140);return{...n,mode:e,a:s,seed:a,content:`L'angle **?** vaut [?${180-s}]°`}}return n}export{B as default,L as defaultPosition,Y as randomize};
