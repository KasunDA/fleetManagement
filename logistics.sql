-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 14, 2015 at 08:06 AM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `logistics`
--

-- --------------------------------------------------------

--
-- Table structure for table `companylist`
--

CREATE TABLE IF NOT EXISTS `companylist` (
`id` int(255) NOT NULL,
  `companyName` varchar(255) NOT NULL,
  `tanNo` varchar(255) NOT NULL,
  `serviceTax` varchar(255) NOT NULL,
  `SSINo` varchar(255) NOT NULL,
  `PANNo` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `owners` varchar(255) NOT NULL,
  `companyType` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `companylist`
--

INSERT INTO `companylist` (`id`, `companyName`, `tanNo`, `serviceTax`, `SSINo`, `PANNo`, `address`, `owners`, `companyType`, `email`, `phone`) VALUES
(1, 'RAJ TRANSPORT', 'ADGH223333', 'ADGH223333', 'DFGT12345', 'AMDFG1234F', '13, chettinadu green villa, perumbakkam, chennai', '', 'S', 'raj@gmail.com', '2147433644'),
(2, 'VV TRANSPORT', 'DDFFG123', 'DDFFG123', 'DDFFG123', 'DDFFG1234D', '12 south dsfdsf', '', 'S', 'dd@dd.com', '1234567444');

-- --------------------------------------------------------

--
-- Table structure for table `vehiclelist`
--

CREATE TABLE IF NOT EXISTS `vehiclelist` (
  `id` varchar(255) NOT NULL,
  `vehicleNumber` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `amtPurchased` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `make` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `chasisNo` varchar(255) NOT NULL,
  `engineNo` varchar(255) NOT NULL,
  `ownership` varchar(255) NOT NULL,
  `ownerName` varchar(255) NOT NULL,
  `odometer` varchar(255) NOT NULL,
  `fuelType` varchar(255) NOT NULL,
  `inService` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `companylist`
--
ALTER TABLE `companylist`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `companylist`
--
ALTER TABLE `companylist`
MODIFY `id` int(255) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
