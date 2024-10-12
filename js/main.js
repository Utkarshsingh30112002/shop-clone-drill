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
    const checkbox = document.getElementById('billing-checkbox');
        const billingAddress = document.querySelector('.billing-address');

        checkbox.addEventListener('change', function() {
            if (this.checked) {
                billingAddress.style.display = 'block'; // Show billing address
            } else {
                billingAddress.style.display = 'none'; // Hide billing address
            }
        });
    const topbar=document.querySelector('.topbar-link');
    topbar.addEventListener('click',()=>{
        topbar.classList.add("active")
    })


})