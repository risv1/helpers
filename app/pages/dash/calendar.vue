<script setup lang="ts">

definePageMeta({
  middleware: ['auth']
})

const {
    daysOfWeek,
    currentWeek,
    currentMonthYear,
    previousWeek,
    nextWeek,
    formatDate,
    isCurrentDay,
    getTasksForDay,
    getTaskDuration
} = useDate()

const {
    tasks,
    newTask,
    addTask
} = useTasks()

const { darkMode } = useTheme()
</script>

<template>
    <main class="w-screen h-screen max-w-7xl mx-auto p-8" :class="darkMode ? 'bg-neutral-950 text-gray-300' : 'bg-gray-100 text-gray-900'">
    <h1 class="text-3xl font-bold mb-6" :class="darkMode ? 'text-green-300' : 'text-green-600'">Calendar</h1>
    <div class="flex justify-between items-center mb-4">
      <button @click="previousWeek"
        :class="[
          'font-semibold px-4 py-2 rounded transition-colors',
          darkMode ? 'bg-green-400 text-black hover:bg-green-500' : 'bg-green-600 text-white hover:bg-green-600'
        ]">
        Previous Week
      </button>
      <h2 class="text-xl font-semibold">{{ currentMonthYear }}</h2>
      <button @click="nextWeek"
        :class="[
          'font-semibold px-4 py-2 rounded transition-colors',
          darkMode ? 'bg-green-400 text-black hover:bg-green-500' : 'bg-green-600 text-white hover:bg-green-600'
        ]">
        Next Week
      </button>
    </div>
    <div class="grid grid-cols-7 gap-4">
      <div v-for="day in daysOfWeek" :key="day" 
        :class="[
          'text-center font-semibold py-2 rounded-md',
          darkMode ? 'bg-neutral-800' : 'bg-gray-200'
        ]">
        {{ day }}
      </div>
      <div v-for="(day, index) in currentWeek" :key="index" 
        :class="[
          'border min-h-[200px] relative',
          darkMode ? 'border-gray-700' : 'border-gray-300'
        ]">
        <div :class="[
          'absolute top-0 left-0 w-full px-2 py-1',
          darkMode ? 'bg-neutral-800' : 'bg-gray-200'
        ]">
          {{ formatDate(day) }}
        </div>
        <div class="mt-8 px-2">
          <div v-for="task in getTasksForDay(day, tasks)" :key="task.id"
            :class="[
              'p-2 mb-2 rounded text-sm',
              { 'bg-green-800': isCurrentDay(day) && darkMode, 'bg-green-200': isCurrentDay(day) && !darkMode }
            ]"
            :style="{ gridColumn: `span ${getTaskDuration(task)}` }">
            {{ task.title }}
          </div>
        </div>
      </div>
    </div>
    <AddTask :newTask="newTask" :addTask="addTask" />
  </main>
</template>
