<template>
    <main class="w-screen min-h-screen bg-black text-gray-300 flex flex-col items-center gap-8 px-4 py-16">
        <h1 class="text-4xl font-bold mb-2">Helpers Utils</h1>
        <p class="text-xl font-normal mb-6 text-gray-400 text-center max-w-2xl">
            Simplify your work with our powerful utility tools designed to boost productivity.
        </p>
        <LazyFileConv :convert-file="convertFile" :handle-file-change="handleFileChange" :convert-to="convertTo" />
        <LazyRemoveBg :handle-image-upload="handleImageUpload" :remove-background="removeBackground" />
        <LazyScreenshot :capture-webpage="captureWebpage" :webpage-url="webpageUrl" />
        <LazyQrCode :generate-q-r-code="generateQRCode" :qr-code-content="qrCodeContent" />
        <NuxtLink to="/" class="text-lg font-semibold hover:text-green-300 hover:underline mt-8">
            Back to Home
        </NuxtLink>
    </main>
</template>

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
</script>