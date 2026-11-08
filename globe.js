/* PackCheck – searchable places for the destination globe.
   678 tourist cities (from your list, duplicates removed) + 236 countries.
   Format: [name, country, longitude, latitude, optional aliases]
   Anything not listed here is still looked up online via OpenStreetMap. */
window.PACKCHECK_PLACES = [
  ["Bangkok","Thailand",100.501,13.754],
  ["Hong Kong","Hong Kong SAR, China",114.175,22.278,["hk"]],
  ["London","United Kingdom",-0.126,51.509],
  ["Macau","Macau SAR, China",113.546,22.201],
  ["Istanbul","Türkiye",28.95,41.014,["constantinople"]],
  ["Dubai","United Arab Emirates",55.309,25.077],
  ["Mecca","Saudi Arabia",39.826,21.427,["makkah"]],
  ["Antalya","Türkiye",30.696,36.908],
  ["Paris","France",2.349,48.853],
  ["Kuala Lumpur","Malaysia",101.687,3.141],
  ["Tokyo","Japan",139.692,35.69],
  ["New York City","United States",-74.006,40.714,["new york","nyc"]],
  ["Singapore","Singapore",103.85,1.29],
  ["Seoul","South Korea",126.978,37.566],
  ["Rome","Italy",12.511,41.892],
  ["Madrid","Spain",-3.703,40.416],
  ["Barcelona","Spain",2.159,41.389],
  ["Amsterdam","Netherlands",4.89,52.374],
  ["Milan","Italy",9.19,45.464],
  ["Phuket","Thailand",98.398,7.891,["phuket town"]],
  ["Osaka","Japan",135.502,34.694],
  ["Pattaya","Thailand",100.883,12.933],
  ["Taipei","Taiwan",121.532,25.048],
  ["Shanghai","China",121.458,31.222],
  ["Beijing","China",116.397,39.907],
  ["Guangzhou","China",113.25,23.117],
  ["Shenzhen","China",114.068,22.546],
  ["Ho Chi Minh City","Vietnam",106.63,10.823,["saigon"]],
  ["Hanoi","Vietnam",105.841,21.024],
  ["Bali","Indonesia",115.217,-8.65,["Denpasar","denpasar"]],
  ["Jakarta","Indonesia",106.845,-6.215],
  ["Kyoto","Japan",135.754,35.021],
  ["Mumbai","India",72.883,19.073,["bombay"]],
  ["Delhi","India",77.231,28.652,["new delhi"]],
  ["Agra","India",78.017,27.183],
  ["Jaipur","India",75.788,26.92],
  ["Colombo","Sri Lanka",79.849,6.935],
  ["Malé","Maldives",73.509,4.175],
  ["Doha","Qatar",51.531,25.285],
  ["Abu Dhabi","United Arab Emirates",54.397,24.451],
  ["Riyadh","Saudi Arabia",46.722,24.688],
  ["Jeddah","Saudi Arabia",39.186,21.49],
  ["Medina","Saudi Arabia",39.614,24.469,["madinah"]],
  ["Cairo","Egypt",31.25,30.063],
  ["Sharm El Sheikh","Egypt",34.33,27.916],
  ["Hurghada","Egypt",33.813,27.257],
  ["Marrakech","Morocco",-7.99,31.63,["marrakesh"]],
  ["Casablanca","Morocco",-7.611,33.588],
  ["Cape Town","South Africa",18.423,-33.926],
  ["Johannesburg","South Africa",28.044,-26.202],
  ["Nairobi","Kenya",36.817,-1.283],
  ["Zanzibar City","Tanzania",39.19,-6.16],
  ["Mauritius","Mauritius",57.499,-20.162,["Port Louis","port louis mauritius"]],
  ["Seychelles","Seychelles",55.455,-4.62,["Victoria"]],
  ["Sydney","Australia",151.207,-33.868],
  ["Melbourne","Australia",144.963,-37.814],
  ["Brisbane","Australia",153.028,-27.468],
  ["Perth","Australia",115.861,-31.952],
  ["Auckland","New Zealand",174.763,-36.849],
  ["Christchurch","New Zealand",172.633,-43.533],
  ["Los Angeles","United States",-118.244,34.052,["la"]],
  ["Las Vegas","United States",-115.137,36.175,["vegas"]],
  ["San Francisco","United States",-122.419,37.775,["sf"]],
  ["Miami","United States",-80.194,25.774],
  ["Orlando","United States",-81.379,28.538],
  ["New Orleans","United States",-90.075,29.955],
  ["Chicago","United States",-87.65,41.85],
  ["Washington, D.C.","United States",-77.036,38.895,["washington dc","washington","dc"]],
  ["Boston","United States",-71.06,42.358],
  ["Honolulu","United States",-157.858,21.307],
  ["Toronto","Canada",-79.416,43.7],
  ["Vancouver","Canada",-123.119,49.25],
  ["Montreal","Canada",-73.588,45.509],
  ["Quebec City","Canada",-71.21,46.81],
  ["Mexico City","Mexico",-99.128,19.428],
  ["Cancún","Mexico",-86.847,21.174],
  ["Playa del Carmen","Mexico",-87.08,20.627],
  ["Tulum","Mexico",-87.463,20.212],
  ["Puerto Vallarta","Mexico",-105.23,20.617],
  ["Los Cabos","Mexico",-109.91,22.89],
  ["Guadalajara","Mexico",-103.392,20.667],
  ["Oaxaca","Mexico",-96.724,17.065],
  ["Buenos Aires","Argentina",-58.377,-34.613],
  ["Rio de Janeiro","Brazil",-43.182,-22.906],
  ["São Paulo","Brazil",-46.636,-23.547],
  ["Salvador","Brazil",-38.511,-12.971],
  ["Lima","Peru",-77.028,-12.043],
  ["Cusco","Peru",-71.967,-13.523],
  ["Bogotá","Colombia",-74.082,4.61],
  ["Medellín","Colombia",-75.564,6.252],
  ["Cartagena","Colombia",-75.514,10.4],
  ["Santiago","Chile",-70.648,-33.457],
  ["Valparaíso","Chile",-71.63,-33.036],
  ["Montevideo","Uruguay",-56.188,-34.903],
  ["Punta del Este","Uruguay",-54.934,-34.947],
  ["Havana","Cuba",-82.383,23.133],
  ["Punta Cana","Dominican Republic",-68.404,18.582],
  ["Santo Domingo","Dominican Republic",-69.892,18.472],
  ["San Juan","Puerto Rico",-66.106,18.466],
  ["Nassau","Bahamas",-77.343,25.058],
  ["Venice","Italy",12.333,45.437],
  ["Florence","Italy",11.246,43.779],
  ["Naples","Italy",14.268,40.852],
  ["Turin","Italy",7.687,45.07],
  ["Verona","Italy",10.984,45.43],
  ["Bologna","Italy",11.339,44.494],
  ["Pisa","Italy",10.404,43.709],
  ["Genoa","Italy",8.944,44.405],
  ["Palermo","Italy",13.336,38.132],
  ["Catania","Italy",15.07,37.492],
  ["Sorrento","Italy",14.378,40.627],
  ["Amalfi","Italy",14.602,40.635],
  ["Positano","Italy",14.484,40.628],
  ["Nice","France",7.266,43.703],
  ["Lyon","France",4.847,45.748],
  ["Marseille","France",5.381,43.297],
  ["Bordeaux","France",-0.581,44.84],
  ["Toulouse","France",1.444,43.604],
  ["Strasbourg","France",7.746,48.584],
  ["Cannes","France",7.013,43.551],
  ["Monaco","Monaco",7.417,43.733],
  ["Berlin","Germany",13.411,52.524],
  ["Munich","Germany",11.575,48.137],
  ["Frankfurt","Germany",8.684,50.116],
  ["Hamburg","Germany",9.993,53.551],
  ["Cologne","Germany",6.96,50.94,["koln"]],
  ["Dresden","Germany",13.738,51.051],
  ["Heidelberg","Germany",8.691,49.408],
  ["Düsseldorf","Germany",6.776,51.222],
  ["Stuttgart","Germany",9.177,48.782],
  ["Vienna","Austria",16.372,48.208],
  ["Salzburg","Austria",13.044,47.799],
  ["Innsbruck","Austria",11.395,47.263],
  ["Prague","Czechia",14.421,50.088],
  ["Český Krumlov","Czechia",14.315,48.811],
  ["Budapest","Hungary",19.04,47.498],
  ["Athens","Greece",23.728,37.984],
  ["Thessaloniki","Greece",22.931,40.644],
  ["Santorini","Greece",25.43,36.42],
  ["Mykonos","Greece",25.329,37.445],
  ["Rhodes","Greece",28.22,36.43],
  ["Heraklion","Greece",25.14,35.34],
  ["Chania","Greece",24.029,35.511],
  ["Corfu","Greece",19.92,39.624],
  ["Lisbon","Portugal",-9.133,38.717],
  ["Porto","Portugal",-8.611,41.15],
  ["Faro","Portugal",-7.927,37.019],
  ["Funchal","Portugal",-16.925,32.666],
  ["Seville","Spain",-5.98,37.39,["sevilla"]],
  ["Valencia","Spain",-0.377,39.47],
  ["Granada","Spain",-3.607,37.188],
  ["Málaga","Spain",-4.42,36.72],
  ["Córdoba","Spain",-4.773,37.892],
  ["Bilbao","Spain",-2.925,43.263],
  ["San Sebastián","Spain",-1.975,43.313],
  ["Palma de Mallorca","Spain",2.65,39.57],
  ["Ibiza","Spain",1.433,38.909],
  ["Tenerife","Spain",-16.255,28.468],
  ["Las Palmas","Spain",-15.413,28.1],
  ["Rotterdam","Netherlands",4.479,51.922],
  ["The Hague","Netherlands",4.299,52.077],
  ["Utrecht","Netherlands",5.122,52.091],
  ["Brussels","Belgium",4.349,50.85],
  ["Bruges","Belgium",3.22,51.21],
  ["Antwerp","Belgium",4.4,51.22],
  ["Ghent","Belgium",3.72,51.05],
  ["Luxembourg City","Luxembourg",6.13,49.61],
  ["Copenhagen","Denmark",12.566,55.676],
  ["Stockholm","Sweden",18.069,59.329],
  ["Gothenburg","Sweden",11.97,57.71,["goteborg"]],
  ["Oslo","Norway",10.746,59.913],
  ["Bergen","Norway",5.324,60.393],
  ["Helsinki","Finland",24.935,60.17],
  ["Reykjavik","Iceland",-21.895,64.135],
  ["Tallinn","Estonia",24.754,59.437],
  ["Riga","Latvia",24.106,56.946],
  ["Vilnius","Lithuania",25.28,54.689],
  ["Warsaw","Poland",21.012,52.23],
  ["Kraków","Poland",19.937,50.061,["cracow"]],
  ["Gdańsk","Poland",18.649,54.352],
  ["Wrocław","Poland",17.033,51.1],
  ["Bratislava","Slovakia",17.107,48.148],
  ["Ljubljana","Slovenia",14.505,46.051],
  ["Lake Bled","Slovenia",14.1,46.36],
  ["Zagreb","Croatia",15.978,45.814],
  ["Dubrovnik","Croatia",18.109,42.641],
  ["Split","Croatia",16.439,43.509],
  ["Zadar","Croatia",15.225,44.116],
  ["Sarajevo","Bosnia and Herzegovina",18.356,43.849],
  ["Mostar","Bosnia and Herzegovina",17.808,43.343],
  ["Belgrade","Serbia",20.465,44.804],
  ["Novi Sad","Serbia",19.837,45.252],
  ["Kotor","Montenegro",18.768,42.421],
  ["Budva","Montenegro",18.84,42.286],
  ["Tirana","Albania",19.819,41.328],
  ["Berat","Albania",19.952,40.706],
  ["Skopje","North Macedonia",21.431,41.996],
  ["Ohrid","North Macedonia",20.802,41.117],
  ["Moscow","Russia",37.616,55.752],
  ["Saint Petersburg","Russia",30.314,59.939,["st petersburg"]],
  ["Sochi","Russia",39.726,43.599],
  ["Kazan","Russia",49.122,55.789],
  ["Tbilisi","Georgia",44.834,41.694],
  ["Batumi","Georgia",41.634,41.642],
  ["Yerevan","Armenia",44.514,40.181],
  ["Baku","Azerbaijan",49.892,40.378],
  ["Almaty","Kazakhstan",76.929,43.257],
  ["Astana","Kazakhstan",71.45,51.17],
  ["Samarkand","Uzbekistan",66.96,39.654],
  ["Bukhara","Uzbekistan",64.429,39.775],
  ["Tashkent","Uzbekistan",69.216,41.265],
  ["Bishkek","Kyrgyzstan",74.59,42.87],
  ["Dushanbe","Tajikistan",68.779,38.536],
  ["Ashgabat","Turkmenistan",58.383,37.95],
  ["Tehran","Iran",51.422,35.694],
  ["Isfahan","Iran",51.675,32.652],
  ["Shiraz","Iran",52.531,29.61],
  ["Tabriz","Iran",46.292,38.08],
  ["Jerusalem","Israel",35.216,31.769],
  ["Tel Aviv","Israel",34.781,32.081],
  ["Haifa","Israel",34.989,32.818],
  ["Amman","Jordan",35.945,31.955],
  ["Petra","Jordan",35.479,30.321],
  ["Aqaba","Jordan",35.008,29.527],
  ["Beirut","Lebanon",35.502,33.893],
  ["Muscat","Oman",58.408,23.584],
  ["Salalah","Oman",54.092,17.015],
  ["Manama","Bahrain",50.586,26.228],
  ["Kuwait City","Kuwait",47.978,29.37],
  ["Dammam","Saudi Arabia",50.103,26.434],
  ["AlUla","Saudi Arabia",37.92,26.61],
  ["Luxor","Egypt",32.642,25.699],
  ["Aswan","Egypt",32.899,24.091],
  ["Alexandria","Egypt",29.916,31.202],
  ["Giza","Egypt",31.209,30.009],
  ["Tunis","Tunisia",10.166,36.819],
  ["Sousse","Tunisia",10.637,35.825],
  ["Hammamet","Tunisia",10.617,36.4],
  ["Algiers","Algeria",3.087,36.732],
  ["Oran","Algeria",-0.636,35.699],
  ["Rabat","Morocco",-6.833,34.013],
  ["Fez","Morocco",-5,34.03,["fes"]],
  ["Tangier","Morocco",-5.8,35.767],
  ["Chefchaouen","Morocco",-5.27,35.17],
  ["Essaouira","Morocco",-9.77,31.512],
  ["Agadir","Morocco",-9.598,30.42],
  ["Dakar","Senegal",-17.444,14.694],
  ["Accra","Ghana",-0.197,5.556],
  ["Kumasi","Ghana",-1.624,6.688],
  ["Lagos","Nigeria",3.395,6.454],
  ["Abuja","Nigeria",7.495,9.058],
  ["Cape Coast","Ghana",-1.247,5.105],
  ["Addis Ababa","Ethiopia",38.747,9.025],
  ["Lalibela","Ethiopia",39.048,12.032],
  ["Kigali","Rwanda",30.059,-1.95],
  ["Kampala","Uganda",32.582,0.316],
  ["Mombasa","Kenya",39.664,-4.055],
  ["Arusha","Tanzania",36.683,-3.367],
  ["Dar es Salaam","Tanzania",39.27,-6.823],
  ["Stone Town","Tanzania",39.19,-6.16],
  ["Victoria Falls","Zimbabwe",25.831,-17.933],
  ["Harare","Zimbabwe",31.053,-17.828],
  ["Lusaka","Zambia",28.287,-15.407],
  ["Livingstone","Zambia",25.854,-17.842],
  ["Maputo","Mozambique",32.583,-25.966],
  ["Windhoek","Namibia",17.083,-22.559],
  ["Swakopmund","Namibia",14.527,-22.678],
  ["Gaborone","Botswana",25.909,-24.655],
  ["Maun","Botswana",23.417,-19.983],
  ["Antananarivo","Madagascar",47.536,-18.914],
  ["Nosy Be","Madagascar",48.27,-13.33],
  ["Port Louis","Mauritius",57.499,-20.162],
  ["Grand Baie","Mauritius",57.58,-20.018],
  ["Victoria","Seychelles",55.455,-4.62],
  ["Praia","Cape Verde",-23.513,14.932],
  ["Mindelo","Cape Verde",-24.98,16.89],
  ["São Tomé","São Tomé and Príncipe",6.727,0.337],
  ["Freetown","Sierra Leone",-13.236,8.487],
  ["Monrovia","Liberia",-10.797,6.301],
  ["Abidjan","Côte d'Ivoire",-4.002,5.354],
  ["Yaoundé","Cameroon",11.517,3.867],
  ["Douala","Cameroon",9.704,4.048],
  ["Cotonou","Benin",2.418,6.365],
  ["Lomé","Togo",1.222,6.129],
  ["Banjul","Gambia",-16.578,13.453],
  ["Nouakchott","Mauritania",-15.979,18.086],
  ["Khartoum","Sudan",32.532,15.552],
  ["Juba","South Sudan",31.582,4.852],
  ["Kinshasa","Democratic Republic of the Congo",15.314,-4.328],
  ["Brazzaville","Republic of the Congo",15.283,-4.266],
  ["Luanda","Angola",13.234,-8.837],
  ["Benguela","Angola",13.405,-12.576],
  ["Bujumbura","Burundi",29.361,-3.382],
  ["Blantyre","Malawi",35.009,-15.785],
  ["Lilongwe","Malawi",33.787,-13.967],
  ["Djibouti City","Djibouti",43.15,11.59],
  ["Mogadishu","Somalia",45.344,2.037],
  ["Nara","Japan",135.805,34.685],
  ["Hiroshima","Japan",132.45,34.4],
  ["Nagasaki","Japan",129.883,32.75],
  ["Fukuoka","Japan",130.417,33.6],
  ["Sapporo","Japan",141.35,43.067],
  ["Kobe","Japan",135.183,34.691],
  ["Yokohama","Japan",139.65,35.433],
  ["Nagoya","Japan",136.906,35.181],
  ["Hakone","Japan",139.026,35.189],
  ["Kanazawa","Japan",136.617,36.6],
  ["Takayama","Japan",137.25,36.133],
  ["Nikko","Japan",139.617,36.75],
  ["Okinawa","Japan",127.801,26.336],
  ["Kamakura","Japan",139.55,35.309],
  ["Busan","South Korea",129.03,35.102],
  ["Jeju City","South Korea",126.522,33.51],
  ["Incheon","South Korea",126.705,37.456],
  ["Gyeongju","South Korea",129.212,35.843],
  ["Daegu","South Korea",128.591,35.87],
  ["Daejeon","South Korea",127.385,36.349],
  ["Kaohsiung","Taiwan",120.313,22.616],
  ["Taichung","Taiwan",120.684,24.147],
  ["Tainan","Taiwan",120.213,22.991],
  ["Hualien","Taiwan",121.604,23.977],
  ["Chengdu","China",104.067,30.667],
  ["Chongqing","China",106.553,29.563],
  ["Xi'an","China",108.929,34.258],
  ["Hangzhou","China",120.161,30.294],
  ["Suzhou","China",120.595,31.304],
  ["Nanjing","China",118.778,32.062],
  ["Tianjin","China",117.177,39.142],
  ["Wuhan","China",114.267,30.583],
  ["Guilin","China",110.286,25.282],
  ["Yangshuo","China",110.49,24.781],
  ["Lijiang","China",100.221,26.869],
  ["Kunming","China",102.718,25.039],
  ["Dali","China",100.212,25.585],
  ["Zhangjiajie","China",110.478,29.129],
  ["Huangshan","China",118.313,29.711],
  ["Xiamen","China",118.082,24.48],
  ["Qingdao","China",120.38,36.065],
  ["Harbin","China",126.65,45.75],
  ["Sanya","China",109.505,18.243],
  ["Lhasa","China",91.1,29.65],
  ["Kashgar","China",75.99,39.471],
  ["Zhuhai","China",113.568,22.277],
  ["Urumqi","China",87.6,43.801],
  ["Kathmandu","Nepal",85.321,27.702],
  ["Pokhara","Nepal",83.969,28.267],
  ["Lumbini","Nepal",83.28,27.48],
  ["Thimphu","Bhutan",89.642,27.466],
  ["Paro","Bhutan",89.413,27.43],
  ["Dhaka","Bangladesh",90.407,23.71],
  ["Chittagong","Bangladesh",91.832,22.338],
  ["Sylhet","Bangladesh",91.872,24.899],
  ["Karachi","Pakistan",67.01,24.861],
  ["Lahore","Pakistan",74.351,31.558],
  ["Islamabad","Pakistan",73.043,33.721],
  ["Peshawar","Pakistan",71.578,34.008],
  ["Hunza","Pakistan",74.66,36.32],
  ["Udaipur","India",73.713,24.586],
  ["Jodhpur","India",73.006,26.268],
  ["Jaisalmer","India",70.904,26.918],
  ["Varanasi","India",83.01,25.317],
  ["Amritsar","India",74.875,31.622],
  ["Kolkata","India",88.363,22.563,["calcutta"]],
  ["Chennai","India",80.278,13.088,["madras"]],
  ["Bengaluru","India",77.594,12.972,["bangalore"]],
  ["Hyderabad","India",78.456,17.384],
  ["Kochi","India",76.27,9.93],
  ["Munnar","India",77.062,10.088],
  ["Goa","India",73.826,15.496,["Panaji","panaji"]],
  ["Thiruvananthapuram","India",76.949,8.486,["trivandrum"]],
  ["Rishikesh","India",78.293,30.108],
  ["Haridwar","India",78.16,29.948],
  ["Shimla","India",77.167,31.104],
  ["Manali","India",80.267,13.167],
  ["Darjeeling","India",88.26,27.04],
  ["Gangtok","India",88.612,27.326],
  ["Srinagar","India",74.806,34.086],
  ["Leh","India",77.584,34.165],
  ["Pune","India",73.855,18.52],
  ["Ahmedabad","India",72.587,23.026],
  ["Surat","India",72.83,21.196],
  ["Lucknow","India",80.923,26.839],
  ["Bhopal","India",77.403,23.255],
  ["Indore","India",75.833,22.718],
  ["Bhubaneswar","India",85.82,20.3],
  ["Madurai","India",78.12,9.919],
  ["Mysuru","India",76.64,12.3,["mysore"]],
  ["Hampi","India",76.46,15.335],
  ["Pondicherry","India",79.81,11.94,["puducherry"]],
  ["Tirupati","India",79.42,13.636],
  ["Aurangabad","India",75.342,19.878],
  ["Visakhapatnam","India",83.202,17.68],
  ["Nashik","India",73.791,19.997],
  ["Manila","Philippines",120.982,14.604],
  ["Cebu City","Philippines",123.891,10.317],
  ["Davao City","Philippines",125.61,7.07],
  ["Boracay","Philippines",121.92,11.97],
  ["Puerto Princesa","Philippines",118.735,9.739],
  ["El Nido","Philippines",119.396,11.186],
  ["Coron","Philippines",120.204,11.999],
  ["Bohol","Philippines",123.85,9.65],
  ["Vigan","Philippines",120.387,17.575],
  ["Baguio","Philippines",120.593,16.416],
  ["Siargao","Philippines",126.16,9.79],
  ["Yogyakarta","Indonesia",110.365,-7.801],
  ["Bandung","Indonesia",107.607,-6.922],
  ["Surabaya","Indonesia",112.751,-7.249],
  ["Medan","Indonesia",98.667,3.583],
  ["Ubud","Indonesia",115.265,-8.51],
  ["Seminyak","Indonesia",115.16,-8.69],
  ["Kuta","Indonesia",115.172,-8.723],
  ["Lombok","Indonesia",116.12,-8.58],
  ["Gili Trawangan","Indonesia",116.037,-8.349],
  ["Komodo","Indonesia",119.491,-8.589],
  ["Makassar","Indonesia",119.432,-5.149],
  ["Manado","Indonesia",124.849,1.482],
  ["Batam","Indonesia",104.025,1.149],
  ["George Town","Malaysia",100.335,5.411],
  ["Penang","Malaysia",100.33,5.41],
  ["Johor Bahru","Malaysia",103.758,1.466],
  ["Malacca City","Malaysia",102.25,2.19,["melaka","malacca"]],
  ["Langkawi","Malaysia",99.8,6.35],
  ["Kota Kinabalu","Malaysia",116.072,5.975],
  ["Kuching","Malaysia",110.333,1.55],
  ["Ipoh","Malaysia",101.083,4.584],
  ["Genting Highlands","Malaysia",101.79,3.42],
  ["Cameron Highlands","Malaysia",101.38,4.47],
  ["Da Nang","Vietnam",108.221,16.068],
  ["Hoi An","Vietnam",108.335,15.879],
  ["Hue","Vietnam",107.595,16.462,["hue vietnam"]],
  ["Nha Trang","Vietnam",109.194,12.245],
  ["Da Lat","Vietnam",108.44,11.94,["dalat"]],
  ["Phu Quoc","Vietnam",103.96,10.22],
  ["Sapa","Vietnam",103.84,22.34],
  ["Ha Long","Vietnam",107.073,20.95],
  ["Can Tho","Vietnam",105.788,10.037],
  ["Vung Tau","Vietnam",107.084,10.346],
  ["Phnom Penh","Cambodia",104.916,11.562],
  ["Siem Reap","Cambodia",103.861,13.362],
  ["Sihanoukville","Cambodia",103.53,10.609],
  ["Battambang","Cambodia",103.198,13.103],
  ["Vientiane","Laos",102.6,17.967],
  ["Luang Prabang","Laos",102.135,19.886],
  ["Vang Vieng","Laos",102.45,18.92],
  ["Savannakhet","Laos",104.762,16.57],
  ["Yangon","Myanmar",96.156,16.805,["rangoon"]],
  ["Mandalay","Myanmar",96.084,21.975],
  ["Bagan","Myanmar",94.86,21.17],
  ["Naypyidaw","Myanmar",96.13,19.75],
  ["Ngapali","Myanmar",94.3,18.4],
  ["Chiang Mai","Thailand",98.985,18.79],
  ["Chiang Rai","Thailand",99.832,19.909],
  ["Ayutthaya","Thailand",100.577,14.352],
  ["Krabi","Thailand",98.911,8.073],
  ["Koh Samui","Thailand",100.01,9.51],
  ["Koh Phi Phi","Thailand",98.77,7.74],
  ["Koh Tao","Thailand",99.838,10.098],
  ["Hua Hin","Thailand",99.959,12.571],
  ["Kanchanaburi","Thailand",99.548,14.004],
  ["Sukhothai","Thailand",99.823,17.008],
  ["Udon Thani","Thailand",102.786,17.416],
  ["Bandar Seri Begawan","Brunei",114.94,4.89],
  ["Dili","Timor-Leste",125.574,-8.559],
  ["Suva","Fiji",178.441,-18.142],
  ["Nadi","Fiji",177.416,-17.803],
  ["Denarau","Fiji",177.38,-17.77],
  ["Apia","Samoa",-171.767,-13.833],
  ["Nuku'alofa","Tonga",-175.2,-21.14],
  ["Port Vila","Vanuatu",168.314,-17.736],
  ["Nouméa","New Caledonia",166.449,-22.274],
  ["Papeete","French Polynesia",-149.566,-17.537],
  ["Rarotonga","Cook Islands",-159.78,-21.23],
  ["Honiara","Solomon Islands",159.95,-9.433],
  ["Koror","Palau",134.473,7.34],
  ["Majuro","Marshall Islands",171.38,7.09],
  ["Funafuti","Tuvalu",179.194,-8.524],
  ["Saipan","Northern Mariana Islands",145.755,15.212],
  ["Guam","United States",144.75,13.472],
  ["Darwin","Australia",130.842,-12.461],
  ["Cairns","Australia",145.766,-16.924],
  ["Gold Coast","Australia",153.431,-28],
  ["Adelaide","Australia",138.599,-34.929],
  ["Hobart","Australia",147.329,-42.879],
  ["Canberra","Australia",149.128,-35.283],
  ["Townsville","Australia",146.806,-19.266],
  ["Alice Springs","Australia",133.884,-23.697],
  ["Broome","Australia",122.239,-17.955],
  ["Byron Bay","Australia",153.612,-28.65],
  ["Newcastle","Australia",151.78,-32.93],
  ["Wollongong","Australia",150.893,-34.424],
  ["Geelong","Australia",144.361,-38.147],
  ["Launceston","Australia",147.135,-41.439],
  ["Queenstown","New Zealand",168.663,-45.03],
  ["Rotorua","New Zealand",176.245,-38.139],
  ["Wellington","New Zealand",174.776,-41.287],
  ["Dunedin","New Zealand",170.504,-45.874],
  ["Taupō","New Zealand",176.083,-38.683],
  ["Nelson","New Zealand",173.284,-41.271],
  ["Napier","New Zealand",176.912,-39.493],
  ["Wanaka","New Zealand",169.15,-44.7],
  ["Te Anau","New Zealand",167.717,-45.417],
  ["Whangārei","New Zealand",174.324,-35.732],
  ["Anchorage","United States",-149.9,61.218],
  ["Seattle","United States",-122.332,47.606],
  ["Portland","United States",-122.676,45.523],
  ["Denver","United States",-104.985,39.739],
  ["Phoenix","United States",-112.074,33.448],
  ["Dallas","United States",-96.807,32.783],
  ["Houston","United States",-95.363,29.763],
  ["Austin","United States",-97.743,30.267],
  ["San Diego","United States",-117.165,32.716],
  ["Santa Barbara","United States",-119.698,34.421],
  ["Santa Monica","United States",-118.491,34.019],
  ["Palm Springs","United States",-116.545,33.83],
  ["San Antonio","United States",-98.494,29.424],
  ["Nashville","United States",-86.784,36.166],
  ["Memphis","United States",-90.049,35.15],
  ["Atlanta","United States",-84.388,33.749],
  ["Philadelphia","United States",-75.164,39.952],
  ["Baltimore","United States",-76.612,39.29],
  ["Pittsburgh","United States",-79.996,40.441],
  ["Detroit","United States",-83.046,42.331],
  ["Minneapolis","United States",-93.264,44.98],
  ["Salt Lake City","United States",-111.891,40.761],
  ["Santa Fe","United States",-105.938,35.687],
  ["Savannah","United States",-81.1,32.084],
  ["Charleston","United States",-79.931,32.777],
  ["Key West","United States",-81.782,24.555],
  ["Tampa","United States",-82.458,27.948],
  ["Fort Lauderdale","United States",-80.143,26.122],
  ["Jacksonville","United States",-81.656,30.332],
  ["St. Augustine","United States",-81.31,29.9],
  ["Aspen","United States",-106.818,39.191],
  ["Park City","United States",-111.498,40.646],
  ["Niagara Falls","Canada",-79.066,43.1],
  ["Ottawa","Canada",-75.698,45.411],
  ["Calgary","Canada",-114.085,51.05],
  ["Edmonton","Canada",-113.469,53.55],
  ["Victoria","Canada",-123.352,48.436],
  ["Whistler","Canada",-122.954,50.118],
  ["Banff","Canada",-115.57,51.176],
  ["Jasper","Canada",-118.08,52.879],
  ["Halifax","Canada",-63.573,44.646],
  ["Winnipeg","Canada",-97.147,49.884],
  ["St. John's","Canada",-52.709,47.565],
  ["Kelowna","Canada",-119.486,49.883],
  ["Tofino","Canada",-125.907,49.153],
  ["Whitehorse","Canada",-135.054,60.716],
  ["San Miguel de Allende","Mexico",-100.744,20.915],
  ["Mérida","Mexico",-89.617,20.975],
  ["Guanajuato","Mexico",-101.259,21.019],
  ["Puebla","Mexico",-98.203,19.038],
  ["Querétaro","Mexico",-100.39,20.59],
  ["Monterrey","Mexico",-100.318,25.675],
  ["Acapulco","Mexico",-99.909,16.849],
  ["Mazatlán","Mexico",-106.406,23.233],
  ["Cozumel","Mexico",-86.943,20.5],
  ["Isla Mujeres","Mexico",-86.731,21.231],
  ["Campeche","Mexico",-90.526,19.844],
  ["Morelia","Mexico",-101.184,19.701],
  ["San Cristóbal de las Casas","Mexico",-92.641,16.732],
  ["Antigua Guatemala","Guatemala",-90.734,14.561],
  ["Guatemala City","Guatemala",-90.513,14.641],
  ["Flores","Guatemala",-89.899,16.923],
  ["Belize City","Belize",-88.198,17.5],
  ["San Pedro","Belize",-87.966,17.916],
  ["Panama City","Panama",-79.52,8.98],
  ["Bocas del Toro","Panama",-82.242,9.34],
  ["San José","Costa Rica",-84.083,9.933],
  ["Liberia","Costa Rica",-85.438,10.635],
  ["La Fortuna","Costa Rica",-84.645,10.471],
  ["Monteverde","Costa Rica",-84.82,10.3],
  ["Manuel Antonio","Costa Rica",-84.15,9.39],
  ["Granada","Nicaragua",-85.956,11.93],
  ["León","Nicaragua",-86.878,12.438],
  ["Managua","Nicaragua",-86.25,12.133],
  ["San Salvador","El Salvador",-89.187,13.689],
  ["Santa Ana","El Salvador",-89.56,13.994],
  ["Tegucigalpa","Honduras",-87.207,14.082],
  ["Roatán","Honduras",-86.5,16.32],
  ["Copán Ruinas","Honduras",-89.16,14.84],
  ["San Pedro Sula","Honduras",-88.025,15.504],
  ["Kingston","Jamaica",-76.794,17.997],
  ["Montego Bay","Jamaica",-77.919,18.471],
  ["Ocho Rios","Jamaica",-77.103,18.408],
  ["Negril","Jamaica",-78.348,18.268],
  ["Bridgetown","Barbados",-59.62,13.107],
  ["Castries","Saint Lucia",-61.006,13.996],
  ["Soufrière","Saint Lucia",-61.057,13.856],
  ["St. George's","Grenada",-61.75,12.06],
  ["Kingstown","Saint Vincent and the Grenadines",-61.227,13.155],
  ["St. John's","Antigua and Barbuda",-61.85,17.12],
  ["Basseterre","Saint Kitts and Nevis",-62.725,17.296],
  ["Roseau","Dominica",-61.388,15.302],
  ["Port of Spain","Trinidad and Tobago",-61.519,10.667],
  ["Scarborough","Trinidad and Tobago",-60.735,11.182],
  ["Oranjestad","Aruba",-70.027,12.524],
  ["Willemstad","Curaçao",-68.934,12.108],
  ["Philipsburg","Sint Maarten",-63.046,18.026],
  ["Gustavia","Saint Barthélemy",-62.85,17.896],
  ["Road Town","British Virgin Islands",-64.621,18.427],
  ["Cockburn Town","Turks and Caicos Islands",-71.142,21.461],
  ["Providenciales","Turks and Caicos Islands",-72.27,21.78],
  ["George Town","Cayman Islands",-81.374,19.287],
  ["Hamilton","Bermuda",-64.783,32.295],
  ["San Andrés","Colombia",-81.706,12.583],
  ["Santa Marta","Colombia",-74.199,11.241],
  ["Barranquilla","Colombia",-74.781,10.969],
  ["Cali","Colombia",-76.522,3.437],
  ["Pereira","Colombia",-75.696,4.813],
  ["Quito","Ecuador",-78.525,-0.23],
  ["Guayaquil","Ecuador",-79.886,-2.196],
  ["Cuenca","Ecuador",-79.005,-2.901],
  ["Galápagos","Ecuador",-90.314,-0.74,["Puerto Ayora","galapagos islands","puerto ayora"]],
  ["La Paz","Bolivia",-68.15,-16.5],
  ["Sucre","Bolivia",-65.263,-19.033],
  ["Uyuni","Bolivia",-66.825,-20.46],
  ["Potosí","Bolivia",-65.753,-19.584],
  ["Arequipa","Peru",-71.535,-16.399],
  ["Iquitos","Peru",-73.254,-3.749],
  ["Puno","Peru",-70.02,-15.842],
  ["Trujillo","Peru",-79.03,-8.116],
  ["Paracas","Peru",-76.267,-13.867],
  ["Nazca","Peru",-74.939,-14.831],
  ["La Serena","Chile",-71.249,-29.905],
  ["Puerto Varas","Chile",-72.985,-41.319],
  ["Puerto Natales","Chile",-72.506,-51.73],
  ["Punta Arenas","Chile",-70.911,-53.155],
  ["San Pedro de Atacama","Chile",-68.201,-22.911],
  ["Viña del Mar","Chile",-71.552,-33.025],
  ["Bariloche","Argentina",-71.308,-41.146],
  ["Mendoza","Argentina",-68.827,-32.891],
  ["Córdoba","Argentina",-64.181,-31.413],
  ["Salta","Argentina",-65.412,-24.786],
  ["Ushuaia","Argentina",-68.316,-54.811],
  ["El Calafate","Argentina",-72.277,-50.341],
  ["Puerto Iguazú","Argentina",-54.574,-25.599],
  ["Rosario","Argentina",-60.639,-32.947],
  ["Mar del Plata","Argentina",-57.556,-38],
  ["Florianópolis","Brazil",-48.549,-27.597],
  ["Brasília","Brazil",-47.93,-15.78],
  ["Foz do Iguaçu","Brazil",-54.588,-25.548],
  ["Fortaleza","Brazil",-38.543,-3.717],
  ["Recife","Brazil",-34.881,-8.054],
  ["Natal","Brazil",-35.209,-5.795],
  ["Manaus","Brazil",-60.025,-3.102],
  ["Belém","Brazil",-48.504,-1.456],
  ["Curitiba","Brazil",-49.273,-25.428],
  ["Gramado","Brazil",-50.87,-29.38],
  ["Búzios","Brazil",-41.882,-22.747],
  ["Paraty","Brazil",-44.713,-23.218],
  ["Ouro Preto","Brazil",-43.505,-20.395],
  ["Asunción","Paraguay",-57.647,-25.286],
  ["Ciudad del Este","Paraguay",-54.611,-25.51],
  ["Encarnación","Paraguay",-55.867,-27.331],
  ["Punta del Diablo","Uruguay",-53.54,-34.04],
  ["Colonia del Sacramento","Uruguay",-57.84,-34.463],
  ["Georgetown","Guyana",-58.155,6.804],
  ["Paramaribo","Suriname",-55.167,5.866],
  ["Cayenne","French Guiana",-52.333,4.933],
  ["Port-au-Prince","Haiti",-72.339,18.543],
  ["Cap-Haïtien","Haiti",-72.2,19.76],
  ["Varadero","Cuba",-81.244,23.157],
  ["Trinidad","Cuba",-79.985,21.802],
  ["Cienfuegos","Cuba",-80.447,22.15],
  ["Santiago de Cuba","Cuba",-75.827,20.021],
  ["Holguín","Cuba",-76.263,20.887],
  ["Camagüey","Cuba",-77.917,21.381],
  ["Ponce","Puerto Rico",-66.624,18.01],
  ["Fajardo","Puerto Rico",-65.652,18.326],
  ["Charlotte Amalie","U.S. Virgin Islands",-64.931,18.342],
  ["Christiansted","U.S. Virgin Islands",-64.7,17.75],
  ["St. Thomas","U.S. Virgin Islands",-64.93,18.34],
  ["St. Croix","U.S. Virgin Islands",-64.75,17.73],
  ["Aguas Calientes","Peru",-72.52,-13.15],
  ["Puerto Madryn","Argentina",-65.039,-42.769],
  ["San Rafael","Argentina",-68.33,-34.618],
  ["Villa La Angostura","Argentina",-71.646,-40.762]
];

