<template>
  <div>
    <navbar />
    <div class="w-75 mx-auto mt-5">
      <b-card>
        <b-button class="bg-primary border border-primary float-right m-3" v-b-modal.createModal>Novo</b-button>
        <b-table ref="table" show-empty striped hover :fields="fields" :items="employees">
          <template v-slot:cell(actions)="row">
            <b-button class="mr-1 bg-primary border border-primary" @click="handleUpdateModal(row.item)">Editar</b-button>
            <b-button class="bg-danger border border-danger" @click="remove(row.item)">Deletar</b-button>
          </template>
        </b-table>
      </b-card>
    </div>

    <b-modal id="createModal" title="Novo Funcionário" centered @show="resetCreateModal" @ok="create">
      <form class="create-form">
        <input type="text" placeholder="Matricula" v-model="employee.registration" required />
        <input type="text" placeholder="Nome" v-model="employee.name" />
        <input type="text" placeholder="Email" v-model="employee.email" />
        <input type="text" placeholder="Cargo" v-model="employee.role" />
        <input type="text" placeholder="Telefone" v-model="employee.phone" />
      </form>
    </b-modal>

    <b-modal ref="updateModal" title="Atualizar Funcionário" centered @ok="update">
      <form class="create-form">
        <input type="text" placeholder="Matricula" v-model="employee.registration" />
        <input type="text" placeholder="Nome" v-model="employee.name" />
        <input type="text" placeholder="Email" v-model="employee.email" />
        <input type="text" placeholder="Cargo" v-model="employee.role" />
        <input type="text" placeholder="Telefone" v-model="employee.phone" />
      </form>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Navbar from '../components/Navbar'

export default {
  name: 'Employee',
  components: {
    Navbar
  },
  data() {
    return {
      employee: {
        registration: '',
        name: '',
        email: '',
        role: '',
        phone: ''
      },
      fields: [
        {
          key: 'registration',
          label: 'Matricula'
        },
        {
          key: 'name',
          label: 'Nome'
        },
        {
          key: 'email',
          label: 'Email'
        },
        {
          key: 'role',
          label: 'Cargo'
        },
        {
          key: 'phone',
          label: 'Telefone'
        },
        {
          key: 'actions',
          label: ''
        }
      ]
    }
  },
  computed: {
    ...mapState('employee', ['employees'])
  },
  mounted() {
    this.$store.dispatch('employee/getAll').catch(err => console.error(err.message))
  },
  methods: {
    resetCreateModal() {
      this.employee = {
        registration: '',
        name: '',
        email: '',
        role: '',
        phone: ''
      }
    },
    create() {
      this.$store
        .dispatch('employee/create', this.employee)
        .then(() => {
          this.$bvToast.toast('Funcionário criado', {
            title: 'Sucesso',
            variant: 'success',
            solid: true
          })
        })
        .catch(() => {
          this.$bvToast.toast('Erro ao criar Funcionário', {
            title: 'Erro',
            variant: 'danger',
            solid: true
          })
        })
    },
    handleUpdateModal(item) {
      this.employee = {
        _id: item._id,
        registration: item.registration,
        name: item.name,
        email: item.email,
        role: item.role,
        phone: item.phone
      }

      this.$refs['updateModal'].show()
    },
    update() {
      this.$store
        .dispatch('employee/update', this.employee)
        .then(() => {
          this.$refs.table.refresh()

          this.$bvToast.toast('Funcionário atualizado', {
            title: 'Sucesso',
            variant: 'success',
            solid: true
          })
        })
        .catch(() => {
          this.$bvToast.toast('Erro ao atualizar Funcionário', {
            title: 'Erro',
            variant: 'danger',
            solid: true
          })
        })
    },
    remove(employee) {
      this.$store
        .dispatch('employee/remove', employee._id)
        .then(() => {
          this.$bvToast.toast('Funcionário removido', {
            title: 'Sucesso',
            variant: 'success',
            solid: true
          })
        })
        .catch(() => {
          this.$bvToast.toast('Erro ao remover Funcionário', {
            title: 'Erro',
            variant: 'danger',
            solid: true
          })
        })
    }
  }
}
</script>

<style scoped>
.create-form input {
  font-family: 'Roboto', sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
</style>
