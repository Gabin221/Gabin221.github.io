# -*- coding: utf-8 -*-
"""
Created on Sat Oct  8 11:36:49 2022

@author: serru
"""

import numpy as np
import matplotlib.pyplot as plt


def f(x):
    y = 2*((np.abs(x-3.5) < 0.5)*-1) + 2
    return y


def f2(x):
    y = 2*((np.abs(x-3.5) < 0.5)*-1) + 0.5
    return y


x = np.linspace(0, 6, 1000)

plt.figure()
plt.plot(x, f(x), label="u(t)")
plt.plot(x, f2(x), label=r"$ u_{ac}(t) $")
plt.plot(np.linspace(0, 10, 1000), np.ones(len(x))+0.5, label="<u>")
plt.plot(np.linspace(-10, 10, 1000), np.ones(len(x))*0, color="black")
plt.plot(np.ones(len(x))*0, np.linspace(-10, 10, 1000), color="black")
plt.xlabel("t (en s)")
plt.ylabel("u(t) (en V)")
plt.ylim(-5, 5)
plt.xlim(-0.5, 6)
plt.grid()
plt.legend()
plt.show()