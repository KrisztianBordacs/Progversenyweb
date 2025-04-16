<script setup>
import axios from 'axios';
import { referenciesStore } from '../store/store';
import Referencia from '../classes/Referencia';

const store = referenciesStore();
const api = " https://reeldev.hu/api/nyomda/referenciak";

const getData = async(data) => {
        for (let i = 0; i < data.length; i++){
            let nev = data[i].nev;
            let megrendelo =data[i].megrendelo;
            let meret = data[i].meret;
            let szinek = data[i].szinek;
            let darabszam = data[i].darabszam;
            let papirminoseg = data[i].papirminoseg;
            let kivitelezes = data[i].kivitelezes;
            let tema = data[i].tema;
            let kep = data[i].kep;

            let referencia = new Referencia(nev,megrendelo,meret,szinek, darabszam, papirminoseg, kivitelezes, tema, kep);
            store.addItem(referencia);
        }
}
const getReferencies = async(tema) =>{
    await axios.get(api)
    .then(response => {
        var temp = response.data.filter((element) => element.tema.indexOf(tema) > -1);
        getData(temp)
    })
}

</script>

<template>

</template>

<style scoped>
    
</style>