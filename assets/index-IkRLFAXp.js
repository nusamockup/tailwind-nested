(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerPolicy&&(e.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?e.credentials="include":n.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(n){if(n.ep)return;n.ep=!0;const e=s(n);fetch(n.href,e)}})();const g=`<div class="card">
    <h3 class="text-xl font-semibold mb-2">{{title}}</h3>
    <p class="text-gray-600 dark:text-gray-300">{{content}}</p>
</div>`,p=`<footer class="footer bg-gray-100 dark:bg-dark-200 py-4">
    <div class="container mx-auto px-4 text-center">
        <p>&copy; 2023 My Project. All rights reserved.</p>
    </div>
</footer>`,h=`<header class="header bg-gradient-to-r from-blue-500/80 to-purple-600/80 transition-all duration-300">
    <nav class="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" class="text-2xl font-bold text-white">Logo</a>
        <div class="hidden md:flex space-x-4">
            <a href="/" class="nav-link">Beranda</a>
            <a href="/about" class="nav-link">Tentang</a>
            <a href="/services" class="nav-link">Layanan</a>
            <button id="darkModeToggle" class="nav-link">
                <span class="dark:hidden">🌙</span>
                <span class="hidden dark:inline">☀️</span>
            </button>
        </div>
        <button id="mobileMenuToggle" class="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
    </nav>
    <div id="mobileMenu" class="hidden md:hidden">
        <a href="/" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-dark-200">Beranda</a>
        <a href="/about" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-dark-200">Tentang</a>
        <a href="/services" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-dark-200">Layanan</a>
    </div>
</header>`,b=`<div class="min-h-full">
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-4xl font-bold mb-8">Tentang Kami</h1>
        <p class="text-lg mb-4">Ini adalah halaman tentang kami yang lebih panjang untuk contoh.</p>
        <p class="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p class="text-lg mb-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p class="text-lg mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p class="text-lg">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
</div>`,k=`<div class="min-h-full">
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-4xl font-bold mb-8">Selamat Datang di Beranda</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Card loop akan ditambahkan di sini -->
        </div>
    </div>
</div>`,v=`<div class="min-h-full">
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-4xl font-bold mb-8">Layanan Kami</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="service-item">
                <h2 class="text-2xl font-semibold mb-4">Pengembangan Web</h2>
                <p class="mb-4">Kami menyediakan layanan pengembangan web yang komprehensif, mulai dari situs web statis sederhana hingga aplikasi web yang kompleks dan dinamis.</p>
                <ul class="list-disc list-inside mb-4">
                    <li>Desain responsif</li>
                    <li>Optimasi kinerja</li>
                    <li>Integrasi API</li>
                    <li>Keamanan web</li>
                </ul>
            </div>
            <div class="service-item">
                <h2 class="text-2xl font-semibold mb-4">Desain UI/UX</h2>
                <p class="mb-4">Tim desainer kami menciptakan antarmuka yang menarik dan mudah digunakan, memastikan pengalaman pengguna yang optimal di semua perangkat.</p>
                <ul class="list-disc list-inside mb-4">
                    <li>Wireframing dan prototyping</li>
                    <li>Desain visual</li>
                    <li>Pengujian pengguna</li>
                    <li>Analisis dan optimasi</li>
                </ul>
            </div>
            <div class="service-item">
                <h2 class="text-2xl font-semibold mb-4">Pengembangan Aplikasi Mobile</h2>
                <p class="mb-4">Kami mengembangkan aplikasi mobile yang inovatif untuk platform iOS dan Android, membantu bisnis Anda menjangkau pelanggan di mana saja.</p>
                <ul class="list-disc list-inside mb-4">
                    <li>Aplikasi native</li>
                    <li>Aplikasi hybrid</li>
                    <li>Integrasi dengan backend</li>
                    <li>Pemeliharaan dan dukungan</li>
                </ul>
            </div>
            <div class="service-item">
                <h2 class="text-2xl font-semibold mb-4">Konsultasi IT</h2>
                <p class="mb-4">Tim ahli kami menyediakan layanan konsultasi IT untuk membantu bisnis Anda mengoptimalkan infrastruktur teknologi dan strategi digital.</p>
                <ul class="list-disc list-inside mb-4">
                    <li>Analisis kebutuhan teknologi</li>
                    <li>Perencanaan strategis IT</li>
                    <li>Manajemen proyek</li>
                    <li>Audit keamanan</li>
                </ul>
            </div>
        </div>
        <div class="mt-12">
            <h2 class="text-3xl font-semibold mb-6">Mengapa Memilih Kami?</h2>
            <p class="mb-4">Dengan pengalaman bertahun-tahun dalam industri teknologi, kami memiliki keahlian dan pengetahuan untuk memberikan solusi terbaik bagi bisnis Anda. Kami berkomitmen untuk:</p>
            <ul class="list-disc list-inside mb-8">
                <li>Kualitas tinggi dan perhatian terhadap detail</li>
                <li>Komunikasi yang jelas dan transparan</li>
                <li>Inovasi dan penggunaan teknologi terkini</li>
                <li>Dukungan pelanggan yang responsif</li>
                <li>Harga yang kompetitif</li>
            </ul>
            <p>Hubungi kami hari ini untuk mendiskusikan bagaimana kami dapat membantu mewujudkan visi digital Anda!</p>
        </div>
    </div>
</div>`,c=document.getElementById("app"),t=document.getElementById("content");t.classList.add("content-container");c.insertAdjacentHTML("afterbegin",h);c.insertAdjacentHTML("beforeend",p);const u={"/":k,"/about":b,"/services":v};function m(a){const i=u[a]||u["/"];if(t.innerHTML=i,a==="/"){const s=t.querySelector(".grid");[{title:"Kartu 1",content:"Ini adalah konten kartu 1."},{title:"Kartu 2",content:"Ini adalah konten kartu 2."},{title:"Kartu 3",content:"Ini adalah konten kartu 3."},{title:"Kartu 4",content:"Ini adalah konten kartu 4."},{title:"Kartu 5",content:"Ini adalah konten kartu 5."},{title:"Kartu 6",content:"Ini adalah konten kartu 6."}].forEach(n=>{const e=g.replace("{{title}}",n.title).replace("{{content}}",n.content);s.insertAdjacentHTML("beforeend",e)})}t.classList.add("page-enter"),setTimeout(()=>{t.classList.remove("page-enter"),t.classList.add("page-enter-active")},10)}function f(a){if(a.target.tagName==="A"){a.preventDefault();const i=a.target.getAttribute("href");history.pushState(null,"",i),m(i)}}c.addEventListener("click",f);window.addEventListener("popstate",()=>{m(window.location.pathname)});m(window.location.pathname);const d=document.querySelector(".header"),y=document.getElementById("mobileMenuToggle"),r=document.getElementById("mobileMenu");window.addEventListener("scroll",()=>{window.scrollY>0?d.classList.add("header-scrolled"):d.classList.remove("header-scrolled")});y.addEventListener("click",()=>{r.classList.toggle("hidden")});document.addEventListener("click",a=>{!d.contains(a.target)&&!r.classList.contains("hidden")&&r.classList.add("hidden")});const x=document.getElementById("darkModeToggle");x.addEventListener("click",()=>{document.documentElement.classList.toggle("dark")});
