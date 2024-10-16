<script setup lang="ts">
const props = defineProps<{
    qrCodeContent: string;
    generateQRCode: () => void;
}>()

const { darkMode } = useTheme()
</script>

<template>
    <section id="qrcode" class="w-full max-w-3xl rounded-lg p-8 mb-8" :class="darkMode ? 'bg-neutral-950' : 'bg-white'">
        <h2 class="text-2xl font-semibold mb-4 flex items-center" :class="darkMode ? 'text-green-300' : 'text-green-600'">
            <Icon name="uil:qrcode-scan" class="mr-2" /> QR Code Generator
        </h2>
        <p class="mb-6" :class="darkMode ? 'text-gray-400' : 'text-gray-600'">
            Create QR codes for links, text, or contact information in just a few clicks. Ideal for marketing
            materials, business cards, or event promotions.
        </p>
        <div class="flex flex-col gap-4">
            <label class="block">
                <span :class="darkMode ? 'text-gray-300' : 'text-gray-700'">Content for QR code:</span>
                <input v-on="qrCodeContent" v-bind:ref="qrCodeContent" type="text" placeholder="Enter URL or text"
                    class="mt-1 block w-full rounded-md py-2 px-3 border focus:outline-none"
                    :class="darkMode ? 'bg-neutral-900 border-gray-700 text-gray-300 focus:border-green-400' : 
                    'bg-gray-200     border-gray-300 text-gray-700 focus:border-green-600'" />
            </label>
            <button @click="generateQRCode"
                class="font-semibold px-4 py-2 rounded transition-colors"
                :class="darkMode ? 'bg-green-400 text-black hover:bg-green-500' : 'bg-green-600 text-white hover:bg-green-700'">
                Generate QR Code
            </button>
        </div>
    </section>
</template>