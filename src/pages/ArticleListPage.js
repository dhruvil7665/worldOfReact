import React from 'react';
import articleContent from './article-content';
import { Link } from 'react-router-dom';
const ArticleListPage = () => (
    <React.Fragment> 
    <h1>Articles</h1>
    {articleContent.map((article,key)=>(
        <Link className="article-list-item" key={key} to={`/articles/${article.name}`}>
            
            <h3 >{article.title}</h3>
            <p>{article.content[0].substring(0,150)}....</p>
            </Link>
    ))};
    </React.Fragment>
);

export default ArticleListPage;