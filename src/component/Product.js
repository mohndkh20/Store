import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import { addCart } from "../redux/actions/Action";
import { useParams } from "react-router-dom"

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch(addCart(product));
        console.log(product, "product")
    }

    useEffect(() => {
        const takeProduct = async () => {
            setLoading(true)
            const responce = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await responce.json());
            setLoading(false);
        }
        takeProduct();
    } , [])


    const Loading = () => {
        return (
            <>
                <div class="d-flex justify-content-center">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                </div>
            </>
        )}
    const ShowProduct = () => {
        return (
            <>
                <div id="borders" className='col-md-6'>
                    <img id="img" src={product.image} alt={product.title} />
                </div>
                <div className='col-md-6'>
                    <h4 className='text-uppercase text-black-50'>
                        {product.category}
                    </h4>
                    <h1 className='display-5'>
                        {product.title}
                    </h1>
                    <p className='lead fw-bolder'>
                        Rating {product.rating && product.rating.rate}
                        <i className='fa fa-star'> ffff</i>
                    </p>
                    <h3 className='display-6 fw-bold my-4'>
                        $ {product.price}
                    </h3>
                    <button style={{backgroundColor:"burlywood" , fontFamily:"revert"}} className='btn btn-outline-dark px-4 py-2 fw-bold' onClick={() => addProduct(product)}>Add to Cart
                    </button>
                    <p className='lead'>
                        {product.description}
                    </p>
                </div>
            </>
        )
    }
    return (
        <div className='container py-5'>
            <div className='row py-5'>
                {loading ? <Loading /> : <ShowProduct />}
            </div>
        </div>
    )
}

export default Product
