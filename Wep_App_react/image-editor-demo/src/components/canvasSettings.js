import React, {useState} from 'react'
import {Form, InputNumber} from 'antd';

export default function CanvasSettings(props) {
    const {allCanvas, activeCanvas, size, setSize, zoom} = props

    const handleChangeSize = (type, value) => {
        allCanvas.forEach((item) => {
            console.log(zoom)
            item.ref.setZoom(zoom)
            item.ref[type](value * zoom)
            item.ref.setBackgroundColor('rgba(255,255,255,1)')
            item.ref.renderAll()
        })
        setSize(type === 'setWidth' ? [value, size[1]] : [size[0], value])
    }

    return <div>
        <Form.Item
            label="宽"
        >
            <InputNumber precision={0} min={1} value={size[0]}
                         onChange={value => handleChangeSize('setWidth', value)}/>
        </Form.Item>
        <Form.Item
            label="高"
        >
            <InputNumber precision={0} min={1} value={size[1]}
                         onChange={value => handleChangeSize('setHeight', value)}/>
        </Form.Item>
        <Form.Item
            label="出血位"
        >
            10
        </Form.Item>
    </div>
}
