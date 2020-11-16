import React from 'react';

import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "tytuł pierwszego artykułu",
        author: "autor pierwszy",
        text: "pierwszy Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur modi fuga veritatis dignissimos architecto similique harum eligendi placeat veniam quam, odit optio ducimus corporis nisi distinctio earum magnam laudantium fugit?"
    },
    {
        id: 2,
        title: "tytuł drugiego artykułu",
        author: "autor drugi",
        text: "drugi Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur modi fuga veritatis dignissimos architecto similique harum eligendi placeat veniam quam, odit optio ducimus corporis nisi distinctio earum magnam laudantium fugit?"
    },
    {
        id: 3,
        title: "tytuł trzeciego artykułu",
        author: "autor trzeci",
        text: "trzeciLorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur modi fuga veritatis dignissimos architecto similique harum eligendi placeat veniam quam, odit optio ducimus corporis nisi distinctio earum magnam laudantium fugit?"
    },
    {
        id: 4,
        title: "tytuł czwartego artykułu",
        author: "autor czwarty",
        text: "czwartyLorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur modi fuga veritatis dignissimos architecto similique harum eligendi placeat veniam quam, odit optio ducimus corporis nisi distinctio earum magnam laudantium fugit?"
    },
    {
        id: 5,
        title: "tytuł piątego artykułu",
        author: "autor piąty",
        text: "5555Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur modi fuga veritatis dignissimos architecto similique harum eligendi placeat veniam quam, odit optio ducimus corporis nisi distinctio earum magnam laudantium fugit?"
    }
]

const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))

    return (
        <div className="Home">
            {artList}
        </div>
    );
}

export default HomePage;