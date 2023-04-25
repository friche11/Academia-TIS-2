-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema academia
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema academia
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `academia` DEFAULT CHARACTER SET utf8 ;
USE `academia` ;

-- -----------------------------------------------------
-- Table `academia`.`Personal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `academia`.`Personal` (
  `idPersonal` INT NOT NULL,
  `nome_completo` VARCHAR(45) NOT NULL,
  `data_nascimento` DATE NOT NULL,
  `email` VARCHAR(256) NOT NULL,
  `genero` CHAR(1) NOT NULL,
  `senha` VARCHAR(8) NOT NULL,
  `idade` TINYINT(3) NOT NULL,
  PRIMARY KEY (`idPersonal`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `academia`.`Aluno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `academia`.`Aluno` (
  `idAluno` INT NOT NULL,
  `nome_completo` VARCHAR(45) NOT NULL,
  `data_nascimento` DATE NOT NULL,
  `email` VARCHAR(256) NOT NULL,
  `genero` CHAR(1) NOT NULL,
  `senha` VARCHAR(8) NOT NULL,
  `altura` FLOAT NOT NULL,
  `peso` FLOAT NOT NULL,
  `idade` TINYINT(3) NOT NULL,
  `Personal_idPersonal` INT NOT NULL,
  PRIMARY KEY (`idAluno`),
  UNIQUE INDEX `nome_completo_UNIQUE` (`nome_completo` ASC) VISIBLE,
  INDEX `fk_Aluno_Personal1_idx` (`Personal_idPersonal` ASC) VISIBLE,
  CONSTRAINT `fk_Aluno_Personal1`
    FOREIGN KEY (`Personal_idPersonal`)
    REFERENCES `academia`.`Personal` (`idPersonal`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `academia`.`Aula`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `academia`.`Aula` (
  `idAula` INT NOT NULL,
  `horario` DATETIME NOT NULL,
  `data` DATE NOT NULL,
  `status` TINYINT NOT NULL,
  `Aluno_idAluno` INT NOT NULL,
  `Personal_idPersonal` INT NOT NULL,
  PRIMARY KEY (`idAula`),
  INDEX `fk_Aula_Aluno1_idx` (`Aluno_idAluno` ASC) VISIBLE,
  INDEX `fk_Aula_Personal1_idx` (`Personal_idPersonal` ASC) VISIBLE,
  CONSTRAINT `fk_Aula_Aluno1`
    FOREIGN KEY (`Aluno_idAluno`)
    REFERENCES `academia`.`Aluno` (`idAluno`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Aula_Personal1`
    FOREIGN KEY (`Personal_idPersonal`)
    REFERENCES `academia`.`Personal` (`idPersonal`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `academia`.`Pagamento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `academia`.`Pagamento` (
  `idPagamento` INT NOT NULL,
  `metodo_pagamento` VARCHAR(40) NOT NULL,
  `valor_aula` DOUBLE NOT NULL,
  `status` TINYINT NOT NULL,
  `Aluno_idAluno` INT NOT NULL,
  `Aula_idAula` INT NOT NULL,
  PRIMARY KEY (`idPagamento`),
  INDEX `fk_Pagamento_Aluno_idx` (`Aluno_idAluno` ASC) VISIBLE,
  INDEX `fk_Pagamento_Aula1_idx` (`Aula_idAula` ASC) VISIBLE,
  CONSTRAINT `fk_Pagamento_Aluno`
    FOREIGN KEY (`Aluno_idAluno`)
    REFERENCES `academia`.`Aluno` (`idAluno`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Pagamento_Aula1`
    FOREIGN KEY (`Aula_idAula`)
    REFERENCES `academia`.`Aula` (`idAula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `academia`.`Ficha`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `academia`.`Ficha` (
  `idFicha` INT NOT NULL,
  `nome_ficha` VARCHAR(45) NOT NULL,
  `grupo_muscular` VARCHAR(45) NOT NULL,
  `Aluno_idAluno` INT NOT NULL,
  `Personal_idPersonal` INT NOT NULL,
  PRIMARY KEY (`idFicha`),
  INDEX `fk_Ficha_Aluno1_idx` (`Aluno_idAluno` ASC) VISIBLE,
  INDEX `fk_Ficha_Personal1_idx` (`Personal_idPersonal` ASC) VISIBLE,
  CONSTRAINT `fk_Ficha_Aluno1`
    FOREIGN KEY (`Aluno_idAluno`)
    REFERENCES `academia`.`Aluno` (`idAluno`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Ficha_Personal1`
    FOREIGN KEY (`Personal_idPersonal`)
    REFERENCES `academia`.`Personal` (`idPersonal`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `academia`.`Exercicio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `academia`.`Exercicio` (
  `idExercicio` INT NOT NULL,
  `numero_repeticoes` INT NOT NULL,
  `numero_series` INT NOT NULL,
  `descanso_entre_serie` FLOAT NOT NULL,
  `Ficha_idFicha` INT NOT NULL,
  PRIMARY KEY (`idExercicio`),
  INDEX `fk_Exercicio_Ficha1_idx` (`Ficha_idFicha` ASC) VISIBLE,
  CONSTRAINT `fk_Exercicio_Ficha1`
    FOREIGN KEY (`Ficha_idFicha`)
    REFERENCES `academia`.`Ficha` (`idFicha`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `academia`.`Avaliacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `academia`.`Avaliacao` (
  `idAvaliacao` INT NOT NULL,
  `pontuacao` TINYINT(5) NOT NULL,
  `observacao` VARCHAR(256) NULL,
  `Aluno_idAluno` INT NOT NULL,
  `Personal_idPersonal` INT NOT NULL,
  PRIMARY KEY (`idAvaliacao`),
  INDEX `fk_Avaliacao_Aluno1_idx` (`Aluno_idAluno` ASC) VISIBLE,
  INDEX `fk_Avaliacao_Personal1_idx` (`Personal_idPersonal` ASC) VISIBLE,
  CONSTRAINT `fk_Avaliacao_Aluno1`
    FOREIGN KEY (`Aluno_idAluno`)
    REFERENCES `academia`.`Aluno` (`idAluno`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Avaliacao_Personal1`
    FOREIGN KEY (`Personal_idPersonal`)
    REFERENCES `academia`.`Personal` (`idPersonal`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
