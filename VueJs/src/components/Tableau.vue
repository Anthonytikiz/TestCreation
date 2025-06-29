<template>
  <table border="1" cellpadding="8" cellspacing="0">
    <thead>
      <tr>
        <th v-for="col in colonnes" :key="col.key">
          {{ col.label }}
        </th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in donnees" :key="item.id">
        <td v-for="col in colonnes" :key="col.key">
          {{ item[col.key] }}
        </td>
        <td>
          <button @click="$emit('modifier', item)">✏️</button>
          <button @click="$emit('supprimer', item.id)">🗑️</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
defineProps({
  donnees: Array,
  colonnes: Array,
})
defineEmits(['modifier', 'supprimer'])
</script>
    