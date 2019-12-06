export const Status = {
    PANDDING: 'PANDDING',
    SCHEDULED: 'SCHEDULED',
    DONE: 'DONE',
    CANCELED: 'CANCELED',
    NOT_SCHEDULED: 'NOT_SCHEDULED'
}

export const users = [
    {
        id: 1,
        name: 'Eliran Hasin',
        address: 'Zvulun Hummer,Rishon',
        phoneNumber: '0507633292',
        nextTime: '23.12.19',
        status: '',
        lastCancelation: '1.12.19',
        numberOfCanelation: 2,
        status: Status.SCHEDULED,
        prevTreatments: [
            {
                date: '11.12.19',
                price: 50,
                workTime: 20
            },
            {
                date: '22.11.19',
                price: 50,
                workTime: 25
            },
            {
                date: '10.11.19',
                price: 50,
                workTime: 22
            },
            {
                date: '30.10.19',
                price: 50,
                workTime: 30
            },

        ]
    },
    {
        id: 2,
        name: 'Alon Tverski',
        address: 'Hashomer,Tel Aviv',
        phoneNumber: '0507633292',
        nextTime: '23.12.19, 15:30PM',
        status: '',
        lastCancelation: '',
        numberOfCanelation: 0,
        status: Status.DONE,

        prevTreatments: [
            {
                date: '11.12.19',
                price: 50,
                workTime: 20
            },
            {
                date: '22.11.19',
                price: 50,
                workTime: 25
            },
            {
                date: '10.11.19',
                price: 50,
                workTime: 22
            },
            {
                date: '30.10.19',
                price: 50,
                workTime: 30
            },

        ]
    },
    {
        id: 3,
        name: 'Gal Marom',
        address: 'Pras Novel,Rishon',
        phoneNumber: '0507232292',
        nextTime: '',
        status: '',
        lastCancelation: '1.11.19',
        numberOfCanelation: 0,
        status: Status.PANDDING,
        pandingRequest: [
            {
                date: '11.11.19',
                type: 'Man Haircut',
                time: '12:30PM'
            }
        ],
        prevTreatments: [
            {
                date: '20.11.19',
                price: 50,
                workTime: 20
            },
            {
                date: '13.11.19',
                price: 50,
                workTime: 25
            },
            {
                date: '25.10.19',
                price: 50,
                workTime: 22
            },
            {
                date: '10.10.19',
                price: 50,
                workTime: 30
            },

        ]
    },
    {
        id: 1,
        name: 'Eliran Hasin',
        address: 'Zvulun Hummer,Rishon',
        phoneNumber: '0507633292',
        nextTime: '23.12.19',
        status: '',
        lastCancelation: '1.12.19',
        numberOfCanelation: 2,
        status: Status.SCHEDULED,
        prevTreatments: [
            {
                date: '11.12.19',
                price: 50,
                workTime: 20
            },
            {
                date: '22.11.19',
                price: 50,
                workTime: 25
            },
            {
                date: '10.11.19',
                price: 50,
                workTime: 22
            },
            {
                date: '30.10.19',
                price: 50,
                workTime: 30
            },

        ]
    },
    {
        id: 1,
        name: 'Eliran Hasin',
        address: 'Zvulun Hummer,Rishon',
        phoneNumber: '0507633292',
        nextTime: '23.12.19',
        status: '',
        lastCancelation: '1.12.19',
        numberOfCanelation: 2,
        status: Status.SCHEDULED,
        prevTreatments: [
            {
                date: '11.12.19',
                price: 50,
                workTime: 20
            },
            {
                date: '22.11.19',
                price: 50,
                workTime: 25
            },
            {
                date: '10.11.19',
                price: 50,
                workTime: 22
            },
            {
                date: '30.10.19',
                price: 50,
                workTime: 30
            },

        ]
    },
    {
        id: 1,
        name: 'Eliran Hasin',
        address: 'Zvulun Hummer,Rishon',
        phoneNumber: '0507633292',
        nextTime: '23.12.19',
        status: '',
        lastCancelation: '1.12.19',
        numberOfCanelation: 2,
        status: Status.NOT_SCHEDULED,
        prevTreatments: [
            {
                date: '11.12.19',
                price: 50,
                workTime: 20
            },
            {
                date: '22.11.19',
                price: 50,
                workTime: 25
            },
            {
                date: '10.11.19',
                price: 50,
                workTime: 22
            },
            {
                date: '30.10.19',
                price: 50,
                workTime: 30
            },

        ]
    },
    {
        id: 1,
        name: 'Eliran Hasin',
        address: 'Zvulun Hummer,Rishon',
        phoneNumber: '0507633292',
        nextTime: '23.12.19',
        status: '',
        lastCancelation: '1.12.19',
        numberOfCanelation: 2,
        status: Status.CANCELED,
        prevTreatments: [
            {
                date: '11.12.19',
                price: 50,
                workTime: 20
            },
            {
                date: '22.11.19',
                price: 50,
                workTime: 25
            },
            {
                date: '10.11.19',
                price: 50,
                workTime: 22
            },
            {
                date: '30.10.19',
                price: 50,
                workTime: 30
            },

        ]
    },
    {
        id: 1,
        name: 'Eliran Hasin',
        address: 'Zvulun Hummer,Rishon',
        phoneNumber: '0507633292',
        nextTime: '23.12.19',
        status: '',
        lastCancelation: '1.12.19',
        numberOfCanelation: 2,
        status: Status.DONE,
        prevTreatments: [
            {
                date: '11.12.19',
                price: 50,
                workTime: 20
            },
            {
                date: '22.11.19',
                price: 50,
                workTime: 25
            },
            {
                date: '10.11.19',
                price: 50,
                workTime: 22
            },
            {
                date: '30.10.19',
                price: 50,
                workTime: 30
            },

        ]
    },
    {
        id: 1,
        name: 'Eliran Hasin',
        address: 'Zvulun Hummer,Rishon',
        phoneNumber: '0507633292',
        nextTime: '23.12.19',
        status: '',
        lastCancelation: '1.12.19',
        numberOfCanelation: 2,
        status: Status.DONE,
        prevTreatments: [
            {
                date: '11.12.19',
                price: 50,
                workTime: 20
            },
            {
                date: '22.11.19',
                price: 50,
                workTime: 25
            },
            {
                date: '10.11.19',
                price: 50,
                workTime: 22
            },
            {
                date: '30.10.19',
                price: 50,
                workTime: 30
            },

        ]
    },
    {
        id: 1,
        name: 'Eliran Hasin',
        address: 'Zvulun Hummer,Rishon',
        phoneNumber: '0507633292',
        nextTime: '23.12.19',
        status: '',
        lastCancelation: '1.12.19',
        numberOfCanelation: 2,
        status: Status.DONE,
        prevTreatments: [
            {
                date: '11.12.19',
                price: 50,
                workTime: 20
            },
            {
                date: '22.11.19',
                price: 50,
                workTime: 25
            },
            {
                date: '10.11.19',
                price: 50,
                workTime: 22
            },
            {
                date: '30.10.19',
                price: 50,
                workTime: 30
            },

        ]
    }
]

