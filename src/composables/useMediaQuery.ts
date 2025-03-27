import { computed } from "vue";
import useScreenWidth from "./useScreenWidth";

const breakpoints : {[key: string]: number}= {
    xl: 1280,
    lg: 1024,
    md: 768,
    sm: 640,
}

export default function useMediaQuery() {
    const width = useScreenWidth()
    const media = computed(() => {
        for (const key in breakpoints) {
            const bp = breakpoints[key]
            if(width.value >= bp) {
                return key
            }
        }
        return "xs"
    });
    return media

}