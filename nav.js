document.addEventListener("DOMContentLoaded", ()=>{

    const items = document.querySelectorAll("article");
    items.forEach(item =>{
        item.addEventListener("mouseover", animation);
        item.addEventListener("mouseleave", animation);
    })
})



function animation(){
    const actual = parseInt(this.dataset.number);
    const oneBef = actual - 1 >= 0 ? document.querySelector(`article[data-number="${actual-1}"]`) : false;
    const twoBef = actual - 2 >= 0 ? document.querySelector(`article[data-number="${actual-2}"]`) : false;
    oneBef !== false ? oneBef.classList.toggle("oneBef") : '';
    twoBef !== false ? twoBef.classList.toggle("twoBef") : '';
}

