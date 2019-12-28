import React, { useState } from 'react';
import { actions } from '../../../mock/mock-calendar'
import ActionCard from './ActionCard';
import { Row, Col, Icon, Button, Modal } from 'antd';
import { ActionsStyle } from './ActionStyles';
import CustomHeader from '../../custom-componenets/CustomHeader';
import AddActionModal from './AddActionModal';
const Actions = props => {

    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleAddAction = () => {
        setVisible(true)
    }

    const onActionAdded = () => {
        setLoading(true);
        setTimeout(() => {
            console.log('action added')
        }, 2000);
        setLoading(false);

    }

    const modalFooter = [
        <Button key="close" onClick={() => setVisible(false)}>Close</Button>,
        <Button key="add" loading={loading} onClick={onActionAdded}>Add</Button>
    ]

    const headerAction = [
        {
            icon: {
                type: 'plus-circle',
                theme: "twoTone",
                fontSize: 40,
                color: '#1890ff'
            },
            handleActionClicked: handleAddAction
        }
    ]
    return (
        <ActionsStyle>
            <CustomHeader title="Actions" actions={headerAction} />
            <Modal title='Add Action' visible={visible} footer={modalFooter} onCancel={() => setVisible(false)}>
                <AddActionModal />
            </Modal>
            <div className="actions-container">
                <Row type='flex'>
                    {actions.map((action, index) => {
                        return (
                            <Col span={8}>
                                <ActionCard action={action} key={index} />
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </ActionsStyle>
    )
}

export default Actions;