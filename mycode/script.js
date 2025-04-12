document.querySelectorAll('nav a').forEach(link => { 
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");


    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });


    scrollTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    const skillBox = document.querySelector(".skill-box");
    skillBox.addEventListener("mouseenter", function() {
        skillBox.style.borderColor = "white";
    });
    skillBox.addEventListener("mouseleave", function() {
        skillBox.style.borderColor = "white";
    });


    const contactBox = document.querySelector(".contact-info");
    contactBox.addEventListener("click", function() {
        alert("Thanks for reaching out! I'll get back to you soon!");
    });
    
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                }
            });
        },
        { threshold: 0.2 } 
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
});