import { createRouter, createWebHistory } from 'vue-router'
import userListe from '@/views/users/Liste.vue'
import userAjouter from '@/views/users/Ajoute.vue'
import userModifier from '@/views/users/Modifier.vue'
import entityListe from '@/views/entity/Liste.vue'
import entityAjouter from '@/views/entity/Ajoute.vue'
import entityModifier from '@/views/entity/Modifier.vue'
import UserEntityListe from '@/views/UserEntity/Liste.vue'
import UserEntityAjouter from '@/views/UserEntity/Ajoute.vue'
import UserEntityModifier from '@/views/UserEntity/Modifier.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/users'
    },
    { 
      path: '/users',
      component: userListe 
    },
    { 
      path: '/users/ajouter', 
      component: userAjouter 
    },
    { 
      path: '/users/modifier/:id', 
      component: userModifier 
    },
    {
      path: '/entities',
      component: entityListe
    },
    {
      path: '/entities/ajouter',
      component: entityAjouter
    },
    {
      path: '/entities/modifier/:id',
      component: entityModifier
    },
    {
      path: '/user-entities',
      component: UserEntityListe
    },
    {
      path: '/user-entities/ajouter',
      component: UserEntityAjouter
    },
    {
      path: '/user-entities/modifier/:id',
      component: UserEntityModifier
    }
  ],
})
