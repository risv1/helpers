<script setup lang="ts">

definePageMeta({
  middleware: ['auth']
})

const nameRef = ref<string>('')
const emailRef = ref<string>('')
const passwordRef = ref<string>('')
const verifyPasswordRef = ref<string>('')
const { toggle, toggleOn, toggleOff } = useToggle()
const { darkMode } = useTheme()

const signup = [
    {
        label: "Name",
        type: "text",
        ref: nameRef
    },
    {
        label: "Email",
        type: "email",
        ref: emailRef
    },
    {
        label: "Password",
        type: "password",
        ref: passwordRef
    },
    {
        label: "Confirm Password",
        type: "password",
        ref: verifyPasswordRef
    }
]

const login = [
    {
        label: "Email",
        type: "email",
        ref: emailRef
    },
    {
        label: "Password",
        type: "password",
        ref: passwordRef
    }
]

const onSignup = async (e: Event) => {
    e.preventDefault()

    try {
        const res = await $fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nameRef.value,
                email: emailRef.value,
                password: passwordRef.value
            })
        })

        if (res.ok) {
            console.log('Account created successfully')
        }

    } catch (error) {
        console.error(error)
    }
}

const onLogin = async(e: Event) => {
    e.preventDefault()

    try {
        const res = await $fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: emailRef.value,
                password: passwordRef.value
            })
        })

        if (res.ok) {
            console.log('Logged in successfully')
        }

    } catch (error) {
        console.error(error)
    }
}

const toggleText = computed(() => !toggle.value ? "Already have an account? Login here" : "Don't have an account? Signup here")
</script>

<template>
    <main :class="[
        'w-screen h-screen flex justify-center items-center',
        darkMode ? 'bg-neutral-950 text-gray-300' : 'bg-gray-100 text-gray-900'
    ]">
        <section v-if="!toggle" 
            :class="[
                'w-full max-w-md p-8 rounded-lg',
                darkMode ? 'bg-neutral-900' : 'bg-white'
            ]">
            <h1 class="text-2xl font-semibold mb-8">Create Account</h1>
            <Form :refs="signup" :onSubmit="onSignup" :toggle="toggleOn" :toggleText="toggleText" />
        </section>
        <section v-else 
            :class="[
                'w-full max-w-md p-8 rounded-lg',
                darkMode ? 'bg-neutral-900' : 'bg-white'
            ]">
            <h1 class="text-2xl font-semibold mb-8">Welcome Back</h1>
            <Form :refs="login" :onSubmit="onLogin" :toggle="toggleOff" :toggleText="toggleText" />
        </section>
    </main>
</template>