# LimitLevel
RPG Maker MV插件
你可以限制某个物品或装备使用时玩家等级必须大于指定等级
## 插件参数
### 装备
`equip` 可以被指定为`true`或`false`，默认为`false`。
当值为`false`时，则关闭对装备的等级限制
### 物品
`item` 可以被指定为`true`或`false`，默认为`false`。
当值为`false`时，则关闭对物品的等级限制
## 物品（武器、防具）注释
在数据库的“物品（武器、防具）”标签页中，修改“注释”区域。
`<LimitLevel:level>`	当玩家等级大于level时才可以使用