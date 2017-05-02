function navbarLableToggle(text) {
    var aLabel = $(text);
    aLabel.click(function () {
        aLabel.parent().removeClass().addClass("active ");
        aLabel.parent().siblings().removeClass();
    });
}
$(function () {
//        navbarLableToggle("#a_home");
//        navbarLableToggle("#a_about");
//        navbarLableToggle("#a_venue");
//        navbarLableToggle("#a_sponsor");

    $('body').scrollspy({target: '#my_navbar'})
    $('#my_navbar').on('activate.bs.scrollspy', function () {
        // do something…
        var currentItem = $(".nav li.active > a").text();
        if (currentItem != "Home") {
            $(".main-navbar").css("background-color", "rgba(0,0,0,.5)");//"rgba(90,160,245,.8)");
            $("#narbar_logo_big").attr("src", "http://i4.buimg.com/567571/0dc8b3aff76c8312.png");
            $("#narbar_logo_small").attr("src", "http://i4.buimg.com/567571/0dc8b3aff76c8312.png");
        } else {
            $(".main-navbar").css("background-color", "transparent");
            $("#narbar_logo_big").attr("src", "http://i2.muimg.com/567571/75cea87e6adec527.png");
            $("#narbar_logo_small").attr("src", "http://i2.muimg.com/567571/75cea87e6adec527.png");
        }
    })
    $("#btn_Contact_bottom").click(function () {
        location.href = "#";
        $("#nav_btn_contact").click();
    });

//        email
//        $('#nav_btn_contact').click(function () {
//            parent.location.href='mailto:gnome@chongqinglug.org?subject=GnomeAsiaSummit2017';
//        });
});