<script setup lang="ts">
const props = defineProps<{
    webpageUrl: string;
    captureWebpage: () => void;
}>()

const { darkMode } = useTheme()
</script>

<template>
    <section id="sspage" class="w-full max-w-3xl rounded-lg p-8 mb-8" :class="darkMode ? 'bg-neutral-950' : 'bg-white'">
        <h2 class="text-2xl font-semibold mb-4 flex items-center" :class="darkMode ? 'text-green-300' : 'text-green-600'">
            <Icon name="bi:camera2" class="mr-2" /> Screenshot Webpage
        </h2>
        <p class="mb-6" :class="darkMode ? 'text-gray-400' : 'text-gray-600'">
            Capture full-page screenshots of any website by simply entering its URL. Great for research, design
            inspiration, or archiving.
        </p>
        <div class="flex flex-col gap-4">
            <label class="block">
                <span :class="darkMode ? 'text-gray-300' : 'text-gray-700'">Webpage URL:</span>
                <input type="url" placeholder="https://example.com"
                    class="mt-1 block w-full rounded-md py-2 px-3 focus:outline-none border"
                    :class="darkMode ? 'bg-neutral-900 border-gray-700 text-gray-300 focus:border-green-400' : 
                        'bg-gray-200 border-gray-300 text-gray-700 focus:border-green-600'"
                    v-on="webpageUrl" v-bind:ref="webpageUrl" />
            </label>
            <button @click="captureWebpage"
                class="font-semibold px-4 py-2 rounded transition-colors"
                :class="darkMode ? 'bg-green-400 text-black hover:bg-green-500' : 'bg-green-600 text-white hover:bg-green-700'">
                Capture Screenshot
            </button>
        </div>
    </section>
</template>