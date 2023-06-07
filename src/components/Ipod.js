
import React from "react";
import Wheel from "./Wheel";
import Screen from "./Screen";
import ZingTouch from "zingtouch";

export default class Ipod extends React.Component{
    constructor(){
        super();
        this.state = {
            activeItem : 'NowPlaying',
            activePage : 'NowPlaying',
            
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
    render(){
        
        return (
            <>
                <Screen activeItem = {this.state.activeItem} activePage = {this.state.activePage}/>
                
                <Wheel rotateWheel = {this.rotateWheel}/>
            </>
        )
    }

}