import React, { useContext, useEffect, useState } from "react";
import styles from "./Project.module.scss";
import Theme from "../../components/theme/Theme";
import Device from "../../components/device/Device";
import themeContext from "../../providers/theme/themeContext";
import projectContext from "../../providers/project/projectContext";
import projectsContext from "../../providers/projects/projectsContext";
import Navigation from "../../components/navigation/Navigation";
import { useLocation, useNavigate } from "react-router-dom";
import scrollDownContext from "../../providers/scrollDown/scrollDownContext";
import BallCanvas from "./components/scene/ball/BallCanvas";

const OCReactProjects = [
  {
    title: "OhMyFood",
    img: "../assets/projects/OCReact/ohMyFood/main.png",
    description: `Dans ce projet, j'ai travaillé sur le développement front-end
      d'une application de réservation de restaurants en ligne. J'ai
      utilisé HTML, CSS et JavaScript pour créer une interface
      utilisateur réactive et dynamique. J'ai utilisé SASS pour
      structurer mon code CSS et le rendre plus modulaire. J'ai
      également utilisé des animations CSS pour améliorer l'expérience
      utilisateur. J'ai utilisé JavaScript pour ajouter des
      fonctionnalités interactives à l'application, telles que la
      navigation entre les différentes sections de la page et la
      sélection des plats à commander. J'ai également utilisé des
      techniques de responsive design pour m'assurer que l'application
      fonctionne correctement sur tous les appareils, des ordinateurs
      de bureau aux smartphones. J'ai utilisé Git et GitHub pour
      gérer le code source du projet et collaborer avec d'autres
      développeurs.`,
    techs: [
      "../assets/tech/html.png",
      "../assets/tech/css.png",
      "../assets/tech/javascript.png",
      "../assets/tech/git.png",
      "../assets/tech/sass.svg",
    ],
    links: [
      {
        type: "site",
        name: "Lien vers le site",
        url: "https://thomasop.github.io/DaSilva_Thomas_3_code_082022/",
      },
      {
        type: "github",
        name: "Lien vers le repository Github",
        url: "https://github.com/thomasop/DaSilva_Thomas_3_code_082022",
      },
    ],
  },
  {
    title: "GameOn",
    img: "../assets/projects/OCReact/gameOn/main.png",
    description: `Ce projet a été une introduction au développement avec JavaScript,
              où j'ai travaillé pour une entreprise organisant des concours de
              jeux. Ma mission principale a été de réaliser un formulaire avec
              JavaScript. J'ai eu le code HTML et CSS du site ainsi que les
              maquettes à ma disposition. Ce projet m'a permis de comprendre
              comment JavaScript, HTML, et CSS interagissent pour créer des
              pages web dynamiques. J'ai appris les bases de JavaScript Vanilla,
              le JavaScript pur sans l'utilisation de bibliothèques ou de
              frameworks. Cela m'a donné une compréhension solide des
              fondamentaux de la programmation en JavaScript. J'ai travaillé sur
              la validation du formulaire pour garantir que les données saisies
              par les utilisateurs étaient correctes et répondaient aux critères
              établis. J'ai également géré les événements JavaScript, tels que
              les clics de bouton ou les entrées de formulaire, pour créer une
              interaction dynamique avec les utilisateurs. J'ai utilisé Figma
              pour accéder aux maquettes du projet, Visual Studio Code pour
              l'écriture et la gestion du code, et GitHub pour le versionnement
              de mon projet.`,
    techs: [
      "../assets/tech/html.png",
      "../assets/tech/css.png",
      "../assets/tech/javascript.png",
      "../assets/tech/git.png",
      "../assets/tech/sass.svg",
      "../assets/tech/figma.png",
    ],
    links: [
      {
        type: "site",
        name: "Lien vers le site",
        url: "https://genuine-kulfi-f33b49.netlify.app",
      },
      {
        type: "github",
        name: "Lien vers le repository Github",
        url: "https://github.com/thomasop/GameOn-website-FR",
      },
    ],
  },
  {
    title: "Fisheye",
    img: "../assets/projects/OCReact/fisheye/main.png",
    description: `Dans ce projet, j'ai travaillé sur le développement d'un site web
              pour une plateforme d’artistes. L'accent a été mis sur la création
              d'une application web accessible, modulaire et utilisant des
              design patterns en JavaScript. J'ai commencé par créer un
              prototype fonctionnel du site web en utilisant HTML, CSS et
              JavaScript. J'ai eu à ma disposition des maquettes, des données
              JSON et un code de base pour démarrer. Ma tâche a consisté à
              intégrer diverses fonctionnalités telles que la récupération et
              l'affichage des données, la navigation entre les pages des
              photographes, une modale de contact, une LightBox pour les médias,
              et la gestion des likes. L'accessibilité a été une priorité
              absolue dans ce projet. J'ai appris à développer une application
              web modulaire, en utilisant des design patterns en JavaScript.
              Cela a impliqué l'écriture de code maintenable et la gestion des
              événements du site. J'ai également utilisé L'API fetch pour récupéré des données.`,
    techs: [
      "../assets/tech/html.png",
      "../assets/tech/css.png",
      "../assets/tech/git.png",
      "../assets/tech/javascript.png",
    ],
    links: [
      {
        type: "site",
        name: "Lien vers le site",
        url: "https://serene-tartufo-4605bf.netlify.app",
      },
      {
        type: "github",
        name: "Lien vers le repository Github",
        url: "https://github.com/thomasop/Front-End-Fisheye",
      },
    ],
  },
  {
    title: "SportSee",
    img: "../assets/projects/OCReact/sportSee/main.png",
    description: `Ma mission a été d'intégrer des graphiques et des diagrammes pour
              présenter les données d'analyse sportive d'un utilisateur en
              utilisant React et de récupérer des données via une API. J'ai
              utiliseré React pour construire l'interface utilisateur. Pour les
              graphiques, j'ai utilisé la bibliothèque Recharts. J'ai été en
              charge de la gestion des appels HTTP, en utilisant l'API Fetch
              pour interagir avec le back-end et récupérer les données
              nécessaires. Une partie importante du projet a été de développer
              une documentation complète comprenant un Readme, JSDoc, et les
              proptypes. Ceci est essentiel pour faciliter la collaboration et
              la compréhension du code au sein de l'équipe. Pas de version
              mobile et tablette pour ce projet (minimun : 1024 par 780 pixels).`,
    techs: [
      "../assets/tech/html.png",
      "../assets/tech/css.png",
      "../assets/tech/javascript.png",
      "../assets/tech/git.png",
      "../assets/tech/figma.png",
      "../assets/tech/typescript.png",
    ],
    links: [
      {
        type: "site",
        name: "Lien vers le site",
        url: "https://fancy-fenglisu-a92a4c.netlify.app",
      },
      {
        type: "github",
        name: "Lien vers le repository Github",
        url: "https://github.com/thomasop/sportsee",
      },
    ],
  },
  {
    title: "ArgentBank",
    img: "../assets/projects/OCReact/argentBank/main.png",
    description: `Dans ce projet, j'ai travaillé sur le développement front-end
      d’une application bancaire en utilisant React et Redux pour créer
      une expérience utilisateur dynamique et réactive. Ma mission
      principale a été d'intégrer le front-end avec le back-end via des
      appels API. J'ai écrit des appels à l'API REST pour connecter les
      deux parties de l'application, assurant une communication fluide
      entre le client et le serveur. J'ai utilisé React pour développer
      l'interface utilisateur de l'application bancaire, en me
      concentrant sur la création d'un tableau de bord complet et
      responsive pour les utilisateurs. Redux a été utilisé pour gérer
      les données de l'application. Cela m'a permis de maintenir un état
      global cohérent à travers l'application. Pour définir les points
      d'accès de l'API et modéliser les interactions avec les données
      des transactions, j'ai utilisé Swagger. Cet outil m'a aidé à
      décrire les différentes routes et actions nécessaires pour l'API.`,
    techs: [
      "../assets/tech/html.png",
      "../assets/tech/css.png",
      "../assets/tech/javascript.png",
      "../assets/tech/git.png",
      "../assets/tech/sass.svg",
      "../assets/tech/reactjs.png",
      "../assets/tech/redux.png",
      "../assets/tech/swagger.png",
    ],
    links: [
      {
        type: "site",
        name: "Lien vers le site",
        url: "https://cheery-meerkat-871e11.netlify.app",
      },
      {
        type: "github",
        name: "Lien vers le repository Github",
        url: "https://github.com/thomasop/argent_bank",
      },
    ],
  },
  {
    title: "Billed",
    img: "../assets/projects/OCReact/billed/main.png",
    arrayImg: ["../assets/projects/OCReact/billed/main.png"],
    description: ` Ce projet m'a confié la tâche de débugger et tester une
              application. J'ai travaillé sur des tests unitaires et
              d'intégration en JavaScript, ainsi que des tests end-to-end
              manuels. Ma mission principale a été de corriger les bugs d’un
              système RH et de finaliser les tests. J'ai commencé par installer
              le back-end et le front-end depuis des repos spécifiques. Ensuite,
              j'ai été chargé de déboguer certaines parties de l’application.
              J'ai rédigé et implémenté des tests unitaires en JavaScript pour
              vérifier la validité et la fiabilité des différentes composantes
              de l'application. J'ai également élaboré un plan de test
              end-to-end manuel pour assurer le bon fonctionnement du parcours
              employé de l'application. J'ai utilisé le Chrome Debugger pour le
              débogage de l'application, me permettant de détecter et de
              résoudre les problèmes de manière efficace. En plus des tests
              unitaires, j'ai écrit des tests d'intégration en JavaScript pour
              vérifier l'interaction entre les différentes parties de
              l'application.`,
    techs: ["../assets/tech/jest.png", "../assets/tech/chrome.png"],
    links: [
      {
        type: "site",
        name: "Lien vers le site",
        url: "https://rococo-florentine-ee5596.netlify.app",
      },
      {
        type: "github",
        name: "Lien vers le repository Github",
        url: "https://github.com/thomasop/Billed",
      },
    ],
  },
  {
    title: "Booki",
    img: "../assets/projects/OCReact/booki/main.png",
    description: `Dans ce projet, j'ai créé la page d'accueil d'une agence de voyage
              en utilisant HTML et CSS. Ma mission principale a été d'intégrer
              l'interface responsive de leur site. J'ai eu à disposition les
              maquettes Figma pour mobile, tablette et desktop, ainsi que les
              images et une note de synthèse sur les spécificités du projet.
              J'ai été encouragé à ne pas me fier à l'outil code de Figma, mais
              plutôt à écrire mon propre code HTML et CSS. Cela m'a donné une
              compréhension plus profonde de la manière dont le code est
              structuré et stylisé pour répondre aux exigences de design. En
              travaillant sur ce projet, j'ai développé des compétences
              essentielles en design responsive, assurant que la page d'accueil
              fonctionne bien sur tous les appareils et tailles d'écran.`,
    techs: [
      "../assets/tech/html.png",
      "../assets/tech/css.png",
      "../assets/tech/git.png",
      "../assets/tech/figma.png",
    ],
    links: [
      {
        name: "Lien vers le site",
        url: "https://jolly-semifreddo-70977f.netlify.app",
      },
      {
        type: "github",
        name: "Lien vers le repository Github",
        url: "https://github.com/thomasop/booki",
      },
    ],
  },
  {
    title: "Hrnet",
    img: "../assets/projects/OCReact/hrnet/main.png",
    description: `Dans ce projet, j'ai participé à la conversion d’une application
              de jQuery vers React pour une grande société financière. Ma
              mission principale a été de refondre les pages clés de
              l’application en remplaçant quatre plugin jQuery par des
              composants React. Cela a impliqué une compréhension approfondie
              des deux technologies et leur interaction. J'ai été chargé de
              mesurer les performances de l'application avant et après la
              conversion. Cette analyse de performance m'a permis de quantifier
              les avantages de la migration vers React. J'ai également livré un
              des composant React que j'ai converti sur Npm. La documentation du
              composant converti a été une étape importante de mon travail. Cela
              a compris la rédaction de documents techniques détaillant
              l'architecture du composant, son fonctionnement, et les raisons de
              sa conception. J'ai livré les résultats de mon travail avec des
              rapports détaillés, y compris des analyses de performance et des
              explications sur les choix techniques effectués pendant la
              conversion.`,
    techs: [
      "../assets/tech/html.png",
      "../assets/tech/css.png",
      "../assets/tech/javascript.png",
      "../assets/tech/git.png",
      "../assets/tech/reactjs.png",
      "../assets/tech/npm.png",
      "../assets/tech/jquery.png",
    ],
    links: [
      {
        type: "site",
        name: "Lien vers le site",
        url: "https://idyllic-naiad-fa0bd8.netlify.app",
      },
      {
        type: "github",
        name: "Lien vers le repository Github",
        url: "https://github.com/thomasop/HRnet",
      },
      {
        name: "Lien vers le package npm",
        url: "https://www.npmjs.com/package/thomasop-date-picker",
      },
    ],
  },
  {
    title: "Kasa",
    img: "../assets/projects/OCReact/kasa/main.png",
    description: `Dans ce projet, j'ai implémenté le front-end d’une application en
              utilisant React et React Router pour créer une expérience
              utilisateur moderne et réactive. J'ai travaillé sur la logique de
              présentation des données et les composants React, une bibliothèque
              JavaScript populaire pour la création d'interfaces utilisateur.
              J'ai appris à mettre en œuvre des animations CSS et à développer
              l'interface avec SASS, un préprocesseur CSS, pour améliorer
              l'expérience visuelle de l'application. J'ai utilisé React Router
              pour configurer la navigation entre les différentes pages de
              l'application. Cela m'a permis de comprendre comment gérer
              efficacement le routage dans une application web moderne. Le
              projet s'est concentré exclusivement sur le développement
              front-end, en se basant sur les maquettes fournies et en utilisant
              des données simulées extraites d'un fichier JSON. J'ai débuté le
              projet avec Create React App, un outil qui simplifie la
              configuration initiale d'une application React.`,
    techs: [
      "../assets/tech/html.png",
      "../assets/tech/css.png",
      "../assets/tech/git.png",
      "../assets/tech/sass.svg",
      "../assets/tech/javascript.png",
      "../assets/tech/reactjs.png",
      "../assets/tech/javascript.png",
      "../assets/tech/reactrouter.png",
    ],
    links: [
      {
        type: "site",
        name: "Lien vers le site",
        url: "https://chimerical-lebkuchen-8e4b73.netlify.app",
      },
      {
        type: "github",
        name: "Lien vers le repository Github",
        url: "https://github.com/thomasop/kasa",
      },
    ],
  },
  {
    title: "LearnAtHome",
    img: "../assets/projects/OCReact/learnAtHome/main.png",
    description: `Ce projet m'a impliqué dans la définition des besoins et la
              modélisation d'une solution technique pour une association de
              soutien scolaire, en adoptant une méthodologie agile. j'ai été
              chargé de créer des diagrammes de cas d'usage pour chaque
              fonctionnalité majeure des différentes pages du site. J'ai
              developpé des User Stories pour cerner les attentes des
              utilisateurs et définir clairement les objectifs à atteindre. J'ai
              créé des maquettes du site en utilisant Figma. Elles ont servi de
              guide visuel pour le développement et faciliteront la
              communication des idées au client et à l'équipe de développement.
              J'ai élaboré un tableau Kanban détaillé, divisant le projet en
              blocs de fonctionnalités et sous-fonctionnalités. Cela structurera
              le développement et facilitera le suivi du projet.`,
    techs: [
      "../assets/tech/figma.png",
      "../assets/tech/trello.png",
      "../assets/tech/lucidchart.png",
    ],
    links: [
      {
        type: "trello",
        name: "Lien vers le tableau Kanban",
        url: "https://trello.com/invite/b/L4UrU5vZ/ATTI21e4d555d7a60dd54c8246906ea7c8c3DE044576/kanban",
      },
    ],
  },
  {
    title: "LesPetitsPlats",
    img: "../assets/projects/OCReact/lesPetitsPlats/main.png",
    description: `Ce projet me met au défi de développer un algorithme de recherche
              efficace pour une plateforme de recettes de cuisine. Ma première
              tâche a été de concevoir l'interface utilisateur du site en
              utilisant CSS. Cela comprendra la création d'une interface
              intuitive et réactive pour la fonction de recherche des recettes.
              J'ai ensuite développé deux versions d'un algorithme de recherche,
              capables de parcourir et de filtrer efficacement un fichier JSON.
              Après avoir implémenté ces algorithmes, j'ai analysé et comparé
              leurs performances. J'ai utilisé des outils comme Jsben.ch ou
              d'autres outils de test de performances pour identifier
              l'algorithme le plus efficace. Une fois l'algorithme optimal
              choisi, j'ai documenté mon travail et expliqué pourquoi cet
              algorithme est le plus adapté pour le site. Durant tout le projet,
              j'ai prit en compte les principes du Green Code, afin de
              développer un algorithme qui soit non seulement performant mais
              aussi respectueux de l'environnement.`,
    techs: [
      "../assets/tech/html.png",
      "../assets/tech/css.png",
      "../assets/tech/git.png",
      "../assets/tech/javascript.png",
      "../assets/tech/jsben.png",
    ],
    links: [
      {
        type: "site",
        name: "Lien vers le site",
        url: "https://willowy-marzipan-1c0142.netlify.app",
      },
      {
        type: "github",
        name: "Lien vers le repository Github",
        url: "https://github.com/thomasop/Les_petits_plats",
      },
      {
        name: "Lien vers le Jsben",
        url: "https://jsben.ch/Gsaj8",
      },
    ],
  },
  {
    title: "Les Films de Plein Air",
    img: "../assets/projects/OCPHP/lesFilmsEnPleinAir/main.png",
    description: `Dans ce projet, j'ai travaillé sur le développement d'un site web
              pour une entreprise organisant des projections de films en plein
              air. J'ai utilisé PHP et MySQL pour créer une application web
              dynamique et interactive. J'ai utilisé PHP pour gérer la
              logique de l'application, en traitant les requêtes des utilisateurs
              et en générant des pages web dynamiques. J'ai utilisé MySQL pour
              stocker les données de l'application, telles que les informations
              sur les films et les horaires des projections. J'ai également
              utilisé HTML, CSS et JavaScript pour créer l'interface utilisateur
              de l'application, en me concentrant sur la convivialité et
              l'expérience utilisateur. J'ai utilisé Git et GitHub pour gérer le
              code source du projet et collaborer avec d'autres développeurs.`,
    techs: [
      "../assets/tech/html.png",
      "../assets/tech/css.png",
      "../assets/tech/javascript.png",
      "../assets/tech/git.png",
      "../assets/tech/php.png",
      "../assets/tech/mysql.svg",
    ],
    links: [
      {
        type: "site",
        name: "Lien vers le site",
        url: "https://thomasop.github.io/OC-PHP-Projet-3/",
      },
      {
        type: "github",
        name: "Lien vers le repository Github",
        url: "k",
      },
    ],
  },
  {
    title: "ExpressFood",
    img: "../assets/projects/OCPHP/expressFood/main.png",
    description: `Dans ce projet, j'ai travaillé sur le développement d'une
              application de livraison de repas en ligne. J'ai utilisé PHP et
              MySQL pour créer une application web dynamique et interactive. J'ai
              utilisé PHP pour gérer la logique de l'application, en traitant les
              commandes des utilisateurs et en générant des pages web dynamiques.
              J'ai utilisé MySQL pour stocker les données de l'application, telles
              que les informations sur les restaurants et les menus. J'ai
              également utilisé HTML, CSS et JavaScript pour créer l'interface
              utilisateur de l'application, en me concentrant sur la convivialité
              et l'expérience utilisateur. J'ai utilisé Git et GitHub pour gérer
              le code source du projet et collaborer avec d'autres développeurs.`,
    techs: [
      "../assets/tech/html.png",
      "../assets/tech/css.png",
      "../assets/tech/javascript.png",
      "../assets/tech/git.png",
      "../assets/tech/php.png",
      "../assets/tech/mysql.svg",
    ],
    links: [
      {
        type: "site",
        name: "Lien vers le site",
        url: "https://thomasop.github.io/OC-PHP-Projet-4/",
      },
      {
        type: "github",
        name: "Lien vers le repository Github",
        url: "k",
      },
    ],
  },
  {
    title: "Blog",
    img: "../assets/projects/OCPHP/blog/main.png",
    description: `Dans ce projet, j'ai travaillé sur le développement d'un blog
              personnel en utilisant PHP et MySQL. J'ai utilisé PHP pour créer
              une application web dynamique et interactive, en gérant les
              articles du blog et les commentaires des utilisateurs. J'ai utilisé
              MySQL pour stocker les données du blog, telles que les articles et
              les commentaires. J'ai également utilisé HTML, CSS et JavaScript
              pour créer l'interface utilisateur du blog, en me concentrant sur
              la convivialité et l'expérience utilisateur. J'ai utilisé Git et
              GitHub pour gérer le code source du projet et collaborer avec
              d'autres développeurs.`,
    techs: [
      "../assets/tech/html.png",
      "../assets/tech/css.png",
      "../assets/tech/javascript.png",
      "../assets/tech/git.png",
      "../assets/tech/php.png",
      "../assets/tech/mysql.svg",
    ],
    links: [
      {
        type: "site",
        name: "Lien vers le site",
        url: "https://thomasop.github.io/OC-PHP-Projet-5/",
      },
      {
        type: "github",
        name: "Lien vers le repository Github",
        url: "k",
      },
    ],
  },
  {
    title: "SnowTricks",
    img: "../assets/projects/OCPHP/snowTricks/main.png",
    description: `Dans ce projet, j'ai travaillé sur le développement d'un site web
              collaboratif pour une communauté de passionnés de snowboard. J'ai
              utilisé PHP et MySQL pour créer une application web dynamique et
              interactive. J'ai utilisé PHP pour gérer la logique de
              l'application, en traitant les articles du site et les commentaires
              des utilisateurs. J'ai utilisé MySQL pour stocker les données du
              site, telles que les articles et les commentaires. J'ai également
              utilisé HTML, CSS et JavaScript pour créer l'interface utilisateur
              du site, en me concentrant sur la convivialité et l'expérience
              utilisateur. J'ai utilisé Git et GitHub pour gérer le code source
              du projet et collaborer avec d'autres développeurs.`,
    techs: [
      "../assets/tech/html.png",
      "../assets/tech/css.png",
      "../assets/tech/javascript.png",
      "../assets/tech/git.png",
      "../assets/tech/php.png",
      "../assets/tech/mysql.svg",
    ],
    links: [
      {
        type: "site",
        name: "Lien vers le site",
        url: "https://thomasop.github.io/OC-PHP-Projet-6/",
      },
      {
        type: "github",
        name: "Lien vers le repository Github",
        url: "k",
      },
    ],
  },
  {
    title: "BileMo",
    img: "../assets/projects/OCPHP/bileMo/main.png",
    description: `Dans ce projet, j'ai travaillé sur le développement d'une API REST
              pour une entreprise de vente de téléphones mobiles. J'ai utilisé
              PHP et MySQL pour créer une API RESTful qui permettait aux clients
              de l'entreprise de consulter et d'acheter des téléphones mobiles.
              J'ai utilisé PHP pour gérer les requêtes des clients et générer
              des réponses JSON. J'ai utilisé MySQL pour stocker les données des
              téléphones mobiles, telles que les modèles, les prix et les
              caractéristiques. J'ai également utilisé Git et GitHub pour gérer
              le code source du projet et collaborer avec d'autres développeurs.`,
    techs: [
      "../assets/tech/git.png",
      "../assets/tech/php.png",
      "../assets/tech/mysql.svg",
    ],
    links: [
      {
        type: "site",
        name: "Lien vers le site",
        url: "https://thomasop.github.io/OC-PHP-Projet-7/",
      },
      {
        type: "github",
        name: "Lien vers le repository Github",
        url: "k",
      },
    ],
  },
  {
    title: "ToDoCo",
    img: "../assets/projects/OCPHP/toDoCo/main.png",
    description: `Dans ce projet, j'ai travaillé sur le développement d'une application
              de gestion de tâches en utilisant PHP et MySQL. J'ai utilisé PHP
              pour créer une application web dynamique et interactive, en
              permettant aux utilisateurs de gérer leurs tâches quotidiennes. J'ai
              utilisé MySQL pour stocker les données des tâches, telles que les
              descriptions, les dates d'échéance et les priorités. J'ai également
              utilisé HTML, CSS et JavaScript pour créer l'interface utilisateur
              de l'application, en me concentrant sur la convivialité et
              l'expérience utilisateur. J'ai utilisé Git et GitHub pour gérer le
              code source du projet et collaborer avec d'autres développeurs.`,
    techs: [
      "../assets/tech/html.png",
      "../assets/tech/css.png",
      "../assets/tech/javascript.png",
      "../assets/tech/git.png",
      "../assets/tech/php.png",
      "../assets/tech/mysql.svg",
    ],
    links: [
      {
        type: "site",
        name: "Lien vers le site",
        url: "https://thomasop.github.io/OC-PHP-Projet-8/",
      },
      {
        type: "github",
        name: "Lien vers le repository Github",
        url: "k",
      },
    ],
  },
];
const Project = () => {
  const elementRef = React.useRef(null);
  const navigate = useNavigate();
  const { theme } = useContext(themeContext);
  const { display, setDisplay } = useContext(scrollDownContext);
  const [project, setProject] = useState(null);
  useEffect(() => {
    const html = document.querySelector("html");
    html.style.height = "100%";
    html.style.overflow = "auto";
    const root = document.querySelector("#root");
    root.style.height = "100%";
    root.style.overflow = "auto";
  }, []);
  const location = useLocation();
  useEffect(() => {
    OCReactProjects.map((p) => {
      if (location.pathname.replace(/[-]/g, " ") === `/projet/${p.title}`) {
        setProject(p);
      }
    });
  }, [location.pathname]);
  useEffect(() => {
    const handlerScroll = (e) => {
      let posElement = elementRef.current.getBoundingClientRect();
      if (e.layerY > posElement.top && e.deltaY > 0) {
        if (display === true) setDisplay(false);
      } else if (Math.abs(e.layerY) < posElement.top && e.deltaY < 0) {
        if (display === false) setDisplay(true);
      }
    };
    window.addEventListener("wheel", handlerScroll);
    return () => {
      window.removeEventListener("wheel", handlerScroll);
    };
  }, [display, setDisplay]);
  return (
    <>
      {project && (
        <>
          <Theme />
          <Device />
          <Navigation />
          <>
            <main
              className={`${styles.project}
           ${theme === "dark" ? styles.project__dark : styles.project__light}`}
            >
              <img
                id="project-img"
                className={styles.project__img}
                src={project.img}
                alt={project.title}
              />
              <div
                ref={elementRef}
                className={`${styles.project__discover} ${
                  display === false
                    ? styles.project__discover__hidden
                    : styles.project__discover__visible
                }`}
                onClick={() => {
                  elementRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                  setDisplay(false);
                }}
              >
                <span className={`${styles.project__discover__span}`}>
                  Découvrir le projet
                </span>
                <img
                  className={styles.project__discover__img}
                  src={`../assets/icone/arrow-down-solid.svg`}
                  alt=""
                />
              </div>
              <a
                className={`${styles.project__a} ${
                  theme === "dark"
                    ? styles.project__a__dark
                    : styles.project__a__light
                }`}
                href="/projets"
              >
                Retour aux projets
              </a>
              <p
                className={`${styles.project__h1} ${
                  theme === "dark"
                    ? styles.project__h1__dark
                    : styles.project__h1__light
                }`}
              >
                {project.title}
              </p>
              <p
                className={`${styles.project__p} ${
                  theme === "dark"
                    ? styles.project__p__dark
                    : styles.project__p__light
                }`}
              >
                {project.description}
              </p>
              <span
                className={`${styles.project__line} ${
                  theme === "dark"
                    ? styles.project__line__dark
                    : styles.project__line__light
                }`}
              ></span>
              <div className={styles.project__content}>
                <div className={styles.project__content__balls}>
                  {project.techs.map((tech, index) => (
                    <div
                      className={styles.project__content__balls__ball}
                      key={index}
                    >
                      <BallCanvas icon={tech} size={"little"} />
                    </div>
                  ))}
                </div>
                <div className={styles.project__content__tech}>
                  {project.links.map((link, index) => (
                    <React.Fragment key={index}>
                      {link.type === "site" && (
                        <>
                          <a
                            className={styles.project__content__tech__link}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              className={
                                styles.project__content__tech__link__img
                              }
                              src={`${
                                theme === "light"
                                  ? "../assets/icone/www.png"
                                  : "../assets/icone/www-light.png"
                              }`}
                              alt=""
                            />
                          </a>
                        </>
                      )}
                      {link.type === "github" && (
                        <>
                          <a
                            className={styles.project__content__tech__link}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              className={
                                styles.project__content__tech__link__img
                              }
                              src={`${
                                theme === "light"
                                  ? "../assets/icone/github.svg"
                                  : "../assets/icone/github-light.svg"
                              }`}
                              alt=""
                            />
                          </a>
                        </>
                      )}
                      {link.type === "trello" && (
                        <>
                          <a
                            className={styles.project__content__tech__link}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              className={
                                styles.project__content__tech__link__img
                              }
                              src="../assets/icone/trello.png"
                              alt=""
                            />
                          </a>
                        </>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </main>
          </>
        </>
      )}
    </>
  );
};

export default Project;
