<template>
    <header class="bg-blue-500 p-4 flex gap-6 justify-between items-center">
        <span class="text-white font-black text-2xl"><RouterLink to="/">Job Lister</RouterLink></span>
        <nav class="flex gap-4">
            <RouterLink to="/list" class="text-white cursor-pointer">Find a job</RouterLink>
            <RouterLink to="/" class="text-white cursor-pointer">Post a job</RouterLink>
        </nav>
        <nav class="flex gap-4">
            <RouterLink to="/list" class="text-white bg-blue-900 cursor-pointer font-medium py-2 px-6 rounded">Sign in</RouterLink>
            <RouterLink to="/list" class="text-white bg-blue-900 cursor-pointer font-medium py-2 px-6 rounded">Create account</RouterLink>
        </nav>
    </header>
</template>