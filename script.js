// JavaScript Code
document.addEventListener('DOMContentLoaded', function() {
    // Sample gallery data
    const galleryData = [
        // Nature images
        {
            id: 1,
            src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6ca6db8f-85bc-411a-9a6f-ee499579a293.png',
            alt: 'Mountain landscape with sunrise',
            category: 'nature',
            caption: 'Morning mountains'
        },
        {
            id: 2,
            src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3748d7c3-fefc-4c59-86ca-1e8d9de0154f.png',
            alt: 'Forest path with autumn leaves',
            category: 'nature', 
            caption: 'Autumn forest path'
        },
        {
            id: 3,
            src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1c867e55-419c-48fc-b2b9-55123041edef.png',
            alt: 'Waterfall in lush jungle',
            category: 'nature',
            caption: 'Jungle waterfall'
        },
        {
            id: 4,
            src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6d25a330-a47d-412b-be3b-544d2eddea7f.png',
            alt: 'Tropical beach with palm trees',
            category: 'nature',
            caption: 'Tropical beach'
        },
        {
            id: 5,
            src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6cf0d2ff-f500-4246-894a-bec9c7f80e59.png',
            alt: 'Sunset over lake',
            category: 'nature',
            caption: 'Lake sunset'
        },
        
        // City images
        {
            id: 6,
            src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1dc673d8-c617-439f-a654-47986dab8635.png',
            alt: 'Skyline at dusk',
            category: 'city',
            caption: 'City dusk'
        },
        {
            id: 7,
            src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0b21e122-2fdf-408d-86fb-1aab29e40d42.png',
            alt: 'Busy downtown street',
            category: 'city',
            caption: 'Downtown'
        },
        {
            id: 8,
            src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/808bd344-f8e3-486f-af3c-fe2183a6187e.png',
            alt: 'Modern architecture',
            category: 'city',
            caption: 'Modern building'
        },
        {
            id: 9,
            src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b063fe1c-88c1-4c7a-b81e-a964118b4a32.png',
            alt: 'Nighttime city lights',
            category: 'city',
            caption: 'City lights'
        },
        {
            id: 10,
            src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/be7fe2ba-4395-48f7-a9c2-4d180935ddee.png',
            alt: 'Urban park with skyscrapers',
            category: 'city',
            caption: 'Urban park'
        },
        
        // People images
        {
            id: 11,
            src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/56fbe7a4-6844-4fce-b642-62820cb18e0a.png',
            alt: 'Family picnic',
            category: 'people',
            caption: 'Family time'
        },
        {
            id: 12,
            src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/aa9b1868-007f-42dd-bfeb-90d146f64bf7.png',
            alt: 'Couple hiking',
            category: 'people',
            caption: 'Hiking couple'
        },
        {
            id: 13,
            src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/227c68c4-d71b-4fb1-a9f8-9e284c076fd8.png',
            alt: 'Portrait of woman smiling',
            category: 'people',
            caption: 'Smiling portrait'
        },
        {
            id: 14,
            src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/28d51f60-dfa5-4a7f-864f-c75e867dd4ca.png',
            alt: 'Group of friends talking',
            category: 'people',
            caption: 'Friends gathering'
        },
        {
            id: 15,
            src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/89d1af01-e262-478b-8fe8-1e157798e2c6.png',
            alt: 'Street musician performing',
            category: 'people',
            caption: 'Street performance'
        },
        
        // Flower images
        {
            id: 16,
            src: 'https://t3.ftcdn.net/jpg/15/17/60/54/360_F_1517605449_c6QO3VcNI02kbOOnVarpWLF3gd99J1ES.jpg',
            alt: 'Beautiful red rose with morning dew',
            category: 'flowers',
            caption: 'Red rose'
        },
        {
            id: 17,
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5lYyxO-EEpOo8oCVQffJjqqtCkb0i8ckGA&s',
            alt: 'Large sunflower facing the sun',
            category: 'flowers',
            caption: 'Sunflower field'
        },
        {
            id: 18,
            src: 'https://im.rediff.com/news/2019/apr/08tulip-garden4.jpg',
            alt: 'Colorful tulip garden in full bloom',
            category: 'flowers',
            caption: 'Tulip garden'
        },
        {
            id: 19,
            src: 'https://hips.hearstapps.com/hmg-prod/images/8c914e30-7b32-459a-a5bb-b16d44ed55c0.jpeg?crop=0.667xw:1xh;0.167xw,0xh&resize=1120:*',
            alt: 'Exotic purple orchid close-up',
            category: 'flowers',
            caption: 'Purple orchid'
        },
        {
            id: 20,
            src: 'https://images.stockcake.com/public/8/d/a/8dac9b00-0147-4b9b-90a0-ca0e3cf1e96b_large/sunset-lavender-field-stockcake.jpg',
            alt: 'Lavender field at sunset',
            category: 'flowers',
            caption: 'Lavender field'
        }
    ];

    // DOM elements
    const galleryContainer = document.getElementById('gallery');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');

    // Current state
    let currentImages = [];
    let currentIndex = 0;
    let activeFilter = 'all';

    // Initialize gallery
    function initGallery() {
        renderGallery(galleryData);
        currentImages = galleryData;
    }

    // Render gallery items
    function renderGallery(images) {
        galleryContainer.innerHTML = '';
        
        images.forEach((image, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = `gallery-item ${image.category} ${index === 0 ? 'active' : ''}`;
            galleryItem.dataset.index = index;
            
            galleryItem.innerHTML = `
                <img src="${image.src}" alt="${image.alt}" class="gallery-img">
                <div class="gallery-caption">
                    <h3>${image.caption}</h3>
                    <span class="category">${image.category}</span>
                </div>
            `;
            
            galleryItem.addEventListener('click', () => openLightbox(index));
            galleryContainer.appendChild(galleryItem);
        });
    }

    // Filter gallery items
    function filterGallery(category) {
        if (category === 'all') {
            currentImages = galleryData;
        } else {
            currentImages = galleryData.filter(image => image.category === category);
        }
        renderGallery(currentImages);
        activeFilter = category;
        currentIndex = 0;
        
        // Ensure first item is marked active
        const items = document.querySelectorAll('.gallery-item');
        if (items.length > 0) {
            items[0].classList.add('active');
        }
    }

    // Open lightbox
    function openLightbox(index) {
        currentIndex = index;
        const image = currentImages[currentIndex];
        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt;
        lightboxCaption.textContent = image.caption;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Navigate lightbox
    function navigateLightbox(direction) {
        if (direction === 'prev') {
            currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        } else {
            currentIndex = (currentIndex + 1) % currentImages.length;
        }
        
        const image = currentImages[currentIndex];
        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt;
        lightboxCaption.textContent = image.caption;
        
        // Add animation effect
        lightboxImg.style.opacity = '0';
        setTimeout(() => {
            lightboxImg.style.opacity = '1';
        }, 100);
    }

    // Navigate gallery with prev/next buttons
    function navigateGallery(direction) {
        let items = document.querySelectorAll('.gallery-item');
        let activeIndex = -1;
        
        // Find current visible item
        items.forEach((item, index) => {
            if (item.classList.contains('active')) {
                activeIndex = index;
                item.classList.remove('active');
            }
        });
        
        if (activeIndex === -1) activeIndex = 0;
        
        if (direction === 'prev') {
            activeIndex = (activeIndex - 1 + items.length) % items.length;
        } else {
            activeIndex = (activeIndex + 1) % items.length;
        }
        
        items[activeIndex].classList.add('active');
        items[activeIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }

    // Event listeners
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterGallery(button.dataset.filter);
        });
    });

    prevBtn.addEventListener('click', () => navigateGallery('prev'));
    nextBtn.addEventListener('click', () => navigateGallery('next'));
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', () => navigateLightbox('prev'));
    lightboxNext.addEventListener('click', () => navigateLightbox('next'));

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                navigateLightbox('prev');
            } else if (e.key === 'ArrowRight') {
                navigateLightbox('next');
            }
        }
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Initialize
    initGallery();
});