export const powerPlantsKeys = {
  all: ['power-plants'] as const,
  page: (...queryValues: Array<string | number>) =>
    [...powerPlantsKeys.all, ...queryValues] as const,
};
