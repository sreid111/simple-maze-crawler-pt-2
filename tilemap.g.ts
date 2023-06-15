// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020101010101010101010201010101020202020201010202020202020202010101020202020202020201020202010101010101010202010102010201020101010101010202020102020102020201010101010102020101010201020101010101020202020201020102010202020202010202010102020202020101010202010102010101010101010101020102010102020202010202010102020202020101010202010202020202020101010101010101020101010101010101010202020101010201010101020201010202010201010102020202020202020102020102010101010201010101020202020201020201010102010101010101010101010203`, img`
. . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 
. . . . . 2 2 . . . . . . . . 2 
2 2 . . . . . . . . 2 . . . 2 2 
2 2 2 2 2 . . 2 2 . 2 . 2 . 2 2 
2 2 2 2 . . . 2 . . 2 . . . 2 2 
2 2 2 2 . . 2 2 2 . 2 . 2 2 2 2 
2 . . . . . 2 . 2 . 2 . . . . . 
2 . . 2 2 . . . . . 2 2 2 . . 2 
2 . 2 2 2 2 2 2 2 2 2 . 2 . 2 2 
. . . . 2 . . 2 2 . . . . . 2 2 
2 . . 2 . . . . . . 2 2 2 2 2 2 
2 2 . 2 2 2 2 2 2 2 2 2 . . . 2 
2 2 . 2 2 2 2 . . 2 2 . . 2 . 2 
2 2 . . . . . . . . 2 . . 2 . 2 
2 2 2 . 2 2 2 2 . . . . . 2 . . 
2 2 2 . 2 2 2 2 2 2 2 2 2 2 . . 
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile3,sprites.dungeon.chestClosed], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100001010201010102020201020101020101010102020201020101010101010102010101010102010101020202010101010202020201010201020201020202010202010102020102010202010101020101010202010201010102020201010201020102020102010201020102010102010101020201020201010101020101020202010101010102020201010202010201010101020202010202010101020102010102020201020202010101020201020102020201010101010102020201020201010102020101020101020201010201010202010202020202020201020202010101010101010102020201010201020202010302020202020102020202010101020202`, img`
. . 2 . . . 2 2 2 . 2 . . 2 . . 
. . 2 2 2 . 2 . . . . . . . 2 . 
. . . . 2 . . . 2 2 2 . . . . 2 
2 2 2 . . 2 . 2 2 . 2 2 2 . 2 2 
. . 2 2 . 2 . 2 2 . . . 2 . . . 
2 2 . 2 . . . 2 2 2 . . 2 . 2 . 
2 2 . 2 . 2 . 2 . 2 . . 2 . . . 
2 2 . 2 2 . . . . 2 . . 2 2 2 . 
. . . . 2 2 2 . . 2 2 . 2 . . . 
. 2 2 2 . 2 2 . . . 2 . 2 . . 2 
2 2 . 2 2 2 . . . 2 2 . 2 . 2 2 
2 . . . . . . 2 2 2 . 2 2 . . . 
2 2 . . 2 . . 2 2 . . 2 . . 2 2 
. 2 2 2 2 2 2 2 . 2 2 2 . . . . 
. . . . 2 2 2 . . 2 . 2 2 2 . . 
2 2 2 2 2 . 2 2 2 2 . . . 2 2 2 
`, [myTiles.transparency16,myTiles.tile4,sprites.builtin.forestTiles0,sprites.dungeon.chestClosed], TileScale.Sixteen);
            case "level4":
            case "level4":return tiles.createTilemap(hex`1000100004040404040101010101010101010101010101010101010101010101010101010101020202020202020202020202020101020201010101010101010101010202010201010202020202020202020101010102010202010101010101010202010101020102010101010101010101020101010201020101020202020101010201010102010202010103010202010102010101020101020101010101020101020101010201010202010101020201010201010102020101020202020201010102010101010201010101010101010101020101010101020201010101010102020201010101010102020202020202020101010101010101010101010101010101020202`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 . . . . . . . . . . . 2 2 
. 2 . . 2 2 2 2 2 2 2 2 2 . . . 
. 2 . 2 2 . . . . . . . 2 2 . . 
. 2 . 2 . . . . . . . . . 2 . . 
. 2 . 2 . . 2 2 2 2 . . . 2 . . 
. 2 . 2 2 . . . . 2 2 . . 2 . . 
. 2 . . 2 . . . . . 2 . . 2 . . 
. 2 . . 2 2 . . . 2 2 . . 2 . . 
. 2 2 . . 2 2 2 2 2 . . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . . 2 2 . . . . . . 2 2 2 . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . 2 2 2 
`, [myTiles.transparency16,myTiles.tile5,myTiles.tile6,sprites.dungeon.chestClosed,myTiles.tile7], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
