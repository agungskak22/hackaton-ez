const shortMonth = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];
const monthVisitData = shortMonth.map(m => {
  return {
    'month': m,
    'Laki - Laki': Math.floor(Math.random() * 1000) + 200,
    'Wanita': Math.floor(Math.random() * 1000) + 250,
  };
});
const Penyakit = [
  {
    value: 50,
    name: 'Sifilis'
  },
  {
    value: 35,
    name: 'Gonorea'
  },
  {
    value: 25,
    name: 'Hiv'
  },
  {
    value: 10,
    name: 'Aids'
  },
  {
    value: 10,
    name: 'sakit Kelamin Lain'
  }
];

export {
  monthVisitData,
  Penyakit,
};