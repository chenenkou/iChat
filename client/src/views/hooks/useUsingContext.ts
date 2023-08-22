import { computed } from 'vue'
import { useMessage } from 'naive-ui'
// import { t } from '@/locales'
// import { useChatStore } from '@/store'

export function useUsingContext() {
  const ms = useMessage()
  // const chatStore = useChatStore()
  // const usingContext = computed<boolean>(() => chatStore.usingContext)
  const usingContext = {value: true}

  function toggleUsingContext() {
    // chatStore.setUsingContext(!usingContext.value)
    if (usingContext.value)
      // ms.success(t('chat.turnOnContext'))
      ms.success('当前模式下, 发送消息会携带之前的聊天记录')
    else
      // ms.warning(t('chat.turnOffContext'))
      ms.warning('当前模式下, 发送消息不会携带之前的聊天记录')
  }

  return {
    usingContext,
    toggleUsingContext,
  }
}
