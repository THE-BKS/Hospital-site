import "./styles.css"
import { useEffect, useState } from "react"

function Appointment() {
    const [username, setUsername] = useState('');
    const [number, setNumber] = useState('');
    const [date, setDate] = useState('');
    const [timing, setTiming] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);

    const checkValidation = async (e) => {
        e.preventDefault();
        if(username == '' || number == '' || date == '' || timing == ''){
            setError(true);
        }else{
            const data = { username, number, date, timing, message};
            console.log(data);
            await fetch("/userList", {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)})
                .then(response => response.json())
                .then(result => {
                    console.log(result);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    const handleChange = (e, state) => {
        switch(state){
            case 'username': setUsername(e.target.value); break;
            case 'number': setNumber(e.target.value); break;
            case 'date': setDate(e.target.value); break;
            case 'timing': setTiming(e.target.value); break;
            case 'message': setMessage(e.target.value); break;
        }
        setError(false);
    }

    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="row justify-content-center">
                    <h1 className="heading"><span>'</span> make an appointment <span>'</span></h1>
                    <div className="contact-form" data-aos="flip-down">
                        <img src="/LOGO.jpg" />
                        <form>
                            <div className="inputBox">
                                <input type="text" placeholder="full name" value={username} onChange={(e)=>handleChange(e, 'username')}/>
                                <input type="number" maxlength="10" placeholder="phone" value={number} onChange={(e)=>handleChange(e, 'number')}/>
                            </div>
                            <div className="inputBox">
                                <input type="date" min={new Date().toLocaleDateString('en-ca')} value={date} onChange={(e)=>handleChange(e, 'date')} />
                                <select onChange={(e)=>handleChange(e, 'timing')}>
                                    <option value="" disabled selected>make an appointment</option>
                                    <option value="09:00 AM - 11:00 AM">09:00 AM - 11:00 AM</option>
                                    <option value="11:00 AM - 03:00 PM">11:00 AM - 03:00 PM</option>
                                    <option value="03:00 PM - 06:00 PM">03:00 PM - 06:00 PM</option>
                                    <option value="06:00 PM - 09:00 PM">06:00 PM - 09:00 PM</option>
                                </select>
                            </div>
                            <textarea placeholder="message ( optional )" value={message} onChange={(e)=>handleChange(e, 'message')}></textarea>
                            {error ? <span>Please fill out the following fields</span> : ''}
                            <input type="submit" value="Make appointment" className="button" onClick={checkValidation}/>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Appointment
