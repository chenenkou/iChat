<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <n-layout>
        <n-layout-header>
            <div>&nbsp;</div>
            <div>
                <nav>
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/chat">Chat</RouterLink>
                </nav>
            </div>
            <div>&nbsp;</div>
        </n-layout-header>
        <n-layout-content content-style="padding: 24px;">
            <RouterView />
        </n-layout-content>
        <n-layout-footer>
            页脚
        </n-layout-footer>
    </n-layout>
</template>

<style scoped>

</style>
