// Portfolio Data
const portfolioData = {
  skills: [

    // Programming Languages
    { name: "PHP", category: "programming", icon: "php" },
    { name: "Java Script", category: "programming", icon: "Js" },
    { name: "Python", category: "programming", icon: "🐍" },
    { name: "C++", category: "programming", icon: "C++" },
    
     // Machine Learning
    { name: "Pandas", category: "machinelearning", icon: "🐼" },
    { name: "NumPy", category: "machinelearning", icon: "🔢" },
    { name: "Matplotlib", category: "machinelearning", icon: "📈" },
    { name: "Scikit-learn", category: "machinelearning", icon: "🛠️" },

     // Deep Learning
    { name: "NLP", category: "deeplearning", icon: "📝" },
    

    // Generativeai
    { name: "LangChain", category: "generativeai", icon: "🔗" },
    { name: "RAG (Retrieval-Augmented Generation)", category: "generativeai", icon: "📚" },
    { name: "VectorDBs (Chroma, FAISS)", category: "generativeai", icon: "📦" },
    { name: "GPT-4", category: "generativeai", icon: "🧠" },
    { name: "Gemini", category: "generativeai", icon: "🔮" },
    { name: "LLaMA 3", category: "generativeai", icon: "🦙" },
    { name: "Groq", category: "generativeai", icon: "⚡" },


    // Backend
    { name: "PHP,Laravel", category: "backend", icon: "🛠️" },
    { name: "FastAPI", category: "backend", icon: "⚡" },
    { name: "Flask", category: "backend", icon: "🍶" },
    

    // Frontend
    { name: "HTML", category: "frontend", icon: "📝" },
    { name: "CSS", category: "frontend", icon: "🎨" },
    { name: "Java Sricpt", category: "frontend", icon: "🖥️" },
    { name: "Gradio", category: "frontend", icon: "🧪" },
  
    // Tools & Platforms
   { name: "GitHub", category: "tools", icon: "🐙" },        // Official GitHub Octocat
   { name: "Hashnode", category: "tools", icon: "✍️" },

   { name: "Git", category: "tools", icon: "🔧" },           // Git is about version control (tools/mechanics)
   { name: "Matlab", category: "tools", icon: "📊" },      // Data visualization & BI dashboard
   { name: "Visual Studio", category: "tools", icon: "💻" },  // ML + Notebooks (brain = intelligence)
   { name: "Jupyter Notebook", category: "tools", icon: "📓" }, // Literal notebook

]
,
    
    projects: [
        {
            id: 1,
            title: "Netflix Clone",
            description: "A Netflix clone is a responsive web app that replicates Netflix’s layout and features, including video thumbnails, categories, and search functionality.",
            image: "Netflix.png.png",
            category: "web",
            tech: ["HTML", "CSS",],
            github: "https://github.com/AshubShafqat/Netflix-Project",
        },
        {
            id: 2,
            title: "Amazon Clone",
            description: "This is a static HTML and CSS-based clone of Amazon's homepage layout, featuring a navigation bar, search bar, product showcase section, and footer with links.",
            image: "Amazon.png",
            category: "web",
            tech: ["HTML", "CSS",],
            github: "https://github.com/AshubShafqat/Amazon-Project",
        },
         {
            id: 3,
            title: "Food & Recipe Sharing",
            description: "Food Recipe Sharing Project’ is a web-based technology that will share online cooking experiences and cooking recipes to others. This system can be beneficial for a restaurant or to the chefs who teach cooking as they can spread their recipe to others. The user can also post their recipe on the website.  ",
            image: "food.jpg",
            category: "web",
            tech: ["HTML", "CSS","Boostrap","PHP","JS"],
            github: "https://github.com/AshubShafqat/Recipe-Sharing-Website",
        },{
            id: 4,
            title: "Event Booking System",
            description: "EventBuzz is a dynamic event booking web app that offers end-to-end services like invitations, photography, catering, and venue booking for weddings, parties, and corporate events, all through a responsive, user-friendly platform with real-time planning and light/dark mode support.",
            image: "booking.png",
            category: "web",
            tech: ["HTML", "CSS","PHP","JS"],
            github: "https://github.com/AshubShafqat/Event-Booking-Web-app",
        },
        {
            id: 5,
            title: "Multivendor Ecommerce system",
            description: " A multi-vendor e-commerce platform allows multiple sellers to register and sell their products on a single website, similar to Amazon or eBay. This model supports both B2B and B2C transactions while enabling the site owner to manage vendors, orders, and payments efficiently.",
            image: "ecom12.png",
            category: "web",
            tech: ["HTML", "CSS","PHP","JS","Laravel",],
            github: "https://github.com/AshubShafqat",
        },
        {
            id: 6,
            title: "German Language Learning Buddy",
            description: "A German language learning buddy helps you practice speaking, learn new words, and improve grammar in a fun and easy way.",
            image: "germany.png",
            category: "generativeai",
            tech: ["Python", "Gemini", "Groq", "Flask","HTML/CSS"],
            github: "https://github.com/AshubShafqat/German-Language-Learning-Application",
        },
        {
            id: 7,
            title: "Question Paper Generator for teacher",
            description: "A Question Paper Generator using RAG (Retrieval-Augmented Generation) creates dynamic, topic-specific questions by retrieving relevant content from a knowledge base.",
            image: "teacher.PNG",
            category: "generativeai",
            tech: ["RAG", "Langchain", "Groq", "LLama 3", "Fastapi","HTML/CSS"],
            github: "https://github.com/AshubShafqat",
        },
        {
            id: 8,
            title: "Dora AI Assistant",
            description: "Dora AI Assistant uses OpenCV to access your webcam and analyze the live feed in real time. It identifies and describes objects or scenes captured by the camera using AI Agents",
            image: "Dora AI Assistant.PNG",
            category: "agenticai",
            tech: ["LangGraph", "Opencv", "Groq", "Langchain","Fastapi","HTML/CSS"],
            github: "https://github.com/AshubShafqat",
             
        },
        {
            id: 9,
            title: "Next Word Predictor",
            description: "A Next Word Predictor uses NLP to predict the next word in a sentence based on the previous words.",
            image: "Nextwordpredictor.PNG",
            category: "deeplearning",
            tech: ["NLP","Flask", "Pytorch", "Transformers","HTML/CSS"],
            github: "https://github.com/AshubShafqat",
        },
       
    ]
};

