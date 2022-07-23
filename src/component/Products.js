import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom";


const Product = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    var componentMoted = true;  
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const responce = await fetch("https://fakestoreapi.com/products")
            if (componentMoted) {
                setData(await responce.clone().json());
                setFilter(await responce.json());
                setLoading(false);
                console.log(filter)
            }
            return () => {
                componentMoted = false
            }

        }

        getProducts();
        
    },[])

    const Loading = () => {
        return (
            
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
           
        )
    }


    console.log(data, "<---------")
    const ShowProducts = () => {
        return (
            <>
                {filter.map((product) => {
                    return (
                        <>
                            <div className='col-md-3 mb-4'>

                                <div id="borders" key={product.id} >

                                    <img src={product.image} alt={product.title}/>
                                    <div>
                                        <h5>{product.title.substring(0, 12)}</h5>
                                        <p classNam="card-text lead fw-bold">${product.price}</p>

                                        <div>
                                            <NavLink id="buy" to = {`/products/${product.id}`} className="btn btn-outline-dark"> 
                                            <h5 >
                                                Buy 
                                            </h5>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        );
    };



    return (
        <div>
            <div className='container my-5 py-5'>
                <div className='row'>
                </div>
                <div style={{display:"flex"}} className='row'>
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    ) 
}

export default Product