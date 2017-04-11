ig.module( 'game.levels.4R' )
.requires( 'impact.image','game.entities.shooter','game.entities.player','game.entities.crawler','game.entities.levelexit','game.entities.can' )
.defines(function(){
Level4R=/*JSON[*/{"entities":[{"type":"EntityShooter","x":512,"y":48,"settings":{"shootDelay":1.5}},{"type":"EntityShooter","x":928,"y":160,"settings":{"shootDelay":1.5}},{"type":"EntityPlayer","x":28,"y":290},{"type":"EntityCrawler","x":1516,"y":112},{"type":"EntityCrawler","x":1560,"y":48},{"type":"EntityShooter","x":736,"y":48,"settings":{"shootDelay":1.5}},{"type":"EntityCrawler","x":240,"y":48},{"type":"EntityCrawler","x":340,"y":96},{"type":"EntityCrawler","x":376,"y":64},{"type":"EntityCrawler","x":252,"y":112},{"type":"EntityCrawler","x":364,"y":224},{"type":"EntityCrawler","x":204,"y":208},{"type":"EntityCrawler","x":1032,"y":224},{"type":"EntityCrawler","x":256,"y":176},{"type":"EntityCrawler","x":1684,"y":112},{"type":"EntityShooter","x":1840,"y":16,"settings":{"shootDelay":1}},{"type":"EntityCrawler","x":1652,"y":224},{"type":"EntityCrawler","x":1676,"y":288},{"type":"EntityShooter","x":1560,"y":80,"settings":{"shootDelay":1.5}},{"type":"EntityShooter","x":1620,"y":288,"settings":{"shootDelay":1.5}},{"type":"EntityShooter","x":1268,"y":128,"settings":{"shootDelay":1.5}},{"type":"EntityShooter","x":1392,"y":208,"settings":{"shootDelay":1.5}},{"type":"EntityShooter","x":1024,"y":80,"settings":{"shootDelay":1.5}},{"type":"EntityShooter","x":628,"y":288,"settings":{"shootDelay":1.5}},{"type":"EntityCrawler","x":524,"y":288},{"type":"EntityLevelexit","x":1904,"y":96,"settings":{"level":"5R"}},{"type":"EntityCan","x":996,"y":184},{"type":"EntityCan","x":900,"y":264},{"type":"EntityCan","x":1604,"y":136},{"type":"EntityCan","x":760,"y":264},{"type":"EntityCan","x":276,"y":56},{"type":"EntityCan","x":1700,"y":296},{"type":"EntityCan","x":1096,"y":120},{"type":"EntityCan","x":1496,"y":184},{"type":"EntityCan","x":1604,"y":56},{"type":"EntityCan","x":800,"y":88},{"type":"EntityCan","x":1136,"y":264},{"type":"EntityCan","x":240,"y":264},{"type":"EntityCan","x":260,"y":152},{"type":"EntityCan","x":456,"y":184},{"type":"EntityCan","x":1728,"y":88},{"type":"EntityCan","x":728,"y":56},{"type":"EntityCan","x":752,"y":168},{"type":"EntityCan","x":600,"y":72},{"type":"EntityCan","x":1364,"y":200},{"type":"EntityCan","x":384,"y":168}],"layer":[{"name":"collision","width":120,"height":20,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":16,"foreground":false,"data":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1],[1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1],[1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1],[1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1],[1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]},{"name":"bg","width":10,"height":10,"linkWithCollision":false,"visible":1,"tilesetName":"media/pluranium_bg4.png","repeat":true,"preRender":true,"distance":"2","tilesize":16,"foreground":false,"data":[[19,1,3,8,3,4,8,3,17,3],[6,22,8,5,6,6,11,8,19,6],[17,8,7,16,3,3,3,9,4,3],[3,3,5,3,3,3,3,7,3,3],[3,3,3,15,20,3,3,3,3,3],[3,3,14,10,2,6,3,10,8,4],[3,4,15,3,3,17,3,3,3,3],[3,3,22,2,3,15,12,8,3,3],[3,3,2,15,3,8,15,8,11,3],[3,19,3,8,3,3,3,3,17,3]]},{"name":"platform","width":120,"height":20,"linkWithCollision":false,"visible":1,"tilesetName":"media/pluranium.png","repeat":false,"preRender":true,"distance":"1","tilesize":16,"foreground":false,"data":[[16,16,17,16,16,14,16,16,13,16,16,14,16,16,16,16,15,16,16,16,16,13,16,16,16,14,16,16,16,16,15,16,13,16,16,16,16,13,16,16,16,17,16,16,16,13,16,14,16,16,16,16,16,16,16,14,16,16,13,16,16,17,15,16,16,13,16,16,14,16,16,16,16,14,13,16,16,16,17,16,16,13,14,16,16,15,16,16,16,16,16,13,16,16,16,17,16,13,16,16,16,16,14,16,16,15,16,16,16,13,16,16,16,17,14,16,16,16,13,16],[13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16],[16,0,0,0,0,0,0,0,0,0,0,16,16,13,16,16,16,16,16,14,16,16,15,16,16,16,13,16,16,14,16,16,16,16,17,16,16,16,16,14,13,16,16,16,16,16,16,16,17,16,13,14,16,16,0,0,0,16,16,16,13,16,16,14,16,16,16,16,16,16,16,13,16,16,16,16,16,16,14,16,16,16,16,16,16,16,16,14,16,16,16,16,16,16,16,16,13,16,16,16,14,16,16,16,16,16,13,16,16,16,14,0,0,0,0,0,0,0,0,17],[17,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,7,10,16,16,10,16,16,14,13,4,2,16,1,1,16,1,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,16],[16,0,0,0,0,0,0,0,0,0,0,0,0,0,16,16,16,16,16,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,16,0,0,16,0,0,0,0,16,0,0,0,16,0,16,16,15,16,16,16,13,16,16,17,16,14,16,16,15,0,16,16,15,16,13,16,9,16,16,0,0,18,23,23,23,16,8,16,0,0,15,16,16,13,0,16,0,0,16,0,0,0,0,0,0,13,0,0,0,0,0,0,0,0,13],[16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,16,16,0,17,15,16,16,0,0,0,0,0,0,0,16,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,15,0,0,0,13,0,16,0,0,0,16,0,0,0,0,0,0,0,0,0,16,0,16,1,16,1,1,16,18,11,11,9,16,8,15,16,8,7,10,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,16,0,0,0,0,0,0,0,0,16],[14,0,0,0,0,0,0,0,0,0,16,16,0,17,0,16,16,15,0,0,0,0,0,0,0,0,0,0,0,16,16,16,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,16,0,0,16,0,0,16,0,0,0,16,0,14,0,0,16,0,0,0,16,16,16,13,16,0,0,16,0,16,16,14,16,16,16,2,16,16,16,16,18,0,0,17,16,13,16,0,0,0,16,0,0,16,0,17,0,0,0,16,0,16,16,16,16,0,0,0,0,0,0,0,0,0],[15,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,16,16,16,13,0,0,16,0,0,16,0,0,0,16,16,17,0,0,0,0,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,17,0,16,0,0,0,0,0,0,16,0,0,16,7,16,0,13,0,0,0,0,0,17,16,22,23,11,23,23,24,16,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0],[16,0,0,0,0,0,0,0,0,15,0,16,0,0,16,16,16,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,0,0,16,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,16,0,0,0,16,14,0,16,15,16,16,0,16,0,0,0,0,0,0,0,0,16,16,16,16,0,0,0,0,16,0,16,0,14,16,16,0,0,0,0,0,0,0,0,16,13,16,0,0,17,0,0,0,0,0,0,0,16,16],[13,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,16,0,0,0,0,0,0,16,0,0,0,16,16,16,0,0,0,16,0,0,15,0,0,0,0,0,0,0,0,0,16,0,0,0,0,16,0,0,0,0,0,0,0,15,16,0,0,0,16,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,13,16,0,0,0,0,0,0,0,16,0,0,16,0,0,0,0,14,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,16,0,0,15],[16,0,0,0,0,0,0,0,0,0,0,16,0,13,0,16,17,16,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,0,14,0,16,0,0,0,16,16,16,13,16,0,0,16,16,16,16,0,16,16,15,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,16,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16],[16,0,0,0,0,0,0,0,16,0,0,17,0,0,0,0,0,0,0,0,0,0,14,0,16,0,0,0,0,16,0,0,0,15,16,16,0,0,0,0,0,13,0,0,0,0,0,16,0,0,0,0,0,16,0,16,0,0,14,16,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,9,16,0,16,16,14,0,0,16,0,0,0,0,0,0,0,0,0,16,16,0,0,0,13,0,0,0,16,16],[15,0,0,0,0,0,0,0,0,0,0,16,0,0,13,16,16,0,16,17,0,0,0,0,13,0,0,16,16,16,0,0,0,0,0,13,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,13,0,0,0,0,0,0,16,16,0,16,14,16,16,16,15,16,16,16,0,0,0,0,0,0,0,0,0,5,6,0,0,0,0,16,14,16,16,13,16,16,0,0,0,0,0,0,0,0,16,0,0,16,0,0,16,0,16,0,0,0,0,0,0,16],[16,0,0,0,0,0,13,0,0,0,0,16,0,0,0,0,0,0,0,16,0,16,0,0,16,0,0,0,0,16,16,16,0,0,0,16,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,0,16,0,16,0,17,0,0,0,0,0,0,0,16,16,16,13,0,0,0,0,13,0,0,0,0,0,0,0,0,16,16,16,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,13,0,0,0,0,0,16,0,14,0,0,0,16,0,0,16],[16,0,0,0,0,0,0,0,0,0,0,13,16,16,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,15,0,0,0,0,0,16,0,0,0,0,0,0,16,0,13,0,0,16,0,16,0,0,0,16,0,0,16,16,0,0,0,0,17,0,16,16,0,16,0,0,0,0,0,5,6,16,1,1,1,1,5,6,5,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,0,0,0,0,0,16],[13,0,0,0,0,16,0,0,0,0,0,16,0,0,0,0,16,15,0,16,0,0,16,16,16,15,0,0,0,13,0,0,0,16,16,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,16,0,16,14,16,16,0,17,16,16,16,0,0,0,0,16,13,0,16,0,5,6,5,6,2,16,15,16,17,16,16,16,8,8,8,5,6,16,0,0,16,0,0,0,0,0,0,0,17,16,0,0,0,0,0,16,0,0,0,17,0,0,0,0,13],[16,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,16,17,0,0,0,16,0,0,16,0,0,0,0,16,0,0,0,0,0,0,0,0,0,15,0,16,0,16,16,0,0,0,0,0,0,0,0,16,5,6,16,0,0,16,16,16,13,16,16,10,16,16,4,8,10,8,14,16,16,16,16,16,16,0,0,0,0,0,0,15,0,0,0,0,0,0,16,0,0,0,16,0,0,0,0,0,0,0,0,16],[14,0,0,16,0,0,0,0,0,0,0,14,16,0,17,16,13,16,0,0,0,13,0,0,0,16,16,16,0,16,0,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,16,0,14,16,16,0,0,5,6,5,6,5,6,16,16,2,7,16,5,6,16,14,16,16,0,7,12,11,11,1,7,1,0,0,1,1,16,0,13,16,0,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,0,16,0,0,0,0,0,0,16],[16,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,16,0,0,0,16,0,0,0,0,0,0,0,16,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,16,4,16,11,8,9,8,11,2,10,11,10,8,12,11,11,23,11,11,16,12,1,1,16,0,4,4,0,1,1,15,8,16,16,0,0,0,0,0,16,0,0,0,0,0,0,0,0,16,0,0,16,0,0,0,0,0,0,0,0,16],[17,16,16,16,16,16,13,15,16,16,16,16,16,16,16,16,16,16,16,14,16,16,16,16,13,16,16,16,13,16,16,16,16,14,16,16,16,16,13,16,16,16,16,17,16,13,16,16,14,15,16,16,16,16,13,16,17,16,16,14,16,16,15,16,13,16,16,16,16,16,16,17,15,13,16,16,16,16,16,16,16,16,13,16,16,16,16,16,16,16,16,16,13,16,16,16,16,16,13,16,16,16,14,16,16,16,16,16,16,16,16,16,16,13,16,16,16,16,14,16]]}]}/*]JSON*/;
Level4RResources=[new ig.Image('media/pluranium_bg4.png'), new ig.Image('media/pluranium.png')];
});