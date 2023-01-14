// Toggle Light/Dark Mode
const toggleContainer = document.querySelector('#toggleContainer')
const toggle = document.querySelector('#toggle')
const switchToggle = document.querySelector('.switch')
const site = document.querySelector('html')
const greyFonts = document.querySelectorAll('.darkText')
const logosCarousel = document.querySelectorAll('.logoLight')

// PROJECTS CONSTANTS

const boxProjects = document.querySelector('.projects');
const modalProjects = document.querySelector('.projectsModal')
const modalBg = document.querySelector('.modalBg')


const switchColors = (e) => {
    if (toggle.classList.contains('darkMode')) {
        toggle.classList.remove('darkMode')
        toggle.classList.add('lightMode')
        site.classList.add('darkSite')
        switchToggle.classList.add('toDark')
            // logosCarousel.classList.add('logoDark')
        for (let i = 0; i < greyFonts.length; i++) {
            greyFonts[i].classList.remove('darkText')
            greyFonts[i].classList.add('lightText')

        }
        for (let i = 0; i < logosCarousel.length; i++) {
            logosCarousel[i].classList.toggle('logoDark')

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

        for (let i = 0; i < logosCarousel.length; i++) {
            logosCarousel[i].classList.toggle('logoLight')

        }

        for (let i = 0; i < greyFonts.length; i++) {
            greyFonts[i].classList.remove('lightText')
            greyFonts[i].classList.add('darkText')

        }

        return
    }
}

toggleContainer.addEventListener("click", switchColors)


// Projects navigation
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
    // Creating Prototype for card

class ProjectCard {
    constructor(projectName, client, year, caption, image, text, link, url, skills) {
        this.projectName = projectName
        this.client = client
        this.year = year
        this.caption = caption
        this.image = image
        this.text = text
        this.link = link
        this.url = url
        this.skills = skills
    }

    createCards() {
        const cardProj = document.createElement('div')
        cardProj.classList.add('card')
        cardProj.innerHTML = `
                    <div class="imageContainer">
                        <div class="overlay"></div>
                        <img src=${this.image} class="w-100" loading="lazy">
                    </div>
                    <div class="meta">
                        <div class="row w-100 justify-content-between">
                            <div class="col-12 d-flex flex-column h-240">
                                <h6 class="client-card-title">${this.client}</h6>
                                <h5>${this.projectName}</h5>
                                <p class="mb-4">${this.caption}</p>
                                <a class="mb-4"><span class="mt-2 project-link" id="${this.link}" onclick="createMetaCard(searchInProjectList(allProjects(), getProjectId(event)))">Read More</span></a>
                            </div>
                        </div>
                    </div>`

        boxProjects.appendChild(cardProj)
    }

    createMeta(fnSkills, obtainedID) {
        const metaCard = document.createElement('div')
        metaCard.classList.add('modalContainer')
        metaCard.innerHTML = `
        <div class="modalBg">
            <div class="cardMeta">
            <img src="./img/close.svg" class="closeModal" id="closeModal" onclick ="closeModal()">
                <img class="w-100 roundCorners" src="${this.image}">
                    <h3 class="client">${this.client}</h3>
                    <h2 class="title">${this.projectName}</h2>
                    <p class="year">${this.year}</p>
                    <p class="description"> ${this.text}</p>
                    <div class="row w-100 mt-3">
                    <div class="col-9">
                        <div class="row" id="projSkills"></div>
                    </div>
                    <div class="col-3">
                        <a href="${this.url}"><span class="metaLink">See project</span></a>
                    </div>
            </div>
        </div>
        `
        modalProjects.appendChild(metaCard)

        fnSkills(obtainedID)
    }

}

const runProjects = (projectCat) => {
    for (let i = 0; i < projectCat.length; i++) {
        const projectProt = new ProjectCard(projectCat[i].projectName, projectCat[i].client, projectCat[i].year, projectCat[i].caption, projectCat[i].image, projectCat[i].text, projectCat[i].link, projectCat[i].url, projectCat[i].skills)

        // Creating cards for each project
        projectProt.createCards()

    }

}

// const createEachCard = (protToHTML) => {
//     protToHTML.createCards()
// }


// Running first category on load
document.addEventListener("DOMContentLoaded", runProjects(webDevProjects))

// Erasing current projects

// document.querySelector("#advertising").addEventListener("click", () => {
//     runProjects(advertising)
// })




// Listening to category clicked
// const clickedCat = (e) => {
//     let id = e.target.id
//     console.log(e.target.id)
//     return id
// }
// document.addEventListener('click', clickedCat)


// Bringing array corresponding to target id
// const searchProjectsArray = (selectedCat) => {

// }

// Changing category to webDev
document.querySelector("#webDev").addEventListener("click", () => {

    let projectBox = document.querySelector("#projects")
    while (projectBox.hasChildNodes()) {
        projectBox.removeChild(projectBox.firstChild)
    }

    return runProjects(webDevProjects)
})

// Changing category to advertising
document.querySelector("#advertising").addEventListener("click", () => {

    let projectBox = document.querySelector("#projects")
    while (projectBox.hasChildNodes()) {
        projectBox.removeChild(projectBox.firstChild)
    }

    return runProjects(advertising)
})

// Changing category to spatial
document.querySelector("#spatial").addEventListener("click", () => {

    let projectBox = document.querySelector("#projects")
    while (projectBox.hasChildNodes()) {
        projectBox.removeChild(projectBox.firstChild)
    }

    return runProjects(spatial)
})

// Changing category to visualDesign
document.querySelector("#visualDesign").addEventListener("click", () => {

    let projectBox = document.querySelector("#projects")
    while (projectBox.hasChildNodes()) {
        projectBox.removeChild(projectBox.firstChild)
    }

    return runProjects(visualDesign)
})

// Changing category to innovation
document.querySelector("#innovation").addEventListener("click", () => {

    let projectBox = document.querySelector("#projects")
    while (projectBox.hasChildNodes()) {
        projectBox.removeChild(projectBox.firstChild)
    }

    return runProjects(innovation)
})


// Creating meta info modals---------------

// Bringing id form selected project
const getProjectId = (e) => {
    let id = e.target.id
        // console.log(id)
    return id
}

// Searching project in corresponding Array
const searchInProjectList = (arr, obtainedID) => {
    let selectedProj = arr.find(project => project.link == `${obtainedID}`)
        // console.log(selectedProj)
    return selectedProj
}


// Iterating skills for creating pills
function bringSkills(obtainedID) {
    let findSkills = allProjects().find(project => project.link == `${obtainedID}`)
        // console.log(findSkills.skills)
    for (let i = 0; i < findSkills.skills.length; i++) {
        // console.log(fn2[i].skills)
        let eachSkill = document.createElement('div')
        eachSkill.classList.add('pill')
        eachSkill.innerHTML = `<span>${findSkills.skills[i]}</span>`

        // console.log(eachSkill)
        document.querySelector('#projSkills').appendChild(eachSkill)
    }
}


// Creating card matching the ID
const createMetaCard = (fn2) => {
    // Creating class
    const createMetaCard = new ProjectCard(fn2.projectName, fn2.client, fn2.year, fn2.caption, fn2.image, fn2.text, fn2.link, fn2.url, fn2.skills)

    // Calling meta prop
    createMetaCard.createMeta(bringSkills, getProjectId(event))


}





// Removing modal on click elsewhere
// function removeModal() {
//     modalProjects.removeChild(modalProjects.firstChild)
// }

// modalProjects.addEventListener('click', removeModal())

// Removing modal when click close button
function closeModal() {
    // let btn = document.querySelector('#closeModal')
    modalProjects.removeChild(modalProjects.firstChild)

}

// All project arrays
const allProjects = () => {
    let all = webDevProjects.concat(spatial, advertising, visualDesign, innovation)
    return all
}

// document.querySelector('#categories').addEventListener('click', arrayFromEventId(getProjectId))