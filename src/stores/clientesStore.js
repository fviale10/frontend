import { defineStore } from "pinia";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export const useClientStore = defineStore("client", {
  state: () => ({
    clients: [],
    loading: false,
    error: null,

    // Estado del Modal y Formulario centralizado
    isModalOpen: false,
    isEdit: false,
    form: {
      id: null,
      nombre: "",
      email: "",
      telefono: "",
    },
  }),

  actions: {
    async fetchClients() {
      this.loading = true;

      try {
        const response = await axios.get(`${API_URL}/api/clientes`);
        this.clients = response.data;
      } catch (err) {
        this.error = "Error al cargar los clientes";
        console.error(err);
      } finally {
        this.loading = false;
      }
    },

    // Métodos para controlar el Modal
    openCreateModal() {
      this.isEdit = false;
      this.form = { id: null, nombre: "", email: "", telefono: "" };
      this.isModalOpen = true;
    },

    openEditModal(client) {
      this.isEdit = true;
      this.form = { ...client }; // Clonamos el objeto
      this.isModalOpen = true;
    },

    closeModal() {
      this.isModalOpen = false;
    },

    // Métodos CRUD que procesan el formulario interno
    async saveClient() {
      try {
        if (this.isEdit) {
          console.log(`${API_URL}/api/clientes/${this.form.id}`);

          const response = await axios.put(
            `${API_URL}/api/clientes/${this.form.id}`,
            this.form,
          );
          const index = this.clients.findIndex((c) => c.id === this.form.id);
          if (index !== -1) this.clients[index] = response.data;
        } else {
          const response = await axios.post(
            `${API_URL}/api/clientes`,
            this.form,
          );
          this.clients.push(response.data);
        }
        this.closeModal();
      } catch (err) {
        this.error = "Error al guardar el cliente";
        console.error(err);
      }
    },

    async deleteClient(id) {
      if (!confirm("¿Estás seguro de que querés eliminar este cliente?"))
        return;
      try {
        await axios.delete(`${API_URL}/api/clientes/${id}`);
        this.clients = this.clients.filter((c) => c.id !== id);
      } catch (err) {
        this.error = "Error al eliminar el cliente";
        console.error(err);
      }
    },
  },
});
