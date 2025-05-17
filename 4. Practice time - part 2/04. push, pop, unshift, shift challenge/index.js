let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// You need to help me fixup the largeCountries array so that
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

// Remove the country from the beginning
largeCountries.shift();

// Add the country at the beginning
largeCountries.unshift("China");

// Remove the country from the end
largeCountries.pop();

// Add the country at the end
largeCountries.push("Pakistan");

console.log(largeCountries);
