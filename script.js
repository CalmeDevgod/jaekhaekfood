document.addEventListener('DOMContentLoaded', function () {
    const menuItems = [
        { name: 'ข้าวกะเพราทะเลไข่ดาว', price: 60, image: 'pic/moo2.jpg', description: 'Delicious stir-fried seafood basil with egg.' },
        { name: 'ข้าวหมูกรอบคั่วพริกเกลือ', price: 100, image: 'pic/moo2.jpg', description: 'Crispy pork fried with fish sauce.' },
        { name: 'ข้าวกะเพรา', price: 50, image: 'pic/moo1.jpg', description: 'Grilled pork basil with fried egg.' },
        { name: 'มาม่าผัดขี้เมาหมู', price: 40, image: 'pic/moo2.jpg', description: 'Spicy stir-fried noodles with pork.' },
        { name: 'ผัดพริกแกงทะเลราดข้าว', price: 50, image: 'pic/moo2.jpg', description: 'Stir-fried spicy seafood with rice.' },
        { name: 'ข้าวผัดทะเล', price: 50, image: 'pic/moo2.jpg', description: 'Seafood fried rice.' },
        { name: 'ต้มยำกุ้งน้ำข้น/น้ำใส', price: 100, image: 'pic/moo2.jpg', description: 'Tom Yum Goong (Spicy seafood soup) - creamy or clear broth.' },
        { name: 'ลุยทะเล', price: 50, image: 'pic/moo2.jpg', description: 'Spicy seafood salad.' },
        { name: 'ปลาหมึกทอดกระเทียม', price: 80, image: 'pic/moo2.jpg', description: 'Crispy garlic fried squid.' }
    ];
    
    const menuContainer = document.getElementById('menu');
    const cartItemsList = document.getElementById('cartItems');
    const totalPriceContainer = document.getElementById('totalPrice');
    const billButton = document.getElementById('billButton');

    menuItems.forEach(item => {
        // Populate menu
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" />
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.price} .-</p>
                <button class="add-to-cart">+</button>
            </div>
        `;
        menuContainer.appendChild(menuItem);

        // Add to cart functionality
        menuItem.querySelector('.add-to-cart').addEventListener('click', () => {
            const newRow = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = item.name;

            const priceCell = document.createElement('td');
            priceCell.textContent = `${item.price} .-`;

            const actionCell = document.createElement('td');
            const removeButton = document.createElement('button');
            removeButton.textContent = 'X';
            removeButton.classList.add('remove-item');
            removeButton.addEventListener('click', () => {
                cartItemsList.removeChild(newRow);
                calculateTotalPrice();
            });

            actionCell.appendChild(removeButton);
            newRow.appendChild(nameCell);
            newRow.appendChild(priceCell);
            newRow.appendChild(actionCell);

            cartItemsList.appendChild(newRow);
            calculateTotalPrice();
        });
    });

    const calculateTotalPrice = () => {
        let total = 0;
        cartItemsList.querySelectorAll('tr').forEach(row => {
            const priceCell = row.querySelector('td:nth-child(2)');
            if (priceCell) {
                total += parseFloat(priceCell.textContent.replace('.-', ''));
            }
        });
        totalPriceContainer.textContent = `Total Price: ${total.toFixed(2)} .-`;
    };

    const createReceipt = () => {
        const receiptData = [];
        cartItemsList.querySelectorAll('tr').forEach(row => {
            const nameCell = row.querySelector('td:nth-child(1)').textContent;
            const priceCell = row.querySelector('td:nth-child(2)').textContent;
            receiptData.push({ name: nameCell, price: priceCell });
        });
        localStorage.setItem('receiptData', JSON.stringify(receiptData));
        localStorage.setItem('totalPrice', totalPriceContainer.textContent);
        window.location.href = 'receipt.html';
    };

    billButton.addEventListener('click', createReceipt);
});
document.addEventListener('DOMContentLoaded', function () {
    const receiptContent = JSON.parse(localStorage.getItem('receiptData'));
    const totalPrice = localStorage.getItem('totalPrice');
    const receiptContentDiv = document.getElementById('receiptContent');
    const receiptTotalPriceDiv = document.getElementById('receiptTotalPrice');

    if (receiptContent && receiptContent.length > 0) {
        const table = document.createElement('table');
        const tableHeader = `
            <thead>
                <tr>
                    <th>ชื่อ</th>
                    <th>ราคา</th>
                </tr>
            </thead>
        `;
        table.innerHTML = tableHeader;
        const tbody = document.createElement('tbody');
        receiptContent.forEach(item => {
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            nameCell.textContent = item.name;
            const priceCell = document.createElement('td');
            priceCell.textContent = item.price;
            row.appendChild(nameCell);
            row.appendChild(priceCell);
            tbody.appendChild(row);
        });
        table.appendChild(tbody);
        receiptContentDiv.appendChild(table);
        receiptTotalPriceDiv.textContent = totalPrice;
    } else {
        receiptContentDiv.textContent = 'No items selected.';
    }
});