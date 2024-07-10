document.addEventListener('DOMContentLoaded', function () {
    const menuItems = [
        {
            name: 'ข้าวกะเพราทะเลไข่ดาว',
            price: '60.-',
            image: 'pic/moo2.jpg',
            description: 'Delicious stir-fried seafood basil with egg.'
        },
        {
            name: 'ข้าวหมูกรอบคั่วพริกเกลือ',
            price: '60.-',
            image: 'pic/moo2.jpg',
            description: 'Crispy pork fried with salt.'
        },
        {
            name: 'ข้าวกะเพราหมูกรอบไข่ดาว',
            price: '60.-',
            image: 'pic/moo1.jpg',
            description: 'Grilled pork basil with fried egg.'
        },
        {
            name: 'มาม่าผัดขี้เมาหมู',
            price: '40.-',
            image: 'pic/moo2.jpg',
            description: 'Spicy stir-fried noodles with pork.'
        },
        {
            name: 'ผัดพริกแกงทะเลราดข้าว',
            price: '50.-',
            image: 'pic/moo2.jpg',
            description: 'Stir-fried spicy seafood with rice.'
        },
        {
            name: 'ข้าวผัดทะเล',
            price: '50.-',
            image: 'pic/moo2.jpg',
            description: 'Seafood fried rice.'
        },
        {
            name: 'ต้มยำกุ้งน้ำข้น/น้ำใส',
            price: '100.-',
            image: 'pic/moo2.jpg',
            description: 'Tom Yum Goong (Spicy seafood soup) - creamy or clear broth.'
        },
        {
            name: 'ลุยทะเล',
            price: '50.-',
            image: 'pic/moo2.jpg',
            description: 'Spicy seafood salad.'
        },
        {
            name: 'ปลาหมึกทอดกระเทียม',
            price: '80.-',
            image: 'pic/moo2.jpg',
            description: 'Crispy garlic fried squid.'
        },
        {
            name: 'ข้าวคะน้าหมูกรอบ',
            price: '80.-',
            image: 'pic/moo2.jpg',
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
