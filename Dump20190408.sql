CREATE DATABASE  IF NOT EXISTS `news` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `news`;
-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: localhost    Database: news
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `comments` (
  `idComment` int(11) NOT NULL AUTO_INCREMENT,
  `message` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `idUser` int(11) DEFAULT NULL,
  `idPost` int(11) DEFAULT NULL,
  PRIMARY KEY (`idComment`),
  KEY `FK_Comments_Posts1` (`idPost`),
  KEY `FK_Comments_User1` (`idUser`),
  CONSTRAINT `FK_Comments_Posts1` FOREIGN KEY (`idPost`) REFERENCES `posts` (`idpost`),
  CONSTRAINT `FK_Comments_User1` FOREIGN KEY (`idUser`) REFERENCES `user` (`iduser`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,'asdas',1,1),(2,'sdfsd',2,2),(3,'sdfsd',3,2),(4,'sdfsdf',4,3),(5,'swefwe',5,4),(6,'zxvca',6,5);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contentspost`
--

DROP TABLE IF EXISTS `contentspost`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `contentspost` (
  `idContent` int(11) NOT NULL AUTO_INCREMENT,
  `contentPost` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `idPost` int(11) DEFAULT NULL,
  PRIMARY KEY (`idContent`),
  KEY `FK_ContentsPost_Posts` (`idPost`),
  CONSTRAINT `FK_ContentsPost_Posts` FOREIGN KEY (`idPost`) REFERENCES `posts` (`idpost`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contentspost`
--

LOCK TABLES `contentspost` WRITE;
/*!40000 ALTER TABLE `contentspost` DISABLE KEYS */;
/*!40000 ALTER TABLE `contentspost` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `images` (
  `idImage` int(11) NOT NULL AUTO_INCREMENT,
  `link` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `fileImage` longblob,
  `idPost` int(11) DEFAULT NULL,
  PRIMARY KEY (`idImage`),
  KEY `FK_Images_Posts` (`idPost`),
  CONSTRAINT `FK_Images_Posts` FOREIGN KEY (`idPost`) REFERENCES `posts` (`idpost`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `posts` (
  `idPost` int(11) NOT NULL AUTO_INCREMENT,
  `tag` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `title` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `describe` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `dateAdded` date DEFAULT NULL,
  `numberOfRead` varchar(45) DEFAULT NULL,
  `topic` varchar(45) DEFAULT NULL,
  `img` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idPost`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'new','A Discount Toner Cartridge Is','Lorem ipsum dolor sit amet, consectetur adipisicing elit','2019-04-04',NULL,'Thể thao','img/e1.jpg'),(2,'new','Đội tuyển Việt Nam xếp thứ 98 thế giới','Không đá trận nào trong ','2019-04-04',NULL,'Thể thao','img/a1.jpg'),(3,'hot','Mỹ muốn thắt chặt quan hệ quốc phòng','Trợ lý Bộ trưởng Quốc phòng ','2019-02-02',NULL,'Chính trị','img/e3.jpg'),(4,'hot','Vụ tiến sĩ kiện Bộ trưởng: To a ahsfjhaksfh kjashfkjahs kfahsk fjhakjfh aksj fhakjsf hkash kajshf kasjh kajshkjash fas','Tòa án nhân dân các cấp','2019-03-02',NULL,'Chính trị','img/e4.jpg'),(5,'new','Giọng ải giọng ai','Thứ 6 hàng tuần','2019-01-05',NULL,'Giải trí','img/h1.jpg'),(6,'hot','Món Pizza','Thơm ngon, hấp dẫn','2019-10-04',NULL,'Ẩm thực','img/g1.jpg'),(7,'hot','Món bánh mì đặc biệt','Mùi vị thơm ngon, hấp dẫn','2019-08-04',NULL,'Ẩm thực','img/g2.jpg'),(8,'new','Món vịt quay mật ong','Cay, ngon, thơm, bổ dưỡng','2019-10-04',NULL,'Ẩm thực','img/g3.jpg'),(9,'hot','Nhanh như chớp','Vui nhộn, hài hước','2019-11-05',NULL,'Giải trí','img/h3.jpg'),(10,'hot','Đi tìm ẩn số','Kịch tính,hấp dẫn','2019-12-05',NULL,'Giải trí','img/h2.jpg'),(11,'new','Người ấy là ai','Vui nhộn, hài hước','2019-10-03',NULL,'Giải trí','img/h4.jpg');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `idUser` int(11) NOT NULL AUTO_INCREMENT,
  `fullName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'a','a'),(2,'b','dsd'),(3,'c','asda'),(4,'d','ada'),(5,'e','asd'),(6,'f','asd'),(7,'g','asd');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-08  0:03:05
