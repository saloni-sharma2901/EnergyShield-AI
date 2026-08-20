import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Corridor from '../models/Corridor.js';
import Refinery from '../models/Refinery.js';
import RiskAlert from '../models/RiskAlert.js';
import ProcurementRoute from '../models/ProcurementRoute.js';
import Scenario from '../models/Scenario.js';

dotenv.config();

const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/energyshield';

const seedCorridors = [
  {
    name: 'Strait of Hormuz',
    code: 'hormuz',
    riskScore: 25,
    description: 'World\'s most important oil transit chokepoint, carrying 40-45% of India\'s crude imports from Iraq, Saudi Arabia, UAE, and Kuwait.',
    status: 'Open',
    dailyVolumeMBPD: 18.5
  },
  {
    name: 'Bab-el-Mandeb & Red Sea Route',
    code: 'red_sea',
    riskScore: 65,
    description: 'Crucial sea lane connecting European/Russian ports to India. Highly active threat environment due to regional conflicts.',
    status: 'Partially Closed',
    dailyVolumeMBPD: 6.2
  },
  {
    name: 'Malacca Strait',
    code: 'malacca',
    riskScore: 12,
    description: 'Primary corridor for trade between the Indian Ocean and East Asia. Key bottleneck for refined product exports.',
    status: 'Open',
    dailyVolumeMBPD: 1.5
  },
  {
    name: 'Cape of Good Hope Bypass Route',
    code: 'cape_bypass',
    riskScore: 5,
    description: 'Long-distance alternative routing bypassing the Suez Canal/Red Sea entirely. High cost but low geopolitical risk.',
    status: 'Open',
    dailyVolumeMBPD: 2.0
  }
];

const seedRefineries = [
  {
    name: 'Jamnagar Refinery (Reliance)',
    location: 'Gujarat',
    capacityMBPD: 1.24,
    currentRunRate: 100,
    type: 'Private',
    crudeCompatibility: ['Sweet', 'Sour', 'Heavy', 'Light']
  },
  {
    name: 'Vadinar Refinery (Nayara)',
    location: 'Gujarat',
    capacityMBPD: 0.40,
    currentRunRate: 98,
    type: 'Private',
    crudeCompatibility: ['Sour', 'Heavy', 'Light']
  },
  {
    name: 'Kochi Refinery (BPCL)',
    location: 'Kerala',
    capacityMBPD: 0.31,
    currentRunRate: 96,
    type: 'PSU',
    crudeCompatibility: ['Sweet', 'Sour', 'Light']
  },
  {
    name: 'Paradip Refinery (IOCL)',
    location: 'Odisha',
    capacityMBPD: 0.30,
    currentRunRate: 95,
    type: 'PSU',
    crudeCompatibility: ['Sour', 'Heavy']
  },
  {
    name: 'Mangalore Refinery (MRPL)',
    location: 'Karnataka',
    capacityMBPD: 0.30,
    currentRunRate: 92,
    type: 'PSU',
    crudeCompatibility: ['Sweet', 'Sour', 'Light']
  },
  {
    name: 'Bathinda Refinery (HMEL)',
    location: 'Punjab',
    capacityMBPD: 0.22,
    currentRunRate: 97,
    type: 'Joint Venture',
    crudeCompatibility: ['Sour', 'Heavy']
  }
];

