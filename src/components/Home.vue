<template>
    <section id="section-home" class="page">
        <div class="home">
            <Header/>
            <div class="wrapper">
                <h2 class="main-msg">Looking for a <span>{{fancy_msg}}</span><span class="fancy-msg-underscore">_</span></h2>
                <button v-on:click="sectionSlide('#section-about'), setNavActiveTracker(2)" class="btn">Find Out More</button>
            </div>
            <div class="container">
                <div class="chevron"></div>
                <div class="chevron"></div>
                <div class="chevron"></div>
            </div>
        </div>
        <div class="background-image"></div>
        <img src="../assets/images/desk.svg">
        <p class="site-moto">_INSPIRATION, ONE STEP AHEAD</p>
    </section>
</template>

<script>
    import Header from './Header'
    import sidenav from './sidenav'
    import sharedMethods from '../sharedMethods.js'

    export default {
        name: "Home",
        data() {
            return {
                company_name: 'Portfolio',
                fancy_msg: 'developer?'
            }
        },
        components: {
            Header,
            sidenav
        },
        methods: {
            
        },
        mounted: function() {
            const fancyMsg = 'developer?';
            let fancyMsgLookout = 0;
            this.fancy_msg = "";
            const typeFancyMsgInterval = setInterval(() => {
                if(fancyMsgLookout < fancyMsg.length){
                    this.fancy_msg = this.fancy_msg.concat(fancyMsg[fancyMsgLookout]);
                    fancyMsgLookout++;
                }
                else {
                    clearInterval(typeFancyMsgInterval);
                }
            }, 250);
            const fancyMsgUnderscoreInterval = setInterval(() => {
                if($('.fancy-msg-underscore').css('visibility') == 'hidden') {
                    $('.fancy-msg-underscore').css('visibility', 'visible');
                } else {
                    $('.fancy-msg-underscore').css('visibility', 'hidden');
                }
            }, 800);
        },
        mixins: [sharedMethods]
    }
</script>

<style lang="scss" scoped>
    @import '../assets/styles/home.scss';
</style>