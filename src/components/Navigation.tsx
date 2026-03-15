import { menuItems } from "../constants";
import logo from "../assets/images/logo.png";
import logoMobile from "../assets/images/logo-mobile.png";
import { useMediaQuery } from "react-responsive";
import chevronRight from "../assets/icons/chevronRight.svg";
import menu from "../assets/icons/menu.svg";
import close from "../assets/icons/close.svg";
import { useState } from "react";

export default function Navigation() {
	const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="relative flex items-center justify-between p-4 lg:px-20">
			{/* Logo */}
			<img
				src={isLargeScreen ? logo : logoMobile}
				alt="Logo"
				className="w-10 lg:w-[226.7px]"
			/>
			<div className="flex justify-center items-center ">
				{/* Navigation */}
				{(isLargeScreen || isOpen) && (
					<nav
						className={`top-full left-0 w-full absolute z-20 lg:static  lg:block bg-white ${
							isOpen ? "h-dvh pt-10 " : "hidden"
						}`}
					>
						<ul className="flex flex-col lg:flex-row gap-4 ">
							{menuItems.map((item) => (
								<li key={item.name}>
									<a
										href={item.to}
										className="text-textColor font-medium text-lg lg:text-sm py-12 lg:py-2 px-3"
									>
										{item.name}
									</a>
								</li>
							))}
						</ul>
					</nav>
				)}
				<div className="flex gap-2">
					<button className="btn-gradient btn-gradient:hover w-full">
						<span className="text-sm font-medium text-white">
							Demander une démo
						</span>
						<img src={chevronRight} alt="chevronRight" className="w-[4.67px]" />
					</button>

					{/* Mobile menu button */}
					{!isLargeScreen && (
						<button onClick={() => setIsOpen((prev) => !prev)}>
							<img src={isOpen ? close : menu} alt="menuIcon" className="w-10 " />
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
