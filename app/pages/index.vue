<template>
    <main class="w-screen h-screen bg-black text-gray-300 flex flex-col items-center gap-3">
        <img src="public/image.png" alt="Helper Logo" class="mt-32 mb-4 w-32 h-28" />
        <h1 class="text-2xl font-semibold mb-2">Helpers</h1>
        <p class="text-xl font-normal mb-6 text-gray-400">A site for utils I use on a daily basis.</p>
        <p class="w-fit rounded-full bg-green-950 text-green-300 px-4 py-[1px] flex items-center flex-row gap-2">
            <Icon name="grommet-icons:test" color="#86efac" />Currently under development
        </p>
        <section class="flex flex-row gap-3 text-gray-400">
            <NuxtLink to="/about" class="text-lg font-semibold hover:text-green-300 hover:underline">About</NuxtLink>
            <a href="https://github.com/risv1/helpers" target="_blank" class="text-lg font-semibold hover:text-green-300 hover:underline">GitHub</a>
        </section>
    </main>
</template>
