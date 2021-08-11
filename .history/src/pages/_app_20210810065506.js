//ENTRY POINT TO THE APP
import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import { Provider as AuthProvider } from 'next-auth/client'

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    <AuthProvider></AuthProvider>
  )
}

export default MyApp