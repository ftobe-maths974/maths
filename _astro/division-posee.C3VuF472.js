import{markInput as M,clearInput as V,ensureSharedStyles as C}from"./vis-input.C4J8oy6G.js";const R="south",_="math974-division-posee",L=`
math974-division-posee { display: inline-block; padding: 4px 0; }
.dp-title { font-size: 1.5rem; font-weight: 600; color: #334155; line-height: 1.5; margin-bottom: 6px; }
.dp-outer { display: flex; align-items: flex-start; gap: 0; }
.dp-table { border-collapse: separate; border-spacing: 3px 3px; font-family: inherit; }
.dp-op {
  font-size: 1.15em; font-weight: 700; color: #374151;
  text-align: right; padding-right: 4px; min-width: 20px; vertical-align: middle;
}
.dp-given {
  width: 34px; height: 34px; font-size: 1.15em; font-weight: 700; color: #1e293b;
  text-align: center; vertical-align: middle;
  background: #f1f5f9; border: 1.5px solid #e2e8f0; border-radius: 6px;
}
.dp-blank { width: 34px; height: 34px; background: transparent; border: none; }
.dp-bar-td { border-bottom: 2px solid #374151; height: 6px; padding: 0; vertical-align: bottom; }
.dp-bar-row td { height: 6px !important; padding: 0; }
.dp-cell-wrap { position: relative; display: inline-block; }
.dp-inp {
  display: block; width: 34px; height: 34px;
  text-align: center; font-size: 1.15em; font-weight: 700; font-family: inherit;
  border: 1.5px solid #d1d5db; border-radius: 6px;
  background: #fff; outline: none; box-sizing: border-box; padding: 0; color: #1e293b;
}
.dp-inp:focus { border-color: #3b82f6; background: #eff6ff; }
math974-division-posee .vis-fb {
  position: absolute; top: 0; right: 2px;
  font-size: 0.55em; font-weight: 900; line-height: 1; pointer-events: none;
}
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
.dp-rem-label {
  font-size: 0.8em; color: #6b7280; font-style: italic;
  text-align: right; padding-right: 4px; vertical-align: middle;
}
.dp-hidden { display: none !important; }
/* Relation euclidienne — phase 2, cachée au départ */
.dp-euclidean {
  margin-top: 14px; display: flex; align-items: center; gap: 5px; flex-wrap: wrap;
  font-size: 1.15em; font-weight: 700; color: #374151;
}
.dp-euc-inputs { display: flex; gap: 3px; align-items: center; }
.dp-euc-op { color: #374151; padding: 0 1px; }
`;function D(){if(C(),document.getElementById("dp-styles"))return;const a=document.createElement("style");a.id="dp-styles",a.textContent=L,document.head.appendChild(a)}function q(a,t){const i=String(Math.abs(Math.round(a)));return Array.from({length:t},(l,r)=>{const d=i.length-(t-r);return d>=0?parseInt(i[d]):null})}function A(a,t){const i=String(a),l=i.length,r=[];let d=0,o=0;for(;o<l&&d<t;)d=d*10+parseInt(i[o]),o++;for(;o<=l;){const p=o-1,c=String(d),e=p-c.length+1,u=Math.floor(d/t),g=u*t,s=d-g;if(r.push({startCol:e,endCol:p,qDigit:u,product:g,remainder:s}),o>=l)break;d=s*10+parseInt(i[o]),o++}return r}const b=M,w=V;function x(a){return`<td><div class="dp-cell-wrap"><input class="dp-inp" type="text" inputmode="numeric" maxlength="1" data-sol="${a}" autocomplete="off"><span class="vis-fb"></span></div></td>`}function v(a){return`<div class="dp-cell-wrap"><input class="dp-inp dp-euc-inp" type="text" inputmode="numeric" maxlength="1" data-sol="${a}" autocomplete="off"><span class="vis-fb"></span></div>`}class z extends HTMLElement{static get observedAttributes(){return["dividend","divisor"]}connectedCallback(){D(),this.dataset.placeMode="1",this._solVisible=!1,this._render()}attributeChangedCallback(){this.isConnected&&(this._solVisible=!1,this._render())}_dividend(){return parseInt(this.getAttribute("dividend")||"0")}_divisor(){return parseInt(this.getAttribute("divisor")||"1")}_render(){const t=this._dividend(),i=this._divisor();if(!t||!i){this.innerHTML="";return}const l=String(t),r=l.length,d=A(t,i),o=String(Math.floor(t/i)),p=()=>'<td class="dp-blank"></td>',c=s=>`<td class="dp-given">${s}</td>`;let e=`<div class="dp-title">Pose et effectue : ${t} ÷ ${i}</div>`;e+='<div class="dp-outer"><table class="dp-table">',e+='<tr><td class="dp-op"></td>';for(const s of l)e+=c(parseInt(s));e+="</tr>",d.forEach((s,m)=>{const{startCol:h,endCol:f,product:E,remainder:k}=s,y=m===d.length-1,S=f-h+1,I=q(E,S).map(n=>n??0),$=q(k,S).map(n=>n??0);e+=`<tr class="dp-prod-${m} dp-hidden"><td class="dp-op">−</td>`;for(let n=0;n<r;n++){if(n<h||n>f){e+=p();continue}e+=x(I[n-h])}e+="</tr>",e+=`<tr class="dp-bar-${m} dp-bar-row dp-hidden"><td></td>`;for(let n=0;n<r;n++)e+=n>=h&&n<=f?'<td class="dp-bar-td"></td>':p();e+="</tr>",e+=`<tr class="dp-sub-${m} dp-hidden">${y?'<td class="dp-rem-label">r.</td>':'<td class="dp-op"></td>'}`;for(let n=0;n<r;n++)!y&&n===f+1?e+=x(parseInt(l[n])):n>=h&&n<=f?e+=x($[n-h]):e+=p();e+="</tr>"}),e+="</table>",e+='<div class="dp-right">',e+=`<div class="dp-right-top">${i}</div>`,e+='<div class="dp-right-quot">';for(let s=0;s<o.length;s++)e+=`<div class="dp-cell-wrap"><input class="dp-inp dp-quot-inp" type="text" inputmode="numeric" maxlength="1" data-sol="${o[s]}" data-qi="${s}" autocomplete="off"><span class="vis-fb"></span></div>`;e+="</div></div></div>";const u=Math.floor(t/i),g=t-i*u;e+='<div class="dp-euclidean dp-hidden">',e+=`<div class="dp-euc-inputs">${Array.from(String(t)).map(s=>v(s)).join("")}</div>`,e+='<span class="dp-euc-op">=</span>',e+=`<div class="dp-euc-inputs">${Array.from(String(i)).map(s=>v(s)).join("")}</div>`,e+='<span class="dp-euc-op">×</span>',e+=`<div class="dp-euc-inputs">${Array.from(String(u)).map(s=>v(s)).join("")}</div>`,e+='<span class="dp-euc-op">+</span>',e+=`<div class="dp-euc-inputs">${Array.from(String(g)).map(s=>v(s)).join("")}</div>`,e+="</div>",this.innerHTML=e,this.querySelectorAll(".dp-quot-inp").forEach(s=>{s.addEventListener("input",()=>this._updateVisibility())}),d.forEach((s,m)=>{this.querySelector(`.dp-prod-${m}`)?.querySelectorAll(".dp-inp").forEach(f=>{f.addEventListener("input",()=>this._updateVisibility())})}),this.querySelectorAll(".dp-euc-inp").forEach(s=>{s.addEventListener("input",()=>this._checkAutoValidateEuc())}),this._updateVisibility(),this._solVisible&&this._revealAll()}_updateVisibility(){const t=A(this._dividend(),this._divisor()),i=Array.from(this.querySelectorAll(".dp-quot-inp"));t.forEach((r,d)=>{const o=i[d]?.value.trim()!=="",p=this.querySelector(`.dp-prod-${d}`),c=this.querySelector(`.dp-bar-${d}`),e=this.querySelector(`.dp-sub-${d}`);p?.classList.toggle("dp-hidden",!o),c?.classList.toggle("dp-hidden",!o);const u=Array.from(p?.querySelectorAll(".dp-inp")||[]),g=o&&u.every(s=>s.value.trim()!=="");e?.classList.toggle("dp-hidden",!g)}),Array.from(this.querySelectorAll(".dp-inp:not(.dp-euc-inp)")).every(r=>r.value.trim()!=="")&&this._validateMain()}_validateMain(){let t=!0;return this.querySelectorAll(".dp-inp:not(.dp-euc-inp)").forEach(i=>{const l=i.value.trim()===""?null:parseInt(i.value.trim());if(l===null){t=!1;return}const r=l===parseInt(i.dataset.sol);b(i,r),r||(t=!1)}),t&&this.querySelector(".dp-euclidean")?.classList.remove("dp-hidden"),t}_checkAutoValidateEuc(){Array.from(this.querySelectorAll(".dp-euc-inp")).every(i=>i.value.trim()!=="")&&this._validateEuc()}_validateEuc(){let t=!0;return this.querySelectorAll(".dp-euc-inp").forEach(i=>{const l=i.value.trim()===""?null:parseInt(i.value.trim());if(l===null){w(i),t=!1;return}const r=l===parseInt(i.dataset.sol);b(i,r),r||(t=!1)}),t}validate(){const t=this._validateMain();return this.querySelector(".dp-euclidean")?.classList.contains("dp-hidden")?!1:t&&this._validateEuc()}_revealAll(){this.querySelectorAll(".dp-hidden").forEach(t=>t.classList.remove("dp-hidden")),this.querySelectorAll(".dp-inp").forEach(t=>{t.value=t.dataset.sol,b(t,!0)})}toggleSolution(){return this._solVisible=!this._solVisible,this._solVisible?this._revealAll():(this.querySelector(".dp-euclidean")?.classList.add("dp-hidden"),this.querySelectorAll(".dp-inp").forEach(t=>{t.value="",w(t)}),this._updateVisibility()),this._solVisible}}customElements.get(_)||customElements.define(_,z);function P(a,t){const i=t.dividendDigits??3,l=t.divisorDigits??1,r=l===1?2:10**(l-1),d=10**l-1,o=Math.floor(Math.random()*(d-r+1))+r,p=Math.max(o*10,10**(i-1)),c=10**i-1,e=Math.floor(Math.random()*(c-p+1))+p;return{...a,dividend:e,divisor:o}}export{R as defaultPosition,P as randomize};
