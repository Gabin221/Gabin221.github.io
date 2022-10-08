# -*- coding: utf-8 -*-
"""
Created on Sat Oct  8 13:18:15 2022

@author: serru
"""

import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 0.027, 1000)
y = 3*np.sin((2*np.pi/0.02)*x - np.pi/6)

plt.figure()
plt.plot(x, y, label="f(t)")
plt.plot(np.linspace(-25, 25, 1000), np.ones(len(x))*0, color="black")
plt.plot(np.ones(len(x))*0, np.linspace(-25, 25, 1000), color="black")
plt.xlabel("temps (en s)")
plt.ylabel("ordonnées")
plt.ylim(-4, 4)
plt.xlim(-0.001, 0.03)
plt.grid()
plt.legend()
plt.show()