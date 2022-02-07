-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 27, 2021 at 08:01 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `smartsolnpro`
--

-- --------------------------------------------------------

--
-- Table structure for table `contract_info`
--

DROP TABLE IF EXISTS `contract_info`;
CREATE TABLE IF NOT EXISTS `contract_info` (
  `ser` int(4) NOT NULL,
  `contractProvider` varchar(60) NOT NULL,
  `contractId` int(4) NOT NULL,
  `instrs` varchar(200) NOT NULL,
  `dressCode` int(2) NOT NULL,
  `dateStart` date NOT NULL,
  `dateEnd` date NOT NULL,
  `contractStatus` int(1) NOT NULL,
  PRIMARY KEY (`contractId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `emp_compliances`
--

DROP TABLE IF EXISTS `emp_compliances`;
CREATE TABLE IF NOT EXISTS `emp_compliances` (
  `ser` int(5) NOT NULL,
  `empId` int(4) NOT NULL,
  `typeId` int(1) NOT NULL,
  `docId` int(2) NOT NULL,
  `imgId` varchar(12) COLLATE utf8_unicode_ci NOT NULL,
  `state_terrId` int(2) NOT NULL,
  `expDate` date NOT NULL,
  `docExtId` int(1) NOT NULL,
  `orgId` int(4) NOT NULL,
  PRIMARY KEY (`ser`),
  KEY `empId` (`empId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `emp_compliances`
--

INSERT INTO `emp_compliances` (`ser`, `empId`, `typeId`, `docId`, `imgId`, `state_terrId`, `expDate`, `docExtId`, `orgId`) VALUES
(1, 1003, 1, 1, '111', 3, '2023-08-29', 2, 1001),
(4, 1003, 2, 3, '234', 3, '2021-08-28', 4, 1001),
(3, 1003, 1, 3, '133', 3, '2024-08-29', 3, 1001),
(2, 1003, 1, 2, '122', 3, '2021-08-27', 1, 1001),
(5, 1002, 1, 1, '115', 3, '2022-12-04', 2, 1001),
(6, 1002, 2, 2, '226', 3, '2023-01-04', 2, 1001),
(7, 1002, 3, 2, '327', 3, '2023-12-12', 4, 1001),
(8, 1002, 4, 1, '418', 3, '2023-01-09', 3, 1001);

-- --------------------------------------------------------

--
-- Table structure for table `emp_reg`
--

DROP TABLE IF EXISTS `emp_reg`;
CREATE TABLE IF NOT EXISTS `emp_reg` (
  `ser` int(4) NOT NULL,
  `empId` int(4) NOT NULL,
  `empTypeId` int(1) NOT NULL,
  `empRoleId` int(1) NOT NULL,
  `firstName` varchar(15) NOT NULL,
  `lastName` varchar(15) NOT NULL,
  `empEmail` varchar(25) NOT NULL,
  `genderCode` int(1) NOT NULL,
  `dob` date NOT NULL,
  `workRightCode` int(1) NOT NULL,
  `empStatus` int(1) NOT NULL,
  `isSelected` int(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`empId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `emp_reg`
--

INSERT INTO `emp_reg` (`ser`, `empId`, `empTypeId`, `empRoleId`, `firstName`, `lastName`, `empEmail`, `genderCode`, `dob`, `workRightCode`, `empStatus`, `isSelected`) VALUES
(2, 1001, 3, 1, 'Jaman', 'Mollah', 'jaman@gmail.com', 2, '1989-08-29', 2, 1, 0),
(1, 1002, 2, 2, 'Hasan', 'Ali', 'smhumayonreza@gmail.com', 2, '2021-08-27', 2, 1, 0),
(3, 1003, 1, 2, 'Garu', 'Suman', 'sumi@gmail.com', 2, '1989-08-28', 2, 1, 0),
(4, 1004, 1, 2, 'Kaka', 'Asam', 'asam@gmail.com', 2, '1980-08-28', 4, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `emp_roster`
--

DROP TABLE IF EXISTS `emp_roster`;
CREATE TABLE IF NOT EXISTS `emp_roster` (
  `ser` int(6) NOT NULL,
  `jobid` int(5) NOT NULL,
  `siteId` int(4) NOT NULL,
  `empId` int(4) NOT NULL,
  `jobDate` date NOT NULL,
  `timeStart` datetime NOT NULL,
  `timeEnd` datetime NOT NULL,
  `jobStatus` int(1) NOT NULL,
  PRIMARY KEY (`jobid`),
  KEY `siteId` (`siteId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `emp_signin`
--

DROP TABLE IF EXISTS `emp_signin`;
CREATE TABLE IF NOT EXISTS `emp_signin` (
  `ser` int(4) NOT NULL,
  `userId` varchar(12) NOT NULL,
  `userPassword` varchar(15) NOT NULL,
  `pwdCreateDate` date NOT NULL,
  `pwdUpdateDate` date NOT NULL,
  `secretStr` varchar(10) NOT NULL,
  `orgId` int(6) NOT NULL,
  `empId` int(4) NOT NULL,
  PRIMARY KEY (`empId`),
  UNIQUE KEY `userId` (`userId`),
  UNIQUE KEY `userPassword` (`userPassword`),
  UNIQUE KEY `secretStr` (`secretStr`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `emp_signin`
--

INSERT INTO `emp_signin` (`ser`, `userId`, `userPassword`, `pwdCreateDate`, `pwdUpdateDate`, `secretStr`, `orgId`, `empId`) VALUES
(1, 'admin', 'admin', '2021-08-11', '2021-08-11', 'abcd1234', 1001, 1001),
(4, '1004', 'qwe1004', '2021-08-23', '2021-08-23', 'sre1004rtm', 1001, 1004),
(3, '1003', 'qwe1003', '2021-08-23', '2021-08-23', 'sre1003rtm', 1001, 1003),
(2, '1002', 'qwe1002', '2021-08-23', '2021-08-23', 'sre1002rtm', 1001, 1002);

-- --------------------------------------------------------

--
-- Table structure for table `job_roster`
--

DROP TABLE IF EXISTS `job_roster`;
CREATE TABLE IF NOT EXISTS `job_roster` (
  `ser` int(6) NOT NULL,
  `jobId` int(6) NOT NULL,
  `siteId` int(4) NOT NULL,
  `jobDate` date NOT NULL,
  `weekId` int(2) NOT NULL,
  `empId` int(4) NOT NULL,
  `orgId` int(4) NOT NULL,
  `clockin` datetime NOT NULL,
  `clockout` datetime NOT NULL,
  `jobStatus` int(1) NOT NULL,
  PRIMARY KEY (`jobId`),
  KEY `empId` (`empId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `job_roster`
--

INSERT INTO `job_roster` (`ser`, `jobId`, `siteId`, `jobDate`, `weekId`, `empId`, `orgId`, `clockin`, `clockout`, `jobStatus`) VALUES
(1, 2001, 1001, '2021-08-25', 34, 1002, 1001, '2021-08-25 05:00:00', '2021-08-28 16:20:39', 0),
(2, 2002, 1001, '2021-08-29', 34, 1003, 1001, '2021-08-29 04:20:39', '2021-08-29 10:20:39', 0),
(3, 2003, 1001, '2021-08-30', 34, 1003, 1001, '2021-08-30 19:38:35', '2021-08-30 23:38:35', 0),
(4, 2004, 1001, '2021-08-30', 34, 1003, 1001, '2021-08-30 10:30:35', '2021-08-30 17:30:35', 0),
(5, 2005, 1001, '2021-08-31', 34, 1002, 1001, '2021-08-31 14:00:00', '2021-09-01 04:00:00', 0),
(6, 2006, 1001, '2021-08-31', 34, 1002, 1001, '2021-08-31 17:30:00', '2021-09-01 08:00:00', 0),
(7, 2007, 1001, '2021-08-31', 34, 1002, 1001, '2021-08-31 03:30:00', '2021-08-31 20:00:00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `org_nav_contents`
--

DROP TABLE IF EXISTS `org_nav_contents`;
CREATE TABLE IF NOT EXISTS `org_nav_contents` (
  `ser` int(2) NOT NULL,
  `serviceId` int(2) NOT NULL,
  `serviceName` varchar(15) NOT NULL,
  `routeId` varchar(15) NOT NULL,
  PRIMARY KEY (`ser`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `org_reg`
--

DROP TABLE IF EXISTS `org_reg`;
CREATE TABLE IF NOT EXISTS `org_reg` (
  `ser` int(4) NOT NULL,
  `orgName` varchar(30) NOT NULL,
  `orgType` int(2) NOT NULL,
  `orgDesc` varchar(200) NOT NULL,
  `orgId` int(6) NOT NULL,
  `userName` varchar(12) NOT NULL,
  `orgEmail` varchar(20) NOT NULL,
  `orgAddress` varchar(70) NOT NULL,
  `orgSlogan` varchar(70) NOT NULL,
  `currencyCode` int(2) NOT NULL,
  `contactNo` varchar(15) NOT NULL,
  `regDate` date NOT NULL,
  `isActive` int(1) NOT NULL,
  PRIMARY KEY (`ser`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `shift_template`
--

DROP TABLE IF EXISTS `shift_template`;
CREATE TABLE IF NOT EXISTS `shift_template` (
  `ser` int(4) NOT NULL,
  `siteId` int(4) NOT NULL,
  `dayId` int(1) NOT NULL,
  `timeStart` time NOT NULL,
  `shiftDuration` int(2) NOT NULL,
  `guardReqr` int(3) NOT NULL,
  PRIMARY KEY (`ser`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `site_info`
--

DROP TABLE IF EXISTS `site_info`;
CREATE TABLE IF NOT EXISTS `site_info` (
  `ser` int(4) NOT NULL,
  `siteId` int(4) NOT NULL,
  `SiteName` varchar(30) NOT NULL,
  `contractId` int(4) NOT NULL,
  `siteAddress` varchar(50) NOT NULL,
  `lat` double(11,7) NOT NULL,
  `lng` double(11,7) NOT NULL,
  PRIMARY KEY (`siteId`),
  KEY `contractId` (`contractId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Stand-in structure for view `viewworksum`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `viewworksum`;
CREATE TABLE IF NOT EXISTS `viewworksum` (
`ser` int(6)
,`jobId` int(6)
,`empId` int(4)
,`jobDate` date
,`wkDayId` int(1)
,`clockin` datetime
,`clockout` datetime
,`totalHrs` decimal(13,4)
,`nightHrs` decimal(14,4)
);

-- --------------------------------------------------------

--
-- Structure for view `viewworksum`
--
DROP TABLE IF EXISTS `viewworksum`;

DROP VIEW IF EXISTS `viewworksum`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `viewworksum`  AS  select `job_roster`.`ser` AS `ser`,`job_roster`.`jobId` AS `jobId`,`job_roster`.`empId` AS `empId`,`job_roster`.`jobDate` AS `jobDate`,weekday(`job_roster`.`jobDate`) AS `wkDayId`,`job_roster`.`clockin` AS `clockin`,`job_roster`.`clockout` AS `clockout`,(time_to_sec(timediff(`job_roster`.`clockout`,`job_roster`.`clockin`)) / 3600) AS `totalHrs`,(case when ((time_to_sec(timediff(`job_roster`.`clockout`,`job_roster`.`clockin`)) / 3600) > 24.0) then -(1) when ((cast(concat(`job_roster`.`jobDate`,' ','06:00:00') as datetime) <= `job_roster`.`clockin`) and (cast(concat(`job_roster`.`jobDate`,' ','18:00:00') as datetime) >= `job_roster`.`clockout`)) then 0.00 when ((cast(concat(`job_roster`.`jobDate`,' ','06:00:00') as datetime) >= `job_roster`.`clockin`) and (cast(concat(`job_roster`.`jobDate`,' ','18:00:00') as datetime) >= `job_roster`.`clockout`)) then (time_to_sec(timediff(cast(concat(`job_roster`.`jobDate`,' ','06:00:00') as datetime),`job_roster`.`clockin`)) / 3600) when ((cast(concat(`job_roster`.`jobDate`,' ','18:00:00') as datetime) <= `job_roster`.`clockin`) and (cast(concat(`job_roster`.`jobDate`,' ','06:00:00') as datetime) <= `job_roster`.`clockout`)) then (time_to_sec(timediff(`job_roster`.`clockout`,`job_roster`.`clockin`)) / 3600) when ((timediff(`job_roster`.`clockout`,cast(concat(`job_roster`.`jobDate`,' ','18:00:00') as datetime)) >= '12:00:00') and (cast(concat(`job_roster`.`jobDate`,' ','18:00:00') as datetime) >= `job_roster`.`clockin`)) then 12.00 when ((cast(concat(`job_roster`.`jobDate`,' ','06:00:00') as datetime) <= `job_roster`.`clockin`) and (cast(concat(`job_roster`.`jobDate`,' ','18:00:00') as datetime) <= `job_roster`.`clockout`)) then (time_to_sec(timediff(`job_roster`.`clockout`,cast(concat(`job_roster`.`jobDate`,' ','18:00:00') as datetime))) / 3600) when ((cast(concat(`job_roster`.`jobDate`,' ','06:00:00') as datetime) >= `job_roster`.`clockin`) and (cast(concat(`job_roster`.`jobDate`,' ','18:00:00') as datetime) <= `job_roster`.`clockout`)) then ((time_to_sec(timediff(`job_roster`.`clockout`,`job_roster`.`clockin`)) / 3600) - 12.0) end) AS `nightHrs` from `job_roster` ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
