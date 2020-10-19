import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HduUgD98OaAyhjRUQPjjwlyDqk1t8292eoLYSIheKC0sd9b91XnO8yU6mPRP9I6qam0vQ2zxsFihZmpUGhUZQzF00AxZXsoTl';
  
    const onToken = token => {
      console.log(token);
      alert('Payment Succesful!');
    };
  
    return (
      <StripeCheckout
        label='Pay Now'
        name='Cool Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
    );
  };
  
  export default StripeCheckoutButton;