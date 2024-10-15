<script setup lang="ts">

const props = defineProps<{
    addTask: () => void,
    newTask: {
        title: string;
        start: string;
        end: string;
    }
}>() 
</script>

<template>
    <div class="mt-8 bg-neutral-900 p-5 rounded-lg max-w-md mx-auto">
        <h3 class="text-xl font-semibold mb-4 text-green-300">Add New Task</h3>
        <form @submit.prevent="addTask" class="space-y-4">
            <div>
                <label for="taskTitle" class="block text-sm font-medium text-gray-300">Task Title</label>
                <input v-model="newTask.title" type="text" id="taskTitle" required
                    class="mt-1 block w-full rounded-md bg-neutral-800 border-gray-700 text-gray-300 focus:border-green-400 focus:outline-none py-2 px-3">
            </div>
            <div>
                <label for="taskStart" class="block text-sm font-medium text-gray-300">Start Date</label>
                <input v-model="newTask.start" type="date" id="taskStart" required
                    class="mt-1 block w-full rounded-md bg-neutral-800 border-gray-700 text-gray-300 focus:border-green-400 focus:outline-none py-2 px-3">
            </div>
            <div>
                <label for="taskEnd" class="block text-sm font-medium text-gray-300">End Date</label>
                <input v-model="newTask.end" type="date" id="taskEnd" required
                    class="mt-1 block w-full rounded-md bg-neutral-800 border-gray-700 text-gray-300 focus:border-green-400 focus:outline-none py-2 px-3">
            </div>
            <button type="submit"
                class="w-full bg-green-400 text-black font-semibold px-4 py-2 rounded hover:bg-green-500 transition-colors">
                Add Task
            </button>
        </form>
    </div>
</template>