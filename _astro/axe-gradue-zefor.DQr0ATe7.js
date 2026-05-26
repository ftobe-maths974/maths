import{r as u}from"./fullscreen-viewer.BFpk8gMx.js";import{randomize as $}from"./axe-gradue.Cl_9UxCg.js";import"./editor.CJZspgfY.js";const y="content",_=!0,b=`
math974-axe-gradue-zefor {
  display: block;
  width: 100%;
  font-family: inherit;
}
.azf-help {
  margin-top: 10px;
  padding: 0;
  border: 1.5px solid rgba(99, 102, 241, 0.3);
  border-radius: 8px;
  background: rgba(99, 102, 241, 0.04);
}
.azf-help > summary {
  cursor: pointer;
  user-select: none;
  padding: 8px 12px;
  font-weight: 600;
  color: #4f46e5;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 6px;
  border-radius: 8px;
}
.azf-help > summary::-webkit-details-marker { display: none; }
.azf-help > summary::before {
  content: '▸';
  display: inline-block;
  transition: transform 0.15s;
}
.azf-help[open] > summary::before { transform: rotate(90deg); }
.azf-help > summary:hover { background: rgba(99, 102, 241, 0.08); }

.azf-body {
  padding: 8px 14px 14px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.azf-step {
  padding: 8px 12px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 1.05em;
  color: #1e293b;
  line-height: 1.5;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  transition: opacity 0.2s;
}
/* Étapes futures CACHÉES (pas juste grisées) tant que le pas précédent
   n'a pas été validé → l'élève découvre la procédure étape par étape. */
.azf-step--hidden { display: none; }
.azf-step--active {
  border-color: #6366f1;
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.15);
  animation: azf-step-reveal 0.3s ease-out;
}
.azf-step--done {
  border-color: #16a34a;
  background: #f0fdf4;
}
/* La conclusion de l'étape (« → je partage l'unité… ») n'apparaît qu'une
   fois la bonne réponse donnée. Avant ça, l'élève réfléchit sans avoir
   le résumé sous les yeux. */
.azf-step-after { display: none; }
.azf-step--done .azf-step-after { display: inline; }
@keyframes azf-step-reveal {
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
}
.azf-step-label {
  font-weight: 700;
  color: #4f46e5;
  flex-shrink: 0;
}
.azf-step--done .azf-step-label { color: #16a34a; }
.azf-step input.azf-step-inp {
  border: none;
  border-bottom: 2px solid #6366f1;
  outline: none;
  font-size: 1.05em;
  font-weight: 700;
  font-family: inherit;
  text-align: center;
  width: 3.5ch;
  background: transparent;
  padding: 2px 0;
}
.azf-step input.azf-step-inp:focus { background: #fef9c3; }
.azf-step input.azf-step-inp.correct {
  border-bottom-color: #16a34a;
  color: #15803d;
}
.azf-step input.azf-step-inp.incorrect {
  border-bottom-color: #dc2626;
  color: #b91c1c;
}
.azf-step-fb { font-size: 1.1em; }
.azf-step-fb.ok::before  { content: '😀'; }
.azf-step-fb.ko::before  { content: '😞'; }
/* Mini-fraction avec 2 inputs (num/den) inline dans le panneau guidé.
   Step B « chaque pas vaut [num]/[den] » → l'élève remplit num et den. */
.azf-frac-inline {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
  line-height: 1.05;
  margin: 0 4px;
}
.azf-frac-inline-num,
.azf-frac-inline-den {
  display: flex;
  align-items: center;
  justify-content: center;
}
.azf-frac-inline-bar {
  display: block;
  height: 2px;
  width: 100%;
  min-width: 2.4em;
  background: currentColor;
  margin: 2px 0;
}
`;let m=!1;function z(){if(m)return;m=!0;const d=document.createElement("style");d.textContent=b,document.head.appendChild(d)}class g extends HTMLElement{connectedCallback(){z(),this.hasAttribute("placeTarget")?this.dataset.placeMode="1":delete this.dataset.placeMode,this._render()}_render(){this.innerHTML="",this._mode=this.hasAttribute("placeTarget")?"placer":"lire";const e=document.createElement("math974-axe-gradue");for(const a of Array.from(this.attributes))a.name!=="data-place-mode"&&e.setAttribute(a.name,a.value);const l=parseFloat(this.getAttribute("max")||"1"),p=[];for(let a=0;a<=Math.floor(l+1e-9);a++)p.push(a);e.setAttribute("visibleLabels",JSON.stringify(p)),this._mode==="placer"&&e.setAttribute("step","1"),this._inner=e,this.appendChild(e);const t=this._numFromAttr(),r=this._denFromAttr();if(t===null||r===null)return;const s=document.createElement("details");s.className="azf-help";const i=`<span class="axe-frac"><span class="axe-frac-num">${t}</span><span class="axe-frac-den">${r}</span></span>`,n=(a,h)=>`<span class="azf-frac-inline"><span class="azf-frac-inline-num"><input class="azf-step-inp" data-expected="${a}" type="text" inputmode="numeric" size="2" autocomplete="off" placeholder="?"></span><span class="azf-frac-inline-bar"></span><span class="azf-frac-inline-den"><input class="azf-step-inp" data-expected="${h}" type="text" inputmode="numeric" size="2" autocomplete="off" placeholder="?"></span></span>`,o=`
      <div class="azf-step step-A azf-step--active" data-phase="identifier_denominateur">
        <span class="azf-step-label">A.</span>
        <span>Dans la fraction&nbsp;${i}, le dénominateur est&nbsp;</span>
        <input class="azf-step-inp" data-expected="${r}" type="text" inputmode="numeric" size="2" autocomplete="off" placeholder="?">
        <span>&nbsp;→ je partage l'unité (segment&nbsp;0→1) en&nbsp;</span>
        <input class="azf-step-inp" data-expected="${r}" type="text" inputmode="numeric" size="2" autocomplete="off" placeholder="?">
        <span>&nbsp;parts.</span>
        <span class="azf-step-fb" aria-hidden="true"></span>
      </div>`,f=`
      <div class="azf-step step-A azf-step--active" data-phase="identifier_denominateur">
        <span class="azf-step-label">A.</span>
        <span>L'unité (segment&nbsp;0→1) est partagée en&nbsp;</span>
        <input class="azf-step-inp" data-expected="${r}" type="text" inputmode="numeric" size="2" autocomplete="off" placeholder="?">
        <span>&nbsp;parts.</span>
        <span class="azf-step-fb" aria-hidden="true"></span>
      </div>`,c=`
      <div class="azf-step step-B azf-step--hidden" data-phase="identifier_unite">
        <span class="azf-step-label">B.</span>
        <span>Dans 1 unité, il y a donc&nbsp;${r}&nbsp;pas. Chaque pas vaut&nbsp;</span>
        ${n(1,r)}
        <span class="azf-step-fb" aria-hidden="true"></span>
      </div>`;if(this._mode==="placer")s.innerHTML=`
        <summary>🔧 Aide pas-à-pas</summary>
        <div class="azf-body">
          ${o}
          ${c}
          <div class="azf-step step-C azf-step--hidden" data-phase="compter_pas">
            <span class="azf-step-label">C.</span>
            <span>Le numérateur de&nbsp;${i} est&nbsp;</span>
            <input class="azf-step-inp" data-expected="${t}" type="text" inputmode="numeric" size="2" autocomplete="off" placeholder="?">
            <span class="azf-step-fb" aria-hidden="true"></span>
            <span class="azf-step-after">→ j'avance donc de&nbsp;${t}&nbsp;pas depuis 0.</span>
          </div>
          <div class="azf-step step-D azf-step--hidden" data-phase="placer_le_curseur">
            <span class="azf-step-label">D.</span>
            <span>Compte ${t}&nbsp;graduations à partir de 0, puis <strong>clique précisément</strong> sur l'axe à cette position.</span>
          </div>
        </div>
      `;else{const a=this._pointLabel();s.innerHTML=`
        <summary>🔧 Aide pas-à-pas</summary>
        <div class="azf-body">
          ${f}
          ${c}
          <div class="azf-step step-C azf-step--hidden" data-phase="compter_pas">
            <span class="azf-step-label">C.</span>
            <span>Combien de pas y a-t-il entre 0 et le point&nbsp;<strong>${a}</strong>&nbsp;?</span>
            <input class="azf-step-inp" data-expected="${t}" type="text" inputmode="numeric" size="2" autocomplete="off" placeholder="?">
            <span class="azf-step-fb" aria-hidden="true"></span>
            <span class="azf-step-after">→ il y a&nbsp;${t}&nbsp;pas.</span>
          </div>
          <div class="azf-step step-D azf-step--hidden" data-phase="placer_le_curseur">
            <span class="azf-step-label">D.</span>
            <span>L'abscisse de&nbsp;<strong>${a}</strong> est donc&nbsp;${i}. Tape-la dans le champ ci-dessus&nbsp;!</span>
          </div>
        </div>
      `}this.appendChild(s),this._panel=s,this._wireSteps()}_revealGraduations(){const e=this._denFromAttr();if(!this._inner||!e||e<2)return;const l=1/e;this._inner.setAttribute("step",String(l)),typeof this._inner.render=="function"&&this._inner.render()}_pointLabel(){try{return JSON.parse(this.getAttribute("points")||"[]").find(p=>p.label==="?"||p.question)?.label||"A"}catch{return"A"}}_numFromAttr(){const e=this.getAttribute("num");return e!=null?parseInt(e,10):null}_denFromAttr(){const e=this.getAttribute("den");return e!=null?parseInt(e,10):null}_wireSteps(){const e=Array.from(this._panel.querySelectorAll(".azf-step"));e.map(p=>Array.from(p.querySelectorAll(".azf-step-inp"))).forEach((p,t)=>{if(!p.length)return;e[t].querySelector(".azf-step-fb");const r=()=>{let s=!0,i=!1;if(p.forEach(n=>{const o=parseInt(n.value,10),f=parseInt(n.dataset.expected,10),c=o===f,a=n.value!=="";a&&(i=!0),c||(s=!1),u(n,a?c?"correct":"incorrect":"neutral")}),s&&i){e[t].classList.add("azf-step--done"),e[t].classList.remove("azf-step--active"),t===0&&this._revealGraduations();for(let n=t+1;n<e.length;n++){e[n].classList.remove("azf-step--hidden"),e[n].classList.add("azf-step--active");const o=e[n].querySelector(".azf-step-inp");if(o){o.focus();break}e[n].classList.add("azf-step--done"),e[n].classList.remove("azf-step--active")}}};p.forEach(s=>{s.addEventListener("blur",r),s.addEventListener("keydown",i=>{i.key==="Enter"&&(i.preventDefault(),s.blur())}),s.addEventListener("input",()=>{u(s,"neutral")})})})}getCurrentPhase(){if(this._panel?.open){const t=this._panel.querySelector(".azf-step--active");if(t?.dataset.phase)return t.dataset.phase}const e=this._inner?._studentAnswer;if(e==null)return"reponse_directe";const l=parseFloat(this._inner?.getAttribute("placeTarget")??"NaN");return Math.abs(e-l)<.001?"done":"erreur_reponse_directe"}validate(){return this._inner?.validate?.()}toggleSolution(e){return this._inner?.toggleSolution?.(e)}}customElements.get("math974-axe-gradue-zefor")||customElements.define("math974-axe-gradue-zefor",g);export{_ as autoScale,y as defaultPosition,$ as randomize};
