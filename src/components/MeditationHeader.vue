<script setup lang="ts">
import HeaderIcon from '@/Icons/HeaderIcon.vue'
import IconLogo from '@/Icons/IconLogo.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    <IconLogo class="header__logo" :width="76" :height="86" />
    <nav>
      <ul class="header__list">
        <li class="header__list-item">
          <RouterLink active-class="active-link" :to="'main'">
            <div class="header__list-text">
              <HeaderIcon name="play" />
              <span>Медитация</span>
            </div>
          </RouterLink>
        </li>
        <li class="header__list-item">
          <RouterLink active-class="active-link" :to="'statistics'">
            <div class="header__list-text">
              <HeaderIcon name="statistics" />
              <span>Статистика</span>
            </div>
          </RouterLink>
        </li>
        <li class="header__list-item">
          <RouterLink active-class="active-link" :to="'/'">
            <div class="header__list-text">
              <HeaderIcon name="exit" />
              <span>Выход</span>
            </div>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  gap: 636px;
  align-items: center;
  margin-block-start: 48px;
  margin-block-end: 48px;
  justify-content: center;
}

.header__list li {
  list-style: none;
}

.header__list {
  display: flex;
  gap: 55px;
}

.header__list-item:not(:last-child) {
  position: relative;
  padding-right: 55px;
}

.header__list-item:not(:last-child)::after {
  content: '';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 92px;
  background-color: #3a5051;
}

.header__list-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
}

.header__list-item a {
  text-decoration: none;
  font-family: var(--second-family);
  font-size: 22px;
  transition: all 0.5s;
  color: rgba(255, 255, 255, 0.5);
}

.header__list-item a:hover,
.header__list-item a.active-link {
  color: var(--color-text);
}
</style>
