/*:
 * @plugindesc limit equip and item level
 * @author tiannian dtiannian@aliyun.com
 *
 * @param equip
 * @desc open equip's level limit 
 * @default false
 *
 * @param item
 * @desc open item's level limit 
 * @default false
 *
 * @help
 * Equip and Item note:
 * <LimitLevel:level>       #this item must greater than player level
 */
 
/*:zh
 * @plugindesc 限制装备和物品的使用等级
 * @author tiannian dtiannian@aliyun.com
 *
 * @param equip
 * @desc 开启装备等级限制 
 * @default false
 *
 * @param item
 * @desc 开启物品等级限制
 * @default false
 *
 * @help
 * Equip and Item note:
 * <LimitLevel:level>       #当玩家等级大于level时才可以使用
 */
 
(function(){
    var parameters = PluginManager.parameters('LimitLevel');
    
    var openEquipLimit = parameters['equip'] || false;
    var openItemLimit = parameters['item'] || false;
    
    if(openEquipLimit){
        var testEq = Game_Actor.prototype.changeEquip;
        Game_Actor.prototype.changeEquip = function(slotId, item){
            if(item === null){
                //卸下装备
                testEq.call(this,slotId, item);
            }else{
                //检查装备等级
                var ll = item.meta.LimitLevel || 0;
                if(ll < this._level){
                    testEq.call(this,slotId, item);
                }
            }
        }
    }
    
    if(openItemLimit){
        var testIt = Scene_ItemBase.prototype.useItem;
        Scene_ItemBase.prototype.useItem = function(target){
            var ll = this.item().meta.LimitLevel || 0;
            if(ll < this._level){
                testIt.call(this,target);
                console.log(ll);
            }
        }
    }
})()