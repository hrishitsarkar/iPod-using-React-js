import React from "react";
import screenStyle from '../styles/screen.module.css'
import MenuList from "./MenuList";
import NowPlaying from "./NowPlaying";
import Games from './Games';
import Settings from "./Settings";
import MyMusic from "./MyMusic";
import Artist from "./Artist";
import Album from './Album'
import wallpaper from '../assets/images/hills.jpg'
import battery from '../assets/images/battery.png'
export default class Screen extends React.Component{
render(){
    const {activeItem,activePage,data,current,play,audio,width} = this.props;
    console.log("screen",this.props);
    
    return (
        <>
            <div className={screenStyle.screenContainer}>
                <div className={screenStyle.mainScreen}>
                <div className={screenStyle.nav}><img className={screenStyle.battery} src={battery} /></div>
                
                {activePage === 'MenuList' ? <MenuList activeItem = {activeItem} activePage = {activePage}/> : null }
                {activePage === 'NowPlaying' ? <NowPlaying data = {data} current = {current} play = {play} audio = {audio} width = {width} /> : null}
                {activePage === 'Games' ? <Games /> : null}
                {activePage === 'Settings' ? <Settings /> : null}
                {activePage === 'MyMusic' ? <MyMusic  activeItem = {activeItem} activePage = {activePage} /> : null}
                {activePage === 'Artist' ? <Artist current = {current} /> : null}
                {activePage === 'Album' ? <Album /> : null}

                
                
                <img className={screenStyle.wallpaper} src={wallpaper} />
                
                


                </div>
            </div>
        </>
    )
}
}