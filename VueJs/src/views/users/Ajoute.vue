<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import userService from '@/services/userService'

const router = useRouter()

const user = ref({
  username: '',
  email: '',
  password: '',
})

const handleSubmit = async () => {
  try {
    await userService.create(user.value)
    alert('Utilisateur créé !')
    router.push('/users') // redirige vers la liste
  } catch (error) {
    alert('Erreur lors de la création')
    console.error(error)
  }
}
</script>
<template>
  <div>
    <h2>Ajouter un utilisateur</h2>

    <form @submit.prevent="handleSubmit">
      <div>
        <label>Nom d'utilisateur</label>
        <input v-model="user.username" required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" v-model="user.email" required />
      </div>
      <div>
        <label>Mot de passe</label>
        <input type="password" v-model="user.password" required />
      </div>
      <button type="submit">Créer</button>
    </form>
  </div>
</template>