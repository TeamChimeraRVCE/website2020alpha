
var teamData = new Vue({
    el: "#teamdata",
    data: {
        team2021: [
            {
                image: "/assets/img/team/Vaibhav Hebbal.webp",
                name: "Vaibhav Hebbal",
                subsystem: "Team Captain"
            },
            {
                image: "/assets/img/team/shreyasjsanil.webp",
                name: "Shreyas J Sanil",
                subsystem: "Vice Captain"
            },
            {
                image: "/assets/img/team/bharadwaj_car.webp",
                name: "Raghava Ram Bharadwaj",
                subsystem: "Electrical Head and ESO"
            },
            {
                image: "/assets/img/team/pavansantosh.webp",
                name: "Pavan Santosh",
                subsystem: "Electrical Head and ESO"
            },
            {
                image: "/assets/img/team/Sushanth.webp",
                name: "Sushant S Joshi",
                subsystem: "Project Manager"
            },
            {
                image: "/assets/img/team/Prakash S Bhat.webp",
                name: "Prakash S Bhat",
                subsystem: "Project Manager"
            },
            {
                image: "/assets/img/team/Kartik Sharma.webp",
                name: "Kartik Sharma",
                subsystem: "Mechanical Head"
            },
            {
                image: "/assets/img/team/roopak.webp",
                name: "Roopak N",
                subsystem: "Drivetrain"
            },
            {
                image: "/assets/img/team/Vinay Varma B.webp",
                name: "Vinay Varma B",
                subsystem: "Battery Management System"
            },
            {
                image: "/assets/img/team/sudheendra.webp",
                name: "Sudheendra Hegde",
                subsystem: "Multiple Subsystems"
            },
            {
                image: "/assets/img/team/Sachin Goyal.webp",
                name: "Sachin Goyal",
                subsystem: "Safety Circuits"
            },
            {
                image: "/assets/img/team/AkshayNP.webp",
                name: "Akshay Narayan Pai",
                subsystem: "Data Acquisition"
            },
            {
                image: "/assets/img/team/Sowjanya M.webp",
                name: "Sowjanya M",
                subsystem: "Safety Circuits"
            },
            {
                image: "/assets/img/team/Varsha Kulkarni.webp",
                name: "Varsha Kulkarni",
                subsystem: "Safety Circuits"
            },
            {
                image: "/assets/img/team/Rithwik Goel.webp",
                name: "Rithwik Goel",
                subsystem: "Safety Circuits"
            },
            {
                image: "/assets/img/team/Shashank K Holla.webp",
                name: "Shashank K Holla",
                subsystem: "Safety Circuits"
            },
            {
                image: "/assets/img/team/sambram c swamy.webp",
                name: "Sambram C Swamy",
                subsystem: "Powertrain"
            },
            {
                image: "/assets/img/team/placeholder.webp",
                name: "Sagar L",
                subsystem: "Suspension"
            },
            {
                image: "/assets/img/team/kiran.webp",
                name: "Kiran Kumar",
                subsystem: "Brakes System"
            },
            {
                image: "/assets/img/team/Bhagyesh Choudhary.webp",
                name: "Bhagyesh Choudhari",
                subsystem: "Mechanical Engineer"
            }],
        team2022: [
            {
                image: "/assets/img/team/prajyot.webp",
                name: "Prajyot Biradar",
                subsystem: "Powertrain"
            },
            {
                image: "/assets/img/team/Anusha Gangavati.webp",
                name: "Anusha Gangavati",
                subsystem: "Powertrain"
            },
            {
                image: "/assets/img/team/revathi.webp",
                name: "Revathi M S",
                subsystem: "Powertrain"
            },
            {
                image: "/assets/img/team/amith.webp",
                name: "Amith S Kumar",
                subsystem: "Powertrain"
            },
            {
                image: "/assets/img/team/manoj.webp",
                name: "Manoj. M",
                subsystem: "Powertrain"
            },
            {
                image: "/assets/img/team/Kaushik Sengupta.webp",
                name: "Kaushik Sengupta",
                subsystem: "Safety Circuits"
            },
            {
                image: "/assets/img/team/Rohith V Kamath.webp",
                name: "Rohith Vivek Kamath",
                subsystem: "Safety Circuits"
            },
            {
                image: "/assets/img/team/Junaid Khan.webp",
                name: "Junaid Khan",
                subsystem: "Safety Circuits"
            },
            {
                image: "/assets/img/team/Udayraj Nayak.webp",
                name: "Udayraj V Nayak",
                subsystem: "Safety Circuits"
            },
            {
                image: "/assets/img/team/janardhan.webp",
                name: "Janardhana Gowda C",
                subsystem: "Safety Circuits"
            },
            {
                image: "/assets/img/team/sutej_as.webp",
                name: "Sutej AS",
                subsystem: "Battery Management System"
            },
            {
                image: "/assets/img/team/Nishanth.webp",
                name: "M Nishanth Gopal",
                subsystem: "Data Acquisation Systems"
            },
            {
                image: "/assets/img/team/Vibhor Bhardwaj.webp",
                name: "Vibhor Bhardwaj",
                subsystem: "Management and Sponsorship"
            },
            {
                image: "/assets/img/team/jigisha.webp",
                name: "Jigisha Kamal",
                subsystem: "Management and Sponsorship"
            },
            {
                image: "/assets/img/team/placeholder.webp",
                name: "Prajwal C P",
                subsystem: "NULL"
            },
            {
                image: "/assets/img/team/anilkumar.webp",
                name: "Anil Kumar",
                subsystem: "Powertrain"
            },
            {
                image: "/assets/img/team/monica.webp",
                name: "Monika C R",
                subsystem: "Power train"
            },
            {
                image: "/assets/img/team/Preetham Reddy.webp",
                name: "R Preetham Reddy",
                subsystem: "NULL"
            },
            {
                image: "/assets/img/team/Kiran Thunuguntla.webp",
                name: "Thunuguntla VNS Sri Kiran",
                subsystem: "NULL"
            },
            {
                image: "/assets/img/team/Rajath Rao.webp",
                name: "Rajath Rao TN",
                subsystem: "NULL"
            },
            {
                image: "/assets/img/team/Eshwar sandireddy.webp",
                name: "Sandireddy Reddy Eshwar",
                subsystem: "NULL"
            },
            {
                image: "/assets/img/team/Hari J.webp",
                name: "Hariharasudhan J",
                subsystem: "NULL"
            },
            {
                image: "/assets/img/team/RAUNAK R KOLLE.webp",
                name: "Raunak Kolle",
                subsystem: "NULL"
            },
            {
                image: "/assets/img/team/Pranav Kulkarni.webp",
                name: "Pranav M Kulkarni",
                subsystem: "NULL"
            },
            {
                image: "/assets/img/team/abhijna.webp",
                name: "Abhijna H B",
                subsystem: "Suspension"
            },
            {
                image: "/assets/img/team/placeholder.webp",
                name: "Suhaas N",
                subsystem: "NULL"
            },
            {
                image: "/assets/img/team/placeholder.webp",
                name: "P sujith",
                subsystem: "NULL"
            },
            {
                image: "/assets/img/team/placeholder.webp",
                name: "Shubam Sudhakar Gaonkar",
                subsystem: "NULL"
            },
            {
                image: "/assets/img/team/placeholder.webp",
                name: "Abhishek Pratap Singh",
                subsystem: "NULL"
            },
            {
                image: "/assets/img/team/placeholder.webp",
                name: "Yash R Kolkur",
                subsystem: "NULL"
            },
            {
                image: "/assets/img/team/placeholder.webp",
                name: "Vikramadithyan SA",
                subsystem: "NULL"
            },
            {
                image: "/assets/img/team/placeholder.webp",
                name: "Ranganath Karne",
                subsystem: "NULL"
            },
            {
                image: "/assets/img/team/placeholder.webp",
                name: "Amogh mallikarjun ukkali",
                subsystem: "NULL"
            },
            {
                image: "/assets/img/team/placeholder.webp",
                name: "S Kethan",
                subsystem: "NULL"
            },
            {
                image: "/assets/img/team/placeholder.webp",
                name: "Kartik S Marathe",
                subsystem: "Data Acquisation System"
            }
        ],
        team2023: [

        ]
    }
})

