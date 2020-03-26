-- MySQL Workbench Synchronization
-- Generated: 2020-03-25 18:53
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: char9

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `appTeam` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE IF NOT EXISTS `appTeam`.`usuarios` (
  `usu_id` SMALLINT(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `usu_nombre` VARCHAR(25) NOT NULL,
  `usu_apellido` VARCHAR(25) NOT NULL,
  `usu_password` BLOB NOT NULL,
  `usu_documento` VARCHAR(15) NOT NULL,
  `usu_email` VARCHAR(50) NOT NULL,
  `usu_fecreacion` DATETIME NOT NULL,
  `usu_sesion` SMALLINT(5) NOT NULL,
  PRIMARY KEY (`usu_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `appTeam`.`tiposdocumentos` (
  `tid_id` SMALLINT(2) UNSIGNED NOT NULL AUTO_INCREMENT,
  `tid_tipodocumento` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`tid_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `appTeam`.`empleados` (
  `emp_id` SMALLINT(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `emp_tipodocumento` SMALLINT(2) UNSIGNED NOT NULL,
  `emp_documento` VARCHAR(15) NOT NULL,
  `emp_nombre` VARCHAR(25) NOT NULL,
  `emp_apellido` VARCHAR(25) NOT NULL,
  `emp_cargo` SMALLINT(2) UNSIGNED NOT NULL,
  `emp_foto` VARCHAR(150) NOT NULL,
  `emp_telefono` VARCHAR(25) NOT NULL,
  `emp_email` VARCHAR(50) NOT NULL,
  `emp_descripcion` LONGTEXT NULL DEFAULT NULL,
  `emp_fecreacion` DATETIME NOT NULL,
  `emp_sesion` SMALLINT(5) UNSIGNED NOT NULL,
  PRIMARY KEY (`emp_id`),
  INDEX `tipodocumento_empleado_idx` (`emp_tipodocumento` ASC) VISIBLE,
  INDEX `cargo_empleado_idx` (`emp_cargo` ASC) VISIBLE,
  CONSTRAINT `tipodocumento_empleado`
    FOREIGN KEY (`emp_tipodocumento`)
    REFERENCES `appTeam`.`tiposdocumentos` (`tid_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `cargo_empleado`
    FOREIGN KEY (`emp_cargo`)
    REFERENCES `appTeam`.`cargos` (`car_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `appTeam`.`cargos` (
  `car_id` SMALLINT(2) UNSIGNED NOT NULL AUTO_INCREMENT,
  `car_nombre` VARCHAR(45) NOT NULL,
  `car_observacion` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`car_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
