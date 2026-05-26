import{randomize as L}from"./axe-gradue.Dfo1EJ7b.js";import"./fullscreen-viewer.CrYaFVH1.js";import"./editor.CJZspgfY.js";const v="content",y=!0,b=`
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
  opacity: 0.35;                    /* étapes futures grisées */
  transition: opacity 0.2s;
}
.azf-step--active {
  opacity: 1;
  border-color: #6366f1;
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.15);
}
.azf-step--done {
  opacity: 1;
  border-color: #16a34a;
  background: #f0fdf4;
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
`;let f=!1;function h(){if(f)return;f=!0;const l=document.createElement("style");l.textContent=b,document.head.appendChild(l)}class z extends HTMLElement{connectedCallback(){h(),this.dataset.placeMode="1",this._render()}_render(){this.innerHTML="";const e=document.createElement("math974-axe-gradue");for(const a of Array.from(this.attributes))a.name!=="data-place-mode"&&e.setAttribute(a.name,a.value);this._inner=e,this.appendChild(e);const s=this._numFromAttr(),n=this._denFromAttr();if(s===null||n===null)return;const r=document.createElement("details");r.className="azf-help";const t=`<span class="axe-frac"><span class="axe-frac-num">${s}</span><span class="axe-frac-den">${n}</span></span>`;r.innerHTML=`
      <summary>🔧 Aide pas-à-pas</summary>
      <div class="azf-body">
        <div class="azf-step step-A azf-step--active" data-phase="identifier_denominateur">
          <span class="azf-step-label">A.</span>
          <span>Dans la fraction&nbsp;${t}, le dénominateur est&nbsp;</span>
          <input class="azf-step-inp" data-expected="${n}" type="text" inputmode="numeric" size="2" autocomplete="off" placeholder="?">
          <span class="azf-step-fb" aria-hidden="true"></span>
          <span class="azf-step-after">→ je partage l'unité (segment&nbsp;0→1) en&nbsp;${n}&nbsp;parts.</span>
        </div>
        <div class="azf-step step-B" data-phase="identifier_unite">
          <span class="azf-step-label">B.</span>
          <span>Dans 1 unité, il y a donc ${n}&nbsp;pas. Chaque pas vaut&nbsp;<span class="axe-frac"><span class="axe-frac-num">1</span><span class="axe-frac-den">${n}</span></span>.</span>
        </div>
        <div class="azf-step step-C" data-phase="compter_pas">
          <span class="azf-step-label">C.</span>
          <span>Le numérateur de&nbsp;${t} est&nbsp;</span>
          <input class="azf-step-inp" data-expected="${s}" type="text" inputmode="numeric" size="2" autocomplete="off" placeholder="?">
          <span class="azf-step-fb" aria-hidden="true"></span>
          <span class="azf-step-after">→ j'avance donc de ${s}&nbsp;pas depuis 0.</span>
        </div>
        <div class="azf-step step-D" data-phase="placer_le_curseur">
          <span class="azf-step-label">D.</span>
          <span>Compte ${s}&nbsp;graduations à partir de 0, puis <strong>clique précisément</strong> sur l'axe à cette position.</span>
        </div>
      </div>
    `,this.appendChild(r),this._panel=r,this._wireSteps()}_numFromAttr(){const e=this.getAttribute("num");return e!=null?parseInt(e,10):null}_denFromAttr(){const e=this.getAttribute("den");return e!=null?parseInt(e,10):null}_wireSteps(){const e=Array.from(this._panel.querySelectorAll(".azf-step")),s=e.map(t=>t.querySelector(".azf-step-inp")),n=e.map(t=>t.querySelector(".azf-step-fb"));(t=>{e.forEach((a,o)=>{a.classList.toggle("azf-step--active",o===t&&!a.classList.contains("azf-step--done"))})})(0),s.forEach((t,a)=>{if(!t)return;const o=n[a],u=parseInt(t.dataset.expected,10),m=()=>{const i=parseInt(t.value,10)===u;if(t.classList.toggle("correct",i),t.classList.toggle("incorrect",!i&&t.value!==""),o&&(o.classList.toggle("ok",i),o.classList.toggle("ko",!i&&t.value!=="")),i){e[a].classList.add("azf-step--done"),e[a].classList.remove("azf-step--active");for(let p=a+1;p<e.length;p++){e[p].classList.add("azf-step--active");const d=e[p].querySelector(".azf-step-inp");if(d){d.focus();break}e[p].classList.add("azf-step--done"),e[p].classList.remove("azf-step--active")}}};t.addEventListener("blur",m),t.addEventListener("keydown",c=>{c.key==="Enter"&&(c.preventDefault(),t.blur())}),t.addEventListener("input",()=>{t.classList.remove("correct","incorrect"),o?.classList.remove("ok","ko")})})}getCurrentPhase(){if(this._panel?.open){const r=this._panel.querySelector(".azf-step--active");if(r?.dataset.phase)return r.dataset.phase}const e=this._inner?._studentAnswer;if(e==null)return"reponse_directe";const s=parseFloat(this._inner?.getAttribute("placeTarget")??"NaN");return Math.abs(e-s)<.001?"done":"erreur_reponse_directe"}validate(){return this._inner?.validate?.()}toggleSolution(e){return this._inner?.toggleSolution?.(e)}}customElements.get("math974-axe-gradue-zefor")||customElements.define("math974-axe-gradue-zefor",z);export{y as autoScale,v as defaultPosition,L as randomize};
