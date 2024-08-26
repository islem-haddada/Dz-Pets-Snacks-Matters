import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext'; // Assurez-vous que le chemin est correct
import './Verify.css';

const Verify = () => {
  const { url } = useContext(StoreContext);
  const [searchParams] = useSearchParams(); // `setSearchParams` n'est pas utilisé, donc il est retiré
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const navigate = useNavigate();

  const verifyPayment = async () => {
    try {
      const response = await axios.post(url + "/api/order/verify", { success, orderId });
      if (response.data.success) {
        navigate("/myorders");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Payment verification failed:", error);
      navigate("/");
    }
  };

  useEffect(() => {
    if (success && orderId) {
      verifyPayment();
    } else {
      navigate("/"); // Redirige si les paramètres sont manquants
    }
  }, [success, orderId, navigate]); // Ajoutez les dépendances appropriées

  return (
    <div className='verify'>
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
