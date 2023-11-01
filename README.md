[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/QSHs3Jnx)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12656833&assignment_repo_type=AssignmentRepo)
**Parte1: Halloween Mix or Match**

**Objetivo:**

El objetivo de esta actividad es desarrollar un juego de "Encontrar la Pareja" (Match the Pair) con temática de Halloween utilizando HTML, CSS y JavaScript. Los estudiantes aplicarán sus conocimientos en desarrollo web del lado del cliente para crear una experiencia de juego interactiva y atractiva.

**Descripción:**

Los estudiantes deben crear un juego de "Encontrar la Pareja" en el que los jugadores deben emparejar las cartas relacionadas con Halloween. El juego consta de un conjunto de cartas con imágenes de Halloween que están mezcladas y colocadas boca abajo. El jugador debe voltear dos cartas a la vez para encontrar parejas coincidentes. Si las cartas coinciden, permanecen boca arriba. Si no coinciden, se voltean de nuevo. El objetivo es encontrar todas las parejas en el menor tiempo posible.

**Instrucciones:**

1. Aceptar la tarea de Github Classroom: [Halloween Mix or Match](https://classroom.github.com/a/QSHs3Jnx)

2. La tarea incluye los ficheros HTML, CSS y las imágenes necesarias. Además hay un fichero JavaScript que contiene un esqueleto para facilitaros la tarea.

3. Debéis completar el archivo JavaScript implementando las funciones faltantes para crear la lógica del juego.

4. Personalicen el juego según sus preferencias y añadan sonidos, animaciones o cualquier mejora adicional que deseen.

**Requisitos:**

- El juego debe incluir al menos 8 pares de cartas relacionadas con Halloween.
- Debe haber un contador de tiempo y un contador de movimientos.
- Los estudiantes pueden personalizar la interfaz y añadir sonidos si lo desean.

Claro, si aún no han cubierto la autenticación en su curso, es una buena idea eliminarla como requisito en la tarea. Aquí tienes la tarea ampliada sin la autenticación:



**Parte 2 : Creación de una API y Almacenamiento de Resultados de Partidas**

**Objetivo:**

En esta tarea, los estudiantes deben crear una API REST sencilla utilizando Express.js para almacenar los resultados de las partidas del juego de "Encontrar la Pareja" desarrollado anteriormente. Además, deben modificar la aplicación del juego para permitir que los jugadores guarden sus resultados y mostrar una tabla con los mejores puntajes.

**Descripción:**

**Parte 1: Creación de la API con Express.js**

1. Los estudiantes deben crear una API REST sencilla utilizando Express.js que permita realizar las siguientes operaciones:
   - **Guardar un resultado de partida**: La API debe permitir a la aplicación del juego enviar el nombre del jugador, el tiempo restante y el número de clics a la API para guardar el resultado.
   - **Recuperar los mejores resultados**: La API debe proporcionar un punto final que devuelva una lista de los mejores resultados (por ejemplo, los 10 mejores puntajes) ordenados por tiempo restante y número de clics. Cada resultado debe incluir el nombre del jugador, el tiempo restante y el número de clics.

**Parte 2: Modificación de la Aplicación del Juego**

1. Los estudiantes deben modificar la aplicación del juego para incluir una nueva funcionalidad que permita a los jugadores guardar sus resultados al completar una partida victoriosa. Deben agregar un formulario que permita al jugador ingresar su nombre.

2. Una vez que un jugador completa una partida victoriosa, la aplicación debe mostrar automáticamente el formulario para ingresar el nombre y enviar los datos al servidor de la API para guardar el resultado.

**Parte 3: Mostrar la Tabla de los Mejores Resultados**

1. En la aplicación del juego, los estudiantes deben agregar una sección en la que se muestren los mejores resultados recuperados de la API. Deben mostrar esta información en forma de una tabla con columnas para el nombre del jugador, tiempo restante y número de clics.

2. La tabla de los mejores resultados debe actualizarse automáticamente cuando se guardan nuevos resultados.

**Requisitos:**

- La API debe ser capaz de guardar y recuperar resultados de partidas.
- La aplicación del juego debe incluir validación de formularios para garantizar que los jugadores ingresen su nombre.
- Los resultados de las partidas deben incluir al menos el nombre del jugador, el tiempo restante y el número de clics.


