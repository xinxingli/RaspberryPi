##  树莓派HDMI配置

在大多数情况下，只需使用标准HDMI电缆将配备HDMI的显示器插入Raspberry Pi，即可自动使用该显示器支持的最佳分辨率进入Pi。Raspberry Pi Zero使用一个迷你HDMI端口，因此您需要一个迷你HDMI到全尺寸HDMI导线或适配器。在Raspberry Pi 4上，有两个微型HDMI端口，因此您需要一个或两个微型HDMI到全尺寸HDMI导线或适配器，具体取决于您要连接的显示器数量。在打开Raspberry Pi之前，您应该连接所有HDMI导线。

Raspberry Pi 4可以驱动最多两个显示器，刷新率达到60Hz时分辨率高达1080p。在4K分辨率下，如果您连接两个显示器，则刷新率将限制为30Hz。您还可以以60Hz的刷新率以4K驱动单个显示器：这要求显示器连接到与UCB-C电源输入（标记为HDMI0）相邻的HDMI端口。您还必须通过`hdmi_enable_4kp60=1`在config.txt中设置标志来启用4Kp60输出。也可以使用桌面环境中的“ Raspberry Pi配置”工具设置此标志。

如果您使用的是旧版图形驱动程序，或者在Raspberry Pi可能无法确定最佳模式的情况下，或者您可能特别希望设置非默认分辨率，则本页面的其余部分可能会很有用。

### HDMI组和模式

HDMI有两个常见的组：CEA（消费者电子协会，通常用于电视的标准）和DMT（Display Monitor Timings，用于显示器的标准）。每个组播发一组特定的模式，其中一个模式描述输出的分辨率，帧速率，时钟速率和宽高比。

### 我的设备支持哪些模式？

您可以`tvservice`在命令行上使用该应用程序来确定设备支持哪些模式以及其他有用的数据：

- `tvservice -s` 显示当前的HDMI状态，包括模式和分辨率
- `tvservice -m CVT` 列出所有支持的CVT模式
- `tvservice -m DMT` 列出所有支持的DMT模式

如果您使用的Pi 4连接了多个显示器，则`tvservice`需要告知哪个设备询问信息。您可以使用以下方法获取所有连接的设备的显示ID：

```
tvservice -l
```

您可以指定显示`tvservice`通过增加使用`-v `的`tvservice`命令，例如：

- `tvservice -v 7 -m CVT`，列出了显示ID 7的所有受支持的CVT模式

### 设定特定的HDMI模式

使用`hdmi_group`和`hdmi_mode`config.txt条目可以设置特定的模式。组条目在CEA或DMT之间选择，而模式则选择分辨率和帧速率。

在Pi 4上，要指定HDMI端口，请将索引标识符添加到config.txt中的`hdmi_group`或`hdmi_mode`条目，例如`hdmi_mode:0`或`hdmi_group:1`。

### 设置自定义HDMI模式

设置自定义模式有两个选项：`hdmi_cvt`和`hdmi_timings`。

`hdmi_cvt`设置一个自定义的“协调视频时间”条目。

在某些极少数情况下，可能有必要定义HDMI信号的确切时钟要求。这是一种完全自定义模式，可通过设置`hdmi_group=2`和来激活`hdmi_mode=87`。然后，您可以使用`hdmi_timings`config.txt命令设置显示的特定参数。 `hdmi_timings`指定HDMI信号需要使用的所有时序。这些时序通常可以在所用显示器的数据表中找到。

```
hdmi_timings=            v_front_porch>         
```

| 定时              | 目的                   |
| :---------------- | :--------------------- |
| `h_active_pixels` | 水平分辨率             |
| `h_sync_polarity` | 0或1定义水平同步极性   |
| `h_front_porch`   | 水平前沿像素数         |
| `h_sync_pulse`    | 水平同步脉冲宽度       |
| `h_back_porch`    | 水平后沿像素数         |
| `v_active_lines`  | 垂直分辨率             |
| `v_sync_polarity` | 0或1定义垂直同步极性   |
| `v_front_porch`   | 垂直前沿像素数         |
| `v_sync_pulse`    | 垂直同步脉冲宽度       |
| `v_back_porch`    | 垂直后沿像素数         |
| `v_sync_offset_a` | 离开0                  |
| `v_sync_offset_b` | 离开0                  |
| `pixel_rep`       | 离开0                  |
| `frame_rate`      | 模式的帧率             |
| `interlaced`      | 0表示非隔行，1表示隔行 |
| `pixel_freq`      | 模式像素频率           |
| `aspect_ratio`    | 所需的宽高比           |

`aspect_ratio` 应该是以下之一：

| 比      | `aspect_ratio` ID |
| :------ | :---------------- |
| `4:3`   | 1个               |
| `14:9`  | 2                 |
| `16:9`  | 3                 |
| `5:4`   | 4                 |
| `16:10` | 5                 |
| `15:9`  | 6                 |
| `21:9`  | 7                 |
| `64:27` | 8                 |

对于Pi4，要指定HDMI端口，可以将索引标识符添加到config.txt。例如`hdmi_cvt:0=...`或`hdmi_timings:1=...`。如果未指定端口标识符，则设置将应用于端口0。

### HDMI工作不正常？

在极少数情况下，例如在显示屏上有斑点或使用非常长的电缆时，您可能需要提高HDMI驱动器的强度。

Raspberry Pi 4B尚不支持`config_hdmi_boost`，将在以后的软件更新中添加对该选项的支持。