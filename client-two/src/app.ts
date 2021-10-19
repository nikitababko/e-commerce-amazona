import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Error404Screen from './screens/Error404Screen';

// import asd from './images/product-1.jpg'

import { parseRequestUrl } from './utils';

const app = {
  render: () => {
    return `
    <div class="grid-container">
      <header class="header">
        <div class="brand">
          <a href="/#/">amazona</a>
        </div>

        <div>
          <a href="/#/signin">Sign in</a>
          <a href="/#/cart">Cart</a>
        </div>
      </header>

      <main id="main-container"></main>

      <footer class="footer">All rights reserved @2021</footer>
    </div>
    `;
  },
};

const routes: any = {
  '/': HomeScreen,
  '/product/:id': ProductScreen,
};

interface IRequest {
  resource: string;
  id: string;
  verb: string;
}

const router = async () => {
  const request: IRequest = parseRequestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}` : '');
  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;

  const root: HTMLElement | any = document.getElementById('root');
  root.innerHTML = await app.render();

  const main: HTMLElement | any = document.getElementById('main-container');
  main.innerHTML = await screen.render();
};

export default router;
