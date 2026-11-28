/**
 * Question 4: Special Offer Banner
 * Implements show, hide, slide, fade animations and automatic rotation every 5 seconds.
 */

$(document).ready(function() {
    let currentBannerIndex = 0;
    const banners = $(".promo-banner");
    const totalBanners = banners.length;

    // Show initial banner
    banners.hide();
    $(banners[0]).show();

    // 1. Hide Button
    $("#hideBannersBtn").on("click", function() {
        $(".promo-banner").hide();
    });

    // 2. Show Button
    $("#showBannersBtn").on("click", function() {
        $(".promo-banner").show();
    });

    // 3. Slide Up/Down Button
    $("#slideToggleBtn").on("click", function() {
        $(".promo-banner").slideToggle(400);
    });

    // 4. Fade In/Out Button
    $("#fadeToggleBtn").on("click", function() {
        $(".promo-banner").fadeToggle(400);
    });

    // 5. Automatic banner rotation every 5 seconds using fadeIn/fadeOut
    setInterval(function() {
        $(banners[currentBannerIndex]).fadeOut(500, function() {
            currentBannerIndex = (currentBannerIndex + 1) % totalBanners;
            $(banners[currentBannerIndex]).fadeIn(500);
        });
    }, 5000);
});
