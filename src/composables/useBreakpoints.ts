import { onMounted, onUnmounted, ref } from 'vue'

export default function useBreakpoints() {
  const windowWidth = ref(window.innerWidth)

  const onWidthChange = (data: any) => {
    windowWidth.value = data.currentTarget.innerWidth
  }

  onMounted(() => window.addEventListener('resize', onWidthChange))
  onUnmounted(() => window.removeEventListener('resize', onWidthChange))

  return { windowWidth }
}
