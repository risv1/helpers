<script setup lang="ts">

const props = defineProps<{
    qrCodeContent: string;
    generateQRCode: () => void;
}>()
</script>

<template>
    <section class="w-full max-w-3xl bg-neutral-950 rounded-lg p-8 mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-green-300 flex items-center">
            <Icon name="uil:qrcode-scan" class="mr-2" /> QR Code Generator
        </h2>
        <p class="text-gray-400 mb-6">
            Create QR codes for links, text, or contact information in just a few clicks. Ideal for marketing
            materials, business cards, or event promotions.
        </p>
        <div class="flex flex-col gap-4">
            <label class="block">
                <span class="text-gray-300">Content for QR code:</span>
                <input v-on="qrCodeContent" v-bind:ref="qrCodeContent" type="text" placeholder="Enter URL or text"
                    class="mt-1 block w-full rounded-md py-2 px-3 bg-neutral-900 border-gray-700 text-gray-300 focus:border-green-400 border focus:outline-none" />
            </label>
            <button @click="generateQRCode"
                class="bg-green-400 font-semibold text-black px-4 py-2 rounded hover:bg-green-500 transition-colors">
                Generate QR Code
            </button>
        </div>
    </section>
</template>