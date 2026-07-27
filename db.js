// ============================================================
//  ARB ACCESSORIES — PRODUCT DATABASE
//  Edit this file to add/remove/update products & categories
// ============================================================

const DB = {
  categories: [
    { id: "EV Lithium ION Chargers",            label: "EV Lithium ION Chargers" },
    { id: "Controllers & Wires",   label: "Controllers & Wires" },
    { id: "Lithium Batteries",       label: "Lithium Batteries" },
    { id: "Miscellaneous",        label: "Miscellaneous" },
  ],

  products: [
{
  id: "p001",
  category: "EV Lithium ION Chargers",
  name: "84V 6A Lithium EV Charger for NMC Battery (1 Year Warranty)",
  price: 2550,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p001.jpg",
  description: "The AQ 84V 6A Electric Vehicle Lithium-Ion Battery Charger is designed for 72V NMC battery packs used in electric scooters, e-bikes, and other EVs. It delivers fast, stable, and safe charging with intelligent protection against overcharging, overheating, and short circuits. Backed by a 1-year warranty."
},

{
  id: "p002",
  category: "EV Lithium ION Chargers",
  name: "AL 69V 6A Lithium EV Charger for LFP Battery (6 Months Warranty)",
  price: 1350,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p002.jpg",
  description: "69.4V 6A aluminum lithium battery charger specially designed for 60V LFP battery packs. Suitable for electric scooters, e-rickshaws, and EV applications. Features efficient charging, intelligent safety protection, and durable construction."
},

{
  id: "p003",
  category: "EV Lithium ION Chargers",
  name: "AL 69V 6A Lithium EV Charger for LFP Battery (1 Year Warranty)",
  price: 2450,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p003.jpg",
  description: "Premium 69.4V 6A aluminum charger for 60V LFP batteries with smart charging technology, automatic cut-off, short-circuit protection, and 1-year warranty."
},

{
  id: "p004",
  category: "EV Lithium ION Chargers",
  name: "AL 54.6V 6A Lithium EV Charger for NMC Battery (1 Year Warranty)",
  price: 2350,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p004.jpg",
  description: "54.6V 6A aluminum lithium charger for 48V NMC battery packs. Provides fast charging while protecting the battery from over-voltage, overheating, and short circuits."
},

{
  id: "p005",
  category: "EV Lithium ION Chargers",
  name: "AL 67.2V 6A Lithium EV Charger for NMC Battery (1 Year Warranty)",
  price: 2450,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p005.jpg",
  description: "67.2V 6A charger designed for 60V NMC lithium batteries used in electric scooters and EVs. High efficiency with intelligent charging control and 1-year warranty."
},

{
  id: "p006",
  category: "EV Lithium ION Chargers",
  name: "AL 54.6V 6A Lithium EV Charger for NMC Battery (6 Months Warranty)",
  price: 1350,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p006.jpg",
  description: "Reliable 54.6V 6A charger for 48V NMC lithium battery packs. Compact aluminum body with automatic cut-off, temperature protection, and stable output."
},

{
  id: "p007",
  category: "EV Lithium ION Chargers",
  name: "54.6V 15A Lithium Charger for E-Rickshaw",
  price: 3495,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p007.jpg",
  description: "High-power 54.6V 15A lithium charger specially designed for electric rickshaws. Fast charging with intelligent battery management and advanced protection features."
},

{
  id: "p008",
  category: "EV Lithium ION Chargers",
  name: "Imported 48V 3A Lead Acid EV Charger",
  price: 790,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p008.jpg",
  description: "Imported 48V 3A lead-acid battery charger suitable for electric scooters and e-bikes. Safe charging with overload, reverse polarity, and short-circuit protection."
},

{
  id: "p009",
  category: "EV Lithium ION Chargers",
  name: "48V 3A Lead Acid EV Charger",
  price: 590,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p009.jpg",
  description: "48V 3A lead-acid charger designed for electric scooters and e-bikes. Compact, reliable, and energy-efficient with automatic charging cut-off."
},

{
  id: "p010",
  category: "EV Lithium ION Chargers",
  name: "Imported 72V 3A Lead Acid EV Charger",
  price: 1190,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p010.jpg",
  description: "Imported 72V 3A lead-acid charger compatible with electric scooters, e-rickshaws, and other EVs. Provides efficient charging with complete battery safety."
},
{
  id: "p011",
  category: "EV Lithium ION Chargers",
  name: "60V 3A Lead Acid EV Charger",
  price: 590,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p011.jpg",
  description: "The AQ 60V 3A Electric Vehicle Lead-Acid Battery Charger is a powerful and efficient charging solution designed for 60-volt lead-acid batteries in electric vehicles (EVs). Whether you're charging electric scooters, e-bikes, or other battery-powered transportation devices, this charger delivers reliable performance while ensuring maximum battery protection. Built with advanced charging technology, this charger provides consistent voltage and current output, preventing issues such as overcharging and overheating. With a compact design and user-friendly operation, the AQ 60V 3A charger is perfect for both home and professional use, ensuring your electric vehicle remains powered and ready to go."
},

{
  id: "p012",
  category: "EV Lithium ION Chargers",
  name: "Charger Tester for EV Charger",
  price: 435,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p012.jpg",
  description: "ELECTRIC VEHICLE CHARGER TESTER – Accurate Testing for EV Charging Systems. This specialized diagnostic tool measures voltage, current, and power output to verify charger performance. Ideal for EV manufacturers, maintenance professionals, and charging station operators. Provides real-time monitoring, fault detection, and compliance verification."
},

{
  id: "p013",
  category: "EV Lithium ION Chargers",
  name: "FAN OF Li-on EV CHARGER",
  price: 135,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p013.jpg",
  description: "Cooling fan for lithium-ion and lead-acid battery chargers. Designed to provide efficient airflow, improve heat dissipation, extend charger lifespan, and maintain reliable charging performance."
},

{
  id: "p014",
  category: "Controllers & Wires",
  name: "CONT. (SMART) [ALUM 48/60/72V+32A]",
  price: 1790,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p014.jpg",
  description: "High-performance smart aluminum controller compatible with 48V, 60V, and 72V electric scooters. Features smooth acceleration, efficient power management, 32A output, and intelligent protection for improved battery life and vehicle performance."
},

{
  id: "p015",
  category: "Lithium Batteries",
  name: "48V 31.5Ah NMC Series 13S 7P Battery Pack",
  price: 22500,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p015.jpg",
  description: "48V 30Ah NMC Series 13S 7P lithium battery pack designed for electric scooters and EV applications."
},

{
  id: "p016",
  category: "Lithium Batteries",
  name: "72V 30Ah NMC Series 20S 12P Battery Pack",
  price: 32500,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p016.jpg",
  description: "ENVITEK POWER ET-Plus 7230 lithium-ion battery featuring 72V, 30Ah NMC chemistry, advanced BMS, up to 2X faster charging, longer service life, and high-performance power delivery for electric vehicles."
},

{
  id: "p017",
  category: "Lithium Batteries",
  name: "60V 31.5Ah NMC Series 16S Battery Pack",
  price: 27500,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p017.jpg",
  description: "ENVITEK POWER ET-Plus 4830 lithium-ion battery with 60V, 30Ah NMC chemistry, intelligent BMS protection, high energy density, long cycle life, and reliable performance for electric vehicles."
},

{
  id: "p018",
  category: "Miscellaneous",
  name: "FAN OF Li-on EV CHARGER",
  price: 135,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p018.jpg",
  description: "Lead charger cooling fan engineered to provide efficient heat dissipation for lithium-ion and lead-acid battery chargers, helping improve charger performance and reliability."
},

{
  id: "p019",
  category: "Miscellaneous",
  name: "54.6V 15A Lithium Charger for E-Rickshaw",
  price: 3650,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p019.jpg",
  description: "AL 54.6V 15A electric vehicle battery charger designed for 48V (13S) lithium-ion battery packs used in electric bicycles, scooters, and e-rickshaws. Provides safe, efficient charging while extending battery life."
},

{
  id: "p020",
  category: "Miscellaneous",
  name: "TESTING DEVICE",
  price: 580,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p020.jpg",
  description: "Controller testing device for electric scooters. Designed to diagnose BLDC controllers, throttle systems, Hall sensors, and other EV components. Ideal for repair shops, technicians, and EV maintenance."
},
{
  id: "p011",
  category: "EV Lithium ION Chargers",
  name: "60V 3A Lead Acid EV Charger",
  price: 590,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p011.jpg",
  description: "The AQ 60V 3A Electric Vehicle Lead-Acid Battery Charger is a powerful and efficient charging solution designed for 60-volt lead-acid batteries in electric vehicles (EVs). Whether you're charging electric scooters, e-bikes, or other battery-powered transportation devices, this charger delivers reliable performance while ensuring maximum battery protection. Built with advanced charging technology, this charger provides consistent voltage and current output, preventing issues such as overcharging and overheating. With a compact design and user-friendly operation, the AQ 60V 3A charger is perfect for both home and professional use, ensuring your electric vehicle remains powered and ready to go."
},

{
  id: "p012",
  category: "EV Lithium ION Chargers",
  name: "Charger Tester for EV Charger",
  price: 435,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p012.jpg",
  description: "ELECTRIC VEHICLE CHARGER TESTER – Accurate Testing for EV Charging Systems. This specialized diagnostic tool measures voltage, current, and power output to verify charger performance. Ideal for EV manufacturers, maintenance professionals, and charging station operators. Provides real-time monitoring, fault detection, and compliance verification."
},

{
  id: "p013",
  category: "EV Lithium ION Chargers",
  name: "FAN OF Li-on EV CHARGER",
  price: 135,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p013.jpg",
  description: "Cooling fan for lithium-ion and lead-acid battery chargers. Designed to provide efficient airflow, improve heat dissipation, extend charger lifespan, and maintain reliable charging performance."
},

{
  id: "p014",
  category: "Controllers & Wires",
  name: "CONT. (SMART) [ALUM 48/60/72V+32A]",
  price: 1790,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p014.jpg",
  description: "High-performance smart aluminum controller compatible with 48V, 60V, and 72V electric scooters. Features smooth acceleration, efficient power management, 32A output, and intelligent protection for improved battery life and vehicle performance."
},

{
  id: "p015",
  category: "Lithium Batteries",
  name: "48V 31.5Ah NMC Series 13S 7P Battery Pack",
  price: 22500,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p015.jpg",
  description: "48V 30Ah NMC Series 13S 7P lithium battery pack designed for electric scooters and EV applications."
},

{
  id: "p016",
  category: "Lithium Batteries",
  name: "72V 30Ah NMC Series 20S 12P Battery Pack",
  price: 32500,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p016.jpg",
  description: "ENVITEK POWER ET-Plus 7230 lithium-ion battery featuring 72V, 30Ah NMC chemistry, advanced BMS, up to 2X faster charging, longer service life, and high-performance power delivery for electric vehicles."
},

{
  id: "p017",
  category: "Lithium Batteries",
  name: "60V 31.5Ah NMC Series 16S Battery Pack",
  price: 27500,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p017.jpg",
  description: "ENVITEK POWER ET-Plus 4830 lithium-ion battery with 60V, 30Ah NMC chemistry, intelligent BMS protection, high energy density, long cycle life, and reliable performance for electric vehicles."
},

{
  id: "p018",
  category: "Miscellaneous",
  name: "FAN OF Li-on EV CHARGER",
  price: 135,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p018.jpg",
  description: "Lead charger cooling fan engineered to provide efficient heat dissipation for lithium-ion and lead-acid battery chargers, helping improve charger performance and reliability."
},

{
  id: "p019",
  category: "Miscellaneous",
  name: "54.6V 15A Lithium Charger for E-Rickshaw",
  price: 3650,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p019.jpg",
  description: "AL 54.6V 15A electric vehicle battery charger designed for 48V (13S) lithium-ion battery packs used in electric bicycles, scooters, and e-rickshaws. Provides safe, efficient charging while extending battery life."
},

{
  id: "p020",
  category: "Miscellaneous",
  name: "TESTING DEVICE",
  price: 580,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p020.jpg",
  description: "Controller testing device for electric scooters. Designed to diagnose BLDC controllers, throttle systems, Hall sensors, and other EV components. Ideal for repair shops, technicians, and EV maintenance."
},
{
  id: "p031",
  category: "Controllers & Wires",
  name: "IEC MALE CONNECTOR - SPRING CAP WITH WIRE",
  price: 90,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p031.jpg",
  description: "Premium IEC male connector with spring cap and pre-attached wire. Designed for EV chargers, battery charging systems, and industrial electrical equipment, ensuring secure and reliable power connections."
},

{
  id: "p032",
  category: "Controllers & Wires",
  name: "IEC MALE CONNECTOR - SPRING CAP 2MM WIRE",
  price: 90,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p032.jpg",
  description: "Heavy-duty IEC male connector with spring cap and 2mm cable for electric vehicle chargers, battery packs, and power supply applications. Built for long-lasting performance."
},

{
  id: "p033",
  category: "Controllers & Wires",
  name: "IEC SCREW MOUNT MALE CONNECTOR WITH RUBBER COVER",
  price: 25,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p033.jpg",
  description: "Screw-mount IEC male connector with durable rubber protective cover. Suitable for EV charging systems and electrical installations requiring reliable and weather-resistant connections."
},

{
  id: "p034",
  category: "Controllers & Wires",
  name: "AMPR 2+1+5 MALE CAN 8 WIRE - 500MM",
  price: 950,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p034.jpg",
  description: "High-quality AMPR 2+1+5 male CAN connector with 8-wire 500mm harness for EV controllers, BMS, and CAN communication systems."
},

{
  id: "p035",
  category: "Controllers & Wires",
  name: "AMPR 2+1+5 FEMALE CAN SOCKET",
  price: 299,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p035.jpg",
  description: "AMPR 2+1+5 female CAN socket designed for secure communication between EV controllers, battery management systems, and charging components."
},

{
  id: "p036",
  category: "Controllers & Wires",
  name: "MOTOR CABLE 1000W ORANGE",
  price: 360,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p036.jpg",
  description: "1000W orange motor cable engineered for electric scooters and BLDC motors. Provides excellent conductivity, flexibility, and long service life."
},

{
  id: "p037",
  category: "Miscellaneous",
  name: "THROTTLE SUPER DLX (123+R)",
  price: 299,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p037.jpg",
  description: "Premium Super DLX throttle with 123+Reverse functionality for electric scooters and e-rickshaws. Provides smooth acceleration, durable construction, and reliable performance."
},

{
  id: "p038",
  category: "EV Lithium ION Chargers",
  name: "AL 69V 6A Lithium EV Charger for LFP Battery (1 Year Warranty)",
  price: 2450,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p038.jpg",
  description: "69.4V 6A aluminum lithium charger for 60V LFP battery packs with intelligent charging technology, automatic cut-off, and comprehensive safety protection. Includes a 1-year warranty."
},

{
  id: "p039",
  category: "Controllers & Wires",
  name: "SB50 + 3 PIN CHARGING SOCKET",
  price: 225,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p039.jpg",
  description: "SB50 connector with integrated 3-pin charging socket designed for electric scooters, battery packs, charging stations, and industrial power systems."
},

{
  id: "p040",
  category: "Controllers & Wires",
  name: "OKW 2+4 PIN FEMALE CAN SOCKET",
  price: 130,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p040.jpg",
  description: "OKW 2+4 pin female CAN socket for EV communication systems. Suitable for battery management systems, controllers, and electric vehicle wiring applications."
},
{
  id: "p041",
  category: "Miscellaneous",
  name: "ROTOR 10 INCH",
  price: 4200,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p041.jpg",
  description: "ROTOR 10 INCH for Electric Scooter – High-performance motor rotor designed to deliver smooth, efficient, and powerful motor operation. Built for durability and reliable power transmission, making it an essential replacement component for electric scooter motor assemblies."
},

{
  id: "p042",
  category: "Miscellaneous",
  name: "TROTL [ASSY A3 WITH LEVER]",
  price: 1050,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p042.jpg",
  description: "Throttle Assembly A3 with Lever for electric vehicles. Designed for precise speed control, smooth acceleration, quick response, ergonomic handling, and long-lasting durability for electric scooters and e-bikes."
},

{
  id: "p043",
  category: "Miscellaneous",
  name: "MCB 100A BIG",
  price: 350,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p043.jpg",
  description: "100A heavy-duty MCB for electric vehicle electrical systems. Provides reliable protection against overloads and short circuits while ensuring safe power distribution."
},

{
  id: "p044",
  category: "Miscellaneous",
  name: "FLASHER [BOX TYPE]",
  price: 65,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p044.jpg",
  description: "Box-type indicator flasher unit for electric scooters. Ensures consistent turn signal flashing, stable performance, plug-and-play installation, and reliable operation."
},

{
  id: "p045",
  category: "Miscellaneous",
  name: "10A DUAL O/P CONVERTOR",
  price: 320,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p045.jpg",
  description: "10A dual output DC-DC converter with USB support. Converts the main battery voltage into a stable 12V output for lights, horns, accessories, and mobile device charging."
},

{
  id: "p046",
  category: "Miscellaneous",
  name: "DRUM PLATE",
  price: 350,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p046.jpg",
  description: "BSP1 drum brake plate for electric scooters. Designed to provide reliable braking performance, durability, and safe operation under daily riding conditions."
},

{
  id: "p047",
  category: "Miscellaneous",
  name: "DRUM PLATE [BSP130 with HOOK]",
  price: 700,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p047.jpg",
  description: "Premium BSP151 drum brake plate with hook for electric scooters. Offers improved braking efficiency, long service life, and dependable performance."
},

{
  id: "p048",
  category: "EV Lithium ION Chargers",
  name: "AL 67.2V 6A Lithium EV Charger for NMC Battery (1 Year Warranty)",
  price: 2450,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p048.jpg",
  description: "67.2V 6A aluminum lithium-ion battery charger designed for 60V (16S) NMC battery packs. Delivers fast, efficient, and safe charging with advanced protection features and a 1-year warranty."
},

{
  id: "p049",
  category: "Controllers & Wires",
  name: "CONT. (SMART) [ALUM 48/60/72V+32A]",
  price: 1790,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p049.jpg",
  description: "48V/60V/72V 32A smart aluminum controller with wiring support. Designed for electric scooters to provide intelligent power management, smooth acceleration, high efficiency, and enhanced battery life."
},

{
  id: "p050",
  category: "Controllers & Wires",
  name: "SB50 CONNECTOR SET",
  price: 49,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p050.jpg",
  description: "Heavy-duty SB50 connector set for electric vehicles. Provides secure, efficient, and high-current power connections for battery packs, chargers, and industrial electrical applications."
},
{
  id: "p051",
  category: "Controllers & Wires",
  name: "SB50 WITH (12AWG WIRE-150MM)",
  price: 99,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p051.jpg",
  description: "SB50 connector with 150mm 12AWG wire for electric vehicles, lithium battery packs, chargers, and industrial power applications. Provides secure high-current power transmission with excellent durability."
},

{
  id: "p052",
  category: "Controllers & Wires",
  name: "CHARGER I/P CABLE AC WIRE",
  price: 120,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p052.jpg",
  description: "Premium AC input cable for EV battery chargers. Designed for reliable power delivery, durable insulation, and long-lasting performance in electric vehicle charging applications."
},

{
  id: "p053",
  category: "Controllers & Wires",
  name: "AMPR 2+4 FEMALE CAN SOCKET",
  price: 299,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p053.jpg",
  description: "AMPR 2+4 female CAN socket designed for electric vehicle battery management systems, controllers, and CAN communication networks. Ensures stable and secure electrical connectivity."
},

{
  id: "p054",
  category: "Controllers & Wires",
  name: "CONNECTOR [WAGO 2 PIN WHITE]",
  price: 32,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p054.jpg",
  description: "2-pin white WAGO connector for electric vehicles and industrial wiring. Compact design with secure wire locking for reliable electrical connections."
},

{
  id: "p055",
  category: "Controllers & Wires",
  name: "XT60 (MALE + FEMALE)",
  price: 70,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p055.jpg",
  description: "XT60 male and female connector set for lithium batteries, RC systems, electric scooters, and battery charging applications. High-current connector with low resistance."
},

{
  id: "p056",
  category: "Miscellaneous",
  name: "MOTOR 10 INCH 1000W DRUM",
  price: 5400,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p056.jpg",
  description: "1000W 10-inch BLDC drum hub motor designed for electric scooters. Delivers high torque, smooth acceleration, energy efficiency, and reliable long-term performance."
},

{
  id: "p057",
  category: "Miscellaneous",
  name: "FLASHER PENDRIVE 3 PIN",
  price: 60,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p057.jpg",
  description: "3-pin pendrive-type flasher unit for electric scooters. Provides consistent turn signal flashing with compact size, easy installation, and dependable operation."
},

{
  id: "p058",
  category: "EV Lithium ION Chargers",
  name: "AL 54.6V 6A Lithium EV Charger for NMC Battery (6 Months Warranty)",
  price: 1350,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p058.jpg",
  description: "54.6V 6A aluminum lithium charger designed for 48V NMC battery packs. Features intelligent charging, automatic cut-off, short-circuit protection, and efficient heat dissipation."
},

{
  id: "p059",
  category: "EV Lithium ION Chargers",
  name: "Charger Tester for EV Charger",
  price: 435,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p059.jpg",
  description: "Professional EV charger testing device used to measure charger voltage, current, output performance, and diagnose charging faults quickly and accurately."
},

{
  id: "p060",
  category: "EV Lithium ION Chargers",
  name: "Imported 72V 3A Lead Acid EV Charger",
  price: 1190,
  unit: "PCS",
  minQty: 1,
 stock: true,
  image: "images/products/p060.jpg",
  description: "Imported 72V 3A lead-acid battery charger suitable for electric scooters, e-rickshaws, and other electric vehicles. Offers reliable charging with built-in safety protection and durable construction."
},
{
  id: "p061",
  category: "Controllers & Wires",
  name: "MOTOR CABLE 1500W ORANGE",
  price: 420,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p061.jpg",
  description: "Heavy-duty 1500W orange motor cable designed for BLDC hub motors used in electric scooters and e-rickshaws. Offers high conductivity, heat resistance, flexibility, and long-lasting performance."
},

{
  id: "p062",
  category: "Controllers & Wires",
  name: "MOTOR CABLE 2000W ORANGE",
  price: 480,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p062.jpg",
  description: "Premium 2000W orange motor cable for high-power electric vehicle motors. Built for efficient power transmission, durability, and reliable operation under demanding conditions."
},

{
  id: "p063",
  category: "Controllers & Wires",
  name: "BATTERY INTERCONNECT CABLE",
  price: 180,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p063.jpg",
  description: "High-quality battery interconnect cable for lithium battery packs and EV power systems. Ensures low resistance, stable current flow, and secure electrical connections."
},

{
  id: "p064",
  category: "Controllers & Wires",
  name: "BATTERY TERMINAL CABLE",
  price: 150,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p064.jpg",
  description: "Durable battery terminal cable suitable for electric scooters, lithium battery packs, and EV electrical systems. Designed for safe and efficient power transfer."
},

{
  id: "p065",
  category: "Controllers & Wires",
  name: "3 PIN CHARGING SOCKET",
  price: 120,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p065.jpg",
  description: "3-pin charging socket for electric scooters and lithium battery charging systems. Features durable construction, secure fitment, and reliable electrical contact."
},

{
  id: "p066",
  category: "Controllers & Wires",
  name: "CHARGING SOCKET WITH CAP",
  price: 165,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p066.jpg",
  description: "Charging socket with protective cap for electric vehicles. Designed to protect against dust and moisture while providing a secure charging connection."
},

{
  id: "p067",
  category: "Miscellaneous",
  name: "DC TO DC CONVERTER 72V TO 12V",
  price: 550,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p067.jpg",
  description: "72V to 12V DC-DC converter for electric vehicles. Provides stable voltage output for lights, horn, indicators, and other low-voltage accessories."
},

{
  id: "p068",
  category: "Miscellaneous",
  name: "DC TO DC CONVERTER 60V TO 12V",
  price: 520,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p068.jpg",
  description: "60V to 12V DC-DC converter engineered for electric scooters and e-rickshaws. Delivers efficient voltage conversion with overload and short-circuit protection."
},

{
  id: "p069",
  category: "EV Lithium ION Chargers",
  name: "84V 6A Lithium EV Charger",
  price: 2650,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p069.jpg",
  description: "84V 6A lithium-ion battery charger designed for 72V battery packs. Features intelligent charging, automatic cut-off, over-voltage protection, and efficient cooling for safe operation."
},

{
  id: "p070",
  category: "Lithium Batteries",
  name: "72V 45Ah Lithium Battery Pack",
  price: 44500,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p070.jpg",
  description: "72V 45Ah lithium-ion battery pack with integrated Battery Management System (BMS). Provides high energy density, extended cycle life, fast charging capability, and reliable performance for electric vehicles."
},
{
  id: "p071",
  category: "Miscellaneous",
  name: "CONNECTOR [WAGO 3 PIN WHITE]",
  price: 35,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p071.jpg",
  description: "WAGO 3 PIN WHITE CONNECTOR – Reliable & Efficient Electrical Connector. The WAGO 3 PIN WHITE CONNECTOR is a versatile, compact, and high-performance connector, ideal for electric vehicles (EVs), power distribution, and industrial applications. It offers quick installation and secure connections through its push-in technology, making it the preferred choice for professionals who need reliable, durable, and easy-to-use connectors for complex wiring systems."
},

{
  id: "p072",
  category: "Miscellaneous",
  name: "MOTOR HRO OPTMA 16*2.5",
  price: 7500,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p072.jpg",
  description: "MOTOR HERO OPTIMA 12 INCH for Electric Scooter – High-Performance BLDC Hub Motor. Upgrade your electric scooter with the MOTOR HERO OPTIMA 12 INCH, a powerful and efficient Brushless DC (BLDC) hub motor designed to deliver superior performance and durability. This motor is engineered for Hero Optima electric scooters, ensuring smooth acceleration, high torque, and efficient energy consumption."
},

{
  id: "p073",
  category: "Miscellaneous",
  name: "MCB 63A WHITE",
  price: 130,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p073.jpg",
  description: "MCB 63A WHITE – Reliable 63A Miniature Circuit Breaker for Electric Scooters."
},

{
  id: "p074",
  category: "Miscellaneous",
  name: "10A BLACK with LIGHT FUSE CONVERTOR",
  price: 220,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p074.jpg",
  description: "10A Black Converter with Light Fuse for Electric Scooter – Efficient Power Conversion & Charging. This high-quality DC-DC converter steps down the voltage from the scooter's main battery to a stable 12V output, ensuring reliable power for headlights, taillights, horns, and instrument panels."
},

{
  id: "p075",
  category: "Miscellaneous",
  name: "DRUM PLATE TUWL",
  price: 370,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p075.jpg",
  description: "DRUM PLATE BSP2 for Electric Scooter – High-Performance & Durable. Premium replacement brake component designed to provide consistent braking performance and long-lasting reliability."
},

{
  id: "p076",
  category: "Miscellaneous",
  name: "DRUM PLATE [BSP3]",
  price: 350,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p076.jpg",
  description: "DRUM PLATE BSP3 for Electric Scooter – High-Performance & Durable. Designed to enhance the scooter's braking system with dependable stopping power and durability."
},

{
  id: "p077",
  category: "Miscellaneous",
  name: "BRAKESHOE ERIK 160 MM YC OK",
  price: 120,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p077.jpg",
  description: "BRAKESHOE ERIK 160MM YC OK – High-Performance Drum Brake Shoe for Electric Scooters. Premium replacement brake shoe offering superior stopping power and extended service life."
},

{
  id: "p078",
  category: "Miscellaneous",
  name: "Charger Tester for EV Charger",
  price: 435,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p078.jpg",
  description: "ELECTRIC VEHICLE CHARGER TESTER – Accurate Testing for EV Charging Systems. A specialized diagnostic tool that measures voltage, current, and power output to verify EV charger performance, detect faults, and ensure compliance with charging standards."
},

{
  id: "p079",
  category: "Miscellaneous",
  name: "[IMPORTED 72V+3A] LEAD EV CHARGER",
  price: 1190,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p079.jpg",
  description: "PERCENT 72V 3A Electric Vehicle Lead-Acid Battery Charger. A high-quality and efficient charging solution designed specifically for 72V lead-acid battery systems used in electric scooters, e-bikes, and other electric vehicles."
},

{
  id: "p080",
  category: "Controllers & Wires",
  name: "IEC CABLE MOUNT MALE CONNECTER",
  price: 70,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p080.jpg",
  description: "3 PIN MOUNT MALE Connector – High-Performance Electrical Connector."
},
{
  id: "p081",
  category: "Controllers & Wires",
  name: "CHARGING PLUG CP1 L-TYPE",
  price: 70,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p081.jpg",
  description: "CHARGING PLUG CP1 L-TYPE CONNECTOR – Efficient & Durable Charging Solution. The CHARGING PLUG CP1 L-TYPE CONNECTOR is a high-quality right-angle charging connector designed for electric vehicles, battery chargers, and industrial applications. It provides a secure connection, reliable current transfer, and long service life."
},

{
  id: "p082",
  category: "Controllers & Wires",
  name: "XT90 CONNECTOR (MALE+FEMALE)",
  price: 85,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p082.jpg",
  description: "CONNECTOR XT90 – High-Performance Anti-Spark Power Connector. Designed for high-current applications including lithium battery packs, EVs, and charging systems, ensuring safe and efficient power transmission."
},

{
  id: "p083",
  category: "Controllers & Wires",
  name: "SRXL 3 PIN FEM SOCKET METAL",
  price: 50,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p083.jpg",
  description: "SOCKET SRXL 3 Pin Female Metal – High-Quality and Durable Connector. Ideal for electric scooters, battery systems, and industrial electrical applications requiring secure and reliable connections."
},

{
  id: "p084",
  category: "Controllers & Wires",
  name: "SRXL 3 PIN FEM SOCKET",
  price: 25,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p084.jpg",
  description: "SOCKET SRXL 3 Pin Female Plastic – Reliable and Durable Connector. Engineered for dependable electrical connectivity in electric vehicles and charging applications."
},

{
  id: "p085",
  category: "Miscellaneous",
  name: "MCB 40A",
  price: 120,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p085.jpg",
  description: "MCB 40A – Reliable 40A Miniature Circuit Breaker for Electric Scooters."
},

{
  id: "p086",
  category: "Miscellaneous",
  name: "HORN IMPORTED PREMIUM WITH BOX",
  price: 135,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p086.jpg",
  description: "Imported premium electric vehicle horn supplied with box. Designed to deliver loud, clear sound, reliable performance, and long-lasting durability for electric scooters and e-rickshaws."
},

{
  id: "p087",
  category: "Miscellaneous",
  name: "10A CYOK CONVERTOR",
  price: 150,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p087.jpg",
  description: "10A CYOK Converter for Electric Scooter – Efficient Power Conversion & Charging. Converts the main battery voltage into a stable output for lights, horn, and other electrical accessories."
},

{
  id: "p088",
  category: "EV Lithium ION Chargers",
  name: "48V 3A Lead Acid EV Charger",
  price: 590,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p088.jpg",
  description: "PERCENT 48V 3A Electric Vehicle Lead-Acid Battery Charger. Designed for safe and efficient charging of 48V lead-acid batteries used in electric scooters, e-bikes, and other electric vehicles."
},

{
  id: "p089",
  category: "Lithium Batteries",
  name: "72V 30Ah NMC Series 20S 12P Battery Pack",
  price: 32500,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p089.jpg",
  description: "ENVITEK POWER 72V 30Ah NMC lithium-ion battery pack with advanced Battery Management System (BMS), high energy density, long cycle life, fast charging capability, and reliable performance for electric vehicles."
},

{
  id: "p090",
  category: "Controllers & Wires",
  name: "CONNECTOR [SOCKET L-TYPE FEM]",
  price: 95,
  unit: "PCS",
  minQty: 1,
  stock: true,
  image: "images/products/p090.jpg",
  description: "SOCKET L-TYPE FEMALE CONNECTOR – High-Quality Right-Angle Connector for electric vehicle charging systems and electrical wiring applications."
},

]
};