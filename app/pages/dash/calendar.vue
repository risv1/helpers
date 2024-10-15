<template>
    <div class="w-screen h-screen max-w-7xl mx-auto bg-neutral-950 text-gray-300 p-8">
        <h1 class="text-3xl font-bold mb-6 text-green-300">Calendar</h1>
        <div class="flex justify-between items-center mb-4">
            <button @click="previousWeek"
                class="bg-green-400 text-black font-semibold px-4 py-2 rounded hover:bg-green-500 transition-colors">
                Previous Week
            </button>
            <h2 class="text-xl font-semibold">{{ currentMonthYear }}</h2>
            <button @click="nextWeek"
                class="bg-green-400 text-black font-semibold px-4 py-2 rounded hover:bg-green-500 transition-colors">
                Next Week
            </button>
        </div>
        <div class="grid grid-cols-7 gap-4">
            <div v-for="day in daysOfWeek" :key="day" class="text-center font-semibold py-2 bg-neutral-900 rounded-md">
                {{ day }}
            </div>
            <div v-for="(day, index) in currentWeek" :key="index" class="border border-gray-700 min-h-[200px] relative">
                <div class="absolute top-0 left-0 w-full bg-neutral-900 px-2 py-1">
                    {{ formatDate(day) }}
                </div>
                <div class="mt-8 px-2">
                    <div v-for="task in getTasksForDay(day)" :key="task.id"
                        :class="['p-2 mb-2 rounded text-sm', { 'bg-green-800': isCurrentDay(day) }]"
                        :style="{ gridColumn: `span ${getTaskDuration(task)}` }">
                        {{ task.title }}
                    </div>
                </div>
            </div>
        </div>
        <AddTask :newTask="newTask" :addTask="addTask" />
    </div>
</template>

<script setup lang="ts">
import { format, addDays, startOfWeek, endOfWeek, eachDayOfInterval, isSameDay } from 'date-fns'

type Task = {
    id: number;
    title: string;
    start: Date;
    end: Date;
}

const currentDate = ref(new Date())
const tasks = ref<Task[]>([])
const newTask = ref({ title: '', start: '', end: '' })

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const currentWeek = computed(() => {
    const start = startOfWeek(currentDate.value)
    const end = endOfWeek(currentDate.value)
    return eachDayOfInterval({ start, end })
})

const currentMonthYear = computed(() => format(currentDate.value, 'MMMM yyyy'))

const previousWeek = () => {
    currentDate.value = addDays(currentDate.value, -7)
}

const nextWeek = () => {
    currentDate.value = addDays(currentDate.value, 7)
}

const formatDate = (date: Date) => format(date, 'd')

const isCurrentDay = (date: Date) => isSameDay(date, new Date())

const getTasksForDay = (day: Date) => {
    return tasks.value.filter(task =>
        isSameDay(day, task.start) ||
        (day >= task.start && day <= task.end)
    )
}

const addTask = () => {
    const task: Task = {
        id: Date.now(),
        title: newTask.value.title,
        start: new Date(newTask.value.start),
        end: new Date(newTask.value.end)
    }
    tasks.value.push(task)
    newTask.value = { title: '', start: '', end: '' }
}

const getTaskDuration = (task: Task) => {
    const start = startOfWeek(task.start)
    const end = endOfWeek(task.end)
    return eachDayOfInterval({ start: task.start, end: task.end }).length
}
</script>