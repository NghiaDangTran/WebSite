const reviews = [
    {
        id: 0,
        img: "https://randomuser.me/api/portraits/men/11.jpg",
        name: "John Doe",
        job: "UX DESIGNER",
        text: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur facilis doloremque omnis magni quisquam corporis nihil eveniet provident deserunt ut reiciendis possimus id eligendi incidunt,        distinctio quaerat reprehenderit ipsum ipsam."
    }
    , {

        id: 1,
        img: "image/business-man-suit-smiley-faces-baldness-menswear_t20_yv7KgR.jpg",
        name: "Denzel Vega",
        job: "Occupational Therapist",
        text: "or each index of the array being filled, since it's not a lambda expression or anything, such as Longfei Wu's comment above, which initially fills the array with 0's, then uses the map function with a lambda to fill each element with a new array. The fill function simply fills the array with exactly what you tell it to. Does that make sense? For more info on the"

    }
    , {
        id: 2,
        img: "image/close-up-portrait-of-serious-young-black-man-with-colored-orange-fire-hair-beard-and-mustaches_t20_pW8Z4N.jpg"
        , name: "Hailee Spears",
        job: "Fitness Trainer",
        text: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content."
    }
    , {
        id: 3,
        img: "image/portrait-black-background-technology-girl-selfie-woman-asian-brunette-arabic-taking-photo-smartphone_t20_RzVxPv.jpg",
        name: "Alexa Salas",
        job: "Software Developer",
        text: "The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum."
    }
    , {
        id: 4,
        img: "image/selfie-time-at-the-yellow-toilet-at-mathallen-in-oslo_t20_LAd1pY.jpg",
        name: "Juan Salas",
        job: "Dental Hygienist",
        text: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”"

    }
    , {
        id: 5,
        img: "image/woman-portrait-confidence-brunette-dressed-brown-turtleneck-dark-background-dramatic-atmosphere_t20_P0zWmr.jpg",
        name: "Ronnie Lynn",
        job: "Surveyor"
        ,
        text: "Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero."
    }
    , {
        id: 6,
        img: "image/rosa-khutor-ski-resort-russia_t20_gLnpeG.jpg"

        , name: "Rosa Khutor",
        job: "Ski Resort Manager",
        text: "It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn't relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries."
    }
];

const goleft = document.getElementById("left");
const goright = document.getElementById("right");
const suprise = document.getElementById("Suprise");
const supran = document.getElementById("Nocontrol");



const namePeraon = document.getElementById("name");
const job = document.getElementById("job");
const text = document.getElementById("text");
const img = document.getElementById("image");

let curr = 0;



let ChangeData = (curr) => {

    namePeraon.innerHTML = reviews[curr].name;
    job.innerHTML = reviews[curr].job;
    text.innerHTML = reviews[curr].text;
    img.src = reviews[curr].img;





};

let changeRandom = () => {

    namePeraon.innerHTML = reviews[GetRANum(0, reviews.length - 1)].name;

    namePeraon.innerHTML = reviews[GetRANum(0, reviews.length - 1)].name;
    job.innerHTML = reviews[GetRANum(0, reviews.length - 1)].job;
    text.innerHTML = reviews[GetRANum(0, reviews.length - 1)].text;
    img.src = reviews[GetRANum(0, reviews.length - 1)].img;

};


let GetRANum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)

};


goleft.addEventListener("click", () => {
    curr--;
    if (curr < 0) {
        curr = reviews.length - 1;
    }
    ChangeData(curr);
    console.log(curr);
});
goright.addEventListener("click", () => {
    curr++;
    if (curr >= reviews.length) {
        curr = 0;
    }
    ChangeData(curr);
    console.log(curr);
    // mp the negative number to the length of the array


});

suprise.addEventListener("click", () => {


    ChangeData(GetRANum(0, reviews.length - 1));

});
supran.addEventListener("click", () => {
    changeRandom();


});

