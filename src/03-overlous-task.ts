function head(value: string): string;
function head(value: number[]): number;
function head(value: boolean[]): boolean;
function head(value: any): any {
  return value[0];
}

head("gap");
head([0, 1, 2, 3]);
head([true, false]);
