# 🎁 Desafío: Sorteo del Amigo Secreto

Este proyecto consiste en una pequeña aplicación web que simula el sorteo del **amigo secreto**, con el objetivo de fortalecer tus habilidades en **lógica de programación en JavaScript**.

---

## 📌 Objetivo

El principal objetivo de este desafío es desarrollar la lógica necesaria para:

- Agregar nombres a una lista de participantes.
- Prevenir nombres duplicados.
- Mostrar la lista actual de amigos.
- Realizar el sorteo aleatorio de un participante.
- Eliminar al participante sorteado de la lista.
- Evitar sorteos sin suficientes participantes.

---

## 🚀 Funcionalidades principales

- ✅ Agregar amigos a una lista sin repetir nombres.
- ✅ Mostrar en pantalla la lista de amigos actual.
- ✅ Sortear aleatoriamente un amigo de la lista.
- ✅ Mostrar el amigo sorteado y eliminarlo de la lista.
- ✅ Evitar que se realicen sorteos cuando la lista está vacía.

---

## 🧠 Lógica del código

El archivo JavaScript implementa las siguientes funciones:

### `agregarAmigo()`
- Toma el valor del input con id `amigo`.
- Verifica que el campo no esté vacío y que el nombre no esté duplicado.
- Agrega el nombre a la lista `amigos[]`.
- Llama a `mostrarListaAmigos()` y limpia el input.

### `mostrarListaAmigos()`
- Recorre el array `amigos[]` y actualiza el DOM con los nombres en una lista `<ul>`.

### `sortearAmigo()`
- Verifica si hay elementos en la lista.
- Selecciona aleatoriamente un nombre del array.
- Lo muestra en pantalla y lo elimina de la lista.
- Informa si ya no quedan más amigos por sortear.

### `limpiar(elemento)`
- Limpia el valor del input recibido por parámetro.

---

## 🧪 Cómo usar

1. Ingresa nombres en el campo de texto y presiona el botón “Agregar amigo”.
2. Una vez que hayas agregado los participantes, presiona “Sortear amigo”.
3. El sistema mostrará un nombre aleatorio y lo eliminará de la lista.
4. Repite el sorteo hasta que no queden más nombres.

---

## 📁 Archivos esperados

- `index.html` → Estructura básica del sitio.
- `style.css` (opcional) → Estilos para mejorar la interfaz.
- `script.js` → Contiene toda la lógica explicada anteriormente.

---

## 📌 Recomendaciones

- Puedes extender esta lógica para asignar *amigos secretos* entre varias personas de manera cruzada, sin repeticiones.
- También podrías mejorar la interfaz agregando animaciones, validaciones más complejas o almacenamiento local.

---

## 🧑‍💻 Autor

Desarrollado como ejercicio para practicar lógica en JavaScript.

---
