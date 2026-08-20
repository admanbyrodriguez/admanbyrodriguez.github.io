/* =========================================================
   ADMAN BY RODRÍGUEZ — CONTENIDO EDITABLE
   Aquí puedes cambiar redes y agregar videos sin tocar index.html.
   ========================================================= */

const ADMAN = {
  whatsapp: "51927810633",

  social: {
    tiktok: "",      // Ej: https://www.tiktok.com/@tuusuario
    facebook: "",    // Ej: https://www.facebook.com/tuusuario
    instagram: ""    // Ej: https://www.instagram.com/tuusuario
  },

  /* VIDEOS
     Para agregar un video de YouTube, TikTok, Instagram o Facebook,
     pega su URL en una de estas posiciones.
     Puedes dejar las que no uses vacías.
  */
  videos: [
    { title: "Próximo video", url: "", type: "embed" },
    { title: "Próximo video", url: "", type: "embed" },
    { title: "Próximo video", url: "", type: "embed" }
  ],

  /* FOTOS
     Para agregar otra foto:
     1. Sube la imagen a /assets/
     2. Agrega una línea aquí:
        {src:"assets/nueva-foto.jpg", title:"Mi nuevo trabajo"}
  */
  gallery: [
    {src:"assets/reparacion-1.jpg", title:"Reparación técnica"},
    {src:"assets/reparacion-2.jpg", title:"Placa electrónica"},
    {src:"assets/reparacion-3.jpg", title:"Diagnóstico y reparación"},
    {src:"assets/reparacion-4.jpg", title:"Cambio de pantalla"},
    {src:"assets/reparacion-5.jpg", title:"Reparación de equipo"},
    {src:"assets/reparacion-6.jpg", title:"Trabajo de laboratorio"},
    {src:"assets/reparacion-7.jpg", title:"Placa y componentes"},
    {src:"assets/reparacion-8.jpg", title:"Diagnóstico profesional"},
    {src:"assets/reparacion-9.jpg", title:"Servicio técnico"},
    {src:"assets/reparacion-10.jpg", title:"Reparación móvil"}
  ]
};

