import React from 'react'
import { BsPerson, BsCloudDownload } from 'react-icons/bs'
import { RiLogoutBoxLine } from 'react-icons/ri'
import { AiOutlineCloseCircle, AiOutlineHeart, AiOutlineShopping } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { HiMenuAlt4 } from 'react-icons/hi'
import { Link, useNavigate } from "react-router-dom";
import './Navbar.scss'
import { useState } from 'react'
// 로그인 버튼을 누르면 로그인 페이지가 노출되게 
const Navbar = ({ authensticate, setAuthensticate }) => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M HOME', '스포츠', 'Sale', '지속가능성']
    const navigate = useNavigate()
    const search = (e) => {
        if (e.key === 'Enter') { //엔터키를 눌렀을때                                     
            let keyword = e.target.value; //E == 검색인풋창
            navigate(`/?q=${keyword}`) // 추가 조건은 쿼리로 붙임(q) 
        }
    }
    const gotoLogin = () => {
        if (authensticate === false) {
            navigate('login')
        } else {
            setAuthensticate(false)
        }
    }
    const [sideMenu, setSideMenu] = useState(true)
    console.log(sideMenu)
    return (
        <div>
            <HiMenuAlt4 className='open_btn' onClick={() => setSideMenu(false)} />
            <div className="side_menu" style={sideMenu ? { transform: "translateX(-100%)", transition: ' all 0.5s' } : { transform: "translateX(-0%)", transition: "all 0.5s" }}>
                <ul className='sideMenu_listWrap'>
                    <AiOutlineCloseCircle className='close_btn' onClick={() => setSideMenu(true)} />
                    <li onClick={gotoLogin}>
                        {authensticate ? <RiLogoutBoxLine className='icon' /> : <BsPerson className='icon' />}
                        <span>{authensticate ? '로그아웃' : '로그인'}</span>
                    </li>
                    <li >여성</li>
                    <li >Divided</li>
                    <li >남성</li>
                    <li >신생아/유아</li>
                    <li >아동</li>
                    <li >스포츠</li>
                    <li >지속가능성</li>
                    <li >고객서비스</li>
                </ul>
            </div>
            <div className='login_btn_wrap'>
                <ul className="left">
                    <li>고객센터</li>
                    <li>뉴스레터</li>
                    <li>매장찾기</li>
                    <li><BsCloudDownload className='icon' /></li>
                </ul>
                <ul className="right">
                    <li className='login_btn' onClick={gotoLogin}>
                        {authensticate ? <RiLogoutBoxLine className='icon' /> : <BsPerson className='icon' />}
                        <span>{authensticate ? '로그아웃' : '로그인'}</span>
                    </li>
                    <li className=""><AiOutlineHeart className='icon' /><span>즐겨찾기</span></li>
                    <li className=""><AiOutlineShopping className='icon' /><span>쇼핑백(0)</span></li>
                </ul>
            </div>
            <h1>
                <Link to='/'>
                    <img src="../img/hnmlogo.png" width={90} alt="h&m" />
                </Link>
            </h1>
            <nav>
                <ul className='menu_list'>
                    {menuList.map((i) => {
                        return <li>{i}</li>
                    })}
                </ul>
                <div className='search'>
                    <FiSearch />
                    <input type="text" placeholder='제품검색' onKeyDown={(e) => search(e)} />
                </div>
            </nav>
        </div>
    )
}

export default Navbar