<template>
    <section id="section-contact" class="contact">
        <div class="wrapper">
            <h2 class="title">Contact</h2>
            <div class="contact-main-flex">
                <div class="left">
                    <div class="user-msg">
                        <p class="user-msg-top">Make your vision a reality.</p>
                        <p class="user-msg-bottom">Stay connected.</p>
                    </div>
                    <div class="phone">
                        <img class="phone-signal" src="../assets/images/partials/phone-signal.svg">
                        <img class="phone-model" src="../assets/images/partials/phone-model.svg">
                    </div>
                </div>
                <div class="right">
                    <div class="contact-info">
                        <div class="nav-name">
                            <h2>Ivan <span>Stevkovski</span></h2>
                            <h4>Front End Developer</h4>
                        </div>
                        <div class="contact-data">
                            <div class="partial">
                                <p>E-mail:</p><span>istevkovski@outlook.com</span>
                            </div>
                            <div class="partial">
                                <p>Skype:</p><span>istevkovski@outlook.com</span>
                            </div>
                            <div class="partial">
                                <p>Instagram:</p><span>instagram.com/user-name</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p class="copyright-text">copyright © 2018 Ivan Stevkovski</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Contact',
    data() {
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/styles/contact.scss';
</style>

