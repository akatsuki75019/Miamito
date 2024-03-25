import { getRecipeSummary } from "@/services/recipeService";
import { Dialog, DialogClose, DialogPortal } from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

function RecipeModal({ isOpen, onClose, recipeId }) {
  const [recipeSummary, setRecipeSummary] = useState({});
  const [recipteTitle, setRecipeTitle] = useState("");

  useEffect(() => {
    async function fetchSummary() {
      try {
        let response;
        const storedSummary = localStorage.getItem(`recipeSummary-${recipeId}`);
        if (storedSummary) {
          response = JSON.parse(storedSummary);
        } else {
          response = await getRecipeSummary(recipeId);
          localStorage.setItem(
            `recipeSummary-${recipeId}`,
            JSON.stringify(response)
          );
        }
        if (response.summary) {
          const truncatedSummary = truncateHTML(response.summary, 650);
          setRecipeSummary(truncatedSummary);
        }
        if (response.title) {
          setRecipeTitle(response.title);
        }
      } catch (error) {
        console.error("Failed to fetch recipe summary:", error);
      }
    }
    fetchSummary();
  }, [recipeId]);

  function truncateHTML(html, maxLength) {
    return html.length > maxLength
      ? html.substring(0, maxLength) + "..."
      : html;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{recipteTitle}</DialogTitle>
          <div dangerouslySetInnerHTML={{ __html: recipeSummary }} />
        </DialogHeader>
        <DialogFooter>
          <DialogPortal>Cancel</DialogPortal>
          <DialogClose>
            <Link to={`/recipe/${recipeId}`}>Continue</Link>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default RecipeModal;
