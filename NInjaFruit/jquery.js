// main class
var start = false;
var point = 0;
var
    heartLost = ["#img3", "#img2", "#img1"];
var fruit = ["img/1.png", "img/2.png", "img/3.png", "img/4.png", "img/5.png", "img/6.png", "img/7.png", "img/8.png"]

$("#startreset").click(function() {
    start = !start;
    if (start != true)
        location.reload();

    else {

        doFreuit();
    } // $("#img1").removeAttr('src');

});



function doFreuit() {
    var pos = Math.floor((Math.random() * ($("#fruitsContainer").width() - 50)) + 0);

    var getFruit = Math.floor((Math.random() * 8) + 0);
    $("#fruit1").attr("src", fruit[getFruit]);
    $("#fruit1").show();
    $("#fruit1").css({

        left: pos + "px"
    });

    var max = $("#fruitsContainer").height();
    var speed = Math.floor((Math.random() * 3) + 1);

    var postop = 0;


    // This block will be executed 100 times.
    var check = setInterval(function() {
        if (heartLost.length > 0) {

            if (postop >= max) {
                $("#fruit1").css({

                    top: -50 + "px"
                });
                speed = 0;
                postop = 0;
                clearInterval(check);
                $(heartLost.pop()).remove();
                doFreuit();

                if (heartLost.length == 0) {
                    $("#gameOver").show();
                    $("#Scorevalue").text(point);

                    clearInterval(check);

                }
            } else {
                postop += speed;

                $("#fruit1").css({

                    top: postop + "px"
                });
                if ($('#fruit1:hover').length != 0) {
                    point++;
                    $("#fruit1").css({

                        top: -50 + "px"
                    });


                    doFreuit();


                    $("#scorevalue").text(point);
                    clearInterval(check);

                }

            }
        }
    }, 10);
}


///1 array cotain all the image
// but need to check if the heart is bigger than 0
// 
// 2 randomw which fruit to use then random speed
// if mouse is hover that fruit delete call new fruit score ++;
//