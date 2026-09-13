/* ==========================================================================
   CONTENIDO DE LA LANDING
   Este es el único archivo que necesitas tocar para cambiar textos, datos
   de contacto, servicios o equipo. Los componentes solo pintan esto.
   Los campos marcados con TODO hay que rellenarlos antes de publicar.
   ========================================================================== */

export const site = {
  nombre: "Solotu.IA",
  claim: "Agencia de Inteligencia Artificial",
  // Se usa en <title> y en la meta description (SEO). Máx ~155 caracteres.
  descripcion:
    "Agencia de Inteligencia Artificial que desarrolla soluciones empresariales personalizadas para PyMEs en México. Diagnóstico, piloto en semanas y capacitación.",
  // TODO: dominio definitivo. Se usa para canonical y Open Graph.
  url: "https://solotu.ia",
  email: "hola@solotu.ia", // TODO: confirmar correo con dominio propio
  telefono: "", // TODO: opcional, ej. "+52 222 000 0000"
  whatsapp: "", // TODO: opcional, solo dígitos, ej. "522220000000"
  linkedin: "", // TODO: URL de la página de empresa
  zonas: "Puebla y CDMX presencial · resto de México en remoto",
};

/* Enlace de agenda (Cal.com, Calendly, Google Calendar Appointments...).
   Si lo dejas vacío, todos los botones llevan al formulario de la sección
   "Agenda". En cuanto pegues aquí la URL, los botones abren tu calendario. */
export const agenda = {
  url: "", // TODO: ej. "https://cal.com/solotu-ia/diagnostico"
  cta: "Agenda tu diagnóstico",
};

/* Endpoint del formulario (Formspree, Web3Forms, Resend + API route...).
   Vacío = el formulario avisa que falta configurarlo en vez de perder datos. */
export const formulario = {
  endpoint: "", // TODO: ej. "https://formspree.io/f/xxxxxxx"
};

export const nav = [
  { texto: "Producto", href: "#producto" },
  { texto: "Servicios", href: "#servicios" },
  { texto: "Para quién", href: "#para-quien" },
  { texto: "Cómo trabajamos", href: "#proceso" },
] as const;

export const hero = {
  eyebrow: "Agencia de Inteligencia Artificial",
  titulo: "IA que resuelve la operación de tu empresa,",
  tituloAcento: "no una presentación bonita.",
  bajada:
    "Desarrollamos soluciones de Inteligencia Artificial personalizadas para PyMEs mexicanas. Empezamos con un diagnóstico, seguimos con un piloto en semanas y te dejamos a ti al mando.",
  datos: [
    { valor: "90 min", etiqueta: "Diagnóstico inicial" },
    { valor: "2–4 sem", etiqueta: "Primer piloto funcionando" },
    { valor: "100%", etiqueta: "A la medida de tu operación" },
  ],
} as const;

export const diferenciadores = [
  {
    titulo: "Lo hemos hecho en nuestra propia operación",
    icono: "mecanismo" as const,
    texto:
      "No llegamos a teorizar. Las soluciones que proponemos las construimos y las usamos primero en nuestras propias empresas.",
  },
  {
    titulo: "Elegimos la herramienta según el caso",
    icono: "ajustes" as const,
    texto:
      "No te vendemos una plataforma. Evaluamos costo y capacidad antes de cada proyecto y usamos lo que resuelva tu problema.",
  },
  {
    titulo: "Te capacitamos para que seas dueño de tu IA",
    icono: "llave" as const,
    texto:
      "Al terminar, tu equipo sabe operar y mantener lo que construimos. No te dejamos dependiendo de nosotros.",
  },
] as const;

export const servicios = [
  {
    nombre: "Diagnóstico IA",
    resumen:
      "Sesión de 90 minutos y un reporte con tres oportunidades priorizadas y un piloto propuesto con alcance.",
    duracion: "Entrega en 1 semana",
    semanas: [1, 1],
    destacado: true,
  },
  {
    nombre: "Piloto / Quick win",
    resumen:
      "Una automatización, dashboard o agente acotado que ataca tu dolor número uno. Resultado medible, no una demo.",
    duracion: "2 a 4 semanas",
    semanas: [2, 4],
    destacado: false,
  },
  {
    nombre: "Solución completa",
    resumen:
      "Cotizador, agente de atención, sistema de datos con dashboard o integración entre tus herramientas actuales.",
    duracion: "6 a 12 semanas",
    semanas: [6, 12],
    destacado: false,
  },
  {
    nombre: "Taller de IA práctica",
    resumen:
      "Cuatro horas, presencial o en línea, hasta 15 personas, trabajando con casos reales de tu empresa.",
    duracion: "Fecha fija",
    destacado: false,
  },
  {
    nombre: "Seguimiento mensual",
    resumen:
      "Soporte, mejoras, monitoreo de lo que ya está en producción y horas de consultoría cuando las necesites.",
    duracion: "Mensual",
    destacado: false,
  },
];

export const paraQuien = [
  {
    titulo: "PyME con operación repetitiva",
    perfil: "10 a 100 empleados · manufactura ligera, comercio y servicios profesionales",
    senales: [
      "Cotizar o atender clientes es lento y depende de una sola persona",
      "Los datos viven en Excel y en WhatsApp",
      "El dueño no ve los números a tiempo para decidir",
      "Ya intentaron usar IA y no funcionó",
    ],
  },
  {
    titulo: "Equipos que quieren aprender a usar IA",
    perfil: "Dueños y equipos que ya usan herramientas de IA sin método",
    senales: [
      "Usan ChatGPT a ciegas, sin criterio ni proceso",
      "Hay miedo o desconocimiento sobre qué se puede automatizar",
      "Quieren que el equipo aplique IA en su trabajo real, no en teoría",
      "Necesitan un método repetible, no un curso genérico",
    ],
  },
] as const;

