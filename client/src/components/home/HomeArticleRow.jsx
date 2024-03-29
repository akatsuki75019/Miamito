import { REACT_APP_API_URL } from "@/constants";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardImage } from "../ui/card";

export default function HomeArticleRow() {
  const [Articles, setArticles] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await axios.get(`${REACT_APP_API_URL}/articles`);

      setArticles(response.data.slice(0, 2));
    };

    fetchArticles();
  }, []);

  return (
    <section className="container mt-24">
      <h1 className="text-3xl font-bold mb-10">Check some of our articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {Articles &&
          Articles.map((article) => (
            <div key={article.id}>
              <Link to={`/articles/${article.id}`}>
                <Card className="mb-4">
                  <CardImage
                    src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Article image"
                    className="rounded-t-xl"
                  />
                  <CardContent className="mt-3">
                    <p className="text-xs mb-2">on March 19, 2024</p>
                    <p className="text-3xl font-semibold mb-1 text-primary">
                      {article.title}
                    </p>
                    <p>{article.content.substring(0, 300)}...</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
      </div>
    </section>
  );
}
