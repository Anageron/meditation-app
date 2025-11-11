<script setup lang="ts">
</script>

<template>
  <button class="button-icon" >
    <slot />
  </button>
</template>

<style scoped>
.button-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background);
  color: var(--color-text-inverted);
  cursor: pointer;
  border-radius: 10px;
  border: none;
  gap: 12px;
  padding: 0dvb;
}

.button-icon:hover {
  background-color: var(--color-card-button-hover);
}
</style>
