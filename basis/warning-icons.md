# 固件警告图标

在某些情况下，Raspberry Pi固件将在显示屏上显示警告图标，以指示问题。

当前可以显示三个图标。

## 欠压警告

如果Raspberry Pi的电源降至4.63V（+/- 5％）以下，则会显示以下图标。

![欠电压](http://pi-cdn.lxx1.com/under_volt-20200303214335259.png)

## 过热警告（80-85C）

如果SoC的温度在80C到85C之间，则会显示以下图标。ARM内核将被调低，以降低内核温度。

![过热（80-85C）](http://pi-cdn.lxx1.com/over_temperature_80_85.png)

## 过热警告（超过85C）

如果SoC的温度超过85C，则会显示以下图标。ARM内核和GPU将被调低，以尝试降低内核温度。

![过热（85C +）](http://pi-cdn.lxx1.com/over_temperature_85.png)