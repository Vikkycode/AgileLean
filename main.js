window.onload = ()=>{
    const dropdowns = document.querySelectorAll('nav ul li');
    
         dropdowns.forEach((dropdown)=>{
             dropdown.addEventListener("mouseleave", ()=>{
             dropdown.querySelector(".nav_links-list").style.display ="none";
             })
         })
}
   
   


