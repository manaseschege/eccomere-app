import React, {useState, useContext} from "react"
import {Context} from "Context"
import PropTypes from "prop-types"
function CartItem({item}) {
    const [hovered, setHovered] = useState(false)
    const {removeFromCart} = useContext(Context)
    
    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"
    
    return (
        <div className="cart-item">
            <i 
                className={iconClassName} 
                onClick={() => removeFromCart(item.id)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
            </i>
            
            <img alt="" src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}
CartItem.PropType={
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem