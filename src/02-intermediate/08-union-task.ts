type Level = "junior" | "middle" | "senior";

interface Developer {
  login: string;
  skills: string[];
  level: Level;
}

const dev1: Developer = { login: "Den", skills: ["hz"], level: "junior" };

function gradeDeveloper(dev: { level: Level }, newLvl: Level): {} {
  dev.level = newLvl;
  return dev;
}

gradeDeveloper(dev1, "middle");
