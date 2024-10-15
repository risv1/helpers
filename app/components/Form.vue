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
            <span class="text-gray-400">{{ ref.label }}</span>
            <input v-model="ref.ref.value" :type="ref.type" class="w-full text-white bg-neutral-900 focus:border-green-400 focus:outline-none border border-neutral-800 px-4 py-2 rounded-md" :class="{ 'border-red-500': ref.label === 'Confirm Password' && !passwordsMatch }" />
        </label>
        <p v-if="!passwordsMatch" class="text-red-500 text-sm mt-1">{{ passwordWarning }}</p>
        <button class="w-full bg-green-400 text-black font-semibold py-2 rounded-md hover:bg-green-500 mt-3" :disabled="!passwordsMatch">Submit</button>
        <p @click="props.toggle" class="mt-5 text-green-400 cursor-pointer hover:underline">{{ toggleText }}</p>
    </form>
</template>