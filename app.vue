<script setup>
import { useUserStore } from './stores/user'
import { onMounted } from 'vue';

onMounted(() => {
  useUserStore().initStore()
})

</script>

<template>
  <div>
    <NuxtLoadingIndicator color="#26A69A" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
