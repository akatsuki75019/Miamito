import { importImage } from "../features/importImage";

export default function Team() {
	const images = importImage();

	return (
		<section className="w-full py-12 md:py-24 lg:py-32">
			<div className="container grid max-w-5xl px-4 gap-6 md:gap-8 lg:px-6 lg:grid-cols-2 xl:gap-10">
				<div className="flex flex-col justify-center space-y-4">
					<div className="space-y-2">
						<h1 className="max-w-[500px] text-3xl font-extrabold tracking-tighter md:text-5xl lg:text-6xl/relaxed xl:text-7xl/relaxed">
							Meet the people behind the platform.
						</h1>
						<p className="max-w-[500px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
							We're a diverse team of passionate individuals dedicated to
							empowering innovation.
						</p>
					</div>
				</div>
				<div className="grid gap-6 md:gap-8">
					<div className="flex flex-col gap-1">
						<img
							alt="Team Member"
							className="rounded-full overflow-hidden ring-1 ring-gray-200/50"
							height="150"
							src={images.bubbs}
							style={{
								aspectRatio: "150/150",
								objectFit: "cover",
							}}
							width="150"
						/>
						<div className="flex flex-col gap-1">
							<h3 className="text-xl font-semibold">Axel Courtois</h3>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Product Manager
							</p>
						</div>
						<p className="text-sm text-gray-500 dark:text-gray-400">
							Axel is passionate about creating user-centric products that
							delight customers. He's an advocate for agile methodologies and
							cross-functional collaboration.
						</p>
					</div>
					<div className="flex flex-col gap-1">
						<img
							alt="Team Member"
							className="rounded-full overflow-hidden ring-1 ring-gray-200/50"
							height="150"
							src={images.sam}
							style={{
								aspectRatio: "150/150",
								objectFit: "cover",
							}}
							width="150"
						/>
						<div className="flex flex-col gap-1">
							<h3 className="text-xl font-semibold">Sam Alizadeh</h3>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Software Engineer
							</p>
						</div>
						<p className="text-sm text-gray-500 dark:text-gray-400">
							Sam is a problem solver with a passion for elegant code. He loves
							tackling technical challenges and learning new technologies.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
