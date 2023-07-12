<script lang="ts" setup>

import { reactive, ref, watch, provide } from 'vue'

import { RouterLink } from 'vue-router'

import { VForm } from 'vuetify/components'

const refVForm = ref<VForm>()

//Método 1

// const camposLogin = reactive({
//   username: ref(''),
//   password: ref(''),
//   isPasswordVisible: ref(false),
// })


// const emit = defineEmits(['camposLogin'])

// watch(() => camposLogin, () => {
//   emit('camposLogin',camposLogin)
// }, { deep: true })

// Método 2

const username = ref('')
const password = ref('')
const isPasswordVisible = ref(false)

provide('username', username)
provide('password', password)

const emit = defineEmits(['login'])

const onSubmit = () => {
  refVForm.value?.validate()
    .then(({ valid: isValid }) => {
      if (isValid) {
        emit('login')
      }
    })
}

// onMounted(() => {
//   sendUsername(),
//   sendPassword()
// })

</script>

<template>
  <v-form ref="refVForm" @submit.prevent="onSubmit">
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="username"
          class="mt-1"
          type="email"
          label="Email"
          :rules="[v => !!v || 'Campo Obrigatório']">
        </v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="password"
          label="Password"
          :type="isPasswordVisible ? 'text' : 'password'"
          :append-inner-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="isPasswordVisible = !isPasswordVisible"
          :rules="[v => !!v || 'Campo Obrigatório']"></v-text-field>
      </v-col>
      <v-col cols="12" class="d-flex justify-center">
        <small>
          <router-link :to="{ name: 'PrimeiroAcesso' }">
            <a rel="noopener noreferrer">
              Primeiro Acesso
            </a>
          </router-link>
          <br>
          <router-link :to="{ name: 'EsqueciMinhaSenha' }">
            <a rel="noopener noreferrer">
              Esqueci Minha Senha
            </a>
          </router-link>
        </small>
      </v-col>
      <v-col cols="12">
        <v-btn type="submit" block color="primary">
          Entrar
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
