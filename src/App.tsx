import Navigation from "./components/Navigation";
import HeroImg from "./assets/images/heroImage.png";
import Football from "./assets/images/football.png";
import {
	avantages,
	catalogue,
	features,
	menuItems,
	offres,
	socials,
	solutions,
	steps,
	toutenun,
} from "./constants";
import logo from "./assets/images/logo.png";
import chevronRight from "./assets/icons/chevronRight.svg";
import Idea from "./assets/icons/idea.svg";
import checkCircle from "./assets/icons/checkcircle.svg";
import phone from "./assets/icons/phone.svg";
import collection from "./assets/icons/collection.svg";
import gift from "./assets/icons/gift.svg";
import analytics from "./assets/icons/analytics.svg";
import setting from "./assets/icons/setting.svg";
import borderb from "./assets/images/borderbottomforproduct.png";
import plan from "./assets/icons/planWHite.svg";
import check from "./assets/icons/check.svg";
import letter from "./assets/icons/letter.svg";
import security from "./assets/icons/security.svg";
import chevrongreen from "./assets/icons/chevrongreen.png";
import link from "./assets/icons/link.svg";
import planred from "./assets/icons/planred.svg";

export default function App() {
	return (
		<div>
			<header>
				<Navigation />
			</header>
			<main>
				{/* Hero Section */}
				<section className=" hero-bg  lg:flex lg:justify-center gap-8 p-5  lg:py-[127px] lg:px-[96px]">
					<div className="max-w-[1247.99px]  ">
						<h1 className="text-center lg:text-left font-bold text-4xl pt-10 pb-4 lg:pb-[32px] leading-9 lg:text-7xl text-textDark">
							Transformez chaque{" "}
							<span className="relative inline-block">
								<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
									produit
								</span>

								<img
									src={borderb}
									alt="border bottom"
									className="absolute left-0 -bottom-1.5 lg:bottom-[-20px] w-full"
								/>
							</span>{" "}
							en expérience de jeu
						</h1>
						<p className="text-lightGray text-lg lg:text-2xl lg:py-8 text-center lg:text-left">
							YouCanWin connecte vos marques aux fans de football à travers des
							mécaniques de gamification innovantes.
							<span className="text-textDark">
								Codes QR, cartes digitales, défis et récompenses.
							</span>{" "}
						</p>
						<div className="py-8 grid grid-cols-3 max-w-[600px] justify-center lg:justify-start gap-8">
							<div className="text-center lg:text-left">
								<div className="font-bold text-secondary text-2xl lg:text-4xl">
									500K+
								</div>
								<div className="font-medium text-lightGray text-xs lg:text-sm ">
									Interactions/mois
								</div>
							</div>
							<div className="text-center lg:text-left">
								<div className="font-bold text-redDark text-2xl lg:text-4xl">
									50+
								</div>
								<div className="font-medium text-lightGray text-xs lg:text-sm">
									Marques actives
								</div>
							</div>
							<div className="text-center lg:text-left">
								<div className="font-bold text-secondary text-2xl lg:text-4xl">
									x3.5
								</div>
								<div className="font-medium text-lightGray text-xs lg:text-sm">
									ROI moyen
								</div>
							</div>
						</div>
						<div className="flex flex-col sm:flex   gap-4 justify-center items-center lg:justify-start pb-8 lg:pb-12">
							<button className="btn-gradient px-6 py-3 ">
								{" "}
								<span className="text-sm font-medium text-white">
									Voir la démo
								</span>{" "}
								<img
									src={chevronRight}
									alt="chevronRightIcon"
									className="w-[4.67px]"
								/>
							</button>
							<button className="border-[#CBD5E1]   border-2 lg:px-9 rounded-lg px-4 py-3  flex items-center gap-2 whitespace-nowrap">
								<img src={Idea} alt="ideaIcon" />
								<span className="text-sm font-medium text-textColor">
									Comment ça marche
								</span>
							</button>
						</div>
						<div className="border-t border-[#E2E8F0] pt-8">
							<h2 className="uppercase  text-xs text-[#64748B] font-medium pb-2 lg:pb-4">
								Ils nous font confiance
							</h2>
							<ul className="flex gap-4 lg:gap-8 ">
								<li className="font-medium capitalize text-[#94A3B8] text-sm">
									Maroc Telecom
								</li>
								<li className="font-medium capitalize text-[#94A3B8] text-sm">
									inwi
								</li>
								<li className="font-medium capitalize text-[#94A3B8] text-sm">
									orange
								</li>
								<li className="font-medium capitalize text-[#94A3B8] text-sm">
									Carrefour
								</li>
							</ul>
						</div>
					</div>
					<img
						src={HeroImg}
						alt="hero Image "
						className="w-[576px] pt-6 lg:pt-0"
					/>
				</section>
				{/* sub hero*/}
				<section className="bg-grayGradient lg:flex  lg:justify-center py-10 lg:py-20 px-5 lg:px-[96px] lg:gap-16">
					<div className="max-w-[1247.99px] ">
						<h2 className="h2green">
							<img src={checkCircle} alt="checkCircle" />
							<span>Solution complète</span>
						</h2>
						<h3>Le terrain de jeu digital de votre marque</h3>
						<p className="text-lightGray text-lg lg:text-2xl lg:pb-8 py-4 ">
							YouCanWin transforme vos produits en expériences interactives.
							Chaque achat devient une opportunité d'engagement avec vos
							consommateurs.
						</p>
						<div className="space-y-4 pb-6 lg:pb-8">
							<div className="flex gap-3 lg:gap-4  items-center">
								<div className="p-2.5 rounded-lg bg-[#F0FDF4] w-fit">
									<img src={phone} className="w-2.5" alt="phoneIcon" />
								</div>
								<div>
									<h4 className="font-semibold text-textDark ">
										Activation instantanée
									</h4>
									<p className="text-sm text-lightGray">
										QR codes uniques sur chaque produit
									</p>
								</div>
							</div>
							<div className="flex gap-3 lg:gap-4 items-center ">
								<div className="p-2.5 rounded-lg bg-[#F0FDF4] w-fit">
									<img src={collection} alt="colletionIcon" />
								</div>
								<div>
									<h4 className="font-semibold text-textDark ">
										Collection digitale
									</h4>
									<p className="text-sm text-lightGray">
										Cartes de joueurs, raretés, échanges
									</p>
								</div>
							</div>
							<div className="flex gap-3 lg:gap-4  items-center">
								<div className="p-2.5 rounded-lg bg-[#F0FDF4] w-fit">
									<img src={gift} alt="giftIcon" />
								</div>
								<div>
									<h4 className="font-semibold text-textDark ">
										Récompenses exclusives
									</h4>
									<p className="text-sm text-lightGray">
										Tirages au sort, lots partenaires, expériences VIP
									</p>
								</div>
							</div>
							<div className="flex gap-3 lg:gap-4 items-center">
								<div className="p-2.5 rounded-lg bg-[#F0FDF4] w-fit">
									<img src={analytics} alt="analyticsIcon" />
								</div>
								<div>
									<h4 className="font-semibold text-textDark ">
										Analytics avancés
									</h4>
									<p className="text-sm text-lightGray">
										Dashboard temps réel, insights consommateurs
									</p>
								</div>
							</div>
						</div>
						<button className="bg-[#DC2626] hover:opacity-90 rounded-lg flex gap-2.5 px-6 py-3 mb-10 lg:mb-0">
							<span className="text-white text-sm lg:text-base">
								Planifier une démo
							</span>
							<img src={plan} alt="plan icon" />
						</button>
					</div>
					<div className="lg:px-[72px] lg:-order-1 max-w-[50%]">
						<img src={Football} className="lg:-order-1 lg:w-[448px] min-w-[300px] max-w-full lg:max-w-[448px]" />
					</div>
				</section>
				{/* parcours */}
				<section className="lg:py-20 lg:px-[96px] px-4 py-10 text-center r">
					<div className=" ">
						<h3>Un parcours client simple et engageant</h3>
						<p className="text-lightGray text-lg lg:text-2xl lg:pb-16 py-4 pb-10 ">
							De l'achat du produit à la récompense, en 5 étapes
						</p>
						<div className="grid lg:grid-cols-5 justify-center  gap-8 ">
							{steps.map((item, index) => (
								<div
									key={index}
									className="relative  text-center  w-[70dvw] lg:w-auto"
								>
									<div
										className={`${item.red ? "bg-[#DC2626]" : "bg-primary"}  absolute top-0 right-0 translate-x-1/2 -translate-y-1/2  w-8 h-8 rounded-full flex items-center justify-center font-bold text-white`}
									>
										{index + 1}
									</div>
									<div
										className={`${item.red ? "border-[#FECACA]" : "border-[#BBF7D0]"} border-2 rounded-2xl p-5 shadowBorder w-fit mx-auto mb-4`}
									>
										<img src={item.icon} alt={item.title} />
									</div>
									<h4 className="font-semibold text-dark">{item.title}</h4>
									<p className="text-lightGray text-sm">{item.content}</p>
								</div>
							))}
						</div>
					</div>
				</section>
				{/* solution */}
				<section className="bgGreenGradient py-10 lg:py-20 px-5 lg:px-[96px] text-center lg:flex lg:justify-center ">
					<div className="max-w-[1247.99px]">
						<h3 className="text-white">
							Transformez vos ventes en expérience mémorable
						</h3>
						<p className="text-[#F0FDF4]  lg:text-2xl lg:pb-8 py-4 ">
							YouCanWin offre à vos clients plus qu'un produit : une expérience
							interactive complète autour du football
						</p>
						<div className="grid lg:grid-cols-3 gap-6 justify-center ">
							{offres.map((item, index) => (
								<div
									key={index}
									className="p-8 sm:max-w-[50vw] text-center rounded-2xl grid justify-center items-center backdrop-blur bg-white/10"
								>
									<div className="p-5 rounded-xl flex justify-center mx-auto  backdrop-blur bg-white/20  w-fit">
										<img src={item.icon} alt={item.title} />
									</div>
									<h4 className="pt-4 py-2 font-semibold text-white lg:text-[20px]">
										{item.title}
									</h4>
									<p className="text-[#F0FDF4] text-sm lg:text-base">{item.content}</p>
								</div>
							))}
						</div>
					</div>
				</section>
				{/* backoffice */}
				<section className="bg-grayGradient py-10 lg:py-20 px-5 lg:px-[96px] text-center lg:flex  lg:justify-center">
					<div className="max-w-[1247.99px]">
						<h2 className="h2green w-fit mx-auto ">
							<img src={setting} alt="settingIcon" />
							<span>Backoffice tout-en-un</span>
						</h2>
						<h3>Gérez tout depuis une interface unique</h3>
						<p className="text-lightGray text-lg py-4 ">
							Notre backoffice intuitif vous permet de créer, configurer et
							piloter vos campagnes en toute autonomie
						</p>
						<div className="grid lg:grid-cols-4 gap-8 py-6 lg:py-12 justify-center ">
							{toutenun.map((item, index) => (
								<div
									key={index}
									className="sm:max-w-[50vw] bg-white border-[#E2E8F0] border-1 p-6 rounded-xl"
								>
									<div className="bg-[#F0FDF4] p-3 rounded-lg w-fit mx-auto mb-4">
										<img src={item.icon} alt={item.title} />
									</div>
									<h4 className="font-semibold text-textDark mb-2 ">
										{item.title}
									</h4>
									<p className="text-sm text-lightGray">{item.content}</p>
								</div>
							))}
						</div>
						<button className="w-fit mx-auto bg-primary hover:opacity-90 rounded-lg flex gap-2.5 px-6 py-3 mb-10 lg:mb-0">
							<span className="text-white text-sm lg:text-base">
								Demander un accès au backoffice
							</span>
							<img src={chevronRight} alt="chevronRigh icon" />
						</button>
					</div>
				</section>
				{/* avantages */}
				<section>
					<div className="p-12 grid grid-cols-2 lg:grid-cols-5 gap-6 justify-center items-center text-center align-items-center">
						{avantages.map((item, index) => (
							<div key={index} className="grid justify-center items-center">
								<div className="bg-[#F0FDF4] p-3 rounded-lg w-fit mb-4 mx-auto">
									<img src={item.icon} alt={item.title} />
								</div>
								<h4 className="font-semibold text-textDark mb-2 ">
									{item.title}
								</h4>
								<p className="text-xs text-lightGray">{item.content}</p>
							</div>
						))}
					</div>
				</section>
				{/* catalogue */}
				<div className="bg-grayLightGradient">
					<section className=" py-10 lg:py-20 px-5 lg:px-[96px] grid justify-center items-center text-center">
						<h3 className="pb-4">Des formules adaptées à votre échelle</h3>
						<p className="text-lg text-lightGray">
							Choisissez la solution qui correspond à vos besoins et votre
							ambition
						</p>
						<div className="pt-12 grid lg:grid-cols-3 lg:gap-8 gap-14 text-left ">
							{solutions.map((item, index) => (
								<div
									key={index}
									className={`relative ${item.ispopulaire ? "shadowPopular border-[#FECACA]" : "border-[#E2E8F0]"}  border rounded-2xl p-8 bg-white`}
								>
									{item.ispopulaire && (
										<div className="absolute rounded-[9999px] left-1/2 -translate-x-1/2 -translate-y-1/2  top-0 px-4 py-1.5 bg-redGradient">
											<span className=" font-semibold text-white text-sm">
												POPULAIRE
											</span>
										</div>
									)}
									<div
										className={`p-3 rounded-lg w-fit mb-4 mx-auto ${
											item.ispopulaire ? "bg-white" : "bg-[#F0FDF4]"
										}`}
									>
										<img src={item.icon} alt={item.title1} />
									</div>
									<h4 className="pt-4 py-2 font-semibold text-textDark text-[20px]">
										{item.title1}
									</h4>
									<h5 className="text-primary font-medium text-sm mb-4">
										{item.title2}
									</h5>
									<p className="text-lightGray mb-6">{item.desri}</p>
									<div className="border-t border-b py-4 border-[#F1F5F9] text-[#64748B] text-sm">
										Tarification sur mesure selon vos volumes
									</div>
									<div className="py-4 space-y-3">
										{item.list.map((listItem, index) => (
											<div key={index} className="flex gap-2">
												<img src={check} alt="check icon" />
												<span className="text-lightGray text-sm">
													{listItem}
												</span>
											</div>
										))}
									</div>
									<button
										className={` ${item.ispopulaire ? "bg-[#DC2626] text-white" : "bg-white text-textColor "} hover:opacity-90 w-full rounded-lg border-[#CBD5E1] border py-[11px] text-center font-medium`}
									>
										{item.btn}
									</button>
								</div>
							))}
						</div>
					</section>
					<section className="py-10 lg:py-20 px-5 lg:px-[96px] text-center lg:flex  lg:justify-center">
						<div className="max-w-[1247.99px]">
						<h3>Catalogue de jeux</h3>
						<p className="text-lightGray text-lg lg:pb-10 py-4 ">
							Des mécaniques éprouvées pour engager vos audiences
						</p>
						<div className="grid lg:grid-cols-4 gap-4 justify-center">
							{catalogue.map((item, index) => (
														<div
									key={index}
									className="relative border-[#E2E8F0] border rounded-2xl max-w-[876px] "
								>
									{item.status && <div className={`${item.status === "star" ? "bgGreenGradient" : "bg-[#475569]"} pb-1 pt-0 px-3 absolute top-0 right-0 rounded-bl-xl rounded-tr-2xl` }>
										<span className="text-white text-xs font-semibold">
											{item.status}
										</span>
									</div>}
									<img
										className="rounded-2xl"
										src={item.url}
										alt="item.title"
									/>
									<div className="p-6 text-left">
										<h4 className="text-textDark font-semibold mb-2">
											{item.title}
										</h4>
										<p className="mb-2 text-sm">{item.description}</p>
										{item.status == "star" && (
											<div className="flex gap-3.5 items-center">
												<span className="text-primary text-sm font-medium">
													Découvrir
												</span>
												<img
													src={chevrongreen}
													alt="chevron green"
													className="!w-[5px] !h-[9.33px]"
												/>
											</div>
										)}
									</div>
								</div>
							))}
						</div>
						</div>
					</section>
				</div>
				<section>
					<div className="border-t border-b border-[#E5E7EB]  grid lg:grid-cols-4  gap-8 py-[65px] px-[96px] ">
						{features.map((item, index) => (
							<div key={index} className="text-center">
								<img
									src={item.icon}
									alt={item.title}
									className="w-fit mx-auto !size-[32px]"
								/>
								<h4 className="mt-2 font-bold text-textDark text-[30px]">
									{item.title}
								</h4>
								<p className="text-lightGray">{item.description}</p>
							</div>
						))}
					</div>
				</section>
				{/* call to action */}
				<section className="bg-redGradient ">
					<div className="py-10 lg:py-20 px-4 lg:px-[96px] w-fit mx-auto text-center">
						<h3 className="text-white">Prêt à transformer votre marketing ?</h3>
						<p className="text-[#F0FDF4]  lg:text-2xl lg:pb-8 py-4 ">
							Rejoignez les marques qui engagent leurs fans avec YouCanWin
						</p>
						<div className="grid lg:flex gap-4 justify-center items-center">
							<button className=" shadowBorder rounded-lg bg-white py-[18.5px] px-[34px] flex gap-2 justify-center items-center">
								<img src={planred} alt="plan icon" />
								<span className="text-redDark font-medium lg:text-base text-sm">
									Planifier une démo gratuite
								</span>
							</button>
							<button className="hover:opacity-90 backdrop-blur bg-white/10 rounded-lg border-2 border-[#FFFFFF4D] py-[18.5px] px-[34px]  flex gap-2 justify-center items-center">
								<img src={letter} alt="letter" />
								<span className="text-white font-medium lg:text-base text-sm">Nous contacter</span>
							</button>
						</div>
					</div>
				</section>
			</main>
			<footer className="lg:px-20 lg:py-12 py-10 px-5">
				<div className="lg:flex lg:gap-8  pb-8 border-b border-[#E5E7EB] ">
					<div className="basis-1/2 mb-10 lg:mb-0">
						<img src={logo} alt="logo" className="w-[144px]" />
						<p className="py-3 text-sm text-lightGray max-w-[608px]">
							Plateforme de jeux digitaux pour engager vos communautés autour du
							football. Un service d'Agency.Africa.
						</p>
						<div className="flex gap-3 justify-start">
							{socials.map((item, index) => (
								<div key={index} className="bg-[#E2E8F0] rounded-lg py-2 px-3 w-fit">
									<img src={item} alt="socialMedia"  />
								</div>
							))}
						</div>
					</div>
					<div className="basis-1/2 lg:flex lg:justify-between w-full lg:gap-8">
						<div className="mb-10 lg:mb-0">
							<h4 className="font-semibold text-textDark mb-3">
								Liens rapides
							</h4>
							<ul className="space-y-2">
								{menuItems.map((item) => (
									<li key={item.name}>
										<a href={item.to} className="text-sm text-lightGray">
											{item.name}
										</a>
									</li>
								))}
							</ul>
						</div>
						<div>
							<h4 className="font-semibold text-textDark mb-3">
								Contact & Légal
							</h4>
							<ul className="space-y-2">
								<li className="text-sm text-lightGray">games@agency.africa</li>
								<li className="text-sm text-lightGray">
									<a href="#">Mentions légales</a>
								</li>
								<li className="text-sm text-lightGray">
									<a
										href="#"
										className="flex items-center  gap-1"
									>
										Protection des données (CNDP)
										<span>
											{" "}
											<img src={link} alt="link icon" />
										</span>
									</a>
								</li>
								<li className="text-sm text-lightGray">
									<a href="#">Conditions d'utilisation</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="lg:flex lg:justify-between pt-8 pb-6 text-center">
					<p className="text-lightGray text-sm">
						© 2025 Youcanwin. Tous droits réservés.
					</p>
					<p className="text-lightGray text-sm">
						Un service de <span className="text-secondary font-semibold">Agency.Africa</span>{" "}
						— games.agency.africa
					</p>
				</div>
				<div className="h2green border-[#BBF7D0] border w-fit mx-auto">
					<img src={security} alt="security Icon" />
					<span>Site conforme CNDP Maroc</span>
				</div>
			</footer>
		</div>
	);
}
