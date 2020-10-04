import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children, signInWithGoogle, ...otherButtonProps}) => (
    <button className = {`${signInWithGoogle ? 'google-sign-in' :''} custom-button`} {...otherButtonProps}>
        {children}
    </button>
)

export default CustomButton;