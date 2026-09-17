import LucasPic from "@assets/Lucas.png";
import GabrielPic from "@assets/Gabriel.png";
import DaviPic from "@assets/Davi.png";
import JonathanPic from "@assets/Jonathan.png";
import DuduPic from "@assets/Eduardo.png";

export type TechMember = {
  name: string;
  onCompanySince: string;
  role: string;
  imgUrl: string;
};

const Lucas: TechMember = {
  name: "Lucas Lopes",
  onCompanySince: "26.1",
  role: "Tech Lead",
  imgUrl: LucasPic,
};
const Davi: TechMember = {
  name: "Davi Macedo",
  onCompanySince: "26.2",
  role: "Tech Analyst",
  imgUrl: DaviPic,
};
const Gabriel: TechMember = {
  name: "Gabriel Valim",
  onCompanySince: "25.2",
  role: "CTO",
  imgUrl: GabrielPic,
};
const Jonathan: TechMember = {
  name: "Jonathan Vieira",
  onCompanySince: "26.1",
  role: "Tech Analyst",
  imgUrl: JonathanPic,
};
const Eduardo: TechMember = {
  name: "Eduardo",
  onCompanySince: "25.1",
  role: "Product Owner",
  imgUrl: DuduPic,
};

export const inMemoryDatabase: TechMember[] = [
  Lucas,
  Davi,
  Gabriel,
  Jonathan,
  Eduardo,
];
