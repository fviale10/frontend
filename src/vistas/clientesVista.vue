<template>
    <div class="container">
        <h2>Gestión de Clientes</h2>

        <button @click="store.openCreateModal()" class="btn-add">Agregar Cliente</button>

        <p v-if="store.loading">Cargando clientes...</p>
        <p v-if="store.error" class="error">{{ store.error }}</p>

        <table v-if="!store.loading" class="client-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Teléfono</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="client in store.clients" :key="client.id">
                    <td>{{ client.id }}</td>
                    <td>{{ client.nombre }}</td>
                    <td>{{ client.email }}</td>
                    <td>{{ client.telefono }}</td>
                    <td>
                        <button @click="store.openEditModal(client)" class="btn-edit">Editar</button>
                        <button @click="store.deleteClient(client.id)" class="btn-delete">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Solo llamamos al componente limpio -->
        <ClientModal />
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useClientStore } from '../stores/clientesStore.js'
import ClientModal from '../componentes/ClientesModal.vue'

const store = useClientStore()

onMounted(() => {
    store.fetchClients()
})
</script>

<style scoped>
.container {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
}

.btn-add {
    background: green;
    color: white;
    padding: 10px;
    margin-bottom: 20px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
}

.client-table {
    width: 100%;
    border-collapse: collapse;
}

.client-table th,
.client-table td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
}

.client-table th {
    background-color: #f4f4f4;
}

.btn-edit {
    background: orange;
    color: white;
    margin-right: 5px;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 4px;
}

.btn-delete {
    background: red;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 4px;
}

.error {
    color: red;
    font-weight: bold;
}
</style>
