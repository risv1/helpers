<script setup lang="ts">
//todo: integrate weather api
const weather = ref({
    current: {
        temperature: 22,
        condition: 'Partly Cloudy',
        icon: 'uil:cloud-sun',
    },
    location: 'Chennai, India',
    forecast: [
        { day: 'Tomorrow', temp: 24, condition: 'Sunny', icon: 'uil:sun' },
        { day: 'Wednesday', temp: 23, condition: 'Cloudy', icon: 'uil:cloud' },
        { day: 'Thursday', temp: 21, condition: 'Rainy', icon: 'uil:cloud-rain' },
    ]
})

const { darkMode } = useTheme()
</script>

<template>
    <div class="rounded-lg p-6" :class="darkMode ? 'bg-neutral-900' : 'bg-white'">
        <h2 class="text-2xl font-semibold mb-4" :class="darkMode ? 'text-green-300' : 'text-green-600'">Weather</h2>
        <div class="flex items-center justify-between mb-4">
            <div>
                <p class="text-4xl font-bold" :class="darkMode ? 'text-white' : 'text-gray-800'">{{ weather.current.temperature }}°C</p>
                <p class="text-xl" :class="darkMode ? 'text-gray-300' : 'text-gray-700'">{{ weather.current.condition }}</p>
            </div>
            <Icon :name="weather.current.icon" class="text-6xl text-yellow-400" />
        </div>
        <p class="mb-4 text-sm" :class="darkMode ? 'text-gray-400' : 'text-gray-600'">{{ weather.location }}</p>
        <h3 class="text-lg font-semibold mb-2" :class="darkMode ? 'text-white' : 'text-gray-800'">Upcoming Days</h3>
        <div class="grid grid-cols-3 gap-2">
            <div v-for="day in weather.forecast" :key="day.day" class="text-center">
                <p class="font-semibold" :class="darkMode ? 'text-white' : 'text-gray-800'">{{ day.day }}</p>
                <Icon :name="day.icon" class="text-3xl mx-auto" :class="darkMode ? 'text-yellow-400' : 'text-yellow-500'" />
                <p :class="darkMode ? 'text-gray-300' : 'text-gray-700'">{{ day.temp }}°C</p>
            </div>
        </div>
    </div>
</template>