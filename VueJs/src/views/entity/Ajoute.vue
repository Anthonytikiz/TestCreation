<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import entityService from '@/services/entityService'

const router = useRouter()
const entity = ref({ name: '' })

const handleSubmit = async () => {
  await entityService.create(entity.value)
  router.push('/entities')
}
</script>
<template>
  <div>
    <h2>Ajouter une entité</h2>
    <form @submit.prevent="handleSubmit">
      <label>Nom de l'entité</label>
      <input v-model="entity.name" required />
      <button type="submit">Créer</button>
    </form>
  </div>
</template>