<script setup>
const emit = defineEmits(['deleteJob', 'editJob'])
const apiUrl = useRuntimeConfig().public.apiUrl
defineProps({
    myJob: Boolean,
    job: Object
})

async function deleteJob(id) {
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
    <div class="grid grid-cols-4 items-center pb-3 pt-3 last:pb-0">
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
                {{ job?.position_salary }}
            </p>
        </div>
        <!-- Date Posted -->
        <div class="flex justify-center">
            <h6
                class="block font-sans text-sm font-thin leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                Posted on: {{ job?.created_at_formatted }}
            </h6>
        </div>
        <!-- Buttons -->
        <div class="flex flex-col items-end">
            <NuxtLink :to='"/browse/" + job?.id'>
                <Button :str="`Details`" />
            </NuxtLink>
            <div v-if="myJob" class="flex gap-x-1 mt-2">
                <div class="flex-1">
                    <NuxtLink :to='"/editjob/" + job?.id'>
                        <Button :str="`Edit`" />
                    </NuxtLink>
                </div>
                <div class="flex-1">
                    <Button @click="$event => deleteJob(job?.id)" :str="`Delete`" />
                </div>
            </div>
        </div>
    </div>
</template>
