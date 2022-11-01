// Toggle Light/Dark Mode
const toggleContainer = document.querySelector('#toggleContainer')
const toggle = document.querySelector('#toggle')
const switchToggle = document.querySelector('.switch')
const site = document.querySelector('html')

const switchColors = (e) => {
    if (toggle.classList.contains('darkMode')) {
        toggle.classList.remove('darkMode')
        toggle.classList.add('lightMode')
        site.classList.add('darkSite')
        switchToggle.classList.add('toDark')
        return
    } else {
        toggle.classList.remove('lightMode')
        toggle.classList.add('darkMode')
        site.classList.remove('darkSite')
        switchToggle.classList.remove('toDark')
        return
    }
}

toggleContainer.addEventListener("click", switchColors)





// projects.forEach(projects => {
//     const { projectName, client, year, caption, image, description, url, skills, } = projects;

//     const cardTransformer = document.createElement('div');
//     cardTransformer.classList.add('col', 'mb-3', 'd-flex');
//     cardTransformer.innerHTML = `
//         <div class="card bg-secondary flex-row rounded-3">
//             <div class="w-50">
//                 <img src="${image}" class="img-fluid object-fit" alt="">
//             </div>
//             <div class="card-body w-50">
//                 <h5 class="card-title"></h5>
//                 <h2 class="card-text mb-0 text-capitalize"><span>${nombre}</span>.</h2>
//                 <p class="card-text mb-3 text-capitalize"><span>${modelo}</span>.</p>
//                 <p class="card-text mb-3 text-capitalize"><b>Primera Aparición:</b> <span>${peliculaName}</span>.</p>
//                 <p class="card-text mb-0"><b>Descripción:</b><br> <span>${descripcion}</span></p>
//             </div>
//         </div>
//     `;

//     boxTransformers.appendChild(cardTransformer);
// });