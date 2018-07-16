<template>
    <section id="section-projects" class="projects">
        <div class="wrapper">
            <h2 class="page-title">Projects</h2>
            <div class="user-msg">
                <p>Let the beauty of what you love,</p>
                <p>be what you do.</p>
            </div>
            <!-- <sidenav/> -->
        
            <div class="project-workers-wrapper">
                <img class="project-workers" src="../assets/images/partials/project-workers-aniready2.svg">
                <img class="gear-lower" src="../assets/images/partials/gear-lower.svg">
                <img class="gear-upper" src="../assets/images/partials/gear-upper.svg">
                <img class="project-workers-clouds" src="../assets/images/partials/project-workers-clouds.svg">
                <img class="project-workers-shadow" src="../assets/images/partials/project-workers-shadow.svg">
                <img class="project-workers-computer" src="../assets/images/partials/project-workers-computer.svg">
            </div>
            <p class="site-moto">_INSPIRATION, ONE STEP AHEAD</p>
        </div>

        <div class="project-display">

            <div class="project project-left">
                <div class="project-image">
                    <img src="../assets/images/alkanes.png">
                </div>
                <div class="project-details">
                    <h2 class="project-name">_alka<span>n</span>es</h2>
                    <div class="project-credits">
                        <p>Designed <span>by:</span> Ivan Stevkovski</p>
                        <p>Developed <span>by:</span> Ivan Stevkovski</p>
                    </div>
                </div>
            </div>

            <div class="project project-right">
                <div class="project-image">
                    <img src="../assets/images/skydox.png">
                </div>
                <div class="project-details">
                    <h2 class="project-name">sky<span>d</span>ox</h2>
                    <div class="project-credits">
                        <p>Designed <span>by:</span> Ivan Stevkovski</p>
                        <p>Developed <span>by:</span> Ivan Stevkovski</p>
                    </div>
                </div>
            </div>

            <div class="project project-left">
                <div class="project-image">
                    <img src="../assets/images/spoof.png">
                </div>
                <div class="project-details">
                    <h2 class="project-name">S<span>p</span>oof</h2>
                    <div class="project-credits">
                        <p>Designed <span>by:</span> Ivan Stevkovski</p>
                        <p>Developed <span>by:</span> Ivan Stevkovski</p>
                    </div>
                </div>
            </div>

            <div class="project project-right">
                <div class="project-image">
                    <img src="../assets/images/natours.png">
                </div>
                <div class="project-details">
                    <h2 class="project-name">N<span>a</span>tours</h2>
                    <div class="project-credits">
                        <p>Designed <span>by:</span> Jonas Schmedtmann</p>
                        <p>Developed <span>by:</span> Ivan Stevkovski</p>
                    </div>
                </div>
            </div>

            <button class="btn">Show More</button>
        </div>

    </section>
</template>

<script>
import sidenav from './sidenav'

export default {
    name: 'Projects',
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
    @import '../assets/styles/projects.scss';
</style>

