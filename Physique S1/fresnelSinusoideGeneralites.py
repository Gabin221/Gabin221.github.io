# -*- coding: utf-8 -*-
"""
Created on Thu Oct 13 19:47:20 2022

@author: serru
"""

import numpy as np
import matplotlib.pyplot as plt

theta = np.linspace(0, 2*np.pi, 1000)

x1 = np.cos(theta)
x2 = np.sin(theta)
X = np.array((0))
Y= np.array((0))
U = np.array((1*np.cos(-np.pi/6)))
V = np.array((1*np.sin(-np.pi/6)))

plt.figure()
plt.plot(x1, x2)
plt.plot([0, np.cos(-np.pi/6)], [0, np.sin(-np.pi/6)], label=r"$ \theta = -\dfrac{\pi}{6} $")
plt.plot([0, np.cos(-5*np.pi/6)], [0, np.sin(-5*np.pi/6)], label=r"$ \theta = -\dfrac{5\pi}{6} $")
plt.plot(np.linspace(-25, 25, 1000), np.ones(len(theta))*0, color="black")
plt.plot(np.ones(len(theta))*0, np.linspace(-25, 25, 1000), color="black")
plt.xlabel("abscisses")
plt.ylabel("ordonnées")
plt.axis("equal")
plt.xlim(-1.25, 1.25)
plt.ylim(-1.25, 1.25)
plt.grid()
plt.legend()
plt.show()