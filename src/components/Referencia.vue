<script setup>
import axios from 'axios';
import { referenciesStore } from '../store/store';
import Referencia from '../classes/Referencia';
import Oldalsav from './Aside.vue'


const store = referenciesStore();
const api = " https://reeldev.hu/api/nyomda/referenciak";

const getData = async(data) => {
    store.removeItems();
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

            let referencia = new Referencia(nev, megrendelo, meret, szinek, darabszam, papirminoseg, kivitelezes, tema, kep);
            store.addItem(referencia);
        }
}
const getReferencies = async(nev) =>{
    await axios.get(api)
    .then(response => {
        var temp = response.data.filter((element) => element.nev.indexOf(nev) > -1);
        getData(temp)
    })
    .catch(error => {
        console.log("Error: " + error);
    });
}
getReferencies("");
</script>

<template>
    <div class="container ">
            <section>
                <div class="section-title ">
                    <h1>
                        <span>Főoldal</span>
                        <span>Nyomdai referenciáink</span>
                    </h1>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac orci sit amet mauris tempus semper sit amet non est. Integer et mattis nunc, sed tincidunt eros</p>

                <div class="list ">
                    <ul class="d-flex ">
                        <img src="../assets/images/pipa-active.png " alt="pipa ">
                        <li class="mx-3" @click="getReferencies('')">Mind</li>
                        <img src="../assets/images/pipa-active.png " alt="pipa ">
                        <li class="mx-3 " @click="getReferencies('kártya')">Névkártya</li>
                        <img src="../assets/images/pipa-active.png " alt="pipa ">
                        <li class="mx-3 " @click="getReferencies('Csomagolás')">Csomagolás</li>
                        <img src="../assets/images/pipa-active.png " alt="pipa ">
                        <li class="mx-3 " @click="getReferencies('Meghívó')">Cimke</li>
                        <img src="../assets/images/pipa-active.png " alt="pipa ">
                        <li class="mx-3 " @click="getReferencies('Katalógus')">Prospektus</li>
                        <img src="../assets/images/pipa-active.png " alt="pipa ">
                        <li class="mx-3 " @click="getReferencies('lap')">Flyer</li>
                        <img src="../assets/images/pipa-active.png " alt="pipa ">
                        <li class="mx-3 " @click="getReferencies('át')">Egyéb</li>
                    </ul>
                </div>

                <section class="products ">
                    <div class="product-card " v-for="item in store.getItems()">
                        <img :src="item.getKep()" alt=" ">
                        <div class="d-flex ">
                            <p id="name " class="mx-3 ">{{ item.getNev() }}</p>
                            <p>&#x300B;</p>
                            <p id="theme ">{{ item.getTema() }}</p>
                        </div>

                    </div>
                </section>
            </section>

            <nav aria-label="Page navigation example ">
                <ul class="pagination ">
                    <li class="page-item ">
                        <a class="page-link " href="# " aria-label="Previous ">
                            <span aria-hidden="true ">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item "><a class="page-link " href="# ">1</a></li>
                    <li class="page-item "><a class="page-link " href="# ">2</a></li>
                    <li class="page-item "><a class="page-link " href="# ">3</a></li>
                    <li class="page-item ">
                        <a class="page-link " href="# " aria-label="Next ">
                            <span aria-hidden="true ">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <Oldalsav />
            
        </div>

</template>

<style scoped>
    
</style>