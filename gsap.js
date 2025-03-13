const hambu = document.querySelector('.hambu');

const nav = document.querySelector(".nav");

hambu.addEventListener("click",()=>{

    nav.classList.toggle("active")

})

let count = 1;

document.getElementById("radio1").checked = true;


setInterval(function(){

 next()

},2000)

function next (){

    count++;

    if(count > 4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true

}
