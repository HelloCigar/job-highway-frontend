<template>
    <CustomMenu />
    <div class="container mx-auto py-24">
        <div class="flex flex-col items-center">
            <slot></slot>
        </div>
        <footer class="px-4 md:px-24">
            <Footer />
        </footer>
    </div>
</template>
