<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <n-config-provider class="h-full">
        <router-view />
    </n-config-provider>
</template>

<style scoped>

</style>
