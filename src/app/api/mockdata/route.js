export async function GET() {
  const data = [
    {
      id: 1,
      title: "Next.js",
      categoryId: "1",
      categoryName: "Texnologiya",
      date: "2025-10-28",
    },
    {
      id: 2,
      title: "Futbol xəbərləri",
      categoryId: "2",
      categoryName: "İdman",
      date: "2025-10-20",
    },
    {
      id: 3,
      title: "Online təhsil trendləri",
      categoryId: "3",
      categoryName: "Təhsil",
      date: "2025-10-15",
    },
     {
      id: 4,
      title: "Vergi Məcəlləsi",
      categoryId: "4",
      categoryName: "Qanunvericilik",
      date: "2025-10-22",
      description:"bu qanunvericilik Azerbaycan qanunlari ucun nezerde tutulub"
    },
     {
      id: 5,
      title: "İqtisadiyyat",
      categoryId: "3",
      categoryName: "Təhsil",
      date: "2025-10-18",
    },
     {
      id: 6,
      title: "Turizm əlaqələri",
      categoryId: "5",
      categoryName: "Beynəlxalq Münasibətlər",
      date: "2025-10-28",
    },
     {
      id: 7,
      title: "React",
      categoryId: "1",
      categoryName: "Texnologiya",
      date: "2025-10-22",
    },
  ];

  return Response.json(data);
}