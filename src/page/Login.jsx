import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.scss'

// app.jsx에서 로그인 상태를 props로 전달받음
const Login = ({ setAuthensticate }) => {
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault()
    setAuthensticate(true)
    //로그인 버튼 클릭시 true값으로 변경되고 메인페이지로 이동됨
    navigate('/')
  }

  return (
    <div className="container login_area">
      <Form className='login_form' onSubmit={loginUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Login