<script setup>
const userStore = useUserStore()
</script>

<template>
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
                        class="hidden px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                        type="button">
                        <span>Home</span>
                    </button>
                </NuxtLink>
                <NuxtLink to="/browse">
                    <button
                        class="hidden px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                        type="button">
                        <span>Browse</span>
                    </button>
                </NuxtLink>
                <template v-if="userStore.user.isAuthenticated">
                    <NuxtLink to="/myjobs">
                        <button
                            class="hidden px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                            type="button">
                            <span>My Jobs</span>
                        </button>
                    </NuxtLink>
                    <NuxtLink to="/createjob">
                        <button
                            class="hidden px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                            type="button">
                            <span>Create Job</span>
                        </button>
                    </NuxtLink>
                    <NuxtLink to="/login">
                        <button @click="userStore.removeToken()"
                            class="hidden select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                            type="button">
                            <span>Logout</span>
                        </button>
                    </NuxtLink>
                </template>
                <template v-else>
                    <NuxtLink to="/signup">
                        <button
                            class="hidden px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                            type="button">
                            <span>Register</span>
                        </button>
                    </NuxtLink>
                    <NuxtLink to="/login">
                        <button
                            class="hidden select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                            type="button">
                            <span>Login</span>
                        </button>
                    </NuxtLink>
                </template>
            </div>
        </div>
    </nav>
</template>