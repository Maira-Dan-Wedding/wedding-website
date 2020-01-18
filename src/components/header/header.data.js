const HEADER_DATA = [
    {
        id: 1,
        linkUrl: "#schedule",
        linkNamePt: "Programação",
        linkNameEn: "schedule",
        isMainLink: false
    },
    {
        id: 2,
        linkUrl: "#travel",
        linkNamePt: "Viagem",
        linkNameEn: "Travel",
        isMainLink: false
    },
    {
        id: 3,
        linkUrl: "#",
        linkNamePt: "Dicas",
        linkNameEn: "Tips",
        dropdownList: [
            {
                linkUrl: "#",
                linkNamePt: "Hospedagem",
                linkNameEn: "Accomodation",
            },
            {
                linkUrl: "#",
                linkNamePt: "Restaurantes",
                linkNameEn: "Restaurants",
            },
            {
                linkUrl: "#",
                linkNamePt: "O que fazer",
                linkNameEn: "What to do",
            },
        ],
        isMainLink: false
    },
    {
        id: 4,
        linkUrl: "",
        linkNamePt: "Dan & Maíra",
        linkNameEn: "",
        isMainLink: true
    },
    {
        id: 5,
        linkUrl: "#",
        linkNamePt: "Lista de Presentes",
        linkNameEn: "Registry",
        isMainLink: false
    },
    {
        id: 6,
        linkUrl: "rsvp",
        linkNamePt: "R.S.V.P",
        linkNameEn: "",
        isMainLink: false
    }
]

export default HEADER_DATA; 
