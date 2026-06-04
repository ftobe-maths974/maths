import{markInput as h,clearInput as v,ensureSharedStyles as V}from"./vis-input.BqjRCJt3.js";import{INT_COLS as z,DEC_COLS as D,scaledToStr as q,getDigits as w,inputCell as C,wireAutoValidate as B,EXTRA as u}from"./pose-helpers._XcmRM3-.js";import"./preload-helper.CLcXU_4U.js";import"./rapido-engine.fuR8zAv5.js";import"./rapidos-visuals-integration.BNc-BNrO.js";import"./js-yaml.CwjAzRNl.js";import"./editor.Di92v2Ao.js";const K="south",Q=!0,I="math974-soustraction-posee",N=`
math974-soustraction-posee { display: inline-block; padding: 4px 0; }

/* Colonnes inter-dizaine — cachées jusqu'au stage 2 */
.sp-inter {
  width: 18px; min-width: 18px; height: 34px;
  background: transparent; border: 1px dashed transparent;
  border-radius: 4px; vertical-align: middle;
}
.sp-inter.sp-inter-visible { background: #eff6ff; border-color: #bfdbfe; }
.sp-inter-blank            { background: transparent !important; border-color: transparent !important; }

/* Barre marteau — cachée jusqu'au stage 2 */
.sp-hammer-bar { display: none; align-items: center; gap: 8px; margin-top: 8px; }
.sp-hammer-bar.sp-show { display: flex; }
.sp-hammer-btn {
  font-size: 1.1em; padding: 4px 10px; border: 1.5px solid #d1d5db; border-radius: 6px;
  background: #f9fafb; cursor: pointer; user-select: none;
}
.sp-hammer-btn.active { background: #fef3c7; border-color: #f59e0b; }
.sp-undo-btn {
  font-size: 1em; padding: 4px 10px; border: 1.5px solid #e5e7eb; border-radius: 6px;
  background: #f9fafb; cursor: pointer; user-select: none; color: #6b7280;
}

/* Digit cassable (mode marteau actif) */
.pose-given.sp-hammerable {
  cursor: crosshair; border-color: #f59e0b; background: #fffbeb;
}
/* Cellule après emprunt : chiffre barré + input décrément */
.pose-given.sp-hammered {
  display: flex; align-items: center; justify-content: center; gap: 2px;
  padding: 0 2px; background: #f1f5f9; border-color: #e2e8f0;
}
.sp-struck { text-decoration: line-through; color: #9ca3af; font-size: 1em; }
.sp-dec-inp {
  width: 22px; height: 22px; text-align: center; font-size: 0.85em; font-weight: 700;
  font-family: inherit; border: 1.5px solid #f59e0b; border-radius: 4px;
  background: #fffbeb; outline: none; box-sizing: border-box; padding: 0; color: #92400e;
}
.sp-dec-inp:focus { border-color: #3b82f6; }

/* Input « 1 » dans la cellule inter (la dizaine empruntée) */
.sp-inter.sp-inter-active { background: transparent; border-color: transparent; overflow: visible; }
.sp-one-inp {
  display: block; width: 16px; height: 22px; text-align: center;
  font-size: 0.8em; font-weight: 700; font-family: inherit;
  border: 1.5px solid #fbbf24; border-radius: 4px;
  background: #fef9c3; outline: none; box-sizing: border-box; padding: 0;
  color: #92400e; margin: auto;
  transform: translateX(12px);
}
.sp-one-inp:focus { border-color: #3b82f6; }
`;function E(){if(V(),document.getElementById("sp-styles"))return;const m=document.createElement("style");m.id="sp-styles",m.textContent=N,document.head.appendChild(m)}class O extends HTMLElement{static get observedAttributes(){return["addends","decimals"]}connectedCallback(){E(),this.dataset.placeMode="1",this._stage=1,this._solVisible=!1,this._hammerMode=!1,this._history=[],this._render()}attributeChangedCallback(){this.isConnected&&(this._stage=1,this._solVisible=!1,this._hammerMode=!1,this._history=[],this._render())}_addends(){try{return JSON.parse(this.getAttribute("addends")||"[]")}catch{return[]}}_decimals(){return Math.max(0,parseInt(this.getAttribute("decimals")||"0")||0)}_render(){const t=this._addends();if(t.length<2){this.innerHTML="";return}const[s,r]=t,o=this._decimals(),l=s-r,c=String(s).length,d=Math.max(1,c-o),n=o,p=d+Math.max(0,d-1),x=n>0?1+n+Math.max(0,n-1):0,S=u+p+x+u,H=Array.from({length:d},(e,i)=>z[d-1-i]??""),T=Array.from({length:n},(e,i)=>D[i]??""),g=()=>'<td class="pose-blank"></td>',f=e=>g().repeat(e),y=()=>'<td class="pose-comma-cell">,</td>',k=(e,i)=>`<td class="sp-inter" data-between="${e}-${i}"></td>`,b=()=>'<td class="sp-inter sp-inter-blank"></td>',_=(e,i=!1)=>C({cls:"pose-inp",sol:e,extra:i}),M=e=>C({cls:"pose-inp pose-dec",sol:e});let a=`<div class="pose-wrap"><div class="pose-title">Pose et effectue : ${q(s,o)} − ${q(r,o)}</div>`;a+='<table class="pose-table">',a+=`<tr><td class="pose-op"></td>${f(u)}`,H.forEach((e,i)=>{i>0&&(a+=b()),a+=`<th class="pose-head">${e}</th>`}),n>0&&(a+='<th class="pose-head"></th>',T.forEach((e,i)=>{i>0&&(a+=b()),a+=`<th class="pose-head pose-dec-head">${e}</th>`})),a+=`${f(u)}</tr>`;const A=w(s,c);a+=`<tr class="sp-minuend-row sp-addend-row"><td class="pose-op"></td>${f(u)}`;for(let e=0;e<d;e++){e>0&&(a+=k(e-1,e));const i=A[e];a+=i===null?g():`<td class="pose-given" data-col="${e}" data-digit="${i}">${i}</td>`}if(n>0){a+=y();for(let e=0;e<n;e++){e>0&&(a+=k(d+e-1,d+e));const i=A[d+e];a+=i===null?g():`<td class="pose-given" data-col="${d+e}" data-digit="${i}">${i}</td>`}}a+=`${f(u)}</tr>`;const L=w(r,c);a+='<tr class="sp-addend-row" data-editable="true"><td class="pose-op">−</td>',a+=_(null,!0);for(let e=0;e<d;e++){e>0&&(a+=b());const i=L[e];a+=i===null?g():_(i)}if(n>0){a+=y();for(let e=0;e<n;e++){e>0&&(a+=b());const i=L[d+e];a+=i===null?g():M(i)}}a+=_(null,!0),a+="</tr>",a+=`<tr class="pose-stage2"><td></td><td colspan="${S}" class="pose-line-bar"></td></tr>`;const $=w(l,c).map(e=>e??0);a+=`<tr class="pose-stage2 sp-result-row"><td class="pose-op">=</td>${f(u)}`;for(let e=0;e<d;e++)e>0&&(a+=b()),a+=_($[e]);if(n>0){a+=y();for(let e=0;e<n;e++)e>0&&(a+=b()),a+=M($[d+e])}a+=`${f(u)}</tr></table></div>`,a+=`<div class="sp-hammer-bar">
      <button class="sp-hammer-btn" title="Mode emprunt">🔨</button>
      <button class="sp-undo-btn" title="Annuler le dernier emprunt">↩</button>
    </div>`,this.innerHTML=a,this.querySelectorAll(".sp-addend-row input[data-extra]").forEach(e=>{e.addEventListener("input",()=>{e.value.trim()!==""?h(e,!1):v(e),this._checkAutoValidate()})}),this.querySelectorAll(".sp-addend-row input:not([data-extra])").forEach(e=>{e.addEventListener("input",()=>this._checkAutoValidate())}),this._stage===2&&this._showStage2(),this._solVisible&&this._revealAll()}_showStage2(){this.querySelectorAll(".pose-stage2").forEach(t=>t.classList.add("pose-show")),this.querySelector(".sp-hammer-bar")?.classList.add("sp-show"),this._wireHammer(),B(this,".sp-result-row input",()=>this._validateStage2(),()=>this._stage===2)}_wireHammer(){const t=this.querySelector(".sp-hammer-btn"),s=this.querySelector(".sp-undo-btn");t&&(t.addEventListener("click",()=>{this._hammerMode=!this._hammerMode,t.classList.toggle("active",this._hammerMode),this._refreshHammerable()}),s.addEventListener("click",()=>this._undoBorrow()))}_refreshHammerable(){this.querySelectorAll(".sp-minuend-row .pose-given").forEach(t=>{const s=parseInt(t.dataset.digit??t.textContent),r=this._hammerMode&&s>0&&!t.dataset.hammered;t.classList.toggle("sp-hammerable",r),r?t.onclick=()=>this._doBorrow(parseInt(t.dataset.col)):t.onclick=null})}_doBorrow(t){const s=this.querySelector(`.sp-minuend-row .pose-given[data-col="${t}"]`);if(!s||s.dataset.hammered)return;const r=parseInt(s.dataset.digit),o=r-1;s.dataset.hammered="1",s.dataset.digit=String(o),s.classList.remove("sp-hammerable"),s.classList.add("sp-hammered"),s.onclick=null,s.innerHTML=`<span class="sp-struck">${r}</span><div class="pose-cell-wrap"><input class="sp-dec-inp" data-sol="${o}" maxlength="1" inputmode="numeric" autocomplete="off"><span class="vis-fb"></span></div>`;const l=this.querySelector(`.sp-inter[data-between="${t}-${t+1}"]`),c=s.querySelector(".sp-dec-inp");c.addEventListener("input",()=>{const d=parseInt(c.value),n=!isNaN(d)&&d===o;if(h(c,n),n&&l&&!l.classList.contains("sp-inter-active")){l.classList.add("sp-inter-active"),l.innerHTML='<input class="sp-one-inp" data-sol="1" maxlength="1" inputmode="numeric" autocomplete="off">';const p=l.querySelector(".sp-one-inp");p.addEventListener("input",()=>h(p,p.value.trim()==="1")),p.focus()}}),this._history.push({col:t,origDigit:r,td:s,interCell:l}),this._hammerMode=!1,this.querySelector(".sp-hammer-btn")?.classList.remove("active"),this._refreshHammerable(),c.focus()}_undoBorrow(){const t=this._history.pop();if(!t)return;const{origDigit:s,td:r,interCell:o}=t;r.dataset.hammered="",r.dataset.digit=String(s),r.classList.remove("sp-hammered"),r.innerHTML=String(s),o&&(o.classList.remove("sp-inter-active"),o.innerHTML=""),this._refreshHammerable()}_checkAutoValidate(){if(this._stage!==1)return;const t=this.querySelectorAll(".sp-addend-row input:not([data-extra])");Array.from(t).every(s=>s.value.trim()!=="")&&this._validateStage1()}validate(){return this._stage===1?(this._validateStage1(),!1):this._validateStage2()}_validateStage1(){let t=!0;this.querySelectorAll(".sp-addend-row[data-editable] input").forEach(s=>{const r=s.value.trim();if(s.dataset.extra)r!==""?(h(s,!1),t=!1):v(s);else{const o=parseInt(s.dataset.sol),l=r===""?null:parseInt(r);if(l===null){t=!1;return}const c=!isNaN(l)&&l===o;h(s,c),c||(t=!1)}}),t&&(this._stage=2,this._showStage2())}_validateStage2(){let t=!0;return this.querySelectorAll(".pose-stage2 input, .sp-dec-inp, .sp-one-inp").forEach(s=>{const r=parseInt(s.dataset.sol),o=s.value.trim()===""?0:parseInt(s.value.trim()),l=!isNaN(o)&&o===r;h(s,l),l||(t=!1)}),t}_revealAll(){this._stage=2,this._showStage2(),this.querySelectorAll(".sp-addend-row input").forEach(t=>{t.dataset.extra?(t.value="",v(t)):(t.value=t.dataset.sol,h(t,!0))}),this.querySelectorAll(".pose-stage2 input").forEach(t=>{t.value=t.dataset.sol,h(t,!0)})}toggleSolution(){return this._solVisible=!this._solVisible,this._solVisible?this._revealAll():(this._stage=1,this.querySelectorAll(".pose-stage2").forEach(t=>t.classList.remove("pose-show")),this.querySelectorAll("input").forEach(t=>{t.value="",v(t)})),this._solVisible}}customElements.get(I)||customElements.define(I,O);function U(m,t){const s=t.digits??3,r=t.decimals??0,o=10**r,l=10**Math.max(0,s-1),c=10**s-1,d=()=>{const x=Math.floor(Math.random()*(c-l+1))+l,S=r>0?Math.floor(Math.random()*o):0;return x*o+S};let n=d(),p=d();return n<p&&([n,p]=[p,n]),n===p&&(p=Math.max(l*o,p-o)),{...m,addends:[n,p],decimals:r}}export{Q as autoScale,K as defaultPosition,U as randomize};
