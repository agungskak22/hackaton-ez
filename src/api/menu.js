const Menu = [
  { header: "Apps" },
  {
    title: "Dashboard",
    group: "apps",
    icon: "dashboard",
    name: "Dashboard"
  },
  {
    title: "Data User",
    group: "apps",
    icon: "bar_chart",
    name: "userdata"
  },
  {
    title: "Antrian Pasien",
    group: "apps",
    icon: "queue",
    name: "patientqueue"
  },
  {
    title: "Dokter",
    group: "apps",
    icon: "record_voice_over",
    name: "dogter"
  }
];
// reorder menu
Menu.forEach(item => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
  }
});

export default Menu;
