# Convocado - TP3 Front End
Proyecto correspondiente al TP3 de Desarrollo Web Front End.
---
## Grupo 01
### Integrantes

- **Judith Leonardo**
- **Adriana Meyniel**
- **Magalí Pintos**
- **Silvia Podberezski**
- **Elías Zagayny**


## Startup Seleccionada
**Convocado**

Convocado es una red social deportiva cuyo objetivo es permitir que los jugadores encuentren equipos y soliciten participar en partidos.

---
## Bloque Asignado
**Cupo y revisión (S08-B)**

- **Sentencia 1 — Control de cupo al aceptar solicitudes:**
  > *"Si el capitán intenta aceptar una solicitud cuando ya no queda lugar, el sistema informa que el cupo está completo e impide una nueva aceptación."*

- **Sentencia 2 — Derivación a evaluación manual según valoración o distancia:**
  > *"Si el jugador autoriza una solicitud y se cumple al menos una de estas condiciones: la valoración conocida es menor que cuatro, o el equipo está a diez kilómetros o más; el sistema la deriva al capitán para evaluación manual; esa evaluación no reserva un lugar."*

---

## Objetivo del Trabajo

Este proyecto tiene como objetivo desarrollar una landing page para **Convocado** que presente dos propuestas de flujos agénticos correspondientes a las sentencias asignadas al Grupo 01.

## Estado inicial del proyecto

Como primera etapa se realizó el análisis funcional de las dos sentencias
asignadas y se definió una propuesta inicial para cada flujo agéntico.

El resultado se encuentra documentado en:

`analisis_funcional_convocado_grupo01.md`

La landing y sus funcionalidades serán construidas e iteradas de forma
grupal utilizando agentes de programación.

## Aporte inicial

Se realizó:

- análisis funcional de las dos sentencias;
- identificación de datos, condiciones y consecuencias;
- separación entre reglas obligatorias y decisiones de diseño;
- propuesta inicial de los dos flujos agénticos;
- especificación textual inicial de los diagramas.

## Tecnologías Utilizadas

- **Git** (control de versiones)
- **GitHub** (repositorio y documentación del proyecto)
- **Antigravity** (entorno de desarrollo agéntico utilizado para el análisis inicial)

## Herramientas de IA Utilizadas

- **Aplicación / entorno:** Antigravity
- **Modelo observado durante el desarrollo:** Gemini 4 Argon (Medium)
- **Uso:** análisis funcional de las dos sentencias y especificación textual inicial de los flujos.


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


---

## Estructura Actual del Proyecto

```text
tp3-frontend-grupo1a-Convocado/
├── analisis_funcional_convocado_grupo01.md # Documento de análisis funcional y especificación textual
└── README.md                               # Documentación académica y técnica del proyecto
```


## Próximas etapas

- Las tareas serán distribuidas entre los integrantes del grupo.
- Cada aporte se realizará mediante una rama propia y será incorporado al proyecto luego de su revisión.
