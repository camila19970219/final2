import matplotlib.pyplot as plt
import numpy as np
import cv2


fig = plt.figure()
image = cv2.imread("pic/Changhua.png")
ax = fig.add_subplot(111)
ax.imshow(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))

def onclick(event):
    global ix, iy
    ix, iy = event.xdata, event.ydata
    print('x = %d, y = %d'%(ix, iy))

cid = fig.canvas.mpl_connect('button_press_event', onclick)
plt.show()