window.PACKCHECK_COUNTRIES = [
  ["Afghanistan","Country",65.926,33.819],
  ["Åland Islands","Country",19.944,60.232],
  ["Albania","Country",20.052,41.135],
  ["Algeria","Country",2.631,28.056],
  ["American Samoa","Country",-170.718,-14.305],
  ["Andorra","Country",1.561,42.542],
  ["Angola","Country",17.56,-12.31],
  ["Anguilla","Country",-63.066,18.224],
  ["Antarctica","Country",83.042,-84.679],
  ["Antigua and Barbuda","Country",-61.79,17.078],
  ["Argentina","Country",-64.748,-34.535],
  ["Armenia","Country",44.937,40.287],
  ["Aruba","Country",-69.983,12.521],
  ["Australia","Country",134.207,-25.632],
  ["Australia","Country",123.584,-12.43],
  ["Austria","Country",14.11,47.592],
  ["Azerbaijan","Country",47.671,40.342],
  ["Bahamas","Country",-78.038,24.701],
  ["Bahrain","Country",50.542,26.042],
  ["Bangladesh","Country",90.233,23.891],
  ["Barbados","Country",-59.56,13.181],
  ["Belarus","Country",28.016,53.519],
  ["Belgium","Country",4.646,50.639],
  ["Belize","Country",-88.719,17.193],
  ["Benin","Country",2.327,9.636],
  ["Bermuda","Country",-64.756,32.313],
  ["Bhutan","Country",90.402,27.412],
  ["Bolivia","Country",-64.698,-16.682,["bolivia"]],
  ["Bosnia and Herzegovina","Country",17.775,44.171],
  ["Botswana","Country",23.809,-22.166],
  ["Brazil","Country",-53.237,-10.693],
  ["British Indian Ocean Territory","Country",72.445,-7.331],
  ["Brunei Darussalam","Country",114.592,4.491],
  ["Bulgaria","Country",25.209,42.771],
  ["Burkina Faso","Country",-1.761,12.271],
  ["Burundi","Country",29.875,-3.359],
  ["Cambodia","Country",104.906,12.72],
  ["Cameroon","Country",12.734,5.681],
  ["Canada","Country",-99.004,58.592],
  ["Cape Verde","Country",-23.637,15.083],
  ["Cayman Islands","Country",-81.286,19.321],
  ["Central African Republic","Country",20.462,6.572],
  ["Chad","Country",18.635,15.275],
  ["Chile","Country",-70.95,-34.361],
  ["Colombia","Country",-73.077,3.904],
  ["Comoros","Country",43.339,-11.654],
  ["Cook Islands","Country",-159.787,-21.22],
  ["Costa Rica","Country",-84.19,9.976],
  ["Cote d'Ivoire","Country",-5.57,7.626,["ivory coast"]],
  ["Croatia","Country",16.419,45.157],
  ["Cuba","Country",-78.914,21.629],
  ["Curaçao","Country",-68.972,12.196],
  ["Cyprus","Country",33.006,34.917],
  ["Czech Republic","Country",15.319,49.738,["czech republic"]],
  ["Democratic Republic of the Congo","Country",23.638,-2.865,["dr congo","drc"]],
  ["Denmark","Country",9.348,56.231],
  ["Djibouti","Country",42.56,11.749],
  ["Dominica","Country",-61.358,15.439],
  ["Dominican Republic","Country",-70.505,18.895],
  ["Ecuador","Country",-78.389,-1.445],
  ["Egypt","Country",29.878,26.46],
  ["El Salvador","Country",-88.871,13.74],
  ["Equatorial Guinea","Country",10.471,1.565],
  ["Eritrea","Country",38.849,15.359],
  ["Estonia","Country",25.837,58.683],
  ["Eswatini","Country",31.482,-26.558],
  ["Ethiopia","Country",39.61,8.614],
  ["Falkland Islands (Malvinas)","Country",-58.758,-51.744],
  ["Faroe Islands","Country",-6.884,62.17],
  ["Fiji","Country",177.973,-17.823],
  ["Finland","Country",26.206,64.261],
  ["France","Country",2.461,46.572],
  ["French Polynesia","Country",-149.42,-17.664],
  ["French Southern Territories","Country",69.495,-49.304],
  ["Gabon","Country",11.788,-0.586],
  ["Georgia","Country",43.524,42.173],
  ["Germany","Country",10.352,51.032],
  ["Ghana","Country",-1.217,7.948],
  ["Greece","Country",22.566,39.461],
  ["Greenland","Country",-41.803,73.084],
  ["Grenada","Country",-61.682,12.117],
  ["Guam","Country",144.767,13.441],
  ["Guatemala","Country",-90.367,15.69],
  ["Guernsey","Country",-2.573,49.468],
  ["Guinea","Country",-10.935,10.437],
  ["Guinea-Bissau","Country",-14.924,12.065],
  ["Guyana","Country",-58.98,4.79],
  ["Haiti","Country",-72.677,18.928],
  ["Heard Island and McDonald Islands","Country",73.52,-53.087],
  ["Holy See (Vatican City State)","Country",12.434,41.902],
  ["Honduras","Country",-86.618,14.826],
  ["Hong Kong","Country",114.14,22.439],
  ["Hungary","Country",19.379,47.166],
  ["Iceland","Country",-18.58,64.998],
  ["India","Country",79.534,22.8],
  ["Indonesia","Country",114.014,-0.191],
  ["Iraq","Country",43.774,33.01],
  ["Ireland","Country",-8.143,53.161],
  ["Islamic Republic of Iran","Country",54.44,32.532,["iran"]],
  ["Isle of Man","Country",-4.539,54.224],
  ["Israel","Country",35,31.452],
  ["Italy","Country",12.3,43.486],
  ["Jamaica","Country",-77.315,18.157],
  ["Japan","Country",137.883,36.634],
  ["Jersey","Country",-2.127,49.218],
  ["Jordan","Country",36.757,31.239],
  ["Kazakhstan","Country",67.247,48.362],
  ["Kenya","Country",37.796,0.6],
  ["Kiribati","Country",-157.374,1.854],
  ["Kuwait","Country",47.563,29.316],
  ["Kyrgyzstan","Country",74.509,41.474],
  ["Laos","Country",103.775,18.487,["laos"]],
  ["Latvia","Country",24.92,56.86],
  ["Lebanon","Country",35.878,33.921],
  ["Lesotho","Country",28.229,-29.579],
  ["Liberia","Country",-9.32,6.452],
  ["Libya","Country",18.066,27.017],
  ["Liechtenstein","Country",9.536,47.137],
  ["Lithuania","Country",23.902,55.324],
  ["Luxembourg","Country",6.072,49.767],
  ["Macao","Country",113.509,22.223],
  ["Madagascar","Country",46.741,-19.32],
  ["Malawi","Country",34.282,-13.206],
  ["Malaysia","Country",114.717,3.615],
  ["Maldives","Country",73.503,4.197],
  ["Mali","Country",-3.59,17.315],
  ["Malta","Country",14.444,35.89],
  ["Marshall Islands","Country",171.188,7.106],
  ["Mauritania","Country",-10.369,20.22],
  ["Mauritius","Country",57.571,-20.278],
  ["Mexico","Country",-102.154,23.917],
  ["Micronesia, Federated States of","Country",158.232,6.886],
  ["Moldova","Country",28.466,47.187,["moldova"]],
  ["Monaco","Country",7.407,43.753],
  ["Mongolia","Country",103.124,46.956],
  ["Montenegro","Country",19.239,42.788],
  ["Montserrat","Country",-62.186,16.74],
  ["Morocco","Country",-8.728,29.767],
  ["Mozambique","Country",35.603,-17.196],
  ["Myanmar","Country",96.495,21.15,["burma"]],
  ["Namibia","Country",17.195,-22.07],
  ["Nauru","Country",166.933,-0.519],
  ["Nepal","Country",83.947,28.258],
  ["Netherlands","Country",5.633,52.277,["holland"]],
  ["New Caledonia","Country",165.481,-21.325],
  ["New Zealand","Country",170.611,-43.949],
  ["Nicaragua","Country",-85.032,12.845],
  ["Niger","Country",9.332,17.412],
  ["Nigeria","Country",8.08,9.592],
  ["Niue","Country",-169.87,-19.049],
  ["Norfolk Island","Country",167.95,-29.052],
  ["North Korea","Country",127.16,40.14,["north korea"]],
  ["Northern Mariana Islands","Country",145.744,15.181],
  ["Norway","Country",12.159,63.786],
  ["Oman","Country",56.056,20.557],
  ["Pakistan","Country",69.168,29.884],
  ["Palau","Country",134.581,7.514],
  ["Panama","Country",-80.112,8.527],
  ["Papua New Guinea","Country",144.235,-6.605],
  ["Paraguay","Country",-58.443,-23.209],
  ["People's Republic of China","Country",103.346,36.757],
  ["Peru","Country",-74.421,-9.107],
  ["Philippines","Country",121.42,15.947],
  ["Pitcairn","Country",-128.317,-24.365],
  ["Poland","Country",19.42,52.112],
  ["Portugal","Country",-7.985,39.652],
  ["Puerto Rico","Country",-66.482,18.231],
  ["Qatar","Country",51.184,25.305],
  ["Republic of the Congo","Country",15.221,-0.837,["congo"]],
  ["Republic of The Gambia","Country",-15.396,13.451],
  ["Romania","Country",24.983,45.849],
  ["Russia","Country",95.533,65.891,["russia"]],
  ["Rwanda","Country",29.92,-1.99],
  ["Saint Barthélemy","Country",-62.841,17.899],
  ["Saint Helena","Country",-5.717,-15.959],
  ["Saint Kitts and Nevis","Country",-62.747,17.327],
  ["Saint Lucia","Country",-60.97,13.895],
  ["Saint Martin (French part)","Country",-63.06,18.089],
  ["Saint Pierre and Miquelon","Country",-56.327,46.945],
  ["Saint Vincent and the Grenadines","Country",-61.195,13.254],
  ["Samoa","Country",-172.437,-13.631],
  ["San Marino","Country",12.459,43.942],
  ["Sao Tome and Principe","Country",6.606,0.238],
  ["Saudi Arabia","Country",44.665,24.089],
  ["Senegal","Country",-14.469,14.365],
  ["Serbia","Country",20.806,44.211],
  ["Seychelles","Country",55.476,-4.66],
  ["Sierra Leone","Country",-11.785,8.571],
  ["Singapore","Country",103.817,1.359],
  ["Sint Maarten (Dutch part)","Country",-63.057,18.051],
  ["Slovakia","Country",19.469,48.711],
  ["Slovenia","Country",14.801,46.116],
  ["Solomon Islands","Country",160.168,-9.625],
  ["Somalia","Country",45.68,4.74],
  ["South Africa","Country",25.192,-28.971],
  ["South Georgia and the South Sandwich Islands","Country",-36.693,-54.365],
  ["South Korea","Country",127.869,36.451,["korea","south korea"]],
  ["South Sudan","Country",30.251,7.309],
  ["Spain","Country",-3.573,40.372],
  ["Sri Lanka","Country",80.704,7.607],
  ["State of Palestine","Country",35.248,31.947],
  ["Sudan","Country",29.907,15.968],
  ["Suriname","Country",-55.913,4.13],
  ["Sweden","Country",16.247,62.433],
  ["Switzerland","Country",8.206,46.799],
  ["Syria","Country",38.488,35.019,["syria"]],
  ["Taiwan","Country",120.959,23.747,["taiwan"]],
  ["Tajikistan","Country",71.028,38.535],
  ["Thailand","Country",101.005,15.099],
  ["The Republic of North Macedonia","Country",21.681,41.595],
  ["Timor-Leste","Country",125.924,-8.81],
  ["Togo","Country",0.964,8.521],
  ["Tonga","Country",-175.217,-21.167],
  ["Trinidad and Tobago","Country",-61.293,10.421],
  ["Tunisia","Country",9.551,34.089],
  ["Türkiye","Country",35.41,39.062,["turkiye","turkey"]],
  ["Turkmenistan","Country",59.448,39.125],
  ["Turks and Caicos Islands","Country",-71.74,21.811],
  ["Uganda","Country",32.369,1.274],
  ["Ukraine","Country",31.315,49.197],
  ["United Arab Emirates","Country",54.298,23.902,["uae"]],
  ["United Kingdom","Country",-2.412,53.826,["uk","britain","great britain","england"]],
  ["United Republic of Tanzania","Country",34.787,-6.269,["tanzania"]],
  ["United States","Country",-98.82,39.886,["usa","us","america","united states of america"]],
  ["Uruguay","Country",-56.025,-32.791],
  ["Uzbekistan","Country",63.295,41.777],
  ["Vanuatu","Country",166.849,-15.226],
  ["Venezuela","Country",-66.176,7.117,["venezuela"]],
  ["Vietnam","Country",106.349,16.55,["vietnam"]],
  ["Virgin Islands, British","Country",-64.622,18.423],
  ["Virgin Islands, U.S.","Country",-64.772,17.741],
  ["Wallis and Futuna","Country",-178.13,-14.286],
  ["Western Sahara","Country",-12.271,24.212],
  ["Yemen","Country",47.52,15.944],
  ["Zambia","Country",27.809,-13.455],
  ["Zimbabwe","Country",29.851,-18.997]
];

