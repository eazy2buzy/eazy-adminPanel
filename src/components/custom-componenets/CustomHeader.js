import React from 'react';
import { Button, Icon } from 'antd';
import { CustomHeaderStyle } from './CustomComponentStyles';

const CustomHeader = props => {

    const { title, actions } = props;


    return (
        <CustomHeaderStyle>
            <div>
                <h1 className="header-title">{title}</h1>
            </div>
            <div className="actions-flex-box">
                {
                    actions.map((action, index) => {
                        if (!!action.icon) {
                            return <Icon type={action.icon.type} style={{ color: action.icon.color, fontSize: action.icon.fontSize }} onClick={action.handleActionClicked} theme={action.icon.theme} />
                        }
                        return <Button onClick={props.handleActionClicked}>{action.textButton}</Button>
                    })
                }
            </div>
        </CustomHeaderStyle>
    )
}
export default CustomHeader;