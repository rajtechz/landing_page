import React from 'react'
import "./style.css"
import p2 from "../assets/p2.png"
import p5 from "../assets/p5.png"
export default function Home() {
    return (
        <>

            <div className='navbar'>

                <ul className='navitem'>
                    <li className='home' >Home</li>
                    <li className='about' >About</li>
                    <li className='service' >Service</li>
                    <li className='contact' >Contect</li>
                </ul>

            </div>
            <div className='main' style={{
                backgroundImage: `url(${p2})`, backgroundSize: "cover",
                backgroundPosition: "center",
            }}>



                <div className='first_section'>
                    <text style={{ fontSize: "80px", fontWeight: "bold", color: "red" }}>  Making Your Move Quick  & Easy</text>
                    <p style={{ color: "#fff", fontSize: "24px", marginTop: "20px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, odio ipsa. Perspiciatis, et cum recusandae illum sapiente ex optio suscipit provident temporibus perferendis delectus doloremque facilis odio dolores ipsa harum laboriosam eligendi qui accusamus? Fuga quos eum esse quis at dolorem ipsa illum minima sed, repellat explicabo ea consectetur, quibusdam quidem saepe necessitatibus iure delectus! Suscipit, rem ducimus error velit in illo similique quaerat placeat deleniti consequuntur odio, doloribus molestias quis sunt asperiores deserunt perspiciatis, distinctio architecto? Numquam praesentium saepe dolores voluptatum ratione. Laborum quidem aliquam, voluptatem amet ratione cumque molestias expedita, quae dolorem, quaerat pariatur. Explicabo, error veritatis! Rerum.</p>
                    <div className='order_btn'>

                        <button className='btn'> Order </button>
                    </div>

                </div>I

                <div className='second_section'>

                    {/* <h1> hello</h1> */}
                </div>







            </div>


        </>
    )
}
