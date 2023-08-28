<script>
import { h, ref } from "vue";
import { RouterLink, RouterView } from 'vue-router'
import { useTheme } from '@/hooks/useTheme'
import { Icon } from "@iconify/vue";

export default {
    name: "App",
    data() {
        return {
            activeKey: ref(null),
            menuOptions: [
                {
                    label: () => h(
                        RouterLink,
                        {
                            to: {
                                name: "home"
                            }
                        },
                        {default: () => "首页"}
                    ),
                    key: "go-back-home"
                },
                {
                    label: () => h(
                        RouterLink,
                        {
                            to: {
                                name: "chat"
                            }
                        },
                        {default: () => "聊天"}
                    ),
                    key: "go-chat"
                },
            ],
            theme: null,
            themeOverrides: null,
        }
    },
    components: {
        Icon
    },
    mounted() {

    },
    created() {
        const themeData = useTheme();
        this.theme = themeData.theme;
        this.themeOverrides = themeData.themeOverrides;
    },
    methods: {
        renderIcon(icon) {
            return () => h(Icon, { icon })
        }
    }
}
</script>

<template>
    <n-config-provider
        class="h-full"
        :theme="theme"
        :theme-overrides="themeOverrides">
        <n-layout>
            <n-layout-header class="fixed top-0 z-50">
                <div class="flex">
                    <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
                </div>
            </n-layout-header>
        </n-layout>
        <router-view></router-view>
    </n-config-provider>
</template>

<style scoped>

</style>
