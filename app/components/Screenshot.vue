<script setup lang="ts">
const props = defineProps<{
    webpageUrl: string;
    captureWebpage: () => void;
}>()
</script>

<template>
    <section class="w-full max-w-3xl bg-neutral-950 rounded-lg p-8 mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-green-300 flex items-center">
            <Icon name="bi:camera2" class="mr-2" /> Screenshot Webpage
        </h2>
        <p class="text-gray-400 mb-6">
            Capture full-page screenshots of any website by simply entering its URL. Great for research, design
            inspiration, or archiving.
        </p>
        <div class="flex flex-col gap-4">
            <label class="block">
                <span class="text-gray-300">Webpage URL:</span>
                <input type="url" placeholder="https://example.com"
                    class="mt-1 block w-full rounded-md py-2 px-3 bg-neutral-900 focus:outline-none border-gray-700 text-gray-300 focus:border-green-400 border" v-on="webpageUrl" v-bind:ref="webpageUrl" />
            </label>
            <button @click="captureWebpage"
                class="bg-green-400 font-semibold text-black px-4 py-2 rounded hover:bg-green-500 transition-colors">
                Capture Screenshot
            </button>
        </div>
    </section>
</template>