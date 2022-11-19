import React, { useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import closeBtn from '../../assets/close-btn.svg'
import metaIcon from '../../assets/metamask-icon.svg'
import walletIcon from '../../assets/walletConnect.svg'
import right from '../../assets/right-icon.svg'

import './Modal.css'
const SuccessModal = props => {        
    const { onClose } = props;
    const closeOnEscapeKeyDown = useCallback((e) => {
    if ((e.charCode || e.keyCode) === 27) {
        onClose();
    }
    }, [onClose]);
    useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
        document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
    }, [closeOnEscapeKeyDown]);

    return ( 
        <div className={`modal ${props.show ? 'show': ''}`} onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <span><h1>Connect Wallet</h1></span>
                    <span><img src={closeBtn} alt="" onClick={props.onClose}/></span>
                </div>
                <div className="modal-body">
                    <h2>Choose your preferred wallet:</h2>
                    <div className="wallet-container">
                        <Link to='/' className="meta-wallet wallet">
                            <span><img src={metaIcon} alt="" /></span>
                            <span>Metamask</span>
                            <span><img src={right} alt="" /></span>
                        </Link>
                        <Link to='/' className="meta-wallet wallet">
                            <span><img src={walletIcon} alt="" /></span>
                            <span>WalletConnect</span>
                            <span><img src={right} alt="" /></span>
                        </Link  >

                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SuccessModal;