# ART — HERO PAGE

## Artist Statement

I don't really believe in mastering one medium and stopping there. Across the six pieces on this page, I've drawn, crocheted, photographed, filmed, and coded, sometimes teaching myself a tool from scratch, sometimes teaching an AI what I wanted it to make.

What connects all of it is the same basic impulse: certain moments feel worth holding onto, and I'd rather build something and keep them than just let them pass. Some of this was made entirely by hand, some with AI doing part of the labor, and figuring out where that line should sit, what to hand off and what to keep doing myself, has become its own kind of practice.

I'm still learning new tools, new forms, new knowledge, always somewhere in the middle of exploring my own frontier. This isn't a portfolio in the traditional sense so much as a record of how I've been paying attention, and how that attention keeps moving.

## Project Cards

卡片标题字体：**Georgia**

| 顺序 | Project | 卡片标题 | Cover图 | 状态 |
|---|---|---|---|---|
| 1 | Rusty Lake | RUSTY LAKE | rlake3 | ✅ 已定 |
| 2 | Hello World | HELLO WORLD | 图1（helloworld标题截图） | ✅ 已定 |
| 3 | Xinjiang | XINJIANG | xj3（沙丘） | ✅ 已定 |
| 4 | Paris | PARIS | paris3 | ✅ 已定 |
| 5 | Virginia | VIRGINIA | uva3 | ✅ 已定 |
| 6 | Wild West | WILD WEST | DSCF0209（圣莫尼卡日落） | ✅ 已定 |

## Build Instructions for Claude Code

**设计方向：Editorial Bento Grid**
不用一行三个的均匀网格（太普通），也不复用你原来那版"散落对角线+竖排旋转文字标签"的设计（避免撞脸）。改用一个按重要性分配大小的**不对称bento grid**，本身就是一种"策展感"，同时用卡片大小自然传达出project的优先级，不需要额外说明。

**Desktop布局（12-column grid）**
```
Row 1（大卡，高度~480px）：
  ├─ Rusty Lake   → col-span 7   （最大最显眼，AI视频是最强差异化项目）
  └─ Hello World  → col-span 5

Row 2（中卡，高度~320px，三等分）：
  ├─ Xinjiang → col-span 4
  ├─ Paris    → col-span 4
  └─ Virginia → col-span 4

Row 3（收尾横幅，高度~240px）：
  └─ Wild West → col-span 12（全宽banner，作为整个art section的结尾）
```

**视觉细节**
- 每张卡片：cover图占满，左下角小字标题（**Georgia字体**，小型大写字母）
- 默认状态：图片轻微desaturate（grayscale 30%左右），标题常驻可见但低调
- Hover状态：图片恢复全彩 + 轻微放大（scale 1.03），标题字号或字重略微加强
- 卡片之间用一致的gap（比如24px），保持呼吸感，不要贴太紧
- Wild West这个收尾banner可以加一点视觉上的"结束感"，比如标题居中、下方留白更多，暗示这是整个art gallery的最后一站

**Mobile响应式**
- 全部改为单栏堆叠，按1-6的顺序排列，每张卡片全宽，保持同样的hover/tap交互（tap切换desaturate状态）

**Artist Statement位置**
- 放在bento grid上方，作为整个art hero page的开场白，字号比project标题更大，但不需要图片配合，纯文字段落

## Notes for Amy
Cover图和bento grid方向都已确认，字体也定了Georgia。Statement结尾加了"still learning new tools, new forms, new knowledge, exploring my own frontier"这句，跟Wild West的frontier概念首尾呼应，给整个art section一个有闭环感的收尾。如果这句还想再调整语气，告诉我。
