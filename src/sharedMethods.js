export default {
    methods: {
        sectionSlide: function(data) {
            $('html, body').animate({
                scrollTop: $(data).offset().top
            }, 700);
        },
        setNavActiveTracker(data) {
            this.$store.commit('setNavActiveTracker', data)
        },
        slideDetectScroll: function() {
            $(document).on('scroll', function() {
                if($(this).scrollTop()>=$('#section-about').position().top){
                    this.$store.commit('setNavActiveTracker', 2);
                }
            });
        }
    }
}