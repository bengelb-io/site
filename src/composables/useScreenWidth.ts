import { ref } from "vue"

export default function useScreenWidth() {
    const [width, height] = [ref<number>(), ref<number>()]

    window.addEventListener("resize", (e) => {
        const target: Window = e.target // @ts-ignore
        width.value = target?.innerWidth
        height.value =  target?.innerHeight
    })
    return [width, height]
}