import axios from "axios";
import { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import Card from "../components/Card/Card";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://63bbca11cf99234bfa64244b.mockapi.io/orders")
      .then((res) => {
        setOrders(res.data);
        setIsLoading(false);
      });
  }, []);

  const renderFakeOrders = () => {
    return [...Array(4)].map(() => (
      <ContentLoader
        speed={2}
        width={290}
        height={300}
        viewBox="0 0 290 300"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="0" ry="0" width="240" height="320" />
      </ContentLoader>
    ));
  };

  const renderOrders = () => {
    return orders.map((obj) => (
      <div className="">
        <p>Order #{obj.id}</p>
        <p>total cost: {obj.totalCost}</p>
        <p className="items_table">
          {obj.items.map((obj) => (
            <Card
              key={obj.title}
              title={obj.title}
              price={obj.price}
              img={obj.img}
            />
          ))}
        </p>

        <br />
      </div>
    ));
  };

  return (
    <div className="main container">
      <br /> {/*плохое решение  */}
      <h1>My Orders</h1>
      <br /> {/*и это тоже  */}
      <div className="">{isLoading ? renderFakeOrders() : renderOrders()}</div>
    </div>
  );
}

export default Orders;
