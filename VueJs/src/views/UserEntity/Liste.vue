<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import userEntityService from '@/services/userEntityService'
import Tableau from '@/components/Tableau.vue'

const router = useRouter()
const userEntities = ref([])

const colonnes = [
  { key: 'id', label: 'ID' },
  { key: 'entityName', label: 'name Entity' },
  { key: 'username', label: 'username User' },
  { key: 'email', label: 'Email' },
  { key: 'password', label: 'password' },
]

const charger = async () => {
  const res = await userEntityService.getAll()
  userEntities.value = res.data
}

const ajouter = () => {
  router.push('/user-entities/ajouter')
}

const modifier = (item) => {
  router.push(`/user-entities/modifier/${item.id}`)
}

const handleSupprimer = async (id) => {
  if (confirm('Supprimer cette Associations User ↔ Entité ?')) {
    await userEntityService.delete(id)
    charger()
  }
}

onMounted(charger)
</script>
<template>
  <div>
    <h2>Associations User ↔ Entité</h2>
    <button @click="ajouter">Nouvelle association</button>
    <Tableau
      :colonnes="colonnes"
      :donnees="userEntities"
      @modifier="modifier"
      @supprimer="handleSupprimer"
    />
  </div>
</template>