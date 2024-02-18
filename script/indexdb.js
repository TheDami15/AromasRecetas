// tuarchivo.js

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("indexdb").addEventListener("click", function() {
        // Lógica para almacenar, mostrar y eliminar datos usando IndexedDB

        // Nombre de la base de datos
        const dbName = "mis_datos";
        // Versión de la base de datos
        const dbVersion = 1;
        // Nombre del almacén de datos
        const storeName = "usuarios";

        // Abrir la base de datos
        let request = indexedDB.open(dbName, dbVersion);

        request.onerror = function(event) {
            console.error("Error al abrir la base de datos:", event.target.errorCode);
        };

        request.onsuccess = function(event) {
            // Referencia a la base de datos
            let db = event.target.result;

            // Iniciar una transacción de lectura/escritura
            let transaction = db.transaction([storeName], "readwrite");

            // Obtener el almacén de datos
            let store = transaction.objectStore(storeName);

            // Agregar un objeto de usuario
            let usuario = {
                nombre: document.getElementById("nameup").value,
                email: document.getElementById("emailup").value,
                contraseña: document.getElementById("passwordup").value
            };

            // Agregar el objeto a la base de datos
            let addRequest = store.add(usuario);

            addRequest.onsuccess = function(event) {
                console.log("Datos agregados correctamente a IndexedDB");
            };

            addRequest.onerror = function(event) {
                console.error("Error al agregar datos a IndexedDB:", event.target.errorCode);
            };

            // Obtener todos los objetos del almacén de datos y mostrarlos por consola
            let getAllRequest = store.getAll();

            getAllRequest.onsuccess = function(event) {
                console.log("Datos almacenados en IndexedDB:", event.target.result);
            };

            getAllRequest.onerror = function(event) {
                console.error("Error al obtener datos de IndexedDB:", event.target.errorCode);
            };

            // Eliminar todos los objetos del almacén de datos
            let clearRequest = store.clear();

            clearRequest.onsuccess = function(event) {
                console.log("Datos eliminados de IndexedDB");
            };

            clearRequest.onerror = function(event) {
                console.error("Error al eliminar datos de IndexedDB:", event.target.errorCode);
            };
        };

        request.onupgradeneeded = function(event) {
            // Crear el almacén de datos si no existe
            let db = event.target.result;
            let objectStore = db.createObjectStore(storeName, { keyPath: "email" });

            // Crear un índice para buscar por nombre
            objectStore.createIndex("nombre", "nombre", { unique: false });

            console.log("Base de datos creada o actualizada");
        };
    });
});
