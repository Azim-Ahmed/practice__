console.log('script loaded');
const order1 = {
    customer: {
        name: 'Bob',
        phone: '123'
    },
    cart: [
        {
            product: 'Bread',
            quantity: 10,
            unitPrice: 10,
            totalPrice: 100
        }
    ],
    total: 100,
    paid: 80,
    due: 20
};

const order2 = {
    customer: {
        name: 'Alice',
        phone: '124'
    },
    cart: [
        {
            product: 'Rice',
            quantity: 10,
            unitPrice: 5,
            totalPrice: 50
        },
    ],
    total: 50,
    paid: 50,
    due: 0
};

const orders = [order1, order2];
console.log({ orders })
// 1. Calculate total orders amount : 150
// 2. Calculate total paid amount : 130
// 3. Calculate total due amount : 20
// 4. Calculate total orders count : 2
// 5. Calculate averge order amount : 75
// 6. Calculate item wise total sale  Bread : 100, Rice: 50

// 1. Calculate total orders amount : 150
const totalOrderAmount = orders.reduce((sum, current) => sum += current.total, 0)
console.log({ totalOrderAmount })
// 2. Calculate total paid amount : 130
const totalPaidAmount = orders.reduce((sum, current) => sum += current.paid, 0)
console.log({ totalPaidAmount })
// 3. Calculate total due amount : 20
const totalDueAmount = totalOrderAmount - totalPaidAmount;
console.log({ totalDueAmount })
// 4. Calculate total orders count : 2
const totalOrdersCount = orders.length;
console.log({ totalOrdersCount })
// 5. Calculate averge order amount : 75
const averageOrderAmount = orders.reduce((sum, current) => sum += current.total, 0) / orders.length
console.log({ averageOrderAmount })
// 6. Calculate item wise total sale  Bread : 100, Rice: 50
const itemWiseTotalSale = orders.map(item => item.cart).flat().map(item => item.unitPrice * item.quantity)
console.log(itemWiseTotalSale)