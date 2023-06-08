
import React from "react";
import Wheel from "./Wheel";
import Screen from "./Screen";
import ZingTouch from "zingtouch";
import sound1 from '../assets/songs/Starboy.mp3';
import sound2 from '../assets/songs/Labon.mp3'
import images1 from '../assets/images/The_Weeknd_-_Starboy_(single).jpg';
import images2 from '../assets/images/Labon.jpg';



export default class Ipod extends React.Component{
    constructor(){
        super();
        this.state = {
            activeItem : 'NowPlaying',
            activePage : 'NowPlaying',
            play : false,
            
            data : [
                {
                    url : sound1,
                    images : images1,
                    name : "StarBoy by The Weeknd"
                },
                {
                    url : sound2,
                    images : images2,
                    name : "Labon Ko By KK"
                }
            ],
            current : 0

            
            
            
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

    // componentDidMount(){

    //     let audio = document.getElementById('audio-element');
        
    //     this.setState({ audio: audio }, () => {
    //         console.log("state", this.state);
    //     });
        
        
    // }
    // toggle = () => {
    //     if(this.state.activePage === 'NowPlaying'){
    //         if(this.state.play){
                
    //         }
    //     }
    // }
    render(){
        
        return (
            <>
                
                <Screen activeItem = {this.state.activeItem} activePage = {this.state.activePage} data = {this.state.data} current = {this.state.current} play ={this.state.play} />
                
                <Wheel rotateWheel = {this.rotateWheel}/>
            </>
        )
    }

}