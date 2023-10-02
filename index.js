
const darkTheme = {
    '--text-color': '#ffffff',
    '--background-color': '#020710',
    '--button-background-color': '#F1916D',
    '--button-color': '#ffffff',
    '--gradient': 'to right, #40CDCC 0%, #723FC5 100%',
    '--highlight-color': '#5d79c8'
}

const brightTheme  = {
    '--text-color': '#020710',
    '--background-color': '#ffffff',
    '--button-background-color': '#a0c9ee',
    '--button-color': '#ffffff',
    '--gradient': 'to right, #97b2f9 0%, #0346af 100%',
    '--highlight-color': '#97b2f9'
}

const imagesDarkTheme = {
    'home-image': 'assets/images/dark/home/scene_home.webp',
    'what-we-do-main-image': 'assets/images/dark/what-we-do/scene_what_we_do.webp',
    'what-we-do-acquaintance-image': 'assets/images/dark/what-we-do/mail.webp',
    'what-we-do-research-image': 'assets/images/dark/what-we-do/research.webp',
    'what-we-do-design-image': 'assets/images/dark/what-we-do/design.webp',
    'what-we-do-development-image': 'assets/images/dark/what-we-do/development.webp',
    'what-we-do-content-image': 'assets/images/dark/what-we-do/content.webp',
    'what-we-do-analysis-image': 'assets/images/dark/what-we-do/mail.webp',
    'why-us-full-service-image': 'assets/images/dark/why-us/full_service_solution.webp',
    'why-us-team-of-exp-image': 'assets/images/dark/why-us/team-of-experts.webp',
    'why-us-community-image': 'assets/images/dark/why-us/community.webp',
    'why-us-strategies-image': 'assets/images/dark/why-us/customized_strategies.webp',
    'latest-platform-image': 'assets/images/dark/portfolio/platform.webp',
    'latest-card-image': 'assets/images/dark/portfolio/card.webp',
    'contact-image': 'assets/images/dark/contact-us/email_bg.png',
}


const imagesBrightTheme = {
    'home-image': 'assets/images/bright/home/scene_home.webp',
    'what-we-do-main-image': 'assets/images/bright/what-we-do/scene_what_we_do.webp',
    'what-we-do-acquaintance-image': 'assets/images/bright/what-we-do/mail.webp',
    'what-we-do-research-image': 'assets/images/bright/what-we-do/research.webp',
    'what-we-do-design-image': 'assets/images/bright/what-we-do/design.webp',
    'what-we-do-development-image': 'assets/images/bright/what-we-do/development.webp',
    'what-we-do-content-image': 'assets/images/bright/what-we-do/content.webp',
    'what-we-do-analysis-image': 'assets/images/bright/what-we-do/mail.webp',
    'why-us-full-service-image': 'assets/images/bright/why-us/full_service_solution.webp',
    'why-us-team-of-exp-image': 'assets/images/bright/why-us/team-of-experts.webp',
    'why-us-community-image': 'assets/images/bright/why-us/community.webp',
    'why-us-strategies-image': 'assets/images/bright/why-us/customized_strategies.webp',
    'latest-platform-image': 'assets/images/bright/portfolio/platform.webp',
    'latest-card-image': 'assets/images/bright/portfolio/card.webp',
    'contact-image': 'assets/images/bright/contact-us/email_bg.webp',
}

let isDarkTheme = true;

function setThemeColors(isDarkTheme) {
    const root = document.querySelector(":root");
    const newTheme = isDarkTheme ? darkTheme : brightTheme;
    const newImagesTheme = isDarkTheme ? imagesDarkTheme: imagesBrightTheme;
    Object.entries(newTheme).forEach((value) => root.style.setProperty(value[0], value[1]));
    Object.entries(newImagesTheme).forEach((value) => document.getElementById(value[0]).src = value[1]);
}

function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    setThemeColors(isDarkTheme);
}

setThemeColors(isDarkTheme);

function handleIntersection(entries) {
    entries.map((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible')
        } else {
            entry.target.classList.remove('visible')
        }
    });
}

const observer = new IntersectionObserver(handleIntersection);
document.querySelectorAll('.animated').forEach(animatedEl => observer.observe(animatedEl));


function openContactDialog() {
    const dialogEl = document.getElementById('contact-overlay');
    dialogEl.classList.add('visible');
    const backdropEl = document.createElement('div');
    backdropEl.id = 'overlay-backdrop';
    backdropEl.onclick = () => closeContactDialog();
    dialogEl.appendChild(backdropEl);
    setTimeout(() => backdropEl.classList.add('shown'));
}

function closeContactDialog() {
    const dialogEl = document.getElementById('contact-overlay');
    const backdropEl = document.getElementById('overlay-backdrop');
    dialogEl.removeChild(backdropEl)
    dialogEl.classList.remove('visible');
    backdropEl.classList.remove('shown');
}