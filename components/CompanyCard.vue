<script setup lang="ts">
defineProps({
    job: Object
})
</script>
<template>
    <div
        class="relative flex flex-col bg-clip-border rounded-xl bg-gradient-to-tr bg-teal-500 text-white shadow-gray-900/20 shadow-md p-8">
        <div
            class="relative pb-8 m-0 mb-2 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none bg-clip-border border-white/10">
            <h1 class="flex justify-start gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white">
                <span class="self-end text-2xl">Company Profile</span>
            </h1>
            <h1 class="flex justify-start gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white">
                <span class="self-end text-base">{{ job?.company_name }}</span>
            </h1>
            <h1 class="flex justify-start gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white">
                <span class="self-end text-base">{{ job?.company_location }}</span>
            </h1>
        </div>
        <div
            class="relative pb-8 m-0 mb-1 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none bg-clip-border border-white/10">
            <h1 class="flex justify-start gap-1 mt-1 font-sans antialiased font-normal tracking-normal text-white">
                <span class="self-end text-2xl">Position</span>
            </h1>
            <h1 class="flex justify-start gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white">
                <span class="self-end text-base">{{ job?.title }}</span>
            </h1>
            <h1 class="flex justify-start gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white">
                <span class="self-end text-base">${{ job?.position_salary }} / year</span>
            </h1>
            <h1 class="flex justify-start gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white">
                <span class="self-end text-base">{{ job?.position_location }}</span>
            </h1>
        </div>
        <div>
            <h1 class="flex justify-start gap-1 mt-1 font-sans antialiased font-normal tracking-normal text-white">
                <span class="self-end text-base">Posted on: {{ job?.created_at_formatted }}</span>
            </h1>
        </div>
    </div>
</template>