// import React, { useState } from 'react'
// import axios from 'axios'

// const Comunicate = () => {

//     const [state, setstate] = useState({
//         email:"andres.palma@udea.edu.co",
//         asunto:"Confirmacion de la compra desde Mi Tienda", 
//         mensaje:"Acabas de comprar en mi tienda. Esperamos que vuelvas pronto"
//     })
//     const {email, asunto, mensaje } = state
//     const enviarEmail = async(e) => {
//         e.preventDefault()
//         await axios.post ("/api/form",{
//             email,
//             asunto,
//             mensaje
//         })

//     }


//     return (
//         <div>
//             <button onClick ={(e)=> enviarEmail(e)}> Comunicate con el vendedor </button>
            
//         </div>
//     )
// }

// export default Comunicate
