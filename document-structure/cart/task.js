const btnProductAdd = document.querySelectorAll(".product__add");
const productValue = document.querySelectorAll(".product__quantity-value");
const btnQuantityControlPlus = document.querySelectorAll(".product__quantity-control_inc");
const btnQuantityControlMinus = document.querySelectorAll(".product__quantity-control_dec");
let numberQuan;

//Регулировка кол-ва товара
//Добавление
for (let i = 0; i < btnQuantityControlPlus.length; i++) {
	btnQuantityControlPlus[i].addEventListener("click", function() {
		numberQuan = Number(productValue[i].textContent);
		numberQuan++;
		productValue[i].textContent = `${numberQuan}`;
	})
}

//Убавление
for (let i = 0; i < btnQuantityControlMinus.length; i++) {
	btnQuantityControlMinus[i].addEventListener("click", function() {
		numberQuan = Number(productValue[i].textContent);
		if (numberQuan > 1) {
			numberQuan--;
			productValue[i].textContent = `${numberQuan}`;
		}
	})
}

//Добавление товара в корзину
function addItem() {
	let newItem = this.closest("div.product");
	let amount = Number(newItem.querySelectorAll(".product__quantity-value")[0].textContent);
	let picture = newItem.querySelectorAll(".product__image")[0].src;
	let idItem = newItem.getAttribute("data-id");
	let cart = document.querySelectorAll(".cart__products")[0];
	let cartAll = document.querySelectorAll(".cart__product");

	function addNewItem() {
		let newItemDiv =
			`<div class="cart__product" data-id=${idItem}>
          <img class="cart__product-image" src=${picture}>
          <div class="cart__product-count">${amount}</div>
        </div>`;
		cart.insertAdjacentHTML("afterBegin", newItemDiv);
	}

	function checkCart(element) {
		return element.getAttribute("data-id") == idItem;
	}

	const productInCard = Array.from(cartAll).find(checkCart);
	if (productInCard) {
		let el = document.querySelector(`.cart__product[data-id="${idItem}"]`)
		el.querySelector(".cart__product-count").textContent = Number(el.querySelector(".cart__product-count").textContent) + amount;
	} else {
		addNewItem();
	}

}

for (let addButton of btnProductAdd) {
	addButton.addEventListener("click", addItem);
}