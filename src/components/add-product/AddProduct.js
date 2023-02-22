import React, {useRef} from 'react';
import Form from "../UI/form/Form";

const AddProduct = (props) => {

    const flavourInputRef = useRef();
    const puffsInputRef = useRef();
    const fulfilmentPriceInputRef = useRef();
    const quantityInputRef = useRef();

    const name = 'product'
    const productsData = [{ name: 'Flavour', type: 'text', nameInputRef: flavourInputRef},
        { name: 'Puffs', type: 'number', nameInputRef: puffsInputRef},
        { name: 'Fulfilment Price', type: 'number', nameInputRef: fulfilmentPriceInputRef},
        { name: 'Quantity', type: 'number', nameInputRef: quantityInputRef}
    ]

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredFlavour = flavourInputRef.current.value;
        const enteredPuffs = puffsInputRef.current.value;
        const enteredFulfilmentPrice = fulfilmentPriceInputRef.current.value;
        const enteredQuantity = quantityInputRef.current.value;

        submitOrderHandler({
            flavour: enteredFlavour,
            puffs: +enteredPuffs,
            fulfilmentPrice: +enteredFulfilmentPrice,
            quantity: +enteredQuantity,
        })

    };

    const submitOrderHandler = async (userData) => {
        console.log(userData)
        await fetch('https://elf.denisov.link/api/products', {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify({
                flavour: userData.flavour,
                puffs: userData.puffs,
                quantity: userData.quantity,
                fulfilmentPrice: userData.fulfilmentPrice,
            })
        }).then(props.fetch())

    }


    return (
        <div>
            <Form confirmHandler={confirmHandler} onCancel={props.onCancel} allData={productsData} name={name}/>
        </div>
    );
};

export default AddProduct;