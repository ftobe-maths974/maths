const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/rapidos-visuals-integration.uALYzjaF.js","_astro/preload-helper.CLcXU_4U.js"])))=>i.map(i=>d[i]);
import{_ as dt}from"./preload-helper.CLcXU_4U.js";import{T as ht}from"./template-engine.BFEV3fMR.js";import"./js-yaml.CwjAzRNl.js";class ut extends HTMLElement{static get observedAttributes(){return["total","part1","unknown","unit","hideunit","level","color1","color2","color3","content","part1expr","totalexpr","partsexpr","parts","position","labelt","label1","label2","labels"]}connectedCallback(){this.render()}disconnectedCallback(){this._clearProjectedText()}attributeChangedCallback(){this.isConnected&&this.render()}_path(i,s,a,o,d=0,h=0,M=0,w=0){const r=[];return r.push(`M ${i+d},${s}`),r.push(`H ${i+a-h}`),h&&r.push(`Q ${i+a},${s} ${i+a},${s+h}`),r.push(`V ${s+o-M}`),M&&r.push(`Q ${i+a},${s+o} ${i+a-M},${s+o}`),r.push(`H ${i+w}`),w&&r.push(`Q ${i},${s+o} ${i},${s+o-w}`),r.push(`V ${s+d}`),d&&r.push(`Q ${i},${s} ${i+d},${s}`),r.push("Z"),r.join(" ")}_clearProjectedText(){this._textSlot&&(this._textSlot.remove(),this._textSlot=null);const i=this.closest?.(".q-card");i&&i.querySelectorAll(".sa-projected-text").forEach(s=>s.remove())}_projectText(i){const a=this.closest?.(".q-card")?.querySelector(".q-card-content");if(!a)return;const o=document.createElement("div");o.className="sa-projected-text",o.innerHTML=i,a.prepend(o),this._textSlot=o,window.MathJax&&this.isConnected&&window.MathJax.typesetPromise([o]).catch(d=>console.warn("MathJax:",d))}render(){const i=this.getAttribute("content")||"",s=this.getAttribute("unknown")||"part1",a=this.getAttribute("unit")||"",o=this.getAttribute("hideunit")!=null,d=parseInt(this.getAttribute("level")||"1"),h=this.getAttribute("position")||"south",w=new Set(["north","south","east","west"]).has(h);this._clearProjectedText();let r="",m=null;if(i){m=new ht,m.reset();const t={};for(const n of this.getAttributeNames())if(/^[a-zA-Z]$/.test(n)){const c=Number(this.getAttribute(n));Number.isFinite(c)&&(t[n]=c)}Object.keys(t).length&&m.setSeed(t);const e=m.parse(i,"web").replace(/\n/g,"<br>");w?this._projectText(e):r=e}const y=(t,e)=>{if(t==null||t==="")return e;const n=m?m.evaluate(t):parseFloat(t);return Number.isFinite(n)?n:e},H=this.getAttribute("partsexpr"),j=this.getAttribute("parts"),S=this.getAttribute("totalexpr");let l,u;if(H)l=H.split(",").map(t=>y(t.trim(),0)),u=S?y(S,0):l.reduce((t,e)=>t+e,0);else if(j)l=j.split(",").map(t=>parseFloat(t.trim())||0),u=this.getAttribute("total")!=null?parseFloat(this.getAttribute("total")):l.reduce((t,e)=>t+e,0);else{const t=this.getAttribute("part1expr")?y(this.getAttribute("part1expr"),0):parseFloat(this.getAttribute("part1")||(i?"0":"20"));u=S?y(S,0):parseFloat(this.getAttribute("total")||(i?"0":"60")),l=[t,Math.round((u-t)*1e3)/1e3]}l=l.map(t=>Math.round(t*1e3)/1e3),u=Math.round(u*1e3)/1e3;const p=l.length,V=this.getAttribute("labels"),W=V!=null?V.split(",").map(t=>t.trim()):[this.getAttribute("label1")||"",this.getAttribute("label2")||""],G=this.getAttribute("labelt")||"total";let X=s==="total",C=-1;const L=/^part(\d+)$/.exec(s);L&&(C=parseInt(L[1])-1);const A=Math.max(290,86+p*66),N=12,z=A-2*N,F=48,k=5,P=N,Y=P+z,x=24,$=x+F+9,q=!!a&&!o,J=$+48,K=l.reduce((t,e)=>t+e,0)||1,tt=.62/p;let T=l.map(t=>Math.max(tt,(t>0?t:0)/K));const et=T.reduce((t,e)=>t+e,0);T=T.map(t=>t/et);const b=T.map(t=>Math.round(z*t));b[p-1]=z-b.slice(0,-1).reduce((t,e)=>t+e,0);const g=[P];for(let t=0;t<p;t++)g.push(g[t]+b[t]);const it=this.getAttribute("color2")||"#fcd496",st=this.getAttribute("color3")||"#86efb5",Q=[it,st,"#a5d8ff","#f6c6dd","#d9c8f2","#bfe3c4"],I=d>=2?"":X?"?":String(u),nt=t=>d>=2?"":t===C?"?":String(l[t]),E=x+F/2,ot=26,rt=(t,e,n)=>{if(!t)return"";const c=t==="?";return`<text x="${e.toFixed(1)}" y="${n.toFixed(1)}"
        font-size="${c?22:16}" font-family="inherit" font-weight="800"
        fill="${c?"#6d28d9":"#1e293b"}"
        text-anchor="middle" dominant-baseline="middle">${t}</text>`},at=(t,e)=>{if(!t)return"";const n=t==="?",c=q?E-6:E;let f=`<text x="${e.toFixed(1)}" y="${c.toFixed(1)}"
        font-size="${n?21:16}" font-family="inherit" font-weight="800"
        fill="${n?"#6d28d9":"#1e293b"}"
        text-anchor="middle" dominant-baseline="middle">${t}</text>`;return q&&(f+=`<text x="${e.toFixed(1)}" y="${(E+13).toFixed(1)}"
        font-size="10" font-family="inherit" font-weight="600"
        fill="#475569" text-anchor="middle" dominant-baseline="middle">${a}</text>`),f},O=(t,e,n)=>t?`<text x="${e.toFixed(1)}" y="${n.toFixed(1)}"
        font-size="10.5" font-family="inherit" font-weight="700" font-style="italic"
        fill="#64748b" text-anchor="middle" dominant-baseline="middle">${t}</text>`:"";this.style.display="block";let Z="",B="",D="",R="";for(let t=0;t<p;t++){const e=t===0?k:0,n=t===0?k:0,c=t===p-1?k:0,f=t===p-1?k:0;Z+=`<path d="${this._path(g[t],x,b[t],F,e,c,f,n)}"
        fill="${Q[t%Q.length]}"/>`,t>0&&(B+=`<line x1="${g[t].toFixed(1)}" y1="${x}"
        x2="${g[t].toFixed(1)}" y2="${x+F}" stroke="white" stroke-width="2.5"/>`);const _=g[t]+b[t]/2;b[t]>=ot&&(D+=at(nt(t),_)),R+=O(W[t]||"",_,x-10)}const lt=`<path d="M ${P} ${$-6} V ${$} H ${Y} V ${$-6}"
        fill="none" stroke="#94a3b8" stroke-width="2"/>`,ct=I?rt(I,A/2,$+23):"",U=`
      <svg viewBox="0 0 ${A} ${J}" xmlns="http://www.w3.org/2000/svg"
           width="${A}" height="${J}" style="display:block;max-width:100%;height:auto">
        ${R}
        ${Z}
        ${B}
        ${D}
        ${lt}
        ${ct}
        ${O(G,A/2,$+40)}
      </svg>`;if(r){const t=h==="east"||h==="west",e=t?h==="west"?"row-reverse":"row":h==="north"?"column-reverse":"column",n=t?"center":"flex-start",c=t?"flex:1;min-width:0;":"";this.innerHTML=`
        <div style="display:flex;flex-direction:${e};gap:10px;align-items:${n};width:100%;">
          <div class="sa-text" style="
            ${c}
            font-family:inherit;font-size:var(--q-text-size,1.5rem);font-weight:400;color:#334155;
            line-height:1.5;">
            ${r}
          </div>
          <div style="flex-shrink:0;">
            ${U}
          </div>
        </div>`;const f=this.querySelector(".sa-text");f&&window.MathJax&&this.isConnected&&window.MathJax.typesetPromise([f]).catch(_=>console.warn("MathJax:",_))}else this.innerHTML=U}}customElements.define("math974-schema-additif",ut);const xt="east";async function $t(v,i){if(v.content)return{...v};const{randomize:s}=await dt(async()=>{const{randomize:a}=await import("./rapidos-visuals-integration.uALYzjaF.js").then(o=>o.p);return{randomize:a}},__vite__mapDeps([0,1]));return s(v,{totalMin:20,totalMax:99,totalStep:10,...i||{}})}const bt=!0;export{ut as default,xt as defaultPosition,$t as randomize,bt as zoomScale};
