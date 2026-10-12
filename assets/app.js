var PHONE="573226605918"; /* WhatsApp de la tienda, con 57 al inicio */
var SHADES=[["#b4234f","Cereza"],["#8c1c3a","Vino"],["#d6604a","Coral"],["#c97b84","Rosa palo"],["#7a3b2e","Chocolate"],["#e0899b","Chicle"],["#a3314e","Frambuesa"],["#5e2233","Ciruela"]];
var P=[
{id:1,n:"Labial mate Cereza",d:"Larga duración, acabado aterciopelado. Disponible en 8 tonos",p:28900,c:"Labios",t:"lipstick",col:"#b4234f",bf:1},
{id:2,n:"Base líquida",d:"Cobertura media. Disponible en 12 tonos",p:54900,c:"Rostro",t:"foundation",col:"#d9a889"},
{id:3,n:"Paleta de sombras",d:"12 tonos cálidos mate y brillantes",p:69900,c:"Ojos",t:"palette",col:"#a8654a"},
{id:4,n:"Máscara de pestañas",d:"Volumen y curvatura, resistente al agua",p:32900,c:"Ojos",t:"mascara",col:"#2e1722"},
{id:5,n:"Rubor en crema",d:"Efecto natural, se difumina con los dedos. Disponible en 6 tonos",p:26900,c:"Rostro",t:"blush",col:"#e0899b",bf:1},
{id:6,n:"Gloss hidratante",d:"Brillo suave sin pegajosidad",p:19900,c:"Labios",t:"gloss",col:"#e8a0a8",bf:1},
{id:7,n:"Delineador de cejas",d:"Punta fina, tono castaño",p:17900,c:"Ojos",t:"pencil",col:"#6b4636",bf:1},
{id:8,n:"Set de 8 brochas",d:"Cerdas suaves y estuche incluido",p:59900,c:"Brochas",t:"brushes",col:"#c9a24f"}
];
var TONES={"1":SHADES,"2":[["#f3d9c4","Porcelana"],["#efcfb4","Marfil"],["#e6bf9d","Beige claro"],["#dcae88","Beige"],["#d2a07a","Arena"],["#c68e66","Miel"],["#b87c55","Canela"],["#a96c47","Trigueño"],["#9a5e3d","Caramelo"],["#85492f","Moka"],["#6e3b27","Cacao"],["#55291c","Ébano"]],"5":[["#f0a58d","Durazno"],["#eb9fb0","Rosa suave"],["#e0735f","Coral"],["#cf4a7b","Fucsia"],["#b8654f","Terracota"],["#b97a93","Malva"]]};
var sel=null,cur=null;
var LONG={"1":"Labial mate de larga duración con acabado aterciopelado y cómodo en los labios. Un solo paso para un color intenso que te acompaña todo el día. Hay más tonos de labial disponibles: elige el tuyo abajo.","2":"Base líquida de cobertura media que puedes aplicar en capas, disponible en 12 tonos para encontrar el que va con tu piel. Elige el tuyo abajo. Se difumina fácil con brocha o esponja.","3":"Paleta de 12 tonos cálidos, mate y brillantes, para looks de día o de noche. Fáciles de combinar y de difuminar.","4":"Máscara de pestañas que da volumen y curvatura, resistente al agua para que dure todo el día.","5":"Rubor en crema de efecto natural. Se aplica y se difumina con los dedos para dar un color suave a tus mejillas. Disponible en 6 tonos: elige el tuyo abajo.","6":"Gloss hidratante de brillo suave y sin sensación pegajosa. Úsalo solo o sobre tu labial favorito.","7":"Delineador de cejas de punta fina en tono castaño para definir y rellenar con trazos naturales.","8":"Set de 8 brochas de cerdas suaves con estuche incluido, para guardarlas o llevarlas contigo."};
var IMG={"1": "assets/images/producto-01.jpg", "2": "assets/images/producto-02.jpg", "3": "assets/images/producto-03.jpg", "4": "assets/images/producto-04.jpg", "5": "assets/images/producto-05.jpg", "6": "assets/images/producto-06.jpg", "7": "assets/images/producto-07.jpg", "8": "assets/images/producto-08.jpg"};
var cart={},cat="Todo",ph=IMG;
var $=function(s){return document.querySelector(s)};
var money=function(n){return"$"+n.toLocaleString("es-CO")};
function art(t,c){
 var s={
 lipstick:'<polygon points="37,52 37,26 63,12 63,52" fill="'+c+'"/><polygon points="37,26 63,12 63,18 37,32" fill="#fff" opacity=".25"/><rect x="35" y="52" width="30" height="14" fill="#b98a3e"/><rect x="33" y="66" width="34" height="27" rx="4" fill="#2e1722"/><rect x="38" y="70" width="3" height="19" rx="1.5" fill="#fff" opacity=".25"/>',
 foundation:'<rect x="46" y="3" width="8" height="9" rx="2" fill="#2e1722"/><rect x="38" y="11" width="24" height="6" rx="3" fill="#b98a3e"/><rect x="43" y="17" width="14" height="9" fill="#b98a3e"/><rect x="31" y="26" width="38" height="68" rx="11" fill="'+c+'"/><rect x="31" y="26" width="9" height="68" rx="4" fill="#fff" opacity=".25"/><rect x="37" y="50" width="26" height="26" rx="3" fill="#fff" opacity=".85"/><text x="50" y="66" text-anchor="middle" font-size="8" font-weight="700" fill="#2e1722" font-family="sans-serif">BASE</text>',
 palette:'<rect x="8" y="12" width="84" height="78" rx="9" fill="#2e1722"/><rect x="13" y="16" width="74" height="13" rx="4" fill="#e9e1e4" opacity=".85"/>'+[0,1,2].map(function(j){return[0,1,2,3].map(function(i){return'<rect x="'+(14+i*18.5)+'" y="'+(34+j*18)+'" width="15" height="15" rx="3.5" fill="'+["#f0d3b8","#e0a97d","#c98a62","#a8654a","#e8a0a8","#c2476b","#7a3b2e","#5e2233","#d8b36a","#8a6a3a","#3b2630","#b98a3e"][j*4+i]+'"/>'}).join("")}).join(""),
 mascara:'<rect x="42" y="4" width="16" height="36" rx="6" fill="#2e1722"/><rect x="38" y="40" width="24" height="7" rx="2" fill="#b98a3e"/><rect x="38" y="47" width="24" height="46" rx="7" fill="#4a2a38"/><rect x="43" y="54" width="14" height="22" rx="3" fill="#fff" opacity=".85"/><text x="50" y="68" text-anchor="middle" font-size="6" font-weight="700" fill="#2e1722" font-family="sans-serif">LASH</text>',
 blush:'<rect x="12" y="52" width="76" height="30" rx="10" fill="#3a2230"/><rect x="12" y="52" width="76" height="8" fill="#b98a3e"/><ellipse cx="50" cy="52" rx="38" ry="14" fill="#b98a3e"/><ellipse cx="50" cy="52" rx="32" ry="10.5" fill="'+c+'"/><path d="M30 52c8-7 16 5 24-2s12 3 16 0" fill="none" stroke="#fff" stroke-width="2" opacity=".5" stroke-linecap="round"/>',
 gloss:'<rect x="41" y="8" width="18" height="30" rx="5" fill="#b98a3e"/><rect x="45" y="12" width="3" height="22" rx="1.5" fill="#fff" opacity=".4"/><rect x="35" y="38" width="30" height="55" rx="12" fill="'+c+'"/><rect x="40" y="44" width="5" height="38" rx="2.5" fill="#fff" opacity=".5"/><path d="M62 62q4 6 0 10" fill="none" stroke="#fff" opacity=".4" stroke-width="2"/>',
 pencil:'<g transform="rotate(38 50 50)"><rect x="43" y="2" width="14" height="76" rx="3" fill="'+c+'"/><rect x="43" y="2" width="14" height="8" rx="3" fill="#b98a3e"/><rect x="43" y="14" width="3" height="60" fill="#fff" opacity=".25"/><polygon points="43,78 57,78 50,95" fill="#e6c9a8"/><polygon points="47,89 53,89 50,95" fill="#2e1722"/></g>',
 brushes:[[-24,"#c9a24f","#2e1722",7,15],[-8,"#c9a24f","#8a5a44",9,19],[8,"#c9a24f","#e0899b",6,17],[24,"#c9a24f","#2e1722",8,13]].map(function(b){return'<g transform="rotate('+b[0]+' 50 96)"><rect x="47.5" y="38" width="5" height="58" rx="2.5" fill="'+b[1]+'"/><rect x="46" y="30" width="8" height="12" rx="2" fill="#d9d2d6"/><ellipse cx="50" cy="'+(30-b[4]/2)+'" rx="'+b[3]+'" ry="'+b[4]+'" fill="'+b[2]+'"/></g>'}).join("")};
 return'<svg viewBox="0 0 100 100" role="img" aria-hidden="true">'+s[t]+'</svg>'}
