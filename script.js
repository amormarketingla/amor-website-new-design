document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on mobile
    const isMobile = function() {
        return window.innerWidth <= 768;
    };
    
    // Create mobile logo element
    function createMobileLogo() {
        if (isMobile()) {
            const navContainer = document.querySelector('.nav-container');
            if (navContainer && !document.querySelector('.mobile-logo')) {
                const mobileLogo = document.createElement('div');
                mobileLogo.className = 'mobile-logo';
                mobileLogo.innerHTML = '<span class="bold">Amor</span><br>Marketing';
                navContainer.insertBefore(mobileLogo, navContainer.firstChild);
            }
        }
    }
    
    // Add contact button to mobile menu
    function addContactToMenu() {
        if (isMobile()) {
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu && !document.querySelector('.nav-contact-btn')) {
                const contactBtn = document.createElement('a');
                contactBtn.className = 'nav-contact-btn';
                contactBtn.href = '#';
                contactBtn.textContent = 'CONTACT';
                navMenu.appendChild(contactBtn);
            }
        }
    }
    
    // Mobile menu functionality with staggered animation
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            if (isMobile()) {
                navMenu.classList.toggle('active');
                this.classList.toggle('active');
                
                // Toggle body scroll when menu is open
                if (navMenu.classList.contains('active')) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = '';
                }
            }
        });
        
        // Close menu when clicking a nav item
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (isMobile()) {
                    navMenu.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
    }

    // File upload functionality
    const fileUpload = document.getElementById('fileUpload');
    const uploadBtn = document.getElementById('uploadBtn');
    const fileName = document.getElementById('fileName');

    if (uploadBtn && fileUpload && fileName) {
        uploadBtn.addEventListener('click', function() {
            fileUpload.click();
        });

        fileUpload.addEventListener('change', function() {
            if (fileUpload.files.length > 0) {
                fileName.textContent = fileUpload.files[0].name;
            } else {
                fileName.textContent = '';
            }
        });
    }

    // Form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form values
            const formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                businessName: document.getElementById('businessName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value,
                file: fileUpload.files[0] ? fileUpload.files[0].name : null
            };
            
            console.log('Form submitted with the following data:', formData);
            
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset the form
            contactForm.reset();
            fileName.textContent = '';
        });
    }
    
    // Handle scroll for mobile navigation
    function handleScroll() {
        if (isMobile()) {
            const scrollPosition = window.scrollY;
            const navContainer = document.querySelector('.nav-container');
            
            if (navContainer) {
                if (scrollPosition > 20) {
                    navContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
                    navContainer.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                } else {
                    navContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                    navContainer.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
                }
            }
        }
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Responsive layout adjustments
    function handleResponsiveLayout() {
        const footerLogo = document.querySelector('.footer-logo');
        const btnContainer = document.querySelector('.btn-container');
        
        if (footerLogo && btnContainer) {
            // Only add the clone if it doesn't exist and we're in mobile view
            if (isMobile() && !document.querySelector('.btn-container .footer-logo')) {
                const footerLogoClone = footerLogo.cloneNode(true);
                btnContainer.insertBefore(footerLogoClone, btnContainer.firstChild);
            } 
            // Remove the clone if we're back to desktop view
            else if (!isMobile() && document.querySelector('.btn-container .footer-logo')) {
                const mobileFooterLogo = document.querySelector('.btn-container .footer-logo');
                if (mobileFooterLogo) {
                    mobileFooterLogo.remove();
                }
            }
        }
        
        // Create or remove mobile elements based on screen size
        if (isMobile()) {
            createMobileLogo();
            addContactToMenu();
        } else {
            // Remove mobile elements if screen size increases
            const mobileLogo = document.querySelector('.mobile-logo');
            const navContactBtn = document.querySelector('.nav-contact-btn');
            
            if (mobileLogo) {
                mobileLogo.remove();
            }
            
            if (navContactBtn) {
                navContactBtn.remove();
            }
            
            // Reset any mobile menu states
            navMenu.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
            }
            document.body.style.overflow = '';
        }
    }
    
    // Run once on page load
    handleResponsiveLayout();
    handleScroll();
    
    // Also run when window is resized
    window.addEventListener('resize', function() {
        handleResponsiveLayout();
        handleScroll();
    });
});