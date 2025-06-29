<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import entityService from '@/services/entityService'

const route = useRoute()
const router = useRouter()
const entity = ref(null)

onMounted(async () => {
  const res = await entityService.getById(route.params.id)
  entity.value = res.data
})

const handleSubmit = async () => {
  await entityService.update(route.params.id, entity.value)
  router.push('/entities')
}
</script>
<template>
  <div>
    <h2>Modifier l'entité</h2>
    <form @submit.prevent="handleSubmit" v-if="entity">
      <label>Nom</label>
      <input v-model="entity.name" required />
      <button type="submit">Enregistrer</button>
    </form>
  </div>
</template>