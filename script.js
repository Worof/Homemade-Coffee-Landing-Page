window.onload = function (){
    const heroSection = document.querySelector('.hero')
    heroSection.style.opacity = 0
    heroSection.style.transition = 'opacity 0.2s' 
    setTimeout(()=>{
        heroSection.style.opacity = 1
    }, 500)
}
