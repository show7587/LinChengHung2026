<template>
  <v-app-bar density="compact" color="primary">
    <v-app-bar-title class="app-bar-title">萬巒鄉鄉民代表候選人 林成宏</v-app-bar-title>
  </v-app-bar>
  <router-view />
</template>

<script setup>
</script>

<style scoped>
.app-bar-title {
  color: #ffffff;
  font-weight: 800;
  letter-spacing: 0.04em;
  -webkit-text-stroke: 0.45px rgba(35, 94, 145, 0.65);
  text-shadow:
    0 1px 0 rgba(35, 94, 145, 0.45),
    0 2px 6px rgba(35, 94, 145, 0.22);
}
</style>
