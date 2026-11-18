# Convocado - TP3 Front End

---

## Integrantes

- **Judith Leonardo**
- **Adriana Meyniel**
- **Magalí Pintos**
- **Silvia Podberezski**
- **Elías Zagayny**

---

## Enlaces de Entrega

- **Repositorio en GitHub:** [https://github.com/Adrilu-web/tp3-frontend-grupo1a-Convocado](https://github.com/Adrilu-web/tp3-frontend-grupo1a-Convocado)
- **Landing publicada (Vercel):** [https://tp3-frontend-grupo1a-convocado.vercel.app](https://tp3-frontend-grupo1a-convocado.vercel.app)

> **Comprobación de acceso y funcionamiento:** Ambos enlaces fueron verificados desde una ventana de navegación privada (sin sesión iniciada). El sitio carga correctamente el logo original de Convocado, los dos diagramas de flujo visuales y los desplegables interactivos con clic y teclado en vista desktop.

---

## Startup Seleccionada

- **Startup:** Convocado
- **Categoría:** Deportes y conexión de equipos
- **Objetivo de la startup:** Red para que jugadores encuentren equipos y soliciten participar en partidos.
- **Origen:** Startup creada por estudiantes del IFTS 16. Propuesta del Grupo 01 del IFTS 29.

---

## Bloque Asignado

- **Grupo:** Grupo 01 (IFTS 29)
- **Bloque:** Cupo y revisión
- **Asignación:** S08-B (R3 y R4)

- **Sentencia 1 (R3) — Control de cupo al aceptar solicitudes:**
  > *"Si el capitán intenta aceptar una solicitud cuando ya no queda lugar, el sistema informa que el cupo está completo e impide una nueva aceptación."*

- **Sentencia 2 (R4) — Derivación a evaluación manual según valoración o distancia:**
  > *"Si el jugador autoriza una solicitud y se cumple al menos una de estas condiciones —su valoración conocida es menor que cuatro, o el equipo está a diez kilómetros o más—, el sistema la deriva al capitán para evaluación manual; esa evaluación no reserva un lugar."*

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
| **Cursor** | Cursor Grok 4.6 Medium | Revisión de la landing contra la consigna y corrección de errores conceptuales en los diagramas de la Sentencia 2. | Ajuste de la condición lógica del rombo de decisión y tabla 2B; cambio de etiquetas `lugaresDisponibles` y `Datos: Jugador y Equipo` de `pill-mandatory` a `pill-design`; actualización de datos necesarios y del desplegable 2A. |
| **Antigravity** | Claude Sonnet 4.6 (Thinking) | Rotulado de los casos recorridos y agregado de casos límite en cada flujo; alineación de diagramas.html y del análisis funcional con index.html. | Etiquetas Cumple / No cumple / Caso límite, tres filas nuevas en "Casos recorridos" y corrección de la Sentencia 2 (lugaresDisponibles y "Jugador y Equipo" como decisión de diseño). |

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
  cRealiza una ronda final de mejoras enfocadas en entrega académica. 1. FOOTER: Agregar una sección de integrantes dentro del footer [...] 2. RESPONSIVE DESIGN: Crear una versión responsive completa. Objetivos: Tablet (1024px aprox.), Tablet pequeña (768px aprox.), Mobile (480px aprox.). Adaptar: HEADER, HERO, NUESTRO ENFOQUE, SENTENCIA 1 y SENTENCIA 2, DIAGRAMAS, FOOTER. Evitar: overflow horizontal, elementos cortados, texto fuera de pantalla."*

### 9. README y documentación
- **Creación inicial y refinamiento de trazabilidad en `README.md`:** se solicitó primero generar el `README.md` académico del proyecto y, finalmente, actualizar únicamente `README.md` para no atribuir autoría humana directa del código generado inicialmente por Antigravity, separar los aportes de análisis/validación frente a la implementación asistida por IA, detallar el modelo observado (`Gemini 4 Argon (Medium)`) y el modelo no informado en etapas previas, e incorporar este registro cronológico de prompts y cambios solicitados.

### 10. Corrección de fidelidad con la consigna oficial
- **Prompt enviado:**
  > *"Corrige únicamente la fidelidad del proyecto con la consigna oficial. 1. Reemplaza la Sentencia 2 en todos los archivos donde aparezca por su texto literal: "Si el jugador autoriza una solicitud y se cumple al menos una de estas condiciones —su valoración conocida es menor que cuatro, o el equipo está a diez kilómetros o más—, el sistema la deriva al capitán para evaluación manual; esa evaluación no reserva un lugar." No cambies palabras ni puntuación. 2. Verifica que la Sentencia 1 también coincida literalmente con la consigna. Si ya coincide, no la modifiques. 3. Incorpora de forma clara y sin recargar la landing: Convocado, Categoría: Deportes y conexión de equipos, Bloque: Cupo y revisión, Asignación: S08-B, R3 y R4, Startup creada por estudiantes del IFTS 16., Propuesta del Grupo 01 del IFTS 29. 4. Actualiza README.md con esos mismos datos. No modifiques todavía JavaScript, botones, desplegables, diagramas, casos de prueba, casos límite, aportes ni publicación. Al finalizar, indica qué archivos modificaste y qué cambiaste."*
- **Problema detectado:** redacción no literal de la Sentencia 2 y ausencia de datos de asignación/origen.
- **Corrección solicitada:** reemplazar todas las apariciones de la Sentencia 2 por su redacción literal exacta (sin alterar palabras ni puntuación), verificar la coincidencia literal de la Sentencia 1 e incorporar de manera clara en la landing y en `README.md` los datos oficiales de la startup, categoría, bloque, código de asignación y reconocimiento de origen institucional.
- **Resultado:** sentencias alineadas con la consigna e incorporación de Convocado, categoría (`Deportes y conexión de equipos`), bloque `Cupo y revisión`, `S08-B`, `R3/R4`, origen `IFTS 16` y propuesta `Grupo 01 IFTS 29`.

### 11. Corrección de botones Expandir/Contraer y accesibilidad con teclado
- **Prompt enviado:**
  > *"Corrige únicamente el funcionamiento de Expandir/Contraer. 1. Mantén un único botón general por sección. 2. Si hay algún desplegable cerrado, debe mostrar "Expandir todo" y abrirlos todos. 3. Si todos están abiertos, debe mostrar "Contraer todo" y cerrarlos todos. 4. Si se abre o cierra manualmente un <details>, actualiza el texto del botón según el estado. 5. Mantén <details>/<summary> funcionando con clic y teclado. 6. Agrega foco visible para navegación con teclado. 7. Comprueba el funcionamiento en Sentencia 1 y Sentencia 2. Modifica solo index.html, script.js y styles.css si es necesario. Además, registra este prompt como una nueva iteración en README.md, indicando: problema detectado; corrección solicitada; resultado obtenido."*
- **Problema detectado:** el texto inicial estático de los botones generales en `index.html` decía `"Expandir / Contraer Desplegables"` (con clase `.Quick-controls`), `script.js` manipulaba atributos en lugar de la propiedad booleana nativa `.open` de `HTMLDetailsElement` sin reflejar `aria-expanded`, y faltaban estilos `:focus-visible` en `styles.css` para visualizar claramente el foco al navegar con teclado por los `<summary>` y botones.
- **Corrección solicitada:** mantener un único botón general por sección que muestre `"Expandir todo"` cuando haya algún desplegable cerrado (abriéndolos todos al hacer clic) y `"Contraer todo"` cuando todos estén abiertos (cerrándolos todos al hacer clic), sincronizar su etiqueta al abrir o cerrar manualmente cualquier `<details>` con clic o teclado, y agregar foco visible para navegación por teclado en Sentencia 1 y Sentencia 2.
- **Resultado obtenido:** botones generales de Sentencia 1 y Sentencia 2 sincronizados dinámicamente mediante la propiedad nativa `el.open` y eventos `toggle`, texto inicial consistente (`"Expandir todo"` con `aria-expanded`), preservación del comportamiento nativo de `<details>`/`<summary>` con clic y teclado (`Tab`, `Enter`, `Espacio`) e incorporación de contornos `:focus-visible` de alto contraste en `styles.css`.

### 12. Incorporación del apartado de enlaces de entrega en `README.md`
- **Prompt enviado:**
  > *"crea un apartado en el readme para los enlaces bien visible, arriba, justo debajo de ## Integrantes o al principio del archivo, con este formato: Enlaces de Entrega / Repositorio en GitHub: https://github.com/Adrilu-web/tp3-frontend-grupo1a-Convocado / Landing publicada (Vercel): https://TU-LINK-AQUI.vercel.app / Comprobación de acceso y funcionamiento: Ambos enlaces fueron verificados desde una ventana de navegación privada (sin sesión iniciada). El sitio carga correctamente el logo original de Convocado, los dos diagramas de flujo visuales y los desplegables interactivos con clic y teclado en vista desktop."*
- **Problema detectado:** ausencia de una sección visible en `README.md` con los dos enlaces obligatorios exigidos por la consigna y la rúbrica (repositorio de GitHub y landing publicada en Vercel), así como la nota de comprobación de acceso sin sesión.
- **Corrección solicitada:** crear el apartado `## Enlaces de Entrega` en la parte superior del `README.md`, justo debajo de `## Integrantes`, incluyendo los enlaces al repositorio y a la publicación en Vercel junto con el bloque de comprobación de funcionamiento.
- **Resultado obtenido:** sección `## Enlaces de Entrega` incorporada al inicio de `README.md` con ambos enlaces identificados y la constancia de verificación en ventana privada.

## Prompt 13 — Despliegue en Vercel

- **Proyecto:** Convocado — TP3 Frontend Grupo 1A.
- **Tecnologías:** HTML, CSS y JavaScript.
- **Plataforma:** Vercel.
- **Método utilizado:** Vercel CLI, sin integración automática con GitHub.
- **URL de producción:** [https://tp3-frontend-grupo1a-convocado.vercel.app](https://tp3-frontend-grupo1a-convocado.vercel.app).

**Prompt de despliegue (síntesis del objetivo solicitado a la IA; no es una transcripción literal):**

> Publicá en producción el proyecto Convocado — TP3 Frontend Grupo 1A mediante Vercel CLI. El proyecto utiliza HTML, CSS y JavaScript y su repositorio es https://github.com/Adrilu-web/tp3-frontend-grupo1a-Convocado. No modifiques el código HTML, CSS ni JavaScript y no conectes automáticamente el repositorio de GitHub con Vercel. Al finalizar, informá la URL pública de producción.

**Estado y alcance:** el despliegue inicial ya se realizó mediante Vercel CLI, sin integración automática con GitHub, según la información proporcionada por el equipo. Esta intervención se limita a documentar ese despliegue en `README.md`; no se atribuye su ejecución autónoma al agente que realiza esta actualización ni se efectuó un nuevo despliegue. La comprobación de acceso consignada en Enlaces de Entrega se conserva como registro previo del equipo; no representa una nueva verificación realizada en esta actualización.

Esta sección conserva el título solicitado «Prompt 13 — Despliegue en Vercel» y se incorpora de forma independiente, sin renumerar ni reemplazar las iteraciones existentes del registro de prompts.


## Prompt 14 — incorporación de aportes de Judith Leonardo al archivo README.md:**

> *"Redacta y agrega en README.md una nueva sección llamada "## Aportes de Judith Leonardo", justo debajo de "## Aportes de Silvia Podberezski", teniendo en cuenta mis commits en el repositorio y los prompts utilizados en mis etapas.

Mantén el mismo formato de la sección anterior e incluye:
- Aplicación: Antigravity. Modelo: Gemini 4 Argon (Medium).
- Rol: dirección de la identidad visual y diseño responsive en styles.css (Prompts 7 y 8), auditoría del proyecto frente a la rúbrica oficial e incorporación del apartado de enlaces de entrega y comprobación en README.md (Prompt 12).
- Qué se pidió al agente:
  1. Alinear la identidad visual de toda la landing en styles.css con la paleta cromática oficial del logo de Convocado (#0f766e, #10b981, #34d399, #fbbf24, #ffffff, #081120), diferenciando visualmente los bloques obligatorios de la sentencia frente a las decisiones de diseño del Grupo 01.
  2. Estilizar la sección de integrantes del Grupo 01 en el footer y construir la adaptación responsive completa para Tablet (1024px), Tablet pequeña (768px) y Mobile (480px) evitando desbordes horizontales.
  3. Revisar el cumplimiento integral de la consigna y agregar en README.md el apartado "## Enlaces de Entrega" (repositorio en GitHub y landing en Vercel con constancia de verificación sin sesión) junto con el registro del Prompt 12.
- Prompts enviados: cita los prompts correspondientes a la identidad visual (Prompt 7), diseño responsive (Prompt 8) e incorporación del apartado de enlaces de entrega (Prompt 12).

Modifica únicamente README.md sin alterar ningún otro archivo del proyecto."*
---

## Aportes de Silvia Podberezski

- **Aplicación:** Cursor. **Modelo:** Cursor Grok 4.6 Medium.
- **Rol:** revisión del trabajo de la landing contra la consigna y corrección de errores conceptuales de los diagramas y casos recorridos (cumple, no cumple y caso límite) en cada flujo.
- **Qué se pidió al agente:**
  1. En `index.html`, en el rombo de decisión del Diagrama 2 y en la fila "Decisión:" de la tabla del desplegable 2B, reemplazar "¿El jugador autorizó la solicitud Y la valoración conocida es menor que 4 O la distancia al equipo es mayor o igual a 10 km?" por: "¿El jugador autorizó la solicitud Y se cumple al menos una de estas condiciones: valoración conocida menor que 4, o distancia al equipo de 10 km o más?". El código mostrado debe seguir exactamente igual.
  2. En `index.html`, la Sentencia 2 no pide consultar los lugares disponibles ni "Jugador y Equipo", así que no deben figurar como obligatorios:
     - En el Diagrama 2, cambiar las etiquetas "lugaresDisponibles" y "Datos: Jugador y Equipo" de `pill-mandatory` a `pill-design`. Cambiar el título del nodo de consulta del agente por: "Consulta valoración conocida y distancia al equipo".
     - En "Datos necesarios" de la tarjeta de análisis de la Sentencia 2, dejar solo: `autorizacionSolicitud` (confirmación del jugador), `valoracionConocida` y `distanciaAlEquipoKm`.
     - En el desplegable 2A, en el ítem "Exigido por la sentencia", quitar lo de la disponibilidad de lugares. En el ítem "Decisión de diseño del grupo", agregar: "Disponibilidad de lugares (`lugaresDisponibles`), para comprobar que la evaluación manual no reserva lugar."
  3. agregar un desplegable 'Casos recorridos' en cada sentencia.
  4. Rotular los casos recorridos como Cumple / No cumple / Caso límite y agregar casos límite faltantes en cada flujo: Sentencia 1 (lugaresDisponibles = 0 tras aceptar al último jugador) y Sentencia 2 (valoración 4,0 con 9,9 km, y valoración 3,9 con 5 km), para probar cada borde (== 0, < 4, >= 10) por separado.
  5. Alinear diagramas.html y analisis_funcional_convocado_grupo01.md con la corrección de la Sentencia 2 ya hecha en index.html.
- **Prompt enviado:**
  > 1. En index.html, en el rombo de decisión del Diagrama 2 y en la fila "Decisión:" de la tabla del desplegable 2B, reemplazá "¿El jugador autorizó la solicitud Y la valoración conocida es menor que 4 O la distancia al equipo es mayor o igual a 10 km?" por: "¿El jugador autorizó la solicitud Y se cumple al menos una de estas condiciones: valoración conocida menor que 4, o distancia al equipo de 10 km o más?". El código mostrado debe seguir exactamente igual.
  >
  > 2. En index.html, la Sentencia 2 no pide consultar los lugares disponibles ni "Jugador y Equipo", así que no deben figurar como obligatorios:
  > - En el Diagrama 2, cambiá las etiquetas "lugaresDisponibles" y "Datos: Jugador y Equipo" de pill-mandatory a pill-design. Cambiá el título del nodo de consulta del agente por: "Consulta valoración conocida y distancia al equipo".
  > - En "Datos necesarios" de la tarjeta de análisis de la Sentencia 2, dejá solo: autorizacionSolicitud (confirmación del jugador), valoracionConocida y distanciaAlEquipoKm.
  > - En el desplegable 2A, en el ítem "Exigido por la sentencia", quitá lo de la disponibilidad de lugares. En el ítem "Decisión de diseño del grupo", agregá: "Disponibilidad de lugares (lugaresDisponibles), para comprobar que la evaluación manual no reserva lugar."

- **Prompt enviado (2):**
  > Hacé SOLO este cambio. Podés modificar únicamente index.html y styles.css (solo si hace falta). No modifiques ningún otro archivo ni ninguna otra línea. No hagas commit ni push.
  >
  > En index.html, en la Sentencia 1 y en la Sentencia 2, agregá al final de cada grupo de desplegables (después de 1B y de 2B) un <details class="custom-details"> llamado "Casos recorridos", cerrado por defecto, con la misma estructura que 1A y 1B (summary con details-summary, span, summary-chevron y div details-body). Dentro, una tabla con la clase origin-table y columnas: entrada, qué evalúa el agente, camino SÍ/NO, resultado. En lo que la sentencia define usá "table-badge badge-mandatory" (Obligatorio Sentencia); en lo que no define, "table-badge badge-design" (Diseño Grupo 01). Deben abrir y cerrar con clic y teclado, y el botón "Expandir todo / Contraer todo" debe seguir funcionando. Filas:
  >
  > Sentencia 1:
  > - Cumple: el capitán intenta aceptar y lugaresDisponibles = 0 → SÍ → informa "cupo completo" e impide la aceptación.
  > - No cumple: el capitán intenta aceptar y lugaresDisponibles = 2 → NO → sigue el flujo normal de aceptación (decisión del grupo).
  > - Caso límite: lugaresDisponibles = 1 → NO → el capitán acepta y queda 0 lugares (decisión del grupo); el siguiente intento de aceptar cae en la regla de la sentencia: informa cupo completo e impide la aceptación.
  >
  > Sentencia 2:
  > - Cumple: el jugador autoriza, valoración 3,5, equipo a 4 km → SÍ → se deriva al capitán para evaluación manual y no reserva lugar.
  > - No cumple: el jugador autoriza, valoración 4,5, equipo a 5 km → NO → flujo estándar (decisión del grupo).
  > - Caso límite: el jugador autoriza, valoración 4,0 y equipo a 10 km → SÍ por la distancia (4,0 no es menor que 4, pero 10 km es "diez kilómetros o más") → se deriva al capitán, que realiza la evaluación manual, y no reserva lugar.
  >
  > No hagas commit ni push. Al finalizar, listá qué archivo y qué líneas modificaste.

- **Prompt enviado (3):**
  > Hacé SOLO estos cambios. Modificá únicamente index.html y README.md. No toques styles.css, script.js, diagramas.html, diagramas.css ni el .md de análisis. No cambies ninguna otra línea, no agregues columnas ni clases nuevas, no ejecutes servidores ni capturas, no hagas commit ni push.
  >
  > PARTE 1 — index.html. En los dos desplegables "Casos recorridos" (el de la Sentencia 1 y el de la Sentencia 2), usá las clases y la estructura de las filas que ya existen (table-badge badge-mandatory / badge-design).
  >
  > A) Rotulado. En la primera celda (Entrada) de cada fila existente, anteponé el rótulo en negrita con <strong>:
  > - Sentencia 1: fila 1 "Cumple:", fila 2 "No cumple:", fila 3 "Caso límite:".
  > - Sentencia 2: fila 1 "Cumple:", fila 2 "No cumple:", fila 3 "Caso límite:".
  > No cambies nada más del texto de esas filas.
  >
  > B) Sentencia 1. Agregá una fila nueva al final del tbody:
  > - Entrada: "<strong>Caso límite:</strong> <code>lugaresDisponibles = 0</code> justo después de aceptar al último jugador (incluye un segundo clic o un segundo capitán intentando aceptar)." + badge-design
  > - Qué evalúa el agente: "Si el capitán intenta aceptar y no queda lugar (<code>lugaresDisponibles == 0</code>)." + badge-mandatory
  > - Camino SÍ/NO: "SÍ" + badge-mandatory
  > - Resultado: "Informa <em>"cupo completo"</em> e impide la aceptación; el contador no cambia." + badge-mandatory
  >
  > C) Sentencia 2. Agregá dos filas nuevas al final del tbody:
  > Fila 1:
  > - Entrada: "<strong>Caso límite:</strong> el jugador autoriza, valoración 4,0 y equipo a 9,9 km." + badge-mandatory
  > - Qué evalúa el agente: "4,0 no es menor que 4 y 9,9 km no llega a diez kilómetros: no se cumple ninguna de las dos condiciones." + badge-mandatory
  > - Camino: "NO" + badge-design
  > - Resultado: "Flujo estándar." + badge-design
  > Fila 2:
  > - Entrada: "<strong>Caso límite:</strong> el jugador autoriza, valoración 3,9 y equipo a 5 km." + badge-mandatory
  > - Qué evalúa el agente: "SÍ por la valoración (3,9 es menor que 4), aunque 5 km no llega a diez kilómetros." + badge-mandatory
  > - Camino: "SÍ" + badge-mandatory
  > - Resultado: "Se deriva al capitán para evaluación manual y no reserva lugar." + badge-mandatory
  >
  > PARTE 2 — README.md. Modificá solo la sección "## Aportes de Silvia Podberezski":
  > 1. En la lista "Qué se pidió al agente", agregá el ítem 4: "Rotular los casos recorridos como Cumple / No cumple / Caso límite y agregar casos límite faltantes en cada flujo: Sentencia 1 (lugaresDisponibles = 0 tras aceptar al último jugador) y Sentencia 2 (valoración 4,0 con 9,9 km, y valoración 3,9 con 5 km), para probar cada borde (== 0, < 4, >= 10) por separado."
  > 2. Al final de esa sección, antes del "---", agregá "- **Prompt enviado (3):**" con una cita (>) que copie literalmente las PARTES 1 y 2 de este mensaje, y debajo "- **Aplicación:** Antigravity. **Modelo:** Claude Sonnet 4.6 (Thinking)."
  > 3. No modifiques ninguna otra sección ni renumeres nada.
  >
  > Al finalizar, listá qué archivos y qué líneas modificaste.
  
- **Aplicación:** Antigravity. **Modelo:** Claude Sonnet 4.6 (Thinking).

- **Prompt enviado (4):**
  > Hacé SOLO estos cambios. Modificá únicamente diagramas.html, analisis_funcional_convocado_grupo01.md y README.md. No toques index.html, styles.css, diagramas.css ni script.js. No cambies ninguna otra línea, no ejecutes servidores ni capturas, no hagas commit ni push. El objetivo es alinear con lo que ya está corregido en index.html (Sentencia 2: lugaresDisponibles y "Jugador y Equipo" son decisión de diseño del grupo, no obligatorios de la sentencia).
  >
  > PARTE 1 — diagramas.html (solo el Diagrama de la Sentencia 2; no toques el de la Sentencia 1):
  > a) En el nodo de intervención humana inicial, cambiá la clase de <span class="meta-pill pill-mandatory">Datos: Jugador y Equipo</span> a pill-design.
  > b) En el nodo "CONSULTA DEL AGENTE", reemplazá el título por: "Consulta valoración conocida y distancia al equipo", y cambiá la clase del pill de <code>lugaresDisponibles</code> a pill-design.
  > c) En la pregunta de la decisión (node-question) reemplazá el texto por: "¿El jugador autorizó la solicitud Y se cumple al menos una de estas condiciones: valoración conocida menor que 4, o distancia al equipo de 10 km o más?". No cambies el <code> de node-code.
  >
  > PARTE 2 — analisis_funcional_convocado_grupo01.md (solo Sentencia 2):
  > a) En la sección 2, "Datos necesarios (estrictos de la sentencia)", eliminá el ítem `lugaresDisponibles`.
  > b) En la sección 3, propuesta de la Sentencia 2, agregá en "Decisión de diseño agregada por la propuesta del grupo" una viñeta: "Consultar la disponibilidad de lugares (`lugaresDisponibles`) para comprobar que la evaluación manual no reserva lugar."
  > c) En la sección 4, en "Datos exigidos por las sentencias" quitá la mención "y para asegurar la no reserva (`Sentencia 2`)" del punto 1, y en "Datos agregados como decisión de diseño del grupo" agregá la viñeta de la disponibilidad de lugares para la Sentencia 2.
  > d) En la sección 8.2, punto 3 ("Información de entrada"): marcá "Datos de referencia del jugador y del equipo" como "Decisión de diseño del grupo". En el punto 4: marcá la consulta de lugares disponibles como "Decisión de diseño del grupo" y quitá "Obligatorio de la sentencia" de esa línea.
  > e) En la sección 8.2, reemplazá la pregunta de la decisión (en el punto 5 y en la tabla de separación) por: "¿El jugador autorizó la solicitud Y se cumple al menos una de estas condiciones: valoración conocida menor que 4, o distancia al equipo de 10 km o más?".
  >
  > PARTE 3 — README.md:
  > a) En la tabla "Herramientas de IA Utilizadas" agregá una fila al final: | **Antigravity** | Claude Sonnet 4.6 (Thinking) | Rotulado de los casos recorridos y agregado de casos límite en cada flujo; alineación de diagramas.html y del análisis funcional con index.html. | Etiquetas Cumple / No cumple / Caso límite, tres filas nuevas en "Casos recorridos" y corrección de la Sentencia 2 (lugaresDisponibles y "Jugador y Equipo" como decisión de diseño). |
  > b) En "## Aportes de Silvia Podberezski", antes del "---" que la cierra, agregá una línea en blanco y luego: "- **Prompt enviado (4):**" con una cita (>) que copie literalmente las PARTES 1, 2 y 3 de este mensaje, y debajo "- **Aplicación:** Antigravity. **Modelo:** Claude Sonnet 4.6 (Thinking)." Además agregá a la lista "Qué se pidió al agente" el ítem 5: "Alinear diagramas.html y analisis_funcional_convocado_grupo01.md con la corrección de la Sentencia 2 ya hecha en index.html."
  > c) No modifiques ninguna otra sección.
  >
  > Al finalizar, listá qué archivos y qué líneas modificaste.
