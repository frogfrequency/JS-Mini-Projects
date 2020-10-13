
const seedPercent = Math.floor(Math.random() * Math.floor(100));

for (i=0; i<20; i++) {

    const nr = Math.floor(Math.random() * Math.floor(100));
    if (nr < seedPercent) {
        console.log(nr + ' smaller')
    } else {
        console.log(nr + ' biggah')
    }

}
