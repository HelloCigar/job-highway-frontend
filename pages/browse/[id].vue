<script setup>
import Skeleton from '~/components/Skeleton.vue';
const apiUrl = useRuntimeConfig().public.apiUrl

const { id } = useRoute().params
const { data: job, status } = await useFetch(`${apiUrl}/api/v1/jobs/${id}/`)

useSeoMeta({
    title: `Apply: ${job?.value.title}`,
    ogTitle: 'JobHighway: Home',
    description: 'Browse all available jobs and apply!',
})

</script>

<template>
    <div class="py-5 px-5 grid md:gap-3 md:px-0 md:py-10 md:grid-cols-9 w-full">
        <div class="min-h-24 md:col-span-6">
            <div v-if="status === 'pending'">
                <Skeleton />
            </div>
            <div v-else>
                <h2
                    class="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-inherit">
                    {{ job.title }}
                </h2>
                <div class="h-64 pt-3">
                    <p class="block font-sans text-lg antialiased font-light leading-relaxed text-inherit">
                        Description: {{ job.description }}
                    </p>
                </div>
                <a class="hidden md:block" :href="`mailto:${job?.company_email}`">
                    <Button :str="`Apply via Email`" :black="true" />
                </a>
            </div>
        </div>

        <div class="md:col-span-3">
            <CompanyCard :job="job" />
        </div>
    </div>
    <BottomNavBar class="md:hidden fixed bottom-0 h-24" :email="job?.company_email" />
</template>