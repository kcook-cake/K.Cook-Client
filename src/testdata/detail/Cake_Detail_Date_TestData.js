
const Cake_Detail_Date_TestData = () => {
    //get /api/cake/{cakeId}
    return ({
        cakeTF: false,
        groupsList: [
            {
                groupId: 384,
                groupTF: false,
                timesList: [
                    "10:00",
                    "11:00",
                    "12:00",
                    "13:00",
                ],
            },
            {
                groupId: 385,
                groupTF: true,
                timesList: [
                    "13:00",
                    "14:00",
                    "15:00",
                ],
            },
        ]
    });
}

export default Cake_Detail_Date_TestData;
