export const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomBool = (): boolean => {
  return Math.random() < 0.5;
};

export const getRandomSameSite = (): 'strict' | 'lax' | 'none' => {
  const options: ('strict' | 'lax' | 'none')[] = ['strict', 'lax', 'none'];
  return options[Math.floor(Math.random() * options.length)];
};
