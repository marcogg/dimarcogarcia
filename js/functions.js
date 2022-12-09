// Toggle Light/Dark Mode
const toggleContainer = document.querySelector('#toggleContainer')
const toggle = document.querySelector('#toggle')
const switchToggle = document.querySelector('.switch')
const site = document.querySelector('html')
const greyFonts = document.querySelectorAll('.darkText')

// PROJECTS CONSTANTS

const boxProjects = document.querySelector('.projects');

const switchColors = (e) => {
    if (toggle.classList.contains('darkMode')) {
        toggle.classList.remove('darkMode')
        toggle.classList.add('lightMode')
        site.classList.add('darkSite')
        switchToggle.classList.add('toDark')
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

    createCard() {

    }
}