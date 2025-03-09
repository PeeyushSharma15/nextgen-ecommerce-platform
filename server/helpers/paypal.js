const paypal = require("paypal-rest-sdk");

// Replace these placeholders with your actual credentials
paypal.configure({
  mode: "sandbox", // Use "sandbox" for testing or "live" for production
  client_id: "AWce70_jmXNibTFei4LsowXbjpiFNTLNrQybbqYosTWIQ8Cop3l4bgexD6dmE8fSFIi-z8GLxvGrUT_R", // Replace with your PayPal client ID
  client_secret: "EKhC38O8FhU2weNRxeS7e_vQ1aUqbMK7DVNtlbRW-zDcZhweyndG6qfzodFwiO10vJk_ufpYA0a7uA1X", // Replace with your PayPal client secret
});

module.exports = paypal;
