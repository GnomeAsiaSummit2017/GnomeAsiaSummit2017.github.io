function navbarLableToggle(text) {
    var aLabel = $(text);
    aLabel.click(function () {
        aLabel.parent().removeClass().addClass("active ");
        aLabel.parent().siblings().removeClass();
    });
}
$(function () {
    $('body').scrollspy({target: '#my_navbar'})
    $('#my_navbar').on('activate.bs.scrollspy', function () {
        // do something…
        var currentItem = $(".nav li.active > a").text();
        if (currentItem != "Home") {
            $(".main-navbar").css("background-color", "rgba(0,0,0,.5)");//"rgba(90,160,245,.8)");
            $("#narbar_logo_big").attr("src", "https://www.tuchuang001.com/images/2017/05/11/gas_logo2.png");
            $("#narbar_logo_small").attr("src", "https://www.tuchuang001.com/images/2017/05/11/gas_logo2.png");
        } else {
            $(".main-navbar").css("background-color", "transparent");
            $("#narbar_logo_big").attr("src", "https://www.tuchuang001.com/images/2017/05/11/gas_logo.png");
            $("#narbar_logo_small").attr("src", "https://www.tuchuang001.com/images/2017/05/11/gas_logo.png");
        }
    })
    $("#btn_Contact_bottom").click(function () {
        location.href = "#";
        $("#nav_btn_contact").click();
    });
});