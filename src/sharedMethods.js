export default {
    methods: {
        sectionSlide: function(data) {
            $('html, body').animate({
                scrollTop: $(data).offset().top
            }, 700);
        },
        setNavActiveTracker(data) {
            this.$store.commit('setNavActiveTracker', data)
        }
    }
}