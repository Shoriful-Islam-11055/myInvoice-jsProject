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

    //Set items input in dinamic table field
    th.innerText = itemsName.value;
    td.innerText = itemsPrice.value;
    td1.innerText = itemsQuentity.value;
    td2.innerText = totalPrice;

    //add/ append child node
    tr.appendChild(th);
    tr.appendChild(td);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tableInfo.appendChild(tr);
})

