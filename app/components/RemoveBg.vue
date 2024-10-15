<script setup lang="ts">

const props = defineProps<{
    handleImageUpload: (event: Event) => void;
    removeBackground: () => void;
}>()
</script>

<template>

<section class="w-full max-w-3xl bg-neutral-950 rounded-lg p-8 mb-8">
            <h2 class="text-2xl font-semibold mb-4 text-green-300 flex items-center">
                <Icon name="uil:image-edit" class="mr-2" /> Remove Background
            </h2>
            <p class="text-gray-400 mb-6">
                Remove backgrounds from your images with our advanced AI-powered tool. Perfect for product photos,
                portraits, and more.
            </p>
            <div class="flex flex-col gap-4">
                <label class="block">
                    <span class="text-gray-300">Upload image:</span>
                    <input type="file" accept="image/*" @change="handleImageUpload" class="mt-1 block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-green-50 file:text-green-700
            hover:file:bg-green-100
          " />
                </label>
                <button @click="removeBackground"
                    class="bg-green-400 font-semibold text-black px-4 py-2 rounded hover:bg-green-500 transition-colors">
                    Remove Background
                </button>
            </div>
        </section>
</template>