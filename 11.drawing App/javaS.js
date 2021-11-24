$(function () {

    $("#slider").slider({
        min: 3, max: 30,
        slide: function (event, ui) {
            $("#cirlceInput").height(ui.value);
            $("#cirlceInput").width(ui.value);
        }
    });


    var paint = false;


    var paint_erase = "paint";

    var canvas = document.getElementById("paint");


    var ctx = canvas.getContext("2d");

    var canvasBounds = canvas.getBoundingClientRect();

    var container = $("#container");
    var mouse = { x: 0, y: 0 };
    if (localStorage.getItem("imgCanvas") != null) {
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };

        img.src = localStorage.getItem("imgCanvas");
    }

    ctx.lineWidth = 3;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";





    container.mousedown(function (e) {
        paint = true;
        ctx.beginPath();
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;

        ctx.moveTo(mouse.x, mouse.y);


    });

    container.mousemove(function (e) {
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        if (paint == true) {

            if (paint_erase == "paint") {
                ctx.strokeStyle = $("#paintColor").val();
            } else {
                ctx.strokeStyle = "white";


            }
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
    });

    container.mouseup(function (e) {
        paint = false;

    });

    container.mouseleave(function (e) {
        paint = false;

    });
    $("#erase").click(function () {

        if (paint_erase == "paint") {

            paint_erase = "erese";
        }

        else {

            paint_erase = "paint";

        }


        $(this).toggleClass("eraseMode");
    });

    $("#reset").click(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        paint_erase = "paint";
        $("#erase").removeClass("eraseMode");

    });


    $("#save").click(function () {

        if (typeof (localStorage) != null) {
            localStorage.setItem("imgCanvas", canvas.toDataURL());
        }
        else {
            window.alert("hi");
        }

    });

$("#paintColor").change(function(){

$("#cirlceInput").css("background-color",$(this).val())


});
    $("#slider").slider({
        min: 3, max: 30,
        slide: function (event, ui) {
            $("#cirlceInput").height(ui.value);
            $("#cirlceInput").width(ui.value);
            ctx.lineWidth = ui.value;
        }
    });
})


