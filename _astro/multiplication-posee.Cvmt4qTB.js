import{markInput as z,clearInput as q,ensureSharedStyles as C}from"./vis-input.0hz6aJN5.js";const V="south",A="math974-multiplication-posee",L=["u","d","c","m","dm","cm","M"],B=`
math974-multiplication-posee { display: inline-block; padding: 4px 0; }
.mp-title { font-size: 1.5rem; font-weight: 600; color: #334155; line-height: 1.5; margin-bottom: 6px; }
.mp-table { border-collapse: separate; border-spacing: 3px 3px; font-family: inherit; }
.mp-head {
  font-size: 0.72em; font-weight: 700; color: #9ca3af;
  text-align: center; padding: 0 2px 5px; border-bottom: 1px solid #e5e7eb;
}
.mp-op {
  font-size: 1.15em; font-weight: 700; color: #374151;
  text-align: right; padding-right: 4px; min-width: 18px; vertical-align: middle;
}
.mp-given, .mp-blank {
  width: 34px; height: 34px; font-size: 1.15em; font-weight: 700; color: #1e293b;
  text-align: center; vertical-align: middle;
  background: #f1f5f9; border: 1.5px solid #e2e8f0; border-radius: 6px;
}
.mp-blank { background: transparent; border-color: transparent; }
.mp-zero {
  width: 34px; height: 34px; font-size: 1.15em; font-weight: 700; color: #9ca3af;
  text-align: center; vertical-align: middle;
  background: #f8fafc; border: 1.5px dashed #e2e8f0; border-radius: 6px;
}
/* Virgule statique dans les lignes opérandes */
.mp-given.mp-has-comma { position: relative; overflow: visible; }
.mp-comma-static {
  position: absolute; right: -11px; top: 50%; transform: translateY(-50%);
  font-size: 1.2em; font-weight: 900; color: #374151; pointer-events: none; z-index: 5;
}
.mp-cell-wrap { position: relative; display: inline-block; }
.mp-inp {
  display: block; width: 34px; height: 34px;
  text-align: center; font-size: 1.15em; font-weight: 700; font-family: inherit;
  border: 1.5px solid #d1d5db; border-radius: 6px;
  background: #fff; outline: none; box-sizing: border-box; padding: 0; color: #1e293b;
}
.mp-inp:focus { border-color: #3b82f6; background: #eff6ff; }
math974-multiplication-posee .vis-fb {
  position: absolute; top: 0; right: 2px;
  font-size: 0.55em; font-weight: 900; line-height: 1; pointer-events: none;
}
.mp-line-bar { border-top: 2.5px solid #374151; }
.mp-stage2 { display: none; }
.mp-stage2.mp-show { display: table-row; }
/* Stage 3 — virgule cliquable */
.mp-sum-locked {
  width: 34px; height: 34px; font-size: 1.15em; font-weight: 700; color: #15803d;
  text-align: center; vertical-align: middle;
  background: #f0fdf4; border: 1.5px solid #16a34a; border-radius: 6px;
  position: relative; overflow: visible;
}
.mp-sum-fb {
  position: absolute; top: 0; right: 2px;
  font-size: 0.55em; font-weight: 900; color: #16a34a; line-height: 1; pointer-events: none;
}
.mp-comma-slot {
  position: absolute; right: -13px; top: 50%; transform: translateY(-50%);
  width: 20px; height: 26px; z-index: 10;
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0;
  border: 2px dashed #cbd5e1; border-radius: 4px; background: #f8fafc;
  cursor: pointer; color: #94a3b8; box-sizing: border-box;
}
.mp-cs-comma { font-size: 0.95em; font-weight: 900; line-height: 1; }
.mp-cs-icon  { font-size: 0.55em; font-weight: 900; line-height: 1; }
.mp-comma-slot:hover { background: #fef9c3; border-color: #f59e0b; color: #d97706; }
.mp-comma-slot.mp-comma-correct { background: #f0fdf4; border-color: #16a34a; color: #15803d; border-style: solid; }
.mp-comma-slot.mp-comma-wrong   { background: #fef2f2; border-color: #dc2626; color: #dc2626; border-style: solid; }
.mp-comma-hint {
  display: none; margin-top: 6px;
  font-size: 0.78em; color: #d97706; font-style: italic; text-align: center;
}
.mp-comma-hint.mp-show { display: block; }
`;function I(){if(C(),document.getElementById("mp-styles"))return;const a=document.createElement("style");a.id="mp-styles",a.textContent=B,document.head.appendChild(a)}function w(a,t){if(t===0)return String(a);const e=10**t;return`${Math.floor(a/e)},${String(a%e).padStart(t,"0")}`}function b(a,t){const e=String(Math.abs(Math.round(a)));return Array.from({length:t},(n,o)=>{const p=e.length-(t-o);return p>=0?parseInt(e[p]):null})}const v=z,N=q;function x(a){return`<td><div class="mp-cell-wrap"><input class="mp-inp" type="text" inputmode="numeric" maxlength="1" data-sol="${a}" autocomplete="off"><span class="vis-fb"></span></div></td>`}function k(a,t){return t?`<td class="mp-given mp-has-comma">${a}<span class="mp-comma-static">,</span></td>`:`<td class="mp-given">${a}</td>`}class $ extends HTMLElement{static get observedAttributes(){return["multiplicand","multiplier","dec-a","dec-b","hide-zeros"]}connectedCallback(){I(),this.dataset.placeMode="1",this._stage=1,this._solVisible=!1,this._placedSlot=null,this._render()}attributeChangedCallback(){this.isConnected&&(this._stage=1,this._solVisible=!1,this._placedSlot=null,this._render())}_multiplicand(){return parseInt(this.getAttribute("multiplicand")||"0")}_multiplier(){return parseInt(this.getAttribute("multiplier")||"0")}_decA(){return parseInt(this.getAttribute("dec-a")||"0")}_decB(){return parseInt(this.getAttribute("dec-b")||"0")}_render(){const t=this._multiplicand(),e=this._multiplier(),n=this._decA(),o=this._decB();if(!t||!e){this.innerHTML="";return}const p=String(t).length,m=String(e).length,l=p+m,f=Array.from(String(e)).map(Number).reverse(),g=this.getAttribute("hide-zeros")==="true",r=()=>'<td class="mp-blank"></td>',d=()=>g?x(0):'<td class="mp-zero">0</td>',c=Array.from({length:l},(i,u)=>L[l-1-u]??""),_=n>0?l-1-n:-1,h=o>0?l-1-o:-1;let s=`<div class="mp-title">Pose et effectue : ${w(t,n)} × ${w(e,o)}</div>`;s+='<table class="mp-table">',s+='<tr><td class="mp-op"></td>',c.forEach(i=>{s+=`<th class="mp-head">${i}</th>`}),s+="</tr>",s+='<tr><td class="mp-op"></td>',b(t,l).forEach((i,u)=>{s+=i===null?r():k(i,u===_)}),s+="</tr>",s+='<tr><td class="mp-op">×</td>',b(e,l).forEach((i,u)=>{s+=i===null?r():k(i,u===h)}),s+="</tr>",s+=`<tr><td></td><td colspan="${l}" class="mp-line-bar"></td></tr>`,f.forEach((i,u)=>{const M=b(t*i,l-u);s+=`<tr class="mp-pp-row" data-shift="${u}"><td class="mp-op">${u>0?"+":""}</td>`;for(let S=0;S<l;S++)if(S>=l-u)s+=d();else{const y=M[S];s+=y===null?r():x(y)}s+="</tr>"}),s+=`<tr><td></td><td colspan="${l}" class="mp-line-bar"></td></tr>`;const E=b(t*e,l).map(i=>i??0);s+='<tr class="mp-stage2 mp-sum-row"><td class="mp-op">=</td>',E.forEach(i=>{s+=x(i)}),s+="</tr>",s+="</table>",s+='<div class="mp-comma-hint">↑ Clique pour placer la virgule</div>',this.innerHTML=s,this.querySelectorAll(".mp-pp-row input").forEach(i=>{i.addEventListener("input",()=>this._checkAutoValidate())}),this.querySelectorAll(".mp-sum-row input").forEach(i=>{i.addEventListener("input",()=>this._checkAutoValidateSum())}),this._stage>=2&&this._showStage2(),this._stage===3&&this._buildStage3(),this._solVisible&&this._revealAll()}_showStage2(){this.querySelectorAll(".mp-stage2").forEach(t=>t.classList.add("mp-show"))}_buildStage3(){const t=this._decA()+this._decB();if(t===0)return;const e=this._multiplicand(),n=this._multiplier(),o=String(e).length+String(n).length,p=b(e*n,o),m=this.querySelector(".mp-sum-row");if(!m)return;const l=o-t-1,f=p.findIndex(r=>r!==null),g=m.querySelector(".mp-op");m.innerHTML="",m.appendChild(g??Object.assign(document.createElement("td"),{className:"mp-op",textContent:"="})),p.forEach((r,d)=>{const c=document.createElement("td");if(r===null)c.className="mp-blank";else if(c.className="mp-sum-locked",c.innerHTML=`${r}<span class="mp-sum-fb">😀</span>`,p.slice(d+1).some(h=>h!==null)&&d>=f){const h=document.createElement("span");h.className="mp-comma-slot",h.dataset.slot=String(d),h.dataset.correct=String(d===l),h.innerHTML='<span class="mp-cs-comma">,</span>',c.appendChild(h)}m.appendChild(c)}),this._placedSlot=null,m.querySelectorAll(".mp-comma-slot").forEach(r=>{r.addEventListener("click",()=>{m.querySelectorAll(".mp-comma-slot").forEach(c=>{c.classList.remove("mp-comma-correct","mp-comma-wrong"),c.innerHTML='<span class="mp-cs-comma">,</span>',c.style.display=""}),this._placedSlot=parseInt(r.dataset.slot);const d=r.dataset.correct==="true";r.classList.add(d?"mp-comma-correct":"mp-comma-wrong"),r.innerHTML=`<span class="mp-cs-comma">,</span><span class="mp-cs-icon">${d?"😀":"😞"}</span>`,d&&m.querySelectorAll(".mp-comma-slot:not(.mp-comma-correct)").forEach(c=>{c.style.display="none"})})}),this.querySelector(".mp-comma-hint")?.classList.add("mp-show")}_checkAutoValidate(){if(this._stage!==1)return;const t=this.querySelectorAll(".mp-pp-row input");Array.from(t).every(e=>e.value.trim()!=="")&&this._validateStage1()}_checkAutoValidateSum(){if(this._stage!==2)return;const t=this.querySelectorAll(".mp-sum-row input");Array.from(t).every(e=>e.value.trim()!=="")&&this._validateStage2()}validate(){return this._stage===1?(this._validateStage1(),!1):this._stage===2?this._validateStage2():this._stage===3?this._validateStage3():!1}_validateStage1(){let t=!0;this.querySelectorAll(".mp-pp-row input").forEach(e=>{const n=e.value.trim()===""?null:parseInt(e.value.trim());if(n===null){t=!1;return}const o=n===parseInt(e.dataset.sol);v(e,o),o||(t=!1)}),t&&(this._stage=2,this._showStage2())}_validateStage2(){let t=!0;return this.querySelectorAll(".mp-sum-row input").forEach(e=>{const o=(e.value.trim()===""?0:parseInt(e.value.trim()))===parseInt(e.dataset.sol);v(e,o),o||(t=!1)}),t&&this._decA()+this._decB()>0?(this._stage=3,this._buildStage3(),!1):t}_validateStage3(){if(this._placedSlot===null)return!1;let t=!1;return this.querySelectorAll(".mp-comma-slot").forEach(e=>{parseInt(e.dataset.slot)===this._placedSlot&&(t=e.dataset.correct==="true",e.classList.add(t?"mp-comma-correct":"mp-comma-wrong"))}),t}_revealAll(){if(this._stage=2,this._showStage2(),this.querySelectorAll(".mp-pp-row input").forEach(t=>{t.value=t.dataset.sol,v(t,!0)}),this.querySelectorAll(".mp-sum-row input").forEach(t=>{t.value=t.dataset.sol,v(t,!0)}),this._decA()+this._decB()>0){this._stage=3,this._buildStage3();const t=this.querySelector('.mp-comma-slot[data-correct="true"]');t&&(t.classList.add("mp-comma-correct"),this._placedSlot=parseInt(t.dataset.slot),this.querySelectorAll(".mp-comma-slot:not(.mp-comma-correct)").forEach(e=>{e.style.display="none"}))}}toggleSolution(){return this._solVisible=!this._solVisible,this._solVisible?this._revealAll():(this._stage=1,this.querySelectorAll(".mp-stage2").forEach(t=>t.classList.remove("mp-show")),this.querySelectorAll("input").forEach(t=>{t.value="",N(t)}),this._placedSlot=null),this._solVisible}}customElements.get(A)||customElements.define(A,$);function D(a,t){const e=t.digits??3,n=t.multiplierDigits??2,o=t.decimals??0,p=t.multiplierDecimals??0,m=10**o,l=10**p,f=10**Math.max(0,e-1),g=10**e-1,r=10**Math.max(0,n-1),d=10**n-1,c=Math.floor(Math.random()*(g-f+1))+f,_=Math.floor(Math.random()*(d-r+1))+r,h=o>0?Math.floor(Math.random()*m):0,s=p>0?Math.floor(Math.random()*l):0;return{...a,multiplicand:c*m+h,multiplier:_*l+s,"dec-a":o,"dec-b":p,"hide-zeros":t.hideZeros??!1}}export{V as defaultPosition,D as randomize};
