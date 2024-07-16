<script setup lang="ts">
defineProps({
    email: String
})
</script>

<template>
    <nav
        class="z-10 block w-full max-w-full px-4 py-2 text-white bg-white border rounded-none shadow-md h-max border-white/80 lg:px-8 lg:py-4">
        <a :href="`mailto:${email}`">
            <button type="button"
                class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                data-ripple-light="true">
                Apply via email
            </button>
        </a>
    </nav>
</template>