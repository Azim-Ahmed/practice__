import React, {useState} from 'react'
import {Button, Upload} from 'antd';
import {fabric} from 'fabric'
import ColorThief from 'colorthief/dist/color-thief.mjs'
const colorThief = new ColorThief();

const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
}).join('')

const unique = (arr) => [...new Set(arr)]

function Asset(props) {
    const {allCanvas, setSize, zoom, setPresetColors} = props
    const [imageSrc, setImageSrc] = useState(undefined)

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

    return <div>
        <Upload
            accept="image/*"
            action=""
            beforeUpload={(file) => new Promise(resolve => {
                // const reader = new FileReader();
                const image = window.URL.createObjectURL(file)
                // console.log(window.URL.createObjectURL(file))
                setImageSrc(image)
                fabric.Image.fromURL(image, img => {
                    allCanvas.forEach(({ref: canvas}) => {
                        canvas.setBackgroundImage(
                            img,
                            canvas.renderAll.bind(canvas),
                                {
                                  scaleX: canvas.width / img.width / zoom, // 计算出图片要拉伸的宽度
                                  scaleY: canvas.height / img.height / zoom // 计算出图片要拉伸的高度
                                }
                        )
                        // canvas.ref.renderAll()
                    })

                    // canvas.setBackgroundImage(
                    //     img,
                    //     canvas.renderAll.bind(canvas),
                    //     {
                    //       scaleX: canvas.width / img.width, // 计算出图片要拉伸的宽度
                    //       scaleY: canvas.height / img.height // 计算出图片要拉伸的高度
                    //     }
                    // )
                });
            })}>
            <Button>背景图选择</Button>
        </Upload>
        {imageSrc && <img  style={{display: 'none'}} src={imageSrc} width="100%" id="bg-image" onLoad={(e)=> setPresetColors(unique(colorThief.getPalette(document.querySelector('#bg-image'), 16).map(item => rgbToHex(...item))))}/> }
    </div>
}

export default Asset