function bgOf(c){return"linear-gradient(145deg,"+c+"22,"+c+"44)"}
function sale(p){return p.bf?Math.round(p.p*.75/100)*100:p.p}
function grid(){
 var cats=["Todo","Labios","Rostro","Ojos","Brochas"];
 $("#chips").innerHTML=cats.map(function(c){return'<button class="chip'+(c===cat?" on":"")+'" data-c="'+c+'">'+c+'</button>'}).join("");
 $("#grid").innerHTML=P.filter(function(p){return cat==="Todo"||p.c===cat}).map(function(p){
  var s=sale(p);
  return'<article class="card"><div class="pic" data-v="'+p.id+'" style="background:'+bgOf(p.col)+'">'+(p.bf?'<span class="tag">Black Friday -25%</span>':'')+(ph[p.id]?'<img src="'+ph[p.id]+'" alt="'+p.n+'">':art(p.t,p.col))+'</div><div class="info"><h3>'+p.n+'</h3><p>'+p.d+'</p><div class="price"><span>'+money(s)+'</span>'+(p.bf?'<s>'+money(p.p)+'</s>':'')+'</div><button class="more" data-v="'+p.id+'">Ver detalles</button><button class="add" '+(TONES[p.id]?'data-v="'+p.id+'">Elegir tono':'data-id="'+p.id+'">Agregar al carrito')+'</button></div></article>'}).join("")}
