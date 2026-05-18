class O extends HTMLElement{static get observedAttributes(){return["pattern","etapes","show_blank","color","cellsize","show_step"]}connectedCallback(){this.render()}attributeChangedCallback(){this.isConnected&&this.render()}_gridSize(r,t){switch(r){case"losange":return{cols:2*t-1,rows:2*t-1};case"triangle":return{cols:t,rows:t};case"carre":return{cols:t,rows:t};case"cadre":return{cols:t,rows:t};case"croix":return{cols:2*t-1,rows:2*t-1};case"L":return{cols:t,rows:t};case"baton":return{cols:t,rows:1};case"colonnes":return{cols:t,rows:t};case"T":return{cols:2*t-1,rows:t};case"peigne":return{cols:2*t-1,rows:2};default:return{cols:t,rows:t}}}_isFilled(r,t,e,s){switch(r){case"losange":{const o=t-1,n=t-1;return Math.abs(e-n)+Math.abs(s-o)<=t-1}case"triangle":return s<=e;case"carre":return!0;case"cadre":return e===0||e===t-1||s===0||s===t-1;case"croix":{const o=t-1;return e===o||s===o}case"L":return e===t-1||s===0;case"baton":return!0;case"colonnes":return e>=t-1-s;case"T":return e===0||s===t-1;case"peigne":return e===1||e===0&&s%2===0;default:return!0}}_count(r,t){switch(r){case"baton":return t;case"L":return 2*t-1;case"T":return 3*t-2;case"peigne":return 3*t-1;case"croix":return 4*t-3;case"cadre":return t===1?1:4*(t-1);case"triangle":return t*(t+1)/2;case"colonnes":return t*(t+1)/2;case"carre":return t*t;case"losange":return 2*t*t-2*t+1;default:{const{cols:e,rows:s}=this._gridSize(r,t);let o=0;for(let n=0;n<s;n++)for(let a=0;a<e;a++)this._isFilled(r,t,n,a)&&o++;return o}}}_renderStage({n:r,cols:t,rows:e,w:s,h:o,blank:n,distant:a,color:f,cellsize:d,gap:u,x:p,yBase:$}){let l="";if(n||a)l+=`<rect x="${p}" y="${$}" width="${s}" height="${o}"
        fill="#f9fafb" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="5,3" rx="3"/>`,l+=`<text x="${p+s/2}" y="${$+o/2+5}"
        text-anchor="middle" font-size="${Math.min(18,o*.6)}" fill="#d1d5db" font-weight="bold">?</text>`;else{l+=`<rect x="${p-1}" y="${$-1}" width="${s+2}" height="${o+2}"
        fill="#f0f9ff" rx="2"/>`;for(let g=0;g<e;g++)for(let b=0;b<t;b++){const m=p+b*(d+u),L=$+g*(d+u),k=this._isFilled(this._currentPattern,r,g,b);l+=`<rect x="${m}" y="${L}" width="${d}" height="${d}"
            fill="${k?f:"none"}"
            stroke="${k?"white":"#e5e7eb"}"
            stroke-width="${k?"0.5":"0.8"}"
            rx="1"/>`}}return l}render(){const r=this.getAttribute("pattern")||"losange",t=Math.max(1,parseInt(this.getAttribute("etapes")||"3")),e=this.getAttribute("show_blank")==="true",s=this.getAttribute("color")||"#60a5fa",o=Math.max(6,parseInt(this.getAttribute("cellsize")||"14")),n=parseInt(this.getAttribute("show_step")||"0");this._currentPattern=r;const a=2,f=20,d=8,u=6,p=14,$=4,l=[];for(let i=1;i<=t+(e?1:0);i++){const{cols:w,rows:h}=this._gridSize(r,i),C=w*o+Math.max(0,w-1)*a,T=h*o+Math.max(0,h-1)*a;l.push({n:i,cols:w,rows:h,w:C,h:T,blank:e&&i===t+1})}let g=null;if(n>t){const i=l[l.length-1];g={n,w:i.w,h:i.h,distant:!0}}const b=g?[...l,g]:l,m=Math.max(...b.map(i=>i.h)),L=g?28:0,k=b.reduce((i,w,h)=>i+w.w+(h>0?f:0),0)+2*d+L,F=u+m+$+p+4;let c="",x=d;b.forEach((i,w)=>{const{n:h,cols:C,rows:T,w:y,h:A,blank:R,distant:E}=i,v=u+(m-A),q=u+m+$+p-2,_=this._count(r,h),H=!E&&w===l.length-1;if(E&&g){const M=x-f/2-10,S=u+m/2;c+=`<text x="${M}" y="${S+4}" text-anchor="middle"
          font-size="14" fill="#9ca3af" font-family="sans-serif">…</text>`}if(c+=`<g class="sf-stage" data-count="${_}" data-step="${h}"
        style="cursor:default" pointer-events="all">`,R||E)c+=`<rect x="${x}" y="${v}" width="${y}" height="${A}"
          fill="#f9fafb" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="5,3" rx="4"/>`,c+=`<text x="${x+y/2}" y="${v+A/2+6}"
          text-anchor="middle" font-size="${Math.max(12,Math.min(20,A*.5))}"
          fill="#d1d5db" font-weight="bold">?</text>`,c+=`<title>${_} case${_>1?"s":""} à l'étape ${h}</title>`;else{c+=`<rect x="${x-1}" y="${v-1}" width="${y+2}" height="${A+2}"
          fill="${H?"#eff6ff":"#f0f9ff"}" rx="2"
          stroke="${H?"#bfdbfe":"none"}" stroke-width="${H?1:0}"/>`;for(let M=0;M<T;M++)for(let S=0;S<C;S++){const B=x+S*(o+a),I=v+M*(o+a),P=this._isFilled(r,h,M,S);c+=`<rect x="${B}" y="${I}" width="${o}" height="${o}"
              fill="${P?s:"none"}"
              stroke="${P?"white":"#e5e7eb"}"
              stroke-width="${P?"0.5":"0.8"}"
              rx="1"/>`}c+=`<title>${_} case${_>1?"s":""} à l'étape ${h}</title>`,c+=`<rect class="sf-badge-bg" x="${x+y-18}" y="${v}" width="18" height="14"
          rx="3" fill="${s}" opacity="0"/>`,c+=`<text class="sf-badge-txt" x="${x+y-9}" y="${v+10}"
          text-anchor="middle" font-size="9" font-weight="700" fill="white" opacity="0">${_}</text>`}c+="</g>",c+=`<text x="${x+y/2}" y="${q}"
        text-anchor="middle" font-size="9" fill="#6b7280" font-family="sans-serif">Étape ${h}</text>`,x+=y+f}),this.style.display="block",this.style.position="relative",this.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 ${k} ${F}"
        width="${k}" height="${F}"
        style="display:block;max-width:100%;overflow:visible">
        ${c}
      </svg>
      <div class="sf-tip" style="
        position:absolute;top:0;left:0;
        background:#1e293b;color:white;
        padding:3px 8px;border-radius:6px;
        font-size:11px;font-weight:700;
        pointer-events:none;opacity:0;
        transition:opacity 0.12s;
        white-space:nowrap;z-index:10;">
      </div>`,this._bindHover()}_bindHover(){const r=this.querySelector(".sf-tip");this.querySelectorAll(".sf-stage").forEach(e=>{const s=e.dataset.count,o=e.dataset.step,n=`${s} case${s>1?"s":""} à l'étape ${o}`,a=e.querySelector(".sf-badge-bg"),f=e.querySelector(".sf-badge-txt");e.addEventListener("mouseenter",()=>{r.textContent=n,r.style.opacity="1";const d=e.getBoundingClientRect(),u=this.getBoundingClientRect(),p=d.left-u.left+d.width/2,$=d.top-u.top-26;r.style.transform=`translate(${p}px, ${$}px) translateX(-50%)`,a&&a.setAttribute("opacity","0.85"),f&&f.setAttribute("opacity","1")}),e.addEventListener("mouseleave",()=>{r.style.opacity="0",a&&a.setAttribute("opacity","0"),f&&f.setAttribute("opacity","0")})})}}customElements.get("math974-suite-figures")||customElements.define("math974-suite-figures",O);const X="north";function G(z,r){const t={losange:"#60a5fa",triangle:"#34d399",carre:"#a78bfa",colonnes:"#fb923c",croix:"#f43f5e",L:"#facc15",baton:"#2dd4bf",T:"#e879f9",peigne:"#4ade80",cadre:"#f97316"};if(z.pattern&&!r?.patternPool?.length)return z;const e=r?.patternPool?.length>0?r.patternPool:Object.keys(t),s=e[Math.floor(Math.random()*e.length)];return{...z,pattern:s,color:t[s]||"#60a5fa"}}export{X as defaultPosition,G as randomize};
