<script setup lang="ts">
//todo: integrate news api
const newsItems = ref([
    { id: 1, title: 'New JavaScript Framework Released', summary: 'A revolutionary framework promises to simplify web development.' },
    { id: 2, title: 'AI Breakthrough in Natural Language Processing', summary: 'Researchers achieve human-level performance in language understanding tasks.' },
    { id: 3, title: 'Cybersecurity Alert: Major Vulnerability Discovered', summary: 'Experts urge immediate patching of systems to prevent potential attacks.' },
])
</script>

<template>
    <div class="bg-neutral-900 rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4 text-green-300">Recent News</h2>
        <ul class="space-y-4">
            <li v-for="item in newsItems" :key="item.id" class="border-b border-gray-700 pb-2">
                <h3 class="font-semibold">{{ item.title }}</h3>
                <p class="text-sm text-gray-400">{{ item.summary }}</p>
            </li>
        </ul>
    </div>
</template>