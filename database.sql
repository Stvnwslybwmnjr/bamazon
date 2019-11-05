create database bamazon;
use bamazon;

create table products(
item_id int not null auto_increment,
product_name varchar(50),
department_name varchar(50),
price decimal(6,2),
stock_quantity integer,
primary key(item_id)
);

insert into products (product_name, department_name, price, stock_quantity)
value("telecaster", "Musical Instrument", 250.00, 2), 
("boots", "Clothes", 50.00, 10),
("mug", "Home & Garden", 5.00, 50),
("cowboy hat", "Clothes", 50.00, 20),
("flower pot", "Home & Garden", 10.00, 60),
("Distortion pedal", "Musical Instrument", 100.00, 12),
("leather jacket", "Clothes", 50.00, 43),
("cymbal", "Musical Instrument", 300.00, 20),
("jeans", "Clothes", 30.00, 50),
("lamp", "Home & Garden", 40.00, 24);

select*from products;
