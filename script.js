// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Active navigation highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const flowerContainer = document.getElementById('flower-container');
    const flowerCount = 120; // Increased number of flowers
    
    // SVG for jasmine flower (hand-drawn style with glow effect)
    // for only traces use: <g fill="none" stroke="white" stroke-width="1.5" opacity="0.99">
    const jasmineFlowerSVG = `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
            <g fill="white" opacity="0.9" filter="url(#glow)">
                <path d="M50,35 C55,25 65,20 50,5 C35,20 45,25 50,35 Z" />
                <path d="M50,35 C60,30 75,35 65,15 C45,20 55,30 50,35 Z" />
                <path d="M50,35 C60,40 70,55 75,35 C60,25 55,35 50,35 Z" />
                <path d="M50,35 C55,45 55,60 70,55 C65,35 55,40 50,35 Z" />
                <path d="M50,35 C45,45 35,55 50,70 C60,55 55,45 50,35 Z" />
                <path d="M50,35 C40,40 25,50 30,65 C50,60 45,40 50,35 Z" />
                <path d="M50,35 C40,30 25,25 20,40 C35,50 45,35 50,35 Z" />
                <circle cx="50" cy="35" r="8" fill="#ffffc0" />
            </g>
        </svg>
    `;
    
    // Create initial flowers
    for (let i = 0; i < flowerCount; i++) {
        createFlower(true, i / flowerCount);
    }
    
    // Continue creating flowers periodically
    setInterval(() => createFlower(false, 0), 300); // More frequent flower creation
    
    function createFlower(isInitial = false, initialProgress = 0) {
        const flower = document.createElement('div');
        flower.classList.add('jasmine');
        flower.innerHTML = jasmineFlowerSVG;
        
        // Random size variation
        const sizeVariation = Math.random() * 30 + 40;
        flower.style.width = `${sizeVariation}px`;
        flower.style.height = `${sizeVariation}px`;
        
        // Create multiple streams by varying the horizontal position
        const streamWidthPercent = 77; // Full width for more spread
        const isMobile = window.innerWidth < 768; // Mobile breakpoint
        const isDesktop = window.innerWidth >= 1024; // Desktop breakpoint
        const horizontalOffset = (Math.random() - 0.5) * (isMobile ? 200 : isDesktop ? 500 : 350); // Responsive random offset
        
        // Random rotation
        const rotation = Math.random() * 360;
        flower.style.transform = `rotate(${rotation}deg)`;
        
        // Random opacity (within a soft range)
        const opacity = Math.random() * 0.15 + 0.15; // Reduced opacity range (0.15 to 0.3)
        flower.style.opacity = opacity;
        
        flowerContainer.appendChild(flower);
        
        // Animation parameters
        const duration = 25000 + Math.random() * 10000;
        const startTime = performance.now();
        const totalTime = duration;
        
        // Starting progress (0 to 1)
        let progress = isInitial ? initialProgress : 0;
        
        // Animation function
        function animateFlower(timestamp) {
            // Calculate progress
            if (!isInitial) {
                const elapsed = timestamp - startTime;
                progress = elapsed / totalTime;
            } else {
                progress += 0.001;
            }
            
            if (progress >= 1) {
                flower.remove();
                return;
            }
            
            // Calculate position along S-curve
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            const curveWidth = screenWidth * (streamWidthPercent / 100);
            const centerX = screenWidth / 2;
            
            // S-curve calculation with multiple curves
            const amplitude = curveWidth / 2;
            const frequency = 2 * Math.PI;
            
            // Add some randomness to the curve
            const curveOffset = Math.sin(progress * 4) * 50; // Additional wave motion
            
            // Calculate x position using sine wave for S-curve
            const x = centerX + 
                        amplitude * Math.sin(frequency * progress) + 
                        horizontalOffset + 
                        curveOffset;
            
            // Calculate y position (top to bottom)
            const y = progress * (screenHeight + 100) - 50;
            
            // Position the flower
            flower.style.left = `${x - sizeVariation/2}px`;
            flower.style.top = `${y - sizeVariation/2}px`;
            
            // Continue animation
            requestAnimationFrame(animateFlower);
        }
        
        // Start animation
        requestAnimationFrame(animateFlower);
    }
});


