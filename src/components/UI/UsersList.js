import './UsersList.css'
import { useState } from "react";
import React from 'react';
import { useEffect } from "react";
import classes from "../Clients.module.css";
import ClientItem from "../Client/ClientItem";
import Card from "./Card";

const UsersList = () => {
    const [clients, setClients] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    const fetchClients = async () => {
        const response = await fetch('https://elf.denisov.link/api/clients');

        if (!response.ok) {
            throw new Error('Something went wrong!')
        }

        const responseData = await response.json();


        const loadedClients = [];

        for (const key in responseData) {
            loadedClients.push({
                id: responseData[key].id,
                name: responseData[key].name,
                phone: responseData[key].phone
            })
        }

        setClients(loadedClients);
        setIsLoading(false)

    }

    useEffect(() => {

        fetchClients().catch(error => {
            setIsLoading(false);
            setHttpError(error.message)
        });
    }, [])

    if (isLoading) {
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



    return (
        <div className="container py-5">
            <header className="text-center text-white">
                <h1 className="display-4">List of Users</h1>
            </header>
            <div className="row py-5">
                <div className="col-lg-10 mx-auto">
                    <div className="card rounded shadow border-0">
                        <div className="card-body p-5 bg-white rounded">
                            <div className="table-responsive">
                                <table id="example" style={{ width: "100%" }} className="table table-striped table-bordered">
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Phone</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {clients.map( client =>
                                        <tr>
                                            <td>{client.name}</td>

                                            <td>{client.phone}</td>

                                        </tr> )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default UsersList;