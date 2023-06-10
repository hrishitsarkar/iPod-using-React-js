
import styleMenu from '../styles/menulist.module.css'
export default function MyMusic(props){
    //destructuring
    const {activeItem} = props;
return (<>
        <div className={styleMenu.menu}>
                <h1 className={styleMenu.head}>iPod.js</h1>
                <ul className={styleMenu.unordered}>
                    <li className={activeItem === 'MyMusic' ? styleMenu.active : styleMenu.lists}>My Music</li>
                    <li className={activeItem === 'Artist' ? styleMenu.active : styleMenu.lists}>Artist</li>
                    <li className={activeItem === 'Album' ? styleMenu.active : styleMenu.lists}>Album</li>
                </ul>

            </div>
        </>)
}