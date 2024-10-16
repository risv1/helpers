
<script setup>
const convertTo = ref('');
const webpageUrl = ref('');
const qrCodeContent = ref('');

const handleFileChange = (event) => {
    console.log('File selected for conversion:', event.target.files[0]);
};

const convertFile = () => {
    console.log('Converting file to:', convertTo.value);
};

const handleImageUpload = (event) => {
    console.log('Image selected for background removal:', event.target.files[0]);
};

const removeBackground = () => {
    console.log('Removing background from uploaded image');
};

const captureWebpage = () => {
    console.log('Capturing screenshot of:', webpageUrl.value);
};

const generateQRCode = () => {
    console.log('Generating QR code for:', qrCodeContent.value);
};

const { darkMode } = useTheme()
</script>

<template>
    <main
        :class="['w-screen min-h-screen flex flex-col items-center gap-8 px-4 py-16', darkMode ? 'bg-neutral-950 text-gray-300' : 'bg-gray-100 text-gray-900']">
        <h1 class="text-4xl font-bold mb-2">Helpers Utils</h1>
        <p :class="['text-xl font-normal mb-6 text-center max-w-2xl', darkMode ? 'text-gray-400' : 'text-gray-600']">
            Simplify your work with our powerful utility tools designed to boost productivity.
        </p>
        <LazyFileConv :convert-file="convertFile" :handle-file-change="handleFileChange" :convert-to="convertTo" />
        <LazyRemoveBg :handle-image-upload="handleImageUpload" :remove-background="removeBackground" />
        <LazyScreenshot :capture-webpage="captureWebpage" :webpage-url="webpageUrl" />
        <LazyQrCode :generate-q-r-code="generateQRCode" :qr-code-content="qrCodeContent" />
        <NuxtLink to="/" :class="[
            'text-lg font-semibold hover:underline mt-8',
            darkMode ? 'text-green-300 hover:text-green-200' : 'text-green-600 hover:text-green-700'
        ]">
            Back to Home
        </NuxtLink>
    </main>
</template>