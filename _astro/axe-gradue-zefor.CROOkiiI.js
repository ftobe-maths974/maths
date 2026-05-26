const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/fullscreen-viewer.BUc0A5gH.js","_astro/editor.CJZspgfY.js"])))=>i.map(i=>d[i]);
import{_ as b}from"./editor.CJZspgfY.js";import{r as m}from"./fullscreen-viewer.BUc0A5gH.js";import{randomize as L}from"./axe-gradue.Bj_b_9Ls.js";const _="content",A=!0,z=`
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
`;let h=!1;function g(){if(h)return;h=!0;const u=document.createElement("style");u.textContent=z,document.head.appendChild(u)}class x extends HTMLElement{connectedCallback(){g(),this.hasAttribute("placeTarget")?this.dataset.placeMode="1":delete this.dataset.placeMode,this._render()}_render(){this.innerHTML="",this._mode=this.hasAttribute("placeTarget")?"placer":"lire";const e=document.createElement("math974-axe-gradue");for(const s of Array.from(this.attributes))s.name!=="data-place-mode"&&e.setAttribute(s.name,s.value);const l=parseFloat(this.getAttribute("max")||"1"),r=[];for(let s=0;s<=Math.floor(l+1e-9);s++)r.push(s);e.setAttribute("visibleLabels",JSON.stringify(r)),this._mode==="placer"&&e.setAttribute("step","1"),this._inner=e,this.appendChild(e);const t=this._numFromAttr(),a=this._denFromAttr();if(t===null||a===null)return;const i=document.createElement("details");i.className="azf-help";const p=`<span class="axe-frac"><span class="axe-frac-num">${t}</span><span class="axe-frac-den">${a}</span></span>`,o=(s,c)=>`<span class="azf-frac-inline"><span class="azf-frac-inline-num"><input class="azf-step-inp rapido-input" data-expected="${s}" data-solution="${s}" type="text" inputmode="numeric" size="2" autocomplete="off" placeholder="?"></span><span class="azf-frac-inline-bar"></span><span class="azf-frac-inline-den"><input class="azf-step-inp rapido-input" data-expected="${c}" data-solution="${c}" type="text" inputmode="numeric" size="2" autocomplete="off" placeholder="?"></span></span>`,n=`
      <div class="azf-step step-A azf-step--active" data-phase="identifier_denominateur">
        <span class="azf-step-label">A.</span>
        <span>Dans la fraction&nbsp;${p}, le dénominateur est&nbsp;</span>
        <input class="azf-step-inp rapido-input" data-expected="${a}" data-solution="${a}" type="text" inputmode="numeric" size="2" autocomplete="off" placeholder="?">
        <span>&nbsp;→ je partage l'unité (segment&nbsp;0→1) en&nbsp;</span>
        <input class="azf-step-inp rapido-input" data-expected="${a}" data-solution="${a}" type="text" inputmode="numeric" size="2" autocomplete="off" placeholder="?">
        <span>&nbsp;parts.</span>
        <span class="azf-step-fb" aria-hidden="true"></span>
      </div>`,d=`
      <div class="azf-step step-A azf-step--active" data-phase="identifier_denominateur">
        <span class="azf-step-label">A.</span>
        <span>L'unité (segment&nbsp;0→1) est partagée en&nbsp;</span>
        <input class="azf-step-inp rapido-input" data-expected="${a}" data-solution="${a}" type="text" inputmode="numeric" size="2" autocomplete="off" placeholder="?">
        <span>&nbsp;parts.</span>
        <span class="azf-step-fb" aria-hidden="true"></span>
      </div>`,f=`
      <div class="azf-step step-B azf-step--hidden" data-phase="identifier_unite">
        <span class="azf-step-label">B.</span>
        <span>Dans 1 unité, il y a donc&nbsp;${a}&nbsp;pas. Chaque pas vaut&nbsp;</span>
        ${o(1,a)}
        <span class="azf-step-fb" aria-hidden="true"></span>
      </div>`;if(this._mode==="placer")i.innerHTML=`
        <summary>🔧 Aide pas-à-pas</summary>
        <div class="azf-body">
          ${n}
          ${f}
          <div class="azf-step step-C azf-step--hidden" data-phase="compter_pas">
            <span class="azf-step-label">C.</span>
            <span>Le numérateur de&nbsp;${p} est&nbsp;</span>
            <input class="azf-step-inp rapido-input" data-expected="${t}" data-solution="${t}" type="text" inputmode="numeric" size="2" autocomplete="off" placeholder="?">
            <span class="azf-step-fb" aria-hidden="true"></span>
            <span class="azf-step-after">→ j'avance donc de&nbsp;${t}&nbsp;pas depuis 0.</span>
          </div>
          <div class="azf-step step-D azf-step--hidden" data-phase="placer_le_curseur">
            <span class="azf-step-label">D.</span>
            <span>Compte ${t}&nbsp;graduations à partir de 0, puis <strong>clique précisément</strong> sur l'axe à cette position.</span>
          </div>
        </div>
      `;else{const s=this._pointLabel();i.innerHTML=`
        <summary>🔧 Aide pas-à-pas</summary>
        <div class="azf-body">
          ${d}
          ${f}
          <div class="azf-step step-C azf-step--hidden" data-phase="compter_pas">
            <span class="azf-step-label">C.</span>
            <span>Combien de pas y a-t-il entre 0 et le point&nbsp;<strong>${s}</strong>&nbsp;?</span>
            <input class="azf-step-inp rapido-input" data-expected="${t}" data-solution="${t}" type="text" inputmode="numeric" size="2" autocomplete="off" placeholder="?">
            <span class="azf-step-fb" aria-hidden="true"></span>
            <span class="azf-step-after">→ il y a&nbsp;${t}&nbsp;pas.</span>
          </div>
          <div class="azf-step step-D azf-step--hidden" data-phase="placer_le_curseur">
            <span class="azf-step-label">D.</span>
            <span>L'abscisse de&nbsp;<strong>${s}</strong> est donc&nbsp;${p}. Tape-la dans le champ ci-dessus&nbsp;!</span>
          </div>
        </div>
      `}this.appendChild(i),this._panel=i,this._wireSteps()}_revealGraduations(){const e=this._denFromAttr();if(!this._inner||!e||e<2)return;const l=1/e;this._inner.setAttribute("step",String(l)),typeof this._inner.render=="function"&&this._inner.render()}_pointLabel(){try{return JSON.parse(this.getAttribute("points")||"[]").find(r=>r.label==="?"||r.question)?.label||"A"}catch{return"A"}}_numFromAttr(){const e=this.getAttribute("num");return e!=null?parseInt(e,10):null}_denFromAttr(){const e=this.getAttribute("den");return e!=null?parseInt(e,10):null}_wireSteps(){const e=Array.from(this._panel.querySelectorAll(".azf-step"));e.map(t=>Array.from(t.querySelectorAll(".azf-step-inp"))).forEach((t,a)=>{if(!t.length)return;e[a].querySelector(".azf-step-fb");const i=()=>{let p=!0,o=!1;if(t.forEach(n=>{const d=parseInt(n.value,10),f=parseInt(n.dataset.expected,10),s=d===f,c=n.value!=="";c&&(o=!0),s||(p=!1),m(n,c?s?"correct":"incorrect":"neutral")}),p&&o){e[a].classList.add("azf-step--done"),e[a].classList.remove("azf-step--active"),a===0&&this._revealGraduations();for(let n=a+1;n<e.length;n++){e[n].classList.remove("azf-step--hidden"),e[n].classList.add("azf-step--active");const d=e[n].querySelector(".azf-step-inp");if(d){d.focus();break}e[n].classList.add("azf-step--done"),e[n].classList.remove("azf-step--active")}}};t.forEach(p=>{p.addEventListener("blur",i),p.addEventListener("keydown",o=>{o.key==="Enter"?(o.preventDefault(),p.blur()):o.key==="Tab"&&i()}),p.addEventListener("input",()=>{m(p,"neutral")})})});const r=this.closest(".q-card");r&&b(()=>import("./fullscreen-viewer.BUc0A5gH.js").then(t=>t.h),__vite__mapDeps([0,1])).then(t=>t.wireCardInputs?.(r)).catch(()=>{})}getCurrentPhase(){if(this._panel?.open){const t=this._panel.querySelector(".azf-step--active");if(t?.dataset.phase)return t.dataset.phase}const e=this._inner?._studentAnswer;if(e==null)return"reponse_directe";const l=parseFloat(this._inner?.getAttribute("placeTarget")??"NaN");return Math.abs(e-l)<.001?"done":"erreur_reponse_directe"}validate(){return this._inner?.validate?.()}toggleSolution(e){return this._inner?.toggleSolution?.(e)}}customElements.get("math974-axe-gradue-zefor")||customElements.define("math974-axe-gradue-zefor",x);export{A as autoScale,_ as defaultPosition,L as randomize};
