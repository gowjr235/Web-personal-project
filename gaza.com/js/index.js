// 카드부분
VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400
});

// 이번달 여행지
var mySwiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 4000,
    },
    loop:true,
    spaceBetween: 30,
});

// 리뷰 글귀
var mySwiper = new Swiper('.swiper-container1', {
    effect: 'fade',
    autoplay: {
        delay: 2000,
    },
    loop:true,
})

// 리뷰 사진
var mySwiper = new Swiper('.swiper-container2', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
    rotate: 45,
    stretch: 0,
    depth: 500,
    modifier: 2,
    slideShadows: true,
},
})

// 팝업 로그인
document.getElementById("button").addEventListener("click",function(e){
    document.querySelector(".popup").classList.add("active");
    e.preventDefault();
})

document.getElementById("close").addEventListener("click",function(e){
    e.preventDefault();
    document.querySelector(".popup").classList.remove("active");
})

// 로그인 정보확인
function check(form)
{
    if(form.userid.value=="asd" && form.userpassword.value=="123")
    {
        window.open('index.html')
    }
    else
    {
        alert("정보가 틀립니다")
    }
}

