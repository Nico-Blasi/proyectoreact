import Item from "../item/Item"

const ItemList = ({product}) => {

    console.log(product);

    return(
        <>
            {product.map(product => <Item key={product.id} id={product.id} precio={product.precio} image={product.image} category={product.category} title={product.title} />)}
        </>
    )
}

export default ItemList