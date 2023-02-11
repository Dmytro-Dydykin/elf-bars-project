import {Fragment} from "react";
import DataTable from 'react-data-table-component'
import React, {useState, useEffect} from "react";
import classes from "./Store.module.css";
import MealItemForm from "./store/MeaiItemForm";
import AddProduct from "./AddProduct/AddProduct";
import MealItem from "./store/MealItem";


const customStyles = {

    headRow: {

        style: {
            minHeight: '52px',
            borderBottomWidth: '1.5px',
            borderBottomColor: 'black',
            borderBottomStyle: 'solid',
        },
        denseStyle: {
            minHeight: '32px',

        },

    },
    headCells: {
        style: {
            fontSize: '18px',
            paddingLeft: '16px',
            paddingRight: '16px',
            borderRightWidth: '1px',
            borderRightColor: 'black',
            borderRightStyle: 'solid',
            borderTopWidth: '1px',
            borderTopColor: 'black',
            borderTopStyle: 'solid',
            borderLeftWidth: '1px',
            borderLeftColor: 'black',
            borderLeftStyle: 'solid',

        },

        draggingStyle: {

            cursor: 'move',

        },
    },
    cells: {
        style: {

            paddingLeft: '15px', // override the cell padding for data cells
            paddingRight: '8px',
            borderRightWidth: '1px',
            borderRightColor: 'black',
            borderRightStyle: 'solid',
            borderLeftWidth: '1px',
            borderLeftColor: 'black',
            borderLeftStyle: 'solid',
            borderBottomWidth: '1px',
            borderBottomColor: 'black',
            borderBottomStyle: 'solid',

        },
    },
    rows: {

        style: {
            fontSize: '15px',
            fontWeight: 400,
            minHeight: '38px',

            '&:not(:last-of-type)': {
                borderBottomStyle: 'solid',
                borderBottomWidth: '1px',
                borderBottomColor: 'black',

            },

        },
    }
};

const Store = (props) => {


    const [productAddingShown, setProductAddingShown] = useState(false)
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(false);
    const [httpError, setHttpError] = useState();
    const [modalActive, setModalActive] = useState(false)


    async function fetchTableData() {
        setLoading(true)
        const URL = "https://elf.denisov.link/api/products"
        const response = await fetch(URL)

        const users = await response.json()
        setClients(users)
        setLoading(false)
    }

    useEffect(() => {

        fetchTableData().catch(error => {
            setLoading(false);
            setHttpError(error.message)
        });
    }, [])

    if (loading) {
        return (
            <section className={classes.ProductsLoading}>
                <p>Loading...</p>
            </section>)
    }

    if (httpError) {
        return (
            <section className={classes.ProductsError}>
                <p>{httpError}</p>
            </section>)
    }

    const showProductHandler = () => {
        setProductAddingShown(true)
    }
    const hideProductHandler = async () => {
        setProductAddingShown(false)
        await fetchTableData()
    }

    const deleteItemHandler = async (productId) => {


        console.log(productId)

        await fetch('https://elf.denisov.link/api/products', {
            method: 'DELETE',
            body: JSON.stringify({
                id: productId
            })

        }).then(fetchTableData)

    }

    const modalActiveClasses = modalActive ? `${classes.modal} + ${classes.active}` : `${classes.modal}`;


    const columns = [
        {
            name: 'Flavour',
            selector: (row) => <MealItem flavour={row.flavour}>{row.flavour}</MealItem>
        },
        {
            name: 'Puffs',
            selector: (row) => row.puffs
        },
        {
            name: 'Quantity',
            selector: (row) => row.quantity
        },
        {
            name: 'Fulfilment Price',
            selector: (row) => row.fulfilmentPrice
        },
        {
            name: '',
            selector: (row) =>
                <Fragment>
                    <div className={classes.main}>
                        <MealItemForm/>
                        <div className={classes.menu}>
                            <div className={classes.nav}>
                                <div className={classes.burger_btn} onClick={() => setModalActive(!modalActive)}>
                                    <span/>
                                </div>
                                <div className={modalActiveClasses} onClick={() => setModalActive(false)}>
                                    <button className={classes.delete} onClick={() => deleteItemHandler(row.id)}>
                                        <span className="material-icons">{'delete'}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
        },
    ]


    return (
        <Fragment>
            <div className={classes.store}>
                <div className={classes.about}>
                    <h2>Products</h2>
                    <button className={classes.btn} onClick={showProductHandler}>Add Product</button>
                </div>
                {productAddingShown && <AddProduct onCancel={hideProductHandler}/>}
                {!productAddingShown &&
                    <DataTable
                        columns={columns}
                        data={clients}
                        progressPending={loading}
                        customStyles={customStyles}
                    />}
            </div>
        </Fragment>
    )
}

export default Store