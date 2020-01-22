const HEADER_DATA = [
    {
        id: 1,
        linkUrl: "",
        linkNamePt: "Home",
        linkNameEn: "Home",
        isMainLink: false
    },
    {
        id: 2,
        linkUrl: "",
        sectionId: "schedule",
        linkNamePt: "Programação",
        linkNameEn: "schedule",
        isMainLink: false
    },
    {
        id: 3,
        linkUrl: "",
        sectionId: "travel",
        linkNamePt: "Viagem",
        linkNameEn: "Travel",
        isMainLink: false
    },
    {
        id: 4,
        linkUrl: "#",
        linkNamePt: "Dicas",
        linkNameEn: "Tips",
        dropdownList: [
            {
                id: 1,
                linkUrl: "#",
                linkNamePt: "Hospedagem",
                linkNameEn: "Accomodation",
            },
            {
                id: 2,
                linkUrl: "what-to-do",
                linkNamePt: "O que fazer",
                linkNameEn: "What to do",
            },
        ],
        isMainLink: false
    },
    {
        id: 5,
        linkUrl: "",
        linkNamePt: "Dan & Maíra",
        linkNameEn: "",
        isMainLink: true
    },
    {
        id: 6,
        linkUrl: "registry",
        linkNamePt: "Lista de Presentes",
        linkNameEn: "Registry",
        isMainLink: false
    },
    {
        id: 7,
        linkUrl: "rsvp",
        linkNamePt: "R.S.V.P",
        linkNameEn: "",
        isMainLink: false
    }
]

export default HEADER_DATA; 
