// Variables
const body = document.querySelector('body');
const btn = document.querySelector('#hamburger');
const nav = document.querySelector('.nav nav');
const openNav = document.querySelector('.menuOn');
const closeBtn = document.querySelector('.crossIcon');
const menuLink = document.querySelectorAll('#menu-link li a');
const popup = document.querySelector('.pop-background');
const openPopBtn = document.querySelector('.orange-btn');
const closePopBtn = document.querySelector('.poptop img');
const seeProject = document.querySelectorAll('.seeProject-btn');
const closeCrossDesktop = document.querySelector('.poptop-desktop img');
const works = document.getElementById('portfolio');
const cards = `        <div class="work-grids">
<div class="project-data color-primary">
    <h2>Professional Art<br>Printing Data</h2>
    <p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard</p>
    <ul class="project-links">
        <li>html</li>
        <li>bootstrap</li>
        <li>Ruby</li>
    </ul>
   <button class="seeProject-btn color-primary">See Project</button>
</div>
<div class="project-data color-primary">
    <h2>Professional Art<br>Printing Data</h2>
    <p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard</p>
    <ul class="project-links">
        <li>html</li>
        <li>bootstrap</li>
        <li>Ruby</li>
    </ul>
    <button class="seeProject-btn color-primary">See Project</button>
</div>
<div class="project-data color-primary">
    <h2>Professional Art<br>Printing Data</h2>
    <p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard</p>
    <ul class="project-links">
        <li>html</li>
        <li>bootstrap</li>
        <li>Ruby</li>
    </ul>
    <button class="seeProject-btn color-primary">See Project</button>
</div>
<div class="project-data color-primary">
    <h2>Professional Art<br>Printing Data</h2>
    <p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard</p>
    <ul class="project-links">
        <li>html</li>
        <li>bootstrap</li>
        <li>Ruby</li>
    </ul>
    <button class="seeProject-btn color-primary">See Project</button>
</div>
<div class="project-data color-primary">
    <h2>Professional Art<br>Printing Data</h2>
    <p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard</p>
    <ul class="project-links">
        <li>html</li>
        <li>bootstrap</li>
        <li>Ruby</li>
    </ul>
    <button class="seeProject-btn color-primary">See Project</button>
</div>
<div class="project-data color-primary">
    <h2>Professional Art<br>Printing Data</h2>
    <p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard</p>
    <ul class="project-links">
        <li>html</li>
        <li>bootstrap</li>
        <li>Ruby</li>
    </ul>
    <button class="seeProject-btn color-primary">See Project</button>
</div>
</div>
<div class="work-grids-desktop color-primary">
<div class="work-grid-1 work-grid-desktop">
    <h6>Profesional Art Printing Data More</h6>
    <p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard</p>
    <ul class="project-links">
        <li>html</li>
        <li>bootstrap</li>
        <li>Ruby</li>
    </ul>
    <button class="seeProject-btn color-primary button">See project</button>
</div>
<div class="work-grid-2 work-grid-desktop">
    <h6>Data Dashboard<br>Healthcare</h6>
    <p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard</p>
    <ul class="project-links">
        <li>html</li>
        <li>bootstrap</li>
        <li>Ruby</li>
    </ul>
    <button class="seeProject-btn color-primary button">See project</button>
</div>
<div class="work-grid-3 work-grid-desktop">
    <h6>Website Protfolio</h6>
    <p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard</p>
    <ul class="project-links">
        <li>html</li>
        <li>bootstrap</li>
        <li>Ruby</li>
    </ul>
    <button class="seeProject-btn color-primary button">See project</button>
</div>
<div class="work-grid-1 work-grid-desktop">
    <h6>Profesional Art Printing Data More</h6>
    <p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard</p>
    <ul class="project-links wl-1">
        <li>html</li>
        <li>bootstrap</li>
        <li>Ruby</li>
    </ul>
    <button class="seeProject-btn color-primary button">See project</button>
</div>
<div class="work-grid-2 work-grid-desktop">
    <h6>Data Dashboard<br>Healthcare</h6>
    <p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard</p>
    <ul class="project-links">
        <li>html</li>
        <li>bootstrap</li>
        <li>Ruby</li>
    </ul>
    <button class="seeProject-btn color-primary button">See project</button>
</div>
<div class="work-grid-3 work-grid-desktop">
    <h6>Website Protfolio</h6>
    <p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard</p>
    <ul class="project-links">
        <li>html</li>
        <li>bootstrap</li>
        <li>Ruby</li>
    </ul>
    <button class="seeProject-btn color-primary button">See project</button>
</div>
</div>`;
const popupContent = `    <div class="pop-background">
<div class="popup">
    <div class="poptop"><h3>Multi Post Stories</h3><img src="./assets/Icon.png" alt="cross">
    </div>
        <ul>
            <li>html</li>
            <li>Bootstrap</li>
            <li>Ruby on rails</li>
        </ul>
    <img src="./assets/Snapshoot Portfolio.png" alt="IOT 10 image">
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
    <div class="btn-div"><button>See Live<img src="./assets/Icon - Export.png" alt="export"></button><button>See Source<img src="./assets/Icon -GitHub.png" alt="github"></button></div>
</div>
<div class="desktopPopup">
    <div class="poptop-desktop">
        <h3>Keeping track of thousands of components website</h3>
        <img src="/assets/Icon - Cancel.png" alt="cross">
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
</div>`;

// Functions

works.insertAdjacentHTML('beforeend', cards);
body.insertAdjacentHTML('beforeend', popupContent);

const toggleMenuDisplay = () => {
  if (nav.style.display !== 'none') {
    nav.style.display = 'none';
    openNav.style.display = 'flex';
  } else {
    nav.style.display = 'grid';
    openNav.style.display = 'none';
  }
};

function openPopup() {
  popup.classList.toggle('openPopup');
}

// Eventlisteners

seeProject.forEach((btn) => {
  btn.addEventListener('click', openPopup);
});
closePopBtn.addEventListener('click', openPopup);
openPopBtn.addEventListener('click', openPopup);
btn.addEventListener('click', toggleMenuDisplay);
closeBtn.addEventListener('click', toggleMenuDisplay);
menuLink.forEach((link) => {
  link.addEventListener('click', toggleMenuDisplay);
});
closeCrossDesktop.addEventListener('click', openPopup);
