import matplotlib.pyplot as plt
import numpy as np

def logo():
    angles = np.linspace(0, 2*np.pi, 1000)

    x_premier_cercle = np.cos(angles)
    y_premier_cercle = np.sin(angles) + 2.5

    x_second_cercle = np.cos(angles) + 3
    y_second_cercle = np.sin(angles)

    plt.figure()
    plt.plot(x_premier_cercle, y_premier_cercle, linewidth=15)
    plt.text(-1, -1, "% m o d u l o %", fontfamily='sans-serif', fontweight="bold", rotation=45, fontsize=40, backgroundcolor='black', color="white")
    plt.plot(x_second_cercle, y_second_cercle, linewidth=15)
    plt.axis('equal')
    plt.axis('off')
    plt.savefig("../Images/logo_modulo.png", transparent=True)
    plt.show()

if __name__ == '__main__':
    logo()
