-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 14, 2025 at 08:26 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `uasdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `artikel`
--

CREATE TABLE `artikel` (
  `id_artikel` int(11) NOT NULL,
  `judul` varchar(255) DEFAULT NULL,
  `foto_artikel` varchar(255) DEFAULT NULL,
  `isi` text DEFAULT NULL,
  `author_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `kategori` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `artikel`
--

INSERT INTO `artikel` (`id_artikel`, `judul`, `foto_artikel`, `isi`, `author_id`, `created_at`, `updated_at`, `kategori`) VALUES
(2, 'Fernando Alonso Ingin Aston Martin Secepatnya Bangkit Dari Keterpurukan', '1717351426211.jpg', 'Setelah mengawali musim F1 2024 dengan cukup impresif, Fernando Alonso lagi-lagi struggle seiring berjalannya waktu. Pebalap paling tua yang masih aktif di grid itu hanya bisa start terakhir di Imola, kemudian tersingkir pada sesi Q1 di GP Monako. Hal ini menggambarkan bahwa kecepatan AMR-24 tidak begitu kompetitif dan butuh perbaikan sesegera mungkin.\r\n\r\n\"Akhir pekan ini sangat penting untuk memahami kelemahan kami, memahami mobil, dan meningkatkan kemampuan kami. Anda selalu belajar lebih banyak dari kesulitan dibandingkan dari kemenangan, karena masalah menjadi lebih besar seiring dengan euforia,\" ucap Alonso saat diwawancara oleh media setempat.\r\n\r\n\"Kami belajar banyak dan menatap ke depan untuk sisa tahun ini, 2025 dan 2026. Dua balapan ini telah menjadi peringatan besar bagi tim dan itu akan sangat baik bagi kami,\" tukas rekan setim dari Lance Stroll tersebut.\r\n\r\n\'Penyakit\' yang dimiliki oleh Aston Martin sejatinya tidak berbeda jauh dari tahun lalu. Pada musim 2023 kemarin, Alonso juga sempat impresif pada seri-seri awal. Ia bahkan rajin naik podium dengan finish ketiga di belakang duo Red Bull. Namun seiring berjalannya waktu, kecepatan Alonso tersaingi oleh para rival seperti Ferrari, Mercedes, ataupun McLaren', 3, '2024-06-01 11:38:14', '2024-06-02 18:03:46', 'Formula 1'),
(3, 'Mick Schumacher Siap Kembali Balapan Di F1 Untuk Alpine', '1717351443877.jpeg', 'Alpine dibiarkan mengamuk akhir pekan lalu di Monaco ketika sepak terjang Esteban Ocon menyebabkan tabrakan dengan rekan setimnya Pierre Gasly. Bruno Famin, kepala tim Alpine, dilaporkan mempertimbangkan untuk memecat Ocon dari F1 Grand Prix Kanada sebagai akibatnya. Oleh karena itu, Schumacher, yang mewakili Alpine di Kejuaraan Ketahanan Dunia, masuk dalam pertimbangan.\r\n\r\n“Semuanya terbuka untuk tahun 2025, semua orang berbicara kepada semua orang,” kata Famin kepada Sky Germany. “Merupakan suatu kesalahan jika Mick tidak ada dalam daftar. Saya sangat senang dengan Mick, dia super cepat. Tetapi di WEC itu bukan hal yang utama, Anda harus membalap dengan level tinggi secara konsisten dan memiliki semangat tim yang baik.\"\r\n\r\n“Saya sangat terkesan dengan dia karena dia sudah mendapatkannya sejak awal. Dia telah menyesuaikan sikapnya dengan balapan jarak jauh pada hari itu. Dia memiliki hubungan yang sangat baik dengan rekan satu timnya.”\r\n\r\nMick Schumacher dipecat oleh Guenther Steiner, yang saat itu menjabat sebagai kepala tim Haas yang kritis terhadap jumlah kecelakaan yang dialaminya. Sejak awal tahun lalu, putra Michael Schumacher ini menjadi pembalap cadangan Mercedes. Namun di tengah kekacauan di Alpine, rute baru dan tak terduga untuk kembali ke grid F1 2025 telah terbuka.\r\n\r\n“Tujuan dan impian saya adalah membalap di Formula 1. Selalu seperti itu dan akan selalu seperti itu. Itulah sebabnya kami harus memastikan bahwa domino sekarang jatuh ke arah saya dan mudah-mudahan saya bisa mendapatkan kursi,\" katanya.\r\n\r\n“Yang bisa saya lakukan hanyalah memberikan performa terbaik saya di WEC dan juga di Formula 1 dan terus tampil baik untuk tim sebagai pembalap cadangan dan terus melakukan diskusi.”', 3, '2024-06-02 17:34:39', '2024-06-02 18:04:03', 'Formula 1'),
(4, 'Real Madrid Juara UCL ke-15, Ini Kata Jose Mourinho!', '1717352345366.jpg', 'Real Madrid juara UCL ke-15 setelah mengalahkan Borussia Dortmund di final dengan skor akhir 2-0. Lalu Mourinho bilang apa? \r\n\r\nReal Madrid kembali mengukir sejarah dengan meraih gelar Liga Champions ke-15 mereka setelah mengalahkan Borussia Dortmund 2-0 di partai final yang menegangkan di Stadion Wembley, London, 2, Juni 2024. \r\n\r\nKemenangan ini semakin memperkuat status Los Blancos sebagai raja Eropa yang tak tertandingi.\r\n\r\nDua gol dari Dani Carvajal dan Vinicius Junior memastikan kemenangan Real Madrid di laga final. \r\n\r\nKemenangan ini terasa istimewa bagi Carlo Ancelotti, pelatih Real Madrid, yang berhasil membawa timnya meraih gelar La Liga dan Liga Champions di musim ini.\r\n\r\nKebahagiaan atas raihan juara ini juga diungkapkan oleh para legenda Real Madrid, seperti Jose Mourinho. \r\n\r\nMantan pelatih Real Madrid ini menyebut bahwa kemenangan ini merupakan hasil kerja keras dan dedikasi semua pihak di klub.\r\n\r\n\"Real Madrid adalah klub yang spesial. Mereka selalu haus akan trofi dan selalu memiliki mental juara. Kemenangan ini adalah hasil dari kerja keras semua pihak di klub, mulai dari pemain, staf pelatih, hingga manajemen,\" ujar Mourinho.\r\n\r\nMourinho juga memberikan pujian khusus kepada Carlo Ancelotti. Menurutnya, Ancelotti adalah pelatih yang tepat untuk membawa Real Madrid kembali ke puncak kejayaan.\r\n\r\n\"Ancelotti adalah pelatih yang fantastis. Dia tahu bagaimana memotivasi pemainnya dan dia memiliki strategi yang jitu. Saya yakin dia akan membawa Real Madrid meraih lebih banyak trofi di masa depan,\" tambah Mourinho\r\n\r\nJose Mourinho juga berujar bahwa Real Madrid tidak terpaku pada filosofi permainan sepak bola, yang terpenting adalah cara memenangkan pertandingan dan membawa pulang piala. \r\n\r\n\"Tidak usah berbicara tentang filosofi (permainan Real Madrid)! Masuklah ke dalam dan lihatlah deretan trofinya! Itulah Real Madrid,\" ujar Mourinho. ', 3, '2024-06-02 18:19:05', '2024-06-02 18:19:05', 'Sepak Bola'),
(5, 'MotoGP Italia 2024: Bagnaia Menang, Ducati Berpesta di Kandang!', '1717384470556.jpg', 'MotoGP Italia 2024 dimenangi oleh pebalap tuan rumah, Francesco Bagnaia. Ducati pun berpesta dengan menguasai empat posisi terdepan.\r\nDalam balapan di Autodromo Internazionale del Mugello, Bagnaia menjadi pemenang setelah mencatatkan waktu 40 menit 51,385 detik dalam 23 putaran.\r\n\r\nRider Ducati lainnya, Enea Bastianini bisa finis kedua dengan catatan waktu 0,799 detik lebih lambat dari Bagnaia. Jorge Martin ada di posisi ketiga.\r\n\r\nPebalap Gresini Racing, Marc Marquez, menempati posisi keempat untuk menegaskan dominasi Ducati. Jagoan GasGas, Pedro Acosta, melengkapi posisi lima besar.\r\n\r\nDengan kemenangan ini, Bagnaia sudah mengoleksi kemenangan keempat di MotoGP 2024. Dia juga menang di MotoGP Qatar, MotoGP Spanyol, dan MotoGP Catalunya.\r\n\r\nSementara itu, Marc Marquez gagal melanjutkan laju raihan podium di MotoGP. DIa selalu meraih podium sejak MotoGP Spanyol, MotoGP Prancis, dan MotoGP Catalunya.\r\n', 3, '2024-06-03 03:14:30', '2024-06-03 03:14:30', 'MotoGP'),
(7, 'artikel 1', '1718083118887.jpg', 'artikel', 3, '2024-06-11 05:18:39', '2024-06-11 05:18:39', 'Formula 1'),
(12, 'Entahlah', '1718121088861.jpg', 'bbbbbbbb', 3, '2024-06-11 15:51:28', '2024-06-11 15:51:28', 'aaa');

