import React from "react";
import styleMenu from '../styles/menulist.module.css'


export default function MenuList(props){
    //destructuring the props
    const {activeItem,activePage} = props;
    return (
        <>
            <div className={styleMenu.menu}>
                <h1 className={styleMenu.head}>iPod.js</h1>
                <ul className={styleMenu.unordered}>
                    <li className={activeItem === 'NowPlaying' ? styleMenu.active : styleMenu.lists}>Now Playing</li>
                    <li className={activeItem === 'Songs' ? styleMenu.active : styleMenu.lists}>Songs</li>
                    <li className={activeItem === 'Games' ? styleMenu.active : styleMenu.lists}>Games</li>
                    <li className={activeItem === 'Settings' ? styleMenu.active : styleMenu.lists}>Settings</li>
                </ul>

            </div>
        </>
    )
}