# 树莓派快速上手

## 入门树莓派需要那些配件

树莓派有很多配件，要上手树莓派，必备的5个配件必须要有，同时还需要一台电脑辅助学习；选配配件属于扩展类，可以用选配配件在树莓派上做更多的项目，这类配件可以在后期需要的时候再进行选购。

### 必备：

- 树莓派主板（推荐树莓派4）

- SD卡，优选顺序class10>class4
- SD卡读卡器
- 电源，用手机的那种5V2A充电器即可
- 网线

### 选配：

- 树莓派外壳

- 散热片
- 风扇
- mini显示器
- HDMI线

- 无线键盘和鼠标
- 树莓派摄像头
- 各类传感器
- 面包版
- 杜邦线

快速上手以树莓派必备配件为例进行，下面是具体步骤。

## 下载树莓派系统镜像

树莓派有多个系统可以供你选择，这里以最常用的**Raspbian**为例，它是树莓派默认的系统。

点击这个链接下载树莓派系统：https://downloads.raspberrypi.org/raspbian_full_latest

## 树莓派系统镜像烧录

树莓派系统下载完毕之后，需要烧录到SD卡中才能运行。

### 下载并安装烧录软件

烧录系统推荐使用Etcher，这是一款非常简洁好用的烧录软件。

下载地址：

 [Windows](https://github.com/balena-io/etcher/releases/download/v1.5.45/balenaEtcher-Setup-1.5.45.exe)

 [macOS](https://github.com/balena-io/etcher/releases/download/v1.5.45/balenaEtcher-1.5.45.dmg)

 [Linux（64位）](https://github.com/balena-io/etcher/releases/download/v1.5.45/balena-etcher-electron-1.5.45-linux-x64.zip)

 [Linux（32位）](https://github.com/balena-io/etcher/releases/download/v1.5.45/balena-etcher-electron-1.5.45-linux-ia32.zip)

下载之后安装Etcher软件。



### 烧录树莓派系统

将SD卡插入读卡器，然后将读卡器插入到电脑上，打开etcher软件，分别选择刚才下载的树莓派系统和SD卡，选择烧录，等待一会即可烧录成功。

![](http://pi-cdn.lxx1.com/16d145e241a3293f.jpg)



## 开启SSH

树莓派烧录好之后，需要在SD卡的/boot分区下新建一个空白文件。

这是因为树莓派系统默认是关闭SSH服务的，如果不新建一个空白文件，则树莓派系统开机后SSH无法连接。

## 将树莓派连接网络

有两种方式连接网络，分别是有线和无线连接。

有线连接只需要将树莓派和路由器用网线连接。如果使用有线连接方式，则可以进行下一步。

无线连接需要配置Wi-Fi，如果家里没有网线，可以使用这种方式进行连接。

### 配置无线连接

在SD卡的boot分区种新建 `wpa_supplicant.conf` 文件，并且配置 WiFi 的 SSID 和密码，这样树莓派启动后会自行读取 wpa_supplicant.conf 配置文件连接 WiFi 设备。   

```bash
trl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
network={
    ssid="WiFi的SSID"
    psk="WiFi密码"
}
```

## 树莓派开机

接下来，将电源线连接到树莓派，这样树莓派会自动上电开机。

正常情况下，树莓派上的红灯是电源指示灯，只要将树莓派连接到电源上，红灯就会常亮，表示通电。

树莓派上的绿灯时数据读取指示灯，和电脑的硬盘指示灯一样，只有在读写SD卡的时候才会亮。

通电后，红灯常亮，绿灯间隔闪烁，说明树莓派开机正常。

## 获取树莓派的IP地址

登陆家中路由器的管理界面，获得树莓派的IP地址。

树莓派的主机名为：raspberry pi

## 远程连接树莓派

Mac 和Linux用户可以使用终端远程连接树莓派。其步骤为，打开终端，输入以下命令：

```bash
ssh pi@192.168.0.108
```

这里将“192.168.0.108”换成你的树莓派地址，回车后会要求输入树莓派的密码。树莓派的初始密码为：“ra spberry”,然后回车即可登陆树莓派。

![截屏2020-03-02下午8.47.37](http://pi-cdn.lxx1.com/截屏2020-03-02下午8.47.37.png)

这样树莓派就开机成功了，其命令和Linux一致，现在可以进行愉快的玩耍了。