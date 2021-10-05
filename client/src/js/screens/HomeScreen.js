import Rating from '../components/Rating.js';
import { hideLoading, showLoading } from '../utils.js';

const HomeScreen = {
  render: async () => {
    showLoading();
    const res = await axios.get('http://localhost:5000/api/products');
    hideLoading();

    if (!res || res.statusText !== 'OK') {
      return `<div>Error on getting data</div>`;
    }
    const products = res.data;

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
