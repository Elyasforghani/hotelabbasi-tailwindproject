       // Carousel 3: Testimonials Showcase
const testimonialSwiper = new Swiper('.testimonialSwiper', {
    slidesPerView: 1,         // در حالت موبایل فقط ۱ کارت نشان داده می‌شود
    spaceBetween: 24,         // فاصله بین کارت‌ها
    loop: true,               // اسکرول بی‌نهایت چرخان
    autoplay: {
        delay: 4500,          // زمان توقف روی هر اسلاید (۴.۵ ثانیه)
        disableOnInteraction: false,
    },
    grabCursor: true,         // تغییر ظاهر ماوس به حالت دست
    pagination: {
        el: '.swiper-pagination',
        clickable: true,      // قابلیت کلیک روی نقطه‌ها
    },
    breakpoints: {
        // تنظیمات واکنش‌گرایی بر اساس رزولوشن صفحه
        768: {
            slidesPerView: 2, // در تبلت ۲ کارت
            spaceBetween: 24,
        },
        1024: {
            slidesPerView: 3, // در دسکتاپ ۳ کارت همزمان کنار هم
            spaceBetween: 30,
        },
    },
});

        // Carousel 1: Hero Banner Slider
        const heroSwiper = new Swiper('.heroSwiper', {
            loop: true,
            effect: 'fade', // Smooth fading effect appropriate for a premium hotel layout
            fadeEffect: {
                crossFade: true

            },

            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        const swiper = new Swiper('.myHotelCarousel', {
            // Core Settings for the "Peek-a-boo" center look
            slidesPerView: 'auto',      // Dynamically calculates width based on CSS
            centeredSlides: true,       // Keeps the active slide directly in the middle
            spaceBetween: 30,           // Gap between the active slide and side slides
            loop: true,                 // Infinite loop scrolling
            autoplay: {
                delay: 4000,            // Time between automatic slide transitions
                disableOnInteraction: false, // Continue autoplay after user interaction
            },
            // Mouse & Touch Controls
            grabCursor: true,           // Changes mouse cursor to a hand grab icon
            slideToClickedSlide: true,  // Clicking side images slides them to center

            // Optional Keyboard control
            keyboard: {
                enabled: true,
            },
        });
        // Carousel 2: Multi-column Rooms Showcase
        const roomsSwiper = new Swiper('.roomsSwiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            breakpoints: {
                // Responsive layout logic
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
            navigation: {
                nextEl: '.swiper-next-btn',
                prevEl: '.swiper-prev-btn',
            },
        });