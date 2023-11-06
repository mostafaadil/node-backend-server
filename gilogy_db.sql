-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 06, 2023 at 06:00 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gilogy_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `awards`
--

CREATE TABLE `awards` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  `result` int(11) DEFAULT NULL,
  `created` timestamp NULL DEFAULT current_timestamp(),
  `updated` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `awards`
--

INSERT INTO `awards` (`id`, `name`, `role`, `result`, `created`, `updated`) VALUES
(1, 'award 1', 2, 12, '2023-10-20 09:25:39', '2023-10-21 08:45:58'),
(2, 'name 1', 12, 3, '2019-10-20 14:34:52', '2023-10-21 08:45:50'),
(3, 'gaining 20 records', 20, 10, '2023-10-21 12:46:17', '2023-10-21 12:46:30');

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `id` int(11) NOT NULL,
  `state_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created` timestamp NULL DEFAULT current_timestamp(),
  `updated` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`id`, `state_id`, `name`, `created`, `updated`) VALUES
(11, 13, 'fdd', '2023-10-23 21:25:05', '2023-10-23 21:25:05'),
(12, 13, 'bahrie', '2023-10-24 08:06:25', '2023-10-24 08:06:25');

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created` timestamp NULL DEFAULT current_timestamp(),
  `updated` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `name`, `created`, `updated`) VALUES
(2, 'sudan', '2023-10-20 07:26:37', '2023-10-20 07:26:37');

-- --------------------------------------------------------

--
-- Table structure for table `poster_awareds`
--

CREATE TABLE `poster_awareds` (
  `id` int(11) NOT NULL,
  `award_id` int(11) DEFAULT NULL,
  `poster_id` int(11) DEFAULT NULL,
  `created` timestamp NULL DEFAULT NULL,
  `updated` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `poster_awareds`
--

INSERT INTO `poster_awareds` (`id`, `award_id`, `poster_id`, `created`, `updated`) VALUES
(10, 3, 9, NULL, '2023-10-24 19:50:04');

-- --------------------------------------------------------

--
-- Table structure for table `recordes`
--

CREATE TABLE `recordes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `mid_name` varchar(200) NOT NULL,
  `year` varchar(250) DEFAULT NULL,
  `country` varchar(200) DEFAULT NULL,
  `unvrecity_id` int(11) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `pages` int(11) DEFAULT NULL,
  `advisors` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT 0,
  `created` timestamp NULL DEFAULT current_timestamp(),
  `updated` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `records_log`
--

