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

    },
    mixins: [sharedMethods]

    // endOf export Default
}
</script>


<style lang="scss">
    @import './assets/styles/normalize.scss';
    @import './assets/styles/variables.scss';
</style>


<style>

</style>
