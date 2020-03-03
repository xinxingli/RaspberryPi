# 超级用户

Linux操作系统是一个多用户操作系统，它允许多个用户登录并使用计算机。为了保护计算机（以及其他用户的隐私），限制了用户的权限。

Linux允许大多数用户运行大多数程序，以及保存和编辑存储在其自己的主文件夹中的文件。通常不允许普通用户编辑其他用户文件夹中的文件或任何系统文件。Linux中有一个特殊的用户，称为**超级用户**，通常使用用户名`root`。超级用户可以不受限制地访问计算机，并且几乎可以执行任何操作。

## Sudo

您通常不会以`root`身份登录计算机，但可以使用该`sudo`命令以超级用户身份提供访问权限。如果您以`pi`用户身份登录树莓派，那么您将以普通用户身份登录。您可以通过在要运行的程序之前使用`sudo`命令来以`root`用户身份运行命令。

例如，如果要在Raspbian上安装其他软件，则通常使用该`apt`工具。要更新可用软件列表，您需要在`apt`命令前加上sudo：

```bash
sudo apt update
```

您还可以使用`sudo su`来以超级用户身份运行bash程序。当以超级用户身份运行命令时，没有什么措施可以防止可能会损坏系统的错误。建议您仅在需要时以超级用户身份运行命令，并在不再需要时退出超级用户bash程序。

## 谁可以使用sudo？

如果任何人只要将`sudo`命令放在命令前面，就会破坏安全性，因此只有经过批准的用户才能使用`sudo`以获得管理员特权。

该`pi`用户包含在`sudoers`批准的用户文件中。要允许其他用户充当超级用户，可以使用`sudo`将该用户添加到组`usermod`中，编辑`/etc/sudoers`文件，或使用`visudo`来添加他们。