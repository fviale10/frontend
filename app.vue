<template>
    <div id="app">
        <!-- Renderiza directamente la vista del CRUD de Clientes -->
        <ClientView />
    </div>
</template>

<script setup>
import ClientView from './src/vistas/clientesVista.vue'
</script>

<style>
/* Estilos globales básicos para limpiar márgenes */
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background-color: #f9f9f9;
    color: #333;
}

#app {
    padding: 20px;
}
</style>
