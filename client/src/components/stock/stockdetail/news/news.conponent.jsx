import React, { useState, useEffect } from 'react';
import './news.styles.scss';

const News = (props) => {
    const { company } = props;
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        try {
            setLoading(true)
            fetch(`https://newsapi.org/v2/everything?q=${company}&pageSize=7&apiKey=${process.env.REACT_APP_API_NEWS_KEY}`)
                .then(res => res.json())
                .then(data =>  {
                    setNews(data)
                    setLoading(false)
                })
        } catch (err) {
            return err
        }
    }, []);

    const publicationDate = (date) => {
        let newDate = new Date(date);
        let now = new Date(Date.now());

        if(now.getFullYear() === newDate.getFullYear()) {
            if(now.getMonth() === newDate.getMonth()) {
                if(now.getDate() === newDate.getDate()) {
                    if(now.getHours() === newDate.getHours()) {
                        if(now.getMinutes() - newDate.getMinutes()) {
                            const diff = now.getSeconds() - newDate.getSeconds();
                            return `${diff}s`
                        } else {
                            const diff = now.getMinutes() - newDate.getMinutes();
                            return `${diff}m`
                        }
                    } else {
                        const diff = now.getHours() - newDate.getHours();
                        return `${diff}h`
                    }
                } else {
                    const diff = now.getDate() - newDate.getDate();
                    return `${diff}d`
                }
            } else {
                const diff = now.getMonth() - newDate.getMonth();
                return `${diff}m`
            }
        } else {
            const diff = now.getFullYear() - newDate.getFullYear();
            return `${diff}y`
        }
    }


    const formatArticles = () => {
        let articles = Object.assign([], news.articles);
        
        return articles.map(article => {
            return(
                <a href={article.url} key={article.title}>
                    <div className="news-box">
                        <div className="news-description">
                            <div className="outlet-time">
                                <p className="article-source">{article.source.name}</p>
                                <p className="publication-date">{publicationDate(article.publishedAt)}</p>
                            </div>
                            <p className="article-title">{article.title}</p>
                        </div>

                        <div className="news-img-container">
                            <img src={article.urlToImage} />
                        </div>
                    </div>
                </a>
            );
        });
    }

    return(
        <div className="news-container">
            <h1>Recent News</h1>
            { news ? formatArticles() : <div></div> }
        </div>
    )
}

export default News;