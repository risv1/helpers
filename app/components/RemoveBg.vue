<script setup lang="ts">
const props = defineProps<{
    handleImageUpload: (event: Event) => void;
    removeBackground: () => void;
}>()

const { darkMode } = useTheme()
</script>

<template>
    <section id="removebg" class="w-full max-w-3xl rounded-lg p-8 mb-8" :class="darkMode ? 'bg-neutral-950' : 'bg-white'">
        <h2 class="text-2xl font-semibold mb-4 flex items-center" :class="darkMode ? 'text-green-300' : 'text-green-600'">
            <Icon name="uil:image-edit" class="mr-2" /> Remove Background
        </h2>
        <p class="mb-6" :class="darkMode ? 'text-gray-400' : 'text-gray-600'">
            Remove backgrounds from your images with our advanced AI-powered tool. Perfect for product photos,
            portraits, and more.
        </p>
        <div class="flex flex-col gap-4">
            <label class="block">
                <span :class="darkMode ? 'text-gray-300' : 'text-gray-700'">Upload image:</span>
                <input type="file" accept="image/*" @change="handleImageUpload" 
                    class="mt-1 block w-full text-sm file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0 file:text-sm file:font-semibold"
                    :class="darkMode ? 'text-gray-400 file:bg-green-800 file:text-green-100 hover:file:bg-green-700' : 
                        'text-gray-500 file:bg-green-50 file:text-green-700 hover:file:bg-green-100'" />
            </label>
            <button @click="removeBackground"
                class="font-semibold px-4 py-2 rounded transition-colors"
                :class="darkMode ? 'bg-green-400 text-black hover:bg-green-500' : 'bg-green-600 text-white hover:bg-green-700'">
                Remove Background
            </button>
        </div>
    </section>
</template>