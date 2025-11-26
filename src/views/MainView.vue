<script setup lang="ts">
import ButtonStatus from '@/components/ButtonStatus.vue';
import MeditationHeader from '@/components/MeditationHeader.vue'
import MeditationList from '@/components/MeditationList.vue'
import ProfileAvatar from '@/components/ProfileAvatar.vue';
</script>

<template>
  <div class="container">
    <MeditationHeader />
    <main class="main">
      <section class="profile">
        <ProfileAvatar />
        <ButtonStatus />
      </section>
      <MeditationList />
    </main>
  </div>
</template>

<style scoped>
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  /* по желанию */
}

.main {
  display: flex;
  gap: 100px;
  align-items: center;
  justify-content: center;
}
</style>
