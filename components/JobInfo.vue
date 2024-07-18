<script setup lang="ts">
const emit = defineEmits(['deleteJob', 'editJob'])
const apiUrl = useRuntimeConfig().public.apiUrl
defineProps({
    myJob: Boolean,
    job: Object
})

async function deleteJob(id: number) {
    await $fetch(`${apiUrl}/api/v1/jobs/${id}/delete/`, {
        method: 'DELETE',
        headers: {
            'Authorization': `token ${useUserStore().user.token}`,
            'Content-Type': 'application/json'
        }
    }).then(response => {
        emit('deleteJob', id)
    }).catch(error => {
        console.log(error)
    })
}
</script>


<template>
    <div class="grid grid-cols-3 lg:grid-cols-4 items-center pb-3 pt-3 last:pb-0">
        <!-- Title and Company -->
        <div class="flex flex-col items-start">
            <h6
                class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                {{ job?.title }}
            </h6>
            <p class="block font-sans text-sm font-light leading-normal text-gray-700 antialiased">
                {{ job?.company_name }}
            </p>
        </div>
        <!-- Location and Salary -->
        <div class="flex flex-col items-center">
            <h6
                class="block font-sans text-sm font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                {{ job?.position_location }}
            </h6>
            <p class="block font-sans text-sm font-light leading-normal text-gray-700 antialiased">
                ${{ job?.position_salary }} / year
            </p>
        </div>
        <!-- Date Posted -->
        <div class="hidden lg:flex items-center justify-center">
            <h6
                class="block font-sans text-sm font-thin leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                Posted on: {{ job?.created_at_formatted }}
            </h6>
        </div>
        <!-- Buttons -->
        <div class="flex flex-col gap-1 2xl:flex-row justify-end items-end">
            <NuxtLink :to='"/browse/" + job?.id'>
                <Button :str="`Details`" width="w-24" />
            </NuxtLink>
            <NuxtLink :to='"/editjob/" + job?.id' v-if="myJob">
                <Button class="bg-yellow-700" :str="`Edit`" width="w-24" />
            </NuxtLink>
            <Button v-if="myJob" class="bg-red-700" @click="$event => deleteJob(job?.id)" :str="`Delete`"
                width="w-24" />
        </div>
    </div>
</template>
