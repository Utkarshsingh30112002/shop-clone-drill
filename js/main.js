document.addEventListener('DOMContentLoaded',()=>{
    const hamBurgerButton=document.querySelector('.hamburger-button');
    const mobileMenu=document.querySelector('.mobile-menu')
    const shadow=document.querySelector('.shadow')

    hamBurgerButton.addEventListener('click',()=>{
        mobileMenu.classList.add("active")
        shadow.classList.add("active")
    })

    shadow.addEventListener('click',function(event){
        if(!hamBurgerButton.contains(event.target) && !mobileMenu.contains(event.target)){
            mobileMenu.classList.remove("active")
            shadow.classList.remove("active")
        }
    })
})