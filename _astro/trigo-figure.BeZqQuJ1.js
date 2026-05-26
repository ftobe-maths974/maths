import{w as nt}from"./figure-validation.BcHse4fA.js";import"./fullscreen-viewer.D-WkAmVT.js";import"./editor.CJZspgfY.js";const ht="content",yt=!0;function vt(a){return{...a||{},_seed:Math.random()}}const ot=["A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","U","V","X","Y","Z"],R={cathete:"#2563eb",hypotenuse:"#ea580c",angleArc:"#9333ea",point:"#1e293b",texte:"#1e293b"},I=(a,s)=>Math.floor(Math.random()*(s-a+1))+a,at=(a,s)=>Math.random()*(s-a)+a,J=a=>a[I(0,a.length-1)];function it(a){const s=[...ot],n=[];for(let e=0;e<a;e++)n.push(s.splice(I(0,s.length-1),1)[0]);return n}function Q(a){const s=[...a];for(let n=s.length-1;n>0;n--){const e=Math.floor(Math.random()*(n+1));[s[n],s[e]]=[s[e],s[n]]}return s}function ct(a,s,n){const e=Math.cos(n),t=Math.sin(n),o=a.x-s.x,r=a.y-s.y;return{x:s.x+o*e-r*t,y:s.y+o*t+r*e}}function W(a,s,n,e,t=18){const o=n.x-s.x,r=n.y-s.y,l=Math.hypot(o,r)||1,c=o/l,p=r/l,g={x:s.x-c*t,y:s.y-p*t},d={x:n.x+c*t,y:n.y+p*t},u=-p,$=c,i=(Math.random()-.5)*3,m=(g.x+d.x)/2+u*i,v=(g.y+d.y)/2+$*i;a.strokeStyle=e,a.lineWidth=4,a.lineCap="round",a.beginPath(),a.moveTo(g.x,g.y),a.quadraticCurveTo(m,v,d.x,d.y),a.stroke()}function Z(a,s,n,e,t=20,o=R.texte,r=5){a.save(),a.font=`700 ${t}px 'Caveat', cursive`,a.textAlign="center",a.textBaseline="middle";const l=a.measureText(s).width,c=t*1.15+(r-5)*.4;a.fillStyle="#fff",a.fillRect(n-l/2-r,e-c/2,l+r*2,c),a.fillStyle=o,a.fillText(s,n,e),a.restore()}function rt(a,s,n,e=10,t=-10){a.beginPath(),a.arc(s.x,s.y,4,0,2*Math.PI),a.fillStyle=R.point,a.fill(),Z(a,n,s.x+e,s.y+t,22)}function lt(a,s,n,e,t=14){const o=n.x-s.x,r=n.y-s.y,l=Math.hypot(o,r)||1,c=e.x-s.x,p=e.y-s.y,g=Math.hypot(c,p)||1,d=o/l,u=r/l,$=c/g,i=p/g,m={x:s.x+d*t,y:s.y+u*t},v={x:s.x+(d+$)*t,y:s.y+(u+i)*t},y={x:s.x+$*t,y:s.y+i*t};a.strokeStyle="#475569",a.lineWidth=1.8,a.beginPath(),a.moveTo(m.x,m.y),a.lineTo(v.x,v.y),a.lineTo(y.x,y.y),a.stroke()}const dt=44,G=22;function tt(a,s,n,e,t,o=dt){const r=Math.atan2(n.y-s.y,n.x-s.x);let c=Math.atan2(e.y-s.y,e.x-s.x)-r;c>Math.PI&&(c-=2*Math.PI),c<-Math.PI&&(c+=2*Math.PI);const p=r,g=r+c,d=c<0;a.strokeStyle=R.angleArc,a.lineWidth=1.8,a.beginPath(),a.arc(s.x,s.y,o,p,g,d),a.stroke();const u=r+c/2,$=s.x+Math.cos(u)*(o+G),i=s.y+Math.sin(u)*(o+G);Z(a,t,$,i,20,R.angleArc)}function et(a,s,n,e,t=1,o="#9ca3af"){const r=n.x-s.x,l=n.y-s.y,c=Math.hypot(r,l)||1,p=-l/c*t,g=r/c*t,d=16,u=(s.x+n.x)/2+p*d,$=(s.y+n.y)/2+g*d;Z(a,e,u,$,20,o,7)}function M(a){return Number.isInteger(a)?String(a):(Math.round(a*10)/10).toString().replace(".",",")}function st(a,s,n){const e=s.x-a.x,t=s.y-a.y,o=Math.hypot(e,t)||1,r=-t/o,l=e/o,c=(a.x+s.x)/2,p=(a.y+s.y)/2;return r*(n.x-c)+l*(n.y-p)>0?-1:1}class gt extends HTMLElement{constructor(){super(),this._data=null}connectedCallback(){this.dataset.placeMode="1",this._objet=this.getAttribute("objet")||"longueur",this._mode=this.getAttribute("mode")||"etayage-max",this.querySelector(".fig-wrap")||this._render(),this.randomize()}_render(){const s='<div class="fig-trigo-checkup fig-trigo-checkup--folded" data-fig-checkup></div>',n=`
      <div class="fig-canvas-wrap">
        <canvas class="fig-canvas" width="600" height="460"></canvas>
      </div>
    `;let e;this._mode==="no-figure"?e='<div class="fig-statement" data-fig-statement></div>':this._mode==="drag-chips"?e=n+`
        <div class="fig-chips-area">
          <span class="fig-chips-instr">Glisse chaque valeur sur la bonne position :</span>
          <div class="fig-drop-row" data-fig-drops></div>
          <div class="fig-chips-row" data-fig-chips></div>
        </div>
      `:e=n,this.innerHTML=`
      <div class="fig-wrap">
        ${s}
        ${e}
        <div class="fig-enonce" data-fig-enonce></div>
      </div>
    `}randomize(){const s=this.querySelector("[data-fig-enonce]");if(!s)return;const[n,e,t]=it(3),o=J(["cos","sin","tan"]);let r,l,c,p,g,d;if(this._objet==="angle"){g="angle",r=I(25,70);const f=r*Math.PI/180;p=I(5,12),l=+(p*Math.sin(f)).toFixed(2),c=+(p*Math.cos(f)).toFixed(2)}else{d=J(["mult","div"]),o==="cos"?g=d==="mult"?"adj":"hyp":o==="sin"?g=d==="mult"?"opp":"hyp":g=d==="mult"?"opp":"adj",r=J([20,25,30,35,40,45,50,55,60,65]);const f=r*Math.PI/180,w=I(4,12);o==="cos"?d==="mult"?(p=w,c=p*Math.cos(f),l=p*Math.sin(f)):(c=w,p=c/Math.cos(f),l=p*Math.sin(f)):o==="sin"?d==="mult"?(p=w,l=p*Math.sin(f),c=p*Math.cos(f)):(l=w,p=l/Math.sin(f),c=p*Math.cos(f)):d==="mult"?(c=w,l=c*Math.tan(f),p=c/Math.cos(f)):(l=w,c=l/Math.tan(f),p=c/Math.cos(f))}const u={nR:n,nA:e,nT:t,angleDeg:r,opp:l,adj:c,hyp:p,trig:o,unknown:g,form:d};if(this._mode==="no-figure"){this._renderStatement(this.querySelector("[data-fig-statement]"),u),this._renderEnonce(s,u),this._renderCheckupAndWire(u),this._geom=null,this._data=u,this.dataset.trigoData=JSON.stringify(u);return}const $=this.querySelector(".fig-canvas"),i=$.getContext("2d"),m=$.width,v=$.height,y=Math.random()<.5?1:-1,b=Math.random()<.5?1:-1,x=30,S={[n]:{x:0,y:0},[e]:{x:y*c*x,y:0},[t]:{x:0,y:-b*l*x}},C=at(-Math.PI/8,Math.PI/8);for(const f of Object.keys(S))S[f]=ct(S[f],{x:0,y:0},C);let T=1/0,k=-1/0,A=1/0,L=-1/0;for(const f of Object.values(S))f.x<T&&(T=f.x),f.x>k&&(k=f.x),f.y<A&&(A=f.y),f.y>L&&(L=f.y);const q=80,j=(m-2*q)/Math.max(k-T,1),_=(v-2*q)/Math.max(L-A,1),H=Math.min(j,_),O=(T+k)/2,P=(A+L)/2,h={};for(const[f,w]of Object.entries(S))h[f]={x:m/2+(w.x-O)*H,y:v/2+(w.y-P)*H};i.clearRect(0,0,m,v);const N=this._mode==="drag-chips"?"#9ca3af":R.cathete,V=this._mode==="drag-chips"?"#9ca3af":R.hypotenuse;W(i,h[n],h[e],N),W(i,h[n],h[t],N),W(i,h[e],h[t],V),lt(i,h[n],h[e],h[t]);const F=g==="angle"?"?":r+"°";this._mode!=="drag-chips"&&tt(i,h[e],h[n],h[t],F);const U=(h[n].x+h[e].x+h[t].x)/3,Y=(h[n].y+h[e].y+h[t].y)/3,X=(f,w=26)=>{const E=f.x-U,z=f.y-Y,K=Math.hypot(E,z)||1;return{x:E/K*w,y:z/K*w}};[n,e,t].forEach(f=>{const w=X(h[f]);rt(i,h[f],f,w.x,w.y)});const B={adj:{p1:h[n],p2:h[e],ref:h[t],val:c},opp:{p1:h[n],p2:h[t],ref:h[e],val:l},hyp:{p1:h[e],p2:h[t],ref:h[n],val:p}};if(this._mode!=="drag-chips"){const f=E=>{const K=g===E?"?":M(B[E].val)+" cm",D=B[E];et(i,D.p1,D.p2,K,st(D.p1,D.p2,D.ref))};(o==="cos"?["adj","hyp"]:o==="sin"?["opp","hyp"]:["opp","adj"]).forEach(f)}this._geom={canvas:$,ctx:i,pts:h,segDraw:B,...u},this._renderCheckupAndWire(u),this._renderEnonce(s,u),this._mode==="drag-chips"&&this._renderChipsAndZones(u),this._data=u,this.dataset.trigoData=JSON.stringify(u)}_renderCheckupAndWire(s){this._renderCheckup(this.querySelector("[data-fig-checkup]"),s),this._injectCheckupButton()}_renderCheckup(s,n){if(!s)return;const{trig:e}=n,t={cos:{adj:1,opp:0,hyp:1,cos:1,sin:0,tan:0},sin:{adj:0,opp:1,hyp:1,cos:0,sin:1,tan:0},tan:{adj:1,opp:1,hyp:0,cos:0,sin:0,tan:1}}[e],o=JSON.stringify(t),r={adj:"A",opp:"O",hyp:"H",cos:"C",sin:"S",tan:"T"},l=(y,b)=>`<label class="fig-trigo-check" data-key="${y}"><span class="fig-trigo-box"></span><span class="fig-trigo-check-label">${b}</span><span class="fig-trigo-letter">${r[y]}</span><input type="checkbox" class="fig-trigo-sr" aria-label="${b}"></label>`,p={cos:[["C","func"],["A","adj"],["H","hyp"]],sin:[["S","func"],["O","opp"],["H","hyp"]],tan:[["T","func"],["O","opp"],["A","adj"]]}[e].map(([y,b])=>`<span class="fig-trigo-rule-letter fig-trigo-rule-letter--${b}">${y}</span>`).join(""),g=`
      <svg class="fig-trigo-accolade" viewBox="0 0 12 100" preserveAspectRatio="none" aria-hidden="true">
        <path d="M 11 1 Q 5 1 5 25 Q 5 50 1 50 Q 5 50 5 75 Q 5 99 11 99"/>
      </svg>
    `,d=y=>y.map(([b,x])=>`<span class="fig-trigo-logo-letter fig-trigo-logo-letter--${x}">${b}</span>`).join(""),u=`
      <div class="fig-trigo-checkup-title">
        <span class="fig-trigo-logo-main">CheckUp</span>
        <span class="fig-trigo-logo-rules">
          <span class="fig-trigo-logo-rule">${d([["C","func"],["A","adj"],["H","hyp"]])}</span>
          <span class="fig-trigo-logo-sep">·</span>
          <span class="fig-trigo-logo-rule">${d([["S","func"],["O","opp"],["H","hyp"]])}</span>
          <span class="fig-trigo-logo-sep">·</span>
          <span class="fig-trigo-logo-rule">${d([["T","func"],["O","opp"],["A","adj"]])}</span>
        </span>
      </div>
    `;s.innerHTML=`
      <span class="fig-trigo-side-label fig-trigo-side-label--top">J'ai</span>
      <span class="fig-trigo-side-label fig-trigo-side-label--bot">J'utilise</span>
      ${u}
      <div class="fig-trigo-checkup-body">
        <div class="fig-trigo-accolade-col">${g}${g}</div>
        <div class="fig-trigo-checkup-grid" data-trigo-expected='${o}'>
          <div class="fig-trigo-group fig-trigo-group--sides">
            ${l("adj","Adjacent")}
            ${l("opp","Opposé")}
            ${l("hyp","Hypoténuse")}
          </div>
          <div class="fig-trigo-group fig-trigo-group--funcs">
            ${l("cos","Cosinus")}
            ${l("sin","Sinus")}
            ${l("tan","Tangente")}
          </div>
        </div>
        <div class="fig-trigo-callout">
          <span class="fig-trigo-callout-rule">${p}<span class="fig-trigo-callout-bang">!</span></span>
        </div>
        <div class="fig-trigo-refsvg">
          <svg viewBox="0 0 140 130" aria-hidden="true">
            <line x1="20" y1="115" x2="20" y2="15" stroke="var(--fig-trigo-adj)" stroke-width="2.5"/>
            <line x1="20" y1="115" x2="125" y2="115" stroke="var(--fig-trigo-opp)" stroke-width="2.5"/>
            <line x1="20" y1="15" x2="125" y2="115" stroke="var(--fig-trigo-hyp)" stroke-width="2.5"/>
            <path d="M 20 105 L 30 105 L 30 115" stroke="#475569" stroke-width="1.4" fill="none"/>
            <path d="M 28 24 A 14 14 0 0 1 24 35" stroke="#1e293b" stroke-width="1.4" fill="rgba(147, 51, 234, 0.18)"/>
            <text x="36" y="34" font-family="Caveat, cursive" font-size="16" font-weight="700" fill="#1e293b">α</text>
            <text x="13" y="65" font-family="Caveat, cursive" font-size="15" font-weight="700"
                  fill="var(--fig-trigo-adj)" text-anchor="middle"
                  transform="rotate(-90 13 65)">Adj. à α</text>
            <text x="70" y="128" font-family="Caveat, cursive" font-size="15" font-weight="700"
                  fill="var(--fig-trigo-opp)" text-anchor="middle">Opp. à α</text>
            <text x="80" y="58" font-family="Caveat, cursive" font-size="15" font-weight="700"
                  fill="var(--fig-trigo-hyp)" text-anchor="middle"
                  transform="rotate(43 80 58)">Hyp.</text>
          </svg>
        </div>
      </div>
    `;const i=[...s.querySelector(".fig-trigo-checkup-grid").querySelectorAll(".fig-trigo-check")],m=s.querySelector(".fig-trigo-callout"),v=()=>{let y=!0;i.forEach(b=>{const x=b.dataset.key,S=b.querySelector("input"),C=!!t[x],T=S.checked;T===C?b.classList.remove("fig-trigo-check--ko"):(T?b.classList.add("fig-trigo-check--ko"):b.classList.remove("fig-trigo-check--ko"),y=!1)}),m.classList.toggle("fig-trigo-callout--visible",y)};i.forEach(y=>{y.querySelector("input").addEventListener("change",v)})}_injectCheckupButton(){const s=this.closest(".q-card");if(!s)return;const n=s.querySelector(".card-actions-nav.card-actions-right");if(!n||s._trigoCheckupBtn)return;const e=document.createElement("button");e.type="button",e.className="visual-toggle-btn mini-eye btn-checkup",e.title="Aide CheckUp CAH-SOH-TOA",e.setAttribute("aria-label","Aide CheckUp CAH-SOH-TOA"),e.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 18h6"></path>
        <path d="M10 22h4"></path>
        <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2v.3h6v-.3c0-.8.4-1.5 1-2A7 7 0 0 0 12 2z"></path>
      </svg>`,e.addEventListener("click",t=>{t.stopPropagation();const r=(s.querySelector(".variant-content.active")||s).querySelector("[data-fig-checkup]");if(!r)return;const l=r.classList.toggle("fig-trigo-checkup--folded");e.classList.toggle("active",!l)}),n.insertBefore(e,n.firstChild),s._trigoCheckupBtn=e}_renderStatement(s,n){if(!s)return;const{nR:e,nA:t,nT:o,angleDeg:r,opp:l,adj:c,hyp:p,trig:g,unknown:d}=n,u={adj:e+t,opp:e+o,hyp:t+o},$={adj:c,opp:l,hyp:p};if(this._objet==="angle"){const m=(g==="cos"?["adj","hyp"]:g==="sin"?["opp","hyp"]:["opp","adj"]).map(v=>`${u[v]} = ${M($[v])} cm`).join(" ; ");s.innerHTML=`
        <div class="fig-stmt-line">Soit un triangle <b>${e}${t}${o}</b> rectangle en <b>${e}</b>.</div>
        <div class="fig-stmt-line"><span class="fig-stmt-tag">On donne :</span> ${m}.</div>
        <div class="fig-stmt-line"><span class="fig-stmt-tag">Calculer :</span> la mesure de l'angle <b>${t}${e}${o}</b>... non, de l'angle au sommet <b>${t}</b>.</div>
      `,s.querySelector(".fig-stmt-line:last-child").innerHTML=`<span class="fig-stmt-tag">Calculer :</span> la mesure de l'angle au sommet <b>${t}</b>, arrondie au degré près.`}else{const i=(g==="cos"?["adj","hyp"]:g==="sin"?["opp","hyp"]:["opp","adj"]).find(v=>v!==d);s.innerHTML=`
        <div class="fig-stmt-line">Soit un triangle <b>${e}${t}${o}</b> rectangle en <b>${e}</b>.</div>
        <div class="fig-stmt-line"><span class="fig-stmt-tag">On donne :</span> l'angle au sommet <b>${t}</b> mesure <b>${r}°</b> et <b>${u[i]} = ${M($[i])} cm</b>.</div>
        <div class="fig-stmt-line"><span class="fig-stmt-tag">Calculer :</span> la longueur <b>${u[d]}</b>, arrondie au mm près.</div>
      `}}_renderEnonce(s,n){const{nR:e,nA:t,nT:o,angleDeg:r,opp:l,adj:c,hyp:p,trig:g,unknown:d}=n,u=k=>String(k).replace(/"/g,"&quot;"),$=k=>String(k||"").split("|")[0]||"",i=(k,A,L="")=>{const q=Q(k).map(j=>`<option value="${j}">${j}</option>`).join("");return`<select class="rapido-input fig-inp ${L}" data-fig-sol="${u(A)}" data-solution="${u($(A))}"><option value="" disabled selected>…</option>${q}</select>`},m=k=>`<span class="fig-widehat"><svg class="fig-widehat-arc" viewBox="0 0 20 6" preserveAspectRatio="none" aria-hidden="true"><path d="M 2 5 L 10 1 L 18 5" stroke-linejoin="miter"/></svg><span>${k}</span></span>`,v=k=>`<span class="fig-paren"><svg class="fig-paren-left" viewBox="0 0 10 30" preserveAspectRatio="none" aria-hidden="true"><path d="M 8 1 Q 1 15 8 29"/></svg><span class="fig-paren-inner">${k}</span><svg class="fig-paren-right" viewBox="0 0 10 30" preserveAspectRatio="none" aria-hidden="true"><path d="M 2 1 Q 9 15 2 29"/></svg></span>`,y=k=>k==="adj"?`${e}${t}|${t}${e}`:k==="opp"?`${e}${o}|${o}${e}`:`${t}${o}|${o}${t}`,b=`${e}${t}${o}|${o}${t}${e}`,x={adj:c,opp:l,hyp:p},S=["cos","sin","tan"],C=[`${e}${t}`,`${e}${o}`,`${t}${o}`],T=[`${e}${t}${o}`,`${e}${o}${t}`,`${t}${e}${o}`];if(this._objet==="angle"){const k=g==="cos"?["adj","hyp"]:g==="sin"?["opp","hyp"]:["opp","adj"],[A,L]=k,q=x[A],j=x[L],_=q/j,H=g==="cos"?Math.acos(_):g==="sin"?Math.asin(_):Math.atan(_),O=Math.round(H*180/Math.PI),P=[M(c),M(l),M(p)],h=[O,O+5,O-5];s.innerHTML=`
        <div class="fig-row">Dans le triangle <b>${e}${t}${o}</b> rectangle en ${i([e,t,o],e)},</div>
        <div class="fig-row">On a : ${i(S,g)}${v(m(i(T,b)))}
          <span class="fig-eq">=</span>
          <span class="fig-frac"><span>${i(C,y(A))}</span><span class="fig-frac-bar"></span><span>${i(C,y(L))}</span></span>
          <span class="fig-eq">=</span>
          <span class="fig-frac"><span>${i(P,M(q))}</span><span class="fig-frac-bar"></span><span>${i(P,M(j))}</span></span>
        </div>
        <div class="fig-row">Donc ${m(i(T,b))} ≈ ${i(h,O)}° (au degré près).</div>
        <div class="fig-row" style="font-style: italic; color:#64748b; font-size:0.85em">J'utilise ma calculatrice.</div>
      `}else{const k=g==="cos"?["adj","hyp"]:g==="sin"?["opp","hyp"]:["opp","adj"],A=k[0],L=k[1],q=k.find(E=>E!==d),j=x[q],_=+(Math.round(x[d]*10)/10).toFixed(1),H=d===A,O=(()=>{const E=new Set([Math.round(c),Math.round(l),Math.round(p),Math.round(_)]);let z;do z=I(2,30);while(E.has(z));return z})(),P=[M(c),M(l),M(p),String(O)],h=[`${r}°`,`${r+5}°`,`${r-5}°`],N=[M(_),M(_+.5),M(_-.5)],V=`Dans le triangle <b>${e}${t}${o}</b> rectangle en ${i([e,t,o],e)},`,F=[`${e}${t}${o}`,`${o}${t}${e}`,`${t}${e}${o}`],U=`On a : ${i(S,g)}${v(m(i(F,b)))}
        <span class="fig-eq">=</span>
        <span class="fig-frac"><span>${i(C,y(A))}</span><span class="fig-frac-bar"></span><span>${i(C,y(L))}</span></span>`,Y=H?i(C,y(d)):i(P,M(j)),X=H?i(P,M(j)):i(C,y(d)),B=`soit
        <span class="fig-frac"><span>${i(S,g)}${v(i(h,`${r}°`))}</span><span class="fig-frac-bar"></span><span>${i([1,2,3,10],1)}</span></span>
        <span class="fig-eq">=</span>
        <span class="fig-frac"><span>${Y}</span><span class="fig-frac-bar"></span><span>${X}</span></span>`,f=H?`${i(P,M(j))} × ${i(S,g)}${v(i(h,`${r}°`))}`:`<span class="fig-frac"><span>${i(P,M(j))}</span><span class="fig-frac-bar"></span><span>${i(S,g)}${v(i(h,`${r}°`))}</span></span>`,w=`d'où ${i(C,y(d))} = ${f} ≈ ${i(N,M(_))} cm`;s.innerHTML=`
        <div class="fig-row">${V}</div>
        <div class="fig-row">${U}</div>
        <div class="fig-row" style="margin-left:1.2em">${B}</div>
        <div class="fig-row">${w}</div>
      `}nt(s)}getData(){return this._data}_renderChipsAndZones(s){const{nR:n,nA:e,nT:t,angleDeg:o,opp:r,adj:l,hyp:c,trig:p,unknown:g}=s,d=this.querySelector("[data-fig-chips]"),u=this.querySelector("[data-fig-drops]");if(!d||!u)return;const i=["angle",...p==="cos"?["adj","hyp"]:p==="sin"?["opp","hyp"]:["opp","adj"]],m={adj:n+e,opp:n+t,hyp:e+t},v={adj:l,opp:r,hyp:c},y=x=>x==="angle"?`angle ${e}`:m[x],b=x=>x==="angle"?g==="angle"?"?":o+"°":g===x?"?":M(v[x])+" cm";u.innerHTML=Q(i).map(x=>`<div class="fig-dropzone" data-zone-key="${x}">${y(x)} = ?</div>`).join(""),d.innerHTML=Q(i).map(x=>`<span class="fig-chip" data-target-key="${x}">${y(x)} = ${b(x)}</span>`).join(""),this._wireDrag()}_drawItem(s){if(!this._geom)return;const{ctx:n,pts:e,segDraw:t,names:o,angleDeg:r,unknown:l}=this._geom,{nR:c,nA:p,nT:g}=o||this._geom;if(s==="angle"){const i=l==="angle"?"?":r+"°";tt(n,e[p],e[c],e[g],i);return}const d=t[s];if(!d)return;const $=l===s?"?":M(d.val)+" cm";et(n,d.p1,d.p2,$,st(d.p1,d.p2,d.ref))}_wireDrag(){const s=this.querySelector("[data-fig-chips]"),n=[...this.querySelectorAll(".fig-dropzone")];[...this.querySelectorAll(".fig-chip")].forEach(t=>{t.addEventListener("pointerdown",o=>{o.preventDefault();const r=t.getBoundingClientRect(),l=o.clientX-r.left,c=o.clientY-r.top,p=r.width;t.style.position="fixed",t.style.left=o.clientX-l+"px",t.style.top=o.clientY-c+"px",t.style.width=p+"px",t.style.zIndex="10000",t.classList.add("fig-chip--dragging"),document.body.appendChild(t);try{t.setPointerCapture(o.pointerId)}catch{}const g=(i,m)=>{const v=t.style.pointerEvents;t.style.pointerEvents="none";const y=document.elementsFromPoint(i,m).find(b=>b.classList?.contains("fig-dropzone"));return t.style.pointerEvents=v,y},d=i=>{t.style.left=i.clientX-l+"px",t.style.top=i.clientY-c+"px";const m=g(i.clientX,i.clientY);n.forEach(v=>v.classList.toggle("fig-dropzone--hover",v===m))},u=()=>{t.style.position="",t.style.left="",t.style.top="",t.style.width="",t.style.zIndex="",t.classList.remove("fig-chip--dragging")},$=i=>{t.removeEventListener("pointermove",d),t.removeEventListener("pointerup",$),t.removeEventListener("pointercancel",$),n.forEach(y=>y.classList.remove("fig-dropzone--hover"));const m=g(i.clientX,i.clientY);if(!m){u(),s.appendChild(t);return}m.dataset.zoneKey===t.dataset.targetKey?(this._drawItem(t.dataset.targetKey),m.textContent=t.textContent,m.classList.add("fig-dropzone--filled"),u(),t.remove()):(u(),t.classList.add("fig-chip--ko"),s.appendChild(t),setTimeout(()=>t.classList.remove("fig-chip--ko"),700))};t.addEventListener("pointermove",d),t.addEventListener("pointerup",$),t.addEventListener("pointercancel",$)})})}_revealChips(s){if(s){const n=[...this.querySelectorAll(".fig-dropzone")];[...this.querySelectorAll(".fig-chip")].forEach(e=>{const t=n.find(o=>o.dataset.zoneKey===e.dataset.targetKey);t&&(this._drawItem(e.dataset.targetKey),t.textContent=e.textContent,t.classList.add("fig-dropzone--filled")),e.remove()})}}toggleSolution(s){if(this.querySelectorAll(".fig-inp").forEach(n=>{if(s){const e=n.dataset.solution||n.dataset.figCanon;e&&(n.value=e,n.classList.add("correct"),n.classList.remove("incorrect"))}else n.value="",n.classList.remove("correct","incorrect")}),this._mode==="etayage-max"){const n=this.querySelector(".fig-trigo-checkup-grid");if(n){const e=JSON.parse(n.dataset.trigoExpected||"{}");n.querySelectorAll(".fig-trigo-check").forEach(t=>{const o=t.querySelector("input");s?(o.checked=!!e[t.dataset.key],o.dispatchEvent(new Event("change"))):(o.checked=!1,t.classList.remove("fig-trigo-check--ko"),this.querySelector(".fig-trigo-callout")?.classList.remove("fig-trigo-callout--visible"))})}}}}customElements.define("math974-trigo-figure",gt);export{gt as TrigoFigureVisual,yt as autoScale,ht as defaultPosition,vt as randomize};
