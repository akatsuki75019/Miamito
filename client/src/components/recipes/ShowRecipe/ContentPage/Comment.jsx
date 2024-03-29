import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Comment() {
	return (
		<div className="grid gap-6">
			<div>
				<h2 className="text-2xl font-bold">Comments</h2>
			</div>
			<div className="grid gap-4">
				<div className="grid gap-0.5">
					<div className="font-semibold text-primary">Alice</div>
					<p className="text-sm text-gray-500 dark:text-gray-400">2 days ago</p>
				</div>
				<p>
					Your recipe is amazing! I tried making it for my family and everyone
					loved it. Thank you for sharing this with us.
				</p>
			</div>
			<div className="grid gap-4">
				<div className="grid gap-0.5">
					<div className="font-semibold text-primary">Bob</div>
					<p className="text-sm text-gray-500 dark:text-gray-400">4 days ago</p>
				</div>
				<p>
					I found this recipe very easy to follow, even for a beginner like me.
					The dish looked professional and tasted delicious. I will definitely
					try more of your recipes in the future!
				</p>
			</div>
			<div className="grid gap-4">
				<div className="grid gap-0.5">
					<div className="font-semibold text-primary">David</div>
					<p className="text-sm text-gray-500 dark:text-gray-400">
						2 weeks ago
					</p>
				</div>
				<p>
					I followed your recipe step by step, but my dish didn't look as
					appetizing as yours. Could I have missed something? Maybe my cooking
					temperature was too high?
				</p>
			</div>
			<div className="grid gap-4">
				<div className="grid gap-0.5">
					<div className="font-semibold text-primary">Ella</div>
					<p className="text-sm text-gray-500 dark:text-gray-400">
						3 weeks ago
					</p>
				</div>
				<p>
					I loved your recipe! It was so delicious that I had to hide the rest
					of the cake so that my family wouldn't eat it all at once. Thank you
					for this wonderful recipe!
				</p>
			</div>
			<div className="grid gap-4">
				<div className="grid gap-0.5">
					<div className="font-semibold text-primary">Grace</div>
					<p className="text-sm text-gray-500 dark:text-gray-400">
						2 months ago
					</p>
				</div>
				<p>
					I tried your cheesecake recipe, and it was amazing! It was my first
					attempt at cheesecake, and it came out perfectly creamy with a golden
					crust. Thank you for the clear and easy-to-follow instructions!
				</p>
			</div>
			<div className="border-t border-gray-200 dark:border-gray-800">
				<form className="pt-5 grid gap-4">
					<div className="grid gap-1.5">
						<Label htmlFor="comment-2">Your comment</Label>
						<Textarea
							className="min-h-[100px]"
							id="comment-2"
							placeholder="Share your thoughts on the recipe."
						/>
					</div>
					<div className="flex justify-end gap-4">
						<Button type="submit" className="px-4">
							Submit
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}
