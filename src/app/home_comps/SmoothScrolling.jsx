"use client"
import { ReactLenis } from '@studio-freight/react-lenis';
import ImageList from './ImageList'

function SmoothScrolling({page}){
    return (
        <ReactLenis root options={{lerp: 0.1, duration: 1.5, smoothTouch: true}}>
            <ImageList page={page}/>
        </ReactLenis>
    )
}

export default SmoothScrolling;
