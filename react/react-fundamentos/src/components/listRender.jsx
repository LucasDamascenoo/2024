export const ListRender = () => {
  const data = [
    { id: 1, name: "Lucas Oliveira", job: "Dados", email: "l.dados@gmail.com" },
    {
      id: 2,
      name: "Tatiane Oliveira",
      job: "Finaceiro",
      email: "lt.financeiro@gmail.com",
    },
    { id: 3, name: "Bruce", job: "Dog", email: "dog@gmail.com" },
  ];

  return (
    <ul>
      <ContactCard />
    </ul>
  );
};
