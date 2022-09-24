{
    "isCake": true,
    "image": "", //이미지 5개
    "price": 0,
    "name": "케이크",

    "todayCake": false, //당일 케이크 여부
    "todayMax": -1, //(추가)해당 케이크를 하루에 최대 몇 개 팔 수 있는지 //-1은 무한으로 받겠다는 의미임
    "todaySale": 0, //(추가)해당 케이크를 당일에 몇 개 팔았는지 
	//하루가 지나면(자정 12시 넘으면) 0으로 초기화

    "originShow": true, //(추가)관리자가 케이크 노출 여부 결정하는 부분
    "show": true, //관리자가 케이크 노출 여부 결정하는 부분 //false이면 백엔드에서 이 케이크가 안보이게 해주세요
	//백엔드에서 todayMax === todaysale이 된다면 show는 자동으로 false을 만들어 주세요
	//하루가 지나면(자정 12시 넘으면) originShow값으로 바뀜

    "newOptionsList": [
        //SIZE
        {
			"optionId": 283,
            "itemNumber": 0, //(추가)
            "itemWhat": "normal", //(추가)일반 선택(normal)or텍스트(text)or이미지(image)
            "additionalCost": 0,
            "category": "SIZE",
            "categoryTitle": "",
            "child": {
                COLOR: [1, 2], //(추가)itemNumber 들어감
                LETERING: [1],
            },
            "contents": "string",
            "title": "A1"
        },
        {
            "itemNumber": 1,
            "itemWhat": "normal",
            "additionalCost": 0,
            "category": "SIZE",
            "categoryTitle": "",
            "child": {
                COLOR: [2], 
                LETERING: [2],
            },
            "contents": "string",
            "title": "A2"
        },
        {
            "itemNumber": 2,
            "itemWhat": "text",
            "additionalCost": 0,
            "category": "SIZE",
            "categoryTitle": "",
            "child": {},
            "contents": "string",
            "title": "A3"
        },
        {
            "itemNumber": 3,
            "itemWhat": "image",
            "additionalCost": 0,
            "category": "SIZE",
            "categoryTitle": "",
            "child": {},
            "contents": "string",
            "title": "A4"
        },

        //TASTE
        {
            "itemNumber": 0,
            "itemWhat": "normal",
            "additionalCost": 0,
            "category": "TASTE",
            "categoryTitle": "",
            "child": {},
            "contents": "string",
            "title": "B1"
        },
        {
            "itemNumber": 1,
            "itemWhat": "normal",
            "additionalCost": 0,
            "category": "TASTE",
            "categoryTitle": "",
            "child": {},
            "contents": "string",
            "title": "B2"
        },

        //COLOR
        {
            "itemNumber": 0,
            "itemWhat": "normal",
            "additionalCost": 0,
            "category": "COLOR",
            "categoryTitle": "",
            "child": {},
            "contents": "string",
            "title": "C1"
        },
        {
            "itemNumber": 1,
            "itemWhat": "normal",
            "additionalCost": 0,
            "category": "COLOR",
            "categoryTitle": "",
            "child": {},
            "contents": "string",
            "title": "C2"
        },
        {
            "itemNumber": 2,
            "itemWhat": "normal",
            "additionalCost": 0,
            "category": "COLOR",
            "categoryTitle": "",
            "child": {},
            "contents": "string",
            "title": "C3"
        },

        //LETERING
        {
            "itemNumber": 0,
            "itemWhat": "normal",
            "additionalCost": 0,
            "category": "LETERING",
            "categoryTitle": "",
            "child": {},
            "contents": "string",
            "imageUrl": "string",
            "title": "D1"
        },
        {
            "itemNumber": 1,
            "itemWhat": "normal",
            "additionalCost": 0,
            "category": "LETERING",
            "categoryTitle": "",
            "child": {},
            "contents": "string",
            "imageUrl": "string",
            "title": "D2"
        },
    ],
}



==프론트에서 가공==
const [child, setChild] = useState({
    {
        COLOR: [1, 2], //optionNumber 
        LETERING: [1],
    },
});

{
    "cakeName": '케이크1',
    "cakeImage": '',
    "cakePrice": 1000,
    "optionList": [
        //SIZE
        {
            optionNumber: 0,
            optionName: '크기',
            itemList: [
                {
                    itemId: ?,
                    itemNumber: 0,
                    itemName: 'A1',
                    itemPrice: 0,
                },
                {
                    itemId: ?,
                    itemNumber: 1,
                    itemName: 'A2',
                    itemPrice: 0,
                },
                {
                    itemId: ?,
                    itemNumber: 2,
                    itemName: 'A3-텍스트',
                    itemPrice: 0,
                },
                {
                    itemId: ?,
                    itemNumber: 3,
                    itemName: 'A4-이미지',
                    itemPrice: 0,
                },
            ],
        },

        //TASTE
        {
            optionNumber: 1,
            optionName: '맛',
            itemList: [
                {
                    itemId: ?,
                    itemNumber: 0,
                    itemName: 'B1',
                    itemPrice: 0,
                },
                {
                    itemId: ?,
                    itemNumber: 1,
                    itemName: 'B2',
                    itemPrice: 0,
                },
            ],
        },

        //COLOR
        {
            optionNumber: 2,
            optionName: '색상',
            itemList: [
                {
                    itemId: ?,
                    itemNumber: 0,
                    itemName: 'C1',
                    itemPrice: 0,
                },
                {
                    itemId: ?,
                    itemNumber: 1,
                    itemName: 'C2',
                    itemPrice: 0,
                },
                {
                    itemId: ?,
                    itemNumber: 2,
                    itemName: 'C3',
                    itemPrice: 0,
                },
            ],
        },

        //LETERING
        {
            optionNumber: 3,
            optionName: '레터링',
            itemList: [
                {
                    itemId: ?,
                    itemNumber: 1,
                    itemName: 'D1',
                    itemPrice: 0,
                },
                {
                    itemId: ?,
                    itemNumber: 2,
                    itemName: 'D2',
                    itemPrice: 0,
                },
            ],
        },
    ],
},
{
    "cakeName": '케이크2',
    "cakeImage": '',
    "cakePrice": 1000,
    "optionList": [
        //SIZE
        {
            optionNumber: 0,
            optionName: '크기',
            itemList: [
                {
                    itemId: ?,
                    itemNumber: 0,
                    itemName: 'A1',
                    itemPrice: 0,
                },
                {
                    itemId: ?,
                    itemNumber: 1,
                    itemName: 'A2',
                    itemPrice: 0,
                },
                {
                    itemId: ?,
                    itemNumber: 2,
                    itemName: 'A3',
                    itemPrice: 0,
                },
            ],
        },
}