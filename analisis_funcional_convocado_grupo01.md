# Documento de Análisis Funcional: Startup "Convocado" (Grupo 01)

---

## 1. Descripción Breve de la Startup

**Convocado** es una red social deportiva cuyo objetivo es permitir que los jugadores encuentren equipos y soliciten participar en partidos.

---

## 2. Análisis Estricto de las Sentencias Asignadas

### Sentencia 1
> *"Si el capitán intenta aceptar una solicitud cuando ya no queda lugar, el sistema informa que el cupo está completo e impide una nueva aceptación."*

* **Datos necesarios (estrictos de la sentencia):**
  * `lugaresDisponibles` (o par `cupoTotal` / `lugaresOcupados`): Determina si queda o no lugar en el equipo/partido.
  * `solicitud`: La postulación que el capitán intenta gestionar.
  * `accionAceptar`: El intento del capitán de aceptar dicha solicitud.
* **Condición:**
  * El capitán intenta aceptar una solicitud **Y** ya no queda lugar disponible (`lugaresDisponibles == 0`).
* **Consecuencia obligatoria de la sentencia:**
  1. El sistema **informa** que el cupo está completo.
  2. El sistema **impide** una nueva aceptación (la solicitud no pasa a estado aceptada y no se ocupa un lugar).

---

### Sentencia 2
> *"Si el jugador autoriza una solicitud y se cumple al menos una de estas condiciones: la valoración conocida es menor que cuatro, o el equipo está a diez kilómetros o más; el sistema la deriva al capitán para evaluación manual; esa evaluación no reserva un lugar."*

* **Datos necesarios (estrictos de la sentencia):**
  * `autorizacionSolicitud`: Acción del jugador autorizando el envío de su solicitud.
  * `valoracionConocida`: Valor numérico de la calificación conocida del jugador.
  * `distanciaAlEquipoKm`: Distancia en kilómetros entre el jugador y el equipo.
  * `lugaresDisponibles`: Cantidad de lugares libres en el equipo/partido.
* **Condición:**
  * El jugador autoriza una solicitud **Y** se cumple al menos una de estas condiciones (`OR` lógico):
    * `valoracionConocida < 4`
    * `distanciaAlEquipoKm >= 10`
* **Consecuencia obligatoria de la sentencia:**
  1. El sistema **deriva la solicitud al capitán** para su **evaluación manual**.
  2. Esa evaluación **no reserva un lugar** (la cantidad de lugares disponibles no se modifica mientras esté en evaluación).

---

## 3. Propuesta de Solución Agéntica (Separación entre Sentencia y Diseño del Grupo)

### Propuesta para la Sentencia 1: Agente de Control de Cupo

* **Lo que surge estrictamente de la sentencia (Obligatorio):**
  * Verificar si queda lugar ante el intento de aceptación del capitán.
  * Si no queda lugar, bloquear la aceptación y emitir el mensaje informando que el cupo está completo.
* **Decisión de diseño agregada por la propuesta del grupo:**
  * El agente acompaña el bloqueo obligatorio con un **registro del intento rechazado por falta de cupo**, permitiendo que la solicitud conserve su estado previo (sin borrarse) por si más adelante se libera un lugar antes del partido.

### Propuesta para la Sentencia 2: Agente de Derivación a Evaluación Manual

* **Lo que surge estrictamente de la sentencia (Obligatorio):**
  * Evaluar al momento en que el jugador autoriza la solicitud si `valoracionConocida < 4` o `distanciaAlEquipoKm >= 10`.
  * Si se cumple al menos una condición, cambiar el destino de la solicitud a "Evaluación manual del capitán" sin descontar ni reservar un lugar en el cupo.
* **Decisión de diseño agregada por la propuesta del grupo:**
  * Al derivar la solicitud al capitán, el agente adjunta una **etiqueta de motivo de derivación** (indicando explícitamente si fue derivada por *"Valoración menor a 4"*, por *"Distancia de 10 km o más"*, o por *ambas*), facilitando la lectura del capitán sin alterar las reglas de negocio.

---

## 4. ¿Qué información consultaría el futuro agente?

### Datos exigidos por las sentencias:
1. **Disponibilidad de lugares** en el partido/equipo al momento de aceptar (`Sentencia 1`) y para asegurar la no reserva (`Sentencia 2`).
2. **Valoración conocida** del jugador (`Sentencia 2`).
3. **Distancia en kilómetros** entre el jugador y el equipo (`Sentencia 2`).

### Datos agregados como decisión de diseño del grupo:
* Identificador o nombre del jugador y del equipo para mostrarlos de forma legible en la interfaz del capitán y del jugador.

---

## 5. ¿Qué decisiones tomaría el agente?