function render(){
 var ids=Object.keys(cart),n=0,t=0;
 ids.forEach(function(i){n+=cart[i];t+=cart[i]*sale(P[i.split(":")[0]-1])});
 $("#cnt").textContent=n;$("#total").textContent=money(t);
 $("#items").innerHTML=ids.length?ids.map(function(i){var k=i.split(":"),p=P[k[0]-1],tn=k[1]!==undefined?TONES[k[0]][k[1]]:null;
  return'<div class="row"><div class="th" style="background:'+bgOf(p.col)+';display:grid;place-items:center">'+(ph[k[0]]?'<img src="'+ph[k[0]]+'" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:10px">':art(p.t,p.col).replace("<svg",'<svg width="34" height="34"'))+'</div><div class="n">'+p.n+(tn?' - '+tn[1]:'')+'<small>'+money(sale(p))+'</small></div><div class="qty"><button data-m="'+i+'" aria-label="Quitar uno">-</button><span>'+cart[i]+'</span><button data-p="'+i+'" aria-label="Agregar uno">+</button></div></div>'}).join(""):'<div class="empty">Tu carrito está vacío. Agrega un producto para empezar.</div>';
 var pay=$("#pay");
 if(ids.length){
  var msg="Hola Gaby_makeup, quiero hacer este pedido:\n"+ids.map(function(i){var k=i.split(":"),p=P[k[0]-1];return"- "+cart[i]+" x "+p.n+(k[1]!==undefined?" - tono "+TONES[k[0]][k[1]][1]:"")+" ("+money(sale(p))+")"}).join("\n")+"\nTotal: "+money(t);
  pay.href="https://wa.me/"+PHONE+"?text="+encodeURIComponent(msg);pay.setAttribute("aria-disabled","false")}
 else{pay.href="#";pay.setAttribute("aria-disabled","true")}}
