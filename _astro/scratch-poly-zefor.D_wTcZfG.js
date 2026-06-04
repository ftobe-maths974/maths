import{ensureSharedStyles as z}from"./vis-input.CRrZ89jQ.js";import"./preload-helper.CLcXU_4U.js";import"./rapido-engine.Di7ssU67.js";import"./rapidos-visuals-integration.zmW5_4Tw.js";import"./js-yaml.CwjAzRNl.js";import"./editor.Di92v2Ao.js";const j="content",N=!0,m={control:"#FFAB19",motion:"#4C97FF"},y=s=>String(s).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>");function $(s,n,a){const e=r=>`<span class="sp-num">${r}</span>`,t=`<div class="sp-block spz-motion">avancer de ${e(a)} pas</div><div class="sp-block spz-motion">tourner ↻ de ${e(n)} degrés</div>`;return`<div class="sp-prog spz-prog"><div class="sp-block spz-hat">quand 🏁 cliqué</div><div class="sp-loop"><div class="sp-loop-top">répéter ${e(s)} fois</div><div class="sp-loop-mid"><div class="sp-loop-bar"></div><div class="sp-loop-body">${t}</div></div><div class="sp-loop-bot"></div></div></div>`}function k(s){const t=[];for(let r=0;r<s;r++){const l=-Math.PI/2+2*Math.PI*r/s;t.push(`${(46+38*Math.cos(l)).toFixed(1)},${(46+38*Math.sin(l)).toFixed(1)}`)}return`<svg viewBox="0 0 92 92" width="92" height="92" aria-label="polygone régulier à ${s} côtés">
    <polygon points="${t.join(" ")}" fill="none" stroke="#0369a1" stroke-width="3" stroke-linejoin="round"/></svg>`}function w(s,n,a){let e=0,t=0,r=-90;const l=[[e,t]];for(let o=0;o<s;o++){const p=r*Math.PI/180;e+=a*Math.cos(p),t+=a*Math.sin(p),l.push([e,t]),r+=n}return l}function M(s,n){const a=s.map(d=>d[0]),e=s.map(d=>d[1]),t=Math.min(...a),r=Math.max(...a),l=Math.min(...e),o=Math.max(...e),p=10,u=r-t||1,h=o-l||1,g=`${t-p} ${l-p} ${u+2*p} ${h+2*p}`,i="M "+s.map(d=>`${d[0].toFixed(1)},${d[1].toFixed(1)}`).join(" L "),c=s[s.length-1],f=s[0],x=Math.hypot(c[0]-f[0],c[1]-f[1])<1;return`<svg viewBox="${g}" width="120" height="120" style="max-width:120px" aria-label="tracé du programme">
    <path d="${i}" fill="none" stroke="${n?"#16a34a":"#dc2626"}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
    <circle cx="${f[0]}" cy="${f[1]}" r="4" fill="#0f172a"/>
    ${x?"":`<circle cx="${c[0].toFixed(1)}" cy="${c[1].toFixed(1)}" r="4" fill="#dc2626"/>`}</svg>`}const b={3:"triangle équilatéral",4:"carré",5:"pentagone régulier",6:"hexagone régulier",7:"heptagone régulier",8:"octogone régulier",9:"ennéagone régulier",10:"décagone régulier"},S=`
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
.spz-hat { background:${m.control}; color:#1c1c1c; border-radius:5px 16px 5px 5px; }
.spz-motion { background:${m.motion}; }
.sp-num { background:#fff; color:#1e293b; border-radius:10px; padding:1px 7px; }
.sp-loop { display:flex; flex-direction:column; }
.sp-loop-top { display:flex; align-items:center; gap:5px; padding:5px 10px; border-radius:5px 5px 0 0; background:${m.control}; color:#1c1c1c; white-space:nowrap; }
.sp-loop-mid { display:flex; background:${m.control}; padding:3px 6px 3px 0; }
.sp-loop-bar { width:16px; flex-shrink:0; }
.sp-loop-body { flex:1; display:flex; flex-direction:column; gap:3px; padding:3px; }
.sp-loop-bot { height:10px; background:${m.control}; border-radius:0 0 5px 5px; }
/* Résultat « voir la conséquence » : tracé du programme choisi + diagnostic. */
.spz-result:empty { display:none; }
.spz-result-in { display:flex; align-items:center; gap:12px; padding:8px 12px; border-radius:10px; max-width:420px; }
.spz-result-in.spz-ok { background:#f0fdf4; border:2px solid #16a34a; }
.spz-result-in.spz-ko { background:#fef2f2; border:2px solid #dc2626; }
.spz-result-in svg { flex-shrink:0; }
.spz-result-msg { font-size:.92em; line-height:1.4; color:#1f2937; }
`;function _(){if(document.getElementById("spz-styles"))return;const s=document.createElement("style");s.id="spz-styles",s.textContent=S,document.head.appendChild(s)}let q=0;class E extends HTMLElement{static get observedAttributes(){return["n","ang","side","options","correct"]}connectedCallback(){z(),_(),this.dataset.placeMode="1",this._render()}attributeChangedCallback(){this.isConnected&&this._render()}_cfg(){const n=parseInt(this.getAttribute("n"),10),a=parseInt(this.getAttribute("ang"),10),e=parseInt(this.getAttribute("side"),10);let t=[];try{t=JSON.parse(this.getAttribute("options")||"[]")}catch{}const r=parseInt(this.getAttribute("correct"),10);return{n,ang:a,side:e,options:t,correct:r}}_render(){const{n,side:a,options:e,correct:t}=this._cfg();if(!Number.isFinite(n)||!e.length){this.innerHTML="";return}this.innerHTML="";const r=b[n]||`polygone à ${n} côtés`,l=`spz-${++q}`,o=document.createElement("div");o.className="spz-wrap",o.innerHTML=`
      <div class="spz-q">${k(n)}<span>Quel programme dessine ce <strong>${r}</strong>&nbsp;?</span></div>
      <div class="spz-opts">${e.map((p,u)=>`
        <label class="spz-opt" data-i="${u}">
          <span class="spz-opt-head"><input type="radio" name="${l}" value="${u}">
            <span>${"abcd"[u]})</span><span class="spz-opt-fb" aria-hidden="true"></span></span>
          ${$(p.rep,p.ang,a)}
        </label>`).join("")}</div>
      <div class="spz-result" aria-live="polite"></div>`,this.appendChild(o),this._wrap=o,this._resultEl=o.querySelector(".spz-result"),o.querySelectorAll("input[type=radio]").forEach(p=>{p.addEventListener("change",()=>this._validate(!0))})}_validate(n){const{correct:a}=this._cfg(),e=this._wrap?.querySelector("input[type=radio]:checked");if(this._wrap?.querySelectorAll(".spz-opt").forEach(f=>{f.classList.remove("spz-correct","spz-incorrect"),f.querySelector(".spz-opt-fb").textContent=""}),!e)return;const t=parseInt(e.value,10),r=t===a,l=this._wrap.querySelector(`.spz-opt[data-i="${t}"]`);l.classList.add(r?"spz-correct":"spz-incorrect"),l.querySelector(".spz-opt-fb").textContent=r?"😀":"😞";const{n:o,ang:p,side:u,options:h}=this._cfg(),g=h[t],i=w(g.rep,g.ang,u);let c;return r?c=`😀 Le tracé se **referme** : c'est bien le ${b[o]||"polygone"} !`:g.rep!==o&&g.ang===p?c=`😞 Mauvais nombre de répétitions : il faut **répéter ${o} fois** (un par côté), pas ${g.rep}.`:g.rep===o&&g.ang!==p?c=`😞 Le tracé ne se referme pas. À chaque sommet, le lutin doit tourner de **360 ÷ ${o} = ${p}°**, pas ${g.ang}°.`:c=`😞 Ni le bon angle ni le bon nombre de tours : ${o} côtés → **répéter ${o}**, **tourner ${p}°**.`,this._resultEl&&(this._resultEl.innerHTML=`<div class="spz-result-in spz-${r?"ok":"ko"}">`+M(i,r)+`<span class="spz-result-msg">${y(c)}</span></div>`),!r&&n&&this.closest(".q-card")?.dispatchEvent(new CustomEvent("zefor-indice-auto-pop",{detail:{studentValue:String(t),source:this},bubbles:!0})),r}getCurrentPhase(){const n=this._wrap?.querySelector("input[type=radio]:checked");if(!n)return"reponse_directe";const{correct:a}=this._cfg();return parseInt(n.value,10)===a?"done":"erreur_reponse_directe"}validate(){return this._validate(!1)}toggleSolution(n){if(!n||!this._wrap)return;const{correct:a}=this._cfg(),e=this._wrap.querySelector(`.spz-opt[data-i="${a}"] input`);e&&(e.checked=!0,this._validate(!1))}}customElements.get("math974-scratch-poly-zefor")||customElements.define("math974-scratch-poly-zefor",E);function B(s,n,a){const e=i=>{const c=String(i).trim(),f=c.match(/^(\d+)\.\.(\d+)$/);if(f){const d=+f[1],v=+f[2];return d+Math.floor(Math.random()*(v-d+1))}const x=c.split(",").map(d=>+d.trim()).filter(d=>!isNaN(d));return x[Math.floor(Math.random()*x.length)]},t=e(n?.n??"3..10"),r=e(n?.side??"40,50,60,80,100"),l=Math.round(360/t),o={rep:t,ang:l},p=[{rep:t,ang:t},{rep:t,ang:180-l},{rep:t+(Math.random()<.5?1:-1),ang:l},{rep:t,ang:Math.round(360/(t+1))}].filter(i=>!(i.rep===o.rep&&i.ang===o.ang)&&i.rep>=3&&i.ang>0),u=[];for(const i of p){if(u.length>=2)break;u.some(c=>c.rep===i.rep&&c.ang===i.ang)||u.push(i)}const h=[o,...u];for(let i=h.length-1;i>0;i--){const c=Math.floor(Math.random()*(i+1));[h[i],h[c]]=[h[c],h[i]]}const g=h.findIndex(i=>i.rep===o.rep&&i.ang===o.ang);return{...s,n:t,ang:l,side:r,options:h,correct:g}}export{N as autoScale,j as defaultPosition,B as randomize};
