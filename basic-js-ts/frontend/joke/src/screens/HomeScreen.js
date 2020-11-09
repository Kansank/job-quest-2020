import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function HomeScreen(props) {

    const [Jokes, setJoke] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [Fname, setFname] = useState('John');
    const [Lname, setLname] = useState('Doe');
    const [Number, setNumber] = useState('');
    const [status, setStatus] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        setFname(Fname);
        setLname(Lname);
        setNumber(Number);
        setStatus(true);
     
      };

      
    useEffect(() => {
        
        const fecthData = async () => {
          try {
            setLoading(true);
                if(Number !== ''){
                    const { data } = await axios.get(`http://api.icndb.com/jokes/random/${Number}?firstName=${Fname}&lastName=${Lname}`);
                    setStatus(false);
                    setLoading(false);
                    setJoke(data.value);

                }else{
                    const { data } = await axios.get(`http://api.icndb.com/jokes/?firstName=${Fname}&lastName=${Lname}`);
                     setStatus(false);
                     setLoading(false);

                    setJoke(data.value);
                }
                
          } catch (err) {
            setError(err.message);
            
          }
        };
        fecthData();
      }, [status]);
    return (
      <div className="container">
        {loading ? (
          loading
        ) : error ? (
          <div>{error}</div>
        ) : (
          <>
          <div className="form">
          <form onSubmit={submitHandler}>
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
                onChange={(e) => setFname(e.target.value)}
              />
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
                onChange={(e) => setLname(e.target.value)}
              />

                <label htmlFor="number">Number of joke</label>
              <input
                type="number"
                id="number"
                name="number"
                placeholder="Number of joke"
                onChange={(e) => setNumber(e.target.value)}
              />
             
              <input type="submit" defaultValue="Submit" />
            </form>
          </div>
           

            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Joke</th>
                  <th>Categories</th>
                </tr>
              </thead>
              <tbody>
                {Jokes.map((Joke) => (
                  <tr key={Joke.id}>
                    <td>{Joke.id}</td>
                    <td>{Joke.joke}</td>
                    <td><ul>{Joke.categories.map((categorie) => ( 
                    
                        <li key={categorie}>{categorie}</li>
                    ))       
                    
                    }</ul></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    );
}
