<script setup lang="ts">
const { darkMode } = useTheme()

const features = [
    {
        title: "File Converter",
        description: "Convert files between various formats (PDF, DOCX, XLSX, etc.) without leaving your browser.",
        icon: "uil:file-alt",
        path: "/utils/#fileconv"
    },
    {
        title: "QR Code Generator",
        description: "Generate QR codes for links, text, or contact information in just a few clicks.",
        icon: "uil:qrcode-scan",
        path: "/utils/#qrcode"
    },
    {
        title: "Color Palette Generator",
        description: "Create harmonious color schemes for your design projects with our intuitive tool.",
        icon: "uil:palette",
        path: "/utils"
    },
    {
        title: "Remove Background",
        description: "Easily remove backgrounds from images.",
        icon: "uil:image-edit",
        path: "/utils/#removebg"
    },
    {
        title: "Markdown Editor",
        description: "Write and preview Markdown with a user-friendly editor, perfect for documentation and note-taking.",
        icon: "bi:markdown-fill",
        path: "/markdown"
    },
    {
        title: "Screenshot Webpage",
        description: "Capture full-page screenshots of websites by just providing a URL.",
        icon: "bi:camera2",
        path: "/utils/#sspage"
    }
]

</script>

<template>
    <main class="w-screen min-h-screen flex flex-col items-center gap-8 pb-16"
        :class="darkMode ? 'bg-neutral-950 text-gray-300' : 'bg-gray-100 text-gray-900'">
        <div class="flex justify-center flex-col items-center">
            <section class="flex flex-col items-center gap-3">
                <img src="public/images/logo.png" alt="Helper Logo" class="mt-32 mb-4 w-32 h-28" />
                <h1 class="text-2xl font-semibold mb-2">Helpers</h1>
                <p :class="['text-xl font-normal mb-6', darkMode ? 'text-gray-400' : 'text-gray-600']">
                    A site for utils I use on a daily basis.
                </p>
            </section>
            <section :class="['flex flex-row gap-3', darkMode ? 'text-gray-400' : 'text-gray-600']">
                <NuxtLink to="/about" :class="[
                    'text-lg font-semibold hover:underline',
                    darkMode ? 'hover:text-green-300' : 'hover:text-green-700'
                ]">
                    About
                </NuxtLink>
                <NuxtLink to="/utils" :class="[
                    'text-lg font-semibold hover:underline',
                    darkMode ? 'hover:text-green-300' : 'hover:text-green-700'
                ]">
                    Utils
                </NuxtLink>
                <NuxtLink to="/dash" :class="[
                    'text-lg font-semibold hover:underline',
                    darkMode ? 'hover:text-green-300' : 'hover:text-green-700'
                ]">
                    Dashboard
                </NuxtLink>
                <a href="https://github.com/risv1/helpers" target="_blank" :class="[
                    'text-lg font-semibold hover:underline',
                    darkMode ? 'hover:text-green-300' : 'hover:text-green-700'
                ]">
                    GitHub
                </a>
            </section>
        </div>
        <section class="w-full max-w-6xl px-4 mt-5">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <NuxtLink v-for="feature in features" :key="feature.title" :to="feature.path" :class="[
                    'group p-6 rounded-xl transition-all duration-300 hover:scale-[1.02]',
                    darkMode ? 'bg-neutral-900 hover:bg-neutral-800' : 'bg-white hover:bg-gray-50'
                ]">
                    <div class="flex items-start gap-4">
                        <Icon :name="feature.icon" :class="[
                            'w-6 h-6',
                            darkMode ? 'text-green-400 group-hover:text-green-300' : 'text-green-600 group-hover:text-green-700'
                        ]" />
                        <div>
                            <h3 :class="[
                                'text-lg font-semibold mb-2',
                                darkMode ? 'text-green-400 group-hover:text-green-300' : 'text-green-600 group-hover:text-green-700'
                            ]">
                                {{ feature.title }}
                            </h3>
                            <p :class="darkMode ? 'text-gray-400' : 'text-gray-600'">{{ feature.description }}</p>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </section>
        <p :class="[
            'w-fit rounded-full px-4 py-[1px] flex items-center flex-row gap-2',
            darkMode ? 'bg-green-950 text-green-300' : 'bg-green-100 text-green-700'
        ]">
            <Icon name="grommet-icons:test" :color="darkMode ? '#86efac' : '#15803d'" />
            Currently under development
        </p>
    </main>
</template>