let cart = [];

/* إضافة للسلة */
function addToCart(name, price){
  cart.push({name, price});
  updateCart();
}

/* تحديث السلة */
function updateCart(){

  const cartList = document.getElementById("cart-list");
  const totalBox = document.getElementById("cart-total");

  cartList.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {

    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ${item.price} درهم
      <button onclick="removeItem(${index})">❌</button>
    `;

    cartList.appendChild(li);
    total += item.price;

  });

  document.getElementById("cart-count").textContent = cart.length;
  document.getElementById("cart-count-2").textContent = cart.length;

  if(totalBox){
    totalBox.textContent = total + " درهم";
  }
}

/* حذف عنصر */
function removeItem(index){
  cart.splice(index,1);
  updateCart();
}

/* فتح وإغلاق السلة */
function toggleCart(){
  const cartBox = document.getElementById("cart-box");
  cartBox.style.display =
    (cartBox.style.display === "flex") ? "none" : "flex";
}

/* طلب عبر واتساب */
function checkout(){

  if(cart.length === 0){
    alert("السلة فارغة!");
    return;
  }

  let message = "مرحبا، أريد طلب الخدمات التالية:%0A";
  let total = 0;

  cart.forEach(item => {
    message += `- ${item.name} (${item.price} درهم)%0A`;
    total += item.price;
  });

  message += `%0Aالمجموع: ${total} درهم`;

  window.open(
    `https://wa.me/212698490007?text=${message}`,
    "_blank"
  );
}

/* زر عرض الخدمات بدون ما يوقف JS */
document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("show-services-btn");

  if(btn){
    btn.addEventListener("click", ()=>{
      document.getElementById("services")
      .scrollIntoView({behavior:"smooth"});
    });
  }

});