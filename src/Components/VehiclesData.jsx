let VehiclesData = [
  {
    marca: "Toyota",
    modelo: "Crown",
    año: 2019,
    kms: 68000,
    precio: 14500,
    tipo: "Sedan",
    caja: "Automatico",
    combustible: "Electrico",
    foto: "https://example.com/autos/toyota-corolla-2019.jpg"
  },
  {
    marca: "Ford",
    modelo: "Ranger",
    año: 2021,
    kms: 42000,
    precio: 28500,
    tipo: "PickUp",
    caja: "Manual",
    combustible: "Diesel",
    foto: "https://example.com/autos/ford-ranger-2021.jpg"
  },
  {
    marca: "Volkswagen",
    modelo: "Golf",
    año: 2018,
    kms: 75000,
    precio: 16200,
    tipo: "HatchBack",
    caja: "Manual",
    combustible: "Gasolina",
    foto: "https://example.com/autos/vw-golf-2018.jpg"
  },
  {
    marca: "Chevrolet",
    modelo: "Onix",
    año: 2020,
    kms: 51000,
    precio: 12300,
    tipo: "Hatchback",
    caja: "Automatico",
    combustible: "Gasolina",
    foto: "https://example.com/autos/chevrolet-onix-2020.jpg"
  },
  {
    marca: "Honda",
    modelo: "Civic",
    año: 2017,
    kms: 89000,
    precio: 15800,
    tipo: "Sedan",
    caja: "Manual",
    combustible: "Gasolina",
    foto: "https://example.com/autos/honda-civic-2017.jpg"
  },
  {
    marca: "Peugeot",
    modelo: "208",
    año: 2022,
    kms: 18000,
    precio: 17500,
    tipo: "HatchBack",
    caja: "Automatico",
    combustible: "Gasolina",
    foto: "https://example.com/autos/peugeot-208-2022.jpg"
  },
  {
    marca: "Renault",
    modelo: "Duster",
    año: 2019,
    kms: 73000,
    precio: 16800,
    tipo: "SUV",
    caja: "Manual",
    combustible: "Diesel",
    foto: "https://example.com/autos/renault-duster-2019.jpg"
  },
  {
    marca: "Jeep",
    modelo: "Compass",
    año: 2021,
    kms: 39000,
    precio: 29500,
    tipo: "SUV",
    caja: "Automatico",
    combustible: "Diesel",
    foto: "https://example.com/autos/jeep-compass-2021.jpg"
  },
  {
    marca: "BMW",
    modelo: "M4 Coupe",
    año: 2018,
    kms: 62000,
    precio: 27800,
    tipo: "Coupe",
    caja: "Automatico",
    combustible: "Gasolina",
    foto: "https://example.com/autos/bmw-320i-2018.jpg"
  },
  {
    marca: "Mercedes-Benz",
    modelo: "C200",
    año: 2019,
    kms: 54000,
    precio: 31500,
    tipo: "Sedan",
    caja: "Automatico",
    combustible: "Gasolina",
    foto: "https://example.com/autos/mercedes-c200-2019.jpg"
  },
  {
    marca: "Audi",
    modelo: "RS4 Sportback",
    año: 2017,
    kms: 83000,
    precio: 22500,
    tipo: "HatchBack",
    caja: "Automatico",
    combustible: "Gasolina",
    foto: "https://example.com/autos/audi-a3-2017.jpg"
  },
  {
    marca: "Nissan",
    modelo: "GTR",
    año: 2020,
    kms: 47000,
    precio: 17200,
    tipo: "Coupe",
    caja: "Manual",
    combustible: "Gasolina",
    foto: "https://example.com/autos/nissan-sentra-2020.jpg"
  },
  {
    marca: "Fiat",
    modelo: "Cronos",
    año: 2021,
    kms: 36000,
    precio: 14800,
    tipo: "Sedan",
    caja: "Manual",
    combustible: "GNC",
    foto: "https://example.com/autos/fiat-cronos-2021.jpg"
  },
  {
    marca: "Toyota",
    modelo: "Hilux",
    año: 2022,
    kms: 25000,
    precio: 38500,
    tipo: "PickUp",
    caja: "Automatico",
    combustible: "Diesel",
    foto: "https://example.com/autos/toyota-hilux-2022.jpg"
  },
  {
    marca: "Chevrolet",
    modelo: "Tracker",
    año: 2021,
    kms: 33000,
    precio: 21500,
    tipo: "SUV",
    caja: "Automatico",
    combustible: "Gasolina",
    foto: "https://example.com/autos/chevrolet-tracker-2021.jpg"
  },
  {
    marca: "Hyundai",
    modelo: "Tucson",
    año: 2018,
    kms: 79000,
    precio: 23500,
    tipo: "SUV",
    caja: "Automatico",
    combustible: "Diesel",
    foto: "https://example.com/autos/hyundai-tucson-2018.jpg"
  },
  {
    marca: "Tesla",
    modelo: "Model 3",
    año: 2022,
    kms: 21000,
    precio: 39500,
    tipo: "Sedan",
    caja: "Automatico",
    combustible: "Electrico",
    foto: "https://example.com/autos/tesla-model-3-2022.jpg"
  },
  {
    marca: "Toyota",
    modelo: "Prius",
    año: 2020,
    kms: 56000,
    precio: 26800,
    tipo: "Sedan",
    caja: "Automatico",
    combustible: "Hibrido",
    foto: "https://example.com/autos/toyota-prius-2020.jpg"
  },
  {
    marca: "Ford",
    modelo: "Mustang",
    año: 2016,
    kms: 68000,
    precio: 34500,
    tipo: "Coupe",
    caja: "Manual",
    combustible: "Gasolina",
    foto: "https://example.com/autos/ford-mustang-2016.jpg"
  },
  {
    marca: "Volkswagen",
    modelo: "Amarok",
    año: 2020,
    kms: 59000,
    precio: 32500,
    tipo: "PickUp",
    caja: "Automatico",
    combustible: "Diesel",
    foto: "https://example.com/autos/vw-amarok-2020.jpg"
  },
  {
    marca: "Dodge",
    modelo: "Challenger",
    año: 2021,
    kms: 2000,
    precio: 28500,
    tipo: "Coupe",
    caja: "Manual",
    combustible: "Gasolina",
    foto: "https://example.com/autos/ford-ranger-2021.jpg"
  },
  {
    marca: "Porsche",
    modelo: "718 Cayman",
    año: 2021,
    kms: 42000,
    precio: 35600,
    tipo: "Coupe",
    caja: "Manual",
    combustible: "Gasolina",
    foto: "https://example.com/autos/ford-ranger-2021.jpg"
  }
];

export default VehiclesData