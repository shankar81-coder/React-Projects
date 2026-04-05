import React from "react"
import  {QRCode}from "react-qr-code";


export default function QRCodeGenerator()
{
    const[qrCode,setQrCode] = React.useState('');
    const[input,setInput] = React.useState('')

    function handleGen()
    {
        setQrCode(input)
        setInput('')
    }
    return(
        <>
        <div>
            <h1>QR code generator</h1>
            <div>
                <input 
                onChange={(e) => setInput(e.target.value)}
                type="text"
                name="qr-code" 
                placeholder="Enter your value here"
                value={input}
                />
                <button 
                disabled ={input && input.trim() !== "" ? false : true}
                onClick={handleGen}>Generate</button>
            </div>
            <div>
                <QRCode
                value={qrCode}
                />
            </div>
        </div>
        </>
    )
}