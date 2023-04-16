import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Form from "../components/Form/Form";
import Products from "../components/Products/Products";
import "../assets/css/createProduct.css";
import { useEffect } from "react";

const CreateProduct = () => {
    //useEffect menampilkan alert Welcome ketika pertama kali website diload
    useEffect(() => {
        alert("Welcome!")
    }, [])
    
    return (
        <>
            <Navbar />
            <Header />
            <Form/>
            <Products/>
        </>
    )
} 

export default CreateProduct