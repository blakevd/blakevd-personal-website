import React, { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        window.location.href = `mailto:blakeyvd@gmail.com?subject=${name} from ${email}&body=${message}`;
      };

    return (
        <div className="page-overlay contact">
            <h1>Contact Me!</h1>
            <div className="contact-form">
                <form>
                    <label>
                        Name<br/>
                        <input type="text" id="name" name="name" required
                        value={name} 
                        onChange={(e) => setName(e.target.value)}/>
                    </label><br/>
                    <label>
                        Email<br/>
                        <input type="email" id="email" name="email" required
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}/>
                    </label><br/>
                    <label>
                        Message<br/>
                        <textarea id="message" name="message" required
                        value={message}
                        onChange={(e) => setMessage(e.target.value) } />
                    </label><br/>
                    
                    <a href={`mailto:blakeyvd@gmail.com?subject=${name} from ${email}&body=${message}`} target="_blank">Send</a>
                </form>
		    </div>
        </div>
    )
}

export default Contact;