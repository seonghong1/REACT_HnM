import React from 'react'
import ProductDetail from '../page/ProductDetail'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({authensticate}) => {
  return  authensticate? <ProductDetail />:<Navigate to='/login'/>
    
  
}

export default PrivateRoute