<script lang="ts" setup>
import { ref, provide } from 'vue'


const nome = ref('')
const email = ref('')
const password = ref('')

// const items = ref([
//     'Item 1',
//     'Item 2',
//     'Item 3',
//     'Item 4'
// ])

provide('nome', nome)
provide('email', email)
provide('password', password)

</script>

<template>
    <v-text-field
      v-model="nome"
      label="Nome"
      :rules="[v => !!v || 'Campo Obrigatório']">
    </v-text-field>
    <v-text-field
      v-model="email"
      label="Email"
      :rules="[v => !!v || 'Campo Obrigatório']"
      type="email">
    </v-text-field>
    <v-text-field
      v-model="password"
      label="Password"
      type="password"
      :rules="[v => !!v || 'Campo Obrigatório']">
    </v-text-field>
    <!-- <v-checkbox
      v-model="checkbox"
      value="1"
      :items="items"
      label="Option"
      type="checkbox"
      :rules="[v => !!v || 'Campo Obrigatório']">
    </v-checkbox> -->
</template>