| Regla / Origen | Condición Evaluada | Decisión del Agente |
| :--- | :--- | :--- |
| **Obligatoria (Sentencia 1)** | Capitán intenta aceptar y `lugaresDisponibles == 0` | **Impedir** la aceptación e **informar** que el cupo está completo. |
| **Obligatoria (Sentencia 2)** | Jugador autoriza solicitud y (`valoracion < 4` **O** `distancia >= 10 km`) | **Derivar** al capitán para evaluación manual y **no reservar** lugar. |
| **Decisión de diseño del grupo** | Solicitud derivada a evaluación manual | **Informar el motivo exacto** (valoración, distancia o ambas) junto a la solicitud derivada. |

---

## 6. ¿Cuándo sería necesaria una intervención humana?

* **Intervención definida en las sentencias:**
  1. **Del Jugador (Sentencia 2):** Cuando **autoriza** la solicitud para participar.
  2. **Del Capitán (Sentencia 1 y Sentencia 2):**
     * Cuando **intenta aceptar** una solicitud (Sentencia 1).
     * Cuando realiza la **evaluación manual** de una solicitud que le fue derivada por cumplir las condiciones de valoración menor a 4 o distancia de 10 km o más (Sentencia 2).

---

## 7. Explicación Clara para Estudiantes de Front End

Para llevar este análisis al desarrollo **Front End**, debemos separar lo que la consigna exige obligatoriamente de las ayudas visuales que diseñamos en la interfaz:

### Sentencia 1 en el Front End
1. **Regla obligatoria (Sentencia):**
   * Cuando el capitán presiona el botón `"Aceptar"`, verificamos si `lugaresDisponibles === 0`.
   * Si no hay lugar, **no sumamos al jugador** y mostramos en pantalla el mensaje obligatorio: *"El cupo está completo"*.
2. **Decisión de diseño en interfaz (Propuesta del grupo):**
   * Mantener visible el contador de lugares (ej. `Lugares disponibles: 0`) y destacar visualmente el mensaje de alerta para que el capitán comprenda de inmediato por qué su acción fue impedida.

### Sentencia 2 en el Front End
1. **Regla obligatoria (Sentencia):**
   * Cuando el jugador presiona `"Autorizar solicitud"`, evaluamos la condición con el operador lógico `OR` (`||`):
     `valoracionConocida < 4 || distanciaAlEquipoKm >= 10`.
   * Si da verdadero (`true`), la solicitud se muestra como **"Derivada al capitán para evaluación manual"** y el número de `lugaresDisponibles` **queda exactamente igual** (no reserva lugar).
2. **Decisión de diseño en interfaz (Propuesta del grupo):**
   * Mostrar al lado de la solicitud derivada un texto aclaratorio con la causa exacta (por ejemplo: *"Motivo: Valoración menor a 4"* o *"Motivo: Equipo a 10 km o más"*).

---

## 8. Especificación Textual de los Diagramas de Flujo

### 8.1. Diagrama de Flujo 1: Control de Cupo al Aceptar Solicitudes (Sentencia 1)

> **Sentencia 1:** *"Si el capitán intenta aceptar una solicitud cuando ya no queda lugar, el sistema informa que el cupo está completo e impide una nueva aceptación."*

#### Secuencia Ordenada del Recorrido
1. **Inicio:**
   * El flujo comienza en el panel de gestión de solicitudes del partido.
2. **Intervención humana (Disparador obligatorio de la sentencia):**
   * El **Capitán** selecciona una solicitud e intenta aceptarla.
3. **Información de entrada:**
   * Intento de aceptación por parte del capitán (`accionAceptar`) — *Obligatorio de la sentencia*.
   * Identificador de la solicitud seleccionada (`solicitud`) — *Decisión de diseño del grupo para identificar la postulación*.
4. **Consulta que realiza el futuro agente:**
   * El agente consulta la disponibilidad actual de lugares en el equipo/partido (`lugaresDisponibles`) — *Obligatorio de la sentencia*.
5. **Decisión (Condición central):**
   * **¿El capitán intenta aceptar una solicitud y no queda lugar?**
6. **Camino SÍ (Intenta aceptar y no queda lugar disponible):**
   * **Acción (Obligatoria de la sentencia):** El agente impide una nueva aceptación y emite el aviso de cupo completo.
   * **Acción (Decisión de diseño del grupo):** El agente registra el intento rechazado por falta de cupo conservando la solicitud en su estado previo.
   * **Resultado (Obligatorio de la sentencia):** El sistema informa que **el cupo está completo** y la solicitud **no** es aceptada.
7. **Camino NO (Queda lugar disponible):**
   * **Acción (Decisión de diseño del grupo):** El sistema permite continuar con el flujo normal de aceptación de la solicitud.
   * **Resultado (Decisión de diseño del grupo):** La solicitud sigue su curso habitual sin bloqueo por cupo.
8. **Fin del recorrido.**

#### Separación entre Sentencia 1 y Decisiones de Diseño del Grupo

