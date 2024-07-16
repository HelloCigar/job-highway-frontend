<script setup>
const userStore = useUserStore()
</script>

<template>
    <div class="container mx-auto">
        <nav
            class="block w-full max-w-screen-xl px-4 py-2 mx-auto text-white bg-white border shadow-md rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
            <div class="container flex items-center justify-between mx-auto text-blue-gray-900">
                <NuxtLink to="/" class="flex items-center justify-center">
                    <div
                        class="block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased">
                        Job
                    </div>
                    <div
                        class="block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-teal-500 antialiased">
                        Highway
                    </div>
                </NuxtLink>
                <div class="flex items-center gap-x-3">
                    <NuxtLink to="/">
                        <button
                            class="inline-block px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                            type="button">
                            <span>Home</span>
                        </button>
                    </NuxtLink>
                    <NuxtLink to="/browse">
                        <button
                            class="inline-block px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                            type="button">
                            <span>Browse</span>
                        </button>
                    </NuxtLink>
                </div>
            </div>
        </nav>
    </div>
</template>