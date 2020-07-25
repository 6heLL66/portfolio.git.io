import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import axios from 'axios'


class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            skills: [ '90%', '5%', '5%' ]
        }
        window.onscroll = this.show
    }
    up() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    show() {
        if (window.pageYOffset > 800) document.getElementsByClassName('arrow')[0].style.display = 'flex'
        else document.getElementsByClassName('arrow')[0].style.display = 'none'
    }
    send() {
        let token = window.location.href.split('/')[1].split('&')[0].split('=')[1]
        let req = 'https://api.vk.com/method/message.send?user_id=173510111&message=hello&access_token={$token}&v=V'
        axios.get(req)
    }
    render() {
        return (
            <React.Fragment>
                <div className="block-1">
                    <div className="img-block">
                        <img src="./images/anime2.png"  />
                    </div>
                    <div className="text-block">
                        <h1>We Design and Develop</h1>
                        <p>We are a new design studio based in USA. We have over 20 years of combined experience, and know a thing or two about designing websites and mobile apps</p>
                        <div className="btn">CONTACT US</div>
                    </div>
                </div>
                <div className="block-2">
                    <div className="text-block">
                        <h1>About Us</h1>
                        <p>Divide have don't man wherein air fourth. Own itself make have night won't make. A you under Seed appear which good give. Own give air without fowl moveth dry first heaven fruit, dominion won't very all.</p>
                        <img src="./images/signature.png" alt="" />
                    </div>
                </div>
                <div className="block-3">
                    <div className="skills-bar">
                        <h1>Professional Skills</h1>
                        <div className="skill">
                            <p>WEB DEVELOPMENT 90%</p>
                            <div className="skill-line">
                                <div className="line-1"></div>
                                <div className="line-2" style = {{'width': this.state.skills[0]}}></div>
                            </div>
                        </div>
                        <div className="skill">
                            <p>MOBILE APP DEVELOPMENT 5%</p>
                            <div className="skill-line">
                                <div className="line-1"></div>
                                <div className="line-2" style = {{'width': this.state.skills[1]}}></div>
                            </div>
                        </div>
                        <div className="skill">
                            <p>DESKTOP APP DEVELOPMENT 5%</p>
                            <div className="skill-line">
                                <div className="line-1"></div>
                                <div className="line-2" style = {{'width': this.state.skills[2]}}></div>
                            </div>
                        </div>
                    </div>
                    <div className="skills-image"></div>
                </div>
                <div className="block-4">
                    <div className="item">
                        <i className="fal fa-briefcase"></i>
                        <div className="item-text">
                            <h1>548</h1>
                            <p>PROJECTS COMPLETED</p>
                        </div>
                    </div>
                    <div className="item">
                        <i className="fal fa-clock"></i>
                        <div className="item-text">
                            <h1>1465</h1>
                            <p>WORKING HOURS</p>
                        </div>
                    </div>
                    <div className="item">
                        <i className="fal fa-star"></i>
                        <div className="item-text">
                            <h1>612</h1>
                            <p>POSITIVE FEEDBACKS</p>
                        </div>
                    </div>
                    <div className="item">
                        <i className="fal fa-heart"></i>
                        <div className="item-text">
                            <h1>735</h1>
                            <p>HAPPY CLIENTS</p>
                        </div>
                    </div>
                </div>
                <Works />
                <div className="block-6">
                    <div className="items">
                        <div className="item">
                            <i className="fal fa-gem"></i>
                            <h1>UI / UX DESIGN</h1>
                            <p>Be set fourth land god darkness  make it wherein own</p>
                        </div>
                        <div className="item">
                            <i className="fal fa-bow-arrow"></i>
                            <h1>WEB DEVELOPMENT</h1>
                            <p>A she'd them bring void moving  third she'd kind fill</p>
                        </div>
                        <div className="item">
                            <i className="fal fa-mobile-android"></i>
                            <h1>APP / MOBILE</h1>
                            <p>Dominion man second spirit he, earth they're creeping</p>
                        </div>
                        <div className="item">
                            <i className="fal fa-gamepad-alt"></i>
                            <h1>GAME DESIGN</h1>
                            <p>Morning his saying moveth it  multiply appear life be</p>
                        </div>
                        <div className="item">
                            <i className="fal fa-plane"></i>
                            <h1>SEO / MARKETING</h1>
                            <p>Give won't after land fill creeping  meat you, may</p>
                        </div>
                        <div className="item">
                            <i className="fal fa-star"></i>
                            <h1>PHOTOGRAPHY</h1>
                            <p>Creepeth one seas cattle grass  give moving saw give</p>
                        </div>
                        <div className="item">
                            <i className="fal fa-magic"></i>
                            <h1>GRAPHIC DESIGN</h1>
                            <p>Open, great whales air rule for,  fourth life whales</p>
                        </div>
                        <div className="item">
                            <i className="fal fa-paint-brush"></i>
                            <h1>ILLUSTRATIONS</h1>
                            <p>Whales likeness hath, man kind  for them air two won't</p>
                        </div>
                    </div>                  
                </div>
                <div className="block-7">
                    <AwesomeSlider className="slider">
                        <div className="slide">
                            <div className="text">“ Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizeable first projects and am looking forward to start the next one asap.”</div>
                            <div className="author">Michael Hopkins</div>
                        </div>
                        <div className="slide">
                            <div className="text">“ Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizeable first projects and am looking forward to start the next one asap.”</div>
                            <div className="author">Michael Hopkins</div>
                        </div>
                        <div className="slide">
                            <div className="text">“ Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizeable first projects and am looking forward to start the next one asap.”</div>
                            <div className="author">Michael Hopkins</div>
                        </div>
                        <div className="slide">
                            <div className="text">“ Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizeable first projects and am looking forward to start the next one asap.”</div>
                            <div className="author">Michael Hopkins</div>
                        </div>
                        <div className="slide">
                            <div className="text">“ Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizeable first projects and am looking forward to start the next one asap.”</div>
                            <div className="author">Michael Hopkins</div>
                        </div>
                    </AwesomeSlider>
                </div>
                <div className="block-8">
                    <div className="img-container">
                        <img src="./images/1.png" alt="" />
                        <img src="./images/2.png" alt="" />
                        <img src="./images/3.png" alt="" />
                        <img src="./images/4.png" alt="" />
                        <img src="./images/5.png" alt="" />
                    </div>
                </div>
                <div className="block-9">
                    <div className="content">
                        <h1>Need a Project?</h1>
                        <p>Let us know what you're looking for in an agency. We'll take a look and see if this could be the start of something beautiful</p>
                        <form>
                            <input type="text" name="name" placeholder="Your Name" />
                            <input type="text" name="email" placeholder="Your Email" />
                            <input type="text" name="title" placeholder="Your Title" />
                            <textarea name="comment" rows="12" placeholder="Your Comment"></textarea>
                        </form>
                        <div className="submit" onClick={this.send}>SEND MESSAGE</div>
                    </div>
                </div>
                <div className="arrow" onClick={this.up}>
                    <i className="far fa-arrow-up"></i>
                </div>
            </React.Fragment>
        )
    }
}

