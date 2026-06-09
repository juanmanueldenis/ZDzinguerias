// ================================================================
//  MAIN.JS — Lógica del sitio (no necesitás tocar esto)
// ================================================================

var ARGENTINA = {
  "CABA": ["Agronomia","Almagro","Balvanera","Barracas","Belgrano","Boedo","Caballito","Chacarita","Coghlan","Colegiales","Constitucion","Flores","Floresta","La Boca","La Paternal","Liniers","Mataderos","Monte Castro","Montserrat","Nueva Pompeya","Nunez","Palermo","Parque Avellaneda","Parque Chacabuco","Parque Patricios","Puerto Madero","Recoleta","Retiro","Saavedra","San Cristobal","San Nicolas","San Telmo","Villa Crespo","Villa del Parque","Villa Devoto","Villa Lugano","Villa Luro","Villa Ortuzar","Villa Pueyrredon","Villa Soldati","Villa Urquiza"],
  "Buenos Aires": ["Almirante Brown","Avellaneda","Azul","Bahia Blanca","Balcarce","Baradero","Berazategui","Berisso","Bolivar","Bragado","Campana","Canuelas","Chacabuco","Chascomus","Chivilcoy","Colon","Ensenada","Escobar","Esteban Echeverria","Exaltacion de la Cruz","Ezeiza","Florencio Varela","General Rodriguez","General San Martin","Hurlingham","Ituzaingo","Jose C. Paz","Junin","La Costa","La Matanza","La Plata","Lanus","Lobos","Lomas de Zamora","Lujan","Magdalena","Malvinas Argentinas","Mar del Plata","Marcos Paz","Mercedes","Merlo","Monte","Moreno","Moron","Navarro","Necochea","Olavarria","Pergamino","Pilar","Pinamar","Presidente Peron","Quilmes","Ramallo","Rojas","Saladillo","Salto","San Antonio de Areco","San Fernando","San Isidro","San Miguel","San Nicolas","San Pedro","San Vicente","Suipacha","Tandil","Tigre","Trenque Lauquen","Tres Arroyos","Tres de Febrero","Vicente Lopez","Villa Gesell","Zarate","25 de Mayo","9 de Julio"],
  "Catamarca": ["San Fernando del Valle de Catamarca","Andalgala","Belen","Capayan","Fray Mamerto Esquiu","La Paz","Santa Maria","Tinogasta","Valle Viejo"],
  "Chaco": ["Resistencia","Barranqueras","Fontana","Gral. San Martin","Saenz Pena","Villa Angela","Charata","Las Brenas","Quitilipi","Juan Jose Castelli"],
  "Chubut": ["Rawson","Comodoro Rivadavia","Puerto Madryn","Trelew","Esquel","Rada Tilly","Sarmiento","Rio Mayo"],
  "Cordoba": ["Cordoba","Alta Gracia","Bell Ville","Cosquin","Cruz del Eje","Dean Funes","Jesus Maria","La Calera","La Falda","Marcos Juarez","Rio Ceballos","Rio Cuarto","Rio Tercero","San Francisco","Villa Carlos Paz","Villa Dolores","Villa Maria"],
  "Corrientes": ["Corrientes","Goya","Paso de los Libres","Mercedes","Curuzu Cuatia","Santo Tome","Bella Vista","Saladas","Ituzaingo"],
  "Entre Rios": ["Parana","Concordia","Gualeguaychu","Gualeguay","Concepcion del Uruguay","Colon","Villaguay","La Paz","Federacion","San Salvador"],
  "Formosa": ["Formosa","Clorinda","Pirane","El Colorado","Las Lomitas"],
  "Jujuy": ["San Salvador de Jujuy","Palpala","San Pedro de Jujuy","Libertador Gral. San Martin","Humahuaca","La Quiaca","Tilcara","Perico"],
  "La Pampa": ["Santa Rosa","General Pico","Toay","Eduardo Castex","Realico","General Acha"],
  "La Rioja": ["La Rioja","Chilecito","Arauco","Chamical","Aimogasta"],
  "Mendoza": ["Mendoza","Godoy Cruz","Las Heras","Guaymallen","Maipu","Lujan de Cuyo","San Martin","General Alvear","Malargue","San Rafael","Tunuyan","Tupungato"],
  "Misiones": ["Posadas","Obera","Eldorado","Puerto Iguazu","Apostoles","Leandro N. Alem","Montecarlo","San Vicente","Jardin America"],
  "Neuquen": ["Neuquen","Cutral Co","Plaza Huincul","Zapala","San Martin de los Andes","Villa La Angostura","Centenario","Plottier","Junin de los Andes"],
  "Rio Negro": ["Viedma","Bariloche","General Roca","Cipolletti","Villa Regina","Allen","Catriel","Rio Colorado","El Bolson"],
  "Salta": ["Salta","San Ramon de la Nueva Oran","Tartagal","General Guemes","Metan","Rosario de la Frontera","Cafayate"],
  "San Juan": ["San Juan","Chimbas","Rawson","Rivadavia","Santa Lucia","Caucete","Pocito","Jachal","9 de Julio"],
  "San Luis": ["San Luis","Villa Mercedes","Merlo","Justo Daract","Quines","La Toma","Concarán"],
  "Santa Cruz": ["Rio Gallegos","Caleta Olivia","Pico Truncado","Las Heras","El Calafate","El Chalten","Perito Moreno","Los Antiguos","Puerto San Julian"],
  "Santa Fe": ["Santa Fe","Rosario","Venado Tuerto","Reconquista","Rafaela","Santo Tome","Villa Constitucion","San Lorenzo","Esperanza","Casilda","Canada de Gomez","Firmat","Rufino","San Cristobal","Vera"],
  "Santiago del Estero": ["Santiago del Estero","La Banda","Termas de Rio Hondo","Anatuya","Frias","Loreto","Monte Quemado","Quimili"],
  "Tierra del Fuego": ["Ushuaia","Rio Grande","Tolhuin"],
  "Tucuman": ["San Miguel de Tucuman","Tafi Viejo","Banda del Rio Sali","Concepcion","Yerba Buena","Alderetes","Aguilares","Monteros","Lules"]
};

