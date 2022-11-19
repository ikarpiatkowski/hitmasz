import React, { useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';
const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);
  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Dzięki za zamówienie ziom!</h2>
        <p className="email-msg">Sprawdź swój email po rachunek.</p>
        <p className="description">
          Jeżeli masz pytania, napisz do bociana
          <a className="email" href="mailto:order@example.com">
            Jakub@Kołtonowski.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Kontynuuj
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Success;
