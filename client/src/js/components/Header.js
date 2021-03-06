import { getUserInfo } from '../localStorage.js';

const Header = {
  after_render: () => {},

  render: () => {
    const { name, isAdmin } = getUserInfo();

    return `
      <div class="brand">
        <a href="/#/">amazona</a>
      </div>

      <div>
        ${
          name
            ? `<a href="/#/profile">${name}</a>`
            : `<a href="/#/signin">Sign in</a>`
        }
        
        <a href="/#/cart">Cart</a>
        ${
          isAdmin
            ? `
          <a href="/#/dashboard">Dashboard</a>
        `
            : ''
        }
      </div>
    `;
  },
};

export default Header;
