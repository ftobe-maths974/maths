const x={control:"#FFAB19",variables:"#FF8C1A",looks:"#9966FF",sensing:"#5CB1D6",operators:"#59C059"};function B(o){if(/=\s*réponse\s*$/.test(o))return{type:"set_input",var:o.replace(/\s*=\s*réponse\s*$/,"").trim()};if(/^dire\s/.test(o))return{type:"dire",var:o.slice(5).trim()};const e=o.match(/^(\S+)\s*=\s*(\S+)\s*([+\-×*\/÷])\s*(\d+(?:[.,]\d+)?)$/);return e?{type:"op",var:e[1],src:e[2],op:e[3],val:parseFloat(e[4].replace(",","."))}:{type:"unknown",raw:o}}function A(o){const e=o.split(`
`).filter(s=>s.trim()),n=[];let t=0;for(;t<e.length;){const s=e[t].trim(),p=s.match(/^répéter\s+(\d+)\s*:/);if(p){const r=parseInt(p[1]),h=[];for(t++;t<e.length&&/^\s{2}/.test(e[t]);)h.push(B(e[t++].trim()));n.push({type:"loop",count:r,body:h})}else n.push(B(s)),t++}return n}function I(o,e,n){if(o.type==="set_input"){e[o.var]=n;return}if(o.type==="op"){const t=e[o.src]??0,s=o.val,p=o.op;p==="+"?e[o.var]=t+s:p==="-"?e[o.var]=t-s:p==="×"||p==="*"?e[o.var]=t*s:(p==="÷"||p==="/")&&(e[o.var]=t/s);return}if(o.type==="loop")for(let t=0;t<o.count;t++)for(const s of o.body)I(s,e,n)}function L(o,e){const n={};for(const t of o)I(t,n,e);return n}function E(o,e){const n=A(o),t=L(n,e),s=n.find(p=>p.type==="dire")?.var;return s!==void 0?Math.round(t[s]):null}function P(o){const e=A(o);if(e.some(r=>r.type==="loop"))return null;const n={};let t=null;for(const r of e)if(r.type==="set_input")n[r.var]={a:1,b:0};else if(r.type==="op"){const h=n[r.src];if(!h)continue;const{a:g,b}=h,i=r.val;let l,c;if(r.op==="+")l=g,c=b+i;else if(r.op==="-")l=g,c=b-i;else if(r.op==="×"||r.op==="*")l=g*i,c=b*i;else if(r.op==="÷"||r.op==="/")l=g/i,c=b/i;else continue;n[r.var]={a:l,b:c}}else r.type==="dire"&&(t=r.var);if(!t||!n[t])return null;const{a:s,b:p}=n[t];return s===0?null:{litA:s,litB:p}}function T(o){const e=o.match(/[a-zA-Z]/)?.[0]||"x",n=t=>t.replace(/×/g,"*").replace(/÷/g,"/");try{const t=Function(`"use strict"; var ${e}=0; return (${n(o)});`)();return{a:Function(`"use strict"; var ${e}=1; return (${n(o)});`)()-t,b:t}}catch{return{a:1,b:0}}}class H extends HTMLElement{static get observedAttributes(){return["programme","input","height"]}connectedCallback(){this.render()}attributeChangedCallback(){this.isConnected&&this.render()}_opStr(e){return e==="*"||e==="×"?"×":e==="/"||e==="÷"?"÷":e==="-"?"−":"+"}_el(e,n,t){const s=document.createElement(e);return n&&(s.className=n),t!==void 0&&(s.innerHTML=t),s}_varPill(e){return`<span class="sp-vref">${e}</span>`}_numPill(e){return`<span class="sp-num">${e}</span>`}_renderInstr(e,n){if(e.type==="set_input"){const t=document.createDocumentFragment();return t.appendChild(this._el("div","sp-block sp-ask","Choisir un nombre")),t.appendChild(this._el("div","sp-block sp-set",`mettre ${this._varPill(e.var)} à <span class="sp-reply">réponse</span>`)),t}if(e.type==="op"){const t=this._el("div","sp-block sp-op"),s='<span class="sp-expr">'+this._varPill(e.src)+`<span class="sp-opc">${this._opStr(e.op)}</span>`+this._numPill(e.val)+"</span>";return t.innerHTML=`mettre ${this._varPill(e.var)} à ${s}`,t}if(e.type==="loop"){const t=this._el("div","sp-loop"),s=this._el("div","sp-loop-top");s.innerHTML=`répéter ${this._numPill(e.count)} fois`,t.appendChild(s);const p=this._el("div","sp-loop-mid"),r=this._el("div","sp-loop-body");for(const h of e.body)r.appendChild(this._renderInstr(h,n));return p.appendChild(this._el("div","sp-loop-bar")),p.appendChild(r),t.appendChild(p),t.appendChild(this._el("div","sp-loop-bot")),t}if(e.type==="dire"){const t=this._el("div","sp-block sp-dire"),s=n[e.var],p=s!==void 0?"sp-vref sp-dire-v sp-tip":"sp-vref sp-dire-v",r=s!==void 0?` data-tip="${Number.isInteger(s)?s:Math.round(s*1e3)/1e3}"`:"";return t.innerHTML=`dire <span class="${p}"${r}>${e.var}</span>`,t}return this._el("div","sp-block sp-unknown",e.raw||"?")}_ensureStyles(){if(document.getElementById("math974-scratch-css"))return;const e=document.createElement("style");e.id="math974-scratch-css",e.textContent=`
math974-programme-scratch{display:block}
.sp-prog{display:inline-flex;flex-direction:column;gap:3px;
  font:bold 13px/1.5 'Segoe UI',Arial,sans-serif;padding:6px;transform-origin:top left}
.sp-block{display:flex;align-items:center;gap:6px;
  padding:6px 12px;border-radius:5px;color:#fff;white-space:nowrap}

.sp-ask  {background:${x.sensing};color:#fff}
.sp-set  {background:${x.variables}}
.sp-op   {background:${x.variables}}
.sp-dire {background:${x.looks}}
.sp-unknown{background:#94a3b8}

.sp-vref{background:#CC6600;border-radius:10px;padding:1px 8px;color:#fff}
.sp-reply{background:${x.sensing};border-radius:10px;padding:1px 9px;color:#fff}

.sp-expr{display:inline-flex;align-items:center;gap:4px;
  background:${x.operators};border-radius:10px;padding:2px 8px}
.sp-opc{font-weight:bold;color:#fff}
.sp-num{background:#fff;color:#1e293b;border-radius:10px;padding:1px 7px}

.sp-dire-v{background:#CC6600;border-radius:10px;padding:1px 8px;color:#fff}

.sp-loop{display:flex;flex-direction:column}
.sp-loop-top{display:flex;align-items:center;gap:6px;padding:6px 12px;
  border-radius:5px 5px 0 0;background:${x.control};color:#1c1c1c;
  white-space:nowrap;font:bold 13px/1.5 'Segoe UI',Arial,sans-serif}
.sp-loop-top .sp-num{color:#1e293b}
.sp-loop-mid{display:flex;background:${x.control};padding:3px 6px 3px 0}
.sp-loop-bar{width:20px;flex-shrink:0}
.sp-loop-body{flex:1;display:flex;flex-direction:column;gap:3px;padding:3px;min-height:12px}
.sp-loop-bot{height:12px;background:${x.control};border-radius:0 0 5px 5px}

.sp-tip{position:relative;cursor:help}
.sp-tip::after{content:attr(data-tip);position:absolute;bottom:calc(100% + 5px);
  left:50%;transform:translateX(-50%);background:#1e293b;color:#fff;
  border-radius:4px;padding:2px 8px;font-size:11px;white-space:nowrap;
  pointer-events:none;opacity:0;transition:opacity .15s;z-index:20}
.sp-tip:hover::after{opacity:1}
    `.trim(),document.head.appendChild(e)}_scaleToFit(){const e=this.querySelector(".sp-prog");e&&(e.style.transform=""),this.style.height="",this.style.width="",this.style.overflow=""}render(){this.innerHTML="",this._ensureStyles();const e=this.getAttribute("programme")||"",n=this.getAttribute("input"),t=parseFloat(n??"0"),s=A(e),p=n!==null?L(s,t):{},r=this._el("div","sp-prog");for(const h of s)r.appendChild(this._renderInstr(h,p));this.appendChild(r),requestAnimationFrame(()=>this._scaleToFit())}}customElements.define("math974-programme-scratch",H);const z="east",N=!0;function V(o,e){const n={ops:null,inputRange:null,opsRange:[1,3],loop:null,iterRange:[2,5],valRange:[1,10],literal:!1,...e||{}},t=(i,l)=>i+Math.floor(Math.random()*(l-i+1)),s=i=>i[Math.floor(Math.random()*i.length)],p=o.literal,r=!!n.literal,h=(i,l,c,k)=>{const m=E(i,l);let d=`Qu'affiche le programme si on entre la valeur **${l}** ? [?${m}]`;return c!==void 0&&(d+=`

Et si on entre la valeur <span class="vis-mathvar">x</span> ? <small style="color:#6b7280">(ex : 3x + 2)</small> [?litx]`),d};if(!n.ops){const i=o.programme||"",l=n.inputRange?t(n.inputRange[0],n.inputRange[1]):o.input!==void 0?o.input:t(2,20);let c,k;if(typeof p=="string"){const d=T(p);c=d.a,k=d.b}else if(p===!0&&i){const d=P(i);d&&(c=d.litA,k=d.litB)}const m={...o,input:l,programme:i};return m.content=h(i,l,c),c!==void 0&&(m.a=c,m.b=k),m}const g="résultat",b=n.inputRange||[2,20];for(let i=0;i<40;i++){const l=r?!1:n.loop===null?Math.random()<.5:!!n.loop,c=l?t(n.iterRange[0],n.iterRange[1]):1,k=t(n.opsRange[0],n.opsRange[1]),m=t(b[0],b[1]),d=[];let u=m,y=!0;for(let a=0;a<k&&y;a++){const f=s(n.ops);let v;if(f==="÷"){const C=[];for(let M=Math.max(2,n.valRange[0]);M<=n.valRange[1];M++)u%M===0&&C.push(M);if(!C.length){y=!1;break}v=s(C),u/=v}else if(f==="-"){const C=Math.min(u-1,n.valRange[1]);if(C<n.valRange[0]){y=!1;break}v=t(n.valRange[0],C),u-=v}else if(f==="×"){if(v=t(Math.max(2,n.valRange[0]),Math.min(n.valRange[1],4)),u*=v,u>9999){y=!1;break}}else v=t(n.valRange[0],n.valRange[1]),u+=v;d.push({op:f,val:v})}if(!y||!d.length)continue;u=m;for(let a=0;a<c&&y;a++)for(const f of d)if(u=f.op==="+"?u+f.val:f.op==="-"?u-f.val:f.op==="×"?u*f.val:u/f.val,u<1||u>9999||!Number.isInteger(u)){y=!1;break}if(!y)continue;const F=({op:a,val:f})=>`${g} = ${g} ${a} ${f}`,R=[`${g} = réponse`];l?(R.push(`répéter ${c}:`),d.forEach(a=>R.push("  "+F(a)))):d.forEach(a=>R.push(F(a))),R.push(`dire ${g}`);const S=R.join(`
`),w={...o,input:m,programme:S};let $,_;if(r){$=1,_=0;for(const a of d)a.op==="+"?_+=a.val:a.op==="-"?_-=a.val:a.op==="×"||a.op==="*"?($*=a.val,_*=a.val):(a.op==="÷"||a.op==="/")&&($/=a.val,_/=a.val);if($===0)continue;w.a=$,w.b=_}return w.content=h(S,m,$),w}return{...o,input:t(b[0],b[1])}}export{N as autoScale,z as defaultPosition,V as randomize};
