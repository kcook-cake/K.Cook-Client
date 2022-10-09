
const MMO_TestData = () => {
    return ([
        {
            image1: "", //필수
            name: "케이크1", //필수
            price: 2000, //필수
            saleTime: "15:00", //필수
            saleDate: "2020-10-19", //필수
            optionsList: [
                {
                    price: 2000,
                    category: "SIZE", //필수
                    categoryTitle: "", //필수
                    contents: "1호", //필수
                    optionsId: 0,
                    itemType: "normal",
                    itemNumber: 0, //필수
                },
            ],
        },
        {
            image1: "",
            name: "케이크2",
            price: 2000,
            saleTime: "15:00",
            saleDate: "2020-10-19",
            optionsList: [
                {
                    price: 1000,
                    category: "SIZE",
                    categoryTitle: "",
                    contents: "1호",
                    optionsId: 0,
                    itemType: "normal",
                    itemNumber: 0,
                },
            ],
        },
        {
            image1: "",
            name: "케이크3",
            price: 2000,
            saleTime: "15:00",
            saleDate: "2020-10-19",
            optionsList: [
                {
                    price: 1000,
                    category: "SIZE",
                    categoryTitle: "",
                    contents: "1호",
                    optionsId: 0,
                    itemType: "normal",
                    itemNumber: 0,
                },
            ],
        },
        {
            image1: "",
            name: "케이크4",
            price: 2000,
            saleTime: "15:00",
            saleDate: "2020-10-20",
            optionsList: [
                {
                    price: 1000,
                    category: "SIZE",
                    categoryTitle: "",
                    contents: "1호",
                    optionsId: 0,
                    itemType: "normal",
                    itemNumber: 0,
                },
                {
                    price: 1000,
                    category: "TASTE",
                    categoryTitle: "",
                    contents: "딸기",
                    optionsId: 0,
                    itemType: "normal",
                    itemNumber: 0,
                },
            ],
        },
        {
            image1: "",
            name: "케이크5",
            price: 2000,
            saleTime: "15:00",
            saleDate: "2020-10-20",
            optionsList: [
                {
                    price: 1000,
                    category: "SIZE",
                    categoryTitle: "",
                    contents: "1호",
                    optionsId: 0,
                    itemType: "normal",
                    itemNumber: 0,
                },
            ],
        }
    ]);
}

export default MMO_TestData;