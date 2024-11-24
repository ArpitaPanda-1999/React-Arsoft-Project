import { useEffect, useState } from "react";

const Contact = () => {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[phoneno, setPhoneno] = useState('');
    const[location, setLocation] = useState('');
    const[error, setError] = useState({});
    const[submittedData, setSubmittedData] = useState(null);

    const validationForm = () => {
        let isValid = true;
        const newErr = {};

        if(!name.trim()){
            newErr.name = "Name must required";
            isValid = false;
        }

        if(!email.trim()){
            newErr.email = "Email must required";
            isValid = false;
        }

        if(!phoneno.trim()){
            newErr.phoneno = "Phone no. must required";
            isValid = false;
        }
        else if(phoneno.length > 11){
            newErr.phoneno = "Phone no. must be 10 digits";
            isValid = false;
        }

        if(!location.trim()){
            newErr.location = "location must required";
            isValid = false;
        }

        setError(newErr);
        return isValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(validationForm()){
            const submittedData = {name, email, phoneno, location};
            setSubmittedData(submittedData);
            console.log("Form Submitted:", submittedData);
        }
    }

    return(
        <div className="container row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 border rounded-2 p-5">
                <h1 className="pb-4 pt-2">Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group p-3">
                        <label>Name<sup className="text-danger">*</sup></label>
                        <input 
                            type="text" 
                            value={name}
                            className="form-control" 
                            placeholder="Enter Name"
                            onChange={(e) => setName(e.target.value)}      
                        />
                        {error.name && <span className="text-danger">{error.name}</span>}
                    </div>
                    <div className="form-group p-3">
                        <label>Email<sup className="text-danger">*</sup></label>
                        <input 
                            type="email" 
                            value={email}
                            className="form-control" 
                            placeholder="Enter Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {error.email && <span className="text-danger">{error.email}</span>}
                    </div>
                    <div className="form-group p-3">
                        <label>Phone no.<sup className="text-danger">*</sup></label>
                        <input 
                            type="number" 
                            value={phoneno}
                            className="form-control" 
                            placeholder="Enter Phone no."
                            onChange={(e) => setPhoneno(e.target.value)}
                        />
                        {error.phoneno && <span className="text-danger">{error.phoneno}</span>}
                    </div>
                    <div className="form-group p-3">
                        <label>Location<sup className="text-danger">*</sup></label>
                        <input 
                            type="text" 
                            value={location}
                            className="form-control" 
                            placeholder="Enter Location"
                            onChange={(e) => setLocation(e.target.value)}
                        />
                        {error.location && <span className="text-danger">{error.location}</span>}
                    </div>
                    <button type="submit" className="btn btn-primary ms-3 mt-2">Submit</button>
                </form>
            </div>
            <div className="col-lg-4 border rounded-2 p-5">
                {submittedData && (
                    <div>
                        <h3>Submitted Data:</h3>
                        <p>Name : {submittedData.name}</p>
                        <p>Email : {submittedData.email}</p>
                        <p>Phone no. : {submittedData.phoneno}</p>
                        <p>Location : {submittedData.location}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Contact;