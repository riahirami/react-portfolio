import htmlIcon from "../assets/html-icon.svg";
import cssIcon from "../assets/css-icon.svg";
import jsIcon from "../assets/js-icon.svg";
import nodeIcon from "../assets/node-icon.svg";
import reactIcon from "../assets/react-icon.svg";
import typescriptIcon from "../assets/typescript-icon.svg";
import muiIcon from "../assets/mui-icon.svg";
import boostrapIcon from "../assets/bootstrap-icon.svg";
import mysqlIcon from "../assets/mysql-icon.svg";
import vsCodeIcon from "../assets/vscode-icon.svg";
import androidstudioIcon from "../assets/androidstudio-icon.svg";
import bitbucketIcon from "../assets/bitbucket-icon.svg";
import dockerIcon from "../assets/docker-icon.svg";
import firebaseIcon from "../assets/firebase-icon.svg";
import gitIcon from "../assets/git-icon.svg";
import javaIcon from "../assets/java-icon.svg";
import jiraIcon from "../assets/jira-icon.svg";
import mongodbIcon from "../assets/mongodb-icon.svg";
import laravelIcon from "../assets/laravel-icon.svg";
import phpIcon from "../assets/php-icon.svg";
import reduxIcon from "../assets/redux-icon.svg";
import symfonyIcon from "../assets/symfony-icon.svg";
import xcodeIcon from "../assets/xcode-icon.svg";
import awsIcon from "../assets/aws-icon.svg";
import { IOptions, RecursivePartial } from "react-tsparticles";
import { Project } from "../models/Project";
import { images } from "./images";
export const TECHNOLOGIES_ICONS = [
  {
    src: boostrapIcon,
    width: 20,
    height: 20,
  },
  {
    src: cssIcon,
    width: 20,
    height: 20,
  },
  {
    src: htmlIcon,
    width: 20,
    height: 20,
  },
  {
    src: jsIcon,
    width: 20,
    height: 20,
  },
  {
    src: mysqlIcon,
    width: 20,
    height: 20,
  },
  {
    src: nodeIcon,
    width: 20,
    height: 20,
  },
  {
    src: reactIcon,
    width: 20,
    height: 20,
  },
  {
    src: typescriptIcon,
    width: 20,
    height: 20,
  },
  {
    src: vsCodeIcon,
    width: 20,
    height: 20,
  },
  {
    src: muiIcon,
    width: 20,
    height: 20,
  },
  {
    src: mysqlIcon,
    width: 20,
    height: 20,
  },
  {
    src: androidstudioIcon,
    width: 20,
    height: 20,
  },
  {
    src: bitbucketIcon,
    width: 20,
    height: 20,
  },
  {
    src: dockerIcon,
    width: 20,
    height: 20,
  },
  {
    src: firebaseIcon,
    width: 20,
    height: 20,
  },
  {
    src: gitIcon,
    width: 20,
    height: 20,
  },
  {
    src: javaIcon,
    width: 20,
    height: 20,
  },
  {
    src: jiraIcon,
    width: 20,
    height: 20,
  },
  {
    src: mongodbIcon,
    width: 20,
    height: 20,
  },
  {
    src: laravelIcon,
    width: 20,
    height: 20,
  },
  {
    src: phpIcon,
    width: 20,
    height: 20,
  },
  {
    src: reduxIcon,
    width: 20,
    height: 20,
  },
  {
    src: symfonyIcon,
    width: 20,
    height: 20,
  },
  {
    src: xcodeIcon,
    width: 20,
    height: 20,
  },
  {
    src: awsIcon,
    width: 20,
    height: 20,
  },
];

