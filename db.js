// ============================================================
//  ARB ACCESSORIES — PRODUCT DATABASE
//  Edit this file to add/remove/update products & categories
// ============================================================

const DB = {
  categories: [
    { id: "cell",            label: "Cell" },
    { id: "lithium-pack",   label: "Lithium Battery Pack" },
    { id: "pack-nmc",       label: "Battery Pack NMC" },
    { id: "testers",        label: "Battery Testers" },
    { id: "spot-welding",   label: "Spot Welding Machine" },
    { id: "testing",        label: "Testing Machine" },
    { id: "automatic",      label: "Automatic Machines" },
    { id: "inverter",       label: "Inverter Part" },
    { id: "balancer",       label: "Balancer (Machine)" },
    { id: "nickel",         label: "Nickel Remover Machine" },
    { id: "daily",          label: "Daily B" },
  ],

  products: [
    // ── CELLS ─────────────────────────────────────────────
    {
      id: "p001",
      category: "cell",
      name: "LITHIUM-ION CELL 2600 mAh DMEGC 18650 (02e4)",
      price: 85,
      unit: "PCS",
      minQty: 200,
      stock: false,
      image: "https://via.placeholder.com/80x80/1a1a2e/00d4ff?text=18650",
      description: "High-quality 18650 cylindrical lithium-ion cell, 2600 mAh capacity.",
    },
    {
      id: "p002",
      category: "cell",
      name: "LITHIUM-ION CELL 2900 mAh DMEGC 18650 (7946)",
      price: 92,
      unit: "PCS",
      minQty: 200,
      stock: true,
      image: "https://via.placeholder.com/80x80/1a1a2e/00d4ff?text=18650",
      description: "High-capacity 18650 cylindrical cell, 2900 mAh.",
    },
    {
      id: "p003",
      category: "cell",
      name: "LITHIUM-ION CELL 3000 mAh Samsung 18650 (30B)",
      price: 110,
      unit: "PCS",
      minQty: 100,
      stock: true,
      image: "https://via.placeholder.com/80x80/1a1a2e/00d4ff?text=Samsung",
      description: "Samsung genuine 18650 3000 mAh cell.",
    },
    {
      id: "p004",
      category: "cell",
      name: "LITHIUM-ION CELL 3200 mAh LG 21700",
      price: 145,
      unit: "PCS",
      minQty: 100,
      stock: true,
      image: "https://via.placeholder.com/80x80/1a1a2e/00d4ff?text=21700",
      description: "LG 21700 high-drain cell, 3200 mAh.",
    },

    // ── LITHIUM BATTERY PACKS ──────────────────────────────
    {
      id: "p005",
      category: "lithium-pack",
      name: "36V 10Ah Lithium Battery Pack (E-Bike)",
      price: 4500,
      unit: "PCS",
      minQty: 5,
      stock: true,
      image: "https://via.placeholder.com/80x80/1a1a2e/00d4ff?text=36V",
      description: "36V 10Ah pack suitable for e-bikes and scooters.",
    },
    {
      id: "p006",
      category: "lithium-pack",
      name: "48V 20Ah Lithium Battery Pack",
      price: 9200,
      unit: "PCS",
      minQty: 3,
      stock: true,
      image: "https://via.placeholder.com/80x80/1a1a2e/00d4ff?text=48V",
      description: "48V 20Ah high-capacity lithium pack with BMS.",
    },
    {
      id: "p007",
      category: "lithium-pack",
      name: "72V 30Ah Lithium Battery Pack",
      price: 18500,
      unit: "PCS",
      minQty: 2,
      stock: false,
      image: "https://via.placeholder.com/80x80/1a1a2e/00d4ff?text=72V",
      description: "72V 30Ah pack for high-power electric vehicles.",
    },

    // ── BATTERY PACK NMC ──────────────────────────────────
    {
      id: "p008",
      category: "pack-nmc",
      name: "NMC 48V 15Ah Battery Pack",
      price: 7800,
      unit: "PCS",
      minQty: 3,
      stock: true,
      image: "https://via.placeholder.com/80x80/1a1a2e/00d4ff?text=NMC",
      description: "NMC chemistry 48V 15Ah, high energy density.",
    },
    {
      id: "p009",
      category: "pack-nmc",
      name: "NMC 60V 20Ah Battery Pack",
      price: 12500,
      unit: "PCS",
      minQty: 2,
      stock: true,
      image: "https://via.placeholder.com/80x80/1a1a2e/00d4ff?text=NMC60",
      description: "NMC 60V 20Ah premium pack with smart BMS.",
    },

    // ── BATTERY TESTERS ────────────────────────────────────
    {
      id: "p010",
      category: "testers",
      name: "Battery Pack Tester DSF20 (9-99V / 10-20A)",
      price: 22598,
      unit: "PCS",
      minQty: 1,
      stock: true,
      image: "https://via.placeholder.com/80x80/1a1a2e/00d4ff?text=DSF20",
      description: "Li-Ion / Lead-Acid battery pack charge discharge tester. Range: 9–99V, 10–20A.",
    },
    {
      id: "p011",
      category: "testers",
      name: "Cell Capacity Tester (18650/21700)",
      price: 3200,
      unit: "PCS",
      minQty: 1,
      stock: true,
      image: "https://via.placeholder.com/80x80/1a1a2e/00d4ff?text=CT",
      description: "8-channel cell capacity tester for 18650/21700 cells.",
    },

    // ── SPOT WELDING MACHINES ──────────────────────────────
    {
      id: "p012",
      category: "spot-welding",
      name: "Spot Welder Machine 788H (Hand-held)",
      price: 5500,
      unit: "PCS",
      minQty: 1,
      stock: true,
      image: "https://via.placeholder.com/80x80/1a1a2e/00d4ff?text=788H",
      description: "Portable hand-held battery spot welding machine with digital display.",
    },
    {
      id: "p013",
      category: "spot-welding",
      name: "Automatic Spot Welder Machine (Bench-top)",
      price: 18000,
      unit: "PCS",
      minQty: 1,
      stock: false,
      image: "https://via.placeholder.com/80x80/1a1a2e/00d4ff?text=SPOT",
      description: "Bench-top automatic spot welder for production lines.",
    },

    // ── TESTING MACHINES ───────────────────────────────────
    {
      id: "p014",
      category: "testing",
      name: "Internal Resistance Tester (HIOKI BT3562)",
      price: 45000,
      unit: "PCS",
      minQty: 1,
      stock: true,
      image: "https://via.placeholder.com/80x80/1a1a2e/00d4ff?text=HIOKI",
      description: "Professional internal resistance meter for battery QC.",
    },

    // ── AUTOMATIC MACHINES ─────────────────────────────────
    {
      id: "p015",
      category: "automatic",
      name: "Automatic Cell Sorting Machine",
      price: 85000,
      unit: "PCS",
      minQty: 1,
      stock: true,
      image: "https://via.placeholder.com/80x80/1a1a2e/00d4ff?text=SORT",
      description: "Automated cell grading and sorting by voltage/IR.",
    },

    // ── INVERTER PARTS ─────────────────────────────────────
    {
      id: "p016",
      category: "inverter",
      name: "MPPT Solar Charge Controller 60A 48V",
      price: 3200,
      unit: "PCS",
      minQty: 5,
      stock: true,
      image: "https://via.placeholder.com/80x80/1a1a2e/00d4ff?text=MPPT",
      description: "60A MPPT controller for 48V solar + battery systems.",
    },

    // ── BALANCER ───────────────────────────────────────────
    {
      id: "p017",
      category: "balancer",
      name: "Active Cell Balancer Module 4S–24S",
      price: 1800,
      unit: "PCS",
      minQty: 10,
      stock: true,
      image: "https://via.placeholder.com/80x80/1a1a2e/00d4ff?text=BAL",
      description: "Active balancer for lithium battery packs, 4S–24S.",
    },

    // ── NICKEL REMOVER ─────────────────────────────────────
    {
      id: "p018",
      category: "nickel",
      name: "Nickel Strip Remover Machine (Auto)",
      price: 12000,
      unit: "PCS",
      minQty: 1,
      stock: false,
      image: "https://via.placeholder.com/80x80/1a1a2e/00d4ff?text=NICK",
      description: "Automated nickel strip removal machine for battery recycling.",
    },
  ]
};
