<template>
    <div class="nav-circles">
        <a v-on:click.prevent="sectionSlide('#section-home'), setNavActiveTracker(1)" v-bind:class="{'nav-active':navActiveTracker == 1}" class="nav-circle"></a>
        <a v-on:click.prevent="sectionSlide('#section-about'), setNavActiveTracker(2)" v-bind:class="{'nav-active':navActiveTracker == 2}" class="nav-circle"></a>
        <a v-on:click.prevent="sectionSlide('#section-projects'), setNavActiveTracker(3)" v-bind:class="{'nav-active':navActiveTracker == 3}" class="nav-circle"></a>
        <a v-on:click.prevent="sectionSlide('#section-contact'), setNavActiveTracker(4)" v-bind:class="{'nav-active':navActiveTracker == 4}" class="nav-circle"></a>
    </div>
</template>

<script>
import Header from './Header';
import sharedMethods from '../sharedMethods.js'

export default {
    name: 'sidenav',
    data() {
        return {

        }
    },
    components: {
        Header
    },
    computed: {
        navActiveTracker() {
            return this.$store.state.navActiveTracker;
        }
    },
    methods: {

    },
    mixins: [sharedMethods]
}
</script>

<style lang="scss" scoped>
    @import '../assets/styles/variables.scss';
    .nav-circles {
        display: inline-flex;
        flex-direction: column;
        // position: absolute;
        position: fixed;
        top: 50%;
        transform: translateY(-50%);
        right: 12px;
        z-index: 10;
    }

    .nav-circle {
        display: block;
        width: 15px;
        height: 15px;
        background-color: $background-gray;
        border: 1px solid $gray-text;
        border-radius: 50px;
        margin-bottom: 15px;
        cursor: pointer;
    }

    .nav-active {
        border: none;
        background-color: $branding-orange;
        animation: transitionOut 2s;
    }

    @keyframes transitionOut {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
</style>
