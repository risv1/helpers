<script setup lang="ts">
const props = defineProps<{
    convertTo: string;
    handleFileChange: (event: Event) => void;
    convertFile: () => void;
}>()

const { darkMode } = useTheme()
</script>

<template>
    <section id="fileconv" class="w-full max-w-3xl rounded-lg p-8 mb-8" :class="darkMode ? 'bg-neutral-950' : 'bg-white'">
        <h2 class="text-2xl font-semibold mb-4 flex items-center" :class="darkMode ? 'text-green-300' : 'text-green-600'">
            <Icon name="uil:file-alt" class="mr-2" /> File Converter
        </h2>
        <p class="mb-6" :class="darkMode ? 'text-gray-400' : 'text-gray-600'">
            Convert your files between various formats quickly and easily. Support for PDF, DOCX, XLSX, and more.
        </p>
        <div class="flex flex-col gap-4">
            <label class="block">
                <span :class="darkMode ? 'text-gray-300' : 'text-gray-700'">Select file to convert:</span>
                <input type="file" @change="handleFileChange" class="mt-1 block w-full text-sm file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0 file:text-sm file:font-semibold"
                    :class="darkMode ? 'text-gray-400 file:bg-green-800 file:text-green-100 hover:file:bg-green-700' : 
                    'text-gray-500 file:bg-green-50 file:text-green-700 hover:file:bg-green-100'" />
            </label>
            <label class="block">
                <span :class="darkMode ? 'text-gray-300' : 'text-gray-700'">Convert to:</span>
                <select v-on="convertTo" v-bind:ref="convertTo"
                    class="mt-1 focus:outline-none block w-full rounded-md py-2 px-3"
                    :class="darkMode ? 'bg-neutral-900 border-gray-700 text-gray-300 focus:border-green-400' : 
                    'bg-gray-200 border-gray-300 text-gray-700 focus:border-green-600'">
                    <option value="pdf">PDF</option>
                    <option value="docx">DOCX</option>
                    <option value="ppt">PPT</option>
                </select>
            </label>
            <button @click="convertFile"
                class="font-semibold px-4 py-2 rounded transition-colors"
                :class="darkMode ? 'bg-green-400 text-black hover:bg-green-500' : 'bg-green-600 text-white hover:bg-green-700'">
                Convert File
            </button>
        </div>
    </section>
</template>