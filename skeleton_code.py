import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

def make_data(initial_data):
    prev_data = initial_data['test'][0]
    datas = pd.DataFrame(initial_data)
    data = []
    for i in range(1440):
        
        arr = []
        for j in range(60):
            temp = prev_data * np.random.uniform(0.9995,1.0005,1)[0]
            arr.append(temp)
            prev_data = temp
        data.append([arr[0],max(arr),min(arr),arr[-1]])
    return data


data = [3421.6]
initial_data = pd.DataFrame(data,columns=['test'])
t = make_data(initial_data)

df = pd.DataFrame(t,columns=['open','high','low','close'])

import matplotlib.pyplot as plt
import matplotlib.gridspec as gridspec
fig = plt.figure(figsize=(8, 5))
fig.set_facecolor('w')
gs = gridspec.GridSpec(2, 1, height_ratios=[3, 1])
axes = []
axes.append(plt.subplot(gs[0]))

from mpl_finance import candlestick_ohlc

x = np.arange(len(df.index))
ohlc = df[['open', 'high', 'low', 'close']].astype(int).values
dohlc = np.hstack((np.reshape(x, (-1, 1)), ohlc))

# 봉차트
candlestick_ohlc(axes[0], dohlc, width=0.5, colorup='r', colordown='b')

# 거래량 차트

plt.tight_layout()
plt.show()
