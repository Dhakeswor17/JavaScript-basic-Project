
const element = document.getElementById("container");
function run(){
    if(!element.classList.contains('anim')){
        element.classList.add('anim');
        setTimeout(()=>{
            element.classList.remove('anim')
        },7000)   
    }
}