import{randomize as L}from"./axe-gradue.B-gPnLCV.js";import"./fullscreen-viewer.DmC2q9pb.js";import"./editor.CJZspgfY.js";const x="content",y=!0,b=`
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
`;let f=!1;function h(){if(f)return;f=!0;const l=document.createElement("style");l.textContent=b,document.head.appendChild(l)}class z extends HTMLElement{connectedCallback(){h(),this.dataset.placeMode="1",this._render()}_render(){this.innerHTML="",this._mode=this.hasAttribute("placeTarget")?"placer":"lire";const e=document.createElement("math974-axe-gradue");for(const a of Array.from(this.attributes))a.name!=="data-place-mode"&&e.setAttribute(a.name,a.value);this._mode==="lire"&&(e.setAttribute("step","1"),e.setAttribute("visibleLabels","[0,1]")),this._inner=e,this.appendChild(e);const t=this._numFromAttr(),s=this._denFromAttr();if(t===null||s===null)return;const p=document.createElement("details");if(p.className="azf-help",this._mode==="placer"){const a=`<span class="axe-frac"><span class="axe-frac-num">${t}</span><span class="axe-frac-den">${s}</span></span>`;p.innerHTML=`
        <summary>🔧 Aide pas-à-pas</summary>
        <div class="azf-body">
          <div class="azf-step step-A azf-step--active" data-phase="identifier_denominateur">
            <span class="azf-step-label">A.</span>
            <span>Dans la fraction&nbsp;${a}, le dénominateur est&nbsp;</span>
            <input class="azf-step-inp" data-expected="${s}" type="text" inputmode="numeric" size="2" autocomplete="off" placeholder="?">
            <span class="azf-step-fb" aria-hidden="true"></span>
            <span class="azf-step-after">→ je partage l'unité (segment&nbsp;0→1) en&nbsp;${s}&nbsp;parts.</span>
          </div>
          <div class="azf-step step-B azf-step--hidden" data-phase="identifier_unite">
            <span class="azf-step-label">B.</span>
            <span>Dans 1 unité, il y a donc ${s}&nbsp;pas. Chaque pas vaut&nbsp;<span class="axe-frac"><span class="axe-frac-num">1</span><span class="axe-frac-den">${s}</span></span>.</span>
          </div>
          <div class="azf-step step-C azf-step--hidden" data-phase="compter_pas">
            <span class="azf-step-label">C.</span>
            <span>Le numérateur de&nbsp;${a} est&nbsp;</span>
            <input class="azf-step-inp" data-expected="${t}" type="text" inputmode="numeric" size="2" autocomplete="off" placeholder="?">
            <span class="azf-step-fb" aria-hidden="true"></span>
            <span class="azf-step-after">→ j'avance donc de ${t}&nbsp;pas depuis 0.</span>
          </div>
          <div class="azf-step step-D azf-step--hidden" data-phase="placer_le_curseur">
            <span class="azf-step-label">D.</span>
            <span>Compte ${t}&nbsp;graduations à partir de 0, puis <strong>clique précisément</strong> sur l'axe à cette position.</span>
          </div>
        </div>
      `}else{const a=this._pointLabel(),n=`<span class="axe-frac"><span class="axe-frac-num">${t}</span><span class="axe-frac-den">${s}</span></span>`;p.innerHTML=`
        <summary>🔧 Aide pas-à-pas</summary>
        <div class="azf-body">
          <div class="azf-step step-A azf-step--active" data-phase="identifier_denominateur">
            <span class="azf-step-label">A.</span>
            <span>Regarde la position du point&nbsp;<strong>${a}</strong>. Je partage l'unité (segment&nbsp;0→1) en&nbsp;</span>
            <input class="azf-step-inp" data-expected="${s}" type="text" inputmode="numeric" size="2" autocomplete="off" placeholder="?">
            <span>parts.&nbsp;</span>
            <span class="azf-step-fb" aria-hidden="true"></span>
            <span class="azf-step-after">→ l'unité est partagée en&nbsp;${s}&nbsp;parts. Les graduations apparaissent sur l'axe.</span>
          </div>
          <div class="azf-step step-B azf-step--hidden" data-phase="identifier_unite">
            <span class="azf-step-label">B.</span>
            <span>Dans 1 unité, il y a ${s}&nbsp;pas. Chaque pas vaut&nbsp;<span class="axe-frac"><span class="axe-frac-num">1</span><span class="axe-frac-den">${s}</span></span>.</span>
          </div>
          <div class="azf-step step-C azf-step--hidden" data-phase="compter_pas">
            <span class="azf-step-label">C.</span>
            <span>Combien de pas y a-t-il entre 0 et le point&nbsp;<strong>${a}</strong>&nbsp;?</span>
            <input class="azf-step-inp" data-expected="${t}" type="text" inputmode="numeric" size="2" autocomplete="off" placeholder="?">
            <span class="azf-step-fb" aria-hidden="true"></span>
            <span class="azf-step-after">→ il y a&nbsp;${t}&nbsp;pas.</span>
          </div>
          <div class="azf-step step-D azf-step--hidden" data-phase="placer_le_curseur">
            <span class="azf-step-label">D.</span>
            <span>L'abscisse de&nbsp;<strong>${a}</strong> est donc&nbsp;${n}. Tape-la dans le champ ci-dessus&nbsp;!</span>
          </div>
        </div>
      `}this.appendChild(p),this._panel=p,this._wireSteps()}_revealGraduations(){const e=this._denFromAttr();if(!this._inner||!e||e<2)return;const t=1/e;this._inner.setAttribute("step",String(t)),typeof this._inner.render=="function"&&this._inner.render()}_pointLabel(){try{return JSON.parse(this.getAttribute("points")||"[]").find(s=>s.label==="?"||s.question)?.label||"A"}catch{return"A"}}_numFromAttr(){const e=this.getAttribute("num");return e!=null?parseInt(e,10):null}_denFromAttr(){const e=this.getAttribute("den");return e!=null?parseInt(e,10):null}_wireSteps(){const e=Array.from(this._panel.querySelectorAll(".azf-step")),t=e.map(a=>a.querySelector(".azf-step-inp")),s=e.map(a=>a.querySelector(".azf-step-fb"));(a=>{e.forEach((n,i)=>{n.classList.toggle("azf-step--active",i===a&&!n.classList.contains("azf-step--done"))})})(0),t.forEach((a,n)=>{if(!a)return;const i=s[n],u=parseInt(a.dataset.expected,10),m=()=>{const o=parseInt(a.value,10)===u;if(a.classList.toggle("correct",o),a.classList.toggle("incorrect",!o&&a.value!==""),i&&(i.classList.toggle("ok",o),i.classList.toggle("ko",!o&&a.value!=="")),o){e[n].classList.add("azf-step--done"),e[n].classList.remove("azf-step--active"),this._mode==="lire"&&n===0&&this._revealGraduations();for(let r=n+1;r<e.length;r++){e[r].classList.remove("azf-step--hidden"),e[r].classList.add("azf-step--active");const d=e[r].querySelector(".azf-step-inp");if(d){d.focus();break}e[r].classList.add("azf-step--done"),e[r].classList.remove("azf-step--active")}}};a.addEventListener("blur",m),a.addEventListener("keydown",c=>{c.key==="Enter"&&(c.preventDefault(),a.blur())}),a.addEventListener("input",()=>{a.classList.remove("correct","incorrect"),i?.classList.remove("ok","ko")})})}getCurrentPhase(){if(this._panel?.open){const p=this._panel.querySelector(".azf-step--active");if(p?.dataset.phase)return p.dataset.phase}const e=this._inner?._studentAnswer;if(e==null)return"reponse_directe";const t=parseFloat(this._inner?.getAttribute("placeTarget")??"NaN");return Math.abs(e-t)<.001?"done":"erreur_reponse_directe"}validate(){return this._inner?.validate?.()}toggleSolution(e){return this._inner?.toggleSolution?.(e)}}customElements.get("math974-axe-gradue-zefor")||customElements.define("math974-axe-gradue-zefor",z);export{y as autoScale,x as defaultPosition,L as randomize};
