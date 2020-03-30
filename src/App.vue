<template>
<v-app>
    <Nav></Nav>

    <v-content>
        <v-container class="fill-height" fluid>
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </v-container>
    </v-content>
</v-app>
</template>

<script>
import Nav from "./components/Nav";

export default {
    name: "App",

    components: {
        Nav
    },

    data: () => ({
        //
    })
};
</script>
