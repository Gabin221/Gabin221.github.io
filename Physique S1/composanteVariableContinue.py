# -*- coding: utf-8 -*-
"""
Created on Sat Oct  8 11:03:42 2022

@author: serru
"""

import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-5, 5, 1000)
y = np.sin(x) + 2

plt.figure()
plt.plot(x, y, label="sin(x) + 2")
plt.plot(x, np.sin(x), label="sin(x)")
plt.plot(x, np.ones(len(x))*2, label="y = 2")
plt.xlabel("abscisses")
plt.ylabel("ordonnées")
plt.ylim(-4, 4)
plt.grid()
plt.legend()
plt.show()