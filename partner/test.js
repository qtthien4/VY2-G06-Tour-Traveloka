const axios = require('axios');

const call = async () => {
    const datatest = {
        "reward": 10,
        "details": [
            {
                "productName": "tour ngắm sông",
                "quantity": 5,
                "price": 120000,
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSg0nheeVnd8gFQ81UnT2Z9KWvNqgBNw96ug&usqp=CAU",
                "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSg0nheeVnd8gFQ81UnT2Z9KWvNqgBNw96ug&usqp=CAU",
            }
        ],
        "voucherCode": null,
        "partnerId": "0F5FC020-83BF-4FFA-AFBB-EBF5BF54703B",
        "userId": "3E09A9F8-EE40-48ED-AF84-BA35E7569A4A"
    }

    // const test = await axios.post('https://profile.vinhphancommunity.xyz/api/orders', headers:{},data)
    const test = await axios({
        method: 'post',
        headers: {
            'service_code': 'XPERIENCE',
            'Content-Type': 'application/json'
        },
        url: 'http://139.59.104.129:3010/api/orders',
        data: datatest,
    })

    console.log(test);
}

call();
