document.addEventListener('DOMContentLoaded', function() {
    const menuItems = [
        { name: "ข้าวกะเพราทะเลไข่ดาว", price: 60, image: "pic/moo2.jpg", description: "Delicious stir-fried seafood basil with egg." },
        { name: "ข้าวหมูกรอบคั่วพริกเกลือ", price: 100, image: "pic/moo2.jpg", description: "Crispy pork fried with fish sauce." },
        { name: "ข้าวกะเพรา", price: 50, image: "pic/moo1.jpg", description: "Grilled pork basil with fried egg." },
        { name: "มาม่าผัดขี้เมาหมู", price: 40, image: "pic/moo2.jpg", description: "Spicy stir-fried noodles with pork." },
        { name: "ผัดพริกแกงทะเลราดข้าว", price: 50, image: "pic/moo2.jpg", description: "Stir-fried spicy seafood with rice." },
        { name: "ข้าวผัดทะเล", price: 50, image: "pic/moo2.jpg", description: "Seafood fried rice." },
        { name: "ต้มยำกุ้งน้ำข้น/น้ำใส", price: 100, image: "pic/moo2.jpg", description: "Tom Yum Goong (Spicy seafood soup) - creamy or clear broth." },
        { name: "ลุยทะเล", price: 50, image: "pic/moo2.jpg", description: "Spicy seafood salad." },
        { name: "ปลาหมึกทอดกระเทียม", price: 80, image: "pic/moo2.jpg", description: "Crispy garlic fried squid." }
    ];
    
    const menuContainer = document.getElementById('menu');
    const cartItemsList = document.getElementById('cartItems');
    const totalPriceContainer = document.getElementById('totalPrice');
    const billButton = document.getElementById('billButton');
    const popupContainer = document.getElementById('popup-container');
    const popupContent = document.getElementById('popup-content');
    const closePopupButton = document.getElementById('close-popup');
    let total = 0;

    function updateTotalPrice() {
        totalPriceContainer.textContent = `Total Price: ${total.toFixed(2)} .-`;
    }

    function addToCart(item) {
        const cartItem = document.createElement('tr');
        cartItem.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price} .-</td>
            <td><button class="remove-item">X</button></td>
        `;
        
        cartItem.querySelector('.remove-item').addEventListener('click', () => {
            cartItem.remove();
            total -= item.price;
            updateTotalPrice();
        });
        
        cartItemsList.appendChild(cartItem);
        total += item.price;
        updateTotalPrice();
    }

    function showPopup(item) {
        popupContent.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-item img"/>
            <h3>${item.name}</h3>
            <p>${item.price} .-</p>
            <button id="confirm-add-to-cart" class="billButton">เพิ่ม</button>
        `;

        document.getElementById('confirm-add-to-cart').addEventListener('click', () => {
            addToCart(item);
            popupContainer.classList.add('hidden');
        });
        
        popupContainer.classList.remove('hidden');
    }

    closePopupButton.addEventListener('click', () => {
        popupContainer.classList.add('hidden');
    });

    menuItems.forEach(item => {
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
        
        menuItem.querySelector('.add-to-cart').addEventListener('click', () => {
            showPopup(item);
        });
        
        menuContainer.appendChild(menuItem);
    });

    const createReceipt = () => {
        const receiptData = [];
        cartItemsList.querySelectorAll('tr').forEach(row => {
            const nameCell = row.querySelector('td:nth-child(1)').textContent;
            const priceCell = row.querySelector('td:nth-child(2)').textContent;
            receiptData.push({ name: nameCell, price: parseFloat(priceCell.replace(' .-', '')) });
        });
        localStorage.setItem('receiptData', JSON.stringify(receiptData));
        localStorage.setItem('totalPrice', totalPriceContainer.textContent);
        window.location.href = 'receipt.html';
    };

    billButton.addEventListener('click', createReceipt);
});
