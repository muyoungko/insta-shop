import React from 'react';

const OrderList = ({match}) => {
    return (
        <div>
            <h2>
                OrderList - {match.params.seller}
            </h2>
        </div>
    );
};

export default OrderList;
