import { menuItems } from "../constants";
import logo from "../assets/images/logo.png";
import logoMobile from "../assets/images/logo-mobile.png";
import { useMediaQuery } from "react-responsive";
import chevronRight from "../assets/icons/chevronRight.svg";
import menu from "../assets/icons/menu.svg";
import close from "../assets/icons/close.svg";
import { useEffect, useState } from "react";

export default function Navigation() {
	const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });
	const [isOpen, setIsOpen] = useState(false);
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
			document.body.style.height = "100dvh";
		} else {
			document.body.style.overflow = "";
			document.body.style.height = "";
		}

		return () => {
			document.body.style.overflow = "";
			document.body.style.height = "";
		};
	}, [isOpen]);

	return (
		<div className="relative flex items-center justify-between py-4 px-2 lg:px-20">
			{/* Logo */}
			<div className="flex gap-2 items-center">
				<img
					src={isLargeScreen ? logo : logoMobile}
					alt="Logo"
					className="w-10 lg:w-[168px]"
				/>
				{isLargeScreen && (
					<div className="bg-[#DCFCE7] rounded-full px-2 py-0.5 hover:opacity-90 inline-flex items-center justify-center">
						<span className="uppercase text-[10px] font-semibold text-secondary">
							games
						</span>
					</div>
				)}
			</div>
			<div className="flex justify-center items-center ">
				{/* Navigation */}
				{(isLargeScreen || isOpen) && (
					<nav
						className={`top-full left-0 w-full absolute z-20 lg:static lg:block bg-white ${
							isOpen ? "max-h-dvh h-dvh  pt-10 px-6" : "hidden"
						}`}
					>
						<ul className="flex flex-col lg:flex-row gap-2 lg:gap-4">
							{menuItems.map((item) => (
								<li
									key={item.name}
									className="lg:border-none border-b border-gray-100"
								>
									<a
										href={item.to}
										className="block text-textColor hover:text-primary font-medium text-lg lg:text-sm py-4 lg:py-2 px-3 rounded-md transition-all duration-300 hover:bg-gray-50"
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
							<img
								src={isOpen ? close : menu}
								alt="menuIcon"
								className="w-10 "
							/>
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
