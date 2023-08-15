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
import axios from 'axios'

export default {
    name: "ChatView",
    data() {
        return {
            text: 'hello'
        }
    },
    mounted() {
        let _this = this

        axios.get('http://localhost:3000/api/chats')
            .then(function (response) {
                // 处理成功情况
                console.log(response);
                _this.text = response.data.msg
            })
            .catch(function (error) {
                // 处理错误情况
                console.log(error);
            })
            .then(function () {
                // 总是会执行
            });
    }
}
</script>

<style scoped>

</style>
