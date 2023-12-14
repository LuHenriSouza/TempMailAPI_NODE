import tkinter as tk
from tkinter import filedialog
import main

def ler_bytes(arquivo):
    num_bytes = 277
    with open(arquivo, 'rb') as f:
        dados = f.read(num_bytes)
    return dados

def init():

    HONKAI_BIN = ler_bytes("./bin/HonkaiFristBytes")

    def selecionar_arquivo():
        opcoes = {
            'title': 'Selecionar Arquivo',
            'filetypes': [('launcher', '*.exe')],
        }
        arquivo = filedialog.askopenfilename(**opcoes)
        if arquivo:     
            print("Arquivo selecionado:", arquivo)
            if ler_bytes(arquivo).hex().upper() == HONKAI_BIN.hex().upper():
                janela.destroy()
                main.main(arquivo)
            else:
                label.config(text="Arquivo inválido")
        else:
            print("Nenhum arquivo selecionado.")

    # Cria uma janela principal
    largura = 300
    altura = 150
    janela = tk.Tk()

    posicao_x = (janela.winfo_screenwidth() - largura) // 2
    posicao_y = (janela.winfo_screenheight() - altura) // 2
    janela.title("Selecionar Arquivo")

    janela.geometry(f"{largura}x{altura}+{posicao_x}+{posicao_y}")

    # Cria um botão para chamar a função de seleção de arquivo
    procurar_arquivo = tk.Button(janela, text="Selecionar Arquivo", command=selecionar_arquivo)
    procurar_arquivo.pack(side=tk.TOP, anchor=tk.CENTER, pady=(altura - 50) // 2)

    # Label
    label = tk.Label(janela, text="")
    label.place(x=100, y=100)

    # Inicia o loop principal da interface gráfica
    janela.mainloop()
