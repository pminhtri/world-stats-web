export const appColors = {
    blue: '#1890ff',
    green: '#52c41a',
    red: '#f5222d',
    yellow: '#faad14',
    purple: '#722ed1',
    cyan: '#13c2c2',
    magenta: '#eb2f96',
    gray: '#f0f2f5',
    stone: '#8c8c8c',
    black: '#000000',
    white: '#ffffff',
    transparent: 'transparent',
    background: '#f0f2f5',
};

// implement opacity for colors

export const opacityColors = {
    ...appColors,
    blueOpacity: (opacity: number) => `rgba(24, 144, 255, ${opacity})`,
    greenOpacity: (opacity: number) => `rgba(82, 196, 26, ${opacity})`,
    redOpacity: (opacity: number) => `rgba(245, 34, 45, ${opacity})`,
    yellowOpacity: (opacity: number) => `rgba(250, 173, 20, ${opacity})`,
    purpleOpacity: (opacity: number) => `rgba(114, 46, 209, ${opacity})`,
    cyanOpacity: (opacity: number) => `rgba(19, 194, 194, ${opacity})`,
    magentaOpacity: (opacity: number) => `rgba(235, 47, 150, ${opacity})`,
    grayOpacity: (opacity: number) => `rgba(240, 242, 245, ${opacity})`,
    stoneOpacity: (opacity: number) => `rgba(140, 140, 140, ${opacity})`,
    blackOpacity: (opacity: number) => `rgba(0, 0, 0, ${opacity})`,
    whiteOpacity: (opacity: number) => `rgba(255, 255, 255, ${opacity})`,
    backgroundOpacity: (opacity: number) => `rgba(240, 242, 245, ${opacity})`,
};