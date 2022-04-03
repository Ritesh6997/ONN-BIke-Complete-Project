
var places=[
    {
        city:"BANGALURU",
        stop1:"Koramangala",
        stop1_landmark:"Opp. Big Bazar",
        stop2:"HSR 7th Sector",
        stop2_landmark:"Next to Donne Biryani Mane",
        stop3:"Yelahanka",
        stop3_landmark:"Green trends Sallon",
        stop4:"Silk Board SRCM",
        stop4_landmark:"Kundalahali gate signal",
        stop5:"Electronic City",
        stop5_landmark:"Next to paradise Biryani",
    },
    {
        city:"GURUGRAM",
        stop1:"BIKE SURGEON",
        stop1_landmark:"Gurucharan palace",
        stop2:"DC Motors,",
        stop2_landmark:"Sector-118",
        stop3:"Bike Hub",
        stop3_landmark:"Nana Nani Park",
        stop4:"Link Road",
        stop4_landmark:"Ram Mandir Palam Vihar",
        stop5:"Dharam Colony.",
        stop5_landmark:"Ashok Vihar Phase III Extension"
    },
    {
        city:"HYDERABAD",
        stop1:"Madhapur",
        stop1_landmark:"Opp. Chinese Market",
        stop2:"GACHIBOWLI",
        stop2_landmark:"Next to Dominos",
        stop3:"AMEERPET",
        stop3_landmark:"Ramlila Ground",
        stop4:"SECUNDERABAD",
        stop4_landmark:"Gandhi Samadhi",
        stop5:"CHANDA NAGAR",
        stop5_landmark:"Next to Baskin Robins"
    },
    {
        city:"JAIPUR",
        stop1:"GT - Gaurav Tower",
        stop1_landmark:"Opp. Elante Mall",
        stop2:"VIVACITY MALL,",
        stop2_landmark:"Next to Haldiram",
        stop3:"RAJA PARK",
        stop3_landmark:"Rose Garden",
        stop4:"MI ROAD, SILVER SQUARE MALL",
        stop4_landmark:"Cannought Place",
        stop5:"JAGATPURA ROAD",
        stop5_landmark:"Next to Vilaspurum"
    },
    {
        city:"AHMEDABAD",
        stop1:"VERMA MOTORS",
        stop1_landmark:"SECTOR-32",
        stop2:"Unity Statue,",
        stop2_landmark:"Unity Garden",
        stop3:"Gandhigram",
        stop3_landmark:"Ganhi Asharam",
        stop4:"Vechicle Hub",
        stop4_landmark:"Asarva",
        stop5:"JAGATPURA ROAD",
        stop5_landmark:"MANSAROVAR- SHIPRA PATH"
    }
    
]

//Saving it to local Storage
localStorage.setItem("Places_Data",JSON.stringify(places));
