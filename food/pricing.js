import { cart, clearCart } from "./cart.js";

const addPurchaseSound = new Audio('purchase sound.mp3');

function purchaseSound() {
    addPurchaseSound.currentTime - 0;
    addPurchaseSound.play();
}

export function updateTotalPrice() {
    let total = 0.00;
    let orderSummaryHTML = '';


    if (cart.length > 0) {
        total = cart.reduce((sum, food) => sum + Number(food.price), 0);
        
    }
   orderSummaryHTML = `
        <div class="summary-line">
        <span>Total:</span>
        <span class="summary-total">₦${total}</span> 
    </div>
    <button class="checkout-btn">Proceed to Checkout</button>
   `;
   
   document.getElementById('js-order-summary').innerHTML = orderSummaryHTML;
   const amount = Number(total);

   function payWithPaystack() {
    
        const { jsPDF } = window.jspdf;

    console.log(amount);
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const address = document.getElementById('room').value;
    const number = document.getElementById('phone').value;
    
    
    console.log(email, name, address, number);
    if (!email || !name || !address || !number) {
        alert('Please put your email, your name, address number and phone number');
        return;
    }
    
    new PaystackPop().newTransaction({
        key: 'pk_live_f815dbee167ebaa4ebfcec8159fc879f62f62be7',
        email,
        amount: amount * 100,

        //Force only cards
        channels: ['card'],

        metadata: {
                    custom_fields: [{
                        display_name: 'Full Name',
                        variable_name: 'full_name',
                        value: name
                    }, {
                        display_name: 'Address',
                        variable_name: 'address',
                        value: address
                    }, {
                        display_name: 'Phone Number',
                        variable_name: 'phone_number',
                        value: number
                    }, {
                        display_name: 'Cart Items',
                        variable_name: 'cart',
                        value: JSON.stringify(cart.map(i => i.name).join(', '))
                    }],
            },
        onSuccess: (transaction) => {
            console.log('Success', transaction);
            purchaseSound();
            clearCart();
            alert('Payment Successfull, Check your Email for the Receipt');
            const doc = new jsPDF();

            doc.setFontSize(22);
            doc.text("Payment Receipt", 20, 20);

            doc.setFontSize(12);
            doc.text("Thank you for your purchase!", 20, 30);

            doc.text(`Reference: ${transaction.reference}`, 20, 50);
            doc.text(`Name: ${name}`, 20, 60);
            doc.text(`Email: ${email}`, 20, 70);
            doc.text(`Address: ${address}`, 20, 80);
            doc.text(`Phone Number: ${number}`, 20, 90);

            doc.text(`Amount Paid: ₦${amount}`, 20, 110);

            doc.text("Items Purchased:", 20, 130);
            cart.forEach((item, index) => {
                doc.text(`- ${item.name} (₦${item.price})`, 25, 140 + index * 10);
            });

            doc.setFontSize(10);
            doc.text("Generated Automatically - Not an Official Tax Invoice.", 20, 280);

            // ✅ SAVE PDF
            doc.save(`receipt_${transaction.reference}.pdf`);
        },
        onCancel: () => console.log('transaction has been cancelled'),
        onError: (error) => console.log('Error', error),
    });
}



//THIS IS THE BUTTON FUNCTION


   const button = document.getElementById('pay-now-btn');
    button.addEventListener('click', () => {
        payWithPaystack();
    });
}
updateTotalPrice();



