
// Convert MS to Minutes
let calcMsToMins = () => {
    let dToday = new Date();
    let msToday = dToday.getTime();
    let dQuit = new Date(2018, 3, 10, 8, 0, 0, 0);
    let msQuit = dQuit.getTime();
    let totalMinutes = Math.round((dToday - dQuit) / (60 * 1000));

    return totalMinutes;
}

// Calculate days without smoking
let calcDays = () => {
    let dToday = new Date();
    let msToday = dToday.getTime();
    let dQuit = new Date(2018, 3, 10, 7, 40, 0, 0);
    let msQuit = dQuit.getTime();
    let time = Math.round((msToday - msQuit) / 1000);

    let days = Math.floor(time / (24 * 60 * 60));
    time = time - (days * 24 * 60 * 60);

    let hours = Math.floor(time / (60 * 60));
    time = time - (hours * 60 * 60);

    let minutes = Math.floor(time / (60));
    time = time - (minutes * 60);

    let totalTime = days + 1;

    return totalTime;
}

// Calculate cigarettes not smoked
let calcCigarettes = () => {
    // 20 cigs in 24 hours equals 1 cig every 72 minutes
    let minutes = calcMsToMins();
    let cigsNotSmoked = Math.round(minutes / 72);

    return cigsNotSmoked;
}


// Calculate money saved
let calcMoney = () => {
    let pricePerPack = 57;
    let cigsPerPack = 20;
    let pricePerCig = pricePerPack / cigsPerPack;
    let moneySaved = Math.round(calcCigarettes() * pricePerCig);

    return moneySaved;
}

// Calculate time saved
let calcTime = () => {
    let timePerCig = 5;
    let timeSaved = calcCigarettes() * timePerCig;
    let timeInHours = Math.round(timeSaved / 60);

    return timeInHours;
}

// Calculate tar avoided
let calcTar = () => {
    let tarPerCig = 10 / 1000; //10 mg
    let tarAvoided = Math.round((calcCigarettes() * tarPerCig) * 100) / 100;

    return tarAvoided;
}

// Calculate nicotine avoided
let calcNicotine = () => {
    let nicotinePerCig = 8 / 1000; //8 mg
    let nicotineAvoided = Math.round((calcCigarettes() * nicotinePerCig) * 100) / 100;

    return nicotineAvoided;
}


// Run Everything and print to page
let runEverything = () => {
    days_without_smoking.innerHTML = `${calcDays()}`;
    cigarettes_not_smoked.innerHTML = `${calcCigarettes()}`;
    money_saved.innerHTML = `${calcMoney()}kr`;
    time_saved.innerHTML = `${calcTime()}hrs`;
    tar_avoided.innerHTML = `${calcTar()}g`;
    nicotine_avoided.innerHTML = `${calcNicotine()}g`;
}

runEverything();

// AutoUpdate statistics every minute.
setInterval(function runAutoUpdate() {
    runEverything();
}, 60 * 1000); 
