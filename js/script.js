  /* Create script to change color of active/inactive tabs */
$(document).ready(function() {

    if(window.location.href.indexOf("index.html") > -1)
    {
        $("#page1tab").closest("li").css("background-color", "#796b6b");
        $("#page1tab").find("a").css("cursor", "default");
        $("#page1tab").find("a").css("border-bottom", "solid 1px #74b2c1");
    }
    if(window.location.href.indexOf("projects.html") > -1)
    {
        $("#page3tab").closest("li").css("background-color", "#796b6b");
        $("#page3tab").find("a").css("cursor", "default");
        $("#page3tab").find("a").css("border-bottom", "solid 1px #74b2c1");
    }
    if(window.location.href.indexOf("about.html") > -1)
    {
        $("#page2tab").closest("li").css("background-color", "#796b6b");
        $("#page2tab").find("a").css("cursor", "default");
        $("#page2tab").find("a").css("border-bottom", "solid 1px #74b2c1");
    }

    $(".tab").on("click", function()
    {
        $(this).closest("li").css("background-color", "#796b6b");
        //console.log("clicked");
    })


});