//populating from JSON
document.addEventListener('DOMContentLoaded', async () => {
    try {
      const res = await fetch('content.json');
      const data = await res.json();
  
      loadHome(data.home);
      loadTeam(data.team);
      loadEvents(data.events);
      loadAbout(data.about);
  
    } catch (err) {
      console.error('Error loading content.json:', err);
    }
});

// Homepage
function loadHome(home) {
    document.getElementById('main-title').textContent = home.title;
    document.getElementById('subtitle').textContent = home.subtitle;
}

// Team
function loadTeam(team) {
    const teamContainer = document.getElementById('team-members');
    teamContainer.innerHTML = '';
  
    team.forEach(member => {
      const card = document.createElement('div');
      card.className = 'team-member text-center group [perspective:1000px]';
  
      card.innerHTML = `
        <div class="relative w-60 h-80 mx-auto transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <!-- FRONT -->
          <div class="absolute inset-0 [backface-visibility:hidden] bg-[#19050C] rounded-xl flex flex-col items-center justify-center p-6 shadow-[0_0_30px_#E7C79333] border border-[#E7C79344]">
            <div class="w-40 h-40 mb-4 rounded-full overflow-hidden shadow-[0_0_25px_#E7C79355]">
              <img src="${member.image}" alt="${member.name}" class="w-full h-full object-cover" />
            </div>
            <h3 class="text-2xl font-bold text-[#E7C793]">${member.name}</h3>
            <p class="text-[#E7C793]/80 mt-1 text-sm">${member.role}</p>
          </div>
          <!-- BACK -->
          <div class="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#E7C793] text-[#19050C] rounded-xl flex flex-col items-center justify-center p-6 shadow-[0_0_30px_#E7C79333] border border-[#E7C79344]">
            <h4 class="font-semibold text-xl mb-3">${member.program}</h4>
            <p class="text-base text-center">${member.bio}</p>
          </div>
        </div>
      `;
  
      teamContainer.appendChild(card);
    });
}
  
// Events
function loadEvents(events) {
    const eventsContainer = document.getElementById('events-container');
    eventsContainer.innerHTML = '';
  
    events.forEach(event => {
      const card = document.createElement('div');
      card.className = 'p-6 rounded-xl shadow-lg border border-[#E7C79344] bg-[#19050C]';
  
      card.innerHTML = `
        <div class="mb-4 overflow-hidden rounded-xl h-56">
          <img src="${event.image}" alt="${event.title}" class="w-full h-full object-cover rounded-xl" />
        </div>
        <h3 class="text-2xl font-bold text-[#E7C793] mb-2">${event.title}</h3>
        <p class="text-sm text-[#E7C793]/70 mb-1"><strong>Date:</strong> ${event.date}</p>
        <p class="text-sm text-[#E7C793]/70 mb-1"><strong>Location:</strong> ${event.location}</p>
        <p class="text-sm text-[#E7C793]/80 mb-4">${event.description}</p>
        <a href="${event.buttonURL}" target="_blank" class="inline-block mt-2 px-4 py-2 bg-[#E7C793] text-[#19050C] font-medium rounded-full shadow-md hover:bg-[#d6b873] transition">
          ${event.buttonText}
        </a>
      `;
  
      eventsContainer.appendChild(card);
    });
}
  
// About
function loadAbout(about) {
    const storyContainer = document.getElementById('story-text');
    storyContainer.innerHTML = `<h3 class="text-2xl font-semibold mb-4">${about.storyTitle}</h3>`;
    about.storyParagraphs.forEach(p => {
      const para = document.createElement('p');
      para.className = 'mb-6';
      para.textContent = p;
      storyContainer.appendChild(para);
    });
  
    const bTitle = document.getElementById('bharatanatyam-title');
    bTitle.textContent = about.bharatanatyamTitle;
  
    const bContent = document.getElementById('bharatanatyam-text');
    bContent.innerHTML = `<h3 class="text-2xl font-semibold mb-4">${about.bharatanatyamSubtitle}</h3>`;
    about.bharatanatyamParagraphs.forEach(p => {
      const para = document.createElement('p');
      para.className = 'mb-6';
      para.textContent = p;
      bContent.appendChild(para);
    });
}