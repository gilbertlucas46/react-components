import React, { Component } from 'react'
import Portal from './Portal';
import styled from 'styled-components';

export default class Modal extends Component {
    render() {
        const { children, on, toggle } = this.props
        return (
            <Portal>
                {on &&
                    <ModalWrapper>
                        <ModalCard>
                            <div>
                                <CloseButton onClick={toggle}>Close</CloseButton>
                                {children}
                            </div>
                        </ModalCard>
                        <Background onClick={toggle} />
                    </ModalWrapper>
                }
            </Portal>
        )
    }
}

const ModalWrapper = styled.div`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalCard = styled.div`
    position: relative;
    border-radius: 4px;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
    background-color: white;
    z-index:10;
    min-width: 320px;
`;
const CloseButton = styled.button`
    position: absolute;
    top:0;
    right:0;
`;

const Background = styled.div`
    background-color: black;
    position: absolute;
    left:0;
    top:0;
    width: 100%;
    height: 100%;
    opacity:0.5;
`;