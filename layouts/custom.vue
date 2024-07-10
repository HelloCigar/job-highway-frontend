<template>
    <CustomMenu />
    <div class="container mx-auto px-24 py-24">
        <div class="flex flex-col items-center">
            <slot></slot>
        </div>
        <footer>
            <Footer />
        </footer>
    </div>
</template>
