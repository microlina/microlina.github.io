/*! This is open-source. Feel free to use, modify, redistribute, and so on.
 */
istar.examples = istar.examples || {};  //prevents overriding the variable, while also preventing working with a null variable

istar.examples.loadExample = function () {
    loadModel(this.hotel);
};

istar.examples.hotel = {
    "actors": [
        {
            "id": "f2774099-9e3b-4063-9b45-0f401e2881ce",
            "text": "Client",
            "type": "istar.Role",
            "x": 96,
            "y": 84,
            "nodes": [
                {
                    "id": "dd25fb5f-98b2-48e5-9255-5b2e06ea45e4",
                    "text": "Room booked",
                    "type": "istar.Goal",
                    "x": 187,
                    "y": 160
                },
                {
                    "id": "971c8ad6-7202-4e3f-b58c-a87fa1ae5138",
                    "text": "Travel organized",
                    "type": "istar.Goal",
                    "x": 187,
                    "y": 95
                },
                {
                    "id": "c0c85e96-0340-4808-bf1b-8c49364745e5",
                    "text": "Select dates",
                    "type": "istar.Task",
                    "x": 245,
                    "y": 243
                },
                {
                    "id": "19f856b1-e8d1-4557-9b51-12cfc811059e",
                    "text": "Provide personal details",
                    "type": "istar.Task",
                    "x": 124,
                    "y": 244
                }
            ]
        },
        {
            "id": "16e72e3b-00f9-4e26-ab7b-c2055a900cd9",
            "text": "Hotel management system",
            "type": "istar.Agent",
            "x": 556,
            "y": 72,
            "nodes": [
                {
                    "id": "b3692090-0178-4809-a2aa-f7953c782a5f",
                    "text": "Room availability verified",
                    "type": "istar.Task",
                    "x": 581,
                    "y": 244
                },
                {
                    "id": "f2e2b280-7643-4045-974b-1cfd20d28c1c",
                    "text": "Confirmed booking managed",
                    "type": "istar.Goal",
                    "x": 728,
                    "y": 173
                },
                {
                    "id": "ac4a596e-d71e-4280-8546-2399670d8886",
                    "text": "Register booking",
                    "type": "istar.Task",
                    "x": 727,
                    "y": 247
                },
                {
                    "id": "ea007ffe-3e6f-4f23-bfaa-b5f62bc7e844",
                    "text": "Booking managed",
                    "type": "istar.Goal",
                    "x": 665,
                    "y": 84
                },
                {
                    "id": "be40d229-ab10-4b30-a24d-ff62c4658038",
                    "text": "Possible booking managed",
                    "type": "istar.Goal",
                    "x": 587,
                    "y": 167
                }
            ]
        }
    ],
    "dependencies": [
        {
            "id": "5744b233-e196-47e6-bde2-490876b7aea7",
            "text": "Personal details",
            "type": "istar.Task",
            "x": 392,
            "y": 369,
            "customProperties": {
                "Description": "Enter a description here"
            },
            "source": "ac4a596e-d71e-4280-8546-2399670d8886",
            "target": "19f856b1-e8d1-4557-9b51-12cfc811059e"
        },
        {
            "id": "f5fb3997-2f10-4837-b2a3-f90a0fd5afea",
            "text": "Verify availability",
            "type": "istar.Task",
            "x": 402.5,
            "y": 243.5,
            "customProperties": {
                "Description": "Enter a description here"
            },
            "source": "c0c85e96-0340-4808-bf1b-8c49364745e5",
            "target": "b3692090-0178-4809-a2aa-f7953c782a5f"
        }
    ],
    "links": [
        {
            "id": "514b3474-a333-4865-9303-2f37abaa118a",
            "type": "istar.AndRefinementLink",
            "source": "dd25fb5f-98b2-48e5-9255-5b2e06ea45e4",
            "target": "971c8ad6-7202-4e3f-b58c-a87fa1ae5138"
        },
        {
            "id": "68726972-f30f-4807-a13d-1bab1a2aa6dc",
            "type": "istar.AndRefinementLink",
            "source": "c0c85e96-0340-4808-bf1b-8c49364745e5",
            "target": "dd25fb5f-98b2-48e5-9255-5b2e06ea45e4"
        },
        {
            "id": "98d99632-a2b5-4198-81ff-af6a5cdac365",
            "type": "istar.OrRefinementLink",
            "source": "be40d229-ab10-4b30-a24d-ff62c4658038",
            "target": "ea007ffe-3e6f-4f23-bfaa-b5f62bc7e844"
        },
        {
            "id": "953e636e-7305-4f0e-aa4f-2228aa703b5b",
            "type": "istar.OrRefinementLink",
            "source": "f2e2b280-7643-4045-974b-1cfd20d28c1c",
            "target": "ea007ffe-3e6f-4f23-bfaa-b5f62bc7e844"
        },
        {
            "id": "771e93d0-569e-4e2c-baca-bfc809c30a78",
            "type": "istar.AndRefinementLink",
            "source": "b3692090-0178-4809-a2aa-f7953c782a5f",
            "target": "be40d229-ab10-4b30-a24d-ff62c4658038"
        },
        {
            "id": "1d98d665-79ad-4aa9-97da-2fa85d7cc032",
            "type": "istar.AndRefinementLink",
            "source": "19f856b1-e8d1-4557-9b51-12cfc811059e",
            "target": "dd25fb5f-98b2-48e5-9255-5b2e06ea45e4"
        },
        {
            "id": "f4615235-2f07-438a-a5d9-c9787fe28dad",
            "type": "istar.AndRefinementLink",
            "source": "ac4a596e-d71e-4280-8546-2399670d8886",
            "target": "f2e2b280-7643-4045-974b-1cfd20d28c1c"
        },
        {
            "id": "48473aa1-3998-4118-bf25-1be6f2836814",
            "type": "istar.DependencyLink",
            "source": "ac4a596e-d71e-4280-8546-2399670d8886",
            "target": "5744b233-e196-47e6-bde2-490876b7aea7"
        },
        {
            "id": "03205225-4425-4a53-9f2d-db2d6d720cd4",
            "type": "istar.DependencyLink",
            "source": "5744b233-e196-47e6-bde2-490876b7aea7",
            "target": "19f856b1-e8d1-4557-9b51-12cfc811059e"
        },
        {
            "id": "af4ae05d-d68a-4e94-8fd1-29cec6bb5757",
            "type": "istar.DependencyLink",
            "source": "c0c85e96-0340-4808-bf1b-8c49364745e5",
            "target": "f5fb3997-2f10-4837-b2a3-f90a0fd5afea"
        },
        {
            "id": "140da93f-9fdd-4010-adb7-03905d35cdfb",
            "type": "istar.DependencyLink",
            "source": "f5fb3997-2f10-4837-b2a3-f90a0fd5afea",
            "target": "b3692090-0178-4809-a2aa-f7953c782a5f"
        }
    ],
    "display": {
        "48473aa1-3998-4118-bf25-1be6f2836814": {
            "vertices": [
                {
                    "x": 727,
                    "y": 362
                }
            ]
        },
        "03205225-4425-4a53-9f2d-db2d6d720cd4": {
            "vertices": [
                {
                    "x": 185,
                    "y": 367
                }
            ]
        }
    },
    "tool": "istar.2.0.0a",
    "istar": "2.0",
    "saveDate": "Wed, 22 May 2019 12:19:57 GMT",
    "diagram": {
        "width": 1700,
        "height": 1300,
        "customProperties": {
            "Description": ""
        }
    }
};