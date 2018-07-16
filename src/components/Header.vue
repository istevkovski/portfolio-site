<template>
    <div class="nav-wrapper">
        <div class="nav-name">
            <h2>Ivan <span>Stevkovski</span></h2>
            <h4>Front End Developer</h4>
        </div>
        <nav class="nav">
            <a v-on:click="sectionSlide('#section-home'), setNavActiveTracker(1)" v-bind:class="{'nav-active':navActiveTracker == 1}" class="nav-link">Home</a>
            <a v-on:click="sectionSlide('#section-about'), setNavActiveTracker(2)" v-bind:class="{'nav-active':navActiveTracker == 2}" class="nav-link">About</a>
            <a v-on:click="sectionSlide('#section-projects'), setNavActiveTracker(3)" v-bind:class="{'nav-active':navActiveTracker == 3}" class="nav-link">Projects</a>
            <a v-on:click="sectionSlide('#section-contact'), setNavActiveTracker(4)" v-bind:class="{'nav-active':navActiveTracker == 4}" class="nav-link">Contact</a>
        </nav>
    </div>
</template>


<script>
import sharedMethods from '../sharedMethods.js'

export default {
    name: 'Header',
    data() {
        return {

        }
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
    // @import '../assets/styles/header.scss';
    @import '../assets/styles/variables.scss';
    .nav-wrapper {
        display: flex;
        justify-content: space-between;
        padding-bottom: 70px;
    }

    .nav-name {
        margin-top: -10px;
        text-align: right;
        cursor: default;
        h2 {
            font-family: 'Barlow Semi Condensed', sans-serif;
            font-size: 42px;
            font-weight: 200;
            color: $gray-text;
        }

        span {
            color: $branding-orange;
        }

        h4 {
            font-weight: 200;
            font-size: 26;
        }

    }

    .nav {
        display: flex;
        height: 66px;

        &-link {
            display: inline-block;
            height: 25px;
            text-transform: uppercase;
            margin-right: 30px;
            font-weight: 300;
            color: $gray-text;
            cursor: pointer;
            transition: all .2s;
            &:last-of-type {
                margin-right: 0;
            }
        }

        &-active {
            color: $branding-orange;
        }
    }
</style>