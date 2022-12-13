import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useSearchParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
/*
    검색기능
    주소 뒤에 파라매터를 갖고오기 위해 /?q=${keyword} (keyword의 값)
    useSearchParams
*/
const ProductAll = () => {
  const [ProductList, setProductList] = useState([])
  let [query, setQuery] = useSearchParams('aa')

  const getProducts = async () => {
    //주소창에 있는 키워드값을 갖고옴 키워드 부분을 인식할 수 있는 함수
    let keyword = query.get('q') || "";
    let url = `https://my-json-server.typicode.com/seonghong1/REACT_HnM/products?q=${keyword}`
    let response = await fetch(url)
    let data = await response.json();

    setProductList(data)
  }
  useEffect(() => {
    getProducts()
  }, [query])

  return (

    <div>
      <Container>
        <Row>
          {ProductList.map((menu) => {
            return <Col sm={6} lg={4} xxl={3}><ProductCard item={menu} /></Col>
          })}
        </Row>
      </Container>
    </div>

  )
}

export default ProductAll
