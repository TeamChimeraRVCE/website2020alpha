var alumni = new Vue({
	el: "#alumniContainer",
	data: {
		setevent: function (id) {
			this.$nextTick(function () {
				console.log(id);
				var box = document.getElementById(id);
				box.addEventListener("mouseenter", () => {
					box.style.opacity = 0.7;
				});
				box.addEventListener("mouseleave", () => {
					box.style.opacity = 0;
				});
			});
		},
		test: function (id) {
			var box = document.getElementById(id);

			if (box.style.opacity > 0.5) box.style.opacity = 0;
			else box.style.opacity = 0.7;
			console.log(box);
		},

		alumniTeam: [
			{
				name: "Jonathan Verghese",
				yearOfPassing: "6/2/2014",
				Branch: "Mechanical Engineering",
				roleInTeam: "Suspension lead, Co-sponsorship head",
				linkedIn: "https://www.linkedin.com/in/jonathan-verghese-731204a0",
				subsytem: "",
				currentJob: "Battery Integration Engineer",
				currentCompany: "Rivian",
				currentLocation: "Irvine, California",
				emailId: "jontyverghese@gmail.com",
				image: "jonathanverghese.webp",
			},
			{
				name: "Ajit Radder",
				yearOfPassing: "7/15/2014",
				Branch: "Mechanical Engineering",
				roleInTeam: "Mechanical lead ",
				linkedIn: "NA",
				subsytem: "Engine, Brakes, chassis",
				currentJob: "NA",
				currentCompany: "Meritor",
				currentLocation: "Bangalore",
				emailId: "Ajit306@gmail.com",
				image: "placeholder.webp",
			},
			{
				name: "Sthitapradyna Rasalkar",
				yearOfPassing: "5/20/2015",
				Branch: "Electrical and Electronics Engineering",
				roleInTeam: "CFO, Electrical Design",
				linkedIn: "https://www.linkedin.com/in/sthita/",
				subsytem: "Electrical",
				currentJob: "Manufacturing Engineer",
				currentCompany: "Lightforce Orthodontics",
				currentLocation: "Boston",
				emailId: "Sthita1212@gmail.com",
				image: "sthitapradyna.webp",
			},
			{
				name: "Avinash Joshi",
				yearOfPassing: "5/31/2016",
				Branch: "Mechanical Engineering",
				roleInTeam: "Vehicle Dynamics Lead",
				linkedIn: "www.linkedin.com/in/avinash-g-joshi-3b91687b",
				subsytem: "Chassis",
				currentJob: "Student",
				currentCompany: "XIMB",
				currentLocation: "Bhubaneswar, Odisha",
				emailId: "avijoshi621@gmail.com",
				image: "avinashjoshi.webp",
			},
			{
				name: "Nishchay",
				yearOfPassing: "7/1/2016",
				Branch: "Industrial Engineering and Management",
				roleInTeam: "Finance and Sponsorship Head",
				linkedIn: "www.linkedin.com/in/nishchay-singh",
				subsytem: "Drivetrain",
				currentJob: "Student",
				currentCompany: "IIT Bombay",
				currentLocation: "Mumbai",
				emailId: "nishchay1110@gmail.com",
				image: "nischay.webp",
			},
			{
				name: "Akshay Kumar P",
				yearOfPassing: "5/30/2017",
				Branch: "Mechanical Engineering",
				roleInTeam: "Lead Suspension Engineer",
				linkedIn: "NA",
				subsytem: "Vehicle dynamics",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				emailId: "akshayp110@gmail.com",
				image: "placeholder.webp",
			},
			{
				name: "Akshay R",
				yearOfPassing: "6/30/2017",
				Branch: "Electrical and Electronics Engineering",
				roleInTeam: "Electrical engineer power electronics",
				linkedIn: "https://www.linkedin.com/in/akshay-r-008a219b",
				subsytem: "Power electronics",
				currentJob: "Electrical engineer",
				currentCompany: "Mbrdi",
				currentLocation: "Bengaluru",
				emailId: "akshayr1995.india@gmail.com",
				image: "akshayr.webp",
			},
			{
				name: "Sumukha",
				yearOfPassing: "7/10/2017",
				Branch: "Electrical and Electronics Engineering",
				roleInTeam: "Electronics Systems Officer",
				linkedIn: "NA",
				subsytem: "BMS and Control",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				emailId: "sumukhaudupa@ymail.com",
				image: "placeholder.webp",
			},
			{
				name: "Ganne Sai Gokul",
				yearOfPassing: "5/1/2018",
				Branch: "Computer Science and Engineering",
				roleInTeam: "Vice captain",
				linkedIn: "https://www.linkedin.com/in/ganne-sai-gokul",
				subsytem: "Management & Telemetry",
				currentJob: "Software Engineer",
				currentCompany: "Recko Inc",
				currentLocation: "Bangalore",
				emailId: "gokulshankar.sai@gmail.com",
				image: "ganne.webp",
			},
			{
				name: "Sai Charan",
				yearOfPassing: "5/9/2018",
				Branch: "Mechanical Engineering",
				roleInTeam: "Mech wing - Suspension team",
				linkedIn: "https://www.linkedin.com/in/sai-charan-2377b3104",
				subsytem: "Suspension ",
				currentJob: "Business Analyst",
				currentCompany: "Toyota kirloskar motors",
				currentLocation: "Bangalore",
				emailId: "saicharan576@gmail.com",
				image: "saicharan.webp",
			},
			{
				name: "Niral",
				yearOfPassing: "7/12/2018",
				Branch: "Mechanical Engineering",
				roleInTeam: "CTO",
				linkedIn: "https://www.linkedin.com/in/niral3007",
				subsytem: "Complete mechanical",
				currentJob: "Student",
				currentCompany: "NITIE",
				currentLocation: "Mumbai",
				emailId: "niral3007@gmail.com",
				image: "niral.webp",
			},
			{
				name: "Darshan Gadginmath",
				yearOfPassing: "7/12/2018",
				Branch: "Electrical and Electronics Engineering",
				roleInTeam:
					"ESO, worked on the BMS, motor and motor controller, wiring, etc. ",
				linkedIn: "https://www.linkedin.com/in/darshangadginmath-8b37a5111/",
				subsytem: "Electrical subsystem",
				currentJob: "Research assistant at IISc",
				currentCompany: "Indian Institute of Science",
				currentLocation: "Bengaluru",
				emailId: "darshan.gm9@gmail.com",
				image: "darshang.webp",
			},
			{
				name: "E R Sumanth",
				yearOfPassing: "8/1/2018",
				Branch: "Mechanical Engineering",
				roleInTeam: "Team Captain",
				linkedIn: "https://www.linkedin.com/in/sumanth-e-r-118572104",
				subsytem: "Brakes",
				currentJob: "Senior officer",
				currentCompany: "Toyota kirloskar motor Pvt Ltd ",
				currentLocation: "Banglore",
				emailId: "er.sumanth@gmail.com",
				image: "ersumanth.webp",
			},
			{
				name: "Prajwal K",
				yearOfPassing: "5/31/2019",
				Branch: "Electrical and Electronics Engineering",
				roleInTeam: "Project manager",
				linkedIn: "https://www.linkedin.com/in/prajwal-k-murthy-a5a575114",
				subsytem: "Power train, BMS",
				currentJob: "Self employed",
				currentCompany: "Prakhyath Machine & Machine Tools Pvt.Ltd.",
				currentLocation: "BANGALORE",
				emailId: "kprajwal0@gmail.com",
				image: "prajwalmurthy.webp",
			},
			{
				name: "Chethan K P",
				yearOfPassing: "6/1/2019",
				Branch: "Computer Science and Engineering",
				roleInTeam: "Infotainment subsystem engineer",
				linkedIn: "https://www.linkedin.com/in/chethan-kp-113387146",
				subsytem: "Infotainment",
				currentJob: "NA",
				currentCompany: "Citrix",
				currentLocation: "Bengaluru",
				emailId: "chethan749@gmail.com",
				image: "chethankp.webp",
			},
			{
				name: "Rahul Ramaprasad",
				yearOfPassing: "6/1/2019",
				Branch: "Electronics and Communication Engineering",
				roleInTeam: "Infotainment system",
				linkedIn: "https://www.linkedin.com/in/rahul-ramaprasad7/",
				subsytem: "Electrical ",
				currentJob: "Masters student ",
				currentCompany: "University of Colorado Boulder",
				currentLocation: "Boulder",
				emailId: "Rahul.ramaprasad@gmail.com",
				image: "rahulrp.webp",
			},
			{
				name: "Rahul Patil",
				yearOfPassing: "6/1/2019",
				Branch: "Computer Science and Engineering",
				roleInTeam: "Infotainment subsystem lead",
				linkedIn: "https://www.linkedin.com/in/rahul-m-patil",
				subsytem: "Infotainment",
				currentJob: "Software Engineer",
				currentCompany: "Cisco systems",
				currentLocation: "Bengaluru",
				emailId: "rahulpatil61197@gmail.com",
				image: "rahulpatil.webp",
			},
			{
				name: "Swapnil Savaran",
				yearOfPassing: "6/1/2019",
				Branch: "Mechanical Engineering",
				roleInTeam: "Project Manager",
				linkedIn: "www.linkedin.com/in/swapnilsavarn",
				subsytem: "Static Events, Management, Sponsorship",
				currentJob: "Business Analyst",
				currentCompany: "Box8",
				currentLocation: "Mumbai",
				emailId: "swapnilsavarn@gmail.com",
				image: "swapnilsavaran.webp",
			},
			{
				name: "Anshuman B V",
				yearOfPassing: "7/27/2019",
				Branch: "Electrical and Electronics Engineering",
				roleInTeam: "Electrical head and ESO",
				linkedIn: "https://www.linkedin.com/in/anshumanbv",
				subsytem: "Power train, bms, safety circuits",
				currentJob: "Design Engineer",
				currentCompany: "Agni Motors",
				currentLocation: "Bengaluru",
				emailId: "anshuman.karaba@gmail.com",
				image: "anshuman.webp",
			},
			{
				name: "Prakyath Poojary",
				yearOfPassing: "7/27/2019",
				Branch: "Mechanical Engineering",
				roleInTeam: "Vice captain",
				linkedIn: "https://www.linkedin.com/in/prakyath-poojary-b43ba7136",
				subsytem: "Powertrain,brakes, suspension",
				currentJob: "Pursuing masters",
				currentCompany: "NA",
				currentLocation: "",
				emailId: "prakyathpoojary07@gmail.com",
				image: "prakyathp.webp",
			},
			{
				name: "Srujan S R",
				yearOfPassing: "7/27/2019",
				Branch: "Electrical and Electronics Engineering",
				roleInTeam: "E-Wing member",
				linkedIn: "NA",
				subsytem: "Wiring, Safety Circuits",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				emailId: "srujan.rangayyan@gmail.com",
				image: "placeholder.webp",
			},
			{
				name: "Nikhil B Bhat",
				yearOfPassing: "7/31/2019",
				Branch: "Mechanical Engineering",
				roleInTeam: "Power train ",
				linkedIn: "https://www.linkedin.com/in/nikhil-b-bhat-79647b154",
				subsytem: "Power train",
				currentJob: "Design engineer",
				currentCompany: "Inteva products",
				currentLocation: "Bangalore",
				emailId: "nikhilbbhat1398@gmail.com",
				image: "nikhilbhat.webp",
			},
			{
				name: "Vishal F Aralikatti",
				yearOfPassing: "7/31/2019",
				Branch: "Electronics and Communication Engineering",
				roleInTeam: "Electronics Engineer",
				linkedIn: "NA",
				subsytem: "Electronics",
				currentJob: "R&D Engineer",
				currentCompany: "Synopsys",
				currentLocation: "Bangalore",
				emailId: "vishalraj736@gmail.com",
				image: "placeholder.webp",
			},
			{
				name: "Praneeth Lanka",
				yearOfPassing: "7/1/2020",
				Branch: "Mechanical Engineering",
				roleInTeam: "Project Manager - Technical",
				linkedIn: "https://www.linkedin.com/in/praneeth-l-0b1211b0/",
				subsytem: "Suspension",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				emailId: "rampraneethlanka@gmail.com",
				image: "praneethlanka.webp",
			},
			{
				name: "Venkatesh S",
				yearOfPassing: "7/15/2020",
				Branch: "Mechanical Engineering",
				roleInTeam: "Team captain",
				linkedIn: "https://www.linkedin.com/in/venkatesh-sathish-86276b145",
				subsytem: "Chassis, Accumulator, powertrain",
				currentJob: "Engineering Intern",
				currentCompany: "Lam research",
				currentLocation: "Bengaluru",
				emailId: "venkateshsatish96@gmail.com",
				image: "venkatesh.webp",
			},
			{
				name: "Mushtaq Ahmed",
				yearOfPassing: "7/31/2020",
				Branch: "Electronics and Communication Engineering",
				roleInTeam: "Project Manager ( Management )",
				linkedIn: "NA",
				subsytem: "Sponsorship ",
				currentJob: "Software Developer",
				currentCompany: "ANSYS Inc",
				currentLocation: "Bangalore",
				emailId: "ahmed.mushtaq902@gmail.com",
				image: "mushtaq_sheikh.webp",
			},
			{
				name: "Mahimashree",
				yearOfPassing: "8/31/2020",
				Branch: "Electrical and Electronics Engineering",
				roleInTeam: "Technical support engineer",
				linkedIn: "https://www.linkedin.com/in/mahimashree-p-916710138",
				subsytem: "Safety circuits and powertrain",
				currentJob: "Mechatronics engineer ",
				currentCompany: "Jiva Sciences ",
				currentLocation: "Bengaluru",
				emailId: "Mahimashree.teamchimera@gmail.com",
				image: "mahimashree.webp",
			},
			{
				name: "Akshaya Kumar Joish",
				yearOfPassing: "8/31/2020",
				Branch: "Computer Science and Engineering",
				roleInTeam: "Infotainment subsystem head",
				linkedIn: "https://www.linkedin.com/in/akshaya-kumar-joish-586857144",
				subsytem: "Infotainment, safety circuits",
				currentJob: "Software developer",
				currentCompany: "Cisco",
				currentLocation: "Bangalore",
				emailId: "akshayjoish28@gmail.com",
				image: "akj.webp",
			},
			{
				name: "Chiranjeevi N",
				yearOfPassing: "9/1/2020",
				Branch: "Electronics and Communication Engineering",
				roleInTeam: "Safety circuits lead and ESO",
				linkedIn: "http://linkedin.com/in/chiranjeevi-n-380bba132",
				subsytem: "Safety circuits",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				emailId: "naraharichiranjeevi@gmail.com",
				image: "chiranjeevi.webp",
			},
			{
				name: "Praveer Prakash",
				yearOfPassing: "9/1/2020",
				Branch: "Mechanical Engineering",
				roleInTeam: "Brakes design ",
				linkedIn: "https://www.linkedin.com/in/praveer-prakash-065675131/",
				subsytem: "Brakes",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "",
				emailId: "praveer.teamchimera@gmail.com",
				image: "praveer.webp",
			},
			{
				name: "Sree Siddhant",
				yearOfPassing: "9/1/2020",
				Branch: "Mechanical Engineering",
				roleInTeam: "Suspension design engineer",
				linkedIn: "https://www.linkedin.com/in/sree-siddhant-b11447159",
				subsytem: "Suspension",
				currentJob: "GET",
				currentCompany: "Collins Aerospace",
				currentLocation: "Bengaluru",
				emailId: "sreesiddhant98@gmail.com",
				image: "sreesiddhant.webp",
			},
		],
	},
});
