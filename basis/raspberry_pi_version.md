# 树莓派引导分区

在基本的Raspbian安装中，引导文件存储在SD卡的第一个分区中，该分区使用FAT文件系统进行了格式化。这意味着可以在Windows，macOS和Linux设备上读取它。

当Raspberry Pi通电时，它将从启动分区/文件夹中加载各种文件以启动各种处理器，然后启动Linux内核。

Linux启动后，启动分区将挂载为`/boot`。

## 引导文件夹内容

```bash
pi@raspberrypi:/boot $ tree -L 1
.
├── bcm2708-rpi-b.dtb
├── bcm2708-rpi-b-plus.dtb
├── bcm2708-rpi-cm.dtb
├── bcm2708-rpi-zero.dtb
├── bcm2708-rpi-zero-w.dtb
├── bcm2709-rpi-2-b.dtb
├── bcm2710-rpi-2-b.dtb
├── bcm2710-rpi-3-b.dtb
├── bcm2710-rpi-3-b-plus.dtb
├── bcm2710-rpi-cm3.dtb
├── bcm2711-rpi-4-b.dtb
├── bootcode.bin
├── cmdline.txt
├── config.txt
├── COPYING.linux
├── fixup4cd.dat
├── fixup4.dat
├── fixup4db.dat
├── fixup4x.dat
├── fixup_cd.dat
├── fixup.dat
├── fixup_db.dat
├── fixup_x.dat
├── issue.txt
├── kernel7.img
├── kernel7l.img
├── kernel8.img
├── kernel.img
├── LICENCE.broadcom
├── overlays
├── start4cd.elf
├── start4db.elf
├── start4.elf
├── start4x.elf
├── start_cd.elf
├── start_db.elf
├── start.elf
├── start_x.elf
└── System Volume Information

2 directories, 37 files
```

### bootcode.bin

这是引导加载程序，由SoC在引导时加载，它执行一些非常基本的设置，然后加载其中一个`start*.elf`文件。`bootcode.bin`在Raspberry Pi 4上未使用，因为它已由[板载EEPROM](https://www.raspberrypi.org/documentation/hardware/raspberrypi/booteeprom.md)中的启动代码替换。

### start.elf，start_x.elf，start_db.elf，start_cd.elf，start4.elf，start4x.elf，start4cd.elf，start4db.elf

这些是二进制Blob（固件），已加载到SoC中的VideoCore上，然后接管启动过程。 `start.elf`是基本固件，`start_x.elf`包括相机驱动程序和编解码器，`start_db.elf`是固件的调试版本，`start_cd.elf`是简化版本，不支持编解码器和3D之类的硬件块，并且在`gpu_mem=16`中指定时使用`config.txt`。关于如何使用这些信息中可以找到[的`config.txt`部分](https://www.raspberrypi.org/documentation/configuration/config-txt/boot.md)。

`start4.elf`，`start4x.elf`，`start4cd.elf`，和`start4db.elf`是固件文件具体到PI 4。

### fixup* .dat

这些是链接器文件，并且与`start*.elf`上一节中列出的文件配对。

### cmdline.txt

引导时，内核命令行会传递到内核。

### config.txt

包含许多用于设置Pi的配置参数。

### issue.txt

一些基于文本的管家信息，其中包含分发的日期和git commit ID。

### ssh或ssh.txt

如果存在此文件，则将在启动时启用SSH。内容无关紧要，可以为空。否则默认情况下禁用SSH。

### wpa_supplicant.conf

这是用于配置无线网络设置的文件（如果硬件具备此功能）。编辑国家代码和网络部分以适合您的情况。

### 设备树文件

有各种设备树blob文件，其扩展名为`.dtb`。它们包含Raspberry Pi各种模型的硬件定义，并在引导时用于根据检测到的Pi模型设置内核。

## 设备树覆盖

在`overlays`子文件夹中包含设备树覆盖。这些用于配置可能连接到系统的各种硬件设备，例如Raspberry Pi Touch Display或第三方音板。使用以下条目中的条目选择这些覆盖图`config.txt`