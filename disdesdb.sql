-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-03-2024 a las 19:15:09
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `disdesdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `negocios`
--

CREATE TABLE `negocios` (
  `id` int(11) NOT NULL,
  `nombre_rs` varchar(250) NOT NULL COMMENT 'Nombre completo de la persona Física o Razon Social de persona Moral',
  `rfc` varchar(14) NOT NULL,
  `representante` varchar(150) NOT NULL COMMENT 'Nombre del representante legal',
  `contacto` varchar(100) NOT NULL COMMENT 'Nombre completo del contacto',
  `tipo_sat` varchar(10) NOT NULL COMMENT 'Persona Física o Persona Moral',
  `celular_wa` int(11) NOT NULL,
  `telefono` int(11) NOT NULL,
  `e_mail` varchar(150) NOT NULL,
  `calle` varchar(100) NOT NULL,
  `num_ext` varchar(5) NOT NULL,
  `num_int` varchar(5) NOT NULL,
  `colonia` varchar(100) NOT NULL,
  `localidad` int(25) NOT NULL,
  `municipio` int(15) NOT NULL,
  `estado` varchar(15) NOT NULL,
  `zip_code` int(6) NOT NULL,
  `descuento` int(3) NOT NULL COMMENT 'Porcentaje de descuento registrado'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas_autorizadas`
--

CREATE TABLE `personas_autorizadas` (
  `id` int(11) NOT NULL,
  `curp_pcd` varchar(20) NOT NULL COMMENT 'curp de la PCD a la que se asigna',
  `nombre` varchar(60) NOT NULL,
  `apellido_p` varchar(50) NOT NULL,
  `apellido_m` varchar(50) NOT NULL,
  `parentesco` varchar(50) NOT NULL,
  `estatus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro_pcd`
--

CREATE TABLE `registro_pcd` (
  `id` int(11) NOT NULL,
  `num_expediente` varchar(15) NOT NULL,
  `curp` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tickets`
--

CREATE TABLE `tickets` (
  `id` int(11) NOT NULL,
  `rfc` varchar(14) NOT NULL,
  `num_ticket` varchar(20) NOT NULL,
  `total_venta` varchar(8) NOT NULL COMMENT 'Total del ticket de venta en el que se aplicó el descuento',
  `fecha` datetime NOT NULL,
  `curp_pcd` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `negocios`
--
ALTER TABLE `negocios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `personas_autorizadas`
--
ALTER TABLE `personas_autorizadas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `registro_pcd`
--
ALTER TABLE `registro_pcd`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `negocios`
--
ALTER TABLE `negocios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `personas_autorizadas`
--
ALTER TABLE `personas_autorizadas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `registro_pcd`
--
ALTER TABLE `registro_pcd`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tickets`
--
ALTER TABLE `tickets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
