<template>
    <div class="h-full dark:bg-[#24272e] transition-all p-0 pt-11">
        <div class="h-full overflow-hidden border rounded-md shadow-md dark:border-neutral-800">
            <n-layout class="z-40 transition h-full pl-[260px]" has-sider>
                <n-layout-sider
                    :collapsed-width="0"
                    :width="260"
                    :show-trigger="'arrow-circle'"
                    collapse-mode="transform"
                    position="absolute"
                    bordered>
                    <div class="flex flex-col h-full">
                        <main class="flex flex-col flex-1 min-h-0">
                            <div class="p-4">
                                <n-button dashed block>
                                    新建聊天
                                </n-button>
                            </div>
                            <div class="flex-1 min-h-0 pb-4 overflow-hidden">
                                <!--<List />-->
                            </div>
                            <div class="p-4">

                            </div>
                        </main>
                        <div class="flex items-center justify-between min-w-0 p-4 overflow-hidden border-t dark:border-neutral-800">
                            Hi, Chat!
                        </div>
                    </div>
                </n-layout-sider>
                <!--<template v-if="false">
                    <div v-show="!collapsed" class="fixed inset-0 z-40 w-full h-full bg-black/40" @click="handleUpdateCollapsed" />
                </template>-->
                <n-layout-content class="h-full">
                    <div class="flex flex-col w-full h-full">
                        <!--<HeaderComponent
                            v-if="isMobile"
                            :using-context="usingContext"
                            @export="handleExport"
                            @handle-clear="handleClear"
                        />-->
                        <main class="flex-1 overflow-hidden">
                            <div id="scrollRef" ref="scrollRef" class="h-full overflow-hidden overflow-y-auto">
                                <div id="image-wrapper"
                                    class="w-full max-w-screen-xl m-auto dark:bg-[#101014]"
                                    :class="[false ? 'p-2' : 'p-4']">
                                    <template v-if="!1">
                                        <div class="flex items-center justify-center mt-4 text-center text-neutral-300">
                                            <icon icon="ri:bubble-chart-fill" class="mr-2 text-3xl" />
                                            <span>啊哈~</span>
                                        </div>
                                    </template>
                                    <template v-else>
                                        <div>
                                            <m-message
                                                date-time="2023-01-01 00:00:00"
                                                text="你好"
                                                :inversion="true"
                                                :error="null"
                                                :loading="false"
                                            />
                                            <m-message
                                                date-time="2023-01-01 00:00:00"
                                                text="你好"
                                                :inversion="false"
                                                :error="null"
                                                :loading="false"
                                            />
                                            <div class="sticky bottom-0 left-0 flex justify-center">
                                                <n-button v-if="false" type="warning">
                                                    <template #icon>
                                                        <icon icon="ri:stop-circle-line" />
                                                    </template>
                                                    停止响应
                                                </n-button>
                                            </div>
                                        </div>
                                    </template>
                                </div>
                            </div>
                        </main>
                        <div class="p-4">
                            <div class="w-full max-w-screen-xl m-auto">
                                <div class="flex items-center justify-between space-x-2">
                                    <m-hover-button v-if="!false">
                                        <span class="text-xl text-[#4f555e] dark:text-white">
                                          <icon icon="ri:delete-bin-line" />
                                        </span>
                                    </m-hover-button>
                                    <m-hover-button v-if="!false">
                                        <span class="text-xl text-[#4f555e] dark:text-white">
                                          <icon icon="ri:download-2-line" />
                                        </span>
                                    </m-hover-button>
                                    <m-hover-button>
                                        <span class="text-xl" :class="{ 'text-[#4b9e5f]': 1, 'text-[#a8071a]': !1 }">
                                          <icon icon="ri:chat-history-line" />
                                        </span>
                                    </m-hover-button>
                                    <n-auto-complete v-model:value="prompt">
                                        <template #default="{ handleInput, handleBlur, handleFocus }">
                                            <n-input
                                                ref="inputRef"
                                                v-model:value="prompt"
                                                type="textarea"
                                                placeholder="请输入问题"
                                                :autosize="{ minRows: 1, maxRows: false ? 4 : 8 }"
                                            />
                                        </template>
                                    </n-auto-complete>
                                    <n-button type="primary">
                                        <template #icon>
                                          <span class="dark:text-black">
                                            <icon icon="ri:send-plane-fill" />
                                          </span>
                                        </template>
                                    </n-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </n-layout-content>
            </n-layout>
        </div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue'
import MMessage from "../components/MMessage.vue";
import MHoverButton from "../components/MHoverButton.vue";

export default {
    name: "ChatFullView",
    components: {
        Icon,
        MMessage,
        MHoverButton
    },
    data() {
        return {
            prompt: ''
        }
    },
    methods: {

    }
}
</script>

<style scoped>

</style>
