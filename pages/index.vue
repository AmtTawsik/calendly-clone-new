<template>
    <div class="flex w-full md:h-screen justify-center items-center">
        <div :class="containerClass"
            class="rounded-md flex md:flex-row flex-col justify-center items-center md:shadow-xl relative md:h-2/3">
            <client-only>
                <div v-if="isSmallDevice && selectedDate && currentTab <= 1" class="fixed top-5 left-2">
                    <button @click="relodePage"
                        class="w-fit p-1.5 rounded-full border text-blue-500 hover:text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </button>
                </div>
                <LeftSide v-if="!personalDetails.email" :currentTab="currentTab" :selectedDate="selectedDate" />
            </client-only>
            <div>
                <client-only>
                    <DatePicker2 @dateSelected="handleDateSelected" @dateTimeSelected="handleDateTimeSelected"
                        @personalDetails="handlePersonalDetails" @findCurrentTab="handleFindCurrentTab"
                        :isSmallDevice="isSmallDevice" :selectedDate="selectedDate" />
                </client-only>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";

const selectedDate = ref(null);
const dateTimeSelected = ref({});
const personalDetails = ref({});
const currentTab = ref(1)

function handleDateSelected(date, tab) {
    selectedDate.value = date;
    currentTab.value = tab;
    console.log('currentTab', currentTab.value)
}
function handleDateTimeSelected(date, tab) {
    dateTimeSelected.value = date;
    currentTab.value = tab;
    console.log('currentTab', currentTab.value)
}
function handlePersonalDetails(date, tab) {
    personalDetails.value = date;
    currentTab.value = tab;
}
function handleFindCurrentTab(tab) {
    currentTab.value = tab;
}

function relodePage() {
    location.reload()
}

const containerClass = computed(() => ({
    'md:w-[800px]': !selectedDate.value,
    'md:w-[1020px]': selectedDate.value,
}));

// Check if the device is small
const isSmallDevice = computed(() => {
    if (window.innerWidth < 768) {
        return true;
    } else {
        return false;
    }
});
</script>

<style lang="scss" scoped></style>
