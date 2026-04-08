const icon = document.querySelector('.icon');
const navlinks = document.querySelector('.navlinks');
const overlay = document.getElementById('overlay');
const closeMenu = document.getElementById('closeMenu');
const dropdowns = document.querySelectorAll('.dropdown');

// Mobile hamburger
icon.addEventListener('click', () => {
    navlinks.classList.add('active');
    overlay.classList.add('active');
});
closeMenu.addEventListener('click', () => {
    navlinks.classList.remove('active');
    overlay.classList.remove('active');
});
overlay.addEventListener('click', () => {
    navlinks.classList.remove('active');
    overlay.classList.remove('active');
});

// Dropdown logic
dropdowns.forEach(dropdown => {
    const btn = dropdown.querySelector('.dropbtn');
    const content = dropdown.querySelector('.dropdown-content');
    let pinned = false; // click se lock hua hai ya nahi

    const open = () => {
        dropdown.classList.add('active');
        content.style.display = 'flex';
    };

    const close = () => {
        dropdown.classList.remove('active');
        content.style.display = 'none';
        pinned = false;
    };

    // Click — pin/unpin
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (pinned) {
            close();
        } else {
            pinned = true;
            open();
        }
    });

    // Hover — sirf desktop pe, aur sirf tab jab pinned nahi
    dropdown.addEventListener('mouseenter', () => {
        if (window.innerWidth >= 59 * 16) {
            open();
        }
    });

    dropdown.addEventListener('mouseleave', () => {
        if (window.innerWidth >= 59 * 16 && !pinned) {
            // pinned nahi hai to band karo
            dropdown.classList.remove('active');
            content.style.display = 'none';
        }
    });
});

// Bahar click — sab unpin aur band
document.addEventListener('click', () => {
    dropdowns.forEach(d => {
        d.classList.remove('active');
        d.querySelector('.dropdown-content').style.display = 'none';
    });
    // sab ka pinned reset — next iteration mein fresh start
});