CREATE TABLE `records_log` (
  `id` int(11) NOT NULL,
  `record_id` int(11) DEFAULT NULL,
  `poster_id` int(11) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `records_log`
--

INSERT INTO `records_log` (`id`, `record_id`, `poster_id`, `status`, `created`, `updated`) VALUES
(1, NULL, NULL, 0, '2023-10-20 12:49:58', '2023-10-21 08:55:14'),
(2, NULL, NULL, 0, '2019-10-20 14:35:41', '2023-10-21 08:55:14'),
(3, NULL, NULL, 1, '2023-10-21 09:33:28', '2023-10-21 09:33:28'),
(4, NULL, 9, 1, '2023-10-24 21:22:37', '2023-10-24 21:22:37'),
(5, NULL, 8, 1, '2023-10-27 13:32:41', '2023-10-27 13:32:41'),
(6, NULL, 8, 1, '2023-10-27 13:34:06', '2023-10-27 13:34:06');

-- --------------------------------------------------------

--
-- Table structure for table `recored_studants`
--

CREATE TABLE `recored_studants` (
  `id` int(11) NOT NULL,
  `docoter_id` int(11) DEFAULT NULL,
  `studant_id` int(11) DEFAULT NULL,
  `created` timestamp NULL DEFAULT current_timestamp(),
  `updated` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recored_studants`
--

INSERT INTO `recored_studants` (`id`, `docoter_id`, `studant_id`, `created`, `updated`) VALUES
(2, NULL, NULL, '2023-10-20 16:51:01', '2023-10-20 16:51:01'),
(3, NULL, NULL, '2023-10-20 16:51:11', '2023-10-20 16:51:11');

-- --------------------------------------------------------

--
-- Table structure for table `states`
--

CREATE TABLE `states` (
  `id` int(11) NOT NULL,
  `country_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created` timestamp NULL DEFAULT current_timestamp(),
  `updated` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `states`
--

INSERT INTO `states` (`id`, `country_id`, `name`, `created`, `updated`) VALUES
(13, 2, 'khartoum cit', '2023-10-27 09:42:39', '2023-10-27 09:42:39');

-- --------------------------------------------------------

--
-- Table structure for table `unvarsecites`
--

CREATE TABLE `unvarsecites` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  `city_id` int(11) DEFAULT NULL,
  `state_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created` timestamp NULL DEFAULT current_timestamp(),
  `updated` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `country_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `pass` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `created` timestamp NULL DEFAULT current_timestamp(),
  `updated` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `country_id`, `name`, `email`, `pass`, `tel`, `type`, `created`, `updated`) VALUES
(8, NULL, 'harran', 'mostafaadil58@gmail.com', '$2b$10$3FohOiW.5lK0CvZlUl/wrOSQ9TgXj06XVxVXWmeKEDv5.EeMepDNW', NULL, 'admin', '2023-10-21 05:41:31', '2023-10-21 05:41:31'),
(9, NULL, 'ahmed', 'mostafaadil58@gmail.com', '$2b$10$3FohOiW.5lK0CvZlUl/wrOSQ9TgXj06XVxVXWmeKEDv5.EeMepDNW', NULL, 'poster', '2023-10-21 05:41:31', '2023-10-21 05:41:31'),
(10, NULL, NULL, NULL, NULL, NULL, NULL, '2023-10-24 20:25:17', '2023-10-24 20:25:17'),
(11, NULL, NULL, NULL, NULL, NULL, NULL, '2023-10-24 20:26:44', '2023-10-24 20:26:44'),
(12, NULL, 'mff', 'ahmed@gaha.com', '$2b$10$WwaBxpf8XNXn65Rd429TQeBLv4ogkz3lwxT0fTl/477zH5LpE40S2', NULL, 'poster', '2023-10-24 20:27:57', '2023-10-24 20:27:57');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `awards`
--
ALTER TABLE `awards`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `state_id` (`state_id`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `poster_awareds`
--
ALTER TABLE `poster_awareds`
  ADD PRIMARY KEY (`id`),
  ADD KEY `award_id` (`award_id`),
  ADD KEY `poster_id` (`poster_id`);

--
-- Indexes for table `recordes`
--
ALTER TABLE `recordes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `unvrecity_id` (`unvrecity_id`);

--
-- Indexes for table `records_log`
--
ALTER TABLE `records_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `record_id` (`record_id`,`poster_id`),
  ADD KEY `poster_id` (`poster_id`);

--
-- Indexes for table `recored_studants`
--
ALTER TABLE `recored_studants`
  ADD PRIMARY KEY (`id`),
  ADD KEY `docoter_id` (`docoter_id`),
  ADD KEY `studant_id` (`studant_id`);

--
-- Indexes for table `states`
--
ALTER TABLE `states`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_id` (`country_id`);

--
-- Indexes for table `unvarsecites`
--
ALTER TABLE `unvarsecites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_id` (`country_id`),
  ADD KEY `city_id` (`city_id`),
  ADD KEY `state_id` (`state_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_id` (`country_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `awards`
--
ALTER TABLE `awards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `poster_awareds`
--
ALTER TABLE `poster_awareds`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `recordes`
--
ALTER TABLE `recordes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `records_log`
--
ALTER TABLE `records_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `recored_studants`
--
ALTER TABLE `recored_studants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `states`
--
ALTER TABLE `states`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `unvarsecites`
--
ALTER TABLE `unvarsecites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cities`
--
ALTER TABLE `cities`
  ADD CONSTRAINT `cities_ibfk_1` FOREIGN KEY (`state_id`) REFERENCES `states` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `poster_awareds`
--
ALTER TABLE `poster_awareds`
  ADD CONSTRAINT `poster_awareds_ibfk_1` FOREIGN KEY (`award_id`) REFERENCES `awards` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `poster_awareds_ibfk_2` FOREIGN KEY (`poster_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `recordes`
--
ALTER TABLE `recordes`
  ADD CONSTRAINT `recordes_ibfk_1` FOREIGN KEY (`unvrecity_id`) REFERENCES `unvarsecites` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `records_log`
--
ALTER TABLE `records_log`
  ADD CONSTRAINT `records_log_ibfk_1` FOREIGN KEY (`poster_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `records_log_ibfk_2` FOREIGN KEY (`record_id`) REFERENCES `recordes` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `recored_studants`
--
ALTER TABLE `recored_studants`
  ADD CONSTRAINT `recored_studants_ibfk_1` FOREIGN KEY (`docoter_id`) REFERENCES `recordes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `recored_studants_ibfk_2` FOREIGN KEY (`studant_id`) REFERENCES `recordes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `states`
--
ALTER TABLE `states`
  ADD CONSTRAINT `states_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `unvarsecites`
--
ALTER TABLE `unvarsecites`
  ADD CONSTRAINT `unvarsecites_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `unvarsecites_ibfk_2` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `unvarsecites_ibfk_3` FOREIGN KEY (`state_id`) REFERENCES `states` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `unvarsecites_ibfk_4` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `unvarsecites_ibfk_5` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
