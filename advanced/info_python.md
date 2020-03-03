# 树莓派CPU、GPU、磁盘、内存、负载监控脚本

经常需要快速的查看树莓派当前的CPU温度、GPU温度、树莓派内存使用、树莓派负载大小，还可以查看树莓派SD卡磁盘容量、已经使用量和使用百分比，本文提供了一个python脚本，可以解决这个需求。

树莓派CPU、GPU、磁盘、内存、负载监控脚本代码如下：

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-
import commands
import os

def main():
    # 查看GPU温度
        gpu = float(gpu)
        print('gpu Temp: %.2f ' % gpu)

    # 查看CPU温度
        file = open("/sys/class/thermal/thermal_zone0/temp")
        cpu = float(file.read()) / 1000
        file.close()
        print('cpu Temp: %2.2f' % cpu)

        load_1min = str(os.popen("top -n1 | awk '/load average:/ {print $12}'").readline().strip()).replace(',', '' )
        load_5min = str(os.popen("top -n1 | awk '/load average:/ {print $13}'").readline().strip()).replace(',', '' )
        load_1min=float(load_1min)
        load_5min=float(load_5min)
        print('')
        print('load_1min: %.2f'%load_1min)
        print('load_5min: %.2f'%load_5min)

        Ramused = str(os.popen("top -n1 | awk '/KiB/ {print $6}'").readline().strip()).replace(',', '' )
        Ramused = int(Ramused)
        Ramused = Ramused / 1000
        print('')
        print('Ramused: %d '%Ramused +' Mb')

        def getDiskSpace():
                p = os.popen("df -h /")
                i = 0
                while 1:
                        i = i +1
                        line = p.readline()
                        if i==2:
                                return(line.split()[1:5])

        # Disk information
        DISK_stats = getDiskSpace()
        DISK_total = DISK_stats[0].replace('G','')
        DISK_used = DISK_stats[1].replace('G', '' )
        DISK_perc = DISK_stats[3].replace('%', '' )
        print('')
        print('DISK_total: '+str(DISK_total)+' Gb')
        print('DISK_used: '+str(DISK_used)+' Gb')
        print('DISK_perc: '+str(DISK_perc)+' %')
if __name__ == '__main__':
    main()
```

也可以直接下载脚本文件：https://github.com/xinxingli/raspberry

在本地将代码写入info.py文件，然后执行：

```
python info.py
```

就可以看到树莓派输出信息：

```
gpu Temp: 34.70
 cpu Temp: 34.17

load_1min: 0.20
 load_5min: 0.25

Ramused: 264 Mb

DISK_total: 15 Gb
 DISK_used: 3.9 Gb
 DISK_perc: 29 %
```

[![获取树莓派当前状态和数据（温度、CPU、内存、硬盘）](http://pi-cdn.lxx1.com/2016-06-27_082229.jpg)](http://www.lxx1.com/1886/2016-06-27_082229)获取树莓派当前状态和数据（温度、CPU、内存、硬盘）

