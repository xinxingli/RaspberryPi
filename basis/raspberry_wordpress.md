# 使用树莓派通过安装LAMP来搭建博客网站

翻译自：https://projects.raspberrypi.org/en/projects/lamp-web-server-with-wordpress

## 你会做什么

学习在Raspberry Pi上设置LAMP（**L** inux，**A** pache，**M** ySQL，**P** HP）软件并将其配置为Web服务器使用。您将下载并安装WordPress，并建立一个基本网站，您可以在与树莓派相同网络上的任何设备上访问该网站。

## 您将学到什么

通过遵循此资源并设置Web服务器和WordPress网站，您将学习如何：

- 在Raspberry Pi上安装软件
- 安装和配置Apache，PHP和MySQL以创建LAMP Web服务器
- 下载WordPress并在Raspberry Pi上作为本地网站运行
- 配置WordPress，并使您的网站可供本地网络上的其他设备访问

## 您将需要什么

### 硬件

- 连接到互联网的Raspberry Pi计算机

## 设置一个Apache Web服务器

Apache是一种流行的Web服务器应用程序，您可以将其安装在Raspberry Pi上以使其能够提供网页服务。

Apache本身可以通过HTTP提供HTML文件。通过其他模块，它可以使用脚本语言（例如PHP）为动态网页提供服务。

### 安装Apache

- 通过从菜单中选择**附件** > **终端**来打开终端窗口。
- `apache2`通过在终端中键入以下命令并按来安装软件包Enter:

```bash
sudo apt-get install apache2 -y
```

