import React from "react";
import CategoryList from "../../Components/CategoryList";
import Header from "../../Components/Header";
import CategoryItem from "../../Components/CategoryItem";
import Card from '../../Components/Card';
import CardProduct from "../../Components/CardProduct";
import './index.css';

function Home() {
    return(
    <>
        <Header></Header>
        <CategoryList />

        <div class="categoryContainer">
            <CategoryItem categoryName="NOME DA CATEGORIA" backgroundCategory="https://static5.depositphotos.com/1020804/534/i/450/depositphotos_5348599-stock-photo-assorted-japanese-sushi.jpg" />

            <div class="productsContainer">
                <CardProduct productName="Tarê extra - 30ml" price="R$ 222,22" description="Prato típico havaiano, preparado com peixes frescos, molho, diversos complementos, com base de arroz japonês ou mix de folhas." image="https://img.deliverydireto.com.br/je82KA1Dg9XoKxTeLRVAyTdtFJ8=/100x100/filters:format(webp)/https://duisktnou8b89.cloudfront.net/img/items/62e297b9d7b51.png"/>
                <CardProduct productName="Tarê extra - 30ml" price="R$ 222,22" description="Prato típico havaiano, preparado com peixes frescos, molho, diversos complementos, com base de arroz japonês ou mix de folhas." image="https://img.deliverydireto.com.br/je82KA1Dg9XoKxTeLRVAyTdtFJ8=/100x100/filters:format(webp)/https://duisktnou8b89.cloudfront.net/img/items/62e297b9d7b51.png"/>
                <CardProduct productName="Tarê extra - 30ml" price="R$ 222,22" description="Prato típico havaiano, preparado com peixes frescos, molho, diversos complementos, com base de arroz japonês ou mix de folhas." image="https://img.deliverydireto.com.br/je82KA1Dg9XoKxTeLRVAyTdtFJ8=/100x100/filters:format(webp)/https://duisktnou8b89.cloudfront.net/img/items/62e297b9d7b51.png"/>
                <CardProduct productName="Tarê extra - 30ml" price="R$ 222,22" description="Prato típico havaiano, preparado com peixes frescos, molho, diversos complementos, com base de arroz japonês ou mix de folhas." image="https://img.deliverydireto.com.br/je82KA1Dg9XoKxTeLRVAyTdtFJ8=/100x100/filters:format(webp)/https://duisktnou8b89.cloudfront.net/img/items/62e297b9d7b51.png"/>
                <CardProduct productName="Tarê extra - 30ml" price="R$ 222,22" description="Prato típico havaiano, preparado com peixes frescos, molho, diversos complementos, com base de arroz japonês ou mix de folhas." image="https://img.deliverydireto.com.br/je82KA1Dg9XoKxTeLRVAyTdtFJ8=/100x100/filters:format(webp)/https://duisktnou8b89.cloudfront.net/img/items/62e297b9d7b51.png"/>
                <CardProduct productName="Tarê extra - 30ml" price="R$ 222,22" description="Prato típico havaiano, preparado com peixes frescos, molho, diversos complementos, com base de arroz japonês ou mix de folhas." image="https://img.deliverydireto.com.br/je82KA1Dg9XoKxTeLRVAyTdtFJ8=/100x100/filters:format(webp)/https://duisktnou8b89.cloudfront.net/img/items/62e297b9d7b51.png"/>
                <CardProduct productName="Tarê extra - 30ml" price="R$ 222,22" description="Prato típico havaiano, preparado com peixes frescos, molho, diversos complementos, com base de arroz japonês ou mix de folhas." image="https://img.deliverydireto.com.br/je82KA1Dg9XoKxTeLRVAyTdtFJ8=/100x100/filters:format(webp)/https://duisktnou8b89.cloudfront.net/img/items/62e297b9d7b51.png"/>
            </div>
        </div>

    </>
    );
}

export default Home;