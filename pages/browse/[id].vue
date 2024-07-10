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
    <div class="py-10 grid md:grid-cols-4 gap-3">
        <div class="md:col-span-3 px-2">
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
                        {{ job.description }}
                    </p>
                </div>
                <a :href="`mailto:${job?.company_email}`">
                    <Button :str="`Apply via Email`" :black="true" />
                </a>
            </div>
        </div>

        <div class="md:col-span-1">
            <CompanyCard :job="job" />
        </div>
    </div>
</template>