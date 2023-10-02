const Production = (props) => {
    const { product } = props;
    return (
        <>
            <div className="productPage">
                <img src={product.thumbnail} alt="img error" />
                <div>{product.title}</div>
                <div>{product.brand}</div>
                <div>{product.category}</div>
                <div>{product.discountPercentage}</div>
            </div>
        </>
    );
};

export default Production;