import { useSelector, useDispatch } from "react-redux";
import { addCart, removeCart } from "../redux/actions/Action";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const state = useSelector(state => state.handleCart);
  const dispatch = useDispatch();

  const handleAdd = item => {
    dispatch(addCart(item));
  };
  const handleDel = item => {
    dispatch(removeCart(item));
  };

  const emCart = () => {
    return (
      <div className=" my-5">
        <div className="container">
          <div className="row">
            <h1>Cart Empty</h1>
          </div>
        </div>
      </div>
    );
  };

  const back = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink
            style={{ backgroundColor: "burlywood" }}
            id="back"
            to="/products"
            className="btn btn-outline-dark mb-5 w-25 mx-auto">
            Back To Shopping
          </NavLink>
        </div>
      </div>
    );
  };

  const cartIt = product2 => {
    console.log(product2);
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={product2.image}
                alt={product2.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>
                {product2.title}
              </h3>
              <p>
                {product2.qty} X ${product2.price}
              </p>

              <button
                style={{ backgroundColor: "red" }}
                className="btn btn-outline-light me-4"
                onClick={() => handleDel(product2)}
              >
                <i className="fa fa-minus">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-bag-dash"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </i>
              </button>
              <button
                style={{ backgroundColor: "green" }}
                className="btn btn-outline-light"
                onClick={() => handleAdd(product2)}
              >
                <i className="fa fa-plus">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </i>
              </button>
            </div>
          </div>
        </div>
        <p style={{ marginLeft: "600px"  , fontWeight:"bolder" , fontSize:"20px"}}>
          Total: ${product2.qty * product2.price}
        </p>
      </div>
    );
  };

  return (
    <div>
      {state.length !== 0 && state.map(cartIt)}
      {state.length === 0 && emCart()}
      {state.length !== 0 && back()}
      {state.length === 0 && back()}
    </div>
  );
};

export default Cart;
