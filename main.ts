basic.showString("3")
basic.pause(1000)
basic.showString("2")
basic.pause(1000)
basic.showString("1")
basic.pause(1000)
basic.showIcon(IconNames.Happy)
basic.pause(1000)
basic.clearScreen()
maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
led.enable(true)
basic.pause(500)
maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
led.enable(false)
basic.pause(500)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
basic.pause(1000)
maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
maqueen.motorStop(maqueen.Motors.M1)
basic.pause(1000)
music.rest(music.beat(BeatFraction.Whole))
music.playTone(330, music.beat(BeatFraction.Half))
music.playTone(330, music.beat(BeatFraction.Half))
music.playTone(330, music.beat(BeatFraction.Whole))
music.playTone(440, music.beat(BeatFraction.Half))
music.playTone(494, music.beat(BeatFraction.Half))
music.playTone(523, music.beat(BeatFraction.Double))
music.playTone(523, music.beat(BeatFraction.Double))
music.playTone(523, music.beat(BeatFraction.Half))
music.playTone(523, music.beat(BeatFraction.Half))
music.playTone(523, music.beat(BeatFraction.Half))
music.playTone(494, music.beat(BeatFraction.Half))
music.playTone(440, music.beat(BeatFraction.Whole))
music.playTone(392, music.beat(BeatFraction.Half))
music.playTone(440, music.beat(BeatFraction.Half))
music.playTone(494, music.beat(BeatFraction.Double))
music.playTone(494, music.beat(BeatFraction.Double))
music.playTone(494, music.beat(BeatFraction.Whole))
music.playTone(494, music.beat(BeatFraction.Whole))
music.playTone(440, music.beat(BeatFraction.Whole))
music.playTone(392, music.beat(BeatFraction.Whole))
music.playTone(349, music.beat(BeatFraction.Half))
music.playTone(392, music.beat(BeatFraction.Half))
music.playTone(440, music.beat(BeatFraction.Double))
music.playTone(440, music.beat(BeatFraction.Double))
music.playTone(440, music.beat(BeatFraction.Half))
music.playTone(440, music.beat(BeatFraction.Half))
music.playTone(440, music.beat(BeatFraction.Half))
music.playTone(392, music.beat(BeatFraction.Half))
music.playTone(349, music.beat(BeatFraction.Half))
music.playTone(330, music.beat(BeatFraction.Half))
music.playTone(349, music.beat(BeatFraction.Half))
music.playTone(392, music.beat(BeatFraction.Breve))
music.rest(music.beat(BeatFraction.Half))
music.playTone(330, music.beat(BeatFraction.Half))
music.playTone(330, music.beat(BeatFraction.Half))
music.playTone(330, music.beat(BeatFraction.Half))
music.playTone(330, music.beat(BeatFraction.Whole))
music.playTone(440, music.beat(BeatFraction.Half))
music.playTone(494, music.beat(BeatFraction.Half))
music.playTone(523, music.beat(BeatFraction.Quarter))
music.playTone(494, music.beat(BeatFraction.Quarter))
music.playTone(440, music.beat(BeatFraction.Half))
music.playTone(440, music.beat(BeatFraction.Double))
music.playTone(523, music.beat(BeatFraction.Whole))
music.playTone(494, music.beat(BeatFraction.Quarter))
music.playTone(440, music.beat(BeatFraction.Quarter))
music.playTone(392, music.beat(BeatFraction.Half))
music.playTone(392, music.beat(BeatFraction.Double))
music.rest(music.beat(BeatFraction.Whole))
music.playTone(349, music.beat(BeatFraction.Half))
music.playTone(392, music.beat(BeatFraction.Half))
music.playTone(440, music.beat(BeatFraction.Half))
music.playTone(440, music.beat(BeatFraction.Half))
music.playTone(440, music.beat(BeatFraction.Half))
music.playTone(392, music.beat(BeatFraction.Half))
music.playTone(349, music.beat(BeatFraction.Half))
music.playTone(349, music.beat(BeatFraction.Whole))
music.rest(music.beat(BeatFraction.Double))
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
maqueen.motorStop(maqueen.Motors.M2)
music.rest(music.beat(BeatFraction.Double))
music.rest(music.beat(BeatFraction.Whole))
music.playTone(330, music.beat(BeatFraction.Half))
music.playTone(349, music.beat(BeatFraction.Half))
music.playTone(392, music.beat(BeatFraction.Half))
music.playTone(349, music.beat(BeatFraction.Half))
music.playTone(392, music.beat(BeatFraction.Half))
music.playTone(440, music.beat(BeatFraction.Half))
music.playTone(494, music.beat(BeatFraction.Half))
music.playTone(440, music.beat(BeatFraction.Half))
music.playTone(392, music.beat(BeatFraction.Half))
music.playTone(349, music.beat(BeatFraction.Half))
music.playTone(330, music.beat(BeatFraction.Breve))
music.rest(music.beat(BeatFraction.Whole))
maqueen.motorStop(maqueen.Motors.All)
basic.pause(1000)
