<script setup lang="ts">
import { ref, computed } from 'vue'

definePageMeta({
    middleware: ['auth']
})

const currentDate: Date = new Date()

const greeting = computed(() => {
    const hour = currentDate.getHours()
    if (hour < 12) return 'Good Morning'
    if (hour < 18) return 'Good Afternoon'
    return 'Good Evening'
})

const currentTime = computed(() => {
    return currentDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
})
</script>

<template>
    <div class="min-h-screen bg-neutral-950 text-gray-300 p-8">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="col-span-full bg-neutral-900 rounded-lg p-6 flex justify-between items-center">
                <div>
                    <h1 class="text-3xl font-bold text-green-300">{{ greeting }}</h1>
                    <p class="text-xl">{{ currentTime }}</p>
                </div>
                <NuxtLink to="/dash/calendar"
                    class="bg-green-400 text-black font-semibold px-4 py-2 rounded hover:bg-green-500 transition-colors">
                    My Calendar
                </NuxtLink>
            </div>

            <SavedLinks />
            <RecentNews />
            <WeatherWidget />
            <PomodoroTimer />
            <div class="bg-neutral-900 rounded-lg p-6">
                <h2 class="text-2xl font-semibold mb-4 text-green-300">Markdown Preview</h2>
                <p class="text-gray-400 mb-6">
                    Write markdown content and preview it in real-time. Ideal for writing blog posts, documentation, or
                    README files.
                </p>
                <NuxtLink to="/markdown"
                    class="bg-green-400 text-black font-semibold px-4 py-2 rounded hover:bg-green-500 transition-colors">
                    Open Markdown Preview
                </NuxtLink>
            </div>
            <UpcomingEvents />
        </div>
    </div>
</template>