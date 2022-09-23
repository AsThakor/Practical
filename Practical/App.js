import AppNavigator from './src/AppNavigator';
import {  Provider } from "react-redux";
import store from './src/Redux/store/Store';

export default function App() {
  return (
    <Provider store={store}>
        <AppNavigator />
    </Provider>
  );
}
