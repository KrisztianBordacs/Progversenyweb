<script setup>

</script>
<template>
 <div class=" connection d-flex ">
            <p>Nyomdai termékek legjobb árakon</p>
            <div class="d-flex ">
                <img src="../assets/images/ ">
                <p>+36-70/381-681-6832</p>
                <img src="../assets/images/ ">
                <p>info@nyomda-online.hu</p>
            </div>

        </div>

        <nav class="navbar navbar-expand-lg navbar bg-dark border-bottom border-body " data-bs-theme="dark ">
            <div class="container ">
                <button class="navbar-toggler " type="button " data-bs-toggle="collapse " data-bs-target="#navbarSupportedContent " aria-controls="navbarSupportedContent " aria-expanded="false " aria-label="Toggle navigation ">
                <span class="navbar-toggler-icon "></span>
            </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent ">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li class="nav-item ">
                            <router-link to="/" class="nav-link">Nyomda</router-link>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link " href="# ">Nyomdai termékek</a>
                        </li>

                        <li class="nav-item ">
                            <router-link to="/referencia" class="nav-link">Referenciák</router-link>
                        </li>

                        <li class="nav-item ">
                            <a class="nav-link " href="# "> Ajánlatkérés</a>
                        </li>

                        <li class="nav-item ">
                            <a class="nav-link " href="# "> Hírek</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link " href="# "> Kapcsolat</a>
                        </li>
                    </ul>

                    <form class="d-flex " role="search ">
                        <img src="../assets/images/search-icon.png " width="10% " height="10% ">
                        <input class="form-control me-2 " type="search " placeholder="Search " aria-label="Search ">
                    </form>
                </div>
            </div>
        </nav>

        <section class="nyomda-online-logo ">
            <div><img src="../assets/images/nyomda-online-logo.png " alt=" ">
                <p>Nyomdai termékek, prospektusol szorólapok <span>egy kézből</span></p>
            </div>
        </section>
</template>
<style scoped>
    
</style>