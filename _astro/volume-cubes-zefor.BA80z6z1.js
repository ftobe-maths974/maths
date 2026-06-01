const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/rapido-engine.C8UCvB3m.js","_astro/editor.CJZspgfY.js","_astro/rapidos-visuals-integration.v8j-7aTf.js","_astro/js-yaml.CwjAzRNl.js"])))=>i.map(i=>d[i]);
import{_ as M}from"./editor.CJZspgfY.js";import{ensureSharedStyles as k}from"./vis-input.Bx75NjJR.js";import{parseRange as _}from"./utils.MftNdmoG.js";import"./rapido-engine.C8UCvB3m.js";import"./rapidos-visuals-integration.v8j-7aTf.js";import"./js-yaml.CwjAzRNl.js";const R="content",Y=!0,q=22,T=12,H=26,C=[205,145,35,280,0,175,50,320];function D(v,n){const r=n?70:42;return{top:`hsl(${v} ${r}% 70%)`,left:`hsl(${v} ${r}% 55%)`,right:`hsl(${v} ${r}% 42%)`}}class I extends HTMLElement{static get observedAttributes(){return["lx","ly","lz","removed","answer"]}connectedCallback(){k(),j(),this.dataset.placeMode="1",this._render()}attributeChangedCallback(){this.isConnected&&this._render()}_cfg(){const n=parseInt(this.getAttribute("lx"),10),r=parseInt(this.getAttribute("ly"),10),c=parseInt(this.getAttribute("lz"),10);let i=[];try{i=JSON.parse(this.getAttribute("removed")||"[]")}catch{}const m=n*r*c-i.length;return{lx:n,ly:r,lz:c,removed:i,answer:m}}_present(n,r,c,i){const m=new Set(i.map(l=>l.join(","))),d=[];for(let l=0;l<c;l++)for(let o=0;o<r;o++)for(let a=0;a<n;a++)m.has(`${a},${o},${l}`)||d.push([a,o,l]);return d}_buildSolid(n,r,c,i,{colorByLayer:m=!1,highlightK:d=null}={}){const l=this._present(n,r,c,i),o=(e,t,s)=>[(e-t)*q,(e+t)*T-s*H];let a=1e9,f=-1e9,h=1e9,x=-1e9;for(let e=0;e<=n;e++)for(let t=0;t<=r;t++)for(let s=0;s<=c;s++){const[y,$]=o(e,t,s);a=Math.min(a,y),f=Math.max(f,y),h=Math.min(h,$),x=Math.max(x,$)}const b=6,g=`${a-b} ${h-b} ${f-a+2*b} ${x-h+2*b}`;l.sort((e,t)=>e[0]+e[1]+e[2]-(t[0]+t[1]+t[2]));const z=(e,t)=>`<polygon points="${e.map(s=>`${s[0].toFixed(1)},${s[1].toFixed(1)}`).join(" ")}" fill="${t}" stroke="#0f172a" stroke-width="1.2" stroke-linejoin="round"/>`;let p="";for(const[e,t,s]of l){const y=d!=null&&s!==d,$=m?C[s%C.length]:205,w=D($,d!=null&&s===d),u=y?.18:1,E=[o(e,t,s+1),o(e+1,t,s+1),o(e+1,t+1,s+1),o(e,t+1,s+1)],S=[o(e,t+1,s),o(e+1,t+1,s),o(e+1,t+1,s+1),o(e,t+1,s+1)],L=[o(e+1,t,s),o(e+1,t+1,s),o(e+1,t+1,s+1),o(e+1,t,s+1)];p+=`<g opacity="${u}">${z(S,w.left)}${z(L,w.right)}${z(E,w.top)}</g>`}return`<svg class="vcz-svg" viewBox="${g}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Solide composé de petits cubes">${p}</svg>`}_render(){const{lx:n,ly:r,lz:c,removed:i,answer:m}=this._cfg();if(![n,r,c].every(Number.isFinite)){this.innerHTML="";return}this.innerHTML="";const d=document.createElement("div");d.className="vcz-wrap";const l=document.createElement("div");l.className="vcz-solid",l.innerHTML=this._buildSolid(n,r,c,i),d.appendChild(l),this._solidEl=l;const o=document.createElement("div");o.className="vcz-answer",o.innerHTML=`
      <span>Volume :</span>
      <input class="vcz-input rapido-input" type="text" autocomplete="off" inputmode="numeric" placeholder="?">
      <span>cm³</span>
      <span class="rapido-fb" aria-hidden="true"></span>`;const a=o.querySelector(".vcz-input");a.dataset.solution=String(m),d.appendChild(o),this._inpDirect=a;const f=document.createElement("details");f.className="vcz-schema",f.innerHTML="<summary>💡 Décomposer en couches</summary>";const h=document.createElement("div");h.className="vcz-schema-body";const x=n*r,b=n*r*c,g=i.length?` <span class="vcz-rem">− ${i.length} cube${i.length>1?"s":""} enlevé${i.length>1?"s":""}</span> = <strong>${b} − ${i.length} = ${m}</strong>`:` = <strong>${m}</strong>`;h.innerHTML=`
      <div class="vcz-stage"></div>
      <div class="vcz-calc">
        <button type="button" class="vcz-btn vcz-cut">▶ Découper en couches</button>
        <button type="button" class="vcz-btn vcz-btn--ghost vcz-reset" style="display:none">⟳ Solide entier</button>
        <p class="vcz-calc-txt">Une couche (le sol) = <strong>${n} × ${r} = ${x}</strong> cubes.<br>
        Il y a <strong>${c} couches</strong> (étages) → ${x} × ${c} = <strong>${b}</strong>${g} cm³.</p>
      </div>`,f.appendChild(h),d.appendChild(f);const z=h.querySelector(".vcz-stage"),p=h.querySelector(".vcz-cut"),e=h.querySelector(".vcz-reset");let t=-1;const s=u=>{t=u,z.innerHTML=this._buildSolid(n,r,c,i,{colorByLayer:!0,highlightK:u}),p.textContent=u<c-1?`▶ Couche suivante (${u+1}/${c})`:`Couche ${c}/${c}`,p.disabled=u>=c-1,e.style.display=""};p.addEventListener("click",()=>s(t+1)),e.addEventListener("click",()=>{t=-1,z.innerHTML="",p.textContent="▶ Découper en couches",p.disabled=!1,e.style.display="none"}),this._schemaDetails=f,this.appendChild(d),a.addEventListener("keydown",u=>{u.key==="Enter"&&(u.preventDefault(),a.blur())});const y=this.closest(".q-card");y&&M(()=>import("./rapido-engine.C8UCvB3m.js").then(u=>u.j),__vite__mapDeps([0,1,2,3])).then(u=>u.wireCardInputs?.(y)).catch(()=>{}),new MutationObserver(()=>{a.classList.contains("incorrect")&&this.closest(".q-card")?.dispatchEvent(new CustomEvent("zefor-indice-auto-pop",{detail:{studentValue:a.value,source:this},bubbles:!0}))}).observe(a,{attributes:!0,attributeFilter:["class"]});let w=null;a.addEventListener("input",()=>{clearTimeout(w),w=setTimeout(()=>{const u=this.closest(".q-card");!u||!u.querySelector(".am-indice-panel.open")||u.dispatchEvent(new CustomEvent("zefor-indice-auto-refresh",{detail:{studentValue:a.value,source:this},bubbles:!0}))},300)})}getCurrentPhase(){const{answer:n}=this._cfg(),r=(this._inpDirect?.value??"").trim().replace(",",".");return r===""?"reponse_directe":Math.abs(parseFloat(r)-n)<.001?"done":"erreur_reponse_directe"}validate(){const{answer:n}=this._cfg(),r=parseFloat((this._inpDirect?.value??"").replace(",","."));return!isNaN(r)&&Math.abs(r-n)<.001}toggleSolution(n){n&&this._schemaDetails&&(this._schemaDetails.open=!0)}}customElements.get("math974-volume-cubes-zefor")||customElements.define("math974-volume-cubes-zefor",I);const N=`
math974-volume-cubes-zefor { display:block; font-family:inherit; width:100%; }
.vcz-wrap { display:flex; flex-direction:column; align-items:center; gap:8px; }
.vcz-solid { width:100%; max-width:280px; }
.vcz-svg { width:100%; height:auto; display:block; }
/* Plafonne la hauteur du solide principal → l'énoncé ne se fait pas rogner
   quand .q-card-content centre verticalement un contenu trop haut. */
.vcz-solid .vcz-svg { max-height:26vh; margin:0 auto; width:auto; max-width:100%; }
.vcz-answer {
  display:flex; align-items:center; gap:8px; font-weight:700; color:#0f172a;
  padding:10px 14px; background:rgba(16,185,129,.06); border:2px solid rgba(16,185,129,.2); border-radius:10px;
  /* Conforme au prototype fontsize : suit --q-text-size (webapp) et
     --a4-font-scale (aperçu A4). Les enfants en em suivent. */
  font-size:calc(var(--q-text-size, 1.3rem) * var(--a4-font-scale, 1) * 0.8);
}
.vcz-input {
  border:none; border-bottom:2px solid #10b981; outline:none; font-size:1.15em; font-weight:700;
  font-family:inherit; text-align:center; width:5ch; color:#0f172a; background:transparent; padding:4px 0;
}
.vcz-input:focus { border-bottom-color:#059669; background:rgba(16,185,129,.08); }
.vcz-input.correct { border-bottom-color:#16a34a; color:#15803d; }
.vcz-input.incorrect { border-bottom-color:#dc2626; color:#dc2626; }
.vcz-schema { width:100%; max-width:380px; background:rgba(15,23,42,.03); border:1px solid rgba(15,23,42,.08); border-radius:8px; padding:4px 12px;
  /* Conforme au prototype fontsize (enfants en em → suivent). */
  font-size:calc(var(--q-text-size, 1.3rem) * var(--a4-font-scale, 1) * 0.62); }
.vcz-schema > summary { cursor:pointer; padding:8px 4px; font-weight:500; font-size:.95em; color:#475569; user-select:none; -webkit-user-select:none; }
.vcz-schema[open] > summary { margin-bottom:8px; border-bottom:1px dashed rgba(15,23,42,.15); }
.vcz-stage { width:100%; max-width:300px; margin:0 auto; }
.vcz-stage .vcz-svg { max-height:40vh; }
.vcz-calc { text-align:center; }
.vcz-calc-txt { font-size:.9em; color:#334155; line-height:1.5; margin:8px 0 4px; }
.vcz-rem { color:#dc2626; font-weight:600; }
.vcz-btn { appearance:none; border:2px solid #10b981; background:#10b981; color:#fff; font-weight:700; font-family:inherit; font-size:.85rem; padding:6px 12px; border-radius:8px; cursor:pointer; min-height:40px; margin:2px; }
.vcz-btn:hover:not(:disabled) { background:#059669; border-color:#059669; }
.vcz-btn:disabled { opacity:.5; cursor:default; }
.vcz-btn--ghost { background:#fff; color:#047857; }
`;function j(){if(document.getElementById("vcz-styles"))return;const v=document.createElement("style");v.id="vcz-styles",v.textContent=N,document.head.appendChild(v)}function U(v,n,r){const c=_(n?.lx??"2..4"),i=_(n?.ly??"2..4"),m=_(n?.lz??"2..4"),d=n?.creuse===!0||v?.creuse==="true",l=[];if(d){const b=m-1,g=[];for(let p=0;p<c;p++)for(let e=0;e<i;e++)g.push([p,e,b]);const z=Math.min(_(n?.nrem??"1..3"),g.length-1);for(let p=0;p<z&&g.length>1;p++)l.push(g.splice(Math.floor(Math.random()*g.length),1)[0])}const o=c*i*m,a=o-l.length,f=c+i+m,h=c*i;return{...v,lx:c,ly:i,lz:m,removed:l,answer:a,err_sum:f,err_base:h,err_full:o}}export{Y as autoScale,R as defaultPosition,U as randomize};
