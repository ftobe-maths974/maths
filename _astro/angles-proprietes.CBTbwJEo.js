const L="north";function A(e){return e*Math.PI/180}function l(e,t){return[105+t*Math.cos(A(e)),82.5+t*Math.sin(A(e))]}function h(e,t){return`<line x1="${e[0].toFixed(1)}" y1="${e[1].toFixed(1)}"
    x2="${t[0].toFixed(1)}" y2="${t[1].toFixed(1)}"
    stroke="#1e293b" stroke-width="2" stroke-linecap="round"/>`}function b(e,t,o,n){const[a,s]=l(t,e),[r,c]=l(o,e),i=(o-t+360)%360>180?1:0;return`<path d="M105,${82.5} L${a.toFixed(1)},${s.toFixed(1)}
    A${e},${e} 0 ${i} 1 ${r.toFixed(1)},${c.toFixed(1)} Z"
    fill="${n}" fill-opacity="0.25" stroke="${n}" stroke-width="1" stroke-opacity="0.5"/>`}function p(e,t,o,n=11,a="#1e293b"){const[s,r]=l(e,t);return`<text x="${s.toFixed(1)}" y="${r.toFixed(1)}"
    text-anchor="middle" dominant-baseline="middle"
    font-size="${n}" font-weight="700" fill="${a}">${o}</text>`}function y(e){let t=0;for(const o of String(e))t=Math.imul(t,31)+o.charCodeAt(0)|0;return t=t>>>0||1,()=>(t=Math.imul(1664525,t)+1013904223>>>0,t/4294967296)}function F(e,t){const n=10+y(t)()*25,a=65,s=20;return`
    ${h(l(n,a),l(n+180,a))}
    ${h(l(n+e,a),l(n+e+180,a))}
    ${b(s,n,n+e,x)}
    ${b(s,n+180,n+180+e,m)}
    ${p(n+e/2,s+15,`${e}°`,11,x)}
    ${p(n+180+e/2,s+15,"?",11,m)}`}const x="#1d4ed8",R="#3b82f6",m="#ea580c",_="#64748b";function E(e,t,o,n){const s=5+y(n)()*15,r=60,c=20,u=38,i=150+s,f=i-e,d=i-(e+t),M=`${e}°`,v=o==="b"?"?":`${t}°`,O=o==="total"?"?":`${e+t}°`,C=x,k=o==="b"?m:R,g=o==="total"?m:_;let $=h([105,82.5],l(i,r))+h([105,82.5],l(f,r))+h([105,82.5],l(d,r));return $+=p(i,r+14,"A",10)+p(f,r+14,"B",10)+p(d,r+14,"C",10),$+=`<text x="${112 .toFixed(1)}" y="${(82.5+9).toFixed(1)}"
    font-size="9" font-style="italic" fill="#64748b">O</text>`,$+=b(u,d,i,g)+p((i+d)/2,u+15,O,11,g),$+=b(c,f,i,C)+p((i+f)/2,c+15,M,11,C),$+=b(c+6,d,f,k)+p((f+d)/2,c+21,v,11,k),$}function S(e,t){const n=y(t)()>.5,a=65,s=22,r=n?e:180-e,c=180+r,u=180+r/2,i=270+r/2;return`
    ${h(l(180,a),l(0,a))}
    ${h([105,82.5],l(c,a))}
    ${b(s,180,c,x)}
    ${b(s,c,360,m)}
    ${p(u,s+15,`${r}°`,11,x)}
    ${p(i,s+15,"?",11,m)}`}class B extends HTMLElement{static get observedAttributes(){return["mode","a","b","unknown","seed"]}connectedCallback(){this._render()}attributeChangedCallback(){this.isConnected&&this._render()}_render(){const t=this.getAttribute("mode")||"oppose",o=parseInt(this.getAttribute("a")||"95",10),n=parseInt(this.getAttribute("b")||"40",10),a=this.getAttribute("unknown")||"total",s=this.getAttribute("seed")||"ap";let r="";t==="oppose"?r=F(o,s):t==="adjacent"?r=E(o,n,a,s):t==="supplementaire"&&(r=S(o,s));const c=`<svg viewBox="0 0 210 165" width="210" height="165"
      style="display:block;flex-shrink:0;">${r}</svg>`,u=t==="supplementaire"?["supplementaire","adjacent"]:[t],f=[{key:"adjacent",label:"Adjacents"},{key:"oppose",label:"Opposés par le sommet"},{key:"supplementaire",label:"Supplémentaires"}].map(d=>`
      <label class="ap-row" data-key="${d.key}"
        style="display:flex;align-items:center;gap:8px;padding:6px 10px;
          border:2px solid #cbd5e1;border-radius:8px;background:#fff;
          font-size:0.82rem;cursor:pointer;">
        <input type="checkbox" class="ap-cb" data-key="${d.key}"
          style="width:15px;height:15px;cursor:pointer;accent-color:#6366f1;flex-shrink:0;">
        <span>${d.label}</span>
        <span class="ap-mark" style="font-weight:700;margin-left:auto;"></span>
      </label>`).join("");this.innerHTML=`
      <div style="padding:8px;display:flex;align-items:center;gap:12px;">
        ${c}
        <div style="flex:1;display:flex;flex-direction:column;gap:6px;">${f}</div>
      </div>`,this._correct=u,this.querySelectorAll(".ap-cb").forEach(d=>{d.addEventListener("change",()=>this._validate())})}_validate(){this.querySelectorAll(".ap-row").forEach(t=>{const o=t.querySelector(".ap-cb"),n=t.querySelector(".ap-mark");if(!o.checked){t.style.borderColor="#cbd5e1",t.style.background="#fff",n.textContent="";return}const a=this._correct.includes(t.dataset.key);t.style.borderColor=a?"#22c55e":"#ef4444",t.style.background=a?"#dcfce7":"#fee2e2",n.textContent=a?"✓":"✗"})}toggleSolution(t){this.querySelectorAll(".ap-row").forEach(o=>{const n=this._correct.includes(o.dataset.key),a=o.querySelector(".ap-mark");t?(o.style.borderColor=n?"#22c55e":"#cbd5e1",o.style.background=n?"#dcfce7":"#fff",a.textContent=n?"✓":""):(o.style.borderColor="#cbd5e1",o.style.background="#fff",a.textContent="")})}}customElements.define("math974-angles-proprietes",B);function Y(e,t={}){const o=t.modes??["oppose","adjacent","supplementaire"],n=o[Math.floor(Math.random()*o.length)],a="ap-"+Math.random().toString(36).slice(2,8);if(n==="oppose"){const s=25+Math.floor(Math.random()*130);return{...e,mode:n,a:s,seed:a,content:`L'angle **?** vaut [?${s}]°`}}if(n==="adjacent"){const s=Math.random()<.5?"total":"b",r=20+Math.floor(Math.random()*60),c=10+Math.floor(Math.random()*Math.min(50,130-r)),u=r+c,i=s==="total"?`$\\widehat{AOC} =$ [?${u}]°`:`$\\widehat{BOC} =$ [?${c}]°`;return{...e,mode:n,a:r,b:c,unknown:s,seed:a,content:i}}if(n==="supplementaire"){const s=20+Math.floor(Math.random()*140);return{...e,mode:n,a:s,seed:a,content:`L'angle **?** vaut [?${180-s}]°`}}return e}export{B as default,L as defaultPosition,Y as randomize};
