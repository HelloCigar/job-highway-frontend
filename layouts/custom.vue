<template>
    <CustomMenu />
    <div class="container mx-auto py-24">
        <div class="flex flex-col items-center">
            <slot></slot>
        </div>
        <footer>
            <Footer />
        </footer>
    </div>
</template>
