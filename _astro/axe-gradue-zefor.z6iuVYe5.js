const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/rapido-engine.BEIqVwWr.js","_astro/rapidos-visuals-integration.C-5Lgf1L.js","_astro/editor.CJZspgfY.js"])))=>i.map(i=>d[i]);
import{_ as x}from"./editor.CJZspgfY.js";import{r as z}from"./rapido-engine.BEIqVwWr.js";import{randomize as E}from"./axe-gradue.DxWg-gCB.js";import"./rapidos-visuals-integration.C-5Lgf1L.js";const $="content",S=!0,y=`
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

/* Mot "unité" cliquable — eye-catching, pulse doré, curseur main + petit 👆.
   Au clic, on pop un mini-segment "0 |———| 1" en tooltip animé. */
.azf-unite-click {
  display: inline-block;
  position: relative;
  cursor: pointer;
  color: #b45309;
  font-weight: 700;
  border-bottom: 2px dotted #f59e0b;
  padding: 0 3px;
  border-radius: 4px;
  transition: transform 0.15s, background 0.15s;
  animation: azf-unite-pulse 1.8s ease-in-out infinite;
  user-select: none;
}
@keyframes azf-unite-pulse {
  0%, 100% { background: transparent; box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.4); }
  50%      { background: rgba(245, 158, 11, 0.18); box-shadow: 0 0 0 4px rgba(245, 158, 11, 0); }
}
.azf-unite-click:hover {
  background: rgba(245, 158, 11, 0.28);
  transform: scale(1.06);
}
.azf-unite-click::after {
  content: '👆';
  font-size: 0.65em;
  margin-left: 2px;
  vertical-align: super;
  opacity: 0.75;
  animation: azf-unite-hint-bob 1.2s ease-in-out infinite;
  display: inline-block;
}
@keyframes azf-unite-hint-bob {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-2px); }
}
.azf-unite-click.seen {
  animation: none;
  border-bottom-style: solid;
  border-bottom-color: #cbd5e1;
  color: #475569;
}
.azf-unite-click.seen::after { display: none; }

/* Pop bubble du segment "|———| 0   1" au clic. Position absolue au-dessus
   du mot, auto-disparait après l'animation. Segment fait en HTML+CSS pur
   (pas de SVG) — plus fiable pour le rendu cross-browser. */
.azf-unite-pop {
  position: absolute;
  left: 50%;
  bottom: 100%;
  margin-bottom: 10px;
  background: white;
  border: 2px solid #f59e0b;
  border-radius: 10px;
  padding: 10px 14px 8px;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.22);
  z-index: 100;
  pointer-events: none;
  white-space: nowrap;
  animation: azf-unite-pop-in 2.4s cubic-bezier(.34,1.56,.64,1) forwards;
  transform-origin: center bottom;
  min-width: 120px;
}
.azf-unite-pop::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: #f59e0b;
}
@keyframes azf-unite-pop-in {
  0%   { opacity: 0; transform: translateX(-50%) scale(0.4); }
  18%  { opacity: 1; transform: translateX(-50%) scale(1.1); }
  30%  { transform: translateX(-50%) scale(1); }
  80%  { opacity: 1; transform: translateX(-50%) scale(1); }
  100% { opacity: 0; transform: translateX(-50%) scale(0.95) translateY(-6px); }
}
/* Segment : tirets verticaux aux extrémités + ligne horizontale. */
.azf-pop-seg {
  display: flex;
  align-items: center;
  height: 16px;
  width: 100%;
}
.azf-pop-tick {
  width: 3px;
  height: 14px;
  background: #1e293b;
  border-radius: 2px;
  flex-shrink: 0;
}
.azf-pop-line {
  flex: 1;
  height: 3px;
  background: #1e293b;
  border-radius: 2px;
}
.azf-pop-labels {
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
  font-size: 0.95em;
  font-weight: 900;
  color: #1e293b;
  letter-spacing: -0.5px;
}
.azf-pop-labels > span { line-height: 1; }
`;let g=!1;function v(){if(g)return;g=!0;const m=document.createElement("style");m.textContent=y,document.head.appendChild(m)}class k extends HTMLElement{connectedCallback(){v(),this.hasAttribute("placeTarget")?this.dataset.placeMode="1":delete this.dataset.placeMode,this._render()}_render(){this.innerHTML="",this._mode=this.hasAttribute("placeTarget")?"placer":"lire";const e=document.createElement("math974-axe-gradue");for(const s of Array.from(this.attributes))s.name!=="data-place-mode"&&e.setAttribute(s.name,s.value);const p=parseFloat(this.getAttribute("max")||"1"),a=[];for(let s=0;s<=Math.floor(p+1e-9);s++)a.push(s);e.setAttribute("visibleLabels",JSON.stringify(a)),this._mode==="placer"&&e.setAttribute("step","1"),this._inner=e,this.appendChild(e);const t=this._numFromAttr(),n=this._denFromAttr();if(t===null||n===null)return;const l=document.createElement("details");l.className="azf-help";const i=`<span class="axe-frac"><span class="axe-frac-num">${t}</span><span class="axe-frac-den">${n}</span></span>`,c=(s,h)=>`<span class="azf-frac-inline"><span class="azf-frac-inline-num"><input class="azf-step-inp rapido-input" data-expected="${s}" data-solution="${s}" type="text" inputmode="numeric" size="2" autocomplete="off" placeholder="?"></span><span class="azf-frac-inline-bar"></span><span class="azf-frac-inline-den"><input class="azf-step-inp rapido-input" data-expected="${h}" data-solution="${h}" type="text" inputmode="numeric" size="2" autocomplete="off" placeholder="?"></span></span>`,o=`<span class="azf-unite-click" tabindex="0" role="button" aria-label="Voir le segment unité">l'unité</span>`,r=`<span class="azf-unite-click" tabindex="0" role="button" aria-label="Voir le segment unité">L'unité</span>`,d='<span class="azf-unite-click" tabindex="0" role="button" aria-label="Voir le segment unité">1 unité</span>',f=`
      <div class="azf-step step-A azf-step--active" data-phase="identifier_denominateur">
        <span class="azf-step-label">A.</span>
        <span>Dans la fraction&nbsp;${i}, le dénominateur est&nbsp;</span>
        <input class="azf-step-inp rapido-input" data-expected="${n}" data-solution="${n}" type="text" inputmode="numeric" size="2" autocomplete="off" placeholder="?">
        <span>&nbsp;donc je partage ${o} en&nbsp;</span>
        <input class="azf-step-inp rapido-input" data-expected="${n}" data-solution="${n}" type="text" inputmode="numeric" size="2" autocomplete="off" placeholder="?">
        <span>&nbsp;parts.</span>
        <span class="azf-step-fb" aria-hidden="true"></span>
      </div>`,u=`
      <div class="azf-step step-A azf-step--active" data-phase="identifier_denominateur">
        <span class="azf-step-label">A.</span>
        ${r}
        <span>&nbsp;est partagée en&nbsp;</span>
        <input class="azf-step-inp rapido-input" data-expected="${n}" data-solution="${n}" type="text" inputmode="numeric" size="2" autocomplete="off" placeholder="?">
        <span>&nbsp;parts.</span>
        <span class="azf-step-fb" aria-hidden="true"></span>
      </div>`,b=`
      <div class="azf-step step-B azf-step--hidden" data-phase="identifier_unite">
        <span class="azf-step-label">B.</span>
        <span>Dans ${d}, il y a donc&nbsp;${n}&nbsp;pas. Chaque pas vaut&nbsp;</span>
        ${c(1,n)}
        <span class="azf-step-fb" aria-hidden="true"></span>
      </div>`;if(this._mode==="placer")l.innerHTML=`
        <summary>🔧 Aide pas-à-pas</summary>
        <div class="azf-body">
          ${f}
          ${b}
          <div class="azf-step step-C azf-step--hidden" data-phase="compter_pas">
            <span class="azf-step-label">C.</span>
            <span>Le numérateur de&nbsp;${i} est&nbsp;</span>
            <input class="azf-step-inp rapido-input" data-expected="${t}" data-solution="${t}" type="text" inputmode="numeric" size="2" autocomplete="off" placeholder="?">
            <span class="azf-step-fb" aria-hidden="true"></span>
            <span class="azf-step-after">donc j'avance de&nbsp;${t}&nbsp;pas depuis 0.</span>
          </div>
          <div class="azf-step step-D azf-step--hidden" data-phase="placer_le_curseur">
            <span class="azf-step-label">D.</span>
            <span>Compte ${t}&nbsp;graduations à partir de 0, puis <strong>clique précisément</strong> sur l'axe à cette position.</span>
          </div>
        </div>
      `;else{const s=this._pointLabel();l.innerHTML=`
        <summary>🔧 Aide pas-à-pas</summary>
        <div class="azf-body">
          ${u}
          ${b}
          <div class="azf-step step-C azf-step--hidden" data-phase="compter_pas">
            <span class="azf-step-label">C.</span>
            <span>Combien de pas y a-t-il entre 0 et le point&nbsp;<strong>${s}</strong>&nbsp;?</span>
            <input class="azf-step-inp rapido-input" data-expected="${t}" data-solution="${t}" type="text" inputmode="numeric" size="2" autocomplete="off" placeholder="?">
            <span class="azf-step-fb" aria-hidden="true"></span>
            <span class="azf-step-after">donc il y a&nbsp;${t}&nbsp;pas.</span>
          </div>
          <div class="azf-step step-D azf-step--hidden" data-phase="placer_le_curseur">
            <span class="azf-step-label">D.</span>
            <span>L'abscisse de&nbsp;<strong>${s}</strong> est donc&nbsp;${i}. Tape-la dans le champ ci-dessus&nbsp;!</span>
          </div>
        </div>
      `}this.appendChild(l),this._panel=l,this._wireSteps(),this._wireUniteClicks()}_wireUniteClicks(){if(!this._panel)return;const e=`
      <span class="azf-pop-seg" aria-hidden="true">
        <span class="azf-pop-tick"></span>
        <span class="azf-pop-line"></span>
        <span class="azf-pop-tick"></span>
      </span>
      <span class="azf-pop-labels" aria-hidden="true">
        <span>0</span>
        <span>1</span>
      </span>`,p=a=>{a.querySelector(".azf-unite-pop")?.remove();const t=document.createElement("span");t.className="azf-unite-pop",t.innerHTML=e,a.appendChild(t),a.classList.add("seen"),setTimeout(()=>t.remove(),2400)};this._panel.querySelectorAll(".azf-unite-click").forEach(a=>{a.addEventListener("click",t=>{t.preventDefault(),t.stopPropagation(),p(a)}),a.addEventListener("keydown",t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),p(a))})})}_revealGraduations(){const e=this._denFromAttr();if(!this._inner||!e||e<2)return;const p=1/e;this._inner.setAttribute("step",String(p)),typeof this._inner.render=="function"&&this._inner.render()}_pointLabel(){try{return JSON.parse(this.getAttribute("points")||"[]").find(a=>a.label==="?"||a.question)?.label||"A"}catch{return"A"}}_numFromAttr(){const e=this.getAttribute("num");return e!=null?parseInt(e,10):null}_denFromAttr(){const e=this.getAttribute("den");return e!=null?parseInt(e,10):null}_wireSteps(){const e=Array.from(this._panel.querySelectorAll(".azf-step"));e.map(t=>Array.from(t.querySelectorAll(".azf-step-inp"))).forEach((t,n)=>{if(!t.length)return;e[n].querySelector(".azf-step-fb");const l=()=>{let i=!0,c=!1;if(t.forEach(o=>{const r=parseInt(o.value,10),d=parseInt(o.dataset.expected,10),f=r===d,u=o.value!=="";u&&(c=!0),f||(i=!1),z(o,u?f?"correct":"incorrect":"neutral")}),i&&c){e[n].classList.add("azf-step--done"),e[n].classList.remove("azf-step--active"),n===0&&this._revealGraduations();let o=!1;for(let r=n+1;r<e.length;r++){if(e[r].classList.remove("azf-step--hidden"),e[r].classList.add("azf-step--active"),e[r].querySelector(".azf-step-inp")){o=!0;break}e[r].classList.add("azf-step--done"),e[r].classList.remove("azf-step--active")}if(!o)if(this._mode==="lire"){const d=this.closest(".q-card")?.querySelector(".sa-projected-text .axe-frac-input input.rapido-input");d&&d.focus()}else document.activeElement?.blur?.()}};t.forEach(i=>{i.addEventListener("blur",l),i.addEventListener("keydown",c=>{c.key==="Enter"?(c.preventDefault(),i.blur()):c.key==="Tab"&&l()}),i.addEventListener("input",()=>{z(i,"neutral")})})});const a=this.closest(".q-card");a&&x(()=>import("./rapido-engine.BEIqVwWr.js").then(t=>t.h),__vite__mapDeps([0,1,2])).then(t=>t.wireCardInputs?.(a)).catch(()=>{})}getCurrentPhase(){if(this._panel?.open){const t=this._panel.querySelector(".azf-step--active");if(t?.dataset.phase)return t.dataset.phase;if(this._panel.querySelectorAll(".azf-step--done").length>0)return"placer_le_curseur"}const e=this._inner?._studentAnswer;if(e==null)return"reponse_directe";const p=parseFloat(this._inner?.getAttribute("placeTarget")??"NaN");return Math.abs(e-p)<.001?"done":"erreur_reponse_directe"}validate(){return this._inner?.validate?.()}toggleSolution(e){return this._inner?.toggleSolution?.(e)}}customElements.get("math974-axe-gradue-zefor")||customElements.define("math974-axe-gradue-zefor",k);export{S as autoScale,$ as defaultPosition,E as randomize};
