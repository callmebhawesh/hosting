let input_value = document.getElementById("domain-input");
let myButton = document.getElementById('search-domain');
let searchdomain = document.getElementById('searchdomain');
let nextinput = document.getElementById("domain-searcher");

myButton.addEventListener("click", (event) => {
    event.preventDefault();
    window.location = 'https://myaccount.nestnepal.com/cart.php?a=add&domain=register&query=' + input_value.value;
});

searchdomain.addEventListener("click", (event) => {
    event.preventDefault();
    window.location = 'https://myaccount.nestnepal.com/cart.php?a=add&domain=register&query=' + nextinput.value;
    // alert("hey");
});