import { Box, Center, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartData, removeFromCart } from "../../redux/action";
import { BsFillEmojiLaughingFill } from "react-icons/bs";
import "./checkout.css";
function Cartpage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart, isAuth } = useSelector((state) => state);

  const removeHandler = (userId) => {
    dispatch(removeFromCart(userId));
  };
  const getTotalPrice = () => {
    let totalPrice = cart.reduce(
      (acc, elm) => acc + Number(elm.price) * Number(elm.quantity),
      0
    );
    return totalPrice.toFixed(2);
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/signup");
    } else {
      dispatch(getCartData());
    }
  }, []);
  console.log(cart);
  return (
    <Container maxW={"7xl"}>
      <div className="marginTop">
        <h1 className="heading">Shopping Cart</h1>

        <div className="parent">
          <div className="parent-Div1">
            {cart.map((elm) => {
              {
                console.log(elm);
              }
              return (
                <div className="box1">
                  <div className="box1_imageDiv">
                    <img src={elm.thumbnails[0][6]} alt="cart-img" />
                  </div>
                  <div>
                    <div className="box1_Div2">
                      <p
                        style={{
                          margin: "0px 0 10px 0",
                        }}
                      >
                        {elm.title}
                      </p>
                      <p
                        className=""
                        style={{
                          textTransform: "capitalize",
                        }}
                      >
                        {elm.category}
                      </p>
                      <p>INR {elm.price}</p>
                      <p>Ends in 1 day 18 hrs 52 min</p>
                      <Flex
                        style={{
                          marginLeft: "0px",
                        }}
                        align={"center"}
                        className="selected"
                        width={"200px"}
                        gap={2}
                      >
                        {" "}
                        <BsFillEmojiLaughingFill /> High Satisfaction Item
                      </Flex>
                    </div>
                    <div>
                      <div className="innerBox">
                        <h2>Quantity : {elm.quantity}</h2>
                      </div>
                      <div className="innerBox2">
                        <u>
                          {" "}
                          <button onClick={() => removeHandler(elm.userId)}>
                            Remove
                          </button>{" "}
                        </u>
                        <u>
                          {" "}
                          <button>Save for later</button>
                        </u>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="box2">
            <Box border={"1px solid #cecece"}>
              <Flex align={"center"} justifyContent={"center"} gap={5}>
                <Text fontSize={"25px"} pos={"relative"} top={"-5px"}>
                  <AiOutlinePlus />
                </Text>{" "}
                <h1>Add a Promo Code</h1>
              </Flex>
            </Box>
            <div className="box2_main2">
              <div>
                <h5>({cart.length}) item:</h5>
                <h5>INR {getTotalPrice()}</h5>
              </div>
              <div>
                <p> Savings:</p>
                <p className="paragraph">
                  {" "}
                  {(getTotalPrice() * 0.07).toFixed(2)}
                </p>
              </div>
              <div>
                <h5>Subtotal:</h5>
                <h5> INR {(getTotalPrice() * 0.93).toFixed(2)}</h5>
              </div>
              <div>
                <h3>Your Total:</h3>
                <h3>{(getTotalPrice() * 0.93).toFixed(2)}</h3>
              </div>
              <button onClick={() => navigate("/checkout")}>Check Out</button>
            </div>
          </div>
        </div>
        <h3> Things We Know You'll Love</h3>
        <div className="parent2">
          <div>
            <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/6f028d80157c02d1a519d36a0045fa8ef914efb0/Furniture-of-America-Transitional-Espresso-Dining-Buffet.jpg?impolicy=mediumlow" />
            <button>Add to Cart</button>
            <h3> Sale $373.49</h3>
            <p>Furniture of America Rustic Espresso Dining Buffet with Wine</p>
          </div>
          <div>
            <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/6f028d80157c02d1a519d36a0045fa8ef914efb0/Furniture-of-America-Transitional-Espresso-Dining-Buffet.jpg?impolicy=mediumlow" />
            <button>Add to Cart</button>
            <h3> Sale $373.49</h3>
            <p>Furniture of America Rustic Espresso Dining Buffet with Wine</p>
          </div>
          <div>
            <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/6f028d80157c02d1a519d36a0045fa8ef914efb0/Furniture-of-America-Transitional-Espresso-Dining-Buffet.jpg?impolicy=mediumlow" />
            <button>Add to Cart</button>
            <h3> Sale $373.49</h3>
            <p>Furniture of America Rustic Espresso Dining Buffet with Wine</p>
          </div>
          <div>
            <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/6f028d80157c02d1a519d36a0045fa8ef914efb0/Furniture-of-America-Transitional-Espresso-Dining-Buffet.jpg?impolicy=mediumlow" />
            <button>Add to Cart</button>
            <h3> Sale $373.49</h3>
            <p>Furniture of America Rustic Espresso Dining Buffet with Wine</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Cartpage;
