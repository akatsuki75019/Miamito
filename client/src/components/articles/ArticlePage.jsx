import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchArticle } from "../../services/articleService";

export default function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchCurrentArticle = async () => {
      const articleData = await FetchArticle(id);
      setArticle(articleData);
    };
    if (id) fetchCurrentArticle();
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
}
