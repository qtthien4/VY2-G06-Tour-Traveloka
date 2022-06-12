const axios = require('axios');

const call = async () => {
    const data = {
        "createdAt": "2022-06-11T14:53:17.277Z",
        "total": 120000,
        "reward": 10,
        "details": [
            {
                "productName": "tour ngắm sông",
                "quantity": 5,
                "price": 120000,
                "thumbnail": "songsaigon",
                "link": "songsaigon",
            }
        ],
        "partnerId": "0F5FC020-83BF-4FFA-AFBB-EBF5BF54703B",
        "userId": "3E09A9F8-EE40-48ED-AF84-BA35E7569A4A"
    }

    const test = await axios.post('https://profile.vinhphancommunity.xyz/api/orders', data)

    console.log(test);
}

call();

