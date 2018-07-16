<template>
    <section id="section-about" class="about">
        <div class="wrapper">
            <!-- <sidenav/> -->
            <h2>About</h2>
            <div class="about-me">
                <p>My name is Ivan Stevkovski.</p>
                <p>I'm a passionate Front End Developer</p>
                <p>as well as a UX/UI design enthusiast</p>
                <p>who is always researching in order to stay up-to-date!</p>
                <p>My work is always following the latest standards.</p>
            </div>
            <div class="skills">
                <div class="top">
                    <p>Skills</p>
                </div>
                <div class="bottom">
                    <div class="bottom-flex bottom-flex-1">
                        <div class="skill">
                            <img src="../assets/images/svg_icons/html5.svg">
                            <p>HTML5</p>
                        </div>
                        <div class="skill">
                            <img src="../assets/images/svg_icons/css3.svg">
                            <p>CSS3</p>
                        </div>
                        <div class="skill">
                            <img src="../assets/images/svg_icons/bootstrap4.svg">
                            <p>Bootstrap 4</p>
                        </div>
                        <div class="skill">
                            <img src="../assets/images/svg_icons/sass.svg">
                            <p>Sass</p>
                        </div>
                    </div>
                    <div class="bottom-flex bottom-flex-2">
                        <div class="skill">
                            <img src="../assets/images/svg_icons/js.svg">
                            <p>JavaScript</p>
                        </div>
                        <div class="skill">
                            <img src="../assets/images/svg_icons/jquery.svg">
                            <p>jQuery</p>
                        </div>
                        <div class="skill">
                            <img src="../assets/images/svg_icons/reactjs.svg">
                            <p>ReactJS</p>
                        </div>
                        <div class="skill">
                            <img src="../assets/images/svg_icons/vuejs.svg">
                            <p>VueJS</p>
                        </div>
                    </div>
                    <div class="bottom-flex bottom-flex-3">
                        <div class="skill">
                            <img src="../assets/images/svg_icons/node.svg">
                            <p>NodeJS</p>
                        </div>
                        <div class="skill">
                            <img src="../assets/images/svg_icons/npm.svg">
                            <p>npm</p>
                        </div>
                        <div class="skill">
                            <img src="../assets/images/svg_icons/drupal.svg">
                            <p>Drupal 8</p>
                        </div>
                        <div class="skill">
                            <img src="../assets/images/svg_icons/foundation.svg">
                            <p>Foundation</p>
                        </div>
                    </div>
                    <div class="bottom-flex bottom-flex-4">
                        <div class="skill">
                            <img src="../assets/images/svg_icons/git.svg">
                        </div>
                        <div class="skill">
                            <img src="../assets/images/svg_icons/github.svg">
                        </div>
                        <div class="skill">
                            <img src="../assets/images/svg_icons/gitlab.svg">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <img class="text-template" src="../assets/images/text-template.svg">
        <img class="about-workers" src="../assets/images/about-workers.svg">

    </section>
</template>

<script>
import sidenav from './sidenav';

export default {
    name: 'About',
    data() {
        return {
            
        }
    },
    components: {
        sidenav
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/styles/about.scss';
</style>
