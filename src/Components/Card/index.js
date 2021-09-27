import React, { useState, useEffect } from "react";
import * as S from "./styles"
import axios from "axios";




const MoviesApi = axios.create({
    baseURL: " http://hp-api.herokuapp.com/api/characters "
});

export default function Card() {

    const [list, setList] = useState([])

    useEffect(() => {
        teste()
    }, [])

    const teste = async () => {
        const resp = await MoviesApi.get()
        setList(resp.data)
    }


    return (
        <S.Container>
            {list.map((item, index) => (
                <S.Wrapper key={index}>
                    <p>{item.name}</p>
                    <S.BoxImg>
                    <S.Img src={item.image} alt="icon"/>
                    </S.BoxImg>
                </S.Wrapper>
            )
            )}
        </S.Container>
    )
   
}
