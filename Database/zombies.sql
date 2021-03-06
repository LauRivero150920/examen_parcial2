-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-10-2021 a las 00:26:38
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `zombies`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_zombies` ()  SELECT Z.nombre_completo nombre_completo, E.descripcion estado, Z.created_at created_at
FROM nuevos_zombies Z, estados E
WHERE Z.estado = E.id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `registar_zombie` (IN `unombre_completo` VARCHAR(400))  INSERT INTO nuevos_zombies
(nombre_completo, estado)
VALUES (unombre_completo, 1)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `suma_estados_zombies` ()  SELECT estado, COUNT(estado) cantidad
FROM nuevos_zombies
GROUP BY estado$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `suma_zombies` ()  SELECT COUNT(id) AS total_zombies
FROM nuevos_zombies$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estados`
--

CREATE TABLE `estados` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(400) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `estados`
--

INSERT INTO `estados` (`id`, `descripcion`, `created_at`) VALUES
(1, 'Infección', '2021-10-20 14:53:35'),
(2, 'Desorientación', '2021-10-20 14:53:35'),
(3, 'Violencia', '2021-10-20 14:53:52'),
(4, 'Desmayo', '2021-10-20 14:53:52'),
(5, 'Tranformación', '2021-10-20 14:54:06');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nuevos_zombies`
--

CREATE TABLE `nuevos_zombies` (
  `id` int(11) NOT NULL,
  `nombre_completo` varchar(400) NOT NULL,
  `estado` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `nuevos_zombies`
--

INSERT INTO `nuevos_zombies` (`id`, `nombre_completo`, `estado`, `created_at`) VALUES
(2, 'Shawn Mendes', 2, '2021-10-20 13:25:39'),
(3, 'Zombie 2', 2, '2021-10-20 13:30:19'),
(5, 'Zombie 3', 3, '2021-10-20 13:30:34'),
(6, 'Zombie 4', 4, '2021-10-20 13:30:34'),
(48, 'Zombie nuevo', 5, '2021-10-20 15:37:29'),
(103, 'Lau Rivero', 1, '2021-10-20 16:47:23'),
(108, 'Nuevo Zombie', 1, '2021-10-20 17:30:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `estados`
--
ALTER TABLE `estados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `nuevos_zombies`
--
ALTER TABLE `nuevos_zombies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Estado` (`estado`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `estados`
--
ALTER TABLE `estados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `nuevos_zombies`
--
ALTER TABLE `nuevos_zombies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `nuevos_zombies`
--
ALTER TABLE `nuevos_zombies`
  ADD CONSTRAINT `nuevos_zombies_ibfk_1` FOREIGN KEY (`estado`) REFERENCES `estados` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
