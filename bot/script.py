import pyautogui
import time

def start():

    largura, altura = pyautogui.size()

    timeout = 20
    intervalo = 1

    tempo_inicial = time.time()

    while time.time() - tempo_inicial < timeout:
        try:
            position = pyautogui.locateOnScreen("img/login.png", confidence=0.7)
        except pyautogui.ImageNotFoundException:
            position = None

        if position is None:
            print("Waiting...")
            time.sleep(intervalo)
        else:
            print("ABRIU")
            
    # IF LOGED IN
    centro_x = largura // 2
    centro_y = altura // 2
    pyautogui.click(centro_x, centro_y)
    time.sleep(15)
    pyautogui.click(centro_x, centro_y)

        