import { usePaystackPayment } from 'react-paystack';

export default function PaystackButton({ amount, email }) {
  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: amount * 100,
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
    currency: 'NGN',
  };

  const initializePayment = usePaystackPayment({
    ...config,
    onSuccess: () => alert('Payment Successful!'),
    onClose: () => alert('Payment Closed'),
  });

  return (
    <button 
      onClick={() => initializePayment()}
      className="paystack-button"
    >
      Pay ₦{(amount).toLocaleString()}
    </button>
  );
}
