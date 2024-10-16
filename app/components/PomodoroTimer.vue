<script setup lang="ts">
const { darkMode } = useTheme()

const timer = ref(25 * 60)
const timerRunning = ref(false)
let timerInterval: ReturnType<typeof setInterval> | null = null

const timerSettings = ref({
    work: 25,
    shortBreak: 5,
    longBreak: 15,
})

const currentMode = ref<'work' | 'shortBreak' | 'longBreak'>('work')

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
    timer.value = timerSettings.value[currentMode.value] * 60
}

const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

const updateSettings = () => {
    resetTimer()
}
</script>

<template>
    <div class="rounded-lg p-6" :class="darkMode ? 'bg-neutral-900' : 'bg-white'">
        <h2 class="text-2xl font-semibold mb-4" :class="darkMode ? 'text-green-300' : 'text-green-600'">Pomodoro Timer</h2>
        <div class="text-center">
            <p class="text-4xl font-bold mb-4" :class="darkMode ? 'text-white' : 'text-gray-800'">{{ formatTime(timer) }}</p>
            <div class="space-x-4 mb-4">
                <button @click="startTimer" :disabled="timerRunning"
                    class="font-semibold px-4 py-2 rounded transition-colors disabled:opacity-50"
                    :class="darkMode ? 'bg-green-400 text-black hover:bg-green-500' : 'bg-green-600 text-white hover:bg-green-700'">
                    Start
                </button>
                <button @click="pauseTimer" :disabled="!timerRunning"
                    class="font-semibold px-4 py-2 rounded transition-colors disabled:opacity-50"
                    :class="darkMode ? 'bg-yellow-400 text-black hover:bg-yellow-500' : 'bg-yellow-600 text-white hover:bg-yellow-700'">
                    Pause
                </button>
                <button @click="resetTimer"
                    class="font-semibold px-4 py-2 rounded transition-colors"
                    :class="darkMode ? 'bg-red-400 text-black hover:bg-red-500' : 'bg-red-600 text-white hover:bg-red-700'">
                    Reset
                </button>
            </div>
            <div class="grid grid-cols-3 gap-4">
                <div v-for="(value, key) in timerSettings" :key="key">
                    <label :for="key" class="block text-sm font-medium" :class="darkMode ? 'text-gray-400' : 'text-gray-600'">
                        {{ key }} (minutes)
                    </label>
                    <input :id="key" v-model.number="timerSettings[key]" type="number" min="1" max="60"
                        class="mt-1 block w-full rounded-md focus:ring-2"
                        :class="darkMode ? 'bg-neutral-800 border-gray-700 text-gray-300 focus:border-green-500 focus:ring-green-500' : 
                        'bg-white border-gray-300 text-gray-700 focus:border-green-600 focus:ring-green-600'"
                        @change="updateSettings">
                </div>
            </div>
        </div>
    </div>
</template>