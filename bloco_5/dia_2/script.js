let unOrderList = document.createElement("ul");
    div3.appendChild(unOrderList);
    unOrderList = ["1", "2", "3", "4", "5", "6", "7", "8", "9"
    , "10"];
    for(let i = 0; i < unOrderList.length; i += 1) {
      let itens = unOrderList[i];

      let unOrderListItens = document.createElement("li");
      unOrderListItens.innerText = itens;
      unOrderList.appendChild(unOrderListItens);
    }
    div3.appendChild(unOrderListItens);
