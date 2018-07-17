<template>
    <div id="app">
        <sidenav/>
        <Home class="section"/>
        <About class="section"/>
        <Projects class="section page-standard"/>
        <Contact class="section"/>
    </div>
</template>

<script>
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import sidenav from './components/sidenav'
import sharedMethods from './sharedMethods.js'
import Contact from './components/Contact'


export default {
    name: 'App',
    data() {
        return {

        }
    },
    components: {
        Home,
        About,
        Projects,
        Contact,
        sidenav
    },
    methods: {

    },
    mounted: function() {
        const vueThis = this;
        // vueThis.$store.commit('setNavActiveTracker', 1);
        $(function() {
            $.scrollify({
                section: ".section",
                setHeights: false,
                scrollSpeed: 650,
                updateHash: false,
                before: function(index, sections) {
                    vueThis.$store.commit('setNavActiveTracker', (index + 1));
                }
            });
        });

    },
    mixins: [sharedMethods]

    // endOf export Default
}
</script>


<style lang="scss">
    @import './assets/styles/normalize.scss';
    @import './assets/styles/variables.scss';

    body {
        // width: 100vw;
        margin: 0 auto;
    }

    #app {
        margin: 0 114px;
        overflow: hidden;
        box-shadow: 0px 6px 7px rgba(0, 0, 0, 0.15);
    }

    @media only screen and (max-width: $responsive-xl) {
        #app {
            margin: 0;
        }
    }

</style>


<style>

</style>
