DROP DATABASE IF EXISTS	`pizza_delivery`;
CREATE DATABASE `pizza_delivery` DEFAULT CHARACTER SET utf8;

USE `pizza_delivery`;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
	`id`                INTEGER                     AUTO_INCREMENT		PRIMARY KEY,
	`login`             VARCHAR(100)    NOT NULL	UNIQUE,
	`password`          VARCHAR(100)    NOT NULL
);

DROP TABLE IF EXISTS `users_roles`;
CREATE TABLE `users_roles`(
	`id`                INTEGER                     AUTO_INCREMENT		PRIMARY KEY,
    `user_id`           INTEGER         NOT NULL, 
	`role_id`           INTEGER         NOT NULL
);

DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles`(
	`id`                INTEGER                     AUTO_INCREMENT		PRIMARY KEY,
    `name`              VARCHAR(100)    NOT NULL
);

DROP TABLE IF EXISTS `users_info`;
CREATE TABLE `users_info`(
	`id`                INTEGER                     AUTO_INCREMENT		PRIMARY KEY,
    `user_id`           INTEGER         NOT NULL, 
    `first_name`		TEXT			NOT NULL,
    `last_name`			TEXT			NOT NULL
);

DROP TABLE IF EXISTS `pizzas`;
CREATE TABLE `pizzas`(
	`id`                INTEGER                     AUTO_INCREMENT		PRIMARY KEY,
    `name`              VARCHAR(100)    NOT NULL,
    `price`             DECIMAL         NOT NULL,
    `img`               VARCHAR(255),
	`description`       TEXT
);

DROP TABLE IF EXISTS `pizzas_properties`;
CREATE TABLE `pizzas_properties`(
	`id`                INTEGER                     AUTO_INCREMENT		PRIMARY KEY,
    `pizza_id` 			INTEGER 	    NOT NULL,
    `size`              INTEGER         NOT NULL,
    `weight`            DECIMAL         NOT NULL,
    `ingredients`       TEXT            NOT NULL
);

DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart`(
	`id` 				INTEGER 					AUTO_INCREMENT		PRIMARY KEY,
    `user_id` 			INTEGER 	    NOT NULL,
    `order_id` 			INTEGER 	    NOT NULL,
    `pizza_id` 			INTEGER 	    NOT NULL,
    `order_price` 		DECIMAL 	    NOT NULL,
    `amount` 			INTEGER 	    NOT NULL
);

DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders`(
	`id` 				INTEGER 					AUTO_INCREMENT		PRIMARY KEY,
    `user_id` 			INTEGER 	    NOT NULL,
    `pizza_id` 			INTEGER 	    NOT NULL,
	`status` 			TEXT,
    `adress`			TEXT 		    NOT NULL,
    `delivery_method` 	TEXT 		    NOT NULL,
    `payment_method` 	TEXT 		    NOT NULL,
    `promocode_id` 		INTEGER,
    `comment` 			TEXT
);

DROP TABLE IF EXISTS `promocodes`;
CREATE TABLE `promocodes`(
	`id` 				INTEGER 					AUTO_INCREMENT		PRIMARY KEY,
    `discount` 			DECIMAL 	    NOT NULL,
    `starts_at` 		DATETIME 	    NOT NULL,
    `expires_at` 		DATETIME 	    NOT NULL
);

ALTER TABLE users_info
	ADD CONSTRAINT FK_user_info_user_id_users_id
	FOREIGN KEY(user_id) REFERENCES users(id)
		ON DELETE CASCADE 
		ON UPDATE CASCADE;
        
ALTER TABLE users_roles
	ADD CONSTRAINT FK_user_roles_user_id_users_id
	FOREIGN KEY(user_id) REFERENCES users(id)
		ON DELETE CASCADE 
		ON UPDATE CASCADE;
        
ALTER TABLE users_roles
	ADD CONSTRAINT FK_users_roles_role_id_roles_id
	FOREIGN KEY(role_id) REFERENCES roles(id)
		ON DELETE CASCADE 
		ON UPDATE CASCADE;
        
ALTER TABLE cart
	ADD CONSTRAINT FK_cart_user_id_users_id
	FOREIGN KEY(user_id) REFERENCES users(id)
		ON DELETE CASCADE 
		ON UPDATE CASCADE;

ALTER TABLE cart
	ADD CONSTRAINT FK_cart_order_id_orders_id
	FOREIGN KEY(order_id) REFERENCES orders(id)
		ON DELETE CASCADE 
		ON UPDATE CASCADE;


ALTER TABLE orders
	ADD CONSTRAINT FK_orders_user_id_users_id
    FOREIGN KEY(user_id) REFERENCES users(id)
		ON DELETE CASCADE 
		ON UPDATE CASCADE;

ALTER TABLE orders
	ADD CONSTRAINT FK_orders_promocode_id_promocodes_id
    FOREIGN KEY(promocode_id) REFERENCES promocodes(id)
		ON DELETE CASCADE 
		ON UPDATE CASCADE;

ALTER TABLE orders
	ADD CONSTRAINT FK_orders_pizza_id_pizzas_id
    FOREIGN KEY(pizza_id) REFERENCES pizzas(id)
		ON DELETE CASCADE 
		ON UPDATE CASCADE;
        
ALTER TABLE pizzas_properties
	ADD CONSTRAINT FK_pizzas_properties_pizza_id_pizzas_id
    FOREIGN KEY(pizza_id) REFERENCES pizzas(id)
		ON DELETE CASCADE 
		ON UPDATE CASCADE;