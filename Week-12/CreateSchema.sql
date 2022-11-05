CREATE SCHEMA `warehouse` ;

CREATE TABLE warehouse.cities (
	city char(20),
    state char(20)
);

alter table warehouse.cities add city_id int;
alter table warehouse.cities add PRIMARY KEY(city_id); 

create table warehouse.warehouses (
wid INT,
wname char(30),
locationchar char(20),
extra  JSON
);

alter table warehouse.warehouses add cityId int;
alter table warehouse.warehouses add foreign key(cityId) references cities(city_id);
alter table warehouse.warehouses add unique key (wid);

create table warehouse.stores (
sid INT,
store_name char(20),
location_city char(20)
);

alter table warehouse.stores add primary key(sid);
alter table warehouse.stores add ware_id int;
alter table warehouse.stores add foreign key(ware_id) references warehouse.warehouses(wid);

create table warehouse.customer (
cno INT,
cname char(20),
addr varchar(50),
cu_city char(20)
);

alter table warehouse.customer add unique key (cno);

create table warehouse.orders (
ono INT,
odate date
);

alter table warehouse.orders add cus_no int;
alter table warehouse.orders add foreign key(cus_no) references warehouse.customer(cno);
alter table warehouse.orders add primary key(ono);

create table warehouse.items (
item_no INT,
item_description text,
weight decimal(5,2),
cost decimal(5,2)
);

alter table warehouse.items add primary key(item_no);

create table warehouse.item_orders (
ono INT,
item_no INT
);

alter table warehouse.item_orders add primary key(ono,item_no);
alter table warehouse.item_orders add foreign key(item_no) references warehouse.items(item_no);
alter table warehouse.item_orders add foreign key(ono) references warehouse.orders(ono);

create table warehouse.stores_items (
sid INT,
item_no INT
);

alter table warehouse.stores_items add primary key(sid,item_no);
alter table warehouse.stores add primary key(sid);

create table warehouse.stores_items (
sid INT,
item_no INT
);

alter table warehouse.stores_items add primary key(sid,item_no);
alter table warehouse.stores_items add foreign key(sid) references  warehouse.stores(sid);
alter table warehouse.stores_items add foreign key(item_no) references warehouse.items(item_no);


























