# 邮政行业多维数据分析

本项目源数据来自邮政局官网所公布的近十年全国和各个省份以及主要城市的
邮政行业数据。包括邮政寄递业务量、业务收入等，对这些数据的综合分析，
旨在揭示邮政行业发展动态，理解不同地区和城市的业务特点

--

## 技术使用

**编程语言：** `Java+Python+Sql`

**技术或工具：** `Hadoop+Hive+MySQl+Azkaban`

## 详细介绍

在本次的设计当中依托于 Linux 平台与 IDEA 软件，运用 Hdfs，Hive，MySQL，
Kettle，Azkaban 等技术工具进行代码的设计编程以及实际操作来完成本次对于纽
约市租房数据可视化的分析。Hdfs 搭建于我们的 Linux 平台的 Hadoop 集群之中，
用于存放我们的源数据来供给我们读取。Hive 用作我们数据的数据储存数仓；
Kettle 工具用于来连接 Hive 与 MySQL，并将 Hive 中的数据迁移到 MySQL 当中；
MySQL 用作于我们的后端的数据源获取来发送到前端。通过使用 Python 代码，
以逻辑回归的性形式基于以往的数据对于未来可能的情况进行预测。通过使用
JavaEE8 与 Tomcat 服务来搭建后端框架并将将后端连接，使其实现通信。

---
## 结果展示

![image](https://github.com/user-attachments/assets/3e4caa0b-e422-42eb-b3e8-cc468ed9367d)



