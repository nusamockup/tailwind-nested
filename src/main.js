import Card from './components/Card.html?raw'
import Footer from './components/Footer.html?raw'
import Header from './components/Header.html?raw'
import About from './pages/About.html?raw'
import Home from './pages/Home.html?raw'
import Services from './pages/Services.html?raw'
import './styles/main.scss'

const app = document.getElementById('app')
const content = document.getElementById('content')

// Tambahkan kelas content-container ke elemen content
content.classList.add('content-container')


// Inject Header and Footer
app.insertAdjacentHTML('afterbegin', Header)
app.insertAdjacentHTML('beforeend', Footer)

// Router
const routes = {
    '/': Home,
    '/about': About,
    '/services': Services,
}

function renderPage(path) {
    const page = routes[path] || routes['/']
    content.innerHTML = page

    if (path === '/') {
        const cardContainer = content.querySelector('.grid')
        const cardData = [
            { title: 'Kartu 1', content: 'Ini adalah konten kartu 1.' },
            { title: 'Kartu 2', content: 'Ini adalah konten kartu 2.' },
            { title: 'Kartu 3', content: 'Ini adalah konten kartu 3.' },
            { title: 'Kartu 4', content: 'Ini adalah konten kartu 4.' },
            { title: 'Kartu 5', content: 'Ini adalah konten kartu 5.' },
            { title: 'Kartu 6', content: 'Ini adalah konten kartu 6.' },
        ]

        cardData.forEach(data => {
            const cardHTML = Card
                .replace('{{title}}', data.title)
                .replace('{{content}}', data.content)
            cardContainer.insertAdjacentHTML('beforeend', cardHTML)
        })
    }

    // Animate page transition
    content.classList.add('page-enter')
    setTimeout(() => {
        content.classList.remove('page-enter')
        content.classList.add('page-enter-active')
    }, 10)
}

// Handle navigation
function handleNavigation(e) {
    if (e.target.tagName === 'A') {
        e.preventDefault()
        const path = e.target.getAttribute('href')
        history.pushState(null, '', path)
        renderPage(path)
    }
}

app.addEventListener('click', handleNavigation)

// Handle popstate
window.addEventListener('popstate', () => {
    renderPage(window.location.pathname)
})

// Initial render
renderPage(window.location.pathname)

// Header scroll effect
const header = document.querySelector('.header')
const mobileMenuToggle = document.getElementById('mobileMenuToggle')
const mobileMenu = document.getElementById('mobileMenu')

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('header-scrolled')
    } else {
        header.classList.remove('header-scrolled')
    }
})

// Mobile menu toggle
mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
})

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!header.contains(e.target) && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden')
    }
})

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle')
darkModeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
})