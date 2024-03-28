<template>
    <div class="p-5 md:w-1/2">
        <div class="flex flex-col items-center md:block">
            <h5 class="font-bold text-gray-500 mt-3">Planning Permission</h5>
            <h3 class="font-bold text-2xl">Demo and Q&A</h3>
            <div class="flex text-gray-500 items-center mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 mr-1">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <p class="font-bold">30 min</p>
            </div>
            <div class="flex text-gray-500 items-center mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 mr-1">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
                <p class="font-bold">Web conferencing</p>
            </div>
        </div>
        <!-- <p v-if="isSmallDevice && !selectedDate" class="mt-4 text-center md:hidden">Adopting this AI driven, automated lead generation
            solution promises a
            significant competitive
            edge. Even if you're not currently considering a purchase
        </p>
        <p v-if="isSmallDevice && currentTab === 2" class="mt-4 text-center md:hidden">Adopting this AI driven, automated lead generation
            solution promises a
            significant competitive
            edge. Even if you're not currently considering a purchase
        </p>
        <p class="mt-4 hidden md:block">Adopting this AI driven, automated lead generation
            solution promises a
            significant competitive
            edge. Even if you're not currently considering a purchase
        </p> -->

        <p v-if="(isSmallDevice && (!selectedDate || currentTab === 2))" class="mt-4 text-center md:hidden">Adopting
            this AI driven, automated lead generation
            solution promises a
            significant competitive
            edge. Even if you're not currently considering a purchase
        </p>
        <p class="mt-4 hidden md:block">Adopting this AI driven, automated lead generation
            solution promises a
            significant competitive
            edge. Even if you're not currently considering a purchase
        </p>

    </div>
</template>

<script setup>
const { currentTab, selectedDate } = defineProps(["currentTab", "selectedDate"]);

const isSmallDevice = computed(() => {
    if (window.innerWidth < 768) {
        return true;
    } else {
        return false;
    }
});
</script>

<style lang="scss" scoped></style>