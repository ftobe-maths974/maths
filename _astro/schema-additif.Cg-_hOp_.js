const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/fullscreen-viewer.BVpSYDQJ.js","_astro/editor.CJZspgfY.js"])))=>i.map(i=>d[i]);
import{_ as dt}from"./editor.CJZspgfY.js";import{T as ht}from"./fullscreen-viewer.BVpSYDQJ.js";class ut extends HTMLElement{static get observedAttributes(){return["total","part1","unknown","unit","hideunit","level","color1","color2","color3","content","part1expr","totalexpr","partsexpr","parts","position","labelt","label1","label2","labels"]}connectedCallback(){this.render()}disconnectedCallback(){this._clearProjectedText()}attributeChangedCallback(){this.isConnected&&this.render()}_path(e,n,r,s,c=0,d=0,M=0,g=0){const o=[];return o.push(`M ${e+c},${n}`),o.push(`H ${e+r-d}`),d&&o.push(`Q ${e+r},${n} ${e+r},${n+d}`),o.push(`V ${n+s-M}`),M&&o.push(`Q ${e+r},${n+s} ${e+r-M},${n+s}`),o.push(`H ${e+g}`),g&&o.push(`Q ${e},${n+s} ${e},${n+s-g}`),o.push(`V ${n+c}`),c&&o.push(`Q ${e},${n} ${e+c},${n}`),o.push("Z"),o.join(" ")}_clearProjectedText(){this._textSlot&&(this._textSlot.remove(),this._textSlot=null);const e=this.closest?.(".q-card");e&&e.querySelectorAll(".sa-projected-text").forEach(n=>n.remove())}_projectText(e){const r=this.closest?.(".q-card")?.querySelector(".q-card-content");if(!r)return;const s=document.createElement("div");s.className="sa-projected-text",s.innerHTML=e,r.prepend(s),this._textSlot=s,window.MathJax&&this.isConnected&&window.MathJax.typesetPromise([s]).catch(c=>console.warn("MathJax:",c))}render(){const e=this.getAttribute("content")||"",n=this.getAttribute("unknown")||"part1",r=this.getAttribute("unit")||"",s=this.getAttribute("hideunit")!=null,c=parseInt(this.getAttribute("level")||"1"),d=this.getAttribute("position")||"south",g=new Set(["north","south","east","west"]).has(d);this._clearProjectedText();let o="",w=null;if(e){w=new ht,w.reset();const t=w.parse(e,"web").replace(/\n/g,"<br>");g?this._projectText(t):o=t}const y=(t,i)=>{if(t==null||t==="")return i;const a=w?w.evaluate(t):parseFloat(t);return Number.isFinite(a)?a:i},H=this.getAttribute("partsexpr"),V=this.getAttribute("parts"),F=this.getAttribute("totalexpr");let l,u;if(H)l=H.split(",").map(t=>y(t.trim(),0)),u=F?y(F,0):l.reduce((t,i)=>t+i,0);else if(V)l=V.split(",").map(t=>parseFloat(t.trim())||0),u=this.getAttribute("total")!=null?parseFloat(this.getAttribute("total")):l.reduce((t,i)=>t+i,0);else{const t=this.getAttribute("part1expr")?y(this.getAttribute("part1expr"),0):parseFloat(this.getAttribute("part1")||(e?"0":"20"));u=F?y(F,0):parseFloat(this.getAttribute("total")||(e?"0":"60")),l=[t,Math.round((u-t)*1e3)/1e3]}l=l.map(t=>Math.round(t*1e3)/1e3),u=Math.round(u*1e3)/1e3;const p=l.length,j=this.getAttribute("labels"),Z=j!=null?j.split(",").map(t=>t.trim()):[this.getAttribute("label1")||"",this.getAttribute("label2")||""],G=this.getAttribute("labelt")||"total";let X=n==="total",C=-1;const L=/^part(\d+)$/.exec(n);L&&(C=parseInt(L[1])-1);const A=Math.max(290,86+p*66),q=12,E=A-2*q,S=48,k=5,_=q,Y=_+E,m=24,x=m+S+9,J=!!r&&!s,Q=x+48,K=l.reduce((t,i)=>t+i,0)||1,tt=.62/p;let T=l.map(t=>Math.max(tt,(t>0?t:0)/K));const et=T.reduce((t,i)=>t+i,0);T=T.map(t=>t/et);const $=T.map(t=>Math.round(E*t));$[p-1]=E-$.slice(0,-1).reduce((t,i)=>t+i,0);const b=[_];for(let t=0;t<p;t++)b.push(b[t]+$[t]);const it=this.getAttribute("color2")||"#fcd496",nt=this.getAttribute("color3")||"#86efb5",I=[it,nt,"#a5d8ff","#f6c6dd","#d9c8f2","#bfe3c4"],N=c>=2?"":X?"?":String(u),st=t=>c>=2?"":t===C?"?":String(l[t]),z=m+S/2,ot=26,rt=(t,i,a)=>{if(!t)return"";const h=t==="?";return`<text x="${i.toFixed(1)}" y="${a.toFixed(1)}"
        font-size="${h?22:16}" font-family="inherit" font-weight="800"
        fill="${h?"#6d28d9":"#1e293b"}"
        text-anchor="middle" dominant-baseline="middle">${t}</text>`},at=(t,i)=>{if(!t)return"";const a=t==="?",h=J?z-6:z;let f=`<text x="${i.toFixed(1)}" y="${h.toFixed(1)}"
        font-size="${a?21:16}" font-family="inherit" font-weight="800"
        fill="${a?"#6d28d9":"#1e293b"}"
        text-anchor="middle" dominant-baseline="middle">${t}</text>`;return J&&(f+=`<text x="${i.toFixed(1)}" y="${(z+13).toFixed(1)}"
        font-size="10" font-family="inherit" font-weight="600"
        fill="#475569" text-anchor="middle" dominant-baseline="middle">${r}</text>`),f},B=(t,i,a)=>t?`<text x="${i.toFixed(1)}" y="${a.toFixed(1)}"
        font-size="10.5" font-family="inherit" font-weight="700" font-style="italic"
        fill="#64748b" text-anchor="middle" dominant-baseline="middle">${t}</text>`:"";this.style.display="block";let D="",O="",R="",U="";for(let t=0;t<p;t++){const i=t===0?k:0,a=t===0?k:0,h=t===p-1?k:0,f=t===p-1?k:0;D+=`<path d="${this._path(b[t],m,$[t],S,i,h,f,a)}"
        fill="${I[t%I.length]}"/>`,t>0&&(O+=`<line x1="${b[t].toFixed(1)}" y1="${m}"
        x2="${b[t].toFixed(1)}" y2="${m+S}" stroke="white" stroke-width="2.5"/>`);const P=b[t]+$[t]/2;$[t]>=ot&&(R+=at(st(t),P)),U+=B(Z[t]||"",P,m-10)}const lt=`<path d="M ${_} ${x-6} V ${x} H ${Y} V ${x-6}"
        fill="none" stroke="#94a3b8" stroke-width="2"/>`,ct=N?rt(N,A/2,x+23):"",W=`
      <svg viewBox="0 0 ${A} ${Q}" xmlns="http://www.w3.org/2000/svg"
           width="${A}" height="${Q}" style="display:block;max-width:100%;height:auto">
        ${U}
        ${D}
        ${O}
        ${R}
        ${lt}
        ${ct}
        ${B(G,A/2,x+40)}
      </svg>`;if(o){const t=d==="east"||d==="west",i=t?d==="west"?"row-reverse":"row":d==="north"?"column-reverse":"column",a=t?"center":"flex-start",h=t?"flex:1;min-width:0;":"";this.innerHTML=`
        <div style="display:flex;flex-direction:${i};gap:10px;align-items:${a};width:100%;">
          <div class="sa-text" style="
            ${h}
            font-family:inherit;font-size:var(--q-text-size,1.5rem);font-weight:400;color:#334155;
            line-height:1.5;">
            ${o}
          </div>
          <div style="flex-shrink:0;">
            ${W}
          </div>
        </div>`;const f=this.querySelector(".sa-text");f&&window.MathJax&&this.isConnected&&window.MathJax.typesetPromise([f]).catch(P=>console.warn("MathJax:",P))}else this.innerHTML=W}}customElements.define("math974-schema-additif",ut);const mt="east";async function xt(v,e){if(v.content)return{...v};const{randomize:n}=await dt(async()=>{const{randomize:r}=await import("./fullscreen-viewer.BVpSYDQJ.js").then(s=>s.f);return{randomize:r}},__vite__mapDeps([0,1]));return n(v,{totalMin:20,totalMax:99,totalStep:10,...e||{}})}export{ut as default,mt as defaultPosition,xt as randomize};
