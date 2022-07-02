import React, { useMemo, useState } from 'react'
import { Select, Tabs } from 'antd';
import Asset from './asset'
import Attribute from './attribute'
import CanvasSettings from './canvasSettings'
const { TabPane } = Tabs;

function ToolBox(props) {
    const { allCanvas, setTargetLanguages,
        activeElement, activeCanvas, setActiveElement,
        setSize, size, zoom,
        presetColors, setPresetColors, infos,
        setActiveCanvas, setSpinning
    } = props
    const [activeKey, setActiveKey] = useState("资源")

    const languages = useMemo(() => {
        return allCanvas.slice(1).map(({ language }) => language)
    }, [allCanvas])

    const languageOptions = () => {
        return infos.languages.map(({ language, name }) => ({ value: language, label: name }))
    }

    const fontOptions = () => {
        return infos.fonts.map(({ url, name }) => ({ value: url, label: name }))
    }

    // async function loadFonts() {
    //     const target = canvasRef.current.getActiveObject()
    //     const font = new FontFace('pf', `url(${fonts})`);
    //     setLoading(true)
    //     await font.load();
    //     document.fonts.add(font);
    //     target.set("fontFamily", 'pf')
    //     canvasRef.current.renderAll()
    //     setLoading(false)
    //     console.log(canvasRef.current.toObject())
    //     console.log(canvasRef.current.toJSON())
    //     console.log(canvasRef.current.item(0)); // reference fabric.Rect added earlier (first object)
    //     console.log(canvasRef.current.getObjects()); // get all objects on canvas (rect will be first and only)
    // }

    return <Tabs onChange={setActiveKey} activeKey={activeKey}>
        <TabPane tab="资源" key="资源">
            <Asset allCanvas={allCanvas} zoom={zoom} setPresetColors={setPresetColors} />
        </TabPane>
        <TabPane tab="属性" key="属性">
            <Attribute
                activeElement={activeElement}
                activeCanvas={activeCanvas}
                setActiveCanvas={setActiveCanvas}
                setActiveElement={setActiveElement}
                presetColors={presetColors}
                fontOptions={fontOptions}
                setSpinning={setSpinning}
            />
        </TabPane>
        <TabPane tab="画板" key="画板">
            <CanvasSettings
                activeCanvas={activeCanvas}
                allCanvas={allCanvas}
                setSize={setSize}
                size={size}
                zoom={zoom}
            />
        </TabPane>
        <TabPane tab="语言设置" key="语言设置">
            <Select
                mode="multiple"
                style={{ width: '100%' }}
                options={languageOptions}
                value={languages}
                onChange={setTargetLanguages}
            />
        </TabPane>

    </Tabs>
}

export default ToolBox