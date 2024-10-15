<script setup lang="ts">
const savedLinks = ref([
    { title: 'GitHub', url: 'https://github.com' },
    { title: 'Stack Overflow', url: 'https://stackoverflow.com' },
    { title: 'MDN Web Docs', url: 'https://developer.mozilla.org' },
])
</script>

<template>
    <div class="bg-neutral-900 rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4 text-green-300">Saved Links</h2>
        <ul class="space-y-2">
            <li v-for="link in savedLinks" :key="link.url">
                <a :href="link.url" target="_blank" rel="noopener noreferrer"
                    class="text-blue-400 hover:underline">{{ link.title }}</a>
            </li>
        </ul>
    </div>
</template>