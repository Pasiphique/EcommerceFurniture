
export default function Contact(){
    return(
        <div>
            <div>
                <h1>Get in Touch with us</h1>
                <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                 </div>
            <div className="contact-grid">
                <div className="info">
                    <div>
                        <span>Address</span>
                        <span>993 8th Avenue, New York, United States</span>
                    </div>
                    <div>
                        <span>Phone</span>
                        <span>Mobile: 412-442-9999</span>
                        <span>Hotline: 412-339-9988</span>
                    </div>
                    <div>
                        <span>Working Time</span>
                        <span>Monday-Friday: 9:00am - 10pm</span>
                        <span>Saturday-Sunday:9:00am - 9pm</span>
                    </div>
                </div>
                <div className="contact-form">
                    <form action="">
                        
                        <label htmlFor="">Your Name
                            <input type="text" placeholder="Billy Joe"/>
                        </label>

                        <label htmlFor="">Email address
                            <input type="text" placeholder="billyJoe@wow.com" />
                        </label>

                        <label htmlFor="">Subject
                            <input type="text" placeholder="This is optional"/>
                        </label>
                        
                        <label htmlFor="">Message
                            <input type="text" placeholder="Hi, i would like to ask about" />
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}