const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/fullscreen-viewer.BlhTa5QW.js","_astro/editor.CJZspgfY.js"])))=>i.map(i=>d[i]);
import{_ as b}from"./editor.CJZspgfY.js";import{r as m}from"./fullscreen-viewer.BlhTa5QW.js";import{randomize as L}from"./axe-gradue.BIotRDeu.js";const _="content",A=!0,z=`
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
`;let h=!1;function g(){if(h)return;h=!0;const u=document.createElement("style");u.textContent=z,document.head.appendChild(u)}class x extends HTMLElement{connectedCallback(){g(),this.hasAttribute("placeTarget")?this.dataset.placeMode="1":delete this.dataset.placeMode,this._render()}_render(){this.innerHTML="",this._mode=this.hasAttribute("placeTarget")?"placer":"lire";const e=document.createElement("math974-axe-gradue");for(const s of Array.from(this.attributes))s.name!=="data-place-mode"&&e.setAttribute(s.name,s.value);const c=parseFloat(this.getAttribute("max")||"1"),i=[];for(let s=0;s<=Math.floor(c+1e-9);s++)i.push(s);e.setAttribute("visibleLabels",JSON.stringify(i)),this._mode==="placer"&&e.setAttribute("step","1"),this._inner=e,this.appendChild(e);const t=this._numFromAttr(),a=this._denFromAttr();if(t===null||a===null)return;const l=document.createElement("details");l.className="azf-help";const n=`<span class="axe-frac"><span class="axe-frac-num">${t}</span><span class="axe-frac-den">${a}</span></span>`,d=(s,f)=>`<span class="azf-frac-inline"><span class="azf-frac-inline-num"><input class="azf-step-inp rapido-input" data-expected="${s}" data-solution="${s}" type="text" inputmode="numeric" size="2" autocomplete="off" placeholder="?"></span><span class="azf-frac-inline-bar"></span><span class="azf-frac-inline-den"><input class="azf-step-inp rapido-input" data-expected="${f}" data-solution="${f}" type="text" inputmode="numeric" size="2" autocomplete="off" placeholder="?"></span></span>`,o=`
      <div class="azf-step step-A azf-step--active" data-phase="identifier_denominateur">
        <span class="azf-step-label">A.</span>
        <span>Dans la fraction&nbsp;${n}, le dénominateur est&nbsp;</span>
        <input class="azf-step-inp rapido-input" data-expected="${a}" data-solution="${a}" type="text" inputmode="numeric" size="2" autocomplete="off" placeholder="?">
        <span>&nbsp;→ je partage l'unité (segment&nbsp;0→1) en&nbsp;</span>
        <input class="azf-step-inp rapido-input" data-expected="${a}" data-solution="${a}" type="text" inputmode="numeric" size="2" autocomplete="off" placeholder="?">
        <span>&nbsp;parts.</span>
        <span class="azf-step-fb" aria-hidden="true"></span>
      </div>`,p=`
      <div class="azf-step step-A azf-step--active" data-phase="identifier_denominateur">
        <span class="azf-step-label">A.</span>
        <span>L'unité (segment&nbsp;0→1) est partagée en&nbsp;</span>
        <input class="azf-step-inp rapido-input" data-expected="${a}" data-solution="${a}" type="text" inputmode="numeric" size="2" autocomplete="off" placeholder="?">
        <span>&nbsp;parts.</span>
        <span class="azf-step-fb" aria-hidden="true"></span>
      </div>`,r=`
      <div class="azf-step step-B azf-step--hidden" data-phase="identifier_unite">
        <span class="azf-step-label">B.</span>
        <span>Dans 1 unité, il y a donc&nbsp;${a}&nbsp;pas. Chaque pas vaut&nbsp;</span>
        ${d(1,a)}
        <span class="azf-step-fb" aria-hidden="true"></span>
      </div>`;if(this._mode==="placer")l.innerHTML=`
        <summary>🔧 Aide pas-à-pas</summary>
        <div class="azf-body">
          ${o}
          ${r}
          <div class="azf-step step-C azf-step--hidden" data-phase="compter_pas">
            <span class="azf-step-label">C.</span>
            <span>Le numérateur de&nbsp;${n} est&nbsp;</span>
            <input class="azf-step-inp rapido-input" data-expected="${t}" data-solution="${t}" type="text" inputmode="numeric" size="2" autocomplete="off" placeholder="?">
            <span class="azf-step-fb" aria-hidden="true"></span>
            <span class="azf-step-after">→ j'avance donc de&nbsp;${t}&nbsp;pas depuis 0.</span>
          </div>
          <div class="azf-step step-D azf-step--hidden" data-phase="placer_le_curseur">
            <span class="azf-step-label">D.</span>
            <span>Compte ${t}&nbsp;graduations à partir de 0, puis <strong>clique précisément</strong> sur l'axe à cette position.</span>
          </div>
        </div>
      `;else{const s=this._pointLabel();l.innerHTML=`
        <summary>🔧 Aide pas-à-pas</summary>
        <div class="azf-body">
          ${p}
          ${r}
          <div class="azf-step step-C azf-step--hidden" data-phase="compter_pas">
            <span class="azf-step-label">C.</span>
            <span>Combien de pas y a-t-il entre 0 et le point&nbsp;<strong>${s}</strong>&nbsp;?</span>
            <input class="azf-step-inp rapido-input" data-expected="${t}" data-solution="${t}" type="text" inputmode="numeric" size="2" autocomplete="off" placeholder="?">
            <span class="azf-step-fb" aria-hidden="true"></span>
            <span class="azf-step-after">→ il y a&nbsp;${t}&nbsp;pas.</span>
          </div>
          <div class="azf-step step-D azf-step--hidden" data-phase="placer_le_curseur">
            <span class="azf-step-label">D.</span>
            <span>L'abscisse de&nbsp;<strong>${s}</strong> est donc&nbsp;${n}. Tape-la dans le champ ci-dessus&nbsp;!</span>
          </div>
        </div>
      `}this.appendChild(l),this._panel=l,this._wireSteps()}_revealGraduations(){const e=this._denFromAttr();if(!this._inner||!e||e<2)return;const c=1/e;this._inner.setAttribute("step",String(c)),typeof this._inner.render=="function"&&this._inner.render()}_pointLabel(){try{return JSON.parse(this.getAttribute("points")||"[]").find(i=>i.label==="?"||i.question)?.label||"A"}catch{return"A"}}_numFromAttr(){const e=this.getAttribute("num");return e!=null?parseInt(e,10):null}_denFromAttr(){const e=this.getAttribute("den");return e!=null?parseInt(e,10):null}_wireSteps(){const e=Array.from(this._panel.querySelectorAll(".azf-step"));e.map(t=>Array.from(t.querySelectorAll(".azf-step-inp"))).forEach((t,a)=>{if(!t.length)return;e[a].querySelector(".azf-step-fb");const l=()=>{let n=!0,d=!1;if(t.forEach(o=>{const p=parseInt(o.value,10),r=parseInt(o.dataset.expected,10),s=p===r,f=o.value!=="";f&&(d=!0),s||(n=!1),m(o,f?s?"correct":"incorrect":"neutral")}),n&&d){e[a].classList.add("azf-step--done"),e[a].classList.remove("azf-step--active"),a===0&&this._revealGraduations();let o=!1;for(let p=a+1;p<e.length;p++){e[p].classList.remove("azf-step--hidden"),e[p].classList.add("azf-step--active");const r=e[p].querySelector(".azf-step-inp");if(r){r.focus(),o=!0;break}e[p].classList.add("azf-step--done"),e[p].classList.remove("azf-step--active")}if(!o&&this._mode==="lire"){const r=this.closest(".q-card")?.querySelector(".sa-projected-text .axe-frac-input input.rapido-input");r&&r.focus()}}};t.forEach(n=>{n.addEventListener("blur",l),n.addEventListener("keydown",d=>{d.key==="Enter"?(d.preventDefault(),n.blur()):d.key==="Tab"&&l()}),n.addEventListener("input",()=>{m(n,"neutral")})})});const i=this.closest(".q-card");i&&b(()=>import("./fullscreen-viewer.BlhTa5QW.js").then(t=>t.h),__vite__mapDeps([0,1])).then(t=>t.wireCardInputs?.(i)).catch(()=>{})}getCurrentPhase(){if(this._panel?.open){const t=this._panel.querySelector(".azf-step--active");if(t?.dataset.phase)return t.dataset.phase}const e=this._inner?._studentAnswer;if(e==null)return"reponse_directe";const c=parseFloat(this._inner?.getAttribute("placeTarget")??"NaN");return Math.abs(e-c)<.001?"done":"erreur_reponse_directe"}validate(){return this._inner?.validate?.()}toggleSolution(e){return this._inner?.toggleSolution?.(e)}}customElements.get("math974-axe-gradue-zefor")||customElements.define("math974-axe-gradue-zefor",x);export{A as autoScale,_ as defaultPosition,L as randomize};
