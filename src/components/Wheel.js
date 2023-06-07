import React from "react";


import wheelStyle from '../styles/wheel.module.css'



export default class Wheel extends React.Component{

    render(){
        const {rotateWheel} = this.props;
        return (
            <>
            
            <div className={wheelStyle.wheelContainer}>
                <div id="rotating-wheel" className={wheelStyle.redWheel} onMouseOver={rotateWheel}>
                    <div className={wheelStyle.menuBtn}>MENU</div>
                    <img className={wheelStyle.rewind} src="https://cdn-icons-png.flaticon.com/128/3/3778.png" />
                    <img className={wheelStyle.forward} src="https://cdn-icons-png.flaticon.com/128/1/1824.png" />
                    <img className={wheelStyle.playPause} src="https://cdn-icons-png.flaticon.com/128/7960/7960808.png" />
                    <div className={wheelStyle.selectWheel}></div>
                </div>
            
            </div>
            </>
        )
    }
}