import{markInput as y,clearInput as _,fireConfettiOnce as V,ensureSharedStyles as k}from"./vis-input.BmrgxT1E.js";import{getDigits as q,inputCell as D,wireAutoValidate as L}from"./pose-helpers.B0aomttG.js";import"./preload-helper.CL8WEfgq.js";import"./rapido-engine.CssVfIEP.js";import"./rapidos-visuals-integration.DpJVyrjp.js";import"./js-yaml.CwjAzRNl.js";import"./editor.Di92v2Ao.js";const G="south",J=!0,A="math974-division-posee",E=`
math974-division-posee { display: inline-block; padding: 4px 0; }
.dp-outer { display: flex; align-items: flex-start; gap: 0; }
.dp-bar-td { border-bottom: 2px solid #374151; height: 6px; padding: 0; vertical-align: bottom; }
.dp-bar-row td { height: 6px !important; padding: 0; }
.dp-rem-label {
  font-size: 0.8em; color: #6b7280; font-style: italic;
  text-align: right; padding-right: 4px; vertical-align: middle;
}
.dp-hidden { display: none !important; }

/* Potence — s'étire sur toute la hauteur */
.dp-right {
  display: flex; flex-direction: column;
  border-left: 2.5px solid #374151; margin-left: 2px;
  align-self: stretch;
}
.dp-right-top {
  font-size: 1.15em; font-weight: 700; color: #1e293b;
  text-align: center; padding: 0 10px;
  background: #f1f5f9; border-bottom: 2.5px solid #374151;
  display: flex; align-items: center; justify-content: center;
  min-height: 40px;
}
.dp-right-quot {
  padding: 5px 6px;
  display: flex; flex-wrap: wrap; gap: 3px; align-items: center;
  min-width: 44px;
}

/* Relation euclidienne — phase 2, cachée au départ */
.dp-euclidean {
  margin-top: 14px; display: flex; align-items: center; gap: 5px; flex-wrap: wrap;
  font-size: 1.15em; font-weight: 700; color: #374151;
}
.dp-euc-inputs { display: flex; gap: 3px; align-items: center; }
.dp-euc-op     { color: #374151; padding: 0 1px; }
`;function j(){if(k(),document.getElementById("dp-styles"))return;const p=document.createElement("style");p.id="dp-styles",p.textContent=E,document.head.appendChild(p)}function w(p,t){const i=String(p),o=i.length,d=[];let r=0,l=0;for(;l<o&&r<t;)r=r*10+parseInt(i[l]),l++;for(;l<=o;){const a=l-1,u=String(r),c=a-u.length+1,e=Math.floor(r/t),h=e*t,v=r-h;if(d.push({startCol:c,endCol:a,qDigit:e,product:h,remainder:v}),l>=o)break;r=v*10+parseInt(i[l]),l++}return d}function b(p){return`<div class="pose-cell-wrap"><input class="pose-inp dp-euc-inp" type="text" inputmode="numeric" maxlength="1" data-sol="${p}" autocomplete="off"><span class="vis-fb"></span></div>`}class R extends HTMLElement{static get observedAttributes(){return["dividend","divisor"]}connectedCallback(){j(),this.dataset.placeMode="1",this._solVisible=!1,this._render()}attributeChangedCallback(){this.isConnected&&(this._solVisible=!1,this._render())}_dividend(){return parseInt(this.getAttribute("dividend")||"0")}_divisor(){return parseInt(this.getAttribute("divisor")||"1")}_render(){const t=this._dividend(),i=this._divisor();if(!t||!i){this.innerHTML="";return}const o=String(t),d=o.length,r=w(t,i),l=String(Math.floor(t/i)),a=()=>'<td class="pose-blank"></td>',u=s=>`<td class="pose-given">${s}</td>`,c=s=>D({cls:"pose-inp",sol:s});let e=`<div class="pose-wrap"><div class="pose-title">Pose et effectue : ${t} ÷ ${i}</div>`;e+='<div class="dp-outer"><table class="pose-table">',e+='<tr><td class="pose-op"></td>';for(const s of o)e+=u(parseInt(s));e+="</tr>",r.forEach((s,g)=>{const{startCol:f,endCol:m,product:$,remainder:I}=s,x=g===r.length-1,S=m-f+1,C=q($,S).map(n=>n??0),M=q(I,S).map(n=>n??0);e+=`<tr class="dp-prod-${g} dp-hidden"><td class="pose-op">−</td>`;for(let n=0;n<d;n++){if(n<f||n>m){e+=a();continue}e+=c(C[n-f])}e+="</tr>",e+=`<tr class="dp-bar-${g} dp-bar-row dp-hidden"><td></td>`;for(let n=0;n<d;n++)e+=n>=f&&n<=m?'<td class="dp-bar-td"></td>':a();e+="</tr>",e+=`<tr class="dp-sub-${g} dp-hidden">${x?'<td class="dp-rem-label">r.</td>':'<td class="pose-op"></td>'}`;for(let n=0;n<d;n++)!x&&n===m+1?e+=c(parseInt(o[n])):n>=f&&n<=m?e+=c(M[n-f]):e+=a();e+="</tr>"}),e+="</table>",e+='<div class="dp-right">',e+=`<div class="dp-right-top">${i}</div>`,e+='<div class="dp-right-quot">';for(let s=0;s<l.length;s++)e+=`<div class="pose-cell-wrap"><input class="pose-inp dp-quot-inp" type="text" inputmode="numeric" maxlength="1" data-sol="${l[s]}" data-qi="${s}" autocomplete="off"><span class="vis-fb"></span></div>`;e+="</div></div></div>";const h=Math.floor(t/i),v=t-i*h;e+='<div class="dp-euclidean dp-hidden">',e+=`<div class="dp-euc-inputs">${Array.from(String(t)).map(s=>b(s)).join("")}</div>`,e+='<span class="dp-euc-op">=</span>',e+=`<div class="dp-euc-inputs">${Array.from(String(i)).map(s=>b(s)).join("")}</div>`,e+='<span class="dp-euc-op">×</span>',e+=`<div class="dp-euc-inputs">${Array.from(String(h)).map(s=>b(s)).join("")}</div>`,e+='<span class="dp-euc-op">+</span>',e+=`<div class="dp-euc-inputs">${Array.from(String(v)).map(s=>b(s)).join("")}</div>`,e+="</div>",e+="</div>",this.innerHTML=e,this.querySelectorAll(".dp-quot-inp").forEach(s=>{s.addEventListener("input",()=>this._updateVisibility())}),r.forEach((s,g)=>{this.querySelector(`.dp-prod-${g}`)?.querySelectorAll(".pose-inp").forEach(m=>{m.addEventListener("input",()=>this._updateVisibility())})}),L(this,".dp-euc-inp",()=>this._validateEuc()),this._updateVisibility(),this._solVisible&&this._revealAll()}_updateVisibility(){const t=w(this._dividend(),this._divisor()),i=Array.from(this.querySelectorAll(".dp-quot-inp"));t.forEach((d,r)=>{const l=i[r]?.value.trim()!=="",a=this.querySelector(`.dp-prod-${r}`),u=this.querySelector(`.dp-bar-${r}`),c=this.querySelector(`.dp-sub-${r}`);a?.classList.toggle("dp-hidden",!l),u?.classList.toggle("dp-hidden",!l);const e=Array.from(a?.querySelectorAll(".pose-inp")||[]),h=l&&e.every(v=>v.value.trim()!=="");c?.classList.toggle("dp-hidden",!h)}),Array.from(this.querySelectorAll(".pose-inp:not(.dp-euc-inp)")).every(d=>d.value.trim()!=="")&&this._validateMain()}_validateMain(){let t=!0;return this.querySelectorAll(".pose-inp:not(.dp-euc-inp)").forEach(i=>{const o=i.value.trim()===""?null:parseInt(i.value.trim());if(o===null){t=!1;return}const d=o===parseInt(i.dataset.sol);y(i,d),d||(t=!1)}),t&&this.querySelector(".dp-euclidean")?.classList.remove("dp-hidden"),t}_validateEuc(){let t=!0;return this.querySelectorAll(".dp-euc-inp").forEach(i=>{const o=i.value.trim()===""?null:parseInt(i.value.trim());if(o===null){_(i),t=!1;return}const d=o===parseInt(i.dataset.sol);y(i,d),d||(t=!1)}),t&&V(this),t}validate(){const t=this._validateMain();return this.querySelector(".dp-euclidean")?.classList.contains("dp-hidden")?!1:t&&this._validateEuc()}_revealAll(){this.querySelectorAll(".dp-hidden").forEach(t=>t.classList.remove("dp-hidden")),this.querySelectorAll(".pose-inp").forEach(t=>{t.value=t.dataset.sol,y(t,!0)})}toggleSolution(){return this._solVisible=!this._solVisible,this._solVisible?this._revealAll():(this.querySelector(".dp-euclidean")?.classList.add("dp-hidden"),this.querySelectorAll(".pose-inp").forEach(t=>{t.value="",_(t)}),this._updateVisibility()),this._solVisible}}customElements.get(A)||customElements.define(A,R);function K(p,t){const i=t.dividendDigits??3,o=t.divisorDigits??1,d=o===1?2:10**(o-1),r=10**o-1,l=Math.floor(Math.random()*(r-d+1))+d,a=Math.max(l*10,10**(i-1)),u=10**i-1,c=Math.floor(Math.random()*(u-a+1))+a;return{...p,dividend:c,divisor:l}}export{J as autoScale,G as defaultPosition,K as randomize};
