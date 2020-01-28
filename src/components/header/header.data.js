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
                linkUrl: "https://www.vectotravel.com",
                linkNamePt: "Hospedagem",
                linkNameEn: "Accomodation",
                outsideLink: true
            },
            {
                id: 2,
                linkUrl: "what-to-do",
                linkNamePt: "O que fazer",
                linkNameEn: "What to do",
            },
            {
                id: 3,
                linkUrl: "extend-trip",
                linkNamePt: "Dar uma esticadinha",
                linkNameEn: "Extend trip",
            }
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
        linkUrl: "https://www.zola.com/registry/mairaanddan",
        linkNamePt: "Lista de Presentes",
        linkNameEn: "Registry",
        outsideLink: true,
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
