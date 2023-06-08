
import React from "react";
import Wheel from "./Wheel";
import Screen from "./Screen";
import ZingTouch from "zingtouch";
import {useRef} from 'react'

import sound from '../assets/songs/Starboy.mp3'

export default class Ipod extends React.Component{
    constructor(){
        super();
        this.state = {
            activeItem : 'NowPlaying',
            activePage : 'NowPlaying',
            play : false,

            
            
            
        }
    }

    
rotateWheel = () => {
    var rotateWheel = document.getElementById('rotating-wheel');
    var activeRegion = new ZingTouch.Region(rotateWheel);
    var change = 0;
    activeRegion.bind(rotateWheel,'rotate',(e) => {
        let newAngle = e.detail.distanceFromLast;
        
        if(newAngle > 0){
            
            change++;
            if(change === 15){
                change = 0;
                if(this.state.activePage === 'MenuList'){
                    if(this.state.activeItem === 'NowPlaying'){
                        this.setState({
                            activeItem : 'Songs'
                        });
                    }
                    else if(this.state.activeItem === 'Songs'){
                        this.setState({
                            activeItem : 'Games'
                        });
                    }
                    else if(this.state.activeItem === 'Games'){
                        this.setState({
                            activeItem : 'Settings'
                        });
                    }
                    else if(this.state.activeItem === 'Settings'){
                        this.setState({
                            activeItem : 'NowPlaying'
                        });
                    }
                    
                }
                
            }
            
        }else{
            change++;
            if(change === 15){
                change = 0;
                if(this.state.activePage === 'MenuList'){
                    if(this.state.activeItem === 'NowPlaying'){
                        this.setState({
                            activeItem : 'Settings'
                        });
                    }
                    else if(this.state.activeItem === 'Settings'){
                        this.setState({
                            activeItem : 'Games'
                        });
                    }
                    else if(this.state.activeItem === 'Games'){
                        this.setState({
                            activeItem : 'Songs'
                        });
                    }
                    else if(this.state.activeItem === 'Songs'){
                        this.setState({
                            activeItem : 'NowPlaying'
                        });
                    }
                    
                }
                
            }
        }
    })

}
    componentDidMount(){
        
        let audio = document.getElementById('audio-element');
        
        this.setState({
            audio : audio
        })
        console.log("state" , this.state);
        
    }
    render(){
        
        return (
            <>
                <audio id="audio-element" className="audio">
                    <source src = {sound}></source>
                </audio>
                <Screen activeItem = {this.state.activeItem} activePage = {this.state.activePage} audio = {this.state.audio} />
                
                <Wheel rotateWheel = {this.rotateWheel}/>
            </>
        )
    }

}