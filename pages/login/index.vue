<script setup>
const apiUrl = useRuntimeConfig().public.apiUrl

definePageMeta({
    layout: 'custom',
});

const router = useRouter()

let email = ref('')
let password = ref('')
let errors = ref([])


async function submitForm() {

    errors.value = []

    await $fetch(`${apiUrl}/api/v1/token/login/`, {
        method: 'POST',
        body: {
            username: email.value,
            password: password.value
        }
    }).then(data => {

        useUserStore().setToken(data.auth_token)
        router.push({ path: '/' })
    })
        .catch(error => {
            if (error.response._data) {
                console.log(error.response._data)
                for (const property in error.response._data) {
                    for (const msg in error.response._data[property]) {
                        errors.value.push(`${error.response._data[property][msg]}`)
                    }
                }
            } else if (error.message) {
                errors.value.push('Something went wrong. Please try again')
            }
        })
}

useSeoMeta({
    title: 'Login',
    ogTitle: 'JobHighway: Home',
    description: 'Browse all available jobs and apply!',
})
</script>

<template>
    <form @submit.prevent="submitForm"
        class="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border mb-16">
        <div
            class="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 bg-clip-border shadow-gray-900/20">
            <h3 class="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
                Login
            </h3>
        </div>
        <div class="flex flex-col gap-4 p-6">
            <div class="relative h-11 w-full min-w-[200px]">
                <input @focus="errors = []"
                    class="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" " type="email" v-model="email" required />
                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight 
                    text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l 
                    before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r 
                    after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] 
                    peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight 
                    peer-focus:text-teal-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 
                    peer-focus:before:!border-teal-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 
                    peer-focus:after:!border-teal-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent 
                    peer-disabled:peer-placeholder-shown:text-teal-500">
                    Email
                </label>
            </div>
            <div class="relative h-11 w-full min-w-[200px]">
                <input @focus="errors = []"
                    class="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" " type="password" v-model="password" />
                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight 
                    text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l 
                    before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r 
                    after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] 
                    peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight 
                    peer-focus:text-teal-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 
                    peer-focus:before:!border-teal-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 
                    peer-focus:after:!border-teal-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent 
                    peer-disabled:peer-placeholder-shown:text-teal-500">
                    Password
                </label>
            </div>
            <div class="relative h-11 w-full min-w-[200px]">
                <h3 v-if="errors.length > 0"
                    class="block text-red-500 text-center font-sans text-sm antialiased font-light leading-normal">
                    {{ errors?.join(', ') }}
                </h3>
            </div>
        </div>
        <div class="p-6 pt-0">
            <button
                class="block w-full select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="submit">
                Sign In
            </button>
            <p class="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
                Don't have an account?
                <NuxtLink to="/signup"
                    class="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-teal-500">
                    Sign Up
                </NuxtLink>
            </p>
        </div>
    </form>
</template>