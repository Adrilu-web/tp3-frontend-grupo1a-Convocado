# Convocado - TP3 Front End

---

## Integrantes

- **Judith Leonardo**
- **Adriana Meyniel**
- **Magalí Pintos**
- **Silvia Podberezski**
- **Elías Zagayny**

---

## Startup Seleccionada

**Convocado**

Convocado es una red social deportiva cuyo objetivo es permitir que los jugadores encuentren equipos y soliciten participar en partidos.

---

## Bloque Asignado

**Grupo 01**

- **Sentencia 1 — Control de cupo al aceptar solicitudes:**
  > *"Si el capitán intenta aceptar una solicitud cuando ya no queda lugar, el sistema informa que el cupo está completo e impide una nueva aceptación."*

- **Sentencia 2 — Derivación a evaluación manual según valoración o distancia:**
  > *"Si el jugador autoriza una solicitud y se cumple al menos una de estas condiciones: la valoración conocida es menor que cuatro, o el equipo está a diez kilómetros o más; el sistema la deriva al capitán para evaluación manual; esa evaluación no reserva un lugar."*

---

## Objetivo del Trabajo

Este proyecto desarrolla una landing page académica e interactiva para **Convocado** que presenta de forma estructurada:

- **Análisis funcional estricto:** identificación de datos necesarios, condiciones lógicas y consecuencias obligatorias de cada sentencia asignada al Grupo 01.
- **Propuestas agénticas:** diseño del comportamiento de un agente capaz de consultar el estado del partido y del jugador en tiempo real, tomar decisiones autónomas e involucrar la intervención humana cuando corresponde.
- **Diagramas de flujo visuales:** representación gráfica en HTML y CSS del recorrido completo (inicio, intervención humana, consulta del agente, decisión, camino SÍ, camino NO, acciones y resultado final).
- **Separación explícita entre reglas de negocio y decisiones de diseño:** distinción visual y documental entre los elementos que surgen obligatoriamente de las sentencias y los aportes agregados por el Grupo 01.

---

## Aportes del Equipo

El desarrollo del proyecto se organizó distinguiendo tres niveles de trabajo:

1. **Análisis y decisiones realizadas por el equipo:** interpretación de las dos sentencias asignadas al Grupo 01, separación entre consecuencias obligatorias y decisiones de diseño del grupo, y definición de los criterios funcionales y visuales solicitados en cada etapa.
2. **Generación de código asistida por IA:** la implementación inicial de los archivos HTML, CSS y JavaScript fue generada mediante **Antigravity** a partir de instrucciones del equipo, por lo que no se atribuye a ningún integrante la autoría directa del código generado inicialmente por la herramienta.
3. **Revisión, validación y correcciones realizadas por el equipo:** verificación iterativa de los documentos, diagramas, uso del logo original, identidad visual, comportamiento responsive y documentación.

*Los aportes individuales se documentarán al finalizar la etapa de iteración grupal, una vez distribuidas y completadas las funcionalidades y revisiones correspondientes.*

### Implementación asistida por IA

**Antigravity** generó la implementación inicial de la maquetación HTML (`index.html`, `diagramas.html`), los estilos CSS (`styles.css`, `diagramas.css`), los diagramas de flujo visuales y parte de la interactividad en JavaScript (`script.js`) a partir de las instrucciones suministradas por el equipo. Todos los resultados generados fueron revisados, validados y modificados iterativamente bajo supervisión del Grupo 01 antes de su aprobación en cada etapa.

---

## Tecnologías Utilizadas

- **HTML5** (estructura semántica y desplegables nativos `<details>` / `<summary>`)
- **CSS3** (Custom Properties, CSS Grid, Flexbox, diseño de diagramas de flujo y Media Queries responsive)
- **JavaScript (Vanilla JS)** (resaltado de navegación activa en scroll y control dinámico de desplegables)
- **Git** (control de versiones)
- **GitHub** (repositorio y documentación del proyecto)

---

## Herramientas de IA Utilizadas

