// ================================================================
//  MAIN.JS — Lógica del sitio (no necesitás tocar esto)
// ================================================================

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

    const nombre      = get('f-nombre');
    const celular     = get('f-celular');
    const barrio      = get('f-barrio');
    const servicio    = get('f-servicio');
    const descripcion = get('f-desc');
    const urgencia    = get('f-urgencia');
    const horario     = get('f-horario');

    var b = String.fromCharCode(0x2022); // bullet: U+2022 (BMP, no surrogate needed)

    const lineas = [
      '*[ NUEVA SOLICITUD DE PRESUPUESTO ]*',
      '- - - - - - - - - - - - - - - - - -',
      b + ' *Nombre:* '    + nombre,
      b + ' *Celular:* '   + celular,
      b + ' *Ubicacion:* ' + barrio,
      b + ' *Servicio:* '  + servicio,
      descripcion ? b + ' *Descripcion:* ' + descripcion : null,
      b + ' *Urgencia:* '            + urgencia,
      b + ' *Horario:* '             + horario,
      '- - - - - - - - - - - - - - - - - -',
    ].filter(Boolean).join('\n');

    window.open(wpBase + '?text=' + encodeURIComponent(lineas), '_blank');
  });

})();
