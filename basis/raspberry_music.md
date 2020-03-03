# 在树莓派上播放音频

播放音频的最简单方法是使用OMXPlayer应用程序。

要播放MP3文件，请使用`cd`导航至.mp3文件所在的位置，然后键入以下命令：

```bash
omxplayer example.mp3
```

这将`example.mp3`通过显示器的内置扬声器或通过耳机插孔连接的耳机播放音频文件。

如果您需要一个示例文件，则可以使用以下命令从此处下载一个示例文件：

```bash
wget http://rpf.io/lamp3 -O example.mp3 --no-check-certificate
```

如果听不到任何声音，请确保正确连接了耳机或扬声器。

如果omxplayer对当前的音频输出设备自动检测失败，则可以使用以下命令强制通过HDMI输出：

```bash
omxplayer -o hdmi example.mp3
```

或者，您可以通过以下方法强制通过耳机插孔输出：

```bash
omxplayer -o local example.mp3
```

您甚至可以通过以下方法强制通过耳机插孔和HDMI同时输出：

```bash
omxplayer -o both example.mp3
```

## 将omxplayer作为后台程序运行

omxplayer如果在没有tty（用户输入）的情况下在后台运行，它将立即关闭，因此要持续运行，您需要`omxplayer`使用`--no-keys`选项告知系统不需要任何用户输入。

```bash
omxplayer --no-keys example.mp3 &
```

在命令末尾添加`&`会在后台运行程序。然后，您可以使用`jobs`命令检查此后台程序的状态。默认情况下，该程序将在`omxplayer`完成播放时完成，但是如有必要，您可以使用`kill`命令随时将其停止。

```bash
$ jobs
[1]-  Running             omxplayer --no-keys example.mp3 &
$ kill %1
$
[1]-  Terminated          omxplayer --no-keys example.mp3 &
```