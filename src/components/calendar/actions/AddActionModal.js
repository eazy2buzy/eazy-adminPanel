import React, { useState } from 'react';
import { Input, Radio, Upload, Icon, message } from 'antd';
import { AddActionModalStyle } from './ActionStyles'

const { TextArea } = Input;
const AddActionModal = props => {

    const [gender, setGender] = useState('MEN');
    const [actionName, setActionName] = useState('');
    const [duration, setDuration] = useState(null);
    const [price, setPrice] = useState(null);
    const [description, setDescription] = useState('');
    const [imgURL, setImgURL] = useState('');
    const [loading, setLoading] = useState(false)


    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    const beforeUpload = file => {

        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG files');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }

    const uploadButton = () => (
        <div>
            <Icon type={loading ? 'loading' : 'plus'} />
            <div className='ant-upload-text'>Upload</div>
        </div>
    )


    const handleChange = info => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, imgUrl => {
                setImgURL(imgUrl);
                setLoading(false);
            })
        }
    }

    return (
        <AddActionModalStyle>
            <div className="input-item">
                <Input placeholder={'Action Name'} onChange={e => setActionName(e.target.value)} />
            </div>

            <div className="input-item">
                <Radio.Group onChange={e => setGender(e.target.value)} value={gender}>
                    <Radio value="MEN">Men</Radio>
                    <Radio value="WOMEN">Women</Radio>
                </Radio.Group>
            </div>
            <div className="input-item">
                <Input placeholder={'Duration time'} onChange={e => setDuration(e.target.value)} />
            </div>
            <div className="input-item">

                <Input placeholder={'Price'} onChange={e => setPrice(e.target.price)} />
            </div>
            <div className="input-item">
                <TextArea placeholder={'Description'} onChange={e => setDescription(e.target.value)} rows={4} />
            </div>
            <div>
                <Upload name="avatar" listType={'picture-card'} className={'action-upload'} showUploadList={false} action={'http://www.google.com'} beforeUpload={beforeUpload} onChange={handleChange}>
                    {imgURL ? <img src={imgURL} style={{ width: '100%' }} /> : uploadButton}
                </Upload>
            </div>
        </AddActionModalStyle>
    )
}

export default AddActionModal;