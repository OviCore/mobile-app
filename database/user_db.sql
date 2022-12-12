/*
create a local sql server to store the three users
*/
CREATE TABLE `user_db`.`user` (
  `id` INT NOT NULL,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
INSERT INTO `user_db`.`user` (`id`, `firstName`, `lastName`, `status`) VALUES ('1', 'John', 'Doe', 'online');
INSERT INTO `user_db`.`user` (`id`, `firstName`, `lastName`, `status`) VALUES ('2', 'Mary', 'Jane', 'offline');
INSERT INTO `user_db`.`user` (`id`, `firstName`, `lastName`, `status`) VALUES ('3', 'Macy', 'Mount', 'online');