- **Aplicación / entorno:** Antigravity
- **Modelo observado durante el desarrollo:** Gemini 4 Argon (Medium)
- **Modelo en etapas anteriores:** modelo no informado

| Aplicación / Entorno | Modelo | Uso Realizado | Cambios Solicitados |
| :--- | :--- | :--- | :--- |
| **Antigravity** | **Modelo observado durante el desarrollo:** Gemini 4 Argon (Medium) <br><br> **Modelo en etapas anteriores:** modelo no informado | Redacción estructurada del análisis funcional, especificación textual de los diagramas de flujo, elaboración del wireframe textual, generación inicial de código HTML, CSS y JavaScript para los diagramas visuales y la landing page, adaptación responsive y redacción del `README.md`. | Alineación estricta a la consigna eliminando suposiciones adicionales, separación entre consecuencias obligatorias y decisiones del grupo, eliminación de sección duplicada, ajuste del wireframe, sustitución de iconos genéricos por `assets/logo.webp`, aplicación de la paleta del logo oficial, cambio dinámico de botones *"Expandir todo"* / *"Contraer todo"*, adaptación responsive e incorporación de integrantes y trazabilidad de IA. |

---

## Cambios Solicitados a la IA

Durante el desarrollo iterativo del proyecto se solicitaron y verificaron los siguientes ajustes:

1. **Generación de estructura inicial y análisis funcional:** redacción del documento funcional eliminando suposiciones no presentes en las sentencias originales y separando consecuencias obligatorias de las decisiones de diseño del grupo.
2. **Diseño visual y wireframe:** definición de la estructura de navegación sticky, Hero, sección *"Nuestro Enfoque"*, distribución en columnas (`45% / 55%`) para desktop y ubicación de desplegables.
3. **Diagramas de flujo:** construcción de dos diagramas visuales reales en HTML y CSS con nodos diferenciados por origen (verde para elementos obligatorios de la sentencia y amarillo/ámbar para decisiones de diseño del grupo).
4. **Refinamientos de identidad visual:** reemplazo de iconos genéricos por el logo oficial de la startup (`assets/logo.webp`) en Header, Hero y Footer conservando su proporción original, y aplicación de la paleta oficial del logo (`#0f766e`, `#10b981`, `#34d399`, `#fbbf24`, `#ffffff`, `#081120`), además de botones dinámicos *"Expandir todo"* / *"Contraer todo"*.
5. **Mejoras responsive:** adaptación completa para Tablet (`1024px`), Tablet pequeña (`768px`) y Mobile (`480px`), apilando columnas, adaptando el menú y los diagramas sin desbordamiento horizontal.
6. **Creación del README y cierre académico:** incorporación del listado de integrantes del Grupo 01 en el footer de la landing y generación del archivo `README.md` con el registro de aportes, herramientas de IA y trazabilidad de prompts.

---

## Registro de prompts y cambios solicitados

A continuación se documenta cronológicamente la secuencia real de prompts e instrucciones proporcionadas por el equipo durante el desarrollo en **Antigravity**:

### 1. Análisis funcional
- **Prompt inicial de análisis:**
  > *"Analiza la startup "Convocado" y las dos sentencias asignadas al Grupo 01. No generes código todavía. Quiero que crees un documento de análisis que incluya: 1. Descripción breve de la startup. 2. Para cada sentencia: datos necesarios, condición, consecuencia. 3. Una propuesta de solución agéntica para cada sentencia. 4. Qué información consultaría el futuro agente. 5. Qué decisiones tomaría. 6. Cuándo sería necesaria una intervención humana. 7. Una explicación clara para estudiantes de Front End. [...] No quiero HTML, CSS ni JavaScript todavía. Quiero solamente el análisis funcional."*
