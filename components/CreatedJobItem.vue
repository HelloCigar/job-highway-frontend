<template>
    <div class="flex items-center justify-between pb-3 pt-3 last:pb-0">
        <div class="flex items-center gap-x-3">
            <div>
                <h6
                    class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                    Job 2
                </h6>
                <p class="block font-sans text-sm font-light leading-normal text-gray-700 antialiased">
                    Company 2
                </p>
            </div>
        </div>
        <div>
            <h6
                class="block font-sans text-sm font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                Worldwide
            </h6>
            <p class="block font-sans text-sm font-light leading-normal text-gray-700 antialiased">
                $10-20K</p>
        </div>
        <h6 class="block font-sans text-sm font-thin leading-relaxed tracking-normal text-blue-gray-900 antialiased">
            Posted Dec 20, 2024
        </h6>
        <div class="flex gap-x-3">
            <div class="">
                <NuxtLink to="/browse/1">
                    <Button :str="`Details`" />
                </NuxtLink>
            </div>
            <div class="flex-1">
                <NuxtLink to="/browse/1">
                    <Button :str="`Edit`" />
                </NuxtLink>
            </div>
            <div class="flex-1">
                <NuxtLink to="/browse/1">
                    <Button :str="`Delete`" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>