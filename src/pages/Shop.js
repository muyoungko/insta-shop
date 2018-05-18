import React from 'react';

const Shop = ({match}) => {
    return (
        <div>
            <h2>
                {match.params.seller} Shop
            </h2>

            {match.params.seller}님의 가게입니다.
            원하시는 상품을 클릭해서 주문해주세요.
        </div>
    );
};

export default Shop;
