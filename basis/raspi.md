# raspi配置

本页描述基于命令行的raspi-config应用程序。如果您使用的是Raspberry Pi桌面环境，则可以使用“偏好设置”菜单中的图形化树莓派配置应用程序来配置树莓派。

`raspi-config`是最初由[Alex Bradbury](https://github.com/asb)编写的Raspberry Pi配置工具。它针对Raspbian。



## 用法

您将`raspi-config`在首次启动Raspbian时看到。要在此之后打开配置工具，只需从命令行运行以下命令：

```
sudo raspi-config
```

将`sudo`是必需的，因为你会改变的文件，你没有自己的`pi`用户。

您应该会看到一个蓝色屏幕，中间的灰色框中带有选项，如下所示：

![raspi-config主屏幕](http://pi-cdn.lxx1.com/raspi-config.png)

它具有以下可用选项：

```bash
┌───────────────────┤ Raspberry Pi Software Configuration Tool (raspi-config) 
│                                                                                                  │
│        1 Change User Password Change password for the current user                               │
│        2 Network Options      Configure network settings                                         │
│        3 Boot Options         Configure options for start-up                                     │
│        4 Localisation Options Set up language and regional settings to match your location       │
│        5 Interfacing Options  Configure connections to peripherals                               │
│        6 Overclock            Configure overclocking for your Pi                                 │
│        7 Advanced Options     Configure advanced settings                                        │
│        8 Update               Update this tool to the latest version                             │
│        9 About raspi-config   Information about this configuration tool            
│                                                                                                  │
└───────────────────────────────────────────────────────────────────────────────────────────
```



### 在菜单中移动

使用`up`和`down`箭头键在可用选项之间移动突出显示的选择。按`right`箭头键将跳出“选项”菜单，并转到``和``按钮。按下`left`将使您返回选项。或者，您可以使用`Tab`键在这些之间切换。

请注意，在较长的选项值列表中（例如时区城市列表），您也可以键入字母以跳到列表的该部分。例如，输入`L`将使您跳到距离伦敦仅两个选择的里斯本（Lisbon），以免您一直滚动字母。



### raspi-config做什么

一般而言，`raspi-config`旨在提供进行最常见的配置更改的功能。这可能会导致对`/boot/config.txt`各种标准Linux配置文件的自动编辑。某些选项需要重新启动才能生效。如果您更改了其中任何一个，`raspi-config`则在选择``按钮时会询问您是否要立即重启。



## 菜单选项



### 修改用户密码

Raspbian的默认用户`pi`使用密码`raspberry`。您可以在这里更改。了解其他[用户](https://www.raspberrypi.org/documentation/linux/usage/users.md)。



### 网络选项

在此子菜单中，您可以设置主机名，WiFi SSID和预共享密钥，或启用/禁用可预测的网络接口名称。



#### 主机名

在网络上为此Pi设置可见名称。



### 启动选项

在这里，您可以更改Pi启动时发生的情况。使用此选项可以将引导首选项更改为命令行或桌面。您可以选择启动是否等待网络可用，以及启动时是否显示Plymouth启动屏幕。



### 本地化选项

本地化子菜单为您提供以下选项：键盘布局，时区，区域设置和WiFi国家/地区代码。在更改菜单之前，这些菜单上的所有选项均默认为英式或GB。

#### 变更地区

选择一个语言环境，例如`en_GB.UTF-8 UTF-8`。

#### 变更时区

选择本地时区，从该地区（例如欧洲）开始，然后选择一个城市（例如伦敦）。键入一个字母以将列表跳到字母表中的该点。

#### 更改键盘布局

此选项将打开另一个菜单，通过该菜单可以选择键盘布局。读取所有键盘类型时，显示时间会很长。更改通常会立即生效，但可能需要重新启动。

#### 更改WiFi国家

此选项设置您的WiFi网络的国家/地区代码。



### 接口选项

在此子菜单中，有以下启用/禁用选项：摄像头，SSH，VNC，SPI，I2C，串行，1-wire和远程GPIO。



#### 相机

启用/禁用CSI摄像头界面。



#### SSH协议

使用SSH启用/禁用对您的Pi的远程命令行访问。

SSH允许您从另一台计算机远程访问Raspberry Pi的命令行。默认情况下禁用SSH。在[SSH文档页面](https://www.raspberrypi.org/documentation/remote-access/ssh/README.md)上阅读有关使用SSH的更多信息。如果将Pi直接连接到公共网络，则除非已为所有用户设置了安全密码，否则不应启用SSH。



#### VNC

启用/禁用RealVNC虚拟网络计算服务器。



#### SPI

启用/禁用SPI接口，并自动加载SPI内核模块，这是PiFace等产品所需的。



#### I2C

启用/禁用I2C接口和自动加载I2C内核模块。



#### 序列号

在串行连接上启用/禁用外壳程序和内核消息。



#### 1线

启用/禁用Dallas 1-wire接口。通常用于DS18B20温度传感器。



### 超频

可以对Raspberry Pi的CPU超频。默认值为700MHz，但可以设置为1000MHz。您可以实现的超频会有所不同；超频过高可能会导致不稳定。选择此选项将显示以下警告：

**请注意，超频可能会缩短Raspberry Pi的寿命。**如果超频达到一定水平会导致系统不稳定，请尝试进行更适度的超频。在启动过程中按住Shift键可暂时禁用超频。

有关更多信息，请参见http://elinux.org/RPi_Overclocking。



### 高级选项



#### 展开文件系统

如果使用NOOBS安装了Raspbian，则文件系统将自动扩展。在少数情况下可能并非如此，例如，如果您将较小的SD卡复制到较大的SD卡上。在这种情况下，您应该使用此选项来扩展安装以填满整个SD卡，从而为您提供更多用于文件的空间。您将需要重新启动Raspberry Pi以使其可用。请注意，没有确认：选择该选项将立即开始分区扩展。



#### 过扫描

旧电视机的图像尺寸差异很大。有些柜子与屏幕重叠。因此，电视图像带有黑色边框，因此所有图像均不会丢失。这称为过扫描。现代电视和显示器不需要边界，信号也不允许边界。如果屏幕上显示的初始文本从边缘消失，则需要启用过扫描以使边框重新出现。

重新启动后，所有更改将生效。您可以通过编辑[config.txt](https://www.raspberrypi.org/documentation/configuration/config-txt/README.md)来更好地控制设置。

在某些显示器（尤其是显示器）上，禁用过扫描将使图像充满整个屏幕并校正分辨率。对于其他显示，可能有必要保持过扫描功能并调整其值。



#### 内存分割

更改可用于GPU的内存量。



#### 音频

通过HDMI或3.5mm插孔强制输出音频。在[音频配置文档页面](https://www.raspberrypi.org/documentation/configuration/audio-config.md)上阅读更多内容。



#### 分辨率

定义在没有连接电视或显示器的情况下启动系统时要使用的默认HDMI / DVI视频分辨率。如果启用了VNC选项，这可能会对RealVNC产生影响。



#### 像素加倍

启用/禁用2x2像素映射。



#### GL驱动程序

启用/禁用实验性GL桌面图形驱动程序。



##### GL（完整KMS）

启用/禁用实验性OpenGL Full KMS（内核模式设置）桌面图形驱动程序。



##### GL（假KMS）

启用/禁用实验性OpenGL Fake KMS桌面图形驱动程序。



##### 旧版

启用/禁用原始的旧版非GL videocore桌面图形驱动程序。



#### 更新资料

将此工具更新到最新版本。



### 关于raspi-config

选择此选项将显示以下文本：

```
This tool provides a straightforward way of doing initial configuration of the Raspberry Pi. Although it can be run at any time, some of the options may have difficulties if you have heavily customised your installation.
```



### 完

完成更改后，请使用此按钮。系统将询问您是否要重新启动。首次使用时，最好重新启动。如果您选择调整SD卡的大小，将会导致重新启动的延迟。



## 开发该工具

请参阅该工具的源代码，网址为[github.com/RPi-Distro/raspi-config](https://github.com/RPi-Distro/raspi-config)，您可以在其中打开问题并创建拉取请求。