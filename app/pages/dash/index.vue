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

const { darkMode } = useTheme()

</script>

<template>
    <main :class="['min-h-screen p-8', darkMode ? 'bg-neutral-950 text-gray-300' : 'bg-gray-100 text-gray-900']">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div :class="[
        'col-span-full rounded-lg p-6 flex justify-between items-center',
        darkMode ? 'bg-neutral-900' : 'bg-white'
      ]">
        <div>
          <h1 :class="['text-3xl font-bold', darkMode ? 'text-green-400' : 'text-green-600']">{{ greeting }}</h1>
          <p class="text-xl">{{ currentTime }}</p>
        </div>
        <div class="flex items-center flex-row gap-5">
          <NuxtLink to="/dash/calendar"
            :class="[
              'font-semibold px-4 py-2 rounded transition-colors',
              darkMode ? 'bg-green-400 text-black hover:bg-green-500' : 'bg-green-600 text-white hover:bg-green-600'
            ]">
            My Calendar
          </NuxtLink>
        </div>
      </div>

      <SavedLinks />
      <RecentNews />
      <WeatherWidget />
      <PomodoroTimer />
      <div :class="['rounded-lg p-6', darkMode ? 'bg-neutral-900' : 'bg-white']">
        <h2 :class="['text-2xl font-semibold mb-4', darkMode ? 'text-green-400' : 'text-green-600']">Markdown Preview</h2>
        <p :class="darkMode ? 'text-gray-400' : 'text-gray-600'">
          Write markdown content and preview it in real-time. Ideal for writing blog posts, documentation, or
          README files.
        </p>
        <NuxtLink to="/markdown"
          :class="[
            'mt-6 inline-block font-semibold px-4 py-2 rounded transition-colors',
            darkMode ? 'bg-green-400 text-black hover:bg-green-500' : 'bg-green-600 text-white hover:bg-green-600'
          ]">
          Open Markdown Preview
        </NuxtLink>
      </div>
      <UpcomingEvents />
    </div>
  </main>
</template>