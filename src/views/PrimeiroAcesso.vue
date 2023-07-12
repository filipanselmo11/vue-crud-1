<script lang="ts" setup>
import AbasPrimeiroAcesso from '@/components/AbasPrimeiroAcesso.vue'
import { inject, ref } from 'vue'

const infoTabsReceived = ref<any[]>([])

const infoTabs = inject('infoTabs', null)

if (infoTabs !== null) {
  infoTabsReceived.value = infoTabs
}
</script>

<template>
  <div class="mt-7 pb-5 ml-3 d-flex justify-center">
    <span>
      Cadastro do Usuário
    </span>
  </div>

  <v-card class="mt-16">
    <v-row>
      <abas-primeiro-acesso/>
    </v-row>
  </v-card>
</template>