- **Aplicación:** Antigravity. **Modelo:** Claude Sonnet 4.6 (Thinking).

---

## Aportes de Judith Leonardo

- **Aplicación:** Antigravity. **Modelo:** Gemini 4 Argon (Medium).
- **Rol:** dirección de la identidad visual y diseño responsive en `styles.css` (Prompts 7 y 8), auditoría del proyecto frente a la rúbrica oficial e incorporación del apartado de enlaces de entrega y comprobación en `README.md` (Prompt 12).
- **Qué se pidió al agente:**
  1. Alinear la identidad visual de toda la landing en `styles.css` con la paleta cromática oficial del logo de **Convocado** (`#0f766e`, `#10b981`, `#34d399`, `#fbbf24`, `#ffffff`, `#081120`), diferenciando visualmente los bloques obligatorios de la sentencia frente a las decisiones de diseño del Grupo 01.
  2. Estilizar la sección de integrantes del Grupo 01 en el footer y construir la adaptación responsive completa para Tablet (`1024px`), Tablet pequeña (`768px`) y Mobile (`480px`) evitando desbordes horizontales.
  3. Revisar el cumplimiento integral de la consigna y agregar en `README.md` el apartado `## Enlaces de Entrega` (repositorio en GitHub y landing en Vercel con constancia de verificación sin sesión) junto con el registro del Prompt 12.
