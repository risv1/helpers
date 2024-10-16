<script setup lang="ts">
const savedLinks = ref([
    { title: 'GitHub', url: 'https://github.com' },
    { title: 'Stack Overflow', url: 'https://stackoverflow.com' },
    { title: 'MDN Web Docs', url: 'https://developer.mozilla.org' },
])

const { darkMode } = useTheme()
</script>

<template>
    <div class="rounded-lg p-6" :class="darkMode ? 'bg-neutral-900' : 'bg-white'">
        <h2 class="text-2xl font-semibold mb-4" :class="darkMode ? 'text-green-300' : 'text-green-600'">Saved Links</h2>
        <ul class="space-y-2">
            <li v-for="link in savedLinks" :key="link.url">
                <a :href="link.url" target="_blank" rel="noopener noreferrer"
                    class="hover:underline" :class="darkMode ? 'text-blue-400' : 'text-blue-600'">
                    {{ link.title }}
                </a>
            </li>
        </ul>
    </div>
</template>