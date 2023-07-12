<script setup lang="ts">

import { ref } from 'vue';
import { useRoute, useRouter, RouterLink } from 'vue-router';
import { VForm } from 'vuetify/components'

const route = useRoute()
const router = useRouter()

const refVForm = ref<VForm>()

const username = ref('')
const password = ref('')
const isPasswordVisible = ref(false)

const login = () => {
  router.replace(route.query.to ? String(route.query.to) : '/home')
}

const onSubmit = () => {
  refVForm.value?.validate()
    .then(({ valid: isValid }) => {
      if (isValid) {
        login()
      }
    })
}

</script>


<template>
  <v-container>
    <v-row class="justify-center mt-1">
      <v-img class="bg-white" :width="10" :aspect-ratio="1"
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
    </v-row>
    <v-row justify="center" class="my-5">
      <h2>
        Faça o login
      </h2>
    </v-row>
    <v-row no-gutters justify="center">
      <v-col cols="12">
        <v-card height="100%" flat class="d-flex flex-column card-outter">
          <v-card-text>
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
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

