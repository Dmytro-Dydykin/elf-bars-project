import React,{useRef} from 'react';
import Form from "../UI/Form/Form";



const AddClient = (props) => {


    const nameInputRef = useRef();
    const phoneInputRef = useRef();

    const name = 'client'
    const clientsData = [{ name: 'Name', type: 'text', nameInputRef: nameInputRef},
        { name: 'Phone', type: 'text', nameInputRef: phoneInputRef}
    ]

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current?.value;
        const enteredPhone = phoneInputRef.current?.value;


        submitOrderHandler({
            name: enteredName,
            phone: enteredPhone,
        })

    };


    const submitOrderHandler = async (userData) => {
        console.log(userData)
        await fetch('https://elf.denisov.link/api/clients', {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify({
                name: userData.name,
                phone: userData.phone
            })
        }).then(props.fetch)
    }


    return (
        <div>
            <Form confirmHandler={confirmHandler} onCancel={props.onCancel} allData={clientsData} name={name}/>
        </div>
    );
};

export default AddClient;