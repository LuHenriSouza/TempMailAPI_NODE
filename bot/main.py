import os
import subprocess
import SearchPath
import script

def main(path=None):
    caminho_do_arquivo = "C:\\Program Files\\Star Rail\\Games\\StarRail.exe"

    if path is None:
        path = caminho_do_arquivo

    if not os.path.exists(path):
        SearchPath.init()
    else:
        subprocess.Popen([path])
        script.start()

if __name__ == "__main__":
    main()
