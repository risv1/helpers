<script setup lang="ts">

const currentDate = new Date()

const greeting = computed(() => {
    const hour = currentDate.getHours()
    if (hour < 12) return 'Good Morning'
    if (hour < 18) return 'Good Afternoon'
    return 'Good Evening'
})

const currentTime = computed(() => {
    return currentDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
})

const savedLinks = ref([
    { title: 'GitHub', url: 'https://github.com' },
    { title: 'Stack Overflow', url: 'https://stackoverflow.com' },
    { title: 'MDN Web Docs', url: 'https://developer.mozilla.org' },
])

//todo: integrate news api
const newsItems = ref([
    { id: 1, title: 'New JavaScript Framework Released', summary: 'A revolutionary framework promises to simplify web development.' },
    { id: 2, title: 'AI Breakthrough in Natural Language Processing', summary: 'Researchers achieve human-level performance in language understanding tasks.' },
    { id: 3, title: 'Cybersecurity Alert: Major Vulnerability Discovered', summary: 'Experts urge immediate patching of systems to prevent potential attacks.' },
])

//todo: integrate weather api
const weather = ref({
    temperature: 22,
    condition: 'Partly Cloudy',
    icon: 'uil:cloud-sun',
    location: 'Chennai, India',
})

const quickNote = ref('')

const saveNote = () => {
    console.log('Note saved:', quickNote.value)
}

const timer = ref(25 * 60)
const timerRunning = ref(false)
let timerInterval: ReturnType<typeof setInterval> | null = null

const startTimer = () => {
    if (!timerRunning.value) {
        timerRunning.value = true
        timerInterval = setInterval(() => {
            if (timer.value > 0) {
                timer.value--
            } else {
                pauseTimer()
            }
        }, 1000)
    }
}

const pauseTimer = () => {
    timerRunning.value = false
    if (timerInterval) {
        clearInterval(timerInterval)
    }
}

const resetTimer = () => {
    pauseTimer()
    timer.value = 25 * 60
}

const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}
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

            <div class="bg-neutral-900 rounded-lg p-6">
                <h2 class="text-2xl font-semibold mb-4 text-green-300">Saved Links</h2>
                <ul class="space-y-2">
                    <li v-for="link in savedLinks" :key="link.url">
                        <a :href="link.url" target="_blank" rel="noopener noreferrer"
                            class="text-blue-400 hover:underline">{{ link.title }}</a>
                    </li>
                </ul>
            </div>

            <div class="bg-neutral-900 rounded-lg p-6">
                <h2 class="text-2xl font-semibold mb-4 text-green-300">Recent News</h2>
                <ul class="space-y-4">
                    <li v-for="item in newsItems" :key="item.id" class="border-b border-gray-700 pb-2">
                        <h3 class="font-semibold">{{ item.title }}</h3>
                        <p class="text-sm text-gray-400">{{ item.summary }}</p>
                    </li>
                </ul>
            </div>

            <div class="bg-neutral-900 rounded-lg p-6">
                <h2 class="text-2xl font-semibold mb-4 text-green-300">Weather</h2>
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-4xl font-bold">{{ weather.temperature }}°C</p>
                        <p class="text-xl">{{ weather.condition }}</p>
                    </div>
                    <Icon :name="weather.icon" class="text-6xl text-yellow-400" />
                </div>
                <p class="mt-2 text-sm text-gray-400">{{ weather.location }}</p>
            </div>

            <div class="bg-neutral-900 rounded-lg p-6">
                <h2 class="text-2xl font-semibold mb-4 text-green-300">Quick Notes</h2>
                <textarea v-model="quickNote"
                    class="w-full h-32 bg-neutral-800 text-gray-300 border-gray-700 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="Type your notes here..."></textarea>
                <button @click="saveNote"
                    class="mt-2 bg-green-400 text-black font-semibold px-4 py-2 rounded hover:bg-green-500 transition-colors">
                    Save Note
                </button>
            </div>

            <div class="bg-neutral-900 rounded-lg p-6">
                <h2 class="text-2xl font-semibold mb-4 text-green-300">Focus Timer</h2>
                <div class="text-center">
                    <p class="text-4xl font-bold mb-4">{{ formatTime(timer) }}</p>
                    <div class="space-x-4">
                        <button @click="startTimer" :disabled="timerRunning"
                            class="bg-green-400 text-black font-semibold px-4 py-2 rounded hover:bg-green-500 transition-colors disabled:opacity-50">
                            Start
                        </button>
                        <button @click="pauseTimer" :disabled="!timerRunning"
                            class="bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-500 transition-colors disabled:opacity-50">
                            Pause
                        </button>
                        <button @click="resetTimer"
                            class="bg-red-400 text-black font-semibold px-4 py-2 rounded hover:bg-red-500 transition-colors">
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>