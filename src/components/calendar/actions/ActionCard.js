import React, { useState, useEffect } from 'react';
import { Card, Icon, Avatar } from 'antd';
import { ActionCardStyle } from './ActionStyles';
import { ActionFor } from '../../../mock/mock-calendar'
import WomenAvatar from '../../../assets/women_avatar.jpg';
import MenAvatar from '../../../assets/men_avatar.jpg';


const { Meta } = Card;



const ActionCard = props => {

    const [action, setAction] = useState(props.action);
    const imgSrc = require(`../../../assets/${action.imgURL}`)
    const avatarImg = action.type === ActionFor.WOMEN ? WomenAvatar : MenAvatar;

    const renderDescription = () => {
        return (
            <div className="desc-container">
                <div className="desc-item">
                    <span>duration: {action.price}</span>
                </div>
                <div className="desc-item">
                    <span>price: {action.price}</span>
                </div>
            </div>
        )
    }
    return (
        <ActionCardStyle>
            <Card className='card-container'
                cover={
                    <img className='img-action' alt={action.name} src={imgSrc} />
                }
                actions={[
                    <Icon type='setting' key='setting' />,
                    <Icon type='edit' key='edit' />,
                    <Icon type='ellipsis' key='ellipsis' />
                ]}>
                <Meta
                    avatar={<Avatar src={avatarImg} />}
                    title={action.name}
                    description={renderDescription()} />
            </Card>
        </ActionCardStyle>
    )

}

export default ActionCard;