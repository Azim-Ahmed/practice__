import React, {useState} from 'react'
import {Empty, Form, InputNumber, Select} from 'antd';
import { SketchPicker } from 'react-color'
import {loadFont} from '../helper'

const STYLE_OPTIONS = [
    {
        value: 'normal',
        label: 'normal',
    },
    {
        value: 'italic',
        label: 'italic',
    },
]

const ALIGN_OPTIONS = [
    {
        value: 'left',
        label: 'left',
    },
    {
        value: 'center',
        label: 'center',
    },
    {
        value: 'right',
        label: 'right',
    }
]

function Attribute(props) {
    const {activeElement, activeCanvas, setActiveElement, presetColors, fontOptions, setSpinning} = props
    const [,forceUpdate] = useState(0)

    const onChange = (type, value) => {
        if (type === 'fontFamily') {
            const name = fontOptions.find(item => item.value === value).label
            const fonts = [...document.fonts.values()]
            const font = fonts.find(item => item.family === name)
            if(!font || font?.status !== 'loaded') {
                setSpinning(true)
                return loadFont(name, value).then(() => {
                    activeElement.set({
                        [type]: value
                    })
                    setSpinning(false)
                    activeCanvas.ref.renderAll()
                })
            }
        }
        activeElement.set({
            [type]: value
        })
        activeCanvas.ref.renderAll()
        forceUpdate(i => ++i)
    }

    return <div>
        {
            activeElement ? <>
                    <Form.Item
                        label="字号"
                    >
                        <InputNumber precision={0} min={1} value={activeElement.fontSize}
                                     onChange={value => onChange('fontSize', value)}/>
                    </Form.Item>
                    <Form.Item
                        label="字体"
                    >
                        <Select options={fontOptions}
                                loading={activeCanvas.loadingFont}
                                disabled={activeCanvas.loadingFont}
                                value={activeElement.fontFamily}
                                onChange={value => onChange('fontFamily', value)}/>
                    </Form.Item>
                    <Form.Item
                        label="样式"
                    >
                        <Select options={STYLE_OPTIONS}
                                value={activeElement.fontStyle}
                                onChange={value => onChange('fontStyle', value)}/>
                    </Form.Item>
                    <Form.Item
                        label="对齐方式"
                    >
                        <Select options={ALIGN_OPTIONS}
                                value={activeElement.textAlign}
                                onChange={value => onChange('textAlign', value)}/>
                    </Form.Item>
                    <Form.Item
                        label="颜色"
                    >
                        <SketchPicker
                            color={activeElement.fill}
                            presetColors={presetColors}
                            onChangeComplete={(color) =>  onChange('fill', color.hex)
                            }
                        />
                    </Form.Item>
                    <Form.Item
                        label="背景色"
                    >
                        <SketchPicker
                            color={activeElement.backgroundColor}
                            presetColors={presetColors}
                            onChangeComplete={(color) =>  onChange('backgroundColor', color.hex)
                            }
                        />
                    </Form.Item>
                </>
                : <Empty description="需要选中文本框"/>
        }
    </div>
}

export default Attribute