class Works extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            height: document.body.offsetWidth / 4
        }
        this.images = [
            'url("./images/snake.png")',
            'url("./images/tictactoe.png")',
            'url("./images/smoke.png")',
            'url("./images/words.png")',
            'url("./images/wooder.png")',
            'url("./images/creatives.png")',
            'url("./images/chess.png")',
            'url("./images/flame.png")'
        ]
        this.change = this.change.bind(this)
        window.onresize = this.change
    }
    change() {
        this.setState({
            height: document.getElementsByClassName('work')[0].offsetWidth
        })
    }
    redirect(e) {
        if (e.target.style.backgroundImage.split('/')[2].split('.')[0] === "chess"){
            window.location.href = 'https://chessnode.herokuapp.com/'
        }
        else{
            window.location.href = 'https://6hell66.github.io/portfolio.git.io/public/projects/' + e.target.style.backgroundImage.split('/')[2].split('.')[0] + '/index.html'
        }
        
    }
    render() {
        return (
            <div className="block-5">
                <div className="work" onClick = {this.redirect} style={{ height: this.state.height, backgroundImage: this.images[0] }}></div>
                <div className="work" onClick = {this.redirect} style={{ height: this.state.height, backgroundImage: this.images[1] }}></div>
                <div className="work" onClick = {this.redirect} style={{ height: this.state.height, backgroundImage: this.images[2] }}></div>
                <div className="work" onClick = {this.redirect} style={{ height: this.state.height, backgroundImage: this.images[3] }}></div>
                <div className="work" onClick = {this.redirect} style={{ height: this.state.height, backgroundImage: this.images[4] }}></div>
                <div className="work" onClick = {this.redirect} style={{ height: this.state.height, backgroundImage: this.images[5] }}></div>
                <div className="work" onClick = {this.redirect} style={{ height: this.state.height, backgroundImage: this.images[6] }}></div>
                <div className="work" onClick = {this.redirect} style={{ height: this.state.height, backgroundImage: this.images[7] }}></div>               
            </div>
        )
    }
}

export default Main;
