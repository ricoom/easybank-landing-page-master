
const sideBar=document.getElementById('menu')
const openBtn=document.getElementById('open_btn')
const closeBtn=document.getElementById('close_btn')


function openMenu(){
    sideBar.style.display='block'
    closeBtn.style.display='block'
    openBtn.style.display='none'


}
function closeMenu(){
    sideBar.style.display='none'
    closeBtn.style.display='none'
    openBtn.style.display='block'


}