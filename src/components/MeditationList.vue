<script lang="ts" setup>
import ButtonIcon from '@/components/ButtonIcon.vue';
import IconPlay from '@/Icons/IconPlay.vue';
import { useMeditationListStore } from '@/stores/meditation.store';
import { onMounted } from 'vue';

const store = useMeditationListStore()

onMounted(() => {
  store.fetchMeditation()
})

</script>


<template>
  <section class="card__list">
    <div class="card" v-for="item in store.meditationList" :key="item.id">
      <h2 class="card__title">{{item.title}}</h2>
      <p class="card__description">{{ item.description }}</p>
      <div class="card__footer">
        <ButtonIcon>
          <div class="button-container" >
            <span class="button__text">Начать</span>
            <IconPlay />
          </div>
        </ButtonIcon>
        <p class="card__text-time">{{item.duration_min}} мин</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card__list {
  width: 704px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.card {
  display: flex;
  flex-direction: column;
  width: 340px;
  border-radius: 20px;
  background-color: var(--color-bg-card);
  padding: 22px 30px
}

.card__title {
  color: var(--color-text-inverted);
  font-weight: 500;
  font-size: 25px;
}

.card__description{
font-weight: 500;
font-size: 15px;
font-family: var(--second-family);
color: var(--color-text-inverted);
}

.card__footer {
  display: flex;
  gap: 120px;
  justify-content: space-between;
  margin-block-start: 16px;
}

.button-container {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  padding: 10px 17px 11px 26px;
}

.button__text{
  font-weight: 500;
  font-size: 15px;
  line-height: 120%;
  font-family: var(--second-family);
  color: var( --color-text);
}

.card__text-time{
  font-size: 15px;
  font-family: var(--second-family);
  color: var(--color-background);
  opacity: 0.75;
}
</style>
