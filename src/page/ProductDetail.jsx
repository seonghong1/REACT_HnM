import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Dropdown, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import './ProductDetail.scss'
import { FiHeart } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'
import { MdAddShoppingCart } from 'react-icons/md'


const ProductDetail = () => {

  const [product, setProduct] = useState(null)
  //하트 바꾸기
  const [heartFill, setHeartFill] = useState(false)
  // useParams - 현재 경로에서 사용되는 파라매터들이 저장되어있음
  let { id } = useParams()

  //사진의 src를 갖고오기위해 데이터를 한번 더 불러와준다
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/seonghong1/REACT_HnM/products/${id}`
    let response = await fetch(url)
    let data = await response.json();
    setProduct(data)
    console.log(product)
  }
  useEffect(() => {
    getProductDetail()
  }, [])


  const likeToggle = () => {
    setHeartFill(!heartFill)
  }
  return (
    <Container className='detail_container'>
      <Row>
        <Col className='img' xs={12} sm={7}>
          <img className='detail_img' src={product?.img} alt="" />
        </Col>
        <Col sm={5} className='detail_info'>
          <div className="detail_new">
            {product?.new ? <div className="new">NEW</div> : null}
            {product?.choice ? <div className='choice'>추천상품</div> : null}
          </div>
          <div className="detail-title-wrap">
            <div className="detail_title">{product?.title}</div>
            <span className='like' onClick={likeToggle}>{heartFill ? <FaHeart /> : <FiHeart />}</span>
          </div>
          <div className="detail_price">￦{product?.price}</div>
          <div>
            <Dropdown className='detail_dropdown'>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {product?.size.map((i) => {
                  return <Dropdown.Item href="#/action-1">{i}</Dropdown.Item>
                })}

              </Dropdown.Menu>
            </Dropdown>
            <Button variant="dark" className='detail_btn'><MdAddShoppingCart /> 추가</Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail