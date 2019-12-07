import React from 'react';
import { actions } from '../../../mock/mock-calendar'
import ActionCard from './ActionCard';
import { Row, Col } from 'antd';

const Actions = props => {
    return (
        <Row type='flex'>
            {actions.map((action, index) => {
                return (
                    <Col span={8}>
                        <ActionCard action={action} key={index} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default Actions;