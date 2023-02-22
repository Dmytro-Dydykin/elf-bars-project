import React, {useState, useEffect, Fragment} from "react";
import classes from "./Cart.module.css";
import DataTable from "react-data-table-component";
import CartForm from "../UI/form/Cart-form";

const customStyles = {

    headRow: {

        style: {
            zIndex: 1,
            background: 'rgba(222,222,222,0.39)',
            position: 'relative',
            minHeight: '52px',

        }
    },
    headCells: {
        style: {
            '&:first-child': {
                minWidth: '50px',
                maxWidth: "50px",
            },
            '&:nth-child(3n)': {
                minWidth: '90px',
                maxWidth: "80px",
            },
            '&:nth-child(4n)': {
                minWidth: '105px',
                maxWidth: "105px",
            },
            '&:nth-child(5n)': {
                minWidth: '132px',
                maxWidth: "132px",
            },
            '&:nth-child(6n)': {
                minWidth: '83px',
                maxWidth: "83px",
            },
            '&:nth-child(7n)': {
                minWidth: '75px',
                maxWidth: "75px",
            },
            backgroundColor: 'inherit',
            maxWidth: "100%",
            minWidth: '100%',
            width: '250px',
            position: 'relative',
            zIndex: 1,
            fontSize: '18px',
            paddingLeft: '16px',
            paddingRight: '16px',
            '@media screen and (max-width: 1635px)': {
                fontSize: '13px',
                paddingLeft: '8px',
                paddingRight: '3px',
                '&:first-child': {
                    minWidth: '50px',
                    maxWidth: "50px",
                },
                '&:nth-child(2n)': {
                    minWidth: '200px',
                    maxWidth: "200px",
                },
                '&:nth-child(3n)': {
                    minWidth: '58px',
                    maxWidth: "58px",
                },
                '&:nth-child(4n)': {
                    minWidth: '82px',
                    maxWidth: "82px",
                },
                '&:nth-child(5n)': {
                    minWidth: '70px',
                    maxWidth: "70px",
                },
                '&:nth-child(6n)': {
                    minWidth: '70px',
                    maxWidth: "70px",
                },
                '&:nth-child(7n)': {
                    minWidth: '40px',
                    maxWidth: "40px",
                },
            },
            '@media screen and (max-width: 635px)': {
                fontSize: '13px',
                paddingLeft: '8px',
                paddingRight: '3px',
                '&:first-child': {
                    marginLeft: '-15px',
                    minWidth: '0',
                    maxWidth: "0",
                },
                '&:nth-child(2n)': {
                    minWidth: '142px',
                    maxWidth: "142px",
                },
                '&:nth-child(3n)': {
                    minWidth: '58px',
                    maxWidth: "58px",
                },
                '&:nth-child(4n)': {
                    minWidth: '82px',
                    maxWidth: "82px",
                },
                '&:nth-child(5n)': {
                    minWidth: '65px',
                    maxWidth: "65px",
                },
                '&:nth-child(6n)': {
                    minWidth: '0',
                    maxWidth: "0",
                },
                '&:nth-child(7n)': {

                    minWidth: '40px',
                    maxWidth: "40px",
                },
            }
        },
    },
    cells: {
        style: {
            '&:first-child': {
                minWidth: '50px',
                maxWidth: "50px",
            },
            '&:nth-child(3n)': {
                minWidth: '80px',
                maxWidth: "80px",
            },
            '&:nth-child(4n)': {
                minWidth: '110px',
                maxWidth: "110px",
            },
            '&:nth-child(5n)': {
                minWidth: '135px',
                maxWidth: "135px",
            },
            '&:nth-child(6n)': {
                minWidth: '80px',
                maxWidth: "80px",
            },
            '&:nth-child(7n)': {
                minWidth: '75px',
                maxWidth: "75px",
            },
            maxWidth: "100%",
            minWidth: '100%',
            width: '250px',
            position: 'relative',
            zIndex: 1,
            background: "white",
            paddingLeft: '15px', // override the cell padding for data cells
            paddingRight: '8px',
            '@media screen and (max-width: 1635px)': {
                fontSize: '13px',
                paddingLeft: '8px',
                paddingRight: '3px',
                '&:first-child': {
                    minWidth: '50px',
                    maxWidth: "50px",
                },
                '&:nth-child(2n)': {
                    minWidth: '200px',
                    maxWidth: "200px",
                },
                '&:nth-child(3n)': {
                    minWidth: '40px',
                    maxWidth: "40px",
                },
                '&:nth-child(4n)': {
                    minWidth: '100px',
                    maxWidth: "100px",
                },
                '&:nth-child(5n)': {
                    minWidth: '70px',
                    maxWidth: "70px",
                },
                '&:nth-child(6n)': {
                    minWidth: '70px',
                    maxWidth: "70px",
                },
                '&:nth-child(7n)': {
                    marginLeft: '-10px',

                    minWidth: '45px',
                    maxWidth: "45px",
                },
            },
            '@media screen and (max-width: 635px)': {
                fontSize: '13px',
                paddingLeft: '8px',
                paddingRight: '3px',
                '&:first-child': {
                    marginLeft: '-15px',
                    minWidth: '0',
                    maxWidth: "0",
                },
                '&:nth-child(2n)': {
                    minWidth: '142px',
                    maxWidth: "142px",
                },
                '&:nth-child(3n)': {
                    minWidth: '40px',
                    maxWidth: "40px",
                },
                '&:nth-child(4n)': {
                    minWidth: '100px',
                    maxWidth: "100px",
                },
                '&:nth-child(5n)': {
                    minWidth: '60px',
                    maxWidth: "60px",
                },
                '&:nth-child(6n)': {
                    minWidth: '0',
                    maxWidth: "0",
                },
                '&:nth-child(7n)': {
                    marginLeft: '-10px',

                    minWidth: '45px',
                    maxWidth: "45px",
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

        },
    }
};

const Cart = (props) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [httpError, setHttpError] = useState();
    const [clients, setClients] = useState([]);


    async function fetchClientData() {
        setIsLoading(true)
        const URL = "https://elf.denisov.link/api/clients"
        const response = await fetch(URL)

        const users = await response.json()
        setClients(users)
        setIsLoading(false)
    }

    const fetchProducts = async () => {
        setIsLoading(true)

        const URL = "https://elf.denisov.link/api/cart"
        const response = await fetch(URL)
        const prod = await response.json()
        setProducts(prod);
        setIsLoading(false)

    }

    useEffect(() => {
        fetchClientData().catch(error => {
            setIsLoading(false);
            setHttpError(error.message)
        });
        fetchProducts().catch(error => {
            setIsLoading(false);
            setHttpError(error.message)
        });
    }, [])

    if (isLoading) {
        return (
            <section className={classes.Loading}>
                <p>Loading...</p>
            </section>)
    }

    if (httpError) {
        return (
            <section className={classes.Error}>
                <p>{httpError}</p>
            </section>)
    }


    const columns = [
        {
            name: '№',
            selector: (row) => row.id
        },
        {
            name: 'Product',
            selector: (row) => `${row.product.flavour}`
        },
        {
            name: 'Puffs',
            selector: (row) => row.product.puffs
        },
        {
            name: 'Quantity',
            selector: (row) =>
                <Fragment>
                    <div className={classes.justify}>
                        <button className={classes.quantity_btn}>-</button>
                        <input className={classes.input} type="text" defaultValue={row.quantity}/>
                        <button className={classes.quantity_btn}>+</button>
                    </div>
                </Fragment>
        },
        {
            name: 'Selling Price',
            selector: (row) =>
                <Fragment>
                    <div className={classes.justify}>
                        <input className={classes.input} type="text" defaultValue={row.sellingPrice}/>
                    </div>
                </Fragment>
        },
        {
            name: 'Total',
            selector: (row) => <div className={classes.justify}>{row.quantity * row.sellingPrice}</div>
        },
        {
            name: '',
            selector: () =>
                <button className={classes.quantity_btn}>
                    <span className="material-icons" id='delete'>{'delete'}</span>
                </button>
        }
    ]
    const allAmounts = products.map(product =>
        product.quantity * product.sellingPrice
    )
    let totalAmount

    function arraySum(array) {
        totalAmount = 0;
        for (let i = 0; i < array.length; i++) {
            totalAmount += array[i];
        }
    }

    arraySum(allAmounts);


    return (
        <CartForm onClose={props.onClose}>
            <div className={classes.wrapper}>
                <div className={classes.borders}>
                    <DataTable columns={columns} data={products} progressPending={isLoading}
                               customStyles={customStyles}/>
                    <div className={classes.total_price}>
                        <h1>Total amount: {totalAmount} uah</h1>
                    </div>
                </div>
                <div className={classes.client_info}>
                    <h2>Client</h2>
                    <select name="client" id="client">
                        {clients.map(client =>
                            <option key={client.id} value={client.name}>{client.name}</option>
                        )}
                    </select>
                </div>
                <div className={classes.justify}>
                    <button className={classes.order_button}>Add an order
                        <span className='material-icons'>{'check'}</span>
                    </button>
                </div>
                <div className={classes.clear}>
                <button>Clear Cart</button>
                </div>
            </div>
        </CartForm>
    )
}

export default Cart