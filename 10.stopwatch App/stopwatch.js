$(function () {


    var appMode = false;
    var timeCounter = 0;
    var lapCounter = 0;
    var action;
    var laps = 0;


    var minutes;
    var Lap_minutes;
    var seconds;
    var Lap_seconds;
    var centiSeconds;
    var Lap_centiSeconds;
    hideShowButtons("#startBut", "#lapBut");

    $("#startBut").click(function () {
        appMode = true;
        hideShowButtons("#stopBut", "#lapBut");

        startAction();

    });
    $("#stopBut").click(function () {
        hideShowButtons("#resumetBut", "#ResetBut");
        clearInterval(action);
    });

    $("#resumetBut").click(function () {
        hideShowButtons("#stopBut", "#lapBut");
        startAction();
    });

    $("#ResetBut").click(function () {
        location.reload();
    });



    $("#lapBut").click(function () {
        if (appMode == true) {
            clearInterval(action);
            lapCounter = 0;
            addLap();
            startAction();
        }
    });



    function addLap() {
        laps++;

        var myLapdetails = '<div> ' +

            '<div>' + 'Lap ' + laps + '</div>' +

            '<div>' +
            
            
            '<span>' + format(Lap_minutes) + ':</span>' +
            '<span>' + format(Lap_seconds) + ':</span>' +
            '<span>' + format(Lap_centiSeconds) + ':</span>' + '</div>'

            +
            '</div>';
        $(myLapdetails).appendTo("#laps");
    }

    function hideShowButtons(x, y) {
        $(".control").hide();
        $(x).show();
        $(y).show();
    }

    function startAction() {

        action = setInterval(function () {

            timeCounter++;
            if (timeCounter == 100 * 60 * 100) {
                timeCounter = 0;
            }
            lapCounter++;
            if (lapCounter == 100 * 60 * 100) {
                lapCounter = 0;
            }
            updateTime();


        }, 10);


    }






    /* upodate time */

    function updateTime() {

        minutes = Math.floor(timeCounter / 6000);

        seconds = Math.floor((timeCounter % 6000) / 100);
        centiSeconds = (timeCounter % 6000) % 100;
        $("#time_minute").text(format(minutes));
        $("#time_second").text(format(seconds));
        $("#time_cen_second").text(format(centiSeconds));

        Lap_minutes = Math.floor(lapCounter / 6000);
        Lap_seconds = Math.floor((lapCounter % 6000) / 100);
        Lap_centiSeconds = Math.floor((lapCounter % 6000) % 100);


        $("#lap_minute").text(format(Lap_minutes));
        $("#lap_second").text(format(Lap_seconds));
        $("#lap_cen_second").text(format(Lap_centiSeconds));
    }


    // format number 
    function format(val) {
        if (val < 10)
            return '0' + val;
        else return val;
    }
})
