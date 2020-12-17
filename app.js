function christmasDays() {
    var date = new Date();
    var getCurrentTime = date.getTime();
    var nextChristmas = new Date(2019, 11, 25);
    var getNextTime = nextChristmas.getTime();
    var christmasDay = Math.floor((getNextTime - getCurrentTime) / 1000 /86400);
    alert(`Next Christmas day will be in ${christmasDay} days`);
    }