export const proceso = [
  {
    titulo: "Llamada de 15 minutos",
    texto: "Filtro rápido y honesto para saber si de verdad podemos ayudarte. Si no, te lo decimos.",
  },
  {
    titulo: "Diagnóstico",
    texto: "Sesión de 90 minutos y reporte con tres oportunidades priorizadas por impacto.",
  },
  {
    titulo: "Propuesta",
    texto: "Piloto con alcance, tiempos y precio cerrado, en la misma semana del diagnóstico.",
  },
  {
    titulo: "Piloto",
    texto: "De dos a cuatro semanas para poner en marcha algo que funcione y se pueda medir.",
  },
  {
    titulo: "Solución y capacitación",
    texto: "Escalamos lo que funcionó y entrenamos a tu equipo para que lo opere sin nosotros.",
  },
  {
    titulo: "Seguimiento",
    texto: "Soporte, monitoreo y mejoras continuas sobre lo que ya está en producción.",
  },
] as const;

export const proposito = {
  mision:
    "Ayudar a nuestros clientes con soluciones personalizadas de alto valor que optimicen la operación y los procesos de sus empresas.",
  vision:
    "Ser una empresa de tecnología e innovación líder en soluciones personalizadas B2B desarrolladas con IA.",
  // Lo que NO hacemos. Es un diferenciador real, no relleno.
  compromisos: [
    "No elevamos la dificultad de operación de nuestros clientes.",
    "No entregamos nada que tu equipo no pueda mantener.",
  ],
  valores: [
    "Innovación",
    "Confidencialidad",
    "Honestidad",
    "Respeto",
    "Responsabilidad",
    "Compromiso",
  ],
} as const;

/* Disciplinas que cubre el equipo. Deliberadamente SIN nombres ni puestos:
   al cliente le importa qué sabemos hacer, no cómo nos organizamos.
   Si algún día queréis bios con foto, se añade `nombre` y `foto` aquí. */
export const capacidades = [
  {
    titulo: "Operación y procesos",
    icono: "flujo" as const,
    texto:
      "Mapeamos cómo trabaja tu empresa hoy antes de automatizar nada. Sin esto, la IA solo acelera el desorden.",
  },
  {
    titulo: "Tecnología y datos",
    icono: "capas" as const,
    texto:
      "Construcción, integración con tus sistemas actuales y seguridad de la información de tu empresa.",
  },
  {
    titulo: "Modelo de negocio",
    icono: "barras" as const,
    texto:
      "Calculamos el retorno antes de empezar. Si un proceso no justifica la inversión, te lo decimos.",
  },
  {
    titulo: "Capacitación",
    icono: "libro" as const,
    texto:
      "Formamos a tu equipo para que opere y mantenga lo que construimos, sin depender de nosotros.",
  },
];

/* Demostraciones animadas de la sección "Producto".
   `tipo` decide qué mockup pinta el componente Producto.astro:
   "cotizador" | "agente" | "dashboard" */
export const producto = {
  titulo: "Esto es lo que te entregamos",
  bajada:
    "No son diapositivas. Son las tres cosas que más nos piden las PyMEs mexicanas, funcionando dentro de su operación.",
  demos: [
    {
      tipo: "cotizador" as const,
      etiqueta: "Cotizador automático",
      titulo: "De dos días a dos minutos",
      texto:
        "Llega la solicitud, el sistema calcula con tus precios y tus reglas, y devuelve la cotización lista para enviar. Tu vendedor revisa y aprueba.",
      puntos: ["Usa tus listas de precios reales", "Aprende de tus cotizaciones anteriores", "Se integra con tu correo o WhatsApp"],
    },
    {
      tipo: "agente" as const,
      etiqueta: "Agente de atención",
      titulo: "Responde a la primera, a cualquier hora",
      texto:
        "Atiende las preguntas repetidas de tus clientes con la información de tu empresa, y pasa a una persona cuando la conversación lo amerita.",
      puntos: ["Entrenado con tus documentos", "Escala a un humano cuando toca", "Deja registro de cada conversación"],
    },
    {
      tipo: "dashboard" as const,
      etiqueta: "Datos y dashboard",
      titulo: "Los números, sin pedirlos",
      texto:
        "Reunimos lo que hoy vive disperso en Excel y WhatsApp en un tablero que se actualiza solo. El dueño abre y ve.",
      puntos: ["Se alimenta de tus sistemas actuales", "Se actualiza sin intervención", "Alertas cuando algo se sale de rango"],
    },
  ],
};

export const agendaSeccion = {
  titulo: "Agenda tu diagnóstico",
  bajada:
    "Una sesión de 90 minutos para entender tu operación y salir con tres oportunidades priorizadas y un piloto propuesto. Antes hacemos una llamada corta de 15 minutos para confirmar que tiene sentido.",
  incluye: [
    "Revisión de tu operación actual y sus cuellos de botella",
    "Tres oportunidades de IA priorizadas por impacto",
    "Un piloto propuesto con alcance y tiempos",
    "Reporte escrito de dos páginas",
  ],
  tamanos: ["1 a 9 empleados", "10 a 50 empleados", "51 a 100 empleados", "Más de 100 empleados"],
} as const;
