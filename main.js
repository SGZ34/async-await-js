fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((respuesta) => {
    respuesta.forEach((element) => {
      console.log(element);
    });
  });

axios.get("https://jsonplaceholder.typicode.com/todos").then(({ data }) =>
  data.forEach((element) => {
    console.log(element);
  })
);

const obtenerDatosFetch = async () => {
  const respuesta = await fetch(
    "https://jsonplaceholder.typicode.com/todos"
  ).then((res) => res.json());
  respuesta.forEach((element) => {
    console.log(element);
  });
};

obtenerDatosFetch();

const obtenerDatosAxios = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  data.forEach((element) => {
    console.log(element);
  });
};

obtenerDatosAxios();
