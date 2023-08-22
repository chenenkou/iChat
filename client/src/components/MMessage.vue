<template>
    <div
        ref="messageRef"
        class="flex w-full mb-6 overflow-hidden"
        :class="[{ 'flex-row-reverse': inversion }]"
    >
        <div
            class="flex items-center justify-center flex-shrink-0 h-8 overflow-hidden rounded-full basis-8"
            :class="[inversion ? 'ml-2' : 'mr-2']"
        >
            <div>
                <span v-if="inversion" class="text-[27px]">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" width="1em" height="1em"><path d="M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5z" fill="currentColor"></path><path d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2zm7.992 22.926A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0z" fill="currentColor"></path></svg>
                </span>
                <span v-else class="text-[28px] dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" width="1em" height="1em">
                      <path d="M29.71,13.09A8.09,8.09,0,0,0,20.34,2.68a8.08,8.08,0,0,0-13.7,2.9A8.08,8.08,0,0,0,2.3,18.9,8,8,0,0,0,3,25.45a8.08,8.08,0,0,0,8.69,3.87,8,8,0,0,0,6,2.68,8.09,8.09,0,0,0,7.7-5.61,8,8,0,0,0,5.33-3.86A8.09,8.09,0,0,0,29.71,13.09Zm-12,16.82a6,6,0,0,1-3.84-1.39l.19-.11,6.37-3.68a1,1,0,0,0,.53-.91v-9l2.69,1.56a.08.08,0,0,1,.05.07v7.44A6,6,0,0,1,17.68,29.91ZM4.8,24.41a6,6,0,0,1-.71-4l.19.11,6.37,3.68a1,1,0,0,0,1,0l7.79-4.49V22.8a.09.09,0,0,1,0,.08L13,26.6A6,6,0,0,1,4.8,24.41ZM3.12,10.53A6,6,0,0,1,6.28,7.9v7.57a1,1,0,0,0,.51.9l7.75,4.47L11.85,22.4a.14.14,0,0,1-.09,0L5.32,18.68a6,6,0,0,1-2.2-8.18Zm22.13,5.14-7.78-4.52L20.16,9.6a.08.08,0,0,1,.09,0l6.44,3.72a6,6,0,0,1-.9,10.81V16.56A1.06,1.06,0,0,0,25.25,15.67Zm2.68-4-.19-.12-6.36-3.7a1,1,0,0,0-1.05,0l-7.78,4.49V9.2a.09.09,0,0,1,0-.09L19,5.4a6,6,0,0,1,8.91,6.21ZM11.08,17.15,8.38,15.6a.14.14,0,0,1-.05-.08V8.1a6,6,0,0,1,9.84-4.61L18,3.6,11.61,7.28a1,1,0,0,0-.53.91ZM12.54,14,16,12l3.47,2v4L16,20l-3.47-2Z" fill="currentColor" />
                    </svg>
                  </span>
            </div>
        </div>
        <div class="overflow-hidden text-sm " :class="[inversion ? 'items-end' : 'items-start']">
            <p class="text-xs text-[#b4bbc4]" :class="[inversion ? 'text-right' : 'text-left']">
                {{ dateTime }}
            </p>
            <div
                class="flex items-end gap-1 mt-2"
                :class="[inversion ? 'flex-row-reverse' : 'flex-row']"
            >
                <div class="text-black text-wrap min-w-[20px] rounded-md px-3 py-2" :class="[inversion ? 'bg-[#d2f9d1] dark:bg-[#a1dc95] message-request' : 'bg-[#f4f6f8] dark:bg-[#1e1e20] message-reply', { 'text-red-500': error }]">
                    <div ref="textRef" class="leading-relaxed break-words">
                        <div v-if="!inversion">
                            <div v-if="!asRawText" class="markdown-body" v-html="text" />
                            <div v-else class="whitespace-pre-wrap" v-text="text" />
                        </div>
                        <div v-else class="whitespace-pre-wrap" v-text="text" />
                        <template v-if="loading">
                            <span class="dark:text-white w-[4px] h-[20px] block animate-blink" />
                        </template>
                    </div>
                </div>
                <div class="flex flex-col">
                    <button
                        v-if="!inversion"
                        class="mb-2 transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-300"
                    >
                        <Icon icon="ri:restart-line" />
                    </button>
                    <n-dropdown
                        :trigger="false ? 'click' : 'hover'"
                        :placement="!inversion ? 'right' : 'left'"
                        :options="options"
                    >
                        <button class="transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200">
                            <Icon icon="ri:more-2-fill" />
                        </button>
                    </n-dropdown>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { h } from 'vue'
import { Icon } from '@iconify/vue'

export default {
    name: "MMessage",
    components: {
        Icon,
    },
    props: {
        dateTime: {
            type: String,
            default: "",
        },
        text: {
            type: String,
            default: "",
        },
        inversion: {
            type: Boolean,
            default: false,
        },
        error: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        asRawText: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        options() {
            const common = [
                {
                    label: '复制',
                    key: 'copyText',
                    icon: () => h(Icon, { icon: 'ri:file-copy-2-line' }),
                },
                {
                    label: '删除',
                    key: 'delete',
                    icon: () => h(Icon, { icon: 'ri:delete-bin-line' }),
                },
            ]

            if (!this.inversion) {
                common.unshift({
                    label: '预览/原文',
                    key: 'toggleRenderType',
                    icon: () => h(Icon, { icon: true ? 'ic:outline-code-off' : 'ic:outline-code' }),
                })
            }

            return common
        },
    },
}
</script>

<style scoped>

</style>
