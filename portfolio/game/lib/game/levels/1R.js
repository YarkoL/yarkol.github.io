ig.module( 'game.levels.1R' )
.requires( 'impact.image','game.entities.crawler','game.entities.player','game.entities.levelexit','game.entities.shooter','game.entities.can' )
.defines(function(){
Level1R=/*JSON[*/{"entities":[{"type":"EntityCrawler","x":1656,"y":192},{"type":"EntityCrawler","x":1080,"y":192},{"type":"EntityCrawler","x":140,"y":208},{"type":"EntityCrawler","x":488,"y":176},{"type":"EntityCrawler","x":404,"y":192},{"type":"EntityCrawler","x":1592,"y":96},{"type":"EntityCrawler","x":336,"y":208},{"type":"EntityCrawler","x":308,"y":112},{"type":"EntityCrawler","x":808,"y":96},{"type":"EntityCrawler","x":1300,"y":208},{"type":"EntityCrawler","x":1204,"y":80},{"type":"EntityCrawler","x":1160,"y":128},{"type":"EntityCrawler","x":192,"y":128},{"type":"EntityCrawler","x":1480,"y":160},{"type":"EntityCrawler","x":1424,"y":192},{"type":"EntityCrawler","x":1720,"y":176},{"type":"EntityCrawler","x":664,"y":128},{"type":"EntityCrawler","x":1724,"y":64},{"type":"EntityCrawler","x":1228,"y":176},{"type":"EntityPlayer","x":28,"y":290},{"type":"EntityCrawler","x":1040,"y":144},{"type":"EntityCrawler","x":820,"y":176},{"type":"EntityCrawler","x":840,"y":96},{"type":"EntityCrawler","x":1084,"y":48},{"type":"EntityCrawler","x":1060,"y":96},{"type":"EntityCrawler","x":1300,"y":80},{"type":"EntityCrawler","x":1552,"y":48},{"type":"EntityLevelexit","x":1888,"y":80,"settings":{"level":"2R"}},{"type":"EntityShooter","x":268,"y":32,"settings":{"shootDelay":2.5}},{"type":"EntityShooter","x":1392,"y":252,"settings":{"shootDelay":2}},{"type":"EntityCan","x":1716,"y":72},{"type":"EntityCan","x":1508,"y":56},{"type":"EntityCan","x":328,"y":120},{"type":"EntityCan","x":872,"y":104},{"type":"EntityCan","x":1332,"y":168},{"type":"EntityCan","x":1736,"y":184},{"type":"EntityCan","x":104,"y":248},{"type":"EntityCan","x":1748,"y":72},{"type":"EntityCan","x":1464,"y":72},{"type":"EntityCan","x":1604,"y":184},{"type":"EntityCan","x":308,"y":120},{"type":"EntityCan","x":860,"y":184},{"type":"EntityCan","x":516,"y":184},{"type":"EntityCan","x":888,"y":184},{"type":"EntityCan","x":912,"y":104},{"type":"EntityCan","x":1412,"y":88},{"type":"EntityCan","x":176,"y":136},{"type":"EntityCan","x":1528,"y":136},{"type":"EntityCan","x":820,"y":104},{"type":"EntityCan","x":1660,"y":72}],"layer":[{"name":"collision","width":120,"height":20,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":16,"foreground":false,"data":[[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],[1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0],[1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],[1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"bg","width":10,"height":10,"linkWithCollision":false,"visible":1,"tilesetName":"media/pluranium_bg1.png","repeat":true,"preRender":true,"distance":"2","tilesize":16,"foreground":false,"data":[[16,11,11,15,11,18,16,15,0,0],[16,16,7,16,16,18,16,7,16,0],[0,16,16,14,16,18,16,0,16,0],[16,15,0,0,16,3,16,16,8,16],[0,16,17,0,0,0,0,16,14,16],[16,16,4,0,0,0,0,7,16,2],[16,16,16,0,0,0,0,16,15,16],[0,8,14,0,16,2,16,16,0,0],[0,7,16,0,16,18,11,11,11,11],[0,17,16,0,16,18,16,17,14,16]]},{"name":"platform","width":120,"height":20,"linkWithCollision":false,"visible":1,"tilesetName":"media/pluranium.png","repeat":false,"preRender":true,"distance":"1","tilesize":16,"foreground":false,"data":[[16,13,15,16,16,8,8,8,1,1,18,3,17,3,18,2,1,1,1,1,23,12,23,12,19,19,19,18,0,0,0,0,0,0,0,0,12,0,0,12,13,0,13,23,23,13,11,23,23,23,1,1,1,0,3,11,16,0,0,2,17,15,16,17,16,16,16,16,14,16,16,16,16,16,14,16,16,16,17,16,14,16,16,13,16,16,16,16,16,17,13,16,15,16,13,16,16,16,15,14,16,16,13,16,14,16,16,15,16,16,16,13,18,1,4,0,8,15,16,16],[16,16,0,0,17,13,15,16,15,15,12,3,3,4,12,16,16,16,17,16,11,11,11,9,0,19,0,18,7,23,23,23,11,23,23,11,23,23,7,12,1,1,4,1,1,12,0,0,0,19,23,23,11,23,24,0,7,23,3,24,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,7,23,11,11,23,23,9,2],[16,16,0,0,0,0,0,0,0,15,18,3,23,11,24,16,0,0,0,2,3,3,3,3,3,3,0,18,16,15,19,19,19,13,3,8,14,16,16,15,13,12,4,19,15,19,19,0,17,19,16,15,16,16,16,13,16,15,16,16,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,16,15,13,16,16,16,12,0],[16,0,0,0,0,0,0,0,0,15,22,23,23,3,4,16,0,0,0,16,13,23,23,11,23,23,23,24,16,0,0,0,0,0,0,0,0,14,16,16,15,13,12,4,19,15,19,19,16,17,0,0,0,0,0,0,0,16,7,13,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,15,12],[16,0,0,0,0,0,0,0,0,15,14,15,10,17,16,16,0,0,0,16,16,3,13,15,16,15,16,16,13,0,0,0,0,0,0,0,0,0,0,0,19,14,16,16,15,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,16,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,13,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,23,23],[16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,14,16,0,0,16,16,15,0,0,0,0,0,0,0,0,0,0],[17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,17,0,0,0,0,16,15,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0],[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,16,16,15,16,16,14,13,0,0,0,0,0,0,0,16,16,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,16,0,0,0,0,0,0,0,0,0,0,16,0,0,0,17,0,0,16,16],[18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0],[18,0,0,0,0,0,0,0,0,0,16,15,16,0,0,0,0,0,0,0,16,17,15,16,16,0,0,0,14,0,0,0,0,0,0,13,16,16,16,16,15,16,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0],[18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,17,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,16,16,15,16,17,0,0,0,0,0,0,0,0,0,0,0,0,16,17,15,13,16,16,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,16,15,0],[18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,16,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0],[18,0,0,0,0,0,0,0,0,0,0,0,13,15,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,16,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,15,16,16,16,13,16,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,14,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,13,16,16,16,0,0,16,0,0,0,0,16,0],[17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,17,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,6,5,6,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,16,0,0,0,0,0,0,14,0,0,0,0,0,0,16,16,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0],[16,0,0,0,0,0,0,0,16,15,0,0,0,0,0,0,0,0,0,0,0,16,16,0,0,0,0,0,0,0,0,0,0,0,0,5,6,5,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,0,8,0,16,0,0,0,0,16,0,0,0,0,0,0,16,15,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,16,23],[16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,11,11,16,6,5,6,5,6,5,6,0,0,0,0,0,0,6,5,6,5,6,5,6,5,6,16,0,0,0,1,0,16,12,16,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,6,5,6,16,9,12,0],[16,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,16,8,8,11,11,11,11,11,11,12,16,0,0,0,0,0,0,16,16,23,9,11,0,0,7,23,16,17,16,16,16,1,16,18,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,5,6,5,6,5,6,5,6,5,6,0,0,0,0,0,5,6,5,6,13,16,0,0,0,0,0,18,0],[16,0,0,0,0,0,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,5,6,5,6,3,4,3,3,16,3,12,16,3,16,0,0,0,0,0,0,16,0,0,18,0,8,0,1,9,0,0,0,0,16,2,0,12,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,5,6,14,5,6,0,8,11,11,16,7,0,0,0,0,5,6,17,5,6,2,0,16,0,8,0,17,2,16,13,0,4,16],[17,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,16,15,16,16,16,15,16,7,16,9,16,12,16,16,16,6,5,6,5,6,5,16,7,0,3,1,1,1,1,16,0,0,0,16,16,3,0,16,11,5,6,5,6,5,6,0,0,0,0,0,0,0,0,0,0,16,0,13,18,0,16,2,9,0,0,1,1,11,23,16,16,2,1,0,16,0,8,0,13,0,8,16,13,16,16,16,0,12,0],[16,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,16,16,7,13,16,16,16,16,16,16,15,12,16,16,16,11,12,11,11,12,11,8,0,0,22,23,23,23,16,14,17,0,16,16,17,1,0,16,1,1,0,3,3,0,16,16,5,6,5,6,5,6,5,6,16,17,23,23,24,8,7,0,8,0,0,1,0,1,0,0,16,10,1,10,16,0,8,0,16,13,11,11,23,23,11,11,16,24,0]]}]}/*]JSON*/;
Level1RResources=[new ig.Image('media/pluranium_bg1.png'), new ig.Image('media/pluranium.png')];
});