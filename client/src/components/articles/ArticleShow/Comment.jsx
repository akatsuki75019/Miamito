import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Comment() {
	const comments = [
		{
			name: "Bernard",
			date: "2 days ago",
			text: "Thank you for this detailed article. It was very thorough and covered all aspects of the topic. I appreciate the effort you put into writing and sharing it.",
		},
		{
			name: "Bob",
			date: "4 days ago",
			text: "I found this article to be very practical and useful. The tips and advice given are easy to implement and I'm sure they will make a big difference. Thank you for sharing your knowledge.",
		},
		{
			name: "Marie",
			date: "27 days ago",
			text: "I really enjoyed reading this article. The insights provided were very helpful and gave me a new perspective on the topic. Keep up the good work!",
		},
		{
			name: "Camille",
			date: "1 month ago",
			text: "Wow!",
		},
		{
			name: "Jean",
			date: "4 months ago",
			text: "I loved this article! It was very engaging and kept me interested from start to finish. The writing style was also very enjoyable to read.",
		},
	];

	return (
		<div className="grid gap-6">
			<div>
				<h2 className="text-2xl font-bold">Comments</h2>
			</div>
			{comments.map((comment, index) => (
				<div key={index} className="grid gap-4">
					<div className="grid gap-0.5">
						<div className="font-semibold text-primary">{comment.name}</div>
						<p className="text-sm text-gray-500 dark:text-gray-400">
							{comment.date}
						</p>
					</div>
					<p>{comment.text}</p>
				</div>
			))}
			<div className="border-t border-gray-200 dark:border-gray-800">
				<form className="pt-5 grid gap-4">
					<div className="grid gap-1.5">
						<Label htmlFor="comment-2">Your comment</Label>
						<Textarea
							className="min-h-[100px]"
							id="comment-2"
							placeholder="Share your thoughts on the article."
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
