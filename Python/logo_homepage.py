import matplotlib.pyplot as plt
import numpy as np


def tableModulaire(table, modulo):
	angles = np.linspace(2*np.pi, 0, 1000)
	points = np.linspace(2*np.pi, 0, modulo+1)

	cosinusAngles = np.cos(angles)
	sinusAngles = np.sin(angles)

	cosinusPoints = np.cos(points + np.pi/2)
	sinusPoints = np.sin(points + np.pi/2)

	plt.figure(figsize=(6, 6))
	plt.plot(cosinusAngles, sinusAngles, linewidth=0.5)

	for i in range(1, len(cosinusPoints)):
		multiplication = (table * i)%modulo
		plt.plot([cosinusPoints[i], cosinusPoints[multiplication]], [sinusPoints[i], sinusPoints[multiplication]], color='black')

	plt.axis('equal')
	plt.axis('off')
	plt.xlim(-1.1, 1.1)
	plt.ylim(-1.1, 1.1)
	plt.savefig("../Images/logo_home_page.png", transparent=True)
	plt.show()


if __name__ == "__main__":
	table = 3
	modulo = 60
	tableModulaire(table, modulo)