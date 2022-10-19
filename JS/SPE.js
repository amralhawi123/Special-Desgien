/* Start setting box*/
// check if there local setorg color option

let maincolor = localStorage.getItem("color_option")

if (maincolor !== null) {
    console.log(`local storg is not empty`)
    document.documentElement.style.setProperty(`--main-color`, maincolor)


        // remov Active class from All Colors list
        document.querySelectorAll(".colors-list li").forEach(element => {
            element.classList.remove("active")

        // add active class on element
            if (element.dataset.color === maincolor) {
                element.classList.add("active")
            }
        })
}

// Random backgroundImage
let backgroundOption = true

let bacgroundintervial;

// check if there local arndom background item
let backgroundlocal = localStorage.getItem("background-option")

// check if random background local is not empty
if (backgroundlocal !== null) {
    if (backgroundlocal === `true`) {
        backgroundOption =true
    } else {
        backgroundOption = false
    }

    // remov class activ 
    document.querySelectorAll(".Random-active span").forEach(element => {
        element.classList.remove("active")
    })

    if (backgroundlocal === `true`) {
        document.querySelector(".Random-active .Yes").classList.add("active")
    } else {
        document.querySelector(".Random-active .No").classList.add("active")
    }

}
// setting Box
document.querySelector(".fegear .set").onclick = function () {

    // Toggel Class for rotate
    this.classList.toggle("fa-spin")

    // tooggle class open
    document.querySelector(".setting-box").classList.toggle("open")
}

// switch color
const colorLi = document.querySelectorAll(".colors-list li")

colorLi.forEach(li => {

    li.addEventListener("click", (e) => {
    
        // set color on root
        document.documentElement.style.setProperty(`--main-color`, e.target.dataset.color)
        
        // set color on local storg
        localStorage.setItem("color_option",e.target.dataset.color )

handelActive(e)
    })

})

// switch Random background option
const randomBacEl = document.querySelectorAll(".Random-active span")

randomBacEl.forEach(span => {

    span.addEventListener("click", (e) => {

        handelActive(e)

        if (e.target.dataset.background === `yes`) {

            backgroundOption = true
            randomizeimage()
            localStorage.setItem("background-option", true)

        } else {

            backgroundOption = false

            clearInterval(bacgroundintervial)
            localStorage.setItem("background-option", false)

        }
    })

})

/* End setting box*/



/* Start landing Page*/
// Select landing
let landingPage = document.querySelector(".landing")

// Array of image
let ArrayImage = ["../Image/work4 - Copy.jpg", "../Image/book-library-with-open-textbook.jpg", "../Image/group-diverse-grads-throwing-caps-up-sky.jpg", "../Image/work1.jpg"]

// change backgroundImage
landingPage.style.backgroundImage = `url("../Image/book-library-with-open-textbook.jpg")`


function randomizeimage() {
    if (backgroundOption === true) {

    bacgroundintervial = setInterval(() => {
// Get Random Number
let randomNumber = Math.floor(Math.random() * ArrayImage.length)

// change backgroundImage
landingPage.style.backgroundImage = `url("../Image/`+ArrayImage[randomNumber] +`")`

}, 3000)
    }
}
randomizeimage()
/* End landing Page*/
/* Start skills */
const skill = document.querySelector(".skills")

window.onscroll = function () {

    let skillOffset = skill.offsetTop;

    let skillOuterHeight = skill.offsetHeight;

    let windowheight = this.innerHeight;

    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillOffset + skillOuterHeight - windowheight)) {

        let allSkill = document.querySelectorAll(".skill-box .skill-progress span")
        
        allSkill.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        })
    }

}

/* End skills */
/* start Gallary popup */
let ourGallary = document.querySelectorAll(".gallary img")

ourGallary.forEach(img => {
    
    img.addEventListener(`click`, (e) => {

        // creat overlay elment
        let overlayElement = document.createElement("div")

        // add class to overlay
        overlayElement.classList = `popup-overlay`;

        // apend overlay to body
        document.body.appendChild(overlayElement)

        // crat the poup
        let popupPox = document.createElement("div")

        // ad class to popup box
        popupPox.classList = `popup-pox`;


    // if (img.alt !== null) {
            
    //         // craet Heading
    //         let imageHading = document.createElement("h3")

    //         // text for heading
    //         let texetHeading = document.createTextNode(img.alt)

    //         // append texrt to heading
    //         imageHading.appendChild(texetHeading)

    //         // append heading to popup
    //         popupPox.appendChild(imageHading)
    //     }



        // creat the image
        let poupImage = document.createElement("img")

        // set image src
        poupImage.src = img.src

        // add imag to popup
        popupPox.appendChild(poupImage)

        // add popup to body
        document.body.appendChild(popupPox);

        // creat thr close spane
        let close = document.createElement("span")

        //creat texet to span
        let textSpanClos = document.createTextNode('X')

        // append texet to close span
        close.appendChild(textSpanClos)

        //add class to close
        close.className = `close`

        // add close to pupuop box
        popupPox.appendChild(close)

    })
})

// close poup
document.addEventListener("click", (el) => {
    
    if (el.target.className == 'close') {
        //remov poupu
        document.querySelector(".popup-pox").remove()
        document.querySelector(".popup-overlay").remove()
    }
})
/* End Gallary popup */
/* start bulltes */

// select All bulltes
const AllBulltes = document.querySelectorAll(".nav-bbullets .bullet")

AllBulltes.forEach(Bullet => {

    Bullet.addEventListener("click", (e) => {

        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior : "smooth"

        })

    })

})

// Bullets Option
let bulletOption = document.querySelectorAll(".Bullets-option span")

let bulletContainer = document.querySelector(".nav-bbullets")


// local storg

let bulletLocalStorg = localStorage.getItem("bullets-option")

if (bulletLocalStorg !== null) {

    bulletOption.forEach(span => {

        span.classList.remove("active")

    })

    if (bulletLocalStorg === 'block') {

            bulletContainer.style.display = 'block'
        document.querySelector(".Bullets-option .Yes").classList.add("active")

    } else {

            bulletContainer.style.display = 'none'
        document.querySelector(".Bullets-option .No").classList.add("active")


    }

}

bulletOption.forEach(span => {
    span.addEventListener("click", (e) => {

        if (span.dataset.display === 'Show') {
            bulletContainer.style.display = 'block'

            localStorage.setItem("bullets-option", "block")

        } else {
            bulletContainer.style.display = 'none'

            localStorage.setItem("bullets-option", "none")
        }
            handelActive(e)
    })
})

/* End bulltes */
/* start Arrow */
document.querySelector(".arrow").addEventListener("click", (e) => {

        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior : 'smooth'

        })

    })
/* end Arrow */


// Handel Activ
function handelActive(ev) {
            // remov Active class from All Childerns
        ev.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active")
        })

        // add active class
        ev.target.classList.add("active")
}


// rest-option
document.querySelector(".rest-option").onclick = function () {
    
    // localStorage.clear();  // to remov all Item

    localStorage.removeItem("background-option") // to remov this only option
    localStorage.removeItem("color_option")
    localStorage.removeItem("bullets-option")

    // Reload
    window.location.reload()
}
