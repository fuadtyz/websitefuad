// START TOGGLE NAV
let isNavOpen = false;

function toggleNavigation() {
    const navmobile = document.getElementById('navmobile');
    
    if (!isNavOpen) {
        navmobile.style.transform = 'translate(0px)';
        isNavOpen = true;
    } else {
        navmobile.style.transform = 'translate(-105%)';
        isNavOpen = false;
    }
}

document.addEventListener('click', function(event) {
    const navmobile = document.getElementById('navmobile');
    const navToggle = document.querySelector('.navbar .toggle');

    if (!navmobile.contains(event.target) && !navToggle.contains(event.target) && isNavOpen) {
        navmobile.style.transform = 'translate(-105%)';
        isNavOpen = false;
    }
});
// END TOGGLE NAV

// START DOM LOAD
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
});
// END DOM LOAD

document.querySelectorAll('.navmobile .dropdown-btn').forEach(button => {
    button.addEventListener('click', function() {
        const dropdownMenu = this.nextElementSibling;

        document.querySelectorAll('.navmobile .dropdown-content.show').forEach(menu => {
            if (menu !== dropdownMenu) {
                menu.classList.remove('show');
            }
        });

        dropdownMenu.classList.toggle('show');
    });
});

document.querySelectorAll('.minecraft-panel .feature .btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.feature .btn').forEach(btn => {
            btn.classList.remove('active');
        });

        document.querySelectorAll('.preview img').forEach(img => {
            img.style.display = 'none';
        });

        this.classList.add('active');
        
        const target = this.getAttribute('data-target');
        document.querySelector(`.preview .${target}`).style.display = 'block';
    });
});

document.querySelectorAll('.services .plans .list img').forEach(img => {
    img.addEventListener('click', function() {
        document.querySelectorAll('.services .plans .list img').forEach(i => {
            i.classList.remove('active');
        });

        this.classList.add('active');

        document.querySelectorAll('.services .plans .desc p').forEach(desc => {
            desc.style.display = 'none';
        });

        document.querySelectorAll('.services .body .packages > div').forEach(pkg => {
            pkg.style.display = 'none';
        });

        const target = this.getAttribute('data-target');
        const targetDesc = document.querySelector(`.services .plans .desc .${target}`);
        if (targetDesc) {
            targetDesc.style.display = 'block';
        }

        const targetPackage = document.querySelector(`.services .body .packages .${target}`);
        if (targetPackage) {
            targetPackage.style.display = 'flex';
        }
    });
});


// START SCROLL EVENT
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const navbar = document.querySelector('.navbar');
    const navtoggle = document.querySelector('.navtoggle');
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
        navbar.classList.add('scrolled');
        navtoggle.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
        navbar.classList.remove('scrolled');
        navtoggle.classList.remove('scrolled');
    }
});
// END SCROLL EVENT

// START TAB PACKAGE
function handleTabChange() {
    const tabs = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            tab.classList.add('active');

            const tabId = tab.getAttribute('data-tab');
            const activeContent = document.getElementById(tabId);
            if (activeContent) {
                activeContent.classList.add('active');
            }
        });
    });
}

function handleTabChange() {
    const tabs = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-package');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            tab.classList.add('active');

            const packageId = tab.getAttribute('data-package');
            const activeContent = document.getElementById(packageId);
            if (activeContent) {
                activeContent.classList.add('active');
            }
        });
    });
}

function handleLocationChange() {
    const locations = document.querySelectorAll('.region');
    
    locations.forEach(location => {
        location.addEventListener('click', () => {
            if (location.classList.contains('disable')) {
                return;
            }

            const packageElement = location.closest('.tab-package');
            const packageId = packageElement.id;
            
            const packageLocations = packageElement.querySelectorAll('.region');
            packageLocations.forEach(loc => loc.classList.remove('active'));
            location.classList.add('active');

            const selectedLocation = location.getAttribute('data-location');
            if (selectedLocation) {
                updateSpecs(packageId, selectedLocation);
            }
        });
    });
}

function updateSpecs(packageId, location) {
    const packageElement = document.getElementById(packageId);
    const allSpecs = packageElement.querySelectorAll('.tab-specs');
    allSpecs.forEach(spec => spec.style.display = 'none');

    const activeSpecs = packageElement.querySelector(`#${location}`);
    if (activeSpecs) {
        activeSpecs.style.display = 'block';
    }
}

function initializeSpecs() {
    const packages = document.querySelectorAll('.tab-package');
    packages.forEach(package => {
        const activeLocation = package.querySelector('.region.active');
        if (activeLocation) {
            const packageId = package.id;
            const location = activeLocation.getAttribute('data-location');
            updateSpecs(packageId, location);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    handleTabChange();
    handleLocationChange();
    initializeSpecs();
});
// END TAB PACKAGE