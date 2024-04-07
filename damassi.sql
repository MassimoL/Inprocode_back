-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-04-2024 a las 09:10:53
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `damassi`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calendarios`
--

CREATE TABLE `calendarios` (
  `id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `calendarios`
--

INSERT INTO `calendarios` (`id`, `title`, `date`) VALUES
(1, 'Evento 1', '2024-04-04'),
(3, 'Evento 2', '2024-04-05'),
(4, 'Evento 3', '2024-04-06'),
(5, 'Entrenamiento 1', '2024-04-07'),
(6, 'Entrenamiento 2', '2024-04-08'),
(8, 'Entrenamiento 3', '2024-04-09'),
(9, 'Entrenamiento 4', '2024-04-10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `charts`
--

CREATE TABLE `charts` (
  `id` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `colorcode` varchar(100) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `charts`
--

INSERT INTO `charts` (`id`, `year`, `amount`, `colorcode`, `state`) VALUES
(3, 2000, 4000, 'grey', 1),
(4, 2001, 5000, 'red', 1),
(5, 2002, 5500, 'grey', 1),
(6, 2003, 6000, 'red', 1),
(7, 2004, 2000, 'grey', 1),
(8, 2005, 3100, 'red', 1),
(9, 2006, 700, 'grey', 1),
(10, 2007, 6000, 'red', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `maps`
--

CREATE TABLE `maps` (
  `id` int(11) NOT NULL,
  `location` varchar(30) NOT NULL,
  `latitude` varchar(100) NOT NULL,
  `longitude` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `maps`
--

INSERT INTO `maps` (`id`, `location`, `latitude`, `longitude`) VALUES
(3, 'Sagrada Família', '41.3946613', '2.1614774'),
(4, 'Monumental', '41.4019832', '2.1670632'),
(5, 'Parco Güell', '41.4043921', '2.1590992'),
(6, 'Plaça de Catalunya', '41.3839041', '2.1742016'),
(7, 'Parc de Les Aigües', '41.4051357', '2.1660445'),
(8, 'Casa Vicens', '41.3947187', '2.1425381');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(100) NOT NULL,
  `price` double NOT NULL,
  `stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `name`, `description`, `price`, `stock`) VALUES
(10, 'Sprite', 'Bebida con burbujas', 887, 787),
(11, 'Shampoo', 'Detergente cabello', 14, 54),
(12, 'iPhone', 'Móvil', 799, 99),
(13, 'Agua', 'Vichy', 56, 35),
(14, 'Gel baño', 'Detergente cuerpo', 7, 800),
(15, 'Motorola', 'Móvil', 789, 789),
(25, 'Farina', 'Harina', 1, 12);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `calendarios`
--
ALTER TABLE `calendarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `charts`
--
ALTER TABLE `charts`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `maps`
--
ALTER TABLE `maps`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `calendarios`
--
ALTER TABLE `calendarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `charts`
--
ALTER TABLE `charts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `maps`
--
ALTER TABLE `maps`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