-- --------------------------------------------------------

--
-- Table structure for table `author`
--

CREATE TABLE `author` (
  `id_author` int(11) NOT NULL,
  `nama_author` varchar(50) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `author`
--

INSERT INTO `author` (`id_author`, `nama_author`, `user_id`) VALUES
(3, 'Halimun', 2);

-- --------------------------------------------------------

--
-- Table structure for table `komentar`
--

CREATE TABLE `komentar` (
  `id_komentar` int(11) NOT NULL,
  `id_artikel` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `comment_text` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `komentar`
--

INSERT INTO `komentar` (`id_komentar`, `id_artikel`, `user_id`, `comment_text`, `created_at`, `updated_at`) VALUES
(1, 3, 1, 'Makin tidak sabar untuk melihat penampilan Mick Schumacher kembali ke F1', '2024-06-04 05:00:29', '2024-06-04 05:00:29'),
(6, 2, 3, 'LLCKP', '2024-06-05 05:44:50', '2024-06-08 06:33:46'),
(19, 2, 2, 'komentqr1', '2024-06-11 05:19:17', '2024-06-11 05:19:17'),
(20, 2, 3, '123', '2024-06-11 05:20:10', '2024-06-11 05:20:10'),
(21, 7, 3, '1', '2024-06-11 05:20:29', '2024-06-11 05:20:29'),
(23, 7, 5, 'coba 1', '2024-06-11 07:15:34', '2024-06-11 07:15:34');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(50) DEFAULT NULL,
  `foto_profil` varchar(255) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `level_user` enum('1','2') DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `foto_profil`, `email`, `password`, `level_user`, `created_at`, `updated_at`) VALUES
(1, 'Xiaoyu', '1717833604675.jpeg', 'orang@gmail.com', '$2b$10$IWtY3b19vlORdYeK5GcQgOc3IGJupo1/tyZCrp9csNfIQ45Ev.Nzi', '1', '2024-05-29 06:17:52', '2024-06-11 14:41:09'),
(2, 'Zhiwey', '1717509814792.jpg', 'meng@gmail.com', '$2b$10$i2.YP0ZjlcJdLrjrCVgq8ewDmD9CYIxUVfy9VKttkgsVQUTh700Q6', '2', '2024-05-29 07:56:25', '2024-06-04 14:03:34'),
(3, 'Elias', '1717510709587.jpeg', 'aku@gmail.com', '$2b$10$OP9IBPF20c8/BV11P1tZDOF06TmWCUgis.dZMUBH5giKCL9zO5M9C', '1', '2024-06-04 14:17:45', '2024-06-04 14:18:29'),
(5, 'riel', 'profil-default.png', 'ar@gmail.com', '$2b$10$WTXiBivqMbBvb8VcPjbZNulV5LIdkVi4sMZsqr70O.OwJ9VwwF.d2', '1', '2024-06-11 07:09:02', '2024-06-11 07:09:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `artikel`
--
ALTER TABLE `artikel`
  ADD PRIMARY KEY (`id_artikel`);

--
-- Indexes for table `author`
--
ALTER TABLE `author`
  ADD PRIMARY KEY (`id_author`);

--
-- Indexes for table `komentar`
--
ALTER TABLE `komentar`
  ADD PRIMARY KEY (`id_komentar`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `artikel`
--
ALTER TABLE `artikel`
  MODIFY `id_artikel` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `author`
--
ALTER TABLE `author`
  MODIFY `id_author` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `komentar`
--
ALTER TABLE `komentar`
  MODIFY `id_komentar` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
