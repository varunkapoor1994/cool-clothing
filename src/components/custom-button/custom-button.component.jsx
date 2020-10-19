import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children,inverted, signInWithGoogle, ...otherButtonProps}) => (
    <button className = {`${inverted ? 'inverted' :''} ${signInWithGoogle ? 'google-sign-in' :''} custom-button`} {...otherButtonProps}>
        {children}
    </button>
)

export default CustomButton;