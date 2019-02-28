import React from 'react'
import ReactModal from 'react-modal'
import CartContainer from './CartContainer'
import Icon from "./../components/SVGIcon";

class Modal extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal(e) {
        e.preventDefault();
        this.setState({showModal: true});
    }

    handleCloseModal(e) {
        e.preventDefault();
        this.setState({showModal: false});
    }

    /* using buttons here keeps things accessible */
    render() {
        return (
            <div className="cart__link">
                <button className="link cart__open" onClick={this.handleOpenModal}>
                    <Icon width={18} /> Your cart is empty
                </button>
                <ReactModal
                    isOpen={this.state.showModal}>
                    <button className="link cart__close" onClick={this.handleCloseModal}>
                        <svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g id="v2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round">
                                <g id="Desktop-Copy-2" transform="translate(-971.000000, -205.000000)" stroke="#CBCBCB" strokeWidth="2">
                                    <g id="Group-3" transform="translate(972.000000, 206.000000)">
                                        <path d="M0.714285714,0.714285714 L29.6582851,29.6582851" id="Line-3"></path>
                                        <path d="M28,1 L0,30" id="Line-3"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </button>
                    <CartContainer/>
                </ReactModal>
            </div>
        );
    }
}

export default Modal