# 配置TCP / IP网络

树莓派用`dhcpcd`在其所有网络接口上配置TCP / IP。dhcpcd守护程序由Roy Marples编写。这包括为每个接口分配IP地址，设置网络掩码以及通过名称服务交换机（NSS）功能配置DNS解析。

默认情况下，Raspbian尝试通过DHCP自动配置所有网络接口，如果DHCP失败，则回退到169.254.0.0/16范围内的自动专用地址。这与其他Linux和Microsoft Windows的行为一致。

## 静态IP地址

如果您希望禁用接口的自动配置，而改为静态配置，请在`/etc/dhcpcd.conf`中添加详细信息。例如：

```bash
interface eth0
static ip_address=192.168.0.4/24    
static routers=192.168.0.254
static domain_name_servers=192.168.0.254 8.8.8.8
```

您可以使用以下`ip link`命令找到系统上存在的接口的名称。

![截屏2020-03-03下午8.40.15](http://pi-cdn.lxx1.com/截屏2020-03-03下午8.40.15.png)

可以看到，`使用ip link`命令找到了3个网络接口，分别是lo 、 eth0、 wlan0，其中lo为本地网络回路，eth0为有线网络接口,wlan0位无线网络接口。

以前的Raspbian版本使用该文件`/etc/network/interfaces`进行网络接口配置：如果此文件中列出了接口，则其中的任何设置都将优先于`/etc/dhcpcd.conf`其中的设置。

请注意，如果您有多个Raspberry Pi连接到同一网络，则可能会发现更容易在DHCP服务器上设置地址保留。这样，每个Pi都会保留相同的IP地址，但是它们都将被集中管理在一个地方，从而使将来重新配置网络变得更加简单。

在安装了图形桌面的Raspberry Pi系统上，一个名为的GUI工具`lxplug-network`用于允许用户更改的配置`dhcpcd`，包括设置静态IP地址。该`lxplug-network`工具基于`dhcpcd-ui`，它也是由Roy Marples开发的。