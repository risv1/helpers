<script setup lang="ts">
const { darkMode, toggleTheme } = useTheme()
</script>

<template>
    <div>
        <div class="fixed top-5 right-5" :class="darkMode ? 'text-white' : 'text-black '">
            <button @click="toggleTheme" class="p-2 rounded-full">
                <Icon name="solar:sun-bold" v-if="darkMode" class="w-6 h-6" />
                <Icon name="solar:moon-bold" v-else class="w-6 h-6" />
            </button>
        </div>
        <main class="transition-colors duration-300">
            <slot />
        </main>
    </div>
</template>