const seedRoutes = [
  {
    sourceCountry: 'Saudi Arabia (Ras Tanura)',
    destinationPort: 'Jamnagar',
    transitDays: 4,
    costPerBarrel: 78.5,
    riskScore: 15,
    availability: true,
    crudeGrade: 'Arab Light'
  },
  {
    sourceCountry: 'Saudi Arabia (Ras Tanura)',
    destinationPort: 'Jamnagar',
    transitDays: 24,
    costPerBarrel: 88.0,
    riskScore: 5,
    availability: true,
    crudeGrade: 'Arab Light',
    alternativeRouteName: 'Cape of Good Hope Bypass'
  },
  {
    sourceCountry: 'Iraq (Basra)',
    destinationPort: 'Kochi',
    transitDays: 5,
    costPerBarrel: 74.0,
    riskScore: 20,
    availability: true,
    crudeGrade: 'Basra Medium'
  },
  {
    sourceCountry: 'Russia (Primorsk)',
    destinationPort: 'Jamnagar',
    transitDays: 22,
    costPerBarrel: 64.2,
    riskScore: 70,
    availability: true,
    crudeGrade: 'Urals',
    alternativeRouteName: 'Red Sea / Suez Canal Route'
  },
  {
    sourceCountry: 'Russia (Primorsk)',
    destinationPort: 'Jamnagar',
    transitDays: 38,
    costPerBarrel: 73.8,
    riskScore: 10,
    availability: true,
    crudeGrade: 'Urals',
    alternativeRouteName: 'Cape of Good Hope Bypass'
  },
  {
    sourceCountry: 'Nigeria (Bonny Terminal)',
    destinationPort: 'Paradip',
    transitDays: 18,
    costPerBarrel: 83.5,
    riskScore: 12,
    availability: true,
    crudeGrade: 'Bonny Light'
  },
  {
    sourceCountry: 'United Arab Emirates (Jebel Ali)',
    destinationPort: 'Mangalore',
    transitDays: 3,
    costPerBarrel: 79.8,
    riskScore: 18,
    availability: true,
    crudeGrade: 'Murban'
  }
];

const seedAlerts = [
  {
    source: 'Reuters / Maritime News',
    title: 'Iran increases naval patrols in Strait of Hormuz amid rising regional tensions',
    content: 'The Iranian Revolutionary Guard Corps (IRGC) has deployed additional fast attack craft and conducted surveillance exercises near the oil shipping lanes of the Strait of Hormuz. Tankers have been advised to keep a heightened lookout.',
    severity: 'Medium',
    category: 'Geopolitical',
    impactScore: 5.5,
    timestamp: new Date(Date.now() - 3600000 * 2) // 2 hours ago
  },
  {
    source: 'UKMTO (UK Maritime Trade Operations)',
    title: 'Red Sea: Drone attack reported 50NM West of Al Hudaydah',
    content: 'A commercial oil tanker operating under a flags-of-convenience register was targeted by an explosive drone. Minor damage reported to secondary superstructure; crew is safe, vessel is proceeding at full speed. Incident has raised insurance premiums in the Bab-el-Mandeb.',
    severity: 'High',
    category: 'Shipping',
    impactScore: 8.2,
    timestamp: new Date(Date.now() - 3600000 * 12) // 12 hours ago
  },
  {
    source: 'OPEC Secretariat',
    title: 'OPEC+ countries agree to extend voluntary supply cuts of 1.6M bpd through Q4',
    content: 'Eight member nations led by Saudi Arabia and Russia have confirmed that current voluntary cuts will remain in place to stabilize physical global spot crude markets. Analysts predict immediate pressure on Brent spot index pricing.',
    severity: 'High',
    category: 'Market',
    impactScore: 7.0,
    timestamp: new Date(Date.now() - 3600000 * 24) // 1 day ago
  },
  {
    source: 'Indian Ministry of Power',
    title: 'Strategic Petroleum Reserves (SPR) audit lists inventory cover at 9.5 days',
    content: 'Official government audits verify that India\'s subterranean reserves at Visakhapatnam, Mangalore, and Padur remain fully stocked. In the event of a severe supply choke, these reserves can bridge short-term domestic gaps for import-dependent refiners.',
    severity: 'Low',
    category: 'Market',
    impactScore: 2.0,
    timestamp: new Date(Date.now() - 3600000 * 48) // 2 days ago
  }
];

const seedDB = async () => {
  try {
    console.log('Connecting to database...');
    await mongoose.connect(mongoURI);
    console.log('Database connected. Clearing old data...');

    await Corridor.deleteMany({});
    await Refinery.deleteMany({});
    await ProcurementRoute.deleteMany({});
    await RiskAlert.deleteMany({});
    await Scenario.deleteMany({});

    console.log('Inserting Corridors...');
    await Corridor.insertMany(seedCorridors);

    console.log('Inserting Refineries...');
    await Refinery.insertMany(seedRefineries);

    console.log('Inserting Routes...');
    await ProcurementRoute.insertMany(seedRoutes);

    console.log('Inserting Risk Alerts...');
    await RiskAlert.insertMany(seedAlerts);

    console.log('Database seeding completed successfully!');
    mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDB();
