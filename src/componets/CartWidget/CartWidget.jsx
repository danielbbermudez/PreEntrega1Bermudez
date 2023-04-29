import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://images.vexels.com/media/users/3/200098/isolated/preview/7ad7c76da9a0cd7d2b01b64b2590617b-icono-de-carrito-de-compras-icono-de-carrito-de-compras.png";
  return (
    <div>
        <img className='imgCarrito' src={imgCarrito} alt='Carrito'/>
        <strong> 7 </strong>
    </div>
  )
}

export default CartWidget