# -*- coding: utf-8 -*-
"""
Created on Thu Oct  6 20:50:31 2022

@author: serru
"""

import numpy as np
import matplotlib.pyplot as plt
from matplotlib import patches


def rect(x):
    y = ((np.abs(x) < 0.5)*1) - 0.3
    return y


x = np.linspace(-0.5, 1, 1000)

figure = plt.figure()
axes = figure.add_subplot(111)
axes.add_artist(patches.Rectangle((-0.5, 0), 1, 0.7**2, facecolor = 'cyan'))
axes.add_artist(patches.Rectangle((0.5, 0), 0.5, 0.3**2, facecolor = 'yellow'))
plt.plot(x, rect(x), label="rect(x)")
plt.plot(x, rect(x)**2, label="rect²(x)")
plt.plot(np.linspace(-3, 3, 1000), np.ones(len(x))*0, color="black")
plt.plot(np.ones(len(x))*0, np.linspace(-3, 3, 1000), color="black")
plt.xlabel("temps (en s)")
plt.ylabel("grandeur périodique X (en Y)")
plt.xlim(-2, 2)
plt.ylim(-0.5, 1)
plt.grid()
plt.legend()
plt.show()