export const PARTICLES_OPTIONS: RecursivePartial<IOptions> | undefined = {
  fullScreen: {
    enable: true,
    zIndex: 1,
  },
  detectRetina: true,
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onDiv: {
        elementId: "repulse-div",
        enable: false,
        mode: "repulse",
      },
      onHover: {
        enable: true,
        mode: "bubble",
        parallax: {
          enable: false,
          force: 60,
          smooth: 10,
        },
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 2,
      },
      connect: {
        distance: 80,
        lineLinked: {
          opacity: 0.5,
        },
        radius: 60,
      },
      grab: {
        distance: 400,
        lineLinked: {
          opacity: 1,
        },
      },
      push: {
        quantity: 2,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    lineLinked: {
      blink: false,
      color: "#000",
      consent: false,
      distance: 150,
      enable: false,
      opacity: 0.4,
      width: 1,
    },
    move: {
      attract: {
        enable: false,
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      bounce: false,
      direction: "none",
      enable: true,
      outMode: "out",
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      limit: 20,
      value: 15,
    },
    opacity: {
      animation: {
        enable: true,
        minimumValue: 0.2,
        speed: 1,
        sync: false,
      },
      random: true,
      value: 1,
    },
    rotate: {
      animation: {
        enable: true,
        speed: 5,
        sync: false,
      },
      direction: "random",
      random: true,
      value: 0,
    },
    shape: {
      character: {
        fill: false,
        font: "Verdana",
        style: "",
        value: "*",
        weight: "400",
      },
      image: TECHNOLOGIES_ICONS,
      polygon: {
        sides: 5,
      },
      stroke: {
        color: "#000000",
        width: 0,
      },
      type: "image",
    },
    size: {
      animation: {
        enable: false,
        minimumValue: 0.1,
        speed: 40,
        sync: false,
      },
      random: false,
      value: 16,
    },
  },
  polygon: {
    draw: {
      enable: false,
      lineColor: "#ffffff",
      lineWidth: 0.5,
    },
    move: {
      radius: 10,
    },
    scale: 1,
    url: "",
  },
  background: {
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  },
};

export const FIRST_NAME = "Rami";
export const LAST_NAME = "Riahi";
export const FULLNAME = `${FIRST_NAME} ${LAST_NAME}`;
export const ROLE = "Web/Mobile Developer";
export const EXPERIENCE = "2 Years of Experience";
export const EMAIL = "";
export const LINKEDIN = "https://www.linkedin.com/in/rami-riahi/";
export const GITHUB = "https://github.com/riahirami";

export const HARD_SKILLS_ICONS = [
  { name: "jsIcon", icon: jsIcon },
  { name: "typescriptIcon", icon: typescriptIcon },
  { name: "reactIcon", icon: reactIcon },
  { name: "nodeIcon", icon: nodeIcon },
  { name: "htmlIcon", icon: htmlIcon },
  { name: "cssIcon", icon: cssIcon },
  { name: "boostrapIcon", icon: boostrapIcon },
  { name: "muiIcon", icon: muiIcon },
  { name: "mysqlIcon", icon: mysqlIcon },
  { name: "androidstudioIcon", icon: androidstudioIcon },
  { name: "bitbucketIcon", icon: bitbucketIcon },
  { name: "dockerIcon", icon: dockerIcon },
  { name: "firebaseIcon", icon: firebaseIcon },
  { name: "gitIcon", icon: gitIcon },
  { name: "javaIcon", icon: javaIcon },
  { name: "jiraIcon", icon: jiraIcon },
  { name: "laravelIcon", icon: laravelIcon },
  { name: "phpIcon", icon: phpIcon },
  { name: "reduxIcon", icon: reduxIcon },
  { name: "symfonyIcon", icon: symfonyIcon },
  { name: "xcodeIcon", icon: xcodeIcon },
  { name: "awsIcon", icon: awsIcon },
];

export const MY_DESCRIPTION = {
  first_paragraph: `Hi there! I'm Rami, a website developer with a passion for creating
    custom online experiences for my clients. With a skill set including
    HTML, CSS, JavaScript, and React, I have the tools to bring any
    website vision to life.`,
  second_paragraph: `But my services go beyond just custom development - I'm also
    proficient in using CMS systems like WordPress and Shopify, making
    it easy for my clients to take control of their own websites and
    keep them up to date.`,
  third_paragraph: `So if you're in need of a new website or just looking to revamp your
            current online presence, I'd love to chat and see how I can help.
            Let's bring your website dreams to reality together!`,
};

export const PROJECTS: Project[] = [
  {
    name: "Paruvendu",
    description: `Nouvelle version de l'application "Paruvendu", permet de rechercher parmi plus d'un million de petites annonces de particuliers et de professionnels. Permet de prendre contact directement avec les annonceurs pour vos recherches d'appartement, maison, voiture, moto, meubles, vêtements, objets, animaux ....`,
    technologies: [
      "React Native",
      "TypeScript",
      "Redux",
      "React hooks",
      "Fastlane",
    ],
    image: images.paruvendu,
    link: "https://play.google.com/store/apps/details?id=com.paruvendu&hl=fr",
    github: "",
    isDeployed: true,
  },
  {
    name: "ASC Client",
    description: `Une application mobile pour les clients de l'ASC, Cette application mobile est conçue pour répondre aux besoins des amateurs de sport, offrant une plateforme complète pour la gestion des services de coaching et l'interaction avec les entraineurs.

      L'application propose plusieurs fonctionnalités clés :
      
      Les sportifs peuvent choisir parmis les services offert par les entraineurs: coaching individuel, des exercices spécifiques et des programmes sportifs personnalisés.
      Les clients peuvent facilement contacter les entraîneurs via un système de messagerie instantanée intégré.
      Un calendrier interactif permet la réservation des différents services proposés par les entraîneurs, simplifiant ainsi la gestion des sessions de coaching.
      
      Avec son interface intuitive et ses fonctionnalités avancées, cette application vise à améliorer l'expérience des amateurs de sport et à faciliter le travail des entraîneurs professionnels en offrant une solution tout-en-un pour le coaching sportif.`,
    technologies: [
      "React Native",
      "TypeScript",
      "Redux",
      "React hooks",
      "Fastlane",
    ],
    image: images.ascClient,
    link: "https://play.google.com/store/apps/details?id=com.asctrainer.client&hl=fr",
    github: "",
    isDeployed: true,
  },
  {
    name: "ASC Coach",
    description: `Une application mobile conçue spécialement pour les entraîneurs, leur offrant une solution complète pour gérer tous les aspects de leur activité de coaching.

      Fonctionnalités principales :
      
      Gestion des services de coaching : Les entraîneurs peuvent créer et proposer leurs services de coaching individuel et de groupe, y compris des programmes personnalisés et des sessions d'entraînement spécifiques.
      Gestion de la disponibilité : Un calendrier interactif permet aux entraîneurs de définir et de gérer leurs disponibilités pour les sessions de coaching, simplifiant ainsi la prise de rendez-vous.
      Suivi des avis et revenus : Les entraîneurs peuvent consulter et suivre les avis de leurs clients, ainsi que leurs revenus générés par les sessions de coaching.
      Boutique de produits : Une fonctionnalité de boutique intégrée permet aux entraîneurs de vendre des produits liés à leur activité, tels que des équipements sportifs et des suppléments nutritionnels.
      
      Avec ASC Coach, les entraîneurs disposent d'un outil puissant pour optimiser leur activité, améliorer l'engagement des clients et accroître leurs revenus, le tout via une interface intuitive et conviviale.`,
    technologies: [
      "React Native",
      "TypeScript",
      "Redux",
      "React hooks",
      "Fastlane",
    ],
    image: images.ascCoach,
    link: "https://play.google.com/store/apps/details?id=com.asctrainer.coach&hl=fr",
    github: "",
    isDeployed: true,
  },
  {
    name: "AnyPet",
    description: `Une application web dédiée à faciliter l'adoption des animaux abandonnés, perdus ou séparés de leur propriétaire. Conçue pour offrir une plateforme conviviale, elle permet à chaque acteur, qu'il soit administrateur ou client, de bénéficier d'un espace personnalisé.

    Pour les administrateurs, AnyPet offre un tableau de bord complet permettant la gestion des catégories de l'application, la supervision des annonces déposées par les clients, ainsi que le suivi des statistiques de l'application.
    
    Les clients de l'application disposent également d'un tableau de bord leur permettant de déposer leurs annonces, de suivre les annonces des autres utilisateurs et d'interagir avec celles-ci.
    
    AnyPet intègre également un système de notification en temps réel et une fonctionnalité de discussion instantanée grâce à l'utilisation de Pusher, offrant ainsi une expérience interactive et réactive aux utilisateurs.`,
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "React hooks",
      "Laravel",
      "Pusher",
      "MaterialUI",
    ],
    image: images.anypet,
    link: "",
    github: "",
    isDeployed: false,
  },
  {
    name: "E-commerce",
    description:
      "Une application web pour gérer un site e-commerce, elle permet de gérer les produits, les commandes et les clients. Elle est développée avec React.js pour le front-end et Node.js pour le back-end. Une application dans le cadre de ma formation en école d'ingénieur.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    image: images.mernEcommerce,
    link: "",
    github: "https://github.com/riahirami/Ecommerce-MERN",
    isDeployed: false,
  },
  {
    name: "Scoring App",
    description:
      "Une application web pour gérer les scores des joueurs dans un jeu les jeux des cartes. Elle permet de créer un nouveau jeu, ajouter des joueurs, ajouter des scores et afficher les scores des joueurs. Elle est développée avec React.js pour le front-end et Firebase pour le back-end.L'application contient l'option de partager le code du jeu ou QR code pour permettre aux autres joueurs de rejoindre le jeu en mode preview et suivre le score et temps réel.",
    technologies: ["React", "MaterialUI", "Redux", "React hooks", "Firebase"],
    image: images.reactScoringApp,
    link: "https://scoringapp.vercel.app/",
    github: "https://github.com/riahirami/react-score-app",
    isDeployed: true,
  },
  {
    name: "City Search",
    description:
      "Une application mobile pour rechercher des informations sur une ville donnée, telles que la la population, la longitude et la latitude, la température, etc. L'application utilise l'API pour obtenir les informations de la ville recherchée. Elle est développer dans le cadre d'une evaluation sur le stack mobile. Application compatbile avec Android et iOS et différents type des smartphones et tablettes.",
    technologies: ["React Native", "TypeScript", "Redux", "React hooks"],
    image: images.searchCity_reactNative,
    link: "",
    github: "https://github.com/riahirami/react_native_city_info",
    isDeployed: false,
  },
  {
    name: "Weather App",
    description:
      "Une application web pour consulter la météo dans une liste pré-définie de villes et assure la conversion de la température de Celsius à Fahrenheit.",
    technologies: ["React.js", "Redux", "Styled-components"],
    image: images.reactWeatherApp,
    link: "",
    github: "https://github.com/riahirami/react_weather_app",
    isDeployed: false,
  },
  {
    name: "E-Commerce",
    description:
      "Une application web pour gérer un site e-commerce, elle permet de gérer les produits, les catégories. Elle est développée avec React.js pour le front-end et Node.js pour le back-end. Une application dans le cadre de ma formation en école d'ingénieur.",
    technologies: ["JAVA", "Springboot", "MAVEN", "MySQL"],
    image: images.springbootEcommerce,
    link: "",
    github: "https://github.com/riahirami/Ecommerce-springboot",
    isDeployed: false,
  },
  {
    name: "Movies",
    description:
      "Une application web pour gérer les films, elle permet de gérer les films, les catégories, les acteurs et les réalisateurs. Une application dans le cadre de ma formation en école d'ingénieur.",
    technologies: ["JAVA", "Springboot", "MAVEN", "MySQL"],
    image: images.springbootMovies,
    link: "",
    github: "https://github.com/riahirami/Movies-Springboot",
    isDeployed: false,
  },
  {
    name: "E-Commerce",
    description:
      "Une application web pour gérer un site e-commerce, elle permet de gérer les produits, les catégories. Une application dans le cadre de ma formation en école d'ingénieur.",
    technologies: ["MongoDB", "Express.js", "Angular", "Node.js"],
    image: images.meanEcommerce,
    link: "",
    github: "https://github.com/riahirami/Ecommerce-MEAN",
    isDeployed: false,
  },
  {
    name: "Portfolio",
    description:
      "Mon portfolio, développé dans le cadre de découvrir le framework Django.",
    technologies: ["Python", "Django"],
    image: images.djangoProtfolio,
    link: "",
    github: "https://github.com/riahirami/portfolio-django",
    isDeployed: false,
  },
];
