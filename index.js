const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = () => drivers.slice(0,2);

const returnLastTwoDrivers = () => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const fare = 1

const createFareMultiplier = (number) => {
    return (fare) => {
      return fare * number;
    };
  };


const fareDoubler = (fare) => {
    return fare * 2;
};

const fareTripler = (fare) => {
    return fare * 3;
};



function selectDifferentDrivers(drivers, func) {
    const selectedDrivers = func(drivers);

    return selectedDrivers;
  }
