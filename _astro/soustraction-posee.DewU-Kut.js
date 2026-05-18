import{markInput as C,clearInput as I,ensureSharedStyles as H}from"./vis-input.B9XJnOtJ.js";const j="south",L="math974-soustraction-posee",T=["u","d","c","m","dm","cm","M"],D=["d","c","m"],f=1,V=`
math974-soustraction-posee { display: inline-block; padding: 4px 0; }
.sp-title { font-size: 1.5rem; font-weight: 600; color: #334155; line-height: 1.5; margin-bottom: 6px; }
.sp-table { border-collapse: separate; border-spacing: 3px 3px; font-family: inherit; }
.sp-head {
  font-size: 0.72em; font-weight: 700; color: #9ca3af;
  text-align: center; padding: 0 2px 5px; border-bottom: 1px solid #e5e7eb;
}
.sp-head.sp-dec-head { color: #a78bfa; }
.sp-op {
  font-size: 1.15em; font-weight: 700; color: #374151;
  text-align: right; padding-right: 4px; min-width: 18px; vertical-align: middle;
}
.sp-op-ret { font-size: 0.7em; color: #9ca3af; font-style: italic; vertical-align: middle; }
.sp-given, .sp-blank {
  width: 34px; height: 34px; font-size: 1.15em; font-weight: 700; color: #1e293b;
  text-align: center; vertical-align: middle;
  background: #f1f5f9; border: 1.5px solid #e2e8f0; border-radius: 6px;
}
.sp-blank { background: transparent; border-color: transparent; }
.sp-comma-cell {
  text-align: center; vertical-align: bottom; padding-bottom: 4px;
  font-size: 1.4em; font-weight: 700; color: #374151; width: 12px;
}
.sp-cell-wrap { position: relative; display: inline-block; }
.sp-inp {
  display: block; width: 34px; height: 34px;
  text-align: center; font-size: 1.15em; font-weight: 700; font-family: inherit;
  border: 1.5px solid #d1d5db; border-radius: 6px;
  background: #fff; outline: none; box-sizing: border-box; padding: 0; color: #1e293b;
}
.sp-inp.sp-dec   { border-color: #ddd6fe; background: #faf5ff; }
.sp-inp.sp-extra { border-color: #e9ecef; background: #f8f9fa; }
.sp-inp:focus { border-color: #3b82f6; background: #eff6ff; }
.sp-ret-inp {
  display: block; width: 26px; height: 26px; margin: auto;
  text-align: center; font-size: 0.8em; font-weight: 700; font-family: inherit;
  border: 1.5px dashed #d1d5db; border-radius: 4px;
  background: #fefce8; outline: none; box-sizing: border-box; padding: 0; color: #78350f;
}
.sp-ret-inp.vis-inp-ok { border-style: solid; }
.sp-ret-inp.vis-inp-ko { border-style: solid; }
math974-soustraction-posee .vis-fb {
  position: absolute; top: 0; right: 2px;
  font-size: 0.55em; font-weight: 900; line-height: 1; pointer-events: none;
}
.sp-line-bar { border-top: 2.5px solid #374151; padding: 2px 0 0; }
.sp-stage2 { display: none; }
.sp-stage2.sp-show { display: table-row; }

/* Colonnes inter-dizaine — cachées jusqu'au stage 2 */
.sp-inter {
  width: 18px; min-width: 18px; height: 34px;
  background: transparent; border: 1px dashed transparent;
  border-radius: 4px; vertical-align: middle;
}
.sp-inter.sp-inter-visible {
  background: #eff6ff; border-color: #bfdbfe;
}
.sp-inter-blank { background: transparent !important; border-color: transparent !important; }

/* Barre hammer — cachée jusqu'au stage 2 */
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

/* Digit hammerable (mode actif) */
.sp-given.sp-hammerable { cursor: crosshair; border-color: #f59e0b; background: #fffbeb; }

/* Cellule après emprunt : chiffre barré + input décrément */
.sp-given.sp-hammered {
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

/* Input "1" dans la cellule inter */
.sp-inter.sp-inter-active {
  background: transparent; border-color: transparent;
  overflow: visible;
}
.sp-one-inp {
  display: block; width: 16px; height: 22px; text-align: center;
  font-size: 0.8em; font-weight: 700; font-family: inherit;
  border: 1.5px solid #fbbf24; border-radius: 4px;
  background: #fef9c3; outline: none; box-sizing: border-box; padding: 0;
  color: #92400e; margin: auto;
  transform: translateX(12px);
}
.sp-one-inp:focus { border-color: #3b82f6; }
`;function B(){if(H(),document.getElementById("sp-styles"))return;const c=document.createElement("style");c.id="sp-styles",c.textContent=V,document.head.appendChild(c)}function k(c,e){const s=String(Math.abs(Math.round(c)));return Array.from({length:e},(r,o)=>{const i=s.length-(e-o);return i>=0?parseInt(s[i]):null})}function E(c,e){if(e===0)return String(c);const s=10**e;return`${Math.floor(c/s)},${String(c%s).padStart(e,"0")}`}const u=C,v=I;function g(c,e,s=!1){return`<td><div class="sp-cell-wrap"><input class="${c}${s?" sp-extra":""}" type="text" inputmode="numeric" maxlength="1"${s?' data-extra="true"':` data-sol="${e}"`} autocomplete="off"><span class="vis-fb"></span></div></td>`}class N extends HTMLElement{static get observedAttributes(){return["addends","decimals"]}connectedCallback(){B(),this.dataset.placeMode="1",this._stage=1,this._solVisible=!1,this._hammerMode=!1,this._history=[],this._render()}attributeChangedCallback(){this.isConnected&&(this._stage=1,this._solVisible=!1,this._hammerMode=!1,this._history=[],this._render())}_addends(){try{return JSON.parse(this.getAttribute("addends")||"[]")}catch{return[]}}_decimals(){return Math.max(0,parseInt(this.getAttribute("decimals")||"0")||0)}_render(){const e=this._addends();if(e.length<2){this.innerHTML="";return}const[s,r]=e,o=this._decimals(),i=s-r,p=String(s).length,d=Math.max(1,p-o),l=o,h=d+Math.max(0,d-1),_=l>0?1+l+Math.max(0,l-1):0,y=f+h+_+f,q=Array.from({length:d},(t,n)=>T[d-1-n]??""),z=Array.from({length:l},(t,n)=>D[n]??""),x=()=>'<td class="sp-blank"></td>',m=t=>x().repeat(t),w=()=>'<td class="sp-comma-cell">,</td>',S=(t,n)=>`<td class="sp-inter" data-between="${t}-${n}"></td>`,b=()=>'<td class="sp-inter sp-inter-blank"></td>';let a=`<div class="sp-title">Pose et effectue : ${E(s,o)} − ${E(r,o)}</div>`;a+='<table class="sp-table">',a+=`<tr><td class="sp-op"></td>${m(f)}`,q.forEach((t,n)=>{n>0&&(a+=b()),a+=`<th class="sp-head">${t}</th>`}),l>0&&(a+='<th class="sp-head"></th>',z.forEach((t,n)=>{n>0&&(a+=b()),a+=`<th class="sp-head sp-dec-head">${t}</th>`})),a+=`${m(f)}</tr>`;const M=k(s,p);a+=`<tr class="sp-minuend-row sp-addend-row"><td class="sp-op"></td>${m(f)}`;for(let t=0;t<d;t++){t>0&&(a+=S(t-1,t));const n=M[t];a+=n===null?x():`<td class="sp-given" data-col="${t}" data-digit="${n}">${n}</td>`}if(l>0){a+=w();for(let t=0;t<l;t++){t>0&&(a+=S(d+t-1,d+t));const n=M[d+t];a+=n===null?x():`<td class="sp-given" data-col="${d+t}" data-digit="${n}">${n}</td>`}}a+=`${m(f)}</tr>`;const $=k(r,p);a+='<tr class="sp-addend-row" data-editable="true"><td class="sp-op">−</td>',a+=g("sp-inp",null,!0);for(let t=0;t<d;t++){t>0&&(a+=b());const n=$[t];a+=n===null?x():g("sp-inp",n)}if(l>0){a+=w();for(let t=0;t<l;t++){t>0&&(a+=b());const n=$[d+t];a+=n===null?x():g("sp-inp sp-dec",n)}}a+=g("sp-inp",null,!0),a+="</tr>",a+=`<tr class="sp-stage2"><td></td><td colspan="${y}" class="sp-line-bar"></td></tr>`;const A=k(i,p).map(t=>t??0);a+=`<tr class="sp-stage2"><td class="sp-op">=</td>${m(f)}`;for(let t=0;t<d;t++)t>0&&(a+=b()),a+=g("sp-inp",A[t]);if(l>0){a+=w();for(let t=0;t<l;t++)t>0&&(a+=b()),a+=g("sp-inp sp-dec",A[d+t])}a+=`${m(f)}</tr></table>`,a+=`<div class="sp-hammer-bar">
      <button class="sp-hammer-btn" title="Mode emprunt">🔨</button>
      <button class="sp-undo-btn" title="Annuler le dernier emprunt">↩</button>
    </div>`,this.innerHTML=a,this.querySelectorAll(".sp-addend-row input[data-extra]").forEach(t=>{t.addEventListener("input",()=>{t.value.trim()!==""?u(t,!1):v(t),this._checkAutoValidate()})}),this.querySelectorAll(".sp-addend-row input:not([data-extra])").forEach(t=>{t.addEventListener("input",()=>this._checkAutoValidate())}),this._stage===2&&this._showStage2(),this._solVisible&&this._revealAll()}_showStage2(){this.querySelectorAll(".sp-stage2").forEach(e=>e.classList.add("sp-show")),this.querySelector(".sp-hammer-bar")?.classList.add("sp-show"),this._wireHammer()}_wireHammer(){const e=this.querySelector(".sp-hammer-btn"),s=this.querySelector(".sp-undo-btn");e&&(e.addEventListener("click",()=>{this._hammerMode=!this._hammerMode,e.classList.toggle("active",this._hammerMode),this._refreshHammerable()}),s.addEventListener("click",()=>this._undoBorrow()))}_refreshHammerable(){this.querySelectorAll(".sp-minuend-row .sp-given").forEach(e=>{const s=parseInt(e.dataset.digit??e.textContent),r=this._hammerMode&&s>0&&!e.dataset.hammered;e.classList.toggle("sp-hammerable",r),r?e.onclick=()=>this._doBorrow(parseInt(e.dataset.col)):e.onclick=null})}_doBorrow(e){const s=this.querySelector(`.sp-minuend-row .sp-given[data-col="${e}"]`);if(!s||s.dataset.hammered)return;const r=parseInt(s.dataset.digit),o=r-1;s.dataset.hammered="1",s.dataset.digit=String(o),s.classList.remove("sp-hammerable"),s.classList.add("sp-hammered"),s.onclick=null,s.innerHTML=`<span class="sp-struck">${r}</span><div class="sp-cell-wrap"><input class="sp-dec-inp" data-sol="${o}" maxlength="1" inputmode="numeric" autocomplete="off"><span class="vis-fb"></span></div>`;const i=this.querySelector(`.sp-inter[data-between="${e}-${e+1}"]`),p=s.querySelector(".sp-dec-inp");p.addEventListener("input",()=>{const d=parseInt(p.value),l=!isNaN(d)&&d===o;if(u(p,l),l&&i&&!i.classList.contains("sp-inter-active")){i.classList.add("sp-inter-active"),i.innerHTML='<input class="sp-one-inp" data-sol="1" maxlength="1" inputmode="numeric" autocomplete="off">';const h=i.querySelector(".sp-one-inp");h.addEventListener("input",()=>u(h,h.value.trim()==="1")),h.focus()}}),this._history.push({col:e,origDigit:r,td:s,interCell:i}),this._hammerMode=!1,this.querySelector(".sp-hammer-btn")?.classList.remove("active"),this._refreshHammerable(),p.focus()}_undoBorrow(){const e=this._history.pop();if(!e)return;const{col:s,origDigit:r,td:o,interCell:i}=e;o.dataset.hammered="",o.dataset.digit=String(r),o.classList.remove("sp-hammered"),o.innerHTML=String(r),i&&(i.classList.remove("sp-inter-active"),i.innerHTML=""),this._refreshHammerable()}_checkAutoValidate(){if(this._stage!==1)return;const e=this.querySelectorAll(".sp-addend-row input:not([data-extra])");Array.from(e).every(s=>s.value.trim()!=="")&&this._validateStage1()}validate(){this._stage===1?this._validateStage1():this._validateStage2()}_validateStage1(){let e=!0;this.querySelectorAll(".sp-addend-row[data-editable] input").forEach(s=>{const r=s.value.trim();if(s.dataset.extra)r!==""?(u(s,!1),e=!1):v(s);else{const o=parseInt(s.dataset.sol),i=r===""?null:parseInt(r);if(i===null){e=!1;return}const p=!isNaN(i)&&i===o;u(s,p),p||(e=!1)}}),e&&(this._stage=2,this._showStage2())}_validateStage2(){this.querySelectorAll(".sp-stage2 input, .sp-dec-inp, .sp-one-inp").forEach(e=>{const s=parseInt(e.dataset.sol),r=e.value.trim()===""?0:parseInt(e.value.trim());u(e,!isNaN(r)&&r===s)})}_revealAll(){this._stage=2,this._showStage2(),this.querySelectorAll(".sp-addend-row input").forEach(e=>{e.dataset.extra?(e.value="",v(e)):(e.value=e.dataset.sol,u(e,!0))}),this.querySelectorAll(".sp-stage2 input").forEach(e=>{e.value=e.dataset.sol,u(e,!0)})}toggleSolution(){return this._solVisible=!this._solVisible,this._solVisible?this._revealAll():(this._stage=1,this.querySelectorAll(".sp-stage2").forEach(e=>e.classList.remove("sp-show")),this.querySelectorAll("input").forEach(e=>{e.value="",v(e)})),this._solVisible}}customElements.get(L)||customElements.define(L,N);function O(c,e){const s=e.digits??3,r=e.decimals??0,o=10**r,i=10**Math.max(0,s-1),p=10**s-1,d=()=>{const _=Math.floor(Math.random()*(p-i+1))+i,y=r>0?Math.floor(Math.random()*o):0;return _*o+y};let l=d(),h=d();return l<h&&([l,h]=[h,l]),l===h&&(h=Math.max(i*o,h-o)),{...c,addends:[l,h],decimals:r}}export{j as defaultPosition,O as randomize};
