<script setup lang="ts">
import { ref } from 'vue';
const open = ref<boolean>(false)
</script>

<template>
    <button @click="open = false;">
       <span class="meteor-icons:chevron-down" />
    </button>
    <slot v-if="open" />
</template>