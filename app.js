let reviews = [
    {
        name: "susan ",

        revSrc: "Google review ",

        profilePic:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        review: `Was such a pleasent 
                experience! Had my 
                back resored in 3 
                month after 2 years of 
                pain  `
    },
    {
        name: "smith",

        revSrc: "Instagram review",

        profilePic:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        review: `plenty of good things 
                to say about this office 
                and wonderful doctor! 
                Emily assisted me at 
                the fron desk and 
                was very kind and 
                understanding .Highligly
                recomend this office!`
    },
    {
        name: "Lee",

        revSrc:"Linkedin review",

        profilePic:"https://images.unsplash.com/photo-1581391528803-54be77ce23e3?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        review: "Excellent care, professional  staff  clean facility—highly recommend "
    },
    {
        name: "Emilly",

        revSrc: "Twitter review",

        profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8fDA%3D",

        review: `Exceptional care! After years of 
                chronic pain, I finally found relief 
                here. The team is top-notch, 
                and the results speak for themselves. 
                I couldn’t be happier with my experience!`
    },
    {
        name: "David",

        revSrc: "Healthgrades review",

        profilePic: "https://images.unsplash.com/photo-1584999734482-0361aecad844?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8fDA%3D",

        review: `Fantastic experience! The entire 
                team was very welcoming and 
                professional. My pain disappeared 
                within weeks, and I feel so much 
                better. Highly recommend their services!`
    },
    {
        name: "Olivia",

        revSrc: "Zocdoc review",

        profilePic: "https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjExfHxwcm9maWxlJTIwcGljfGVufDB8fDB8fHww",

        review: `A truly outstanding service! The staff 
                went above and beyond to ensure my 
                comfort and recovery. After years of 
                struggling with pain, I'm finally able 
                to enjoy life again. A big thank you to 
                the whole team!`
    }


]


let review = document.querySelector('.review');
let name = document.querySelector('.name');
let profilePic = document.querySelector('.profile-pic');
let rev = document.querySelector('.rev');

let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');


let reviewIndex = 0;

function showRev(index){
    review.textContent = reviews[index].review
    name.textContent = reviews[index].name
    profilePic.style.backgroundImage  = `url('${reviews[reviewIndex].profilePic}')`
    rev.textContent = reviews[index].revSrc
}



window.addEventListener('DOMContentLoaded' ,function(){
  showRev(reviewIndex)
})


nextBtn.addEventListener('click',function(){
    reviewIndex++
    if(reviewIndex > reviews.length-1){
        reviewIndex = 0
    }
    showRev(reviewIndex)
})





prevBtn.addEventListener('click',function(){
    reviewIndex--
    if(reviewIndex < 0){
        reviewIndex = reviews.length-1
    }
    showRev(reviewIndex)
})
