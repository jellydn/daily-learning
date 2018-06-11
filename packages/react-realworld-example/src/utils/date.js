export const today = () => new Date();

export const tomorrow = () => new Date(today().getTime() + 1 * 24 * 60 * 60 * 1000);

export const nextWeek = () => new Date(today().getTime() + 7 * 24 * 60 * 60 * 1000);
