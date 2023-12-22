import './App.css';
import * as React from 'react';
import { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Card } from './Card';
import { NavbarHead } from './NavbarHead';




function App() {
  const objarr = [{ "src": "https://dummyimage.com/450x300/dee2e6/6c757d.jpg", "type": "Fancy Product", "rating": "", "rate": "$40.00 - $80.00", "rate1": "" },
  { "src": "https://dummyimage.com/450x300/dee2e6/6c757d.jpg", "number": "Sale", "type": "Special Item", "rating": "⭐⭐⭐⭐⭐", "rate": "$20.00", "rate1": "$18.00" },
  { "src": "https://dummyimage.com/450x300/dee2e6/6c757d.jpg", "number": "Sale", "type": "Sale Item", "rating": "", "rate": "$50.00", "rate1": "$25.00" },
  { "src": "https://dummyimage.com/450x300/dee2e6/6c757d.jpg", "type": "Popular Item", "rating": "⭐⭐⭐⭐⭐", "rate": "$40.00", "rate1": "" },
  { "src": "https://dummyimage.com/450x300/dee2e6/6c757d.jpg", "number": "Sale", "type": "Sale Item", "rating": "", "rate": "$50.00", "rate1": "$25.00" },
  { "src": "https://dummyimage.com/450x300/dee2e6/6c757d.jpg", "type": "Fancy Product", "rating": "", "rate": "$120.00 - $280.00", "rate1": "" },
  { "src": "https://dummyimage.com/450x300/dee2e6/6c757d.jpg", "number": "Sale", "type": "Special Item", "rating": "⭐⭐⭐⭐⭐", "rate": "$20.00", "rate1": "$18.00" },
  { "src": "https://dummyimage.com/450x300/dee2e6/6c757d.jpg", "type": "Popular Item", "rating": "⭐⭐⭐⭐⭐", "rate": "$40.00", "rate1": "" }]
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavbarHead count={count} />
      <Header />
      <div className="Cardcls">
        {objarr.map((product) => (<Card product={product} count={count} setCount={setCount} />))}
      </div>
      <Footer />

    </div>
  );
}

export default App;
