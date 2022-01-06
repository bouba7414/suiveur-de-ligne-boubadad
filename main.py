music.play_melody("C5 A G G B E A A ", 120)

def on_forever():
    led.plot_bar_graph(3, 12)
basic.forever(on_forever)
