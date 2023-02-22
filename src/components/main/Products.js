import {Fragment} from "react";
import DataTable from 'react-data-table-component'
import React, {useState, useEffect} from "react";
import classes from "./Products.module.css";
import ProductItemForm from "../products/ProductItemForm";
import AddProduct from "../add-product/AddProduct";


const customStyles = {

    headRow: {

        style: {
            zIndex: 1,

            background: "rgba(144,210,252,0.32)",
            position: 'relative',
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
            position: 'relative',
            zIndex: 1,

            fontSize: '18px',
            paddingLeft: '16px',
            paddingRight: '16px',
            borderRightWidth: '0.8px',
            borderRightColor: 'black',
            borderRightStyle: 'solid',

            borderLeftWidth: '1px',
            borderLeftColor: 'black',
            borderLeftStyle: 'solid',
            '@media screen and (max-width: 1388px)': {
                fontSize: '15px',
                paddingLeft: '8px',
                paddingRight: '3px',
                '&:first-child': {
                    minWidth: '250px',
                    maxWidth: "250px",
                },
                '&:nth-child(2n)': {
                    minWidth: '180px',
                    maxWidth: "180px",
                },
                '&:nth-child(3n)': {
                    minWidth: '180px',
                    maxWidth: "180px",
                },
                '&:nth-child(4n)': {
                    minWidth: '180px',
                    maxWidth: "180px",
                },
            },
            '@media screen and (max-width: 1100px)': {
                fontSize: '15px',
                paddingLeft: '8px',
                paddingRight: '3px',
                '&:first-child': {
                    minWidth: '250px',
                    maxWidth: "250px",
                },
                '&:nth-child(2n)': {
                    minWidth: '160px',
                    maxWidth: "160px",
                },
                '&:nth-child(3n)': {
                    minWidth: '160px',
                    maxWidth: "160px",
                },
                '&:nth-child(4n)': {
                    minWidth: '160px',
                    maxWidth: "160px",
                },
            },
            '@media screen and (max-width: 1025px)': {
                fontSize: '13px',
                paddingLeft: '8px',
                paddingRight: '3px',
                '&:first-child': {
                    minWidth: '250px',
                    maxWidth: "250px",
                },
                '&:nth-child(2n)': {
                    minWidth: '120px',
                    maxWidth: "120px",
                },
                '&:nth-child(3n)': {
                    minWidth: '120px',
                    maxWidth: "120px",
                },
                '&:nth-child(4n)': {
                    minWidth: '120px',
                    maxWidth: "120px",
                },
            },
            '@media screen and (max-width: 925px)': {
                fontSize: '13px',
                paddingLeft: '8px',
                paddingRight: '3px',
                '&:first-child': {
                    minWidth: '180px',
                    maxWidth: "180px",
                },
                '&:nth-child(2n)': {
                    minWidth: '85px',
                    maxWidth: "85px",
                },
                '&:nth-child(3n)': {
                    minWidth: '85px',
                    maxWidth: "85px",
                },
                '&:nth-child(4n)': {
                    minWidth: '85px',
                    maxWidth: "85px",
                },
            },
            '@media screen and (max-width: 768px)': {
                fontSize: '13px',
                paddingLeft: '8px',
                paddingRight: '3px',
                '&:first-child': {
                    minWidth: '180px',
                    maxWidth: "180px",
                },
                '&:nth-child(2n)': {
                    minWidth: '50px',
                    maxWidth: "50px",
                },
                '&:nth-child(3n)': {
                    minWidth: '50px',
                    maxWidth: "50px",
                },
                '&:nth-child(4n)': {
                    minWidth: '50px',
                    maxWidth: "50px",
                },
            }
        },

        draggingStyle: {

            cursor: 'move',

        },
    },
    cells: {
        style: {
            position: 'relative',
            zIndex: 1,

            background: "rgba(144,210,252,0.32)",
            paddingLeft: '15px', // override the cell padding for data cells
            paddingRight: '8px',
            borderRightWidth: '0.8px',
            borderRightColor: 'black',
            borderRightStyle: 'solid',
            borderLeftWidth: '1px',
            borderLeftColor: 'black',
            borderLeftStyle: 'solid',
            borderBottomWidth: '1px',
            borderBottomColor: 'black',
            borderBottomStyle: 'solid',
            '@media screen and (max-width: 1388px)': {
                fontSize: '15px',
                paddingLeft: '8px',
                paddingRight: '3px',
                '&:first-child': {
                    minWidth: '250px',
                    maxWidth: "250px",
                },
                '&:nth-child(2n)': {
                    minWidth: '180px',
                    maxWidth: "180px",
                },
                '&:nth-child(3n)': {
                    minWidth: '180px',
                    maxWidth: "180px",
                },
                '&:nth-child(4n)': {
                    minWidth: '180px',
                    maxWidth: "180px",
                },
            },
            '@media screen and (max-width: 1100px)': {
                fontSize: '15px',
                paddingLeft: '8px',
                paddingRight: '3px',
                '&:first-child': {
                    minWidth: '250px',
                    maxWidth: "250px",
                },
                '&:nth-child(2n)': {
                    minWidth: '160px',
                    maxWidth: "160px",
                },
                '&:nth-child(3n)': {
                    minWidth: '160px',
                    maxWidth: "160px",
                },
                '&:nth-child(4n)': {
                    minWidth: '160px',
                    maxWidth: "160px",
                },
            },
            '@media screen and (max-width: 1025px)': {
                fontSize: '13px',
                paddingLeft: '8px',
                paddingRight: '3px',
                '&:first-child': {
                    minWidth: '250px',
                    maxWidth: "250px",
                },
                '&:nth-child(2n)': {
                    minWidth: '120px',
                    maxWidth: "120px",
                },
                '&:nth-child(3n)': {
                    minWidth: '120px',
                    maxWidth: "120px",
                },
                '&:nth-child(4n)': {
                    minWidth: '120px',
                    maxWidth: "120px",
                },
            },
            '@media screen and (max-width: 925px)': {
                fontSize: '13px',
                paddingLeft: '8px',
                paddingRight: '3px',
                '&:first-child': {
                    minWidth: '180px',
                    maxWidth: "180px",
                },
                '&:nth-child(2n)': {
                    minWidth: '85px',
                    maxWidth: "85px",
                },
                '&:nth-child(3n)': {
                    minWidth: '85px',
                    maxWidth: "85px",
                },
                '&:nth-child(4n)': {
                    minWidth: '85px',
                    maxWidth: "85px",
                },
            },
            '@media screen and (max-width: 768px)': {
                fontSize: '13px',
                paddingLeft: '8px',
                paddingRight: '3px',
                '&:first-child': {
                    minWidth: '180px',
                    maxWidth: "180px",
                },
                '&:nth-child(2n)': {
                    minWidth: '50px',
                    maxWidth: "50px",
                },
                '&:nth-child(3n)': {
                    minWidth: '50px',
                    maxWidth: "50px",
                },
                '&:nth-child(4n)': {
                    minWidth: '50px',
                    maxWidth: "50px",
                },
            }
        },

    },
    rows: {

        style: {
            position: 'relative',
            zIndex: 1,
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

const Products = (props) => {

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
            selector: (row) => row.flavour
        },
        {
            name: 'Puffs',
            selector: (row) => row.puffs
        },
        {
            name: 'Total Quantity',
            selector: (row) => row.quantity
        },
        {
            name: 'Fulfilment Price',
            selector: (row) => row.fulfilmentPrice
        },
        {
            name: 'Quantity/SellingPrice',
            selector: (row) =>
                <Fragment>
                    <div className={classes.main}>
                        <ProductItemForm productId={row.id} totalQuantity={row.quantity}/>
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
        <div className='wrapper'>
            <div className='data'>
                <h1>Products Data</h1>
                <button onClick={showProductHandler}>Add Product</button>
            </div>
            <div className={productAddingShown ? 'blur' : 'original'}>
                <AddProduct onCancel={hideProductHandler} fetch={fetchTableData}/>
            </div>
            <DataTable columns={columns} data={clients} progressPending={loading} customStyles={customStyles}/>
        </div>
    )
}

export default Products