- **Guardado en el proyecto:** se solicitó guardar el documento en `analisis_funcional_convocado_grupo01.md` dentro de la carpeta del proyecto y mostrar su contenido para revisión.
- **Refinamiento estricto del análisis:**
  > *"El análisis es correcto. Quiero una versión más alineada con la consigna. Reduce las suposiciones adicionales que no aparecen en las sentencias originales. Mantén claramente separadas: consecuencias obligatorias de la sentencia, decisiones agregadas por la propuesta del grupo. Para cada propuesta indica explícitamente qué surge de la sentencia y qué es una decisión de diseño. Actualiza el archivo y conserva el formato Markdown."*

### 2. Especificación y corrección documental de diagramas
- **Prompt de especificación textual:**
  > *"A partir del análisis funcional aprobado, prepara la especificación textual de dos diagramas de flujo, uno para cada sentencia. Todavía no generes HTML, CSS, JavaScript ni la landing completa. Cada especificación debe incluir: inicio; información de entrada; consulta que realiza el futuro agente; decisión; camino SÍ; camino NO; acción; resultado; intervención humana cuando corresponda; aclaración de qué elementos surgen de la sentencia y cuáles son decisiones de diseño del grupo. Para la Sentencia 1, la condición central debe ser: "¿El capitán intenta aceptar una solicitud y no queda lugar?" Para la Sentencia 2, la condición debe conservar exactamente esta lógica: "¿El jugador autorizó la solicitud Y la valoración conocida es menor que 4 O la distancia al equipo es mayor o igual a 10 km?""*
- **Integración y depuración del archivo `.md`:** se solicitó agregar la especificación en la sección 8 de `analisis_funcional_convocado_grupo01.md` y posteriormente eliminar una duplicación detectada de dicha sección 8 conservando una única copia.

### 3. Wireframe
- **Prompt de propuesta de estructura:**
  > *"A partir del análisis funcional y de la especificación de diagramas aprobados, genera una propuesta de estructura para la landing. No programes todavía. Quiero primero: secciones de la landing; orden del contenido; navegación; distribución visual de los diagramas; ubicación del logo de Convocado; ubicación de las sentencias; ubicación de las propuestas; ubicación de los desplegables. La landing será revisada únicamente en desktop. Presenta la estructura como un wireframe textual."*
- **Ajuste del wireframe antes de programar:**
  > *"La estructura propuesta fue aprobada. Antes de generar la landing completa: 1. Elimina la referencia #comparativa-origen de la navegación superior. 2. Agrega una sección breve "Nuestro Enfoque" entre el Hero y la Sentencia 1, explicando en 3 o 4 líneas qué es un flujo agéntico y cómo el grupo propone resolver las dos sentencias. 3. Mantén el resto de la estructura sin cambios. 4. No generes código todavía. Muéstrame únicamente el wireframe actualizado."*

### 4. Diagramas
- **Prompt de generación de diagramas visuales:**
  > *"La especificación textual fue aprobada. Genera ahora los dos diagramas visuales. Requisitos: Un diagrama para cada sentencia. Deben ser diagramas reales, no descripción textual. Utiliza HTML y CSS para representarlos visualmente. Deben ser legibles en desktop. Incluir: inicio, intervención humana, consulta del agente, decisión, camino sí, camino no, acciones, resultado final. Distingue visualmente: elementos obligatorios de la sentencia, decisiones de diseño del grupo. No generes todavía la landing completa. Quiero revisar primero los diagramas visuales."*

### 5. Generación de landing
- **Prompt de construcción de la landing completa:**
  > *"Los diagramas visuales fueron aprobados. Genera ahora la landing completa para Convocado. Requisitos: HTML, CSS y JavaScript solamente. No usar React. Desktop first. Diseño moderno y profesional. Header sticky. Hero con logo y descripción de Convocado. Sección Nuestro Enfoque. Bloque completo de Sentencia 1. Bloque completo de Sentencia 2. Integrar y reutilizar los diagramas visuales ya desarrollados. Utilizar details/summary para los desplegables. Footer con información del Grupo 01. Diferenciar visualmente: elementos obligatorios de la sentencia, decisiones de diseño del grupo. Genera los archivos finales dentro del proyecto. Verifica que la landing pueda abrirse localmente desde index.html."*

