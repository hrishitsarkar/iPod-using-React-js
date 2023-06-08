import React from "react";
import screenStyle from '../styles/screen.module.css'
import MenuList from "./MenuList";
import NowPlaying from "./NowPlaying";
import Games from './Games';
export default class Screen extends React.Component{
render(){
    const {activeItem,activePage,data,current,play} = this.props;
    
    return (
        <>
            <div className={screenStyle.screenContainer}>
                <div className={screenStyle.mainScreen}>
                <div className={screenStyle.nav}><img className={screenStyle.battery} src="https://cdn-icons-png.flaticon.com/128/664/664882.png" /></div>
                
                {activePage === 'MenuList' ? <MenuList activeItem = {activeItem} activePage = {activePage}/> : null }
                {activePage === 'NowPlaying' ? <NowPlaying data = {data} current = {current} play = {play} /> : null}
                {activePage === 'Games' ? <Games /> : null}
                
                
                <img className={screenStyle.wallpaper} src="https://images.pexels.com/photos/1287089/pexels-photo-1287089.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-1287089.jpg&fm=jpg" />
                
                


                </div>
            </div>
        </>
    )
}
}