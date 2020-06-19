import React from 'react';
import articleContent from './article-content';


import ArticleList from '../components/ArticleList';

const ArticleListPage = () => (
    <React.Fragment> 
    <ArticleList articles={articleContent}/>
    </React.Fragment>
);

export default ArticleListPage;