SET NAMES UTF8;
DROP DATABASE IF EXISTS qqshangcheng;
CREATE DATABASE qqshangcheng CHARSET=UTF8;
USE qqshangcheng;



/*狗食*/
CREATE TABLE qq_dog(
  did INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(32),
  imgUrl VARCHAR(128),
  price DECIMAL(6,2),
  categoryId INT
);
INSERT INTO qq_dog VALUES
(NULL, '法国皇家ROYAL CANIN 小型犬离乳期奶糕1kg MIS30', 'shoppicpath11540776135_y.jpg', '80', '1'),
(NULL, '宝路 幼犬粮肉类奶蔬菜谷物配方狗粮1.3kg', 'shoppicpath11540808995_y.jpg', '37.3', '1'),
(NULL, '法国皇家ROYAL CANIN 小型犬幼犬粮专用狗粮2kg MIJ31', 'shoppicpath11540548229_y.jpg', '122', '1'),
(NULL, '皇家ROYAL CANIN A3优选幼犬粮怀孕哺乳期母犬及幼犬适用 8kg', 'shoppicpath11539867078_y.jpg', '217', '1'),
(NULL, '法国皇家ROYAL CANIN 小型犬粮怀孕哺乳离乳奶糕 3kg MIS30', 'shoppicpath11539866990_y.jpg', '215', '1'),
(NULL, '法国皇家ROYAL CANIN 贵宾幼犬粮专用狗粮3kg APD33', 'shoppicpath11540865755_y.jpg', '253', '1'),
(NULL, '法国皇家ROYAL CANIN A3优选幼犬粮哺乳期母犬及幼犬适用 3kg', 'shoppicpath11517362073_y.jpg', '90', '1'),
(NULL, '怡亲yoken 小型成犬粮专用狗粮2.5kg', 'shoppicpath11520328426_y.jpg', '99.5', '1'),
(NULL, '宝路 幼犬粮肉类奶蔬菜谷物配方狗粮1.3kg*2 包', 'shoppicpath11517304499_y.jpg', '71.7', '1'),
(NULL, '伯纳天纯 小型幼犬粮天然无谷低敏配方狗粮1.5kg', 'shoppicpath11540542031_y.jpg', '95', '1'),
(NULL, '宝路 幼犬粮肉类蛋奶蔬菜谷物配方狗粮4kg', 'shoppicpath11540870147_y.jpg', '105.8', '1'),
(NULL, '比瑞吉 俱乐部全犬种幼犬粮天然健康狗粮1.6kg', 'shoppicpath11540870241_y.jpg', '66', '1');

/*猫食*/
CREATE TABLE qq_cat(
  did INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(32),
  imgUrl VARCHAR(128),
  price DECIMAL(6,2),
  categoryId INT
);
INSERT INTO qq_cat VALUES
(NULL, '皇家ROYAL CANIN 12月以下及怀孕期母猫幼猫粮2kg K36', 'shoppicpath11540361008_y.jpg', '138', '2'),
(NULL, '皇家ROYAL CANIN 室内成猫猫粮2kg i27', 'shoppicpath11540361032_y.jpg', '136', '2'),
(NULL, '伟嘉 幼猫粮海洋鱼味猫粮1.2kg', 'shoppicpath11540783850_y.jpg', '38.7', '2'),
(NULL, '妙多乐CatChow 成猫粮均衡营养猫粮1.5kg', 'shoppicpath11540783769_y.jpg', '53', '2'),
(NULL, '怡亲 幼猫粮专用粮2.5KG', 'shoppicpath11540823754_y.jpg', '119', '2'),
(NULL, '法国皇家ROYAL CANIN 12月以下及怀孕期母猫幼猫粮10kg K36', 'shoppicpath11540272985_y.jpg', '540', '2'),
(NULL, '妙多乐CatChow 成猫粮均衡营养猫粮10kg', 'shoppicpath11540470161_y.jpg', '275', '2'),
(NULL, '法国皇家ROYAL CANIN 1-4个月幼猫奶糕400g BK34', 'shoppicpath11540783630_y.jpg', '36.00', '2'),
(NULL, '皇家ROYAL CANIN 理想体态成猫粮2kg F32', 'shoppicpath11540361057_y.jpg', '110', '2'),
(NULL, '法国皇家 室内成猫粮 Indoor27/10KG', 'shoppicpath11539866848_y.jpg', '550', '2'),
(NULL, '伟嘉 成猫粮吞拿鱼及三文鱼味猫粮3.6kg', 'shoppicpath11540783875_y.jpg', '106', '2'),
(NULL, '伟嘉 成猫粮海洋鱼味猫粮1.3kg', 'shoppicpath11546594624_y.jpg', '42.9', '2');


