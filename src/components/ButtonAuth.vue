<template>
  <Button class="auth__button">
    <slot />
  </Button>
</template>

<style scoped>
.auth__button {
  color: var(--color-text);
  width: 321px;
  height: 61px;
  background-color: var(--color-bg-button);
  border: none;
  border-radius: 10px;
  font-weight: 500;
  font-size: 25px;
  cursor: pointer;
}

.auth__button:hover {
  background-color: var(--color-background);
}
</style>
