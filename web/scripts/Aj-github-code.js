let cart = [] ;
let itemlist =[];
window.onload = function () {
    RetriveCart();
    loadItems();
}
let SaveCart = ()=> {
    localStorage.setItem("Aj-github-code",JSON.stringify(cart));

}
let RetriveCart = ()=> {
    let getcart = localStorage.getItem("Aj-github-code");
    if(getcart){
        cart = JSON.parse(getcart);
        // console.log(cart);
    }
}

let DeleteFromCart = (ev) =>{
    var r = ev.target.id.slice(ev.target.id.length - 1,ev.target.id.length)
    const i = cart.findIndex(obj => obj.id === r);

    cart = [
        ...cart.slice(0,i),
        ...cart.slice(i+1)
    ]
    // or use this cart.splice(i,1);
    SaveCart();
    RefreshItems()
}
let RemoveFromCart =  (ev) =>{
    var r = ev.target.id.slice(ev.target.id.length - 1,ev.target.id.length)

    const i = cart.findIndex(obj => obj.id === r);
    if(cart[i].quantity<2){
        cart.splice(i,1);
    }
    else
        cart = [
            ...cart.slice(0,i),
            {...cart[i],quantity:cart[i].quantity-1},
            ...cart.slice(i+1)
        ]
    SaveCart();
    RefreshItems()
}
let AddtoCart =  (ev) =>{
    var r = ev.target.id.slice(ev.target.id.length - 1,ev.target.id.length)
    console.log(r);
    const i = cart.findIndex(obj => obj.id === r);
    cart = [
        ...cart.slice(0,i),
        {...cart[i],quantity:cart[i].quantity+1},
        ...cart.slice(i+1)
    ]
    SaveCart();
    // location.reload();
    RefreshItems(i,cart[i].quantity+1);
    // console.log(cart)
}
let AddListeners = ()=>{
    for(let i =0;i<cart.length;i{
    {
        let j = "minus--" + cart[i].id;
        let l = "plus--" + cart[i].id;
        let s = document.getElementById(l);
        let k = document.getElementById(j);
        let w = "delete--" + cart[i].id;
        let q = document.getElementById(w);
        console.log(k)
        q.addEventListener('click', DeleteFromCart);
        k.addEventListener('click', RemoveFromCart);
        s.addEventListener('click', AddtoCart);
    }
}
let RefreshItems = (n,i,k) =>{
    let id = "quantity--"+i;
    let k = document.getElementById(id);
    k.innerHTML = n;
    let r = "price--"+i;
    let e = document.getElementById(r);
    var t = document.getElementById("cost");
    let price = e.innerText;
    price = price.slice(2,price.length)
    price = Number(price);
    var c = t.innerText;
    c = c.slice(1,c.length);
    c = Number(c);
    console.log(c);
    var cost = price + c;
    cost = cost.toFixed(2);
    cost = "$" + cost;
    t.innerHTML = cost;
    // $.getJSON('Data.json',(data) => {
    //     // itemlist = data;
    //     let cost = 0;
    //     $("#Detail--c").empty();
    //     for (let i = 0; i < cart.length; i++) {
    //         var n = Number(cart[i].id);
    //         // console.log(n);
    //         var q = Number(cart[i].quantity);
    //         cost = cost + Number(data[n].price * q);
    //         $("#Detail--c").append(`<div class="Detail--item" id="${n}">
    //         <div class="Detail--item--col1">
    //             <div class="item--image--container">
    //                 <img src=${data[n].url} class="item--image">
    //             </div>
    //             <div class="item--container">
    //                 <div class="item--name">
    //                     ${data[n].name}
    //                 </div>
    //                 <div class="item--option">
    //                     <div class="item--option--row">
    //                         <div class="option--1" id="delete--${n}">
    //                             Delete
    //                         </div>
    //                         <div class="option--2">
    //                             Save
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         <div class="Detail--item--col2">
    //            $ ${data[n].price}
    //         </div>
    //         <div class="Detail--item--col3">
    //             <div class="col3--row">
    //                 <div class="icon--container" >
    //                     <img src="./img/minus.svg" class="icon" id="minus--${n}">
    //                 </div>
    //                 <div class="quantity">
    //                     ${q}
    //                 </div>
    //                 <div class="icon--container" >
    //                     <img src="./img/plus.svg" class="icon" id="plus--${n}">
    //                 </div>
    //             </div>
    //         </div>
    //     </div>`)
    //     }

    //     var t = document.getElementById("cost")
    //     cost = cost.toFixed(2);
    //     cost = "$" + cost;
    //     t.innerHTML = cost;
    //
    //     AddListeners();
    // });

}
let loadItems = () =>{
    $.getJSON('Data.json',(data) =>{
        // itemlist = data;
        let cost = 0;
        for(let i=0;i<cart.length;i++){
            var n = Number(cart[i].id);
            console.log(cart);
            var q = Number(cart[i].quantity);
            cost = cost + Number(data[n].price*q);
            $("#Detail--c").append(`<div class="Detail--item" id="${n}">
            <div class="Detail--item--col1">
                <div class="item--image--container">
                    <img src=${data[n].url} class="item--image">
                </div>
                <div class="item--container">
                    <div class="item--name">
                        ${data[n].name}
                    </div>
                    <div class="item--option">
                        <div class="item--option--row">
                            <div class="option--1" id="delete--${n}">
                                Delete
                            </div>
                            <div class="option--2">
                                Save
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Detail--item--col2" id="price--${n}">
                $ ${data[n].price}
            </div>
            <div class="Detail--item--col3">
                <div class="col3--row">
                    <div class="icon--container" >
                        <img src="./img/minus.svg" class="icon" id="minus--${n}">
                    </div>
                    <div class="quantity" id="quantity--${n}">
                        ${q}
                    </div>
                    <div class="icon--container" >
                        <img src="./img/plus.svg" class="icon" id="plus--${n}">
                    </div>
                </div>
            </div>
        </div>`)
        }
        cost = cost.toFixed(2);
        $("#Detail").append(`<div class="total--row">
            <div class="total--col1">

            </div>
            <div class="total--col2">
                Total Cost
            </div>
            <div class="total--col3" id="cost">
                $${cost}
            </div>
        </div>`)
        AddListeners();
    });

}
