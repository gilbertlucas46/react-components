import React, { Component } from 'react'
import styled from 'styled-components';
import {Portal, absolute} from 'Utilities';
import Icon from './Icon';
import {Card} from './Cards';

export default class Modal extends Component {
    render() {
        const { children, on, toggle } = this.props
        return (
            <Portal>
                {on &&
                    <ModalWrapper>
                        <ModalCard>
                            <div>
                                <CloseButton onClick={toggle}>
                                <Icon name="close"/>
                                {/* add color="red" to change svg's color */}
                                </CloseButton>
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
    ${absolute({})};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalCard = styled(Card)`
    position: relative;
    z-index:10;
    min-width: 320px;
    max-width: 600px;
    margin-bottom: 100x;
`;
const CloseButton = styled.button`
    ${absolute({
        y: 'top',
        x: 'right'
    })};
    border:none;
    background: transparent;
    padding: 10px; 
`;

const Background = styled.div`
    background-color: black;
    ${absolute({})};
    width: 100%;
    height: 100%;
    opacity:0.5;
`;