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
document.querySelectorAll('.animated').forEach(section => observer.observe(section));


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