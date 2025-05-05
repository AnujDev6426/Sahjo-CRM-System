import React, {useState} from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState({});
    const handleLogin = (e) => {
        e.preventDefault();
        
        const errors = {};
        
        if (email === '') {
            errors.email = 'Please enter an email!';
        }
        if (pass === '') {
            errors.pass = 'Please enter a password!';
        }
        
        if (Object.keys(errors).length > 0) {
            setError(errors);
        } else {
            console.log('Logged in with', { email, pass });
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white" style={backgroundStyle}>
            <div className="card p-4 rounded-4 shadow col-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.14)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)', color:'white' }}>
                <h2 className="text-center mb-4">Welcome Back</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control bg-transparent text-white" id="email" placeholder="you@example.com" onChange={(e) => setEmail(e.target.value)} required />
                        <span style={{color :'red'}}>{error.email}</span>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pass" className="form-label">Password</label>
                        <input type="password" className="form-control bg-transparent text-white" id="pass" placeholder="••••••••" onChange={(e) => setPass(e.target.value)} required />
                        <span style={{color :'red'}}>{error.pass}</span>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary" onClick={handleLogin}>Log In</button>
                    </div>
                </form>              
            </div>
        </div>
    );
}

const backgroundStyle = {
    backgroundImage: 'url("/assets/loginBG.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
};

export default Login;
