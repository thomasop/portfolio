-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le :  jeu. 26 mars 2020 à 13:43
-- Version du serveur :  5.7.26
-- Version de PHP :  7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `Express Food`
--
CREATE DATABASE IF NOT EXISTS `Express Food` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `Express Food`;

-- --------------------------------------------------------

--
-- Structure de la table `Adresse`
--

DROP TABLE IF EXISTS `Adresse`;
CREATE TABLE `Adresse` (
  `idAdresse` int(10) NOT NULL,
  `numero` int(250) NOT NULL,
  `voie` varchar(75) NOT NULL,
  `codePostal` int(8) NOT NULL,
  `ville` varchar(50) NOT NULL,
  `complementAdresse` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Adresse`
--

INSERT INTO `Adresse` (`idAdresse`, `numero`, `voie`, `codePostal`, `ville`, `complementAdresse`) VALUES
(1, 5, 'rue victor Hugo', 68000, 'Cherbourg', ''),
(2, 9, 'rue de begles', 33000, 'Bordeaux', ''),
(3, 45, 'avenue de la marne', 13000, 'Antibes', ''),
(4, 98, 'cours de la somme', 43000, 'Perpignan', '');

-- --------------------------------------------------------

--
-- Structure de la table `Adresse_Client`
--

DROP TABLE IF EXISTS `Adresse_Client`;
CREATE TABLE `Adresse_Client` (
  `idFacture` int(11) NOT NULL,
  `idAdresse` int(10) NOT NULL,
  `idClient` int(10) NOT NULL,
  `numero` int(15) NOT NULL,
  `date` date NOT NULL,
  `adresse` varchar(100) NOT NULL,
  `prixHT` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Adresse_Client`
--

INSERT INTO `Adresse_Client` (`idFacture`, `idAdresse`, `idClient`, `numero`, `date`, `adresse`, `prixHT`) VALUES
(1, 3, 1, 7575463, '2020-03-17', 'Avenue de la marne', 30.9),
(2, 1, 3, 91534456, '2020-03-08', 'rue Francois', 36.4),
(3, 2, 2, 7355678, '2020-03-11', 'rue de bègles', 25.7);

-- --------------------------------------------------------

--
-- Structure de la table `Client`
--

DROP TABLE IF EXISTS `Client`;
CREATE TABLE `Client` (
  `idClient` int(10) NOT NULL,
  `nom` varchar(75) NOT NULL,
  `prenom` varchar(75) NOT NULL,
  `mail` varchar(75) NOT NULL,
  `telephone` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Client`
--

INSERT INTO `Client` (`idClient`, `nom`, `prenom`, `mail`, `telephone`) VALUES
(1, 'Pietrop', 'Sam', 'sam.piet@hotmail.com', 655555557),
(2, 'Bernard', 'Pierre', 'Bernard@sfr.fr', 765433334),
(3, 'Lebouteux', 'Charlotte', 'lebouteux@gmail.com', 651888888);

-- --------------------------------------------------------

--
-- Structure de la table `Client_Livreur`
--

DROP TABLE IF EXISTS `Client_Livreur`;
CREATE TABLE `Client_Livreur` (
  `idClient` int(11) NOT NULL,
  `idLivreur` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Client_Livreur`
--

INSERT INTO `Client_Livreur` (`idClient`, `idLivreur`) VALUES
(3, 2),
(1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `Commande`
--

DROP TABLE IF EXISTS `Commande`;
CREATE TABLE `Commande` (
  `idCommande` int(11) NOT NULL,
  `idClient` int(11) NOT NULL,
  `idLivreur` int(11) NOT NULL,
  `numCommande` int(11) NOT NULL,
  `dateCommande` date NOT NULL,
  `heureCommande` time NOT NULL,
  `heureFLivraison` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Commande`
--

INSERT INTO `Commande` (`idCommande`, `idClient`, `idLivreur`, `numCommande`, `dateCommande`, `heureCommande`, `heureFLivraison`) VALUES
(1, 2, 3, 543335, '2020-03-16', '12:24:57', '12:42:57'),
(2, 3, 2, 876555, '2020-03-11', '19:26:22', '19:43:22'),
(3, 1, 3, 195568, '2020-03-08', '13:48:09', '14:08:09');

-- --------------------------------------------------------

--
-- Structure de la table `Commande_PDJ`
--

DROP TABLE IF EXISTS `Commande_PDJ`;
CREATE TABLE `Commande_PDJ` (
  `idCommande` int(11) NOT NULL,
  `idPlat` int(11) NOT NULL,
  `prixCommande` double NOT NULL,
  `tauxTVA100` double NOT NULL,
  `quantite` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Commande_PDJ`
--

INSERT INTO `Commande_PDJ` (`idCommande`, `idPlat`, `prixCommande`, `tauxTVA100`, `quantite`) VALUES
(1, 1, 10, 0.1, 1),
(3, 2, 7, 0.7, 2);

-- --------------------------------------------------------

--
-- Structure de la table `Livreur`
--

DROP TABLE IF EXISTS `Livreur`;
CREATE TABLE `Livreur` (
  `idLivreur` int(11) NOT NULL,
  `nomLivreur` varchar(45) DEFAULT NULL,
  `prenomLivreur` varchar(45) DEFAULT NULL,
  `longitude` float DEFAULT NULL,
  `latitude` float NOT NULL,
  `statut` varchar(35) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Livreur`
--

INSERT INTO `Livreur` (`idLivreur`, `nomLivreur`, `prenomLivreur`, `longitude`, `latitude`, `statut`) VALUES
(1, 'Delarose', 'Jacques', 0.12085, 45.1782, 'Libre'),
(2, 'Marbtik', 'Sofia', 0.758057, 44.4455, 'En cours de livraison'),
(3, 'Deahner', 'Francois', 2.77954, 45.0386, 'Déconnecté');

-- --------------------------------------------------------

--
-- Structure de la table `Livreur_PDJ`
--

DROP TABLE IF EXISTS `Livreur_PDJ`;
CREATE TABLE `Livreur_PDJ` (
  `idLivreur` int(11) NOT NULL,
  `idPlat` int(11) NOT NULL,
  `quantite` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Livreur_PDJ`
--

INSERT INTO `Livreur_PDJ` (`idLivreur`, `idPlat`, `quantite`) VALUES
(1, 1, 2),
(3, 2, 9),
(1, 2, 6);

-- --------------------------------------------------------

--
-- Structure de la table `Manager`
--

DROP TABLE IF EXISTS `Manager`;
CREATE TABLE `Manager` (
  `idManager` int(11) NOT NULL,
  `nomManager` varchar(75) NOT NULL,
  `prenomManager` varchar(75) NOT NULL,
  `mailManager` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Manager`
--

INSERT INTO `Manager` (`idManager`, `nomManager`, `prenomManager`, `mailManager`) VALUES
(1, 'Lokity', 'Julien', 'Lokity@gmail.com'),
(2, 'Quedas', 'Julie', 'Julie.quedas@sfr.fr'),
(3, 'Dumas', 'Jean', 'j.dumas@hotmail.com');

-- --------------------------------------------------------

--
-- Structure de la table `PlatDuJour`
--

DROP TABLE IF EXISTS `PlatDuJour`;
CREATE TABLE `PlatDuJour` (
  `idPlat` int(11) NOT NULL,
  `idManager` int(11) NOT NULL,
  `nomPlat` varchar(75) NOT NULL,
  `categorie` varchar(75) NOT NULL,
  `datePlat` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `PlatDuJour`
--

INSERT INTO `PlatDuJour` (`idPlat`, `idManager`, `nomPlat`, `categorie`, `datePlat`) VALUES
(1, 3, 'Poulet a la provencal', 'Plat', '2020-03-11'),
(2, 3, 'Fondant au chocolat', 'Dessert', '2020-03-02'),
(3, 3, 'Boeuf bourguignon', 'Plat', '2020-03-20');

-- --------------------------------------------------------

--
-- Structure de la table `Produit`
--

DROP TABLE IF EXISTS `Produit`;
CREATE TABLE `Produit` (
  `reference` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prixU` float NOT NULL,
  `TVA` float NOT NULL,
  `quantite` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Produit`
--

INSERT INTO `Produit` (`reference`, `nom`, `prixU`, `TVA`, `quantite`) VALUES
(1, 'Tomate', 1.9, 0.19, 50),
(2, 'Poulet', 9.8, 0.98, 30),
(3, 'Persil', 1.9, 0.19, 40);

-- --------------------------------------------------------

--
-- Structure de la table `Produit_PDJ`
--

DROP TABLE IF EXISTS `Produit_PDJ`;
CREATE TABLE `Produit_PDJ` (
  `idProduit` int(11) NOT NULL,
  `idPlat` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Produit_PDJ`
--

INSERT INTO `Produit_PDJ` (`idProduit`, `idPlat`) VALUES
(2, 1),
(1, 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Adresse`
--
ALTER TABLE `Adresse`
  ADD PRIMARY KEY (`idAdresse`);

--
-- Index pour la table `Adresse_Client`
--
ALTER TABLE `Adresse_Client`
  ADD PRIMARY KEY (`idFacture`),
  ADD KEY `idAdresse` (`idAdresse`),
  ADD KEY `idClient` (`idClient`);

--
-- Index pour la table `Client`
--
ALTER TABLE `Client`
  ADD PRIMARY KEY (`idClient`);

--
-- Index pour la table `Client_Livreur`
--
ALTER TABLE `Client_Livreur`
  ADD KEY `idLivreur` (`idLivreur`),
  ADD KEY `idClient` (`idClient`);

--
-- Index pour la table `Commande`
--
ALTER TABLE `Commande`
  ADD PRIMARY KEY (`idCommande`),
  ADD KEY `idClient` (`idClient`),
  ADD KEY `idLivreur` (`idLivreur`);

--
-- Index pour la table `Commande_PDJ`
--
ALTER TABLE `Commande_PDJ`
  ADD KEY `idCommande` (`idCommande`),
  ADD KEY `idPlat` (`idPlat`);

--
-- Index pour la table `Livreur`
--
ALTER TABLE `Livreur`
  ADD PRIMARY KEY (`idLivreur`);

--
-- Index pour la table `Livreur_PDJ`
--
ALTER TABLE `Livreur_PDJ`
  ADD KEY `idLivreur` (`idLivreur`),
  ADD KEY `idPlat` (`idPlat`);

--
-- Index pour la table `Manager`
--
ALTER TABLE `Manager`
  ADD PRIMARY KEY (`idManager`);

--
-- Index pour la table `PlatDuJour`
--
ALTER TABLE `PlatDuJour`
  ADD PRIMARY KEY (`idPlat`),
  ADD KEY `idManager` (`idManager`);

--
-- Index pour la table `Produit`
--
ALTER TABLE `Produit`
  ADD PRIMARY KEY (`reference`);

--
-- Index pour la table `Produit_PDJ`
--
ALTER TABLE `Produit_PDJ`
  ADD KEY `idProduit` (`idProduit`),
  ADD KEY `idPlat` (`idPlat`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Adresse`
--
ALTER TABLE `Adresse`
  MODIFY `idAdresse` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `Adresse_Client`
--
ALTER TABLE `Adresse_Client`
  MODIFY `idFacture` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `Client`
--
ALTER TABLE `Client`
  MODIFY `idClient` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `Commande`
--
ALTER TABLE `Commande`
  MODIFY `idCommande` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `Livreur`
--
ALTER TABLE `Livreur`
  MODIFY `idLivreur` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `Manager`
--
ALTER TABLE `Manager`
  MODIFY `idManager` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `PlatDuJour`
--
ALTER TABLE `PlatDuJour`
  MODIFY `idPlat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `Produit`
--
ALTER TABLE `Produit`
  MODIFY `reference` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Adresse_Client`
--
ALTER TABLE `Adresse_Client`
  ADD CONSTRAINT `adresse_client_ibfk_1` FOREIGN KEY (`idClient`) REFERENCES `Client` (`idClient`),
  ADD CONSTRAINT `adresse_client_ibfk_2` FOREIGN KEY (`idAdresse`) REFERENCES `Adresse` (`idAdresse`);

--
-- Contraintes pour la table `Client_Livreur`
--
ALTER TABLE `Client_Livreur`
  ADD CONSTRAINT `client_livreur_ibfk_1` FOREIGN KEY (`idClient`) REFERENCES `Client` (`idClient`),
  ADD CONSTRAINT `client_livreur_ibfk_2` FOREIGN KEY (`idLivreur`) REFERENCES `Livreur` (`idLivreur`);

--
-- Contraintes pour la table `Commande`
--
ALTER TABLE `Commande`
  ADD CONSTRAINT `commande_ibfk_1` FOREIGN KEY (`idClient`) REFERENCES `Client` (`idClient`),
  ADD CONSTRAINT `commande_ibfk_2` FOREIGN KEY (`idLivreur`) REFERENCES `Livreur` (`idLivreur`);

--
-- Contraintes pour la table `Commande_PDJ`
--
ALTER TABLE `Commande_PDJ`
  ADD CONSTRAINT `commande_pdj_ibfk_1` FOREIGN KEY (`idCommande`) REFERENCES `Commande` (`idCommande`),
  ADD CONSTRAINT `commande_pdj_ibfk_2` FOREIGN KEY (`idPlat`) REFERENCES `PlatDuJour` (`idPlat`);

--
-- Contraintes pour la table `Livreur_PDJ`
--
ALTER TABLE `Livreur_PDJ`
  ADD CONSTRAINT `livreur_pdj_ibfk_1` FOREIGN KEY (`idLivreur`) REFERENCES `Livreur` (`idLivreur`),
  ADD CONSTRAINT `livreur_pdj_ibfk_2` FOREIGN KEY (`idPlat`) REFERENCES `PlatDuJour` (`idPlat`);

--
-- Contraintes pour la table `PlatDuJour`
--
ALTER TABLE `PlatDuJour`
  ADD CONSTRAINT `platdujour_ibfk_1` FOREIGN KEY (`idManager`) REFERENCES `Manager` (`idManager`);

--
-- Contraintes pour la table `Produit_PDJ`
--
ALTER TABLE `Produit_PDJ`
  ADD CONSTRAINT `produit_pdj_ibfk_1` FOREIGN KEY (`idPlat`) REFERENCES `PlatDuJour` (`idPlat`),
  ADD CONSTRAINT `produit_pdj_ibfk_2` FOREIGN KEY (`idProduit`) REFERENCES `Produit` (`reference`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
