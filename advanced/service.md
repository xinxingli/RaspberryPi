# 创建系统服务

为了在树莓派启动时运行命令或程序，您可以将其添加为服务。完成此操作后，您可以从linux提示符下启动/停止。

## 创建服务

在您的树莓派上，为您的服务创建一个.service文件，例如：

myscript.service

```bash
[Unit]
Description=My service
After=network.target

[Service]
ExecStart=/usr/bin/python3 -u main.py
WorkingDirectory=/home/pi/myscript
StandardOutput=inherit
StandardError=inherit
Restart=always
User=pi

[Install]
WantedBy=multi-user.target
```

因此，在这种情况下，该服务将在包含要运行的python程序的工作目录`/home/pi/myscript`中运行`python3 -u main.py`。但您不仅限于Python程序：只需将ExecStart行更改为要从引导中运行的任何程序/脚本命令即可。

将此文件复制为根用户`/etc/systemd/system`，例如：

```bash
sudo cp myscript.service /etc/systemd/system/myscript.service
```

复制完成后，您可以尝试使用以下命令启动服务：

```
sudo systemctl start myscript.service
```

使用以下命令停止它：

```
sudo systemctl stop myscript.service
```

当您对启动和停止应用感到满意时，可以使用以下命令在重新启动时自动启动它：

```
sudo systemctl enable myscript.service
```

该`systemctl`命令还可以用于重新启动服务或从启动中禁用它！

要注意的一些事情：

- 事物开始的顺序取决于它们的依赖关系—在网络可用之后，该特定脚本应在启动过程中相当晚地开始
- 您可以根据需要配置不同的依赖关系和顺序。