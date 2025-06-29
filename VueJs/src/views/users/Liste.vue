<script setup>
import { ref, onMounted } from 'vue'
import Tableau from '@/components/Tableau.vue'
import userService from '@/services/userService'
import { useRouter } from 'vue-router'
const router = useRouter()

const users = ref([])

const colonnes = [
  { key: 'id', label: 'ID' },
  { key: 'username', label: 'username User' },
  { key: 'email', label: 'Email' },
  { key: 'password', label: 'password' },
]

const fetchUsers = async () => {
  try {
    const res = await userService.getAll()
    users.value = res.data
  } catch (err) {
    console.error('Erreur chargement utilisateurs', err)
  }
}

const onNouveauClick = () => {
  router.push('/users/ajouter')
}

const handleModifier = (user) => {
  router.push(`/users/modifier/${user.id}`)
}

const handleSupprimer = async (id) => {
  if (confirm('Supprimer cet utilisateur ?')) {
    await userService.delete(id)
    fetchUsers()
  }
}

onMounted(fetchUsers)
</script>
<template>
  <div>
    <h2>Liste des utilisateurs</h2>

    <button @click="onNouveauClick">Nouveau User</button>

    <Tableau
      :donnees="users"
      :colonnes="colonnes"
      @modifier="handleModifier"
      @supprimer="handleSupprimer"
    />
  </div>
</template>