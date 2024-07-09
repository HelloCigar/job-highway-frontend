<script setup>
const useStore = useUserStore()
const apiUrl = useRuntimeConfig().public.apiUrl


const { data: jobs, status } = await useLazyFetch(`${apiUrl}/api/v1/jobs/my-jobs/`)

// async function getJobs() {
//     await $fetch(`${apiUrl}/api/v1/jobs/my-jobs/`, {
//         headers: {
//             'Authorization': `token ${useStore.user.token}`,
//             'Content-Type': 'application/json'
//         },
//     })
//         .then(response => {
//             jobs.value = response
//             console.log('jobs', jobs.value);
//         })
//         .catch(
//             error => console.log(error)
//         )
// }

useSeoMeta({
    title: 'My Jobs',
    ogTitle: 'JobHighway: Home',
    description: 'Browse all available jobs and apply!',
})

onMounted(() => {
    if (useStore.user.isAuthenticated) {
        return
    } else {
        useRouter().push({ path: '/login' })
    }
})

function deleteJob(id) {
    console.log('deleteJob', id)
    jobs.value = jobs.value.filter(job => job.id !== id)
}

</script>

<template>
    <div class="py-10 grid md:grid-cols-4 gap-3">
        <div class="md:col-span-4 px-2">
            <div v-if="status === 'pending'">
                <Skeleton />
            </div>
            <div v-else-if="jobs?.length === 0">
                <h2
                    class="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-inherit">
                    No Jobs Yet
                </h2>
            </div>
            <div v-else>
                <h2
                    class="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-inherit">
                    My Jobs
                </h2>
                <JobInfo my-job="true" v-for="(job, index) in jobs" :key="index" :job="job"
                    v-on:deleteJob="$event => deleteJob(job?.id)" />
            </div>
        </div>
    </div>
</template>