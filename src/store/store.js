import { defineStore } from "pinia";
import { ref } from "vue";

export const referenciesStore = defineStore("referecies", () => {
    const referecies = ref([]);

    function addItem(item) {
        referecies.value.push(item);
    }

    function getItems() {
        return referecies.value;
    }

    return {
        addItem,
        getItems
    }
})