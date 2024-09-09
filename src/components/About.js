import React, {useState} from 'react';


const About = () => {
    const[toggle,setToggle]=useState({
        color: 'black', 
        backgroundColor: 'white'
    });
    const[text,setText]=useState('Enable Dark Mode');
    const handleToggle=()=>{
        if(toggle.color==='black'){
            setToggle({
                color: 'white',
                backgroundColor: 'black'
            })
            setText("Enable Light Mode");
        }
        else{
            setToggle({
                color: 'black',
                backgroundColor: 'white'
            })
            setText("Enable Dark Mode");
        }
    }
    

    return (
        <div className="accordion" id="accordionExample">
            <h1 className='my-3 mx-2'>About Us</h1>
            <div className="accordion-item" style={toggle}>
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" style={toggle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={toggle}>
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style={toggle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={toggle}>
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style={toggle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-primary my-2 mt-3" onClick={handleToggle}>{text}</button>
        </div>
    );
}


export default About;