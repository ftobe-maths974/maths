import{r as U}from"./fullscreen-viewer.mTVM_Ikm.js";import"./editor.CJZspgfY.js";const At="content",Tt=!0;function Ot(i){return{...i||{},_seed:Math.random()}}const Lt=["A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","U","V","X","Y","Z"],ut={secante1:"#2563eb",secante2:"#2563eb",parallele1:"#ea580c",parallele2:"#ea580c",point:"#1e293b",texte:"#1e293b"},Nt=`
math974-thales-figure {
  display: block;
  font-family: inherit;
  width: 100%;
}
.tf-wrap {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.tf-canvas-wrap { display: flex; justify-content: center; }
.tf-canvas { max-width: 100%; height: auto; background: #fff; }
.tf-enonce {
  font-family: 'Caveat', cursive;
  font-size: 1.35em;
  line-height: 1.7;
  color: #1e293b;
  padding: 12px 16px;
  background: rgba(99, 102, 241, 0.03);
  border-left: 3px solid #6366f1;
  border-radius: 6px;
  text-align: left;   /* override le centrage hérité du .content */
}
.tf-enonce .tf-row { margin-bottom: 4px; }
.tf-enonce .rapido-input,
.tf-enonce .tf-select {
  font-family: 'Caveat', cursive;
  font-size: 1em;
  font-weight: 700;
  background: #e8edf2;
  border: none;
  border-radius: 0.3em;
  padding: 0.05em 0.4em;
  text-align: center;
  outline: none;
  min-width: 2.4ch;
  field-sizing: content;
}
.tf-enonce .rapido-input:focus,
.tf-enonce .tf-select:focus { background: #fef9c3; outline: 2px solid #f59e0b; }
.tf-enonce .rapido-input.correct,
.tf-enonce .tf-select.correct   { background: #d1fae5; color: #065f46; }
.tf-enonce .rapido-input.incorrect,
.tf-enonce .tf-select.incorrect { background: #fee2e2; color: #b91c1c; }
.tf-enonce .tf-frac {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
  margin: 0 0.15em;
}
.tf-enonce .tf-frac > * { line-height: 1; }
.tf-enonce .tf-frac-bar {
  border-top: 1.5px solid #1e293b;
  width: 100%;
  margin: 0.05em 0;
}
.tf-enonce .tf-eq { margin: 0 0.4em; font-weight: 700; }
.tf-enonce .tf-times { margin: 0 0.15em; }
.tf-enonce .tf-soit-prefix { font-weight: 700; }

/* ─── Mode no-figure (variante v3) ───────────────────────────────────────── */
.tf-statement {
  font-family: 'Caveat', cursive;
  font-size: 1.35em;
  line-height: 1.7;
  color: #1e293b;
  padding: 14px 18px;
  background: rgba(34, 197, 94, 0.05);
  border-left: 3px solid #16a34a;
  border-radius: 6px;
  text-align: left;
}
.tf-statement .tf-stmt-line { margin-bottom: 2px; }
.tf-statement .tf-stmt-tag {
  font-weight: 700;
  color: #15803d;
  margin-right: 4px;
}

/* ─── Mode drag-chips (variante v2) ──────────────────────────────────────── */
.tf-chips-area {
  padding: 10px 14px;
  background: rgba(99, 102, 241, 0.04);
  border-left: 3px solid #6366f1;
  border-radius: 6px;
  font-family: 'Caveat', cursive;
  color: #1e293b;
}
.tf-chips-area .tf-chips-instr {
  display: block; margin-bottom: 8px;
  font-size: 1.1em;
}
/* Rangées drop-zones + chips : même mise en page, même taille → la cible
   et le projectile se ressemblent visuellement. */
.tf-drop-row, .tf-chips-row {
  display: flex; flex-wrap: wrap; gap: 8px 10px;
  align-items: center;
  min-height: 36px;
}
.tf-drop-row { margin-bottom: 8px; }
.tf-chip, .tf-dropzone {
  display: inline-flex; align-items: center; justify-content: center;
  font-family: 'Caveat', cursive;
  font-size: 1em;
  font-weight: 700;
  padding: 2px 10px;
  border-radius: 8px;
  min-width: 70px;
  min-height: 30px;
  white-space: nowrap;
  user-select: none;
}
.tf-chip {
  background: #fef3c7;
  border: 2px solid #fbbf24;
  color: #92400e;
  cursor: grab;
  touch-action: none;       /* sinon le scroll mobile avale le geste */
}
.tf-chip--dragging { cursor: grabbing; opacity: 0.85; box-shadow: 0 6px 16px rgba(0,0,0,.18); }
.tf-chip--ko { background: #fee2e2; border-color: #ef4444; color: #991b1b; }
.tf-dropzone {
  background: #fff;
  border: 2px dashed #cbd5e1;
  color: #94a3b8;
}
.tf-dropzone--hover { border-color: #f59e0b; background: #fef3c7; }
.tf-dropzone--filled {
  border-style: solid;
  border-color: #10b981;
  background: #d1fae5;
  color: #065f46;
}
`;function Bt(){if(document.getElementById("thales-figure-styles"))return;const i=document.createElement("style");i.id="thales-figure-styles",i.textContent=Nt,document.head.appendChild(i)}const lt=(i,a)=>Math.floor(Math.random()*(a-i+1))+i,Ct=(i,a)=>Math.random()*(a-i)+i;function zt(i){const a=[...Lt],r=[];for(let n=0;n<i;n++)r.push(a.splice(lt(0,a.length-1),1)[0]);return r}function It(i){const a=[...i];for(let r=a.length-1;r>0;r--){const n=Math.floor(Math.random()*(r+1));[a[r],a[n]]=[a[n],a[r]]}return a}function bt(i,a,r){const n=Math.cos(r),t=Math.sin(r),l=i.x-a.x,o=i.y-a.y;return{x:a.x+l*n-o*t,y:a.y+l*t+o*n}}function nt(i,a,r,n,t=22){const l=r.x-a.x,o=r.y-a.y,s=Math.hypot(l,o)||1,f=l/s,u=o/s,d={x:a.x-f*t,y:a.y-u*t},y={x:r.x+f*t,y:r.y+u*t},L=-u,N=f,I=(Math.random()-.5)*4,x=(d.x+y.x)/2+L*I,p=(d.y+y.y)/2+N*I;i.strokeStyle=n,i.lineWidth=4,i.lineCap="round",i.beginPath(),i.moveTo(d.x,d.y),i.quadraticCurveTo(x,p,y.x,y.y),i.stroke()}function wt(i,a,r,n=10,t=-10){i.beginPath(),i.arc(a.x,a.y,4,0,2*Math.PI),i.fillStyle=ut.point,i.fill(),Mt(i,r,a.x+n,a.y+t,22)}function Mt(i,a,r,n,t=20,l=ut.texte){i.save(),i.font=`700 ${t}px 'Caveat', cursive`,i.textAlign="center",i.textBaseline="middle";const o=i.measureText(a).width,s=t*1.1;i.fillStyle="#fff",i.fillRect(r-o/2-5,n-s/2,o+10,s),i.fillStyle=l,i.fillText(a,r,n),i.restore()}function Et(i,a,r,n,t=1){const l=r.x-a.x,o=r.y-a.y,s=Math.hypot(l,o)||1,f=-o/s*t,u=l/s*t,d=14,y=(a.x+r.x)/2+f*d,L=(a.y+r.y)/2+u*d;Mt(i,n,y,L,20,"#9ca3af")}function _t(i,a,r,n,t=1){const l=r.x-a.x,o=r.y-a.y,s=Math.hypot(l,o)||1,f=-o/s*t,u=l/s*t,d=Math.max(25,s*.18),y=(a.x+r.x)/2+f*d*2,L=(a.y+r.y)/2+u*d*2;i.strokeStyle="#cbd5e1",i.lineWidth=1.2,i.beginPath(),i.moveTo(a.x,a.y),i.quadraticCurveTo(y,L,r.x,r.y),i.stroke();const N=(a.x+r.x)/2+f*(d+14),I=(a.y+r.y)/2+u*(d+14);Mt(i,n,N,I,20,"#9ca3af")}function st(i){return Number.isInteger(i)?String(i):(Math.round(i*10)/10).toString().replace(".",",")}function St(i,a,r){const n=a.x-i.x,t=a.y-i.y,l=Math.hypot(n,t)||1,o=-t/l,s=n/l,f=(i.x+a.x)/2,u=(i.y+a.y)/2;return o*(r.x-f)+s*(r.y-u)>0?-1:1}class qt extends HTMLElement{constructor(){super(),this._data=null}connectedCallback(){Bt(),this.dataset.placeMode="1",this._mode=this.getAttribute("mode")||"etayage-max",this._style=this.getAttribute("style")||"triangle",this.querySelector(".tf-wrap")||this._render(),this.randomize()}_render(){if(this._mode==="no-figure"){this.innerHTML=`
        <div class="tf-wrap">
          <div class="tf-statement" data-tf-statement></div>
          <div class="tf-enonce" data-tf-enonce></div>
        </div>
      `;return}this._mode==="drag-chips"?this.innerHTML=`
        <div class="tf-wrap">
          <div class="tf-canvas-wrap">
            <canvas class="tf-canvas" width="720" height="460"></canvas>
          </div>
          <div class="tf-chips-area">
            <span class="tf-chips-instr">Glisse chaque longueur sur le bon segment :</span>
            <div class="tf-drop-row" data-tf-drops></div>
            <div class="tf-chips-row" data-tf-chips></div>
          </div>
          <div class="tf-enonce" data-tf-enonce></div>
        </div>
      `:this.innerHTML=`
        <div class="tf-wrap">
          <div class="tf-canvas-wrap">
            <canvas class="tf-canvas" width="720" height="460"></canvas>
          </div>
          <div class="tf-enonce" data-tf-enonce></div>
        </div>
      `}randomize(){const a=this.querySelector("[data-tf-enonce]");if(!a)return;const r=this.querySelector(".tf-canvas"),n=r?r.getContext("2d"):null,t=r?r.width:0,l=r?r.height:0,[o,s,f,u,d]=zt(5),y=lt(6,10),L=Math.ceil(y*.35),N=Math.floor(y*.65),I=lt(L,N),x=lt(1,2),p=I*x,S=y*x,B=lt(3,7),$=B*y/I,C={IB:I,IM:y,IC:p,IN:S,BC:B,MN:$},V=["IB","IM","IC","IN","BC","MN"],J={IB:"IM",IM:"IB",IC:"IN",IN:"IC",BC:"MN",MN:"BC"},F=[...V],P=F.splice(lt(0,F.length-1),1)[0],dt=F.indexOf(J[P]);dt>=0&&F.splice(dt,1);const O=F.splice(lt(0,F.length-1),1)[0];if(this._mode==="no-figure"){this._renderStatement(this.querySelector("[data-tf-statement]"),{nI:o,nB:s,nM:f,nC:u,nN:d,longueurs:C,inc1:P,inc2:O}),this._renderEnonce(a,{nI:o,nB:s,nM:f,nC:u,nN:d,longueurs:C,inc1:P,inc2:O}),this._geom=null,this._data={noms:{I:o,B:s,M:f,C:u,N:d},longueurs:C,inc1:P,inc2:O},this.dataset.thalesData=JSON.stringify(this._data);return}const j={x:1,y:0},ot=Ct(Math.PI*2/9,Math.PI*5/12),at={x:Math.cos(ot),y:-Math.sin(ot)},H=Ct(0,Math.PI*2),X=this._style==="papillon"?-1:1,Y={[o]:{x:0,y:0},[s]:bt({x:j.x*I*X,y:j.y*I*X},{x:0,y:0},H),[f]:bt({x:j.x*y,y:j.y*y},{x:0,y:0},H),[u]:bt({x:at.x*p*X,y:at.y*p*X},{x:0,y:0},H),[d]:bt({x:at.x*S,y:at.y*S},{x:0,y:0},H)};let Q=1/0,A=-1/0,z=1/0,T=-1/0;for(const h of Object.values(Y))h.x<Q&&(Q=h.x),h.x>A&&(A=h.x),h.y<z&&(z=h.y),h.y>T&&(T=h.y);const K=.18,$t=[[Y[o],Y[f]],[Y[o],Y[d]],[Y[f],Y[d]]];for(const[h,w]of $t){const q=w.x-h.x,Z=w.y-h.y,W=Math.hypot(q,Z)||1,gt=-Z/W,yt=q/W,pt=W*K,xt=(h.x+w.x)/2,vt=(h.y+w.y)/2;for(const mt of[1,-1]){const ct=xt+gt*pt*mt,it=vt+yt*pt*mt;ct<Q&&(Q=ct),ct>A&&(A=ct),it<z&&(z=it),it>T&&(T=it)}}const ht=70,c=(t-2*ht)/Math.max(A-Q,1),g=(l-2*ht)/Math.max(T-z,1),v=Math.min(c,g),_=(Q+A)/2,M=(z+T)/2,e={};for(const[h,w]of Object.entries(Y))e[h]={x:t/2+(w.x-_)*v,y:l/2+(w.y-M)*v};n.clearRect(0,0,t,l);const b=this._mode==="drag-chips"?"#9ca3af":ut.secante1,E=this._mode==="drag-chips"?"#9ca3af":ut.secante2,R=this._mode==="drag-chips"?"#9ca3af":ut.parallele1,D=this._mode==="drag-chips"?"#9ca3af":ut.parallele2,k=this._style==="papillon"?e[s]:e[o],tt=this._style==="papillon"?e[u]:e[o];nt(n,k,e[f],b),nt(n,tt,e[d],E),nt(n,e[s],e[u],R),nt(n,e[f],e[d],D);const G=(h,w,q,Z=34)=>{const W=w.x-h.x,gt=w.y-h.y,yt=Math.hypot(W,gt)||1,pt=q.x-h.x,xt=q.y-h.y,vt=Math.hypot(pt,xt)||1,mt=W/yt+pt/vt,ct=gt/yt+xt/vt,it=Math.hypot(mt,ct)||1;return{x:-mt/it*Z,y:-ct/it*Z}},rt={[o]:G(e[o],e[f],e[d]),[s]:G(e[s],e[o],e[u]),[f]:G(e[f],e[o],e[d]),[u]:G(e[u],e[o],e[s]),[d]:G(e[d],e[o],e[f])};Object.entries(e).forEach(([h,w])=>{const q=rt[h];wt(n,w,h,q.x,q.y)});const et=(h,w,q,Z)=>{const W=h===P||h===O?"?":st(C[h])+" cm";Et(n,w,q,W,St(w,q,Z))},ft=(h,w,q,Z)=>{const W=h===P||h===O?"?":st(C[h])+" cm";_t(n,w,q,W,St(w,q,Z))},m={IB:{p1:e[o],p2:e[s],ref:e[u],style:"texte"},IC:{p1:e[o],p2:e[u],ref:e[s],style:"texte"},BC:{p1:e[s],p2:e[u],ref:e[o],style:"texte"},IM:{p1:e[o],p2:e[f],ref:e[d],style:"arc"},IN:{p1:e[o],p2:e[d],ref:e[f],style:"arc"},MN:{p1:e[f],p2:e[d],ref:e[o],style:"arc"}};this._mode!=="drag-chips"&&(et("IB",e[o],e[s],e[u]),et("IC",e[o],e[u],e[s]),et("BC",e[s],e[u],e[o]),ft("IM",e[o],e[f],e[d]),ft("IN",e[o],e[d],e[f]),ft("MN",e[f],e[d],e[o])),this._geom={canvas:r,ctx:n,pts:e,longueurs:C,inc1:P,inc2:O,segDraw:m,names:{nI:o,nB:s,nM:f,nC:u,nN:d}},this._renderEnonce(a,{nI:o,nB:s,nM:f,nC:u,nN:d,longueurs:C,inc1:P,inc2:O}),this._mode==="drag-chips"&&this._renderChipsAndZones({nI:o,nB:s,nM:f,nC:u,nN:d,longueurs:C,inc1:P,inc2:O,pts:e}),this._data={noms:{I:o,B:s,M:f,C:u,N:d},longueurs:C,inc1:P,inc2:O},this.dataset.thalesData=JSON.stringify(this._data)}_renderEnonce(a,r){const{nI:n,nB:t,nM:l,nC:o,nN:s,longueurs:f,inc1:u,inc2:d}=r,y=c=>c==="BC"?t+o:c==="MN"?l+s:n+{IB:t,IM:l,IC:o,IN:s}[c],L=c=>c===u||c===d,N=c=>st(f[c]),I=c=>String(c||"").split("|")[0]||"",x=c=>String(c).replace(/"/g,"&quot;"),p=(c,g=3)=>`<input class="rapido-input tf-inp" type="text" data-tf-sol="${x(c)}" data-solution="${x(I(c))}" size="${g}" placeholder="…" autocomplete="off" spellcheck="false">`,S=(c,g)=>{const v=It(c).map(_=>`<option value="${_}">${_}</option>`).join("");return`<select class="rapido-input tf-select tf-inp" data-tf-sol="${x(g)}" data-solution="${x(I(g))}"><option value="" disabled selected>…</option>${v}</select>`},B=(c,g,v,_,M,e)=>{const b=It(c).map(k=>`<option value="${k}">${k}</option>`).join(""),E=M.map(k=>k.join(":")).join("||"),R=M[e],D=I(_==="num"?R[0]:R[1]);return`<select class="tf-select tf-inp" data-tf-pair-set="${g}" data-tf-pair-id="${v}" data-tf-pair-role="${_}" data-tf-pair-sols="${x(E)}" data-tf-canon="${x(D)}"><option value="" disabled selected>…</option>${b}</select>`},$=(c,g,v,_)=>{const M=It(c).map(E=>`<option value="${E}">${E}</option>`).join(""),e=v.map(E=>String(E)).join("||"),b=I(v[_]);return`<select class="tf-select tf-inp" data-tf-set-group="${g}" data-tf-set-vals="${x(e)}" data-tf-canon="${x(b)}"><option value="" disabled selected>…</option>${M}</select>`},C=(c,g)=>`<span class="tf-frac"><span>${c}</span><span class="tf-frac-bar"></span><span>${g}</span></span>`,V=[n+t+o,n+l+s,t+o+s+l],J=[`(${n}${l})`,`(${n}${s})`,`(${t}${o})`,`(${l}${s})`],F=[n,t,l,o,s],P=[n+t,n+l,n+o,n+s,t+o,l+s],O=S(["Thalès","Pythagore","milieux"],"Thalès"),j=c=>L(c)?y(c):N(c);function ot(c){const g=[["IB","IM"],["IC","IN"],["BC","MN"]],v=g.findIndex(e=>e.includes(c)),_=g[v],M=g.find((e,b)=>b!==v&&!L(e[0])&&!L(e[1]));return M?{rConnu:M,rInc:_}:{rAutre:g.find((b,E)=>E!==v),rInc:_}}function at(c){const{rConnu:g,rInc:v,rAutre:_}=ot(c),M=v[0]===c?"top":"bot",e=v[M==="top"?1:0],b=g||_,E=b[0],R=b[1];let D,k,tt;M==="top"?(D=E,k=e,tt=R):(D=e,k=R,tt=E);const G=f[D],rt=f[k],et=f[tt],ft=G*rt/et;return{n1Str:N(D),n2Str:N(k),dStr:N(tt),prodStr:st(G*rt),resStr:st(ft)}}const H=at(u),X=at(d),Y=n+t+o,Q=n+l+s,A=(c,g)=>`(${c}${g})|(${g}${c})`,z=(c,g)=>`${c}${g}|${g}${c}`;a.innerHTML=`
      <div class="tf-row">Dans les triangles ${$(V,"tri",[Y,Q],0)} et ${$(V,"tri",[Y,Q],1)} :</div>
      <div class="tf-row">• les droites ${$(J,"sec",[A(n,l),A(n,s)],0)} et ${$(J,"sec",[A(n,l),A(n,s)],1)} sont sécantes en ${S(F,n)}</div>
      <div class="tf-row">• les droites ${$(J,"par",[A(t,o),A(l,s)],0)} et ${$(J,"par",[A(t,o),A(l,s)],1)} sont parallèles</div>
      <div class="tf-row">D'après le théorème de ${O}, on a :</div>
      <div class="tf-row" style="margin-top:6px">
        ${(()=>{const c=Math.random()<.5,g='<span style="font-size:0.55em;vertical-align:middle">▲</span>',v='<span style="font-size:1.5em;vertical-align:middle">▲</span>',_=c?C(g,v):C(v,g),M=c?[[z(n,t),z(n,l)],[z(n,o),z(n,s)],[z(t,o),z(l,s)]]:[[z(n,l),z(n,t)],[z(n,s),z(n,o)],[z(l,s),z(t,o)]],e=(b,E)=>C(B(P,"rap",b,"num",M,E),B(P,"rap",b,"den",M,E));return`${_} <span class="tf-eq">=</span> ${e("p1",0)} <span class="tf-eq">=</span> ${e("p2",1)} <span class="tf-eq">=</span> ${e("p3",2)}`})()}
      </div>
      <div class="tf-row">
        <span class="tf-soit-prefix">Soit :</span>
        ${C(p(j("IB"),3),p(j("IM"),3))}
        <span class="tf-eq">=</span>
        ${C(p(j("IC"),3),p(j("IN"),3))}
        <span class="tf-eq">=</span>
        ${C(p(j("BC"),3),p(j("MN"),3))}
      </div>
      <div class="tf-row">${y(u)} =
        ${C(`${p(H.n1Str,3)} <span class="tf-times">×</span> ${p(H.n2Str,3)}`,p(H.dStr,3))} cm
        <span class="tf-eq">=</span>
        ${C(p(H.prodStr,3),p(H.dStr,3))} cm
        <span class="tf-eq">=</span>
        ${p(H.resStr,4)} cm
      </div>
      <div class="tf-row">${y(d)} =
        ${C(`${p(X.n1Str,3)} <span class="tf-times">×</span> ${p(X.n2Str,3)}`,p(X.dStr,3))} cm
        <span class="tf-eq">=</span>
        ${C(p(X.prodStr,3),p(X.dStr,3))} cm
        <span class="tf-eq">=</span>
        ${p(X.resStr,4)} cm
      </div>
    `;const T=c=>(c??"").replace(/\s/g,"").toLowerCase(),K=(c,g)=>(g||"").split("|").map(T).includes(T(c)),$t=(c,g)=>{const v=[...g.querySelectorAll(`[data-tf-pair-set="${c}"]`)];if(!v.length)return null;const M=(v[0].dataset.tfPairSols||"").split("||").map(m=>m.split(":")),e=new Set,b=new Set;M.forEach(([m,h])=>{m.split("|").forEach(w=>e.add(T(w))),h.split("|").forEach(w=>b.add(T(w)))});const E=new Set;v.forEach(m=>{const h=m.value.trim();if(!h){U(m,"neutral");return}(m.dataset.tfPairRole==="num"?e:b).has(T(h))||(U(m,"incorrect"),E.add(m))});const R={};v.forEach(m=>{const h=m.dataset.tfPairId;(R[h]||={})[m.dataset.tfPairRole]=m});const D=Object.values(R),k=D.filter(m=>m.num?.value.trim()&&m.den?.value.trim()),tt=k.filter(m=>!E.has(m.num)&&!E.has(m.den)),G=new Set;if(tt.forEach(m=>{const h=T(m.num.value)===T(m.den.value),w=M.some(([q,Z])=>K(m.num.value,q)&&K(m.den.value,Z));(h||!w)&&(G.add(m),U(m.num,"incorrect"),U(m.den,"incorrect"))}),E.size||G.size)return!1;const rt=[...M];let et=!0;for(const m of k){const h=rt.findIndex(([w,q])=>K(m.num.value,w)&&K(m.den.value,q));if(h===-1){et=!1;break}rt.splice(h,1)}return et?D.every(m=>m.num?.value.trim()&&m.den?.value.trim())?(k.forEach(m=>{U(m.num,"correct"),U(m.den,"correct")}),!0):(v.forEach(m=>{m.value.trim()&&!E.has(m)&&U(m,"neutral")}),null):(k.forEach(m=>{U(m.num,"incorrect"),U(m.den,"incorrect")}),!1)},ht=(c,g)=>{const v=[...g.querySelectorAll(`[data-tf-set-group="${c}"]`)];if(v.some(b=>!b.value.trim()))return null;const _=(v[0].dataset.tfSetVals||"").split("||"),M=[...v];new Array(_.length).fill(!1);let e=!0;for(let b=0;b<_.length;b++){const E=_[b],R=M.findIndex(D=>D&&K(D.value,E));if(R===-1){e=!1;break}M[R]=null}return v.forEach(b=>U(b,e?"correct":"incorrect")),e};a.querySelectorAll(".tf-inp").forEach(c=>{if(c.dataset.tfWired)return;c.dataset.tfWired="1";const g=c.dataset.tfSetGroup,v=c.dataset.tfPairSet,_=!!(g||v),M=()=>{if(v){$t(v,a);return}if(g){ht(g,a);return}if(!T(c.value))return;const b=K(c.value,c.dataset.tfSol);c.classList.toggle("correct",b),c.classList.toggle("incorrect",!b)};if(_){const e=b=>{b.stopImmediatePropagation(),M()};c.addEventListener("change",e,!0),c.addEventListener("blur",e,!0),c.addEventListener("keydown",b=>{b.key==="Enter"&&(b.stopImmediatePropagation(),M())},!0)}else c.addEventListener("blur",M),c.addEventListener("keydown",e=>{e.key==="Enter"&&M()}),c.tagName==="SELECT"&&c.addEventListener("change",M);c.addEventListener("input",()=>{v?a.querySelectorAll(`[data-tf-pair-set="${v}"]`).forEach(e=>e.classList.remove("correct","incorrect")):g?a.querySelectorAll(`[data-tf-set-group="${g}"]`).forEach(e=>e.classList.remove("correct","incorrect")):c.classList.remove("correct","incorrect")})})}getData(){return this._data}_renderChipsAndZones(a){const{nI:r,nB:n,nM:t,nC:l,nN:o,longueurs:s,inc1:f,inc2:u}=a,d=this.querySelector("[data-tf-chips]"),y=this.querySelector("[data-tf-drops]");if(!d||!y)return;const L={IB:r+n,IM:r+t,IC:r+l,IN:r+o,BC:n+l,MN:t+o},N=["IB","IM","IC","IN","BC","MN"],I=()=>{const x=[...N];for(let p=x.length-1;p>0;p--){const S=Math.floor(Math.random()*(p+1));[x[p],x[S]]=[x[S],x[p]]}return x};y.innerHTML=I().map(x=>`<div class="tf-dropzone" data-zone-seg="${x}">${L[x]} = ?</div>`).join(""),d.innerHTML=I().map(x=>{const S=x===f||x===u?"?":st(s[x])+" cm";return`<span class="tf-chip" data-target-seg="${x}">${L[x]} = ${S}</span>`}).join(""),this._wireDrag()}_renderStatement(a,r){if(!a)return;const{nI:n,nB:t,nM:l,nC:o,nN:s,longueurs:f,inc1:u,inc2:d}=r,y=$=>$===u||$===d,L=$=>({IB:n+t,IM:n+l,IC:n+o,IN:n+s,BC:t+o,MN:l+s})[$],N=["IB","IM","IC","IN","BC","MN"],I=N.filter($=>!y($)),x=N.filter($=>y($)),p=I.map($=>`${L($)} = ${st(f[$])} cm`).join(" ; "),S=x.map($=>L($)).join(" et "),B=this._style==="papillon"?`<b>${n}</b> est le point d'intersection des droites <b>(${t}${l})</b> et <b>(${o}${s})</b>, avec <b>${n} ∈ [${t}${l}]</b> et <b>${n} ∈ [${o}${s}]</b>. De plus, <b>(${t}${o}) // (${l}${s})</b>.`:`Soient deux droites <b>(${n}${l})</b> et <b>(${n}${s})</b> sécantes en <b>${n}</b>. <b>${t}</b> est un point de [${n}${l}] et <b>${o}</b> un point de [${n}${s}], avec <b>(${t}${o}) // (${l}${s})</b>.`;a.innerHTML=`
      <div class="tf-stmt-line">${B}</div>
      <div class="tf-stmt-line"><span class="tf-stmt-tag">On donne :</span> ${p}.</div>
      <div class="tf-stmt-line"><span class="tf-stmt-tag">Calculer :</span> ${S}.</div>
    `}_drawSegmentLabel(a){if(!this._geom)return;const{ctx:r,longueurs:n,inc1:t,inc2:l,segDraw:o}=this._geom,s=o[a];if(!s)return;const u=a===t||a===l?"?":st(n[a])+" cm",d=St(s.p1,s.p2,s.ref);s.style==="arc"?_t(r,s.p1,s.p2,u,d):Et(r,s.p1,s.p2,u,d)}_wireDrag(){const a=this.querySelector("[data-tf-chips]"),r=[...this.querySelectorAll(".tf-dropzone")];[...this.querySelectorAll(".tf-chip")].forEach(t=>{t.addEventListener("pointerdown",l=>{if(t.classList.contains("tf-chip--ok"))return;l.preventDefault();const o=t.getBoundingClientRect(),s=l.clientX-o.left,f=l.clientY-o.top,u=t.parentNode,d=t.nextSibling,y=o.width;t.style.position="fixed",t.style.left=l.clientX-s+"px",t.style.top=l.clientY-f+"px",t.style.width=y+"px",t.style.zIndex="10000",t.classList.add("tf-chip--dragging"),document.body.appendChild(t);try{t.setPointerCapture(l.pointerId)}catch{}const L=(S,B)=>{const $=t.style.pointerEvents;t.style.pointerEvents="none";const C=document.elementsFromPoint(S,B).find(V=>V.classList?.contains("tf-dropzone"));return t.style.pointerEvents=$,C},N=S=>{t.style.left=S.clientX-s+"px",t.style.top=S.clientY-f+"px";const B=L(S.clientX,S.clientY);r.forEach($=>$.classList.toggle("tf-dropzone--hover",$===B))},I=()=>{t.style.position="",t.style.left="",t.style.top="",t.style.width="",t.style.zIndex="",t.classList.remove("tf-chip--dragging")},x=()=>{I(),d?u.insertBefore(t,d):u.appendChild(t)},p=S=>{t.removeEventListener("pointermove",N),t.removeEventListener("pointerup",p),t.removeEventListener("pointercancel",p),r.forEach(C=>C.classList.remove("tf-dropzone--hover"));const B=L(S.clientX,S.clientY);if(!B){x();return}B.dataset.zoneSeg===t.dataset.targetSeg?(this._drawSegmentLabel(t.dataset.targetSeg),B.textContent=t.textContent,B.classList.add("tf-dropzone--filled"),I(),t.remove()):(I(),t.classList.add("tf-chip--ko"),a.appendChild(t),setTimeout(()=>t.classList.remove("tf-chip--ko"),700))};t.addEventListener("pointermove",N),t.addEventListener("pointerup",p),t.addEventListener("pointercancel",p)})})}_revealChips(a){if(a){const r=[...this.querySelectorAll(".tf-dropzone")];[...this.querySelectorAll(".tf-chip")].forEach(n=>{const t=r.find(l=>l.dataset.zoneSeg===n.dataset.targetSeg);t&&(this._drawSegmentLabel(n.dataset.targetSeg),t.textContent=n.textContent,t.classList.add("tf-dropzone--filled")),n.remove()})}else if(this._geom){const{ctx:r,canvas:n,pts:t,segDraw:l,names:o}=this._geom;r.clearRect(0,0,n.width,n.height);const{nI:s,nB:f,nM:u,nC:d,nN:y}=o,L=this._style==="papillon"?t[f]:t[s],N=this._style==="papillon"?t[d]:t[s];nt(r,L,t[u],"#9ca3af"),nt(r,N,t[y],"#9ca3af"),nt(r,t[f],t[d],"#9ca3af"),nt(r,t[u],t[y],"#9ca3af");const I=(p,S,B,$=34)=>{const C=S.x-p.x,V=S.y-p.y,J=Math.hypot(C,V)||1,F=B.x-p.x,P=B.y-p.y,dt=Math.hypot(F,P)||1,O=C/J+F/dt,j=V/J+P/dt,ot=Math.hypot(O,j)||1;return{x:-O/ot*$,y:-j/ot*$}},x={[s]:I(t[s],t[u],t[y]),[f]:I(t[f],t[s],t[d]),[u]:I(t[u],t[s],t[y]),[d]:I(t[d],t[s],t[f]),[y]:I(t[y],t[s],t[u])};Object.entries(t).forEach(([p,S])=>{wt(r,S,p,x[p].x,x[p].y)}),this._renderChipsAndZones({nI:s,nB:f,nM:u,nC:d,nN:y,longueurs:this._geom.longueurs,inc1:this._geom.inc1,inc2:this._geom.inc2,pts:t})}}toggleSolution(a){this.querySelectorAll(".tf-inp").forEach(r=>{if(a){const n=r.dataset.solution||r.dataset.tfCanon;n&&(r.value=n,r.classList.add("correct"),r.classList.remove("incorrect"))}else r.value="",r.classList.remove("correct","incorrect")}),this._mode==="drag-chips"&&this._revealChips(a)}}customElements.define("math974-thales-figure",qt);export{qt as ThalesFigureVisual,Tt as autoScale,At as defaultPosition,Ot as randomize};
