(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{199:function(t,a,r){"use strict";r.r(a);var e=r(28),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"树莓派引导分区"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#树莓派引导分区"}},[t._v("#")]),t._v(" 树莓派引导分区")]),t._v(" "),r("p",[t._v("在基本的Raspbian安装中，引导文件存储在SD卡的第一个分区中，该分区使用FAT文件系统进行了格式化。这意味着可以在Windows，macOS和Linux设备上读取它。")]),t._v(" "),r("p",[t._v("当Raspberry Pi通电时，它将从启动分区/文件夹中加载各种文件以启动各种处理器，然后启动Linux内核。")]),t._v(" "),r("p",[t._v("Linux启动后，启动分区将挂载为"),r("code",[t._v("/boot")]),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"引导文件夹内容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#引导文件夹内容"}},[t._v("#")]),t._v(" 引导文件夹内容")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[t._v("pi@raspberrypi:/boot $ tree -L "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n├── bcm2708-rpi-b.dtb\n├── bcm2708-rpi-b-plus.dtb\n├── bcm2708-rpi-cm.dtb\n├── bcm2708-rpi-zero.dtb\n├── bcm2708-rpi-zero-w.dtb\n├── bcm2709-rpi-2-b.dtb\n├── bcm2710-rpi-2-b.dtb\n├── bcm2710-rpi-3-b.dtb\n├── bcm2710-rpi-3-b-plus.dtb\n├── bcm2710-rpi-cm3.dtb\n├── bcm2711-rpi-4-b.dtb\n├── bootcode.bin\n├── cmdline.txt\n├── config.txt\n├── COPYING.linux\n├── fixup4cd.dat\n├── fixup4.dat\n├── fixup4db.dat\n├── fixup4x.dat\n├── fixup_cd.dat\n├── fixup.dat\n├── fixup_db.dat\n├── fixup_x.dat\n├── issue.txt\n├── kernel7.img\n├── kernel7l.img\n├── kernel8.img\n├── kernel.img\n├── LICENCE.broadcom\n├── overlays\n├── start4cd.elf\n├── start4db.elf\n├── start4.elf\n├── start4x.elf\n├── start_cd.elf\n├── start_db.elf\n├── start.elf\n├── start_x.elf\n└── System Volume Information\n\n"),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" directories, "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("37")]),t._v(" files\n")])])]),r("h3",{attrs:{id:"bootcode-bin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bootcode-bin"}},[t._v("#")]),t._v(" bootcode.bin")]),t._v(" "),r("p",[t._v("这是引导加载程序，由SoC在引导时加载，它执行一些非常基本的设置，然后加载其中一个"),r("code",[t._v("start*.elf")]),t._v("文件。"),r("code",[t._v("bootcode.bin")]),t._v("在Raspberry Pi 4上未使用，因为它已由"),r("a",{attrs:{href:"https://www.raspberrypi.org/documentation/hardware/raspberrypi/booteeprom.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("板载EEPROM"),r("OutboundLink")],1),t._v("中的启动代码替换。")]),t._v(" "),r("h3",{attrs:{id:"start-elf，start-x-elf，start-db-elf，start-cd-elf，start4-elf，start4x-elf，start4cd-elf，start4db-elf"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#start-elf，start-x-elf，start-db-elf，start-cd-elf，start4-elf，start4x-elf，start4cd-elf，start4db-elf"}},[t._v("#")]),t._v(" start.elf，start_x.elf，start_db.elf，start_cd.elf，start4.elf，start4x.elf，start4cd.elf，start4db.elf")]),t._v(" "),r("p",[t._v("这些是二进制Blob（固件），已加载到SoC中的VideoCore上，然后接管启动过程。 "),r("code",[t._v("start.elf")]),t._v("是基本固件，"),r("code",[t._v("start_x.elf")]),t._v("包括相机驱动程序和编解码器，"),r("code",[t._v("start_db.elf")]),t._v("是固件的调试版本，"),r("code",[t._v("start_cd.elf")]),t._v("是简化版本，不支持编解码器和3D之类的硬件块，并且在"),r("code",[t._v("gpu_mem=16")]),t._v("中指定时使用"),r("code",[t._v("config.txt")]),t._v("。关于如何使用这些信息中可以找到"),r("a",{attrs:{href:"https://www.raspberrypi.org/documentation/configuration/config-txt/boot.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("的"),r("code",[t._v("config.txt")]),t._v("部分"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("p",[r("code",[t._v("start4.elf")]),t._v("，"),r("code",[t._v("start4x.elf")]),t._v("，"),r("code",[t._v("start4cd.elf")]),t._v("，和"),r("code",[t._v("start4db.elf")]),t._v("是固件文件具体到PI 4。")]),t._v(" "),r("h3",{attrs:{id:"fixup-dat"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fixup-dat"}},[t._v("#")]),t._v(" fixup* .dat")]),t._v(" "),r("p",[t._v("这些是链接器文件，并且与"),r("code",[t._v("start*.elf")]),t._v("上一节中列出的文件配对。")]),t._v(" "),r("h3",{attrs:{id:"cmdline-txt"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cmdline-txt"}},[t._v("#")]),t._v(" cmdline.txt")]),t._v(" "),r("p",[t._v("引导时，内核命令行会传递到内核。")]),t._v(" "),r("h3",{attrs:{id:"config-txt"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#config-txt"}},[t._v("#")]),t._v(" config.txt")]),t._v(" "),r("p",[t._v("包含许多用于设置Pi的配置参数。")]),t._v(" "),r("h3",{attrs:{id:"issue-txt"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#issue-txt"}},[t._v("#")]),t._v(" issue.txt")]),t._v(" "),r("p",[t._v("一些基于文本的管家信息，其中包含分发的日期和git commit ID。")]),t._v(" "),r("h3",{attrs:{id:"ssh或ssh-txt"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ssh或ssh-txt"}},[t._v("#")]),t._v(" ssh或ssh.txt")]),t._v(" "),r("p",[t._v("如果存在此文件，则将在启动时启用SSH。内容无关紧要，可以为空。否则默认情况下禁用SSH。")]),t._v(" "),r("h3",{attrs:{id:"wpa-supplicant-conf"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wpa-supplicant-conf"}},[t._v("#")]),t._v(" wpa_supplicant.conf")]),t._v(" "),r("p",[t._v("这是用于配置无线网络设置的文件（如果硬件具备此功能）。编辑国家代码和网络部分以适合您的情况。")]),t._v(" "),r("h3",{attrs:{id:"设备树文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#设备树文件"}},[t._v("#")]),t._v(" 设备树文件")]),t._v(" "),r("p",[t._v("有各种设备树blob文件，其扩展名为"),r("code",[t._v(".dtb")]),t._v("。它们包含Raspberry Pi各种模型的硬件定义，并在引导时用于根据检测到的Pi模型设置内核。")]),t._v(" "),r("h2",{attrs:{id:"设备树覆盖"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#设备树覆盖"}},[t._v("#")]),t._v(" 设备树覆盖")]),t._v(" "),r("p",[t._v("在"),r("code",[t._v("overlays")]),t._v("子文件夹中包含设备树覆盖。这些用于配置可能连接到系统的各种硬件设备，例如Raspberry Pi Touch Display或第三方音板。使用以下条目中的条目选择这些覆盖图"),r("code",[t._v("config.txt")])])])}),[],!1,null,null,null);a.default=s.exports}}]);