# RUSTY LAKE

## Artist Statement

Rusty Lake isn't a place I visited once. It's somewhere I keep coming back to. It got me through a Chicago winter, one scene at a time.

Both films are made almost entirely with AI. Stills come from ThinkDiffusion and ChatGPT, animation from Runway and Krea, sound from ElevenLabs. The editing itself, the pacing, the transitions, the timing of every cut, is mine. Working with AI here felt less like using a shortcut and more like teaching a very literal collaborator. It doesn't understand rhythm until you show it, scene by scene.

The first film (2025) follows a man whose senses are stripped away one by one as he drifts down a river. The second (2026, my entry for UChicago's AI film competition) continues the story: he wakes in a fully surreal world where every sense has been transformed, and has to decide whether to stay there, happy but untethered, or return to the human world as an infant, to sense and love again from the beginning.

## Assets
| 文件名 | 内容 | 用途 |
|---|---|---|
| series1.mp4 → Vimeo `1169190620` | 2025年作品 "AI Final" | Video 1 |
| series2.mp4 → Vimeo `1207048211` | 2026年作品，UChicago AI film competition获奖作品 "AI_final version" | Video 2 |
| rlake1 | AI生成图片，横长图（stills来自ThinkDiffusion+ChatGPT，动画来自Runway+Krea的过程记录） | 横向滚动gallery |
| rlake2 | series1精彩截图 | Video 1 thumbnail/预览图 |
| rlake3 | series2精彩截图 | Video 2 thumbnail **+ index page cover + art hero page cover** |

## Build Instructions for Claude Code

**Layout**
- Hero区：两个视频并排（左2025 / 右2026），desktop双栏，mobile自动堆叠成单栏
- 每个视频下方加一行caption：
  - Video 1: `2025`
  - Video 2: `2026 · UChicago AI Film Competition, 1st Place`
- Artist statement放在视频区块上方，与其他project page的文字位置逻辑保持一致
- 视频区块下方放rlake1，这是一张横长图（不是多张stills拼贴），做成**横向滚动strip**：容器固定高度，图片按原比例横向铺开，可以左右拖动/滚动查看全貌，标题用 "Stills & Process"

**Video Embed**
用Vimeo iframe，保持16:9 responsive wrapper（`padding-bottom: 56.25%`，避免mobile变形）：

```html
<div class="video-wrapper">
  <iframe src="https://player.vimeo.com/video/1169190620?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
    frameborder="0"
    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    title="AI Final"
    allowfullscreen></iframe>
</div>
```
（Video 2同理，替换video ID为`1207048211`，title改"AI_final version"）

**Cover Image**
- rlake3同时用于：本page thumbnail + `/index.html` 的project gallery + `/art/index.html` 的art hero page
- 需要在这两个页面引用同一张图片文件，建议统一命名（如`rusty-lake-cover.jpg`）放在共享assets目录，避免重复上传

## Notes for Amy
已按你的反馈调整：去掉了em dash，语气收敛了一些（不再是"我多牛"的口吻，改成陈述事实），工具名称改成stills=ThinkDiffusion+ChatGPT、animation=Runway+Krea，加了video 2的一句剧情summary，rlake1改成横向滚动展示。全部确认没问题的话就可以定稿了。
