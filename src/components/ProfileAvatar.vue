<script setup lang="ts">
import { ref } from 'vue';


// // const store = useProfileStore()

// // onMounted(()=> {
// //   store.fetchProfile()
// // })
const name = ref('Динара')
// const name = computed( ()=> {
//   return store.profile ? store.profile.name : 'Гость'
// })
</script>

<template>
  <div class="profile-avatar">
    <img class="avatar" src="/avatar.png" alt="Изображение пользователя">
    <h2 class="profile-avatar__title">Добро пожаловать, {{ name }}!</h2>
    <p class="profile-avatar__description">Как вы сегодня себя чувствуете?</p>
  </div>
</template>

<style scoped>
.profile-avatar {
  display: flex;
  flex-direction: column;
  font-size: 18px;
  margin-block-end: 40px;
}

.avatar {
  width: 129px;
  height: 129px;
  object-fit: cover;
  border-radius: 50%;
  margin-block-end: 30px;
}

.profile-avatar__title {
  font-weight: 500;
  font-size: 30px;
  margin-block-end: 2px;
}

.profile-avatar__description {
  font-size: 22px;
  color: rgba(255, 255, 255, 0.7);
  font-family: var(--second-family);
}
</style>
