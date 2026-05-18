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
`;function T(){if(C(),document.getElementById("ap-styles"))return;const i=document.createElement("style");i.id="ap-styles",i.textContent=L,document.head.appendChild(i)}function k(i,t){const n=String(Math.abs(Math.round(i)));return Array.from({length:t},(r,l)=>{const a=n.length-(t-l);return a>=0?parseInt(n[a]):null})}function P(i,t){const n=new Array(t).fill(0);let r=0;for(let l=t-1;l>=0;l--){const a=r+i.reduce((o,_)=>o+(k(_,t)[l]??0),0);r=Math.floor(a/10),l>0&&(n[l-1]=r)}return n}function O(i,t){if(t===0)return String(i);const n=10**t;return`${Math.floor(i/n)},${String(i%n).padStart(t,"0")}`}function D(i,t){const n=O(i,t),[r,l]=n.split(","),a=r.replace(/\B(?=(\d{3})+(?!\d))/g," ");return l!==void 0?`${a},${l}`:a}const y=I,w=q;function b(i,t,n=null,r=!1){const l=n!==null&&!r?` data-col="${n}"`:"";return`<td><div class="ap-cell-wrap"><input class="${i}${r?" ap-extra":""}" type="text" inputmode="numeric" maxlength="1"${r?' data-extra="true"':` data-sol="${t}"${l}`} autocomplete="off"><span class="vis-fb"></span></div></td>`}class H extends HTMLElement{static get observedAttributes(){return["addends","decimals"]}connectedCallback(){T(),this.dataset.placeMode="1",this._stage=1,this._solVisible=!1,this._render()}attributeChangedCallback(){this.isConnected&&(this._stage=1,this._solVisible=!1,this._render())}_addends(){try{return JSON.parse(this.getAttribute("addends")||"[]")}catch{return[]}}_decimals(){return Math.max(0,parseInt(this.getAttribute("decimals")||"0")||0)}_render(){const t=this._addends();if(!t.length){this.innerHTML="";return}const n=this._decimals(),r=t.reduce((e,x)=>e+x,0),l=String(Math.max(...t,r)).length,a=Math.max(1,l-n),o=n,_=P(t,l);this._numSc=l;const v=m+a+(o>0?1:0)+o+m,f=Array.from({length:a},(e,x)=>z[a-1-x]??""),h=Array.from({length:o},(e,x)=>V[x]??""),u=()=>'<td class="ap-blank"></td>',d=e=>u().repeat(e),p=()=>'<td class="ap-comma-cell">,</td>';let s=`<div class="ap-title">Pose et effectue : ${t.map(e=>D(e,n)).join(" + ")}</div><table class="ap-table">`;s+=`<tr><td class="ap-op"></td>${d(m)}`,f.forEach(e=>{s+=`<th class="ap-head">${e}</th>`}),o>0&&(s+='<th class="ap-head"></th>',h.forEach(e=>{s+=`<th class="ap-head ap-dec-head">${e}</th>`})),s+=`${d(m)}</tr>`,s+=`<tr class="ap-stage2"><td class="ap-op ap-op-ret">r.</td>${d(m)}`;for(let e=0;e<a;e++)s+=b("ap-ret-inp",_[e]);if(o>0){s+=u();for(let e=0;e<o;e++)s+=b("ap-ret-inp",_[a+e])}s+=`${d(m)}</tr>`,t.forEach((e,x)=>{const S=k(e,l),M=x>0?' data-editable="true"':"";if(s+=`<tr class="ap-addend-row"${M}><td class="ap-op">${x>0?"+":""}</td>`,x===0){s+=d(m);for(let c=0;c<a;c++){const g=S[c];s+=g===null?u():`<td class="ap-given">${g}</td>`}if(o>0){s+=p();for(let c=0;c<o;c++){const g=S[a+c];s+=g===null?u():`<td class="ap-given">${g}</td>`}}s+=d(m)}else{s+=S[0]===null?u():b("ap-inp",null,null,!0);for(let c=0;c<a;c++){const g=S[c];s+=g===null?b("ap-inp",null,null,!0):b("ap-inp",g,c)}if(o>0){s+=p();for(let c=0;c<o;c++){const g=S[a+c];s+=g===null?b("ap-inp ap-dec",null,null,!0):b("ap-inp ap-dec",g,a+c)}}s+=b("ap-inp",null,null,!0)}s+="</tr>"}),s+=`<tr class="ap-stage2"><td></td><td colspan="${v}" class="ap-line-bar"></td></tr>`;const $=k(r,l).map(e=>e??0);s+=`<tr class="ap-stage2"><td class="ap-op">=</td>${d(m)}`;for(let e=0;e<a;e++)s+=b("ap-inp",$[e]);if(o>0){s+=p();for(let e=0;e<o;e++)s+=b("ap-inp ap-dec",$[a+e])}s+=`${d(m)}</tr></table>`,this.innerHTML=s,this.querySelectorAll(".ap-addend-row input[data-extra]").forEach(e=>{e.addEventListener("input",()=>{e.value.trim()!==""?y(e,!1):w(e),this._checkAutoValidate()})}),this.querySelectorAll(".ap-addend-row input:not([data-extra])").forEach(e=>{e.addEventListener("input",()=>this._checkAutoValidate())}),this._stage===2&&this._showStage2(),this._solVisible&&this._revealAll()}_showStage2(){this.querySelectorAll(".ap-stage2").forEach(t=>t.classList.add("ap-show"))}_checkAutoValidate(){if(this._stage!==1)return;const t=this.querySelectorAll(".ap-addend-row input:not([data-extra])");Array.from(t).every(n=>n.value.trim()!=="")&&this._validateStage1()}validate(){return this._stage===1?(this._validateStage1(),!1):this._validateStage2()}_validateStage1(){const n=this._addends().slice(1),r=this._numSc,a=Array.from(this.querySelectorAll(".ap-addend-row[data-editable]")).map(f=>{const h=Array.from(f.querySelectorAll("input:not([data-extra])"));let u=0,d=!0;for(const p of h){const A=p.value.trim()===""?null:parseInt(p.value.trim());if(A===null){d=!1;break}u+=A*10**(r-1-parseInt(p.dataset.col))}return{row:f,reqInputs:h,num:d?u:null}}),o=new Set,_=a.map(({num:f})=>{if(f===null)return null;const h=n.findIndex((u,d)=>!o.has(d)&&u===f);return h!==-1?(o.add(h),!0):!1});let v=!0;a.forEach(({row:f,reqInputs:h},u)=>{f.querySelectorAll("input[data-extra]").forEach(p=>{p.value.trim()!==""?(y(p,!1),v=!1):w(p)});const d=_[u];if(d===null){v=!1;return}h.forEach(p=>y(p,d)),d||(v=!1)}),v&&(this._stage=2,this._showStage2())}_validateStage2(){let t=!0;return this.querySelectorAll(".ap-stage2 input").forEach(n=>{const r=parseInt(n.dataset.sol),l=n.value.trim()===""?0:parseInt(n.value.trim()),a=!isNaN(l)&&l===r;y(n,a),a||(t=!1)}),t}_revealAll(){this._stage=2,this._showStage2(),this.querySelectorAll(".ap-addend-row input").forEach(t=>{t.dataset.extra?(t.value="",w(t)):(t.value=t.dataset.sol,y(t,!0))}),this.querySelectorAll(".ap-stage2 input").forEach(t=>{t.value=t.dataset.sol,y(t,!0)})}toggleSolution(){return this._solVisible=!this._solVisible,this._solVisible?this._revealAll():(this._stage=1,this.querySelectorAll(".ap-stage2").forEach(t=>t.classList.remove("ap-show")),this.querySelectorAll("input").forEach(t=>{t.value="",w(t)})),this._solVisible}}customElements.get(E)||customElements.define(E,H);function B(i,t){const n=t.count??2,r=t.digits??3,l=t.decimals??0,a=10**l,o=10**Math.max(0,r-1),_=10**r-1,v=Array.from({length:n},()=>{const f=Math.floor(Math.random()*(_-o+1))+o,h=l>0?Math.floor(Math.random()*a):0;return f*a+h});return{...i,addends:v,decimals:l}}export{j as defaultPosition,B as randomize};
