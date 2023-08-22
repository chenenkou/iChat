<template>
    <div v-if="showTooltip">
        <n-tooltip :placement="placement" trigger="hover">
            <template #trigger>
                <button
                    class="flex items-center justify-center w-10 h-10 transition rounded-full hover:bg-neutral-100 dark:hover:bg-[#414755]"
                    @click="handleClick"
                >
                    <slot />
                </button>
            </template>
            {{ tooltip }}
        </n-tooltip>
    </div>
    <div v-else>
        <button
            class="flex items-center justify-center w-10 h-10 transition rounded-full hover:bg-neutral-100 dark:hover:bg-[#414755]"
            @click="handleClick"
        >
            <slot />
        </button>
    </div>
</template>

<script>
export default {
    name: "MHoverButton",
    props: {
        tooltip: {
            type: String,
            default: ""
        },
        placement: {
            type: String,
            default: "top"
        }
    },
    computed: {
        showTooltip() {
            return this.tooltip !== ""
        }
    },
    methods: {
        handleClick() {
            this.$emit("click")
        }
    }
}
</script>

<style scoped>

</style>
