<script setup>
import { useUserStore } from './stores/user'
import { onMounted } from 'vue';

const userStore = useUserStore()

// Initialize the user store every refresh
onMounted(() => {
  userStore.initStore()
})

</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
