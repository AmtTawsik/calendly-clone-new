<template>
  <div>
    <!-- 1st section -->
    <div v-show="currentTab === 1">
      <div class="md:flex items-start justify-end">
        <div class="w-100vw h-100vh" v-if="!selectedDate || !isSmallDevice">
          <div @click="triggerDateSelection" id="datepickerId" inline-datepicker></div>
        </div>
        <!-- time section -->
        <div v-if="selectedDate" class="w-[250px] px-2 py-5">
          <p class="text-center text-xl font-bold md:text-base md:font-normal">{{ formattedDate }}</p>

          <div class="mt-2 md:h-[268px] overflow-y-scroll no-scrollbar">
            <template v-for="(time, index) of timeSlot" :key="index">
              <div class="flex gap-2">
                <div
                  class="w-full whitespace-nowrap text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-lg px-5 py-2.5 text-center mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 cursor-pointer"
                  @click="selectTimeSlot(index)">
                  {{ time }}
                </div>
                <transition name="fade">
                  <div v-if="selectedTimeIndex === index"
                    class="w-full text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-lg px-5 py-2.5 text-center mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 cursor-pointer"
                    @click="nextClicked">
                    Next
                  </div>
                </transition>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>

    <!-- 2nd section -->
    <div class="flex justify-center px-5 md:px-0 md:py-2" v-show="currentTab === 2">
      <div class="w-full max-w-lg">
        <h3 class="text-xl font-bold text-left w-full my-5">Enter Details</h3>
        <section class="bg-white dark:bg-gray-900 w-full">
          <form action="#" class="space-y-2">
            <div>
              <label for="subject" class="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Your
                Name</label>
              <input type="text" id="subject" v-model="name"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter Your Name" required>
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Your
                email</label>
              <input type="email" id="email" v-model="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@gmail.com" required>
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Please share
                anything that will help prepare for our meeting.</label>
              <textarea id="message" rows="4" v-model="details"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."></textarea>
            </div>
          </form>
        </section>

        <!-- Previous Button -->
        <div @click="prevTab" :disabled="currentTab === 1" class="fixed top-5 left-2 md:hidden">
          <button class="w-fit p-1.5 rounded-full border text-blue-500 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </button>
        </div>
        <div @click="prevTab" :disabled="currentTab === 1" class="absolute top-5 left-2 hidden md:block">
          <button class="w-fit p-1.5 rounded-full border text-blue-500 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </button>
        </div>
        <div class="flex my-2">
          <!-- Next Button -->
          <a href="#" @click="ScheduleEvent" :disabled="currentTab === 3"
            class="flex items-center justify-center px-3 h-10 text-sm font-medium text-gray-50 bg-blue-500 border border-blue-300 rounded-lg hover:bg-blue-600  hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Schedule Event
          </a>
        </div>
      </div>
    </div>


    <!-- 3rd section -->
    <div class="px-5 md:px-0 py-10 md:py-2" v-show="currentTab === 3">
      <div class="flex justify-center items-center font-bold text-xl">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
          class="w-6 h-6 text-green-500 mr-2">
          <path fill-rule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
            clip-rule="evenodd" />
        </svg>
        <span>You are scheduled</span>
      </div>
      <p class="text-gray-600 my-3 text-center md:text-left">A calendar invitation has been sent to your email address.</p>
      <div class="flex justify-center">
        <button type="button"
          class="flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-full text-sm px-3 py-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
          Open Invitation
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </button>
      </div>
      <div class="border rounded-xl p-3 my-5">
        <h4 class="font-bold text-xl ml-1 mb-2">Demo and Q&A</h4>
        <div class="flex items-center text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          <p class="font-semibold">Planning Permission</p>
        </div>
        <div class="flex items-center text-gray-600 mt-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
          </svg>
          <p class="font-semibold"><span>{{ selectedTime }}, </span>{{ formattedDate }}</p>
        </div>
        <div class="flex items-center text-gray-600 mt-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
          </svg>
          <p class="font-semibold">Asia/Dhaka</p>
        </div>
        <div class="flex items-center text-gray-600 mt-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
          <p class="font-semibold">Web conferencing details to follow.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Datepicker from "flowbite-datepicker/Datepicker";

let datepicker;
const selectedDate = ref(null);
const formattedDate = ref(null);
const selectedTimeIndex = ref(null);
const selectedTime = ref(null);
const timeSlot = ref(['01.00 PM', '02.00 PM', '03.00 PM', '04.00 PM', '05.00 PM', '06.00 PM', '07.00 PM', '08.00 PM', '09.00 PM']);
const currentTab = ref(1);
const name = ref('');
const email = ref('');
const details = ref('');
const emit = defineEmits(['dateSelected', 'dateTimeSelected', 'personalDetails', 'findCurrentTab']);
const { isSmallDevice } = defineProps(["isSmallDevice"]);


onMounted(() => {
  const datepickerId = document.getElementById("datepickerId");

  datepicker = new Datepicker(datepickerId, {
    format: "dd/MM/yyyy",
    language: "en",
  });
});

function triggerDateSelection() {
  selectedDate.value = datepicker.getDate();
  formatSelectedDate();
  emit('dateSelected', selectedDate.value, currentTab.value);
}

function formatSelectedDate() {
  if (selectedDate.value) {
    const date = new Date(selectedDate.value);
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    formattedDate.value = date.toLocaleDateString('en-US', options);
  }
}

function selectTimeSlot(index) {
  selectedTimeIndex.value = index;
}

function nextClicked() {
  if (selectedDate.value !== null && selectedTimeIndex.value !== null) {
    const selectedDateTime = {
      date: selectedDate.value,
      time: timeSlot.value[selectedTimeIndex.value]
    };
    selectedTime.value = selectedDateTime.time;
    nextTab();
    emit('dateTimeSelected', selectedDateTime, currentTab.value); // Emit the selected date and time slot object
  } else {
    console.log("Please select a date and time slot before clicking Next.");
  }
}

const ScheduleEvent = () => {
  const personalDetails = {
    name: name.value,
    email: email.value,
    details: details.value
  }
  emit('personalDetails', personalDetails, currentTab.value);
  nextTab()
}

function prevTab() {
  if (currentTab.value > 1) {
    currentTab.value--;
  }
  emit('findCurrentTab', currentTab.value)
}

function nextTab() {
  if (currentTab.value < 3) {
    currentTab.value++;
  }
  emit('findCurrentTab', currentTab.value)
}
</script>

<style>
#app {
  font-family: sans-serif;
  text-align: center;
}


.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
