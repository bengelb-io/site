import { onMounted, onUnmounted, ref } from "vue"

export default function useScreenWidth() {
    const width = ref<number>(window.innerWidth)
    const update = (e: UIEvent) => {
        const target: Window = e.target // @ts-ignore
        width.value = target.innerWidth
    }
    onMounted(() => window.addEventListener("resize", update))
    onUnmounted(() => window.removeEventListener("resize", update))
    
    return width
}