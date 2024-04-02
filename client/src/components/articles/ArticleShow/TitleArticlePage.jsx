import {
	BookmarkIcon,
	CalendarIcon,
	ChatBubbleIcon,
	PersonIcon,
	Share1Icon,
} from "@radix-ui/react-icons";

export default function TitleArticlePage({ article }) {
	return (
		<div className="mb-10 md:grid grid-cols-3 gap-24">
			<div className="flex justify-between md:hidden mb-12">
				<h1 className="text-4xl font-extrabold">ARTICLE</h1>
				<div className="flex gap-4 items-center">
					<BookmarkIcon className="h-8 w-8 hover:text-primary cursor-pointer" />
					<Share1Icon className="h-8 w-8 hover:text-primary cursor-pointer" />
				</div>
			</div>
			<div className="col-span-2 w-full">
				<h1 className="text-2xl md:text-3xl font-bold mb-4 ml-0.5">
					{article.title}
				</h1>
				<div className="flex flex-wrap gap-2 md:gap-5">
					<div className="flex gap-2 items-center">
						<PersonIcon className="h-5 w-5 text-primary" />
						<p className="font-medium">User n°{article.user_id}</p>
					</div>
					<div className="flex gap-2 items-center">
						<CalendarIcon className="h-5 w-5 text-primary" />
						<p className="font-medium">March 29, 2024</p>
					</div>
					<div className="flex gap-2 items-center">
						<ChatBubbleIcon className="h-5 w-5 text-primary" />
						<p className="font-medium">5 comments</p>
					</div>
					<div className="flex gap-1 items-center">
						<BookmarkIcon className="h-5 w-5 text-primary" />
						<p className="font-medium">17 saves</p>
					</div>
				</div>
			</div>
			<div className="hidden md:flex items-end gap-3">
				<BookmarkIcon className="h-10 w-10 hover:text-primary cursor-pointer" />
				<Share1Icon className="h-10 w-10 hover:text-primary cursor-pointer" />
			</div>
		</div>
	);
}
