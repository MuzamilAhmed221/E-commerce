export const answers = {
  error: false,
  questions: 12,
  answered: 0,
  qs: [
    {
      ans: 3,
      sno: 1,
      q: "Do you have any property buying experience?",
      qtype: "OPTIONS",
      qimg: "xx",
      qcode: "experience",
      options: [
        {
          iconcode: "buyernew",
          id_opt: 5,
          sno: 1,
          name: "No, I am first time buyer",
        },
        {
          iconcode: "oldbuyer",
          id_opt: 6,
          sno: 2,
          name: "Yes, this is my 2nd time",
        },
        {
          iconcode: "probuyer",
          id_opt: 7,
          sno: 3,
          name: "Many times, I am pro!",
        },
        {
          iconcode: "justbrowsing",
          id_opt: 8,
          sno: 4,
          name: "I am just browsing",
        },
      ],
    },
    {
      ans: 3,
      sno: 2,
      q: "Where are you today in your property search ?",
      qtype: "OPTIONS",
      qimg: "xx",
      qcode: "stage",
      options: [
        {
          iconcode: "unavailable",
          id_opt: 9,
          sno: 1,
          name: "Just started (started)",
        },
        {
          iconcode: "unavailable",
          id_opt: 10,
          sno: 2,
          name: "Less than 3 months (three)",
        },
        {
          iconcode: "unavailable",
          id_opt: 11,
          sno: 3,
          name: "3-6 Months (six)",
        },
        {
          iconcode: "unavailable",
          id_opt: 12,
          sno: 4,
          name: "More than 12 Months (twelve)",
        },
      ],
    },
    {
      ans: 3,
      sno: 3,
      q: "Why do you wish to purchase a property?",
      qtype: "OPTIONS",
      qimg: "xx",
      qcode: "yourwhy",
      options: [
        {
          iconcode: "unavailable",
          id_opt: 13,
          sno: 1,
          name: "My Home (home)",
        },
        {
          iconcode: "unavailable",
          id_opt: 14,
          sno: 2,
          name: "For Investment (investmenthome)",
        },
        {
          iconcode: "unavailable",
          id_opt: 15,
          sno: 3,
          name: "Both (bothhome)",
        },
      ],
    },
    {
      ans: 3,
      sno: 6,
      q: "What type of property you are looking for ?",
      qtype: "OPTIONS",
      qimg: "xx",
      qcode: "propertytype",
      options: [
        {
          iconcode: "unavailable",
          id_opt: 18,
          sno: 1,
          name: "Bungalow/Villa (villa)",
        },
        {
          iconcode: "unavailable",
          id_opt: 19,
          sno: 2,
          name: "Builder Floor (builder)",
        },
        {
          iconcode: "unavailable",
          id_opt: 20,
          sno: 3,
          name: "Plot/Land Parcel (plot)",
        },
        {
          iconcode: "unavailable",
          id_opt: 21,
          sno: 4,
          name: "Apartment Floor (apartment)",
        },
        {
          iconcode: "unavailable",
          id_opt: 22,
          sno: 5,
          name: "Flexible (Flexible)",
        },
        {
          iconcode: "unavailable",
          id_opt: 23,
          sno: 6,
          name: "Not sure, need guidance (uncertain)",
        },
      ],
    },
    {
      ans: 3,
      sno: 7,
      q: "How many Bedrooms (BHK) you want ?",
      qtype: "OPTIONS",
      qimg: "xx",
      qcode: "bhk",
      options: [
        {
          iconcode: "unavailable",
          id_opt: 24,
          sno: 1,
          name: "1 BHK (bhk)",
        },
        {
          iconcode: "unavailable",
          id_opt: 25,
          sno: 2,
          name: "2 BHK (bhk)",
        },
        {
          iconcode: "unavailable",
          id_opt: 26,
          sno: 3,
          name: "3 BHK (bhk)",
        },
        {
          iconcode: "unavailable",
          id_opt: 27,
          sno: 4,
          name: "4 BHK (bhk)",
        },
        {
          iconcode: "unavailable",
          id_opt: 28,
          sno: 5,
          name: "5 BHK or more (bhk)",
        },
      ],
    },
    {
      ans: 3,
      sno: 8,
      q: "How old do you want the property to be?",
      qtype: "OPTIONS",
      qimg: "xx",
      qcode: "age",
      options: [
        {
          iconcode: "unavailable",
          id_opt: 29,
          sno: 1,
          name: "Under Construction- Pre-book (Prebook) ",
        },
        {
          iconcode: "unavailable",
          id_opt: 30,
          sno: 2,
          name: "New Construction-Ready to move (RTM) ",
        },
        {
          iconcode: "unavailable",
          id_opt: 31,
          sno: 3,
          name: "Resale (resale)",
        },
      ],
    },
    {
      ans: 3,
      sno: 9,
      q: "Will any senior citizens will in the house?",
      qtype: "OPTIONS",
      qimg: "xx",
      qcode: "senoir",
      options: [
        {
          iconcode: "unavailable",
          id_opt: 32,
          sno: 1,
          name: "Yes (senioryes)",
        },
        {
          iconcode: "unavailable",
          id_opt: 33,
          sno: 2,
          name: "No (seniorno)",
        },
      ],
    },
    {
      ans: 3,
      sno: 10,
      q: "What is the timeframe in which you wish to buy ?",
      qtype: "OPTIONS",
      qimg: "xx",
      qcode: "timeframe",
      options: [
        {
          iconcode: "unavailable",
          id_opt: 34,
          sno: 1,
          name: "Immediate -<3 Months (urgent)",
        },
        {
          iconcode: "unavailable",
          id_opt: 35,
          sno: 2,
          name: "In the next 6 Months (biannual)",
        },
        {
          iconcode: "unavailable",
          id_opt: 36,
          sno: 3,
          name: "In a Year (annual)",
        },
        {
          iconcode: "unavailable",
          id_opt: 37,
          sno: 4,
          name: "Still Planning (planning)",
        },
      ],
    },
    {
      ans: null,
      sno: 12,
      q: "What facing do you want your property to be ?",
      qtype: "OPTIONS",
      qimg: "xx",
      qcode: "facing",
      options: [
        {
          iconcode: "unavailable",
          id_opt: 39,
          sno: 1,
          name: "Does not matter (care)",
        },
        {
          iconcode: "unavailable",
          id_opt: 40,
          sno: 2,
          name: "N (north)",
        },
        {
          iconcode: "unavailable",
          id_opt: 41,
          sno: 3,
          name: "NE (northeast)",
        },
        {
          iconcode: "unavailable",
          id_opt: 42,
          sno: 4,
          name: "NW (northwest)",
        },
        {
          iconcode: "unavailable",
          id_opt: 43,
          sno: 5,
          name: "S (south)",
        },
        {
          iconcode: "unavailable",
          id_opt: 44,
          sno: 6,
          name: "SW (southwest)",
        },
        {
          iconcode: "unavailable",
          id_opt: 45,
          sno: 7,
          name: "SE (southeast)",
        },
      ],
    },
    {
      ans: null,
      sno: 13,
      q: "What do you care the most about ?",
      qtype: "OPTIONS",
      qimg: "xx",
      qcode: "caremost",
      options: [
        {
          iconcode: "unavailable",
          id_opt: 46,
          sno: 1,
          name: "Getting all the features (features)",
        },
        {
          iconcode: "unavailable",
          id_opt: 47,
          sno: 2,
          name: "Stay in the location (location)",
        },
        {
          iconcode: "unavailable",
          id_opt: 48,
          sno: 3,
          name: "Get Value for Money (value)",
        },
      ],
    },
    {
      ans: null,
      sno: 14,
      q: "When are you available for Site visit on Weekdays ?",
      qtype: "OPTIONS",
      qimg: "xx",
      qcode: "availability",
      options: [
        {
          iconcode: "unavailable",
          id_opt: 49,
          sno: 1,
          name: "Morning (morning)",
        },
        {
          iconcode: "unavailable",
          id_opt: 50,
          sno: 2,
          name: "Afternoon (afternoon)",
        },
        {
          iconcode: "unavailable",
          id_opt: 51,
          sno: 3,
          name: "Evening (evening)",
        },
        {
          iconcode: "unavailable",
          id_opt: 52,
          sno: 4,
          name: "All day (allday)",
        },
      ],
    },
    {
      ans: null,
      sno: 15,
      q: "When are you available for Site visit on Weekends?",
      qtype: "OPTIONS",
      qimg: "xx",
      qcode: "availweekend",
      options: [
        {
          iconcode: "unavailable",
          id_opt: 53,
          sno: 1,
          name: "Morning (morning)",
        },
        {
          iconcode: "unavailable",
          id_opt: 54,
          sno: 2,
          name: "Afternoon (afternoon)",
        },
        {
          iconcode: "unavailable",
          id_opt: 55,
          sno: 3,
          name: "Evening (evening)",
        },
        {
          iconcode: "unavailable",
          id_opt: 56,
          sno: 4,
          name: "All day (allday)",
        },
      ],
    },
  ],
};