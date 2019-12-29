var cartProducts = [
    {
      "id": 1,
      "name": "英雄牌 钢笔",
      "count": 1,
      "price": 69,
      "checked": false
    },
    {
      "id": 2,
      "name": "晨光牌 铅字笔",
      "count": 2,
      "price": 5.5,
      "checked": true
    },
    {
      "id": 3,
      "name": "晨光牌 铅笔",
      "count": 1,
      "price": 2,
      "checked": false
    },
    {
      "id": 4,
      "name": "狗熊牌 橡皮擦",
      "count": 1,
      "price": 1,
      "checked": false
    },
    {
      "id": 5,
      "name": "瑞士牌 双肩书包",
      "count": 1,
      "price": 199,
      "checked": true
    },
    {
      "id": 6,
      "name": "晨光牌 作业本",
      "count": 5,
      "price": 2.5,
      "checked": false
    }
  ]

var itemList = document.getElementById("item-list");

function shoppingCart() {
  loadItemInfo(cartProducts);
  calcSum();
  itemList.addEventListener("click", function (event) {
    var target = event.target;
    var tdIndex = target.parentNode;
    switch(target.className) {
      case ("add-item"):
        addProduct(tdIndex);
        calcItemSum(tdIndex); 
        calcSum();
        break;
      case ("reduce-item"):
        reduceProduct(tdIndex);
        calcItemSum(tdIndex);
        calculateSum();
        break;
      case ("choose"):
        judgeChosenState();
        calculateSum();
        break;
      default:
        break;
    }
  });
}

function loadItemInfo(items) {
  for(let itemIndex = 0; itemIndex < items.length; itemIndex++) {
    var itemRow = document.createElement("tr");
    var isChecked = items[itemIndex].checked ? "checked" : "";
    var productInTable = `
      <td>
        <input class="choose" type="checkbox" name="ischoosed" ${isChecked} />
      </td>
      <td>
        ${items[itemIndex].name}
      </td>
      <td>
        <span name="item-price">${items[itemIndex].price}</span>
      </td>
      <td>
        <button class="reduce-count">-</button><span name="item-count">${items[itemIndex].count}</span><button class="add-count">+</button>
      </td>
      <td>
        <span name="item-sum">${items[itemIndex].price * items[itemIndex].count}</span>
      </td>
    `
    itemRow.innerHTML = productInTable;
    itemList.appendChild(itemRow);
  }
}

var itemSum = document.getElementsByName("item-sum");
var itemCount = document.getElementsByName("item-name");
var itemPrice = document.getElementsByName("item-price");

function calcItemSum() {
  var trIndex = tdIndex.parentNode;
  var index = trIndex.rowIndex - 1;
  if (productCount[index]) {
    var sumPrice = itemSum[index];
    var count = itemCount[index].innerText;
    var price = itemPrice[index].innerText;
    sumPrice.innerText = count * price;
  }
}

shoppingCart();