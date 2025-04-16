<script setup>
import axios from 'axios';
import { referenciesStore } from '../store/store';
import Referencia from '../classes/Referencia';

const store = referenciesStore();
const api = " https://reeldev.hu/api/nyomda/referenciak";

const getData = async() => {
    await axios.get(api)
    .then(response => {
        for (let i = 0; i < response.data.length; i++){
            let nev = response.data[i].nev;
            let megrendelo = response.data[i].megrendelo;
            let meret = response.data[i].meret;
            let szinek = response.data[i].szinek;
            let darabszam = response.data[i].darabszam;
            let papirminoseg = response.data[i].papirminoseg;
            let kivitelezes = response.data[i].kivitelezes;
            let tema = response.data[i].tema;
            let kep = response.data[i].kep;

            let referencia = new Referencia(nev,megrendelo,meret,szinek, darabszam, papirminoseg, kivitelezes, tema, kep);
            store.addItem(referencia);
        }
    })
}
getData();

</script>

<template>

</template>

<style scoped>
    
</style>