import { useState } from "react";
import { useTheme } from "./theme-provider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
	const { setTheme } = useTheme();
	const [isDarkMode, setIsDarkMode] = useState(() => {
		// Récupère l'état du thème du localStorage lors de l'initialisation
		const savedTheme = localStorage.getItem("isDarkMode");
		return savedTheme ? JSON.parse(savedTheme) : false;
	});
	const toggleTheme = () => {
		const newIsDarkMode = !isDarkMode;
		setIsDarkMode(newIsDarkMode);
		// Stocke l'état du thème dans le localStorage
		localStorage.setItem("isDarkMode", JSON.stringify(newIsDarkMode));

		if (newIsDarkMode) {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	return (
		<div className="flex flex-col items-center space-y-2 mt-7">
			<Switch
				id="theme"
				checked={isDarkMode}
				onCheckedChange={toggleTheme}
				className="cursor-default"
			/>
			<Label htmlFor="theme" className="text-xs">
				{isDarkMode ? (
					<div className="flex items-center gap-1.5">
						Dark
						<Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
					</div>
				) : (
					<div className="flex items-center gap-1.5">
						Light
						<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
					</div>
				)}
			</Label>
		</div>
	);
}
