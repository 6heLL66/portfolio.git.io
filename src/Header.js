import React from 'react'



class Header extends React.Component {
    menuClick(e) {
    	let y

    	if (e.target.textContent === "ABOUT") y = 800
    	else if (e.target.textContent === "WORK") y = 2150
    	else if (e.target.textContent === "SERVICES") y = 3005
    	else if (e.target.textContent === "TESTIMONIALS") y = 3600
    	else y = 4610

    	window.scrollTo({
    		top: y,
    		behavior: "smooth"
		})
    }
    render() {
        return (
            <header>
            	<img src = "./logo.png" alt = "not load" height = "30px" width = "38px" />
            	<div className="nav-panel">
            		<span>HOME</span>
            		<span onClick = {this.menuClick}>ABOUT</span>
            		<span onClick = {this.menuClick}>WORK</span>
            		<span onClick = {this.menuClick}>SERVICES</span>
            		<span onClick = {this.menuClick}>TESTIMONIALS</span>
            		<span onClick = {this.menuClick}>CONTACT</span>
            	</div>
            </header>
        )
    }
}

export default Header;
