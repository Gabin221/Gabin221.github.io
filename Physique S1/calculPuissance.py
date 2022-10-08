# -*- coding: utf-8 -*-
"""
Created on Sat Oct  8 12:51:08 2022

@author: serru
"""

import numpy as np
import matplotlib.pyplot as plt


def u(x):
    y = 10*((np.abs(x-2.5) < 0.5)*-1) + 10
    return y


x = np.linspace(0, 4, 1000)

plt.figure()
plt.plot(x, u(x), label="u(t)")
plt.plot([0, 2, 3], [1, 2, 1], label="i(t)")
plt.plot([0, 2, 2, 3, 3, 5], [10, 20, 0, 0, 10, 20], label="p(t)")
plt.plot(np.linspace(-25, 25, 1000), np.ones(len(x))*0, color="black")
plt.plot(np.ones(len(x))*0, np.linspace(-25, 25, 1000), color="black")
plt.xlabel("t (en s)")
plt.ylim(-2, 21)
plt.xlim(-0.5, 5)
plt.grid()
plt.legend()
plt.show()