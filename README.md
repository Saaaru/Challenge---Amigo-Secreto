## Aplicación Amigo Secreto

Este proyecto es una aplicación sencilla hecha con JavaScript para una aplicación que permita elegir un amigo secreto al azar, dada una lista ingresda por el usuario.

Es una herramienta ideal para la actividad de "Amigo Secreto"

## Funcionalidades

### Agregar amigos:

Permite ingresar nombres mediante un campo de entrada.
Los nombres ingresados se almacenan en una lista.

Mostrar lista de amigos:
Muestra en el órden de ingreso los nombres en una lista en la pantalla.

### Sortear amigo:

Selecciona aleatoriamente un nombre de la lista y lo muestra como resultado.

Si la lista está vacía, se muestra una alerta que indica que hay que ingresar nombres.

### Archivos principales

HTML: index.html: Contiene la estrucutra de la página, incluyendo los elementos como el campo de entrada, botones y áreas para mostrar la lista y el resultado.

CSS: style.css: Define los estilos visuales de la aplicación.

JavaScript: app.js: Proporciona la lógica de la app, con las siguientes funciones principales:

### Funciones en el código

__agregarAmigo()__

1. Obtiene el valor ingresado en el campo de entrada.

2. Agrega el nombre a la lista de amigos si no está vacío.

3. Limpia el campo de entrada después de agregar el nombre.

4. Actualiza la lista visible llamando a mostrarLista().

__mostrarLista()__

1. Recorre la lista de amigos y genera un elemento <li> para cada nombre.

2. Muestra los nombres en una lista HTML.

__sortearAmigo()__

1. Selecciona un nombre aleatorio de la lista.
    - Si la lista está vacía, muestra un mensaje de advertencia.

2. Muestra el nombre seleccionado en el área de resultado.

### Cómo usar

1. Abre el archivo HTML en un navegador.

2. Escribe nombres en el campo de entrada y haz clic en el botón "Añadir".

3. Observa cómo los nombres ingresados se agregan a la lista en la interfaz.

4. Haz clic en el botón "Sortear amigo" para seleccionar aleatoriamente un nombre de la lista.

5. El nombre seleccionado se mostrará en el área de resultado.

### Requisitos

Navegador web moderno compatible con JavaScript.

### Notas adicionales

El código incluye validaciones para evitar agregar nombres vacíos y manejar listas vacías durante el sorteo.

Se utiliza la función Math.random() para realizar el sorteo aleatorio.