function add(i,d){cart[i]=(cart[i]||0)+d;if(cart[i]<=0)delete cart[i];render()}
document.addEventListener("click",function(e){
 var a=e.target.closest("[data-id],[data-c],[data-p],[data-m],[data-v],[data-close],[data-buy],[data-tn]");
 if(a){if(a.dataset.id){add(a.dataset.id,1);closeP();document.body.classList.add("open")}
  else if(a.dataset.buy){buy(a.dataset.buy)}
  else if(a.dataset.tn!==undefined){pick(a.dataset.tn)}
  else if(a.dataset.v){openP(a.dataset.v)}
  else if(a.dataset.close!==undefined){closeP()}
  else if(a.dataset.c){cat=a.dataset.c;grid()}
  else if(a.dataset.p)add(a.dataset.p,1);else add(a.dataset.m,-1)}});
function openP(i){cur=i;sel=null;showP();$("#pm").classList.add("on")}
function pick(k){sel=+k;showP()}
function buy(i){if(TONES[i]&&sel===null){$("#tmsg").textContent="Elige un tono para continuar.";return}
 add(TONES[i]?i+":"+sel:i,1);closeP();document.body.classList.add("open")}
function showP(){var i=cur,p=P[i-1],s=sale(p),T=TONES[i];
 var tones=T?'<p><b>Elige tu tono ('+T.length+' disponibles):</b></p><div class="tones" role="group" aria-label="Tonos">'+T.map(function(t,k){return'<button class="tn'+(sel===k?' on':'')+'" data-tn="'+k+'" aria-pressed="'+(sel===k)+'"><i style="background:'+t[0]+'"></i>'+t[1]+'</button>'}).join("")+'</div><p id="tmsg" aria-live="polite" style="min-height:24px;color:var(--accent);font-weight:600">'+(sel!==null?'Tono elegido: '+T[sel][1]:'')+'</p>':'';
 $("#pmc").innerHTML='<div class="pmg"><div class="pic" style="background:'+bgOf(p.col)+'">'+(p.bf?'<span class="tag">Black Friday -25%</span>':'')+(ph[p.id]?'<img src="'+ph[p.id]+'" alt="'+p.n+'">':art(p.t,p.col))+'</div><div><small style="color:var(--muted)">'+p.c+'</small><h2 id="pmt">'+p.n+'</h2><div class="price"><span>'+money(s)+'</span>'+(p.bf?'<s>'+money(p.p)+'</s>':'')+'</div><p>'+LONG[i]+'</p>'+tones+'<button class="add" style="width:100%" data-buy="'+p.id+'">Agregar al carrito</button></div></div>'}
function closeP(){$("#pm").classList.remove("on")}
$("#pm").addEventListener("click",function(e){if(e.target===this)closeP()});
$("#open").onclick=function(){document.body.classList.add("open")};
function shut(){document.body.classList.remove("open")}
$("#close").onclick=shut;$("#veil").onclick=shut;
document.addEventListener("keydown",function(e){if(e.key==="Escape"){shut();closeP()}});
$("#sws").innerHTML=SHADES.map(function(s,i){return'<button class="sw" style="background:'+s[0]+';height:'+(55+((i*37)%40))+'%" data-n="'+s[1]+'" aria-label="'+s[1]+'"><i>'+s[1]+'</i></button>'}).join("");
$("#sws").addEventListener("click",function(e){var b=e.target.closest(".sw");if(!b)return;
 document.querySelectorAll(".sw").forEach(function(x){x.classList.remove("on")});b.classList.add("on");
 $("#shade").textContent="Tono "+b.dataset.n+": disponible en labial mate."});
var END=new Date("2026-11-27T00:00:00-05:00");
function tick(){var d=END-new Date(),el=$("#count");
 if(d<=0){el.innerHTML="<div><b>¡Ya!</b><small>Black Friday</small></div>";return}
 var v=[Math.floor(d/864e5),Math.floor(d/36e5)%24,Math.floor(d/6e4)%60,Math.floor(d/1e3)%60],l=["días","horas","min","seg"];
 el.innerHTML=v.map(function(x,i){return"<div><b>"+String(x).padStart(2,"0")+"</b><small>"+l[i]+"</small></div>"}).join("")}
tick();setInterval(tick,1000);
$("#wabf").href="https://wa.me/"+PHONE+"?text="+encodeURIComponent("Hola Gaby_makeup, quiero el acceso anticipado a Black Friday.");
$("#wa").href="https://wa.me/"+PHONE+"?text="+encodeURIComponent("Hola Gaby_makeup, quiero asesoría para elegir mi tono.");
grid();render();
