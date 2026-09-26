<template>
    <div v-if="store.isModalOpen" class="modal-overlay">
        <div class="modal-content">
            <h3>{{ store.isEdit ? 'Editar Cliente' : 'Nuevo Cliente' }}</h3>

            <form @submit.prevent="store.saveClient()">
                <div class="form-group">
                    <label>Nombre:</label>
                    <!-- Vinculado directo al formulario de la store -->
                    <input v-model="store.form.nombre" type="text" required />
                </div>

                <div class="form-group">
                    <label>Email:</label>
                    <input v-model="store.form.email" type="email" required />
                </div>

                <div class="form-group">
                    <label>Teléfono:</label>
                    <input v-model="store.form.telefono" type="text" required />
                </div>

                <div class="modal-actions">
                    <button type="button" @click="store.closeModal()">Cancelar</button>
                    <button type="submit">{{ store.isEdit ? 'Guardar Cambios' : 'Registrar' }}</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { useClientStore } from '../stores/clientesStore.js'

const store = useClientStore()
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
}

.form-group input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

.modal-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
}
</style>
