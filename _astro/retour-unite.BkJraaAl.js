import{ensureSharedStyles as A}from"./vis-input.B9XJnOtJ.js";import{fmt as w}from"./utils.MftNdmoG.js";const R="south";function L(f){return f.replace(/\s/g,"").replace(",",".")}function u(f,e){const t=parseFloat(L(f));return!isNaN(t)&&Math.abs(t-e)<.01}const y=`
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
`;function x(){if(document.getElementById("ru-styles"))return;const f=document.createElement("style");f.id="ru-styles",f.textContent=y,document.head.appendChild(f)}class E extends HTMLElement{static get observedAttributes(){return["a","b","e","unit-label","value-label","which-unit"]}connectedCallback(){A(),x(),this.dataset.placeMode="1",this._render()}attributeChangedCallback(){this.isConnected&&this._render()}_cfg(){const e=parseFloat(this.getAttribute("a")),t=parseFloat(this.getAttribute("b")),i=parseFloat(this.getAttribute("e")),r=this.getAttribute("unit-label")||"",n=this.getAttribute("value-label")||"€",l=e&&t?t/e:null,o=l!=null&&i?i*l:null;return{a:e,b:t,e:i,unitLabel:r,valueLabel:n,unitPrice:l,answer:o}}_render(){const{a:e,b:t,e:i,unitLabel:r,valueLabel:n,unitPrice:l,answer:o}=this._cfg();this._phase=0,this._showSol=!1,this.innerHTML="";const s=document.createElement("div");s.className="ru-wrap";const a=this._makeSvg("left"),c=this._makeTable(e,t,i,r,n,l,o),h=this._makeSvg("right");a.style.display="none",h.style.display="none",s.appendChild(a),s.appendChild(c),s.appendChild(h),this.appendChild(s),this._svgLeft=a,this._svgRight=h}_makeSvg(e){const t=document.createElementNS("http://www.w3.org/2000/svg","svg");return t.setAttribute("width","56"),t.setAttribute("height","104"),t.setAttribute("viewBox","0 0 56 104"),t.style.flexShrink="0",t.dataset.side=e,t}_makeTable(e,t,i,r,n,l,o){const s=document.createElement("table");s.className="ru-table";const a=document.createElement("tr");a.innerHTML=`
      <td class="ru-cell">
        <input class="ru-input" id="inp-a" type="text" autocomplete="off" placeholder="?">
        <span class="ru-lbl">&nbsp;${r}</span>
        <span class="ru-fb" id="fb-a"></span>
      </td>
      <td class="ru-sep">→</td>
      <td class="ru-cell">
        <input class="ru-input" id="inp-b" type="text" autocomplete="off" placeholder="?">
        <span class="ru-lbl">&nbsp;${n}</span>
        <span class="ru-fb" id="fb-b"></span>
      </td>`;const c=document.createElement("tr");c.id="row-unit",c.style.display="none",c.innerHTML=`
      <td class="ru-cell">
        <input class="ru-input" id="inp-unit-qty" type="text" autocomplete="off" placeholder="?">
        <span class="ru-lbl">&nbsp;${r}</span>
        <span class="ru-fb" id="fb-unit-qty"></span>
      </td>
      <td class="ru-sep">→</td>
      <td class="ru-cell locked" id="cell-unit">
        <input class="ru-input" id="inp-unit" type="text" autocomplete="off" placeholder="?" disabled>
        <span class="ru-lbl">&nbsp;${n}</span>
        <span class="ru-fb" id="fb-unit"></span>
      </td>`;const h=document.createElement("tr");h.innerHTML=`
      <td class="ru-cell">
        <input class="ru-input" id="inp-e" type="text" autocomplete="off" placeholder="?">
        <span class="ru-lbl">&nbsp;${r}</span>
        <span class="ru-fb" id="fb-e"></span>
      </td>
      <td class="ru-sep">→</td>
      <td class="ru-cell locked" id="cell-answer">
        <input class="ru-input" id="inp-answer" type="text" autocomplete="off" placeholder="?" disabled>
        <span class="ru-lbl">&nbsp;${n}</span>
        <span class="ru-fb" id="fb-answer"></span>
      </td>`;const p=document.createElement("tbody");p.appendChild(a),p.appendChild(c),p.appendChild(h),s.appendChild(p),this._inpA=s.querySelector("#inp-a"),this._inpB=s.querySelector("#inp-b"),this._inpE=s.querySelector("#inp-e"),this._fbA=s.querySelector("#fb-a"),this._fbB=s.querySelector("#fb-b"),this._fbE=s.querySelector("#fb-e"),this._row1=c,this._inpUnitQty=s.querySelector("#inp-unit-qty"),this._fbUnitQty=s.querySelector("#fb-unit-qty"),this._inpUnit=s.querySelector("#inp-unit"),this._fbUnit=s.querySelector("#fb-unit"),this._inpAnswer=s.querySelector("#inp-answer"),this._fbAnswer=s.querySelector("#fb-answer"),this._cellAnswer=s.querySelector("#cell-answer");const v=()=>this._checkABE();for(const[d,_]of[[this._inpA,this._fbA],[this._inpB,this._fbB],[this._inpE,this._fbE]])d.addEventListener("input",()=>{d.classList.remove("ru-inp-ok","ru-inp-ko"),_.textContent="",_.className="ru-fb"}),d.addEventListener("blur",v);return this._inpUnitQty.addEventListener("input",()=>{this._inpUnitQty.classList.remove("ru-inp-ok","ru-inp-ko"),this._fbUnitQty.textContent="",this._fbUnitQty.className="ru-fb"}),this._inpUnitQty.addEventListener("blur",()=>this._checkUnitQty()),this._inpUnit.addEventListener("input",()=>{this._inpUnit.classList.remove("ru-inp-ok","ru-inp-ko"),this._fbUnit.textContent="",this._fbUnit.className="ru-fb"}),this._inpUnit.addEventListener("blur",()=>this._checkUnit()),this._inpAnswer.addEventListener("input",()=>{this._inpAnswer.classList.remove("ru-inp-ok","ru-inp-ko"),this._fbAnswer.textContent="",this._fbAnswer.className="ru-fb"}),this._inpAnswer.addEventListener("blur",()=>{const{answer:d}=this._cfg(),_=this._inpAnswer.value;this._markInp(this._inpAnswer,this._fbAnswer,u(_,d),_.trim()!=="")}),s}_checkABE(){const{a:e,b:t,e:i}=this._cfg(),r=this._inpA.value.trim()!==""&&u(this._inpA.value,e),n=this._inpB.value.trim()!==""&&u(this._inpB.value,t),l=this._inpE.value.trim()!==""&&u(this._inpE.value,i);if(this._markInp(this._inpA,this._fbA,r,this._inpA.value.trim()!==""),this._markInp(this._inpB,this._fbB,n,this._inpB.value.trim()!==""),this._markInp(this._inpE,this._fbE,l,this._inpE.value.trim()!==""),r&&n&&l&&this._phase===0){this._phase=1,this._row1.style.display="";for(const s of[this._svgLeft,this._svgRight])s.setAttribute("height","156"),s.setAttribute("viewBox","0 0 56 156");this.getAttribute("which-unit")==="true"||this._inpUnitQty.focus()}}_checkUnitQty(){const e=this._inpUnitQty.value.trim()==="1";this._markInp(this._inpUnitQty,this._fbUnitQty,e,this._inpUnitQty.value.trim()!==""),e&&this._phase===1&&(this._phase=2,this._showDivArrowLeft(),this._inpDivLeft.focus())}_showDivArrowLeft(){this._svgLeft.style.display="";const{inp:t,markFb:i}=this._addCurveArrow(this._svgLeft,52/2,52*1.5-8,"÷","#0ea5e9","","left");this._inpDivLeft=t,this._fbDivLeft=i,t.addEventListener("blur",()=>this._checkDivLeft())}_checkDivLeft(){const{a:e}=this._cfg(),t=u(this._inpDivLeft.value,e);this._fbDivLeft?.(t),t&&this._phase===2&&(this._phase=3,this._showDivArrowRight(),this._inpDivRight.focus())}_showDivArrowRight(){this._svgRight.style.display="";const{inp:t,markFb:i}=this._addCurveArrow(this._svgRight,52/2,52*1.5-8,"÷","#0ea5e9","","right");this._inpDivRight=t,this._fbDivRight=i,t.addEventListener("blur",()=>this._checkDivRight())}_checkDivRight(){const{a:e}=this._cfg(),t=u(this._inpDivRight.value,e);this._fbDivRight?.(t),t&&u(this._inpDivLeft.value,e)&&(this.querySelector("#cell-unit").classList.remove("locked"),this._inpUnit.disabled=!1,this._inpUnit.focus())}_addCurveArrow(e,t,i,r,n,l,o){const s=(t+i)/2,a="http://www.w3.org/2000/svg",c=o==="left"?8:48,h=o==="left"?50:6;this._svgLine(e,a,c,t,h,t,n),this._svgLine(e,a,c,t,c,i,n),this._svgLine(e,a,c,i,h,i,n);const p=document.createElementNS(a,"polyline"),v=o==="left"?`${h-6},${i-4} ${h},${i} ${h-6},${i+4}`:`${h+6},${i-4} ${h},${i} ${h+6},${i+4}`;p.setAttribute("points",v),p.setAttribute("stroke",n),p.setAttribute("stroke-width","2"),p.setAttribute("fill","none"),p.setAttribute("stroke-linecap","round"),p.setAttribute("stroke-linejoin","round"),e.appendChild(p);const d=document.createElementNS(a,"foreignObject");d.setAttribute("x","11"),d.setAttribute("y",String(s-11)),d.setAttribute("width","42"),d.setAttribute("height","22");const _=document.createElement("div");_.style.cssText=`display:flex;align-items:center;gap:2px;font-size:11px;font-weight:700;color:${n};font-family:inherit;white-space:nowrap;`,_.appendChild(document.createTextNode(r));const b=document.createElement("input");b.type="text",b.placeholder="?",b.style.cssText=`width:2.5ch;border:none;border-bottom:2px solid ${n};background:transparent;font-size:11px;font-weight:700;color:${n};font-family:inherit;text-align:center;outline:none;padding:0;`;const m=document.createElement("span");return m.style.cssText="font-size:9px;font-weight:700;",_.appendChild(b),_.appendChild(m),d.appendChild(_),e.appendChild(d),b.addEventListener("input",()=>{b.style.borderBottomColor=n,b.style.color=n,m.textContent=""}),{inp:b,markFb:g=>{b.style.borderBottomColor=g?"#16a34a":"#dc2626",b.style.color=g?"#16a34a":"#dc2626",m.textContent=g?"✓":"✗",m.style.color=g?"#16a34a":"#dc2626"}}}_showMultArrowLeft(){const{inp:t,markFb:i}=this._addCurveArrow(this._svgLeft,86,130,"×","#16a34a","arr-mul-l","left");this._inpMulLeft=t,this._fbMulLeft=i,t.addEventListener("blur",()=>this._checkMultLeft())}_checkMultLeft(){const{e}=this._cfg(),t=u(this._inpMulLeft.value,e);this._fbMulLeft?.(t),t&&this._phase===4&&(this._phase=5,this._showMultArrowRight(),this._inpMulRight.focus())}_showMultArrowRight(){const{inp:t,markFb:i}=this._addCurveArrow(this._svgRight,86,130,"×","#16a34a","arr-mul-r","right");this._inpMulRight=t,this._fbMulRight=i,t.addEventListener("blur",()=>this._checkMultRight())}_checkMultRight(){const{e}=this._cfg(),t=u(this._inpMulRight.value,e);this._fbMulRight?.(t),t&&u(this._inpMulLeft.value,e)&&this._unlockAnswer()}_checkUnit(){const{unitPrice:e}=this._cfg();if(e==null)return!1;const t=this._inpUnit.value,i=t.trim()!==""&&u(t,e);return this._markInp(this._inpUnit,this._fbUnit,i,t.trim()!==""),i&&this._phase===3&&(this._phase=4,this._showMultArrowLeft(),this._inpMulLeft.focus()),i}_markInp(e,t,i,r){e.classList.remove("ru-inp-ok","ru-inp-ko"),t.className="ru-fb",t.textContent="",r&&(e.classList.add(i?"ru-inp-ok":"ru-inp-ko"),t.classList.add(i?"ok":"ko"),t.textContent=i?"✓":"✗")}_unlockAnswer(){this._inpAnswer.disabled=!1,this._cellAnswer.classList.remove("locked"),this._inpAnswer.focus()}_svgLine(e,t,i,r,n,l,o){const s=document.createElementNS(t,"line");s.setAttribute("x1",i),s.setAttribute("y1",r),s.setAttribute("x2",n),s.setAttribute("y2",l),s.setAttribute("stroke",o),s.setAttribute("stroke-width","2"),s.setAttribute("stroke-linecap","round"),e.appendChild(s)}_forceMarkInp(e,t,i){e.classList.remove("ru-inp-ok","ru-inp-ko"),e.classList.add(i?"ru-inp-ok":"ru-inp-ko"),t.className=`ru-fb ${i?"ok":"ko"}`,t.textContent=i?"✓":"✗"}validate(){const{a:e,b:t,e:i,answer:r}=this._cfg(),n=u(this._inpA.value,e),l=u(this._inpB.value,t),o=u(this._inpE.value,i);if(this._forceMarkInp(this._inpA,this._fbA,n),this._forceMarkInp(this._inpB,this._fbB,l),this._forceMarkInp(this._inpE,this._fbE,o),n&&l&&o&&this._phase===0){this._phase=1,this._row1.style.display="";for(const a of[this._svgLeft,this._svgRight])a.setAttribute("height","156"),a.setAttribute("viewBox","0 0 56 156");this.getAttribute("which-unit")==="true"||this._inpUnitQty.focus()}if(this._phase!==0){if(this._phase===1){this._checkUnitQty();return}if(this._phase===2){this._inpDivLeft&&this._checkDivLeft();return}if(this._phase===3){this._inpDivRight&&this._checkDivRight(),this._inpUnit.disabled||this._checkUnit();return}if(this._phase===4){this._inpMulLeft&&this._checkMultLeft();return}if(this._inpMulRight&&this._checkMultRight(),!this._inpAnswer.disabled){const s=this._inpAnswer.value,a=s.trim()!==""&&r!=null&&u(s,r);this._forceMarkInp(this._inpAnswer,this._fbAnswer,a)}}}toggleSolution(e){const{unitPrice:t,answer:i}=this._cfg();(e!==void 0?e:!this._showSol)?(this._savedUnit=this._inpUnit.value,this._savedAnswer=this._inpAnswer.value,this._inpUnit.value=w(t),this._markInp(this._inpUnit,this._fbUnit,!0,!0),this._phase===0&&(this._phase=1,this._unlockAnswer()),this._inpAnswer.value=w(i),this._markInp(this._inpAnswer,this._fbAnswer,!0,!0),this._showSol=!0):(this._inpUnit.value=this._savedUnit??"",this._inpUnit.classList.remove("ru-inp-ok","ru-inp-ko"),this._fbUnit.textContent="",this._fbUnit.className="ru-fb",this._inpAnswer.value=this._savedAnswer??"",this._inpAnswer.classList.remove("ru-inp-ok","ru-inp-ko"),this._fbAnswer.textContent="",this._fbAnswer.className="ru-fb",this._phase===0&&(this._inpAnswer.disabled=!0,this._cellAnswer.classList.add("locked")),this._showSol=!1)}}customElements.get("math974-retour-unite")||customElements.define("math974-retour-unite",E);const k=[{unitLabel:"kg de mangues",location:"Au marché de Saint-Pierre"},{unitLabel:"kg de thon",location:"Chez le pêcheur de Saint-Gilles"},{unitLabel:"kg de letchis",location:"Au marché du Port"},{unitLabel:"ananas Victoria",location:"Au Tampon"},{unitLabel:"billets de bus",location:""},{unitLabel:"sachets d'épices",location:"À Salazie"},{unitLabel:"pots de miel",location:""},{unitLabel:"kg de goyaves",location:"Au marché de Saint-Paul"},{unitLabel:"barquettes de carry",location:""}];function S(f,e,t){const i=k[Math.floor(Math.random()*k.length)],r=i.unitLabel,n=[2,3,4,5,6,8],l=n[Math.floor(Math.random()*n.length)],o=[2,3,4,5,6],s=o[Math.floor(Math.random()*o.length)];let a;do a=3+Math.floor(Math.random()*10);while(a===s);const c=s*l,p=`${i.location?i.location+", ":""}**${s} ${r}** coûtent **${c} €**. Combien coûtent **${a} ${r}** ?`;return{...f,a:s,b:c,e:a,"unit-label":r,"value-label":"€",content:p}}export{R as defaultPosition,S as randomize};
