document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Toggle hamburger to X animation
            const spans = this.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target) && 
                !mobileMenuToggle.contains(event.target) && 
                navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                
                // Reset hamburger icon
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close menu when clicking a nav item
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                    
                    // Reset hamburger icon
                    const spans = mobileMenuToggle.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
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
    
    // Clone footer logo and place it next to Send button for mobile views
    const moveFooterLogoForMobile = function() {
        const footerLogo = document.querySelector('.footer-logo');
        const btnContainer = document.querySelector('.btn-container');
        
        if (footerLogo && btnContainer) {
            // Only add the clone if it doesn't exist and we're in mobile view
            if (window.innerWidth <= 768 && !document.querySelector('.btn-container .footer-logo')) {
                const footerLogoClone = footerLogo.cloneNode(true);
                btnContainer.insertBefore(footerLogoClone, btnContainer.firstChild);
            } 
            // Remove the clone if we're back to desktop view
            else if (window.innerWidth > 768 && document.querySelector('.btn-container .footer-logo')) {
                const mobileFooterLogo = document.querySelector('.btn-container .footer-logo');
                if (mobileFooterLogo) {
                    mobileFooterLogo.remove();
                }
            }
        }
    };
    
    // Run once on page load
    moveFooterLogoForMobile();
    
    // Also run when window is resized
    window.addEventListener('resize', moveFooterLogoForMobile);
});