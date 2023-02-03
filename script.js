// Hamburger menu
const btn = document.querySelector('#hamburger');
const nav = document.querySelector('.nav nav');
const openNav = document.querySelector('.menuOn');
const closeBtn = document.querySelector('.crossIcon');
const menuLink = document.querySelectorAll('#menu-link li a');

const toggleMenuDisplay = () => {
  if (nav.style.display !== 'none') {
    nav.style.display = 'none';
    openNav.style.display = 'flex';
  } else {
    nav.style.display = 'grid';
    openNav.style.display = 'none';
  }
};

btn.addEventListener('click', toggleMenuDisplay);
closeBtn.addEventListener('click', toggleMenuDisplay);
menuLink.forEach((link) => {
  link.addEventListener('click', toggleMenuDisplay);
});



// Work cards

const projectData = [{
  id: 0,
  title: 'Professional Art<br>Printing Data',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  technologies: ['html', 'Bootstrap', 'Ruby'],
  liveUrl: '#',
  sourceUrl: '#',
},
{
  id: 1,
  title: 'Professional Art<br>Printing Data',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  technologies: ['html', 'Bootstrap', 'Ruby'],
  liveUrl: '#',
  sourceUrl: '#',
},
{
  id: 2,
  title: 'Professional Art<br>Printing Data',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  technologies: ['html', 'Bootstrap', 'Ruby'],
  liveUrl: '#',
  sourceUrl: '#',
},
{
  id: 3,
  title: 'Professional Art<br>Printing Data',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  technologies: ['html', 'Bootstrap', 'Ruby'],
  liveUrl: '#',
  sourceUrl: '#',
},
{
  id: 4,
  title: 'Professional Art<br>Printing Data',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  technologies: ['html', 'Bootstrap', 'Ruby'],
  liveUrl: '#',
  sourceUrl: '#',
},
{
  id: 5,
  title: 'Professional Art<br>Printing Data',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  technologies: ['html', 'Bootstrap', 'Ruby'],
  liveUrl: '#',
  sourceUrl: '#',
}];

const projectDataDesktop = [
  {
    id: 0,
    title: 'Professional Art<br>Printing Data More',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 1,
    title: 'Data Dashboard<br>Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 2,
    title: 'Website Portfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 3,
    title: 'Professional Art<br>Printing Data More',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 4,
    title: 'Data Dashboard<br>Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 5,
    title: 'Website Portfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveUrl: '#',
    sourceUrl: '#',
  },
];

for (let i = 0; i < projectData.length; i++) { 
  const card = document.createElement('div');
  card.setAttribute('data-cardId', `${projectData[i].id}`);
  card.innerHTML = `
  <div class="project-data color-primary card=${projectData[i].id}">
    <h2>${projectData[i].title}</h2>
    <p>${projectData[i].description}</p>
    <ul class="project-links">
        <li>${projectData[i].technologies[0]}</li>
        <li>${projectData[i].technologies[1]}</li>
        <li>${projectData[i].technologies[2]}</li>
    </ul>
    <button id="${projectData[i].id}" class="seeProject-btn color-primary" data-id="${projectData[i].id}">See Project</button>
  </div>`;
  document.querySelector('.work-grids').appendChild(card);
}

for (let i = 0; i < projectDataDesktop.length; i += 1) {
  const card = document.createElement('div');
  card.setAttribute('data-cardId', `${projectData[i].id}`);
  card.innerHTML = `
  <div class="project-data color-primary card=${projectData[i].id}">
    <h6>${projectDataDesktop[i].title}</h6>
    <p>${projectDataDesktop[i].description}</p>
    <ul class="project-links">
      <li>${projectDataDesktop[i].technologies[0]}</li>
      <li>${projectDataDesktop[i].technologies[1]}</li>
      <li>${projectDataDesktop[i].technologies[2]}</li>
    </ul>
    <button id="${projectDataDesktop[i].id}" class="seeProject-btn color-primary" data-idDesktop="${projectData[i].id}">See Project</button>
  </div>`;
  document.querySelector('.work-grids-desktop').appendChild(card);
}

// Popup

function popupFuntion(cardId) {

  const popDiv = document.querySelector('#portfolio');
  popDiv.insertAdjacentHTML('afterend', `
  <div class="pop-background">
    <div class="popup">
      <div class="poptop">
        <h3>${projectData[cardId].title}</h3>
        <img class="closeProject" src="./assets/Icon.png" alt="cross">
      </div>
      <ul>
        <li>${projectData[cardId].technologies[0]}</li>
        <li>${projectData[cardId].technologies[1]}</li>
        <li>${projectData[cardId].technologies[2]}</li>
      </ul>
      <img src="./assets/Snapshoot Portfolio.png" alt="IOT 10 image">
      <p>${projectData[cardId].description}</p>
      <div class="btn-div">
        <button href="${projectData[cardId].liveUrl}">See Live<img src="./assets/Icon - Export.png" alt="export"></button>
        <button href="${projectData[cardId].sourceUrl}">See Source<img src="./assets/Icon -GitHub.png" alt="github"></button>
      </div>
    </div>
    <div class="desktopPopup">
      <div class="poptop-desktop">
        <h3>Keeping track of thousands of components website</h3>
        <img class="closeProject" src="/assets/Icon - Cancel.png" alt="cross">
      </div>
      <ul>
        <li>html</li>
        <li>Bootstrap</li>
        <li>Ruby on rails</li>
      </ul>
      <div class="popDiskDiv">
        <div>
          <img id="snapshootDesktop" src="./assets/Snapshoot desktop.png" alt="IOT 10 image">
        </div>
        <div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.</p>
          <div class="deskBtnDiv"><button>See Live<img src="./assets/Icon - Export Desktop.png" alt="export"></button><button>See Source<img src="./assets/Icon -GitHub-Desktop.png" alt="github"></button></div>
        </div>
      </div>
    </div>
  </div>`);

  
  const togglePopup = () => {
    document.querySelector('.pop-background').classList.toggle('openPopup');
  };
  
  togglePopup();

  const closeProject = document.querySelectorAll('.closeProject');
  closeProject.forEach((closePro) => {
    closePro.addEventListener('click', togglePopup);
  });
}

// function

const projectButtons = document.querySelectorAll('.seeProject-btn');
projectButtons.forEach((element) => {
  element.addEventListener('click', (e) => {
    popupFuntion(e.target.dataset.id);
  });
})
