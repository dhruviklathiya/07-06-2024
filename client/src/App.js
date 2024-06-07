import React, { useState } from 'react';
import axios from 'axios'

// const App = () => {
// const [firstName, setFirstName] = useState('');
// const [lastName, setLastName] = useState('');

//   const api_pass = async () => {
//     const data = {
//       first_name: firstName,
//       last_name: lastName
//     };

//     const response = await axios.post("http://localhost:8080/v1/user/create", data)
//     console.log("🚀 ~ constapi_pass= ~ response:", response)

//     // try {
//     //   const response = await fetch("http://localhost:8080/v1/user/create", {
//     //     method: "POST",
//     //     headers: {
//     //       "Content-Type": "application/json",
//     //     },
//     //     body: JSON.stringify(data)
//     //   });
//     //   console.log(data);
//     //   console.log(response);
//     // } catch (error) {
//     //   console.log("🚀 ~ api_pass ~ error:", error);
//     // }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="FIRSTNAME"
//         value={firstName}
//         onChange={(e) => setFirstName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="LASTNAME"
//         value={lastName}
//         onChange={(e) => setLastName(e.target.value)}
//       />
//       <button onClick={api_pass}>Click to hit API</button>
//     </div>
//   );
// };

const App = () => {


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [token_from_input, settoken_from_input] = useState('');
  const [decoded_obj, setdecoded_obj] = useState({});

  const api_pass = async () => {
    const data = {
      first_name: firstName,
      last_name: lastName
    };
    const response = await axios.post("http://localhost:8080/create-jwt", data)
    console.log("🚀 ~ constapi_pass= ~ response:", response)
  }
  const api_pass_decode = async () => {
    const data = {
      tokennnn: token_from_input
    }
    const response = await axios.post("http://localhost:8080/decode-jwt", data)
    console.log("🚀 ~ constapi_pass= ~ response:", response)
    setdecoded_obj(response.data.DATA)
  }
  return (
    <>
      <input
        type="text"
        placeholder="FIRSTNAME"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="LASTNAME"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button onClick={api_pass}>Click to GENERATE TOKEN</button>
      <h1>Hello</h1>
      <input
        type="text"
        placeholder="TOKEN"
        value={token_from_input}
        onChange={(e) => settoken_from_input(e.target.value)}
      />
      <button onClick={api_pass_decode}>Click to DECODE DATA</button>
      <h1>{decoded_obj.first_name}</h1>
      <h1>{decoded_obj.last_name}</h1>
    </>
  )
}

export default App
