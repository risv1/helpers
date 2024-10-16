<script setup lang="ts">

const props = defineProps<{
    addTask: () => void,
    newTask: {
        title: string;
        start: string;
        end: string;
    }
}>() 

const { darkMode } = useTheme()
</script>

<template>
    <div class="mt-8 p-5 rounded-lg max-w-md mx-auto" :class="darkMode ? 'bg-neutral-900' : 'bg-white'">
        <h3 class="text-xl font-semibold mb-4" :class="darkMode ? 'text-green-400' : 'text-green-600'">Add New Task</h3>
        <form @submit.prevent="addTask" class="space-y-4">
            <div>
                <label for="taskTitle" class="block text-sm font-medium" :class="darkMode ? 'text-gray-300' : 'text-gray-900'">Task Title</label>
                <input v-model="newTask.title" type="text" id="taskTitle" required
                    class="mt-1 block w-full rounded-md focus:outline-none py-2 px-3" 
                    :class="darkMode ? 'bg-neutral-800 border-gray-700 text-gray-300 focus:border-green-400' : 'bg-gray-200 border-gray-500 text-gray-900 focus:border-green-600'">
            </div>
            <div>
                <label for="taskStart" class="block text-sm font-medium" :class="darkMode ? 'text-gray-300' : 'text-gray-900'">Start Date</label>
                <input v-model="newTask.start" type="date" id="taskStart" required
                    class="mt-1 block w-full rounded-md  focus:outline-none py-2 px-3"
                    :class="darkMode ? 'bg-neutral-800 border-gray-700 text-gray-300 focus:border-green-400' : 'bg-gray-200 border-gray-500 text-gray-900 focus:border-green-600'">
            </div>
            <div>
                <label for="taskEnd" class="block text-sm font-medium text-gray-300">End Date</label>
                <input v-model="newTask.end" type="date" id="taskEnd" required
                    class="mt-1 block w-full rounded-md focus:outline-none py-2 px-3"
                    :class="darkMode ? 'bg-neutral-800 border-gray-700 text-gray-300 focus:border-green-400' : 'bg-gray-200 border-gray-500 text-gray-900 focus:border-green-600'">
            </div>
            <button type="submit"
                class="w-full font-semibold px-4 py-2 rounded hover:bg-green-500 transition-colors"
                :class="darkMode ? 'bg-green-400 text-black' : 'bg-green-600 text-white'">
                Add Task
            </button>
        </form>
    </div>
</template>