import{ensureSharedStyles as v}from"./vis-input.C5Z818b4.js";import"./editor.CJZspgfY.js";import"./rapido-engine.BOFBS2Aa.js";import"./rapidos-visuals-integration.DGXTvBKI.js";import"./js-yaml.CwjAzRNl.js";const A="content",L=!0,f={control:"#FFAB19",motion:"#4C97FF"};function y(p,e,i){const r=s=>`<span class="sp-num">${s}</span>`,t=`<div class="sp-block spz-motion">avancer de ${r(i)} pas</div><div class="sp-block spz-motion">tourner ↻ de ${r(e)} degrés</div>`;return`<div class="sp-prog spz-prog"><div class="sp-block spz-hat">quand 🏁 cliqué</div><div class="sp-loop"><div class="sp-loop-top">répéter ${r(p)} fois</div><div class="sp-loop-mid"><div class="sp-loop-bar"></div><div class="sp-loop-body">${t}</div></div><div class="sp-loop-bot"></div></div></div>`}function z(p){const t=[];for(let s=0;s<p;s++){const a=-Math.PI/2+2*Math.PI*s/p;t.push(`${(46+38*Math.cos(a)).toFixed(1)},${(46+38*Math.sin(a)).toFixed(1)}`)}return`<svg viewBox="0 0 92 92" width="92" height="92" aria-label="polygone régulier à ${p} côtés">
    <polygon points="${t.join(" ")}" fill="none" stroke="#0369a1" stroke-width="3" stroke-linejoin="round"/></svg>`}const w={3:"triangle équilatéral",4:"carré",5:"pentagone régulier",6:"hexagone régulier",7:"heptagone régulier",8:"octogone régulier",9:"ennéagone régulier",10:"décagone régulier"},k=`
math974-scratch-poly-zefor { display:block; font-family:inherit; width:100%; }
.spz-wrap { display:flex; flex-direction:column; align-items:center; gap:12px; }
.spz-q { display:flex; align-items:center; gap:12px; flex-wrap:wrap; justify-content:center; font-weight:600; color:#0f172a; }
.spz-q svg { flex-shrink:0; }
/* 3 options SUR UNE LIGNE (nowrap) — autoScale réduit l'ensemble pour tenir
   dans la largeur de la carte. */
.spz-opts { display:flex; gap:8px; flex-wrap:nowrap; align-items:flex-start; justify-content:center; }
.spz-opt { flex:0 0 auto; }
.spz-opt {
  display:flex; flex-direction:column; align-items:center; gap:6px; cursor:pointer;
  border:2px solid #e2e8f0; border-radius:10px; padding:8px 10px 10px; background:#fff;
  transition:border-color .15s, background .15s;
}
.spz-opt:hover { border-color:#cbd5e1; }
.spz-opt.spz-correct   { border-color:#16a34a; background:#f0fdf4; }
.spz-opt.spz-incorrect { border-color:#dc2626; background:#fef2f2; }
.spz-opt-head { display:flex; align-items:center; gap:6px; font-weight:700; }
.spz-opt input { width:18px; height:18px; accent-color:#6366f1; cursor:pointer; }
.spz-opt-fb { font-size:1.1em; min-width:1.2em; }
/* Blocs Scratch (réutilise sp-* de programme-scratch) + bloc mouvement bleu. */
.spz-prog { font:bold 11px/1.4 'Segoe UI',Arial,sans-serif; transform:scale(.92); transform-origin:top center; }
.sp-block { display:flex; align-items:center; gap:5px; padding:5px 10px; border-radius:5px; color:#fff; white-space:nowrap; }
.spz-hat { background:${f.control}; color:#1c1c1c; border-radius:5px 16px 5px 5px; }
.spz-motion { background:${f.motion}; }
.sp-num { background:#fff; color:#1e293b; border-radius:10px; padding:1px 7px; }
.sp-loop { display:flex; flex-direction:column; }
.sp-loop-top { display:flex; align-items:center; gap:5px; padding:5px 10px; border-radius:5px 5px 0 0; background:${f.control}; color:#1c1c1c; white-space:nowrap; }
.sp-loop-mid { display:flex; background:${f.control}; padding:3px 6px 3px 0; }
.sp-loop-bar { width:16px; flex-shrink:0; }
.sp-loop-body { flex:1; display:flex; flex-direction:column; gap:3px; padding:3px; }
.sp-loop-bot { height:10px; background:${f.control}; border-radius:0 0 5px 5px; }
`;function $(){if(document.getElementById("spz-styles"))return;const p=document.createElement("style");p.id="spz-styles",p.textContent=k,document.head.appendChild(p)}let S=0;class _ extends HTMLElement{static get observedAttributes(){return["n","ang","side","options","correct"]}connectedCallback(){v(),$(),this.dataset.placeMode="1",this._render()}attributeChangedCallback(){this.isConnected&&this._render()}_cfg(){const e=parseInt(this.getAttribute("n"),10),i=parseInt(this.getAttribute("ang"),10),r=parseInt(this.getAttribute("side"),10);let t=[];try{t=JSON.parse(this.getAttribute("options")||"[]")}catch{}const s=parseInt(this.getAttribute("correct"),10);return{n:e,ang:i,side:r,options:t,correct:s}}_render(){const{n:e,side:i,options:r,correct:t}=this._cfg();if(!Number.isFinite(e)||!r.length){this.innerHTML="";return}this.innerHTML="";const s=w[e]||`polygone à ${e} côtés`,a=`spz-${++S}`,n=document.createElement("div");n.className="spz-wrap",n.innerHTML=`
      <div class="spz-q">${z(e)}<span>Quel programme dessine ce <strong>${s}</strong>&nbsp;?</span></div>
      <div class="spz-opts">${r.map((u,c)=>`
        <label class="spz-opt" data-i="${c}">
          <span class="spz-opt-head"><input type="radio" name="${a}" value="${c}">
            <span>${"abcd"[c]})</span><span class="spz-opt-fb" aria-hidden="true"></span></span>
          ${y(u.rep,u.ang,i)}
        </label>`).join("")}</div>`,this.appendChild(n),this._wrap=n,n.querySelectorAll("input[type=radio]").forEach(u=>{u.addEventListener("change",()=>this._validate(!0))})}_validate(e){const{correct:i}=this._cfg(),r=this._wrap?.querySelector("input[type=radio]:checked");if(this._wrap?.querySelectorAll(".spz-opt").forEach(n=>{n.classList.remove("spz-correct","spz-incorrect"),n.querySelector(".spz-opt-fb").textContent=""}),!r)return;const t=parseInt(r.value,10),s=t===i,a=this._wrap.querySelector(`.spz-opt[data-i="${t}"]`);return a.classList.add(s?"spz-correct":"spz-incorrect"),a.querySelector(".spz-opt-fb").textContent=s?"😀":"😞",!s&&e&&this.closest(".q-card")?.dispatchEvent(new CustomEvent("zefor-indice-auto-pop",{detail:{studentValue:String(t),source:this},bubbles:!0})),s}getCurrentPhase(){const e=this._wrap?.querySelector("input[type=radio]:checked");if(!e)return"reponse_directe";const{correct:i}=this._cfg();return parseInt(e.value,10)===i?"done":"erreur_reponse_directe"}validate(){return this._validate(!1)}toggleSolution(e){if(!e||!this._wrap)return;const{correct:i}=this._cfg(),r=this._wrap.querySelector(`.spz-opt[data-i="${i}"] input`);r&&(r.checked=!0,this._validate(!1))}}customElements.get("math974-scratch-poly-zefor")||customElements.define("math974-scratch-poly-zefor",_);function N(p,e,i){const r=o=>{const l=String(o).trim(),h=l.match(/^(\d+)\.\.(\d+)$/);if(h){const g=+h[1],b=+h[2];return g+Math.floor(Math.random()*(b-g+1))}const m=l.split(",").map(g=>+g.trim()).filter(g=>!isNaN(g));return m[Math.floor(Math.random()*m.length)]},t=r(e?.n??"3..10"),s=r(e?.side??"40,50,60,80,100"),a=Math.round(360/t),n={rep:t,ang:a},u=[{rep:t,ang:t},{rep:t,ang:180-a},{rep:t+(Math.random()<.5?1:-1),ang:a},{rep:t,ang:Math.round(360/(t+1))}].filter(o=>!(o.rep===n.rep&&o.ang===n.ang)&&o.rep>=3&&o.ang>0),c=[];for(const o of u){if(c.length>=2)break;c.some(l=>l.rep===o.rep&&l.ang===o.ang)||c.push(o)}const d=[n,...c];for(let o=d.length-1;o>0;o--){const l=Math.floor(Math.random()*(o+1));[d[o],d[l]]=[d[l],d[o]]}const x=d.findIndex(o=>o.rep===n.rep&&o.ang===n.ang);return{...p,n:t,ang:a,side:s,options:d,correct:x}}export{L as autoScale,A as defaultPosition,N as randomize};
