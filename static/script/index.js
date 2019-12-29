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
  
}

function loadItemInfo(items) {
  for(let itemIndex = 0; itemIndex < items.length; itemIndex++) {
    var itemRow = document.createElement("tr");
    var productInTable = `
      <td>
        <input class="choose" type="checkbox" name="ischoosed" ${items.checked} />
      </td>
      <td>
        ${items[itemIndex].name}
      </td>
      <td>
        ${items[itemIndex].price}
      </td>
      <td>
        ${items[itemIndex].count}
      </td>
      <td>
        ${items[itemIndex].price * items[itemIndex].count}
      </td>
    `
    itemRow.innerHTML = productInTable;
    itemList.appendChild(itemRow);
  }
}

shoppingCart();