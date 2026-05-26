import{w as nt}from"./figure-validation.CbbLbsz8.js";import"./fullscreen-viewer.Bzd2UUCx.js";import"./editor.CJZspgfY.js";const ht="content",yt=!0;function mt(a){return{...a||{},_seed:Math.random()}}const ot=["A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","U","V","X","Y","Z"],R={cathete:"#2563eb",hypotenuse:"#ea580c",angleArc:"#9333ea",point:"#1e293b",texte:"#1e293b"},z=(a,e)=>Math.floor(Math.random()*(e-a+1))+a,at=(a,e)=>Math.random()*(e-a)+a,J=a=>a[z(0,a.length-1)];function it(a){const e=[...ot],n=[];for(let s=0;s<a;s++)n.push(e.splice(z(0,e.length-1),1)[0]);return n}function Q(a){const e=[...a];for(let n=e.length-1;n>0;n--){const s=Math.floor(Math.random()*(n+1));[e[n],e[s]]=[e[s],e[n]]}return e}function ct(a,e,n){const s=Math.cos(n),t=Math.sin(n),o=a.x-e.x,c=a.y-e.y;return{x:e.x+o*s-c*t,y:e.y+o*t+c*s}}function W(a,e,n,s,t=18){const o=n.x-e.x,c=n.y-e.y,l=Math.hypot(o,c)||1,r=o/l,g=c/l,p={x:e.x-r*t,y:e.y-g*t},d={x:n.x+r*t,y:n.y+g*t},u=-g,$=r,i=(Math.random()-.5)*3,v=(p.x+d.x)/2+u*i,m=(p.y+d.y)/2+$*i;a.strokeStyle=s,a.lineWidth=4,a.lineCap="round",a.beginPath(),a.moveTo(p.x,p.y),a.quadraticCurveTo(v,m,d.x,d.y),a.stroke()}function Z(a,e,n,s,t=20,o=R.texte,c=5){a.save(),a.font=`700 ${t}px 'Caveat', cursive`,a.textAlign="center",a.textBaseline="middle";const l=a.measureText(e).width,r=t*1.15+(c-5)*.4;a.fillStyle="#fff",a.fillRect(n-l/2-c,s-r/2,l+c*2,r),a.fillStyle=o,a.fillText(e,n,s),a.restore()}function rt(a,e,n,s=10,t=-10){a.beginPath(),a.arc(e.x,e.y,4,0,2*Math.PI),a.fillStyle=R.point,a.fill(),Z(a,n,e.x+s,e.y+t,22)}function lt(a,e,n,s,t=14){const o=n.x-e.x,c=n.y-e.y,l=Math.hypot(o,c)||1,r=s.x-e.x,g=s.y-e.y,p=Math.hypot(r,g)||1,d=o/l,u=c/l,$=r/p,i=g/p,v={x:e.x+d*t,y:e.y+u*t},m={x:e.x+(d+$)*t,y:e.y+(u+i)*t},y={x:e.x+$*t,y:e.y+i*t};a.strokeStyle="#475569",a.lineWidth=1.8,a.beginPath(),a.moveTo(v.x,v.y),a.lineTo(m.x,m.y),a.lineTo(y.x,y.y),a.stroke()}const dt=44,G=22;function tt(a,e,n,s,t,o=dt){const c=Math.atan2(n.y-e.y,n.x-e.x);let r=Math.atan2(s.y-e.y,s.x-e.x)-c;r>Math.PI&&(r-=2*Math.PI),r<-Math.PI&&(r+=2*Math.PI);const g=c,p=c+r,d=r<0;a.strokeStyle=R.angleArc,a.lineWidth=1.8,a.beginPath(),a.arc(e.x,e.y,o,g,p,d),a.stroke();const u=c+r/2,$=e.x+Math.cos(u)*(o+G),i=e.y+Math.sin(u)*(o+G);Z(a,t,$,i,20,R.angleArc)}function et(a,e,n,s,t=1,o="#9ca3af"){const c=n.x-e.x,l=n.y-e.y,r=Math.hypot(c,l)||1,g=-l/r*t,p=c/r*t,d=16,u=(e.x+n.x)/2+g*d,$=(e.y+n.y)/2+p*d;Z(a,s,u,$,20,o,7)}function M(a){return Number.isInteger(a)?String(a):(Math.round(a*10)/10).toString().replace(".",",")}function st(a,e,n){const s=e.x-a.x,t=e.y-a.y,o=Math.hypot(s,t)||1,c=-t/o,l=s/o,r=(a.x+e.x)/2,g=(a.y+e.y)/2;return c*(n.x-r)+l*(n.y-g)>0?-1:1}class gt extends HTMLElement{constructor(){super(),this._data=null}connectedCallback(){this.dataset.placeMode="1",this._objet=this.getAttribute("objet")||"longueur",this._mode=this.getAttribute("mode")||"etayage-max",this.querySelector(".fig-wrap")||this._render(),this.randomize()}_render(){const e='<div class="fig-trigo-checkup fig-trigo-checkup--folded" data-fig-checkup></div>',n=`
      <div class="fig-canvas-wrap">
        <canvas class="fig-canvas" width="600" height="460"></canvas>
      </div>
    `;let s;this._mode==="no-figure"?s='<div class="fig-statement" data-fig-statement></div>':this._mode==="drag-chips"?s=n+`
        <div class="fig-chips-area">
          <span class="fig-chips-instr">Glisse chaque valeur sur la bonne position :</span>
          <div class="fig-drop-row" data-fig-drops></div>
          <div class="fig-chips-row" data-fig-chips></div>
        </div>
      `:s=n,this.innerHTML=`
      <div class="fig-wrap">
        ${e}
        ${s}
        <div class="fig-enonce" data-fig-enonce></div>
      </div>
    `}randomize(){const e=this.querySelector("[data-fig-enonce]");if(!e)return;const[n,s,t]=it(3),o=J(["cos","sin","tan"]);let c,l,r,g,p,d;if(this._objet==="angle"){p="angle",c=z(25,70);const f=c*Math.PI/180;g=z(5,12),l=+(g*Math.sin(f)).toFixed(2),r=+(g*Math.cos(f)).toFixed(2)}else{d=J(["mult","div"]),o==="cos"?p=d==="mult"?"adj":"hyp":o==="sin"?p=d==="mult"?"opp":"hyp":p=d==="mult"?"opp":"adj",c=J([20,25,30,35,40,45,50,55,60,65]);const f=c*Math.PI/180,w=z(4,12);o==="cos"?d==="mult"?(g=w,r=g*Math.cos(f),l=g*Math.sin(f)):(r=w,g=r/Math.cos(f),l=g*Math.sin(f)):o==="sin"?d==="mult"?(g=w,l=g*Math.sin(f),r=g*Math.cos(f)):(l=w,g=l/Math.sin(f),r=g*Math.cos(f)):d==="mult"?(r=w,l=r*Math.tan(f),g=r/Math.cos(f)):(l=w,r=l/Math.tan(f),g=r/Math.cos(f))}const u={nR:n,nA:s,nT:t,angleDeg:c,opp:l,adj:r,hyp:g,trig:o,unknown:p,form:d};if(this._mode==="no-figure"){this._renderStatement(this.querySelector("[data-fig-statement]"),u),this._renderEnonce(e,u),this._renderCheckupAndWire(u),this._geom=null,this._data=u,this.dataset.trigoData=JSON.stringify(u);return}const $=this.querySelector(".fig-canvas"),i=$.getContext("2d"),v=$.width,m=$.height,y=Math.random()<.5?1:-1,b=Math.random()<.5?1:-1,x=30,S={[n]:{x:0,y:0},[s]:{x:y*r*x,y:0},[t]:{x:0,y:-b*l*x}},C=at(-Math.PI/8,Math.PI/8);for(const f of Object.keys(S))S[f]=ct(S[f],{x:0,y:0},C);let T=1/0,k=-1/0,A=1/0,L=-1/0;for(const f of Object.values(S))f.x<T&&(T=f.x),f.x>k&&(k=f.x),f.y<A&&(A=f.y),f.y>L&&(L=f.y);const q=80,j=(v-2*q)/Math.max(k-T,1),_=(m-2*q)/Math.max(L-A,1),H=Math.min(j,_),O=(T+k)/2,P=(A+L)/2,h={};for(const[f,w]of Object.entries(S))h[f]={x:v/2+(w.x-O)*H,y:m/2+(w.y-P)*H};i.clearRect(0,0,v,m);const N=this._mode==="drag-chips"?"#9ca3af":R.cathete,K=this._mode==="drag-chips"?"#9ca3af":R.hypotenuse;W(i,h[n],h[s],N),W(i,h[n],h[t],N),W(i,h[s],h[t],K),lt(i,h[n],h[s],h[t]);const U=p==="angle"?"?":c+"°";this._mode!=="drag-chips"&&tt(i,h[s],h[n],h[t],U);const Y=(h[n].x+h[s].x+h[t].x)/3,V=(h[n].y+h[s].y+h[t].y)/3,X=(f,w=26)=>{const E=f.x-Y,I=f.y-V,F=Math.hypot(E,I)||1;return{x:E/F*w,y:I/F*w}};[n,s,t].forEach(f=>{const w=X(h[f]);rt(i,h[f],f,w.x,w.y)});const B={adj:{p1:h[n],p2:h[s],ref:h[t],val:r},opp:{p1:h[n],p2:h[t],ref:h[s],val:l},hyp:{p1:h[s],p2:h[t],ref:h[n],val:g}};if(this._mode!=="drag-chips"){const f=E=>{const F=p===E?"?":M(B[E].val)+" cm",D=B[E];et(i,D.p1,D.p2,F,st(D.p1,D.p2,D.ref))};(o==="cos"?["adj","hyp"]:o==="sin"?["opp","hyp"]:["opp","adj"]).forEach(f)}this._geom={canvas:$,ctx:i,pts:h,segDraw:B,...u},this._renderCheckupAndWire(u),this._renderEnonce(e,u),this._mode==="drag-chips"&&this._renderChipsAndZones(u),this._data=u,this.dataset.trigoData=JSON.stringify(u)}_renderCheckupAndWire(e){this._renderCheckup(this.querySelector("[data-fig-checkup]"),e),this._injectCheckupButton()}_renderCheckup(e,n){if(!e)return;const{trig:s}=n,t={cos:{adj:1,opp:0,hyp:1,cos:1,sin:0,tan:0},sin:{adj:0,opp:1,hyp:1,cos:0,sin:1,tan:0},tan:{adj:1,opp:1,hyp:0,cos:0,sin:0,tan:1}}[s],o=JSON.stringify(t),c={adj:"A",opp:"O",hyp:"H",cos:"C",sin:"S",tan:"T"},l=(y,b)=>`<label class="fig-trigo-check" data-key="${y}"><span class="fig-trigo-box"></span><span class="fig-trigo-check-label">${b}</span><span class="fig-trigo-letter">${c[y]}</span><input type="checkbox" class="fig-trigo-sr" aria-label="${b}"></label>`,g={cos:[["C","func"],["A","adj"],["H","hyp"]],sin:[["S","func"],["O","opp"],["H","hyp"]],tan:[["T","func"],["O","opp"],["A","adj"]]}[s].map(([y,b])=>`<span class="fig-trigo-rule-letter fig-trigo-rule-letter--${b}">${y}</span>`).join(""),p=`
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
    `;e.innerHTML=`
      <span class="fig-trigo-side-label fig-trigo-side-label--top">J'ai</span>
      <span class="fig-trigo-side-label fig-trigo-side-label--bot">J'utilise</span>
      ${u}
      <div class="fig-trigo-checkup-body">
        <div class="fig-trigo-accolade-col">${p}${p}</div>
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
          <span class="fig-trigo-callout-rule">${g}<span class="fig-trigo-callout-bang">!</span></span>
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
    `;const i=[...e.querySelector(".fig-trigo-checkup-grid").querySelectorAll(".fig-trigo-check")],v=e.querySelector(".fig-trigo-callout"),m=()=>{let y=!0;i.forEach(b=>{const x=b.dataset.key,S=b.querySelector("input"),C=!!t[x],T=S.checked;T===C?b.classList.remove("fig-trigo-check--ko"):(T?b.classList.add("fig-trigo-check--ko"):b.classList.remove("fig-trigo-check--ko"),y=!1)}),v.classList.toggle("fig-trigo-callout--visible",y)};i.forEach(y=>{y.querySelector("input").addEventListener("change",m)})}_injectCheckupButton(){let e=0;const n=5,s=()=>{const t=this.closest(".q-card");if(!t||t._trigoCheckupBtn)return;const o=t.querySelector(".card-actions-nav.card-actions-right");if(!o){++e<n&&requestAnimationFrame(s);return}const c=document.createElement("button");c.type="button",c.className="visual-toggle-btn mini-eye btn-checkup",c.title="Aide CheckUp CAH-SOH-TOA",c.setAttribute("aria-label","Aide CheckUp CAH-SOH-TOA"),c.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 18h6"></path>
          <path d="M10 22h4"></path>
          <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2v.3h6v-.3c0-.8.4-1.5 1-2A7 7 0 0 0 12 2z"></path>
        </svg>`,c.addEventListener("click",l=>{l.stopPropagation();const r=t.querySelector("[data-fig-checkup]");if(!r)return;const g=r.classList.toggle("fig-trigo-checkup--folded");c.classList.toggle("active",!g)}),o.insertBefore(c,o.firstChild),t._trigoCheckupBtn=c};requestAnimationFrame(s)}_renderStatement(e,n){if(!e)return;const{nR:s,nA:t,nT:o,angleDeg:c,opp:l,adj:r,hyp:g,trig:p,unknown:d}=n,u={adj:s+t,opp:s+o,hyp:t+o},$={adj:r,opp:l,hyp:g};if(this._objet==="angle"){const v=(p==="cos"?["adj","hyp"]:p==="sin"?["opp","hyp"]:["opp","adj"]).map(m=>`${u[m]} = ${M($[m])} cm`).join(" ; ");e.innerHTML=`
        <div class="fig-stmt-line">Soit un triangle <b>${s}${t}${o}</b> rectangle en <b>${s}</b>.</div>
        <div class="fig-stmt-line"><span class="fig-stmt-tag">On donne :</span> ${v}.</div>
        <div class="fig-stmt-line"><span class="fig-stmt-tag">Calculer :</span> la mesure de l'angle <b>${t}${s}${o}</b>... non, de l'angle au sommet <b>${t}</b>.</div>
      `,e.querySelector(".fig-stmt-line:last-child").innerHTML=`<span class="fig-stmt-tag">Calculer :</span> la mesure de l'angle au sommet <b>${t}</b>, arrondie au degré près.`}else{const i=(p==="cos"?["adj","hyp"]:p==="sin"?["opp","hyp"]:["opp","adj"]).find(m=>m!==d);e.innerHTML=`
        <div class="fig-stmt-line">Soit un triangle <b>${s}${t}${o}</b> rectangle en <b>${s}</b>.</div>
        <div class="fig-stmt-line"><span class="fig-stmt-tag">On donne :</span> l'angle au sommet <b>${t}</b> mesure <b>${c}°</b> et <b>${u[i]} = ${M($[i])} cm</b>.</div>
        <div class="fig-stmt-line"><span class="fig-stmt-tag">Calculer :</span> la longueur <b>${u[d]}</b>, arrondie au mm près.</div>
      `}}_renderEnonce(e,n){const{nR:s,nA:t,nT:o,angleDeg:c,opp:l,adj:r,hyp:g,trig:p,unknown:d}=n,u=k=>String(k).replace(/"/g,"&quot;"),$=k=>String(k||"").split("|")[0]||"",i=(k,A,L="")=>{const q=Q(k).map(j=>`<option value="${j}">${j}</option>`).join("");return`<select class="rapido-input fig-inp ${L}" data-fig-sol="${u(A)}" data-solution="${u($(A))}"><option value="" disabled selected>…</option>${q}</select>`},v=k=>`<span class="fig-widehat"><svg class="fig-widehat-arc" viewBox="0 0 20 6" preserveAspectRatio="none" aria-hidden="true"><path d="M 2 5 L 10 1 L 18 5" stroke-linejoin="miter"/></svg><span>${k}</span></span>`,m=k=>`<span class="fig-paren"><svg class="fig-paren-left" viewBox="0 0 10 30" preserveAspectRatio="none" aria-hidden="true"><path d="M 8 1 Q 1 15 8 29"/></svg><span class="fig-paren-inner">${k}</span><svg class="fig-paren-right" viewBox="0 0 10 30" preserveAspectRatio="none" aria-hidden="true"><path d="M 2 1 Q 9 15 2 29"/></svg></span>`,y=k=>k==="adj"?`${s}${t}|${t}${s}`:k==="opp"?`${s}${o}|${o}${s}`:`${t}${o}|${o}${t}`,b=`${s}${t}${o}|${o}${t}${s}`,x={adj:r,opp:l,hyp:g},S=["cos","sin","tan"],C=[`${s}${t}`,`${s}${o}`,`${t}${o}`],T=[`${s}${t}${o}`,`${s}${o}${t}`,`${t}${s}${o}`];if(this._objet==="angle"){const k=p==="cos"?["adj","hyp"]:p==="sin"?["opp","hyp"]:["opp","adj"],[A,L]=k,q=x[A],j=x[L],_=q/j,H=p==="cos"?Math.acos(_):p==="sin"?Math.asin(_):Math.atan(_),O=Math.round(H*180/Math.PI),P=[M(r),M(l),M(g)],h=[O,O+5,O-5];e.innerHTML=`
        <div class="fig-row">Dans le triangle <b>${s}${t}${o}</b> rectangle en ${i([s,t,o],s)},</div>
        <div class="fig-row">On a : ${i(S,p)}${m(v(i(T,b)))}
          <span class="fig-eq">=</span>
          <span class="fig-frac"><span>${i(C,y(A))}</span><span class="fig-frac-bar"></span><span>${i(C,y(L))}</span></span>
          <span class="fig-eq">=</span>
          <span class="fig-frac"><span>${i(P,M(q))}</span><span class="fig-frac-bar"></span><span>${i(P,M(j))}</span></span>
        </div>
        <div class="fig-row">Donc ${v(i(T,b))} ≈ ${i(h,O)}° (au degré près).</div>
        <div class="fig-row" style="font-style: italic; color:#64748b; font-size:0.85em">J'utilise ma calculatrice.</div>
      `}else{const k=p==="cos"?["adj","hyp"]:p==="sin"?["opp","hyp"]:["opp","adj"],A=k[0],L=k[1],q=k.find(E=>E!==d),j=x[q],_=+(Math.round(x[d]*10)/10).toFixed(1),H=d===A,O=(()=>{const E=new Set([Math.round(r),Math.round(l),Math.round(g),Math.round(_)]);let I;do I=z(2,30);while(E.has(I));return I})(),P=[M(r),M(l),M(g),String(O)],h=[`${c}°`,`${c+5}°`,`${c-5}°`],N=[M(_),M(_+.5),M(_-.5)],K=`Dans le triangle <b>${s}${t}${o}</b> rectangle en ${i([s,t,o],s)},`,U=[`${s}${t}${o}`,`${o}${t}${s}`,`${t}${s}${o}`],Y=`On a : ${i(S,p)}${m(v(i(U,b)))}
        <span class="fig-eq">=</span>
        <span class="fig-frac"><span>${i(C,y(A))}</span><span class="fig-frac-bar"></span><span>${i(C,y(L))}</span></span>`,V=H?i(C,y(d)):i(P,M(j)),X=H?i(P,M(j)):i(C,y(d)),B=`soit
        <span class="fig-frac"><span>${i(S,p)}${m(i(h,`${c}°`))}</span><span class="fig-frac-bar"></span><span>${i([1,2,3,10],1)}</span></span>
        <span class="fig-eq">=</span>
        <span class="fig-frac"><span>${V}</span><span class="fig-frac-bar"></span><span>${X}</span></span>`,f=H?`${i(P,M(j))} × ${i(S,p)}${m(i(h,`${c}°`))}`:`<span class="fig-frac"><span>${i(P,M(j))}</span><span class="fig-frac-bar"></span><span>${i(S,p)}${m(i(h,`${c}°`))}</span></span>`,w=`d'où ${i(C,y(d))} = ${f} ≈ ${i(N,M(_))} cm`;e.innerHTML=`
        <div class="fig-row">${K}</div>
        <div class="fig-row">${Y}</div>
        <div class="fig-row" style="margin-left:1.2em">${B}</div>
        <div class="fig-row">${w}</div>
      `}nt(e)}getData(){return this._data}_renderChipsAndZones(e){const{nR:n,nA:s,nT:t,angleDeg:o,opp:c,adj:l,hyp:r,trig:g,unknown:p}=e,d=this.querySelector("[data-fig-chips]"),u=this.querySelector("[data-fig-drops]");if(!d||!u)return;const i=["angle",...g==="cos"?["adj","hyp"]:g==="sin"?["opp","hyp"]:["opp","adj"]],v={adj:n+s,opp:n+t,hyp:s+t},m={adj:l,opp:c,hyp:r},y=x=>x==="angle"?`angle ${s}`:v[x],b=x=>x==="angle"?p==="angle"?"?":o+"°":p===x?"?":M(m[x])+" cm";u.innerHTML=Q(i).map(x=>`<div class="fig-dropzone" data-zone-key="${x}">${y(x)} = ?</div>`).join(""),d.innerHTML=Q(i).map(x=>`<span class="fig-chip" data-target-key="${x}">${y(x)} = ${b(x)}</span>`).join(""),this._wireDrag()}_drawItem(e){if(!this._geom)return;const{ctx:n,pts:s,segDraw:t,names:o,angleDeg:c,unknown:l}=this._geom,{nR:r,nA:g,nT:p}=o||this._geom;if(e==="angle"){const i=l==="angle"?"?":c+"°";tt(n,s[g],s[r],s[p],i);return}const d=t[e];if(!d)return;const $=l===e?"?":M(d.val)+" cm";et(n,d.p1,d.p2,$,st(d.p1,d.p2,d.ref))}_wireDrag(){const e=this.querySelector("[data-fig-chips]"),n=[...this.querySelectorAll(".fig-dropzone")];[...this.querySelectorAll(".fig-chip")].forEach(t=>{t.addEventListener("pointerdown",o=>{o.preventDefault();const c=t.getBoundingClientRect(),l=o.clientX-c.left,r=o.clientY-c.top,g=c.width;t.style.position="fixed",t.style.left=o.clientX-l+"px",t.style.top=o.clientY-r+"px",t.style.width=g+"px",t.style.zIndex="10000",t.classList.add("fig-chip--dragging"),document.body.appendChild(t);try{t.setPointerCapture(o.pointerId)}catch{}const p=(i,v)=>{const m=t.style.pointerEvents;t.style.pointerEvents="none";const y=document.elementsFromPoint(i,v).find(b=>b.classList?.contains("fig-dropzone"));return t.style.pointerEvents=m,y},d=i=>{t.style.left=i.clientX-l+"px",t.style.top=i.clientY-r+"px";const v=p(i.clientX,i.clientY);n.forEach(m=>m.classList.toggle("fig-dropzone--hover",m===v))},u=()=>{t.style.position="",t.style.left="",t.style.top="",t.style.width="",t.style.zIndex="",t.classList.remove("fig-chip--dragging")},$=i=>{t.removeEventListener("pointermove",d),t.removeEventListener("pointerup",$),t.removeEventListener("pointercancel",$),n.forEach(y=>y.classList.remove("fig-dropzone--hover"));const v=p(i.clientX,i.clientY);if(!v){u(),e.appendChild(t);return}v.dataset.zoneKey===t.dataset.targetKey?(this._drawItem(t.dataset.targetKey),v.textContent=t.textContent,v.classList.add("fig-dropzone--filled"),u(),t.remove()):(u(),t.classList.add("fig-chip--ko"),e.appendChild(t),setTimeout(()=>t.classList.remove("fig-chip--ko"),700))};t.addEventListener("pointermove",d),t.addEventListener("pointerup",$),t.addEventListener("pointercancel",$)})})}_revealChips(e){if(e){const n=[...this.querySelectorAll(".fig-dropzone")];[...this.querySelectorAll(".fig-chip")].forEach(s=>{const t=n.find(o=>o.dataset.zoneKey===s.dataset.targetKey);t&&(this._drawItem(s.dataset.targetKey),t.textContent=s.textContent,t.classList.add("fig-dropzone--filled")),s.remove()})}}toggleSolution(e){if(this.querySelectorAll(".fig-inp").forEach(n=>{if(e){const s=n.dataset.solution||n.dataset.figCanon;s&&(n.value=s,n.classList.add("correct"),n.classList.remove("incorrect"))}else n.value="",n.classList.remove("correct","incorrect")}),this._mode==="etayage-max"){const n=this.querySelector(".fig-trigo-checkup-grid");if(n){const s=JSON.parse(n.dataset.trigoExpected||"{}");n.querySelectorAll(".fig-trigo-check").forEach(t=>{const o=t.querySelector("input");e?(o.checked=!!s[t.dataset.key],o.dispatchEvent(new Event("change"))):(o.checked=!1,t.classList.remove("fig-trigo-check--ko"),this.querySelector(".fig-trigo-callout")?.classList.remove("fig-trigo-callout--visible"))})}}}}customElements.define("math974-trigo-figure",gt);export{gt as TrigoFigureVisual,yt as autoScale,ht as defaultPosition,mt as randomize};
