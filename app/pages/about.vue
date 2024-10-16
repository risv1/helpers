<script setup>
const features = [
  {
    name: "Save Links",
    icon: "uil:link",
    description: "Organize and save your important article and video links in one convenient place."
  },
  {
    name: "File Converter",
    icon: "uil:file-alt",
    description: "Convert files between various formats (PDF, DOCX, XLSX, etc.) without leaving your browser."
  },
  {
    name: "QR Code Generator",
    icon: "uil:qrcode-scan",
    description: "Generate QR codes for links, text, or contact information in just a few clicks."
  },
  {
    name: "Color Palette Generator",
    icon: "uil:palette",
    description: "Create harmonious color schemes for your design projects with our intuitive tool."
  },
  {
    name: "Remove Background",
    icon: "uil:image-edit",
    description: "Easily remove backgrounds from images."
  },
  {
    name: "Markdown Editor",
    icon: "bi:markdown-fill",
    description: "Write and preview Markdown with a user-friendly editor, perfect for documentation and note-taking."
  },
  {
    name: "Event Scheduler",
    icon: "bi:calendar-event",
    description: "Create and manage calendar events, reminders, and tasks",
  },
  {
    name: "Screenshot Webpage",
    icon: "bi:camera2",
    description: "Capture full-page screenshots of websites by just providing a URL.",
  },
  {
    name: "Pomodoro Timer",
    icon: "bi:clock-fill",
    description: "Stay focused and productive with our Pomodoro timer that helps you manage your time effectively."
  }
];

const { darkMode } = useTheme()
</script>

<template>
  <main
    :class="['w-screen min-h-screen flex flex-col items-center gap-6 px-4 py-16', darkMode ? 'bg-neutral-950 text-gray-300' : 'bg-gray-100 text-gray-900']">
    <h1 class="text-3xl font-semibold mb-2">About Helpers</h1>
    <p :class="['text-xl font-normal mb-6 text-center max-w-2xl', darkMode ? 'text-gray-400' : 'text-gray-600']">
      Helpers is a collection of utility tools designed to simplify your daily tasks and boost productivity.
    </p>

    <section class="w-full max-w-2xl">
      <h2 :class="['text-2xl font-semibold mb-4', darkMode ? 'text-green-300' : 'text-green-600']">Our Features</h2>
      <ul class="space-y-6">
        <li v-for="feature in features" :key="feature.name" class="flex items-start gap-4">
          <Icon :name="feature.icon" :class="darkMode ? 'text-green-300' : 'text-green-600'" class="w-6 h-6 mt-1" />
          <div>
            <h3 :class="['text-lg font-semibold', darkMode ? 'text-green-100' : 'text-green-700']">{{ feature.name }}
            </h3>
            <p :class="darkMode ? 'text-gray-400' : 'text-gray-600'">{{ feature.description }}</p>
          </div>
        </li>
      </ul>
    </section>

    <p :class="[
      'w-fit rounded-full px-4 flex items-center flex-row gap-2 mt-8',
      darkMode ? 'bg-green-950 text-green-300' : 'bg-green-100 text-green-700'
    ]">
      <Icon name="grommet-icons:test" :color="darkMode ? '#86efac' : '#15803d'" />
      More features will be added as soon as I can think of them 🥸
    </p>

    <NuxtLink to="/" :class="[
      'text-lg font-semibold hover:underline mt-8',
      darkMode ? 'text-green-300 hover:text-green-200' : 'text-green-600 hover:text-green-700'
    ]">
      Back to Home
    </NuxtLink>
  </main>

</template>