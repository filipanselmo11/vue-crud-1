<script lang="ts" setup>
import FormPrimeiroAcesso from '@/components/FormPrimeiroAcesso.vue'
import { ref, provide, inject } from 'vue';

const currentTab = ref('usuario');

const nomeReceived = ref('')
const emailReceived = ref('')
const passwordReceived = ref('')

const nome = inject('nome', null)
const email = inject('email', null)
const password = inject('password', null)

if (nome !== null) {
  nomeReceived.value = nome
}

if (email !== null) {
  emailReceived.value = email
}

if (password !== null) {
  passwordReceived.value = password
}

const infoTabs = [
  {
    nome: 'Informações 1'
  },
  {
    nome: 'Informações 2'
  },
  {
    nome: 'Informações 3'
  },
  {
    nome: 'Informações 4'
  },
]


provide('infoTabs', infoTabs)

</script>


<template>
  <v-row class="px-5 py-5">
    <v-col cols="12" sm="4" lg="3">
      <v-tabs v-model="currentTab" direction="vertical" grow>
        <v-tab key="usuario" value="usuario" class="text-high-emphasis">
          <span style="text-transform: none;">Informações do usuário</span>
        </v-tab>
        <v-tab v-for="item, index in infoTabs" :key="index" :value="item.nome" class="text-high-emphasis">
          <span style="text-transform: none;">
            {{ item.nome }}
          </span>
        </v-tab>
      </v-tabs>
    </v-col>
    <v-col cols="12" sm="8" lg="9">
      <v-window v-model="currentTab">
        <v-window-item key="usuario" value="usuario">
          <form-primeiro-acesso />
          <v-row class="pa-5">
            <v-col cols="12" class="d-flex flex-row-reverse">
              <v-btn color="primary">
                <span style="text-transform: none;">Próximo</span>
              </v-btn>
            </v-col>
          </v-row>
        </v-window-item>
        <v-window-item v-for="item, index in infoTabs" :key="index" :value="item.nome">
          <form-primeiro-acesso />
          <v-row class="pa-5">
            <v-col cols="6" class="d-flex">
              <v-btn color="primary">
                <span style="text-transform: none;">
                  Anterior
                </span>
              </v-btn>
            </v-col>
            <v-col cols="6" class="d-flex flex-row-reverse">
              <v-btn color="primary">
                <span style="text-transform: none;">
                  Próximo
                </span>
              </v-btn>
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>
</template>
