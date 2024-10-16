<script setup lang="ts">
//todo: integrate news api
const newsItems = ref([
    { id: 1, title: 'New JavaScript Framework Released', summary: 'A revolutionary framework promises to simplify web development.' },
    { id: 2, title: 'AI Breakthrough in Natural Language Processing', summary: 'Researchers achieve human-level performance in language understanding tasks.' },
    { id: 3, title: 'Cybersecurity Alert: Major Vulnerability Discovered', summary: 'Experts urge immediate patching of systems to prevent potential attacks.' },
])

const { darkMode } = useTheme()
</script>

<template>
    <div class="rounded-lg p-6" :class="darkMode ? 'bg-neutral-900' : 'bg-white'">
        <h2 class="text-2xl font-semibold mb-4" :class="darkMode ? 'text-green-300' : 'text-green-600'">Recent News</h2>
        <ul class="space-y-4">
            <li v-for="item in newsItems" :key="item.id" class="pb-2" :class="darkMode ? 'border-b border-gray-700' : 'border-b border-gray-200'">
                <h3 class="font-semibold" :class="darkMode ? 'text-white' : 'text-gray-800'">{{ item.title }}</h3>
                <p class="text-sm" :class="darkMode ? 'text-gray-400' : 'text-gray-600'">{{ item.summary }}</p>
            </li>
        </ul>
    </div>
</template>