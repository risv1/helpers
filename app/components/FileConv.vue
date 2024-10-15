<script setup lang="ts">

const props = defineProps<{
    convertTo: string;
    handleFileChange: (event: Event) => void;
    convertFile: () => void;
}>()
</script>

<template>
    <section class="w-full max-w-3xl bg-neutral-950 rounded-lg p-8 mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-green-300 flex items-center">
            <Icon name="uil:file-alt" class="mr-2" /> File Converter
        </h2>
        <p class="text-gray-400 mb-6">
            Convert your files between various formats quickly and easily. Support for PDF, DOCX, XLSX, and more.
        </p>
        <div class="flex flex-col gap-4">
            <label class="block">
                <span class="text-gray-300">Select file to convert:</span>
                <input type="file" @change="handleFileChange" class="mt-1 block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-green-50 file:text-green-700
            hover:file:bg-green-100
          " />
            </label>
            <label class="block">
                <span class="text-gray-300">Convert to:</span>
                <select v-on="convertTo" v-bind:ref="convertTo"
                    class="mt-1 focus:outline-none block w-full rounded-md py-2 px-3 bg-neutral-900 border-gray-700 text-gray-300 focus:border-green-400 ">
                    <option value="pdf">PDF</option>
                    <option value="docx">DOCX</option>
                    <option value="ppt">PPT</option>
                </select>
            </label>
            <button @click="convertFile"
                class="bg-green-400 text-black font-semibold px-4 py-2 rounded hover:bg-green-500 transition-colors">
                Convert File
            </button>
        </div>
    </section>
</template>