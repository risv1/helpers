<script setup lang="ts">
type RefType = {
    label: string,
    type: string,
    ref: Ref<string>,
}

const props = defineProps<{
    refs: Array<RefType>,
    onSubmit: (e: Event) => void,
    toggle: () => void,
    toggleText: string
}>()

const { darkMode } = useTheme()

const passwordsMatch = computed(() => {
    const passwordRef = props.refs.find(r => r.label === "Password")
    const verifyPasswordRef = props.refs.find(r => r.label === "Confirm Password")
    return !verifyPasswordRef || passwordRef?.ref.value === verifyPasswordRef?.ref.value
})

const passwordWarning = computed(() => passwordsMatch.value ? '' : "Passwords don't match")
</script>

<template>
    <form @submit="props.onSubmit" class="w-full h-full bg-inherit flex flex-col items-center gap-3">
        <label v-for="ref in props.refs" :key="props.refs.indexOf(ref)" class="w-full flex flex-col items-start gap-1">
            <span :class="darkMode ? 'text-gray-400' : 'text-gray-600'">{{ ref.label }}</span>
            <input v-model="ref.ref.value" :type="ref.type" 
                class="w-full focus:outline-none px-4 py-2 rounded-md"
                :class="[
                    darkMode ? 'text-white bg-neutral-800 border-neutral-800 focus:border-green-400' : 'text-gray-900 bg-gray-200 border-gray-300 focus:border-green-600',
                    { 'border-red-500': ref.label === 'Confirm Password' && !passwordsMatch }
                ]" />
        </label>
        <p v-if="!passwordsMatch" class="text-red-500 text-sm mt-1">{{ passwordWarning }}</p>
        <button class="w-full font-semibold py-2 rounded-md mt-3" 
            :class="darkMode ? 'bg-green-400 text-black hover:bg-green-500' : 'bg-green-600 text-white hover:bg-green-700'"
            :disabled="!passwordsMatch">Submit</button>
        <p @click="props.toggle" class="mt-5 cursor-pointer hover:underline" 
            :class="darkMode ? 'text-green-400' : 'text-green-600'">{{ toggleText }}</p>
    </form>
</template>