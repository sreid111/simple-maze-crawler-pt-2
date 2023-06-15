info.onCountdownEnd(function () {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    level += 1
    hero.setPosition(10, 10)
    info.startCountdown(30)
})
let hero: Sprite = null
hero = sprites.create(img`
    . . . . c c c c c c . . . . . . 
    . . . c 6 7 7 7 7 6 c . . . . . 
    . . c 7 7 7 7 7 7 7 7 c . . . . 
    . c 6 7 7 7 7 7 7 7 7 6 c . . . 
    . c 7 c 6 6 6 6 c 7 7 7 c . . . 
    . f 7 6 f 6 6 f 6 7 7 7 f . . . 
    . f 7 7 7 7 7 7 7 7 7 7 f . . . 
    . . f 7 7 7 7 6 c 7 7 6 f c . . 
    . . . f c c c c 7 7 6 f 7 7 c . 
    . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
    . c 7 7 2 7 7 c f c 6 7 7 6 c c 
    c 1 1 1 1 7 6 f c c 6 6 6 c . . 
    f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
    f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
    . f 6 1 1 1 1 1 1 6 6 6 f . . . 
    . . c c c c c c c c c f . . . . 
    `, SpriteKind.Player)
hero.setPosition(10, 10)
controller.moveSprite(hero)
scene.cameraFollowSprite(hero)
let level = 1
info.startCountdown(30)
forever(function () {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`level1`)
    }
    if (level == 2) {
        tiles.setCurrentTilemap(tilemap`level2`)
    }
    if (level == 3) {
        tiles.setCurrentTilemap(tilemap`level4`)
    }
    if (level == 4) {
        game.gameOver(true)
    }
})
