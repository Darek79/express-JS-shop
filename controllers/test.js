import { CLIENT_RENEG_LIMIT } from "tls";

const obj = [{ title: [ 'MARIA MARIA BLOUSE - Bluse' ],
sizes: [ 'xs', 's', 'm', 'l' ],
brand: [ 'Free People' ],
colors: [ 'white' ],
price: [ '129.95' ],
description: '',
imgDetails:
 [ { mimetype: 'image/webp',
     path:
      'D:\\dk_weatherAPP\\public\\img\\FP021E04Z-A11_1559477163889' },
   { mimetype: 'image/webp',
     path:
      'D:\\dk_weatherAPP\\public\\img\\FP021E04Z-A11_1559477163892' },
   { mimetype: 'image/webp',
     path:
      'D:\\dk_weatherAPP\\public\\img\\FP021E04Z-A11_1559477163893' } ] }];

obj.forEach((val,i)=>{
    console.log(val.title[i]);
    console.log(val.sizes.toString());
    console.log(val.brand.toString());
    console.log(val.price.toString());
    console.log(val.imgDetails);

})