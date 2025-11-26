<script setup lang="ts">
import ButtomAuth from '@/components/ButtonAuth.vue';
import IconLogo from '@/Icons/IconLogo.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
function redirectToMain() {
  router.push({ name: 'main' })
}

</script>

<template>
  <div class="auth">
    <IconLogo class="auth__logo" />
    <h2 class="auth__title">Добро пожаловать!</h2>
    <p class="auth__description">Медитируй и оставайся в фокусе, чтобы быть счастливым.</p>
    <ButtomAuth class="auth__button" @click="redirectToMain">
      Войти в приложение
    </ButtomAuth>
  </div>

</template>

<style scoped>
.auth {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  margin: 0;
  background-image: url('@/assets/bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.auth__title {
  font-weight: 700;
  font-size: 34px;
  margin-block-start: 40px;
}

.auth__description {
  font-family: var(--second-family);
  max-width: 317px;
  font-weight: 500;
  font-size: 20px;
  margin-block-end: 64px;
  text-align: center;
}
</style>
