<template>
    <div class="beautiful-dropdown">
        <a  @click="toggleDropdown" href="javascript:void(0)" class="btn dropdown-button btn-primary align-center rounded-10"><img
            src="http://localhost:8080/documents/d/guest/filter-white" alt="img" /></a>
     
      <ul v-if="isOpen" class="dropdown-list">
        <li v-for="option in options" :key="option" @click="selectOption(option)">
            {{ option }}
            <hr>
        </li>
      </ul>
   
    </div>
  </template>

  <script>
import { ref, reactive, inject } from 'vue';



export default {
  name: 'BeautifulDropdown',
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const isOpen = ref(false);
    const selectedOption = ref(props.options[0]);
    const filterval = inject("filterval");

    function toggleDropdown() {
      isOpen.value = !isOpen.value;
    }

    function selectOption(option) {
      selectedOption.value = option;
      filterval.value=option;
    
      isOpen.value = false;
    }

    return {
      isOpen,
      selectedOption,
      toggleDropdown,
      selectOption,
      
    };
  },
};
</script>