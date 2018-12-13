/* eslint-disable no-console */
const admin = require('firebase-admin')
var serviceAccount = require('./britecore-codingtest-key.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})
var db = admin.firestore()

const csv = require("fast-csv")

csv
  .fromPath("./PaymentsData-Worksheet.csv")
  .on("data", function (data) {
    if (data[0] !== 'ID') {
      db.collection('payments').doc(data[0]).set({
        id: data[0],
        name: data[1],
        description: data[2],
        date: data[3],
        amount: data[4]
      })
    }
  })
  .on("end", function(){
   console.log("done")
  })
