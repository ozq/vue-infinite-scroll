<script setup>
import UsersList from '@/components/UsersList';
</script>

<template>
  <main class="main">
    <h1 class="title">Yet another infinite scroll 🪄</h1>
    <UsersList/>
  </main>
</template>

<style scoped>
.main {
  width: 500px;
  max-width: 95%;
  margin: 48px auto;
}

.title {
  margin-bottom: 32px;
  text-align: center;
  font-size: 24px;
}
</style>
