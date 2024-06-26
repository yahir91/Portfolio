export const CONTACT: Contact[] = [
  {
    id: 1,
    logo: "icons/email.png",
    name: "yahir.cardona@gmail.com",
    link: "",
  },
  {
    id: 2,
    logo: "icons/linkedin.png",
    name: "www.linkedin.com/in/yahir-cardona",
    link: "https://www.linkedin.com/in/yahir-cardona/",
  },
  {
    id: 3,
    logo: "icons/github.png",
    name: "github.com/yahir91",
    link: "https://github.com/yahir91",
  },
];

export interface Contact {
  id: number;
  logo: string;
  name: string;
  link: string;
}
