<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import userEntityService from '@/services/userEntityService'
import userService from '@/services/userService'
import entityService from '@/services/entityService'

const route = useRoute()
const router = useRouter()
const form = ref(null)
const users = ref([])
const entities = ref([])

const charger = async () => {
  const [assoc, allUsers, allEntities] = await Promise.all([
    userEntityService.getById(route.params.id),
    userService.getAll(),
    entityService.getAll()
  ])
  form.value = assoc.data
  users.value = allUsers.data
  entities.value = allEntities.data
}

const submit = async () => {
  await userEntityService.update(route.params.id, form.value)
  router.push('/user-entities')
}

onMounted(charger)
</script>
<template>
  <div>
    <h2>Modifier une association</h2>
    <form @submit.prevent="submit" v-if="form">
      <label>Utilisateur</label>
      <select v-model="form.userId" required>
        <option v-for="user in users" :key="user.id" :value="user.id">
          {{ user.username }}
        </option>
      </select>

      <label>Entité</label>
      <select v-model="form.entityId" required>
        <option v-for="entity in entities" :key="entity.id" :value="entity.id">
          {{ entity.name }}
        </option>
      </select>

      <button type="submit">Enregistrer</button>
    </form>
  </div>
</template>