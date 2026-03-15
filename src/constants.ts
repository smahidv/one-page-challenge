import shop from "./assets/icons/shop.svg"
import QR from "./assets/icons/QR.svg"
import collection from "./assets/icons/collection.svg"
import puzzle from "./assets/icons/puzzle.svg"
import gift from "./assets/icons/gift.svg"
import power from "./assets/icons/power.svg"
import heart from "./assets/icons/heart.svg"
import fan from "./assets/icons/fans.svg"
import analytics from "./assets/icons/analytics.svg"
import users from "./assets/icons/users.svg"
import config from "./assets/icons/configuration.svg"
import ring from "./assets/icons/ring.svg"
import download from "./assets/icons/download.svg"
import global from "./assets/icons/global.svg"
import cloud from "./assets/icons/cloud.svg"
import up from "./assets/icons/up.svg"
import star from "./assets/icons/star.svg"
import support from "./assets/icons/support.svg"
import facebook from "./assets/icons/facebook.svg"
import x from "./assets/icons/x.svg"
import insta from "./assets/icons/insta.svg"
import linkedin from "./assets/icons/insta.svg"
import TombolaDigitale from "./assets/images/TombolaDigitale.png"
import QuizFootball from "./assets/images/QuizFootball.png"
import AlbumDigitale from "./assets/images/AlbumDigitale.png"
import Pronostics from "./assets/images/Pronostics.png"

export  const menuItems = [
    { name: "Nos offres", to: "#" },
    { name: "Nos jeux", to: "#" },
    { name: "Album 2025", to: "#" },
    { name: "À propos", to: "#" },
  ]

export const steps =[
  {icon:shop,title: "Achat produit",content:"Le client achète votre produiten magasin" },
  {icon:QR,title: "Scan QR Code",content:"Il scanne le code sur l'emballage" },
  {icon:collection,title: "Déblocage carte",content:"Une carte digitale est débloquée" },
  {icon:puzzle,title: "Collection",content:"Il complète sa collection" },
  {icon:gift,title: "Récompenses",content:"Participe aux tirages" },

]

export const offres = [
  {icon:power,title: "Engagement immédiat",content:"Chaque produit devient une opportunité de jeu" },
  {icon:heart,title: "Fidélisation naturelle",content:"Les clients reviennent pour compléter leur collection" },
  {icon:fan,title: "Viralité organique",content:"Les fans partagent et échangent entre eux" },
]

export const toutenun = [
  {icon:QR,title: "Générateur QR Codes",content:"Créez et téléchargez vos QR codes uniques en masse" },
  {icon:users,title: "CRM Participants",content:"Collectez et gérez vos participants avec segmentation avancée" },
  {icon:config,title: "Configuration jeux",content:"Paramétrez entièrement vos jeux : règles, lots, durée, visuels" },
  {icon:analytics,title: "Analytics temps réel",content:"Suivez vos KPIs : scans, conversions, engagement, ROI" },
  {icon:gift,title: "Gestion des lots",content:"Définissez vos récompenses et gérez les tirages au sort" },
  {icon:ring,title: "Notifications",content:"Envoyez des push, emails et SMS à vos participants" },
  {icon:download,title: "Export données",content:"Téléchargez vos données en CSV, Excel ou via API" },
  {icon:collection,title: "Multi-campagnes",content:"Gérez plusieurs campagnes simultanément" },
]

export const avantages = [
  {icon:users,title: "Utilisateurs",content:"De 1K à illimité" },
  {icon:QR,title: "QR Codes",content:"Volume adapté" },
  {icon:global,title: "Couverture",content:"Local à mondial" },
  {icon:collection,title: "Albums",content:"Standard ou custom" },
  {icon:cloud,title: "Infrastructure",content:"Cloud ou On-Premise" },

]

export const solutions = [
  {icon:power,title1: "Starter",title2:"Campagne locale",desri:"Idéal pour tester sur un marché",list:["Jusqu'à 1 000 utilisateurs","Jusqu'à 10K QR codes","1 pays / région","Album standard (équipe nationale)","Hébergement Cloud sécurisé","Backoffice simplifié","Support par email","1 marque"],btn:"Demander un devis" },
  {icon:up,title1: "Scale",title2:"Expansion nationale",desri:"Pour des campagnes d'envergure",list:["Jusqu'à 50 000 utilisateurs","QR codes illimités","Multi-pays (jusqu'à 5)","Album complet (toutes les équipes)","Cloud ou On-Premise","Backoffice avancé avec analytics","Support prioritaire 24/7","Jusqu'à 3 marques","API REST disponible"],btn:"Planifier une démo",ispopulaire:true },
  {icon:global,title1: "Enterprise",title2:"Solution globale",desri:"Pour les groupes internationaux",list:["Utilisateurs illimités","QR codes illimités","Déploiement mondial","Albums personnalisés par région","Infrastructure dédiée (On-Premise)","Multi-marques illimité","Développements sur-mesure","Account manager dédié","SLA garanti 99.9%","Formation et onboarding complet"],btn:"Contactez-nous" },


]

export const catalogue=[
  {url:AlbumDigitale,title:"Album Digital 2025",description:"Collection de cartes avec échanges et défis.",status:"star"},
  {url:QuizFootball,title:"Quiz Football",description:"Questions sur l'actualité et l'histoire du foot.",status:"BIENTÔT"},
  {url:TombolaDigitale,title:"Tombola digitale",description:"Tirages au sort avec lots sponsorisés."},
  {url:Pronostics,title:"Pronostics",description:"Prédictions de matchs et classements."},


]

export const features =[
  {icon:up,title:"500K+",description:"Interactions mensuelles"},
  {icon:users,title:"50+",description:"Marques partenaires"},
  {icon:star,title:"98%",description:"Taux de satisfaction"},
  {icon:support,title:"24/7",description:"Support technique"},

]

export const socials=[facebook,x,insta,linkedin]