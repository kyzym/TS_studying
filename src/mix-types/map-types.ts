type PcBrand = {
  name: string;
  country: string;
  createdAt: Date;
};

type WellKnownBrands = "apple" | "acer" | "asus" | "microsoft";

type MyPCRecord = {
  [BrandKey in WellKnownBrands]?: PcBrand;
};

const brandRecord: MyPCRecord = {
  acer: {
    country: "China",
    createdAt: new Date(),
    name: "acer",
  },
};

function printPcCatalog(pcCatalog: MyPCRecord) {
  console.log(pcCatalog.microsoft?.country);
}

type PartOfWindow = {
  [Key in "document" | "screen" | "navigator"]?: Window[Key];
};

const p: PartOfWindow = {
  screen: window.screen,
};

export {};
