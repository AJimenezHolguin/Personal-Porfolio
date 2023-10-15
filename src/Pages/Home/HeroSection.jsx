export default function HeroSection(){
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Anderson</p>
             <h1 className="hero--section--title">
                <span className="hero--section--title--color">Front-end</span>
                {" "}
                <br/>
                Developer
                </h1> 
                <p className="hero--section-description">
                    <br/>
                    Every day is an opportunity to learn, 
                    <br/>
                    grow and evolve in this vast world of programming and development.
                    </p>  
            </div> 
            {/* <button className="btn btn-primary">Get In Touch</button>  */}
        </div>
        <div className="hero--section--img">
            <img src="./img/sinfondoFoto.png" alt="Hero section"/>
        </div>
      </section>  
    )
}