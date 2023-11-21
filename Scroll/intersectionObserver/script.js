//getting a Elemnts from HTML
const cards = document.querySelectorAll(".card");

//creating a instance of IntersectionObserver
//for each entry we will start the observation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show",entry.isIntersecting)

        //After the operation is done stop the OBSERVATION

        // if(entry.isIntersecting) observer.unobserve(entry.target) !important
    })
},
{
    //when the OBSERVATION to start ranges from ( 0 to 1 )
    //Applies to the element in below the observer start at
    //50% of the element is visible at screen
    threshold:0.5,

    //it's saying that our container is now 50px smaller than before

    // rootMargin:"-50px",

    //we can give root element that is if the parent element is given
    //than the observer will only apply to child elements inside of it

    // root: document.querySelector('#element'),
}
)

const lastCardObserver = new IntersectionObserver(entries => {
    const lastCard = entries[0];
    if(!lastCard.isIntersecting) return
    loadNewcards();
    lastCardObserver.unobserve(lastCard.target);
    lastCardObserver.observe(document.querySelector(".card:last-child"))
},{})

lastCardObserver.observe(document.querySelector(".card:last-child"));

//which elements to OBSERVE
cards.forEach((card) => {
    observer.observe(card)
})

function loadNewcards(){
    for(var i=0;i<10;i++){
        const card = document.createElement("div");
        card.classList.add("card");
        card.textContent = "New Card";
        observer.observe(card);
        document.querySelector(".card-container").append(card);
    }
}
