const newColumnDate = [
  {
    "id": "1",
    "title": "UI/UX дизайнер",
    "subTitle": "Отдел разработки мобильного приложения",
    "status": "В приоритете",
    "members": "3",
    "files": "255",
    "profession": "Рекруитер",
    "name": "Алексей Щербаков",
    "src": "img1.png"
  },
  {
    "id": "2",
    "title": "Маркетолог",
    "subTitle": "Отдел маркетинга",
    "status": "В приоритете",
    "members": "2",
    "files": "182",
    "profession": "Рекруитер",
    "name": "Floyd Miles",
    "src": "img2.png"
  },
  {
    "id": "3",
    "title": "Менеджер по продажам",
    "subTitle": "Отдел продаж",
    "status": "В приоритете",
    "members": "3",
    "files": "255",
    "profession": "Рекруитер",
    "name": "Theresa Webb",
    "src": "img3.png"
  },
  {
    "id": "4",
    "title": "UI/UX дизайнер",
    "subTitle": "Отдел разработки мобильного приложения",
    "status": "В приоритете",
    "members": "3",
    "files": "182",
    "profession": "В приоритете",
    "name": "Vanessa Johnson",
    "src": "img4.png"
  }
];

const currentColumnDate = [
  {
    "id": "5",
    "title": "PHP Developer",
    "subTitle": "Housekeepers",
    "status": "В приоритете",
    "members": "3",
    "files": "182",
    "profession": "Рекруитер",
    "name": "Kristin Watson",
    "src": "img3.png"
  },
  {
    "id": "6",
    "title": "Freshers",
    "subTitle": "Finance",
    "status": "Второстепенная",
    "members": "3",
    "files": "182",
    "profession": "Рекруитер",
    "name": "Jacob Jones",
    "src": "img3.png"
  },
  {
    "id": "7",
    "title": "UI UX Designer",
    "subTitle": "Management",
    "status": "В приоритете",
    "members": "3",
    "files": "182",
    "profession": "Рекруитер",
    "name": "Wade Warren",
    "src": "img3.png"
  },
  {
    "id": "8",
    "title": "Joomla Developer",
    "subTitle": "Accounting",
    "status": "Второстепенная",
    "members": "3",
    "files": "182",
    "profession": "Рекруитер",
    "name": "Cameron Williamson",
    "src": "img3.png"
  },
  {
    "id": "9",
    "title": "Python Developer",
    "subTitle": "Laundry",
    "status": "В приоритете",
    "members": "3",
    "files": "182",
    "profession": "Рекруитер",
    "name": "Devon Lane",
    "src": "img3.png"
  },
  {
    "id": "10",
    "title": "Freshers",
    "subTitle": "Finance",
    "status": "Второстепенная",
    "members": "3",
    "files": "182",
    "profession": "Рекруитер",
    "name": "Jacob Jones",
    "src": "img3.png"
  }
];

const closedColumnDate = []

const archiveColumnDate = [
  {
    "id": "11",
    "title": "UX Architect",
    "subTitle": "Housekeeping management",
    "status": "В приоритете",
    "members": "3",
    "files": "182",
    "profession": "В приоритете",
    "name": "Guy Hawkins",
    "src": "img4.png"
  },
  {
    "id": "12",
    "title": "Human Resource",
    "subTitle": "Operations",
    "status": "Срочная заявка",
    "members": "3",
    "files": "182",
    "profession": "В приоритете",
    "name": "Annette Black",
    "src": "img4.png"
  },
  {
    "id": "13",
    "title": "Python Developer",
    "subTitle": "Restaurant Management",
    "status": "Срочная заявка",
    "members": "3",
    "files": "255",
    "profession": "В приоритете",
    "name": "Esther Howard",
    "src": "img4.png"
  }
];

const deletedColumnDate = [
  {
    "id": "14",
    "title": "UX Architect",
    "subTitle": "Housekeeping management",
    "status": "В приоритете",
    "members": "3",
    "files": "182",
    "profession": "В приоритете",
    "name": "Guy Hawkins",
    "src": "img4.png"
  },
  {
    "id": "15",
    "title": "Human Resource",
    "subTitle": "Operations",
    "status": "Срочная заявка",
    "members": "3",
    "files": "182",
    "profession": "В приоритете",
    "name": "Annette Black",
    "src": "img4.png"
  },
  {
    "id": "16",
    "title": "Python Developer",
    "subTitle": "Restaurant Management",
    "status": "Срочная заявка",
    "members": "3",
    "files": "255",
    "profession": "В приоритете",
    "name": "Esther Howard",
    "src": "img4.png"
  }
]


export const initialData = {
  'new': {
    title: 'Новые',
    items: newColumnDate,
  },
  'current': {
    title: 'Текущие',
    items: currentColumnDate,
  },
  'closed': {
    title: "Закрытые",
    items: closedColumnDate,
  },
  'archive': {
    title: 'Архив',
    items: archiveColumnDate,
  },
  'deleted': {
    title: "Удаленные",
    items: deletedColumnDate,
  }
}

