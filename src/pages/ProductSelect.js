import React from 'react';

const ProductSelect = ({match}) => {
    return (
        <div>
            <h2>
                ProductSelect - {match.params.seller}
            </h2>
        </div>
    );
};

export default ProductSelect;
