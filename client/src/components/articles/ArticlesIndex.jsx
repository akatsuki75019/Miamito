import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../constants";

const ArticlesIndex = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await axios.get(`${API_URL}/articles`);
      setArticles(response.data);
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </h2>
          <p>{article.content.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
};

export default ArticlesIndex;
