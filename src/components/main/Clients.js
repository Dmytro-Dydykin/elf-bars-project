import DataTable from 'react-data-table-component'
import React, {useState, useEffect} from "react";
import classes from "./Clients.module.css";
import AddClient from "../add-client/AddClient";


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
            '&:first-child':{
                minWidth: '60px',
                width: '60px',
                maxWidth:"60px",
            },
            maxWidth:"100%",
            minWidth: '100%',
            width: '250px',
            position: 'relative',
            zIndex: 1,

            fontSize: '18px',
            paddingLeft: '16px',
            paddingRight: '16px',
            borderRightWidth: '1px',
            borderRightColor: 'black',
            borderRightStyle: 'solid',

            borderLeftWidth: '1px',
            borderLeftColor: 'black',
            borderLeftStyle: 'solid',
            '@media screen and (max-width: 535px)': {
                fontSize: '13px',
                paddingLeft: '8px',
                paddingRight: '3px',
                '&:first-child': {
                    minWidth: '45px',
                    maxWidth: "45px",
                },
                '&:nth-child(2n)': {
                    minWidth: '160px',
                    maxWidth: "160px",
                },
                '&:nth-child(3n)': {
                    minWidth: '130px',
                    maxWidth: "130px",
                },
            }
        },

        draggingStyle: {

            cursor: 'move',

        },
    },
    cells: {
        style: {
            '&:first-child':{
                minWidth: '60px',
                width: '60px',
                maxWidth:"60px",
            },
            maxWidth:"100%",
            minWidth: '100%',
            width: '250px',
            position: 'relative',
            zIndex: 1,

            background: "rgba(144,210,252,0.32)",
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
            '@media screen and (max-width: 535px)': {
                fontSize: '13px',
                paddingLeft: '8px',
                paddingRight: '3px',
                '&:first-child': {
                    minWidth: '45px',
                    maxWidth: "45px",
                },
                '&:nth-child(2n)': {
                    minWidth: '160px',
                    maxWidth: "160px",
                },
                '&:nth-child(3n)': {
                    minWidth: '130px',
                    maxWidth: "130px",
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



const Component = (props) => {

    const [clientAddingShown, setClientAddingShown] = useState(false)
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(false);
    const [httpError, setHttpError] = useState();

    const columns = [
        {
            name: '№',
            selector: (row) => row.id
        },
        {
            name: 'Name',
            selector: (row) => row.name
        },
        {
            name: 'Phone',
            selector: (row) => row.phone
        },
        {
            name: 'Created at',
            selector: (row) => row.createdAt
        }
    ]

    async function fetchTableData() {
        setLoading(true)
        const URL = "https://elf.denisov.link/api/clients"
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
            <section className={classes.ClientsLoading}>
                <p>Loading...</p>
            </section>)
    }

    if (httpError) {
        return (
            <section className={classes.ClientsError}>
                <p>{httpError}</p>
            </section>)
    }

    const showClientHandler = () => {
        setClientAddingShown(true)
    }
    const hideClientHandler = async () => {
        setClientAddingShown(false)
     }


    return (
        <div className='wrapper'>
            <div className='data'>
                <h1>Clients Data</h1>
                <button onClick={showClientHandler}>Add Client</button>
            </div>
            <div className={clientAddingShown ? 'blur' : 'original'}>
                <AddClient onCancel={hideClientHandler} fetch={fetchTableData}/>
            </div>
            <DataTable columns={columns} data={clients} progressPending={loading} customStyles={customStyles}/>
        </div>
    )
};

export default Component