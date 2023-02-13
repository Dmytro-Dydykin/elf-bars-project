import React, {useState, useEffect} from "react";
import classes from "./Cart.module.css";
import DataTable from "react-data-table-component";
const Cart = props => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [httpError, setHttpError] = useState();


    const fetchProducts = async () => {
        setIsLoading(true)

        const URL = "https://elf.denisov.link/api/cart"
        const response = await fetch(URL)
        const prod = await response.json()
        setProducts(prod);
        setIsLoading(false)

    }

    useEffect(() => {

        fetchProducts().catch(error => {
            setIsLoading(false);
            setHttpError(error.message)
        });
    }, [])

    if (isLoading) {
        return (
            <section className={classes.MealsLoading}>
                <p>Loading...</p>
            </section>)
    }

    if (httpError) {
        return (
            <section className={classes.MealsError}>
                <p>{httpError}</p>
            </section>)
    }

    const columns = [
        {
            name: 'N',
            selector: (row) => row.id
        },
        {
            name: 'Product',
            selector: (row) => row.product.flavour
        },
        {
            name: 'Puffs',
            selector: (row) => row.product.puffs
        },
        {
            name: 'Quantity',
            selector: (row) => row.quantity
        },
        {
            name: 'Selling Price',
            selector: (row) => row.sellingPrice
        }
    ]

    return (
        <section className={classes.meals}>

            <DataTable columns={columns} data={products} progressPending={isLoading} />
        </section>
    )
}

export default Cart