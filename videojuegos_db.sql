-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-11-2024 a las 18:59:25
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `videojuegos_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `plataforma` varchar(255) NOT NULL,
  `genero` varchar(255) NOT NULL,
  `videojuegoId` int(11) NOT NULL,
  `precio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro`
--

CREATE TABLE `registro` (
  `id` int(11) NOT NULL,
  `juegos` text NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `fecha` timestamp(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `registro`
--

INSERT INTO `registro` (`id`, `juegos`, `total`, `fecha`) VALUES
(2, '1', 68.44, '2024-11-30 02:26:33.466199'),
(3, '3', 136.88, '2024-11-30 16:28:13.711101'),
(4, '3', 56.84, '2024-11-30 16:29:00.968839'),
(5, '2', 80.04, '2024-11-30 16:29:33.075898'),
(6, '1,2,3', 205.32, '2024-11-30 16:30:26.336127'),
(7, '2,3', 136.88, '2024-11-30 16:30:41.921425');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `videojuegos`
--

CREATE TABLE `videojuegos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `genero` varchar(255) NOT NULL,
  `plataforma` varchar(255) NOT NULL,
  `fecha_lanzamiento` datetime NOT NULL,
  `imagen_url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `videojuegos`
--

INSERT INTO `videojuegos` (`id`, `nombre`, `descripcion`, `precio`, `genero`, `plataforma`, `fecha_lanzamiento`, `imagen_url`) VALUES
(1, 'Red Dead Redemption 2', 'Un épico juego de acción y aventuras ambientado en el Salvaje Oeste.', 59.99, 'Acción y aventura', 'PlayStation, Xbox, PC', '2018-10-26 00:00:00', 'https://www.popzara.com/wp-content/uploads/2018/11/rdr2_feature.jpg'),
(2, 'Resident Evil 4 Remake', 'Una versión completamente renovada del clásico juego de terror y supervivencia.', 69.99, 'Terror y supervivencia', 'PlayStation, Xbox, PC', '2023-03-24 00:00:00', 'https://cdn.wccftech.com/wp-content/uploads/2023/02/WCCFresidentevil4remake14.jpg'),
(3, 'The Witcher 3: Wild Hunt', 'Un RPG de mundo abierto con una narrativa inmersiva basado en la saga de Geralt de Rivia.', 49.99, 'RPG', 'PlayStation, Xbox, Nintendo Switch, PC', '2015-05-19 00:00:00', 'https://th.bing.com/th/id/R.ef088bdab155160154141fa3898892af?rik=fFj3Q34goxm7Jg&pid=ImgRaw&r=0'),
(5, 'FC24', 'EA SPORTS FC™ 24 representa una nueva era para el Juego de Todos: más de 19,000 futbolistas con licencia total, más de 700 equipos y más de 30 ligas en la experiencia futbolística más auténtica jamás creada.', 55.99, 'Deportes', 'Xbox', '2023-07-29 00:00:00', 'https://th.bing.com/th/id/OIP.lH9EKHgI7DV0xxT7baHimgHaFj?rs=1&pid=ImgDetMain'),
(6, 'The Legend of Zelda: Tears of the Kingdom', 'Una nueva aventura épica en el universo de Zelda, con un mundo vasto lleno de misterios, acertijos y enemigos. Explora la tierra de Hyrule y descubre los secretos de las ruinas y templos perdidos.', 59.99, 'Aventura, RPG', 'Nintendo Switch', '2023-05-12 00:00:00', 'https://th.bing.com/th/id/OIP.5z2_cIAOdBJxBiPLxRlteAHaEK?rs=1&pid=ImgDetMain'),
(7, 'Spider-Man 2', 'Spider-Man regresa con una historia emocionante, donde Peter Parker y Miles Morales luchan juntos contra un nuevo villano. Los gráficos mejorados y la jugabilidad inmersiva te sumergirán en la ciudad de Nueva York.', 69.99, 'Acción, Aventura', 'PS5', '2023-10-20 00:00:00', 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/06/marvels-spider-man-2-3065290.jpg?tf=3840x'),
(8, 'Star Wars: Jedi Survivor', 'La continuación de Jedi: Fallen Order, esta vez con un Cal Kestis más fuerte en un nuevo viaje por la galaxia. Lucha contra las fuerzas del Imperio mientras exploras nuevos mundos.', 59.99, 'Acción, Aventura', 'PC, PS5, Xbox Series X/S', '2023-04-28 00:00:00', 'https://gamingbolt.com/wp-content/uploads/2022/12/star-wars-jedi-survivor-1024x576.jpg'),
(9, 'Call of Duty: Modern Warfare III', 'La última entrega de la saga Modern Warfare, con un modo de campaña emocionante, así como nuevas características multijugador. Enfréntate a enemigos globales y vive combates intensos con gráficos de última generación.', 69.99, 'Acción, Shooter', 'PS5, Xbox Series X/S, PC', '2023-11-10 00:00:00', 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/08/call-of-duty-modern-warfare-3-pre-order-bonuses.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_e0dbbc3bfd3ea8f367b6ca55403` (`videojuegoId`);

--
-- Indices de la tabla `registro`
--
ALTER TABLE `registro`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `videojuegos`
--
ALTER TABLE `videojuegos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=141;

--
-- AUTO_INCREMENT de la tabla `registro`
--
ALTER TABLE `registro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `videojuegos`
--
ALTER TABLE `videojuegos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `FK_e0dbbc3bfd3ea8f367b6ca55403` FOREIGN KEY (`videojuegoId`) REFERENCES `videojuegos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
