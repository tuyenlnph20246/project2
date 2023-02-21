let list = document.querySelectorAll('.product .item');
// console.log(list);
list.forEach(item => {
    item.addEventListener('click', (event)=>{
        if(event.target.classList.contains('add')){
            let newItem = item.cloneNode(true);
            let listCart = document.querySelectorAll('.listcart .item');
            listCart.forEach(cart =>{
                if(cart.setAttribute('data-key') == newItem.setAttribute('data-key')){
                    alert ('Da them roi');
                }
            })
            document.querySelector('.listcart').appendChild(newItem);
        }
    })
})