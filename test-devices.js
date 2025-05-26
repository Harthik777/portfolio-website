#!/usr/bin/env node

/**
 * Device Testing Script
 * This script tests the portfolio website on various device types
 * and reports performance metrics.
 */

// Imports
const { exec } = require('child_process');
const readline = require('readline');

// Create interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Device profiles to test
const deviceProfiles = [
  {
    name: 'Mobile (Low-end)',
    width: 320,
    height: 568,
    deviceScaleFactor: 2,
    mobile: true,
    userAgent: 'Mozilla/5.0 (Linux; Android 4.4.2; Nexus 4 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36'
  },
  {
    name: 'Mobile (Mid-range)',
    width: 375,
    height: 667,
    deviceScaleFactor: 2,
    mobile: true,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
  },
  {
    name: 'Mobile (High-end)',
    width: 390,
    height: 844,
    deviceScaleFactor: 3,
    mobile: true,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1'
  },
  {
    name: 'Tablet',
    width: 768,
    height: 1024,
    deviceScaleFactor: 2,
    mobile: true,
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1'
  },
  {
    name: 'Desktop (Low-end)',
    width: 1280,
    height: 720,
    deviceScaleFactor: 1,
    mobile: false,
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  },
  {
    name: 'Desktop (High-end)',
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1,
    mobile: false,
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Safari/605.1.15'
  }
];

// Display the available device profiles
console.log('Available device profiles to test:');
deviceProfiles.forEach((profile, index) => {
  console.log(`${index + 1}. ${profile.name} (${profile.width}x${profile.height})`);
});
console.log('7. Test all profiles');
console.log('8. Exit');

// Function to run tests for a specific device profile
function runTestForProfile(profile) {
  console.log(`\nTesting on ${profile.name} (${profile.width}x${profile.height})...`);
  
  // Build the command to launch Chrome with the specified device profile
  const chromeFlags = [
    `--window-size=${profile.width},${profile.height}`,
    `--user-agent="${profile.userAgent}"`,
    '--incognito',
    '--disable-extensions',
    profile.mobile ? '--enable-features=TouchEventFeatureDetection' : '',
    `--user-data-dir="./chrome-test-profile-${profile.name.replace(/\s+/g, '-').toLowerCase()}"`,
    'http://localhost:3000'
  ];
  
  const startChrome = process.platform === 'win32'
    ? `start chrome ${chromeFlags.join(' ')}`
    : process.platform === 'darwin'
      ? `open -a "Google Chrome" --args ${chromeFlags.join(' ')}`
      : `google-chrome ${chromeFlags.join(' ')}`;
  
  console.log(`\nLaunching Chrome with the ${profile.name} profile...`);
  console.log('Please check the browser window that opens and assess performance.');
  console.log('Close the browser window when done to continue testing.\n');
  
  exec(startChrome, (error) => {
    if (error) {
      console.error(`Error launching Chrome: ${error.message}`);
      askForNextTest();
      return;
    }
    
    // Wait for the user to close the browser window
    console.log('Waiting for browser to close...');
  });
  
  // Set a timeout to ask for the next test after a while
  setTimeout(() => {
    askForNextTest();
  }, 45000); // 45 seconds should be enough to test
}

// Function to ask which profile to test next
function askForNextTest() {
  rl.question('\nEnter the number of the device profile to test (or 8 to exit): ', (answer) => {
    const choice = parseInt(answer, 10);
    
    if (choice === 8) {
      console.log('Exiting...');
      rl.close();
      return;
    }
    
    if (choice === 7) {
      console.log('\nTesting all profiles sequentially...');
      testAllProfiles(0);
      return;
    }
    
    if (choice >= 1 && choice <= deviceProfiles.length) {
      runTestForProfile(deviceProfiles[choice - 1]);
    } else {
      console.log('Invalid choice. Please try again.');
      askForNextTest();
    }
  });
}

// Function to test all profiles sequentially
function testAllProfiles(index) {
  if (index >= deviceProfiles.length) {
    console.log('\nAll tests completed!');
    askForNextTest();
    return;
  }
  
  runTestForProfile(deviceProfiles[index]);
  
  // Set a timeout to test the next profile
  setTimeout(() => {
    testAllProfiles(index + 1);
  }, 60000); // 60 seconds per profile
}

// Start the test process
askForNextTest();
