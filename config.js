// ================================================================
//  CONFIG.JS — Editá acá para personalizar el sitio
// ================================================================

const CONFIG = {
  nombre:   "Diego",
  empresa:  "Zinguerías y Techos ZD",
  telefono: "5491141574030",     // sin + ni espacios, formato internacional
  email: "zingueriasytechoszd@gmail.com",
  ciudad:   "Quilmes, Buenos Aires",
  slogan:   "Instalación, reparación y mantenimiento de canaletas, zinguerías y techos.",

  colores: {
    primario: "#7a5c2e",         // marrón dorado
    acento:   "#c0392b",         // rojo
    fondo:    "#1a1a1a",
  },
};


// ================================================================
//  SERVICIOS — Podés agregar, quitar o cambiar el orden
// ================================================================
const SERVICIOS = [
  { icono: "🏠", titulo: "Techos en General",    texto: "Instalación y reparación de techos de chapa, tejas, membrana y más." },
  { icono: "🔩", titulo: "Zinguerías",            texto: "Canalones, babetas, limahoyas y todo tipo de piezas metálicas." },
  { icono: "💧", titulo: "Canaletas",             texto: "Instalación y limpieza de canaletas y bajadas de agua pluvial." },
  { icono: "🛡️", titulo: "Impermeabilización",   texto: "Aplicación de membranas y selladores para evitar filtraciones." },
  { icono: "🔧", titulo: "Mantenimiento",         texto: "Revisión periódica y mantenimiento preventivo de techos." },
  { icono: "📐", titulo: "Presupuesto Gratis",    texto: "Visita sin cargo para evaluar el trabajo y darte el mejor precio." },
];


// ================================================================
//  GALERÍA ANTES / DESPUÉS
//  Poné tus fotos en la carpeta /fotos y actualizá los nombres.
//  Podés agregar o quitar objetos de este array.
// ================================================================
const GALERIA = [
  {
    titulo:  "Canaleta nueva instalada",
    antes:   "fotos/trabajo1_antes.png",
    despues: "fotos/trabajo1_despues.png",
  },
  {
    titulo:  "Techo reparado",
    antes:   "fotos/trabajo2_antes.png",
    despues: "fotos/trabajo2_despues.png",
  },
  {
    titulo:  "Zinguería completa",
    antes:   "fotos/trabajo3_antes.png",
    despues: "fotos/trabajo3_despues.png",
  },
];
