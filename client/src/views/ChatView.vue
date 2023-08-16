<template>
    <div class="h-full overflow-hidden border rounded-md shadow-md min-w-[640px]">
        <n-layout class="h-full" has-sider>
            <n-layout-sider
                :collapsed-width="0"
                :width="260"
                collapse-mode="width"
                show-trigger="arrow-circle"
                bordered
            >
                <div class="flex flex-col h-full">
                    <main class="flex-1 min-h-0 overflow-hidden">
                        <div class="p-4">
                            <n-button dashed block>
                                新建对话
                            </n-button>
                        </div>
                        <n-scrollbar class="px-4">
                            <div class="flex flex-col gap-2 text-sm">
                                <a class="relative flex items-center gap-3 px-3 py-3 break-all rounded-md cursor-pointer bg-neutral-50 pr-14 hover:bg-neutral-100 group">
                                    <span>
                                        <Icon icon="ri:message-3-line" />
                                    </span>
                                    <div class="relative flex-1 overflow-hidden break-all text-ellipsis whitespace-nowrap max-h-5">
                                        <span>学习相关</span>
                                    </div>
                                    <div class="absolute z-10 flex visible right-1">
                                        <button class="p-1">
                                            <Icon icon="ri:edit-line" />
                                        </button>
                                        <button class="p-1">
                                            <Icon icon="ri:delete-bin-line" />
                                        </button>
                                    </div>
                                </a>
                                <a class="relative flex items-center gap-3 px-3 py-3 break-all rounded-md cursor-pointer bg-neutral-50 pr-14 hover:bg-neutral-100 group">
                                    <span>
                                        <Icon icon="ri:message-3-line" />
                                    </span>
                                    <div class="relative flex-1 overflow-hidden break-all text-ellipsis whitespace-nowrap max-h-5">
                                        <span>知识库</span>
                                    </div>
                                    <div class="absolute z-10 flex visible right-1">
                                        <button class="p-1">
                                            <Icon icon="ri:edit-line" />
                                        </button>
                                        <button class="p-1">
                                            <Icon icon="ri:delete-bin-line" />
                                        </button>
                                    </div>
                                </a>
                            </div>
                        </n-scrollbar>
                    </main>
                    <div class="flex items-center justify-between p-4 overflow-hidden border-t">
                        Hi, Chat
                    </div>
                </div>
            </n-layout-sider>
            <n-layout-content class="h-full">
                <div class="flex flex-col h-full">
                    <main class="flex-1 overflow-hidden">
                        <div class="h-full p-4 overflow-hidden overflow-y-auto">
                            <div>
                                <div class="flex w-full mb-6" :class="[{ 'flex-row-reverse': true }]">
                                    <div
                                        class="flex items-center justify-center rounded-full overflow-hidden w-[32px] h-[32px]"
                                        :class="[true ? 'ml-3' : 'mr-3']">
                                        <div>
                                            <span v-if="true" class="text-[27px]">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" width="1em" height="1em"><path d="M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5z" fill="currentColor"></path><path d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2zm7.992 22.926A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0z" fill="currentColor"></path></svg>
                                            </span>
                                            <span v-else class="text-[27px]">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" width="1em" height="1em">
                                                  <path d="M29.71,13.09A8.09,8.09,0,0,0,20.34,2.68a8.08,8.08,0,0,0-13.7,2.9A8.08,8.08,0,0,0,2.3,18.9,8,8,0,0,0,3,25.45a8.08,8.08,0,0,0,8.69,3.87,8,8,0,0,0,6,2.68,8.09,8.09,0,0,0,7.7-5.61,8,8,0,0,0,5.33-3.86A8.09,8.09,0,0,0,29.71,13.09Zm-12,16.82a6,6,0,0,1-3.84-1.39l.19-.11,6.37-3.68a1,1,0,0,0,.53-.91v-9l2.69,1.56a.08.08,0,0,1,.05.07v7.44A6,6,0,0,1,17.68,29.91ZM4.8,24.41a6,6,0,0,1-.71-4l.19.11,6.37,3.68a1,1,0,0,0,1,0l7.79-4.49V22.8a.09.09,0,0,1,0,.08L13,26.6A6,6,0,0,1,4.8,24.41ZM3.12,10.53A6,6,0,0,1,6.28,7.9v7.57a1,1,0,0,0,.51.9l7.75,4.47L11.85,22.4a.14.14,0,0,1-.09,0L5.32,18.68a6,6,0,0,1-2.2-8.18Zm22.13,5.14-7.78-4.52L20.16,9.6a.08.08,0,0,1,.09,0l6.44,3.72a6,6,0,0,1-.9,10.81V16.56A1.06,1.06,0,0,0,25.25,15.67Zm2.68-4-.19-.12-6.36-3.7a1,1,0,0,0-1.05,0l-7.78,4.49V9.2a.09.09,0,0,1,0-.09L19,5.4a6,6,0,0,1,8.91,6.21ZM11.08,17.15,8.38,15.6a.14.14,0,0,1-.05-.08V8.1a6,6,0,0,1,9.84-4.61L18,3.6,11.61,7.28a1,1,0,0,0-.53.91ZM12.54,14,16,12l3.47,2v4L16,20l-3.47-2Z" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="flex flex-col flex-1 text-sm" :class="[true ? 'items-end' : 'items-start']">
                                      <span class="text-xs text-[#b4bbc4]">
                                        2023/8/16 12:18:29
                                      </span>
                                        <div class="p-2 mt-2 rounded-md" :class="[true ? 'bg-[#d2f9d1]' : 'bg-[#f4f6f8]']">
                                            <span class="leading-relaxed whitespace-pre-wrap" :class="[{ 'text-red-400': false }]">
                                              你好
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-full mb-6" :class="[{ 'flex-row-reverse': false }]">
                                    <div
                                        class="flex items-center justify-center rounded-full overflow-hidden w-[32px] h-[32px]"
                                        :class="[false ? 'ml-3' : 'mr-3']">
                                        <div>
                                            <span v-if="false" class="text-[27px]">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" width="1em" height="1em"><path d="M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5z" fill="currentColor"></path><path d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2zm7.992 22.926A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0z" fill="currentColor"></path></svg>
                                            </span>
                                            <span v-else class="text-[27px]">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" width="1em" height="1em">
                                                  <path d="M29.71,13.09A8.09,8.09,0,0,0,20.34,2.68a8.08,8.08,0,0,0-13.7,2.9A8.08,8.08,0,0,0,2.3,18.9,8,8,0,0,0,3,25.45a8.08,8.08,0,0,0,8.69,3.87,8,8,0,0,0,6,2.68,8.09,8.09,0,0,0,7.7-5.61,8,8,0,0,0,5.33-3.86A8.09,8.09,0,0,0,29.71,13.09Zm-12,16.82a6,6,0,0,1-3.84-1.39l.19-.11,6.37-3.68a1,1,0,0,0,.53-.91v-9l2.69,1.56a.08.08,0,0,1,.05.07v7.44A6,6,0,0,1,17.68,29.91ZM4.8,24.41a6,6,0,0,1-.71-4l.19.11,6.37,3.68a1,1,0,0,0,1,0l7.79-4.49V22.8a.09.09,0,0,1,0,.08L13,26.6A6,6,0,0,1,4.8,24.41ZM3.12,10.53A6,6,0,0,1,6.28,7.9v7.57a1,1,0,0,0,.51.9l7.75,4.47L11.85,22.4a.14.14,0,0,1-.09,0L5.32,18.68a6,6,0,0,1-2.2-8.18Zm22.13,5.14-7.78-4.52L20.16,9.6a.08.08,0,0,1,.09,0l6.44,3.72a6,6,0,0,1-.9,10.81V16.56A1.06,1.06,0,0,0,25.25,15.67Zm2.68-4-.19-.12-6.36-3.7a1,1,0,0,0-1.05,0l-7.78,4.49V9.2a.09.09,0,0,1,0-.09L19,5.4a6,6,0,0,1,8.91,6.21ZM11.08,17.15,8.38,15.6a.14.14,0,0,1-.05-.08V8.1a6,6,0,0,1,9.84-4.61L18,3.6,11.61,7.28a1,1,0,0,0-.53.91ZM12.54,14,16,12l3.47,2v4L16,20l-3.47-2Z" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="flex flex-col flex-1 text-sm" :class="[false ? 'items-end' : 'items-start']">
                                      <span class="text-xs text-[#b4bbc4]">
                                        2023/8/16 12:18:29
                                      </span>
                                        <div class="p-2 mt-2 rounded-md" :class="[false ? 'bg-[#d2f9d1]' : 'bg-[#f4f6f8]']">
                                            <span class="leading-relaxed whitespace-pre-wrap" :class="[{ 'text-red-400': false }]">
                                              你好！有什么我可以帮助你的吗？
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    <div class="p-4">
                        <div class="flex items-center justify-between space-x-2">
                            <n-tooltip trigger="hover">
                                <template #trigger>
                                    <button class="flex items-center justify-center w-10 h-10 transition rounded-full hover:bg-neutral-100">
                                        <span class="text-xl text-[#4f555e]">
                                          <Icon icon="ri:delete-bin-line" />
                                        </span>
                                    </button>
                                </template>
                                清除会话
                            </n-tooltip>
                            <n-input placeholder="请输入问题" />
                            <n-button type="primary">发送</n-button>
                        </div>
                    </div>
                </div>
            </n-layout-content>
        </n-layout>
    </div>
</template>

<script>
import request from "../utils/request"
import { Icon } from '@iconify/vue'

export default {
    name: "ChatView",
    data() {
        return {
            collapsed: false
        }
    },
    components: {
        Icon
    },
    mounted() {

    }
}
</script>

<style scoped>

</style>