// Theme Management
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'dark';
        this.init();
    }
    
    init() {
        this.applyTheme();
        this.bindEvents();
    }
    
    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        const themeIcon = document.querySelector('#theme-toggle i');
        if (themeIcon) {
            themeIcon.className = this.theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        }
    }
    
    toggle() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.theme);
        this.applyTheme();
    }
    
    bindEvents() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggle());
        }
    }
}

// Typing Animation
class TypingAnimation {
    constructor(element, texts, options = {}) {
        this.element = element;
        this.texts = texts;
        this.options = {
            typeSpeed: 100,
            deleteSpeed: 50,
            delayBetweenTexts: 1500,
            ...options
        };
        this.currentTextIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.init();
    }
    
    init() {
        this.type();
    }
    
    type() {
        const currentText = this.texts[this.currentTextIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.currentCharIndex - 1);
            this.currentCharIndex--;
            
            if (this.currentCharIndex === 0) {
                this.isDeleting = false;
                this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
            }
        } else {
            this.element.textContent = currentText.substring(0, this.currentCharIndex + 1);
            this.currentCharIndex++;
            
            if (this.currentCharIndex === currentText.length) {
                setTimeout(() => {
                    this.isDeleting = true;
                }, this.options.delayBetweenTexts);
            }
        }
        
        const speed = this.isDeleting ? this.options.deleteSpeed : this.options.typeSpeed;
        setTimeout(() => this.type(), speed);
    }
}

// Intersection Observer for Animations
class AnimationObserver {
    constructor() {
        this.observer = new IntersectionObserver(
            (entries) => this.handleIntersection(entries),
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );
        this.init();
    }
    
    init() {
        const elements = document.querySelectorAll('.skill-card, .project-card, .proficiency-fill');
        elements.forEach(el => this.observer.observe(el));
    }
    
    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('skill-card') || entry.target.classList.contains('project-card')) {
                    entry.target.classList.add('show');
                } else if (entry.target.classList.contains('proficiency-fill')) {
                    const width = entry.target.getAttribute('data-width');
                    entry.target.style.width = width + '%';
                }
                this.observer.unobserve(entry.target);
            }
        });
    }
}

// Skills Filter
class SkillsFilter {
    constructor() {
        this.activeFilter = 'all';
        this.init();
    }
    
    init() {
        this.renderSkills();
        this.bindEvents();
    }
    
    renderSkills() {
        const skillsGrid = document.getElementById('skills-grid');
        if (!skillsGrid) return;
        
        const filteredSkills = this.activeFilter === 'all' 
            ? portfolioData.skills 
            : portfolioData.skills.filter(skill => skill.category === this.activeFilter);
        
        skillsGrid.innerHTML = filteredSkills.map(skill => `
            <div class="skill-card" data-category="${skill.category}">
                <div class="skill-icon">${skill.icon}</div>
                <h3 class="skill-name">${skill.name}</h3>
            </div>
        `).join('');
        
        // Re-observe new elements
        const skillCards = skillsGrid.querySelectorAll('.skill-card');
        skillCards.forEach(card => {
            if (window.animationObserver) {
                window.animationObserver.observer.observe(card);
            }
        });
    }
    
