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

export default function App() {
	return (
		<div>
			<header>
				<Navigation />
			</header>
			<main>
				<section className="hero-bg lg:flex gap-8 p-4 lg:py-[127px] lg:px-[96px]">
					<div>
						<h1 className="text-center lg:text-left font-bold text-4xl pt-10 pb-3 lg:pb-[32px] leading-9 lg:text-7xl text-textDark">
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
						<div className="py-8 grid grid-cols-3 justify-center lg:justify-start gap-8">
							<div className="text-center lg:text-left">
								<div className="font-bold text-secondary text-2xl lg:text-4xl">
									500K+
								</div>
								<div className="font-medium text-lightGray text-xs lg:text-sm ">
									Interactions/mois
								</div>
							</div>
							<div>
								<div className="font-bold text-redDark text-2xl lg:text-4xl">
									50+
								</div>
								<div className="font-medium text-lightGray text-xs lg:text-sm">
									Marques actives
								</div>
							</div>
							<div>
								<div className="font-bold text-secondary text-2xl lg:text-4xl">
									x3.5
								</div>
								<div className="font-medium text-lightGray text-xs lg:text-sm">
									ROI moyen
								</div>
							</div>
						</div>
						<div className="flex gap-4 justify-center items-center lg:justify-start pb-8 lg:pb-12">
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
							<button className="border-[#CBD5E1] border-2 lg:px-9 rounded-lg px-6 py-3  flex items-center gap-2 whitespace-nowrap">
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
				<section className="bg-grayGradient lg:grid grid-cols-2 py-10 lg:py-20 px-4 lg:px-[96px] lg:gap-16">
					<div>
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
					<div className="lg:px-[72px] lg:-order-1">
						<img src={Football} className="lg:-order-1 lg:w-[448px]" />
					</div>
				</section>
				<section className="lg:py-20 lg:px-[96px] px-4 py-10 text-center">
					<h3>Un parcours client simple et engageant</h3>
					<p className="text-lightGray text-lg lg:text-2xl lg:pb-16 py-4 pb-10 ">
						De l'achat du produit à la récompense, en 5 étapes
					</p>
					<div className="grid lg:grid-cols-5 gap-8 justify-center">
						{steps.map((item, index) => (
							<div
								key={index}
								className="relative  text-center  w-[70dvw] lg:w-auto"
							>
								<div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-primary w-8 h-8 rounded-full flex items-center justify-center font-bold text-white">
									{index + 1}
								</div>
								<div className="border-[#BBF7D0] border-2 rounded-2xl p-5 shadowBorder w-fit mx-auto mb-4">
									<img src={item.icon} alt={item.title} />
								</div>
								<h4 className="font-semibold text-dark">{item.title}</h4>
								<p className="text-lightGray text-sm">{item.content}</p>
							</div>
						))}
					</div>
				</section>
				<section className="bgGreenGradient py-10 lg:py-20 px-4 lg:px-[96px] ">
					<h3 className="text-white">
						Transformez vos ventes en expérience mémorable
					</h3>
					<p className="text-[#F0FDF4] text-lg lg:text-2xl lg:pb-8 py-4 ">
						YouCanWin offre à vos clients plus qu'un produit : une expérience
						interactive complète autour du football
					</p>
					<div className="lg:grid lg:grid-cols-3 gap-6 ">
						{offres.map((item, index) => (
							<div
								key={index}
								className="p-8 text-center rounded-2xl grid justify-center items-center backdrop-blur bg-white/10"
							>
								<div className="p-5 rounded-xl flex justify-center mx-auto  backdrop-blur bg-white/20  w-fit">
									<img src={item.icon} alt={item.title} />
								</div>
								<h4 className="pt-4 py-2 font-semibold text-white text-[20px]">
									{item.title}
								</h4>
								<p className="text-[#F0FDF4]">{item.content}</p>
							</div>
						))}
					</div>
				</section>
				<section className="bg-grayGradient py-10 lg:py-20 px-4 lg:px-[96px] ">
					<h2 className="h2green">
						<img src={setting} alt="settingIcon" />
						<span>Backoffice tout-en-un</span>
					</h2>
					<h3>Gérez tout depuis une interface unique</h3>
					<p className="text-lightGray text-lg py-4 ">
						Notre backoffice intuitif vous permet de créer, configurer et
						piloter vos campagnes en toute autonomie
					</p>
					<div className="grid lg:grid-cols-4 gap-8 py-6 lg:py-12  ">
						{toutenun.map((item, index) => (
							<div
								key={index}
								className="bg-white border-[#E2E8F0] border-1 p-6 rounded-xl"
							>
								<div className="bg-[#F0FDF4] p-3 rounded-lg w-fit mb-4">
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
				</section>
				<section className="flex justify-center items-center">
					<div className="p-12 lg:grid lg:grid-cols-5 gap-6 justify-center items-center text-center">
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
				<section className="py-10 lg:py-20 px-4 lg:px-[96px] grid justify-center items-center text-center">
					<h3 className="pb-4">Des formules adaptées à votre échelle</h3>
					<p className="text-lg text-lightGray">
						Choisissez la solution qui correspond à vos besoins et votre
						ambition
					</p>
					<div className="pt-12 lg:grid lg:grid-cols-3 gap-8 text-left ">
							{solutions.map((item, index) => (
								<div key={index}>
									<img src={item.icon} alt={item.title1} />
									<h4>{item.title1}</h4>
									<h5>{item.title2}</h5>
									<p>{item.desri}</p>
									<div className="border-t border-b">
										Tarification sur mesure selon vos volumes
									</div>
									<div>
										{item.list.map((listItem, index) => (
											<div key={index}>
												<span>icon</span>
												{listItem}
											</div>
										))}
									</div>
								</div>
							))}
					</div>
				</section>
				<section>
					<h3>Catalogue de jeux</h3>
					<p>Des mécaniques éprouvées pour engager vos audiences</p>
					<div>
						{catalogue.map((item, index) => (
							<div key={index} className="relative">
								<img src={item.url} alt="item.title" />
								<h4>{item.title}</h4>
								<p>{item.description}</p>
								<div>{item.status}</div>
							</div>
						))}
					</div>
				</section>
				<section className="lg:flex">
					<div>
						{features.map((item, index) => (
							<div key={index}>
								<img src={item.icon} alt={item.title} />
								<h4>{item.title}</h4>
								<p>{item.description}</p>
							</div>
						))}
					</div>
				</section>
				<section className="bg-redGradient py-10 lg:py-20 px-4 lg:px-[96px]">
					<h3 className="text-white">Prêt à transformer votre marketing ?</h3>
					<p className="text-[#F0FDF4] text-lg lg:text-2xl lg:pb-8 py-4 ">Rejoignez les marques qui engagent leurs fans avec YouCanWin</p>
					<div className="lg:flex">
						<button>Planifier une démo gratuite</button>
						<button>Nous contacter</button>
					</div>
				</section>
			</main>
			<footer>
				<div className="lg:flex">
					<div>
						<img src={logo} alt="logo" />
						<p>
							Plateforme de jeux digitaux pour engager vos communautés autour du
							football. Un service d'Agency.Africa.
						</p>
						<div className="flex">
							{socials.map((item, index) => (
								<div key={index}>
									<img src={item} alt="socialMedia" />
								</div>
							))}
						</div>
					</div>
					<div>
						<h4>Liens rapides</h4>
						<ul>
							{menuItems.map((item) => (
								<li key={item.name}>
									<a
										href={item.to}
										className="font-poppins font-bold text-[var(--text-color)]"
									>
										{item.name}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h4>Contact & Légal</h4>
						<ul>
							<li>games@agency.africa</li>
							<li>
								<a href="#">Mentions légales</a>
							</li>
							<li>
								<a href="#">
									Protection des données (CNDP) <span>icon</span>
								</a>
							</li>
							<li>
								<a href="#">Conditions d'utilisation</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="lg:flex">
					<p>© 2025 Youcanwin. Tous droits réservés.</p>
					<p>
						Un service de <span>Agency.Africa</span> — games.agency.africa
					</p>
				</div>
				<div>Site conforme CNDP Maroc</div>
			</footer>
		</div>
	);
}
