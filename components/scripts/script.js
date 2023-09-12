function menuShow()
{
    let mobileMenu = document.querySelector('.mobile-menu')

    if(mobileMenu.classList.contains('open'))
    {
        mobileMenu.classList.remove('open')
        //document.querySelector('.icon').src = 'src/menu.png'
    }
    else
    {
        mobileMenu.classList.add('open')
        //document.querySelector('.icon').src = 'src/close.png'
    }
}