/* PackCheck – destination globe
   createGlobe(canvas) draws an animated 3D globe that can fly to a place.
   On the home page it's wired to the "Where are you going?" search; pressing Go
   flies to the place, then opens destination.html for it. */
(() => {
  const ATLAS = "https://cdn.jsdelivr.net/npm/world-atlas@2/";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const normalize = (s) =>
    s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase()
      .replace(/['’.]/g, "").replace(/[^a-z0-9]+/g, " ").trim();

  /* ---------- World data (loaded once per page, shared by every globe) ----------
     110m = light outlines drawn every frame.
     50m  = detailed countries for the highlight, so small places like Singapore
            get their own shape instead of being lumped into Malaysia. */
  const world = { land: null, borders: null, countries: [] };
  const outlinesReady = fetch(ATLAS + "countries-110m.json")
    .then((r) => r.json())
    .then((w) => {
      world.land = topojson.feature(w, w.objects.land);
      world.borders = topojson.mesh(w, w.objects.countries, (a, b) => a !== b);
    });
  const countriesReady = fetch(ATLAS + "countries-50m.json")
    .then((r) => r.json())
    .then((w) => {
      world.countries = topojson.feature(w, w.objects.countries).features;
    })
    .catch(() => {});

  // Countries smaller than this (steradians) are too tiny to see, so they get a
  // glow around the pin instead. Singapore ≈ 0.00002.
  const TINY_AREA = 0.0002;

  function countryAt(lon, lat) {
    const country = world.countries.find((f) => d3.geoContains(f, [lon, lat])) || null;
    // No match (e.g. a coastal point just offshore) → glow as well
    const tiny = country ? d3.geoArea(country) < TINY_AREA : world.countries.length > 0;
    return { country, tiny };
  }

  /* ---------- Globe ---------- */
  function createGlobe(canvas, { spin = true } = {}) {
    const ctx = canvas.getContext("2d");
    const projection = d3.geoOrthographic().clipAngle(90).precision(0.4);
    const path = d3.geoPath(projection, ctx);
    const graticule = d3.geoGraticule10();

    let size = 0;
    let baseScale = 0;
    let rotation = [-20, -15, 0];
    let zoom = 1;
    let spinning = spin;
    let flight = null;
    let target = null; // { lon, lat, name, shape, tiny }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      size = canvas.clientWidth;
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Leave room for the atmosphere glow (drawn out to 1.14× the radius)
      baseScale = size / 2 / 1.16;
      projection.translate([size / 2, size / 2]);
    }
    new ResizeObserver(resize).observe(canvas);
    resize();

    function setTarget(place) {
      target = { lon: place.lon, lat: place.lat, name: place.name, shape: null, tiny: false };
      const t = target;
      countriesReady.then(() => {
        if (target !== t) return;
        const { country, tiny } = countryAt(t.lon, t.lat);
        t.shape = country;
        t.tiny = tiny;
      });
    }

    function draw(time) {
      if (!size) return;
      const r = baseScale * zoom;
      const c = size / 2;
      projection.scale(r).rotate(rotation);
      ctx.clearRect(0, 0, size, size);

      // Atmosphere glow
      const glow = ctx.createRadialGradient(c, c, r * 0.92, c, c, r * 1.14);
      glow.addColorStop(0, "rgba(94, 234, 212, 0.35)");
      glow.addColorStop(1, "rgba(94, 234, 212, 0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(c, c, r * 1.14, 0, Math.PI * 2);
      ctx.fill();

      // Ocean
      const ocean = ctx.createRadialGradient(c - r * 0.35, c - r * 0.4, r * 0.1, c, c, r);
      ocean.addColorStop(0, "#1a5470");
      ocean.addColorStop(1, "#06182a");
      ctx.beginPath();
      path({ type: "Sphere" });
      ctx.fillStyle = ocean;
      ctx.fill();

      // Grid lines
      ctx.beginPath();
      path(graticule);
      ctx.strokeStyle = "rgba(232, 241, 242, 0.07)";
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Land + borders
      if (world.land) {
        ctx.beginPath();
        path(world.land);
        ctx.fillStyle = "#3fb39f";
        ctx.fill();

        ctx.beginPath();
        path(world.borders);
        ctx.strokeStyle = "rgba(6, 24, 42, 0.45)";
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      // Highlighted destination country
      if (target && target.shape) {
        ctx.beginPath();
        path(target.shape);
        ctx.fillStyle = "#f9b872";
        ctx.fill();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // Shading for depth
      const shade = ctx.createRadialGradient(c - r * 0.4, c - r * 0.45, r * 0.2, c, c, r * 1.05);
      shade.addColorStop(0, "rgba(255, 255, 255, 0.08)");
      shade.addColorStop(1, "rgba(0, 0, 0, 0.35)");
      ctx.beginPath();
      path({ type: "Sphere" });
      ctx.fillStyle = shade;
      ctx.fill();

      // Rim
      ctx.strokeStyle = "rgba(94, 234, 212, 0.45)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Pin (only on the visible side)
      if (target) {
        const centre = [-rotation[0], -rotation[1]];
        if (d3.geoDistance([target.lon, target.lat], centre) < Math.PI / 2 - 0.05) {
          const [x, y] = projection([target.lon, target.lat]);
          drawPin(x, y, time);
        }
      }
    }

    function drawPin(x, y, time) {
      const phase = (time % 1800) / 1800;

      if (target.tiny) {
        const halo = ctx.createRadialGradient(x, y, 0, x, y, 18);
        halo.addColorStop(0, "rgba(249, 184, 114, 0.9)");
        halo.addColorStop(1, "rgba(249, 184, 114, 0)");
        ctx.beginPath();
        ctx.arc(x, y, 18, 0, Math.PI * 2);
        ctx.fillStyle = halo;
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(x, y, 6 + phase * 24, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(249, 184, 114, ${1 - phase})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(x, y, 6, 0, Math.PI * 2);
      ctx.fillStyle = "#f0766b";
      ctx.fill();
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.stroke();

      if (!flight) {
        ctx.font = "600 13px Inter, sans-serif";
        const w = ctx.measureText(target.name).width + 20;
        const h = 26;
        const ly = y - 44;
        ctx.beginPath();
        ctx.roundRect(x - w / 2, ly, w, h, 13);
        ctx.fillStyle = "rgba(7, 18, 28, 0.85)";
        ctx.fill();
        ctx.strokeStyle = "rgba(94, 234, 212, 0.5)";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.fillStyle = "#e8f1f2";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(target.name, x, ly + h / 2 + 1);
      }
    }

    function frame(time) {
      if (flight) {
        const k = flight.dur ? Math.min((time - flight.start) / flight.dur, 1) : 1;
        rotation = flight.interp(d3.easeCubicInOut(k));
        zoom = 1 - 0.14 * Math.sin(Math.PI * k); // pull back mid-flight, then zoom in
        if (k >= 1) {
          flight = null;
          zoom = 1;
        }
      } else if (spinning && !reduceMotion) {
        rotation = [rotation[0] + 0.12, rotation[1], 0];
      }
      draw(time);
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);

    return {
      /** Spin to a place. Returns the flight time in ms. */
      flyTo(place) {
        setTarget(place);
        spinning = false;
        const start = [((rotation[0] % 360) + 360) % 360, rotation[1], 0];
        const dLon = ((((-place.lon - start[0]) % 360) + 540) % 360) - 180; // shortest way round
        const end = [start[0] + dLon, -place.lat, 0];
        const distance = Math.abs(dLon) + Math.abs(end[1] - start[1]);
        const dur = reduceMotion ? 0 : Math.max(900, Math.min(2400, distance * 12));
        flight = { start: performance.now(), dur, interp: d3.interpolate(start, end) };
        return dur;
      },
      /** Jump straight to a place (no animation). */
      show(place) {
        setTarget(place);
        spinning = false;
        flight = null;
        rotation = [-place.lon, -place.lat, 0];
      },
    };
  }

  /** Which country is this point in? Resolves to { id (ISO numeric), name } or null.
      Coastal points that land just offshore are nudged inland. */
  async function countryOf(lon, lat) {
    await countriesReady;
    const tries = [[0, 0]];
    for (const d of [0.15, 0.4]) {
      for (let a = 0; a < 360; a += 45) {
        tries.push([d * Math.cos((a * Math.PI) / 180), d * Math.sin((a * Math.PI) / 180)]);
      }
    }
    for (const [dx, dy] of tries) {
      const f = world.countries.find((c) => d3.geoContains(c, [lon + dx, lat + dy]));
      if (f) return { id: Number(f.id), name: f.properties.name };
    }
    return null;
  }

  /** Is this point within ~200 km of the sea? (Used for cyclone-season warnings.) */
  async function isCoastal(lon, lat) {
    await outlinesReady;
    if (!world.land || !d3.geoContains(world.land, [lon, lat])) return true;
    for (let a = 0; a < 360; a += 30) {
      const r = (a * Math.PI) / 180;
      const p = [lon + (1.8 * Math.cos(r)) / Math.max(Math.cos((lat * Math.PI) / 180), 0.2), lat + 1.8 * Math.sin(r)];
      if (!d3.geoContains(world.land, p)) return true;
    }
    return false;
  }

  window.PackCheck = { createGlobe, normalize, outlinesReady, countryOf, isCoastal };

  /* ======================================================================
     Home page: search → fly → open destination page
     ====================================================================== */
  const form = document.getElementById("destForm");
  if (!form) return;

  const canvas = document.getElementById("globe");
  const input = document.getElementById("destInput");
  const goBtn = form.querySelector("button[type=submit]");
  const status = document.getElementById("destStatus");
  const chips = document.getElementById("destChips");
  const datalist = document.getElementById("destSuggestions");
  const globe = createGlobe(canvas);

  outlinesReady.catch(() => {
    status.textContent = "Couldn't load the map. Check your connection and refresh.";
  });

  // Built-in places (places.js) – instant, no network. Anything else goes to OpenStreetMap.
  const PLACES = new Map();
  const add = (key, place) => {
    const k = normalize(key);
    if (k && !PLACES.has(k)) PLACES.set(k, place);
  };
  const cityList = window.PACKCHECK_PLACES || [];
  const countryList = window.PACKCHECK_COUNTRIES || [];

  // Countries first, so "Liberia" means the country (type "Liberia, Costa Rica" for the town)
  for (const [name, , lon, lat, aliases = []] of countryList) {
    const place = { name, lon, lat, country: null };
    add(name, place);
    aliases.forEach((a) => add(a, place));
  }
  // Cities: "Paris", "Paris France" and aliases. Earlier (more popular) entries win.
  for (const [name, country, lon, lat, aliases = []] of cityList) {
    const place = { name, lon, lat, country };
    add(name, place);
    add(`${name} ${country}`, place);
    aliases.forEach((a) => add(a, place));
  }

  // Autocomplete: every city (with its country) plus every country
  const cityNames = new Set(cityList.map((p) => p[0]));
  const nameCount = new Map();
  cityList.forEach(([n]) => nameCount.set(n, (nameCount.get(n) || 0) + 1));
  const frag = document.createDocumentFragment();
  const option = (value, label) => {
    const o = document.createElement("option");
    o.value = value;
    o.label = label;
    frag.append(o);
  };
  for (const [name, country] of cityList) {
    option(nameCount.get(name) > 1 ? `${name}, ${country}` : name, country);
  }
  for (const [name] of countryList) if (!cityNames.has(name)) option(name, "Country");
  datalist.append(frag);

  async function lookup(query) {
    const hit = PLACES.get(normalize(query));
    if (hit) return { ...hit };
    const url =
      "https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&q=" +
      encodeURIComponent(query);
    const res = await fetch(url, { headers: { "Accept-Language": "en" } });
    if (!res.ok) throw new Error("lookup failed");
    const [found] = await res.json();
    if (!found) return null;
    const parts = found.display_name.split(",").map((s) => s.trim());
    return {
      lon: parseFloat(found.lon),
      lat: parseFloat(found.lat),
      name: found.name || parts[0],
      country: parts.length > 1 ? parts[parts.length - 1] : null,
    };
  }

  const fmt = (v, pos, neg) => `${Math.abs(v).toFixed(2)}°${v >= 0 ? pos : neg}`;
  let busy = false;

  async function go(query) {
    if (!query.trim() || busy) return;
    status.textContent = `Finding ${query.trim()}…`;
    try {
      const place = await lookup(query);
      if (!place) {
        status.textContent = "Couldn't find that place. Try a city or country.";
        return;
      }
      busy = true;
      form.classList.add("is-busy");
      goBtn.disabled = true;

      const where = place.country && place.country !== place.name ? `${place.name}, ${place.country}` : place.name;
      const flight = globe.flyTo(place);
      status.textContent = `Taking you to ${where} · ${fmt(place.lat, "N", "S")}, ${fmt(place.lon, "E", "W")}`;
      canvas.setAttribute("aria-label", `Globe showing ${place.name}`);

      // Let the globe land and show the pin for a moment, then fade to the destination page
      const params = new URLSearchParams({
        name: place.name,
        lat: place.lat.toFixed(4),
        lon: place.lon.toFixed(4),
      });
      if (place.country) params.set("country", place.country);
      const url = `destination.html?${params}`;

      setTimeout(() => {
        document.body.classList.add("is-leaving");
        setTimeout(() => (window.location.href = url), reduceMotion ? 0 : 450);
      }, flight + (reduceMotion ? 300 : 1100));
    } catch {
      status.textContent = "Search isn't available right now. Try one of the suggestions.";
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    go(input.value);
  });

  chips.addEventListener("click", (e) => {
    const chip = e.target.closest("[data-place]");
    if (!chip) return;
    input.value = chip.dataset.place;
    go(chip.dataset.place);
  });

  // Coming back with the browser's back button: reset so Go works again
  window.addEventListener("pageshow", (e) => {
    if (!e.persisted) return;
    busy = false;
    form.classList.remove("is-busy");
    goBtn.disabled = false;
    document.body.classList.remove("is-leaving");
  });
})();
