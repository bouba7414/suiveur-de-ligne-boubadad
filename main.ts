input.onButtonPressed(Button.B, function () {
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
    basic.pause(5000)
})
basic.forever(function () {
    basic.showString("GO BOUBA")
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.GREEN)
    } else {
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0) {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 0)
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 60)
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.RED)
        } else {
            if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) {
                DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 0)
                DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 60)
                DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.RED)
            } else {
                DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
                DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.YELLOW)
            }
        }
    }
})
