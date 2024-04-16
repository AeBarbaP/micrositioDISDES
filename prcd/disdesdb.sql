-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 09, 2024 at 11:29 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `disdesdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `categorias_b`
--

CREATE TABLE `categorias_b` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categorias_b`
--

INSERT INTO `categorias_b` (`id`, `nombre`) VALUES
(1, 'Farmacia'),
(2, 'Restaurant'),
(3, 'Zapatería'),
(4, 'Supermerado'),
(5, 'Tienda Departamental'),
(6, 'Tienda de Conveniencia'),
(7, 'Abarrotes'),
(8, 'Ropa'),
(9, 'Pastelería'),
(10, 'Panadería'),
(11, 'Dulcería'),
(12, 'Frutería'),
(13, 'Carnicería'),
(14, 'Servicio'),
(15, 'Ferretería');

-- --------------------------------------------------------

--
-- Table structure for table `login_negocios`
--

CREATE TABLE `login_negocios` (
  `id` int(11) NOT NULL,
  `id_negocio` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `pdw` varchar(20) NOT NULL,
  `perfil` int(11) NOT NULL COMMENT '1.- superadmin\r\n2.- usr oficina\r\n3.- empresa'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login_negocios`
--

INSERT INTO `login_negocios` (`id`, `id_negocio`, `username`, `pdw`, `perfil`) VALUES
(1, 'rfc', 'aass', '123456789', 3),
(2, 'GCZ950620HG5', 'cande', '123456789', 3),
(3, 'GCZ950620HG5', 'cande', '123456789', 3),
(4, 'GCZ950620HG5', 'cande', '123456789', 3),
(5, 'GCZ950620HG5', 'cande', '123456789', 3),
(6, 'GCZ950620HG5', 'cande', '1548', 3),
(7, 'GCZ950620HG5', 'cande', '1548', 3),
(8, 'BHZ5869365JU4', 'bbros', '123456789', 3),
(9, 'BHZ5869365JU4', 'bbros', '123456', 3),
(10, 'BHZ5869365JU4', 'bbros', '123456789', 3);

-- --------------------------------------------------------

--
-- Table structure for table `negocios`
--

CREATE TABLE `negocios` (
  `id` int(11) NOT NULL,
  `nombre_rs` varchar(250) NOT NULL COMMENT 'Nombre completo de la persona Física o Razon Social de persona Moral',
  `rfc` varchar(14) NOT NULL,
  `representante` varchar(150) NOT NULL COMMENT 'Nombre del representante legal',
  `tipo_sat` varchar(10) NOT NULL COMMENT 'Persona Física o Persona Moral',
  `celular_wa` int(11) NOT NULL,
  `telefono` int(11) NOT NULL,
  `e_mail` varchar(150) NOT NULL,
  `categoria` int(11) NOT NULL,
  `logo` varchar(150) DEFAULT NULL,
  `calle` varchar(100) NOT NULL,
  `num_ext` varchar(5) NOT NULL,
  `num_int` varchar(5) NOT NULL,
  `colonia` varchar(100) NOT NULL,
  `localidad` varchar(100) NOT NULL,
  `municipio` varchar(100) NOT NULL,
  `estado` varchar(15) NOT NULL,
  `zip_code` int(6) NOT NULL,
  `descuento` int(3) NOT NULL COMMENT 'Porcentaje de descuento registrado',
  `ubicacionMaps` longtext NOT NULL,
  `link` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `negocios`
--

INSERT INTO `negocios` (`id`, `nombre_rs`, `rfc`, `representante`, `tipo_sat`, `celular_wa`, `telefono`, `e_mail`, `categoria`, `logo`, `calle`, `num_ext`, `num_int`, `colonia`, `localidad`, `municipio`, `estado`, `zip_code`, `descuento`, `ubicacionMaps`, `link`) VALUES
(1, 'Empresa de prueba 2', 'DSDSD445308I', 'Conocido', '1', 2147483647, 123123213, 'jesusrlv_rojo@hotmail.com', 0, '', 'acccc', '3', '2', 'dffsd', '0', '0', 'a', 22333, 12, '<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14714.986687512619!2d-102.5683045!3d22.77478075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86824e8e11d7d603%3A0x4196a8a29dca4635!2sZacatecas%20Centro%2C%20Zacatecas%2C%20Zac.!5e0!3m2!1ses!2smx!4v1711746688557!5m2!1ses!2smx\" width=\"100%\" height=\"auto\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>', 'https://www.zacatecas.gob.mx/'),
(7, 'Gorditas Cande', 'GCZ950620HG5', 'Fulanito', '2', 2147483647, 2147483647, 'cande@gmail.com', 2, 'logo_GCZ950620HG5.png', 'Conos', '45', 'A', 'Santa Mónica', 'Santa Mónic', 'Guadalupe', 'Zacatecas', 99581, 10, '', ''),
(10, 'B Hermanos', 'BHZ5869365JU4', 'Fulanito', '2', 2147483647, 49215789, 'bhermanos@info.com', 4, 'logo_BHZ5869365JU4.png', 'conocido', '74', 'd', 'fdios', 'djs', 'gopw', 'gpold´ki', 74, 12, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `personas_autorizadas`
--

CREATE TABLE `personas_autorizadas` (
  `id` int(11) NOT NULL,
  `curp_pcd` varchar(20) NOT NULL COMMENT 'curp de la PCD a la que se asigna',
  `nombre` varchar(60) NOT NULL,
  `apellido_p` varchar(50) NOT NULL,
  `apellido_m` varchar(50) NOT NULL,
  `parentesco` varchar(50) NOT NULL,
  `estatus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `registro_pcd`
--

CREATE TABLE `registro_pcd` (
  `id` int(11) NOT NULL,
  `num_expediente` varchar(15) NOT NULL,
  `curp` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tickets`
--

CREATE TABLE `tickets` (
  `id` int(11) NOT NULL,
  `id_negocio` varchar(14) NOT NULL,
  `num_ticket` varchar(20) NOT NULL,
  `total_venta` varchar(8) NOT NULL COMMENT 'Total del ticket de venta en el que se aplicó el descuento',
  `fecha` datetime NOT NULL,
  `curp_pcd` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categorias_b`
--
ALTER TABLE `categorias_b`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login_negocios`
--
ALTER TABLE `login_negocios`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `negocios`
--
ALTER TABLE `negocios`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personas_autorizadas`
--
ALTER TABLE `personas_autorizadas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registro_pcd`
--
ALTER TABLE `registro_pcd`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categorias_b`
--
ALTER TABLE `categorias_b`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `login_negocios`
--
ALTER TABLE `login_negocios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `negocios`
--
ALTER TABLE `negocios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `personas_autorizadas`
--
ALTER TABLE `personas_autorizadas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `registro_pcd`
--
ALTER TABLE `registro_pcd`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tickets`
--
ALTER TABLE `tickets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
