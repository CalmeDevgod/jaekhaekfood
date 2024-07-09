document.addEventListener('DOMContentLoaded', function () {
    const menuItems = [
        {
            name: 'ข้าวกะเพราทะเลไข่ดาว',
            price: '60.-',
            image: 'item1.jpg',
            description: 'Delicious stir-fried seafood basil with egg.'
        },
        {
            name: 'หมูกรอบทอดน้ำปลา',
            price: '100.-',
            image: 'item2.jpg',
            description: 'Crispy pork fried with fish sauce.'
        },
        {
            name: 'ข้าวกะเพราอกหมูย่างไข่ดาว',
            price: '60.-',
            image: 'item3.jpg',
            description: 'Grilled pork basil with fried egg.'
        },
        {
            name: 'มาม่าผัดขี้เมาหมู',
            price: '40.-',
            image: 'item4.jpg',
            description: 'Spicy stir-fried noodles with pork.'
        },
        {
            name: 'ผัดพริกแกงทะเลราดข้าว',
            price: '50.-',
            image: 'item5.jpg',
            description: 'Stir-fried spicy seafood with rice.'
        },
        {
            name: 'ข้าวผัดทะเล',
            price: '50.-',
            image: 'item6.jpg',
            description: 'Seafood fried rice.'
        },
        {
            name: 'ต้มยำกุ้งน้ำข้น/น้ำใส',
            price: '100.-',
            image: 'item7.jpg',
            description: 'Tom Yum Goong (Spicy seafood soup) - creamy or clear broth.'
        },
        {
            name: 'ลุยทะเล',
            price: '50.-',
            image: 'item8.jpg',
            description: 'Spicy seafood salad.'
        },
        {
            name: 'ปลาหมึกทอดกระเทียม',
            price: '80.-',
            image: 'item9.jpg',
            description: 'Crispy garlic fried squid.'
        }
    ];

    const menuContainer = document.getElementById('menu');

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" />
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.price}</p>
            </div>
        `;
        menuContainer.appendChild(menuItem);
    });
});