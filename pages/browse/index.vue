<script setup>
//Search Query
let queryRef = ref('')
let query = ''
const apiUrl = useRuntimeConfig().public.apiUrl
const loaded = ref(true)

const { data: jobCategories, status: status } = await useFetch(`${apiUrl}/api/v1/jobs/categories/`)
let selectedCategoriesRef = ref('')
let selectedCategories = []

let { data: jobs } = await useFetch(`${apiUrl}/api/v1/jobs/`, {
    query: {
        query: queryRef,
        categories: selectedCategoriesRef
    },
    onResponse({ request, response }) {
        if (response.status === 200) {
            loaded.value = true
        }
    }
})


function performSearch() {
    loaded.value = false
    if (query === '') {
        loaded.value = true
    }
    queryRef.value = query
}


useSeoMeta({
    title: 'Browse Jobs',
    ogTitle: 'Browse Jobs',
    description: 'Browse all available jobs and apply!',
})



function toggleCategory(id) {
    const index = selectedCategories.indexOf(id)

    if (index === -1) {
        selectedCategories.push(id)
    } else {
        selectedCategories.splice(index, 1)
    }
    loaded.value = false
    selectedCategoriesRef.value = selectedCategories.join(',')
}

</script>


<template>
    <div class="flex flex-col md:grid md:grid-cols-12 md:gap-3 md:py-10">
        <div class="flex justify-start md:col-span-4">
            <div
                class="sticky top-0 md:relative flex w-full md:max-w-[22rem] mb-6 md:my-0 flex-col md:rounded-xl bg-white bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5">
                <div class="hidden md:flex items-center gap-4 p-4 mb-2">
                    <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="brand" class="w-8 h-8" />
                    <h5
                        class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        All jobs
                    </h5>
                </div>
                <div class="p-2">
                    <div class="relative h-10 w-full min-w-[200px]">
                        <div
                            class="absolute grid w-5 h-5 top-2/4 right-3 -translate-y-2/4 place-items-center text-blue-gray-500">
                            <button @click="performSearch">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                        <input @keyup="performSearch"
                            class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder="" v-model="query" />
                        <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight 
                        text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l 
                        before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r 
                        after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] 
                        peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight 
                        peer-focus:text-teal-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 
                        peer-focus:before:!border-teal-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 
                        peer-focus:after:!border-teal-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent 
                        peer-disabled:peer-placeholder-shown:text-teal-500">
                            Search for jobs
                        </label>
                    </div>
                </div>
                <nav
                    class="hidden md:flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
                    <div class="relative block w-full">
                        <div role="button"
                            class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start">
                            <div type="button"
                                class="flex items-center justify-between w-full p-3 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors border-b-0 select-none border-b-blue-gray-100 text-blue-gray-700">
                                <p
                                    class="block mr-auto font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
                                    Categories
                                </p>
                            </div>
                        </div>
                        <div class="overflow-hidden">
                            <div
                                class="grid grid-rows-3 w-full py-1 font-sans text-sm antialiased font-light leading-normal text-gray-700">
                                <Category :category="category" v-for="(category, index) in jobCategories" :key="index"
                                    :toggleCategory="toggleCategory" />
                            </div>
                        </div>
                    </div>
                    <div class="relative block w-full">
                    </div>
                </nav>
            </div>
        </div>
        <div class="md:col-span-8">
            <div class="relative flex flex-row md:flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div v-if="loaded" class="flex flex-col px-6 py-3 md:p-6 w-full items-center justify-center">
                    <div class="mb-4 flex flex-row">
                        <h5
                            class="block font-sans text-xl font-semibold leading-snug tracking-normal text-teal-500 antialiased mx-2">
                            {{ jobs?.length > 0 ? `${jobs?.length} ` : `0 ` }}
                        </h5>
                        <h5
                            class="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {{ jobs?.length > 1 ? 'Jobs' : 'Job' }} Found
                        </h5>
                    </div>
                    <div class="w-full divide-y divide-gray-200">
                        <JobInfo v-for="(job, index) in jobs" :key="index" :job="job" />
                    </div>
                </div>
                <div v-else class="flex flex-col px-6 py-3 md:p-6 w-full items-center justify-center">
                    <Spinner />
                </div>
            </div>
        </div>
    </div>
</template>