(function () {
  // ── Aplicar colores desde config ──────────────────────────────
  const r = document.documentElement.style;
  r.setProperty('--primary', CONFIG.colores.primario);
  r.setProperty('--accent',  CONFIG.colores.acento);
  r.setProperty('--bg',      CONFIG.colores.fondo);

  // ── Links de WhatsApp ─────────────────────────────────────────
  const wpBase   = 'https://wa.me/' + CONFIG.telefono;
  const wpSaludo = wpBase + '?text=' + encodeURIComponent('Hola ' + CONFIG.nombre + ', quiero consultar sobre un trabajo');

  document.getElementById('hero-wp').href  = wpSaludo;
  document.getElementById('float-wp').href = wpSaludo;
  document.getElementById('hero-sub').textContent = CONFIG.slogan;

  // ── Footer ────────────────────────────────────────────────────
  document.getElementById('footer-empresa').textContent = CONFIG.empresa;
  document.getElementById('footer-ciudad').textContent  = CONFIG.ciudad;
  document.getElementById('footer-tel').textContent     = '+' + CONFIG.telefono;
  document.getElementById('footer-tel').href            = 'tel:+' + CONFIG.telefono;
  document.getElementById('footer-email').textContent   = CONFIG.email;
  document.getElementById('footer-email').href          = 'mailto:' + CONFIG.email;
  document.getElementById('footer-year').textContent    = new Date().getFullYear();

  // ── Selectores Provincia / Localidad ─────────────────────────
  var selProv = document.getElementById('f-provincia');
  var selLoc  = document.getElementById('f-localidad');

  Object.keys(ARGENTINA).sort().forEach(function (prov) {
    var opt = document.createElement('option');
    opt.value = prov;
    opt.textContent = prov;
    selProv.appendChild(opt);
  });

  selProv.addEventListener('change', function () {
    var ciudades = ARGENTINA[this.value] || [];
    selLoc.innerHTML = '<option value="" disabled selected>Seleccioná localidad...</option>';
    ciudades.forEach(function (ciudad) {
      var opt = document.createElement('option');
      opt.value = ciudad;
      opt.textContent = ciudad;
      selLoc.appendChild(opt);
    });
    selLoc.disabled = false;
    selLoc.value = '';
  });

  // ── Renderizar servicios ──────────────────────────────────────
  const servGrid = document.getElementById('services-grid');
  SERVICIOS.forEach(function (s) {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.innerHTML =
      '<span class="service-icon">' + s.icono + '</span>' +
      '<h3>' + s.titulo + '</h3>' +
      '<p>' + s.texto + '</p>';
    servGrid.appendChild(card);
  });

  // ── Renderizar galería antes/después ─────────────────────────
  const galleryGrid = document.getElementById('gallery-grid');
  GALERIA.forEach(function (item) {
    const wrap = document.createElement('div');
    wrap.className = 'gallery-item';
    wrap.innerHTML =
      '<h3>' + item.titulo + '</h3>' +
      '<div class="ad-slider">' +
        '<div class="ad-after" style="background-image:url(\'' + item.despues + '\')">' +
          '<div class="ad-placeholder"><h5>DESPUÉS</h5></div>' +
        '</div>' +
        '<div class="ad-before" style="background-image:url(\'' + item.antes + '\')">' +
          '<div class="ad-placeholder"><h5>ANTES</h5></div>' +
        '</div>' +
        '<span class="ad-label ad-label-before">ANTES</span>' +
        '<span class="ad-label ad-label-after">DESPUÉS</span>' +
        '<div class="ad-handle"><div class="ad-handle-btn">⟨⟩</div></div>' +
      '</div>';
    galleryGrid.appendChild(wrap);
    initSlider(wrap.querySelector('.ad-slider'));
  });

  // ── Lógica del slider antes/después ──────────────────────────
  function initSlider(slider) {
    let dragging = false;

    function setPos(clientX) {
      const rect = slider.getBoundingClientRect();
      let pct = (clientX - rect.left) / rect.width;
      pct = Math.max(0.02, Math.min(0.98, pct));
      const right = ((1 - pct) * 100).toFixed(2) + '%';
      const left  = (pct * 100).toFixed(2) + '%';
      slider.querySelector('.ad-before').style.clipPath = 'inset(0 ' + right + ' 0 0)';
      slider.querySelector('.ad-handle').style.left     = left;
    }

    slider.addEventListener('mousedown',  function (e) { dragging = true; setPos(e.clientX); });
    window.addEventListener('mousemove',  function (e) { if (dragging) setPos(e.clientX); });
    window.addEventListener('mouseup',    function ()  { dragging = false; });
    slider.addEventListener('touchstart', function (e) { dragging = true; setPos(e.touches[0].clientX); }, { passive: true });
    window.addEventListener('touchmove',  function (e) { if (dragging) setPos(e.touches[0].clientX); },   { passive: true });
    window.addEventListener('touchend',   function ()  { dragging = false; });
  }

  // ── Formulario → WhatsApp ─────────────────────────────────────
  document.getElementById('presupuesto-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const get = function (id) { return document.getElementById(id).value.trim(); };

    const nombre    = get('f-nombre');
    const celular   = get('f-celular');
    const provincia = get('f-provincia');
    const localidad = get('f-localidad');
    const servicio  = get('f-servicio');
    const descripcion = get('f-desc');
    const urgencia  = get('f-urgencia');
    const horario   = get('f-horario');

    var b = String.fromCharCode(0x2022); // bullet U+2022

    const lineas = [
      '*[ NUEVA SOLICITUD DE PRESUPUESTO ]*',
      '- - - - - - - - - - - - - - - - - -',
      b + ' *Nombre:* '    + nombre,
      b + ' *Celular:* '   + celular,
      b + ' *Provincia:* ' + provincia,
      b + ' *Localidad:* ' + localidad,
      b + ' *Servicio:* '  + servicio,
      descripcion ? b + ' *Descripcion:* ' + descripcion : null,
      b + ' *Urgencia:* '  + urgencia,
      b + ' *Horario:* '   + horario,
      '- - - - - - - - - - - - - - - - - -',
      '_Sitio web ZD_',
    ].filter(Boolean).join('\n');

    window.open(wpBase + '?text=' + encodeURIComponent(lineas), '_blank');
  });

})();