### 6. Incorporación del logo
- **Prompt de corrección de marca con el archivo original:**
  > *"La landing no está mostrando el logo original de la startup Convocado. Actualmente utilizaste un icono SVG genérico de una pelota de fútbol. La consigna exige conservar el logo original de la startup completo y legible. El archivo original del logo está guardado en: assets/logo.webp [...] Muestra el logo original en: el header; el hero; el footer. Conserva siempre la proporción original de la imagen. No recortes ni deformes el logo. Añade un texto alternativo descriptivo: "Logo original de la startup Convocado". [...] También corrige la clase inválida o accidental "hero-logo- emblem" y utiliza un nombre de clase claro y consistente para el contenedor del logo."*

### 7. Refinamiento de identidad visual
- **Prompt de alineación cromática y mejora UX:**
  > *"La landing quedó aprobada funcionalmente. Realiza ahora una ronda final de refinamiento visual sin modificar la estructura, el contenido, los diagramas ni la distribución de secciones. OBJETIVO: Alinear la identidad visual de toda la landing con el logo oficial de Convocado. PALETA NUEVA: Verde principal: #0f766e, Verde secundario: #10b981, Verde claro: #34d399, Amarillo acento: #fbbf24, Blanco: #ffffff, Fondo oscuro deportivo: mantener tonos azul oscuro muy oscuros cercanos a #081120. [...] MEJORA UX: Modificar los botones "Expandir / Contraer Desplegables" para que cambien dinámicamente a: "Expandir todo", "Contraer todo" según el estado actual de los desplegables de la sección."*

### 8. Responsive
- **Prompt de adaptación multi-dispositivo y footer de equipo:**
  > *"Realiza una ronda final de mejoras enfocadas en entrega académica. 1. FOOTER: Agregar una sección de integrantes dentro del footer [...] 2. RESPONSIVE DESIGN: Crear una versión responsive completa. Objetivos: Tablet (1024px aprox.), Tablet pequeña (768px aprox.), Mobile (480px aprox.). Adaptar: HEADER, HERO, NUESTRO ENFOQUE, SENTENCIA 1 y SENTENCIA 2, DIAGRAMAS, FOOTER. Evitar: overflow horizontal, elementos cortados, texto fuera de pantalla."*

### 9. README y documentación
- **Creación inicial y refinamiento de trazabilidad en `README.md`:** se solicitó primero generar el `README.md` académico del proyecto y, finalmente, actualizar únicamente `README.md` para no atribuir autoría humana directa del código generado inicialmente por Antigravity, separar los aportes de análisis/validación frente a la implementación asistida por IA, detallar el modelo observado (`Gemini 4 Argon (Medium)`) y el modelo no informado en etapas previas, e incorporar este registro cronológico de prompts y cambios solicitados.

---

## Cómo Ejecutar el Proyecto

El proyecto no requiere instalación de dependencias ni servidores adicionales:

1. Clonar o descargar este repositorio en tu equipo local.
2. Ubicar la carpeta raíz del proyecto (`tp3-frontend-grupo1a`).
3. Abrir el archivo `index.html` directamente haciendo doble clic sobre él en cualquier navegador web moderno (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari), o utilizando la extensión **Live Server** desde Visual Studio Code.

---

## Estructura del Proyecto

```text
tp3-frontend-grupo1a/
├── assets/
│   └── logo.webp                           # Logo original oficial de la startup Convocado
├── analisis_funcional_convocado_grupo01.md # Documento de análisis funcional y especificación textual
├── diagramas.css                           # Estilos de los diagramas de flujo visuales y su adaptación responsive
├── diagramas.html                          # Vista independiente de revisión de los dos diagramas de flujo
├── index.html                              # Landing page principal completa del Grupo 01
├── script.js                               # Lógica de navegación activa en scroll y botones Expandir/Contraer todo
├── styles.css                              # Estilos generales de la landing, identidad visual y media queries
└── README.md                               # Documentación académica y técnica del proyecto
```

