import React from 'react'

const Loading = () => {
    return (
        <div className = "alert alert-primary" role = "alert">
            <h1> Cargando... </h1>
            <img className = "imageLoading" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/298/shopping-cart_1f6d2.png" alt="Shopping logo" width="480px" height="480px"/>
        </div>
    )
}

export default Loading
