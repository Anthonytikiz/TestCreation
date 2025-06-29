<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import userEntityService from '@/services/userEntityService'
import userService from '@/services/userService'
import entityService from '@/services/entityService'

const router = useRouter()
const form = ref({ userId: '', entityId: '' })
const users = ref([])
const entities = ref([])

const charger = async () => {
  users.value = (await userService.getAll()).data
  entities.value = (await entityService.getAll()).data
}

const submit = async () => {
  await userEntityService.create(form.value)
  router.push('/user-entities')
}

onMounted(charger)
</script>
<template>
  <div>
    <h2>Nouvelle association</h2>
    <form @submit.prevent="submit">
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

      <button type="submit">Associer</button>
    </form>
  </div>
</template>