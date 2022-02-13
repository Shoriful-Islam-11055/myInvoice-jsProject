document.getElementById('detail-buyer-btn').addEventListener('click', function(){
    const buyerDetails = document.getElementById('buyer-details-input');
    document.getElementById('buyer-info').innerText = buyerDetails.value;
    buyerDetails.value = '';
});

document.getElementById('submit-items').addEventListener('click', function(){
    //get items details area
    const tableInfo = document.getElementById('info-table');
    const itemsName = document.getElementById('items-name');
    const itemsPrice = document.getElementById('items-price');
    const itemsQuentity = document.getElementById('items-quentity');
    const totalPrice = parseFloat(itemsPrice.value) * parseFloat(itemsQuentity.value);
    // console.log(totalPrice, itemsName.value, itemsPrice.value, itemsQuentity.value );
    // create dinamic table elements
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const td = document.createElement('td');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    
    td2.classList.add('class-items'); // class="class-items"
    //Set items input in dinamic table field
    th.innerText = itemsName.value;
    td.innerText = itemsPrice.value;
    td1.innerText = itemsQuentity.value;
    td2.innerText = totalPrice;

    //add/ append child node
    tr.appendChild(th);
    tr.appendChild(td);
    tr.appendChild(td1);
    tr.appendChild(td2); //<td class="class-items">500</td>
    tableInfo.appendChild(tr);

    totalAnount();
});

function totalAnount(){
    const subTotal = calculateSubTotal();
    document.getElementById('sub-total').innerText = subTotal;
    
    //tax calculation
    const tax = document.getElementById('tax');
    const taxAmount =(parseFloat(subTotal) * 0.2).toFixed(2);
    tax.innerText = taxAmount;
    
    //grand total calculation
    const grandField = document.getElementById('grand-total');
    const grandAmount = parseFloat(subTotal) + parseFloat(taxAmount);
    grandField.innerText = grandAmount;

    // Total Amount 2
    document.getElementById('grand-total-2').innerText = grandAmount;
}

function calculateSubTotal(){
    const cost = document.getElementsByClassName('class-items');
    subTotal = 0;
    for(let i = 0; i<cost.length; i++){
        const element = cost[i];
        const price = parseFloat(element.innerText);
        subTotal = subTotal + price;
    }
    return subTotal;
}