| Elemento del Diagrama 1 | Origen |
| :--- | :--- |
| Intervención del capitán intentando aceptar una solicitud | **Elemento obligatorio de la sentencia** |
| Consulta de si queda lugar disponible | **Elemento obligatorio de la sentencia** |
| Decisión: *"¿El capitán intenta aceptar una solicitud y no queda lugar?"* | **Elemento obligatorio de la sentencia** |
| Camino SÍ: Informar que el cupo está completo e impedir una nueva aceptación | **Elemento obligatorio de la sentencia** |
| Conservar la solicitud en su estado previo con registro del intento rechazado | **Decisión de diseño agregada por el grupo** |
| Camino NO: Continuar con el flujo normal de aceptación cuando sí hay lugar | **Decisión de diseño agregada por el grupo** (para completar la bifurcación del diagrama) |

---

### 8.2. Diagrama de Flujo 2: Derivación a Evaluación Manual (Sentencia 2)

> **Sentencia 2:** *"Si el jugador autoriza una solicitud y se cumple al menos una de estas condiciones: la valoración conocida es menor que cuatro, o el equipo está a diez kilómetros o más; el sistema la deriva al capitán para evaluación manual; esa evaluación no reserva un lugar."*

#### Secuencia Ordenada del Recorrido
1. **Inicio:**
   * El flujo comienza cuando el jugador gestiona su solicitud para participar en un partido.
2. **Intervención humana inicial (Disparador obligatorio de la sentencia):**
   * El **Jugador** autoriza la solicitud.
3. **Información de entrada:**
   * Autorización de la solicitud por parte del jugador (`autorizacionSolicitud`) — *Obligatorio de la sentencia*.
   * Datos de referencia del jugador y del equipo — *Obligatorio de la sentencia*.
4. **Consulta que realiza el futuro agente:**
   * Consulta la **valoración conocida** del jugador (`valoracionConocida`) — *Obligatorio de la sentencia*.
   * Consulta la **distancia al equipo** en kilómetros (`distanciaAlEquipoKm`) — *Obligatorio de la sentencia*.
   * Verifica la **cantidad de lugares disponibles** (`lugaresDisponibles`) para garantizar que no se reserve lugar — *Obligatorio de la sentencia*.
5. **Decisión (Condición central):**
   * **¿El jugador autorizó la solicitud Y la valoración conocida es menor que 4 O la distancia al equipo es mayor o igual a 10 km?**
6. **Camino SÍ (El jugador autorizó la solicitud y se cumple al menos una de las condiciones: `valoracion < 4` O `distancia >= 10 km`):**
   * **Acción (Obligatoria de la sentencia):** El agente deriva la solicitud al capitán para evaluación manual y mantiene sin cambios los lugares disponibles.
   * **Acción (Decisión de diseño del grupo):** El agente agrega una etiqueta indicando qué condición motivó la derivación (*valoración menor que 4*, *distancia mayor o igual a 10 km*, o *ambas*).
   * **Resultado (Obligatorio de la sentencia):** La solicitud queda derivada al capitán para **evaluación manual** y **esa evaluación no reserva un lugar**.
   * **Intervención humana posterior (Obligatoria de la sentencia):** El **Capitán** recibe la solicitud para realizar la **evaluación manual**.
7. **Camino NO (La valoración conocida es mayor o igual a 4 Y la distancia al equipo es menor a 10 km):**
   * **Acción (Decisión de diseño del grupo):** El agente encamina la solicitud por el flujo estándar sin derivación por excepción.
   * **Resultado (Decisión de diseño del grupo):** La solicitud continúa el proceso regular.
8. **Fin del recorrido.**

#### Separación entre Sentencia 2 y Decisiones de Diseño del Grupo

| Elemento del Diagrama 2 | Origen |
| :--- | :--- |
| Intervención inicial del jugador autorizando la solicitud | **Elemento obligatorio de la sentencia** |
| Consulta de valoración conocida (`< 4`) y distancia al equipo (`>= 10 km`) | **Elemento obligatorio de la sentencia** |
| Decisión: *"¿El jugador autorizó la solicitud Y la valoración conocida es menor que 4 O la distancia al equipo es mayor o igual a 10 km?"* | **Elemento obligatorio de la sentencia** |
| Camino SÍ: Derivar la solicitud al capitán para evaluación manual y no reservar un lugar | **Elemento obligatorio de la sentencia** |
| Intervención humana del capitán para realizar la evaluación manual | **Elemento obligatorio de la sentencia** |
| Etiqueta informativa con el motivo específico de la derivación (valoración, distancia o ambas) | **Decisión de diseño agregada por el grupo** |
| Camino NO: Encaminar la solicitud por el flujo estándar cuando no se cumplen las condiciones | **Decisión de diseño agregada por el grupo** (para completar la bifurcación del diagrama) |

