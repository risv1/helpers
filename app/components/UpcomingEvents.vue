<script setup lang="ts">
const upcomingEvents = ref([
    { date: '2024-10-16', title: 'Team Meeting', time: '10:00 AM' },
    { date: '2024-10-17', title: 'Project Deadline', time: '5:00 PM' },
    { date: '2024-10-18', title: 'Lunch with Client', time: '12:30 PM' },
    { date: '2024-10-20', title: 'Conference Call', time: '2:00 PM' },
])
</script>

<template>
    <div class="bg-neutral-900 rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4 text-green-300">This Week</h2>
        <ul class="space-y-2">
            <li v-for="event in upcomingEvents" :key="event.date + event.title" class="flex justify-between items-center">
                <div>
                    <p class="font-semibold">{{ event.title }}</p>
                    <p class="text-sm text-gray-400">{{ event.date }}</p>
                </div>
                <p class="text-sm">{{ event.time }}</p>
            </li>
        </ul>
    </div>
</template>