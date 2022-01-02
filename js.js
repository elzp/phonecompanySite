    const menuBars = document.getElementById("bars");
    let navbar = document.getElementById("nav-bar");
    const navbardisplay = navbar.style.display;
    const mediaQuery = 600;
    
// change visibility o menu bars and display readable&clickable menu
menuBars.addEventListener('click', ()=>{

    if (navbar.style.display === "none" || navbar.style.display === "") {
        navbar.style.display = "grid";
        menuBars.style.display = "none";
    }

    
}, false)
// ok --- remove visibility of icon bars when nawigation/menu is visible 
const notnavbar = document.querySelectorAll("main *");

const showBars = ()=>{
  
    if ((navbar.style.display !== "none") &
       menuBars.style.display !== ""  ) {
       navbar.style.display = "none";
       menuBars.style.display = "block";
   }
}
notnavbar.forEach(element => {element.addEventListener('click', 
() =>{
    showBars();
}
, false)
});

// ok - after opening navigation when width <mediaQuery, when user accelerate width of window and returns to window with < mediaQuery, there shouldn't be visible opened nawigation
window.addEventListener("resize", ()=> {
    if(window.innerWidth > mediaQuery) {
        menuBars.style.display = "none";
        navbar.style.display = "grid";
        // console.log(window.innerWidth)
    }
    else {
        menuBars.style.display = "block";
        navbar.style.display = "none";
        // console.log(window.innerWidth)
    }
    // console.log(document.width)
})

// notify = function() { console.log("You just resized the browser window.")}
// window.addEventListener("resize", notify)

//ok --- go to sections about
// const sectionsOfMain = document.querySelectorAll("main>section")
// const divFromNav = document.querySelectorAll("nav>div");
// console.log("in nav-bar is: ",divFromNav)
// console.log("sections in main are: ",sectionsOfMain)
// divFromNav.forEach((it, index)=> {
//     // const wnavbarSection = document.getElementById(namesOfSections[index]);



//     it.addEventListener('click', ()=>{
//         const positionDetails = divFromNav[index].getBoundingClientRect();
//         console.log('scrollfunction"', positionDetails)
//         if(window.visualViewport.pageTop!==positionDetails.x)  
//        {
//         console.log('window poziiton"', window.visualViewport.pageTop)
//         console.log('before scrollfunction"', positionDetails)
//             window.scrollTo(positionDetails.x,0);
//             console.log('after scrollfunction"', positionDetails)
//     }
//     } )

// })




const about = document.querySelector("#nav-bar>div:nth-child(1)");
const offer = document.querySelector("#nav-bar>div:nth-child(2)");
const contact = document.querySelector("#nav-bar>div:nth-child(3)");
const arr = ["welcome-section", "offer", "where"]

const welcomesection = document.getElementById(arr[0]);
const offersection = document.getElementById(arr[1]);
const contactsection = document.getElementById(arr[2]);


about.addEventListener('click', ()=>{
    let  dimm = welcomesection.getBoundingClientRect();
    // console.log('scroll function')
    // console.log( 'window.pageYOffset',  window.pageYOffset)
    // console.log('element top',dimm.top)
    // console.log( "viewportTop",window.visualViewport.pageTop)
    // console.log("full dim", dimm)    
    const partOfTranslation = dimm.top + window.scrollY 
    if(window.visualViewport.pageTop !==  partOfTranslation) window.scrollTo(0, partOfTranslation - 110);
   
    dimm = welcomesection.getBoundingClientRect();
    // console.log('after scroll function')
    // console.log( 'window.pageYOffset',  window.pageYOffset)
    // console.log('element top',dimm.top)
    // console.log( "viewportTop",window.visualViewport.pageTop)
    // console.log("full dim", dimm)
    if(window.innerWidth <= mediaQuery) showBars()
} )

offer.addEventListener('click', ()=>{
    let  dimm = offersection.getBoundingClientRect();
    // console.log('scroll function')
    // console.log( 'window.pageYOffset',  window.pageYOffset)
    // console.log('element top',dimm.top)
    // console.log( "viewportTop",window.visualViewport.pageTop)
    // console.log("full dim", dimm)   
    const partOfTranslation = dimm.top + window.scrollY 
    if(window.visualViewport.pageTop !==  partOfTranslation) {
        if(window.innerWidth <= mediaQuery){
            window.scrollTo(0, partOfTranslation - 80);
        }
        else{ 
            window.scrollTo(0, partOfTranslation - 95);
    
        }
    }
    // if(window.visualViewport.pageTop !==  partOfTranslation)  window.scrollTo(0, partOfTranslation - 95);
    dimm = offersection.getBoundingClientRect();
    // console.log('after scroll function')
    // console.log( 'window.pageYOffset',  window.pageYOffset)
    // console.log('element top',dimm.top)
    // console.log( "viewportTop",window.visualViewport.pageTop)
    // console.log("full dim", dimm)
    if(window.innerWidth <= mediaQuery) showBars()
} )

contact.addEventListener('click', ()=>{
    let  dimm = contactsection.getBoundingClientRect();
    // console.log('scroll function')
    // console.log( 'window.pageYOffset',  window.pageYOffset)
    // console.log('element top',dimm.top)
    // console.log( "viewportTop",window.visualViewport.pageTop)
    // console.log("full dim", dimm)    
    const partOfTranslation = dimm.top + window.scrollY 

    if(window.visualViewport.pageTop !==  partOfTranslation) {
        if(window.innerWidth <= mediaQuery){
            window.scrollTo(0, partOfTranslation - 80);
        }
        else{ 
            window.scrollTo(0, partOfTranslation - 110);
    
        }
    }

     dimm = contactsection.getBoundingClientRect();
    //  console.log('after scroll function')
    //  console.log( 'window.pageYOffset',  window.pageYOffset)
    //  console.log('element top',dimm.top)
    //  console.log( "viewportTop",window.visualViewport.pageTop)
    //  console.log("full dim", dimm)
     if(window.innerWidth <= mediaQuery) showBars()
    } )


    console.log(document.documentElement.scrollHeight)
    console.log(window.innerHeight)
    console.log(window.visualViewport.pageTop)
const upButton = document.getElementsByClassName("up")[0];

const body = document.getElementsByTagName("body")
console.log(upButton)

window.addEventListener('scroll',
    ()=>{
        if(window.visualViewport.pageTop > 3/4 * window.innerHeight ){ 
            upButton.style.display = "grid";
        } 
        // console.log(upButton.style.display);
        if(window.visualViewport.pageTop <= 3/4 * window.innerHeight ){ 
            upButton.style.display = "none";
        } 
})

upButton.addEventListener('click',
()=>{
    window.scrollTo(0, 0);
    upButton.style.display = "none";
})