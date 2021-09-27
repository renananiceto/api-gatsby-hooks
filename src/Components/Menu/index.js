import React from 'react'
import * as S from "./styles"
import { Link } from "gatsby"

import logo from "../../images/logo.png"

export default function index() {
    return (
        <S.Container>
            <S.wrapper>
                <S.LogoBox>
                    <S.Logo src={logo} alt="logo" />
                </S.LogoBox>
                <Link to="/home">Home</Link>
                <Link to="/home2">Home2</Link>
                <Link to="/home3">Home3</Link>
            </S.wrapper>
        </S.Container>
    )
}
