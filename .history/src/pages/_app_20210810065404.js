//ENTRY POINT TO THE APP
import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
impo

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
