

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')



if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}



if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



function scrollHeader(){
    const header = document.getElementById('header')
    
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


let swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
})





 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    
})


sr.reveal(`.home__data, .home__social-link, .home__info,
           .discover__container,
           .experience__data, .experience__overlay,
           .place__card,
           .sponsor__content,
           .footer__data, .footer__rights`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about__data, 
           .video__description,
           .subscribe__description`,{
    origin: 'left',
})

sr.reveal(`.about__img-overlay, 
           .video__content,
           .subscribe__form`,{
    origin: 'right',
    interval: 100,
})

 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'


if (selectedTheme) {
  
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click', () => {
    
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

function currentDiv(n) {
    showDivs(slideIndex = n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("home__img");
    var dots = document.getElementsByClassName("home__info-img");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-opacity-off";
  }



function search_animal() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('animals');
  
    for (i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display = "none";
      }
      else {
        x[i].style.display = "list-item";
      }
    }
  }
  


//tùng đẹp zai sửa nhé

let logOutBtn = document.getElementById("logOutBtn");
let welcomeUser = document.getElementById("userName");
let userName = JSON.parse(localStorage.getItem("ten"));

console.log(userName);

welcomeUser.innerText = userName !== undefined ? userName[1] : 'Đăng nhập';
welcomeUser.href = '#';

logOutBtn.addEventListener("click", function () {
    // Xóa thông tin người dùng khỏi local storage khi đăng xuất
    localStorage.removeItem("ten");
    // Tải lại trang hiện tại để ở lại trang chủ
    location.reload();
});

if (userName !== undefined && userName !== null) {
    welcomeUser.innerText = userName;
    logOutBtn.style.display = 'block'; // Hiển thị nút "Đăng xuất"
} else {
    welcomeUser.innerText = 'Đăng nhập';
    logOutBtn.style.display = 'none'; // Ẩn nút "Đăng xuất"
}

function playVideo(videoId) {
    var videos = document.getElementsByTagName('video');
    for (var i = 0; i < videos.length; i++) {
        videos[i].style.display = 'none';
        videos[i].pause();
        videos[i].currentTime = 0;
    }

    var video = document.getElementById(videoId);
    video.style.display = 'block';
    video.play();
}

function saveUserInfo(name, phone, email) {
    var userInfo = {
        name: name,
        phone: phone,
        email: email
    };
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
}

document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var isValid = validateForm();
    if (isValid) {
        var userName = document.getElementById('name').value;
        var userPhone = document.getElementById('phone').value;
        var userEmail = document.getElementById('email').value;

        saveUserInfo(userName, userPhone, userEmail);

        document.getElementById('popupMessage').innerText = `Chào ${userName}. Chúng tôi đã nhận thông tin của bạn. Chúng tôi sẽ liên hệ lại với bạn sớm nhất.`;
        document.getElementById('successPopup').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
    }
});

function closePopup() {
    document.getElementById('successPopup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function validateForm() {
    var isValid = true;

    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    if (name === "") {
        document.getElementById('nameError').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    if (phone === "") {
        document.getElementById('phoneError').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('phoneError').style.display = 'none';
    }

    if (email === "") {
        document.getElementById('emailError').style.display = 'inline';
        isValid = false;
    } else if (!email.includes("@")) {
        document.getElementById('emailError').innerText = 'Email phải chứa ký tự "@"';
        document.getElementById('emailError').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    return isValid;
}