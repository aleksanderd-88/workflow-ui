<template>
  <header>
    <nav class="app-bar">
      <main class="app-bar__content">
        <h1 class="app-bar__title">
          WorkFlow
        </h1>
      </main>
    </nav>
  </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
  .app-bar {
    width: 100%;
    box-shadow: 0 8px 12px rgba(#000, .1);

    &__content {
      height: 60px;
      display: flex;
      align-items: center;
    }

    &__title {
      margin: auto;
      letter-spacing: .03em;
    }
  }
</style>