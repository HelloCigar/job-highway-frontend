<script setup>
const { data: jobs } = await useFetch('http://127.0.0.1:8000/api/v1/jobs/newest/')

useSeoMeta({
    title: 'Home',
    ogTitle: 'JobHighway: Home',
    description: 'Browse all available jobs and apply!',
})

</script>
<template>
    <div>
        <div class="py-20 px-6 bg-teal-400 text-center my-2">
            <h1 class="mb-12 text-5xl text-white">Find a job anywhere</h1>

            <NuxtLink to="/browse">
                <Button :str="`Browse`" />
            </NuxtLink>
        </div>

        <div class="py-10">
            <div class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div class="p-6">
                    <div class="mb-4 flex items-center justify-center">
                        <h5
                            class="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Latest Jobs
                        </h5>
                    </div>
                    <div class="divide-y divide-gray-200">
                        <JobInfo v-for="(job, index) in jobs" :key="index" :job="job" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>