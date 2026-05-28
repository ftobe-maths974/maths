import{_ as b}from"./editor.CJZspgfY.js";let p=null,v=!1,f=new Map,d=null;async function x(t){if(p)return p;const e=await b(()=>import("./pdf.Cq_gInFy.js"),[]);return e.GlobalWorkerOptions.workerSrc=new URL("/maths/_astro/pdf.worker.min.FHbmGBN0.mjs",import.meta.url).href,p=e,e}function y(t){if(f.has(t))return f.get(t);const e=x().then(i=>i.getDocument(t).promise);return f.set(t,e),e}function k(){if(v)return;v=!0;const t=`
    .gs-pdf-overlay {
      position: fixed; inset: 0;
      width: 100vw; height: 100vh;
      margin: 0; padding: 0; border: none;
      background: white;
      z-index: 10000;
      display: none;
      overflow: auto;
    }
    .gs-pdf-overlay[open] {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .gs-pdf-overlay::backdrop { background: rgba(0,0,0,0.6); }
    .gs-pdf-canvas-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      box-sizing: border-box;
      min-height: 100%;
      width: 100%;
    }
    .gs-pdf-canvas {
      display: block;
      max-width: 100%;
      height: auto;
      box-shadow: 0 8px 30px rgba(0,0,0,0.18);
    }
    .gs-pdf-loading {
      position: absolute; inset: 0;
      display: flex; align-items: center; justify-content: center;
      color: #64748b; font-size: 0.95rem;
      pointer-events: none;
    }
    .gs-pdf-loading.hidden { display: none; }
    /* Croix de fermeture flottante — thème global des boutons fermer :
       rond blanc translucide → blanc plein au hover, glyph rouge. */
    .gs-pdf-close {
      position: fixed;
      top: 16px; right: 16px;
      width: 44px; height: 44px;
      min-width: 44px; min-height: 44px;
      border-radius: 50%;
      border: 2px solid rgba(15, 23, 42, 0.25);
      background: rgba(255, 255, 255, 0.92);
      color: #475569;
      font-size: 1.3rem;
      font-weight: 900;
      line-height: 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 4px 14px rgba(0,0,0,0.18);
      transition: all 0.15s;
      z-index: 10001;
      padding: 0;
    }
    .gs-pdf-close:hover {
      background: white;
      color: #dc2626;
      border-color: #dc2626;
      transform: scale(1.08);
    }
  `,e=document.createElement("style");e.id="gs-pdf-overlay-styles",e.textContent=t,document.head.appendChild(e)}function C(t,e){const i=window.__AM_GS_BY_CYCLE__||{},l=window.__AM_GS_PDF_DATA__||window.__GS_PDF_DATA__||{};return e&&i[t]?.[e]?i[t][e]:l[t]||null}function g(){d&&(d.remove(),d=null)}async function j(t,e={}){const{preferredCycle:i=null,base:l=""}=e,o=C(t,i);if(!o)return;k(),g();const n=document.createElement("dialog");n.className="gs-pdf-overlay",n.innerHTML=`
    <div class="gs-pdf-canvas-wrap">
      <canvas class="gs-pdf-canvas"></canvas>
      <div class="gs-pdf-loading">Chargement…</div>
    </div>
    <button class="gs-pdf-close" type="button" aria-label="Fermer">✕</button>
  `,document.body.appendChild(n),d=n;const u=()=>{n.close(),g()};n.querySelector(".gs-pdf-close").addEventListener("click",u),n.addEventListener("click",a=>{a.target===n&&u()}),n.addEventListener("close",()=>g()),n.open||n.showModal();const r=n.querySelector(".gs-pdf-canvas"),c=n.querySelector(".gs-pdf-loading");try{const a=o.pdfUrl??`${l}/pdf/guide-survie-c3.pdf`,h=await(await y(a)).getPage(o.page),m=window.devicePixelRatio||1,w=window.innerWidth*.92,s=w/o.w*m,_=h.getViewport({scale:s,offsetX:-o.x*s,offsetY:-o.y*s});r.width=o.w*s,r.height=o.h*s,await h.render({canvasContext:r.getContext("2d"),viewport:_}).promise,r.style.width=Math.min(o.w*s/m,w)+"px",r.style.height="auto",c?.classList.add("hidden")}catch{c&&(c.textContent="Erreur de chargement du PDF.")}}export{j as openGsOverlay};
