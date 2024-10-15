<script setup>
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()

const markdownInput = ref(`# Welcome to Markdown Preview

This is a live preview of your Markdown input.

## Features:
1. Real-time rendering  
2. Code block support
3. Dark mode toggle

\`\`\`html
<div>
  <p>Hello, world!</p>
</div>
\`\`\`
Enjoy writing your Markdown!
`)

const renderedContent = ref('')
const errorMessage = ref('')
const darkMode = ref(true)

function renderMarkdown() {
    try {
        renderedContent.value = md.render(markdownInput.value)
        errorMessage.value = ''
    } catch (error) {
        console.error('Error rendering markdown:', error)
        errorMessage.value = error.message
    }
}

function toggleDarkMode() {
    darkMode.value = !darkMode.value
}

onMounted(() => {
    renderMarkdown()
})

watchEffect(() => {
    renderMarkdown()
})
</script>

<template>
    <div
        :class="['min-h-screen p-6 transition-colors duration-300', darkMode ? 'bg-black text-white' : 'bg-white text-gray-900']">
        <div class="max-w-6xl mx-auto">
            <div class="flex justify-between items-center mb-6">
                <h1 class="text-3xl font-bold" :class="darkMode ? 'text-green-400' : 'text-green-600'">Markdown Preview</h1>
                <button @click="toggleDarkMode" class="p-2 rounded-full">
                    <Icon name="solar:sun-bold" v-if="darkMode" class="w-6 h-6" />
                    <Icon name="solar:moon-bold" v-else class="w-6 h-6" />
                </button>
            </div>

            <div v-if="errorMessage"
                class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                <strong class="font-bold">Error: </strong>
                <span class="block sm:inline">{{ errorMessage }}</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="h-full">
                    <h2 class="text-xl font-semibold mb-2" :class="darkMode ? 'text-green-400' : 'text-green-600'">Input</h2>
                    <textarea v-model="markdownInput"
                        class="w-full focus:outline-none h-[calc(100vh-200px)] p-4 border rounded-lg font-mono resize-none"
                        :class="darkMode ? 'bg-neutral-900 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'"
                        placeholder="Enter your Markdown here..."></textarea>
                </div>
                <div class="h-full">
                    <h2 class="text-xl font-semibold mb-2" :class="darkMode ? 'text-green-400' : 'text-green-600'">Preview</h2>
                    <div class="border rounded-lg p-6 h-[calc(100vh-200px)] overflow-auto prose max-w-none"
                        :class="darkMode ? 'bg-neutral-900 text-white border-gray-700 prose-invert' : 'bg-white text-gray-900 border-gray-300'"
                        v-html="renderedContent"></div>
                </div>
            </div>
        </div>
    </div>
</template>
