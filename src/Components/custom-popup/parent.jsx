import { useState } from "react"
import Modal from './App'


export default function ModalTest()
{
    const[showModal,setShowModal] = useState(false)

    function handleToggle()
    {
        setShowModal(!showModal)
    }

    function onClose()
    {
        setShowModal(false)
    }
    return(
        <div>
            <button onClick={handleToggle}>Open Model Popup</button>
            {
              showModal && <Modal 
              body={<div>Customised Body</div>}
              onClose={onClose}
              />
            }
        </div>
    )
}
