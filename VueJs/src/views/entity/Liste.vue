<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import entityService from '@/services/entityService'
import Tableau from '@/components/Tableau.vue'

const router = useRouter()
const entities = ref([])


const colonnes = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'name Entity' },
]


const charger = async () => {
  const res = await entityService.getAll()
  entities.value = res.data
}

const ajouter = () => {
  router.push('/entities/ajouter')
}

const modifier = (entity) => {
  router.push(`/entities/modifier/${entity.id}`)
}

const supprimer = async (entity) => {
  await entityService.delete(entity.id)
  charger()
}

onMounted(charger)
</script>
<template>
  <div>
    <h2>Liste des entités</h2>
    <button @click="ajouter">Nouvelle entité</button>
    <Tableau :colonnes="colonnes" :donnees="entities" @modifier="modifier" @supprimer="supprimer" />
  </div>
</template>