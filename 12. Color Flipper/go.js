let simple = true;


const nameHeader1 = document.getElementById("hedder1");
const nameHeader2 = document.getElementById("hedder2");





nameHeader1.addEventListener("click", function () {

    simple = true;
    nameHeader1.style.backgroundColor = "black";
    nameHeader1.style.color = "white";
    nameHeader2.style.backgroundColor = "white";
    nameHeader2.style.color = "black";

    console.log("hi");


    const colors = ["green", "red", "Aqua", "Azure", "Coral", "CornflowerBlue", "Cyan", "DeepPink", "ForestGreen", "GreenYellow", "IndianRed", "MediumBlue"];




    btn.addEventListener("click", function () {
        const randomNumber = getRandomNUmber();
        document.body.style.backgroundColor = colors[randomNumber];
        color.textContent = colors[randomNumber];
        color.style.color = colors[randomNumber];

    });



    function getRandomNUmber() {
        return Math.floor(Math.random() * colors.length);
    }
})

nameHeader2.addEventListener("click", function () {

    simple = false;
    nameHeader2.style.backgroundColor = "black";
    nameHeader2.style.color = "white";
    nameHeader1.style.backgroundColor = "white";
    nameHeader1.style.color = "black";

    console.log("hello");
    const numtoCHoose = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

    function randomColor() {
        var cOlor = "";

        for (let i = 0; i < 6; i++) {


            cOlor += numtoCHoose[Math.floor(Math.random() * numtoCHoose.length)];



        }

        return "#" + cOlor;
    }


    btn.addEventListener("click", function () {
        var randCo = randomColor();
        document.body.style.backgroundColor = randCo;
        color.textContent = randCo;
        color.style.color = randCo;

    });

})

const btn = document.getElementById("clickMe");
const color = document.getElementById("nameCOlor");

