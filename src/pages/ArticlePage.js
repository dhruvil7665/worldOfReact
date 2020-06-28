import React,{useState, useEffect} from 'react';
import articleContent from './article-content';
import ArticleList from '../components/ArticleList';
import NotFoundPage from './404Page'
import CommentList from '../components/CommentList';
import UpvotesSection from '../components/likeSection';
import AddCommentForm from '../components/AddCommentForm';

const ArticlePage = ({match}) => {
    const name = match.params.name;
    const article = articleContent.find(article=>article.name===name);
    
    const [articleInfo, setArticleInfo]=useState({upvotes:0,comments:[]});

    useEffect(()=>{

        const fetchData = async()=>{
        const result = await fetch(`/api/articles/${name}`)
        const body = await result.json();
        setArticleInfo(body)
    }
        fetchData();
    },[name])

    if(!article) return <NotFoundPage />
    
    const otherArticles = articleContent.filter(article=>article.name!==name);

    return (
    <React.Fragment> 
    <h1>{article.title}</h1>
    <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} ></UpvotesSection>
    {article.content.map((paragraph,key) =>(
        <p key={key}>{paragraph}</p>

    ))}
    
    <AddCommentForm articleName={name} setArticleInfo={setArticleInfo}></AddCommentForm>
    <CommentList comments={articleInfo.comments}></CommentList>

    <h3>Other Articles</h3>
    <ArticleList articles={otherArticles}/>
    </React.Fragment>);
};

export default ArticlePage;