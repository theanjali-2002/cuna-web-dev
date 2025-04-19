// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Membership form modal
const membershipBtn = document.getElementById('membershipBtn');
const membershipModal = document.getElementById('membershipModal');
const closeModal = document.getElementById('closeModal');
const membershipForm = document.getElementById('membershipForm');

membershipBtn.addEventListener('click', () => {
    membershipModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', () => {
    membershipModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
});

membershipModal.addEventListener('click', (e) => {
    if (e.target === membershipModal) {
        membershipModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
});

membershipForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulate form submission
    const submitBtn = membershipForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';
    
    setTimeout(() => {
        membershipForm.innerHTML = `
            <div class="text-center py-6">
                <svg class="w-16 h-16 text-[#E7C793] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 class="text-xl font-bold mb-2">Thank You!</h3>
                <p>Your application has been submitted successfully. We'll be in touch soon!</p>
            </div>
        `;
        
        setTimeout(() => {
            membershipModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
            
            // Reset form for future use
            setTimeout(() => {
                membershipForm.innerHTML = `
                    <div>
                        <label for="name" class="block mb-2 text-sm font-medium">Full Name</label>
                        <input type="text" id="name" class="w-full p-3 bg-[#19050C] border border-[#E7C793]/50 rounded-lg focus:outline-none focus:border-[#E7C793]" required>
                    </div>
                    
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium">Email Address</label>
                        <input type="email" id="email" class="w-full p-3 bg-[#19050C] border border-[#E7C793]/50 rounded-lg focus:outline-none focus:border-[#E7C793]" required>
                    </div>
                    
                    <div>
                        <label for="experience" class="block mb-2 text-sm font-medium">Dance Experience</label>
                        <select id="experience" class="w-full p-3 bg-[#19050C] border border-[#E7C793]/50 rounded-lg focus:outline-none focus:border-[#E7C793]">
                            <option value="beginner">Beginner (No Experience)</option>
                            <option value="intermediate">Intermediate (1-3 Years)</option>
                            <option value="advanced">Advanced (3+ Years)</option>
                        </select>
                    </div>
                    
                    <div>
                        <label for="message" class="block mb-2 text-sm font-medium">Why do you want to join?</label>
                        <textarea id="message" rows="3" class="w-full p-3 bg-[#19050C] border border-[#E7C793]/50 rounded-lg focus:outline-none focus:border-[#E7C793]"></textarea>
                    </div>
                    
                    <button type="submit" class="btn-gold w-full py-3 rounded-full font-medium">Submit Application</button>
                `;
            }, 500);
        }, 2000);
    }, 1500);
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