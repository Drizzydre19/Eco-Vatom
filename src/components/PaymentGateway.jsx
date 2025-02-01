import { loadStripe } from '@stripe/stripe-js';
import { usePaystackPayment } from 'react-paystack';

export const StripePayment = ({ amount, currency }) => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

  const handlePayment = async () => {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: 'PRICE_ID', quantity: 1 }],
      mode: 'payment',
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`,
    });
    
    if (error) alert(error.message);
  };

  return <button onClick={handlePayment}>Pay with {currency === 'NGN' ? 'Paystack' : 'Stpe'}</button>;
};

export const PaystackPayment = ({ amount, email }) => {
  const config = {
    reference: (new Date()).getTime().toString(),
    email,
    amount: amount * 100,
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
    currency: 'NGN',
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <button onClick={() => initializePayment(() => alert('Payment closed'))}>
      Pay with Paystack
    </button>
  );
};