- **Prompts enviados:**
  > *"La landing quedó aprobada funcionalmente. Realiza ahora una ronda final de refinamiento visual sin modificar la estructura, el contenido, los diagramas ni la distribución de secciones. OBJETIVO: Alinear la identidad visual de toda la landing con el logo oficial de Convocado. PALETA NUEVA: Verde principal: #0f766e, Verde secundario: #10b981, Verde claro: #34d399, Amarillo acento: #fbbf24, Blanco: #ffffff, Fondo oscuro deportivo: mantener tonos azul oscuro muy oscuros cercanos a #081120."*
  >
  > *"Realiza una ronda final de mejoras enfocadas en entrega académica. 1. FOOTER: Agregar una sección de integrantes dentro del footer [...] 2. RESPONSIVE DESIGN: Crear una versión responsive completa. Objetivos: Tablet (1024px aprox.), Tablet pequeña (768px aprox.), Mobile (480px aprox.). Adaptar: HEADER, HERO, NUESTRO ENFOQUE, SENTENCIA 1 y SENTENCIA 2, DIAGRAMAS, FOOTER. Evitar: overflow horizontal, elementos cortados, texto fuera de pantalla."*
  >
  > *"crea un apartado en el readme para los enlaces bien visible, arriba, justo debajo de ## Integrantes o al principio del archivo, con este formato: Enlaces de Entrega / Repositorio en GitHub: https://github.com/Adrilu-web/tp3-frontend-grupo1a-Convocado / Landing publicada (Vercel): https://TU-LINK-AQUI.vercel.app / Comprobación de acceso y funcionamiento: Ambos enlaces fueron verificados desde una ventana de navegación privada (sin sesión iniciada). El sitio carga correctamente el logo original de Convocado, los dos diagramas de flujo visuales y los desplegables interactivos con clic y teclado en vista desktop."*

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

