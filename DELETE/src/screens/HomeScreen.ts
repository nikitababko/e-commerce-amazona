import axios from 'axios';

import Rating from '../components/Rating';

interface IProduct {
  _id: number;
  image: string;
  name: string;
  rating: number;
  numReviews: number;
  brand: string;
  price: number;
}

const HomeScreen = {
  render: async () => {
    const res = await axios.get('http://localhost:5000/api/products');
    if (!res || res.statusText !== 'OK') {
      return `<div>Error on getting data</div>`;
    }
    const products: Array<IProduct> = res.data;

    return `
      <ul class="products">
        ${products
          .map(
            (product) =>
              `
              <li>
                <div class="product">
                  <a href="/#/product/${product._id}">
                    <img src="${product.image}" alt="${product.name}" />
                  </a>

                  <div class="product-name">
                    <a href="/#/product/${product._id}">${product.name}</a>
                  </div>

                  <div className="product-rating">
                    ${Rating.render({
                      value: product.rating,
                      text: `${product.numReviews} reviews`,
                    })}
                  </div>

                  <div class="product-brand">${product.brand}</div>

                  <div class="product-price">$${product.price}</div>
                </div>
              </li>
            `
          )
          .join('\n')}
      </ul>
    `;
  },
};

export default HomeScreen;
