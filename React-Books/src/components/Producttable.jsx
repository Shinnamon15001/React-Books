import PropTypes from "prop-types";

import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryrow";

export default function ProductTable({ products, filterText, inStockOnly }) {
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        if (
            product.name.toLowerCase().indexOf(
                filterText.toLowerCase()
            ) === -1 
        ) {
            return;
        }
        if (inStockOnly &&!product.stocked) {
            rows.push (
                <ProductCategoryRow
                    category = {product.category}
                    key = {product.category}
                />
            );
        }

        rows.push(
            <ProductRow
                product = {product}
                key = {product.name}
            />
        );
        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

ProductTable.propTypes = {
    products: PropTypes.object.isRequired,
    filterText: PropTypes.string.isRequired,
    inStockOnly: PropTypes.bool.isRequired
};

