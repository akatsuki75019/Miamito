import { Dialog } from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { getRecipeSummary } from "../../services/recipeService";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

function RecipeModal({ isOpen, onClose, meal }) {
  const imageUrl = `https://spoonacular.com/recipeImages/${meal.id}-312x231.${meal.imageType}`;
  const [recipeSummary, setRecipeSummary] = useState({});

  useEffect(() => {
    async function fetchSummary() {
      try {
        const response = await getRecipeSummary(meal.id);
        if (response.summary) {
          const recipeSummary = truncateHTML(response.summary, 100);

          setRecipeSummary(recipeSummary);
        }
      } catch (error) {
        console.error("Failed to fetch recipe summary:", error);
      }
    }
    fetchSummary();
  }, [meal.id]);

  function truncateHTML(html, maxLength) {
    return recipeSummary.length > maxLength
      ? recipeSummary.substring(0, maxLength) + "..."
      : recipeSummary;
  }
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Recipe overlook</DialogTitle>
          <DialogDescription
            dangerouslySetInnerHTML={{ __html: recipeSummary }}
          />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default RecipeModal;