    setFilter(filter) {
        this.activeFilter = filter;
        this.renderSkills();
        this.updateFilterButtons();
    }
    
    updateFilterButtons() {
        const filterButtons = document.querySelectorAll('.skills-filter .filter-btn');
        filterButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-filter') === this.activeFilter);
        });
    }
    
    bindEvents() {
        const filterButtons = document.querySelectorAll('.skills-filter .filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                this.setFilter(filter);
            });
        });
    }
}

// Projects Filter
class ProjectsFilter {
    constructor() {
        this.activeFilter = 'all';
        this.init();
    }
    
    init() {
        this.renderProjects();
        this.bindEvents();
    }
    
    renderProjects() {
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid) return;
        
        const filteredProjects = this.activeFilter === 'all' 
            ? portfolioData.projects 
            : portfolioData.projects.filter(project => project.category === this.activeFilter);
        
        projectsGrid.innerHTML = filteredProjects.map(project => `
            <div class="project-card" data-category="${project.category}">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" class="project-img">
                    <div class="project-overlay">
                        <a href="${project.github}" target="_blank" class="project-link">
                            <i class="fab fa-github"></i>
                        </a>
                         
                    </div>
                </div>
                <div class="project-content">
                    <div class="project-header">
                        <span class="project-category">${project.category.replace('-', ' ')}</span>
                    </div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
        
        // Re-observe new elements
        const projectCards = projectsGrid.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            if (window.animationObserver) {
                window.animationObserver.observer.observe(card);
            }
        });
    }
    
    setFilter(filter) {
        this.activeFilter = filter;
        this.renderProjects();
        this.updateFilterButtons();
    }
    
    updateFilterButtons() {
        const filterButtons = document.querySelectorAll('.projects-filter .filter-btn');
        filterButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-filter') === this.activeFilter);
        });
    }
    
    bindEvents() {
        const filterButtons = document.querySelectorAll('.projects-filter .filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                this.setFilter(filter);
            });
        });
    }
}

// Navigation
class Navigation {
    constructor() {
        this.header = document.getElementById('header');
        this.navToggle = document.getElementById('nav-toggle');
        this.navMenu = document.getElementById('nav-menu');
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.handleScroll();
    }
    
    bindEvents() {
        // Scroll event for header background
        window.addEventListener('scroll', () => this.handleScroll());
        
        // Mobile menu toggle
        if (this.navToggle) {
            this.navToggle.addEventListener('click', () => this.toggleMobileMenu());
        }
        
        // Smooth scroll for navigation links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleNavClick(e));
        });
        
        // Smooth scroll for hero buttons
        const heroButtons = document.querySelectorAll('.hero-buttons a[href^="#"]');
        heroButtons.forEach(button => {
            button.addEventListener('click', (e) => this.handleNavClick(e));
        });
    }
    
    handleScroll() {
        if (window.scrollY > 50) {
            this.header.classList.add('scrolled');
        } else {
            this.header.classList.remove('scrolled');
        }
    }
    
    toggleMobileMenu() {
        this.navMenu.classList.toggle('active');
        const icon = this.navToggle.querySelector('i');
        icon.className = this.navMenu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
    }
    
    handleNavClick(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = this.header.offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (this.navMenu.classList.contains('active')) {
                this.toggleMobileMenu();
            }
        }
    }
}

// Contact Form
class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.init();
    }
    
    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message (you can customize this)
        alert('Thank you for your message! I\'ll get back to you soon.');
        
        // Reset form
        this.form.reset();
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme manager
    window.themeManager = new ThemeManager();
    
    // Initialize typing animation
    const typedElement = document.getElementById('typed-text');
    if (typedElement) {
        const texts = ['Software Engineering Student','Full Stack Developer','Explorer'];
        window.typingAnimation = new TypingAnimation(typedElement, texts);
    }
    
    // Initialize animation observer
    window.animationObserver = new AnimationObserver();
    
    // Initialize filters
    window.skillsFilter = new SkillsFilter();
    window.projectsFilter = new ProjectsFilter();
    
    // Initialize navigation
    window.navigation = new Navigation();
    
    // Initialize contact form
    window.contactForm = new ContactForm();
    
    // Add fade-in animation to sections
    const sections = document.querySelectorAll('.section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                sectionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});