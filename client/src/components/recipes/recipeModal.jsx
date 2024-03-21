import { Dialog, DialogClose, DialogPortal } from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRecipeSummary } from "../../services/recipeService";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

function RecipeModal({ isOpen, onClose, recipeId }) {
  const imageUrl = `https://spoonacular.com/recipeImages/${recipeId}-312x231.${recipeId.imageType}`;
  const [recipeSummary, setRecipeSummary] = useState({});
  const [recipteTitle, setRecipeTitle] = useState("");

  useEffect(() => {
    async function fetchSummary() {
      try {
        const response = await getRecipeSummary(recipeId);
        if (response.summary) {
          const truncatedSummary = truncateHTML(response.summary, 150);
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
    // Ensure html is a string and then perform truncation
    return html.length > maxLength
      ? html.substring(0, maxLength) + "..."
      : html;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{recipteTitle}</DialogTitle>
          <div // Use a div here instead of DialogDescription
            dangerouslySetInnerHTML={{ __html: recipeSummary }}
          />
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
