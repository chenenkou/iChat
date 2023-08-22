<script>
import { h, ref } from "vue";
import { RouterLink, RouterView } from 'vue-router'
import {Icon} from "@iconify/vue";

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
                {
                    label: () => h(
                        RouterLink,
                        {
                            to: {
                                name: "chat-full"
                            }
                        },
                        {default: () => "聊天(全)"}
                    ),
                    key: "go-chat-full"
                }
            ]
        }
    },
    components: {
        Icon
    },
    mounted() {

    },
    methods: {
        renderIcon(icon) {
            return () => h(Icon, { icon })
        }
    }
}
</script>

<template>
    <n-config-provider class="h-full">
        <n-layout>
            <n-layout-header class="fixed top-0 z-50">
                <div class="flex">
                    <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
                </div>
            </n-layout-header>
        </n-layout>
        <router-view />
    </n-config-provider>
</template>

<style scoped>

</style>
