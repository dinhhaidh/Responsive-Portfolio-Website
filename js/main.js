$(document).ready(function() {
    $('#nav-toggle').click(function(){
        $("#nav-menu").addClass("show-menu");
    })
    $('#nav-close').click(function(){
        $("#nav-menu").removeClass("show-menu");
    })
    $('.nav__link').click(function(){
        $("#nav-menu").removeClass("show-menu");
    })

    $(window).scroll(function(){
        $("#header").toggleClass("shadow-header", $(this).scrollTop() >= 50);
        $("#scroll-up").toggleClass("show-scroll", $(this).scrollTop() >= 350);
    })
})


/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

    function toggleSkills(){
        let itemClass = this.parentNode.className

        for(i = 0; i < skillsContent.length; i++){
            skillsContent[i].className = 'skills__content skills__close'
        }
        if(itemClass === 'skills__content skills__close'){
            this.parentNode.className = 'skills__content skills__open'
        }
    }
skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
// const tabs = document.querySelectorAll('[data-target]'),
//         tabContents = document.querySelectorAll('[data-content]')

// tabs.forEach(tab =>{
//     tab.addEventListener('click' , () =>{
//         const target = document.querySelector(tab.dataset.target)

//         tabContents.forEach(tabContent =>{
//             tabContent.classList.remove('qualification__active')
//         })
//         target.classList.add('qualification__active')

//         tabs.forEach(tab =>{
//             tab.classList.remove('qualification__active')
//         })
//         tab.classList.add('qualification__active')
//     })
// })

$(document).ready(function() {
    $('[data-target]').click(function() {
        var tab = $(this);
        var target = $(tab.data('target'));
    
        $('[data-content]').removeClass('qualification__active');
        target.addClass('qualification__active');
    
        $('[data-target]').removeClass('qualification__active');
        tab.addClass('qualification__active');
    });
});

/*==================== SERVICES MODAL ====================*/
$('.services__button').click(function() {
    var modalClick = $(this).index('.services__button');
    $('.services__modal').eq(modalClick).addClass('active-modal');
});

$('.services__modal-close').click(function() {
    $('.services__modal').removeClass('active-modal');
});

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    loop: true,
    graCursor: true,
    spaceBetween: 48,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
});


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
        }else{
        sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== DARK LIGHT THEME ====================*/ 

// dark-theme
$(document).ready( function(){
    $('#theme-button').click( function () {  
        $('body').toggleClass('dark-theme');
        $('.ri-moon-line').toggleClass('ri-sun-line');
    });
});
// 