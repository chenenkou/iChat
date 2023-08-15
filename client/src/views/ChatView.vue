<template>
    <div class="chat-view">
        <h1>Chat View</h1>
        <p>
            <n-button type="primary">
                {{ text }}
            </n-button>
        </p>
    </div>
</template>

<script>
import request from "../utils/request"

export default {
    name: "ChatView",
    data() {
        return {
            text: 'hello'
        }
    },
    mounted() {
        request({
            url: '/chats',
            method: 'get'
        })
            .then(response => {
                // 处理成功情况
                console.log(response);
                this.text = response.msg
            })
            .catch(error => {
                // 处理错误情况
                console.log(error);
            })
            .then(() => {
                // 总是会执行
            });

    }
}
</script>

<style scoped>

</style>
