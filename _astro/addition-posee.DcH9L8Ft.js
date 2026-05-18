import{markInput as I,clearInput as q,ensureSharedStyles as C}from"./vis-input.C4J8oy6G.js";const j="south",E="math974-addition-posee",z=["u","d","c","m","dm","cm","M"],V=["d","c","m"],m=1,L=`
math974-addition-posee { display: inline-block; padding: 4px 0; }
.ap-title { font-size: 1.5rem; font-weight: 600; color: #334155; line-height: 1.5; margin-bottom: 6px; }
.ap-table { border-collapse: separate; border-spacing: 3px 3px; font-family: inherit; }
.ap-head {
  font-size: 0.72em; font-weight: 700; color: #9ca3af;
  text-align: center; padding: 0 2px 5px; border-bottom: 1px solid #e5e7eb;
}
.ap-head.ap-dec-head { color: #a78bfa; }
.ap-op {
  font-size: 1.15em; font-weight: 700; color: #374151;
  text-align: right; padding-right: 4px; min-width: 18px; vertical-align: middle;
}
.ap-op-ret { font-size: 0.7em; color: #9ca3af; font-style: italic; vertical-align: middle; }
.ap-given, .ap-blank {
  width: 34px; height: 34px; font-size: 1.15em; font-weight: 700; color: #1e293b;
  text-align: center; vertical-align: middle;
  background: #f1f5f9; border: 1.5px solid #e2e8f0; border-radius: 6px;
}
.ap-blank { background: transparent; border-color: transparent; }
.ap-comma-cell {
  text-align: center; vertical-align: bottom; padding-bottom: 4px;
  font-size: 1.4em; font-weight: 700; color: #374151; width: 12px;
}
.ap-cell-wrap { position: relative; display: inline-block; }
.ap-inp {
  display: block; width: 34px; height: 34px;
  text-align: center; font-size: 1.15em; font-weight: 700; font-family: inherit;
  border: 1.5px solid #d1d5db; border-radius: 6px;
  background: #fff; outline: none; box-sizing: border-box; padding: 0; color: #1e293b;
}
.ap-inp.ap-dec   { border-color: #ddd6fe; background: #faf5ff; }
.ap-inp.ap-extra { border-color: #e9ecef; background: #f8f9fa; }
.ap-inp:focus { border-color: #3b82f6; background: #eff6ff; }
.ap-ret-inp {
  display: block; width: 26px; height: 26px; margin: auto;
  text-align: center; font-size: 0.8em; font-weight: 700; font-family: inherit;
  border: 1.5px dashed #d1d5db; border-radius: 4px;
  background: #fefce8; outline: none; box-sizing: border-box; padding: 0; color: #78350f;
}
.ap-ret-inp.vis-inp-ok { border-style: solid; }
.ap-ret-inp.vis-inp-ko { border-style: solid; }
math974-addition-posee .vis-fb {
  position: absolute; top: 0; right: 2px;
  font-size: 0.55em; font-weight: 900; line-height: 1; pointer-events: none;
}
.ap-line-bar { border-top: 2.5px solid #374151; padding: 2px 0 0; }
.ap-stage2 { display: none; }
.ap-stage2.ap-show { display: table-row; }
`;function T(){if(C(),document.getElementById("ap-styles"))return;const i=document.createElement("style");i.id="ap-styles",i.textContent=L,document.head.appendChild(i)}function k(i,t){const n=String(Math.abs(Math.round(i)));return Array.from({length:t},(o,l)=>{const s=n.length-(t-l);return s>=0?parseInt(n[s]):null})}function P(i,t){const n=new Array(t).fill(0);let o=0;for(let l=t-1;l>=0;l--){const s=o+i.reduce((r,_)=>r+(k(_,t)[l]??0),0);o=Math.floor(s/10),l>0&&(n[l-1]=o)}return n}function D(i,t){if(t===0)return String(i);const n=10**t;return`${Math.floor(i/n)},${String(i%n).padStart(t,"0")}`}function H(i,t){const n=D(i,t),[o,l]=n.split(","),s=o.replace(/\B(?=(\d{3})+(?!\d))/g," ");return l!==void 0?`${s},${l}`:s}const y=I,w=q;function b(i,t,n=null,o=!1){const l=n!==null&&!o?` data-col="${n}"`:"";return`<td><div class="ap-cell-wrap"><input class="${i}${o?" ap-extra":""}" type="text" inputmode="numeric" maxlength="1"${o?' data-extra="true"':` data-sol="${t}"${l}`} autocomplete="off"><span class="vis-fb"></span></div></td>`}class O extends HTMLElement{static get observedAttributes(){return["addends","decimals"]}connectedCallback(){T(),this.dataset.placeMode="1",this._stage=1,this._solVisible=!1,this._render()}attributeChangedCallback(){this.isConnected&&(this._stage=1,this._solVisible=!1,this._render())}_addends(){try{return JSON.parse(this.getAttribute("addends")||"[]")}catch{return[]}}_decimals(){return Math.max(0,parseInt(this.getAttribute("decimals")||"0")||0)}_render(){const t=this._addends();if(!t.length){this.innerHTML="";return}const n=this._decimals(),o=t.reduce((e,x)=>e+x,0),l=String(Math.max(...t,o)).length,s=Math.max(1,l-n),r=n,_=P(t,l);this._numSc=l;const v=m+s+(r>0?1:0)+r+m,h=Array.from({length:s},(e,x)=>z[s-1-x]??""),f=Array.from({length:r},(e,x)=>V[x]??""),u=()=>'<td class="ap-blank"></td>',d=e=>u().repeat(e),p=()=>'<td class="ap-comma-cell">,</td>';let a=`<div class="ap-title">Pose et effectue : ${t.map(e=>H(e,n)).join(" + ")}</div><table class="ap-table">`;a+=`<tr><td class="ap-op"></td>${d(m)}`,h.forEach(e=>{a+=`<th class="ap-head">${e}</th>`}),r>0&&(a+='<th class="ap-head"></th>',f.forEach(e=>{a+=`<th class="ap-head ap-dec-head">${e}</th>`})),a+=`${d(m)}</tr>`,a+=`<tr class="ap-stage2"><td class="ap-op ap-op-ret">r.</td>${d(m)}`;for(let e=0;e<s;e++)a+=b("ap-ret-inp",_[e]);if(r>0){a+=u();for(let e=0;e<r;e++)a+=b("ap-ret-inp",_[s+e])}a+=`${d(m)}</tr>`,t.forEach((e,x)=>{const S=k(e,l),M=x>0?' data-editable="true"':"";if(a+=`<tr class="ap-addend-row"${M}><td class="ap-op">${x>0?"+":""}</td>`,x===0){a+=d(m);for(let c=0;c<s;c++){const g=S[c];a+=g===null?u():`<td class="ap-given">${g}</td>`}if(r>0){a+=p();for(let c=0;c<r;c++){const g=S[s+c];a+=g===null?u():`<td class="ap-given">${g}</td>`}}a+=d(m)}else{a+=S[0]===null?u():b("ap-inp",null,null,!0);for(let c=0;c<s;c++){const g=S[c];a+=g===null?b("ap-inp",null,null,!0):b("ap-inp",g,c)}if(r>0){a+=p();for(let c=0;c<r;c++){const g=S[s+c];a+=g===null?b("ap-inp ap-dec",null,null,!0):b("ap-inp ap-dec",g,s+c)}}a+=b("ap-inp",null,null,!0)}a+="</tr>"}),a+=`<tr class="ap-stage2"><td></td><td colspan="${v}" class="ap-line-bar"></td></tr>`;const $=k(o,l).map(e=>e??0);a+=`<tr class="ap-stage2"><td class="ap-op">=</td>${d(m)}`;for(let e=0;e<s;e++)a+=b("ap-inp",$[e]);if(r>0){a+=p();for(let e=0;e<r;e++)a+=b("ap-inp ap-dec",$[s+e])}a+=`${d(m)}</tr></table>`,this.innerHTML=a,this.querySelectorAll(".ap-addend-row input[data-extra]").forEach(e=>{e.addEventListener("input",()=>{e.value.trim()!==""?y(e,!1):w(e),this._checkAutoValidate()})}),this.querySelectorAll(".ap-addend-row input:not([data-extra])").forEach(e=>{e.addEventListener("input",()=>this._checkAutoValidate())}),this._stage===2&&this._showStage2(),this._solVisible&&this._revealAll()}_showStage2(){this.querySelectorAll(".ap-stage2").forEach(t=>t.classList.add("ap-show"))}_checkAutoValidate(){if(this._stage!==1)return;const t=this.querySelectorAll(".ap-addend-row input:not([data-extra])");Array.from(t).every(n=>n.value.trim()!=="")&&this._validateStage1()}validate(){this._stage===1?this._validateStage1():this._validateStage2()}_validateStage1(){const n=this._addends().slice(1),o=this._numSc,s=Array.from(this.querySelectorAll(".ap-addend-row[data-editable]")).map(h=>{const f=Array.from(h.querySelectorAll("input:not([data-extra])"));let u=0,d=!0;for(const p of f){const A=p.value.trim()===""?null:parseInt(p.value.trim());if(A===null){d=!1;break}u+=A*10**(o-1-parseInt(p.dataset.col))}return{row:h,reqInputs:f,num:d?u:null}}),r=new Set,_=s.map(({num:h})=>{if(h===null)return null;const f=n.findIndex((u,d)=>!r.has(d)&&u===h);return f!==-1?(r.add(f),!0):!1});let v=!0;s.forEach(({row:h,reqInputs:f},u)=>{h.querySelectorAll("input[data-extra]").forEach(p=>{p.value.trim()!==""?(y(p,!1),v=!1):w(p)});const d=_[u];if(d===null){v=!1;return}f.forEach(p=>y(p,d)),d||(v=!1)}),v&&(this._stage=2,this._showStage2())}_validateStage2(){this.querySelectorAll(".ap-stage2 input").forEach(t=>{const n=parseInt(t.dataset.sol),o=t.value.trim()===""?0:parseInt(t.value.trim());y(t,!isNaN(o)&&o===n)})}_revealAll(){this._stage=2,this._showStage2(),this.querySelectorAll(".ap-addend-row input").forEach(t=>{t.dataset.extra?(t.value="",w(t)):(t.value=t.dataset.sol,y(t,!0))}),this.querySelectorAll(".ap-stage2 input").forEach(t=>{t.value=t.dataset.sol,y(t,!0)})}toggleSolution(){return this._solVisible=!this._solVisible,this._solVisible?this._revealAll():(this._stage=1,this.querySelectorAll(".ap-stage2").forEach(t=>t.classList.remove("ap-show")),this.querySelectorAll("input").forEach(t=>{t.value="",w(t)})),this._solVisible}}customElements.get(E)||customElements.define(E,O);function B(i,t){const n=t.count??2,o=t.digits??3,l=t.decimals??0,s=10**l,r=10**Math.max(0,o-1),_=10**o-1,v=Array.from({length:n},()=>{const h=Math.floor(Math.random()*(_-r+1))+r,f=l>0?Math.floor(Math.random()*s):0;return h*s+f});return{...i,addends:v,decimals:l}}export{j as defaultPosition,B as randomize};