<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>ADMAN by Rodríguez | Tecnología en Moyobamba</title>
<meta name="description" content="ADMAN by Rodríguez: celulares, servicio técnico, accesorios y soluciones tecnológicas en Moyobamba.">
<style>
:root{--bg:#070707;--card:#111;--line:#292929;--muted:#9a9a9a;--white:#fff;--green:#25d366}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:Inter,Arial,sans-serif;background:var(--bg);color:var(--white);line-height:1.5}
a{text-decoration:none;color:inherit}
.container{width:min(1180px,92%);margin:auto}
header{position:sticky;top:0;z-index:100;background:#070707eF;backdrop-filter:blur(16px);border-bottom:1px solid var(--line)}
.nav{height:72px;display:flex;align-items:center;justify-content:space-between}.brand{font-size:21px;font-weight:800}.brand span{font-weight:400}
nav{display:flex;gap:25px;font-size:13px;color:#ddd}nav a:hover{color:#fff}
.hero{min-height:690px;position:relative;overflow:hidden;display:flex;align-items:center;background:
radial-gradient(circle at 78% 35%,#303030 0,transparent 33%),
linear-gradient(135deg,#0a0a0a,#191919)}
.hero:before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,#070707 0%,#070707c9 45%,transparent 100%)}
.hero-inner{position:relative;z-index:2}.eyebrow{display:inline-block;border:1px solid #555;border-radius:999px;padding:8px 15px;font-size:12px;color:#ddd;margin-bottom:25px}
.hero h1{font-size:clamp(55px,9vw,110px);line-height:.88;letter-spacing:-5px;max-width:900px}.hero h1 span{display:block}
.hero p{font-size:20px;color:#ccc;max-width:650px;margin:30px 0}.buttons{display:flex;gap:12px;flex-wrap:wrap}.btn{padding:14px 22px;border:1px solid #555;border-radius:9px;font-weight:700;font-size:14px}.btn.primary{background:#fff;color:#000;border-color:#fff}
.ticker{overflow:hidden;background:#fff;color:#000;border-block:1px solid #fff}.ticker-track{width:max-content;display:flex;animation:ticker 26s linear infinite}.ticker span{padding:15px 28px;white-space:nowrap;font-size:12px;font-weight:900;letter-spacing:.7px}@keyframes ticker{to{transform:translateX(-50%)}}
section{padding:90px 0}.head{display:flex;justify-content:space-between;align-items:end;gap:25px;margin-bottom:30px}.kicker{font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#777}.title{font-size:42px;letter-spacing:-2px}.desc{max-width:560px;color:var(--muted)}
.cards{display:grid;grid-template-columns:repeat(4,1fr);gap:15px}.card{background:var(--card);border:1px solid var(--line);border-radius:18px;padding:25px;min-height:205px;transition:.25s}.card:hover{transform:translateY(-5px);border-color:#555}.card .icon{font-size:29px}.card h3{margin:15px 0 8px;font-size:19px}.card p{color:#999;font-size:14px}
.carousel-wrap{position:relative}.carousel{display:flex;gap:16px;overflow:auto;scroll-snap-type:x mandatory;scrollbar-width:thin;padding-bottom:12px}.photo{flex:0 0 340px;height:410px;position:relative;overflow:hidden;border-radius:18px;border:1px solid var(--line);scroll-snap-align:start;background:#111}.photo img{width:100%;height:100%;object-fit:cover}.photo .caption{position:absolute;left:0;right:0;bottom:0;padding:35px 18px 18px;background:linear-gradient(transparent,#000);font-weight:800}
.arrowbar{display:flex;gap:8px;margin-bottom:14px}.arrow{width:42px;height:38px;border:1px solid #444;background:#111;color:#fff;border-radius:8px;cursor:pointer}
.video-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.video{aspect-ratio:16/10;border:1px dashed #555;border-radius:18px;background:#0f0f0f;overflow:hidden;display:grid;place-items:center;text-align:center;color:#888}.video iframe{width:100%;height:100%;border:0}.video strong{display:block;color:#fff;margin-bottom:6px;font-size:17px}
.socials{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.social{background:#111;border:1px solid #333;border-radius:14px;padding:22px}.social small{display:block;color:#888;margin-top:5px}.social.disabled{opacity:.45}
.callout{background:#f4f4f4;color:#080808;border-radius:24px;padding:55px}.callout p{color:#555;max-width:650px;margin:10px 0 25px}.dark-btn{background:#080808;color:#fff;border-color:#080808}
footer{border-top:1px solid var(--line);padding:35px 0;color:#888;font-size:13px}
.wa{position:fixed;right:22px;bottom:22px;width:61px;height:61px;background:var(--green);border-radius:50%;display:grid;place-items:center;z-index:200;font-size:26px;box-shadow:0 10px 35px #0009}
@media(max-width:900px){nav{display:none}.cards{grid-template-columns:repeat(2,1fr)}.video-grid,.socials{grid-template-columns:1fr 1fr}.photo{flex-basis:78vw}}
@media(max-width:560px){section{padding:70px 0}.hero{min-height:620px}.hero h1{letter-spacing:-3px}.hero p{font-size:17px}.cards,.video-grid,.socials{grid-template-columns:1fr}.title{font-size:34px}.head{display:block}.head .desc{margin-top:10px}.photo{height:390px}}
</style>
</head>
<body>
<header><div class="container nav"><a class="brand" href="#inicio">ADMAN <span>by Rodríguez</span></a>
<nav><a href="#servicios">Servicios</a><a href="#reparaciones">Reparaciones</a><a href="#videos">Videos</a><a href="#redes">Redes</a><a href="#contacto">Contacto</a></nav></div></header>

<main id="inicio">
<section class="hero"><div class="container hero-inner">
<div class="eyebrow">📍 MOYOBAMBA · SAN MARTÍN</div>
<h1>ADMAN <span>by Rodríguez.</span></h1>
<p>Tecnología, celulares y servicio técnico. Compra, repara y protege tu equipo en un solo lugar.</p>
<div class="buttons"><a class="btn primary wa-link" href="#" target="_blank">💬 Cotizar por WhatsApp</a><a class="btn" href="#servicios">Ver servicios</a></div>
</div></section>

<div class="ticker"><div class="ticker-track">
<span>🛠️ SERVICIO TÉCNICO PROFESIONAL</span><span>📱 VENTA DE CELULARES</span><span>🛍️ ACCESORIOS</span><span>🍎 APPLE & ANDROID</span><span>⚡ SOLUCIONES TECNOLÓGICAS</span><span>📍 MOYOBAMBA</span>
<span>🛠️ SERVICIO TÉCNICO PROFESIONAL</span><span>📱 VENTA DE CELULARES</span><span>🛍️ ACCESORIOS</span><span>🍎 APPLE & ANDROID</span><span>⚡ SOLUCIONES TECNOLÓGICAS</span><span>📍 MOYOBAMBA</span>
</div></div>

<section id="servicios"><div class="container">
<div class="head"><div><div class="kicker">ADMAN</div><h2 class="title">Todo en un solo lugar.</h2></div><p class="desc">Servicios tecnológicos pensados para ayudarte a mantener tus equipos funcionando y protegidos.</p></div>
<div class="cards">
<article class="card"><div class="icon">🛠️</div><h3>Servicio técnico</h3><p>Diagnóstico, reparación y mantenimiento para celulares.</p></article>
<article class="card"><div class="icon">📱</div><h3>Celulares</h3><p>Venta de equipos y asesoría para elegir tu próximo celular.</p></article>
<article class="card"><div class="icon">🛍️</div><h3>Accesorios</h3><p>Micas, cargadores, cables, audífonos y protección.</p></article>
<article class="card"><div class="icon">💻</div><h3>Software</h3><p>Soluciones de software y herramientas tecnológicas.</p></article>
</div></div></section>

<section id="reparaciones"><div class="container">
<div class="head"><div><div class="kicker">Trabajos reales</div><h2 class="title">Reparaciones</h2></div><p class="desc">Una muestra de nuestro trabajo. Puedes agregar nuevas fotos desde <b>content.js</b>.</p></div>
<div class="arrowbar"><button class="arrow" data-target="gallery" data-dir="-1">←</button><button class="arrow" data-target="gallery" data-dir="1">→</button></div>
<div class="carousel" id="gallery"></div>
</div></section>

<section id="videos"><div class="container">
<div class="head"><div><div class="kicker">Contenido</div><h2 class="title">Videos</h2></div><p class="desc">Espacio preparado para tus próximos videos. Solo agrega la URL en <b>content.js</b>.</p></div>
<div class="video-grid" id="videoGrid"></div>
</div></section>

<section id="redes"><div class="container">
<div class="head"><div><div class="kicker">Conecta con nosotros</div><h2 class="title">Nuestras redes</h2></div><p class="desc">Publica tus trabajos, promociones y novedades y lleva a tus clientes directamente a tus perfiles.</p></div>
<div class="socials" id="socials"></div>
</div></section>

<section id="contacto"><div class="container"><div class="callout">
<div class="kicker">Atención directa</div><h2 class="title">¿Necesitas reparar tu celular?</h2>
<p>Escríbenos por WhatsApp y cuéntanos qué necesita tu equipo. Te responderemos con información y cotización.</p>
<a class="btn dark-btn wa-link" href="#" target="_blank">Escribir por WhatsApp</a>
</div></div></section>
</main>

<a class="wa wa-link" href="#" target="_blank" aria-label="WhatsApp">☎</a>
<footer><div class="container"><b>ADMAN by Rodríguez</b><br>Celulares · Servicio técnico · Accesorios · Moyobamba, San Martín<br><br>© 2026 ADMAN by Rodríguez</div></footer>

<script src="content.js"></script>
<script>
const q=s=>document.querySelector(s), qa=s=>document.querySelectorAll(s);
const phone=ADMAN.whatsapp;
qa(".wa-link").forEach(a=>a.href=`https://wa.me/${phone}?text=Hola%20ADMAN,%20quiero%20hacer%20una%20consulta.`);

const gallery=q("#gallery");
ADMAN.gallery.forEach(x=>{
  const el=document.createElement("article"); el.className="photo";
  el.innerHTML=`<img src="${x.src}" alt="${x.title}" loading="lazy"><div class="caption">${x.title}</div>`;
  gallery.appendChild(el);
});

qa(".arrow").forEach(btn=>btn.addEventListener("click",()=>{
  const box=q("#"+btn.dataset.target);
  box.scrollBy({left:Number(btn.dataset.dir)*370,behavior:"smooth"});
}));

const vg=q("#videoGrid");
ADMAN.videos.forEach(v=>{
  const el=document.createElement("div"); el.className="video";
  if(v.url){
    el.innerHTML=`<iframe src="${v.url}" title="${v.title}" allowfullscreen loading="lazy"></iframe>`;
  }else{
    el.innerHTML=`<div><strong>🎥 ${v.title}</strong>Agrega aquí la URL del próximo video en <b>content.js</b>.</div>`;
  }
  vg.appendChild(el);
});

const socialData=[
  ["tiktok","🎵 TikTok","Videos y contenido"],
  ["facebook","📘 Facebook","Promociones y novedades"],
  ["instagram","📸 Instagram","Fotos y trabajos"],
  ["whatsapp","💬 WhatsApp","Atención directa"]
];
const sg=q("#socials");
socialData.forEach(([key,label,desc])=>{
  const el=document.createElement("a"); el.className="social";
  const url=key==="whatsapp"?`https://wa.me/${phone}`:ADMAN.social[key];
  if(url) {el.href=url;el.target="_blank"} else el.classList.add("disabled");
  el.innerHTML=`<b>${label}</b><small>${desc}${!url?" · Configurar en content.js":""}</small>`;
  sg.appendChild(el);
});
</script>
</body>
</html>

ADMAN by Rodríguez — web estática

Para agregar contenido sin modificar index.html:
1. Abre content.js.
2. Redes: pega las URLs de TikTok, Facebook e Instagram.
3. Videos: pega las URLs de embed en el arreglo videos.
4. Fotos: sube la nueva foto a assets/ y agrega una línea en gallery.
