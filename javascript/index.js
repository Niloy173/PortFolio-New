// show the menu
const  toggle = document.getElementById("toggleId");
const nav = document.getElementById("navId");

toggle.addEventListener("click",()=>{
    nav.classList.toggle('show');
})

const navlink = document.querySelectorAll('.nav_link');

function addlink()
{
    navlink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    //removing menu right after any menu click
    const navMenu = document.getElementById('navId');
    navMenu.classList.remove('show');
}

navlink.forEach(n => n.addEventListener('click',addlink));


// window.onscroll = function() {scrollfunction()};

// function scrollfunction()
// {
//     if (document.body.scrollTop >= 500 || document.documentElement.scrollTop >=500)
//     {
        
//         document.getElementById("navId").style.display="none";
//     }else{
//         document.getElementById("navId").style.display="block";
//     }
// }