import{ensureSharedStyles as y}from"./vis-input.0hz6aJN5.js";import{parseRange as k,fmt as w}from"./utils.MftNdmoG.js";import{d as x}from"./fullscreen-viewer.B97TysPw.js";import"./editor.CJZspgfY.js";const H="south",N=!0;function C(l){return l.replace(/\s/g,"").replace(",",".")}function r(l,e){const t=parseFloat(C(l));return!isNaN(t)&&Math.abs(t-e)<.01}const U=["dam","daL","min","m²","m³","°C","kg","mg","km","hm","cm","mm","dm","kL","hL","dL","cL","mL","Hz","g","t","m","L","A","V","W","h","s"].sort((l,e)=>e.length-l.length);function E(l){if(!l)return"";const e=String(l).trim();for(const i of U)if(e===i||e.startsWith(i)&&/[\s ]/.test(e.charAt(i.length)))return i;const t=e.match(/[A-Za-zÀ-ÿ]/);return t?t[0].toLowerCase():e.charAt(0)}const R=`
math974-retour-unite {
  display: block;
  font-family: inherit;
  user-select: none;
  -webkit-user-select: none;
}
.ru-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  padding: 8px 0;
}
.ru-brk {
  flex: 0 0 56px;
  width: 56px;
  height: 156px;
}
.ru-table {
  border-collapse: collapse;
  flex: 0 0 auto;
}
.ru-cell {
  border: none;
  padding: 0 8px;
  text-align: center;
  height: 52px;
  min-width: 80px;
  box-sizing: border-box;
  vertical-align: middle;
  white-space: nowrap;
}
.ru-cell.locked {
  opacity: 0.4;
}
.ru-sep {
  border: none;
  padding: 0 10px;
  font-size: 1.3em;
  color: #64748b;
  height: 52px;
  vertical-align: middle;
  text-align: center;
}
.ru-input {
  background: transparent;
  border: none;
  border-bottom: 2px solid #94a3b8;
  outline: none;
  font-size: 1em;
  font-weight: 700;
  font-family: inherit;
  text-align: center;
  width: 5ch;
  color: #0f172a;
  padding: 2px 0;
}
.ru-input:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.ru-fb {
  font-size: 0.85em;
  font-weight: 700;
  margin-left: 2px;
}
.ru-fb.ok  { color: #16a34a; }
.ru-fb.ko  { color: #dc2626; }
.ru-inp-ok {
  border-bottom-color: #16a34a !important;
  color: #15803d !important;
}
.ru-inp-ko {
  border-bottom-color: #dc2626 !important;
  color: #dc2626 !important;
}
`;function M(){if(document.getElementById("ru-styles"))return;const l=document.createElement("style");l.id="ru-styles",l.textContent=R,document.head.appendChild(l)}class S extends HTMLElement{static get observedAttributes(){return["a","b","e","unit-label","value-label","which-unit","direct"]}connectedCallback(){y(),M(),this.dataset.placeMode="1",this._render()}attributeChangedCallback(){this.isConnected&&this._render()}_cfg(){const e=parseFloat(this.getAttribute("a")),t=parseFloat(this.getAttribute("b")),i=parseFloat(this.getAttribute("e")),a=this.getAttribute("unit-label")||"",n=this.getAttribute("value-label")||"€",c=e&&t?t/e:null,u=c!=null&&i?i*c:null;return{a:e,b:t,e:i,unitLabel:a,valueLabel:n,unitPrice:c,answer:u}}_render(){const{a:e,b:t,e:i,unitLabel:a,valueLabel:n,unitPrice:c,answer:u}=this._cfg();this._phase=0,this._showSol=!1,this._direct=this.getAttribute("direct")==="true",this.innerHTML="";const s=document.createElement("div");s.className="ru-wrap";const h=this._makeSvg("left"),_=this._makeTable(e,t,i,a,n,c,u),p=this._makeSvg("right");h.style.display="none",p.style.display="none",s.appendChild(h),s.appendChild(_),s.appendChild(p),this.appendChild(s),this._svgLeft=h,this._svgRight=p}_makeSvg(e){const t=document.createElementNS("http://www.w3.org/2000/svg","svg");return t.setAttribute("width","56"),t.setAttribute("height","104"),t.setAttribute("viewBox","0 0 56 104"),t.style.flexShrink="0",t.dataset.side=e,t}_makeTable(e,t,i,a,n,c,u){const s=document.createElement("table");s.className="ru-table";const h=E(a),_=document.createElement("tr");_.innerHTML=`
      <td class="ru-cell">
        <input class="ru-input" id="inp-a" type="text" autocomplete="off" placeholder="?">
        <span class="ru-lbl">&nbsp;${h}</span>
        <span class="ru-fb" id="fb-a"></span>
      </td>
      <td class="ru-sep">→</td>
      <td class="ru-cell">
        <input class="ru-input" id="inp-b" type="text" autocomplete="off" placeholder="?">
        <span class="ru-lbl">&nbsp;${n}</span>
        <span class="ru-fb" id="fb-b"></span>
      </td>`;const p=document.createElement("tr");p.id="row-unit",p.style.display="none",p.innerHTML=`
      <td class="ru-cell">
        <input class="ru-input" id="inp-unit-qty" type="text" autocomplete="off" placeholder="?">
        <span class="ru-lbl">&nbsp;${h}</span>
        <span class="ru-fb" id="fb-unit-qty"></span>
      </td>
      <td class="ru-sep">→</td>
      <td class="ru-cell locked" id="cell-unit">
        <input class="ru-input" id="inp-unit" type="text" autocomplete="off" placeholder="?" disabled>
        <span class="ru-lbl">&nbsp;${n}</span>
        <span class="ru-fb" id="fb-unit"></span>
      </td>`;const f=document.createElement("tbody");f.appendChild(_),f.appendChild(p);let b=null;this._direct||(b=document.createElement("tr"),b.innerHTML=`
        <td class="ru-cell">
          <input class="ru-input" id="inp-e" type="text" autocomplete="off" placeholder="?">
          <span class="ru-lbl">&nbsp;${h}</span>
          <span class="ru-fb" id="fb-e"></span>
        </td>
        <td class="ru-sep">→</td>
        <td class="ru-cell locked" id="cell-answer">
          <input class="ru-input" id="inp-answer" type="text" autocomplete="off" placeholder="?" disabled>
          <span class="ru-lbl">&nbsp;${n}</span>
          <span class="ru-fb" id="fb-answer"></span>
        </td>`,f.appendChild(b)),s.appendChild(f),this._inpA=s.querySelector("#inp-a"),this._inpB=s.querySelector("#inp-b"),this._inpE=s.querySelector("#inp-e"),this._fbA=s.querySelector("#fb-a"),this._fbB=s.querySelector("#fb-b"),this._fbE=s.querySelector("#fb-e"),this._row1=p,this._inpUnitQty=s.querySelector("#inp-unit-qty"),this._fbUnitQty=s.querySelector("#fb-unit-qty"),this._inpUnit=s.querySelector("#inp-unit"),this._fbUnit=s.querySelector("#fb-unit"),this._inpAnswer=s.querySelector("#inp-answer"),this._fbAnswer=s.querySelector("#fb-answer"),this._cellAnswer=s.querySelector("#cell-answer");const m=()=>this._checkABE(),v=[[this._inpA,this._fbA],[this._inpB,this._fbB]];this._direct||v.push([this._inpE,this._fbE]);for(const[o,d]of v)o.addEventListener("input",()=>{o.classList.remove("ru-inp-ok","ru-inp-ko"),d.textContent="",d.className="ru-fb"}),o.addEventListener("blur",m);return this._inpUnitQty.addEventListener("input",()=>{this._inpUnitQty.classList.remove("ru-inp-ok","ru-inp-ko"),this._fbUnitQty.textContent="",this._fbUnitQty.className="ru-fb"}),this._inpUnitQty.addEventListener("blur",()=>this._checkUnitQty()),this._inpUnit.addEventListener("input",()=>{this._inpUnit.classList.remove("ru-inp-ok","ru-inp-ko"),this._fbUnit.textContent="",this._fbUnit.className="ru-fb"}),this._inpUnit.addEventListener("blur",()=>this._checkUnit()),this._inpAnswer&&(this._inpAnswer.addEventListener("input",()=>{this._inpAnswer.classList.remove("ru-inp-ok","ru-inp-ko"),this._fbAnswer.textContent="",this._fbAnswer.className="ru-fb"}),this._inpAnswer.addEventListener("blur",()=>{const{answer:o}=this._cfg(),d=this._inpAnswer.value,A=r(d,o);this._markInp(this._inpAnswer,this._fbAnswer,A,d.trim()!==""),A&&this._autoValidateIfDone()})),s.querySelectorAll(".ru-input").forEach(o=>{o.addEventListener("keydown",d=>{d.key==="Enter"&&(d.preventDefault(),o.blur())})}),s}_checkABE(){const{a:e,b:t,e:i}=this._cfg(),a=this._inpA.value.trim()!==""&&r(this._inpA.value,e),n=this._inpB.value.trim()!==""&&r(this._inpB.value,t);this._markInp(this._inpA,this._fbA,a,this._inpA.value.trim()!==""),this._markInp(this._inpB,this._fbB,n,this._inpB.value.trim()!=="");let c=!0;if(this._direct||(c=this._inpE.value.trim()!==""&&r(this._inpE.value,i),this._markInp(this._inpE,this._fbE,c,this._inpE.value.trim()!=="")),a&&n&&c&&this._phase===0){this._phase=1,this._row1.style.display="";const u=this._direct?104:156;for(const h of[this._svgLeft,this._svgRight])h.setAttribute("height",String(u)),h.setAttribute("viewBox",`0 0 56 ${u}`);this.getAttribute("which-unit")==="true"||this._inpUnitQty.focus()}}_checkUnitQty(){const e=this._inpUnitQty.value.trim()==="1";this._markInp(this._inpUnitQty,this._fbUnitQty,e,this._inpUnitQty.value.trim()!==""),e&&this._phase===1&&(this._phase=2,this._showDivArrowLeft(),this._inpDivLeft.focus())}_showDivArrowLeft(){this._svgLeft.style.display="";const{inp:t,markFb:i}=this._addCurveArrow(this._svgLeft,52/2,52*1.5-8,"÷","#0ea5e9","","left");this._inpDivLeft=t,this._fbDivLeft=i,t.addEventListener("blur",()=>this._checkDivLeft())}_checkDivLeft(){const{a:e}=this._cfg(),t=r(this._inpDivLeft.value,e);this._fbDivLeft?.(t),t&&this._phase===2&&(this._phase=3,this._showDivArrowRight(),this._inpDivRight.focus())}_showDivArrowRight(){this._svgRight.style.display="";const{inp:t,markFb:i}=this._addCurveArrow(this._svgRight,52/2,52*1.5-8,"÷","#0ea5e9","","right");this._inpDivRight=t,this._fbDivRight=i,t.addEventListener("blur",()=>this._checkDivRight())}_checkDivRight(){const{a:e}=this._cfg(),t=r(this._inpDivRight.value,e);this._fbDivRight?.(t),t&&r(this._inpDivLeft.value,e)&&(this.querySelector("#cell-unit").classList.remove("locked"),this._inpUnit.disabled=!1,this._inpUnit.focus())}_addCurveArrow(e,t,i,a,n,c,u){const s=(t+i)/2,h="http://www.w3.org/2000/svg",_=u==="left"?8:48,p=u==="left"?50:6;this._svgLine(e,h,_,t,p,t,n),this._svgLine(e,h,_,t,_,i,n),this._svgLine(e,h,_,i,p,i,n);const f=document.createElementNS(h,"polyline"),b=u==="left"?`${p-6},${i-4} ${p},${i} ${p-6},${i+4}`:`${p+6},${i-4} ${p},${i} ${p+6},${i+4}`;f.setAttribute("points",b),f.setAttribute("stroke",n),f.setAttribute("stroke-width","2"),f.setAttribute("fill","none"),f.setAttribute("stroke-linecap","round"),f.setAttribute("stroke-linejoin","round"),e.appendChild(f);const m=document.createElementNS(h,"foreignObject");m.setAttribute("x","11"),m.setAttribute("y",String(s-11)),m.setAttribute("width","42"),m.setAttribute("height","22");const v=document.createElement("div");v.style.cssText=`display:flex;align-items:center;gap:2px;font-size:11px;font-weight:700;color:${n};font-family:inherit;white-space:nowrap;`,v.appendChild(document.createTextNode(a));const o=document.createElement("input");o.type="text",o.placeholder="?",o.style.cssText=`width:2.5ch;border:none;border-bottom:2px solid ${n};background:transparent;font-size:11px;font-weight:700;color:${n};font-family:inherit;text-align:center;outline:none;padding:0;`;const d=document.createElement("span");return d.style.cssText="font-size:9px;font-weight:700;",v.appendChild(o),v.appendChild(d),m.appendChild(v),e.appendChild(m),o.addEventListener("input",()=>{o.style.borderBottomColor=n,o.style.color=n,d.textContent=""}),o.addEventListener("keydown",g=>{g.key==="Enter"&&(g.preventDefault(),o.blur())}),{inp:o,markFb:g=>{o.style.borderBottomColor=g?"#16a34a":"#dc2626",o.style.color=g?"#16a34a":"#dc2626",d.textContent=g?"😀":"😞",d.style.color=g?"#16a34a":"#dc2626"}}}_showMultArrowLeft(){const{inp:t,markFb:i}=this._addCurveArrow(this._svgLeft,86,130,"×","#16a34a","arr-mul-l","left");this._inpMulLeft=t,this._fbMulLeft=i,t.addEventListener("blur",()=>this._checkMultLeft())}_checkMultLeft(){const{e}=this._cfg(),t=r(this._inpMulLeft.value,e);this._fbMulLeft?.(t),t&&this._phase===4&&(this._phase=5,this._showMultArrowRight(),this._inpMulRight.focus())}_showMultArrowRight(){const{inp:t,markFb:i}=this._addCurveArrow(this._svgRight,86,130,"×","#16a34a","arr-mul-r","right");this._inpMulRight=t,this._fbMulRight=i,t.addEventListener("blur",()=>this._checkMultRight())}_checkMultRight(){const{e}=this._cfg(),t=r(this._inpMulRight.value,e);this._fbMulRight?.(t),t&&r(this._inpMulLeft.value,e)&&this._unlockAnswer()}_checkUnit(){const{unitPrice:e}=this._cfg();if(e==null)return!1;const t=this._inpUnit.value,i=t.trim()!==""&&r(t,e);return this._markInp(this._inpUnit,this._fbUnit,i,t.trim()!==""),i&&this._phase===3&&!this._direct&&(this._phase=4,this._showMultArrowLeft(),this._inpMulLeft.focus()),i&&this._direct&&this._autoValidateIfDone(),i}_autoValidateIfDone(){if(!this._isAllCorrect())return;const e=this.closest(".q-card"),t=e?.querySelector(".btn-validate");t&&!e.dataset.celebrated&&setTimeout(()=>t.click(),80)}_isAllCorrect(){const{a:e,b:t,e:i,unitPrice:a,answer:n}=this._cfg();return!r(this._inpA?.value,e)||!r(this._inpB?.value,t)||!this._direct&&!r(this._inpE?.value,i)||this._inpUnitQty?.value?.trim()!=="1"||!this._inpDivLeft||!r(this._inpDivLeft.value,e)||!this._inpDivRight||!r(this._inpDivRight.value,e)||!r(this._inpUnit?.value,a)?!1:this._direct?!0:!this._inpMulLeft||!r(this._inpMulLeft.value,i)||!this._inpMulRight||!r(this._inpMulRight.value,i)?!1:r(this._inpAnswer?.value,n)}getCurrentPhase(){const{a:e,b:t,e:i,unitPrice:a}=this._cfg();return!r(this._inpA?.value,e)||!r(this._inpB?.value,t)||!this._direct&&!r(this._inpE?.value,i)?"initial":this._inpUnitQty?.value?.trim()!=="1"?"unite":!this._inpDivLeft||!r(this._inpDivLeft.value,e)?"div_gauche":!this._inpDivRight||!r(this._inpDivRight.value,e)?"div_droite":r(this._inpUnit?.value,a)?this._direct?"done":!this._inpMulLeft||!r(this._inpMulLeft.value,i)?"mult_gauche":!this._inpMulRight||!r(this._inpMulRight.value,i)?"mult_droite":this._isAllCorrect()?"done":"reponse_finale":"prix_unitaire"}_markInp(e,t,i,a){e.classList.remove("ru-inp-ok","ru-inp-ko"),t.className="ru-fb",t.textContent="",a&&(e.classList.add(i?"ru-inp-ok":"ru-inp-ko"),t.classList.add(i?"ok":"ko"),t.textContent=i?"😀":"😞")}_unlockAnswer(){this._inpAnswer.disabled=!1,this._cellAnswer.classList.remove("locked"),this._inpAnswer.focus()}_svgLine(e,t,i,a,n,c,u){const s=document.createElementNS(t,"line");s.setAttribute("x1",i),s.setAttribute("y1",a),s.setAttribute("x2",n),s.setAttribute("y2",c),s.setAttribute("stroke",u),s.setAttribute("stroke-width","2"),s.setAttribute("stroke-linecap","round"),e.appendChild(s)}_forceMarkInp(e,t,i){e.classList.remove("ru-inp-ok","ru-inp-ko"),e.classList.add(i?"ru-inp-ok":"ru-inp-ko"),t.className=`ru-fb ${i?"ok":"ko"}`,t.textContent=i?"😀":"😞"}validate(){const{a:e,b:t,e:i,answer:a}=this._cfg(),n=r(this._inpA.value,e),c=r(this._inpB.value,t);this._forceMarkInp(this._inpA,this._fbA,n),this._forceMarkInp(this._inpB,this._fbB,c);let u=!0;if(this._direct||(u=r(this._inpE.value,i),this._forceMarkInp(this._inpE,this._fbE,u)),n&&c&&u&&this._phase===0){this._phase=1,this._row1.style.display="";const s=this._direct?104:156;for(const _ of[this._svgLeft,this._svgRight])_.setAttribute("height",String(s)),_.setAttribute("viewBox",`0 0 56 ${s}`);this.getAttribute("which-unit")==="true"||this._inpUnitQty.focus()}if(this._phase===0)return this._isAllCorrect();if(this._phase===1)return this._checkUnitQty(),this._isAllCorrect();if(this._phase===2)return this._inpDivLeft&&this._checkDivLeft(),this._isAllCorrect();if(this._phase===3)return this._inpDivRight&&this._checkDivRight(),this._inpUnit.disabled||this._checkUnit(),this._isAllCorrect();if(this._direct)return this._isAllCorrect();if(this._phase===4)return this._inpMulLeft&&this._checkMultLeft(),this._isAllCorrect();if(this._inpMulRight&&this._checkMultRight(),!this._inpAnswer.disabled){const s=this._inpAnswer.value,h=s.trim()!==""&&a!=null&&r(s,a);this._forceMarkInp(this._inpAnswer,this._fbAnswer,h)}return this._isAllCorrect()}toggleSolution(e){const{unitPrice:t,answer:i}=this._cfg();if(e!==void 0?e:!this._showSol){this._savedUnit=this._inpUnit.value,this._direct||(this._savedAnswer=this._inpAnswer.value),this._inpUnit.disabled=!1;const n=this.querySelector("#cell-unit");n&&n.classList.remove("locked"),this._inpUnit.value=w(t),this._markInp(this._inpUnit,this._fbUnit,!0,!0),this._direct||(this._phase===0&&(this._phase=1,this._unlockAnswer()),this._inpAnswer.value=w(i),this._markInp(this._inpAnswer,this._fbAnswer,!0,!0)),this._showSol=!0}else this._inpUnit.value=this._savedUnit??"",this._inpUnit.classList.remove("ru-inp-ok","ru-inp-ko"),this._fbUnit.textContent="",this._fbUnit.className="ru-fb",this._direct||(this._inpAnswer.value=this._savedAnswer??"",this._inpAnswer.classList.remove("ru-inp-ok","ru-inp-ko"),this._fbAnswer.textContent="",this._fbAnswer.className="ru-fb",this._phase===0&&(this._inpAnswer.disabled=!0,this._cellAnswer.classList.add("locked"))),this._showSol=!1}}customElements.get("math974-retour-unite")||customElements.define("math974-retour-unite",S);function D(l){return l?l.charAt(0).toUpperCase()+l.slice(1):""}function $(){const l=["fruits","poissons","epicerie","transport"].flatMap(x);return l.length?l[Math.floor(Math.random()*l.length)]:null}const L={standard:{a:"2..6",p:"2,3,4,5,6,8",e:"3..12"},decimal:{a:"2,4,6",p:"1.5,2.5,3.5,4.5,5.5,6.5,7.5",e:"3..12"}};function B(l,e,t){const i=e?.direct===!0||l?.direct==="true",a=e?.decimal===!0||l?.decimal==="true",n=$();if(!n)return l;const c=n.plur,u=a?L.decimal:L.standard,s=k(e?.a??u.a),h=k(e?.p??u.p),_=s*h,p=n.lieu?D(n.lieu)+", ":"",f=t?.content;if(i){const d=f||`${p}**${s} ${c}** coûtent **${w(_)} €**. Quel est le prix unitaire ?`;return{...l,direct:"true",a:s,b:_,p:h,ctx:n,"unit-label":c,"value-label":"€",content:d}}let b,m=0;do b=k(e?.e??u.e),m++;while(b===s&&m<20);const v=b*h,o=f||`${p}**${s} ${c}** coûtent **${w(_)} €**. Combien coûtent **${b} ${c}** ?`;return{...l,a:s,b:_,e:b,p:h,answer:v,ctx:n,"unit-label":c,"value-label":"€",content:o}}export{N as autoScale,H as defaultPosition,B as randomize};
