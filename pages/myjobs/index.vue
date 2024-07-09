<script setup>
const useStore = useUserStore()
const apiUrl = useRuntimeConfig().public.apiUrl
const pending = ref(true)
const jobs = ref()

async function getJobs() {
    await $fetch(`${apiUrl}/api/v1/jobs/my-jobs/`, {
        headers: {
            'Authorization': `token ${useStore.user.token}`,
            'Content-Type': 'application/json'
        },
    })
        .then(response => {
            pending.value = false
            jobs.value = response
            console.log('jobs', jobs.value);
        })
        .catch(
            error => console.log(error)
        )
}

useSeoMeta({
    title: 'My Jobs',
    ogTitle: 'JobHighway: Home',
    description: 'Browse all available jobs and apply!',
})

onMounted(() => {
    if (useStore.user.isAuthenticated) {
        getJobs()
    } else {
        useRouter().push({ path: '/login' })
    }
})

function deleteJob(id) {
    jobs.value = jobs.value.filter(job => job.id !== id)
}

</script>

<template>
    <div class="py-10 grid md:grid-cols-4 gap-3">
        <div class="md:col-span-4 px-2">
            <div v-if="pending">
                <Skeleton />
            </div>
            <div v-else-if="jobs?.length === 0">
                <h2
                    class="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-inherit">
                    No Jobs Found
                </h2>
            </div>
            <div v-else>
                <h2
                    class="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-inherit">
                    My Jobs
                </h2>
                <JobInfo :my-job="true" v-for="(job, index) in jobs" :key="index" :job="job"
                    v-on:deleteJob="$event => deleteJob(job?.id)" />
            </div>
        </div>
    </div>
</template>