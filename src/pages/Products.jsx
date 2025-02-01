import { useEffect, useState } from 'react';
import PaystackButton from '../components/PaystackButton';
import { auth } from '../firebase';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => setUser(user));
    return unsubscribe;
  }, []);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="products-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image_url} alt={product.name} />
          <h3>{product.name}</h3>
          <p>₦{product.price.toLocaleString()}</p>
          {user ? (
            <PaystackButton 
              amount={product.price} 
              email={user.email} 
            />
          ) : (
            <p>Please sign in to purchase</p>
          )}
        </div>
      ))}
    </div>
  );
}
