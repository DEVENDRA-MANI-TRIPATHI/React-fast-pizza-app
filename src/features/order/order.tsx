import { getOrder } from "../../utils/apiRestaurant"


const Order = () => {
  return (
    <div>order</div>
  )
}

export function loader({params}) {
  const order = getOrder(params.orderId)
  return order;
}

export default Order