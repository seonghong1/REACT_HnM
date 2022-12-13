import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ProductCard.scss'
/*
  usenavidate
  상품을 눌렀을때 상품에 해당되는 productDetail페이지로 넘어가게
  
  useNavigate() 클릭시 주소를 변경해주는 훅
  
*/
const ProductCard = ({ item }) => {

  const navigate = useNavigate()

  const showDetail = () => {
    navigate(`/Product/${item.id}`)
  }

  return (
    <div className='productCard'>
      <div className='img_container' onClick={showDetail}>
        <img src={item.img} alt="" />
        <div className='choice'>{item.choice ? '추천상품' : null}</div>
        <div className='new'>{item.new ? 'NEW' : null}</div>
      </div>
      <div className='title'>{item.title}</div>
      <div className='price'>￦{item.price}</div>
    </div>
  )
}

export default ProductCard