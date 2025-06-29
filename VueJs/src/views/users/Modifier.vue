<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import userService from '@/services/userService'

const route = useRoute()
const router = useRouter()
const user = ref(null)

const fetchUser = async () => {
  try {
    const res = await userService.getById(route.params.id)
    user.value = res.data
  } catch (err) {
    alert('Utilisateur introuvable')
    console.error(err)
  }
}

const handleSubmit = async () => {
  try {
    await userService.update(route.params.id, user.value)
    alert('Utilisateur mis à jour !')
    router.push('/users')
  } catch (error) {
    alert('Erreur lors de la mise à jour')
    console.error(error)
  }
}

onMounted(fetchUser)
</script>
<template>
  <div>
    <h2>Modifier un utilisateur</h2>

    <form @submit.prevent="handleSubmit" v-if="user">
      <div>
        <label>Nom d'utilisateur</label>
        <input v-model="user.username" required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" v-model="user.email" required />
      </div>
      <button type="submit">Enregistrer</button>
    </form>
  </div>
</template>