// Toggle Light/Dark Mode
const toggleContainer = document.querySelector('#toggleContainer')
const toggle = document.querySelector('#toggle')
const switchToggle = document.querySelector('.switch')
const site = document.querySelector('html')
const greyFonts = document.querySelectorAll('.darkText')
const logosCarousel = document.querySelectorAll('.logoLight')

// PROJECTS CONSTANTS

const boxProjects = document.querySelector('.projects');

const switchColors = (e) => {
    if (toggle.classList.contains('darkMode')) {
        toggle.classList.remove('darkMode')
        toggle.classList.add('lightMode')
        site.classList.add('darkSite')
        switchToggle.classList.add('toDark')
        logosCarousel.classList.remove('logoLight')
        logosCarousel.classList.add('logoDark')
        for (text in greyFonts) {
            greyFonts[text].classList.remove('darkText')
            greyFonts[text].classList.add('lightText')

        }

        return
    } else {
        toggle.classList.remove('lightMode')
        toggle.classList.add('darkMode')
        site.classList.remove('darkSite')
        switchToggle.classList.remove('toDark')
        logosCarousel.classList.remove('logoDark')
        logosCarousel.classList.add('logoLight')
        for (text in greyFonts) {
            greyFonts[text].classList.remove('lightText')
            greyFonts[text].classList.add('darkText')

        }


        return
    }
}

toggleContainer.addEventListener("click", switchColors)


// Projects navigations
const navProjects = document.querySelector('.categories')
const categories = navProjects.querySelectorAll('li')

for (let cat = 0; cat < categories.length; cat++) {
    categories[cat].addEventListener("click", function() {
        // REMOVING DEFAULT CATEGORY
        categories[0].classList.remove('active')
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += "active";
        return
    })
}


// PROJECTS BUILDER

const categoryFilter = () => {
        categories[cat].addEventListener("click", function(e) {
            let categoryFilterRes = e.id
            return console.log(categoryFilterRes)
        })
    }
    // Creating Protoype for card

class ProjectCard {
    constructor(image, projectName, caption, link) {
        this.image = image
        this.projectName = projectName
        this.caption = caption
        this.link = link
    }

    createCards() {
        const cardProj = document.createElement('div')
        cardProj.classList.add('card')
        cardProj.innerHTML = `
                    <div class="imageContainer">
                        <div class="overlay"></div>
                        <img src=${this.image} class="w-100">
                    </div>
                    <div class="meta">
                        <div class="row w-100">
                            <div class="col-12">
                                <h5 class="mt-4">${this.projectName}</h5>
                                <p class="mb-4">${this.caption}</p>
                                <span class="mt-2">Read More</span>
                            </div>
                        </div>
                    </div>`

        boxProjects.appendChild(cardProj)
    }
}

const runProjects = (projectCat) => {
    for (let i = 0; i < projectCat.length; i++) {
        const projectProt = new ProjectCard(projectCat[i].image, projectCat[i].projectName, projectCat[i].caption, projectCat[i].link, )

        // Creating cards for each project
        projectProt.createCards()
    }

}

const createEachCard = (protToHTML) => {
    protToHTML.createCards()
}


// Running first category on load
document.addEventListener("DOMContentLoaded", runProjects(webDevProjects))