![安装Apache](http://pi-cdn.lxx1.com/install_apache.png)

### 测试Web服务器

默认情况下，Apache将测试HTML文件放在Web文件夹中，您可以从Pi或网络上的另一台计算机上查看该文件。

在Raspberry Pi上打开Apache默认网页：

- 通过从菜单中选择**Internet** > **Chromium Web Browser**打开Chromium 。
- 输入地址`http://localhost`。

您应该在浏览器窗口中看到以下内容：

![Apache的作品](http://pi-cdn.lxx1.com/apache-it-works.png)

这意味着您正在使用Apache！

您还可以使用Raspberry Pi的IP地址从网络上的任何其他计算机打开此网页`http://192.168.1.10`。

要查找您的Raspberry Pi的IP地址，请`hostname -I`在终端窗口中键入。Raspberry Pi的IP地址非常有用，可以让您远程访问它。

### 更改默认网页

该默认网页只是文件系统上的HTML文件。它位于`/var/www/html/index.html`。

- 导航到终端中的此目录，然后查看其中的内容：

```undefined
cd /var/www/html
ls -al
```

您应该在窗口中看到以下内容：

```bash
total 12
drwxr-xr-x  2 root root 4096 Jan  8 01:29 .
drwxr-xr-x  3 root root 4096 Jan  8 01:28 ..
-rw-r--r--  1 root root  177 Jan  8 01:29 index.html
```

这表明，有一个文件`/var/www/html/`叫`index.html`。`.`指目录本身`/var/www/html`，并`..`指代父目录`/var/www/`。

### 列的含义

1. 文件或目录的权限
2. 目录中文件的数量（或者`1`如果是文件）。
3. 拥有文件或目录的用户
4. 拥有文件或目录的组
5. 文件或目录的大小
6. 上次修改的日期和时间

如您所见，`html`目录和`index.html`文件均归`root`用户所有，因此您需要使用对其`sudo`进行编辑。

您可以使用Leafpad编辑此文件：

```bash
sudo leafpad index.html
```

如果对文件进行更改，保存并刷新浏览器，则会看到更改。

## 安装PHP

PHP是**预处理器**：当服务器通过网络浏览器收到网页请求时，它将运行代码。它计算出需要在页面上显示的内容，然后将该页面发送到浏览器。与静态HTML不同，PHP在不同情况下可以显示不同的内容。其他语言也可以做到这一点，但是由于WordPress是用PHP编写的，因此这是我们这次需要使用的。PHP是网络上一种非常流行的语言：Facebook和Wikipedia等大型项目都是用PHP编写的。

- 使用以下命令安装PHP软件包：

```bash
sudo apt-get install php -y
```

### 测试PHP

- 创建文件`index.php`：

```bash
sudo leafpad index.php
```

- 在其中添加一些PHP内容：

```php
<?php echo "hello world"; ?>
```

- 保存文件。
- 删除`index.html`，因为它优先于`index.php`：

```bash
sudo rm index.html
```

刷新浏览器。您应该看到“ hello world”。该页面不是动态的，但仍由PHP提供。

![你好，世界](http://pi-cdn.lxx1.com/apache-hello-world.png)

如果您看到上面的原始PHP而不是“ hello world”，请像这样重新加载并重新启动Apache：

```bash
sudo service apache2 restart
```

- 编辑`index.php`以包含一些动态内容，例如：

```php
<?php echo date('Y-m-d H:i:s'); ?>
```

或显示您的PHP信息：

```php
<?php phpinfo(); ?>
```

## 安装MySQL

MySQL（发音为*My Sequel*或*My SQL*）是一种流行的数据库引擎。与PHP一样，它在Web服务器上也得到广泛使用，这就是WordPress之类的项目使用它的原因，以及为什么这些项目如此受欢迎。

通过在终端窗口中输入以下命令来安装MySQL Server和PHP-MySQL软件包：

```bash
sudo apt-get install mysql-server php-mysql -y
```

现在重新启动Apache：

```bash
sudo service apache2 restart
```

## 下载WordPress

您可以使用以下命令从[wordpress.org](http://wordpress.org/)下载WordPress `wget`。有用的是，始终可以在[wordpress.org/latest.tar.gz上](https://wordpress.org/latest.tar.gz)获得WordPress最新版本的副本，因此您可以获取最新版本而无需在网站上查找。在撰写本文时，这是版本4.5。

- 将目录更改为`/var/www/html/`并删除文件夹中的所有文件。

```bash
cd /var/www/html/
sudo rm *
```

- 使用`wget`下载WordPress 。

```bash
sudo wget http://wordpress.org/latest.tar.gz
```

- 提取WordPress压缩文件以获取WordPress文件。

```bash
sudo tar xzf latest.tar.gz
```

- 将提取的`wordpress`目录的内容移动到当前目录。

```bash
sudo mv wordpress/* .
```

- 整理`wordpress`目录。

```bash
sudo rm -rf wordpress latest.tar.gz
```

- 现在运行`ls`或者 `tree -L 1`命令显示WordPress项目的内容：

```bash
.
├── index.php
├── license.txt
├── readme.html
├── wp-activate.php
├── wp-admin
├── wp-blog-header.php
├── wp-comments-post.php
├── wp-config-sample.php
├── wp-content
├── wp-cron.php
├── wp-includes
├── wp-links-opml.php
├── wp-load.php
├── wp-login.php
├── wp-mail.php
├── wp-settings.php
├── wp-signup.php
├── wp-trackback.php
└── xmlrpc.php

3 directories, 16 files
```

这是默认WordPress安装的来源。您编辑以自定义安装的`wp-content`文件位于该文件夹中。

- 现在，您应该将所有这些文件的所有权更改为Apache用户：

```bash
sudo chown -R www-data: .
```

## 设置您的WordPress数据库

#### 设置MySQL / MariaDB

要设置WordPress网站，您需要一个数据库。这就是MySQL和MariaDB出现的地方！

- 在终端窗口中运行MySQL安全安装命令。

```bash
sudo mysql_secure_installation
```

- 系统将询问您`Enter current password for root (enter for none):`-按**Enter**。
- 键入**Ÿ**，然后按**Enter键**来`Set root password?`。
- 在`New password:`提示符下**输入**密码，然后按**Enter**。**重要提示：**请记住该root密码，因为以后需要它来设置WordPress。
- 输入**Y**到`Remove anonymous users`。
- 输入**Y**到`Disallow root login remotely`。
- 输入**Y**到`Remove test database and access to it`。
- 输入**Y**到`Reload privilege tables now`。

完成后，您将看到消息`All done!`和`Thanks for using MariaDB!`。

#### 创建WordPress数据库

- `mysql`在终端窗口中运行：

```bash
sudo mysql -uroot -p
```

- 输入您创建的root密码。

消息会打招呼`Welcome to the MariaDB monitor`。

- 在`MariaDB [(none)]>`提示符下使用以下命令为您的WordPress安装创建数据库：

```undefined
create database wordpress;
```

请注意以分号结尾的语句。

如果成功，则应该看到以下内容：

```undefined
Query OK, 1 row affected (0.00 sec)
```

![建立资料库](http://pi-cdn.lxx1.com/create-database.png)

- 现在，将数据库特权授予root用户。**注意：**您需要在后面输入自己的密码`IDENTIFIED BY`。

```undefined
GRANT ALL PRIVILEGES ON wordpress.* TO 'root'@'localhost' IDENTIFIED BY 'YOURPASSWORD';
```

- 为了使更改生效，您将需要刷新数据库特权：

```undefined
FLUSH PRIVILEGES;
```

- 使用Ctrl+ 退出MariaDB提示符D。

## WordPress配置

- 在Pi和goto上打开网络浏览器`http://localhost`，您应该会看到一个WordPress页面，要求您选择语言。

![WordPress选择语言](http://pi-cdn.lxx1.com/wordpress_language.png)

- 选择您的语言，然后单击**继续**。

您将看到WordPress欢迎屏幕。

![WordPress欢迎画面](https://projects-static.raspberrypi.org/projects/lamp-web-server-with-wordpress/2c9ce11316f09d9d218a10af303d9d130c44ee81/en/images/wordpress-welcome.png)

- 点击**let's go！**按钮。
- 现在，按如下所示填写基本站点信息：

```undefined
Database Name:      wordpress
User Name:          root
Password:           <YOUR PASSWORD>
Database Host:      localhost
Table Prefix:       wp_
```

- 单击**提交**继续。
- 单击**运行安装**按钮。

现在您越来越近了！

![WordPress欢迎画面](https://projects-static.raspberrypi.org/projects/lamp-web-server-with-wordpress/2c9ce11316f09d9d218a10af303d9d130c44ee81/en/images/wp-info.png)

填写信息：给您的网站一个标题，创建一个用户名和密码，然后输入您的电子邮件地址。点击`Install WordPress`按钮，然后使用您刚创建的帐户登录。

现在，您已经登录并设置了网站，可以通过访问来查看该网站`http://localhost/wp-admin`。

### 从另一台计算机登录WordPress

### 永久链接

建议您更改永久链接设置，以使URL更友好。

为此，请登录WordPress并转到信息中心。

- 转到“ **设置”**，然后“ **固定链接”**。
- 选择**页面名称**选项，然后单击**保存更改**。

您需要启用Apache的`rewrite`mod：

```bash
sudo a2enmod rewrite
```

您还需要告知服务该站点的虚拟主机，以允许请求被覆盖。

- 编辑您的虚拟主机的Apache配置文件：

```bash
sudo leafpad /etc/apache2/sites-available/000-default.conf
```

- 在第1行之后添加以下行。

```undefined
<Directory "/var/www/html">
    AllowOverride All
</Directory>
```

- 确保它在这样的范围内``：

```undefined
<VirtualHost *:80>
    <Directory "/var/www/html">
        AllowOverride All
    </Directory>
    ...
```

- 保存文件并退出。
- 重新启动Apache。

```bash
sudo service apache2 restart
```

### 自定义

WordPress是非常可定制的。通过单击页面顶部WordPress横幅中的站点名称（登录时处于登录状态），您将被带到仪表板。在这里，您可以更改主题，添加页面和帖子，编辑菜单，添加插件等等。这只是在Raspberry Pi的Web服务器上进行有趣设置的尝试。

## 接下来？

- 尝试将页面和帖子添加到您的网站。
- 尝试从外观菜单中安装不同的主题。
- 尝试自定义您网站的主题，或创建自己的主题。
- 尝试使用Web服务器为网络上的人员显示有用的信息。