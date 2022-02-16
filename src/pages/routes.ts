import { DefaultPage } from './default';
import { HomePage } from './home';
import { LoginPage } from './login';
import { Qrcode } from './qrcode';
export default [
  {
    name: 'default',
    component: DefaultPage,
  },
  {
    name: 'home',
    component: HomePage
  },
  {
    name: 'login',
    component: LoginPage
  },
  {
    name: 'qrcode',
    component: Qrcode
  }
];

