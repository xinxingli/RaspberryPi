## 频率管理和热控制

所有Raspberry Pi型号都执行一定程度的热管理，以避免在重负载下过热。SoC具有一个内部温度传感器，GPU上的该软件会轮询以确保温度不超过预定义的限制。所有型号的温度均为85°C。可以将其设置为较低的值，但不能将其设置为较高的值。随着设备接近极限，芯片（ARM，GPU）上使用的各种频率和电压有时会降低。这样可以减少产生的热量，从而使温度保持可控。

当核心温度在80°C至85°C之间时，将显示一个警告图标，显示红色的半填充温度计，并且ARM核心将逐渐下降。如果温度达到85°C，将显示温度计已满的图标，并且ARM内核和GPU频率都将被调低。

对于树莓派3B、  B + 版本，PCB技术已进行了更改，以提供更好的散热和增加的热质量。另外，引入了一个软温度限制，目的是使设备在达到85°C的硬限制之前可以“冲刺”的时间最大化。达到软限制时，时钟速度从1.4GHz降低至1.2GHz，工作电压略有降低。这降低了温度升高的速度：我们将1.4GHz的短时间换为1.2GHz的较长时间。默认情况下，软限制为60°C，可以通过config.txt中的`temp_soft_limit`设置进行更改。

Raspberry Pi 4 Model B继续采用与Raspberry Pi 3B +相同的PCB技术，以帮助散热。当前没有定义软限制。

### Raspberry Pi 4B上的DVFS

从2019年11月下旬开始，在Raspberry Pi 4 Model B上的固件将实现动态电压和频率缩放。这种技术使树莓派4B在较低的温度，同时仍然提供相同的性能运行。

固件可监视SoC内部的各种时钟（例如ARM，Core，V3D，ISP，H264，HEVC），并且只要它们未全速运行，由时钟驱动的芯片特定部分的电压即为相对于全速时的降低。实际上，仅提供足够的电压以使块以其运行的特定速度正常运行。这可能会导致SoC功耗的显着降低，从而导致产生的总热量减少。

此外，还使用了步进的CPU调节器来对ARM核心频率进行更细粒度的控制，这意味着DVFS更有效。现在的步骤是1500MHz，1000MHz，750MHz和600MHz。这些步骤还可以在SoC受节流时提供帮助，并且意味着节流回到600MHz的可能性大大降低，从而全面提高了满载性能。

### 散热片

虽然不必使用散热器来防止SoC过热损坏（通过热节流机制可以解决），但是如果您希望减少发生的热节流量，则可以使用散热器或小风扇来帮助。**根据实际情况，垂直安装Pi也可以帮助散热，因为这样做可以改善空气流通。**

### 测量温度

由于Raspberry Pi系列上使用的SoC的体系结构以及Raspbian发行版中上游温度监控代码，基于Linux的温度测量可能不准确。有一个命令可以提供当前SoC温度的精确瞬时读数，因为它直接与GPU通信。

```bash
vcgencmd measure_temp
```
