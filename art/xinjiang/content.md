# XINJIANG

## Artist Statement

I took this series during my first year of college, right after the pandemic ended and travel felt possible again. It was a 20-day trip across Xinjiang, China's largest province, and also the first time I really used a camera to document my own life, even though most of what came out of it were, admittedly, just pictures of a trip.

Xinjiang holds an unreasonable amount of landscape for one province. In three weeks I went from desert dunes to snow-capped peaks, from wide farmland to canyon walls, from open basins to rock faces I ended up climbing partway up just to get closer to. These five images are what I kept from all of it, not because they were the most beautiful shots, but because something about each moment felt worth holding onto.

That instinct, that some moments are too good to just let pass, is the same one that later got me into photographing places like the American West. From images to videos, this love of 记录生活 continues, and I've since picked up a habit of recording and editing my own vlogs. Different mediums, same basic impulse: if I don't record it somehow, I lose the exact shape of how it felt.

## Assets
| 文件名 | 内容 |
|---|---|
| xj1.jpeg | 山地/丘陵风景 |
| xj2.jpeg | 平原/湖泊远景 |
| xj3.jpeg | 沙漠沙丘 |
| xj4.jpeg | 绿色山谷 |
| xj5.jpeg | 攀岩/岩壁竖版照片 |

## Build Instructions for Claude Code

**Layout — 让静态照片显得更有质感**
因为这个project全是风景照，没有视频/交互内容，容易显得单薄，需要用动效弥补：
- 用**全屏横向滚动或纵向scroll gallery**，每张图占满一屏（full-bleed）
- 每张图加**Ken Burns效果**（缓慢zoom-in，持续8-10秒循环或滚动触发一次），营造"活的风景"的感觉，而不是静态贴图
- 图片进入视口时加**fade-up + slight scale-in**的scroll-triggered动画（比如用Intersection Observer触发opacity 0→1 + translateY 20px→0）
- xj5是唯一一张竖版照片（攀岩），布局上可以打破横图的节奏，单独用一个更窄的竖版容器展示，形成视觉呼吸感
- Artist statement放在gallery开头（第一屏），阅读完文字后开始下滑看图

**图片顺序建议**：xj3（沙丘，视觉冲击力最强）开场 → xj1 → xj4 → xj2 → xj5（攀岩，竖版，作为收尾的"动作感"照片）

## Notes for Amy
最后一段把这个project和Wild West、抖音自媒体串起来了，形成"记录生活"这条主线贯穿三个不同形式的作品。动效部分建议先做一个简单demo看效果，如果Ken Burns太花哨/太travel博主感，可以简化成纯scroll fade-in就够。
