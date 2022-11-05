#Find the item that has minimum weight
select * from warehouse.items where weight in (select min(weight) as weight from warehouse.items );

#Find the different warehouses in “Pune”.
select * from warehouse.warehouses where locationchar='Pune';

#Find the details of items ordered by a customer “Mr. Patil”.
select * from warehouse.items where item_no in (
select item_no from warehouse.item_orders where ono in (
select ono from warehouse.orders where cus_no in (
select cno from warehouse.customer where cname ='James Watt')));

#Find a Warehouse which has maximum stores.
select * from warehouse.warehouses where warehouse.warehouses.wid in (
select ware_id from (select max(storeCount) as storeCount, ware_id from (select count(sid) as storeCount ,ware_id from warehouse.stores group by ware_id) as t) as t1);

#Find an item which is ordered for a minimum number of times.
select * from warehouse.items where warehouse.items.item_no in (
select item_no from (select min(ono),item_no from (select count(ono) as ono,item_no as item_no from warehouse.item_orders group by item_no) as d) as t);

#Find the detailed orders given by each customer
select a.ono, a.odate, a.cus_no from warehouse.orders as a 
join warehouse.customer as b on a.cus_no = b.cno;
