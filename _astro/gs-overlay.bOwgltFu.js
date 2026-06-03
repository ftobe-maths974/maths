import{_ as P}from"./preload-helper.CLcXU_4U.js";import{r as k}from"./editor.Di92v2Ao.js";let f=null,b=!1,g=new Map,l=null;async function S(e){if(f)return f;const t=await P(()=>import("./pdf.Cq_gInFy.js"),[]);return t.GlobalWorkerOptions.workerSrc=new URL("/_astro/pdf.worker.min.FHbmGBN0.mjs",import.meta.url).href,f=t,t}function U(e){if(g.has(e))return g.get(e);const t=S().then(r=>r.getDocument(e).promise);return g.set(e,t),t}function D(){if(b)return;b=!0;const e=`
    .gs-pdf-overlay {
      position: fixed; inset: 0;
      width: 100vw; height: 100vh;
      margin: 0; padding: 0; border: none;
      background: white;
      z-index: 10000;
      display: none;
      overflow: hidden;
    }
    /* Colonne : panel header en HAUT (titre + actions) puis zone PDF dessous. */
    .gs-pdf-overlay[open] {
      display: flex;
      flex-direction: column;
    }
    .gs-pdf-overlay::backdrop { background: rgba(0,0,0,0.6); }

    /* ── Panel header ── titre à gauche, actions (1UP + ✕) à droite. */
    .gs-pdf-header {
      flex: 0 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 10px 14px;
      background: #ffffff;
      border-bottom: 1px solid #e2e8f0;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
      z-index: 1;
    }
    .gs-pdf-title {
      font-size: 1rem;
      font-weight: 800;
      color: #0f766e;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .gs-pdf-actions {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
    }
    /* Bouton 1UP — pill arcade (vert → indigo), accroche ludique. */
    .gs-pdf-1up {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      min-height: 40px;
      padding: 0 16px;
      border: none;
      border-radius: 999px;
      background: linear-gradient(135deg, #22c55e 0%, #6366f1 100%);
      color: #fff;
      font-size: 0.95rem;
      font-weight: 800;
      letter-spacing: 0.02em;
      cursor: pointer;
      text-decoration: none;
      box-shadow: 0 3px 10px rgba(99,102,241,0.30);
      transition: transform 0.12s, box-shadow 0.12s, filter 0.12s;
    }
    .gs-pdf-1up:hover {
      transform: translateY(-1px);
      filter: brightness(1.05);
      box-shadow: 0 5px 16px rgba(99,102,241,0.40);
    }
    /* ✕ fermer — rond blanc, glyph rouge au hover (thème global). */
    .gs-pdf-close {
      width: 40px; height: 40px;
      min-width: 40px; min-height: 40px;
      border-radius: 50%;
      border: 2px solid rgba(15, 23, 42, 0.18);
      background: #fff;
      color: #475569;
      font-size: 1.2rem;
      font-weight: 900;
      line-height: 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.15s;
      padding: 0;
    }
    .gs-pdf-close:hover {
      color: #dc2626;
      border-color: #dc2626;
      transform: scale(1.08);
    }

    /* ── Zone PDF ── scrollable, le canvas centré. */
    .gs-pdf-canvas-wrap {
      flex: 1 1 auto;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      box-sizing: border-box;
      overflow: auto;
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
  `,t=document.createElement("style");t.id="gs-pdf-overlay-styles",t.textContent=e,document.head.appendChild(t)}function E(e,t){const r=window.__AM_GS_BY_CYCLE__||{},c=window.__AM_GS_PDF_DATA__||window.__GS_PDF_DATA__||{};if(t&&r[e]){for(const d of k(t))if(r[e][d])return r[e][d];return null}return c[e]||null}function u(){l&&(l.remove(),l=null)}async function L(e,t={}){const{preferredCycle:r=null,base:c="",title:d=null,oneUpUrl:h=null}=t,o=E(e,r);if(!o)return;D(),u();const y=d??o.title??e,n=document.createElement("dialog");n.className="gs-pdf-overlay";const _=h?`<a class="gs-pdf-1up" href="${h}">🎮 1UP</a>`:"";n.innerHTML=`
    <header class="gs-pdf-header">
      <span class="gs-pdf-title"></span>
      <div class="gs-pdf-actions">
        ${_}
        <button class="gs-pdf-close" type="button" aria-label="Fermer">✕</button>
      </div>
    </header>
    <div class="gs-pdf-canvas-wrap">
      <canvas class="gs-pdf-canvas"></canvas>
      <div class="gs-pdf-loading">Chargement…</div>
    </div>
  `,n.querySelector(".gs-pdf-title").textContent=y,document.body.appendChild(n),l=n;const x=()=>{n.close(),u()};n.querySelector(".gs-pdf-close").addEventListener("click",x),n.querySelector(".gs-pdf-canvas-wrap").addEventListener("click",i=>{i.target===i.currentTarget&&x()}),n.addEventListener("close",()=>u()),n.open||n.showModal();const a=n.querySelector(".gs-pdf-canvas"),p=n.querySelector(".gs-pdf-loading");try{const i=o.pdfUrl??`${c}/pdf/guide-survie-c3.pdf`,m=await(await U(i)).getPage(o.page),w=window.devicePixelRatio||1,v=window.innerWidth*.92,s=v/o.w*w,C=m.getViewport({scale:s,offsetX:-o.x*s,offsetY:-o.y*s});a.width=o.w*s,a.height=o.h*s,await m.render({canvasContext:a.getContext("2d"),viewport:C}).promise,a.style.width=Math.min(o.w*s/w,v)+"px",a.style.height="auto",p?.classList.add("hidden")}catch{p&&(p.textContent="Erreur de chargement du PDF.")}}export{L as openGsOverlay};
