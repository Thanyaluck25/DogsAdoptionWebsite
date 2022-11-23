import { Component } from "react";
import "./NavbarStyles.css";
import {MenuItems} from './MenuItems';

class Navbar extends Component{
    state = {clicked: false};
    handleClicked = ()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="nav-logo">Doggy</h1>

                <div className="menu-icons" onClick={this.handleClicked}>
                    <i className={this.state.clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index)=>{
                        return (
                            <li key={index}>
                                <a className={item.cName} href="/"><i className={item.icon}></i>{item.title}</a>
                            </li>
                        )
                    })}
                    <button>Sign Up</button>
                </ul>
            </nav>
        )
    }
}

export default Navbar;