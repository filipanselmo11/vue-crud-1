<script setup lang="ts">
import LoginFormVue from '@/components/LoginForm.vue';
import { useRoute, useRouter } from 'vue-router';
import { inject, ref } from 'vue'

const route = useRoute()
const router = useRouter()

const usernameReceived = ref('')
const passwordReceived = ref('')

const username = inject('username', null)
const password = inject('password', null)

if (username !== null) {
  usernameReceived.value = username
}

if (password !== null) {
  passwordReceived.value = password
}


const login = () => {
  router.replace(route.query.to ? String(route.query.to) : '/home')
  console.log('USER NAME ', username)
  console.log('Password  ', password)
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
        <!-- <pre>{{ username }}</pre>
        <pre>{{ password }}</pre> -->
        <v-card height="100%" flat class="d-flex flex-column card-outter">
          <v-card-text>
            <LoginFormVue @login="login"/>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

