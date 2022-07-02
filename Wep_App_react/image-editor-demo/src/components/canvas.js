import { fabric } from "fabric";
import {Button, message, Spin} from 'antd';
import { nanoid } from 'nanoid';
import React, { useEffect, useState, useRef} from 'react';
import {download, getImageUrl} from '../helper'

function Canvas(props) {
    const {data: {language, translating = false, loadingFont = false}, size,
        setActiveCanvas,  activeCanvas, setActiveElement,
        allCanvas, index, dispatch, isModifiedByHistory, zoom } = props
    const id = `${language}-canvas`
    const canvasRef = useRef()
    const allCanvasRef = useRef(allCanvas)
    const activeLanguage = activeCanvas.language

    useEffect(() => {
        allCanvasRef.current = allCanvas
    }, [allCanvas])

    const saveImage = () => {
        canvasRef.current.discardActiveObject()
        canvasRef.current.renderAll();
        const {width, height} = canvasRef.current
        const objects = canvasRef.current.getObjects()
        if (objects.some(item =>  item.top < 10 || item.left <10 || item.top + item.height > height - 10 || item.left + item.width > width - 10
        )) {
            message.error(`图${index+1}有溢出，请修改`)
        } else {
            download(getImageUrl(id), `${language}_${nanoid(6)}.png`)
        }
    }

    useEffect(() => {
        if(language !== 'default'){
            canvasRef.current = new fabric.Canvas(id)
            canvasRef.current.loadFromJSON(allCanvas[0].ref.toJSON(), () =>  canvasRef.current.renderAll())
        } else {
            canvasRef.current = new fabric.Canvas(id);
            props.data.ref = canvasRef.current
            fabric.Object.prototype.set({
                borderColor: "#4885ED",
                cornerColor: "#4885ED",
                cornerStrokeColor: "#4885ED",
                cornerSize: 8,
                cornerStyle: "circle",
                transparentCorners: false,
            });
            const shape = new fabric.Textbox(nanoid(8), {
                text: '请输入',
                width: 120,
                // height : 40,
                fill: '#06c',
                left: size[0] / 2 - 60,
                top: size[1] / 2 - 20,
                lineHeight: 1,
                // lockScalingY: true,
                fontSize: 40,
                textAlign: 'center',
                splitByGrapheme: false,
                fontFamily: '系统默认字体',
                // styles: {
                //     0: {
                //         0: { textDecoration: 'underline', fontSize: 80 },
                //         1: { fill: 'red' }
                //     },
                // }
            })

            canvasRef.current.add(shape);
        }
        props.data.ref = canvasRef.current
        // 复制不带格式
        fabric.disableStyleCopyPaste = true;
        canvasRef.current.selection = false;
        canvasRef.current.setZoom(zoom)
        canvasRef.current.setWidth(size[0] * zoom);
        canvasRef.current.setHeight(size[1] * zoom)
        canvasRef.current.backgroundColor = 'rgba(255,255,255,1)';
        canvasRef.current.renderAll();
        canvasRef.current.on("mouse:down", function (options) {
            setActiveCanvas(props.data)
            console.log(options, options.target, options.e.offsetX, options.e.offsetY)
            if (options.target) {
                canvasRef.current.renderAll();
                setActiveElement(options.target)
            } else {
                setActiveElement(null)
            }
            allCanvasRef.current.filter(item => item.language !== language).forEach((item) => {
                item.ref.discardActiveObject()
                item.ref.renderAll();
            })
        });

        // canvasRef.current.on('object:modified', function(event) {
        //     if (event.target) {
        //         event.target.fontSize *= event.target.scaleX;
        //         event.target.fontSize = event.target.fontSize.toFixed(0);
        //         event.target.scaleX = 1;
        //         event.target.scaleY = 1;
        //         event.target._clearCache();
        //     }
        // });

        // event:added
        // event:removed
        // event:selected
        // event:deselected
        // event:modified
        // event:modified
        // event:moved
        // event:scaled
        // event:rotated
        // event:skewed

        // function getSnapshot(options){
        //     console.log('add snapshot', isModifiedByHistory.current, options)
        //     console.log(allCanvasRef.current)
        //     if(!isModifiedByHistory.current){
        //         console.log(allCanvasRef.current[0].ref)
        //         dispatch({type: 'getSnapshot', payload: { allCanvas: [...allCanvasRef.current]}})
        //     }
        // }
        //
        // canvasRef.current.on("object:added", getSnapshot);
        // canvasRef.current.on("object:move", getSnapshot);
        // canvasRef.current.on("before:render", getSnapshot);
        // canvasRef.current.on("object:modfied", getSnapshot);
        // canvasRef.current.on("object:removed", getSnapshot);


        // // canvasRef.current.on("object:added", function (options) {
        //     console.log('added',   options, allCanvas[1].ref.isUpdating)
        //     // if(isActiveRef.current){
        //     //     dispatch({type: 'getSnapshot', payload: { allCanvas: allCanvasRef.current}})
        //     // }
        // });
        // canvasRef.current.on("object:moved", function (options) {
        //     console.log('moved', isActiveRef.current,  options, options.isUpdating)
        //     if(isActiveRef.current){
        //         dispatch({type: 'getSnapshot', payload: { allCanvas: allCanvasRef.current}})
        //     }
        // });
        // canvasRef.current.on("object:modified", function (options) {
        //     console.log('modified', isActiveRef.current ,options)
        //     if(isActiveRef.current){
        //         dispatch({type: 'getSnapshot', payload: { allCanvas: allCanvasRef.current}})
        //     }
        // });
        // canvasRef.current.on("object:removed", function (options) {
        //     console.log('removed', isActiveRef.current ,options)
        //     if(isActiveRef.current){
        //         dispatch({type: 'getSnapshot', payload: { allCanvas: allCanvasRef.current}})
        //     }
        // });
        // canvasRef.current.on("mouse:out", function (options) {
        //
        // });

        canvasRef.current.on("object:scaling", function (options) {
            if (options.target) {
                const {height, scaleY, width, fontSize, fontFamily, fontStyle, textAlign} = options.target
                const newFontSize = (fontSize * scaleY).toFixed(0)
                if(height && scaleY && newFontSize > 12) {
                    options.target.set({
                        height: height * scaleY || height,
                        width: width * scaleY || width,
                        fontSize: newFontSize,
                        scaleY: 1,
                        scaleX: 1,
                        fontFamily,
                        fontStyle,
                        textAlign,
                    });
                    canvasRef.current.renderAll();
                    setActiveElement({...options.target})
                }
            }
        });
        }, [])

    return <Spin spinning={translating || loadingFont}>
        <div style={{boxShadow: language === activeLanguage && '0 0 0 1px #1890FF', margin: 1}}>
            {/*<div>{language}</div>*/}
            <canvas id={id}/>
        </div>
        <Button type="primary" block onClick={saveImage}>保存图片</Button>
    </Spin>
}

export default React.memo(Canvas)