var tombol = document.getElementById("tombol");
tombol.onclick = function(){
    document.body.classList.toggle("dark-mode");
}   

const search = document.getElementById("searching");
search.addEventListener("click", 
    function(){
        alert("Mohon Maaf Menu Searching Belum Bisa Digunakan");
    },
)

const order = document.getElementById("order");
order.addEventListener("click", 
    function(){
        alert("Mohon Maaf Menu Order Belum Bisa Digunakan");
    },
)

const logo = document.getElementById("logo");
logo.style.color = '#fa022e';

const kontak = document.querySelector("#kontak");
kontak.addEventListener("mouseover", e=>{
        console.log("anjay");
        kontak.style.backgroundColor = "rgb(183, 180, 180)";
    } 
)
kontak.addEventListener("mouseleave", e=>{
    console.log("anjay");
    kontak.style.backgroundColor = "transparent";
    } 
)