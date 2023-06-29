import React,{ forwardRef, useRef, useImperativeHandle } from "react"

import video1 from "./video/Download.mp4"
function Video(props,ref){
    const videoRef = useRef()
    useImperativeHandle(ref, ()=>(
        {
            play() {
                videoRef.current.play()
            },
            pause(){
                videoRef.current.pause()
            }
        }
    ))
    return (
        <video
        ref = {videoRef}
        src = {video1}
        width={280}
        />
    )
}
export default forwardRef(Video)