
        function toggleMenu() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.toggle('active');
        }

        function toggleCityDropdown() {
            const dropdown = document.getElementById('cityDropdown');
            dropdown.classList.toggle('show');
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.remove('active');
        }

        function selectCity(city) {
            document.getElementById('current-city').textContent = city;
            const dropdown = document.getElementById('cityDropdown');
            dropdown.classList.remove('show');
            console.log('City selected:', city);
        }

        function filterCities() {
            const input = document.getElementById('citySearch');
            const filter = input.value.toUpperCase();
            const ul = document.getElementById('cityList');
            const li = ul.getElementsByTagName('li');
            
            for (let i = 0; i < li.length; i++) {
                const txtValue = li[i].textContent || li[i].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }
        }

        document.addEventListener('click', function(e) {
            const dropdown = document.getElementById('cityDropdown');
            const locationBtn = document.querySelector('.location');
            
            if (!dropdown.contains(e.target) && !locationBtn.contains(e.target)) {
                dropdown.classList.remove('show');
            }
            
            const navLinks = document.getElementById('navLinks');
            const menuToggle = document.querySelector('.menu-toggle');
            
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                document.getElementById('cityDropdown').classList.remove('show');
            }
        });

        document.querySelectorAll('.faq-item').forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        });
// =========================
// HAMBURGER MENU LOGIC
// =========================

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Toggle icon
    hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.textContent = '☰';
    });
});
