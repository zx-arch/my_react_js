import { Fragment } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Production from "../../components/Production/Production";
import React, { useEffect, useState } from 'react';
import { getProducts, searchProducts } from "../../api/api";

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts().then((result) => {
            setProducts(result.products);
        });
    }, []);

    const onSearch = (query) => {
        searchProducts(query).then((result) => {
            setProducts(result.products);
        });
    }

    return (
        <Fragment>
            <h1>Catalog</h1>
            <SearchBar onClick={onSearch} />
            {products.map((product, index) => {
                return <Production key={index} product={product} />
            })};
        </Fragment>
    );
}

export default ProductPage;